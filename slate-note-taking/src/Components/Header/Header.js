import { Link, useNavigate } from "../../Utils/CustomUtils";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import "./Header.css";
import { logoutHandler } from "../../Services/AuthServices";

function Header() {
  const { inputSearchNotes, notesTakingFn } = useNoteTakingContext();
  const navigate = useNavigate();
  function logOutUserFromApp() {
    logoutHandler();
    navigate("/");
  }

  const token = localStorage.getItem("token");
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">Slate Notes</div>
          </Link>
        </div>
        <input
          type="search"
          class="navigation__input"
          placeholder="search by title"
          value={inputSearchNotes}
          onChange={(e) =>
            notesTakingFn({
              type: "INPUT_SEARCH_NOTES",
              payload: e.target.value,
            })
          }
        />
        <div class="navigation__right">
          {!token ? (
            <Link to="/login">
              <button className="btn btn-danger">Login</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-danger" onClick={logOutUserFromApp}>
                Logout
              </button>
            </Link>
          )}

          <Link to="/accounts">
            <span class="material-icons navigationmi"> account_circle</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
