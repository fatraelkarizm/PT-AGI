"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock, MapPin, DollarSign, Calendar, Wallet } from "lucide-react";

export default function FTTCContent() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-5xl mx-auto"
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

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi Program</h3>
                                   <p className="text-gray-600">6 - 9 Bulan Intensif</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Lokasi Tujuan</h3>
                                   <p className="text-gray-600">Jerman (Berlin, Munich, Hamburg)</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Potensi Gaji</h3>
                                   <p className="text-gray-600">€2000 - €3500 / Bulan</p>
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
                                        Kami memahami tantangan biaya awal. Melalui program <strong>Dana Bantuan Bergulir</strong>, Anda bisa mendapatkan dukungan pembiayaan hingga <strong>70%</strong> dari total biaya program, hari tua nanti bayar setelah sukses.
                                   </p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <div className="mb-16">
                                   <h2 className="text-2xl font-bold text-[#021231] mb-8">How FTTC Works</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {[
                                             {
                                                  step: "01",
                                                  title: "Language Preparation",
                                                  desc: "Peserta mengikuti pelatihan bahasa Jerman hingga level A2 di Indonesia sebagai fondasi komunikasi dan kesiapan kerja internasional."
                                             },
                                             {
                                                  step: "02",
                                                  title: "Cultural Adaptation",
                                                  desc: "Peserta menjalani program Au Pair selama 12 bulan di Jerman untuk adaptasi bahasa, budaya, dan kehidupan sehari-hari."
                                             },
                                             {
                                                  step: "03",
                                                  title: "Career Transition",
                                                  desc: "Mulai bulan ke-13, peserta bertransisi ke jalur karier sebagai perawat di Jerman sesuai jalur yang telah dipersiapkan sejak awal."
                                             },
                                             {
                                                  step: "04",
                                                  title: "Professional Career",
                                                  desc: "Peserta membangun karier profesional yang berkelanjutan di Jerman secara legal dan terarah."
                                             }
                                        ].map((item, i) => (
                                             <div key={i} className="relative group">
                                                  <div className="text-4xl font-bold text-gray-100 mb-4 group-hover:text-red-50 transition-colors">
                                                       {item.step}
                                                  </div>
                                                  <h3 className="text-lg font-bold text-[#021231] mb-2">{item.title}</h3>
                                                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow-sm relative overflow-hidden">
                                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8" />
                                   <h2 className="text-2xl font-bold text-[#021231] mb-4 relative z-10">Program Overview</h2>
                                   <div className="relative z-10">
                                        <h3 className="text-xl font-semibold text-[#CD1E1A] mb-3">Fast Track to Career (FTTC)</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                             Program jalur percepatan karier internasional bagi mahasiswa dan alumni D3/S1 Keperawatan serta S1 Kebidanan untuk membangun karier profesional di Jerman secara legal dan terarah.
                                        </p>
                                   </div>
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
