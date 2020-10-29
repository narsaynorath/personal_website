import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import DarkModeIcon from "./icons/DarkMode"
import LightModeIcon from "./icons/LightMode"

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        const isDarkMode = theme === "dark"
        const nextTheme = isDarkMode ? "light" : "dark"
        const Icon = isDarkMode ? DarkModeIcon : LightModeIcon

        return (
          <Icon
            height="25px"
            width="25px"
            onClick={() => toggleTheme(nextTheme)}
          />
        )
      }}
    </ThemeToggler>
  )
}

export default ThemeToggle
