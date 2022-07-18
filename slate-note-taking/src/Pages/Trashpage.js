import { useEffect } from "../Utils/CustomUtils";
import { useTrashNotesContext } from "../Context/IndexAllContext";
import {
  Footer,
  Header,
  Sidebar,
  TrashNotesCard,
} from "../Components/IndexAllComponents";
import { getTrashedNotesFn } from "../Services/TrashNotesServices";

function Trashpage() {
  const { getTrashedNotes, notesTrashFn } = useTrashNotesContext();

  useEffect(() => {
    getTrashedNotesFn(notesTrashFn);
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
          <div className="notes-container" style={{ marginTop: "5rem" }}>
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
