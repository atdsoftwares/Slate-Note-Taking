import React from "react";
import App from "./App";
import NotetakingContext from "./Components/Context/NotetakingContext";

function Pages() {
  return (
    <div>
      <NotetakingContext>
        <App />
      </NotetakingContext>
    </div>
  );
}

export default Pages;
