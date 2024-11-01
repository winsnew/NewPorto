import { useEffect, useState } from "react"
import SunIcon from "@/components/icons/sun"
import MoonIcon from "@/components/icons/moon"
import { useTheme } from "@/lib/providers/theme"
import styles from "./toggle.module.scss"

const ThemeToggle = () => {
    const {isDarkMode, toggleTheme} = useTheme()

    return (
        <div className={`${styles['ContainerMode']} ${isDarkMode ? styles.dark : ''}`}
        onClick={toggleTheme}>
            <MoonIcon className={styles.Moon} size={18}/>
            <div className={`${styles['toggle-thumb']} ${isDarkMode ? styles.dark : ''}`}></div>
            <SunIcon className={styles.Sun} size={18}/>
        </div>
    )
}

export default ThemeToggle