"use client";
import { useSession, getProviders } from "next-auth/react";

export default function Home() {

    const { data: session } = useSession();

    return (
        <>
            {/* Mid Panel */}
            <div className="bg-[#161a23] h-full w-[98%] mx-auto overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-none">
                {/* Welcome user */}
                < div className="flex text-white mt-6 font-semibold text-2xl" >
                    Welcome, {session?.user.name}👋
                </div >

                {/* Featured Blogs */}

                < div className="flex-col flex mt-6 gap-4 text-black" >
                    <div className="text-white font-medium">
                        Recent Blogs
                    </div>

                    {/* Featured Blog Cards */}
                    <div className="h-64 w-full flex gap-4">

                        {/* Card 1 */}
                        <div className="h-full w-[24%] bg-[#161a23] rounded-2xl flex flex-col drop-shadow shadow-2xl">
                            <div className="bg-[#ffffff] h-[70%] w-full rounded-t-2xl">

                            </div>
                            <div className="bg-[#20232a] h-[30%] w-full rounded-b-2xl">

                                {/* UserName + Trending Tag + Blog Owner's Profile Pic */}
                                <div className="flex justif-between">

                                </div>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="h-full w-[24%] bg-[#161a23] rounded-2xl">
                            <div className="bg-[#ffffff] h-[70%] w-full rounded-t-2xl">

                            </div>
                            <div className="bg-[#20232a] h-[30%] w-full rounded-b-2xl">

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="h-full w-[24%] bg-[#161a23] rounded-2xl">
                            <div className="bg-[#ffffff] h-[70%] w-full rounded-t-2xl">

                            </div>
                            <div className="bg-[#20232a] h-[30%] w-full rounded-b-2xl">

                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="h-full w-[24%] bg-[#161a23] rounded-2xl">
                            <div className="bg-[#ffffff] h-[70%] w-full rounded-t-2xl">

                            </div>
                            <div className="bg-[#20232a] h-[30%] w-full rounded-b-2xl">

                            </div>
                        </div>

                    </div>
                </div >

                {/* Analytics & Graphs */}
                < div className="h-[110vh] w-full flex-col flex mt-6 gap-4 text-black" >

                    <div className="text-white font-medium">
                        Analytics
                    </div>

                    {/* Graphs & alllllll */}
                    <div className="w-[90%] h-[100vh] bg-[#ffffff] mx-auto">

                    </div>


                </div>


                < div className="h-[110vh] w-full flex-col flex mt-6 gap-4 text-black" >

                    {/* All Blogs List by the user */}
                    <div className="text-white font-medium">
                        All Blogs
                    </div>

                    {/* List */}
                    <div className="w-[90%] h-[100vh]  mx-auto flex flex-col gap-2">

                        {/* Blogs List Component */}
                        <div className="w-full h-8 flex bg-white rounded-sm justify-around">

                            <div className="text-black font-medium">
                                Blog1 Title
                                {/* Yahaan data fetch kr lenge */}
                            </div>

                            <div className="text-black font-medium">
                                Views
                                {/* Yahaan data fetch kr lenge */}
                            </div>

                            <div className="text-black font-medium">
                                revenue
                                {/* Yahaan data fetch kr lenge */}
                            </div>

                        </div>

                        <div className="w-full h-8 flex bg-white rounded-sm ">

                            <div>

                            </div>

                        </div>

                        <div className="w-full h-8 flex bg-white rounded-sm ">

                            <div>

                            </div>

                        </div>


                    </div>


                </div>

            </div>

        </>
    )
}
