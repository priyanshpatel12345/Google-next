import SearchHeader from "@/components/SearchHeader";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
