import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "engineering" | "medical" | "general" | "secondhand";
  items: string[];
}

const CategoryCard = ({ title, description, icon, color, items }: CategoryCardProps) => {
  const colorClasses = {
    engineering: "from-engineering/20 to-engineering/5 border-engineering/30 hover:border-engineering/50",
    medical: "from-medical/20 to-medical/5 border-medical/30 hover:border-medical/50",
    general: "from-general/20 to-general/5 border-general/30 hover:border-general/50",
    secondhand: "from-secondhand/20 to-secondhand/5 border-secondhand/30 hover:border-secondhand/50",
  };

  const iconColorClasses = {
    engineering: "bg-engineering/10 text-engineering",
    medical: "bg-medical/10 text-medical",
    general: "bg-general/10 text-general",
    secondhand: "bg-secondhand/10 text-secondhand",
  };

  return (
    <Card className={`group relative overflow-hidden border-2 bg-gradient-to-br ${colorClasses[color]} card-hover cursor-pointer`}>
      <div className="p-6 space-y-4">
        {/* Icon */}
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconColorClasses[color]}`}>
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Items List */}
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-background/50 mt-4"
        >
          Explore {title}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Card>
  );
};

export default CategoryCard;
