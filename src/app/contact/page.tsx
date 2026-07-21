import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact & Showroom | Puri Handloom Garden",
  description: "Visit our showroom at Swargadwar Square, Puri, Odisha. Send us an inquiry for sarees, kurtis, and home textiles.",
};

export default function ContactPage() {
  const primaryWhatsApp = "https://wa.me/919937937653?text=Hi%20Handloom%20Garden,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire.";
  const alternateWhatsApp = "https://wa.me/919861900000?text=Hi%20Rajesh,%20I%20have%20an%20enquiry.";
  const landlineCall = "tel:06752220037";
  const emailMailto = "mailto:rajeshmullick.puri@gmail.com";

  return (
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col">
      <Header />

      {/* Main Content Area */}
      <section className="relative pt-16 pb-24 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Showroom details & Map */}
          <ScrollReveal className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-maroon font-bold mb-3">
              Location &amp; Contact
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight mb-6">
              Our Puri{" "}
              <span className="italic text-maroon">Showroom</span>.
            </h1>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-maroon shrink-0 mt-1" />
                <div>
                  <span className="font-sans text-[10px] text-charcoal/40 tracking-widest block uppercase">Physical Address</span>
                  <span className="font-sans text-sm text-charcoal mt-1 block">
                    Swargadwar Square, Bharath Sevashram Marg, Puri, Odisha
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Phone size={14} className="text-maroon shrink-0 mt-1" />
                  <div>
                    <span className="font-sans text-[10px] text-charcoal/40 tracking-widest block uppercase">Landline</span>
                    <a href={landlineCall} className="font-sans text-sm text-charcoal mt-1 block hover:text-maroon transition-colors">
                      06752-220037
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={14} className="text-maroon shrink-0 mt-1" />
                  <div>
                    <span className="font-sans text-[10px] text-charcoal/40 tracking-widest block uppercase">Email</span>
                    <a href={emailMailto} className="font-sans text-xs text-charcoal mt-1 block hover:text-maroon transition-colors truncate">
                      rajeshmullick.puri@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={primaryWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-maroon flex-1 justify-center text-center"
                >
                  Primary WhatsApp
                </a>
                <a
                  href={alternateWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-maroon flex-1 justify-center text-center"
                >
                  Weaver Relations
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full">
              <div className="border border-charcoal/10 aspect-[4/3] sm:aspect-video w-full bg-cream-dark relative overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.838501258674!2d85.81665427606399!3d20.182470781263593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c3fb45b5db3b%3A0xe54e6063b51b32d!2sSwargadwar%20Rd%2C%20Puri%2C%20Odisha!5e0!3m2!1sen!2sin!4v1719380000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Puri Handloom Garden Location Map"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal delay={100} id="inquiry" className="flex flex-col justify-center">
            <div className="bg-maroon text-cream p-8 md:p-12 rounded-xl relative overflow-hidden shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3 block">
                Send an Inquiry
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-8">
                Ask About a{" "}
                <span className="italic text-gold">Product</span>
              </h2>

              <form action="https://formspree.io/f/rajeshmullick.puri@gmail.com" method="POST" className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-base text-white placeholder-white/40 focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Contact Number"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-base text-white placeholder-white/40 focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-base text-white placeholder-white/40 focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                  />
                </div>

                <div>
                  <select
                    name="product_interest"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-white/20 py-4 text-base text-white/70 focus:outline-none focus:border-gold transition-all duration-300 rounded-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-maroon-dark text-white">
                      Product Category Interest
                    </option>
                    <option value="Sarees" className="bg-maroon-dark text-white">Sarees (Sambalpuri, Bomkai, Silk)</option>
                    <option value="Kurtis" className="bg-maroon-dark text-white">Kurtis &amp; Ready-to-Wear</option>
                    <option value="Bed Covers" className="bg-maroon-dark text-white">Bed Covers &amp; Home Textiles</option>
                    <option value="Dress Materials" className="bg-maroon-dark text-white">Dress Materials</option>
                    <option value="Scarves" className="bg-maroon-dark text-white">Dupatta, Stoles &amp; Scarves</option>
                    <option value="Custom" className="bg-maroon-dark text-white">Custom Weaves</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe what you are looking for..."
                    className="w-full bg-transparent border-b border-white/20 py-4 text-base text-white placeholder-white/40 focus:outline-none focus:border-gold transition-all duration-300 rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-charcoal py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold-light transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  Send Inquiry
                  <ArrowRight size={16} />
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
