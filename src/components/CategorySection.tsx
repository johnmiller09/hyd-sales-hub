import { Car, Bike, CircleDot, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const categories: Category[] = [
  {
    id: "cars",
    title: "Cars",
    icon: <Car className="h-8 w-8" />,
    description: "Premium cars at best prices"
  },
  {
    id: "bikes",
    title: "Bikes",
    icon: <Bike className="h-8 w-8" />,
    description: "Quality bikes for every rider"
  },
  {
    id: "scooters",
    title: "Scooters",
    icon: <CircleDot className="h-8 w-8" />,
    description: "Comfortable commute solutions"
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Latest gadgets and devices"
  }
];

const CategorySection = () => {
  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h2>
          <p className="text-lg text-muted-foreground">Find exactly what you're looking for</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className="p-6 text-center cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10 text-accent">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
