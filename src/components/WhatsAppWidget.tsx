"use client";

export default function WhatsAppWidget() {
  const primaryWhatsApp = "https://wa.me/919937937653?text=Hi%20Handloom%20Garden,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire.";
  const instagramUrl = "https://www.instagram.com/handloomgarden.puri/";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2 sm:gap-3">
      {/* Chat with us label */}
      <span className="font-sans text-[8px] tracking-widest uppercase text-charcoal/40 hidden md:block">
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <a
        href={primaryWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="sonar-wave sonar-wave-whatsapp" />
        <span className="absolute -left-32 bg-charcoal text-cream text-[10px] tracking-wider py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block rounded-lg shadow-md whitespace-nowrap">
          WhatsApp
        </span>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.777 1.218h.005c5.505 0 9.988-4.478 9.99-9.984a9.986 9.986 0 0 0 -9.993-9.862zm0 1.638c4.6 0 8.347 3.744 8.349 8.346a8.358 8.358 0 0 1 -8.353 8.243 8.33 8.33 0 0 1 -4.249-1.157l-.304-.18-3.159.829.843-3.081-.197-.314a8.332 8.332 0 0 1 -1.278-4.34c0-4.601 3.748-8.346 8.348-8.346zm-2.457 4.148c-.149 0-.399.055-.609.284-.21.23-.8.782-.8 1.908s.819 2.213.935 2.369c.115.156 1.611 2.46 3.903 3.45.545.235.97.375 1.3.48.548.174 1.047.15 1.442.09.44-.065 1.353-.553 1.543-1.087.19-.533.19-.991.134-1.087-.056-.096-.205-.152-.43-.266-.226-.114-1.332-.657-1.538-.732-.206-.076-.356-.114-.506.114-.15.228-.58.73-.711.88-.13.151-.26.17-.486.056-.226-.113-.956-.352-1.82-1.123-.674-.6-1.129-1.342-1.261-1.57-.132-.227-.014-.35.1-.462.103-.1.226-.26.339-.39.113-.13.15-.224.226-.374.075-.15.038-.28-.019-.394-.056-.114-.506-1.22-.693-1.67-.182-.438-.368-.378-.506-.385-.13-.006-.28-.008-.43-.008z" />
        </svg>
      </a>

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Follow on Instagram"
      >
        <span className="sonar-wave sonar-wave-instagram" />
        <span className="absolute -left-32 bg-charcoal text-cream text-[10px] tracking-wider py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block rounded-lg shadow-md whitespace-nowrap">
          Instagram
        </span>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
    </div>
  );
}
