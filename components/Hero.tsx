"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, CheckCircle, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Hero() {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
               },
          },
     };

     const itemVariants: Variants = {
          hidden: { opacity: 0, y: 30 },
          visible: {
               opacity: 1,
               y: 0,
               transition: { duration: 0.8, ease: "easeOut" }
          },
     };

     const imageVariants: Variants = {
          hidden: { opacity: 0, scale: 0.9, rotate: -5 },
          visible: {
               opacity: 1,
               scale: 1,
               rotate: 0,
               transition: { duration: 1, ease: "easeOut", delay: 0.5 }
          }
     };

     const floatVariants: Variants = {
          hidden: { opacity: 0, scale: 0.8, x: -20 },
          visible: {
               opacity: 1,
               scale: 1,
               x: 0,
               transition: { duration: 0.5, delay: 1 }
          }
     };

     return (
          <section className="relative w-full min-h-screen flex items-center bg-[#ffffff] overflow-hidden py-8  lg:pt-8 lg:pb-0">
               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full sm:pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto max-w-7xl h-auto lg:h-[85vh] items-stretch">

                         {/* Left Main Card - Dark Blue (Brand) */}
                         <motion.div
                              className="lg:col-span-7 bg-[#021231] rounded-[2.5rem] p-8 md:py-12 relative overflow-hidden flex flex-col justify-center min-h-[500px] lg:min-h-0"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                         >
                              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CD1E1A] rounded-full opacity-10 blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

                              <motion.div variants={itemVariants} className="relative z-10 mb-8">
                                   <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10 backdrop-blur-sm shadow-xl">
                                        <Globe className="w-4 h-4 text-[#CD1E1A]" />
                                        Mitra Resmi Karier Internasional
                                   </span>
                              </motion.div>

                              <motion.h1
                                   variants={itemVariants}
                                   className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
                              >
                                   Bangun Karier <br />
                                   Internasional <br />
                                   <span className="text-[#CD1E1A]">Secara Legal</span>
                              </motion.h1>

                              <motion.p
                                   variants={itemVariants}
                                   className="relative z-10 text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
                              >
                                   Karier profesional di Jerman, USA, Belgia, dan China. Persiapan terstruktur, legalitas terjamin, dan transparan.
                              </motion.p>

                              <motion.div
                                   variants={itemVariants}
                                   className="relative z-10 flex flex-col sm:flex-row items-center justify-start gap-4"
                              >
                                   <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-10 py-5 bg-[#CD1E1A] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                   >
                                        Konsultasi Gratis
                                        <ArrowRight className="w-5 h-5" />
                                   </motion.button>
                                   <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => document.getElementById('programs-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
                                   >
                                        Lihat Program
                                   </motion.button>
                              </motion.div>
                         </motion.div>

                         {/* Right Card - Red Folder Image */}
                         <motion.div
                              className="lg:col-span-5 row-span-2 relative h-[500px] lg:h-full"
                              initial="hidden"
                              animate="visible"
                              variants={imageVariants}
                         >
                              <div className="relative w-full h-full">

                                   {/* Main Background Card */}
                                   <div className="absolute inset-0 bg-[#CD1E1A] rounded-[2.5rem] shadow-2xl overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-black/10"></div>

                                        {/* Floating Bubbles INSIDE the red card now */}
                                        <div className="absolute top-[25%] right-6 z-20 flex flex-col items-end gap-3">
                                             {[
                                                  { text: "1000+ Alumni Sukses", icon: CheckCircle, color: "bg-blue-50 text-blue-600" },
                                                  { text: "Mitra Resmi Pemerintah", icon: Globe, color: "bg-green-50 text-green-600" },
                                                  { text: "Bimbingan Intensif", icon: GraduationCap, color: "bg-orange-50 text-orange-600" }
                                             ].map((item, idx) => (
                                                  <motion.div
                                                       key={idx}
                                                       initial={{ x: 50, opacity: 0 }}
                                                       animate={{ x: 0, opacity: 1 }}
                                                       transition={{ delay: 0.8 + (idx * 0.2), duration: 0.5 }}
                                                       className={`px-4 py-2.5 rounded-2xl shadow-lg border-2 border-white ${item.color} font-bold text-xs md:text-sm flex items-center gap-2 transform hover:scale-105 transition-transform cursor-default`}
                                                  >
                                                       <item.icon className="w-4 h-4" /> {item.text}
                                                  </motion.div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Image - Adjusted Size */}
                                   <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-[2.5rem] pt-24">
                                        <Image
                                             src="/AGI-Model.png"
                                             alt="PT AGI Students"
                                             width={600}
                                             height={800}
                                             className="w-[45%] md:w-[50%] sm:w-[45%] lg:w-full h-auto object-cover translate-y-8 hover:scale-105 transition-transform duration-700"
                                             priority
                                        />
                                   </div>
                              </div>
                         </motion.div>

                         {/* Bottom Left Grid - Stats/Info */}
                         <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                              {/* Card 1: Flags */}
                              <motion.div
                                   className="bg-gray-50 rounded-[2.5rem] p-6 flex items-center justify-between border border-gray-100 min-h-[120px]"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.6 }}
                              >
                                   <p className="text-gray-500 text-lg font-bold whitespace-nowrap mr-4">Negara Tujuan</p>
                                   <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
                                        {[
                                             { code: "us", name: "USA" },
                                             { code: "be", name: "Belgium" },
                                             { code: "cn", name: "China" },
                                             { code: "de", name: "Germany" },
                                        ].map((flag) => (
                                             <div key={flag.code} className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer">
                                                  <Image
                                                       src={`https://flagcdn.com/w80/${flag.code}.png`}
                                                       alt={flag.name}
                                                       fill
                                                       className="object-cover"
                                                  />
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>

                              {/* Card 2: Stats */}
                              <motion.div
                                   className="bg-gray-50 rounded-[2.5rem] p-6 border border-gray-100 min-h-[120px] flex items-center"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.7 }}
                              >
                                   <div className="w-full grid grid-cols-3 gap-4 divide-x divide-gray-200">
                                        <div className="flex flex-col xl:flex-row items-center justify-center gap-3 text-center xl:text-left px-2">
                                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                                  <CheckCircle className="w-5 h-5" />
                                             </div>
                                             <div>
                                                  <p className="text-lg xl:text-xl font-bold text-gray-900">100%</p>
                                                  <p className="text-[10px] xl:text-xs text-gray-500 font-medium leading-tight">Legalitas</p>
                                             </div>
                                        </div>
                                        <div className="flex flex-col xl:flex-row items-center justify-center gap-3 text-center xl:text-left px-2">
                                             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                                  <GraduationCap className="w-5 h-5" />
                                             </div>
                                             <div>
                                                  <p className="text-lg xl:text-xl font-bold text-gray-900">1000+</p>
                                                  <p className="text-[10px] xl:text-xs text-gray-500 font-medium leading-tight">Alumni</p>
                                             </div>
                                        </div>
                                        <div className="flex flex-col xl:flex-row items-center justify-center gap-3 text-center xl:text-left px-2">
                                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                  <Globe className="w-5 h-5" />
                                             </div>
                                             <div>
                                                  <p className="text-lg xl:text-xl font-bold text-gray-900">Resmi</p>
                                                  <p className="text-[10px] xl:text-xs text-gray-500 font-medium leading-tight">Pemerintah</p>
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>

                    </div>
               </div>
          </section>
     );
}
