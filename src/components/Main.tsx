import { useRef } from "react"
import { useAnimation } from "../hooks/useAnimate";

const Main = () => {

    const mainRef  = useRef<HTMLDivElement>(null);

    useAnimation(mainRef, 2);

  return (
    <div ref={mainRef} className="md:w-1/2 w-[90%] font-semibold flex justify-center border-t justify-self-center mt-32 mb-32">
       <div className="flex-row mt-6">
            <h1 className="font-bold flex gap-1">#About me</h1>
            <div className="flex justify-center">
            <p id="aboutme" className="text-2xl tracking-wider">
            Im a <b className="text-primary">certified Frontend Web Developer</b> open to new <b className="text-primary">job opportunities.</b> Ive got experience in creating modern, functional web applications and a solid set of skills for frontend development. I stay on top of the latest technologies and frameworks, and Im confident in working with <b className="text-primary">JavaScript and TypeScript. Im also skilled in React, Next.js, and have some backend experience with Node.js, Express, and databases</b>.
            </p>
            </div>
            <div>
            </div>
       </div>
    </div>
  )
}

export default Main