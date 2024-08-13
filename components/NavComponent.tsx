'use client'
import ThemeSwitch from "./ThemeSwitchComponent"
import FontSwitch from "./FontSwitchComponenet"
export default function Navigation() {
    
    return (
        <nav className="h-[5vh] flex justify-between">
            
            Navbar
            <FontSwitch/>
            <ThemeSwitch/>
        </nav>
    )
}