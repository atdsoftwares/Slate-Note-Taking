import React, { useEffect } from "react";
import { useDeleteNotesContext } from "../Components/Context/ArchiveNotesContext";
import { useNoteTakingContext } from "../Components/Context/NotetakingContext";
import { useTrashNotesContext } from "../Components/Context/TrashNotesContext";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TrashNotesCard from "../Components/NotesCard/TrashNotesCard";
import Sidebar from "../Components/Sidebar/Sidebar";

function Trashpage() {
  const { getTrashedNotes, getTrashedNotesFn } = useTrashNotesContext();

  useEffect(() => {
    getTrashedNotesFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        {getTrashedNotes.length <= 0 ? (
          <h1 className="header-text">
            {" "}
            No notes to display in trash page, add some ..!
          </h1>
        ) : (
          <div className="notes-container">
            {getTrashedNotes.map((trashnotesdata) => (
              <TrashNotesCard
                trashnotesdata={trashnotesdata}
                key={trashnotesdata._id}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Trashpage;
