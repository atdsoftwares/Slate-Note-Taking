import { createContext, useContext, useReducer } from "../Utils/CustomUtils";

const trashNotesContext = createContext();
export const useTrashNotesContext = () => useContext(trashNotesContext);

function TrashNotesContext({ children }) {
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

  //
  return (
    <div>
      <trashNotesContext.Provider
        value={{
          getTrashedNotes,
          addNotesToTrash,
          restoreTrashedNotes,
          notesTrashFn,
        }}
      >
        {children}
      </trashNotesContext.Provider>
    </div>
  );
}

export default TrashNotesContext;
