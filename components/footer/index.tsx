import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss"

interface IFooter {}

const Footer: FC<IFooter> = () => {
    return (
        <footer className={clsx(styles.FooterContainer)}>
            <div className={clsx(styles.container)}>
                hello
            </div>
        </footer>
    )
}

export default Footer