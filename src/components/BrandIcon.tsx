import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

const ICONS = { whatsapp: siWhatsapp, instagram: siInstagram, facebook: siFacebook } as const;

/** Official brand glyphs from Simple Icons, rendered in currentColor. */
export default function BrandIcon({ name, size = 18, className }: { name: keyof typeof ICONS; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className={className}>
      <path d={ICONS[name].path} />
    </svg>
  );
}
