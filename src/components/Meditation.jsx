import { useState } from "react";

function Meditation() {
  const [time, setTime] = useState("00:00:05");
  const [intervalId, setIntervalId] = useState(null);
  function handleTime(minutesToAdd) {
    setTime((prevTime) => {
      const [h, m, s] = prevTime.split(":").map(Number);
      const totalSeconds = h * 3600 + m * 60 + s;
      const newTotal = totalSeconds + minutesToAdd * 60;

      const newH = Math.floor(newTotal / 3600)
        .toString()
        .padStart(2, "0");
      const newM = Math.floor((newTotal % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const newS = (newTotal % 60).toString().padStart(2, "0");

      return `${newH}:${newM}:${newS}`;
    });
  }

  function handleTimer() {
    if (intervalId) {
        clearInterval(intervalId)
        setIntervalId(null);
    } // prevent multiple intervals
     else{
          const id = setInterval(() => {
      setTime((prevTime) => {
        const [h, m, s] = prevTime.split(":").map(Number);
        let totalSeconds = h * 3600 + m * 60 + s;

        if (totalSeconds <= 0) {
          clearInterval(id);
          setIntervalId(null);
          return "00:00:00";
        }

        totalSeconds -= 1; // decrease 1 second

        const newH = Math.floor(totalSeconds / 3600)
          .toString()
          .padStart(2, "0");
        const newM = Math.floor((totalSeconds % 3600) / 60)
          .toString()
          .padStart(2, "0");
        const newS = (totalSeconds % 60).toString().padStart(2, "0");

        return `${newH}:${newM}:${newS}`;
      });
    }, 1000);

    setIntervalId(id);
     }
  
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white w-[750px] max-w-3xl rounded-[40px] p-6 shadow-lg text-center">
        <h1 className="font-bold text-2xl mb-2 mt-5">Start Meditating</h1>
        <p>Free your mind from pain, one breath at a time</p>
        <p className="mt-5">Choose your session duration:</p>

        {/* Duration buttons */}
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          <button
            onClick={() => {
              handleTime(5);
            }}
            className="bg-blue-50 px-4 py-2 rounded-3xl"
          >
            +5Min
          </button>
          <button
            onClick={() => {
              handleTime(10);
            }}
            className="bg-blue-50 px-4 py-2 rounded-3xl"
          >
            +10Min
          </button>
          <button
            onClick={() => {
              handleTime(15);
            }}
            className="bg-blue-100 px-4 py-2 rounded-3xl"
          >
            +15Min
          </button>
          <button
            onClick={() => {
              handleTime(30);
            }}
            className="bg-blue-50 px-4 py-2 rounded-3xl"
          >
            +30Min
          </button>
          <button
            onClick={() => {
              setTime("00:00:00");
            }}
            className="bg-blue-50 px-4 py-2 rounded-3xl"
          >
            Reset
          </button>
        </div>

        {/* Timer */}
        <div className=" justify-center items-center ml-[280px] mt-8 mb-8 bg-blue-400 text-white text-center py-4 rounded-full h-40 w-40 text-xl font-bold">
          <h1 className="font-bold text-3xl p-6 mt-5">{time}</h1>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-12 mt-4 mb-6">
                <button
            onClick={handleTimer}
            className="bg-blue-500 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-blue-600 transition"
          >
            {intervalId ? "Pause ⏸️" : "▶️ Start Session"}
          </button>


          <button className="bg-white text-gray px-6 py-2 rounded-2xl hover:bg-gray-200 transition shadow-md">
            Select Music
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meditation;
