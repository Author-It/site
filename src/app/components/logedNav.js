import styles from '@component/styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import localFont from 'next/font/local'

// const myFont = localFont({src:port})

export default function Home() {
  return (
    <>


      <nav className="bg-[#FFE4C5] w-full h-14">
        <div className="mx-6 py-1 flex justify-between items-center">
            <Image src="/logo.png" alt="Logo" className="w-[120px] h-[46px] transition-all transform duration-500 hover:scale-105 cursor-pointer" width={120} height={46} priority/>
            <a>This is new NavBar</a>
        </div>
      </nav>
    </>
  )
}