"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

export default function AboutContent() {
     return (
          <main className="min-h-screen bg-white font-sans pt-24 pb-12">
               <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="max-w-4xl mx-auto"
                    >
                         <div className="text-center mb-16">
                              <h1 className="text-4xl md:text-5xl font-bold text-[#021231] mb-6">
                                   Tentang Kami
                              </h1>
                              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                   PT Akselerasi Global Indonesia (AGI) adalah jembatan impian Anda menuju karier dan pendidikan internasional.
                              </p>
                         </div>

                         {/* Vision & Mission */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                   <h2 className="text-2xl font-bold text-[#021231] mb-4">Visi Kami</h2>
                                   <p className="text-gray-700 leading-relaxed">
                                        Menjadi perusahaan konsultan pendidikan dan karier internasional terdepan di Indonesia yang terpercaya, transparan, dan profesional dalam mencetak SDM global yang berkualitas.
                                   </p>
                              </div>
                              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                   <h2 className="text-2xl font-bold text-[#021231] mb-4">Misi Kami</h2>
                                   <ul className="space-y-3">
                                        {[
                                             "Memberikan informasi yang jujur dan transparan.",
                                             "Menyediakan pelatihan bahasa dan *soft skill* terbaik.",
                                             "Menjalin kerjasama dengan mitra global yang kredibel.",
                                             "Mendampingi peserta dari persiapan hingga penempatan."
                                        ].map((item, i) => (
                                             <li key={i} className="flex items-start gap-3 text-gray-700">
                                                  <CheckCircle className="w-5 h-5 text-[#CD1E1A] shrink-0 mt-0.5" />
                                                  <span>{item}</span>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </div>

                         {/* Why Choose Us */}
                         <div className="mb-20">
                              <h2 className="text-3xl font-bold text-[#021231] text-center mb-10">Mengapa Memilih AGI?</h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                   <div className="flex flex-col items-center text-center p-6">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                                             <Award className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-lg text-[#021231] mb-2">Legalitas Terjamin</h3>
                                        <p className="text-gray-600 text-sm">Resmi terdaftar di Kemenkumham dan instansi terkait.</p>
                                   </div>
                                   <div className="flex flex-col items-center text-center p-6">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                             <Users className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-lg text-[#021231] mb-2">Tim Profesional</h3>
                                        <p className="text-gray-600 text-sm">Didukung oleh konsultan dan pengajar berpengalaman.</p>
                                   </div>
                                   <div className="flex flex-col items-center text-center p-6">
                                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                                             <Globe className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-lg text-[#021231] mb-2">Mitra Global</h3>
                                        <p className="text-gray-600 text-sm">Kerjasama luas dengan institusi di Jerman, China, & USA.</p>
                                   </div>
                              </div>
                         </div>

                         {/* Founder/CEO Message (Optional placeholder) */}
                         <div className="bg-[#021231] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
                              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 shrink-0 overflow-hidden relative border-4 border-[#CD1E1A]">
                                   {/* Placeholder for CEO Image */}
                                   <Image src="/AGI-LOGO.jpeg" alt="CEO" fill className="object-cover" />
                              </div>
                              <div>
                                   <p className="italic text-gray-300 text-lg mb-6">
                                        "Kami percaya bahwa setiap anak muda Indonesia memiliki potensi untuk bersaing di kancah global. AGI hadir untuk membuka jalan tersebut."
                                   </p>
                                   <div>
                                        <h4 className="font-bold text-xl">Nama CEO/Pimpinan</h4>
                                        <p className="text-[#CD1E1A] text-sm font-medium">Direktur Utama PT AGI</p>
                                   </div>
                              </div>
                         </div>

                    </motion.div>
               </div>
          </main>
     );
}
