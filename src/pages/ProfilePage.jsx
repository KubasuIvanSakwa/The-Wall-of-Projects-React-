import { useParams } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"

function ProfilePage() {
    const { username } = useParams()

    console.log( username )
    return (
        <section className="bg-red-400 w-full h-[90vh]">
            <div className="w-full flex justify-center items-center flex-col">
                <h1>Profile Page</h1>
                <h2>{username}</h2>
            </div>
            
        </section>
    )
}

export default ProfilePage