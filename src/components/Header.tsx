"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="https://cdn.lugc.link/ba71d94d-c3cf-44c7-9764-294540f5cc26/-/preview/108x76/-/format/auto/"
            alt="DPS International School"
            width={110}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Button */}
        <div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition">
            Admission Open 2026-27
          </button>
        </div>

      </div>

    </header>
  );
}