import Head from "next/head";
import { IArticle } from "@/lib/interface/global";
import { FC } from "react";


const Layout: FC<IArticle> = ({children, title}) => {
    const t = `${title} - Soojo Dev`
    return (
        <article>
            {title && (
                <Head>
                    <title>{t}</title>
                    <meta name="twitter:title" content={t}/>
                    <meta property="og:title" content={t}/>
                </Head>
            )}
            {children}
        </article>
    )
}

export default Layout