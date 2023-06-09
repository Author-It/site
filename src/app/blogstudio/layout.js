"use client";
import { useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";
import Nav from '@component/components/Nav_studio';
import { useEffect, useState } from "react";

export default function Layout({ children }) {

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session?.user) {
            //router.replace("/login")
            console.log(session?.user);
        }

    }, [router, session?.user]);

    return (
        <>
            <div className="flex justify-center h-screen overflow-hidden bg-[#161a23] divide-x">

                {/* Left Panel */}
                <Nav />

                {/* Mid Panel */}
                <div className="bg-[#161a23] h-full w-full">
                    {children}
                </div>

                {/* Right Panel ka Idea Cancel kr diya gya hai
                <div className="bg-[#161a23] h-full w-[26%]">

                </div> */}

            </div >
        </>
    );
}