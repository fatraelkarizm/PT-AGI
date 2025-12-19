"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

export default function Contact() {
     return (
          <section id="contact" className="py-20 bg-[#021231] text-white overflow-hidden relative">
               {/* Background pattern */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CD1E1A] rounded-full opacity-5 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

               <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                   Siap Memulai Karier <br />
                                   <span className="text-[#CD1E1A]">Internasional Anda?</span>
                              </h2>
                              <p className="text-gray-300 text-lg mb-10 max-w-md">
                                   Hubungi kami untuk konsultasi gratis mengenai program yang sesuai dengan kualifikasi dan impian Anda.
                              </p>

                              <div className="space-y-6">
                                   <div className="flex items-start gap-4 group cursor-pointer">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#CD1E1A] transition-colors">
                                             <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                             <h4 className="font-bold text-lg mb-1">Kantor Pusat</h4>
                                             <p className="text-gray-400 group-hover:text-white transition-colors">
                                                  Jl. Contoh Raya No. 123, Jakarta Selatan,<br />
                                                  Indonesia 12345
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#CD1E1A] transition-colors">
                                             <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                             <h4 className="font-bold text-lg mb-1">Email</h4>
                                             <p className="text-gray-400 group-hover:text-white transition-colors">info@pt-agi.com</p>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#CD1E1A] transition-colors">
                                             <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                             <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                                             <p className="text-gray-400 group-hover:text-white transition-colors">+62 812-3456-7890</p>
                                        </div>
                                   </div>
                              </div>

                              <div className="flex gap-4 mt-10">
                                   {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                                        <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#CD1E1A] transition-colors">
                                             <Icon className="w-5 h-5 text-white" />
                                        </a>
                                   ))}
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl"
                         >
                              <h3 className="text-2xl font-bold text-[#021231] mb-6">Kirim Pesan</h3>
                              <form className="space-y-4">
                                   <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                             <label className="text-sm font-semibold text-gray-600">Nama Depan</label>
                                             <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                             <label className="text-sm font-semibold text-gray-600">Nama Belakang</label>
                                             <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]" placeholder="Doe" />
                                        </div>
                                   </div>

                                   <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-600">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]" placeholder="john@example.com" />
                                   </div>

                                   <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-600">Pesan</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]" placeholder="Tulis pesan Anda di sini..."></textarea>
                                   </div>

                                   <button type="submit" className="w-full py-4 bg-[#CD1E1A] text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-colors">
                                        Kirim Pesan
                                   </button>
                              </form>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
