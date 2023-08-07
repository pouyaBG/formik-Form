import { useState } from "react";
import "./App.css";
import BasicForm from "./components/BasicForm";
import AdvancForm from "./components/AdvanceForm";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanse")}
          style={{ color: view === "advanse" ? "#fff" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancForm />}
    </div>
  );
}

export default App;
