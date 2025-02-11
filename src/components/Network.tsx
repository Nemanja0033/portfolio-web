import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useAnimation } from "../hooks/useAnimate";

const Network = () => {

  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref, 2)

  return (
    <div ref={ref} className="md:w-full w-[90%] flex flex-col items-center text-center border-t mt-8">
    <h1 className="font-bold mb-6">#Network</h1>
  
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">GitHub</h1>
        <Link to="https://github.com/Nemanja0033">
          <button className="btn btn-neutral btn-sm flex items-center gap-2">Visit <ArrowRight /></button>
        </Link>
        <p className="text-xl font-semibold mt-2">Take a look at my GitHub profile and see all the projects I’ve worked with.</p>
      </div>
  
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl font-bold text-primary">LinkedIn</h1>
        <Link to="https://www.linkedin.com/in/nemanja-antonijevic-6baabb2a2/">
          <button className="btn btn-neutral btn-sm flex items-center gap-2">Visit <ArrowRight /></button>
        </Link>
        <p className="text-xl font-semibold mt-2">Contact me on my LinkedIn profile.</p>
      </div>
  
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl font-bold text-primary">Email</h1>
        <button className="btn btn-neutral btn-sm flex items-center gap-2">
          <a href="mailto:antonijevicnemanjaa@gmail.com">Send Email</a> <ArrowRight />
        </button>
        <p className="text-xl font-semibold mt-2">Send me an email.</p>
      </div>
    </div>
  </div>
  

  )
}

export default Network