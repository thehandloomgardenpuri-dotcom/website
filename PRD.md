# Product Requirement Document (PRD)

## Project: Puri Handloom Garden Web Platform

---

## 1. Executive Summary & Objectives

### 1.1 Project Intent

The objective is to architect and develop an elite, highly responsive showcase portfolio website for **Puri Handloom Garden** (Puri, Odisha). The platform will serve as a digital gallery to display authentic Indian handloom collections, target local walk-ins, tourists, and textile enthusiasts, and drive highly qualified leads through direct communication channels.

### 1.2 Out-of-Scope (Strict Exclusions)

Per contractual mandates, the following functionalities are entirely omitted from this phase:

* **E-Commerce Core:** No shopping carts, checkout workflows, or user accounts.
* **Payment Infrastructure:** No integrated payment gateways or transaction tracking.
* **Custom CMS:** No dynamic administrative panel or login-protected content management systems.

---

## 2. Technical Stack & Architecture

The application will be built using a modern decoupled framework to guarantee elite performance, zero-configuration layout shifting, and strong search engine visibility.

* **Frontend Framework:** Next.js (React-based) utilizing App Router architecture.
* **Styling Engine:** Tailwind CSS.
* **Hosting & Deployment:** Vercel or Netlify free-tier optimization.
* **Form Infrastructure:** Formspree or equivalent free-tier form endpoints.
* **Asset Performance Budget:** Sub-3-second page load time target achieved via next-gen image compression (WebP/AVIF format processing).
* **Security:** Mandatory SSL configuration supported via hosting DNS pointers.

---

## 3. Information Architecture (8 Distinct Pages)

The platform is strictly constrained to **8 completely separate routes**. It avoids a monolithic single-page architecture to maximize structural on-page SEO targeting.

```
                  [Global Navigation Blur Bar]
                               |
       +-----------------------+-----------------------+
       |                       |                       |
   [/] Home              [/about] About        [/contact] Contact
       |                                               
       +---> [/category/sarees] -----------------------+
       |                                               |
       +---> [/category/kurtis] -----------------------+---> [Floating WhatsApp]
       |                                               |
       +---> [/category/bed-covers] -------------------+
       |                                               |
       +---> [/category/dresses] ----------------------+
       |                                               |
       +---> [/category/scarves] ----------------------+
```

---

## 4. Page-by-Page Specifications

### Page 1: Home Route (`/`)

* **Functional Intent:** Elevate brand messaging, outline core unique selling propositions (USPs), and distribute user traffic directly to specific category routes.
* **Hero Component:** Displays the high-contrast typography headline: *"Puri's Destination for Authentic Handloom Collections"* alongside a ghost CTA button pointing to the collection matrix.
* **USP Grid Component:** Four distinct, asymmetric cards presenting the core brand pillars:
  1. *Authentic Handloom Collection*.
  2. *Wide Variety (Sarees, Ethnic Wear, Home Textiles)*.
  3. *Quality You Can Trust*.
  4. *Supporting Indian Artisans & Local Weaving Communities*.
* **Curated Highlights Reel:** Horizontal preview slots displaying marquee weaving types (e.g., *Patachitra, Bomkai, Kotpad, Sambalpuri Silk, Ikkat*).

### Page 2: About Us Route (`/about`)

* **Functional Intent:** Build authority, establish authenticity, and articulate the socio-economic mission of the showroom.
* **Craftsmanship Narrative:** Rich text blocks outlining the deep traditional weaving techniques behind the catalog.
* **Founding Background:** Introduction to the brand's presence at Swargadwar Square, detailing their commitment to quality and longevity.
* **Artisan Message Block:** Dedicated screen layout highlighting how every transaction supports local weavers and preserves traditional handicraft legacies.

### Page 3: Product Category – Sarees Route (`/category/sarees`)

* **Functional Intent:** Exhibit the premium saree collections using an absolute portfolio layout.
* **Grid Layout:** A clean, multi-column image grid gallery utilizing dynamic aspect ratios.
* **Card Specifications:** Each card must prominently display a high-resolution product image, descriptive title (e.g., *Sambalpuri Silk Saree*, *Bomkai Saree*), a short text description, and a clear call-to-action.
* **The Conversion Component:** Individual item cards feature an explicit, hardcoded WhatsApp CTA string. Clicking the button triggers a WhatsApp link targeting the primary endpoint, pre-populating a specific message (e.g., `https://wa.me/919937937653?text=Hi,%20I%20am%20interested%20in%20the%20Sambalpuri%20Silk%20Saree%20seen%20on%20your%20website.`).

### Page 4: Product Category – Kurtis Route (`/category/kurtis`)

* **Functional Intent:** Display traditional and contemporary kurti wear options.
* **Visual Display Layer:** Implements an interactive grid gallery built with a responsive lightbox viewer.
* **Interaction Loop:** Clicking any image expands it into a full-screen high-fidelity viewport with swipe behaviors enabled for mobile devices. Each layout view retains a visible floating inquiry link.

### Page 5: Product Category – Bed Covers Route (`/category/bed-covers`)

* **Functional Intent:** Showcase home textile craftsmanship, targeting conscious buyers and gift hunters.
* **Layout Logic:** Optimized card listings highlighting handwoven textures, sizing boundaries, and fabric composition descriptions.
* **CTA Integration:** Includes a localized Form-jump or direct-to-WhatsApp link mapped with custom query params for text inquiries.

### Page 6: Product Category – Dresses Route (`/category/dresses`)

* **Functional Intent:** Showcase ethnic dress materials, unstitched sets, and ready-to-wear pieces.
* **Performance Parameter:** Heavy image loads on this page are mitigated by implementing strict lazy loading using modern blur-up structural placeholders to maintain performance rules.

### Page 7: Product Category – Scarves & Jodo Route (`/category/scarves`)

* **Functional Intent:** Present highly accessible products targeted heavily toward tourists looking for authentic local handicrafts.
* **Layout System:** Minimalist styling emphasizing product variety and intricate designs.

### Page 8: Contact Us Route (`/contact`)

* **Functional Intent:** Provide physical verification and serve as the main lead collection terminal.
* **Embedded Inquiry Engine:** A robust, validated client-side contact form collecting *Name, Phone, Email, Product Interest*, and *Message*. It hooks directly into the client's email via Formspree.
* **Location Matrix Module:**
  * Explicit typography display of the physical showroom address: *Swargadwar Square, Bharath Sevashram Marg, Puri, Odisha*.
  * Clickable landline link (`tel:06752220037`).
  * Alternative fallback communication link targeting `9861900000`.
* **Google Maps Integration:** An iframe container cleanly embedding a highly precise business location pin for directions.

---

## 5. Global Requirements & Micro-Interactions

These elements run globally across all 8 routes to maintain a cohesive user experience.

### 5.1 Global Navigation & Header

* A clean, minimal typography layout displaying the "Handloom Garden" brand mark.
* On mobile viewports, the nav bar locks to the top view with a subtle backdrop filter blur to maintain reading legibility over image elements.
* Integrated social icons pointing directly to the brand's Facebook page and Instagram business account.

### 5.2 Global Conversions (The Floating WhatsApp Component)

* A persistent, float-positioned interactive action anchor pinned to the bottom right of all viewports.
* Hardcoded to target the client's verified WhatsApp business account number: **+91 99379 37653**.

### 5.3 On-Page Search Engine Optimization (SEO)

* Unique semantic meta titles and meta descriptions applied across all 8 individual routes.
* Proper heading hierarchies ($H1 \rightarrow H3$) and rigorous automated injection of `alt text` across all 50 launch images.
* Generation of static `robots.txt` and structural `sitemap.xml` feeds for automated submission via Google Search Console.

---

## 6. Client Asset & Content Delivery Requirements

To prevent code generation delays, the client must deliver these baseline parameters before development begins:

* **Logo Assets:** Vector formatting ($(AI / SVG)$) or high-resolution transparent PNGs (minimum width $1000\text{px}$).
* **Image Assets:** Clear product visuals scaled to a minimum threshold of $800 \times 800\text{px}$.
* **Domain Controls:** Registrar credentials or DNS point accessibility to map Vercel/Netlify staging servers cleanly.
