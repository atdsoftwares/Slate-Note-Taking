import { Route, Routes } from "./Utils/CustomUtils";
import "./App.css";
import { Auth } from "./Components/IndexAllComponents";
import {
  Accountpage,
  Archivespage,
  Editnotespage,
  Homepage,
  Loginpage,
  Signuppage,
  Trashpage,
  Welcomepage,
} from "./Pages/IndexAllPages";

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
    </div>
  );
}

export default App;
