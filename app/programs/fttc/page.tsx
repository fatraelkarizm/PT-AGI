"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, MapPin, DollarSign, Calendar, Wallet, BookOpen, Users, Stethoscope, TrendingUp } from "lucide-react";
import { Nurse } from "@/assets";
import ProgramCTA from "@/components/ProgramCTA";

export default function FTTCPage() {
     const steps = [
          {
               title: "Language Preparation",
               desc: "Peserta mengikuti pelatihan bahasa Jerman hingga level A2 di Indonesia sebagai fondasi komunikasi dan kesiapan kerja internasional.",
               icon: BookOpen
          },
          {
               title: "Cultural Adaptation",
               desc: "Peserta menjalani program Au Pair selama 12 bulan di Jerman untuk adaptasi bahasa, budaya, dan kehidupan sehari-hari.",
               icon: Users
          },
          {
               title: "Career Transition",
               desc: "Mulai bulan ke-13, peserta bertransisi ke jalur karier sebagai perawat di Jerman sesuai jalur yang telah dipersiapkan sejak awal.",
               icon: Stethoscope
          },
          {
               title: "Professional Career",
               desc: "Peserta membangun karier profesional yang berkelanjutan di Jerman secara legal dan terarah.",
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
                              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
                                   Program Unggulan
                              </span>
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Fast Track to Career (FTTC)
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed">
                                   Fast Track to Career (FTTC) adalah program jalur percepatan karier internasional bagi mahasiswa dan alumni D3/S1 Keperawatan serta S1 Kebidanan untuk membangun karier profesional di Jerman secara legal dan terarah.
                              </p>
                         </div>

                         <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12">
                              <Image
                                   src={Nurse}
                                   alt="FTTC Students"
                                   fill
                                   className="object-cover"
                              />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <Clock className="w-8 h-8 text-teal-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Durasi Program</h3>
                                   <p className="text-gray-600">6 - 9 Bulan Intensif</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-teal-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Lokasi Tujuan</h3>
                                   <p className="text-gray-600">Jerman</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-teal-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Potensi Gaji</h3>
                                   <p className="text-gray-600">€2000 - €3500 / Bulan</p>
                              </div>
                         </div>

                         <div className="prose prose-lg max-w-none text-gray-700">
                              <h2 className="text-2xl font-bold text-[#021231] mb-4">Tentang Program</h2>
                              <p className="mb-6">
                                   Program dimulai dengan pelatihan bahasa Jerman hingga level A2 di Indonesia, dilanjutkan Au Pair selama 12 bulan sebagai fase adaptasi bahasa dan budaya. Mulai bulan ke-13, peserta melanjutkan karier sebagai perawat di Jerman, dengan jalur yang telah dipersiapkan sejak awal dan berkelanjutan.

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
                                        <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                                        <span className="text-gray-900 font-medium">{item}</span>
                                   </li>
                              ))}
                         </ul>

                         <div className="mb-20">
                              <div className="text-center mb-10">
                                   <h2 className="text-3xl font-bold text-[#021231] mb-4">How FTTC Works</h2>
                                   <p className="text-gray-600 max-w-2xl mx-auto">
                                        Perjalanan singkat menuju karier impian Anda di Jerman.
                                   </p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                   {steps.map((step, index) => (
                                        <div key={index} className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-teal-100 hover:shadow-lg transition-all duration-300 group">
                                             <div className="flex justify-between items-start mb-4">
                                                  <div className="p-3 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                                       <step.icon className="w-6 h-6" />
                                                  </div>
                                                  <span className="text-4xl font-bold text-gray-200 group-hover:text-teal-50 transition-colors">
                                                       0{index + 1}
                                                  </span>
                                             </div>
                                             <h3 className="text-lg font-bold text-[#021231] mb-3 group-hover:text-teal-600 transition-colors">
                                                  {step.title}
                                             </h3>
                                             <p className="text-sm text-gray-600 leading-relaxed">
                                                  {step.desc}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         <ProgramCTA
                              title="Siap Memulai Karier Globalmu?"
                              description="Jangan lewatkan kesempatan emas ini. Kuota terbatas untuk batch mendatang. Konsultasikan profilmu sekarang secara gratis."
                              buttonText="Daftar Konsultasi Sekarang"
                              href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20FTTC"
                         />
                    </motion.div>
               </div>
          </main>
     );
}
