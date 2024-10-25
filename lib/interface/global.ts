import { ReactNode } from "react"

export interface INav {
    id: string
    title: string
    url: string
    onlyMobile?: boolean
}

export interface IArticle {
    children: ReactNode
    title: string
}

export interface ISection {
    title: string
}