import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Tweet } from "../../typings";
import TweetBox from "../TweetBox/TweetBox";
import TweetComponent from "../Tweet/Tweet";
import toast from "react-hot-toast";
import { useState } from "react";
import fetchTweets from "../../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

export default function Feed({ tweets }: Props) {
  const [tweetsState, setTweetsState] = useState(tweets);
  const tweetData = {
    text: "This is a DEMO TWEET",
    username: "Sonny Sangha",
    profileImg:
      "https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg",
    image:
      "https://downloadly.ir/wp-content/uploads/2021/06/Zero-to-Full-Stack-Hero.jpg",
    _createdAt: new Date(),
  };

  async function refreshTweets() {
    const pending = toast.loading("Loading...");
    const response = await fetchTweets();
    setTweetsState(response);
    toast.success("Success yaay!!!", { id: pending });
  }

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
      <TweetComponent {...tweetData} />
    </section>
  );
}
