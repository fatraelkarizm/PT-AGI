"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, MapPin, DollarSign, Wallet, BookOpen, Home, Globe, UserCheck } from "lucide-react";
import { CulturalExchange } from "@/assets";

export default function CulturalExchangePage() {
     const steps = [
          {
               title: "Pre-Departure Preparation",
               desc: "Persiapan bahasa dan pemahaman budaya sebelum keberangkatan.",
               icon: BookOpen
          },
          {
               title: "Host Family Living",
               desc: "Peserta tinggal bersama host family untuk interaksi budaya secara langsung.",
               icon: Home
          },
          {
               title: "Cultural Immersion",
               desc: "Pengalaman hidup sehari-hari dalam lingkungan internasional untuk meningkatkan kemampuan bahasa dan adaptasi.",
               icon: Globe
          },
          {
               title: "Global Experience",
               desc: "Peserta memperoleh pengalaman lintas budaya dan wawasan global.",
               icon: UserCheck
          }
     ];

     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-5xl mx-auto"
                    >
                         <div className="mb-8">
                              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                                   Pertukaran Budaya
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Culture Exchange (Au Pair & Summer Work)
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Jelajahi dunia sambil belajar. Program pertukaran budaya untuk memperluas wawasan dan jaringan internasional di USA, Belgia, atau China.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                              <Image
                                   src={CulturalExchange}
                                   alt="Cultural Exchange"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi</h3>
                                   <p className="text-gray-600">3 - 12 Bulan</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Destinasi</h3>
                                   <p className="text-gray-600">USA, Belgia, China</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Uang Saku</h3>
                                   <p className="text-gray-600">Disediakan Host Family</p>
                              </div>
                         </div>

                         <div className="mb-12 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center">
                              <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                                   <Wallet className="w-8 h-8 text-yellow-600" />
                              </div>
                              <div className="flex-1">
                                   <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-[#021231]">
                                             Dukungan Finansial Tersedia
                                        </h3>
                                        <span className="bg-[#CD1E1A] text-white text-sm font-black px-4 py-1.5 rounded-full shadow-lg transform -rotate-2">
                                             COVER 70%
                                        </span>
                                   </div>
                                   <p className="text-gray-700 leading-relaxed">
                                        Untuk program tertentu (visa & tiket), kami menyediakan fasilitas <strong>Dana Talangan</strong>. Konsultasikan kelayakan Anda dengan tim kami untuk mendapatkan dukungan hingga <strong>70%</strong>.
                                   </p>
                              </div>
                         </div>

                         {/* How It Works - Static Grid */}
                         <div className="mb-20">
                              <div className="text-center mb-10">
                                   <h2 className="text-3xl font-bold text-[#021231] mb-4">How Culture Exchange Works</h2>
                                   <p className="text-gray-600 max-w-2xl mx-auto">
                                        Ikuti langkah mudah ini untuk memulai perjalanan lintas budaya Anda.
                                   </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                   {steps.map((step, index) => (
                                        <div key={index} className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                                             <div className="flex justify-between items-start mb-4">
                                                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                       <step.icon className="w-6 h-6" />
                                                  </div>
                                                  <span className="text-4xl font-bold text-gray-200 group-hover:text-blue-50 transition-colors">
                                                       0{index + 1}
                                                  </span>
                                             </div>
                                             <h3 className="text-lg font-bold text-[#021231] mb-3 group-hover:text-blue-600 transition-colors">
                                                  {step.title}
                                             </h3>
                                             <p className="text-sm text-gray-600 leading-relaxed">
                                                  {step.desc}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         <h2 className="text-2xl font-bold text-[#021231] mb-4">Yang Akan Anda Dapatkan</h2>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                              {[
                                   "Pengalaman Hidup di Luar Negeri",
                                   "Fasilitas Dana Talangan / Bantuan Bergulir hingga 70%",
                                   "Kamar Pribadi & Makan Ditanggung",
                                   "Uang Saku Bulanan",
                                   "Kesempatan Traveling",
                                   "Kursus Bahasa Lokal Gratis/Diskon",
                                   "Sertifikat Program Internasional"
                              ].map((item, i) => (
                                   <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-gray-900 font-medium">{item}</span>
                                   </li>
                              ))}
                         </ul>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Jelajahi Dunia Sekarang</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Pengalaman sekali seumur hidup menantimu. Dari kebun tulip di Eropa hingga gedung pencakar langit Amerika.
                              </p>
                              <Link
                                   href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20Exchange"
                                   target="_blank"
                                   className="inline-block px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105"
                              >
                                   Daftar Seleksi Sekarang
                              </Link>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
