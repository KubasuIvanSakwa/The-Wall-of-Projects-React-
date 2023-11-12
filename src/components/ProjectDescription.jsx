import { Link, useParams } from "react-router-dom"
import projects from "../../public/projects.js"

function ProjectDescription() {
    const { idno } = useParams()

    const active = projects.find((item) => item.name === idno)

    return (
        <section className="">
            <Link to='..' className="w-[3rem] flex justify-center items-center text-white text-center h-[3rem] text-3xl rounded-full  hover:bg-[#5f5c59] hover:border hover:border-white">&larr;</Link>
            <div className="h-[20rem] overflow-hidden flex justify-center">
                <img src={active.image} className=""/>
                <div className="w-[15rem] ml-4 h-[20rem] flex flex-col justify-center items-center">

                    <button 
                        className="border p-4 w-[10rem] m-4 border-[#A99985] text-[#b5b8a2] hover:bg-[#b5b8a2] hover:text-black"
                        onClick={() => {
                            window.open(
                                `${active.codeLink}`,
                                '_blank' // <- This is what makes it open in a new window.
                            )}}
                    >
                        Code&nbsp;&nbsp;&#x2B67;
                    </button>
                    <button 
                        className="border p-4 w-[10rem] m-4 border-[#A99985] text-[#b5b8a2] hover:bg-[#b5b8a2] hover:text-black"
                        onClick={() => {
                            window.open(
                                `${active.liveLink}`,
                                '_blank' // <- This is what makes it open in a new window.
                            )}}
                    >
                        Live Demo &nbsp;&nbsp;&#x2B67;
                    </button>

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
