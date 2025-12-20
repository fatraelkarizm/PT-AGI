"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Info, ShieldCheck, Globe, Building2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PRICING_PLANS = [
     {
          id: "fttc",
          title: "Fast Track to Career (FTTC)",
          description: "Fast Track to Career (FTTC) adalah program jalur percepatan karier internasional bagi mahasiswa dan alumni D3/S1 Keperawatan serta S1 Kebidanan untuk membangun karier profesional di Jerman.",
          programFlow: [
               "Pelatihan Bahasa Jerman hingga A2 di Indonesia",
               "Au Pair (12 bln): adaptasi bahasa & budaya",
               "Mulai bln ke-13: Kerja Perawat di Jerman"
          ],
          financing: {
               total: "Rp 59.700.000",
               mandiri: { amount: "Rp 19.700.000", percentage: "30%" },
               loan: { amount: "Rp 40.000.000", percentage: "70%" },
               facilitator: "Akselerasi Global Indonesia",
               note: "70% biaya = pinjaman bergulir (jaminan ijazah)."
          },
          link: "/programs/fttc",
          highlight: true,
          badges: ["Germany", "Nurse", "Career"],
          type: "standard"
     },
     {
          id: "pwig",
          title: "Professional Worker (PP)",
          description: "Program penempatan kerja internasional bagi tenaga kerja profesional dan lulusan siap kerja untuk dapat bekerja secara legal di Jerman sesuai kompetensi.",
          programFlow: [
               "Persiapan Bahasa Jerman di Indonesia",
               "Proses administrasi & penempatan kerja",
               "Kerja Perusahaan Jerman (Kontrak Resmi)"
          ],
          financing: {
               total: "Rp 81.000.000",
               mandiri: { amount: "Rp 20.000.000", percentage: "±25%" },
               loan: { amount: "Rp 61.000.000", percentage: "±75%" },
               facilitator: null,
               note: null
          },
          link: "/programs/pwig",
          highlight: false,
          badges: ["Germany", "Professional", "High Salary"],
          type: "standard"
     },
     {
          id: "svit",
          title: "Studi Vokasi & Training",
          description: "Program pendidikan vokasi dan pelatihan berbasis praktik untuk memperoleh keterampilan kerja dan pengalaman industri langsung di Jerman.",
          programFlow: [
               "Persiapan Bahasa Jerman di Indonesia",
               "Vokasi & Training Industri di Jerman",
               "Praktik di lingkungan kerja nyata"
          ],
          financing: {
               total: "Rp 63.500.000",
               mandiri: { amount: "Rp 19.500.000", percentage: "±30%" },
               loan: { amount: "Rp 44.000.000", percentage: "±70%" },
               facilitator: "YAIJ Foundation",
               note: null
          },
          link: "/programs/vokasi",
          highlight: false,
          badges: ["Germany", "Vocational", "Scholarship"],
          type: "standard"
     },
     {
          id: "exchange",
          title: "Culture Exchange",
          description: "Program pertukaran budaya global untuk pengalaman internasional mendalam dan peningkatan bahasa.",
          countries: [
               { name: "USA", detail: "Au Pair & English immersion" },
               { name: "Belgium", detail: "European cultural exchange" },
               { name: "China", detail: "Cultural exchange in East Asia" }
          ],
          link: "/programs/exchange",
          highlight: false,
          badges: ["Global", "Exchange", "Experience"],
          type: "exchange"
     }
];

export default function Expenses() {
     const [hoveredCard, setHoveredCard] = useState<number | null>(null);

     return (
          <section id="pembiayaan" className="py-12 bg-gray-50 relative overflow-hidden scroll-mt-20">
               {/* Background Decor */}
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
               </div>

               <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                         <motion.h2
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-3xl md:text-5xl font-bold text-[#021231] mb-6"
                         >
                              Investasi Masa Depan Anda
                         </motion.h2>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600 text-lg leading-relaxed"
                         >
                              Pilih jalur karier yang sesuai dengan impian Anda. Kami menyediakan transparansi biaya dan skema pembiayaan yang mendukung kesuksesan Anda.
                         </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
                         {PRICING_PLANS.map((plan, idx) => (
                              <motion.div
                                   key={plan.id}
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: idx * 0.1 }}
                                   onHoverStart={() => setHoveredCard(idx)}
                                   onHoverEnd={() => setHoveredCard(null)}
                                   className={`
                relative bg-white rounded-xl overflow-hidden flex flex-col h-full
                ${plan.highlight ? 'ring-2 ring-[#CD1E1A] shadow-2xl xl:-mt-4 xl:mb-4 z-10' : 'border border-gray-100 shadow-lg hover:shadow-xl'}
                transition-all duration-300
              `}
                              >
                                   {plan.highlight && (
                                        <div className="bg-[#CD1E1A] text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">
                                             Recommended Choice
                                        </div>
                                   )}

                                   <div className="p-5 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="mb-4">
                                             <div className="flex flex-wrap gap-1.5 mb-2">
                                                  {plan.badges.map((badge, bIdx) => (
                                                       <span key={bIdx} className="bg-blue-50 text-[#021231] text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide">
                                                            {badge}
                                                       </span>
                                                  ))}
                                             </div>
                                             <h3 className="text-lg font-bold text-[#021231] mb-2 leading-tight">
                                                  {plan.title}
                                             </h3>
                                             <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-4">
                                                  {plan.description}
                                             </p>
                                        </div>

                                        {/* Plan Type: Standard */}
                                        {plan.type === "standard" && plan.financing && (
                                             <>
                                                  {/* Program Flow */}
                                                  <div className="mb-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
                                                       <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
                                                            <Building2 size={12} /> Alur Program
                                                       </h4>
                                                       <ul className="space-y-2">
                                                            {plan.programFlow?.map((step, sIdx) => (
                                                                 <li key={sIdx} className="flex items-start gap-2">
                                                                      <div className="w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 text-[9px] font-bold text-[#CD1E1A]">
                                                                           {sIdx + 1}
                                                                      </div>
                                                                      <span className="text-[12px] text-gray-700 font-medium leading-snug">{step}</span>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  </div>

                                                  <div className="mt-auto">
                                                       {/* Financing Structure */}
                                                       <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                                                            <div className="bg-[#021231] px-4 py-2 flex flex-col items-start gap-1">
                                                                 <span className="text-gray-300 text-[10px] font-bold uppercase">Total Biaya</span>
                                                                 <span className="text-white text-lg font-bold">{plan.financing.total}</span>
                                                            </div>

                                                            <div className="p-4 space-y-3">
                                                                 {/* Mandiri */}
                                                                 <div className="flex flex-col gap-1">
                                                                      <div className="flex justify-between items-center">
                                                                           <span className="text-xs font-bold text-[#CD1E1A] flex items-center gap-1">
                                                                                Biaya Mandiri
                                                                           </span>
                                                                           <span className="text-[9px] bg-red-50 px-1 py-0.5 rounded text-[#CD1E1A] font-bold">{plan.financing.mandiri?.percentage}</span>
                                                                      </div>
                                                                      <span className="text-[10px] text-gray-400">Dibayarkan di Indonesia</span>
                                                                      <span className="text-sm font-bold text-gray-800">{plan.financing.mandiri?.amount}</span>
                                                                 </div>

                                                                 {/* Divider with Note */}
                                                                 <div className="relative flex py-1 items-center">
                                                                      <div className="grow border-t border-gray-100"></div>
                                                                      <span className="shrink-0 px-2 text-[8px] text-gray-300 font-mono">+</span>
                                                                      <div className="grow border-t border-gray-100"></div>
                                                                 </div>

                                                                 {/* Loan */}
                                                                 <div className="flex flex-col gap-1">
                                                                      <div className="flex justify-between items-center">
                                                                           <span className="text-xs font-bold text-[#021231] flex items-center gap-1">
                                                                                Dana Bergulir
                                                                           </span>
                                                                           <span className="text-[9px] bg-blue-50 px-1 py-0.5 rounded text-[#021231] font-bold">{plan.financing.loan?.percentage}</span>
                                                                      </div>
                                                                      <span className="text-[10px] text-gray-400">Potong gaji (Jerman)</span>
                                                                      <span className="text-sm font-bold text-gray-800">{plan.financing.loan?.amount}</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </>
                                        )}

                                        {/* Plan Type: Exchange */}
                                        {plan.type === "exchange" && (
                                             <div className="grow flex flex-col">
                                                  <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100 mb-4 grow">
                                                       <h4 className="text-xs font-bold text-[#021231] mb-3 flex items-center gap-1">
                                                            <Globe size={14} /> Negara Tujuan
                                                       </h4>
                                                       <div className="space-y-2">
                                                            {plan.countries?.map((country, cIdx) => (
                                                                 <div key={cIdx} className="bg-white p-2 rounded-md shadow-sm border border-gray-100">
                                                                      <div className="flex items-center justify-between mb-0.5">
                                                                           <span className="font-bold text-xs text-[#CD1E1A]">{country.name}</span>
                                                                      </div>
                                                                      <p className="text-[10px] text-gray-600 leading-tight">{country.detail}</p>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>

                                                  <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 mb-4">
                                                       <span className="text-xs font-bold text-gray-700 block mb-1">Investasi Program</span>
                                                       <span className="text-[10px] text-gray-500">Available upon consultation</span>
                                                  </div>
                                             </div>
                                        )}

                                        {/* CTA Button */}
                                        <Link href={plan.link} className="mt-auto">
                                             <button className={`
                    w-full py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2
                    ${plan.highlight
                                                       ? 'bg-[#CD1E1A] text-white hover:bg-[#A31612] shadow-md hover:shadow-lg'
                                                       : 'bg-[#021231] text-white hover:bg-gray-800'}
                  `}>
                                                  Pelajari Detail <ArrowRight size={14} />
                                             </button>
                                        </Link>
                                   </div>
                              </motion.div>
                         ))}
                    </div>

                    {/* Global Footer Disclaimer */}
                    <div className="mt-16 bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-4xl mx-auto flex gap-4 items-start">
                         <div className="bg-blue-50 p-2 rounded-full shrink-0">
                              <Info size={20} className="text-[#021231]" />
                         </div>
                         <div>
                              <h4 className="text-sm font-bold text-[#021231] mb-1">Informasi Penting</h4>
                              <div className="text-xs text-gray-500 leading-relaxed space-y-1">
                                   <p>1. Biaya Mandiri mencakup persiapan bahasa, dokumen legalitas, dan administrasi di Indonesia.</p>
                                   <p>2. Pinjaman Bergulir adalah dukungan finansial yang dibayarkan setelah peserta mendapatkan penghasilan di negara tujuan (sistem potong gaji).</p>
                                   <p>3. Seluruh program legal dan dilindungi perjanjian kerja resmi.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
