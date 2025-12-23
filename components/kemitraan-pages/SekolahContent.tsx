"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, GraduationCap, Users, BookOpen, Award, Rocket, School } from "lucide-react";
import { VocationalSchool } from "@/assets";

import PartnerCollage from "@/components/PartnerCollage";
import { SMKN2Gowa, SMKN3Gowa, SMKN1Maros, AlumniBudiLuhur, AlfatihBandung } from "@/assets/school";
import ProgramCTA from "@/components/ProgramCTA";

const SEKOLAH_PARTNERS = [
     {
          id: 1,
          image: AlumniBudiLuhur,
          label: "Alumni Budi Luhur",
     },
     {
          id: 2,
          image: AlfatihBandung,
          label: "Alumni Alfatih Bandung",
     },

];


export default function SekolahContent() {
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
                                   Partnership Sekolah
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Mitra Sekolah (SMA/SMK)
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Mempersiapkan siswa SMK & SMA untuk sukses di Jerman melalui jalur <b>Ausbildung</b> (Kuliah Vokasi). Bekali siswa Anda dengan skill masa depan.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12 group">
                              <Image
                                   src={VocationalSchool}
                                   alt="Partnership Sekolah"
                                   fill
                                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-6 left-6 text-white">
                                   <p className="font-bold text-lg">Vocational Excellence</p>
                                   <p className="text-sm opacity-90">Membangun Karakter & Kompetensi Global</p>
                              </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                   <Rocket className="w-8 h-8 text-[#021231] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Fast Track</h3>
                                   <p className="text-gray-600">Jalur prioritas lulusan untuk program Ausbildung.</p>
                              </div>
                              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                   <BookOpen className="w-8 h-8 text-[#021231] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Kurikulum</h3>
                                   <p className="text-gray-600">Integrasi pelajaran bahasa Jerman sejak dini.</p>
                              </div>
                              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                   <Award className="w-8 h-8 text-[#021231] mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Bekerja Pasti</h3>
                                   <p className="text-gray-600">Realisasi slogan Bekerja Pasti.</p>
                              </div>
                         </div>

                         {/* Collage Section for Sekolah */}
                         <div className="mb-16 -mx-4 md:mx-0">
                              <PartnerCollage
                                   title="Sekolah"
                                   items={SEKOLAH_PARTNERS}
                                   subtitle="Membuka gerbang karier internasional bagi siswa SMK & SMA Indonesia."
                                   maxColumns={2}
                              />
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Masa Depan Lulusan Anda</h2>
                              <p className="mb-6 text-justify">
                                   Banyak lulusan SMK/SMA bingung menentukan arah setelah lulus. Program kami memberikan roadmap yang jelas menuju karier profesional di Jerman, yang tidak hanya memberikan gaji tinggi (€1000++ saat belajar), tetapi juga pendidikan gratis dan pengalaman internasional.
                              </p>

                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Fasilitas Kerjasama</h2>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                                   {[
                                        "Ekstrakurikuler Bahasa Jerman",
                                        "Sosialisasi Program ke Orang Tua (Parents Gathering)",
                                        "Training of Trainers (ToT) untuk Guru",
                                        "Modul Pembelajaran & Media Ajar",
                                        "Konsultasi Karier Personal untuk Siswa",
                                        "Kunjungan Industri & Info Session Berkala"
                                   ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                             <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                                             <span className="font-medium text-gray-800">{item}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <ProgramCTA
                              title="Jadikan Sekolah Anda Unggulan"
                              description="Berikan nilai tambah yang nyata bagi siswa dan orang tua. Hubungi kami untuk presentasi program di sekolah Anda."
                              buttonText="Hubungi Tim Kemitraan"
                              href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20Studi%Vokasi"
                         />
                    </motion.div>
               </div>
          </main>
     );
}
