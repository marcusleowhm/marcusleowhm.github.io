import "@/assets/styles/main.scss";
import { GridLayout12Cols } from "./components/layout/GridLayout12Cols";
import { Navbar } from "./components/nav/Navbar";

function App() {
  return (
    <div>
      <GridLayout12Cols>
         <Navbar className="col-start-2 col-span-10"/>
      </GridLayout12Cols>
    </div>
  )
}

export default App;
