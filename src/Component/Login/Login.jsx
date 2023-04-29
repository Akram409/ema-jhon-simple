import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
  console.log(from)

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset()
        navigate(from , {replace: true})
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
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
