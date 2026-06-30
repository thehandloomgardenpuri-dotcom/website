import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, getProductsByCategory, products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found | Puri Handloom Garden",
    };
  }

  // Keywords optimization (short form and long form keywords)
  const title = `${product.title} (${product.id}) | Best Saree Shop in Puri`;
  const description = `Discover ${product.title} at Handloom Garden, the best saree shop in Puri Swargadwar. Authentic ${product.cluster} handwoven pure silk mark sarees, dress materials and home textiles.`;

  return {
    title,
    description,
    keywords: [
      "best saree shop in puri",
      "saree shop in puri",
      "handloom shop in puri",
      "best handloom store in puri",
      "authentic handloom sarees in puri",
      "silk mark certified saree store in puri",
      "sambalpuri silk sarees in puri",
      "puri handloom garden",
      product.title,
      product.cluster,
      product.category,
      "odisha handloom",
    ],
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className="relative min-h-screen bg-cream text-charcoal flex flex-col justify-between">
        <Header />
        <div className="max-w-md mx-auto text-center py-24 px-6">
          <h1 className="font-serif text-4xl text-maroon mb-4">Product Not Found</h1>
          <p className="font-sans text-sm text-charcoal/60 mb-8">
            The product code <span className="font-bold">{resolvedParams.id}</span> could not be found.
          </p>
          <Link href="/" className="btn-maroon justify-center inline-flex">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailClient product={product} relatedProducts={relatedProducts} />
  );
}
