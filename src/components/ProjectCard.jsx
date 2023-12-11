import { Link } from 'react-router-dom'

function ProjectCard(props) {

    return (
        <Link 
            className="border border-[#A99985] text-[#b5b8a2] h-[6rem] p-4 rounded-sm flex flex-col justify-center items-center hover:bg-[#b5b8a2] hover:text-black"
            to={`description/${props.project}`}
        >
                <h1>{props.project}</h1>
                <h4>by {props.name}</h4>
        </Link>  
    )
}

export default ProjectCard