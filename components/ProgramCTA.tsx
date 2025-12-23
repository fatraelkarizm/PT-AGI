import Link from "next/link";
import React from "react";

interface ProgramCTAProps {
     title: string;
     description: string;
     buttonText: string;
     href: string;
}

export default function ProgramCTA({ title, description, buttonText, href }: ProgramCTAProps) {
     return (
          <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
               <h2 className="text-2xl font-bold mb-4">{title}</h2>
               <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    {description}
               </p>
               <Link
                    href={href}
                    target="_blank"
                    className="inline-block px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105 hover:bg-red-700"
                    aria-description={buttonText}
               >
                    {buttonText}
               </Link>
          </div>
     );
}
