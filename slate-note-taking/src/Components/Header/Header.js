import { Link, useNavigate } from "../../Utils/CustomUtils";
import { useNoteTakingContext } from "../../Context/IndexAllContext";

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
      <header class="text-gray-600 body-font border-solid border-2 border-gray-200">
        <div class="container mx-auto flex  border-slate-500 flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Slate Notes</span>
            </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>

          {!token ? (
            <Link to="/login">
              <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          ) : (
            <button
              onClick={logOutUserFromApp}
              class="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
