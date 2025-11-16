import { Menu, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/hyd-logo.jpg";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Cars", id: "cars" },
    { label: "Bikes", id: "bikes" },
    { label: "Scooters", id: "scooters" },
    { label: "Electronics", id: "electronics" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="HYD Sales Channel" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold">HYD Sales Channel</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open("https://wa.me/917386985246", "_blank")}
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                onClick={() => window.open("https://wa.me/917386985246", "_blank")}
                className="gap-2 mt-4"
              >
                <Phone className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
