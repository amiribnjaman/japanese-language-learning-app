"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import DashboardNav from "./../components/DashboardNav";

export default function MyCourses() {
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

      {/* MY COURSES BODY */}
      <div className="mt-[100px] mb-[40px]">
        <div className="flex gap-6">
          {/*=====================VIDOE PLAYER==================== */}
          <div className="w-[50%] border border-[#f4f8dd] py-4 px-4 rounded-lg bg-white">
            <div className="w-full h-[212px] bg-[#eee] rounded-lg flex items-center justify-center">
              <button className=" flex gap-3 font-semibold text-gray-800 items-center">
                <span className="px-3 py-3 bg-[#f4f8dd]  shadow-lg text-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
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
            {/* PLAYER BODY/TITLE */}
            <div className="flex justify-between mt-5">
              <h2 className="text-[24px] flex flex-col">
                Primary Vocabularies
                <span className="text-sm">By Sariful Haq</span>
              </h2>
              <h4 className="mt-2">Lession 1</h4>
            </div>

            {/*============== LESSION DESCRIPTION============= */}
            <div className="mt-8">
              <h3 className="relative pb-2 mb-3">
                Description
                <span className="w-[80px] h-[3px] bg-[#d5f80f] rounded-lg absolute bottom-0 left-0"></span>
              </h3>
              <hr />
              <p className="text-sm text-slate-700 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti distinctio ratione libero, doloribus beatae iure at, id
                quod dignissimos harum eligendi ipsam, ut rerum. Dolorum
                asperiores consequatur doloribus? Iusto molestiae eius minus
                facilis alias? Aliquid laboriosam veniam mollitia officia cum
                eligendi, illo distinctio deleniti ullam vel esse possimus,
                pariatur alias! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Corrupti distinctio ratione libero, doloribus
                beatae iure at, id quod dignissimos harum eligendi ipsam, ut
                rerum. Dolorum asperiores consequatur doloribus? Iusto molestiae
                eius minus facilis alias? Aliquid laboriosam veniam mollitia
                officia cum eligendi, illo distinctio deleniti ullam vel esse
                possimus, pariatur alias!
              </p>
            </div>
          </div>
          {/*==================RUNNING COURSE================*/}
          <div className="w-[50%] border border-[#f4f8dd] py-4 px-4 rounded-lg bg-white">
            {/* HEADING */}
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
                  <div className=" px-4 py-2.5 rounded-lg flex justify-between items-center  bg-[#fafcf7] hover:bg-[#f0f7c7] cursor-pointer">
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
                  <div className=" px-4 py-2.5 rounded-lg flex justify-between items-center bg-[#d5f80f]/70 hover:bg-[#f0f7c7] cursor-pointer">
                    <h4>Lession 3</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
                    <button className=" flex gap-3 font-semibold items-center">
                      <span className="px-[10px] py-[10px] bg-[#f4f8dd] text-gray-600 rounded-full flex items-center gap-[3px] justify-center">
                        <div className="w-[4px] h-[12px] rounded-lg bg-slate-700"></div>
                        <div className="w-[4px] h-[12px] rounded-lg bg-slate-700"></div>
                        {/* <svg
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
                        </svg> */}
                      </span>
                    </button>
                  </div>
                  {/* SINGLE LESSION CARD */}
                  <div className=" px-4 py-2.5 rounded-lg flex justify-between items-center bg-[#fafcf7] hover:bg-[#f0f7c7] cursor-pointer">
                    <h4>Lession 4</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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
                    <h4>Lession 6</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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
                    <h4>Lession 7</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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
                    <h4>Lession 8</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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
                    <h4>Lession 9</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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
                    <h4>Lession 10</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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
                    <h4>Lession 11</h4>
                    <h3 className="text-left">Primary Vocabularies</h3>
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

                {/* <div className="flex justify-end mt-4 text-sm underline cursor-pointer">
                <h6>See ALL Lessions</h6>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        {/*======================OTHER ENROLLED COURSES========== */}
        <div className="mt-6 w-[100%] border border-[#f4f8dd] py-4 px-4 rounded-lg bg-white">
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

              {/* <div className="flex justify-end mt-4 text-sm underline cursor-pointer">
                <h6>See ALL enrolled courses</h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
