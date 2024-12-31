import { FC } from "react";
import Layout from "@/components/layouts/article";
import ContactSection from "@/components/section/contact"

const Contact:FC = () => {
    return (
        <Layout title="Contact">
           <ContactSection/>
        </Layout>
    )
}


export default Contact