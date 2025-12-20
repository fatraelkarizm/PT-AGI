"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign } from "lucide-react";

export default function VokasiContent() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-4xl mx-auto"
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

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi Studi</h3>
                                   <p className="text-gray-600">3 Tahun (D3)</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Negara</h3>
                                   <p className="text-gray-600">Jerman</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Beasiswa</h3>
                                   <p className="text-gray-600">Tuition & Living Cost*</p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Tentang Vokasi</h2>
                              <p className="mb-6">
                                   Bekerjasama dengan institusi politeknik terkemuka di Asia Timur, program ini menawarkan pendidikan berbasis praktik (70% praktek, 30% teori).
                                   Lulusan akan memiliki keahlian spesifik yang sangat dicari oleh perusahaan multinasional, khususnya di sektor manufaktur, teknologi EV, dan logistik.
                              </p>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Keunggulan Program</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Beasiswa Penuh (Tuition Fee)",
                                        "Subsidi Tempat Tinggal (Dormitory)",
                                        "Magang Berbayar di Industri",
                                        "Pelajaran Bahasa Mandarin Intensif",
                                        "Peluang Kerja di Perusahaan China-Indo",
                                        "Fasilitas Kampus Modern"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                             <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
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
