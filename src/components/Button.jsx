import React, { useState } from "react";

const Button = ({ numberItems, photo, photoMore }) => {
  const [bool, setbool] = useState(false);
  console.log(photo.length, photoMore);
  const moreItem = () => {
    if (photo.length < photoMore || photo.length === photoMore) {
      setbool(true);
    } else {
      numberItems(3);
    }
  };
  return (
    <div className="my-6">
      <div className="container flex items-center justify-center">
        <button
          onClick={moreItem}
          className={`w-20 py-2 bg-red-300 ${
            bool ? "disabled cursor-default" : "block"
          }`}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Button;
