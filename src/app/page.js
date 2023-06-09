import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-bl from-[#efefdb] to-white">
        <div className="flex-col items-center">
          <h1 className="text-3xl font-bold text-black">Welcome to AuthorIt</h1>
          <h3 className="text-black">Just Write Blogs and start Earning Instantly !</h3>
        </div>
      </div>

    </>
  )
}
