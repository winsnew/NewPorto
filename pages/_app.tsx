import type { AppProps } from "next/app"
import Layout from "@/components/layouts/main"
import { ThemeProvider } from "@/lib/providers/theme"
import 'styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}