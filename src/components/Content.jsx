import { Outlet } from "react-router-dom"

function Content() {
    return (
        <section className="w-full pl-5 pt-6 overflow-hidden">
            <section className="w-[99%] h-[99%]">
                <section className="overflow-y-auto">
                    <Outlet />
                </section>
        </section>
        </section>
    )
}

export default Content