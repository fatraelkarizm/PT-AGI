"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, CheckCircle, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AGIModel } from "@/assets";

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
          <section id="home" className="relative w-full min-h-screen flex items-center bg-[#ffffff] overflow-hidden pt-8 pb-12 lg:pt-8 lg:pb-0">
               <div className="container mx-auto px-4 md:px-6 pt-8 lg:pt-0 relative z-10 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[1fr_auto] gap-4 mx-auto max-w-7xl h-auto lg:h-[80vh] items-stretch">

                         {/* Left Main Card - Dark Blue (Brand) */}
                         <motion.div
                              className="lg:col-span-7 lg:row-start-1 bg-[#021231] rounded-4xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-center min-h-[450px] lg:min-h-0"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                         >
                              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CD1E1A] rounded-full opacity-10 blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

                              <motion.div variants={itemVariants} className="relative z-10 mb-6">
                                   <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm md:text-base font-medium border border-white/10 backdrop-blur-sm shadow-xl">
                                        <Globe className="w-4 h-4 text-[#CD1E1A]" />
                                        Part of PT YAIJ Group
                                   </span>
                              </motion.div>

                              <motion.h1
                                   variants={itemVariants}
                                   className="relative z-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                              >
                                   Bangun Karier <br />
                                   Internasional <br />
                                   <span className="text-[#CD1E1A]">Secara Legal</span>
                              </motion.h1>

                              <motion.p
                                   variants={itemVariants}
                                   className="relative z-10 text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
                              >
                                   Karier profesional di Jerman, USA, Belgia, dan China. Persiapan terstruktur, legalitas terjamin, dan transparan.
                              </motion.p>

                              <motion.div
                                   variants={itemVariants}
                                   className="relative z-10 flex flex-col sm:flex-row items-center justify-start gap-4"
                              >
                                   <Link href="https://wa.me/6285129791635?text=Halo%20Admin%20PT%20AGI,%20saya%20ingin%20konsultasi" target="_blank" className="w-full sm:w-auto">
                                        <motion.button
                                             whileHover={{ scale: 1.02 }}
                                             whileTap={{ scale: 0.98 }}
                                             className="w-full px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                             Konsultasi Gratis
                                             <ArrowRight className="w-5 h-5" />
                                        </motion.button>
                                   </Link>
                                   <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => document.getElementById('programs-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
                                   >
                                        Lihat Program
                                   </motion.button>
                              </motion.div>
                         </motion.div>

                         {/* Right Card - Modern Profile Card */}
                         <motion.div
                              className="lg:col-span-5 lg:row-start-1 lg:row-end-3 relative h-[500px] lg:h-full w-full"
                              initial="hidden"
                              animate="visible"
                              variants={imageVariants}
                         >
                              <div className="relative w-full h-full">

                                   {/* Main Background Card with Red Gradient */}
                                   <div className="absolute inset-0 bg-linear-to-br from-[#CD1E1A] via-[#a01815] to-[#CD1E1A] rounded-4xl shadow-2xl overflow-hidden">
                                        {/* Dotted Pattern Overlay */}
                                        <div className="absolute inset-0 opacity-20">
                                             <svg width="100%" height="100%">
                                                  <defs>
                                                       <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                                            <circle cx="2" cy="2" r="1.5" fill="white" />
                                                       </pattern>
                                                  </defs>
                                                  <rect width="100%" height="100%" fill="url(#dots)" />
                                             </svg>
                                        </div>

                                        {/* Accent Circles */}
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
                                        <div className="absolute bottom-20 -left-10 w-32 h-32 bg-black rounded-full opacity-10 blur-2xl"></div>

                                        {/* Floating Stats Cards - Arc Pattern Above Head */}
                                        <div className="absolute inset-0 z-20">
                                             {[
                                                  {
                                                       text: "1000+ Profesional",
                                                       value: "1000+",
                                                       label: "Alumni",
                                                       icon: CheckCircle,
                                                       position: "top-[15%] right-[15%] sm:top-[15%] sm:right-[17%] md:top-[15%] md:right-[22%] lg:top-[10%] lg:right-[1%] xl:right-[11%]"
                                                  },
                                                  {
                                                       text: "Legalitas Terjamin",
                                                       value: "100%",
                                                       label: "Legal",
                                                       icon: Globe,
                                                       position: "top-[4%] left-1/2 -translate-x-1/2"
                                                  },
                                                  {
                                                       text: "4 Negara Tujuan",
                                                       value: "4+",
                                                       label: "Negara",
                                                       icon: GraduationCap,
                                                       position: "top-[15%] left-[15%] sm:top-[15%] sm:left-[17%] md:top-[15%] md:left-[22%] lg:top-[10%] lg:left-[2%] xl:left-[12%]"
                                                  }
                                             ].map((item, idx) => (
                                                  <motion.div
                                                       key={idx}
                                                       initial={{ y: -30, opacity: 0, scale: 0.8 }}
                                                       animate={{ y: 0, opacity: 1, scale: 1 }}
                                                       transition={{
                                                            delay: 0.8 + (idx * 0.15),
                                                            duration: 0.6,
                                                            type: "spring",
                                                            stiffness: 100
                                                       }}
                                                       className={`absolute ${item.position} bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/20 hover:scale-105 hover:-translate-y-1 transition-all cursor-default group`}
                                                  >
                                                       <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#CD1E1A] to-[#a01815] flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                 <item.icon className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div>
                                                                 <p className="text-[#021231] font-bold text-base leading-none">{item.value}</p>
                                                                 <p className="text-gray-500 text-xs font-medium mt-1">{item.label}</p>
                                                            </div>
                                                       </div>
                                                  </motion.div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Image - Adjusted Size */}
                                   <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-4xl pt-12">
                                        <Image
                                             src={AGIModel}
                                             alt="PT AGI Students"
                                             width={600}
                                             height={800}
                                             className="w-[90%] h-auto max-h-[90%] object-contain translate-y-4 hover:scale-105 transition-transform duration-700"
                                             priority
                                        />
                                   </div>
                              </div>
                         </motion.div>

                         {/* Bottom Left Grid - Stats/Info */}
                         <div className="lg:col-span-7 lg:row-start-2 grid grid-cols-1 gap-3 h-fit">
                              {/* Card 1: Flags */}
                              <motion.div
                                   className="bg-gray-50 rounded-4xl p-5 flex items-center justify-between border border-gray-100 min-h-[100px]"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.6 }}
                              >
                                   <p className="text-gray-500 text-lg font-bold whitespace-nowrap mr-4">Negara Tujuan</p>
                                   <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
                                        {[
                                             { code: "us", name: "USA" },
                                             { code: "be", name: "Belgium" },
                                             { code: "cn", name: "China" },
                                             { code: "de", name: "Germany" },
                                        ].map((flag) => (
                                             <div key={flag.code} className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer">
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
                                   className="bg-gray-50 rounded-4xl p-5 border border-gray-100 min-h-[100px] flex items-center"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.7 }}
                              >
                                   <div className="w-full grid grid-cols-3 gap-2 divide-x divide-gray-200">
                                        <div className="flex flex-col xl:flex-row items-center justify-center gap-2 text-center xl:text-left px-1">
                                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                                  <CheckCircle className="w-5 h-5" />
                                             </div>
                                             <div>
                                                  <p className="text-lg xl:text-2xl font-bold text-gray-900">100%</p>
                                                  <p className="text-xs text-gray-500 font-medium leading-tight">Legalitas</p>
                                             </div>
                                        </div>
                                        <div className="flex flex-col xl:flex-row items-center justify-center gap-2 text-center xl:text-left px-1">
                                             <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                                  <GraduationCap className="w-5 h-5" />
                                             </div>
                                             <div>
                                                  <p className="text-lg xl:text-2xl font-bold text-gray-900">1000+</p>
                                                  <p className="text-xs text-gray-500 font-medium leading-tight">Alumni</p>
                                             </div>
                                        </div>
                                        <div className="flex flex-col xl:flex-row items-center justify-center gap-2 text-center xl:text-left px-1">
                                             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                  <Globe className="w-5 h-5" />
                                             </div>
                                             <div>
                                                  <p className="text-lg xl:text-2xl font-bold text-gray-900">Resmi</p>
                                                  <p className="text-xs text-gray-500 font-medium leading-tight">Pemerintah</p>
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
