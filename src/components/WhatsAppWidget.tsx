"use client";

export default function WhatsAppWidget() {
  const primaryWhatsApp = "https://wa.me/919937157653?text=Hi%20Handloom%20Garden,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire.";
  const instagramUrl = "https://www.instagram.com/handloomgarden.puri/";

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[54px] flex flex-col items-center bg-[#F9F6F0]/85 backdrop-blur-md border border-[#1C1A17]/10 rounded-[30px] py-2 px-0 shadow-lg transition-all duration-300 hover:-translate-y-1 animate-glow-container">
      {/* WhatsApp Sticky CTA */}
      <a
        href={primaryWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[42px] h-[42px] rounded-full text-[#1C1A17]/80 hover:text-[#25D366] hover:bg-[#25D366]/10 active:scale-95 transition-all duration-300 relative group"
        aria-label="Inquire on WhatsApp"
      >
        <span className="absolute -left-40 bg-[#1C1A17] text-[#F9F6F0] border border-[#C2B280]/20 text-[10px] tracking-widest uppercase py-1.5 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block rounded-md shadow-md whitespace-nowrap">
          WhatsApp Inquiry
        </span>
        {/* Outlined WhatsApp SVG Logo as in TSCG website */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.777 1.218h.005c5.505 0 9.988-4.478 9.99-9.984a9.986 9.986 0 0 0 -9.993-9.862zm0 1.638c4.6 0 8.347 3.744 8.349 8.346a8.358 8.358 0 0 1 -8.353 8.243 8.33 8.33 0 0 1 -4.249-1.157l-.304-.18-3.159.829.843-3.081-.197-.314a8.332 8.332 0 0 1 -1.278-4.34c0-4.601 3.748-8.346 8.348-8.346zm-2.457 4.148c-.149 0-.399.055-.609.284-.21.23-.8.782-.8 1.908s.819 2.213.935 2.369c.115.156 1.611 2.46 3.903 3.45.545.235.97.375 1.3.48.548.174 1.047.15 1.442.09.44-.065 1.353-.553 1.543-1.087.19-.533.19-.991.134-1.087-.056-.096-.205-.152-.43-.266-.226-.114-1.332-.657-1.538-.732-.206-.076-.356-.114-.506.114-.15.228-.58.73-.711.88-.13.151-.26.17-.486.056-.226-.113-.956-.352-1.82-1.123-.674-.6-1.129-1.342-1.261-1.57-.132-.227-.014-.35.1-.462.103-.1.226-.26.339-.39.113-.13.15-.224.226-.374.075-.15.038-.28-.019-.394-.056-.114-.506-1.22-.693-1.67-.182-.438-.368-.378-.506-.385-.13-.006-.28-.008-.43-.008z" />
        </svg>
      </a>

      {/* Divider */}
      <div className="w-5 h-[1px] bg-[#1C1A17]/10 my-1"></div>

      {/* Instagram Sticky CTA */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[42px] h-[42px] rounded-full text-[#1C1A17]/80 hover:text-[#ee2a7b] hover:bg-[#ee2a7b]/10 active:scale-95 transition-all duration-300 relative group"
        aria-label="Visit us on Instagram"
      >
        <span className="absolute -left-40 bg-[#1C1A17] text-[#F9F6F0] border border-[#C2B280]/20 text-[10px] tracking-widest uppercase py-1.5 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block rounded-md shadow-md whitespace-nowrap">
          Instagram Profile
        </span>
        {/* Outlined Instagram SVG Logo */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
    </div>
  );
}
