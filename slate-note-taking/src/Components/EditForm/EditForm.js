import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import { useEffect, useState } from "react";
import RTEEditor from "../Editor/RTEEditor";
import "./EditForm.css";
import axios from "axios";
function EditForm() {
  const {
    notesTakingFn,
    priorityRadioBoxValue,
    notesBgColor,
    textareaBoxValue,
    labelInputBoxValue,
    inputTextTitleValue,
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
      Toast({ type: "info", message: "notes has been succesfully updated." });
      navigate("/Home");
    } catch (error) {
      console.log(`something went wrong`, error);
    }
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
        className="notes1-container"
        style={{
          backgroundColor: notesBgColor,
        }}
      >
        <div className="form-container">
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
            <label className="label-radio-box">
              Priority
              <input
                type="radio"
                name="priority"
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
            <div className="rte-icons">
              <RTEEditor textareaBoxValue={textareaBoxValue} />
            </div>

            <div className="color-pallete">
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
                <span className="material-icons rte-icons1">color_lens </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
