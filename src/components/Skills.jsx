import React from "react"
import Javascript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Github from "../assets/github.png"
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Tailwind from "../assets/tailwind.png"
import { SiCsharp, SiDotnet } from "react-icons/si"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="Javascript icon" />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiCsharp className="w-20 mx-auto  text-violet-800" size={80} />
            <p className="my-4">C#</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiDotnet className="w-20 mx-auto text-[#ac99ea]" size={80} />
            <p className="my-4">.NET</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
