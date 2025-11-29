import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, DollarSign, ShoppingCart, TrendingUp, Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VendorDashboard = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook Pro 14\" M3",
      price: 1499,
      stock: 5,
      sales: 12,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop",
      category: "laptop",
    },
    {
      id: 2,
      name: "Arduino Starter Kit",
      price: 79,
      stock: 23,
      sales: 45,
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=100&h=100&fit=crop",
      category: "arduino",
    },
  ]);

  const stats = [
    {
      label: "Total Products",
      value: products.length,
      icon: Package,
      color: "text-engineering",
      bgColor: "bg-engineering/10",
    },
    {
      label: "Total Sales",
      value: `$${products.reduce((sum, p) => sum + p.price * p.sales, 0)}`,
      icon: DollarSign,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      label: "Orders",
      value: products.reduce((sum, p) => sum + p.sales, 0),
      icon: ShoppingCart,
      color: "text-medical",
      bgColor: "bg-medical/10",
    },
    {
      label: "Growth",
      value: "+23%",
      icon: TrendingUp,
      color: "text-general",
      bgColor: "bg-general/10",
    },
  ];

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Product added",
      description: "Your product has been listed successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">Vendor Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and sales</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`h-12 w-12 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="add-product">Add New Product</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="p-6">
              <h2 className="font-display text-xl font-bold mb-6">Your Products</h2>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>Price: ${product.price}</span>
                        <span>Stock: {product.stock}</span>
                        <span>Sales: {product.sales}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="add-product">
            <Card className="p-6">
              <h2 className="font-display text-xl font-bold mb-6">Add New Product</h2>
              <form onSubmit={handleAddProduct} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input id="name" placeholder="e.g., MacBook Pro 14" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laptop">Laptop / PC</SelectItem>
                        <SelectItem value="tablet">Mobile / Tablet</SelectItem>
                        <SelectItem value="headphones">Headphones</SelectItem>
                        <SelectItem value="arduino">Arduino / Electronics</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="medical">Medical Equipment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($) *</Label>
                    <Input id="price" type="number" placeholder="0.00" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity *</Label>
                    <Input id="stock" type="number" placeholder="0" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your product, its features, and benefits for students..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specs">Technical Specifications</Label>
                  <Textarea
                    id="specs"
                    placeholder="e.g., Processor: M3 Pro, RAM: 18GB, Storage: 512GB..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Product Image URL *</Label>
                  <Input
                    id="image"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Use Case Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {["AI / ML", "Coding", "Gaming", "Online Classes", "Designing"].map((tag) => (
                      <Button key={tag} type="button" variant="outline" size="sm">
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  List Product
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="p-6">
              <h2 className="font-display text-xl font-bold mb-6">Recent Orders</h2>
              <div className="text-center py-12 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No orders yet</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;
