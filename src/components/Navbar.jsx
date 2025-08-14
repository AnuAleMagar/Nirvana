import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
function Navbar({streak}) {
  const {isLoggedIn,logout}=useContext(AuthContext)
  return (
    <div>
      <nav className="sticky top-0 relative bg-white shadow-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="/"><img src="/logo.png" alt="Your Company" className="h-12 w-auto" /></a>
              <span
                className="text-3xl italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Nirvana
              </span>
            </div>
             {isLoggedIn?  <div className="flex items-center  space-x-6">
              <div className="hidden sm:flex mr-16 space-x-4">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Quotes
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Meditate
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Sessions
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Analysis
                </a>
              </div>

              <div className="flex items-center space-x-1 ml-16">
                <img
                  src="/streak.png"
                  alt="Streak"
                  className="h-5 w-4"
                />
                <span className="text-sm font-medium">{streak}</span>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/theme.png"
                  alt="theme"
                  className="h-5 w-4 transform -rotate-6 hover:cursor-pointer"
                />
              </div>

              <button className="relative flex rounded-full focus:outline-none">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              </button>
                <button onClick={logout}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
            </div>:<div className="flex items-center  space-x-6">
              <div className="hidden sm:flex space-x-4">
                <a
                  href="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  SignUp
                </a>
                </div>
                </div>}
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
