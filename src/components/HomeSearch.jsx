"use client";
import { AiOutlineSearch, AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

function HomeSearch() {
  const [search, setSearch] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?searchTerm=${search}`);
  };

  const handleRandomWord = async (e) => {
    setRandomSearchLoading(true);
    e.preventDefault();
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    const res = data[0];

    if (response.ok) {
      setRandomSearchLoading(false);
      router.push(`/search/web?searchTerm=${res}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mt-7 w-full mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full items-center hover:shadow-md focus-within:shadow-md  transition-shadow sm:max-w-xl lg:max-w-2xl space-x-4"
      >
        <AiOutlineSearch className="text-gray-500 text-xl " />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BsFillMicFill className="text-lg " />
      </form>
      <div className="flex flex-col justify-center mt-5 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 w-36 h-10 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow"
        >
          Google Search
        </button>
        <button
          onClick={handleRandomWord}
          disabled={randomSearchLoading}
          className=" bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 w-36 h-10 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <AiOutlineLoading3Quarters className="animate-spin text-xl mx-auto" />
          ) : (
            "I am feeling lucky"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
