import { axios, toast, uuid } from "../Utils/CustomUtils";

// get notes from Db
export async function getNotesDataFromAPIFn(notesTakingFn) {
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

export async function addNotesintoDbFn(
  e,
  inputTextTitleValue,
  priorityRadioBoxValue,
  labelInputBoxValue,
  textareaBoxValue,
  notesBgColor,
  noteCreationTime,
  notesTakingFn
) {
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
    toast.success("Note Added Successfully");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export function editData(
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
  toast.success("note is edited");
}
