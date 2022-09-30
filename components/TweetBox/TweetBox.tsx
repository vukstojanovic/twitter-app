import React, { useState, useRef, FormEvent } from "react";

import Image from "next/image";
import {
  CalendarDaysIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

function TweetBox() {
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  function toggleUrlImageBox() {
    setImageUrlBoxIsOpen(true);
  }

  function addImage(e: FormEvent) {
    e.preventDefault();
    if (!inputRef.current?.value.trim()) return;
    setImageUrl(inputRef.current.value.trim());
    setImageUrlBoxIsOpen(false);
  }

  return (
    <div>
      <div className="flex space-x-2 p-5">
        <div className="m-4 h-14 w-14 rounded-full object-cover">
          <Image
            src={session?.user?.image || "https://links.papareact.com/gll"}
            alt=""
            height={14}
            width={14}
            layout="responsive"
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
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
                <PhotoIcon
                  className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
                  onClick={toggleUrlImageBox}
                />
                <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <CalendarDaysIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              </div>
              <button
                disabled={!input || !session}
                className=" rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
              >
                Tweet
              </button>
            </div>
          </form>
          {imageUrlBoxIsOpen && (
            <form
              className="flex items-center bg-twitter/70 rounded-lg text-white overflow-hidden p-4 my-5"
              onSubmit={addImage}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter Image URL..."
                className="outline-none bg-transparent flex-1 placeholder:text-white pr-2"
              />
              <button className="font-bold">Add Image</button>
            </form>
          )}
          {imageUrl && !imageUrlBoxIsOpen && (
            <img
              src={imageUrl}
              alt=""
              className="my-4 w-3/4 rounded-[10px] ml-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
