import { Heart, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  vendor: string;
  condition?: "new" | "like-new" | "good";
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  vendor,
  condition = "new",
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: name,
    });
  };

  const conditionColors = {
    new: "bg-medical/10 text-medical border-medical/20",
    "like-new": "bg-engineering/10 text-engineering border-engineering/20",
    good: "bg-secondhand/10 text-secondhand border-secondhand/20",
  };

  return (
    <Card 
      className="group overflow-hidden border card-hover cursor-pointer"
      onClick={() => navigate("/product/1")}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <Badge className="bg-secondary text-secondary-foreground shadow-md">
              {badge}
            </Badge>
          )}
          {condition !== "new" && (
            <Badge variant="outline" className={`shadow-md ${conditionColors[condition]}`}>
              {condition === "like-new" ? "Like New" : "Good"}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="h-9 w-9 shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Rating & Vendor */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
            <span className="font-medium text-foreground">{rating}</span>
            <span>({reviews})</span>
          </div>
          <span className="truncate max-w-[120px]">{vendor}</span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 leading-snug">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <Button 
          className="w-full gap-2 bg-primary hover:bg-primary-hover"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
