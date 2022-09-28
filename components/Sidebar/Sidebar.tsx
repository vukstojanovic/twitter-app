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
import { signIn, signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <section className="col-span-2 flex flex-col items-center md:items-baseline m-3">
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
      <SidebarRow
        Icon={UserIcon}
        title={session ? "Sign out" : "Sign in"}
        onClick={session ? signOut : signIn}
      />
      <SidebarRow Icon={EllipsisHorizontalIcon} title="More" />
    </section>
  );
}

export default Sidebar;
