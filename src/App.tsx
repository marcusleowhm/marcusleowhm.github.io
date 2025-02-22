import "@/assets/styles/main.scss";
import { Hero } from "./components/Hero";
import { Tab } from "./components/TabContainer";

function App() {
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
