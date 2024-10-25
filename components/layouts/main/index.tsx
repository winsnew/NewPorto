import { FC, ReactNode } from "react"
import Navbar  from "@/components/navbar"


interface IMainLayout {
    children: ReactNode
}

const Main: FC<IMainLayout> = ({children}) => {
    return (
        <>
            <div className="">
                <Navbar/>
                {children}
            </div>
        </>
    )
}

export default Main