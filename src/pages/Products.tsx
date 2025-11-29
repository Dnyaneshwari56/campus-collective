import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [filters, setFilters] = useState({});

  const products = [
    {
      name: "MacBook Pro 14\" M3 - Perfect for Engineering",
      price: 1499,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      badge: "Trending",
      vendor: "TechHub Campus",
      category: "laptop",
    },
    {
      name: "Dell XPS 15 - Coding & AI Projects",
      price: 1299,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
      vendor: "TechHub Campus",
      category: "laptop",
    },
    {
      name: "Professional Stethoscope - Littmann Classic III",
      price: 189,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&h=500&fit=crop",
      badge: "Best Seller",
      vendor: "MedEquip Store",
      category: "medical",
    },
    {
      name: "Arduino Starter Kit with Components",
      price: 79,
      originalPrice: 99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=500&h=500&fit=crop",
      vendor: "ElectroLab",
      category: "arduino",
    },
    {
      name: "Sony WH-1000XM5 - Noise Cancelling",
      price: 349,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
      vendor: "AudioTech",
      category: "headphones",
    },
    {
      name: "iPad Pro 11\" - Note Taking & Reading",
      price: 799,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
      vendor: "TechHub Campus",
      category: "tablet",
    },
    {
      name: "Engineering Drawing Kit - Professional Grade",
      price: 45,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&h=500&fit=crop",
      vendor: "ArtTech Supplies",
      condition: "like-new" as const,
      category: "accessories",
    },
    {
      name: "Logitech MX Keys - Premium Keyboard",
      price: 99,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
      vendor: "PeripheralHub",
      category: "accessories",
    },
  ];

  const categoryTitles: Record<string, string> = {
    all: "All Products",
    laptop: "Laptops & PCs",
    tablet: "Tablets & Mobile",
    headphones: "Headphones & Audio",
    arduino: "Arduino & Electronics",
    accessories: "Accessories & Study Tools",
    medical: "Medical Equipment",
  };

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              {categoryTitles[category] || "Products"}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <ProductFilters category={category} onFiltersChange={setFilters} />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilters category={category} onFiltersChange={setFilters} />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found matching your filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
