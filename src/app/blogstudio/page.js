"use client";
import Image from "next/image";

import { useSession, getProviders } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import BlogGrid from "@component/components/BlogGrid";

export default function Home() {
  const [jsonData, setJsonData] = useState([]);

  const router = useRouter(); // route

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/op/drafts/all/user2");
        setJsonData(response.data);
      } catch (error) {
        if (!error.response) {
          // network error
          console.log("network error");
        } else {
          console.log(error.response.data.message);
        }
      }
    };

    fetchData();
  }, []);

  // Listen for new blog combination
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.key === 'n') {
        event.preventDefault(); // Prevent the default browser save action
        // Run your logic here
        console.log('Ctrl+n pressed');
        createBlank();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Clean up the event listener on component unmount
    };
  }, []);

  // handle Route
  const handlePostClick = (_id) => {
    // Define the query parameters
    const routePath = `/editor/${_id}`;
    // Navigate to the editor page with the route path
    router.push(routePath);
  };

  // make blank document
  const createBlank = async () => {
    try {
      const postData = {
        usr_id: "user2",
        content: {
          title: "Untitled",
          description: "test",
          body: "",
          category: "cat",
          tags: "tags",
        },
        settings: {
          link: "link",
          img_url: "url",
        },
      };

      const response = await axios.post("/api/op/drafts", postData);
      handlePostClick(response.data.ID);
      console.log(response.data.ID);
    } catch (error) {
      if (!error.response) {
        // network error
        console.log(error);
      } else {
        console.log(error.response.data.message);
      }
    }
  };

  const { data: session } = useSession();

  return (
    <>
      {/* Mid Panel */}
      <div className="bg-[#161a23] h-full w-[98%] mx-auto overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-none">
        {/* Welcome user */}
        <div className="flex text-white mt-6 font-semibold text-2xl ml-4">
          Welcome, {session?.user.name}👋
        </div>

        {/* New Blog Section */}

        <div className="flex-col flex mt-1 ml-6 gap-4 text-black">
          <h1 className="flex text-white mt-6 font-semibold text-2xl">
            Start a new Blog
          </h1>

          {/* Blank documents and templates */}
          <div className="h-[140px] w-full flex gap-4 item-center ">
            <Image
              src="/blackDocs.png"
              className="cursor-pointer bg-opacity-80 bg-white rounded-lg shadow-lg transition duration-75 ease-in transform hover:scale-105 hover:shadow-md"
              alt="dashboard"
              width="114"
              height="150"
              priority
              onClick={createBlank}
              unoptimized={true}
            />

            {/* To be replaced with css code */}
            <Image
              src="/template.png"
              alt="dashboard"
              width="114"
              height="150"
              priority
              unoptimized={true}
            />
            <Image
              src="/template.png"
              alt="dashboard"
              width="114"
              height="150"
              priority
              unoptimized={true}
            />
            <Image
              src="/template.png"
              alt="dashboard"
              width="114"
              height="150"
              priority
              unoptimized={true}
            />
          </div>

          <div className="w-full h-[1px] bg-gray-600">
            {/* thisis divider */}
          </div>

          <h1 className="flex text-white mt-6 font-semibold text-2xl">
            Recent Drafts
          </h1>

          {/* Add drafts here */}
          <BlogGrid jsonData={jsonData} />
        </div>
      </div>
    </>
  );
}
