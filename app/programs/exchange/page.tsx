"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign, BookOpen, Home, Globe, UserCheck } from "lucide-react";
import ProgramCTA from "@/components/ProgramCTA";
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
               <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-5xl mx-auto"
                    >
                         <div className="mb-8">
                              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
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

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                   <Clock className="w-8 h-8 text-purple-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi</h3>
                                   <p className="text-gray-600">3 - 12 Bulan</p>
                              </div>
                              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                   <MapPin className="w-8 h-8 text-purple-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Destinasi</h3>
                                   <p className="text-gray-600">USA, Belgia, China</p>
                              </div>
                              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                   <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Uang Saku</h3>
                                   <p className="text-gray-600">Disediakan Host Family</p>
                              </div>
                         </div>

                         <div className="max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Keuntungan Program</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-12">
                                   {[
                                        "Uang saku bulanan dari Host Family",
                                        "Akomodasi (kamar pribadi) & konsumsi gratis",
                                        "Asuransi kesehatan & kecelakaan selama program",
                                        "Kesempatan kursus bahasa di negara tujuan",
                                        "Libur 2 minggu dengan tetap mendapat uang saku",
                                        "Tiket penerbangan (untuk beberapa negara tertentu)"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                             <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Tentang Program</h2>
                              <p className="mb-6">
                                   Program ini memberikan kesempatan bagi pemuda-pemudi Indonesia untuk tinggal bersama keluarga lokal di luar negeri (Au Pair) atau bekerja paruh waktu saat liburan musim panas (Summer Work).
                                   Tujuannya adalah pertukaran budaya, peningkatan kemampuan bahasa asing, dan kemandirian.
                              </p>

                              <div className="mb-20">
                                   <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold text-[#021231] mb-4">How Culture Exchange Works</h2>
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                             Ikuti langkah mudah ini untuk memulai perjalanan lintas budaya Anda.
                                        </p>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {steps.map((step, index) => (
                                             <div key={index} className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-purple-100 hover:shadow-lg transition-all duration-300 group">
                                                  <div className="flex justify-between items-start mb-4">
                                                       <div className="p-3 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                                            <step.icon className="w-6 h-6" />
                                                       </div>
                                                       <span className="text-4xl font-bold text-gray-200 group-hover:text-purple-100 transition-colors">
                                                            0{index + 1}
                                                       </span>
                                                  </div>
                                                  <h3 className="text-lg font-bold text-[#021231] mb-3 group-hover:text-purple-600 transition-colors">
                                                       {step.title}
                                                  </h3>
                                                  <p className="text-sm text-gray-600 leading-relaxed">
                                                       {step.desc}
                                                  </p>
                                             </div>
                                        ))}
                                   </div>

                                   <ProgramCTA
                                        title="Jelajahi Dunia Sekarang"
                                        description="Pengalaman sekali seumur hidup menantimu. Dari kebun tulip di Eropa hingga gedung pencakar langit Amerika."
                                        buttonText="Daftar Seleksi Sekarang"
                                        href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20Exchange"
                                   />
                              </div>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
