"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Globe, BookOpen, Users, Building2, TrendingUp, Handshake } from "lucide-react";

export default function KampusContent() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-5xl mx-auto"
                    >
                         <div className="mb-8 text-center md:text-left">
                              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#021231] font-medium text-sm mb-4">
                                   Academic Partnership
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Mitra Kampus & Universitas
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Tingkatkan reputasi global institusi Anda dengan menyalurkan mahasiswa dan alumni ke pasar kerja Jerman. Solusi *link and match* internasional yang nyata.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12 group">
                              <Image
                                   src="/Global-University.png"
                                   alt="Partnership Kampus"
                                   fill
                                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-6 left-6 text-white">
                                   <p className="font-bold text-lg">Global Networks</p>
                                   <p className="text-sm opacity-90">Menghubungkan Akademisi dengan Industri Eropa</p>
                              </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                   <Handshake className="w-8 h-8 text-[#021231] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">MoU Resmi</h3>
                                   <p className="text-gray-600">Kerjasama legalitas terjamin & jangka panjang.</p>
                              </div>
                              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                   <Globe className="w-8 h-8 text-[#021231] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Jaringan Global</h3>
                                   <p className="text-gray-600">Akses ke 50+ Rumah Sakit & Industri di Jerman.</p>
                              </div>
                              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                   <TrendingUp className="w-8 h-8 text-[#021231] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Employability</h3>
                                   <p className="text-gray-600">Tingkatkan serapan kerja lulusan secara signifikan.</p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Mengapa Bermitra dengan PT AGI?</h2>
                              <p className="mb-6">
                                   Tantangan utama pendidikan tinggi saat ini adalah *skills gap* dan penyerapan lulusan. Kami hadir sebagai jembatan strategis yang mempersiapkan mahasiswa Anda dengan kompetensi bahasa dan teknis berstandar Jerman, memastikan mereka siap bersaing di level internasional.
                              </p>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Skema Kerjasama</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Kurikulum Peminatan Bahasa Jerman (SKS)",
                                        "Program Magang (Internship) Internasional",
                                        "Seminar Karier & Workshop Dosen",
                                        "Kelas Persiapan Karier (Career Center)",
                                        "Guest Lecturer & Praktisi Jerman",
                                        "Penyaluran Kerja Alumni (Nursing & Teknik)"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                             <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                                             <span className="font-medium text-gray-800">{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="mt-12 p-8 md:p-12 bg-[#021231] rounded-3xl text-white text-center relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-[#CD1E1A] opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

                              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Tingkatkan Akreditasi Kampus Anda</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                                   Jadilah pelopor kampus berwawasan global. Diskusikan bentuk kerjasama yang paling sesuai untuk institusi Anda bersama tim ahli kami.
                              </p>
                              <button className="px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105 relative z-10">
                                   Ajukan Kerjasama Sekarang
                              </button>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
