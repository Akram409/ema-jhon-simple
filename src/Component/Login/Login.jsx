import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <form onSubmit={handleLogIn}>
      <div className="hero mt-6">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-bold my-3">Please Login!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-2 bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      {show ? "Hide" : "Show"}
                    </span>
                    <div onClick={() => setShow(!show)}>
                    {show ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                    </div>
                    {/* <input
                      type="checkbox"
                      className="checkbox checkbox-info"
                      
                    /> */}
                  </label>
                </div>
                <label className="label gap-1">
                  <small>New to EmaJhon?</small>
                  <Link
                    to="/signup"
                    className="label-text-alt link link-hover text-orange-400"
                  >
                    Create new Account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">Login</button>
              </div>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
