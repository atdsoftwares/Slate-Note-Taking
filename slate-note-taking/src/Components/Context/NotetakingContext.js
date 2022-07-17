import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Toast from "../Toast/Toast";

const noteTakingContext = createContext();
export const useNoteTakingContext = () => useContext(noteTakingContext);

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
      case "INPUT_SEARCH_NOTES":
        return { ...state, search: action.payload };

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
    search: "",
    labelInputBoxValue: "",
  });

  const {
    textareaBoxValue,
    addToNotes,
    inputTextTitleValue,
    priorityRadioBoxValue,
    notesBgColor,
    notesModal,
    labelInputBoxValue,
    getNotesData,
    inputSearchNotes,
    search,
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
      Toast({ type: "info", message: "new note is added " });
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

  function editData(
    _id,
    labelInputBoxValue,
    textareaBoxValue,
    priorityRadioBoxValue,
    inputTextTitleValue,
    notesBgColor
  ) {
    localStorage.setItem("id", _id);
    localStorage.setItem("labelInputBoxValue", labelInputBoxValue);
    localStorage.setItem("textareaBoxValue", textareaBoxValue);
    localStorage.setItem("priorityRadioBoxValue", priorityRadioBoxValue);
    localStorage.setItem("inputTextTitleValue", inputTextTitleValue);
    localStorage.setItem("notesBgColor", notesBgColor);
    Toast({ type: "info", message: "you can now edit the note !" });
  }

  // search filter
  function sortyBySearchFn(getNotesData, search) {
    const sortedproductdata = [...getNotesData];
    if (search) {
      return sortedproductdata.filter((s) =>
        s.inputTextTitleValue.toLowerCase().includes(search)
      );
    } else {
      return sortedproductdata;
    }
  }

  // search by label
  const sortByCategoryFn = (getNotesData, labelInputBoxValue) => {
    const sortedproductdata = [...getNotesData];

    if (labelInputBoxValue) {
      return sortedproductdata.filter(
        (notes) => notes.labelInputBoxValue === labelInputBoxValue
      );
    }

    return sortedproductdata;
  };

  const sortedData = sortByCategoryFn(getNotesData, labelInputBoxValue);
  const finalData = sortyBySearchFn(sortedData, search);
  // const finalData = sortyBySearchFn(getNotesData, search);

  return (
    <div>
      <noteTakingContext.Provider
        value={{
          notesTakingFn,
          state,
          priorityRadioBoxValue,
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
          inputTextTitleValue,
          inputSearchNotes,
          finalData,
        }}
      >
        {children}
      </noteTakingContext.Provider>
    </div>
  );
}

export default NotetakingContext;
