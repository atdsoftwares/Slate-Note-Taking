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
      case "PRIORITY_LABEL":
        return { ...state, priorityLabel: action.payload };

      case "low":
        return {
          ...state,
          priorityRadioBoxValue: {
            ...state["priorityRadioBoxValue"],
            low: !state.priorityRadioBoxValue.low,
          },
        };

      case "top":
        return {
          ...state,
          priorityRadioBoxValue: {
            ...state["priorityRadioBoxValue"],
            top: !state.priorityRadioBoxValue.top,
          },
        };

      case "medium":
        return {
          ...state,
          priorityRadioBoxValue: {
            ...state["priorityRadioBoxValue"],
            medium: !state.priorityRadioBoxValue.medium,
          },
        };
      case "All": {
        return {
          ...state,
          priorityRadioBoxValue: {
            ...state["priorityRadioBoxValue"],
            top: false,
            low: false,
            medium: false,
          },
        };
      }
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
    // priorityRadioBoxValue: "",
    textareaBoxValue: null,
    notesBgColor: null,
    noteCreationTime: "",
    search: "",
    labelInputBoxValue: "",
    priorityLabel: "",
    priorityRadioBoxValue: {
      low: false,
      medium: false,
      top: false,
    },
  });

  const {
    textareaBoxValue,
    addToNotes,
    inputTextTitleValue,
    priorityRadioBoxValue,
    notesBgColor,
    labelInputBoxValue,
    getNotesData,
    inputSearchNotes,
    search,
    priorityLabel,
  } = state;

  // search filter
  function sortyBySearchFn(getNotesData, search) {
    const sortedproductdata = [...getNotesData];
    if (search) {
      return sortedproductdata.filter((s) =>
        s.inputTextTitleValue.toLowerCase().includes(search)
      );
    }
    return sortedproductdata;
  }

  // search by priority

  const searchByPriorityFn = (getNotesData, priorityRadioBoxValue) => {
    const sortedproductdata = [...getNotesData];

    if (priorityLabel === "top") {
      return getNotesData.filter(
        (notes) => notes.priorityRadioBoxValue === "top"
      );
    }
    if (priorityLabel === "medium") {
      return getNotesData.filter(
        (notes) => notes.priorityRadioBoxValue === "medium"
      );
    }

    if (priorityLabel === "low") {
      return getNotesData.filter(
        (notes) => notes.priorityRadioBoxValue === "low"
      );
    }

    if (priorityLabel === "All") {
      return getNotesData.filter(
        (notes) => notes.priorityRadioBoxValue !== "low" && "medium" && "high"
      );
    }

    return sortedproductdata;
  };

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
  const priorityData = searchByPriorityFn(finalData, priorityRadioBoxValue);

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
          labelInputBoxValue,
          getNotesData,
          inputTextTitleValue,
          inputSearchNotes,
          finalData,
          noteCreationTime,
          priorityData,
          priorityLabel,
        }}
      >
        {children}
      </noteTakingContext.Provider>
    </div>
  );
}

export default NotetakingContext;
