"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function ManageVocabulary() {
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const [allVocabulary, setAllVocabulary] = useState([]);

  // GETTING ALL VOCABULARY THROUGH USEEFFECT
  useEffect(() => {
    fetch(
      `https://japanese-language-learning-server-1.onrender.com/api/v1/vocabulary/getallvocabulary`,
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + cookies.Token,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "200") {
          setAllVocabulary(data.allVocabulary);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  }, []);

  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Manage Vocabulary</h4>
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
            </tr>
          </thead>
          <tbody>
            {allVocabulary.map((vocabulary) => (
              <tr
                key={vocabulary.id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {vocabulary.word}
                </td>
                <td class="px-6 py-4">{vocabulary.Meaning}</td>
                <td class="px-6 py-4">{vocabulary.pronunciation}</td>
                <td class="px-6 py-4">{vocabulary.whenToSay}</td>
                <td class="px-6 py-4">{vocabulary.lessionNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
