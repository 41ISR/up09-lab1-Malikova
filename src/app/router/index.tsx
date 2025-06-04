import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movie from "../../pages/Movie/Movie";
import LikedMovies from "../../pages/LikedMovies/LikedMovies";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/movie/:movie",
        element: <Movie />,
    },
    {
        path: "/liked",
        element: <LikedMovies />,
    }
])
export default router