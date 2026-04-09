import type { Metadata } from "next";
import { LandingHub } from "@/components/landing-hub";
import { servicePages } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Laundry Services in DFW",
  description:
    "Browse Loopvico laundry services including wash-and-fold, pickup and delivery, subscriptions, linen service, and by-the-pound options.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesHubPage() {
  return (
    <LandingHub
      title="Laundry Services"
      description="Compare service formats and choose the option that matches your schedule, laundry volume, and preferences."
      basePath="/services"
      pages={servicePages}
    />
  );
}
