import { useNoteTakingContext } from "../../Context/IndexAllContext";
import { addNotesintoDbFn } from "../../Services/NoteTakingServices";
import RTEEditor from "../Editor/RTEEditor";
import "./InputNotes.css";
function InputNotes({ toggleModal }) {
  const {
    notesBgColor,
    inputTextTitleValue,
    priorityRadioBoxValue,
    labelInputBoxValue,
    textareaBoxValue,
    noteCreationTime,
    notesTakingFn,
    isOpen,
  } = useNoteTakingContext();
  function submitNotes(e) {
    addNotesintoDbFn(
      e,
      inputTextTitleValue,
      priorityRadioBoxValue,
      labelInputBoxValue,
      textareaBoxValue,
      notesBgColor,
      noteCreationTime,
      notesTakingFn
    );

    notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: null });
    notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: null });
    notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: null });
    notesTakingFn({ type: "TEXTAREABOXVALUE", payload: null });
    notesTakingFn({ type: "NOTESBGCOLOR", payload: null });
    toggleModal();
  }

  return (
    <div>
      <div
        className="notes1-container"
        style={{
          backgroundColor: notesBgColor,
        }}
        defaultValue="#FFFF"
      >
        <div className="form-container">
          <form onSubmit={submitNotes}>
            <input
              type="text"
              name="name"
              required
              class="navigation__input"
              placeholder="notes Title....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "INPUTTEXTTITLEVALUE",
                  payload: e.target.value,
                })
              }
            />
            <label className="label-radio-box">
              Priority
              <input
                type="radio"
                name="priority"
                value="top"
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
                value="medium"
                required
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
                value="low"
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
            <div className="rte-icons">
              <RTEEditor />
            </div>

            <div className="color-pallete">
              <input type="submit" className="take-notes-btn" />
              <label>
                <input
                  type="color"
                  className="input-color"
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

export default InputNotes;
