"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'


export default function Blogs() {

    const router = useRouter();

    return (
        <>
            {/* <div className="text-white">
                    <div className='text-white' onClick={() => {
                        router.replace("/blogs")
                    }}>
                        <li className="w-[100] px-6 py-2 items-center justify-center font-medium text-black bg-[#FEE8B0] outline-none rounded-2xl hover:bg-black hover:text-[#FEE8B0] active:bg-[#2A2F4F] transition-all transform duration-500 hover:scale-105 ease-in-out hover:shadow-lg hover:shadow-black cursor-pointer">EDITOR</li>
                    </div>
                </div> */}


            <div className="h-[300vh] w-full flex overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-none" >

                {/* Left Flex */}

                <div className="h-full w-[70%] flex flex-col  mx-6 mt-4 justify-center gap-4 overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-none">

                    {/* Top Banner */}
                    <div className="h-44 w-[95%] mx-auto mt-6 bg-[#90C6E8] rounded-lg">

                    </div>

                    {/* 2 Flex side by side */}

                    <div className="flex h-full w-[95%] mx-6 gap-2">

                        {/* Left wala flex */}
                        <div className="h-full w-1/2 gap-4 flex flex-col">

                            {/* Your latest Post Card */}
                            <div className="h-96 w-[95%] mx-auto px-4 py-2 flex flex-col rounded-lg bg-[#2f3648] border-2 border-white">
                                <div className="text-white font-medium text-xl mb-2">Your Latest Post</div>

                                <div className="rounded-2xl flex flex-col h-52 w-[95%]">
                                    <div className="bg-[#ffffff] h-[70%] w-full rounded-t-2xl"></div>
                                    <div className="bg-[#20232a] h-[30%] w-full rounded-b-2xl"></div>

                                    {/* UserName + Trending Tag + Blog Owner's Profile Pic */}
                                    <div className="flex justif-between"></div>
                                </div>

                                <div className="text-white mt-2 flex justify-between">Views</div>
                                <div className="text-white mt-2 flex justify-between">Average View Duration</div>
                                <div className="text-white mt-2 flex justify-between">Likes</div>

                                {/* View Analytics button */}
                            </div>

                            {/* New Subscribers Card */}
                            <div className="h-64 w-[95%] mx-auto px-4 py-2 flex flex-col gap-1 rounded-lg bg-[#2f3648] border-2 border-white">
                                <div className="text-white font-medium text-xl">New Subscribers</div>
                            </div>

                        </div>

                        {/* Right wala flex */}
                        <div className="h-full w-1/2 gap-4 flex flex-col">

                            {/* Earnings Card */}
                            <div className="h-28 w-[95%] mx-auto px-4 py-2 flex flex-col gap-1 rounded-lg bg-[#2f3648] border-2 border-white">
                                <div className="text-white">Earnings</div>

                                {/* Total Earnigs + Finances Button */}
                                <div className="flex justify-between items-center">

                                    <div className="text-white font-bold text-2xl">
                                        $5678
                                    </div>

                                    <button className="h-8 w-24 flex px-1 bg-[#97ffce] rounded-sm justify-between items-center">

                                        <div className="text-black font-medium">Finances</div>

                                        <Image className="" src="/rightArrow.png" alt="Rightarrow" width={20} height={20} priority={true} />
                                    </button>

                                </div>

                                {/* Progress Bar */}
                                {/* <div className="h-4 w-full mx-auto mt-2 bg-[#97ffce] rounded-xl"></div> */}

                                <div className="h-4 w-full mx-auto mt-2 bg-[#4C5771] rounded-full">
                                    <div className="h-4 w-[70%] bg-[#97ffce] rounded-full"></div>
                                </div>

                            </div>

                            {/* Channel Analytics Card */}
                            <div className="h-64 w-[95%] mx-auto px-4 py-2 flex flex-col gap-1 rounded-lg bg-[#2f3648] border-2 border-white">

                                <div className="text-white font-medium text-xl">Channel Analytics</div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Flex */}

                <div className="h-full w-[30%] flex bg-blue-200 mt-6">

                </div>

            </div>
        </>
    )
}