import ListingCard from "./ListingCard";
import carImage from "@/assets/car-verna.jpg";
import bikeImage from "@/assets/bike-pulsar.jpg";
import phoneImage from "@/assets/phone-galaxy.jpg";

interface Listing {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  phone?: string;
  category: string;
}

const listings: Listing[] = [
  {
    id: "1",
    title: "Hyundai Verna 1.6 CRDi SX - 2012",
    description: "Papers Valid till 03-2027 • Insurance Valid till 02-2026 • Well maintained",
    imageUrl: carImage,
    phone: "7820955742",
    category: "cars"
  },
  {
    id: "2",
    title: "Bajaj Pulsar NS160 - 2017",
    description: "Validity till 2032 • Very Neat • Well Maintained • Great Condition",
    imageUrl: bikeImage,
    phone: "8639061181",
    category: "bikes"
  },
  {
    id: "3",
    title: "Honda Activa 5G - 2018",
    description: "Genuine 40,000 KM Driven • 75% Tyres Condition • Excellent Performance",
    videoUrl: "/videos/scooter-activa.mp4",
    phone: "8499089621",
    category: "scooters"
  },
  {
    id: "4",
    title: "Samsung Galaxy Z Fold 3 5G",
    description: "12GB RAM • 256GB Storage • Super Offer Price • Premium Condition",
    imageUrl: phoneImage,
    phone: "9908663481",
    category: "electronics"
  }
];

const ListingsSection = () => {
  const categories = [
    { id: "cars", title: "Cars" },
    { id: "bikes", title: "Bikes" },
    { id: "scooters", title: "Scooters" },
    { id: "electronics", title: "Electronics" }
  ];

  return (
    <>
      {categories.map((category) => {
        const categoryListings = listings.filter(l => l.category === category.id);
        if (categoryListings.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="py-16 md:py-24">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    title={listing.title}
                    description={listing.description}
                    videoUrl={listing.videoUrl}
                    imageUrl={listing.imageUrl}
                    phone={listing.phone}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ListingsSection;
