import { FC, useEffect, useRef } from "react"
import Layout from "@/components/layouts/article"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import 'locomotive-scroll/dist/locomotive-scroll.css'

gsap.registerPlugin(ScrollTrigger);

const Page: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scaleImage = (img: HTMLImageElement, ctx: CanvasRenderingContext2D, scaleImg: number = 0.7) => {
        const canvas = ctx.canvas
        const hRatio = canvas.width / img.width
        const vRatio = canvas.height / img.height 
        const ratio = Math.max(hRatio, vRatio) * scaleImg
        const centerShift_x = (canvas.width - img.width * ratio) / 2
        const centerShift_y = (canvas.height - img.height * ratio) / 2
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        )
    }
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        const image = new Image()
        image.src = '/images/tes0.png'
        const resizeCanvas = () => {
            if(canvas && ctx) {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                scaleImage(image, ctx, 0.3)
            }
        }
        image.onload = () => {
            resizeCanvas()
        }

        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    })

    return (
        <Layout title="Home">
            <div id="main" className="relative overflow-hidden">
                <div id="page" className="h-screen w-full bg-slate-400">
                    <div id="loop" className="flex absolute w-full top-32 text-xl h-1/4 whitespace-nowrap">
                        <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                        <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                        <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                    </div>
                    <canvas ref={canvasRef} className="relative z-20 w-full h-screen" />
                </div>
                <div className="h-screen bg-slate-300 w-full">

                </div>
            </div>
        </Layout>
    )
}

export default Page
