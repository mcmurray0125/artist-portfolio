import { createBrowserRouter } from "react-router"
import Home from "../pages/Home.jsx"
import Artwork from "../pages/Artwork.jsx"

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/artwork", element: <Artwork /> },
])

export default router