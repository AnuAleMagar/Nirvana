import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-4rem)] relative">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-[url('/meditation2.jpg')] bg-contain bg-center bg-no-repeat opacity-30"></div>
      <div className="relative z-10 flex flex-col space-y-4 w-[300px] h-[300px] bg-[url('/meditation2.jpg')] bg-cover bg-center rounded-lg shadow-lg p-6 pt-10 mt-12 ml-5 opacity-75  rounded-3xl">
        <h1 className="text-xl font-bold text-white text-center">Welcome!</h1>
     <input
  type="text"
  placeholder="Email"
  className="bg-transparent border border-white/80 rounded-md p-2 text-white placeholder-white/70"
/>
        <input
          type="password"
          placeholder="Password"
          className="bg-white/20 backdrop-blur-md border border-white/40 rounded-xl p-2 text-white placeholder-white/70"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}
// ...existing code...

export default Login;
