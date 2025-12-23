"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
     AgenturTaunus,
     AnnaMaria,
     AupairAgentur,
     AupairMaria,
     FairPair,
     MultiKultur,
     Zubke,
     AgentAupair,
     AleduSprache,
     ApituGoExplore,
     AupairBerlin,
     AupariClick,
     AupairConnect,
     AupairConnexion,
     AupairOffice,
     AupairSociety,
     AupairVermittlung,
     AzubiSolution,
     BeriGermany,
     EuropairService,
     FeeRevee,
     Kulturist,
     LesEnfants,
     PmeFamilien,
     SolutionEt,
     SMKN2Gowa,
     SMKN3Gowa,
     STIEAmbarukmo,
     PoliteknikAmbon,
     PoliteknikNest,
     STIEPari,
     UnivDarulUlum,
     SMKN1Maros,
} from "@/assets";

const GERMAN_PARTNERS = [
     AgenturTaunus,
     AnnaMaria,
     AupairAgentur,
     AupairMaria,
     FairPair,
     MultiKultur,
     Zubke,
     AgentAupair,
     AleduSprache,
     ApituGoExplore,
     AupairBerlin,
     AupariClick,
     AupairConnect,
     AupairConnexion,
     AupairOffice,
     AupairSociety,
     AupairVermittlung,
     AzubiSolution,
     BeriGermany,
     EuropairService,
     FeeRevee,
     Kulturist,
     LesEnfants,
     PmeFamilien,
     SolutionEt,
];

const INDO_PARTNERS = [
     PoliteknikAmbon,
     PoliteknikNest,
     SMKN2Gowa,
     SMKN3Gowa,
     STIEAmbarukmo,
     STIEPari,
     UnivDarulUlum,
     SMKN1Maros,
];

export default function PartnerMarquee() {
     return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
               {/* German Partners */}
               <div className="flex flex-col gap-5 overflow-hidden bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between px-2">
                         <div className="flex items-center gap-3">
                              <Image
                                   src="https://flagcdn.com/w80/de.png"
                                   alt="German Flag"
                                   width={24}
                                   height={24}
                              />
                              <div>
                                   <h3 className="text-lg font-bold text-[#021231] leading-none">
                                        Mitra Jerman
                                   </h3>
                                   <p className="text-xs text-gray-500 font-medium text-left">
                                        German Partners
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="w-full h-px bg-gray-100"></div>
                    <Marquee items={GERMAN_PARTNERS} speed={100} />
               </div>

               {/* Indo Partners */}
               <div className="flex flex-col gap-5 overflow-hidden bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between px-2">
                         <div className="flex items-center gap-3">
                              <Image
                                   src="https://flagcdn.com/w80/id.png"
                                   alt="Indonesian Flag"
                                   width={24}
                                   height={24}
                              />
                              <div>
                                   <h3 className="text-lg font-bold text-[#021231] leading-none">
                                        Mitra Indonesia
                                   </h3>
                                   <p className="text-xs text-gray-500 font-medium text-left">
                                        Indonesia Partners
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="w-full h-px bg-gray-100"></div>
                    <Marquee items={INDO_PARTNERS} speed={30} direction="right" />
               </div>
          </div>
     );
}

function Marquee({
     items,
     speed = 20,
     direction = "left",
}: {
     items: StaticImageData[];
     speed?: number;
     direction?: "left" | "right";
}) {
     return (
          <div className="flex w-full overflow-hidden relative select-none">
               {/* Fade Gradients */}
               <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
               <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

               <motion.div
                    initial={{ x: direction === "left" ? 0 : "-50%" }}
                    animate={{ x: direction === "left" ? "-50%" : 0 }}
                    transition={{
                         duration: speed,
                         repeat: Infinity,
                         ease: "linear",
                    }}
                    className="flex gap-10 items-center shrink-0 min-w-full py-2"
               >
                    {/* Quadruple items to ensure seamless loop on wide screens */}
                    {[...items, ...items, ...items, ...items].map((logo, idx) => (
                         <div
                              key={idx}
                              className="w-28 h-12 relative flex items-center justify-center shrink-0 grayscale-0 hover:scale-110 transition-transform duration-300"
                         >
                              <Image
                                   src={logo}
                                   alt="Partner Logo"
                                   fill
                                   className="object-contain"
                                   sizes="120px"
                                   quality={50}
                              />
                         </div>
                    ))}
               </motion.div>
          </div>
     );
}
