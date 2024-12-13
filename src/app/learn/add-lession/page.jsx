"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function AddLession() {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Add Lession submit function
  const addLessionSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    if (data.lessionName && data.lessionNumber) {
      console.log(data);
      await axios
        .post(`http://localhost:4000/api/v1/lession/addlession`, data, {
          headers: {
            authorization: "Bearer " + cookies.Token,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == "200") {
            console.log(res.data);
            setLoading(false);
            toast.success(res.data.message);
          } else if (res.data.status == "401" || res.data.status == "404") {
            setLoading(false);
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Fill all required field or  try again");
        });
    }

    reset();
  };

  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Add Lession</h4>
      <form onSubmit={handleSubmit(addLessionSubmit)}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="lession_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Lession name*
            </label>
            <input
              {...register("lessionName", { required: true })}
              type="text"
              id="lession_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="lession_no"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Lession No*
            </label>
            <input
              {...register("lessionNumber", { required: true })}
              type="number"
              id="lession_no"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class={`${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          {`${loading == true ? "Loading..." : "Login"}`}
        </button>
      </form>
    </div>
  );
}
