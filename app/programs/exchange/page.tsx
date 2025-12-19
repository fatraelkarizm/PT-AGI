"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign } from "lucide-react";

export default function CulturalExchangePage() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-4xl mx-auto"
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
                                   src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                                   alt="Cultural Exchange"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Tentang Program</h2>
                              <p className="mb-6">
                                   Program ini memberikan kesempatan bagi pemuda-pemudi Indonesia untuk tinggal bersama keluarga lokal di luar negeri (Au Pair) atau bekerja paruh waktu saat liburan musim panas (Summer Work).
                                   Tujuannya adalah pertukaran budaya, peningkatan kemampuan bahasa asing, dan kemandirian.
                              </p>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Yang Akan Anda Dapatkan</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Pengalaman Hidup di Luar Negeri",
                                        "Kamar Pribadi & Makan Ditanggung",
                                        "Uang Saku Bulanan",
                                        "Kesempatan Traveling",
                                        "Kursus Bahasa Lokal Gratis/Diskon",
                                        "Sertifikat Program Internasional"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                             <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
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
               </div>
          </main>
     );
}
