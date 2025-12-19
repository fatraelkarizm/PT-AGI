"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";

const EXPENSES = [
     {
          category: "Biaya Persiapan",
          items: [
               { label: "Kursus Bahasa (A1-B1)", cost: "Rp 5.000.000 - Rp 15.000.000" },
               { label: "Terjemahan Dokumen", cost: "Rp 1.000.000 - Rp 3.000.000" },
               { label: "Visa & Asuransi", cost: "Rp 3.000.000 - Rp 5.000.000" },
               { label: "Tiket Pesawat", cost: "Rp 10.000.000 - Rp 15.000.000" }
          ],
          icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
     },
     {
          category: "Biaya Hidup Bulanan (Estimasi)",
          items: [
               { label: "Akomodasi (WG/Asrama)", cost: "€300 - €500" },
               { label: "Makan & Minum", cost: "€150 - €250" },
               { label: "Asuransi Kesehatan", cost: "€110 - €120" },
               { label: "Transportasi & Lainnya", cost: "€50 - €100" }
          ],
          icon: <HelpCircle className="w-6 h-6 text-blue-500" />
     },
     {
          category: "Catatan Penting",
          items: [
               { label: "Biaya dapat berubah sewaktu-waktu sesuai kebijakan.", cost: "" },
               { label: "Program Vokasi/Ausbildung mendapatkan gaji bulanan.", cost: "€800 - €1200" },
               { label: "Au Pair mendapatkan uang saku bulanan.", cost: "€280" }
          ],
          icon: <AlertCircle className="w-6 h-6 text-orange-500" />
     }
];

export default function Expenses() {
     return (
          <section id="pembiayaan" className="py-20 bg-gray-50">
               <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-[#021231] mb-4">
                              Transparansi Pembiayaan
                         </h2>
                         <p className="text-gray-600 max-w-2xl mx-auto">
                              Kami berkomitmen untuk memberikan informasi biaya yang jelas dan transparan. Tidak ada biaya tersembunyi.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {EXPENSES.map((group, idx) => (
                              <motion.div
                                   key={idx}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ delay: idx * 0.1 }}
                                   viewport={{ once: true }}
                                   className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                              >
                                   <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gray-50 rounded-full">
                                             {group.icon}
                                        </div>
                                        <h3 className="font-bold text-lg text-[#021231]">{group.category}</h3>
                                   </div>
                                   <div className="space-y-4">
                                        {group.items.map((item, i) => (
                                             <div key={i} className="flex justify-between items-start border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                                                  <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                                                  {item.cost && (
                                                       <span className="text-[#CD1E1A] text-sm font-bold text-right ml-2">{item.cost}</span>
                                                  )}
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>
                         ))}
                    </div>

                    <div className="mt-12 text-center">
                         <p className="text-sm text-gray-500 italic">
                              *Estimasi biaya di atas hanya sebagai gambaran kasar dan dapat berbeda tergantung gaya hidup dan lokasi kota tujuan.
                         </p>
                    </div>
               </div>
          </section>
     );
}
