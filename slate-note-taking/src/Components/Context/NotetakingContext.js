import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import InputNotes from "../InputNotes/InputNotes";
const noteTakingContext = createContext();
export const useNoteTakingContext = () => useContext(noteTakingContext);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwMzA4ZDA3NC1iY2RkLTRjMTEtYmVkOS0wMzhhZWRhZmM0ZjciLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.yj4z6vXmZHq66VSH7-pQ9JoPjZR6WJcVgDKejj3vJfk";

localStorage.setItem("token", token);
function NotetakingContext({ children }) {
  function notesReducerFn(state, action) {
    switch (action.type) {
      case "GETNOTESDATAFROMAPI":
        return { ...state, getNotesData: action.payload };
      case "POSTNOTESDATAINTOAPI":
        return { ...state, postNotesData: action.payload };
      case "INPUTTEXTTITLEVALUE":
        return { ...state, inputTextTitleValue: action.payload };
      case "PRIORITYRADIOBOXVALUE":
        return { ...state, priorityRadioBoxValue: action.payload };
      case "LABELINPUTBOXVALUE":
        return { ...state, labelInputBoxValue: action.payload };
      case "TEXTAREABOXVALUE":
        return { ...state, textareaBoxValue: action.payload };
      case "ADDTONOTES":
        return { ...state, addToNotes: action.payload };
      case "NOTESBGCOLOR":
        return { ...state, notesBgColor: action.payload };
      case "NOTETAKINGMODAL":
        return { ...state, notesModal: action.payload };
      case "NOTECREATEDAT":
        return { ...state, noteCreationTime: action.payload };

      default:
        return state;
    }
  }

  const noteCreatedAt = new Date();
  const noteCreationTime = new Date(noteCreatedAt).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const [state, notesTakingFn] = useReducer(notesReducerFn, {
    getNotesData: [],
    postNotesData: [],
    addToNotes: [],
    inputTextTitleValue: "",
    priorityRadioBoxValue: "",
    textareaBoxValue: "",
    notesBgColor: "",
    notesModal: "none",
    noteCreationTime: "",
    labelInputBoxValue: "",
  });

  const {
    textareaBoxValue,
    addToNotes,
    inputTextTitleValue,
    priorityRadioBoxValue,
    labelRadioBoxValue,
    notesBgColor,
    notesModal,
    labelInputBoxValue,
    getNotesData,
  } = state;

  // get notes from Db
  async function getNotesDataFromAPIFn() {
    try {
      await axios({
        method: "GET",
        url: `/api/notes/`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesTakingFn({
          type: "GETNOTESDATAFROMAPI",
          payload: response.data.notes,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  async function addNotesintoDb(e) {
    e.preventDefault();
    const note = {
      _id: uuid(),
      inputTextTitleValue,
      priorityRadioBoxValue,
      labelInputBoxValue,
      textareaBoxValue,
      notesBgColor,
      noteCreationTime,
    };

    try {
      await axios({
        method: "POST",
        url: `/api/notes/`,
        headers: { authorization: localStorage.getItem("token") },
        data: { note },
      }).then((response) =>
        notesTakingFn({
          type: "GETNOTESDATAFROMAPI",
          payload: response.data.notes,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }

    notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: "" });
    notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: "" });
    notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: "" });
    notesTakingFn({ type: "TEXTAREABOXVALUE", payload: "" });
    notesTakingFn({ type: "NOTESBGCOLOR", payload: "" });
    notesTakingFn({ type: "NOTETAKINGMODAL", payload: "none" });
  }

  function toggleNotes() {
    notesTakingFn({
      type: "NOTETAKINGMODAL",
      payload: notesModal === "none" ? "block" : "none",
    });
  }

  const [getParams, setGetParams] = useState();
  const [newData, setNewData] = useState([]);
  console.log(
    "🚀 ~ file: NotetakingContext.js ~ line 139 ~ NotetakingContext ~ newData",
    newData
  );

  async function editData(getParams) {
    const newData1 = getNotesData.find((elem) => {
      return elem._id === getParams;
    });
    notesTakingFn({
      type: "ADDTONOTES",
      payload: newData1,
    });
  }

  return (
    <div>
      <noteTakingContext.Provider
        value={{
          notesTakingFn,
          state,
          priorityRadioBoxValue,
          labelRadioBoxValue,
          textareaBoxValue,
          addNotesintoDb,
          addToNotes,
          notesBgColor,
          notesModal,
          toggleNotes,
          labelInputBoxValue,
          getNotesData,
          getNotesDataFromAPIFn,
          editData,
          setGetParams,
          newData,
        }}
      >
        {children}
      </noteTakingContext.Provider>
    </div>
  );
}

export default NotetakingContext;
