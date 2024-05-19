import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Layout from "./pages/Layout"
import _404 from "./components/_404"
import Loader from "./components/Loader"
const Content = lazy(() => import("./components/Content"))
const Hero = lazy(() => import("./components/Hero"))
const LeaderBoard = lazy(() => import("./pages/LeaderBoard"))
const Contribute  = lazy(() => import("./pages/Contribute"))
const Projects = lazy(() => import("./pages/Projects"))
const Create  = lazy(() => import("./pages/Create"))
const Meme  = lazy(() => import("./pages/Meme"))
const ProjectDescription  = lazy(() => import('./components/ProjectDescription'))
const ProjectHome = lazy(() => import("./components/ProjectHome"))
const ProfilePage = lazy(() => import("./pages/ProfilePage"))

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
      <Route>
        <Route element={<Layout />} >
            <Route path="/" element={<Content />}>
              <Route index element={<Hero />} />
              <Route path="leaderboard">
                <Route index element={<LeaderBoard />} />
                <Route path="profile/:username" element={<ProfilePage />} />
              </Route>
              <Route path="contribute" element={<Contribute/>} />
              <Route path="projects" element={<Projects />} >
                <Route index element={<ProjectHome/>} />
                <Route path="description/:idno" element={<ProjectDescription />} />
              </Route>
              <Route path="create" element={<Create />} />
              <Route path="meme" element={<Meme />} />
            </Route>
          <Route path="*" element={<_404 />} />
        </Route>
      </Route>
  ))

  return (
    <Suspense  fallback={
      <div className="bg-[#252323] w-full h-[100vh] flex justify-center items-center">
        <Loader />
      </div>
    }>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
