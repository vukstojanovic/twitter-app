import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "../TweetBox/TweetBox";

export default function Feed() {
  return (
    <section className="col-span-7 p-3 overflow-auto md:col-span-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Home</h3>
        <ArrowPathIcon className="w-7 cursor-pointer hover:rotate-180 active:scale-125 hover:text-twitter ease-in-out duration-300" />
      </div>
      <TweetBox />
    </section>
  );
}
