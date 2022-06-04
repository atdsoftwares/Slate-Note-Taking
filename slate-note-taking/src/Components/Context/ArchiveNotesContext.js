import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import Toast from "../Toast/Toast";
import { useNoteTakingContext } from "./NotetakingContext";

const archiveContext = createContext();
export const useArchiveContext = () => useContext(archiveContext);

function ArchiveNotesContext({ children }) {
  const { addToNotes, notesTakingFn } = useNoteTakingContext();
  function notesArchiveReducerFn(state, action) {
    switch (action.type) {
      case "ADD_NOTES_TO_ARCHIVES":
        return { ...state, addNotesToArchives: action.payload };
      case "GET_ACRCHIVED_NOTES":
        return { ...state, getArchivedNotes: action.payload };
      case "RESTORE_ACRCHIVED_NOTES":
        return { ...state, restoreArchivedNotes: action.payload };
      default:
        return state;
    }
  }

  const [state, notesArchiveFn] = useReducer(notesArchiveReducerFn, {
    addNotesToArchives: [],
    getArchivedNotes: [],
    restoreArchivedNotes: [],
  });

  const { addNotesToArchives, getArchivedNotes, restoreArchivedNotes } = state;

  async function getArchiveNotesFn() {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/archives/`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesArchiveFn({
          type: "GET_ACRCHIVED_NOTES",
          payload: response.data.archives,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  async function postArchiveNotesFn(_id, note) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/notes/archives/${note._id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { note: note },
      }).then((response) =>
        notesTakingFn({
          type: "GETNOTESDATAFROMAPI",
          payload: response.data.notes,
        })
      );
      Toast({ type: "info", message: "note added to archive" });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  // working

  async function deleteArchiveNotesFn(_id) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/archives/delete/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesArchiveFn({
          type: "GET_ACRCHIVED_NOTES",
          payload: response.data.archives,
        })
      );
      Toast({ type: "info", message: "note deleted from archive" });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }
  // working
  async function restoreArchiveNotesFn(_id) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/archives/restore/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      }).then((response) =>
        notesArchiveFn({
          type: "GET_ACRCHIVED_NOTES",
          payload: response.data.archives,
        })
      );
      Toast({
        type: "info",
        message: "note restored from archive to homepage",
      });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  return (
    <div>
      <archiveContext.Provider
        value={{
          postArchiveNotesFn,
          getArchiveNotesFn,
          getArchivedNotes,
          deleteArchiveNotesFn,
          restoreArchiveNotesFn,
        }}
      >
        {children}
      </archiveContext.Provider>
    </div>
  );
}

export default ArchiveNotesContext;
