import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
    const [error,setError] = useState("")
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        setError("")

        if(password !== confirm)
        {
          setError("Your Password did not match!!")
          return
        }
        else if(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password))
        {
          setError("Not Match the condition!!")
          return
        }

        createUser(email,password)
        .then(result =>{
          const loggedUser = result.user
          form.reset()
          console.log(loggedUser)
        })
        .catch(error =>{
          setError(error)
        })
    }

  return (
    <form onSubmit={handleSignUp}>
      <div className="hero mt-6">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-bold my-3">Please Register!!</h1>
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
                  required
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
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small>Already have an account?</small>
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-orange-400"
                  >
                    Login here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">Login</button>
              </div>
              {
                error && <p>{error}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
