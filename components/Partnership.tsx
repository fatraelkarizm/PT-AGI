"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
     Handshake,
     GraduationCap,
     TrendingUp,
     Building2,
     Users,
     Globe,
     ArrowRight,
     School,
     ChevronDown,
     BookOpen
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { GlobalUniversity, VocationalSchool } from "@/assets";

type PartnerType = 'campus' | 'school';

const PARTNER_CONTENT = {
     campus: {
          label: "Perguruan Tinggi / Universitas",
          headline: "Transformasi Menjadi World-Class University",
          subheadline: "Tingkatkan poin akreditasi institusi dan daya saing global alumni Anda melalui program karier internasional & pertukaran budaya yang terjamin.",
          description: "Mitra strategis bagi Universitas dan Sekolah Tinggi dalam membuka gerbang karier global bagi wisudawan.",
          stats: [
               { label: "Alumni Terserap", value: "500+", icon: Users },
               { label: "Universitas Mitra", value: "35+", icon: Building2 },
               { label: "Negara Tujuan", value: "4", icon: Globe },
          ],
          benefits: [
               {
                    title: "Peningkatan Akreditasi",
                    desc: "Poin plus untuk kriteria kerjasama internasional & serapan lulusan.",
                    icon: <TrendingUp size={24} className="text-white" />,
                    color: "bg-blue-600"
               },
               {
                    title: "Reputasi Global",
                    desc: "Branding kuat sebagai kampus pencetak talenta internasional.",
                    icon: <Globe size={24} className="text-white" />,
                    color: "bg-[#CD1E1A]"
               },
               {
                    title: "Kurikulum Internasional",
                    desc: "Adopsi standar kompetensi Jerman dalam pembelajaran.",
                    icon: <BookOpen size={24} className="text-white" />,
                    color: "bg-indigo-600"
               }
          ],
          ctaText: "Pelajari Kemitraan Kampus",
          ctaLink: "/kemitraan/kampus",
          image: GlobalUniversity
     },
     school: {
          label: "Sekolah (SMK / SMA)",
          headline: "Cetak Lulusan Vokasi Berstandar Jerman & Eropa",
          subheadline: "Realisasikan Bekerja Pasti dengan jalur pasti ke Jerman. Solusi nyata untuk masa depan siswa tanpa pengangguran.",
          description: "Program persiapan intensif dan penyaluran kerja yang dirancang khusus untuk kurikulum dan karakter siswa SMK.",
          stats: [
               { label: "Siswa Berangkat", value: "700+", icon: Users },
               { label: "SMK Mitra", value: "40+", icon: School },
               { label: "Bidang Keahlian", value: "15+", icon: BookOpen },
          ],
          benefits: [
               {
                    title: "Implementasi Bekerja Pasti",
                    desc: "Lulusan langsung Bekerja di Jerman sambil Melanjutkan pendidikan.",
                    icon: <GraduationCap size={24} className="text-white" />,
                    color: "bg-emerald-600"
               },
               {
                    title: "Keunggulan PPDB",
                    desc: "Daya tarik eksklusif untuk mendongkrak minat calon siswa baru.",
                    icon: <Users size={24} className="text-white" />,
                    color: "bg-orange-600"
               },
               {
                    title: "Sister School Germany",
                    desc: "Akses kerjasama langsung dengan institusi vokasi di Jerman.",
                    icon: <Handshake size={24} className="text-white" />,
                    color: "bg-blue-500"
               }
          ],
          ctaText: "Pelajari Kemitraan Sekolah",
          ctaLink: "/kemitraan/sekolah",
          image: VocationalSchool
     }
};

export default function Partnership() {
     const [activeTab, setActiveTab] = useState<PartnerType>('campus');
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const content = PARTNER_CONTENT[activeTab];

     return (
          <section className="py-8 bg-white relative overflow-hidden" id="partnership">

               {/* Background Decor */}
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

               <div className="container mx-auto px-4 md:px-6 relative z-10">

                    {/* Header & Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                         <div className="max-w-3xl">
                              <motion.div
                                   initial={{ opacity: 0, y: 10 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#CD1E1A] text-xs font-bold uppercase tracking-wider mb-4"
                              >
                                   <Handshake size={14} />
                                   Strategic Partnership
                              </motion.div>
                              <motion.h2
                                   initial={{ opacity: 0, y: 10 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.1 }}
                                   className="text-4xl md:text-5xl font-bold text-[#021231] leading-tight"
                              >
                                   Mitra Pendidikan
                                   <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CD1E1A] to-[#CD1E1A]"> Masa Depan</span>
                              </motion.h2>
                         </div>

                         {/* Dropdown / Switcher Design */}
                         <div className="relative z-20 w-full md:w-auto">
                              <label className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-wide">Pilih Institusi Anda</label>
                              <div className="relative">
                                   <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full md:w-auto bg-white border-2 border-[#021231] text-[#021231] p-4 rounded-xl flex items-center justify-between font-bold text-lg hover:shadow-lg transition-all"
                                   >
                                        <div className="flex items-center gap-3">
                                             {activeTab === 'campus' ? <Building2 className="text-[#CD1E1A]" /> : <School className="text-[#CD1E1A]" />}
                                             {content.label}
                                        </div>
                                        <ChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                   </button>

                                   <AnimatePresence>
                                        {isDropdownOpen && (
                                             <motion.div
                                                  initial={{ opacity: 0, y: -10 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  exit={{ opacity: 0, y: -10 }}
                                                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-30"
                                             >
                                                  <button
                                                       onClick={() => { setActiveTab('campus'); setIsDropdownOpen(false); }}
                                                       className={`w-full p-4 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${activeTab === 'campus' ? 'bg-blue-50 text-[#021231]' : 'text-gray-600'}`}
                                                  >
                                                       <Building2 size={20} /> Perguruan Tinggi
                                                  </button>
                                                  <button
                                                       onClick={() => { setActiveTab('school'); setIsDropdownOpen(false); }}
                                                       className={`w-full p-4 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${activeTab === 'school' ? 'bg-blue-50 text-[#021231]' : 'text-gray-600'}`}
                                                  >
                                                       <School size={20} /> Sekolah (SMK/SMA)
                                                  </button>
                                             </motion.div>
                                        )}
                                   </AnimatePresence>
                              </div>
                         </div>
                    </div>

                    {/* Dynamic Content Area */}
                    <AnimatePresence mode="wait">
                         <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                         >
                              {/* Hero Info */}
                              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12 relative overflow-hidden group">
                                   <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                        <div>
                                             <h3 className="text-2xl md:text-3xl font-bold text-[#021231] mb-4">
                                                  {content.headline}
                                             </h3>
                                             <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                                  {content.subheadline}
                                             </p>

                                             <div className="flex flex-wrap gap-4 mb-8">
                                                  {content.stats.map((stat, idx) => (
                                                       <div key={idx} className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#CD1E1A] shadow-sm">
                                                                 <stat.icon size={20} />
                                                            </div>
                                                            <div>
                                                                 <div className="text-lg font-bold text-[#021231]">{stat.value}</div>
                                                                 <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                                                            </div>
                                                       </div>
                                                  ))}
                                             </div>

                                             <div className="flex flex-col sm:flex-row gap-4">
                                                  <Link href={content.ctaLink} className="w-full sm:w-auto">
                                                       <button className="w-full sm:w-auto bg-[#CD1E1A] hover:bg-[#A31612] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-red-900/20 transition-all">
                                                            {content.ctaText} <ArrowRight size={20} />
                                                       </button>
                                                  </Link>
                                                  <Link href="https://wa.me/6285129791635?text=Halo%20Admin%20PT%20AGI,%20saya%20ingin%20konsultasi" target="_blank" className="w-full sm:w-auto">
                                                       <button className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-[#021231] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all" aria-description="Konsultasi Gratis">
                                                            Konsultasi Gratis
                                                       </button>
                                                  </Link>
                                             </div>
                                        </div>

                                        {/* Right Side Visual/Benefits */}
                                        <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end p-6 md:p-8">
                                             {/* Image Background */}
                                             <Image
                                                  src={content.image}
                                                  alt={content.label}
                                                  fill
                                                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                                             />
                                             <div className="absolute inset-0 bg-linear-to-t from-white/95 via-white/80 to-transparent md:bg-linear-to-l md:via-white/60 md:to-transparent" />
                                             <div className="absolute inset-0 bg-[#021231]/5" />

                                             <div className="relative z-10">
                                                  <h4 className="text-sm font-bold text-[#021231] uppercase tracking-wider mb-6 flex items-center gap-2">
                                                       <span className="w-8 h-1 bg-[#CD1E1A]"></span> Keuntungan Kemitraan
                                                  </h4>
                                                  <div className="space-y-3">
                                                       {content.benefits.map((benefit, idx) => (
                                                            <motion.div
                                                                 key={idx}
                                                                 initial={{ opacity: 0, x: 20 }}
                                                                 animate={{ opacity: 1, x: 0 }}
                                                                 transition={{ delay: idx * 0.1 + 0.2 }}
                                                                 className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/50 flex gap-4 items-center hover:bg-white hover:shadow-md transition-all"
                                                            >
                                                                 <div className={`shrink-0 w-10 h-10 rounded-lg ${benefit.color} flex items-center justify-center shadow-md text-white`}>
                                                                      {benefit.icon}
                                                                 </div>
                                                                 <div>
                                                                      <h5 className="font-bold text-[#021231] text-sm leading-tight">{benefit.title}</h5>
                                                                      <p className="text-[11px] text-gray-700 leading-tight mt-0.5">{benefit.desc}</p>
                                                                 </div>
                                                            </motion.div>
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>
                    </AnimatePresence>

                    {/* Footer/Trust Indicators */}
                    <div className="text-center">
                         <p className="text-sm text-gray-500 mb-6 font-medium">Dipercaya oleh institusi pendidikan terkemuka di Indonesia</p>
                         <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                              <Building2 size={32} />
                              <School size={32} />
                              <Globe size={32} />
                              <AwardBadge />
                         </div>
                    </div>

               </div>
          </section>
     );
}

function AwardBadge() {
     return (
          <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-[10px]">#1</div>
               <span className="font-bold text-gray-400">Trusted Agency</span>
          </div>
     )
}
