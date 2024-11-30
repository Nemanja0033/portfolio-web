import { useRef } from "react"
import ProjectsCard from "../components/ProjectsCard"
import { useAnimation } from "../hooks/useAnimate";

const Projects = () => {

  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref, 1)

  return (
    <div ref={ref} className="mt-12">
      <h1 className="text-4xl text-primary font-bold text-center">Projects</h1>
      <div className="flex justify-center mt-5">
        <div className="flex-row">
          <div className="mb-8">
            <ProjectsCard
            title="Dev Talks Social Network"
            img="https://i.postimg.cc/k4GMHSWB/Snimak-ekrana-2024-11-30-160402.png"
            desc="Social Network web app created with React & TypeScript and Firebse"
            urlDemo="https://dev-talks-nine.vercel.app/"
            urlRepo="https://github.com/Nemanja0033/dev-talks-social-network"
            />
          </div>
          <div className="mb-8">
            <ProjectsCard
            title="Shopzzila E-Commerce Web App"
            img="https://i.postimg.cc/pTfnJ4MP/Snimak-ekrana-2024-11-30-162036.png"
            desc="E-Commerce website, products filtering, cart. . ."
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