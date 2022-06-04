import React, { useEffect } from "react";
import { useArchiveContext } from "../Components/Context/ArchiveNotesContext";
import { useNoteTakingContext } from "../Components/Context/NotetakingContext";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ArchiveNotesCard from "../Components/NotesCard/ArchiveNotesCard";
import Sidebar from "../Components/Sidebar/Sidebar";

function Archivespage() {
  const { getArchiveNotesFn, getArchivedNotes } = useArchiveContext();

  useEffect(() => {
    getArchiveNotesFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />

      <div>
        {getArchivedNotes.length <= 0 ? (
          <h1 className="header-text">
            {" "}
            No notes to display in archive page, add some !
          </h1>
        ) : (
          <div className="notes-container">
            {getArchivedNotes.map((archivenotesdata) => (
              <ArchiveNotesCard
                archivenotesdata={archivenotesdata}
                key={archivenotesdata._id}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Archivespage;
