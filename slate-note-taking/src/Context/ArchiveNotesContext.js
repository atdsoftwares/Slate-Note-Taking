import { createContext, useContext, useReducer } from "../Utils/CustomUtils";

const archiveContext = createContext();
export const useArchiveContext = () => useContext(archiveContext);

function ArchiveNotesContext({ children }) {
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

  return (
    <div>
      <archiveContext.Provider
        value={{
          getArchivedNotes,
          addNotesToArchives,
          restoreArchivedNotes,
          notesArchiveFn,
        }}
      >
        {children}
      </archiveContext.Provider>
    </div>
  );
}

export default ArchiveNotesContext;
