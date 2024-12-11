import React from "react";

export default function ManageLession() {
  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Manage Lession</h4>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Word
              </th>
              <th scope="col" class="px-6 py-3">
                Meaning
              </th>
              <th scope="col" class="px-6 py-3">
                Pronunciation
              </th>
              <th scope="col" class="px-6 py-3">
                When to say
              </th>
              <th scope="col" class="px-6 py-3">
                Lession No
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right flex gap-x-2">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
