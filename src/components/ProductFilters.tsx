import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProductFiltersProps {
  category: string;
  onFiltersChange: (filters: any) => void;
}

const ProductFilters = ({ category, onFiltersChange }: ProductFiltersProps) => {
  const [budget, setBudget] = useState([0, 2000]);

  const renderLaptopFilters = () => (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Use Case</h3>
        <div className="space-y-3">
          {["AI / Machine Learning", "Coding / Development", "Gaming", "Online Classes", "Designing / Creative"].map((use) => (
            <div key={use} className="flex items-center space-x-2">
              <Checkbox id={use} />
              <Label htmlFor={use} className="text-sm font-normal cursor-pointer">
                {use}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Preference</h3>
        <RadioGroup defaultValue="performance">
          {["Lightweight", "Performance", "Battery Life", "Storage Capacity"].map((pref) => (
            <div key={pref} className="flex items-center space-x-2">
              <RadioGroupItem value={pref.toLowerCase()} id={pref} />
              <Label htmlFor={pref} className="text-sm font-normal cursor-pointer">
                {pref}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );

  const renderMobileTabletFilters = () => (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Primary Use</h3>
        <div className="space-y-3">
          {["Online Classes", "Gaming", "Content Creation", "Reading / Notes"].map((use) => (
            <div key={use} className="flex items-center space-x-2">
              <Checkbox id={use} />
              <Label htmlFor={use} className="text-sm font-normal cursor-pointer">
                {use}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Preference</h3>
        <RadioGroup defaultValue="battery">
          {["Battery Life", "Camera Quality", "Screen Size", "Performance"].map((pref) => (
            <div key={pref} className="flex items-center space-x-2">
              <RadioGroupItem value={pref.toLowerCase()} id={pref} />
              <Label htmlFor={pref} className="text-sm font-normal cursor-pointer">
                {pref}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );

  const renderHeadphonesFilters = () => (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Use Case</h3>
        <div className="space-y-3">
          {["Online Classes", "Music Listening", "Gaming", "Study / Focus"].map((use) => (
            <div key={use} className="flex items-center space-x-2">
              <Checkbox id={use} />
              <Label htmlFor={use} className="text-sm font-normal cursor-pointer">
                {use}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Connection Type</h3>
        <RadioGroup defaultValue="wireless">
          {["Wireless", "Wired", "Both"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <RadioGroupItem value={type.toLowerCase()} id={type} />
              <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );

  const renderArduinoFilters = () => (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Skill Level</h3>
        <RadioGroup defaultValue="beginner">
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level.toLowerCase()} id={level} />
              <Label htmlFor={level} className="text-sm font-normal cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Kit Type</h3>
        <RadioGroup defaultValue="full">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="full" id="full" />
            <Label htmlFor="full" className="text-sm font-normal cursor-pointer">
              Full Kit
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="components" id="components" />
            <Label htmlFor="components" className="text-sm font-normal cursor-pointer">
              Components Only
            </Label>
          </div>
        </RadioGroup>
      </div>
    </>
  );

  const renderAccessoriesFilters = () => (
    <>
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Type</h3>
        <div className="space-y-3">
          {["Bag / Backpack", "Keyboard", "Mouse", "Calculator", "Books", "USB / Storage"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Quality Preference</h3>
        <RadioGroup defaultValue="good">
          {["Budget / Cheap", "Good Quality", "Premium"].map((quality) => (
            <div key={quality} className="flex items-center space-x-2">
              <RadioGroupItem value={quality.toLowerCase()} id={quality} />
              <Label htmlFor={quality} className="text-sm font-normal cursor-pointer">
                {quality}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );

  return (
    <Card className="p-6">
      <h2 className="font-display text-xl font-bold mb-6">Filters</h2>

      <div className="space-y-6">
        {/* Budget Filter - Always shown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm">Budget</h3>
            <span className="text-sm text-muted-foreground">
              ${budget[0]} - ${budget[1]}
            </span>
          </div>
          <Slider
            min={0}
            max={2000}
            step={50}
            value={budget}
            onValueChange={setBudget}
            className="w-full"
          />
        </div>

        <Separator />

        {/* Category-specific filters */}
        {category === "laptop" && renderLaptopFilters()}
        {category === "tablet" && renderMobileTabletFilters()}
        {category === "headphones" && renderHeadphonesFilters()}
        {category === "arduino" && renderArduinoFilters()}
        {category === "accessories" && renderAccessoriesFilters()}

        <Separator />

        {/* Condition Filter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm">Condition</h3>
          <div className="space-y-3">
            {["Brand New", "Like New", "Good", "Fair"].map((condition) => (
              <div key={condition} className="flex items-center space-x-2">
                <Checkbox id={condition} />
                <Label htmlFor={condition} className="text-sm font-normal cursor-pointer">
                  {condition}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductFilters;
