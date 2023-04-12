import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import AppliedJobs from "../components/appliedJobs/appliedJobs";
import Blog from "../components/Blog/Blog";

export const routs = createBrowserRouter([
    /*routs*/
    {
        path: "/",
        element: <Main />,
        loader: fetch('/public/Jobs.json'),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/statistics",
                element: <Statistics />,

            },
            {
                path: "/appliedJobs",
                element: <AppliedJobs />
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]

    }

])