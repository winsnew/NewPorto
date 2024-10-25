import {DM_Sans, Inter, Poppins} from 'next/font/google'

export const inter = Inter({subsets: ["latin"], variable: "--var-inter"})
export const dm = DM_Sans({subsets: ["latin"], variable: "--var-dm-sans"})
export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--var-poppins"
})