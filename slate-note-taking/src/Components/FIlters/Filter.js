import { React, useEffect, useState } from "react";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import "./Filter.css";
function Filter() {
  const { getNotesData, getNotesDataFromAPIFn, notesTakingFn, finalData } =
    useNoteTakingContext();

  useEffect(() => {
    getNotesDataFromAPIFn();
  }, []);
  const [data, setData] = useState(getNotesData);
  console.log("🚀 ~ file: Filter.js ~ line 12 ~ Filter ~ data", data);

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
