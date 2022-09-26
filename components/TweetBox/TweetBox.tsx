import React, { useState } from "react";

import Image from "next/image";
import {
    CalendarDaysIcon,
    FaceSmileIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    PhotoIcon,
} from "@heroicons/react/24/outline";

function TweetBox() {
    const [input, setInput] = useState("");

    return (
        <div className="flex space-x-2 p-5">
            <div className="m-4 h-14 w-14 rounded-full object-cover">
                <Image
                    src="https://links.papareact.com/gll"
                    alt=""
                    height={14}
                    width={14}
                    layout="responsive"
                    className="rounded-full"
                />
                <div className="flex flex-1 items-center pl-2">
                    <form className="flex flex-1 flex-col">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="What's Happening?"
                            className="h-24 w-full text-xl outline-none placeholder:text-xl"
                        />
                        <div className="flex items-center">
                            <div className="flex flex-1 space-x-2 text-twitter">
                                <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                                <MagnifyingGlassIcon className="h-5 w-5" />
                                <FaceSmileIcon className="h-5 w-5" />
                                <CalendarDaysIcon className="h-5 w-5" />
                                <MapPinIcon className="h-5 w-5" />
                            </div>
                            <button
                                disabled={!input}
                                className=" rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
                            >
                                Tweet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TweetBox;
