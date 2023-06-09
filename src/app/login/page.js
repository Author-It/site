"use client";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation"

export default function Login() {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      router.replace("/dash")
    }

  }, [router, session?.user]);

  return (

    <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-bl from-[#efefdb] to-white">

      {/* <!-- box-wrapper --> */}
      <div className="relative z-40 w-1/3 p-10 box-wrapper h-[86%]">

        <div className="items-center justify-center w-full h-full pt-2 bg-white border-white border bg-opacity-40 card rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl shadow-xl">

          {/* <!-- Email --> */}
          <p className="mt-10 ml-6 text-2xl font-semibold text-black Email ">
            Email
          </p>

          {/* <!-- Email Input Box --> */}
          <input className="h-12 pl-3 pr-3 mt-1 ml-6 bg-white shadow-xl text-black rounded-lg EmailBox w-80 outline-none" type="text" id="name" name="name" required
            minLength="4" maxLength="40" size="40">
          </input>

          {/* <!-- Password --> */}
          <p className="mt-4 ml-6 text-2xl font-semibold text-black Password ">
            Password
          </p>

          {/* <!-- Password Input Box --> */}
          <input className="h-12 pl-3 pr-3 mt-1 ml-6 bg-white shadow-xl text-black rounded-lg PasswordBox w-80 border-white hover:border-none active:border-none outline-none" type="password" id="name" name="name" required
            minLength="8" maxLength="40" size="40">
          </input>

          {/* <!-- Login Button --> */}

          <div className="flex justify-center mx-20 mt-4">
            <button
              className=" px-12 py-2 items-center justify-center font-medium text-black bg-[#FEE8B0] rounded-2xl hover:bg-black hover:text-[#FEE8B0] active:bg-[#2A2F4F] transition-all transform duration-500 hover:scale-105"
            >
              LOGIN NOW
            </button>
          </div>

          {/* <!-- Divider --> */}
          <div
            className="my-4 mx-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
            <p
              className="mx-4 mb-0 font-light text-center dark:text-black">
              OR LOGIN USING
            </p>
          </div>

          {/* <!-- Login Button --> */}

          <div className="flex items-center justify-center space-x-10 LoginOptions">
            {/* <!-- Google --> */}
            {/* {providers &&
              Object.values(providers).map((provider) => (

                <div onClick={() => {
                  signIn(provider.id);
                  console.log(provider.id, provider.name)
                }} key={provider.name}
                  className="w-12 h-12 transition-all transform rounded-full shadow-2xl drop-shadow-4xl hover:rotate-[360deg] duration-500 shadow-black hover:scale-125 cursor-pointer">
                  <Image className="" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="arrow" width={60} height={60} priority={true} />
                </div>

              ))} */}

            <div onClick={() => { signIn("google"); }} key={"Google"} className="w-12 h-12 transition-all transform rounded-full shadow-2xl drop-shadow-4xl hover:rotate-[360deg] duration-500 shadow-black hover:scale-125 cursor-pointer">
              <Image className="" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="arrow" width={60} height={60} priority={true} />
            </div>


            {/* <!--- Facebook --> */}

            {/* { providers && Object.values(providers).map((provider) => (
            <div onclick={() => {signIn(provider.id)}} key={provider.name} className="w-12 h-12 transition-all transform bg-white rounded-full shadow-2xl drop-shadow-4xl hover:rotate-[360deg] duration-500 shadow-black hover:scale-125 cursor-pointer">
              <Image className="" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="arrow" width={60} height={60} priority={true} />
            </div>
            ))}

            {/* <!--- GitHub --> */}
            <div onClick={() => { signIn("github"); }} key={"Github"} className="w-12 h-12 transition-all transform bg-white rounded-full shadow-2xl drop-shadow-4xl hover:rotate-[360deg] duration-500 shadow-black hover:scale-125 cursor-pointer">
              <Image className="" src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="arrow" width={60} height={60} priority={true} />
            </div>
          </div>

          <div className="flex justify-between mx-6 mt-8 links">

            <a className="text-sm transition-all transform text-blue-950 hover:underline hover:underline-offset-1" href="#home">Problem Logging in?</a>

            <a className="text-sm transition-all transform text-blue-950 hover:underline hover:underline-offset-1" href="#home">Register Now!</a>
          </div>


        </div>

      </div>

      {/* <!-- Yellow Blurred Circles --> */}

      <div className="blurredCircle1 bg-[#FFB629] bg-opacity-40 blur-lg absolute z-0 w-28 h-28 transition-all duration-500 transform border border-gray-100 rounded-full top-14 right-2/4 circle hover:scale-150 hover:w-32 hover:h-32 hover:border-4"></div>

      <div className="blurredCircle2 bg-[#FFB629] bg-opacity-40 blur-lg absolute z-0 w-28 h-28 transition-all duration-500 transform border border-gray-100 rounded-full top-48 right-[30rem] circle hover:scale-150 hover:w-32 hover:h-32 hover:border-4"></div>

      <div className="blurredCircle3 bg-[#FFB629] bg-opacity-40 blur-lg absolute z-0 w-28 h-28 transition-all duration-500 transform border border-gray-100 rounded-full bottom-48 left-80 circle hover:scale-150 hover:w-32 hover:h-32 hover:border-4"></div>

      <div className="blurredCircle4 bg-[#FFB629] bg-opacity-40 blur-lg absolute z-0 w-28 h-28 transition-all duration-500 transform border border-gray-100 rounded-full bottom-20 right-44 circle hover:scale-150 hover:w-32 hover:h-32 hover:border-4"></div>

      {/* <!-- Black Blurred Circles --> */}

      <div className="blurredCircle4 bg-[#dadada] bg-opacity-90 blur-lg absolute z-0 w-24 h-24 transition-all duration-500 transform border border-gray-100 rounded-full bottom-72 right-44 circle hover:scale-105 hover:w-32 hover:h-32 hover:border-4"></div>

      <div className="blurredCircle4 bg-[#3c3c3c] bg-opacity-30 blur-lg absolute z-0 w-24 h-24 transition-all duration-500 transform border border-gray-100 rounded-full bottom-12 right-[29rem] circle hover:scale-105 hover:w-32 hover:h-32 hover:border-4"></div>

      <div className="blurredCircle4 bg-[#dadada] bg-opacity-90 blur-lg absolute z-0 w-24 h-24 transition-all duration-500 transform border border-gray-100 rounded-full top-32 left-24 circle hover:scale-105 hover:w-32 hover:h-32 hover:border-4"></div>



    </div>
  )
}
