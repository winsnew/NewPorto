import Layout from "@/components/layouts/article"
import { FC } from "react"
import WorkLayout from "@/components/section/works"

interface works{}

const Works: FC = () => {
    return (
        <Layout title="Works">
            <WorkLayout/>
        </Layout>
    )
}

export default Works