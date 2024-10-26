import { FC } from "react"
import Layout from "@/components/layouts/article"
import Hero from "@/components/section/home/hero"

const Page: FC = () => {
    return (
        <Layout title="Home">
            <Hero/>
        </Layout>
    )
}

export default Page
