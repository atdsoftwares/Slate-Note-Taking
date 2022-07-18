import React, { useEffect } from "react";

import { useNoteTakingContext } from "../Components/Context/NotetakingContext";
import Filter from "../Components/FIlters/Filter";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

import InputNotes from "../Components/InputNotes/InputNotes";
import NotesModal from "../Components/Modal/NotesModal";

import Notescard from "../Components/NotesCard/Notescard";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Homepage.css";
function Homepage() {
  const { getNotesData, finalData, toggleNotes, getNotesDataFromAPIFn } =
    useNoteTakingContext();

  useEffect(() => {
    getNotesDataFromAPIFn();
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <Filter />

      <div>
        {finalData.length <= 0 ? (
          <h1 className="header-text">
            No notes to display in Homepage , add some from
            <NotesModal />
          </h1>
        ) : (
          <div className="notes-container">
            {finalData.map((notes) => (
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
