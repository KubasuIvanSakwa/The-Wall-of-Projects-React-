import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className=" p-3 flex flex-col h-[100vh] border-r border-r-[#A99985] w-[15rem] shadow-lg">
            <NavLink to="/" className="text-[#F5F1ED] text-xl m-2 mt-[8rem]">&rarr; &nbsp;&nbsp;&nbsp;Home</NavLink>
            {/* <NavLink to="create" className="text-[#F5F1ED] text-xl m-2">&rarr; &nbsp;&nbsp;&nbsp;Create</NavLink> */}
            <NavLink to="contribute" className="text-[#F5F1ED] text-xl m-2">&rarr; &nbsp;&nbsp;&nbsp;Contribute</NavLink>
            <NavLink to="projects" className="text-[#F5F1ED] text-xl m-2">&rarr; &nbsp;&nbsp;&nbsp;Projects</NavLink>
            <NavLink to="leaderboard" className="text-[#F5F1ED] text-xl m-2">&rarr; &nbsp;&nbsp;&nbsp;LeaderBoard</NavLink>
            <NavLink to="meme" className="text-[#F5F1ED] text-xl m-2">&rarr; &nbsp;&nbsp;&nbsp;Dev Memes</NavLink>
        </nav>
    )
}

export default Nav