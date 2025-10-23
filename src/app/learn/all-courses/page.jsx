"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import DashboardNav from "./../components/DashboardNav";

export default function AllCourses() {
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
        {/*==================NEW COURSE============ */}
        <div className="mt-8">
          {/* Heading */}
          <div className="flex justify-between items-center cursor-pointer">
            <h2 className="text-[24px]">New Released Courses</h2>
            <h5 className="text-sm">This Week</h5>
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
        {/*==================NEW COURSE============ */}
        <div className="mt-12">
          {/* Heading */}
          <div className="flex justify-between items-center cursor-pointer">
            <h2 className="text-[24px]">Best Rating Courses</h2>
            <h5 className="text-sm">All Time</h5>
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
        {/*==================NEW COURSE============ */}
        <div className="mt-12">
          {/* Heading */}
          <div className="flex justify-between items-center cursor-pointer">
            <h2 className="text-[24px]">All Time Recommended Courses</h2>
            <h5 className="text-sm">All Time</h5>
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
      </div>
    </div>
  );
}
