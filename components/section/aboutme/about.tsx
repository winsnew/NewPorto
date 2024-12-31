import { FC } from "react";
import clsx from "clsx";
import styled from "./index.module.scss"

const AboutMe: FC = () => {
    return (
        <section className={clsx(styled.SectionContainer)}>
            <h2 className={clsx(styled.Heading)}>About Me</h2>
            <div className={clsx(styled.AboutLayout)}>
                <div className={clsx(styled.Description)}>
                    <p>
                        Hi! I'm <strong>Chairil Prasojo</strong>, a passionate developer who loves
                        crafting beautiful and functional web experiences. With expertise
                        in <em>React</em>, <em>TypeScript</em>, and <em>CSS</em>, I enjoy
                        turning ideas into reality. When I'm not coding, you'll find me
                        exploring new technologies, playing games, or sipping coffee at a
                        cozy café.
                    </p>
                    <button className={styled.ContactButton}>Contact Me</button>
                </div>
            </div>
        </section>
    )
}

export default AboutMe