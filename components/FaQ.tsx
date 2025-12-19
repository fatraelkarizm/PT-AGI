"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ_ITEMS = [
     {
          question: "Apakah saya perlu bisa bahasa Jerman sebelum mendaftar?",
          answer: "Untuk pendaftaran awal, Anda tidak wajib bisa bahasa Jerman. Kami menyediakan program kursus bahasa intensif dari level dasar (A1) hingga level yang dibutuhkan (B1/B2) sebagai bagian dari persiapan."
     },
     {
          question: "Berapa lama proses persiapan hingga keberangkatan?",
          answer: "Durasi persiapan bervariasi tergantung program dan kemampuan belajar bahasa Anda. Rata-rata memakan waktu 6-12 bulan untuk program Ausbildung dan PWIG."
     },
     {
          question: "Apakah ada batasan usia untuk mendaftar?",
          answer: "Program Ausbildung umumnya 18-30 tahun. Program Au Pair 18-26 tahun. Untuk PWIG (Tenaga Profesional), batas usia lebih fleksibel hingga 40-45 tahun asalkan memiliki pengalaman relevan."
     },
     {
          question: "Apakah program ini menjamin pekerjaan?",
          answer: "Kami menjamin koneksi dengan employer dan pendampingan hingga kontrak kerja didapatkan, asalkan peserta memenuhi syarat bahasa dan kualifikasi yang ditentukan."
     }
];

export default function FaQ() {
     const [openIndex, setOpenIndex] = useState<number | null>(null);

     return (
          <section id="faq" className="py-20 bg-white">
               <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-[#021231] mb-4">
                              Pertanyaan Umum (FAQ)
                         </h2>
                         <p className="text-gray-600">
                              Jawaban atas pertanyaan yang sering diajukan oleh calon peserta.
                         </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                         {FAQ_ITEMS.map((item, idx) => (
                              <motion.div
                                   key={idx}
                                   initial={{ opacity: 0, y: 10 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="border border-gray-200 rounded-2xl overflow-hidden"
                              >
                                   <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                   >
                                        <span className="font-bold text-[#021231] text-lg">{item.question}</span>
                                        {openIndex === idx ? (
                                             <Minus className="w-5 h-5 text-[#CD1E1A]" />
                                        ) : (
                                             <Plus className="w-5 h-5 text-gray-400" />
                                        )}
                                   </button>
                                   <motion.div
                                        initial={false}
                                        animate={{ height: openIndex === idx ? "auto" : 0 }}
                                        className="overflow-hidden"
                                   >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                             {item.answer}
                                        </div>
                                   </motion.div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
