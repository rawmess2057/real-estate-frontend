import Link from "next/link";
import { ebGaramond } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { type PropertyRecord } from "./propertyData";

type PropertyDetailsProps = {
	property: PropertyRecord;
};

function PropertyDetails({ property }: PropertyDetailsProps) {
	return (
		<main className="pt-4 pb-16 px-4 md:px-10 lg:px-16 bg-[#FAFAFA] min-h-screen">
			<div className="mb-6">
				<Link href="/properties" className="text-sm text-[#7171FF] hover:underline">
					Back to Properties
				</Link>
			</div>

			<section className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-8">
				<aside className="bg-white border border-[#EAEAEA] rounded-xl p-5 h-fit lg:sticky lg:top-26 order-2 lg:order-1">
					<h2 className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-1`}>
						Enquiry Form
					</h2>
					<p className="text-sm text-[#6A6A6A] mb-5">Ask for price details, visit time, or availability.</p>

					<form className="space-y-3">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
						/>
						<input
							type="email"
							placeholder="Email Address"
							className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
						/>
						<input
							type="tel"
							placeholder="Phone Number"
							className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
						/>
						<textarea
							rows={4}
							placeholder="I am interested in this property. Please share details."
							className="w-full rounded-md border border-[#D4D4D4] p-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF] resize-none"
						/>
						<Button type="submit" className="w-full bg-[#7171FF]">
							Send Enquiry
						</Button>
					</form>
				</aside>

				<div className="order-1 lg:order-2">
					<div className="bg-white border border-[#EAEAEA] rounded-xl overflow-hidden">
						<img src={property.image} alt={property.title} className="w-full h-[260px] md:h-[360px] object-cover" />
						<div className="p-5 md:p-6">
							<div className="flex flex-wrap items-center gap-2 mb-3">
								<span className="text-xs px-3 py-1 rounded-full bg-[#EEF0FF] text-[#4B55BD] font-medium">
									{property.purpose}
								</span>
								<span className="text-xs px-3 py-1 rounded-full bg-[#F4F4F4] text-[#5E5E5E] font-medium">
									{property.propertyType}
								</span>
							</div>

							<h1 className={`${ebGaramond.className} text-[32px] font-semibold text-[#2E2E2E] leading-tight`}>
								{property.title}
							</h1>
							<p className="text-lg font-semibold text-[#7171FF] mt-1">{property.price}</p>

							<div className="flex items-center gap-2 mt-3">
								<img src="/images/vector3.svg" alt="location" />
								<p className="text-sm text-[#5D5D5D] font-medium">{property.location}</p>
							</div>

							<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
								<div className="rounded-lg border border-[#E5E5E5] p-3">
									<p className="text-xs text-[#7A7A7A]">Beds</p>
									<p className="font-medium text-[#2E2E2E]">{property.beds}</p>
								</div>
								<div className="rounded-lg border border-[#E5E5E5] p-3">
									<p className="text-xs text-[#7A7A7A]">Area</p>
									<p className="font-medium text-[#2E2E2E]">{property.area}</p>
								</div>
								<div className="rounded-lg border border-[#E5E5E5] p-3">
									<p className="text-xs text-[#7A7A7A]">Road Access</p>
									<p className="font-medium text-[#2E2E2E]">{property.roadAccess}</p>
								</div>
							</div>

							<div className="mt-7">
								<h2 className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-2`}>
									Description
								</h2>
								<p className="text-[#5F5F5F] leading-7">{property.description}</p>
							</div>

							<div className="mt-7">
								<h2 className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-3`}>
									Amenities
								</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
									{property.amenities.map((item) => (
										<div key={item} className="flex items-center gap-2 text-[#4A4A4A]">
											<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E9EDFF] text-[#4754C5] text-xs">
												✓
											</span>
											<span className="text-sm">{item}</span>
										</div>
									))}
								</div>
							</div>

							<div className="mt-7">
								<h2 className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-3`}>
									Property Images
								</h2>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
									{property.gallery.map((image, index) => (
										<img
											key={`${property.id}-${index}`}
											src={image}
											alt={`${property.title} ${index + 1}`}
											className="w-full h-28 md:h-32 object-cover rounded-md"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default PropertyDetails;
