"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function ManageLession() {
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const [allLession, setAllLession] = useState([]);

  // GETTING ALL LESSION THROUGH USEEFFECT
  useEffect(() => {
    fetch(`https://japanese-language-learning-server-1.onrender.com/api/v1/lession/getalllession`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + cookies.Token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "200") {
          
          setAllLession(data.allLession);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  }, []);



  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Manage Lession</h4>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Lession Name
              </th>
              <th scope="col" class="px-6 py-3">
                Lession Number
              </th>
              <th scope="col" class="px-6 py-3">
                Number of Vocabulary
              </th>

              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allLession.map((lession) => (
              <tr key={lession.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">{lession.lessionName}</td>
                <td class="px-6 py-4">{lession.lessionNumber}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
