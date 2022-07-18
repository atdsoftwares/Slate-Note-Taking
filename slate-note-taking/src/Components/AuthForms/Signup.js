import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { signUpHandler } from "../../Services/AuthServices";
import { React, Link, useNavigate } from "../../Utils/CustomUtils";
import "./Signup.css";
function Signup() {
  const { dispatch, name, number, email, password } = useLoginSignupContext();

  const navigate = useNavigate();
  function submitSignUpData(e) {
    signUpHandler(e, name, number, email, password);
    navigate("/Login");
  }

  return (
    <div>
      <h3 className="login-page-title"> Signup Page</h3>
      <div className="Signup-Form">
        <div class="form-control">
          <img
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_secure_login_pdn4.svg"
            alt="user"
            className="user-icon"
          />
          <form onSubmit={submitSignUpData}>
            <label>
              <input
                class="input__field"
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(e) =>
                  dispatch({ type: "NAME", payload: e.target.value })
                }
              />
            </label>

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
                type="tel"
                name="telnumber"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="Phone Number"
                required
                onChange={(e) =>
                  dispatch({ type: "NUMBER", payload: e.target.value })
                }
              />
            </label>
            <label>
              <input
                class="input__field"
                type="password"
                name="input password"
                placeholder="Password"
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
            Already member ?<Link to="/Login"> Login</Link> here
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
