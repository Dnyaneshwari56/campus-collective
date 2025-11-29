import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Store } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              🎓 For Students, By Students
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Everything Students Need -{" "}
              <span className="text-gradient">New & Pre-Loved</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              From engineering kits to medical equipment, find everything you need for your academic journey. Shop department-specific essentials or sell your pre-loved items.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="gap-2 h-12 px-8 bg-primary hover:bg-primary-hover shadow-lg"
                onClick={() => navigate("/products")}
              >
                <ShoppingBag className="h-5 w-5" />
                Shop as Student
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 h-12 px-8 border-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                onClick={() => navigate("/vendor-dashboard")}
              >
                <Store className="h-5 w-5" />
                Sell as Vendor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-medical" />
                <span>Verified Vendors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-engineering" />
                <span>Campus Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[500px] animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Students studying with various equipment"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Floating Cards */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-engineering">500+</div>
                  <div className="text-xs text-muted-foreground">Products</div>
                </div>
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-medical">100+</div>
                  <div className="text-xs text-muted-foreground">Vendors</div>
                </div>
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-2xl font-bold text-secondary">1000+</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
