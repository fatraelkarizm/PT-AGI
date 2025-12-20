"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign } from "lucide-react";

export default function PWIGContent() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-4xl mx-auto"
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
                                   src="/team-doctor.jpg"
                                   alt="Professional Workers"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Kontrak Kerja</h3>
                                   <p className="text-gray-600">Min. 2 Tahun</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Penempatan</h3>
                                   <p className="text-gray-600">Jerman</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Gaji Tahunan</h3>
                                   <p className="text-gray-600">€35,000 - €55,000</p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Deskripsi Program</h2>
                              <p className="mb-4">
                                   PWIG membuka peluang bagi tenaga kesehatan berpengalaman untuk berkarier di Jerman melalui jalur penyetaraan ijazah (Anerkennung).
                              </p>
                              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                                   <p className="font-bold text-blue-900 mb-2">Target Peserta:</p>
                                   <ul className="list-disc list-inside text-blue-800 space-y-1">
                                        <li>Alumni STIKES / Keperawatan (D3 / S1)</li>
                                        <li>Perawat Berpengalaman (Professional Nurse)</li>
                                   </ul>
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
                                             <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Tingkatkan Level Karier Anda</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Jerman membutuhkan ribuan tenaga ahli setiap tahunnya. Pastikan Anda salah satunya dengan persiapan yang tepat.
                              </p>
                              <button className="px-8 py-4 bg-[#CD1E1A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all hover:scale-105">
                                   Submit CV Saya
                              </button>
                         </div>
                    </motion.div>
               </div>
          </main>
     );
}
