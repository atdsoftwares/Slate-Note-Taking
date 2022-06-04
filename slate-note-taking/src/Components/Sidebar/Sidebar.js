import React from "react";
import { Link } from "react-router-dom";
import { useNoteTakingContext } from "../Context/NotetakingContext";

import "./Sidebar.css";
function Sidebar() {
  const { notesTakingFn, notesModal, toggleNotes } = useNoteTakingContext();

  return (
    <div>
      <aside className="aside">
        <div className="home">
          <Link to="/Home">
            <span className="material-icons sidebarmi" title="Home">
              home
            </span>
          </Link>
          Home
        </div>

        <div className="playlists">
          <Link to="/Archives">
            <span className="material-icons sidebarmi" title="Playlists">
              archive
            </span>{" "}
          </Link>
          Archive
        </div>

        <div className="watchlater">
          <Link to="/Trash">
            <span className="material-icons sidebarmi" title="History">
              delete
            </span>{" "}
          </Link>
          Trash
        </div>
        <div className="history">
          {/* <Link to="/history"> */}
          <span
            className="material-icons sidebarmi"
            title="History"
            onClick={toggleNotes}
          >
            note_add
          </span>{" "}
          {/* </Link> */}
          Take Notes
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
