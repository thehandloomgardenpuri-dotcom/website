/**
 * Handloom Garden product catalogue — the seed source for the Supabase `products`
 * table and the build-time fallback if Supabase is unreachable.
 *
 * Titles describe what is visible in each photograph (colour + weave style).
 * Fabric, price and availability are confirmed by the showroom on WhatsApp,
 * so they are intentionally not stated here.
 */

// Type-only import: erased by Node's type stripping, so the migration script can run this file directly.
import type { Category, Weave } from "./taxonomy";

export interface CatalogItem {
  id: string;
  title: string;
  category: Category;
  weave: Weave;
  description: string;
  featured?: boolean;
  collection?: "premium";
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function productSlug(item: Pick<CatalogItem, "id" | "title">): string {
  return `${slugify(item.title)}-${item.id.toLowerCase()}`;
}

export function storagePath(item: Pick<CatalogItem, "id" | "title" | "category">): string {
  return `products/${item.category}/${productSlug(item)}.webp`;
}

const premium = (
  n: number,
  weave: Weave,
  title: string,
  description: string,
): CatalogItem => ({
  id: `PHG-PRM-${String(n).padStart(3, "0")}`,
  category: "sarees",
  collection: "premium",
  featured: true,
  weave,
  title,
  description,
});

export const catalog: CatalogItem[] = [
  // ─── PREMIUM SAREE COLLECTION ────────────────────────────────────────────
  premium(1, "sambalpuri", "Navy Ikat Saree with Ivory Bandha Pallu", "A navy and crimson ikat body flowing into an ivory pallu of tie-dyed bandha motifs, finished with a red woven border. A premium Sambalpuri statement."),
  premium(2, "sambalpuri", "Black & Red Sambalpuri Bandha Saree", "A black body of fine ikat florals set against a scarlet pallu of diamond bandha. The most classic Sambalpuri contrast, woven with precision."),
  premium(3, "sambalpuri", "Scarlet & Black Sambalpuri Temple Pallu Saree", "Scarlet ikat above, black temple-motif pallu below, with rows of kumbha spires and woven florals. Made for weddings and festive evenings."),
  premium(4, "sambalpuri", "Ivory & Red Ikat Saree with Floral Pallu", "An ivory body with delicate ikat buttis, crowned by a red pallu of blooming flowers and bandha borders."),
  premium(5, "bomkai", "Crimson & Saffron Temple Border Saree", "Crimson checks meet a glowing saffron pallu, framed by a woven temple border in the Bomkai tradition."),
  premium(6, "sambalpuri", "Ivory & Fuchsia Sambalpuri Ikat Saree", "A pale ivory ikat body with a fuchsia pallu of bandha diamonds. Soft colour, rich craftsmanship."),
  premium(7, "handloom", "Mint Green Zari Handloom Saree", "Mint green woven with a gold zari border and pallu of fine florals. Fresh, graceful and quietly luxurious."),
  premium(8, "handloom", "Champagne Floral Jaal Saree", "A champagne-beige saree covered in a woven floral jaal in blush and peach, a refined heirloom for receptions."),
  premium(9, "ikat", "Black & Ivory Ikat Saree with Crimson Pallu", "A black ikat body with an ivory pallu banded in crimson and saffron ikat. Graphic and modern, deeply traditional."),
  premium(10, "patachitra", "Olive Patachitra Story Panel Saree", "An olive and ochre saree painted in Patachitra panels of cows, temples and village life, inspired by the art of Raghurajpur near Puri."),
  premium(11, "sambalpuri", "Black & Fuchsia Sambalpuri Saree with Bird Motifs", "A black body scattered with ikat birds and elephants, finished with a fuchsia pallu of fine bandha."),
  premium(12, "handloom", "Yellow & Royal Blue Handloom Saree", "Sunshine yellow with royal-blue and pink woven borders, and a striped pallu full of colour."),
  premium(13, "patachitra", "Vermilion Patachitra Panel Saree", "Vermilion and ivory panels painted with deer, birds and deities. Patachitra storytelling on a saree."),
  premium(14, "pasapalli", "Lime & Fuchsia Pasapalli Bridal Saree", "Lime and fuchsia Pasapalli checks, the chessboard of western Odisha, with a rich pink pallu. A bridal favourite."),
  premium(15, "ikat", "Ivory Floral Saree with Red Ikat Pallu", "An ivory floral body with a red and saffron ikat pallu and border."),
  premium(16, "patachitra", "Ivory Patachitra Saree with Fuchsia Pallu", "An ivory saree painted with Patachitra figures and florals, with a fuchsia and red ikat pallu."),
  premium(17, "bomkai", "Maroon Kumbha Temple Border Saree", "Deep maroon with a gold kumbha (temple spire) border and a sheer golden pallu. Temple-town elegance."),
  premium(18, "pasapalli", "White Pasapalli Rainbow Check Saree", "Crisp white with fine stripes and a pallu of rainbow Pasapalli squares edged in gold."),
  premium(19, "bomkai", "Yellow & Fuchsia Temple Motif Saree", "A sunflower-yellow body with green temple motifs and a fuchsia pallu of woven checks."),
  premium(20, "sambalpuri", "Beige Ikat Saree with Elephant Motifs", "A beige body with rows of ikat elephants and a black checked pallu, finished in gold."),
  premium(21, "ikat", "Azure & Marigold Ikat Saree", "Azure blue ikat pleats and a marigold body, a bold coastal colour pairing inspired by Puri's sea."),
  premium(22, "patachitra", "Ivory Painted Floral Saree with Red Pallu", "An ivory saree painted with florals and birds in the Patachitra palette, with a red ikat pallu."),
  premium(23, "patachitra", "Beige Tussar Saree with Painted Pallu", "A beige tussar-style saree with a Patachitra-style painted pallu of temple scenes."),
  premium(24, "handloom", "Black Stripe Saree with Scarlet Pallu", "Multicolour stripes on black, finished with a scarlet pallu and woven border."),
  premium(25, "sambalpuri", "Magenta Sambalpuri Saree with Ivory Motifs", "A magenta saree with ivory ikat motifs and a pallu of woven figures."),
  premium(26, "ikat", "Yellow & Violet Ikat Saree", "A yellow body with a violet and fuchsia ikat pallu of diamond lattices."),
  premium(27, "ikat", "Red Patola-Style Ikat Saree", "A red ikat saree with a multicolour patola-style lattice of florals and figures."),
  premium(28, "ikat", "Ivory Floral Ikat Saree with Magenta Pallu", "An ivory body of green ikat florals with a magenta pallu and border."),
  premium(29, "ikat", "Fuchsia & Yellow Striped Pallu Saree", "A fuchsia ikat body with a yellow pallu striped in black."),
  premium(30, "handloom", "Beige Chevron Pallu Handloom Saree", "A beige saree with a pallu of multicolour chevrons and woven buttis."),
  premium(31, "patachitra", "Ivory Saree with Tree of Life Pallu", "An ivory body scattered with red motifs, and a red pallu woven with a tree of life and deer."),
  premium(32, "patachitra", "Black Patachitra Saree with Red Ikat Pallu", "A black body alive with Patachitra motifs, with an ivory and red ikat pallu."),
  premium(33, "ikat", "Ivory & Red Patola Motif Saree", "Ivory and red with a patola-style lattice and a deep red pallu."),
  premium(34, "sambalpuri", "Beige Saree with Red Ikat Border", "A beige body with red ikat buttis and a woven red border and pallu."),
  premium(35, "bomkai", "Beige Temple Border Saree with Dot Motifs", "A beige saree dotted with woven buttis and framed by a black and red temple border."),
  premium(36, "sambalpuri", "White & Red Sambalpuri Saree", "Pure white with a red Sambalpuri pallu and border, the auspicious pairing of Odisha's festivals."),
  premium(37, "ikat", "Emerald & Fuchsia Ikat Saree", "Emerald ikat with a fuchsia pallu. Jewel tones for festive days."),
  premium(38, "ikat", "Sunshine Yellow & Azure Ikat Saree", "Sunshine yellow ikat with an azure blue pallu of woven diamonds."),
  premium(39, "ikat", "Yellow & Slate Chevron Ikat Saree", "A yellow body with green waves and a slate-grey ikat pallu."),

  // ─── SAREES ──────────────────────────────────────────────────────────────
  { id: "PHG-SAR-001", category: "sarees", weave: "handloom", featured: true, title: "Midnight Black Figurative Border Saree", description: "A black saree covered in fine florals, framed by a bold border of figurative motifs in saffron, red and gold. Photographed in a temple garden, and a showroom favourite for weddings and pujas." },
  { id: "PHG-SAR-002", category: "sarees", weave: "ikat", title: "Canary Yellow & Fuchsia Ikat Saree", description: "Canary yellow meets fuchsia, finished with a checked ikat pallu. Bright, festive and made for celebrations." },
  { id: "PHG-SAR-003", category: "sarees", weave: "handloom", title: "Ivory Stripe Saree with Sunflower Pallu", description: "Ivory with crisp black stripes and a sunflower-yellow pallu in open-weave checks. Easy to wear in Puri's sea breeze." },
  { id: "PHG-SAR-006", category: "sarees", weave: "handloom", title: "White Saree with Red Woven Border", description: "Classic white with a red woven border, the timeless festive drape of eastern India, worn for pujas and temple visits." },
  { id: "PHG-SAR-009", category: "sarees", weave: "patachitra", featured: true, title: "Charcoal Patachitra Art Saree", description: "A charcoal ground alive with Patachitra figures in saffron, turquoise and gold. Puri's own folk-art tradition, made to be worn." },
  { id: "PHG-SAR-010", category: "sarees", weave: "patachitra", featured: true, title: "Plum Patachitra Saree with Dancing Gopis", description: "A plum saree whose pallu tells a story: dancing gopis beneath a tree of life, with golden deer at their feet." },
  { id: "PHG-SAR-013", category: "sarees", weave: "patachitra", title: "Ivory Saree with Crimson Painted Pallu", description: "An ivory body with a crimson and black pallu of flowing painted motifs. Quiet drape, expressive finish." },
  { id: "PHG-SAR-014", category: "sarees", weave: "handloom", title: "Maroon Saree with Gold-Tone Border", description: "Rich maroon with a woven gold-tone border and pallu. A classic choice for weddings, pujas and family occasions." },
  { id: "PHG-SAR-017", category: "sarees", weave: "patachitra", featured: true, title: "Mustard Saree with Patachitra Scene Pallu", description: "A mustard-yellow drape with a pallu painted in temple scenes and a rust border that glows in sunlight." },
  { id: "PHG-SAR-018", category: "sarees", weave: "tussar", title: "Earth-Brown Geometric Tussar Saree", description: "Earthy brown with a soft tussar-like sheen and a mosaic of geometric blocks. Understated and very elegant." },
  { id: "PHG-SAR-021", category: "sarees", weave: "handloom", title: "Sunflower & Parrot Green Handloom Saree", description: "A sunflower-yellow body with a parrot-green pallu of fine woven motifs, one of Odisha's most loved colour pairings." },
  { id: "PHG-SAR-022", category: "sarees", weave: "tussar", title: "Khaki Tussar Saree with Mandala Motif", description: "Muted khaki with an intricate mandala worked across the pallu. Earthy, graceful and quietly luxurious." },
  { id: "PHG-SAR-025", category: "sarees", weave: "patachitra", title: "Butter Yellow Saree with Patachitra Pallu", description: "A soft butter-yellow body dotted with buttis, finished with a pallu of Patachitra-style storytelling." },
  { id: "PHG-SAR-026", category: "sarees", weave: "sambalpuri", featured: true, title: "Magenta & Ivory Ikat Saree with Elephant Border", description: "Ivory ikat panels of elephants and flowers set within magenta and gold borders. Every motif is tied into the yarn before weaving." },
  { id: "PHG-SAR-029", category: "sarees", weave: "handloom", title: "Black Butti Saree with Rose Border", description: "A black body scattered with golden buttis and finished with a rose-pink and gold pallu." },
  { id: "PHG-SAR-030", category: "sarees", weave: "sambalpuri", title: "Magenta Sambalpuri Saree with Elephant Motifs", description: "Magenta drape with ikat elephants along the border and a checked ikat skirt in black and pink." },
  { id: "PHG-SAR-033", category: "sarees", weave: "pasapalli", title: "Ivory Pasapalli Saree with Colour-Block Pallu", description: "Ivory with fine black pinstripes and a pallu of rainbow Pasapalli squares, the chessboard motif of western Odisha." },
  { id: "PHG-SAR-034", category: "sarees", weave: "sambalpuri", title: "Crimson & Ivory Ikat Saree with Elephant Motifs", description: "An ivory ikat grid of elephants and parrots, framed by deep crimson borders." },
  { id: "PHG-SAR-037", category: "sarees", weave: "ikat", title: "Bottle Green & Tangerine Ikat Saree", description: "A bottle-green ikat body with a blazing tangerine pallu of woven figures." },
  { id: "PHG-SAR-038", category: "sarees", weave: "sambalpuri", featured: true, title: "Teal & Magenta Ikat Saree", description: "A teal body with a magenta pallu of ikat elephants and florals, with a gold woven edge." },
  { id: "PHG-SAR-041", category: "sarees", weave: "ikat", title: "Hot Pink & Marigold Ikat Saree", description: "A hot-pink ikat body with a marigold pallu striped in black. Joyful colour for festive days." },
  { id: "PHG-SAR-042", category: "sarees", weave: "handloom", title: "Rani Pink Saree with Golden Border", description: "Rani pink with a fine ikat texture and a golden-yellow woven border and pallu." },
  { id: "PHG-SAR-045", category: "sarees", weave: "patachitra", title: "Black & Turquoise Painted Pallu Saree", description: "A black body with painted motifs, a turquoise pallu and a vivid orange temple border." },
  { id: "PHG-SAR-046", category: "sarees", weave: "bomkai", featured: true, title: "Ivory Bomkai Saree with Magenta Temple Border", description: "An ivory body with a magenta temple (kumbha) border and intricate woven motifs, Bomkai's signature look." },
  { id: "PHG-SAR-049", category: "sarees", weave: "patachitra", title: "Dark Stripe Saree with Patachitra Figure Pallu", description: "A dark striped body with a painted pallu featuring a Patachitra deity figure." },
  { id: "PHG-SAR-050", category: "sarees", weave: "bomkai", featured: true, title: "Lime & Royal Blue Bomkai Saree", description: "A lime-green body with royal-blue checks and a woven Bomkai border rich with motifs." },
  { id: "PHG-SAR-053", category: "sarees", weave: "handloom", title: "Peach Floral Handloom Saree", description: "A peach ground with delicate woven florals. Light, feminine and easy to wear." },
  { id: "PHG-SAR-054", category: "sarees", weave: "patachitra", title: "Black Patachitra Figurative Saree", description: "A black body alive with multicolour figurative motifs inspired by Patachitra scroll painting." },
  { id: "PHG-SAR-057", category: "sarees", weave: "ikat", title: "Coral Saree with Crimson Ikat Pallu", description: "A coral-pink body with a crimson pallu of woven ikat motifs." },
  { id: "PHG-SAR-058", category: "sarees", weave: "bomkai", title: "Mustard & Navy Bomkai Saree", description: "A mustard body with a navy border, temple motifs and woven buttis. Classic Bomkai contrast." },
  { id: "PHG-SAR-061", category: "sarees", weave: "pasapalli", title: "Grey Ikat Saree with Pasapalli Pallu", description: "A grey ikat body with a pallu of multicolour Pasapalli checks." },
  { id: "PHG-SAR-062", category: "sarees", weave: "sambalpuri", title: "Red & Black Sambalpuri Ikat Saree", description: "A black ikat body paired with a bright red pallu in fine white ikat." },
  { id: "PHG-SAR-065", category: "sarees", weave: "handloom", title: "Pink & Bottle Green Handloom Saree", description: "A pink body with a bottle-green pallu, a classic Odisha colour story." },
  { id: "PHG-SAR-066", category: "sarees", weave: "sambalpuri", featured: true, title: "Indigo Sambalpuri Ikat Saree", description: "Deep indigo woven with white ikat florals and a maroon border." },
  { id: "PHG-SAR-069", category: "sarees", weave: "ikat", title: "Sunflower Saree with Chevron Ikat Pallu", description: "A sunflower-yellow body with a green, red and black chevron ikat pallu." },
  { id: "PHG-SAR-070", category: "sarees", weave: "ikat", title: "Maroon Geometric Ikat Saree", description: "Maroon with bold white geometric squares tied and dyed in ikat." },
  { id: "PHG-SAR-073", category: "sarees", weave: "sambalpuri", title: "Black Ikat Saree with Scarlet Border", description: "Black ikat with red and white motifs framed by a scarlet border." },
  { id: "PHG-SAR-074", category: "sarees", weave: "ikat", title: "Yellow & Grey Chevron Ikat Saree", description: "A yellow body with a grey and white chevron ikat pallu." },
  { id: "PHG-SAR-077", category: "sarees", weave: "sambalpuri", title: "Parrot Green Saree with Black Ikat Pallu", description: "A parrot-green body with a black pallu of red ikat motifs." },
  { id: "PHG-SAR-078", category: "sarees", weave: "bomkai", title: "Beige Bomkai Saree with Maroon Border", description: "A beige body with a maroon woven border and a pallu of Bomkai motifs." },
  { id: "PHG-SAR-081", category: "sarees", weave: "sambalpuri", title: "Black & Scarlet Sambalpuri Saree", description: "A black ikat body with a scarlet pallu and ivory motifs." },
  { id: "PHG-SAR-082", category: "sarees", weave: "sambalpuri", featured: true, title: "Navy & Beige Sambalpuri Saree", description: "A navy ikat pallu with a beige body and red borders. A refined everyday classic." },
  { id: "PHG-SAR-085", category: "sarees", weave: "handloom", title: "Sage Green Zari-Weave Saree", description: "A sage-green body with a pale gold woven pattern. Soft, luminous and elegant." },
  { id: "PHG-SAR-086", category: "sarees", weave: "ikat", title: "Beige Check Saree with Ikat Border", description: "A beige checked body framed by a red and black ikat border." },
  { id: "PHG-SAR-089", category: "sarees", weave: "patachitra", title: "Grey Saree with Patachitra Pallu", description: "A grey striped body with a painted Patachitra pallu." },
  { id: "PHG-SAR-090", category: "sarees", weave: "patachitra", featured: true, title: "Crimson Patachitra Art Saree", description: "Crimson and cream drape covered in figurative Patachitra-style art." },
  { id: "PHG-SAR-093", category: "sarees", weave: "sambalpuri", title: "Marigold & Red Sambalpuri Ikat Saree", description: "A marigold checked body meets a crimson pallu of tie-dyed elephants. Festive Sambalpuri colour at its brightest." },
  { id: "PHG-SAR-094", category: "sarees", weave: "sambalpuri", featured: true, title: "Rani Pink Bandha Saree with Elephant Pallu", description: "Rani-pink borders frame an ivory and bottle-green pallu, its ikat elephants and parrots tied thread by thread before weaving." },
  { id: "PHG-SAR-097", category: "sarees", weave: "ikat", title: "Magenta Ikat Saree with Ivory Floral Pallu", description: "Deep magenta scattered with tiny ikat buttis, finished with an ivory pallu of floral motifs." },
  { id: "PHG-SAR-098", category: "sarees", weave: "pasapalli", featured: true, title: "Black Pasapalli Saree with Jewel Checks", description: "The classic Pasapalli chessboard reimagined, with jewel-toned squares on black and a bold black-and-white ikat border." },
  { id: "PHG-SAR-101", category: "sarees", weave: "sambalpuri", title: "Black Sambalpuri Saree with Confetti Buttis", description: "Multicolour buttis dance across a black body, anchored by a monochrome ikat pallu and silver-grey border." },
  { id: "PHG-SAR-102", category: "sarees", weave: "sambalpuri", featured: true, title: "Peacock Teal Sambalpuri Ikat Saree", description: "Peacock teal with fine white ikat patterning end to end. Cool, graceful and quietly intricate." },
  { id: "PHG-SAR-105", category: "sarees", weave: "ikat", title: "Saffron & Black Ikat Saree", description: "A saffron body with chevron ikat bands, crowned by a striking black-and-ivory pallu." },
  { id: "PHG-SAR-106", category: "sarees", weave: "ikat", title: "Grey Check Saree with Black Ikat Pallu", description: "Soft grey checks set against a black pallu of white ikat figures and a sharp crimson border." },
  { id: "PHG-SAR-109", category: "sarees", weave: "sambalpuri", title: "Scarlet Sambalpuri Ikat Saree", description: "Scarlet red woven with white ikat diamonds, with an ivory pallu that catches the light." },
  { id: "PHG-SAR-110", category: "sarees", weave: "sambalpuri", featured: true, title: "Navy & Crimson Bandha Saree", description: "A navy ikat lattice paired with a crimson checked pallu of woven figures, a timeless Odisha pairing." },
  { id: "PHG-SAR-113", category: "sarees", weave: "ikat", featured: true, title: "Emerald & Tangerine Ikat Saree", description: "An emerald ikat lattice edged in tangerine, with a richly patterned pallu in rust and brown." },
  { id: "PHG-SAR-114", category: "sarees", weave: "ikat", title: "Charcoal Stripe Saree with Red Ikat Pallu", description: "Charcoal pinstripes meet a crimson and gold ikat pallu. An understated drape with a statement finish." },

  // ─── KURTIS ──────────────────────────────────────────────────────────────
  { id: "PHG-KRT-002", category: "kurtis", weave: "ikat", featured: true, title: "Navy Ikat Kurta Set with Red Dupatta", description: "A navy kurta and trousers woven with red ikat motifs, paired with a red ikat dupatta." },
  { id: "PHG-KRT-003", category: "kurtis", weave: "ikat", title: "Dusty Rose Ikat Kurta Set", description: "A dusty-rose kurta and trousers with an all-over ikat pattern and a matching dupatta." },
  { id: "PHG-KRT-004", category: "kurtis", weave: "ikat", title: "Red Kurta with Black Ikat Dupatta", description: "A red ikat kurta and trousers styled with a black and red ikat dupatta." },
  { id: "PHG-KRT-005", category: "kurtis", weave: "ikat", title: "Black & White Ikat Kurti", description: "A black kurti with a white ikat pattern and a matching dupatta. Monochrome and modern." },
  { id: "PHG-KRT-006", category: "kurtis", weave: "ikat", title: "Cream Ikat Kurta Set with Coral Dupatta", description: "A cream kurta with pastel ikat motifs, coral trousers and a sheer coral dupatta." },

  // ─── FROCKS ──────────────────────────────────────────────────────────────
  { id: "PHG-FRK-001", category: "frocks", weave: "ikat", featured: true, title: "Maroon Ikat Anarkali Frock", description: "A floor-length maroon frock with an all-over ikat pattern and a full, swirling flare." },
  { id: "PHG-FRK-002", category: "frocks", weave: "ikat", title: "Bottle Green Ikat Anarkali Frock", description: "A bottle-green long frock with an ikat pattern and a full flare, elegant for festive evenings." },
];

/** Local source file for each catalogue image (used only by the one-off migration script). */
export const LEGACY_SOURCE: Record<string, string> = {
  "PHG-SAR-001": "images/product_16.webp",
  "PHG-SAR-002": "images/product_19.webp",
  "PHG-SAR-003": "images/product_20.webp",
  "PHG-SAR-006": "images/product_10.webp",
  "PHG-SAR-009": "Model_Shots/img_0009_model3_1784201359891.webp",
  "PHG-SAR-010": "Model_Shots/img_0011_model4_1784201377590.webp",
  "PHG-SAR-013": "Model_Shots/img_0017_model3_1784201435675.webp",
  "PHG-SAR-014": "Model_Shots/img_0019_model4_1784201456837.webp",
  "PHG-SAR-017": "Model_Shots/img_0025_model3_1784201515894.webp",
  "PHG-SAR-018": "Model_Shots/img_0028_model4_1784356083790.webp",
  "PHG-SAR-021": "Model_Shots/img_0034_model3_1784356315833.webp",
  "PHG-SAR-022": "Model_Shots/img_0037_model4_1784356370847.webp",
  "PHG-SAR-025": "Model_Shots/img_0046_model3_1784356513204.webp",
  "PHG-SAR-026": "Model_Shots/img_0048_model4_1784356789303.webp",
  "PHG-SAR-029": "Model_Shots/img_0055_model3_1784485641903.webp",
  "PHG-SAR-030": "Model_Shots/img_0057_model4_1784485660694.webp",
  "PHG-SAR-033": "Model_Shots/img_0066_model3_1784485716613.webp",
  "PHG-SAR-034": "Model_Shots/img_0072_model4_1784485762186.webp",
  "PHG-SAR-037": "Model_Shots/img_0083_model3_1784485821769.webp",
  "PHG-SAR-038": "Model_Shots/img_0085_model4_1784485840526.webp",
  "PHG-SAR-041": "Model_Shots/img_0105_model3_1784485935103.webp",
  "PHG-SAR-042": "Model_Shots/img_0109_model4_1784533688444.webp",
  "PHG-SAR-045": "Model_Shots/img_0115_model3_1784533749855.webp",
  "PHG-SAR-046": "Model_Shots/img_0117_model4_1784533770291.webp",
  "PHG-SAR-049": "Model_Shots/img_0123_model3_1784533858208.webp",
  "PHG-SAR-050": "Model_Shots/img_0125_model4_1784533966221.webp",
  "PHG-SAR-053": "Model_Shots/img_0133_model3_1784534029675.webp",
  "PHG-SAR-054": "Model_Shots/img_0135_model4_1784534050645.webp",
  "PHG-SAR-057": "Model_Shots/img_0141_model3_1784564513182.webp",
  "PHG-SAR-058": "Model_Shots/img_0143_model4_1784564531012.webp",
  "PHG-SAR-061": "Model_Shots/img_0151_model3_1784564609459.webp",
  "PHG-SAR-062": "Model_Shots/img_0155_model4_1784564627717.webp",
  "PHG-SAR-065": "Model_Shots/img_0163_model3_1785046371836.webp",
  "PHG-SAR-066": "Model_Shots/img_0167_model4_1785046403242.webp",
  "PHG-SAR-069": "Model_Shots/img_0173_model3_1785047210766.webp",
  "PHG-SAR-070": "Model_Shots/img_0175_model4_1785076250441.webp",
  "PHG-SAR-073": "Model_Shots/img_0181_model3_1785076320102.webp",
  "PHG-SAR-074": "Model_Shots/img_0183_model4_1785076354172.webp",
  "PHG-SAR-077": "Model_Shots/img_0189_model3_1785076427793.webp",
  "PHG-SAR-078": "Model_Shots/img_0191_model4_1785076443636.webp",
  "PHG-SAR-081": "Model_Shots/img_0197_model3_1785076524956.webp",
  "PHG-SAR-082": "Model_Shots/img_0199_model4.webp",
  "PHG-SAR-085": "Model_Shots/img_0220_model3.webp",
  "PHG-SAR-086": "Model_Shots/img_0224_model4.webp",
  "PHG-SAR-089": "Model_Shots/img_9998_model3.webp",
  "PHG-SAR-090": "Model_Shots/img_9999_model4.webp",
  "PHG-SAR-093": "Model_Shots/batch2_img_0003_model3_1785824050653.webp",
  "PHG-SAR-094": "Model_Shots/batch2_img_0004_model4_1785824066513.webp",
  "PHG-SAR-097": "Model_Shots/batch2_img_0007_model3_1785824108293.webp",
  "PHG-SAR-098": "Model_Shots/batch2_img_0008_model4_1785824143470.webp",
  "PHG-SAR-101": "Model_Shots/batch2_img_0011_model3_1785824193193.webp",
  "PHG-SAR-102": "Model_Shots/batch2_img_0012_model4_1785824214128.webp",
  "PHG-SAR-105": "Model_Shots/batch2_img_0015_model3_1785842364108.webp",
  "PHG-SAR-106": "Model_Shots/batch2_img_0016_model4_1785842375734.webp",
  "PHG-SAR-109": "Model_Shots/batch2_img_0019_model3_1785842445067.webp",
  "PHG-SAR-110": "Model_Shots/batch2_img_0020_model4_1785842457323.webp",
  "PHG-SAR-113": "Model_Shots/batch2_img_0023_model3_1785842520272.webp",
  "PHG-SAR-114": "Model_Shots/batch2_img_0024_model4_1785842534587.webp",
  "PHG-KRT-002": "Kurti/kurti_img_0001_model1.webp",
  "PHG-KRT-003": "Kurti/kurti_img_0002_model2.webp",
  "PHG-KRT-004": "Kurti/kurti_img_0003_model3.webp",
  "PHG-KRT-005": "Kurti/kurti_img_0004_model4.webp",
  "PHG-KRT-006": "Kurti/kurti_img_0005_model1.webp",
  "PHG-FRK-001": "Frock/frock_img_0001_model1.webp",
  "PHG-FRK-002": "Frock/frock_img_0002_model2.webp",
};

/** Brand assets moved to Supabase Storage alongside the products. */
export const BRAND_ASSETS: { path: string; source: string; alt: string }[] = [
  { path: "brand/handloom-garden-logo-wordmark.webp", source: "images/logo_large.webp", alt: "Handloom Garden logo, A/C Mega Showroom, Swargadwar Square, Puri" },
  { path: "brand/handloom-garden-logo-round.webp", source: "images/logo_small.webp", alt: "Handloom Garden round logo" },
  { path: "brand/silk-mark-certified.webp", source: "silkmark.webp", alt: "Silk Mark certification label" },
  { path: "brand/handloom-garden-showroom-swargadwar-puri.webp", source: "images/product_22.webp", alt: "Handloom Garden A/C Mega Showroom building at Swargadwar Square, Puri" },
];
