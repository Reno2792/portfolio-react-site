import React from "react"

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form onSubmit={() => alert("'Contact Me' is coming soon.")} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <span className="flex">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
            <p className="px-3 text-gray-400">*Coming soon*</p>
          </span>

          <p className="text-gray-300 py-4">// Submit the form below</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Contact Me</button>
      </form>
    </div>
  )
}

export default Contact
