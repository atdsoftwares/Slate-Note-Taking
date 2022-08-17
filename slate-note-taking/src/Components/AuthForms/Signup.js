import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { signUpHandler } from "../../Services/AuthServices";
import {
  React,
  Link,
  useNavigate,
  useState,
  useEffect,
} from "../../Utils/CustomUtils";
import "./Signup.css";
function Signup() {
  const { dispatch, name, number, email, password } = useLoginSignupContext();

  const navigate = useNavigate();
  function submitSignUpData(e) {
    signUpHandler(e, name, number, email, password);
    navigate("/Login");
  }
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [name, email, password]);

  return (
    <div>
      <h3 className="login-page-title"> Signup Form</h3>
      <div className="Signup-Form">
        <div class="form-control">
          <form onSubmit={submitSignUpData}>
            <label for="name">Name*</label>{" "}
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
            <label for="name">Email*</label>{" "}
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
            <label for="name">Password*</label>{" "}
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
            <p>
              {" "}
              <kbd style={{ fontSize: "1.2rem", padding: "1rem" }}>
                * are important.
              </kbd>{" "}
            </p>
            <label>
              <input
                class="input__field"
                type="submit"
                name="input submit"
                required
                disabled={isDisabled}
              />
            </label>
            <span style={{ color: "red" }}>{error}</span>
          </form>

          <h4 className="login-instruction">
            Already member ?{" "}
            <Link to="/Login" style={{ margin: "0.5rem" }}>
              {" "}
              Login{" "}
            </Link>{" "}
            here
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
