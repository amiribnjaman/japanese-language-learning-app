"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import DashboardNav from "./components/DashboardNav";

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
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:w-[90%] mx-auto">
      <DashboardNav />

      {/* DASHBOARD BODY */}
      <div className="mt-[100px] mb-[40px]">
        <div className="flex gap-5 w-full">
          <div className="w-[50%]">
            {/*==============WELCOME CARD from-[#f4f8dd] to-white======== */}
            <div className="flex items-center border border-[#f4f8dd] h-[120px] px-4 rounded-lg w-[100%] bg-gradient-to-l from-[#f7faed] to-white ">
              <div>
                <h3 className="text-[28px] font-semibold mb-2">
                  Welcome, Amir
                </h3>
                <p className="text-[16px]">
                  Welcome back Amir, Enjoy your learing
                </p>
              </div>
            </div>

            {/*=============LEARNING TIME CARD=========== */}
            <div className="relative bg-white mt-[20px] border border-[#f4f8dd] py-4 px-4 rounded-lg w-[100%] h-[240px] ">
              {/* HEADING */}
              <div className="flex justify-between items-center w-full">
                <h3 className="text-[22px] font-regular">Learning Time</h3>
                <h4 className="text-[15px]">This week</h4>
              </div>

              {/* BODY */}
              <div className="absolute flex justify-center mx-auto bottom-3 w-[90%]">
                <div className="flex justify-between w-full">
                  {/* SINGLE BAR */}
                  <div className="flex flex-col items-center justify-end gap-2">
                    {/* <h6 className="text-sm">1 hr</h6> */}
                    <div className="w-[40px] h-[80px] rounded-lg cursor-pointer bg-[#f5fadd]"></div>
                    <h6 className="text-sm">Sat</h6>
                  </div>
                  {/* SINGLE BAR */}
                  <div className="flex flex-col justify-end items-center gap-2">
                    {/* <h6 className="text-sm">1 hr</h6> */}
                    <div className="w-[40px] h-[100px] rounded-lg cursor-pointer bg-[#f5fadd]"></div>
                    <h6 className="text-sm">Sun</h6>
                  </div>
                  {/* SINGLE BAR */}
                  <div className="flex flex-col items-center justify-end gap-2">
                    {/* <h6 className="text-sm">1 hr</h6> */}
                    <div className="w-[40px] h-[80px] rounded-lg cursor-pointer bg-[#f5fadd]"></div>
                    <h6 className="text-sm">Mon</h6>
                  </div>
                  {/* SINGLE BAR */}
                  <div className="flex flex-col items-center justify-end gap-2">
                    <h6 className="text-sm">1 hr</h6>
                    <div className="w-[40px] h-[110px] rounded-lg cursor-pointer bg-[#d5f80f]"></div>
                    <h6 className="text-sm">Tue</h6>
                  </div>
                  {/* SINGLE BAR */}
                  <div className="flex flex-col items-center justify-end gap-2">
                    {/* <h6 className="text-sm">1 hr</h6> */}
                    <div className="w-[40px] h-[100px] rounded-lg cursor-pointer bg-[#f5fadd]"></div>
                    <h6 className="text-sm">Wed</h6>
                  </div>
                  {/* SINGLE BAR */}
                  <div className="flex flex-col items-center justify-end gap-2">
                    {/* <h6 className="text-sm">1 hr</h6> */}
                    <div className="w-[40px] h-[130px] rounded-lg cursor-pointer bg-[#f5fadd]"></div>
                    <h6 className="text-sm">Thu</h6>
                  </div>
                  {/* SINGLE BAR */}
                  <div className="flex flex-col items-center justify-end gap-2">
                    {/* <h6 className="text-sm">1 hr</h6> */}
                    <div className="w-[40px] h-[100px] rounded-lg cursor-pointer bg-[#f5fadd]"></div>
                    <h6 className="text-sm">Fri</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*==================RUNNING COURSE================*/}
          <div className="w-[50%] border border-[#f4f8dd] py-4 px-4 rounded-lg bg-white">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-[8px] h-[8px] rounded-full bg-[#d5f80f]"></div>
                <h4 className="text-[22px]">Running Course</h4>
              </div>
              <h5 className="text-[15px]">6 hours</h5>
            </div>

            {/* COURSE CARD */}
            <div className="mt-4">
              {/* SINGLE COURSE */}
              <div className="flex flex-col gap-3">
                <div className="bg-[#d5f80f] px-4 py-4 text-lg rounded-lg flex justify-between items-center">
                  <h3>Learn Garmany basic to Advance </h3>
                  <h4 className="text-[15px]">11 lessions</h4>
                </div>

                {/* LESSION CARDS */}
                <div className="w-[95%] ml-auto flex flex-col gap-2">
                  {/* SINGLE LESSION CARD */}
                  <div className=" px-4 py-2.5 rounded-lg flex justify-between items-center bg-[#fafcf7] hover:bg-[#f0f7c7] cursor-pointer">
                    <h4>Lession 1</h4>
                    <h3>Introduction to the course</h3>
                    <button className=" flex gap-3 font-semibold text-gray-800 items-center">
                      <span className="px-2 py-2 bg-[#f4f8dd] text-gray-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path
                              fill="currentColor"
                              d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {/* SINGLE LESSION CARD */}
                  <div className=" px-4 py-2.5 rounded-lg flex justify-between items-center bg-[#fafcf7] hover:bg-[#f0f7c7] cursor-pointer">
                    <h4>Lession 2</h4>
                    <h3>Letter and Alpabets</h3>
                    <button className=" flex gap-3 font-semibold text-gray-800 items-center">
                      <span className="px-2 py-2 bg-[#f4f8dd] text-gray-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path
                              fill="currentColor"
                              d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {/* SINGLE LESSION CARD */}
                  <div className=" px-4 py-2.5 rounded-lg flex justify-between items-center bg-[#fafcf7] hover:bg-[#f0f7c7] cursor-pointer">
                    <h4>Lession 1</h4>
                    <h3>Primary Vocabularies</h3>
                    <button className=" flex gap-3 font-semibold text-gray-800 items-center">
                      <span className="px-2 py-2 bg-[#f4f8dd] text-gray-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                            <path
                              fill="currentColor"
                              d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                <Link
                  href="/learn/my-courses"
                  className="flex justify-end mt-4 text-sm underline cursor-pointer"
                >
                  <h6>See ALL Lessions</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============== MY ENROLLED COURSES============= */}
        <div className="mt-6">
          <div className="w-[100%] border border-[#f4f8dd] py-4 px-4 rounded-lg bg-white">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="w-[8px] h-[8px] rounded-full bg-[#edf064]"></div>
                <h4 className="text-[22px]">
                  Most Recently You Enrolled Courses
                </h4>
              </div>
              <h5 className="text-[15px]">3 course total</h5>
            </div>

            {/* COURSE CARD */}
            <div className="mt-4">
              <div className="flex flex-col gap-3">
                {/* SINGLE CARD */}
                <div className="bg-[#f5fadd] hover:bg-[#d5f80f]/80 px-4 py-4 text-lg rounded-lg flex justify-between items-center cursor-pointer">
                  <h3 className="w-3/6 text-left ">
                    Learn Garmany basic to Advance
                  </h3>
                  <h3 className="text-sm w-1/6 text-left">By Hasan Tabriz</h3>
                  <h3 className="text-sm w-1/6 text-center">12 enrolled</h3>
                  <h4 className="text-sm w-1/6 text-right">22 lession</h4>
                </div>
                {/* SINGLE CARD */}
                <div className="bg-[#f5fadd] hover:bg-[#d5f80f]/80 px-4 py-4 text-lg rounded-lg flex justify-between items-center cursor-pointer">
                  <h3 className="w-3/6 text-left ">Be Confident in English </h3>
                  <h3 className="text-sm w-1/6 text-left">By Abu Sufian</h3>
                  <h3 className="text-sm w-1/6 text-center">18 enrolled</h3>
                  <h4 className="text-sm w-1/6 text-right">20 lession</h4>
                </div>
                {/* SINGLE CARD */}
                <div className="bg-[#f5fadd] hover:bg-[#d5f80f]/80 px-4 py-4 text-lg rounded-lg flex justify-between items-center cursor-pointer">
                  <h3 className="w-3/6 text-left ">
                    Master in German Vocabular
                  </h3>
                  <h3 className="text-sm w-1/6 text-left">By Adnan Hafiz</h3>
                  <h3 className="text-sm w-1/6 text-center">10 enrolled</h3>
                  <h4 className="text-sm w-1/6 text-right">12 lession</h4>
                </div>

                {/* <div className="flex justify-end mt-4 text-sm underline cursor-pointer">
                  <h6>See ALL enrolled courses</h6>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/*==================NEW COURSE============ */}
        <div className="mt-12">
          {/* Heading */}
          <div className="flex justify-between items-center cursor-pointer">
            <h2 className="text-[24px]">New Released Courses</h2>
            <Link href="/learn/all-courses" className="text-sm underline">
              See All Courses
            </Link>
          </div>

          {/* COURSE CARDS */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {/* SINGLE COURSE CARD */}
            <div className="bg-white w-full rounded-lg p-4 border border-[#f4f8dd]">
              {/* TAG */}
              <div className="bg-[#dcf1fa] ml-4  mb-5 h-[28px] w-[92px] rounded-full flex items-center justify-center">
                <h4 className="text-[10px] text-[#035477]">Popular Now</h4>
              </div>
              <div className="mb-4 flex gap-3">
                <div className="w-[18px] rounded-full h-[80px] mt-1 bg-[#d5f80f]"></div>
                <div>
                  <h3
                    title="Master in German vocabulary"
                    className="text-[22px] font-[550] leading-[1.2] line-clamp-1 cursor-pointer"
                  >
                    Is French really hard?
                  </h3>
                  <h4 className="text-[14px] mt-1.5">By Adnan Hafiz</h4>
                  <p className="text-[14px] font-light mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla velit tempora dolorum. Id veniam recusandae ad
                    voluptatum similique itaque eius.
                  </p>
                </div>
              </div>
              {/* <div className="mt-4 flex justify-between">
                <h4>Lesson 8</h4>
                <h4>2 hours</h4>
                <h4>4 enrolled</h4>
              </div>
               */}

              {/* ENROLL BUTTON */}
              <div className=" mt-8 items-center">
                <div className="w-full text-sm flex justify-between mb-3 ">
                  <h5 className="font-semibold">FREE</h5>
                  <h5>Not rate yet</h5>
                </div>
                <button className="bg-[#d5f80f] hover:bg-[#cff303] transition font-semibold text-[15px] h-[40px] w-full text-center py-2 rounded-md">
                  Enroll Now
                </button>
              </div>
            </div>
            {/* SINGLE COURSE CARD */}
            <div className="bg-white w-full rounded-lg p-4 border border-[#f4f8dd]">
              {/* TAG */}
              <div className="bg-[#dcf1fa] ml-4  mb-5 h-[28px] w-[92px] rounded-full flex items-center justify-center">
                <h4 className="text-[10px] text-[#035477]">Popular Now</h4>
              </div>
              <div className="mb-4 flex gap-3">
                <div className="w-[18px] rounded-full h-[80px] mt-1 bg-[#d5f80f]"></div>
                <div>
                  <h3
                    title="Master in German vocabulary"
                    className="text-[22px] font-[550] leading-[1.2] line-clamp-1 cursor-pointer"
                  >
                    Is French really hard?
                  </h3>
                  <h4 className="text-[14px] mt-1.5">By Adnan Hafiz</h4>
                  <p className="text-[14px] font-light mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla velit tempora dolorum. Id veniam recusandae ad
                    voluptatum similique itaque eius.
                  </p>
                </div>
              </div>
              {/* <div className="mt-4 flex justify-between">
                <h4>Lesson 8</h4>
                <h4>2 hours</h4>
                <h4>4 enrolled</h4>
              </div>
               */}

              {/* ENROLL BUTTON */}
              <div className=" mt-8 items-center">
                <div className="w-full text-sm flex justify-between mb-3 ">
                  <h5 className="font-semibold">FREE</h5>
                  <h5>Not rate yet</h5>
                </div>
                <button className="bg-[#d5f80f] hover:bg-[#cff303] transition font-semibold text-[15px] h-[40px] w-full text-center py-2 rounded-md">
                  Enroll Now
                </button>
              </div>
            </div>
            {/* SINGLE COURSE CARD */}
            <div className="bg-white w-full rounded-lg p-4 border border-[#f4f8dd]">
              {/* TAG */}
              <div className="bg-[#dcf1fa] ml-4  mb-5 h-[28px] w-[92px] rounded-full flex items-center justify-center">
                <h4 className="text-[10px] text-[#035477]">Popular Now</h4>
              </div>
              <div className="mb-4 flex gap-3">
                <div className="w-[18px] rounded-full h-[80px] mt-1 bg-[#d5f80f]"></div>
                <div>
                  <h3
                    title="Master in German vocabulary"
                    className="text-[22px] font-[550] leading-[1.2] line-clamp-1 cursor-pointer"
                  >
                    Is French really hard?
                  </h3>
                  <h4 className="text-[14px] mt-1.5">By Adnan Hafiz</h4>
                  <p className="text-[14px] font-light mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla velit tempora dolorum. Id veniam recusandae ad
                    voluptatum similique itaque eius.
                  </p>
                </div>
              </div>
              {/* <div className="mt-4 flex justify-between">
                <h4>Lesson 8</h4>
                <h4>2 hours</h4>
                <h4>4 enrolled</h4>
              </div>
               */}

              {/* ENROLL BUTTON */}
              <div className=" mt-8 items-center">
                <div className="w-full text-sm flex justify-between mb-3 ">
                  <h5 className="font-semibold">FREE</h5>
                  <h5>Not rate yet</h5>
                </div>
                <button className="bg-[#d5f80f] hover:bg-[#cff303] transition font-semibold text-[15px] h-[40px] w-full text-center py-2 rounded-md">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Loading state data */}
        <div className=" mt-4">
          <h5>
            {loading &&
              `Data Loading... 
        Please wait a moment.`}
          </h5>
        </div>
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
    </div>
  );
}
