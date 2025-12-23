"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PartnerMarquee from "./PartnerMarquee";
import {
     AGILogo,
     CulturalExchange,
     HotelPria,
     Nurse,
     TeamDoctor,
} from "@/assets";


const PROGRAMS = [
     {
          title: "Fast Track to Career (FTTC)",
          description: "Program jalur percepatan karier internasional bagi mahasiswa dan alumni D3/S1 Keperawatan serta S1 Kebidanan untuk membangun karier profesional di Jerman secara legal dan terarah.",
          image: Nurse,
          link: "/programs/fttc"
     },
     {
          title: "Professional Worker in Germany",
          description: "Professional Worker in Germany adalah program penempatan kerja internasional bagi tenaga kerja profesional dan lulusan siap kerja.",
          image: TeamDoctor,
          link: "/programs/pwig"
     },
     {
          title: "Studi Vokasi & Training Industri",
          description: "Studi Vokasi & Training Industri di Jerman adalah program pendidikan dan pelatihan berbasis praktik bagi peserta.",
          image: HotelPria,
          link: "/programs/vokasi"
     },
     {
          title: "Culture Exchange",
          description: "Pertukaran budaya ke USA, Belgia, dan China untuk pengalaman internasional.",
          image: CulturalExchange,
          link: "/programs/exchange"
     }
];

export default function Programs() {
     return (
          <section className=" bg-white">
               <div className="container mx-auto px-4 md:px-6 py-4">

                    {/* Business Partners */}
                    <div className="mb-24 text-center">
                         <h2 className="text-xl font-bold tracking-widest text-[#CD1E1A] uppercase mb-8">
                              Didukung Oleh Mitra Terpercaya
                         </h2>
                         <PartnerMarquee />
                    </div>

                    {/* At a Glance Section */}
                    <div id="about-preview" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
                         <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                              <Image
                                   src={AGILogo}
                                   alt="Team at a glance"
                                   fill
                                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                         </div>
                         <div className="space-y-6">
                              <h2 className="text-3xl md:text-4xl font-bold text-[#021231]">
                                   PT Akselerasi Global Indonesia
                              </h2>
                              <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                   PT AGI Adalah bagian dari PT YAIJ Group. Sebuah perusahaan yang sudah berdiri sejak tahun 2013, menjadi agen terbesar di Indonesia yang telah berbadan hukum resmi dan menjadi satu-satunya lembaga yang tergabung di Asosiasi Internasional (IAPA).
                              </p>
                              <ul className="space-y-3">
                                   {[
                                        "Legalitas & Keamanan Terjamin",
                                        "Kurikulum Standar Internasional",
                                        "Jaringan Partner Global Luas"
                                   ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                             <div className="w-6 h-6 rounded-full bg-red-50 text-[#CD1E1A] flex items-center justify-center text-xs">✓</div>
                                             {item}
                                        </li>
                                   ))}
                              </ul>
                              <Link href="/about" className="inline-flex items-center gap-2 text-[#CD1E1A] font-bold hover:gap-3 transition-all">
                                   Pelajari Lebih Lanjut <ArrowRight size={18} />
                              </Link>
                         </div>
                    </div>

                    {/* Our Programs Grid */}
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-[#021231]">
                              Program Unggulan Kami
                         </h2>
                         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                              Pilih jalur yang sesuai dengan impian masa depanmu, mulai dari pendidikan vokasi hingga karier profesional.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="programs-grid">
                         {PROGRAMS.map((program, idx) => (
                              <Link key={idx} href={program.link} className="block h-full">
                                   <motion.div
                                        id={program.link.replace("#", "")}
                                        whileHover={{ y: -10 }}
                                        className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full scroll-mt-24 cursor-pointer"
                                   >
                                        <div className="relative h-48 overflow-hidden">
                                             <Image
                                                  src={program.image}
                                                  alt={program.title}
                                                  fill
                                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                             />
                                             <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                                             <div className="absolute bottom-4 left-4 right-4">
                                                  <h3 className="text-white font-bold text-lg leading-tight">{program.title}</h3>
                                             </div>
                                        </div>

                                        <div className="p-6 flex flex-col grow">
                                             <p className="text-sm text-gray-600 mb-6 grow line-clamp-3">
                                                  {program.description}
                                             </p>
                                             <div className="flex justify-between items-center mt-auto">
                                                  <span className="text-xs font-semibold text-[#021231] uppercase tracking-wider">Detail Program</span>
                                                  <div className="w-8 h-8 rounded-full bg-red-50 text-[#CD1E1A] flex items-center justify-center group-hover:bg-[#CD1E1A] group-hover:text-white transition-colors">
                                                       <ArrowRight size={14} />
                                                  </div>
                                             </div>
                                        </div>
                                   </motion.div>
                              </Link>
                         ))}
                    </div>

               </div>
          </section>
     );
}