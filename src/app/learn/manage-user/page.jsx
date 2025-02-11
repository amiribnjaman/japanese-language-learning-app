"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function ManageUser() {
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const [allUser, setAllUser] = useState([]);
  const [roleUpdate, setRoleUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://japanese-language-learning-server-1.onrender.com/api/v1/user/getalluser`,
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
        if (data.status == "200") {
          setAllUser(data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
        setLoading(false);
      });
  }, [roleUpdate]);

  const handleRoleChange = (data) => {
    console.log(data);
    fetch(
      `https://japanese-language-learning-server-1.onrender.com/api/v1/user/changeuserrole`,
      {
        method: "PATCH",
        headers: {
          authorization: "Bearer " + cookies.Token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "200") {
          console.log(data);
          setRoleUpdate(!roleUpdate);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  };

  return (
    <div className="md:w-[90%] ml-auto">
      <h4 className="text-lg font-semibold mb-2">Manage User</h4>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                User Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>

              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user) => (
              <tr
                key={user.id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 py-4 font-medium text-gray-900  dark:text-white">
                  {user.name}
                </td>
                <td class="px-6 py-4">{user.email}</td>
                <td class="px-6 py-4 gap-x-2">{user.role}</td>
                <td class="pl-6 py-4">
                  {user.role == "admin" ? (
                    <button
                      onClick={() => handleRoleChange(user.email)}
                      className="bg-red-200 px-2 py-1 rounded"
                    >
                      Make User
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRoleChange(user.email)}
                      className="bg-green-200 px-2 py-1 rounded"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Loading state data */}
      <div className=" mt-4">
        <h5>
          {loading &&
            `Data Loading... 
        Please wait a moment.`}
        </h5>
      </div>
    </div>
  );
}
