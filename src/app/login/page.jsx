"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import Link from "next/link";




export default function Login() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Login submit function
  const loginSubmit = async (data) => {
    setLoading(true)
    if (data.email && data.password) {
      console.log(data);
      await axios
        .post(`https://japanese-language-learning-server-1.onrender.com/api/v1/user/login`, data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status == "200") {
            console.log(res.data);
            localStorage.setItem("userId", res.data.userId);
            setCookie("Token", res.data.token);
            toast.success(res.data.message);
            setLoading(false);
            // Redirect user to Home page
            navigate.push("/learn");
          } else if (res.data.status == "401" || res.data.status == "404") {
            setLoading(false);
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
              setLoading(false);
          toast.error("Something went wrong");
        });
    }

    reset();
  };

  // Custom id for tostify
  const customId = "custom-id-yes";

  return (
    <div className="md:w-[70%] w-[90%] mx-auto flex items-center justify-center h-screen">
      <div className="md:w-[60%] h-[520px] bg-gradient-to-bl from-[#f7faed] to-[#f0fce8] w-[80%] mx-auto rounded-lg flex items-center justify-center">
        <div className="w-full">
          <div className="flex mx-12 -mt-[16px] mb-[24px]  justify-between items-center">
            {/* HOME BACK BUTTON */}
            <button
              onClick={() => navigate.push("/")}
              className=" px-4 py-2 flex gap-2 items-center bg-[#fff] rounded font-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 21 21"
                className="-rotate-90"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.5 7.5l-4-4l-4.029 4m4.029-4v13"
                  stroke-width="1"
                />
              </svg>
              {/* <span>Home</span> */}
            </button>
          </div>

          <form
            onSubmit={handleSubmit(loginSubmit)}
            className="mt-1 w-full px-12"
          >
            <h2 className=" text-[36px] font-semibold mb-6 z-[100]">
              Login in
              <span className="ml-[11px] relative inline-block z-[100]">
                Fluentoo
                <div className="w-full h-[20px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-28px] z-[-5]"></div>
              </span>
            </h2>
            {/* Email field */}
            <label
              className="font-regular text-[16px] mb-0 mt-3"
              htmlFor="name"
            >
              Your Name:
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              id="name"
              className=" rounded-md p-2.5 mt-2 w-[80%] block w-full mb-4 border-0"
              placeholder="example@mail.com"
            />
            <p className="hidden">
              {errors?.email &&
                toast.error("Email is required", {
                  toastId: customId,
                })}
            </p>

            {/* Password Field */}
            <label
              className="font-regular text-[16px] mb-0 mt-3"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className="rounded-md p-2.5 mt-2 w-[80%] block w-full mb-3 border-0"
              placeholder="********"
            />
            <p className="hidden">
              {errors?.password &&
                toast.error("Password is required", {
                  toastId: customId,
                })}
            </p>

            <button
              type="submit"
              className={`${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              } bg-[#d5f80f] hover:bg-[#cbee06] text-dark text-lg font-semibold rounded-md px-8 py-2 mt-6 mb-3 w-full`}
            >
              {`${loading ? "Loading..." : "Login"}`}
            </button>
            <div className="flex justify-between mt-3 items-center">
              <p className="font-regular text-[16px]">
                Don&apos;t have an account?
                <Link
                  href="/signup"
                  class="inline ml-2 py-2 px-3 text-gray-900 rounded underline text-dark hover:font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Create Now
                </Link>
              </p>

              {/* LOGIN AS TUTOR */}
              {/* <button className="bg-white hover:bg-[#cbee06] transition duration-400 text-dark font-[550] rounded-lg text-[15px] px-4 py-2">
                Login as Tutor
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
