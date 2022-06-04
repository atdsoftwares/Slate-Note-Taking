import React, { useEffect } from "react";

import { useNoteTakingContext } from "../Components/Context/NotetakingContext";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

import InputNotes from "../Components/InputNotes/InputNotes";

import Notescard from "../Components/NotesCard/Notescard";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Homepage.css";
function Homepage() {
  const { getNotesData, toggleNotes, getNotesDataFromAPIFn } =
    useNoteTakingContext();
  console.log(
    "🚀 ~ file: Homepage.js ~ line 14 ~ Homepage ~ getNotesData",
    getNotesData
  );
  useEffect(() => {
    getNotesDataFromAPIFn();
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <InputNotes />
      <div>
        {getNotesData.length <= 0 ? (
          <h1 className="header-text">
            No notes to display in Homepage , add some from
            <span onClick={toggleNotes} className="fnpointer">
              here
            </span>
          </h1>
        ) : (
          <div className="notes-container">
            {getNotesData.map((notes) => (
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
