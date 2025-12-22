"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign, Wallet } from "lucide-react";

export default function VokasiPage() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-5xl mx-auto"
                    >
                         <div className="mb-8">
                              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-4">
                                   Studi & Pelatihan
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Studi Vokasi & Training Industri
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Program vokasi terintegrasi dengan industri di China dan Taiwan. Dapatkan *hard skill* mendalam dan sertifikasi internasional.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                              <Image
                                   src="/hotel-pria.jpg"
                                   alt="Vocational Training"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi Studi</h3>
                                   <p className="text-gray-600">3 Tahun (D3)</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Negara</h3>
                                   <p className="text-gray-600">China & Taiwan</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Beasiswa</h3>
                                   <p className="text-gray-600">Tuition & Living Cost*</p>
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
                                        Nikmati fasilitas <strong>Dana Bantuan Bergulir</strong> hingga <strong>70%</strong> dari total biaya pendidikan dan penempatan. Bayar nanti ketika Anda sudah sukses bekerja di industri global.
                                   </p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <div className="mb-16">
                                   <h2 className="text-2xl font-bold text-[#021231] mb-8">How Vocational Works</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {[
                                             {
                                                  step: "01",
                                                  title: "Language Preparation",
                                                  desc: "Persiapan bahasa Jerman sebagai dasar studi dan praktik kerja."
                                             },
                                             {
                                                  step: "02",
                                                  title: "Vocational Study",
                                                  desc: "Peserta menjalani pendidikan vokasi berbasis praktik dengan sistem 2 hari teori dan 3 hari praktik."
                                             },
                                             {
                                                  step: "03",
                                                  title: "Industry Training",
                                                  desc: "Pelatihan langsung di lingkungan industri nyata di Jerman."
                                             },
                                             {
                                                  step: "04",
                                                  title: "Work Readiness",
                                                  desc: "Peserta memiliki kesiapan profesional dan pengalaman kerja internasional."
                                             }
                                        ].map((item, i) => (
                                             <div key={i} className="relative group">
                                                  <div className="text-4xl font-bold text-gray-100 mb-4 group-hover:text-orange-50 transition-colors">
                                                       {item.step}
                                                  </div>
                                                  <h3 className="text-lg font-bold text-[#021231] mb-2">{item.title}</h3>
                                                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow-sm relative overflow-hidden">
                                   <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8" />
                                   <h2 className="text-2xl font-bold text-[#021231] mb-4 relative z-10">Program Overview</h2>
                                   <div className="relative z-10">
                                        <h3 className="text-xl font-semibold text-orange-700 mb-3">Studi Vokasi & Training Industri</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                             Program pendidikan dan pelatihan berbasis praktik di Jerman untuk membangun keterampilan kerja, pengalaman industri, dan kesiapan profesional.
                                        </p>
                                   </div>
                              </div>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Keunggulan Program</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Beasiswa Penuh (Tuition Fee)",
                                        "Fasilitas Dana Talangan / Bantuan Bergulir hingga 70%",
                                        "Subsidi Tempat Tinggal (Dormitory)",
                                        "Magang Berbayar di Industri",
                                        "Pelajaran Bahasa Mandarin Intensif",
                                        "Peluang Kerja di Perusahaan China-Indo",
                                        "Fasilitas Kampus Modern"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                             <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Wujudkan Masa Depan Mandiri</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Jadilah tenaga ahli masa depan dengan bekal pendidikan vokasi kelas dunia.
                              </p>
                              <button className="px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105">
                                   Daftar Program Vokasi
                              </button>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
