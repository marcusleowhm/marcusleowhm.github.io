import { createBrowserRouter } from "react-router";
import { HomePage } from "@/components/pages/HomePage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { ProjectPage } from "@/components/pages/ProjectPage";

export const router = createBrowserRouter([
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
])