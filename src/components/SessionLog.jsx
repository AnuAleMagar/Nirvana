import React from "react";
import Streak from "./Streak";
function SessionLog() {
  return (
    <div>
      <Streak />
<div className="flex justify-center mt-6">
  <div className="bg-white w-[1000px] h-[360px] rounded-2xl pt-6 mb-6 pb-6 flex flex-col items-center justify-center space-y-4 shadow-lg">
    
    {/* Title */}
    <h1 className="text-xl font-bold ">🗒️ Session Log</h1>

    {/* Stats */}
    <div className="flex gap-4 pb-6 pt-3 ">
      <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center w-80 h-24">
        <h1 className="font-bold text-lg">0</h1>
        <p className="text-center">Total Session</p>
      </div>
      <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center w-80 h-24">
        <h1 className="font-bold text-lg ">0</h1>
        <p className="text-center">Minutes Practiced</p>
      </div>
    </div>

    {/* Clock Image */}
    <img src="/clock.png" alt="clock" className="h-12 w-12 " />

    {/* Journey Text */}
    <h1 className="text-lg font-semibold text-center">Your Journey begins here</h1>
    <p className="text-center text-gray-600">Start cleansing your mind today!</p>

  </div>
</div>

    </div>
  );
}

export default SessionLog;
