import React from "react";
import App from "./App";
import ArchiveNotesContext from "./Components/Context/ArchiveNotesContext";
import LoginSignupContext from "./Components/Context/LoginSignupContext";
import NotetakingContext from "./Components/Context/NotetakingContext";
import TrashNotesContext from "./Components/Context/TrashNotesContext";

function Pages() {
  return (
    <div>
      <NotetakingContext>
        <ArchiveNotesContext>
          <TrashNotesContext>
            <LoginSignupContext>
              <App />
            </LoginSignupContext>
          </TrashNotesContext>
        </ArchiveNotesContext>
      </NotetakingContext>
    </div>
  );
}

export default Pages;
