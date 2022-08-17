import { React } from "../../Utils/CustomUtils";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import "./Filter.css";
function Filter() {
  const { notesTakingFn, priorityLabel } = useNoteTakingContext();

  return (
    <div>
      <div className="filter">
        <div className="priority">
          <label for="priority" className="tag">
            <b>Priority</b>
            <span className="material-icons">tag</span>:
          </label>
          <select
            name="priority"
            onChange={(e) =>
              notesTakingFn({ type: "PRIORITY_LABEL", payload: e.target.value })
            }
          >
            <option value="All" onChange={() => notesTakingFn({ type: "All" })}>
              All
            </option>
            <option value="top" onChange={() => notesTakingFn({ type: "top" })}>
              Top
            </option>
            <option
              value="medium"
              onChange={() => notesTakingFn({ type: "medium" })}
            >
              Medium
            </option>
            <option value="low" onChange={() => notesTakingFn({ type: "low" })}>
              Low
            </option>
          </select>

          {/* <div className="radio-values">
            <input
              type="radio"
              value="Low-To-High"
              name="radio-filter"
              className="radio-values-filter"
            />
            Low to High
            <input
              type="radio"
              value="Low-To-High"
              name="radio-filter"
              className="radio-values-filter"
            />
            High to Low
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
