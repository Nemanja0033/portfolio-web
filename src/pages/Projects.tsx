import { useRef } from "react"
import ProjectsCard from "../components/ProjectsCard"
import { useAnimation } from "../hooks/useAnimate";

const Projects = () => {

  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref, 1)

  return (
    <div ref={ref} className="flex justify-center mt-12">
      <div className="md:flex hidden justify-center w-1/4 ml-32 mt-20">
        <p className="text-xl font-bold tracking-wide">
        All my projects <b className="text-primary">showcase my experience and knowledge in frontend development</b>, check out my other projects on my <a className="underline text-primary" href="https://github.com/Nemanja0033">GitHub</a>.
        </p>
      </div>
      <div className="flex justify-center mt-5 md:mr-52 mr-0">
        <div className="flex-row">
         <h1 className="text-4xl text-primary font-bold text-center">Projects</h1>
          <div className="mb-8">
            <ProjectsCard
            title="Threadsy Social Network"
            img="https://i.postimg.cc/k4GMHSWB/Snimak-ekrana-2024-11-30-160402.png"
            desc="Lightweight social Network web app with modern & fully responsive design"
            urlDemo="https://dev-talks-nine.vercel.app/"
            urlRepo="https://github.com/Nemanja0033/dev-talks-social-network"
            />
          </div>
          <div className="mb-8">
            <ProjectsCard
            title="Shopzzila E-Commerce Web App"
            img="https://i.postimg.cc/pTfnJ4MP/Snimak-ekrana-2024-11-30-162036.png"
            desc="E-Commerce website, providing products filtering, cart system and responsive design"
            urlDemo="https://shopzzila-e-commerce.vercel.app/"
            urlRepo="https://github.com/Nemanja0033/shopzzila-e-commerce"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects