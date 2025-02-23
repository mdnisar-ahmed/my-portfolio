"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-react-layout"
import { Menu, MenuItem } from "@progress/kendo-react-layout"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [expanded, setExpanded] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <AppBar className="bg-white dark:bg-gray-800 shadow-md">
      <AppBarSection>
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-gray-800 dark:text-white">Nisar Ahmed</span>
        </Link>
      </AppBarSection>
      <AppBarSpacer />
      <AppBarSection>
        <Menu onSelect={() => setExpanded(false)} expanded={expanded} onExpandChange={(e) => setExpanded(e.expanded)}>
          <MenuItem
            text="Home"
            render={() => (
              <Link href="#home" className="k-item k-menu-link">
                Home
              </Link>
            )}
          />
          <MenuItem
            text="About"
            render={() => (
              <Link href="#about" className="k-item k-menu-link">
                About
              </Link>
            )}
          />
          <MenuItem
            text="Education"
            render={() => (
              <Link href="#education" className="k-item k-menu-link">
                Education
              </Link>
            )}
          />
          <MenuItem
            text="Experience"
            render={() => (
              <Link href="#experience" className="k-item k-menu-link">
                Experience
              </Link>
            )}
          />
          <MenuItem
            text="Projects"
            render={() => (
              <Link href="#projects" className="k-item k-menu-link">
                Projects
              </Link>
            )}
          />
          <MenuItem
            text="Contact"
            render={() => (
              <Link href="#contact" className="k-item k-menu-link">
                Contact
              </Link>
            )}
          />
        </Menu>
      </AppBarSection>
      <AppBarSection>
        {mounted && (
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`w-20 h-10 rounded-full p-1 bg-gray-200 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === "dark" ? "bg-blue-500" : ""
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-10" : ""
                }`}
              >
                {theme === "light" ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-blue-300" />
                )}
              </div>
            </button>
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {theme === "light" ? "Light" : "Dark"}
            </span>
          </div>
        )}
      </AppBarSection>
    </AppBar>
  )
}

