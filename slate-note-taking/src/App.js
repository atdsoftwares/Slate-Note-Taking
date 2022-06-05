import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Auth from "./Components/Auth/Auth";
import Accountpage from "./Pages/Accountpage";
import Archivespage from "./Pages/Archivespage";
import Editnotespage from "./Pages/Editnotespage";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Trashpage from "./Pages/Trashpage";

import Welcomepage from "./Pages/Welcomepage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Welcomepage />} />
        <Route
          exact
          path="/Home"
          element={
            <Auth>
              <Homepage />
            </Auth>
          }
        />
        <Route
          exact
          path="/Archives"
          element={
            <Auth>
              <Archivespage />
            </Auth>
          }
        />
        <Route
          exact
          path="/Trash"
          element={
            <Auth>
              <Trashpage />
            </Auth>
          }
        />
        <Route
          exact
          path="/Edit/:_id"
          element={
            <Auth>
              <Editnotespage />
            </Auth>
          }
        />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route
          exact
          path="/accounts"
          element={
            <Auth>
              <Accountpage />
            </Auth>
          }
        />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
