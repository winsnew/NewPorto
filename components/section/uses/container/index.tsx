import styles from "./index.module.scss"
import clsx from "clsx"
import { forwardRef, ReactNode } from "react"

type PcContainerProps = {
    children: ReactNode
}

export const PcLoading = () => (
    <div className={clsx(styles.LoadingContainer)}>
        Loading
    </div>
)

export const PcContainer = forwardRef<HTMLDivElement, PcContainerProps>(
    ({children}, ref) => (
        <div ref={ref} className={clsx(styles.PcContainer)}>
            {children}
        </div>
    )
)

PcContainer.displayName = 'PcContainer'

const Loader = () => {
    return (
        <PcContainer>
            <PcLoading/>
        </PcContainer>
    )
}

export default Loader