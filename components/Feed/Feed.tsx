import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Tweet } from "../../typings";
import TweetBox from "../TweetBox/TweetBox";
import TweetComponent from "../Tweet/TweetComponent";
import fetchTweets from "../../utils/fetchTweets";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

export default function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);
  console.log(tweets);

  const refreshTweets = async () => {
    const loading = toast.loading("Loading...");
    const tweets = await fetchTweets();
    setTweets(tweets);
    toast.success("Success", { id: loading });
  };

  return (
    <section className="col-span-7 p-3 overflow-auto md:col-span-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Home</h3>
        <ArrowPathIcon
          className="w-7 cursor-pointer hover:rotate-180 active:scale-125 hover:text-twitter ease-in-out duration-300"
          onClick={refreshTweets}
        />
      </div>
      <TweetBox />
      <div>
        {tweets.map((tweet) => {
          return <TweetComponent key={tweet._id} tweet={tweet} />;
        })}
      </div>
    </section>
  );
}
