import { Phone, Mail, Compass, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentalDivider from "@/components/OrnamentalDivider";

export const metadata = {
  title: "Contact & Showroom | Puri Handloom Garden",
  description: "Visit our showroom at Swargadwar Square, Puri, Odisha. Send us an inquiry for sarees, kurtis, and home textiles.",
};

export default function ContactPage() {
  const primaryWhatsApp = "https://wa.me/919937157653?text=Hi%20Handloom%20Garden,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire.";
  const alternateWhatsApp = "https://wa.me/919861900000?text=Hi%20Rajesh,%20I%20have%20an%20enquiry.";
  const landlineCall = "tel:06752220037";
  const emailMailto = "mailto:rajeshmullick.puri@gmail.com";

  return (
    <div className="relative min-h-screen bg-[#F9F6F0] text-[#1C1A17] flex flex-col selection:bg-[#C2B280] selection:text-[#1C1A17] bg-grid-dots">
      <Header />

      <OrnamentalDivider className="mt-8" />

      {/* Main Content Area */}
      <section className="relative pt-12 pb-24 px-6 md:px-12 lg:px-24 border-b border-[#1C1A17]/5 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Showroom details & Map */}
          <ScrollReveal className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold mb-4 block">
                LOCATION &amp; CONTACT
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1C1A17] leading-tight mb-6 font-normal uppercase">
                Our Puri <span className="text-[#C2B280] font-medium italic">Showroom</span>.
              </h1>
              
              <div className="space-y-6 mb-12">
                <div>
                  <span className="font-sans text-[9px] text-[#1C1A17]/40 tracking-widest block uppercase">Physical Address</span>
                  <span className="font-sans text-xs md:text-sm text-[#1C1A17] mt-1 block leading-relaxed">
                    Swargadwar Square, Bharath Sevashram Marg, Puri, Odisha
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-sans text-[9px] text-[#1C1A17]/40 tracking-widest block uppercase">Primary Landline</span>
                    <a href={landlineCall} className="font-serif text-xs md:text-sm text-[#1C1A17] mt-1 block hover:text-[#C2B280] transition-colors">
                      06752-220037
                    </a>
                  </div>
                  <div>
                    <span className="font-sans text-[9px] text-[#1C1A17]/40 tracking-widest block uppercase">Email Address</span>
                    <a href={emailMailto} className="font-serif text-xs md:text-sm text-[#1C1A17] mt-1 block hover:text-[#C2B280] transition-colors truncate">
                      rajeshmullick.puri@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-sans text-[9px] text-[#1C1A17]/40 tracking-widest block uppercase">Direct Channels</span>
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <a
                      href={primaryWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between border border-[#1C1A17]/10 bg-transparent text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#F9F6F0] px-4 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex-grow text-center"
                    >
                      <span>Primary WhatsApp</span>
                      <ArrowUpRight size={10} />
                    </a>
                    <a
                      href={alternateWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between border border-[#1C1A17]/10 bg-transparent text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#F9F6F0] px-4 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex-grow text-center"
                    >
                      <span>Weaver Relations</span>
                      <ArrowUpRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full">
              <div className="border border-[#1C1A17]/10 aspect-video w-full bg-neutral-100 relative overflow-hidden rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.838501258674!2d85.81665427606399!3d20.182470781263593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c3fb45b5db3b%3A0xe54e6063b51b32d!2sSwargadwar%20Rd%2C%20Puri%2C%20Odisha!5e0!3m2!1sen!2sin!4v1719380000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Puri Handloom Garden Location Map"
                ></iframe>
              </div>
              <span className="mt-4 font-sans text-[8px] text-[#1C1A17]/40 tracking-wider flex items-center gap-1.5 justify-center">
                <Compass size={10} />
                SWARGADWAR, PURI
              </span>
            </div>

          </ScrollReveal>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal delay={100} id="inquiry" className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#1C1A17] text-[#F9F6F0] p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold mb-4 block">
                SEND AN INQUIRY
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#F9F6F0] leading-tight mb-8 font-normal uppercase">
                Ask About a <span className="text-[#C2B280] font-medium italic">Product</span>
              </h2>

              <form action="https://formspree.io/f/rajeshmullick.puri@gmail.com" method="POST" className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-4 text-xs text-[#F9F6F0] placeholder-[#F9F6F0]/40 focus:outline-none focus:border-[#C2B280] transition-all duration-300 rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Contact Number"
                      className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-4 text-xs text-[#F9F6F0] placeholder-[#F9F6F0]/40 focus:outline-none focus:border-[#C2B280] transition-all duration-300 rounded-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-4 text-xs text-[#F9F6F0] placeholder-[#F9F6F0]/40 focus:outline-none focus:border-[#C2B280] transition-all duration-300 rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="product_interest"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-4 text-xs text-[#F9F6F0]/70 focus:outline-none focus:border-[#C2B280] transition-all duration-300 rounded-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1C1A17] text-[#F9F6F0]">
                      Product Category Interest
                    </option>
                    <option value="Sarees (Sambalpuri, Bomkai, Silk)" className="bg-[#1C1A17] text-[#F9F6F0]">Sarees (Sambalpuri, Bomkai, Silk)</option>
                    <option value="Kurtis & Ready-to-Wear" className="bg-[#1C1A17] text-[#F9F6F0]">Kurtis &amp; Ready-to-Wear</option>
                    <option value="Bed Covers & Home Textiles" className="bg-[#1C1A17] text-[#F9F6F0]">Bed Covers &amp; Home Textiles</option>
                    <option value="Dress Materials" className="bg-[#1C1A17] text-[#F9F6F0]">Dress Materials</option>
                    <option value="Dupatta, Stoles & Scarves" className="bg-[#1C1A17] text-[#F9F6F0]">Dupatta, Stoles &amp; Scarves</option>
                    <option value="Custom Weaves" className="bg-[#1C1A17] text-[#F9F6F0]">Custom Weaves</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe what you are looking for (size, pattern, colors)..."
                    className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-4 text-xs text-[#F9F6F0] placeholder-[#F9F6F0]/40 focus:outline-none focus:border-[#C2B280] transition-all duration-300 rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-[#C2B280] bg-[#C2B280] text-[#1C1A17] py-4 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-transparent hover:text-[#C2B280] transition-all duration-300 cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
