import { Route, Routes } from "react-router-dom";
import "./App.css";
import Archivespage from "./Pages/Archivespage";
import Homepage from "./Pages/Homepage";
import Labelspage from "./Pages/Labelspage";
import Trashpage from "./Pages/Trashpage";

import Welcomepage from "./Pages/Welcomepage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Welcomepage />} />
        <Route exact path="/Home" element={<Homepage />} />
        <Route exact path="/Labels" element={<Labelspage />} />
        <Route exact path="/Archives" element={<Archivespage />} />
        <Route exact path="/Trash" element={<Trashpage />} />
      </Routes>
    </div>
  );
}

export default App;
