import projects from '../../public/projects.js'
import ProjectCard from '../components/ProjectCard'

function ProjectHome() {
    const data = projects
    const arrFromObj = Object.getOwnPropertyNames(data);
    return (
        <section className="h-[37rem] w-full p-10 grid grid-cols-4 gap-4"> 
            <div className="text-white jacquard cursor-pointer flex justify-center items-center text-6xl" title='projects-counter'>
                <p>{arrFromObj.length}</p>
            </div>
            {data.map((pr, key) => (
                <ProjectCard key={key} name={pr.contributorName} project={pr.name}/>        
            ))}
        </section>
    )
}

export default ProjectHome