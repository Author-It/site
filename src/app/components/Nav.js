"use client";
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const inactiveLink = "flex gap-2 text-[#d8d8d8] p-2 text-xs hover:bg-[#252A36] rounded-md transform duration-200";
    const activeLink = inactiveLink + " bg-gradient-to-r from-[#3F28F0] to-[#835ADA] rounded-md";
    const pathName = usePathname()

    return (
        <aside >
            <div className='p-5 w-56'>
                <div class="flex items-center justify-center m-10 mt-4">
                    <Image src="/AuthorIt.png" alt="Logo" width={170} height={60} priority />
                </div>
                <nav className='flex flex-col gap-2'>
                    {/* {pathname.includes('/dash') ? activeLink : inactiveLink} */}
                    <Link href={'/dash'} className={pathName === "/dash" ? activeLink : inactiveLink}>
                        <Image src="/dashboard2.png" alt="dashboard" width="15" height="15" priority unoptimized={true} />
                        DashBoard
                    </Link>

                    <Link href={'/dash/blogs'} className={pathName === "/dash/blogs" ? activeLink : inactiveLink}>
                        <Image src="/blog1.png" alt="dashboard" width={15} height={15} priority unoptimized={true} />
                        Make Blogs
                    </Link>

                    <Link href={'/dash/games'} className={pathName === "/dash/games" ? activeLink : inactiveLink}>
                        <Image src="/controller1.png" alt="dashboard" width={15} height={15} priority unoptimized={true} />
                        Make Games
                    </Link>

                    <Link href={'/dash/earn'} className={pathName === "/dash/earn" ? activeLink : inactiveLink}>
                        <Image src="/money.png" alt="dashboard" width={15} height={15} priority unoptimized={true} />
                        Finance
                    </Link>

                    <Link href={'/dash/settings'} className={pathName === "/dash/settings" ? activeLink : inactiveLink}>
                        <Image src="/settings.png" alt="dashboard" width={15} height={15} priority unoptimized={true} />
                        Settings
                    </Link>
                </nav>
            </div>

        </aside >
    );
}