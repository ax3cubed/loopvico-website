export const siteConfig = {
  name: "Loopvico Laundry & Linen",
  shortName: "Loopvico",
  url: "https://loopvico.com",
  email: "loopvico@gmail.com",
  phone: {
    display: "+1 (945) 312-6685",
    e164: "+19453126685",
    digits: "19453126685",
  },
  whatsappUrl: "https://wa.me/19453126685",
  scanToChatImage: "/wa.link_8ezlu9.png",
  serviceAreas: [
    "Mansfield",
    "Arlington",
    "Irving",
    "Las Colinas",
    "Grand Prairie",
  ],
  /** Shown on Contact and kept in sync with JSON-LD opening hours. */
  businessHours: [
    { day: "Sunday", range: "Closed" },
    { day: "Monday", range: "8 AM – 11 AM" },
    { day: "Tuesday", range: "10 AM – 6 PM" },
    { day: "Wednesday", range: "10 AM – 6 PM" },
    { day: "Thursday", range: "10 AM – 6 PM" },
    { day: "Friday", range: "10 AM – 6 PM" },
    { day: "Saturday", range: "7 AM – 10 AM" },
  ] as const,
  /** LocalBusiness `openingHoursSpecification` (closed days omitted). */
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday"],
      opens: "08:00",
      closes: "11:00",
    },
    {
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "10:00",
    },
  ] as const,
} as const;
