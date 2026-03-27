import { notFound } from "next/navigation";
import PropertyDetails from "@/components/property/PropertyDetails";
import { propertyList } from "@/components/property/propertyData";

type PropertyDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const { id } = await params;
  const property = propertyList.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}
