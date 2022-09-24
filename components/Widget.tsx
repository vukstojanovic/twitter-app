import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Widget() {
  return (
    <section>
      <div className="py-3 px-3 rounded-full flex mb-4 bg-gray-100">
        <SearchIcon className="w-5 mx-3 text-gray-400" />

        <input
          type="text"
          placeholder="Search Twitter"
          className="outline-none placeholder:text-gray-400 flex-1"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 1000 }}
      />
    </section>
  );
}
