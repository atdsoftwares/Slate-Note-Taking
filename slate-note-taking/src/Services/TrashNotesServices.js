import { axios, toast } from "../Utils/CustomUtils";

export async function getTrashedNotesFn(notesTrashFn) {
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
    toast.success("notes fetched into trash");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function postNotesToTrashFn(_id, note, notesTakingFn) {
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
    toast.success("note added to trash");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

// working

export async function deleteTrashedNotesFn(_id, notesTrashFn) {
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
    toast.success("note deleted from trash");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
// working
export async function restoreTrashedNotesFn(_id, notesTrashFn) {
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
    toast.success("note restored from trash");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
