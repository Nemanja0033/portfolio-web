import { useRef } from "react"
import ProjectsCard from "../components/ProjectsCard"
import { useAnimation } from "../hooks/useAnimate";
import { Pin } from "lucide-react";

const Projects = () => {

  const ref = useRef<HTMLDivElement>(null);

  useAnimation(ref, 1)

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center mt-12">
  <div className="md:flex hidden justify-center w-1/3 mt-20">
    <p className="text-xl font-bold tracking-wide">
      All my projects <b className="text-primary">showcase my experience and knowledge in frontend development</b>, check out my other projects on my 
      <a className="underline text-primary" href="https://github.com/Nemanja0033"> GitHub</a>.
    </p>
  </div>

  <div className="flex flex-col items-center mt-5 w-full">
    <h1 className="text-4xl text-primary font-bold">Projects</h1>
    <div className="flex justify-center cursor-pointer mt-4"><Pin />Pined</div>

    <div className="w-full flex flex-col items-center">
      <ProjectsCard
        title="Simia News/Blog Platform (Freelance Customer Project)"
        img="https://i.postimg.cc/25MyXj9w/Snimak-ekrana-2024-12-30-232233.png"
        desc="News/Blog platform for active 50-100 users, with advanced features (admin dash, member approval, creating groups, etc...)"
        urlDemo="https://blog-application-ten-sepia.vercel.app/"
        urlRepo="https://github.com/Nemanja0033/simia"
      />

      <ProjectsCard
        title="Shopzzila E-Commerce Web App"
        img="https://i.postimg.cc/pTfnJ4MP/Snimak-ekrana-2024-11-30-162036.png"
        desc="E-Commerce website, providing products filtering, cart system and responsive design"
        urlDemo="https://shopzzila-e-commerce.vercel.app/"
        urlRepo="https://github.com/Nemanja0033/shopzzila-e-commerce"
      />

      <ProjectsCard
        title="Ortodox Calendar App"
        img="https://private-user-images.githubusercontent.com/150238383/410222428-87284d32-ce11-4966-9a49-b302949d1c7d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkzMDk0ODMsIm5iZiI6MTczOTMwOTE4MywicGF0aCI6Ii8xNTAyMzgzODMvNDEwMjIyNDI4LTg3Mjg0ZDMyLWNlMTEtNDk2Ni05YTQ5LWIzMDI5NDlkMWM3ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMVQyMTI2MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZDhmN2JjNmYxMWM1YjVjMzNjZDM2OWQzYTY2OTkzMTU2YWRkMWViN2E2OGMzNGU1Nzk5OTNjNWM4MDkzNmVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6QbcHH4IB0Xxm6BJOA3PBpZ78EkBjDdxR7dw7ZKgp_k"
        desc="Application for Ortodox Church Holidays, feauturing modern UI, with functional UX"
        urlDemo="https://github.com/Nemanja0033/ortodox-app"
        urlRepo="https://github.com/Nemanja0033/ortodox-app"
        />
    </div>
  </div>
</div>

  )
}

export default Projects