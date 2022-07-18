import { React, useEffect } from "../Utils/CustomUtils";
import { useNoteTakingContext } from "../Context/IndexAllContext";

import "./Homepage.css";
import {
  Filters,
  Footer,
  Header,
  NotesCard,
  NotesModal,
  Sidebar,
} from "../Components/IndexAllComponents";
import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

function Homepage() {
  const { finalData, notesTakingFn } = useNoteTakingContext();

  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <Filters />

      <div>
        {finalData.length <= 0 ? (
          <h1 className="header-text">
            No notes to display in Homepage , add some from
            <NotesModal />
          </h1>
        ) : (
          <div className="notes-container">
            {finalData &&
              finalData.map((notes) => (
                <NotesCard notesData={notes} key={notes._id} />
              ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
