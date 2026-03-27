import { notFound } from "next/navigation";
import PropertyDetails from "@/components/listings/PropertyDetails";
import { propertyList } from "@/components/listings/propertyData";

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
