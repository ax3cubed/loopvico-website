import type { Metadata } from "next";
import { LandingHub } from "@/components/landing-hub";
import { solutionPages } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Laundry Solutions by Use Case",
  description:
    "Find tailored laundry service pages for busy families, working professionals, Airbnb hosts, and salons/spas.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsHubPage() {
  return (
    <LandingHub
      title="Laundry Solutions by Use Case"
      description="Choose a page that matches your day-to-day needs and see the service flow, pricing model, and booking options."
      basePath="/solutions"
      pages={solutionPages}
    />
  );
}
