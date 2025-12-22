"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign, Wallet } from "lucide-react";

export default function CulturalExchangePage() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
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
                                   src="/Cultural-Exchange.jpg"
                                   alt="Cultural Exchange"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi</h3>
                                   <p className="text-gray-600">3 - 12 Bulan</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Destinasi</h3>
                                   <p className="text-gray-600">USA, Belgia, China</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-[#CD1E1A] mb-4" />
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

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <div className="mb-16">
                                   <h2 className="text-2xl font-bold text-[#021231] mb-8">How Culture Exchange Works</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {[
                                             {
                                                  step: "01",
                                                  title: "Pre-Departure Preparation",
                                                  desc: "Persiapan bahasa dan pemahaman budaya sebelum keberangkatan."
                                             },
                                             {
                                                  step: "02",
                                                  title: "Host Family Living",
                                                  desc: "Peserta tinggal bersama host family untuk interaksi budaya secara langsung."
                                             },
                                             {
                                                  step: "03",
                                                  title: "Cultural Immersion",
                                                  desc: "Pengalaman hidup sehari-hari dalam lingkungan internasional untuk meningkatkan kemampuan bahasa dan adaptasi."
                                             },
                                             {
                                                  step: "04",
                                                  title: "Global Experience",
                                                  desc: "Peserta memperoleh pengalaman lintas budaya dan wawasan global."
                                             }
                                        ].map((item, i) => (
                                             <div key={i} className="relative group">
                                                  <div className="text-4xl font-bold text-gray-100 mb-4 group-hover:text-purple-50 transition-colors">
                                                       {item.step}
                                                  </div>
                                                  <h3 className="text-lg font-bold text-[#021231] mb-2">{item.title}</h3>
                                                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow-sm relative overflow-hidden">
                                   <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8" />
                                   <h2 className="text-2xl font-bold text-[#021231] mb-4 relative z-10">Program Overview</h2>
                                   <div className="relative z-10">
                                        <h3 className="text-xl font-semibold text-purple-700 mb-3">Culture Exchange Program</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                             Program pertukaran budaya internasional yang memberikan pengalaman tinggal di luar negeri untuk pengembangan bahasa, budaya, dan perspektif global.
                                        </p>
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
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Jelajahi Dunia Sekarang</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Pengalaman sekali seumur hidup menantimu. Dari kebun tulip di Eropa hingga gedung pencakar langit Amerika.
                              </p>
                              <button className="px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105">
                                   Daftar Seleksi Sekarang
                              </button>
                         </div>
                    </motion.div>
               </div >
          </main >
     );
}
