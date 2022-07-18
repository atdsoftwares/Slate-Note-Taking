import { createContext, useContext, useReducer } from "../Utils/CustomUtils";

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
      case "NOTECREATEDAT":
        return { ...state, noteCreationTime: action.payload };
      case "INPUT_SEARCH_NOTES":
        return { ...state, search: action.payload };
      case "NOTE_TAKING_MODAL":
        return { ...state, isOpen: action.payload };

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
    inputTextTitleValue: null,
    priorityRadioBoxValue: null,
    textareaBoxValue: null,
    notesBgColor: null,
    noteCreationTime: "",
    search: "",
    isOpen: false,
    labelInputBoxValue: "",
  });

  const {
    textareaBoxValue,
    addToNotes,
    inputTextTitleValue,
    priorityRadioBoxValue,
    notesBgColor,
    isOpen,
    labelInputBoxValue,
    getNotesData,
    inputSearchNotes,
    search,
  } = state;

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
          addToNotes,
          notesBgColor,
          isOpen,
          labelInputBoxValue,
          getNotesData,
          inputTextTitleValue,
          inputSearchNotes,
          finalData,
          noteCreationTime,
        }}
      >
        {children}
      </noteTakingContext.Provider>
    </div>
  );
}

export default NotetakingContext;
