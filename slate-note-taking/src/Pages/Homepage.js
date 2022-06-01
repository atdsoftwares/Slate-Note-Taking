import React from "react";
import { Link } from "react-router-dom";
import { useNoteTakingContext } from "../Components/Context/NotetakingContext";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InputNotes from "../Components/InputNotes/InputNotes";
import Notescard from "../Components/NotesCard/Notescard";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Homepage.css";
function Homepage() {
  const { addToNotes, toggleNotes } = useNoteTakingContext();
  console.log(
    "🚀 ~ file: Homepage.js ~ line 11 ~ Homepage ~ addToNotes",
    addToNotes.length
  );
  return (
    <div>
      <Header />
      <Sidebar />
      <InputNotes />
      <div>
        {addToNotes.length <= 0 ? (
          <h1 className="header-text">
            {" "}
            No notes to display from
            <span onClick={toggleNotes} className="fnpointer">
              {" "}
              here{" "}
            </span>
          </h1>
        ) : (
          <div className="notes-data-container">
            {addToNotes.map((notes) => (
              <Notescard notesData={notes} key={notes._id} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
