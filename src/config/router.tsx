import { createHashRouter, RouteObject } from "react-router";
import { ErrorPage } from "@/components/pages/ErrorPage";
import { pages } from "@/config/pages";

export const router = createHashRouter([
  {
    path: "/",
    children: pages.map(({path, element}) => ({
      path, 
      element
    } as RouteObject)),
    errorElement: <ErrorPage />,
  },
]);
