import { createHashRouter } from "react-router";
import { HomePage } from "@/components/pages/HomePage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { ProjectPage } from "@/components/pages/ProjectPage";
import { ErrorPage } from "./components/pages/ErrorPage";

export const router = createHashRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <HomePage />   
            },
            {
                path: "/experience",
                element: <ExperiencePage />
            },
            {
                path: "/projects",
                element: <ProjectPage />
            }
        ],
        errorElement: <ErrorPage />
    },
    
])