import { FC, ReactNode } from "react"
import Navbar  from "@/components/navbar"
import Footer from "@/components/footer"

interface IMainLayout {
    children: ReactNode
}

const Main: FC<IMainLayout> = ({children}) => {
    return (
        <>
            <div className="">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Main