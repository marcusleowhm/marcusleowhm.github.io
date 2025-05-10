import { createHashRouter } from "react-router";
import { AboutMe } from "@/components/pages/AboutMePage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { ProjectPage } from "@/components/pages/ProjectPage";
import { ErrorPage } from "./components/pages/ErrorPage";

export const router = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
