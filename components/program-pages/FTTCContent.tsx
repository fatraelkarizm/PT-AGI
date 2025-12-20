"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, MapPin, DollarSign, Calendar } from "lucide-react";

export default function FTTCContent() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-4xl mx-auto"
                    >
                         <div className="mb-8">
                              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-[#CD1E1A] font-medium text-sm mb-4">
                                   Program Unggulan
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Fast Track to Career (FTTC)
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Jalur percepatan karier internasional Anda. Persiapkan bahasa, budaya, dan kompetensi teknis hanya dalam 6-12 bulan untuk siap bekerja di Jerman.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                              <Image
                                   src="/Nurse.jpg"
                                   alt="FTTC Students"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi Program</h3>
                                   <p className="text-gray-600">6 - 9 Bulan Intensif</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Lokasi Tujuan</h3>
                                   <p className="text-gray-600">Jerman</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Potensi Gaji</h3>
                                   <p className="text-gray-600">€2000 - €3500 / Bulan</p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Tentang Program</h2>
                              <p className="mb-4">
                                   Program FTTC dirancang khusus untuk percepatan karier tenaga kesehatan Indonesia menuju pasar kerja Jerman.
                              </p>
                              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                   <p className="font-bold text-blue-900 mb-2">Kriteria Khusus:</p>
                                   <p className="text-blue-800">
                                        • Mahasiswi STIKES / Keperawatan Aktif<br />
                                        • Jenjang D3: Tingkat 2 & 3<br />
                                        • Jenjang S1: Tingkat 3 & 4
                                   </p>
                              </div>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Benefit Bergabung</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Pelatihan Bahasa Jerman Intensif (A1-B2)",
                                        "Pengurusan Visa & Dokumen Legal",
                                        "Penempatan Kerja Terjamin",
                                        "Akomodasi & Tempat Tinggal di Jerman",
                                        "Mentoring Budaya & Adaptasi",
                                        "Sertifikat Kompetensi Internasional"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                             <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Siap Memulai Karier Globalmu?</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Jangan lewatkan kesempatan emas ini. Kuota terbatas untuk batch mendatang. Konsultasikan profilmu sekarang secara gratis.
                              </p>
                              <button className="px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105">
                                   Daftar Konsultasi Sekarang
                              </button>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
