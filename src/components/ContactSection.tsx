import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have something to sell? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">7386985246</p>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://wa.me/917386985246", "_blank")}
                >
                  Message Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent/10 text-accent">
                  <Instagram className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Instagram</h3>
                <p className="text-muted-foreground mb-4">@hyd_sales_channel</p>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://www.instagram.com/hyd_sales_channel/", "_blank")}
                >
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground mb-4">Hyderabad, India</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Sell?</h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us on WhatsApp and we'll help you sell your vehicles, electronics, or shops!
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => window.open("https://wa.me/917386985246", "_blank")}
                className="gap-2"
              >
                <Phone className="h-5 w-5" />
                Contact Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
