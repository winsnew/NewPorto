import { FC } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import dynamic from "next/dynamic"

const Model = dynamic(() => import("./pcwork/index"), {ssr: false})

const Uses: FC = () => {
    return (
        <section className={clsx(styles.UsesContainer)}>
            <div className={clsx(styles.ContentLayout)}>
                <Model/>
            </div>
        </section>
    )
}

export default Uses