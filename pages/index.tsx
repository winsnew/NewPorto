import { FC } from "react"
import Layout from "@/components/layouts/article"
import Hero from "@/components/section/home/hero"
import AboutMe from "@/components/section/aboutme/about"

const Page: FC = () => {
    return (
        <Layout title="Home">
            <Hero/>
            <AboutMe/>
        </Layout>
    )
}

export default Page
