import { useRef } from "react"
import { useAnimation } from "../hooks/useAnimate";

const Main = () => {

    const mainRef  = useRef<HTMLDivElement>(null);

    useAnimation(mainRef, 2);

  return (
    <div ref={mainRef}>
      <div className="flex justify-self-center mt-32">
        <button className="btn btn-neutral bg-primary btn-sm"><a download href="/CV.pdf">Download CV</a></button>
      </div>
      <div className="md:w-1/2 w-[90%] font-semibold flex justify-center border-t justify-self-center mt-8 mb-32">
       <div className="flex-row mt-6 mb-6">
            <h1 className="font-bold flex gap-1">#About me</h1>
            <div className="flex justify-center">
            <p id="aboutme" className="text-2xl tracking-wider">
            I am <b className="text-primary">certified Frontend Web Developer.</b> I am currently looking for new <b className="text-primary">job opportunity.</b> I have experience in creating modern, functional web applications, and a strong set of skills for frontend development. I stay up to date with the latest technologies and frameworks. i'm exceptionally good at working with <b className="text-primary">JavaScript and TypeScript. Im also skilled in React, Next.js,</b> <b>and have some backend experience with Node.js, Express, and databases.</b>
            </p>
            </div>
            <div>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Main