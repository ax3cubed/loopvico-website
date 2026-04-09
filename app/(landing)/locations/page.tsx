import type { Metadata } from "next";
import { LandingHub } from "@/components/landing-hub";
import { locationPages } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Laundry Service Areas in DFW",
  description:
    "Explore city landing pages for Loopvico laundry pickup and delivery service across Mansfield, Arlington, Irving, Las Colinas, Grand Prairie, and Fort Worth.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsHubPage() {
  return (
    <LandingHub
      title="Laundry Service Areas"
      description="Explore local pages designed to help you choose the best laundry pickup and delivery option in your city."
      basePath="/locations"
      pages={locationPages}
    />
  );
}
