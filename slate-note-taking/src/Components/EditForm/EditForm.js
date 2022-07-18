import {
  axios,
  toast,
  useEffect,
  useNavigate,
  useState,
} from "../../Utils/CustomUtils";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import RTEEditor from "../../Components/Editor/RTEEditor";
import "./EditForm.css";
function EditForm() {
  const {
    notesTakingFn,
    priorityRadioBoxValue,
    notesBgColor,
    textareaBoxValue,
    labelInputBoxValue,
    inputTextTitleValue,
    isOpen,
  } = useNoteTakingContext();

  const noteCreatedAt = new Date();
  const noteUpdatedAt = new Date(noteCreatedAt).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const [_id, setId] = useState();
  const navigate = useNavigate();
  async function updateNotesDataFn(e) {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: `/api/notes/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: {
          note: {
            labelInputBoxValue,
            textareaBoxValue,
            priorityRadioBoxValue,
            inputTextTitleValue,
            notesBgColor,
            noteUpdatedAt,
          },
        },
      }).then((response) =>
        notesTakingFn({
          type: "GETNOTESDATAFROMAPI",
          payload: response.data.notes,
        })
      );
      toast.success(`Note Updated Successfully`);
      navigate("/Home");
    } catch (error) {
      console.log(`something went wrong`, error);
    }

    notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: null });
    notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: null });
    notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: null });
    notesTakingFn({ type: "TEXTAREABOXVALUE", payload: "" });
    notesTakingFn({ type: "NOTESBGCOLOR", payload: null });
    notesTakingFn({ type: "NOTE_TAKING_MODAL", payload: !isOpen });
  }

  useEffect(() => {
    setId(localStorage.getItem("id"));
    notesTakingFn({
      type: "PRIORITYRADIOBOXVALUE",
      payload: localStorage.getItem("priorityRadioBoxValue"),
    });
    notesTakingFn({
      type: "NOTESBGCOLOR",
      payload: localStorage.getItem("notesBgColor"),
    });
    notesTakingFn({
      type: "INPUTTEXTTITLEVALUE",
      payload: localStorage.getItem("inputTextTitleValue"),
    });
    notesTakingFn({
      type: "LABELINPUTBOXVALUE",
      payload: localStorage.getItem("labelInputBoxValue"),
    });
    notesTakingFn({
      type: "TEXTAREABOXVALUE",
      payload: localStorage.getItem("textareaBoxValue"),
    });
  }, []);
  return (
    <div>
      <div
        className="notes2-container"
        style={{
          backgroundColor: notesBgColor,
        }}
      >
        <div className="form-container1">
          <form onSubmit={updateNotesDataFn}>
            <input
              type="text"
              name="name"
              required
              value={inputTextTitleValue}
              class="navigation__input"
              placeholder="notes Title....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "INPUTTEXTTITLEVALUE",
                  payload: e.target.value,
                })
              }
            />
            <label className="label-radio-box1">
              Priority
              <input
                type="radio"
                name="priority"
                defaultValue="top"
                value={priorityRadioBoxValue}
                required
                checked={priorityRadioBoxValue === "top"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Top
              <input
                type="radio"
                name="priority"
                value={priorityRadioBoxValue}
                required
                defaultValue="medium"
                checked={priorityRadioBoxValue === "medium"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Medium
              <input
                type="radio"
                name="priority"
                defaultValue="low"
                value={priorityRadioBoxValue}
                required
                checked={priorityRadioBoxValue === "low"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Low{" "}
            </label>
            <input
              type="text"
              name="name"
              value={labelInputBoxValue}
              required
              class="navigation__input"
              placeholder="add labels....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "LABELINPUTBOXVALUE",
                  payload: e.target.value,
                })
              }
            />
            <div className="rte-icons1">
              <RTEEditor textareaBoxValue={textareaBoxValue} />
            </div>

            <div className="color-pallete1">
              <input type="submit" className="take-notes-btn" />
              <label>
                <input
                  type="color"
                  className="input-color"
                  value={notesBgColor}
                  onChange={(e) =>
                    notesTakingFn({
                      type: "NOTESBGCOLOR",
                      payload: e.target.value,
                    })
                  }
                />
                <span className="material-icons rte-icons2">color_lens </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
