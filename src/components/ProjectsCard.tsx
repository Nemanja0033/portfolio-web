import { Link } from "react-router-dom"
import { ProjectCardType } from "../types/ProjectCardType"
import { ArrowRight } from "lucide-react"

const ProjectsCard = ({title, img, desc, urlDemo, urlRepo}: ProjectCardType) => {
  return (
    <div className="md:w-1/2 w-full flex justify-self-center justify-center h-auto shadow-md rounded-md">
        <div className="flex-row">
            <div className="mt-3 mb-2">
                <h1 className="text-2xl font-bold text-center">{title}</h1>
            </div>
            <div className="flex justify-center">
                <img src={img} className="w-full rounded-md" />
            </div>
            <div className="ml-3 mt-3 flex justify-center">
                <span className="text-md font-semibold">{desc}</span>
            </div>
            <div className="flex justify-center gap-2 mt-3 mb-4">
                <button className="btn bg-primary btn-sm"><a href={urlDemo}>Demo</a></button>
                <button className="btn bg-primary btn-sm"><a href={urlRepo}>Code & Docs</a></button>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard