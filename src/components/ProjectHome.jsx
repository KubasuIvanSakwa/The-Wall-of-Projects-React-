import projects from '../../public/projects.js'
import ProjectCard from '../components/ProjectCard'

function ProjectHome() {
    const data = projects
    return (
        <section className="h-[37rem] w-full p-10 grid grid-cols-4 gap-4"> 
            {data.map((pr, key) => (
                <ProjectCard key={key} name={pr.contributorName} project={pr.name}/>        
            ))}
        </section>
    )
}

export default ProjectHome