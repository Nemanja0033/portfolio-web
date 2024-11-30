import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="md:w-1/2 w-[90%] flex justify-self-center justify-center mt-12">
      <div className="flex-row">
        <div className="mt-6">
          <h1 className="text-3xl mb-3 font-bold text-primary">Education</h1>
          <p className="text-lg font-semibold">
          I developed my frontend programming skills through a <b className="text-primary">one-year JavaScript Frontend Development course by the ITAcademy Link Group.</b> Additionally, I gained both practical and theoretical knowledge by working on personal projects, reading books, exploring documentation, and continuous self-learning.
          </p>
        </div>

        <div className="md:flex flex-row justify-center gap-20 mt-12">
          <div>
            <h1 className="text-3xl mb-3 font-bold text-primary">Certificate</h1>
            <div className="flex gap-2 mb-3">
              <img className="h-12 rounded-full" src="/certf1.png" alt="" />
              <h1 className="text-xl font-bold">Frontend JavaScript Developer</h1>
            </div>
            <span>ITAcademy by LINK group</span>
            <br />
            <span>Issued Sep 2024</span>
            <br />
            <span>Credential ID <b>032024</b></span>
            <br />
            <Link to={'https://www.link-group.eu/certificate/'}><button className="btn btn-neutral btn-sm mt-3">Show Credential <ArrowRight /></button></Link>
          </div>
          <div className="md:mt-0 mt-8">
          <h1 className="text-3xl mb-3 font-bold text-primary">Certificate</h1>
          <div className="flex gap-2 mb-3">
              <img className="h-12 rounded-full" src="/certf2.png" alt="" />
              <h1 className="text-xl font-bold">JavaScript Specialist Certification</h1>
          </div>
          <span>Certification Partners</span>
          <br />
          <span>Issued Oct 2024</span>
          <br />
          <span>Expires Oct 2027</span>
          <br />
          <Link to={'https://www.credential.net/b135fc92-2dd1-4736-8282-c69012125472'}><button className="btn btn-neutral btn-sm mt-3">Show Credential <ArrowRight /></button></Link>
          </div>
        </div>

        <div className="flex-row mt-12">
          <h1 className="text-primary text-3xl font-bold">Skills</h1>
          <div>
            <h1 className="text-xl font-semibold">Programming Languages</h1>
            <div className="flex justify-center gap-12 mt-6">
              <div className="flex justify-center items-center gap-2">
                <img className="h-12 rounded-full" src="/js.png" alt="" />  
                <h1 className="text-lg font-bold">JavaScript</h1>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img className="h-12 rounded-full" src="/ts.png" alt="" />  
                <h1 className="text-lg font-bold">TypeScript</h1>
              </div>
          </div>

          <div className="mt-6">
            <h1 className="text-xl font-semibold">Frameworks & Libraries</h1>
            <div className="md:flex flex-row justify-center gap-12 mt-6">
              <div className="flex justify-center items-center gap-2 md:mt-0 mt-6">
                <img className="h-12 rounded-full" src="/react.png" alt="" />  
                <h1 className="text-lg font-bold">React</h1>
              </div>
              <div className="flex justify-center items-center gap-2 md:mt-0 mt-6">
                <img className="h-12 rounded-full" src="/next.png" alt="" />  
                <h1 className="text-lg font-bold">Next.js</h1>
              </div>
              <div className="flex justify-center items-center gap-2 md:mt-0 mt-6">
                <img className="h-16 rounded-full" src="/node.png" alt="" />  
                <h1 className="text-lg font-bold">Node.js</h1>
              </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About