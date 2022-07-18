import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { loginHandler } from "../../Services/AuthServices";
import { React, Link, useNavigate } from "../../Utils/CustomUtils";

import "./Login.css";
function Login() {
  const { dispatch, email, password } = useLoginSignupContext();
  const navigate = useNavigate();
  function submitLoginData(e) {
    loginHandler(e, email, password, dispatch);
    navigate("/accounts");
  }

  return (
    <div>
      <h3 className="login-page-title"> Login Page</h3>
      <div className="Login-Form">
        <div class="form-control">
          <img
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_secure_login_pdn4.svg"
            alt="user"
            className="user-icon"
          />
          <form onSubmit={submitLoginData}>
            <label>
              <input
                class="input__field"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </label>

            <label>
              <input
                class="input__field"
                type="password"
                name="input password"
                placeholder="Password"
                autoComplete="on"
                required
                minlength="6"
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })
                }
              />
            </label>

            <label>
              <input
                class="input__field"
                type="submit"
                name="input submit"
                required
              />
            </label>
          </form>
          <h4 className="login-instruction">
            Not a member ?<Link to="/Signup"> Signup</Link> here
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
