"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CollageItem {
     id: number;
     image: StaticImageData | string;
     label: string;
     rotation?: number;
     position?: { top?: string; left?: string; right?: string; bottom?: string };
}

interface PartnerCollageProps {
     title: string;
     items: CollageItem[];
     subtitle?: string;
     maxColumns?: number;
}

export default function PartnerCollage({ title, items, subtitle, maxColumns = 3 }: PartnerCollageProps) {
     // Calculate container max-width to enforce wrapping based on maxColumns
     // Assuming item width ~180px (w-44 or w-48) + gap-6 (24px)
     // w-48 is 12rem = 192px.
     // 192 + 24 = 216px per item.
     // maxColumns * 216 roughly.
     // Tailwind classes prefer hardcoded max-w generally, but inline style works for dynamic.

     return (
          <div className="relative w-full py-16 overflow-hidden">
               {/* Background Texture */}
               <div className="absolute inset-0 bg-[#f9f9f9] opacity-100">
                    <div className="absolute inset-0" style={{
                         backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
                         backgroundSize: "24px 24px"
                    }}></div>
               </div>

               <div className="container mx-auto px-4 relative z-10 w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                         {/* Left Side: Photo Grid (Flexbox) */}
                         <div className="flex items-center justify-center min-h-[500px] w-full">
                              <div
                                   className="flex flex-wrap justify-center gap-6"
                                   style={{ maxWidth: `${maxColumns * 230}px` }} // Dynamic width constraint
                              >
                                   {items.map((item, idx) => (
                                        <motion.div
                                             key={item.id}
                                             initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                             whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                             transition={{ duration: 0.5, delay: idx * 0.1 }}
                                             whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                             className="relative bg-white p-3 shadow-lg border border-gray-100 w-48 h-auto flex flex-col"
                                        >
                                             {/* Tape Effect - Straight */}
                                             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/90 shadow-sm z-20"></div>

                                             <div className="w-full aspect-4/3 relative bg-gray-50 overflow-hidden mb-3 border border-gray-100">
                                                  <Image
                                                       src={item.image}
                                                       alt={item.label}
                                                       fill
                                                       className="object-contain p-2"
                                                       sizes="(max-width: 768px) 100vw, 200px"
                                                  />
                                             </div>
                                             <div className="mt-auto border-t border-gray-100 pt-2">
                                                  <p className="text-center font-bold text-[#021231] text-xs uppercase tracking-wide leading-tight">
                                                       {item.label}
                                                  </p>
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>

                         {/* Right Side: Notebook Content */}
                         <motion.div
                              initial={{ x: 50, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.6 }}
                              className="relative"
                         >
                              <div className="relative bg-white p-8 md:p-10 shadow-2xl rounded-2xl border border-gray-100 max-w-md mx-auto transform rotate-1">

                                   {/* Paper Clip Visual */}
                                   <div className="absolute -top-4 left-8 w-4 h-12 border-4 border-gray-300 rounded-full z-10 bg-white"></div>

                                   <div className="space-y-6">
                                        <div>
                                             <h3 className="text-4xl lg:text-5xl font-black text-[#021231] tracking-tighter mb-2">
                                                  MITRA
                                             </h3>
                                             <div className="bg-[#FFDD00] inline-block px-4 py-1 transform -rotate-1 shadow-sm">
                                                  <p className="font-bold text-[#021231] text-lg">
                                                       {title}
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="space-y-4 font-mono text-gray-600">
                                             {items.map((item, idx) => (
                                                  <div key={idx} className="flex items-center gap-3 border-b border-dashed border-gray-100 pb-2 last:border-0 last:pb-0">
                                                       <span className="text-xl font-bold text-gray-400 font-mono">0{idx + 1}.</span>
                                                       <p className="text-base font-medium text-gray-800">{item.label}</p>
                                                  </div>
                                             ))}
                                        </div>

                                        <div className="pt-6 border-t-2 border-gray-100">
                                             <p className="text-sm text-gray-500 italic leading-relaxed">
                                                  {subtitle || `"Membangun jembatan pendidikan vokasi Indonesia - Jerman melalui kolaborasi nyata."`}
                                             </p>
                                        </div>
                                   </div>

                                   {/* Texture Overlay */}
                                   <div className="absolute inset-0 bg-[#fffdf5] opacity-20 mix-blend-multiply pointer-events-none rounded-2xl"></div>
                              </div>
                         </motion.div>

                    </div>
               </div>
          </div>
     );
}
