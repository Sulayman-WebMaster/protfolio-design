import { createBrowserRouter } from "react-router";
import App from "../App";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter(
 [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index:true,
                element: <h1>hello</h1>,
            }
        ]
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    },
    {
        path: "/projects/:id",
        element: <ProjectDetails/>
    }


],



) 