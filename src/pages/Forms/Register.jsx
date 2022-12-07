import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider";
import { addUser } from "../../UtilitiFunctions/AddUser";
import { getToken } from "../../UtilitiFunctions/GetToken";

const Register = () => {
    const { emailSignUp, googleSignUp,update } = useContext(authContext);
    const [registerError, setRegisterError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const handleSignUp = (data) => {
        setRegisterError('');
      console.log(data.email, data.password);
      const name = data.name;
        const email = data.email;
        const password = data.password;
        emailSignUp(email,password)
            .then(result => {
              const profile = result.user;
              update(name);
              const user = {
                name: name,
                email:email
              }
              addUser(user);
              toast.success('User Created Successfully')
            })
        .catch(err => setRegisterError(err.message))
        // reset()
    };
    const handleGoogleSignIn = () => {
        googleSignUp()
            .then(result => {
              const profile = result.user;
              const user = {
                name: profile.displayName,
                email:profile.email
              }
              addUser(user);
              getToken(profile.email);
            })
        .catch(err=>setRegisterError(err))
  }
  
  return (
    <div className="mx-auto mb-5 w-96 rounded-lg shadow-lg">
      <h3 className="text-2xl text-center text-black">Sign Up</h3>
      <form onSubmit={handleSubmit(handleSignUp)} className="p-7">
        <div className="">
          <label className="label text-black">Name</label>
          <input
            type="text"
            {...register("name", {
              required: `You can't keep empty this field`,
            })}
            className="input text-black border-gray-400 input-bordered w-full"
            name="name"
            id="name"
          />
          {errors.name && (
            <p className="text-red-600" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="">
          <label className="label text-black">Email</label>
          <input
            type="text"
            {...register("email", { required: `Email Invalid` })}
            className="input text-black border-gray-400 input-bordered w-full"
            name="email"
            id="email"
          />
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="">
          <label className="label text-black">Password</label>
          <input
            {...register("password", {
              required: `Password can't be empty`,
                pattern: {
            //Minimum six characters, at least one letter, one number and one special character:
            //   value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:'Type a strong password'
              }
            })}
            className="input text-black border-gray-400 input-bordered w-full"
            type="password"
            name="password"
            id="password"
          />
          {errors.password && (
            <p className="text-red-600" role="alert">
              {errors.password?.message}
            </p>
          )}
          <p className="label-text-alt text-black">Forgot Password?</p>
        </div>
        <div className="my-4">
          <button className="btn btn-accent w-full bg-gray-700" type="submit">
            Sign Up
          </button>
        </div>
        <p className="text-sm text-black">
          Have an account?{" "}
          <Link className="text-primary" to="/login">
            Log In
          </Link>
        </p>
        <div className="">
          <div className="divider text-black">OR</div>
          
        </div>
      </form>
      <div className="px-7 pb-5 mt-[-30px]">
      <button onClick={handleGoogleSignIn} className="btn btn-outline w-full text-gray-700 border-gray-700 hover:bg-gray-700">
            CONTINUE WITH GOOGLE
          </button>
      </div>
    </div>
  );
};

export default Register;
