import { Link } from "react-router-dom"
import { ProjectCardType } from "../types/ProjectCardType"
import { ArrowRight } from "lucide-react"

const ProjectsCard = ({title, img, desc, urlDemo, urlRepo}: ProjectCardType) => {
  return (
    <div className="w-full flex justify-center h-auto shadow-md rounded-md">
        <div className="flex-row">
            <div className="mt-3 mb-2">
                <h1 className="text-2xl font-bold text-center">{title}</h1>
            </div>
            <div className="flex justify-center">
                <img className="w-[95%] h-[300px]" src={img} />
            </div>
            <div className="ml-3 mt-3">
                <span className="text-md">{desc}</span>
            </div>
            <div className="flex justify-center gap-2 mt-3 mb-4">
                <button className="btn bg-primary btn-sm"><Link to={urlDemo}>See Demo</Link><ArrowRight /></button>
                <button className="btn bg-primary btn-sm"><Link to={urlRepo}>See Code</Link><ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard