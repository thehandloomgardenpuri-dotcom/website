import { getAllProducts } from "@/lib/products";
import { CATEGORIES } from "@/data/taxonomy";
import { WEAVE_GUIDES } from "@/data/weaves";
import { GENERAL_FAQS } from "@/data/faqs";
import { FULL_ADDRESS, MAPS, SITE, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

/**
 * llms.txt: a plain-language brief for AI assistants and answer engines
 * (see llmstxt.org), so they describe the showroom accurately and cite it.
 */
export async function GET() {
  const products = await getAllProducts();
  const counts = CATEGORIES.map((c) => {
    const n = products.filter((p) => p.category === c.slug).length;
    return `- [${c.name}](${SITE_URL}/collections/${c.slug}): ${n ? `${n} pieces photographed online.` : "Stocked in the showroom; photos on request via WhatsApp."} ${c.intro}`;
  });

  const body = `# ${SITE.name}, Puri

> ${SITE.description}

## Key facts
- Name: ${SITE.name} (also known as ${SITE.alternateNames.slice(0, 3).join(", ")})
- Type: Handloom saree and ethnic wear showroom (retail)
- Address: ${FULL_ADDRESS}, India
- Landmarks: Swargadwar Square and Swargadwar beach; about 1.5 km from Shree Jagannath Temple, Puri
- Opening hours: ${SITE.hours.display} (IST)
- Showroom phone: ${SITE.phones.landline.display}
- WhatsApp (enquiries, prices, availability): ${SITE.phones.whatsapp.display}
- Email: ${SITE.email}
- Certification: Silk Mark certified store (Silk Mark Organisation of India)
- Showroom: air-conditioned mega showroom on the ground floor
- Established: ${SITE.foundingYear}
- Map: ${MAPS.place}
- Instagram: ${SITE.social.instagram}
- Facebook: ${SITE.social.facebook}

## How to buy
Browse the collections online, then visit the showroom or send the product code (for example PHG-PRM-001) on WhatsApp for price, fabric and availability. Prices are not listed online.

## Collections
${counts.join("\n")}

## Weave guides
${WEAVE_GUIDES.map((g) => `- [${g.name}](${SITE_URL}/weaves/${g.slug}): ${g.definition}`).join("\n")}

## Other pages
- [Puri saree shopping guide](${SITE_URL}/puri-saree-shopping-guide): what to buy in Puri and how to identify genuine handloom
- [Visit and contact](${SITE_URL}/contact)
- [About Handloom Garden](${SITE_URL}/about)
- [Frequently asked questions](${SITE_URL}/faq)
- [Site map: every saree and page](${SITE_URL}/site-map)

## Frequently asked questions
${GENERAL_FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
