"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddLession() {
    
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

    
    
  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Add Lession</h4>
      <form onSubmit={handleSubmit()}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="lession_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Lession name
            </label>
            <input
              {...register("lession_name", { required: true })}
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
              Lession No
            </label>
            <input
              {...register("lession_no", { required: true })}
              type="text"
              id="lession_no"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
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
