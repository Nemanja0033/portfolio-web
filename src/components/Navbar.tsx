import { Link } from "react-router-dom"
import { imgUrl } from "../constants/imgUrl"
import ThemeToggler from "./ThemeToggler"

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] flex justify-evenly items-center shadow-md">
        <Link to={'/'}>
            <div className="flex justify-center gap-2 cursor-pointer items-center">
                <img src={imgUrl} className="w-1/6 rounded-full" alt="" />
                <span className="text-secondary text-xl font-semibold">Portfoilo</span>
            </div>
        </Link>
        <div className="flex justify-center gap-8">
            <Link className="hover:text-primary" to={'/'}>Home</Link>
            <Link  className="hover:text-primary" to={'/projects'}>Projects</Link>
            <Link  className="hover:text-primary" to={'/education'}>Education</Link>
        </div>
        <div className="flex border-l pl-3 justify-center items-center">
            <ThemeToggler />
        </div>
    </nav>
  )
}

export default Navbar