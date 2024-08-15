import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24 ">
        <Image
          src="https://static-00.iconduck.com/assets.00/google-icon-2048x673-w3o7skkh.png"
          width={300}
          height={100}
          alt="Google_image"
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
}

export default Home;
