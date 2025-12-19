"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
     { label: "Pembiayaan", href: "#pembiayaan" },
     { label: "Tentang Kami", href: "#tentang-kami" },
     { label: "Legalitas", href: "#legalitas" },
     { label: "FAQ", href: "#faq" },
     { label: "Kontak", href: "#kontak" },
];

const PROGRAMS = [
     { label: "Fast Track to Career (FTTC)", href: "#fttc" },
     { label: "Professional Worker in Germany (PWIG)", href: "#pwig" },
     { label: "Studi Vokasi & Training Industri", href: "#vokasi" },
     { label: "Culture Exchange (USA, Belgia, China)", href: "#exchange" },
];

export default function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [programDropdownOpen, setProgramDropdownOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 10);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <motion.nav
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.5 }}
               className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
               )}
          >
               <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                         <Image
                              src="/pt-agi.png"
                              alt="PT AGI Logo"
                              width={120} // Adjust based on aspect ratio
                              height={40}
                              className="h-10 w-auto object-contain"
                              priority
                         />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                         {/* Program Dropdown */}
                         <div
                              className="relative group"
                              onMouseEnter={() => setProgramDropdownOpen(true)}
                              onMouseLeave={() => setProgramDropdownOpen(false)}
                         >
                              <button className={cn("flex items-center gap-1 font-medium transition-colors hover:text-[#CD1E1A]", isScrolled ? "text-gray-800" : "text-white")}>
                                   Program
                                   <ChevronDown className="w-4 h-4" />
                              </button>
                              <AnimatePresence>
                                   {programDropdownOpen && (
                                        <motion.div
                                             initial={{ opacity: 0, y: 10 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             exit={{ opacity: 0, y: 10 }}
                                             transition={{ duration: 0.2 }}
                                             className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-2"
                                        >
                                             {PROGRAMS.map((program) => (
                                                  <Link
                                                       key={program.label}
                                                       href={program.href}
                                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#CD1E1A] transition-colors"
                                                  >
                                                       {program.label}
                                                  </Link>
                                             ))}
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>

                         {NAV_LINKS.map((link) => (
                              <Link
                                   key={link.label}
                                   href={link.href}
                                   className={cn(
                                        "font-medium transition-colors hover:text-[#CD1E1A]",
                                        isScrolled ? "text-gray-800" : "text-white"
                                   )}
                              >
                                   {link.label}
                              </Link>
                         ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                         <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-[#CD1E1A] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-red-500/30 transition-shadow"
                         >
                              Konsultasi Gratis
                         </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                         className={cn("lg:hidden p-2 rounded-lg", isScrolled ? "text-gray-800" : "text-white")}
                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                         {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
               </div>

               {/* Mobile Menu Overlay */}
               <AnimatePresence>
                    {mobileMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                         >
                              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                                   <div className="space-y-2">
                                        <div className="font-semibold text-gray-900 px-2">Program</div>
                                        {PROGRAMS.map((program) => (
                                             <Link
                                                  key={program.label}
                                                  href={program.href}
                                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-[#CD1E1A] hover:bg-gray-50 rounded-lg"
                                                  onClick={() => setMobileMenuOpen(false)}
                                             >
                                                  {program.label}
                                             </Link>
                                        ))}
                                   </div>
                                   <div className="border-t border-gray-100 my-2"></div>
                                   {NAV_LINKS.map((link) => (
                                        <Link
                                             key={link.label}
                                             href={link.href}
                                             className="px-2 font-medium text-gray-800 hover:text-[#CD1E1A]"
                                             onClick={() => setMobileMenuOpen(false)}
                                        >
                                             {link.label}
                                        </Link>
                                   ))}
                                   <button className="bg-[#CD1E1A] text-white w-full py-3 rounded-xl font-bold mt-4">
                                        Konsultasi Gratis
                                   </button>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </motion.nav>
     );
}
