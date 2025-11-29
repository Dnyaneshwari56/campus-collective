import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Cpu, Stethoscope, BookOpen, RefreshCw, TrendingUp, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const categories = [
    {
      title: "Engineering",
      description: "Tech essentials for engineering students",
      icon: <Cpu className="h-7 w-7" />,
      color: "engineering" as const,
      items: ["Laptops & Tech", "Arduino & Robotics", "Drawing Kits", "Calculators"],
    },
    {
      title: "Medical",
      description: "Professional equipment for medical studies",
      icon: <Stethoscope className="h-7 w-7" />,
      color: "medical" as const,
      items: ["Stethoscopes", "Lab Coats", "Medical Kits", "Anatomy Models"],
    },
    {
      title: "General",
      description: "Essential supplies for all students",
      icon: <BookOpen className="h-7 w-7" />,
      color: "general" as const,
      items: ["Textbooks", "Stationery", "Dorm Essentials", "Bags"],
    },
    {
      title: "Second-Hand",
      description: "Pre-loved items at great prices",
      icon: <RefreshCw className="h-7 w-7" />,
      color: "secondhand" as const,
      items: ["Used Laptops", "Textbooks", "Lab Equipment", "Furniture"],
    },
  ];

  const featuredProducts = [
    {
      name: "MacBook Pro 14\" M3 - Perfect for Engineering",
      price: 1499,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      badge: "Trending",
      vendor: "TechHub Campus",
    },
    {
      name: "Professional Stethoscope - Littmann Classic III",
      price: 189,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&h=500&fit=crop",
      badge: "Best Seller",
      vendor: "MedEquip Store",
    },
    {
      name: "Arduino Starter Kit with Components",
      price: 79,
      originalPrice: 99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=500&h=500&fit=crop",
      vendor: "ElectroLab",
    },
    {
      name: "Engineering Drawing Kit - Professional Grade",
      price: 45,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&h=500&fit=crop",
      vendor: "ArtTech Supplies",
      condition: "like-new" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Shop by Department
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need for your field of study
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Campus Favorites
            </h2>
            <p className="text-muted-foreground">
              Most popular items among students
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center space-y-3">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-engineering/10">
              <Award className="h-8 w-8 text-engineering" />
            </div>
            <h3 className="font-display text-xl font-bold">Verified Vendors</h3>
            <p className="text-sm text-muted-foreground">
              All vendors are verified to ensure quality and authenticity
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Zap className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-bold">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Quick campus delivery or convenient pickup points
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical/10">
              <TrendingUp className="h-8 w-8 text-medical" />
            </div>
            <h3 className="font-display text-xl font-bold">Best Prices</h3>
            <p className="text-sm text-muted-foreground">
              Student-friendly prices and exclusive campus deals
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-engineering py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Start Selling?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of vendors already serving students on campus. 
            List your products and reach thousands of potential customers.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="gap-2 h-12 px-8 shadow-xl"
          >
            Become a Vendor
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold">CampusCart</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted marketplace for student essentials
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Engineering</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Medical</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">General</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Second-Hand</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">For Vendors</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sell on CampusCart</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Vendor Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CampusCart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
