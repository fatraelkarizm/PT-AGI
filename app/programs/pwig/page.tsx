"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, MapPin, DollarSign, Wallet, Languages, FileText, Building, TrendingUp } from "lucide-react";
import { TeamDoctor } from "@/assets";

export default function PWIGPage() {
     const steps = [
          {
               title: "Language Readiness",
               desc: "Persiapan bahasa Jerman di Indonesia sesuai standar komunikasi dunia kerja profesional.",
               icon: Languages
          },
          {
               title: "Administrative Process",
               desc: "Pendampingan proses administrasi dan legalitas kerja sesuai regulasi ketenagakerjaan Jerman.",
               icon: FileText
          },
          {
               title: "Job Placement",
               desc: "Peserta ditempatkan langsung di perusahaan Jerman sesuai bidang dan kompetensi.",
               icon: Building
          },
          {
               title: "Career Development",
               desc: "Peserta menjalani karier profesional dengan kontrak resmi dan peluang pengembangan jangka panjang.",
               icon: TrendingUp
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
                                   Program Profesional
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Professional Worker in Germany (PWIG)
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Peluang karier bagi tenaga ahli berpengalaman. Salurkan keahlian Anda ke pasar kerja Jerman yang membutuhkan tenaga profesional terampil.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                              <Image
                                   src={TeamDoctor}
                                   alt="Professional Workers"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Kontrak Kerja</h3>
                                   <p className="text-gray-600">Min. 2 Tahun</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Penempatan</h3>
                                   <p className="text-gray-600">Seluruh Jerman</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Gaji Tahunan</h3>
                                   <p className="text-gray-600">€35,000 - €55,000</p>
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
                                        Fokus pada persiapan karier Anda tanpa khawatir biaya awal. Gunakan fasilitas <strong>Dana Talangan</strong> hingga <strong>70%</strong> untuk biaya pengurusan dokumen & keberangkatan, yang dapat dilunasi setelah Anda berpenghasilan.
                                   </p>
                              </div>
                         </div>

                         {/* How It Works - Static Grid */}
                         <div className="mb-20">
                              <div className="text-center mb-10">
                                   <h2 className="text-3xl font-bold text-[#021231] mb-4">How PWIG Works</h2>
                                   <p className="text-gray-600 max-w-2xl mx-auto">
                                        Langkah strategis menuju karier profesional di Jerman.
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

                         <h2 className="text-2xl font-bold text-[#021231] mb-4">Sektor Pekerjaan Utama</h2>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                              {[
                                   "Kesehatan (Perawat & Dokter)",
                                   "Teknik (Mesin, Elektro, Sipil)",
                                   "Teknologi Informasi & Software",
                                   "Hospitality & Gastronomy",
                                   "Logistik & Transportasi",
                                   "Konstruksi"
                              ].map((item, i) => (
                                   <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-gray-900 font-medium">{item}</span>
                                   </li>
                              ))}
                         </ul>

                         <h2 className="text-2xl font-bold text-[#021231] mb-4">Benefit Bergabung</h2>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                              {[
                                   "Gaji Standar Eropa (€2500 - €4500)",
                                   "Fasilitas Dana Talangan / Bantuan Bergulir hingga 70%",
                                   "Kontrak Kerja Jangka Panjang",
                                   "Jaminan Asuransi & Pensiun",
                                   "Izin Tinggal untuk Keluarga (Reunifikasi)",
                                   "Cuti Tahunan Berbayar (24-30 hari)"
                              ].map((item, i) => (
                                   <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-gray-900 font-medium">{item}</span>
                                   </li>
                              ))}
                         </ul>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Tingkatkan Level Karier Anda</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Jerman membutuhkan ribuan tenaga ahli setiap tahunnya. Pastikan Anda salah satunya dengan persiapan yang tepat.
                              </p>
                              <Link
                                   href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20PWIG"
                                   target="_blank"
                                   className="inline-block px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105"
                              >
                                   Submit CV Saya
                              </Link>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
