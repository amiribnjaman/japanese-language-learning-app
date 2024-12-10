'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Signup submit function
  const signUpSubmit = async (data) => {
    if (data.firstName && data.email && data.password) {
      await axios
        .post(`http://localhost:4000/user/signup`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status == "201") {
            toast.success("Signup successfully! Login now.");
            // Redirect user to Login page
            navigate.push("/login");
          } else if (res.data.status == "400") {
            toast.warn(res.data.message);
          }
        })
        .catch((err) => {
          toast.error("Something wrong. Try again");
        });
    }
    reset();
  };

  // Custom id for tostify
  const customId = "custom-id-yes";

  return (
    <div className="md:w-[70%] mx-auto">
      <div className="md:w-[50%] mx-auto md:mt-32">
        <form onSubmit={handleSubmit(signUpSubmit)} className="mt-1">
          <h5 className="text-center text-2xl font-semibold">Signup</h5>
          {/* Name field */}
          <input
            {...register("name", { required: true })}
            type="text"
            className="border rounded-md p-2 block w-full mt-3"
            placeholder="Name"
          />
          {/* Name error */}
          <p className="hidden">
            {errors?.name &&
              toast.error("Name field is required", {
                toastId: customId,
              })}
          </p>

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
          <p className="hidden">
            {errors.email?.type === "pattern" &&
              toast.error(
                `Invalid email. Please provide a valid email address.`,
                {
                  toastId: customId,
                }
              )}
          </p>
          <p className="hidden">
            {errors?.email &&
              toast.error("Email field is required", {
                toastId: customId,
              })}
          </p>

          {/* Password field */}
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            className="border rounded-md p-2 block w-full mt-2"
            placeholder="Your Password"
          />
          {/* Password errors */}
          <p className="hidden">
            {errors.password?.type === "minLength" &&
              toast.error(
                `Password is too short. 
                Please provide atleast 6 characters.`,
                {
                  toastId: customId,
                }
              )}
          </p>
          <p className="hidden">
            {errors?.password &&
              toast.error("Password field is required", {
                toastId: customId,
              })}
          </p>
          {/* Image field */}
          <input
            type="file"
            name="image"
            id=""
            className="border rounded-md p-2 px-2 block w-full mt-2"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-gradient-to-l text-white text-lg font-semibold rounded-md px-8 py-2 mt-6 mb-3 w-full"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}