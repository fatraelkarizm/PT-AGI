"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, DollarSign, FileText, Languages, Video, Plane } from "lucide-react";
import ProgramCTA from "@/components/ProgramCTA";

export default function PWIGPage() {
     const steps = [
          {
               title: "Document Assessment",
               desc: "Evaluasi kualifikasi pendidikan dan pengalaman kerja untuk penyetaraan (Anerkennung) di Jerman.",
               icon: FileText
          },
          {
               title: "Language & Training",
               desc: "Persiapan bahasa Jerman minimal level B1/B2 (jika diperlukan) dan pengenalan budaya kerja.",
               icon: Languages
          },
          {
               title: "Interview & Matching",
               desc: "Sesi wawancara langsung dengan employer Jerman yang difasilitasi oleh PT AGI.",
               icon: Video
          },
          {
               title: "Visa & Departure",
               desc: "Pengurusan visa kerja, kontrak, dan keberangkatan menuju Jerman untuk memulai karier.",
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
                                   <Clock className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Kontrak Kerja</h3>
                                   <p className="text-gray-600">Min. 2 Tahun</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                                   <h3 className="font-bold text-lg text-[#021231] mb-2">Penempatan</h3>
                                   <p className="text-gray-600">Jerman</p>
                              </div>
                              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                   <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
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

                              <div className="mb-20">
                                   <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold text-[#021231] mb-4">How PWIG Works</h2>
                                        <p className="text-gray-600 max-w-2xl mx-auto">
                                             Alur proses kami yang transparan untuk memastikan kesuksesan karier Anda.
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
                         </div>

                         <ProgramCTA
                              title="Tingkatkan Level Karier Anda"
                              description="Jerman membutuhkan ribuan tenaga ahli setiap tahunnya. Pastikan Anda salah satunya dengan persiapan yang tepat."
                              buttonText="Submit CV Saya"
                              href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20tertarik%20dengan%20program%20PWIG"
                         />
                    </motion.div>
               </div>
          </main>
     );
}
