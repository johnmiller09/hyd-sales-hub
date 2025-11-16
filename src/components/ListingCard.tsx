import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ListingCardProps {
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  phone?: string;
}

const ListingCard = ({ title, description, videoUrl, imageUrl, phone }: ListingCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {videoUrl ? (
          <video 
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button 
          className="w-full gap-2"
          onClick={() => window.open(`https://wa.me/91${phone || "7386985246"}`, "_blank")}
        >
          <Phone className="h-4 w-4" />
          Contact via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
