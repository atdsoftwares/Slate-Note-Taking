import { React, useEffect } from "../Utils/CustomUtils";
import { useNoteTakingContext } from "../Context/IndexAllContext";

import {
  Filters,
  Footer,
  Header,
  InputNotes,
  NotesCard,
  NotesModal,
  Sidebar,
} from "../Components/IndexAllComponents";
import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

function Homepage() {
  const { finalData, notesTakingFn, priorityData } = useNoteTakingContext();
  console.log(
    "🚀 ~ file: Homepage.js ~ line 17 ~ Homepage ~ priorityData",
    priorityData
  );

  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <Filters />

      <div className="flex justify-center items-center absolute top-40 left-64">
        {finalData.length <= 0 ? (
          <h1 className="header-text">
            No notes to display in Homepage , add some from
            <NotesModal />
          </h1>
        ) : (
          <div className="notes-container">
            {priorityData &&
              priorityData.map((notes) => (
                <NotesCard notesData={notes} key={notes._id} />
              ))}
          </div>
        )}
      </div>
      {/* <InputNotes /> */}
      <Footer />
    </div>
  );
}

export default Homepage;
