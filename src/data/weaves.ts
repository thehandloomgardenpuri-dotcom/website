import type { Weave } from "./taxonomy";

export interface QA {
  q: string;
  a: string;
}

export interface WeaveGuide {
  slug: string;
  name: string;
  odia: string;
  /** Weave tags from the catalogue that belong to this guide. */
  weaves: Weave[];
  seoTitle: string;
  seoDescription: string;
  /** One-sentence definition: the answer a search engine or assistant should quote. */
  definition: string;
  origin: string;
  technique: string;
  motifs: string[];
  giStatus: string;
  identify: string[];
  wear: string;
  care: string;
  faqs: QA[];
  /** A fallback visual when the showroom has no photographed piece of this weave. */
  pattern: "ikat" | "temple" | "check" | "scroll";
}

export const WEAVE_GUIDES: WeaveGuide[] = [
  {
    slug: "sambalpuri-saree",
    name: "Sambalpuri Saree",
    odia: "ସମ୍ବଲପୁରୀ ଶାଢ଼ୀ",
    weaves: ["sambalpuri", "pasapalli"],
    seoTitle: "Sambalpuri Saree Guide: History, Bandha Ikat & Where to Buy in Puri",
    seoDescription:
      "What is a Sambalpuri saree, how Bandha ikat is made, how to identify an original, and where to buy authentic Sambalpuri silk and cotton sarees in Puri, Odisha.",
    definition:
      "A Sambalpuri saree is a handwoven saree from western Odisha whose patterns are created by Bandha, a tie-and-dye ikat technique in which the yarn is dyed in the planned design before it is woven.",
    origin:
      "Sambalpuri sarees are woven mainly in the Sambalpur, Bargarh, Sonepur (Subarnapur), Boudh and Balangir districts of western Odisha, by weaving families who have passed the craft down for generations.",
    technique:
      "Weavers tie bundles of yarn with thread at precise points, dye them, and repeat the process for each colour. The tied sections resist the dye, so when the yarn is finally set on the loom the motif appears as the weaving progresses. This is why Sambalpuri motifs have their characteristic soft, feathered edges.",
    motifs: ["Shankha (conch)", "Chakra (wheel)", "Phula (flower)", "Pasapalli (chessboard)", "Fish and elephant", "Temple (kumbha) borders"],
    giStatus: "Sambalpuri Bandha sarees and fabrics are a registered Geographical Indication (GI) of Odisha.",
    identify: [
      "The motif is visible almost equally on the reverse, because it is dyed into the yarn rather than printed on top.",
      "Edges of each motif look slightly feathered. Perfectly crisp, flat edges usually mean a print.",
      "Small irregularities in colour and repeat are the mark of hand tying and hand weaving.",
      "For silk Sambalpuri, look for the Silk Mark label, which certifies natural silk.",
    ],
    wear:
      "Sambalpuri silk suits weddings, pujas and Nuakhai celebrations. Sambalpuri cotton is breathable enough for everyday wear and for Puri's humid sea air.",
    care:
      "Dry clean silk Sambalpuri for the first few washes. Hand wash cotton in cold water with mild detergent, and dry in the shade to protect the dyes.",
    faqs: [
      {
        q: "How can I tell if a Sambalpuri saree is original?",
        a: "Turn it over. In a genuine Sambalpuri Bandha saree the motif shows on both sides with soft, feathered edges, because the yarn was dyed before weaving. Printed imitations are sharp on the front and faint on the back.",
      },
      {
        q: "What is a Pasapalli saree?",
        a: "Pasapalli is a Sambalpuri design named after the pasa (chess or dice) board. It features a bold checkerboard of contrasting squares, usually woven with double ikat.",
      },
      {
        q: "Where can I buy Sambalpuri sarees in Puri?",
        a: "Handloom Garden at Swargadwar Square, Puri stocks Sambalpuri silk and cotton sarees, including Pasapalli designs. The showroom is air-conditioned and open every day from 9 AM to 9 PM.",
      },
    ],
    pattern: "ikat",
  },
  {
    slug: "bomkai-saree",
    name: "Bomkai Saree",
    odia: "ବୋମକାଇ ଶାଢ଼ୀ",
    weaves: ["bomkai"],
    seoTitle: "Bomkai Saree Guide: Temple Borders, Origin & Where to Buy in Puri",
    seoDescription:
      "Learn what makes a Bomkai saree special: its origin in Ganjam, extra-weft temple borders, motifs and care. Shop Bomkai sarees at Handloom Garden, Puri.",
    definition:
      "A Bomkai saree is a handwoven Odisha saree known for its intricate extra-weft borders and pallu, typically featuring temple (kumbha) spires, fish and floral motifs, often paired with an ikat body.",
    origin:
      "The style takes its name from Bomkai village in the Ganjam district of southern Odisha. Today it is also woven by master weavers in the Sonepur region, which is why some Bomkai sarees are called Sonepuri.",
    technique:
      "Motifs on the border and pallu are woven with an extra (supplementary) weft thread, lifted and placed by hand across the design. The body is often woven in ikat, giving Bomkai its rich mix of textures.",
    motifs: ["Kumbha (temple spire) border", "Fish (matsya)", "Rudraksha beads", "Lotus and flower", "Tortoise"],
    giStatus: "Bomkai sarees and fabrics are a registered Geographical Indication (GI) of Odisha.",
    identify: [
      "Border and pallu motifs are raised slightly and show floats of thread on the reverse, a sign of extra-weft weaving.",
      "Temple (kumbha) borders run in a continuous row of spires along the length.",
      "Colour contrast between body and border is bold and deliberate.",
    ],
    wear:
      "Bomkai is a favourite for weddings, festivals and temple visits. Its structured borders drape beautifully and photograph well.",
    care: "Dry clean silk Bomkai. Store folded in soft cotton or muslin and refold along different lines every few months.",
    faqs: [
      {
        q: "What is the difference between Bomkai and Sambalpuri sarees?",
        a: "Sambalpuri patterns come from tie-dyed (ikat) yarn, while Bomkai is best known for extra-weft motifs woven into the border and pallu. Many sarees combine both: an ikat body with a Bomkai border.",
      },
      {
        q: "Why do Bomkai sarees have temple borders?",
        a: "The kumbha or temple-spire border is a classic Odisha motif linked to the state's temple architecture, which is why it feels especially at home in a temple town like Puri.",
      },
    ],
    pattern: "temple",
  },
  {
    slug: "patachitra-saree",
    name: "Patachitra Saree",
    odia: "ପଟ୍ଟଚିତ୍ର ଶାଢ଼ୀ",
    weaves: ["patachitra"],
    seoTitle: "Patachitra Saree Guide: Raghurajpur Art on Sarees | Handloom Garden Puri",
    seoDescription:
      "Patachitra sarees carry Odisha's scroll-painting tradition from Raghurajpur, near Puri, onto silk and cotton. Stories, motifs and where to buy them in Puri.",
    definition:
      "A Patachitra saree carries the imagery of Patachitra, Odisha's traditional cloth-based scroll painting, onto a saree, with mythological scenes, deities, dancers, animals and the tree of life.",
    origin:
      "Patachitra painting is centred on Raghurajpur, a heritage crafts village about 14 km from Puri, where artist families have painted scenes of Lord Jagannath and Krishna Leela for centuries.",
    technique:
      "Traditional Patachitra is painted with natural pigments on prepared cloth. On sarees, the same figures and borders are painted or printed onto tussar, silk and cotton, usually concentrated on the pallu so the story unfolds over the shoulder.",
    motifs: ["Krishna Leela and dancing gopis", "Lord Jagannath", "Dashavatara", "Tree of life", "Deer, birds and elephants"],
    giStatus: "Orissa Pattachitra is a registered Geographical Indication (GI) of Odisha.",
    identify: [
      "Figures follow Patachitra conventions: large expressive eyes, bold outlines and ornamental borders.",
      "Scenes are usually arranged in panels or flowing across the pallu like a scroll.",
      "Ask whether the motif is painted or printed; both are available and priced differently.",
    ],
    wear:
      "Patachitra sarees are conversation pieces for festivals, cultural events and gallery evenings, and a meaningful souvenir from the Puri region.",
    care: "Dry clean only for painted pieces. Avoid spraying perfume directly on painted areas and store away from direct sunlight.",
    faqs: [
      {
        q: "Where does Patachitra art come from?",
        a: "Patachitra comes from Odisha, with Raghurajpur village near Puri as its best-known centre. The art traditionally depicts Lord Jagannath and stories from Hindu epics.",
      },
      {
        q: "Can I buy Patachitra sarees in Puri?",
        a: "Yes. Handloom Garden at Swargadwar Square, Puri has a dedicated range of Patachitra sarees with Krishna Leela, tree of life and temple scenes.",
      },
    ],
    pattern: "scroll",
  },
  {
    slug: "kotpad-saree",
    name: "Kotpad Saree",
    odia: "କୋଟପାଡ ଶାଢ଼ୀ",
    weaves: [],
    seoTitle: "Kotpad Saree Guide: Natural Dye Tribal Weave of Koraput | Handloom Garden",
    seoDescription:
      "Kotpad sarees are hand-woven by the Mirgan community of Koraput, Odisha, and dyed with Aal root. Odisha's first GI-tagged handloom, explained.",
    definition:
      "A Kotpad saree is a naturally dyed handloom saree woven by the Mirgan tribal community of Kotpad village in Koraput district, Odisha, using dyes made from the root of the Aal (Indian madder) tree.",
    origin:
      "Kotpad is a village in Koraput district, southern Odisha. The weave is closely tied to the Mirgan community, who grow, dye and weave in a slow, largely natural process.",
    technique:
      "Cotton yarn is dyed with Aal root to produce deep maroon, rust and brown tones, often set against off-white and black. Motifs are woven with extra weft in bold, geometric forms along the borders and pallu.",
    motifs: ["Fish", "Crab", "Axe", "Temple", "Conch"],
    giStatus: "Kotpad handloom fabric was the first product from Odisha to receive a Geographical Indication (GI) tag.",
    identify: [
      "Earthy maroon, rust and black tones from natural dye, which soften gently with every wash.",
      "Thick, textured handspun cotton with a distinctly hand-made feel.",
      "Bold geometric border motifs such as fish, crab and axe.",
    ],
    wear: "Kotpad cotton is comfortable for daily wear and a thoughtful choice for anyone who prefers natural, sustainable textiles.",
    care: "Hand wash separately in cold water for the first washes. Natural dyes mellow over time, which is part of their character.",
    faqs: [
      {
        q: "Why is Kotpad handloom famous?",
        a: "Kotpad is famous for its natural Aal-root dyes and its tribal weaving heritage, and it was the first handloom from Odisha to receive a GI tag.",
      },
      {
        q: "Does Handloom Garden stock Kotpad sarees?",
        a: "Kotpad pieces arrive in small batches because of the slow natural-dye process. Message us on WhatsApp to check what is in the showroom this week.",
      },
    ],
    pattern: "check",
  },
  {
    slug: "odisha-ikat",
    name: "Odisha Ikat",
    odia: "ଓଡ଼ିଶା ବନ୍ଧ",
    weaves: ["ikat", "sambalpuri", "pasapalli"],
    seoTitle: "Odisha Ikat (Bandha) Guide: Khandua, Sambalpuri, Pasapalli & More",
    seoDescription:
      "Everything about Odisha ikat, known locally as Bandha: single and double ikat, Khandua of Nuapatna, Sambalpuri, Pasapalli and Habaspuri. Shop ikat sarees and kurtis in Puri.",
    definition:
      "Odisha ikat, called Bandha in Odia, is a resist-dyeing technique in which yarns are tied and dyed in the planned pattern before weaving, producing motifs with soft, blurred edges.",
    origin:
      "Ikat is woven across Odisha: Sambalpuri and Pasapalli in the west, Khandua in Nuapatna and Maniabandha (Cuttack district), and Habaspuri in Kalahandi. Khandua silk has a special place in Puri, as it is traditionally offered to Lord Jagannath.",
    technique:
      "In single ikat, either the warp or the weft is tie-dyed. In double ikat, both are, and the weaver aligns them thread by thread as the cloth is woven. Double ikat takes the most skill and time.",
    motifs: ["Diamonds and lattices", "Elephants and parrots", "Temple borders", "Chevrons", "Flowers and buttis"],
    giStatus:
      "Orissa Ikat, Khandua, Sambalpuri Bandha and Habaspuri handloom are all registered Geographical Indications (GI) of Odisha.",
    identify: [
      "The pattern is visible on both faces of the fabric.",
      "Motif edges are softly blurred, the signature of tie-dyed yarn.",
      "Double ikat shows crisp alignment where warp and weft patterns meet.",
    ],
    wear:
      "Ikat moves easily between occasions: silk ikat sarees for celebrations, cotton ikat sarees and kurta sets for daily wear and travel.",
    care: "Dry clean silk ikat. Hand wash cotton ikat in cold water, inside out, and dry in the shade.",
    faqs: [
      {
        q: "What is Bandha in Odisha?",
        a: "Bandha is the Odia name for ikat: the yarn is tied (bandha) and dyed before weaving, so the pattern is built into the thread itself.",
      },
      {
        q: "What is Khandua and why is it linked to Puri?",
        a: "Khandua is a single-ikat silk from Nuapatna and Maniabandha in Cuttack district. It is traditionally offered to Lord Jagannath at the Puri temple, sometimes woven with verses from the Gita Govinda.",
      },
      {
        q: "Are ikat kurtis available at Handloom Garden?",
        a: "Yes. Handloom Garden has ikat kurtis, kurta sets with dupattas and ikat anarkali frocks alongside its ikat sarees.",
      },
    ],
    pattern: "ikat",
  },
];

export function getWeaveGuide(slug: string): WeaveGuide | undefined {
  return WEAVE_GUIDES.find((g) => g.slug === slug);
}
