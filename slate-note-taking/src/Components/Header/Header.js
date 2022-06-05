import React from "react";
import { Link } from "react-router-dom";
import { useLoginSignupContext } from "../Context/LoginSignupContext";
import "./Header.css";

function Header() {
  const { logoutHandler } = useLoginSignupContext();
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
          placeholder="search item"
          //   onChange={(e) =>
          //     dispatch({ type: "SEARCHBAR", payload: e.target.value })
          //   }
        />
        <div class="navigation__right">
          {!token ? (
            <Link to="/login">
              <button className="btn btn-danger">Login</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-danger" onClick={logoutHandler}>
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
