import React from "react"
import CookingNinjaSiteImg from "../assets/projects/cooking-ninja-site.jpg"
import WeatherReactApp from "../assets/projects/Weather-React-App.jpg"
import PkmnTaskManager from "../assets/projects/Pkmn-Task-Manager.jpg"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <span className="flex">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
            <p className="px-3 text-gray-400">*Coming soon</p>
          </span>

          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${WeatherReactApp})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${PkmnTaskManager})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${CookingNinjaSiteImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
