"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, Briefcase } from "lucide-react";

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
                                   Program Ausbildung (Vokasi) di bidang Gastronomi yang terintegrasi. Fokus bagi siswa SMA/SMK dan Mahasiswa untuk siap kerja di industri hospitality.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                              <Image
                                   src="/hotel-pria.jpg"
                                   alt="Vocational Training Gastronomy"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Program</h3>
                                   <p className="text-gray-600">Ausbildung Gastronomi</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Lokasi Kelas</h3>
                                   <p className="text-gray-600">Jogja, Ambon, Makassar</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Briefcase className="w-8 h-8 text-[#CD1E1A] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Target</h3>
                                   <p className="text-gray-600">SMA/SMK & Kampus</p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Tentang Program</h2>
                              <p className="mb-6">
                                   Program ini merupakan jembatan emas bagi lulusan SMA, SMK, maupun mahasiswa aktif yang ingin terjun ke dunia profesional bidang Gastronomi.
                                   Dengan kurikulum Ausbildung, peserta akan dibekali keterampilan praktis yang sesuai dengan standar industri internasional.
                              </p>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Bidang Peminatan</h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                   {[
                                        { name: "Restoran", desc: "Manajemen & Operasional" },
                                        { name: "Perhotelan", desc: "Hospitality & Service" },
                                        { name: "Koki", desc: "Culinary Arts" }
                                   ].map((field, i) => (
                                        <div key={i} className="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                                             <h3 className="font-bold text-lg text-[#021231] mb-1">{field.name}</h3>
                                             <p className="text-sm text-gray-600">{field.desc}</p>
                                        </div>
                                   ))}
                              </div>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Keunggulan</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Kurikulum Berstandar Industri",
                                        "Tersedia Kelas di Jogja, Ambon, Makassar",
                                        "Fokus pada Keterampilan Praktis",
                                        "Peluang Karier Global",
                                        "Instruktur Berpengalaman",
                                        "Jejaring Alumni Kuat"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                             <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="mt-12 p-8 bg-[#021231] rounded-3xl text-white text-center">
                              <h2 className="text-2xl font-bold mb-4">Mulai Perjalanan Kulinermu</h2>
                              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Daftarkan dirimu sekarang di pusat pelatihan terdekat (Jogja, Ambon, atau Makassar) dan raih karier impianmu.
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
