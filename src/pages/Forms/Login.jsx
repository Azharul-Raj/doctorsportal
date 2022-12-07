import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { getToken } from "../../UtilitiFunctions/GetToken";
import { addUser } from "../../UtilitiFunctions/AddUser";

const Login = () => {
  const { emailLogin, googleSignUp, resetPassword } = useContext(authContext);
  const [userEmail, setUserEmail] = useState("");
  const [logInError, setLogInError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLogInError("");
    const email = data.email;
    const password = data.password;
    emailLogin(email, password)
      .then((result) => {
        const profile = result.user;        
        getToken(profile.email);
        navigate(from, { replace: true });
      })
      .catch((err) => setLogInError(err.message));
  };
  // google sign in function
  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((result) => {
        const profile = result.user;
        const user = {
          name: profile.displayName,
          email:profile.email
        }
        addUser(user);
        getToken(profile.email);
        navigate(from, { replace: true });
      })
      .catch((err) => setLogInError(err.message));
  };
  // password reset function
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {})
      .catch((err) => toast.error(err.message));
    console.log(userEmail);
  };
  return (
    <>
      <div className="mx-auto w-96 rounded-lg shadow-lg">
        <h3 className="text-2xl text-center text-black">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)} className="p-7">
          <div className="">
            <label className="label text-black">Email</label>
            <input
              type="text"
              {...register("name")}
              className="input text-black border-gray-400 input-bordered w-full"
              name="email"
              id=""
            />
            {errors?.email && <p>{errors.email?.message}</p>}
          </div>
          <div className="">
            <label className="label text-black">Password</label>
            <input
              {...register("password")}
              className="input text-black border-gray-400 input-bordered w-full"
              type="password"
              name="password"
              id="password"
            />
            {errors?.password && <p>{errors.password?.message}</p>}
            {/* <p onClick={handleReset} htmlFor="my-modal" className="label-text-alt underline text-red-700 cursor-pointer">Forgot Password?</p> */}
            <label
              htmlFor="my-modal"
              className="label-text-alt underline text-red-700 cursor-pointer"
            >
              Forgot Password?
            </label>
          </div>
          <div className="my-4">
            <button className="btn btn-accent w-full bg-gray-700" type="submit">
              LOG IN
            </button>
          </div>
          <p className="text-sm text-black">
            New To Doctor's Portal?{" "}
            <Link className="text-primary" to="/register">
              Create New Account
            </Link>
          </p>
          <div className="">
            <div className="divider text-black">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full text-gray-700 border-gray-700 hover:bg-gray-700"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </form>
      </div>
      {/* modal is here */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-black text-lg">
            Sent Your Email to Reset Password
          </h3>
          <input
            onBlur={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered text-black border-gray-400 input-md w-full"
            required
          />
          <div className="modal-action">
            <label
              onClick={handleReset}
              type="submit"
              htmlFor="my-modal"
              className="btn bg-gray-800 w-full"
            >
              Sent Reset Email
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
