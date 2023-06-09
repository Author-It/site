import styles from '@component/styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import localFont from 'next/font/local'

// const myFont = localFont({src:port})

export default function Home() {
  return (
    <>
      {/* <nav className={styles.nav}>
        <Image src="/logo.png" alt="Logo" className={styles.logo_main} width={120} height={46} priority/>
        <ul className={styles.nav_router}>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/earn"}>Earn</Link></li>
          <li><Link href={"/start"}>Get Started</Link></li>
        </ul>
        <ul className={`${styles.account_action}`}>
          <li className={styles.register}><Link href={"/register"}>Register</Link></li>
          <li className={styles.login}><Link href={"/login"}>Login</Link></li>
        </ul>
      </nav> */}

      <nav className="bg-[#FFE4C5] w-full h-14">
        <div className="mx-6 py-2 flex justify-between items-center">
            <Image src="/AuthorIt.png" alt="Logo" className="transition-all transform duration-500 hover:scale-105 cursor-pointer" width={120} height={24} priority/>
              <ul className="flex items-center gap-x-5">
                  <li className="text-black font-medium transition-all transform duration-500 hover:scale-110"><Link href={"/"}>Home</Link></li>
                  <li className="text-black font-medium transition-all transform duration-500 hover:scale-110"><Link href={"/earn"}>Earn</Link></li>
                  <li className="text-black font-medium transition-all transform duration-500 hover:scale-110"><Link href={"/start"}>Get Started</Link></li>
                  <li className="text-black font-medium transition-all transform duration-500 hover:scale-110"><Link href={"/about"}>About Us</Link></li>
                  <li className="text-black font-medium transition-all transform duration-500 hover:scale-110"><Link href={"/start"}>Testimonials</Link></li>
              </ul>
              <ul className="flex items-centre gap-x-2">
                  {/* Register Button --  animate-bounce*/}

                  <li className="font-Myfont px-6 py-2  items-center justify-center font-medium text-black bg-[#ff6d3c] border-none outline-none rounded-lg hover:bg-white hover:text-[#ff9d26] active:bg-[#2A2F4F] transition-all transform duration-200 hover:scale-105 ease-in hover:shadow-lg hover:shadow-[#44444472] cursor-pointer"><Link href={"/login"}>Get Started</Link></li>

                  {/* Login Button */}
                  {/* <li className="px-6 py-2 items-center justify-center font-medium text-black bg-[#FEE8B0] outline-none rounded-2xl hover:bg-black hover:text-[#FEE8B0] active:bg-[#2A2F4F] transition-all transform duration-500 hover:scale-105 ease-in-out hover:shadow-lg hover:shadow-black cursor-pointer"><Link href={"/login"}>Login</Link></li> */}

                  {/* Testing a new Button */}
                  {/* <li className="px-6 py-2 items-center justify-center font-medium text-black bg-[#FEE8B0] outline-none rounded-2xl hover:text-black active:bg-[#2A2F4F] transition-all transform duration-500 hover:scale-105 ease-in-out hover:shadow-lg hover:shadow-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:border hover:border-black hover:opacity-70"><Link href={""}>Test</Link></li> */}
              </ul>
        </div>
        
      </nav>
    </>
  )
}