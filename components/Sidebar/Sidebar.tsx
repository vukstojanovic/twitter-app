import React from "react";

import SidebarRow from "./SidebarRow";
import Image from "next/image";

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  CircleStackIcon,
  StopCircleIcon,
  EnvelopeIcon,
  HomeIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div>
      <Image
        src="https://links.papareact.com/drq"
        alt=""
        width={30}
        height={30}
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CircleStackIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign in" />
      <SidebarRow Icon={EllipsisHorizontalIcon} title="More" />
    </div>
  );
}

export default Sidebar;
