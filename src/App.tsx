import "@/assets/styles/main.scss";
import React from "react";
import config from "../config/profile.json";
import { Hero } from "./components/Hero";
import { Tab } from "./components/TabContainer";

function App() {
  React.useEffect(() => {
    document.title = `${config.name}'s Profile`
  },[])

  return (
    <>
      <div className="flex flex-col h-full">
        <Hero />
        <Tab />
      </div>
    </>
  )
}

export default App
