import { useRef } from "react"
import { useAnimation } from "../hooks/useAnimate";

const Main = () => {

    const mainRef  = useRef<HTMLDivElement>(null);

    useAnimation(mainRef, 2);

  return (
    <div ref={mainRef} className="flex flex-col items-center mt-32">
      <button className="btn btn-neutral bg-primary btn-sm">
        <a download href="/CV.pdf">Download CV</a>
      </button>
    
      <div className="md:w-1/2 w-[90%] font-semibold flex flex-col items-center border-t mt-8 mb-32">
        <h1 className="font-bold flex gap-1 mt-6 text-center">#About me</h1>
        <p id="aboutme" className="text-2xl tracking-wider text-center mt-4">
          I am <b className="text-primary">certified Frontend Web Developer.</b> I am currently looking for new <b className="text-primary">job opportunity.</b> I have experience in creating modern, functional web applications, and a strong set of skills for frontend development. I stay up to date with the latest technologies and frameworks. I'm exceptionally good at working with <b className="text-primary">JavaScript and TypeScript. I'm also skilled in React, Next.js,</b> <b>and have some backend experience with Node.js, Express, and databases.</b>
        </p>
      </div>
  </div>
  
  )
}

export default Main