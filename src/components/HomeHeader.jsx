import Link from "next/link";
import React from "react";
import { TbGridDots} from "react-icons/tb"

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5">
        <div className="flex space-x-4 items-center">
            <Link className="hover:underline" href={"https://mail.google.com"}>
            Gmail
            </Link>
            <Link href={"https://image.google.com"} >
                Images
            </Link>
            <TbGridDots className="bg-transparent hover:bg-gray-200 text-4xl rounded-full p-2"/>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md font-medium hover:brightness-110 shadow-md">
                Sign in
            </button>
        </div>
    </header>
  );
}
