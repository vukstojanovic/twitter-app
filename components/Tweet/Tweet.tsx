import TimeAgo from "react-timeago";
import {
  ChatBubbleLeftRightIcon,
  ArrowsRightLeftIcon,
  ArrowUpTrayIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

interface TweetProps {
  profileImg: string;
  _createdAt: Date;
  text: string;
  username: string;
  image: string;
}

export default function Tweet({
  profileImg,
  _createdAt,
  text,
  username,
  image,
}: TweetProps) {
  return (
    <div className="mx-4">
      <div className="flex mb-5">
        <img
          src={profileImg}
          alt={profileImg}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-5">
          <p className="mb-1">
            <span className="font-bold mr-2">{username}</span>
            {"  "}
            <span className="text-gray-400 whitespace-nowrap">
              <TimeAgo date={_createdAt} />
            </span>
          </p>
          <p className="mb-6">{text}</p>
          <img
            src={image}
            alt={image}
            className="max-h-60 rounded-[10px] object-cover ml-0"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-400 flex items-center space-x-2">
          <ChatBubbleLeftRightIcon className="w-5 cursor-pointer" />
          <span>5</span>
        </p>
        <p className="text-gray-400 flex items-center space-x-2">
          <ArrowsRightLeftIcon className="w-5 cursor-pointer" />
        </p>
        <p className="text-gray-400 flex items-center space-x-2">
          <HeartIcon className="w-5 cursor-pointer" />
        </p>
        <p className="text-gray-400 flex items-center space-x-2">
          <ArrowUpTrayIcon className="w-5 cursor-pointer" />
        </p>
      </div>
    </div>
  );
}
