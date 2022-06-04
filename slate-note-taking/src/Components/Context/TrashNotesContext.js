import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNoteTakingContext } from "./NotetakingContext";

const trashNotesContext = createContext();
export const useTrashNotesContext = () => useContext(trashNotesContext);

function TrashNotesContext({ children }) {
  const { addToNotes, notesTakingFn } = useNoteTakingContext();
  function notesArchiveReducerFn(state, action) {
    switch (action.type) {
      case "ADD_NOTES_TO_TRASH":
        return { ...state, addNotesToTrash: action.payload };
      case "GET_TRASH_NOTES":
        return { ...state, getTrashedNotes: action.payload };
      case "RESTORE_TRASH_NOTES":
        return { ...state, restoreTrashedNotes: action.payload };
      default:
        return state;
    }
  }

  const [state, notesTrashFn] = useReducer(notesArchiveReducerFn, {
    addNotesToTrash: [],
    getTrashedNotes: [],
    restoreTrashedNotes: [],
  });

  const { addNotesToTrash, getTrashedNotes, restoreTrashedNotes } = state;

  async function getTrashedNotesFn() {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/trash/`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesTrashFn({
          type: "GET_TRASH_NOTES",
          payload: response.data.trash,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  async function postNotesToTrashFn(_id, note) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/notes/trash/${note._id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { note: note },
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

  // working

  async function deleteTrashedNotesFn(_id) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/trash/delete/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesTrashFn({
          type: "GET_TRASH_NOTES",
          payload: response.data.trash,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }
  // working
  async function restoreTrashedNotesFn(_id) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/trash/restore/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesTrashFn({
          type: "GET_TRASH_NOTES",
          payload: response.data.trash,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }
  return (
    <div>
      <trashNotesContext.Provider
        value={{
          deleteTrashedNotesFn,
          restoreTrashedNotesFn,
          getTrashedNotes,
          getTrashedNotesFn,
          postNotesToTrashFn,
        }}
      >
        {children}
      </trashNotesContext.Provider>
    </div>
  );
}

export default TrashNotesContext;
