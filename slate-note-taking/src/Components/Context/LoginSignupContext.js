import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";

const loginSignupContext = createContext();
export const useLoginSignupContext = () => useContext(loginSignupContext);

function LoginSignupContext({ children }) {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    email: "",
    number: "",
    password: "",
    loginData: [],
  });
  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "NUMBER":
        return { ...state, number: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "LOGINDATA":
        return { ...state, loginData: action.payload };
      default:
        return state;
    }
  }

  const { name, email, password, number, loginData } = state;
  console.log(
    "🚀 ~ file: LoginSignupContext.js ~ line 37 ~ LoginSignupContext ~ loginData",
    loginData
  );
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
      localStorage.getItem(`token`, response.data.encodedToken);
      Toast({ type: "info", message: "logged in " });
      navigate("/accounts");
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        name: name,
        number: number,
        email: email,
        password: password,
      });

      // saving the encodedToken in the localStorage
      localStorage.setItem(`token`, response.data.encodedToken);
      Toast({ type: "info", message: "Signed Up " });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    // window.location.reload(false);
    Toast({ type: "info", message: "logged out " });
    navigate("/");
  };
  return (
    <div>
      <loginSignupContext.Provider
        value={{
          state,
          dispatch,
          signUpHandler,
          loginHandler,
          logoutHandler,
        }}
      >
        {children}
      </loginSignupContext.Provider>
    </div>
  );
}

export default LoginSignupContext;
