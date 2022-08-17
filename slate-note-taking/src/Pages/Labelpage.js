import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header, Sidebar } from "../Components/IndexAllComponents";
import LabelNotesCard from "../Components/NotesCard/LabelNotesCard";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

function Labelpage() {
  const { notesTakingFn, getNotesData, priorityData } = useNoteTakingContext();
  console.log(
    "🚀 ~ file: Labelpage.js ~ line 10 ~ Labelpage ~ priorityData",
    priorityData
  );

  const params = useParams();
  console.log("🚀 ~ file: Labelpage.js ~ line 12 ~ Labelpage ~ params", params);

  const labeledData = priorityData.filter(
    (f) => f.labelInputBoxValue === params.label
  );

  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="notes-container" style={{ marginTop: "5rem" }}>
        {labeledData &&
          labeledData.map((labeledNotesData) => (
            <LabelNotesCard
              key={labeledNotesData._id}
              labeledNotesData={labeledNotesData}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Labelpage;
