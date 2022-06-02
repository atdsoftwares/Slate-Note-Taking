import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
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
      case "LABELRADIOBOXVALUE":
        return { ...state, labelRadioBoxValue: action.payload };
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
    labelRadioBoxValue: "",
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
  } = state;
  console.log(
    "🚀 ~ file: NotetakingContext.js ~ line 70 ~ NotetakingContext ~ addToNotes",
    addToNotes
  );
  console.log(
    "🚀 ~ file: NotetakingContext.js ~ line 70 ~ NotetakingContext ~ labelInputBoxValue",
    labelInputBoxValue
  );

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
    const note = [
      {
        _id: uuid(),
        inputTextTitleValue,
        priorityRadioBoxValue,
        // labelRadioBoxValue,
        labelInputBoxValue,
        textareaBoxValue,
        notesBgColor,
        noteCreationTime,
      },
    ];
    try {
      await axios({
        method: "POST",
        url: `/api/notes/`,
        headers: { authorization: localStorage.getItem("token") },
        data: { note },
      }).then((response) =>
        notesTakingFn({
          type: "ADDTONOTES",
          payload: response.data.notes,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }

    notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: "" });
    notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: "" });
    notesTakingFn({ type: "LABELRADIOBOXVALUE", payload: "" });
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
  useEffect(() => {
    getNotesDataFromAPIFn();
  }, []);

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
        }}
      >
        {children}
      </noteTakingContext.Provider>
    </div>
  );
}

export default NotetakingContext;
