import { Toaster } from "react-hot-toast";
import App from "./App";
import {
  ArchiveNotesContext,
  NotetakingContext,
  TrashNotesContext,
  LoginSignupContext,
} from "./Context/CoreContextFiles";

function Pages() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
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
