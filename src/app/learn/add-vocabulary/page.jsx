"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function AddVocabulary() {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Add Vocabulary submit function
  const addVocabularySubmit = async (data) => {
    console.log(data);
    setLoading(true);
    if (data.word && data.pronunciation && data.whenToSay && data.lessionNumber && data.adminEmail) {
      console.log(data);
      await axios
        .post(
          `http://localhost:4000/api/v1/vocabulary/createvocabulary`,
          data,
          {
            headers: {
              authorization: "Bearer " + cookies.Token,
              "Content-Type": "application/json",
            },
          }
        )
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
      <h4 className="text-lg font-semibold mb-2">Add Vocabulary</h4>
      <form onSubmit={handleSubmit(addVocabularySubmit)}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="word"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Word
            </label>
            <input
              type="text"
              id="word"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              {...register("word", { required: true })}
            />
          </div>
          <div>
            <label
              for="pronunciation"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pronunciation
            </label>
            <input
              {...register("pronunciation", { required: true })}
              type="text"
              id="pronunciation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="when_to_say"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              When to say
            </label>
            <input
              {...register("whenToSay", { required: true })}
              type="text"
              id="when_to_say"
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
              Lession No
            </label>
            <input
              {...register("lessionNumber", { required: true })}
              type="text"
              id="lession_no"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="admin_email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Admin Email
          </label>
          <input
            {...register("adminEmail", { required: true })}
            type="email"
            id="admin_email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
