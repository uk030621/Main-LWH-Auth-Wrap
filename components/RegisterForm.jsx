/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // Helper function to capitalize the first letter of each word
  const capitalizeWords = (input) => {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // useEffect to capitalize the name when it changes
  useEffect(() => {
    if (name) {
      setName(capitalizeWords(name));
    }
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex justify-center items-start h-screen px-4 mt-10">
      {/* Adjust margin and vertical alignment */}
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-grey-700 bg-white w-full max-w-md">
        <h1 className="text-xl font-bold my-4">Register</h1>
        

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}  
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => setEmail(e.target.value)} 
            value={email}  
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}  
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-black text-white font-bold cursor-pointer px-6 py-2 rounded-md hover:bg-green-700 transition-all">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-full text-sm py-2 px-4 rounded-md mt-2 text-center">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right text-gray-500 hover:underline" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
