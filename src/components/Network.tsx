import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useAnimation } from "../hooks/useAnimate";

const Network = () => {

  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref, 2)

  return (
    <div ref={ref} className="md:w-1/2 w-[90%] flex justify-self-center border-t">
      <div className="flex-row mt-6">
        <h1 className="font-bold mb-4">#Network</h1>
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-bold text-primary">GitHub</h1>
          <Link to={'https://github.com/Nemanja0033'}><button className="btn btn-neutral btn-sm">Visit <ArrowRight /></button></Link>
        </div>
        <p className="text-xl font-semibold mt-3">Take a look at my GitHub profile and see all the projects I ve worked with.</p>

        <div className="flex gap-2 items-center mt-12">
          <h1 className="text-3xl font-bold text-primary">Linkedin</h1>
          <Link to={'https://www.linkedin.com/in/nemanja-antonijevic-6baabb2a2/'}><button className="btn btn-neutral btn-sm">Visit <ArrowRight /></button></Link>
        </div>
        <p className="text-xl font-semibold mt-3">Contact me on my linkedin profile.</p>

        <div className="flex gap-2 items-center mt-12">
          <h1 className="text-3xl font-bold text-primary">Email</h1>
          <button className="btn btn-neutral btn-sm"><a href="mailto:antonijevicnemanjaa@gmail.com">Send Email</a> <ArrowRight /></button>
        </div>
        <p className="text-xl font-semibold mt-3">Send me an email.</p>
      </div>
    </div>
  )
}

export default Network