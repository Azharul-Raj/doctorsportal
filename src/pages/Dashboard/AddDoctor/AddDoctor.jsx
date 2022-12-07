import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addDoctor } from "../../../UtilitiFunctions/AddDoctor";

const AddDoctor = () => {
  const { data: specialists = [] } = useQuery({
    queryKey: ["doctor"],
    queryFn: () =>
      fetch("/specialists").then((res) => res.json()),
  });
  const imageHostKey = process.env.REACT_APP_imageApiKey;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleDoctor = (data) => {
    const name = data.name;
    const email = data.email;
    const speciality = data.role;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const doctor = {
          name,
          email,
          speciality,
          picture: data.data.url,
        };
        addDoctor(doctor);
        console.log(data);
        console.log(data.data.url);
      });
  };
  return (
    <div className="mx-auto w-96 rounded-lg shadow-lg">
      <h3 className="text-2xl text-center text-black">Add Doctor</h3>
      <form onSubmit={handleSubmit(handleDoctor)} className="p-7">
        <div className="">
          <label className="label text-black">Name</label>
          <input
            type="text"
            {...register("name")}
            className="input text-black border-gray-400 input-bordered w-full"
            id=""
          />
          {errors?.name && <p>{errors.name?.message}</p>}
        </div>
        <div className="">
          <label className="label text-black">Email</label>
          <input
            {...register("email")}
            className="input text-black border-gray-400 input-bordered w-full"
            type="email"
            id="email"
          />
          {errors?.email && <p>{errors.email?.message}</p>}
          {/* <p onClick={handleReset} htmlFor="my-modal" className="label-text-alt underline text-red-700 cursor-pointer">Forgot Password?</p> */}
          {/* Role select part */}
          <div className="text-black mt-2">
            <label className="label text-black">Role</label>
            <select
              {...register("role")}
              className="select select-bordered w-full border-gray-400"
            >
              {specialists.map((specialist) => (
                <option defaultValue={specialist.name} key={specialist._id}>
                  {specialist.name}
                </option>
              ))}
            </select>
          </div>
          {/* Role select part */}
          {/* image select part */}
          <label className="label text-black">Image</label>
          <input
            {...register("image")}
            className=" text-black border-gray-400 w-full"
            type="file"
            id="image"
          />
          {/* image select part */}
        </div>
        <div className="my-4">
          <button className="btn btn-accent w-full bg-gray-700" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
