import React from "react";

function Streak({streak}) {
  return (
<div className="bg-orange-500 h-[160px] w-[1000px] flex flex-col items-center justify-center p-6 rounded-2xl mx-auto p-5">
  <div className="flex items-center gap-4">
    <img src="/streakwhite.png" alt="firestreak" className="h-7 w-" />
    <h1 className="font-bold text-lg text-white">Current Streak</h1>
  </div>
  <button className="bg-white text-orange-500 px-4 py-1 rounded-md font-bold mt-2">
    {streak}
  </button>
  <p className="text-white mt-2">days in a row</p>
</div>

  );
}

export default Streak;
