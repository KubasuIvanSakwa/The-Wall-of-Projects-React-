import Content from "../components/Content"
import Nav from "../components/Nav"

function Layout() {
    return (
        <section className="h-[100vh] bg-[#252323] flex"> 
            <Nav />
            <Content />
        </section>
    )
}

export default Layout