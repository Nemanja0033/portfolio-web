import { Link } from "react-router-dom"
import ThemeToggler from "./ThemeToggler"
import { Palette } from "lucide-react"
import { urlBlog } from "../constants/blogUrl"

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] flex justify-evenly items-center shadow-md">
        <Link to={'/'}>
            <div className="flex justify-center gap-2 cursor-pointer items-center">
                <span className="flex gap-2 text-xl font-semibold">Portfolio<Palette className="text-primary" /></span>
            </div>
        </Link>
        <div className="flex justify-center md:gap-8 gap-4">
            <Link className="hover:text-primary" to={'/'}>Home</Link>
            <Link  className="hover:text-primary" to={'/projects'}>Projects</Link>
            <Link  className="hover:text-primary" to={'/about'}>About</Link>
            <div className="md:border-l md:pl-3 pl-0">
                <Link className="hover:text-primary" to={urlBlog}>Blog</Link>
            </div>
        </div>
        <div className="flex md:border-l md:pl-3 ml-3 mr-3 justify-center items-center">
            <ThemeToggler />
        </div>
    </nav>
  )
}

export default Navbar