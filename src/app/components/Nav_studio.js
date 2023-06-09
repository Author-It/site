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
                <div className="flex items-center justify-center m-4 mt-2 mb-10">
                    <Image src="/studioLogo.png" className='w-[170px] -[60px]' alt="Logo" width={170} height={60} priority unoptimized />
                </div>
                <nav className='flex flex-col gap-4'>

                    <div className="flex flex-col gap-2">

                        {/* {pathname.includes('/dash') ? activeLink : inactiveLink} */}
                        <Link href={'/blogstudio'} className={pathName === "/blogstudio" ? activeLink : inactiveLink}>
                            <Image src="/dashboard2.png" alt="dashboard" width="15" height="15" priority unoptimized={true} />
                            DashBoard
                        </Link>

                        <Link href={'/blogstudio/content'} className={pathName === "/blogstudio/content" ? activeLink : inactiveLink}>
                            <Image src="/blog1.png" alt="blogs" width={15} height={15} priority unoptimized={true} />
                            Content
                        </Link>

                        <Link href={'/blogstudio/earn'} className={pathName === "/blogstudio/earn" ? activeLink : inactiveLink}>
                            <Image src="/dollar.png" alt="dollar" width={15} height={15} priority unoptimized={true} />
                            Earn
                        </Link>

                        <Link href={'/blogstudio/customize'} className={pathName === "/blogstudio/customize" ? activeLink : inactiveLink}>
                            <Image src="/customization.png" alt="custamization" width={15} height={15} priority unoptimized={true} />
                            Customize
                        </Link>

                    </div>

                    <div className="w-full h-[1px] bg-gray-600">
                        {/* thisis divider */}
                    </div>

                    {/* After line divider */}

                    <div className="flex flex-col gap-2">
                        <Link href={'/blogstudio/settings'} className={pathName === "/blogstudio/settings" ? activeLink : inactiveLink}>
                            <Image src="/settings.png" alt="settings" width={15} height={15} priority unoptimized={true} />
                            Settings
                        </Link>

                        <Link href={'/blogstudio/profile'} className={pathName === "/blogstudio/profile" ? activeLink : inactiveLink}>
                            <Image src="/user.png" alt="profile" width={15} height={15} priority unoptimized={true} />
                            Profile
                        </Link>
                    </div>


                </nav>
            </div >

        </aside >
    );
}