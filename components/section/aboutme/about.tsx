import { FC } from "react";
import clsx from "clsx";
import styled from "./index.module.scss"

const AboutMe: FC = () => {
    return (
        <section className={clsx(styled.SectionContainer)}>
            <h2>About Me</h2>
        </section>
    )
}

export default AboutMe