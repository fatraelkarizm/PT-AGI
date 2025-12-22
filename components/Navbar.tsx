"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_LINKS_RIGHT, PROGRAMS, PARTNERSHIPS } from "@/constants/navbar";
import { AGILogo } from "@/assets";

export default function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
     const [partnershipDropdownOpen, setPartnershipDropdownOpen] = useState(false);

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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
                    isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
               )}
          >
               <div className="container mx-auto px-4 md:px-6 flex items-center justify-between ">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 ">
                         <Image
                              src={AGILogo.src}
                              alt="PT AGI Logo"
                              width={120}
                              height={40}
                              className="h-10 w-auto object-contain border rounded-full"
                              priority

                         />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                         {NAV_LINKS.map((link) => (
                              <Link
                                   key={link.label}
                                   href={link.href}
                                   className={cn(
                                        "font-medium transition-colors hover:text-[#CD1E1A]",
                                        isScrolled ? "text-black" : "text-black"
                                   )}
                              >
                                   {link.label}
                              </Link>
                         ))}

                         {/* Program Dropdown */}
                         <div
                              className="relative group"
                              onMouseEnter={() => setProgramDropdownOpen(true)}
                              onMouseLeave={() => setProgramDropdownOpen(false)}
                         >
                              <button className={cn("flex items-center gap-1 font-medium transition-colors hover:text-[#CD1E1A]", isScrolled ? "text-black" : "text-black")}>
                                   Program Kami
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
                                                       className="block px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-[#CD1E1A] transition-colors"
                                                  >
                                                       {program.label}
                                                  </Link>
                                             ))}
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>

                         {/* Partnership Dropdown */}
                         <div
                              className="relative group"
                              onMouseEnter={() => setPartnershipDropdownOpen(true)}
                              onMouseLeave={() => setPartnershipDropdownOpen(false)}
                         >
                              <button className={cn("flex items-center gap-1 font-medium transition-colors hover:text-[#CD1E1A]", isScrolled ? "text-black" : "text-black")}>
                                   Kemitraan
                                   <ChevronDown className="w-4 h-4" />
                              </button>
                              <AnimatePresence>
                                   {partnershipDropdownOpen && (
                                        <motion.div
                                             initial={{ opacity: 0, y: 10 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             exit={{ opacity: 0, y: 10 }}
                                             transition={{ duration: 0.2 }}
                                             className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-2"
                                        >
                                             {PARTNERSHIPS.map((partner) => (
                                                  <Link
                                                       key={partner.label}
                                                       href={partner.href}
                                                       className="block px-4 py-2 text-sm text-black hover:bg-gray-50 hover:text-[#CD1E1A] transition-colors"
                                                  >
                                                       {partner.label}
                                                  </Link>
                                             ))}
                                        </motion.div>
                                   )}
                              </AnimatePresence>
                         </div>

                         {NAV_LINKS_RIGHT.map((link) => (
                              <Link
                                   key={link.label}
                                   href={link.href}
                                   className={cn(
                                        "font-medium transition-colors hover:text-[#CD1E1A]",
                                        isScrolled ? "text-black" : "text-black"
                                   )}
                              >
                                   {link.label}
                              </Link>
                         ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                         <Link
                              href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20ingin%20konsultasi"
                              target="_blank"
                         >
                              <motion.button
                                   whileHover={{ scale: 1.05 }}
                                   whileTap={{ scale: 0.95 }}
                                   className="bg-[#CD1E1A] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-red-500/30 transition-shadow"
                              >
                                   Konsultasi Gratis
                              </motion.button>
                         </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                         className={cn("lg:hidden p-2 rounded-lg", isScrolled ? "text-black" : "text-black")}
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
                              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden "
                         >
                              <div className="container mx-auto px-4 py-4 flex flex-col gap-4 ">
                                   {NAV_LINKS.map((link) => (
                                        <Link
                                             key={link.label}
                                             href={link.href}
                                             className="px-2 font-bold text-black hover:text-[#CD1E1A]"
                                             onClick={() => setMobileMenuOpen(false)}
                                        >
                                             {link.label}
                                        </Link>
                                   ))}

                                   <div className="space-y-2 pt-2 border-t border-gray-50">
                                        <div className="font-bold text-black px-2">Program</div>
                                        {PROGRAMS.map((program) => (
                                             <Link
                                                  key={program.label}
                                                  href={program.href}
                                                  className="block px-4 py-2 text-sm text-black hover:text-[#CD1E1A] hover:bg-gray-50 rounded-lg"
                                                  onClick={() => setMobileMenuOpen(false)}
                                             >
                                                  {program.label}
                                             </Link>
                                        ))}
                                   </div>

                                   <div className="space-y-2 pt-2 border-t border-gray-50">
                                        <div className="font-semibold text-black px-2">Kemitraan</div>
                                        {PARTNERSHIPS.map((partner) => (
                                             <Link
                                                  key={partner.label}
                                                  href={partner.href}
                                                  className="block px-4 py-2 text-sm text-black hover:text-[#CD1E1A] hover:bg-gray-50 rounded-lg"
                                                  onClick={() => setMobileMenuOpen(false)}
                                             >
                                                  {partner.label}
                                             </Link>
                                        ))}
                                   </div>

                                   <div className="border-t border-gray-100 my-2"></div>

                                   {NAV_LINKS_RIGHT.map((link) => (
                                        <Link
                                             key={link.label}
                                             href={link.href}
                                             className="px-2 font-medium text-black hover:text-[#CD1E1A]"
                                             onClick={() => setMobileMenuOpen(false)}
                                        >
                                             {link.label}
                                        </Link>
                                   ))}
                                   <Link
                                        href="https://wa.me/6282342756169?text=Halo%20Admin%20PT%20AGI,%20saya%20ingin%20konsultasi"
                                        target="_blank"
                                        className="block w-full"
                                   >
                                        <button className="bg-[#CD1E1A] text-white w-full py-3 rounded-xl font-bold mt-4">
                                             Konsultasi Gratis
                                        </button>
                                   </Link>
                              </div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </motion.nav>
     );
}
