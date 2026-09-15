import { ImageResponse } from "next/og";
import { storageUrl } from "@/lib/site";

export const alt = "Handloom Garden, Puri: authentic Odisha handloom sarees at Swargadwar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded social share card: cream panel with the tagline beside a premium saree. */
export default async function OpengraphImage() {
  // JPEG/PNG copies (see scripts/migrate-to-supabase.ts): the OG renderer does not read WebP.
  const saree = storageUrl("og/og-saree.jpg");
  const logo = storageUrl("og/og-logo.png");

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#fdf8f0" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 760, padding: "64px 72px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={260} height={111} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 68, lineHeight: 1.05, color: "#1c1a17", letterSpacing: -1.5 }}>Puri&apos;s home of</div>
            <div style={{ fontSize: 68, lineHeight: 1.05, color: "#8b1a2b", fontStyle: "italic", letterSpacing: -1.5 }}>authentic handloom</div>
            <div style={{ marginTop: 28, fontSize: 26, color: "#4d463f" }}>Sambalpuri · Bomkai · Patachitra · Ikat</div>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#86671b", letterSpacing: 3 }}>SILK MARK CERTIFIED · SWARGADWAR, PURI</div>
        </div>
        <div style={{ display: "flex", flex: 1, background: "#3d0b14", padding: "40px 40px 0 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={saree} width={400} height={590} alt="" style={{ objectFit: "cover", objectPosition: "top", borderTopLeftRadius: 200, borderTopRightRadius: 200 }} />
        </div>
      </div>
    ),
    size,
  );
}
