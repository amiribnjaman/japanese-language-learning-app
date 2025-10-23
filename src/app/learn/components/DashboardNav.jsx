import React from 'react'

export default function DashboardNav() {
  return (
    <nav
      className={`fixed backdrop-blur-lg bg-gradient-to-r from-[#f5f7f4] to-white dark:bg-gray-900 top-4 h-[60px] w-[72%] rounded-lg z-[200]`}
    >
      <div className="pr-2 pt-2 flex justify-between items-center">
        <div>
          <div className="w-[400px] shadow-[24px] flex items-center px-4 h-[44px] bg-white rounded">
            <span>Search here...</span>
          </div>
        </div>
        <div className='flex gap-4'>
          <button className='bg-[#d5f80f] hover:bg-[#cbee06] transition duration-400 text-dark font-[550] rounded-lg text-[15px] px-4 py-1.5'>Login as Tutor</button>
          <button
            onClick={() => navigate.push("/learn")}
            className="w-[44px] h-[44px] bg-[#f0f7c7] hover:bg-[#f0f7c7] rounded-full flex items-center gap-2"
          ></button>
        </div>
      </div>
    </nav>
  );
}
