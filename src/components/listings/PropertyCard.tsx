import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export type Property = {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  beds: string;
  area: string;
  roadAccess: string;
};

type PropertyCardProps = {
  property: Property;
  href?: string;
};

function PropertyCard({ property, href }: PropertyCardProps) {
  const cardContent = (
    <Card className="w-full max-w-75 mb-1 overflow-hidden border-[#E5E5E5] shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-50 object-cover rounded-t-xl"
      />

      <CardHeader>
        <CardTitle className="font-bold">{property.price}</CardTitle>
        <h1 className="font-bold">{property.title}</h1>
        <div className="flex items-center gap-2">
          <img src="/images/vector3.svg" alt="location" />
          <p className="text-[12px] text-[#5D5D5D] font-medium">
            {property.location}
          </p>
        </div>

        <Separator className="border-[#5D5D5D] border-[1.5px] mt-2" />
      </CardHeader>

      <CardContent className="flex items-center gap-3">
        <div className="flex items-center px-2 gap-2">
          <img src="/images/vector.svg" alt="beds" />
          <p className="text-[12px] text-[#5D5D5D] font-medium">
            {property.beds}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/vector1.svg" alt="area" />
          <p className="text-[12px] text-[#5D5D5D] font-medium">
            {property.area}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/vector2.svg" alt="road access" />
          <p className="text-[12px] text-[#5D5D5D] font-medium">
            {property.roadAccess}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  if (!href) {
    return cardContent;
  }

  return (
    <Link
      href={href}
      className="block w-full max-w-75"
      aria-label={`View details for ${property.title}`}
    >
      {cardContent}
    </Link>
  );
}

export default PropertyCard;
