import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white rounded-lg m-4 dark:bg-gray-800">
      <div class="md:max-w-[70%] w-[90%] mx-auto p-4 flex items-center sm:justify-between flex-col sm:flex-row">
        <a class="text-sm flex items-center text-gray-500 sm:text-center dark:text-gray-400">
          <span className="text-red-600 font-bold text-2xl mr-2">Jll</span>
          <span className="text-lg hidden lg:block">
            Japanese Language Learn
          </span>
          . All Rights Reserved.
        </a>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
