import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import projects from "../../public/projects.js"
import Loader from "./Loader.jsx"

function ProjectDescription() {
    const { idno } = useParams()

    const active = projects.find((item) => item.name === idno)
    const [imageLoaded, setImageLoaded] = useState(false)
    const hide = document.querySelector('.noLink')
    const hide1 = document.querySelector('.noLink1')

    return (
        <section className="">
            <div onClick={() => history.back()} className="w-[3rem] cursor-pointer flex justify-center items-center text-white text-center h-[3rem] text-3xl rounded-full  hover:bg-[#5f5c59] hover:border hover:border-white">&larr;</div>
            <div className="h-[20rem] overflow-hidden flex justify-center items-center relative">
                <div className="relative overflow-hidden flex items-center justify-center w-[50rem]">

                    { !imageLoaded ? (
                        <Loader />
                        ) : null
                    }
                    <img
                        src={active.image}
                        alt={active.name}
                        className="cover"
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <div className="w-[15rem] ml-4 h-[20rem] flex flex-col justify-center items-center">

                    <button 
                        className="border p-4 w-[10rem] m-4 border-[#A99985] text-[#b5b8a2] hover:bg-[#b5b8a2] hover:text-black"
                        onClick={() => {
                            {active.codeLink?
                                window.open(
                                `${active.codeLink}`,
                                '_blank' // <- This is what makes it open in a new window.
                            ) : hide1.classList.remove('hidden')}
                        }}
                    >
                        Code&nbsp;&nbsp;&#x2B67;
                    </button>
                    <p className="hidden noLink1 bg-white p-1 w-[6rem] text-center text-red-900 rounded-tr-lg rounded-br-lg rounded-bl-lg relative bottom-[2rem]  ">No link</p>
                    <button 
                        className="border p-4 w-[10rem] m-4 border-[#A99985] text-[#b5b8a2] hover:bg-[#b5b8a2] hover:text-black"
                        onClick={() => {
                            {active.liveLink ?
                                window.open(
                                    `${active.liveLink}`,
                                    '_blank' //makes it open in a new window.
                                ) : hide.classList.remove('hidden')
                            }
                        }}
                    >
                        Live Demo &nbsp;&nbsp;&#x2B67;
                    </button>
                    <p className="hidden noLink bg-white p-1 w-[6rem] text-center text-red-900 rounded-tr-lg rounded-br-lg rounded-bl-lg relative bottom-[2rem]  ">No link</p>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-center mt-3 text-white font-bold first-letter:text-3xl">Project: <span className="text-[#A99985] font-extrabold">&nbsp;&nbsp;{active.name}</span></h1>
                <h3 className="text-xl first-letter:text-3xl text-center text-white mt-[-0.3rem] font-bold">Contributor name: <span className="font-extrabold text-[#A99985]">&nbsp;&nbsp;{active.contributorName}</span></h3>
                <h4 className="text-xl text-[#584933] indent-14 font-bold mt-4">{active.description}</h4>
            </div>
        </section>
    )
}

export default ProjectDescription
