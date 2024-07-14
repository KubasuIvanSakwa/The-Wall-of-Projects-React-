import projects from "../../public/projects.js"
import ProjectCard from "../components/ProjectCard"

function ProfilePage() {
    const username = localStorage.getItem('name')

    const filterProjects = projects.filter((contributor) => {
        return contributor.contributorName === `${username}`
    })

    return (
        <section className="w-full h-[90vh]">
            <div onClick={() => history.back()} className="w-[3rem] cursor-pointer flex justify-center items-center text-white text-center h-[3rem] text-3xl rounded-full  hover:bg-[#5f5c59] hover:border hover:border-white">&larr;</div>
            <div className="w-full flex justify-center items-center flex-col">
                <h1 className="text-4xl text-[#afa89f]">Profile Page</h1>
                <h2 className="text-2xl text-[#615b54]">{username}</h2>
                <h3 className="text-6xl jacquard text-[#ffffff]">{filterProjects.length}</h3>
            </div>
            <div className="grid grid-cols-3 p-5 gap-4 h-fit">
                {filterProjects.map((item) => (
                    <ProjectCard key={item.name} project={item.name} name={item.contributorName}/>
                ))}
            </div>
        </section>
    )
}

export default ProfilePage