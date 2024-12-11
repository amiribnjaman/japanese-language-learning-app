"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export default function Signup() {
  const navigate = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Login submit function
  const loginSubmit = async (data) => {
    if (data.email && data.password) {
      console.log(data);
      await axios
        .post(`http://localhost:4000/api/v1/user/login`, data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status == "200") {
            localStorage.setItem("userId", res.data.userId);
            setCookie("Token", res.data.token);
            toast.success(res.data.message);
            // Redirect user to Home page
            navigate.push("/");
          } else if (res.data.status == "401" || res.data.status == "404") {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    }

    reset();
  };

  // Custom id for tostify
  const customId = "custom-id-yes";

  return (
    <div className="md:w-[70%] mx-auto">
      <div className="md:w-[50%] mx-auto md:mt-32">
        <form onSubmit={handleSubmit(loginSubmit)} className="mt-1">
          <h5 className="text-center text-2xl font-semibold">Login</h5>
          <input
            {...register("email", { required: true })}
            type="text"
            className="border rounded-md p-2 block w-full mt-3"
            placeholder="Email Address"
          />
          <p className="hidden">
            {errors?.email &&
              toast.error("Email is required", {
                toastId: customId,
              })}
          </p>
          <input
            {...register("password", { required: true })}
            type="password"
            className="border rounded-md p-2 block w-full mt-3"
            placeholder="Password"
          />
          <p className="hidden">
            {errors?.password &&
              toast.error("Password is required", {
                toastId: customId,
              })}
          </p>

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
