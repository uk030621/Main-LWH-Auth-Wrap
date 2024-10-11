/* eslint-disable react/no-unescaped-entities */
"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  // Extract the first name
  const firstName = session?.user?.name?.split(" ")[0]; // Split the name by spaces and take the first part

  return (
    <div className="flex justify-center items-start h-screen px-4 mt-4">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        {/* Move button to a flex container for alignment */}
        <div className="flex justify-end mb-6"> 
        <p className="self-center">Hello <span className="mr-8 ml-1/2 font-extralight">{firstName},</span></p>
        <p className="self-center">Email: <span className="font-extralight">{session?.user?.email}</span></p>

          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white text-sm py-2 px-4 rounded-md ml-10"
          >
            Log Out
          </button>
        </div>
        <div className="flex justify-center mb-6 mt-6"> 
          <h1>Place main code here</h1>
        </div>


      </div>
    </div>
  );
}

