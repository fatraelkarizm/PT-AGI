"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, Briefcase, ClipboardList, Languages, FileCheck, Plane } from "lucide-react";
import ProgramCTA from "@/components/ProgramCTA";

export default function VokasiPage() {
     const steps = [
          {
               title: "Registration",
               desc: "Pendaftaran dan seleksi administrasi untuk menentukan kelayakan peserta program Ausbildung.",
               icon: ClipboardList
          },
          {
               title: "Language Training",
               desc: "Pelatihan bahasa Jerman intensif dari level A1 hingga B1 sebagai syarat utama Ausbildung.",
               icon: Languages
          },
          {
               title: "Contract Signing",
               desc: "Proses wawancara dengan perusahaan Jerman dan penandatanganan kontrak Ausbildung.",
               icon: FileCheck
          },
          {
               title: "Visa & Departure",
               desc: "Pengurusan visa studi/kerja dan persiapan keberangkatan menuju Jerman.",
               icon: Plane
          }
     ];

     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6">
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
                                   <Clock className="w-8 h-8 text-orange-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Program</h3>
                                   <p className="text-gray-600">Ausbildung Gastronomi</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-orange-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Lokasi Kelas</h3>
                                   <p className="text-gray-600">Jogja, Ambon, Makassar</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Briefcase className="w-8 h-8 text-orange-600 mb-4" />
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

                              <div className="mb-20">
                                   <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold text-[#021231] mb-4">How It Works</h2>
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                             Langkah mudah memulai pendidikan vokasi internasional Anda.
                                        </p>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {steps.map((step, index) => (
                                             <div key={index} className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-orange-100 hover:shadow-lg transition-all duration-300 group">
                                                  <div className="flex justify-between items-start mb-4">
                                                       <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                                            <step.icon className="w-6 h-6" />
                                                       </div>
                                                       <span className="text-4xl font-bold text-gray-200 group-hover:text-orange-50 transition-colors">
                                                            0{index + 1}
                                                       </span>
                                                  </div>
                                                  <h3 className="text-lg font-bold text-[#021231] mb-3 group-hover:text-orange-600 transition-colors">
                                                       {step.title}
                                                  </h3>
                                                  <p className="text-sm text-gray-600 leading-relaxed">
                                                       {step.desc}
                                                  </p>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         <ProgramCTA
                              title="Mulai Perjalanan Kulinermu"
                              description="Daftarkan dirimu sekarang di pusat pelatihan terdekat (Jogja, Ambon, atau Makassar) dan raih karier impianmu."
                              buttonText="Daftar Program Vokasi"
                              href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20Vokasi"
                         />
                    </motion.div>
               </div>
          </main>
     );
}
