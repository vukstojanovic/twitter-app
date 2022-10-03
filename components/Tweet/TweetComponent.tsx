import TimeAgo from "react-timeago";
import {
  ChatBubbleLeftRightIcon,
  ArrowsRightLeftIcon,
  ArrowUpTrayIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import React, { FormEvent, useEffect, useState } from "react";
import { Tweet, Comment, CommentBody } from "../../typings";
import { fetchComments } from "../../utils/fetchComments";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface Props {
  tweet: Tweet;
}

function TweetComponent({ tweet }: Props) {
  const [comments, setComments] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [showComment, setShowComment] = useState(false);
  const { data: session } = useSession();

  const getComments = async () => {
    const comments = await fetchComments(tweet._id);
    setComments(comments);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const pending = toast.loading("Posting comment...");
    const comment: CommentBody = {
      comment: input,
      tweetId: tweet._id,
      username: session?.user?.name || "Unknown user",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
    };
    const result = await fetch("/api/addComment", {
      body: JSON.stringify(comment),
      method: "POST",
    });
    console.log("WOOHOO we made it", result);
    toast.success("Comment sent.", { id: pending });

    setInput("");
    setShowComment(false);
    getComments();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="flex flex-col space-x-3 border-y bordrer-gray-100 p-5">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className=" text-sm text-gray-500 sm:in line">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()}{" "}
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p>{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between mb-2">
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <ChatBubbleLeftRightIcon
              className="w-5 cursor-pointer"
              onClick={() => session && setShowComment(true)}
            />
            <p>{comments.length}</p>
          </div>
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <ArrowsRightLeftIcon className="w-5 cursor-pointer" />
          </div>
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <HeartIcon className="w-5 cursor-pointer" />
          </div>
          <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
            <ArrowUpTrayIcon className="w-5 cursor-pointer" />
          </div>
        </div>
        {showComment && (
          <form
            onSubmit={handleSubmit}
            className="flex items-center my-2 space-x-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Write a comment..."
              className="placeholder:text-gray-400 outline-none flex-1 p-2"
            />
            <button
              className="text-twitter disabled:text-gray-400"
              disabled={!input}
            >
              Post
            </button>
          </form>
        )}
      </div>
      {comments?.length > 0 && (
        <div>
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="relative flex space-x-2 my-3 ml-3"
            >
              <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
              <img
                src={comment.profileImg}
                alt=""
                className="mt-2 h-7 w-7 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    @{comment.username.replace(/\s+/g, "").toLowerCase()}
                  </p>
                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TweetComponent;
