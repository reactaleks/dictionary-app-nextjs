import ThemeSwitch from "./ThemeSwitchComponent"
export default function Navigation() {
    return (
        <nav className="h-[5vh] flex justify-between">
            Navbar
            <ThemeSwitch/>
        </nav>
    )
}