import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CollageItem {
     id: number;
     image: StaticImageData | string;
     label: string;
     rotation: number;
     position: { top?: string; left?: string; right?: string; bottom?: string };
}

interface PartnerCollageProps {
     title: string;
     items: CollageItem[];
     subtitle?: string;
}

export default function PartnerCollage({ title, items, subtitle }: PartnerCollageProps) {
     return (
          <div className="relative w-full py-16 overflow-hidden">
               {/* Background Texture - Grid Paper Pattern */}
               <div className="absolute inset-0 bg-[#f9f9f9] opacity-100">
                    <div className="absolute inset-0" style={{
                         backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
                         backgroundSize: "24px 24px"
                    }}></div>
               </div>

               <div className="container mx-auto px-4 relative z-10 w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                         {/* Left Side: Photo Collage */}
                         <div className="relative h-[500px] w-full flex items-center justify-center">

                              {items.map((item, idx) => (
                                   <motion.div
                                        key={item.id}
                                        initial={{ rotate: item.rotation, opacity: 0, y: 50 }}
                                        whileInView={{ rotate: item.rotation, opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                                        className="absolute bg-white p-3 shadow-xl z-10 border border-gray-200"
                                        style={{
                                             top: item.position.top,
                                             left: item.position.left,
                                             right: item.position.right,
                                             bottom: item.position.bottom,
                                             transform: `rotate(${item.rotation}deg)`,
                                             width: '14rem' // Fixed width for consistency
                                        }}
                                   >
                                        {/* Tape Effect */}
                                        <div className={`absolute -top-3 ${idx % 2 === 0 ? 'left-1/2 -translate-x-1/2' : 'right-8'} w-24 h-8 bg-yellow-100/80 ${idx % 2 === 0 ? 'rotate-2' : '-rotate-1'} shadow-sm pointer-events-none`}></div>

                                        <div className="w-full h-40 relative bg-gray-100 overflow-hidden mb-3">
                                             <Image src={item.image} alt={item.label} fill className="object-cover" />
                                        </div>
                                        <p className="text-center font-serif italic text-sm font-bold text-[#021231] uppercase tracking-wide py-2">
                                             {item.label}
                                        </p>
                                   </motion.div>
                              ))}

                              {/* Decorative clips/elements */}
                              <div className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none z-0">
                                   {/* Could add faint doodles here if needed */}
                              </div>

                         </div>

                         {/* Right Side: Notebook Content */}
                         <motion.div
                              initial={{ x: 50, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.6 }}
                              className="relative"
                         >
                              <div className="relative bg-white p-8 md:p-10 shadow-2xl rotated-paper transform rotate-1 border border-gray-100 max-w-md mx-auto">

                                   {/* Paper Clip Visual (CSS) */}
                                   <div className="absolute -top-4 left-8 w-4 h-12 border-4 border-gray-400 rounded-full z-10" style={{ borderRadius: '10px' }}></div>
                                   <div className="absolute -top-4 left-8 w-4 h-8 bg-white z-10"></div> {/* Masking for clip */}

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
                                                  <div key={idx} className="flex items-center gap-3">
                                                       <span className="text-2xl">{idx + 1}.</span>
                                                       <p className="text-lg">{item.label}</p>
                                                  </div>
                                             ))}
                                        </div>

                                        <div className="pt-4 border-t border-dashed border-gray-300">
                                             <p className="text-sm text-gray-500 italic">
                                                  {subtitle || `"Membangun jembatan pendidikan vokasi Indonesia - Jerman melalui kolaborasi nyata."`}
                                             </p>
                                        </div>
                                   </div>

                                   {/* Paper Texture Overlay */}
                                   <div className="absolute inset-0 bg-transparent mix-blend-multiply opacity-5 pointer-events-none"
                                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/notebook.png")' }}>
                                   </div>
                              </div>
                         </motion.div>

                    </div>
               </div>
          </div>
     );
}
