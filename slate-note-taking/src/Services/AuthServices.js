import { axios, toast } from "../Utils/CustomUtils";

export const loginHandler = async (e, email, password, dispatch) => {
  e.preventDefault();
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: email,
      password: password,
    });
    // saving the encodedToken in the localStorage
    dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
    localStorage.setItem(`token`, response.data.encodedToken);
    toast.success(`Welcome!`);
  } catch (error) {
    console.log(error);
    toast.error(`Invalid Credentials`);
  }
};

export const signUpHandler = async (e, name, number, email, password) => {
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
    toast.success(`Signed Up!`);
  } catch (error) {
    console.log(error);
  }
};

export const logoutHandler = () => {
  localStorage.clear();
  window.location.reload();
  toast.success(`logged out `);
};
