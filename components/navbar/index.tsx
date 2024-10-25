import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useState } from "react";
import { NavItems } from "@/data";
import SojoIcons from "./items/sojologo";
import { HamburgerMenu } from "./items/header";
import { INav } from "@/lib/interface/global";

const Navbar: FC = () => {
    const router = useRouter()
    const pathname = router.asPath;
    const [openNav, setOpenNav] = useState<boolean>(false);

    const toggleNav = () => {
        if (openNav) {
            setOpenNav(false);

        } else {
            setOpenNav(true);
        }
    }

    const handleClick = () => {
        if (openNav) {
            setOpenNav(false)
        }
    }

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
            }`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-3">
                <div className="relative w-full">
                    <Link href="/" className="inline-flex gap-2 items-center">
                        <SojoIcons/>
                        <h1 className="text-2xl font-semibold">Soojo_Dev</h1>
                    </Link>
                </div>

                <nav className={`${openNav ? "flex" : "hidden"
                    } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {NavItems.map((item: INav) => (
                            <Link key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-2 md:py-0 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <HamburgerMenu/>
                </nav>
                
            </div>
        </div>
    )

}

export default Navbar