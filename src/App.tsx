import "@/assets/styles/main.scss";
import { RouterProvider } from "react-router";
import { router } from "@/config/router";

function App() {
  return (
    <div className="flex flex-col h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
