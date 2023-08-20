import logo from "./logo.svg";
import "./App.css";
import SidePanel from "./Componentse/SidePanel";
import Interact from "./Componentse/Interact";
import InitialPop from "./Componentse/InitialPop";
import Navbar from "./Componentse/Navbar";
function App() {
  return (
    <div className="Home">
      <Navbar />
      <SidePanel />
      <Interact />
      <InitialPop />
    </div>
  );
}

export default App;
