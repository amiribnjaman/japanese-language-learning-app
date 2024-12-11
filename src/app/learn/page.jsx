import React from 'react'

export default function Learn() {
let userId;
/*
 **
 ** GETTING LOGEDIN USER-ID FROM LOCALSTORAGE
 **
 */
if (typeof window !== "undefined") {
  userId = localStorage.getItem("userId");
}








  return <div className="md:w-[70%] mx-auto">Learn</div>;
}
