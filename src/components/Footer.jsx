"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();

  let authPaths = ["login", "signup"];
  let auth;

  auth = authPaths.some(p => path.includes(p))


  return (
    <footer class={`${auth && "hidden"} bg-[#d5f80f] py-8 dark:bg-gray-800`}>
      <div class="md:max-w-[92%] w-[90%] mx-auto py-4 flex items-center sm:justify-between flex-col sm:flex-row">
        <div className="flex gap-20">
          <div className="w-1/3">
            <Link
              href="/"
              className="Logo text-[28px] font-bold text-gray-900 sm:text-center dark:text-gray-400 flex items-center"
            >
              {/* <span className="text-red-600 font-bold text-2xl mr-2">Jll</span> */}
              <span className="">Fluentoo</span>
            </Link>

            <p className="mt-4 text-[16px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              sunt deserunt ipsum, saepe tempora iure voluptate eaque in
              voluptas quam aliquid, repellendus sint nisi aliquam veniam
              doloribus perspiciatis aperiam sapiente?
            </p>
          </div>

          <div className="mt-14 w-2/4 flex gap-6 justify-between">
            <ul class="mt-3 flex flex-col gap-4 text-[18px] text-dark dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="mt-3 flex flex-col gap-4 text-[18px] text-dark dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Terms & Condtitions
                </a>
              </li>
            </ul>

            <ul class="mt-3 flex flex-col gap-4 text-[18px] text-dark dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Resource
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Team
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
