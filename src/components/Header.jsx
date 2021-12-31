import React, { useEffect, useState } from "react";

const Header = ({ photoHandler }) => {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    photoHandler(search);
    setSearch("");
  };
useEffect(() => {

}, [search.length > 0])
  return (
    <div className="h-auto bg-gray-300">
      <div className="container flex justify-center items-center">
        <div className="flex items-center border-2 w-96 max-h-10 my-2 px-2 bg-red-200">
          <input
            type="text"
            placeholder="Enter Name Photo"
            className="my-4 flex-1 py-1 px-2 border-none bg-transparent focus:outline-none "
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            onClick={searchHandler}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
