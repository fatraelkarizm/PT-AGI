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
          <section className="relative w-full min-h-screen flex items-center bg-[#021231] overflow-hidden pt-24 pb-12 lg:py-0">
               {/* Background Decor */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CD1E1A] rounded-full opacity-5 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900 rounded-full opacity-10 blur-[150px] translate-y-1/2 -translate-x-1/4"></div>

               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
                         {/* Left Content */}
                         <motion.div
                              className="text-left flex flex-col justify-center h-full"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                         >
                              <motion.div variants={itemVariants} className="flex justify-start mb-6">
                                   <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/90 text-sm font-medium border border-white/10 backdrop-blur-sm shadow-inner">
                                        <Globe className="w-4 h-4 text-[#CD1E1A]" />
                                        Mitra Resmi Karier Internasional
                                   </span>
                              </motion.div>

                              <motion.h1
                                   variants={itemVariants}
                                   className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                              >
                                   Bangun Karier <br />
                                   <span className="text-white">Internasional</span> <br />
                                   <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CD1E1A] to-red-400">
                                        Secara Legal
                                   </span>
                              </motion.h1>

                              <motion.p
                                   variants={itemVariants}
                                   className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
                              >
                                   Karier profesional di Jerman, USA, Belgia, dan China. Persiapan terstruktur, legalitas terjamin, dan transparan.
                              </motion.p>

                              <motion.div
                                   variants={itemVariants}
                                   className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12"
                              >
                                   <motion.button
                                        whileHover={{ scale: 1.02, translateY: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-base shadow-xl shadow-red-900/20 hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                                   >
                                        Konsultasi Gratis
                                        <ArrowRight className="w-5 h-5" />
                                   </motion.button>
                                   <motion.button
                                        whileHover={{ scale: 1.02, translateY: -2, borderColor: "#ffffff" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center"
                                   >
                                        Lihat Program
                                   </motion.button>
                              </motion.div>

                              <motion.div
                                   variants={itemVariants}
                                   className="pt-8 border-t border-white/10 grid grid-cols-2 gap-y-4 gap-x-8"
                              >
                                   {[
                                        { label: "Legalitas Terjamin", icon: CheckCircle },
                                        { label: "Kurikulum Global", icon: CheckCircle },
                                        { label: "Dukungan Pembiayaan", icon: CheckCircle },
                                        { label: "Jaringan Luas", icon: CheckCircle },
                                   ].map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-gray-300">
                                             <feat.icon className="w-5 h-5 text-[#CD1E1A] flex-shrink-0" />
                                             <span className="text-sm font-medium">{feat.label}</span>
                                        </div>
                                   ))}
                              </motion.div>
                         </motion.div>

                         {/* Right Image Area */}
                         <div className="relative flex items-center justify-center lg:justify-end lg:h-screen max-h-[900px]">
                              {/* Red Circular Background */}
                              <motion.div
                                   initial={{ scale: 0, opacity: 0 }}
                                   animate={{ scale: 1, opacity: 1 }}
                                   transition={{ duration: 1.2, ease: "easeOut" }}
                                   className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#CD1E1A] rounded-full opacity-80 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                              ></motion.div>

                              <motion.div
                                   initial="hidden"
                                   animate="visible"
                                   variants={imageVariants}
                                   className="relative w-full max-w-[550px]"
                              >
                                   <Image
                                        src="/Model-AGI.png"
                                        alt="PT AGI Students"
                                        width={600}
                                        height={750}
                                        className="w-full h-auto object-contain drop-shadow-2xl z-10 relative"
                                        priority
                                   />

                                   {/* Floating Card 1 (Top Left) */}
                                   <motion.div
                                        variants={floatVariants}
                                        className="hidden md:flex absolute top-[15%] -left-8 bg-[#0a1a3f]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl items-center gap-4 z-20 max-w-[200px]"
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                   >
                                        <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
                                             <Briefcase size={20} />
                                        </div>
                                        <div>
                                             <p className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">Kerja</p>
                                             <p className="font-bold text-white text-sm leading-tight">Legal & Aman</p>
                                        </div>
                                   </motion.div>

                                   {/* Floating Card 2 (Bottom Right) */}
                                   <motion.div
                                        variants={floatVariants}
                                        className="hidden md:flex absolute bottom-[20%] -right-4 bg-[#0a1a3f]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl items-center gap-4 z-20 max-w-[220px]"
                                        animate={{ y: [0, 8, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                   >
                                        <div className="p-2.5 bg-[#CD1E1A]/20 rounded-xl text-[#ff5c58]">
                                             <GraduationCap size={20} />
                                        </div>
                                        <div>
                                             <p className="text-[10px] text-red-200 uppercase tracking-wider font-semibold">Vokasi</p>
                                             <p className="font-bold text-white text-sm leading-tight">Standar Jerman</p>
                                        </div>
                                   </motion.div>
                              </motion.div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
