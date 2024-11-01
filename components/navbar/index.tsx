import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useState } from "react";
import { NavItems } from "@/data";
import SojoIcons from "./items/sojologo";
import { HamburgerMenu } from "./items/header";
import { INav } from "@/lib/interface/global";
import clsx from "clsx";
import styles from "./index.module.scss"
import ThemeToggle from "./items/toggle";

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
        <div className={clsx(styles.navbarContainer, { [styles.open]: openNav, [styles.closed]: !openNav })}>
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.logoContainer)}>
                    <Link href="/" className={clsx(styles.logoLink)}>
                        <SojoIcons />
                        <h1 className={styles.logoText}>SoojoDev</h1>
                    </Link>
                </div>

                <nav className={clsx(styles.navOpen)}>
                    <div className={clsx(styles.navItems)}>
                        {NavItems.map((item: INav) => (
                            <Link key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={clsx(
                                    styles.navItem,
                                    {
                                        [styles.onlyMobile]: item.onlyMobile,
                                        [styles.active]: item.url === pathname,
                                        [styles.inactive]: item.url !== pathname,
                                    }

                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <ThemeToggle/>
                    <HamburgerMenu />
                </nav>

            </div>
        </div>
    )

}

export default Navbar