"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  return (
    <div className="md:w-[70%] mx-auto">
      <div className="md:w-[50%] mx-auto md:mt-24">
        <form onSubmit={handleSubmit()} className="mt-1">
          <h5 className="text-center text-2xl font-semibold">Login</h5>


          {/* Email field */}
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
            type="text"
            className="border rounded-md p-2 block w-full mt-2"
            placeholder="Email Address"
          />
          {/* Email errors */}
          {/* <p className="hidden">
                  {errors.email?.type === "pattern" &&
                    toast.error(
                      `Invalid email. Please provide a valid email address.`,
                      
                    )}
                </p> */}
          {/* <p className="hidden">
                  {errors?.email &&
                    toast.error("Email field is required", )}
                </p> */}

          {/* Password field */}
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            className="border rounded-md p-2 block w-full mt-2"
            placeholder="Your Password"
          />
          {/* Password errors */}
          {/* <p className="hidden">
                  {errors.password?.type === "minLength" &&
                    toast.error(
                      `Password is too short. 
                Please provide atleast 6 characters.`,
                      
                    )}
                </p> */}
          {/* <p className="hidden">
                  {errors?.password &&
                    toast.error("Password field is required",)}
                </p> */}
          
          <button
            type="submit"
            className="bg-red-500 hover:bg-gradient-to-l text-white text-lg font-semibold rounded-md px-8 py-2 mt-6 mb-3 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
