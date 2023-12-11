import { Outlet } from "react-router-dom"

function Content() {
    return (
        <section className="w-full pl-5 pt-6">
            <section className="w-[99%] h-[99%]">
                <Outlet />
        </section>
        </section>
    )
}

export default Content