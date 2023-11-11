import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Content from "./components/Content"
import Hero from "./components/Hero"
import _404 from "./components/_404"
import  LeaderBoard from "./pages/LeaderBoard"
import Contribute from "./pages/Contribute"
import Projects from "./pages/Projects"
import Create from "./pages/Create"
import Meme from "./pages/Meme"

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
      <Route>
        <Route element={<Layout />} >
          <Route path="/" element={<Content />}>
            <Route index element={<Hero />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="contribute" element={<Contribute/>} />
            <Route path="projects" element={<Projects />} />
            <Route path="create" element={<Create />} />
            <Route path="meme" element={<Meme />} />
          </Route>
          <Route path="*" element={<_404 />} />
        </Route>
      </Route>
  ))

  return (
      <RouterProvider router={routes} />
  )
}

export default App
