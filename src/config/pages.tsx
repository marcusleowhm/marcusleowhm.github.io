import { AboutMePage } from "@/components/pages/AboutMePage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { ProjectPage } from "@/components/pages/ProjectPage";

export const pages: { [key: string]: string | React.JSX.Element }[] = [
  {
    path: "/",
    title: "About Me",
    element: <AboutMePage />,
  },
  {
    path: "/experience",
    title: "Experience",
    element: <ExperiencePage />
  },
  // {
  //   path: "/projects",
  //   title: "Projects",
  //   element: <ProjectPage />
  // }
];
