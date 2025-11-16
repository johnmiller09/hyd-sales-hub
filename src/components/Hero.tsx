import { Button } from "@/components/ui/button";
import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/hyd-logo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="container relative px-4">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <img 
            src={logo} 
            alt="HYD Sales Channel" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-lg animate-fade-in"
          />
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              HYD Sales Channel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Your trusted marketplace for vehicles and electronics in Hyderabad
            </p>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl leading-relaxed">
            We sell the products of people. If you have anything like vehicles, electronics, 
            or shops to sell, connect with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/917386985246", "_blank")}
              className="gap-2 text-lg px-8 py-6"
            >
              <Phone className="h-5 w-5" />
              WhatsApp: 7386985246
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.instagram.com/hyd_sales_channel/", "_blank")}
              className="gap-2 text-lg px-8 py-6"
            >
              <Instagram className="h-5 w-5" />
              Follow on Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
