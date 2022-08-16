import { useNoteTakingContext } from "../../Context/NotetakingContext";
import { getNotesDataFromAPIFn } from "../../Services/NoteTakingServices";
import { React, NavLink as Link, useEffect } from "../../Utils/CustomUtils";
import NotesModal from "../Modal/NotesModal";
import "./Sidebar.css";

function Sidebar() {
  const { getNotesData, notesTakingFn } = useNoteTakingContext();
  useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, []);

  return (
    <div>
      <aside className="aside">
        <Link to="/Home">
          <div className="home">
            <span className="material-icons sidebarmi" title="Home">
              home
            </span>
            Home
          </div>
        </Link>

        <Link to="/Archives">
          <div className="playlists">
            <span className="material-icons sidebarmi" title="Playlists">
              archive
            </span>{" "}
            Archive
          </div>
        </Link>

        <Link to="/Trash">
          <div className="watchlater">
            <span className="material-icons sidebarmi" title="History">
              delete
            </span>{" "}
            Trash
          </div>
        </Link>

        {getNotesData.map((notes) => (
          <Link to={`/Labels/${notes.labelInputBoxValue}`}>
            <div className="watchlater">
              <span className="material-icons sidebarmi" title="History">
                label
              </span>{" "}
              {notes && notes.labelInputBoxValue}
            </div>
          </Link>
        ))}

        <Link to="/accounts">
          <div className="watchlater">
            <span className="material-icons sidebarmi" title="History">
              account_circle
            </span>{" "}
            Account
          </div>
        </Link>
        <div className="history" style={{ marginTop: "2rem" }}>
          Take Notes 👉
          <NotesModal />
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
