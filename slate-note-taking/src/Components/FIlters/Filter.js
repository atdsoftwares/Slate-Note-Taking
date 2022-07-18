import { React, useEffect, useState } from "../../Utils/CustomUtils";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import "./Filter.css";
import { getNotesDataFromAPIFn } from "../../Services/NoteTakingServices";
function Filter() {
  const { getNotesData, notesTakingFn } = useNoteTakingContext();
  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, []);
  const [data, setData] = useState(getNotesData);

  return (
    <div className="filter">
      <div className="chips-container1">
        Sort By Label:
        <button value="All" className="chips" onClick={() => setData(data)}>
          ALl
        </button>
        {getNotesData &&
          getNotesData.map((notes) => {
            return (
              <button
                key={notes._id}
                className="chips"
                value={notes.labelInputBoxValue}
                onClick={() =>
                  notesTakingFn({
                    type: "LABELINPUTBOXVALUE",
                    payload: notes.labelInputBoxValue,
                  })
                }
              >
                {notes.labelInputBoxValue}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default Filter;
