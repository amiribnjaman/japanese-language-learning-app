"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

export default function Signup() {
  const navigate = useRouter();
  const imgbbKey = "aefb8bb9063d982e8940fd31a2d29f9d";
  const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
  let imgUrl;
  const [loading, setLoading] = useState(false);
  // https://japanese-language-learning-server-1.onrender.com
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Signup submit function
  const signUpSubmit = async (data) => {
    setLoading(true);
    // Upload image into imgbb
    const img = data.image[0];
    if (img) {
      let formData = new FormData();
      formData.append("image", img);
      await fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          imgUrl = data.data.url;
        });
    }

    const finalData = {
      name: data.name,
      email: data.email,
      password: data.password,
      img: imgUrl,
    };
    console.log(data, imgUrl);
    // SUBMIT USER DATA TO SERVER
    if (data.name && data.email && data.password) {
      await axios
        .post(
          `https://japanese-language-learning-server-1.onrender.com/api/v1/user/signup`,
          finalData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.status == "201") {
            setLoading(false);
            toast.success("Signup successfully! Login now.");
            // Redirect user to Login page
            navigate.push("/login");
            console.log(res.data);
          } else if (res.data.status == "400") {
            setLoading(false);
            toast.warn(res.data.message);
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something wrong. Try again");
        });
    }
    reset();
  };

  // Custom id for tostify
  const customId = "custom-id-yes";

  return (
    <div className="md:w-[70%] w-[90%] mx-auto flex items-center justify-center h-screen">
      <div className="md:w-[60%] h-[600px] bg-gradient-to-bl from-[#f7faed] to-[#f0fce8] w-[80%] mx-auto rounded-lg flex items-center justify-center">
        <form
          onSubmit={handleSubmit(signUpSubmit)}
          className="mt-1 w-full px-12"
        >
          <h2 className=" text-[36px] font-semibold mb-6 z-[100]">
            Signup to
            <span className="ml-[11px] relative inline-block z-[100]">
              Fluentoo
              <div className="w-full h-[20px] bg-gradient-to-b from-[#eff5cf] to-[#d5f80f] absolute mt-[-28px] z-[-5]"></div>
            </span>
          </h2>
          {/* Name field */}
          <label className="font-regular text-[16px] mb-0 mt-3" htmlFor="name">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="rounded-md p-2.5 mt-2 w-[80%] block w-full mb-4 border-0"
            placeholder="John"
            id="name"
          />
          {/* Name error */}
          <p className="hidden">
            {errors?.name &&
              toast.error("Name field is required", {
                toastId: customId,
              })}
          </p>

          {/* Email field */}
          <label className="font-regular text-[16px] mb-0 mt-3" htmlFor="email">
            Email Address:
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
            type="text"
            id="email"
            className="rounded-md p-2.5 mt-2 w-[80%] block w-full mb-4 border-0"
            placeholder="john@mail.com"
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
          <label
            className="font-regular text-[16px] mb-0 mt-3"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            id="password"
            className="rounded-md p-2.5 mt-2 w-[80%] block w-full mb-4 border-0 flex items-center placeholder:items-center"
            placeholder="********"
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
          <label className="font-regular text-[16px] mb-0 mt-3" htmlFor="image">
            Profile Image:
          </label>
          <input
            type="file"
            {...register("image")}
            name="image"
            id="image"
            className="rounded-md p-2.5 w-[80%] block w-full mb-2 border-0"
          />
          <button
            type="submit"
            className={`${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            } bg-[#d5f80f] hover:bg-[#cbee06] text-dark text-lg font-semibold rounded-md px-8 py-2 mt-2 mb-3 w-full`}
          >
            {`${loading ? "Loading..." : "Signup"}`}
          </button>
          <div className="flex justify-between mt-2 items-center">
            <p className="font-regular text-[16px]">
              Already have an Account?
              <Link
                href="/login"
                class="inline ml-2 py-2 px-3 text-gray-900 rounded underline text-dark hover:font-semibold md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login Now
              </Link>
            </p>

            {/* LOGIN AS TUTOR */}
            <button className="bg-white hover:bg-[#cbee06] transition duration-400 text-dark font-[550] rounded-lg text-[15px] px-4 py-2">
              Login as Tutor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
