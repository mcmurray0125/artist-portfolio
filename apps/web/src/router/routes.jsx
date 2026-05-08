import { createBrowserRouter } from "react-router"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Artwork from "../pages/Artwork.jsx"
import ArtDetail from "../pages/ArtDetail.jsx"

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/artwork", element: <Artwork /> },
  { path: "/artwork-detail/:artworkSlug", element: <ArtDetail /> },
])

export default router