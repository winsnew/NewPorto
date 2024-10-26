import { FC, useRef, useEffect } from "react";
import gsap from "gsap"
import clsx from "clsx";
import styles from "./index.module.scss"

const Hero: FC = () => {
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
            if (canvas && ctx) {
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
        <div id="main" className={clsx(styles.MainContainer)}>
            <div id="page" className={clsx(styles.MainLayout)}>
                <div id="loop" className={clsx(styles.MainLoop)}>
                    <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                    <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                    <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                </div>
                <canvas ref={canvasRef} className={clsx(styles.CanvasContainer)}></canvas>
            </div>
            <div id="page1" className={clsx(styles.PageOne)}>
                
            </div>
        </div>
    )
}

export default Hero