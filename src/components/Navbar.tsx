import { Link } from "react-router-dom"
import ThemeToggler from "./ThemeToggler"
import { Menu, Palette, X } from "lucide-react"
import { urlBlog } from "../constants/blogUrl"
import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    if(isOpen){
        return(
            <div className="w-full h-screen flex justify-center items-center">
                <div className="grid grid-cols-1 gap-10 text-2xl">
                <button onClick={() => setIsOpen(false)}><X /></button>
                <Link className="hover:text-primary" to={'/'}>Home</Link>
                <Link  className="hover:text-primary" to={'/projects'}>Projects</Link>
                <Link  className="hover:text-primary" to={'/about'}>About</Link>
                <Link className="hover:text-primary" to={urlBlog}>Blog</Link>
                <ThemeToggler />
                </div>
            </div>
        )
    }

  return (
    <>
    <nav className="md:hidden flex justify-between px-5 h-[60px] w-full items-center shadow-md">
        <Link to={'/'}>
                <div className="flex justify-center gap-2 cursor-pointer items-center">
                    <span className="flex gap-2 text-xl font-semibold">Portfolio<Palette className="text-primary" /></span>
                </div>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
        </button>
    </nav>

    <nav className="w-full h-[60px] md:flex hidden justify-evenly items-center shadow-md">
        <Link to={'/'}>
            <div className="flex justify-center gap-2 cursor-pointer items-center">
                <span className="flex gap-2 text-xl font-semibold">Portfolio<Palette className="text-primary" /></span>
            </div>
        </Link>
        <div className="flex justify-center md:gap-8 gap-4">
            <Link className="hover:text-primary" to={'/'}>Home</Link>
            <Link  className="hover:text-primary" to={'/projects'}>Projects</Link>
            <Link  className="hover:text-primary" to={'/about'}>About</Link>
            <div className="md:border-l md:pl-3 pl-0 flex gap-5 items-center">
                <Link className="hover:text-primary" to={urlBlog}>Blog</Link>
                <ThemeToggler />
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar