"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const navigate = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const path = usePathname();

  let authPaths = ["login", "signup", 'learn'];
  let auth;

  auth = authPaths.some(p => path.includes(p))

  let userId;
  /*
   **
   ** GETTING LOGEDIN USER-ID FROM LOCALSTORAGE
   **
   */
  if (typeof window !== "undefined") {
    userId = localStorage.getItem("userId");
  }

  // Handle logout button
  const handleLogout = () => {
    localStorage.removeItem("userId");
    setCookie("Token", "");
    sessionStorage.removeItem("Token");
    navigate.push("/login");
  };

  console.log(auth)

  return (
    <nav
      class={`${
        auth ? "hidden" : "block"
      } backdrop-blur-lg bg-white border-gray-200 dark:bg-gray-900 fixed top-8 w-full z-[100]`}
    >
      <div class="w-[95%] md:max-w-[92%] flex flex-wrap bg-[#d5f80f] items-center justify-between mx-auto px-8 py-3 rounded-full">
        <Link
          href="/"
          className="Logo text-[28px] font-bold text-gray-900 sm:text-center dark:text-gray-400 flex items-center"
        >
          {/* <span className="text-red-600 font-bold text-2xl mr-2">Jll</span> */}
          <span className="">Fluentoo</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium text-[18px] flex flex-col px-4 py-1 mt-4 border items-center border-gray-100 rounded-lg md:flex-row md:space-x-[16px] rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                class="block py-1 px-4 text-gray-700 hover:bg-[#f4f8dd] rounded-full md:bg-transparent md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                class="block py-1 px-4 text-gray-700 hover:bg-[#f4f8dd] rounded-full md:bg-transparent md:dark:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                class="block py-1 px-4 text-gray-700 hover:bg-[#f4f8dd] rounded-full md:bg-transparent md:dark:text-blue-500"
              >
                Contact
              </Link>
            </li>
            {/* {userId ? (
              <li>
                <button
                  onClick={handleLogout}
                  class="block py-1 px-4 text-gray-700 hover:bg-[#f4f8dd]  rounded md:bg-transparent md:dark:text-blue-500"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    class="block py-1 px-4 text-gray-700 hover:bg-[#f4f8dd] rounded-full md:bg-transparent md:dark:text-blue-500"
                  >
                    Login
                  </Link>
                </li>
              </>
            )} */}
          </ul>
        </div>

        <div>
          <button
            onClick={() => navigate.push("/login")}
            className="px-8 py-2.5 bg-[#f4f8dd] hover:bg-[#f0f7c7] rounded-full flex items-center gap-2"
          >
            <span>Login</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.48 20q-.213 0-.356-.143t-.143-.357t.143-.357t.357-.143h5.904q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5h-5.903q-.214 0-.357-.143t-.143-.357t.143-.357t.357-.143h5.904q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm.407-7.5H4.5q-.213 0-.357-.143T4 12t.143-.357t.357-.143h8.387l-1.972-1.971q-.14-.14-.15-.338q-.01-.199.15-.364t.354-.168t.36.162l2.613 2.613q.242.243.242.566t-.242.566l-2.613 2.613q-.146.146-.347.153t-.367-.159q-.16-.165-.156-.357q.003-.191.162-.35z"
              />
            </svg>
          </button>
          {/* <button
            onClick={() => navigate.push("/login")}
            className="px-7 py-3 bg-[#f4f8dd] hover:bg-[#f0f7c7] rounded-full flex items-center gap-2"
          >
            <span>Get Started</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              className="rotate-90"
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
          </button> */}
        </div>
      </div>
    </nav>
  );
}
