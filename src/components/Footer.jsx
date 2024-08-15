"use client";

import React from "react";
import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm w-full bg-[#f2f2f2] text-gray-500">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col justify-between sm:space-x-0 space-y-7 sm:space-y-0 sm:flex-row px-8 py-3 ">
        <ul className="flex space-x-6 items-center">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search Works</li>
        </ul>
        <ul className="flex space-x-6 items-center">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Setting</li>
        </ul>
      </div>
    </footer>
  );
}
