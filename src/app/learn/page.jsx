"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Learn() {
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const [allLession, setAllLession] = useState([]);
  const [loading, setLoading] = useState(false);

  let userId;
  /*
   **
   ** GETTING LOGEDIN USER-ID FROM LOCALSTORAGE
   **
   */
  // if (typeof window !== "undefined") {
  //   userId = localStorage.getItem("userId");
  // }

  // GETTING ALL LESSION THROUGH USEEFFECT
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://japanese-language-learning-server-1.onrender.com/api/v1/lession/getalllession`,
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
          setAllLession(data.allLession);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
    setLoading(false);
  }, []);

  return (
    <div className="md:w-[70%] mx-auto">
      <h3 className="text-2xl font-semibold mb-2">Learn Now</h3>
      {loading && "Loading..."}
      {allLession.map((lession) => (
        <div
          key={lession.id}
          className="bg-gray-200 w-[100%] mt-3 rounded-lg border"
        >
          <div className="bg-gray-100">
            <h4 className="px-6 py-3 text-2xl font-semibold capitalize">
              {lession.lessionName}
            </h4>
          </div>
          <div className="bg-white flex justify-between items-center px-5 py-2">
            <div className="flex gap-6">
              <h5 className="text-sm">
                Lession No:
                <span className="font-semibold">{lession.lessionNumber}</span>
              </h5>
              <h5 className="text-sm">Total Vocabulary:</h5>
            </div>
            <div>
              <Link
                href={`/learn/lession/${lession.lessionName}/${lession.lessionNumber}`}
                className="text-white bg-blue-600 px-3 py-1 rounded"
              >
                Lets Start
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
