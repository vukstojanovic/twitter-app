import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Tweet } from "../../typings";
import TweetBox from "../TweetBox/TweetBox";
import TweetComponent from "../Tweet/Tweet";

interface Props {
  tweets: Tweet
}

export default function Feed({ tweets }: Props) {
  const tweetData = {
    text: "This is a DEMO TWEET",
    username: "Sonny Sangha",
    profileImg:
      "https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D16AQFBTEZH9739Ng/profile-displaybackgroundimage-shrink_200_800/0/1610818787022?e=2147483647&v=beta&t=H77pitXNXNaBtNvj35KCi7seCtMoYbLq85MWJweDmh4",
    _createdAt: new Date(),
  };

  return (
    <section className="col-span-7 p-3 overflow-auto md:col-span-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Home</h3>
        <ArrowPathIcon className="w-7 cursor-pointer hover:rotate-180 active:scale-125 hover:text-twitter ease-in-out duration-300" />
      </div>
      <TweetBox />
      <TweetComponent {...tweetData} />
    </section>
  );
}
