import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-4 max-w-lg m-auto">
      <h1 className="text-center text-3xl font-semibold my-4">Sign Up</h1>

      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/SignIN">
          <span className="text-blue-500">Sign In</span>{" "}
        </Link>
      </div>
    </div>
  );
}
