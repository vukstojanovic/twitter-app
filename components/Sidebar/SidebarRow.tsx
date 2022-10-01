import React from "react";

interface Props {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
  onClick?: () => {};
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.()}
      className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group"
    >
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter hidden md:block lg:text-lg">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
