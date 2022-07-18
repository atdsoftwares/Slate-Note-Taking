import { axios, toast } from "../Utils/CustomUtils";

export async function getArchiveNotesFn(notesArchiveFn) {
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
    toast.success("notes fetched from archive");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function postArchiveNotesFn(_id, note, notesTakingFn) {
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
    toast.success("note added to archive");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

// working

export async function deleteArchiveNotesFn(_id, notesArchiveFn) {
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
    toast.success("note deleted from archive");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
// working
export async function restoreArchiveNotesFn(_id, notesArchiveFn) {
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
    toast.success("note restored from archive");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
