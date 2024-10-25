import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

interface ImageSequence {
    frame: number
}

export const setupGsapControl = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null,
    files: (index:number) => string
) => {
    const frameCount = 300
    const images: HTMLImageElement[] = []
    const imagesSeq: ImageSequence = {frame:1}

    for(let i = 0; i < frameCount; i++) {
        const img = new Image()
        img.src = files(i)
        images.push(img)
    }

    images[1].onload = render

    gsap.to(imagesSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            scrub: 0.15,
            trigger: '#page>canvas',
            start: 'top top',
            end: '600% top',
            scroller: '#main'
        }
    })

    function render() {
        if(context) {
            scaleImage(images[imagesSeq.frame], context)
        }
    }

    function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        const canvas = ctx.canvas
        const hRatio = canvas.width / img.width
        const vRatio = canvas.height / img.height
        const ratio = Math.max(hRatio, vRatio)
        const centerShift_x = (canvas.width - img.width * ratio) / 2
        const centerShift_y = (canvas.height - img.height * ratio) / 2
        ctx.clearRect(0,0,canvas.width, canvas.height)
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

    ScrollTrigger.create({
        trigger: '#page>canvas',
        pin: true,
        scroller: '#main',
        start: 'top top',
        end: '600% top'
    })
}