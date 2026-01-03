"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [isSuccess, setIsSuccess] = useState(false);
     const [error, setError] = useState<string | null>(null);

     async function handleSubmit(e: FormEvent<HTMLFormElement>) {
          e.preventDefault();
          setIsSubmitting(true);
          setError(null);

          const formData = new FormData(e.currentTarget);
          try {
               const result = await sendContactEmail(formData);
               if (result.success) {
                    setIsSuccess(true);
               } else {
                    setError(result.error || "Terjadi kesalahan saat mengirim pesan.");
               }
          } catch (err) {
               setError("Terjadi kesalahan sistem. Silakan coba lagi.");
          } finally {
               setIsSubmitting(false);
          }
     }
    

     return (
          <section
               id="contact"
               className="py-20 bg-[#021231] text-white overflow-hidden relative"
          >
               {/* Background pattern */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CD1E1A] rounded-full opacity-5 blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

               <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         {/* LEFT CONTENT */}
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
                                   Hubungi kami untuk konsultasi gratis mengenai program yang sesuai
                                   dengan kualifikasi dan impian Anda.
                              </p>

                              <div className="space-y-6">
                                   <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#CD1E1A] transition-colors">
                                             <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                             <h3 className="font-bold text-lg mb-1">Kantor Pusat</h3>
                                             <p className="text-gray-400 group-hover:text-white transition-colors">
                                                  Jl. Gajah No 83, Cimahi Selatan, Bandung, 40531
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4 group">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#CD1E1A] transition-colors">
                                             <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                             <h3 className="font-bold text-lg mb-1">Email</h3>
                                             <p className="text-gray-400 group-hover:text-white transition-colors">
                                                  ptagi46@gmail.com
                                             </p>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4 group">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#CD1E1A] transition-colors">
                                             <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                             <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                             <p className="text-gray-400 group-hover:text-white transition-colors">
                                                  +62 823-4275-6169
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>

                         {/* RIGHT FORM */}
                         <motion.div
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl"
                         >
                              <h3 className="text-2xl font-bold text-[#021231] mb-6">
                                   Kirim Pesan
                              </h3>

                              {isSuccess ? (
                                   <div className="text-center py-12">
                                        {/* Change the color of the icon to red */}
                                        <div className="w-20 h-20  bg-red-100 text-[#CD1E1A] rounded-full flex items-center justify-center mx-auto mb-6">
                                             <Mail className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#021231] mb-2">
                                             Pesan Terkirim!
                                        </h3>
                                        <p className="text-gray-600 mb-8">
                                             Terima kasih telah menghubungi kami. Kami akan segera
                                             membalas pesan Anda.
                                        </p>
                                        <button
                                             onClick={() => setIsSuccess(false)}
                                             className="px-8 py-3 bg-[#CD1E1A] text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-colors"
                                        >
                                             Kirim Pesan Lain
                                        </button>
                                   </div>
                              ) : (
                                   <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                   >
                                        <div className="grid grid-cols-2 gap-4">
                                             <div className="space-y-2">
                                                  <label className="text-sm font-semibold text-gray-600">
                                                       Nama Depan
                                                  </label>
                                                  <input
                                                       name="firstName"
                                                       type="text"
                                                       placeholder="John"
                                                       required
                                                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]"
                                                  />
                                             </div>

                                             <div className="space-y-2">
                                                  <label className="text-sm font-semibold text-gray-600">
                                                       Nama Belakang
                                                  </label>
                                                  <input
                                                       name="lastName"
                                                       type="text"
                                                       placeholder="Doe"
                                                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]"
                                                  />
                                             </div>
                                        </div>

                                        <div className="space-y-2">
                                             <label className="text-sm font-semibold text-gray-600">
                                                  Email
                                             </label>
                                             <input
                                                  name="email"
                                                  type="email"
                                                  placeholder="john@example.com"
                                                  required
                                                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]"
                                             />
                                        </div>

                                        <div className="space-y-2">
                                             <label className="text-sm font-semibold text-gray-600">
                                                  Pesan
                                             </label>
                                             <textarea
                                                  name="message"
                                                  rows={4}
                                                  placeholder="Tulis pesan Anda di sini..."
                                                  required
                                                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#021231] focus:outline-none focus:ring-2 focus:ring-[#CD1E1A]/20 focus:border-[#CD1E1A]"
                                             ></textarea>
                                        </div>

                                        {error && (
                                             <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                                                  {error}
                                             </div>
                                        )}

                                        <button
                                             type="submit"
                                             disabled={isSubmitting}
                                             className="w-full py-4 bg-[#CD1E1A] text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                        >
                                             {isSubmitting ? (
                                                  <>
                                                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                       Mengirim...
                                                  </>
                                             ) : (
                                                  "Kirim Pesan"
                                             )}
                                        </button>
                                   </form>
                              )}
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}