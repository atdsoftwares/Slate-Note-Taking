import { React, useEffect } from "../Utils/CustomUtils";
import { useArchiveContext } from "../Context/IndexAllContext";
import {
  ArchiveNotesCard,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";
import { getArchiveNotesFn } from "../Services/ArchiveNotesServices";

function Archivespage() {
  const { getArchivedNotes, notesArchiveFn } = useArchiveContext();

  useEffect(() => {
    getArchiveNotesFn(notesArchiveFn);
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
          <div className="notes-container" style={{ marginTop: "5rem" }}>
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
