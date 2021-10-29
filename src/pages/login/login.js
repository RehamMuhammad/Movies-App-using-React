import { useState, useEffect } from "react";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!errors.email && !errors.password) {
      console.log(login);
    }
  }, [errors]);

  const handleInputChange = (e) => {
    console.log(e.target, e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.name === "email") {
      setLogin({
        ...login,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        email:
          e.target.value.length === 0
            ? "The Email field is required"
            : !re.test(e.target.value)
            ? "You shouuld provide an email"
            : null,
      });
    } else if (e.target.name === "password") {
      setLogin({
        ...login,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        password:
          e.target.value.length === 0
            ? "The Password field is required"
            : e.target.value.length < 8
            ? "Minmum Length should be 8 characters"
            : null,
      });
    }
  };

  const submitLogin = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    setErrors({
      ...errors,
      email:
        login.email.length === 0
          ? "The Email field is required"
          : !re.test(login.email)
          ? "You shouuld provide an email"
          : null,
      password:
        login.password.length === 0
          ? "The Password field is required"
          : login.password.length < 8
          ? "Minmum Length should be 8 characters"
          : null,
    });
  };

  return (
    <div className="container my-5 border border-5 border-warning p-5 text-light">
      <div className="row">
        <div className="col-12">
          <form onSubmit={(e) => submitLogin(e)}>
            <div className="mb-3">
              <h1 className="text-center mb-3 text-success">Login Form</h1>
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                name="email"
                value={login.email}
                onChange={(e) => handleInputChange(e)}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
              />
              {errors.email ? (
                <small className="text-danger">{errors.email}</small>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <div className="pass">
                <input
                  name="password"
                  value={login.password}
                  onChange={(e) => handleInputChange(e)}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  aria-describedby="password"
                />
                <span className="p-viewer2" onClick={() => showPass()}>
                  <i className="bi bi-eye-fill"></i>
                </span>
              </div>
              {errors.password ? (
                <small className="text-danger">{errors.password}</small>
              ) : null}
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
