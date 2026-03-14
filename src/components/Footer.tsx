"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-10">
      
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-5 md:space-y-6">

        {/* Logo */}
        <Image
          src="https://cdn.lugc.link/ba71d94d-c3cf-44c7-9764-294540f5cc26/-/preview/108x76/-/format/auto/"
          alt="DPS International School"
          width={120}
          height={90}
          className="object-contain w-24 sm:w-28 md:w-[120px] h-auto"
        />

        {/* Divider */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl border-t border-gray-300"></div>

        {/* Text Content */}
        <div className="space-y-2 text-gray-700 text-xs sm:text-sm md:text-base font-medium px-2 sm:px-0">

          <p>
            ©2004-2023 <span className="font-semibold">DPS International School Pte. Ltd</span> All rights reserved.
          </p>

          <p>
            <span className="font-semibold">CPE Registration No:</span> 201109459N
          </p>

          <p>
            <span className="font-semibold">Registration Period:</span> 22 August 2024 to 21st August 2028
          </p>

        </div>

      </div>

    </footer>
  );
}
