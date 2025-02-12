import { useRef } from "react"
import { useAnimation } from "../hooks/useAnimate";
import { ArrowRight } from "lucide-react";
import { imgUrl } from "../constants/imgUrl";
import { Link } from "react-router-dom";

const Hero = () => {

    const heroRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLImageElement>(null);
    useAnimation(heroRef, 1);
    useAnimation(avatarRef, 2);

  return (
    <div className="w-full flex justify-center md:mt-36 mt-40">
        <div ref={heroRef} className="flex-row">
            <div className="flex gap-4 items-center">
                <img ref={avatarRef} src={imgUrl} className="md:w-[100px] w-[70px] rounded-full" alt="" />
                <h1 className="font-semibold md:text-3xl text-xl">Hello I am Nemanja</h1>
            </div>
            <div className="flex gap-2 items-center">
                <h1 className="text-primary font-bold md:text-6xl text-3xl animate-pulse">Frontend Web Developer</h1>
            </div>
            <div className="md:flex flex-row gap-4 justify-start items-center">
                <h1 className="font-semibold textarea-3xl text-end mt-3">Creating modern solutions for tomorrow's web.</h1>
                <Link to={'/about'}><button className="btn btn-neutral btn-sm mt-3">Skills & Education</button></Link>
                <Link to={'/projects'}><button className="btn btn-neutral btn-sm mt-3 ml-3 md:ml-0">Projects <ArrowRight /></button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero