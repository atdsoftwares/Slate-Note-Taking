import { React, useEffect } from "react";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import "./Filter.css";
function Filter() {
  const { getNotesData, getNotesDataFromAPIFn, notesTakingFn, label } =
    useNoteTakingContext();

  useEffect(() => {
    getNotesDataFromAPIFn();
  }, []);

  return (
    <div className="filter">
      <div className="date-time">
        Sort by :
        <input type="datetime-local" />
      </div>
      <div className="chips-container1">
        Label:
        {getNotesData.map((notes) => {
          return (
            <input
              type="submit"
              className="chips"
              value={notes.labelInputBoxValue}
              onClick={() =>
                notesTakingFn({
                  type: "label",
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
