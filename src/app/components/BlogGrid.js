"use client";
import React from 'react';
import Image from 'next/image'
import styles from '@component/styles/Nav.module.css';
import { useRouter } from "next/navigation";

import { BsSliders } from "react-icons/bs";

function BlogGrid({ jsonData }) {
  // Extract the titles from the JSON response
  const titles = jsonData.map(post => post.content.title);
  const dates = jsonData.map(post => post.updatedAt);
  const imgs = jsonData.map(post => post.content.img_url);
  const ids = jsonData.map(post => post._id);

  const router = useRouter();

  const handlePostClick = (_id) => {
    // Define the query parameters
    const routePath = `/editor/${encodeURIComponent(_id)}`;
    // Navigate to the editor page with the route path
    router.push(routePath);
  };

  // Create an array of JSX elements representing the titles
  const titleElements = titles.map((title, index) => {
    const dateString = new Date(dates[index]).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    return (
      <div key={index} onClick={() => {
        // Navigate to the editor page with the _id parameter
        handlePostClick(ids[index]);
      }} className="post-item m-4 ml-0 mr-6 bg-opacity-80 bg-white rounded-lg shadow-lg border-2 border-gray-300 w-[200px] h-[250px] cursor-pointer transition duration-75 ease-in transform hover:scale-105 hover:shadow-md hover:bg-gray-100 hover:shadow-white">
        <div className="post flex flex-col h-full relative">
          <Image src="/temp1.jpg" alt={title} width={200} height={170} className="object-cover rounded-t-lg h-[170px] w-[200px]" priority />
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <Image src="/AuthorIt1.png" alt="Logo" width={70} height={70} className="object-contain" />
          </div>
          <div className="bg-white p-2 rounded-md h-[80px]">
            <div className="flex items-center justify-between">
              <h3 className="text-black font-semibold text-xl max-w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap scrolling-text">{title}</h3> {/* Title */}
              {/* <Image src="/adjustment.png" alt="Settings" width={13} height={13} className="cursor-pointer mr-2" /> Settings icon */}
              <BsSliders onClick={console.log("aaa")} className='z-10' />
            </div>
            <p className="text-gray-600 text-xs">Last visited {dateString}</p> {/* Formatted Date */}
          </div>
        </div>
      </div>

    );
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-start text-black w-max m-2 ml-0 mb-8">{titleElements}</div>
    </div>
  );
}



export default BlogGrid;
