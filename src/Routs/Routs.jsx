import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";

import Blog from "../components/Blog/Blog";
import Details from "../components/Home/FeaturedJobs/Details";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import appliedJobsLoader from "../loaders/appliedJobsLoader";

export const routs = createBrowserRouter([
    /*routs*/

    {
        path: "/",
        element: <Main />,

        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/public/Jobs.json'),

            },
            {
                path: "/statistics",
                element: <Statistics />,

            },
            {
                path: "/appliedJobs",
                element: <AppliedJobs />,
                loader: appliedJobsLoader
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/details/:id",
                element: <Details />
            },
        ]
    }
])