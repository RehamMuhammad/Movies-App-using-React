import { useState, useEffect } from "react";
import "../login/login.css"

function Register() {
  const [register, setRegister] = useState({
    name:"",
    email: "",
    userName:"",
    password: "",
    confirm:""
  });

  const [errors, setErrors] = useState({
    name:"",
    email: "",
    userName:"",
    password: "",
    confirm:""
  });

  useEffect(() => {
    if (!errors.name && !errors.email && !errors.userName && !errors.password && !errors.confirm) {
      console.log(register);
    }
  }, [errors]);

  const handleInputChange = (e) => {
    console.log(e.target, e.target.value);
    const emailValidation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const whiteSpaces =
      /^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$/;
      const password =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (e.target.name === "name"){
        setRegister({
            ...register,
            name: e.target.value,
          });
          setErrors({
            ...errors,
            name:
              e.target.value.length === 0
                ? "The Name field is required"
                : null,
          });

    } else if (e.target.name === "email") {
      setRegister({
        ...register,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        email:
          e.target.value.length === 0
            ? "The Email field is required"
            : !emailValidation.test(e.target.value)
            ? "You should provide an email"
            : null,
      });
    } else if (e.target.name === "userName") {
        setRegister({
          ...register,
          userName: e.target.value,
        });
        setErrors({
          ...errors,
          userName:
            e.target.value.length === 0
              ? "The User Name field is required"
              : !whiteSpaces.test(e.target.value)
              ? "The user Name Shouldn't have any white spaces"
              : null,
        });
    }
     else if (e.target.name === "password") {
        setRegister({
        ...register,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        password:
          e.target.value.length === 0
            ? "The Password field is required"
            : e.target.value.length < 8
            ? "Minmum Length should be 8 characters"
            : !password.test(e.target.value)
            ? "The Password should contain at least one lowercase, one uppercase, at least one digit, & special character [*@%$# ] and mustn't have any white spaces."
            : null,
      });
    }
    else if (e.target.name === "confirm") {
        console.log(register.password)
        setRegister({
        ...register,
        confirm: e.target.value,
      });
      setErrors({
        ...errors,
        confirm:
          e.target.value.length === 0
            ? "This field is required to confirm your Password"
            : (e.target.value !== register.password)
            ? "The Repeated Password doesn't match."
            : null,
      });
    }
  };

//   const submitLogin = (e) => {
//     e.preventDefault();
//     setErrors({
//       ...errors,
//       email:
//         e.target.value.length === 0
//           ? "The Email field is required"
//           : !re.test(e.target.value)
//           ? "You shouuld provide an email"
//           : null,
//       password:
//         e.target.value.length === 0
//           ? "The Password field is required"
//           : e.target.value.length < 8
//           ? "Minmum Length should be 8 characters"
//           : null,
//     });
//   };

  return (
    <div className="container my-5 border border-5 border-warning p-5 text-light">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="mb-3">
              <h1 className="text-center mb-3 text-success">Register Form</h1>
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                name="name"
                value={register.name}
                onChange={(e) => handleInputChange(e)}
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
              />
                {errors.name ? (
                <small className="text-danger">{errors.name}</small>
              ) : null}
              </div>
              <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                name="email"
                value={register.email}
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
              <label htmlFor="userName" className="form-label">
                User Name:
              </label>
              <input
                name="userName"
                value={register.userName}
                onChange={(e) => handleInputChange(e)}
                type="text"
                className="form-control"
                id="userName"
                aria-describedby="userName"
              />
              {errors.userName ? (
                <small className="text-danger">{errors.userName}</small>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <div>
                <input
                  name="password"
                  value={register.password}
                  onChange={(e) => handleInputChange(e)}
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="password"
                />
              </div>
              {errors.password ? (
                <small className="text-danger">{errors.password}</small>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="confirm" className="form-label">
                Confirm Password:
              </label>
              <div>
                <input
                  name="confirm"
                  value={register.confirm}
                  onChange={(e) => handleInputChange(e)}
                  type="password"
                  className="form-control"
                  id="confirm"
                  aria-describedby="password"
                />
              </div>
              {errors.confirm ? (
                <small className="text-danger">{errors.confirm}</small>
              ) : null}
            </div>
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
