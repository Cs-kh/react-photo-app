import React from "react";

const Gallery = ({ img }) => {
  const tags = img.tags.split(",");
  return (
    <div className="card mx-auto h-auto mt-6 max-w-sm  bg-red-200 flex flex-col">
      <img src={img.webformatURL} className="w-full" alt="" />
      <div className="">
        <h3 className="px-4 py-2 text-2xl ">photo by : {img.user}</h3>
      </div>
      <ul className="px-4">
        <li>
          <strong className="pr-1">Views:</strong>
          {img.views}
        </li>
        <li>
          <strong className="pr-1">Downloads:</strong>
          {img.downloads}
        </li>
        <li>
          <strong className="pr-1">Likes:</strong>
          {img.lokes}
        </li>
      </ul>
      <div className="px-4 py-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-xl  text-sm px-3 mr-3 py-0.5 bg-red-800"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
