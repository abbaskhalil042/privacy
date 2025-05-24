"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-2">
      <h1 className="text-2xl font-semibold mb-2">
        Welcome to <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">UpCloud</span> – Innovating
        Healthcare for a Healthier Tomorrow
      </h1>
      <p className="font-semibold">click on privacy policy to know more 👇🏻</p>
      <Link
        href="/privacypolicy"
        className="p-2 bg-slate-100 text-black font-medium rounded-md"
      >
        <button>Privacy Policy</button>
      </Link>
    </div>
  );
};

export default Home;
