import { siteConfig } from "@/lib/site";

export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingPageContent = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  intro: string;
  description: string;
  heroImage: string;
  trustPoints: string[];
  howItWorks: string[];
  pricingSnapshot: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  faq: LandingFaq[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export const locationPages: LandingPageContent[] = [
  {
    slug: "mansfield",
    name: "Mansfield",
    headline: "Laundry Pickup & Delivery in Mansfield, TX",
    subheadline:
      "Premium wash-and-fold service with transparent pricing and reliable 48-hour turnaround — built for busy Mansfield households.",
    intro:
      "Stop spending your weekends sorting laundry. Loopvico picks up from your Mansfield doorstep, professionally washes, dries, and folds every item, then delivers it back within 48 hours. From Heritage to Walnut Creek, we cover Mansfield neighborhoods on a consistent weekly route.",
    description:
      "Door-to-door laundry pickup and delivery across Mansfield neighborhoods. Flat-rate bags starting at $40, subscription plans, and 48-hour turnaround.",
    heroImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Reliable 48-hour turnaround on every order",
      "$40 flat-rate clothing bag — up to 15 lbs included",
      "Book in minutes via WhatsApp, call, or text",
    ],
    howItWorks: [
      "Pick your day — choose a convenient pickup window that fits your week",
      "We handle everything — sorting, washing, drying, folding, and a final quality check",
      "Fresh delivery — your clean laundry arrives folded and ready to put away within 48 hours",
    ],
    pricingSnapshot: [
      "$40 flat-rate clothing bag (up to 15 lbs)",
      "$48 towel & linen bag for heavier items",
      "$2.29/lb for loads over 20 lbs",
    ],
    primaryCtaLabel: "Book Mansfield Pickup",
    secondaryCtaLabel: "Call Mansfield Team",
    faq: [
      {
        question: "Do you serve all of Mansfield?",
        answer:
          "Yes — we cover Mansfield and surrounding neighborhoods including Heritage, Walnut Creek, and areas near Mansfield ISD. Route availability is confirmed at booking.",
      },
      {
        question: "How fast is delivery in Mansfield?",
        answer:
          "Standard turnaround is 48 hours from the time we pick up. Need it sooner? Ask about our next-day option for select weekdays.",
      },
      {
        question: "What if I have special garment instructions?",
        answer:
          "Just let us know at pickup or via WhatsApp. We handle delicates, color separation, and specific detergent requests at no extra charge.",
      },
    ],
    seoTitle: "Laundry Pickup & Delivery in Mansfield, TX",
    seoDescription:
      "Book premium laundry pickup and delivery in Mansfield, TX. Flat-rate bags, subscription options, and reliable 48-hour turnaround.",
    keywords: [
      "mansfield laundry pickup",
      "mansfield laundry delivery",
      "wash and fold mansfield tx",
    ],
  },
  {
    slug: "arlington",
    name: "Arlington",
    headline: "Laundry Pickup & Delivery in Arlington, TX",
    subheadline:
      "Convenient wash-and-fold service designed for busy Arlington schedules — from UTA students to working families.",
    intro:
      "Whether you live near UTA, the Entertainment District, or the residential heart of Arlington, Loopvico brings professional laundry service to your door. No more hauling bags to the laundromat — we pick up, process, and return your laundry folded and fresh.",
    description:
      "Professional laundry pickup across Arlington — from UTA neighborhoods to family homes. Flexible scheduling, flat-rate options, and recurring subscription plans.",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "No in-store waiting — we come to you",
      "Transparent pricing with no hidden fees",
      "Dedicated support via WhatsApp anytime",
    ],
    howItWorks: [
      "Schedule online — pick the day and time window that works best",
      "We pick up from your address — apartment, house, or dorm",
      "Receive folded laundry at your doorstep within 48 hours",
    ],
    pricingSnapshot: [
      "$40 flat-rate clothing bag (up to 15 lbs)",
      "$48 towel & linen bag for heavier items",
      "Monthly subscription plans save up to 15%",
    ],
    primaryCtaLabel: "Book Arlington Pickup",
    secondaryCtaLabel: "Text Arlington Team",
    faq: [
      {
        question: "Is pickup available near UTA?",
        answer:
          "Yes — Arlington coverage includes neighborhoods near UTA, major apartment complexes, and residential areas across the city.",
      },
      {
        question: "Can I request recurring service?",
        answer:
          "Absolutely. Weekly and family plans are available for Arlington customers. Set your preferred day and we handle the rest.",
      },
      {
        question: "Do you serve apartment complexes?",
        answer:
          "Yes, we pick up from apartments, condos, and townhomes. Just provide your unit number and any access instructions.",
      },
    ],
    seoTitle: "Arlington Laundry Pickup & Delivery Service",
    seoDescription:
      "Arlington laundry pickup and delivery with professional wash-and-fold care. Fast scheduling, flat-rate options, and subscription plans.",
    keywords: [
      "arlington laundry service",
      "laundry delivery arlington",
      "arlington wash and fold",
    ],
  },
  {
    slug: "irving",
    name: "Irving",
    headline: "Laundry Pickup & Delivery in Irving, TX",
    subheadline:
      "Professional laundry service built for apartment dwellers, families, and working professionals across Irving.",
    intro:
      "Irving moves fast — your laundry service should keep up. Loopvico offers dependable pickup routes across Irving, from Valley Ranch apartments to established family neighborhoods. Every load is sorted, washed, and folded to our quality standard before arriving back at your door.",
    description:
      "Dependable laundry pickup across Irving — covering apartments, family homes, and mixed-use communities. Consistent quality and 48-hour turnaround.",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Service tailored to your weekly schedule",
      "Consistent fold quality on every order",
      "Local DFW team — real people, real support",
    ],
    howItWorks: [
      "Choose your pickup time — morning or afternoon windows available",
      "Your laundry is sorted by color and fabric, then processed with care",
      "Delivery arrives in as little as 48 hours, folded and ready",
    ],
    pricingSnapshot: [
      "$40 flat-rate clothing bag (up to 15 lbs)",
      "$2.29/lb by-the-pound for larger loads",
      "$149/month weekly subscription plan",
    ],
    primaryCtaLabel: "Book Irving Pickup",
    secondaryCtaLabel: "Call Irving Support",
    faq: [
      {
        question: "Do you service apartments in Irving?",
        answer:
          "Yes — we support residential complexes, mixed-use communities, and single-family homes across Irving and Valley Ranch.",
      },
      {
        question: "Can I include linens and towels?",
        answer:
          "Yes, heavy linens and towels are processed under our $48 towel and linen bag service. Perfect for weekly refreshes.",
      },
    ],
    seoTitle: "Irving Laundry Pickup & Delivery",
    seoDescription:
      "Need laundry pickup in Irving, TX? Get premium wash-and-fold with fast delivery, predictable pricing, and easy booking.",
    keywords: [
      "irving laundry pickup",
      "irving laundry delivery service",
      "laundry irving tx",
    ],
  },
  {
    slug: "las-colinas",
    name: "Las Colinas",
    headline: "Laundry Pickup & Delivery in Las Colinas",
    subheadline:
      "A polished laundry service designed for high-demand schedules in Las Colinas — professionals, couples, and busy households.",
    intro:
      "Between work, commute, and everything else Las Colinas life throws at you, laundry shouldn't be on the list. Loopvico delivers premium wash-and-fold service direct to your condo or townhome. We handle the sorting, washing, and folding so your closet stays full and your weekends stay free.",
    description:
      "Premium laundry pickup for Las Colinas condos, townhomes, and apartments. Designed for professionals who value their time.",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Reliable route coverage across Las Colinas",
      "Premium wash-and-fold with garment-level care",
      "Fast WhatsApp support — responses in minutes",
    ],
    howItWorks: [
      "Message us your pickup details — address, day, and any special instructions",
      "We collect and process your laundry with our quality-controlled workflow",
      "Receive clean, folded items delivered on your scheduled delivery day",
    ],
    pricingSnapshot: [
      "$40 standard clothing bag (up to 15 lbs)",
      "$48 towel & linen bag for heavier fabrics",
      "Priority-friendly subscription options available",
    ],
    primaryCtaLabel: "Book Las Colinas Pickup",
    secondaryCtaLabel: "Message on WhatsApp",
    faq: [
      {
        question: "Do you service condo buildings in Las Colinas?",
        answer:
          "Yes — we pick up from condos, apartments, and townhomes across Las Colinas. Provide unit details and any access instructions at booking.",
      },
      {
        question: "How do I start service?",
        answer:
          "Send your address and preferred pickup day via WhatsApp or call/text us directly. We'll confirm your route and schedule your first pickup.",
      },
    ],
    seoTitle: "Las Colinas Laundry Pickup and Delivery",
    seoDescription:
      "Book laundry pickup and delivery in Las Colinas with flat-rate options, subscription plans, and professional wash-and-fold care.",
    keywords: [
      "las colinas laundry",
      "laundry delivery las colinas",
      "wash and fold las colinas",
    ],
  },
  {
    slug: "grand-prairie",
    name: "Grand Prairie",
    headline: "Laundry Pickup & Delivery in Grand Prairie, TX",
    subheadline:
      "Save hours every week with dependable laundry pickup service — trusted by Grand Prairie families and professionals.",
    intro:
      "Grand Prairie homes deserve a laundry service that shows up on time and delivers consistently. Loopvico covers Grand Prairie on established weekly routes, so you always know when your pickup is coming and when your clean laundry will be back.",
    description:
      "Trusted laundry pickup across Grand Prairie neighborhoods. Consistent routes, simple pricing, and family-sized subscription plans.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Trusted local routes with consistent timing",
      "Reliable turnaround — your laundry back in 48 hours",
      "Simple, predictable pricing model",
    ],
    howItWorks: [
      "Book a pickup request — choose your day and we'll confirm your time window",
      "Laundry is professionally sorted, washed, dried, and folded",
      "Delivery is completed at your location — apartment or house",
    ],
    pricingSnapshot: [
      "$40 flat-rate bag for everyday clothing",
      "$2.29/lb for larger family-sized loads",
      "$249/month Family Loop subscription",
    ],
    primaryCtaLabel: "Book Grand Prairie Pickup",
    secondaryCtaLabel: "Call to Schedule",
    faq: [
      {
        question: "Are pickups available throughout Grand Prairie?",
        answer:
          "Yes — we support most Grand Prairie neighborhoods on active pickup routes. Confirm availability when you book.",
      },
      {
        question: "Can I set a weekly pickup day?",
        answer:
          "Yes — recurring weekly pickups are included with all subscription plans. Choose your day and we keep it consistent.",
      },
    ],
    seoTitle: "Grand Prairie Laundry Pickup & Delivery",
    seoDescription:
      "Grand Prairie laundry pickup and delivery with premium wash-and-fold, clear pricing, and recurring service options.",
    keywords: [
      "grand prairie laundry service",
      "laundry pickup grand prairie",
      "grand prairie wash and fold",
    ],
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    headline: "Laundry Pickup & Delivery in Fort Worth, TX",
    subheadline:
      "Time-saving laundry pickup service for Fort Worth households and professionals — reliable, affordable, and hassle-free.",
    intro:
      "Fort Worth is big — but your laundry hassle doesn't have to be. Loopvico is expanding pickup routes across Fort Worth to bring the same premium wash-and-fold service trusted by Mansfield and Arlington customers. Book once, set your schedule, and let us handle the rest.",
    description:
      "Expanding laundry pickup coverage across Fort Worth. Same premium quality, same flat-rate pricing, same 48-hour turnaround.",
    heroImage:
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Designed for busy Fort Worth routines",
      "Quick booking via WhatsApp, call, or text",
      "Structured quality control on every load",
    ],
    howItWorks: [
      "Submit your pickup request — tell us your address and preferred day",
      "We clean and fold with care — every item sorted and quality-checked",
      "Your order is delivered back on schedule — 48-hour standard turnaround",
    ],
    pricingSnapshot: [
      "$40 flat-rate clothing bag option",
      "$48 towel & linen bag for heavier items",
      "Monthly subscriptions for hands-free routine service",
    ],
    primaryCtaLabel: "Book Fort Worth Pickup",
    secondaryCtaLabel: "Text Fort Worth Team",
    faq: [
      {
        question: "Is Fort Worth currently supported?",
        answer:
          "Yes — Fort Worth is included in our expanding service footprint. Route availability is confirmed when you book your first pickup.",
      },
      {
        question: "What is the turnaround time?",
        answer:
          "Standard orders are returned in approximately 48 hours. Next-day delivery is available on select weekdays for an additional fee.",
      },
    ],
    seoTitle: "Fort Worth Laundry Pickup and Delivery Service",
    seoDescription:
      "Laundry pickup and delivery in Fort Worth, TX. Professional wash-and-fold with flat-rate options and recurring monthly plans.",
    keywords: [
      "fort worth laundry pickup",
      "laundry delivery fort worth",
      "wash and fold fort worth",
    ],
  },
];

export const servicePages: LandingPageContent[] = [
  {
    slug: "wash-and-fold",
    name: "Wash & Fold",
    headline: "Professional Wash & Fold Laundry Service in DFW",
    subheadline:
      "Expertly cleaned, neatly folded, and delivered to your door — so your closet is always ready.",
    intro:
      "Our wash-and-fold service takes the most time-consuming chore off your plate. Every load is sorted by color and fabric type, washed with premium detergent, tumble-dried to the right setting, and folded to a consistent standard. You get closet-ready laundry without lifting a finger.",
    description:
      "Our core laundry service — every item sorted, washed, dried, and folded to a consistent quality standard. Flat-rate or by-the-pound pricing.",
    heroImage:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Every load sorted by color, fabric, and care label",
      "Consistent fold standards — closet-ready every time",
      "Door-to-door convenience with free pickup and delivery",
    ],
    howItWorks: [
      "Schedule your pickup — choose a day and time that works for you",
      "We wash and fold following best practices for fabric care",
      "Receive fresh, neatly folded laundry back at your door",
    ],
    pricingSnapshot: [
      "$40 flat-rate clothing bag (up to 15 lbs)",
      "$2.29/lb for volume orders over 20 lbs",
      "Subscription plans for recurring weekly service",
    ],
    primaryCtaLabel: "Book Wash & Fold",
    secondaryCtaLabel: "Call for Details",
    faq: [
      {
        question: "What is included in wash and fold?",
        answer:
          "We wash, dry, fold, and package your everyday laundry — shirts, pants, socks, underwear, activewear, and casual items. Delivered back ready for your closet.",
      },
      {
        question: "How fast is service?",
        answer:
          "Standard turnaround is 48 hours from pickup to delivery. Next-day options available on select weekdays.",
      },
      {
        question: "Can I request specific detergent or settings?",
        answer:
          "Yes — share your preferences at booking or via WhatsApp. We accommodate hypoallergenic detergent, cold wash, and other common requests.",
      },
    ],
    seoTitle: "DFW Wash and Fold Laundry Service",
    seoDescription:
      "Book wash-and-fold laundry service in DFW with pickup and delivery. Professional care, clear pricing, and fast turnaround.",
    keywords: [
      "wash and fold near me",
      "dfw wash and fold",
      "laundry wash and fold service",
    ],
  },
  {
    slug: "pickup-and-delivery",
    name: "Pickup & Delivery",
    headline: "Laundry Pickup & Delivery — Skip the Laundromat",
    subheadline:
      "We come to you, wash everything, and bring it back folded. The easiest way to handle laundry in DFW.",
    intro:
      "No more hauling bags, waiting for machines, or folding on a table someone else just used. Loopvico's pickup and delivery service brings the laundromat to your doorstep — without the laundromat. Schedule a pickup, hand off your bag, and we handle every step from there.",
    description:
      "Full-service pickup and delivery — we collect your dirty laundry, process it with care, and return it fresh and folded. Zero effort required.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "No drop-off needed — we pick up from your address",
      "Real-time communication via WhatsApp throughout",
      "Flexible scheduling — morning and afternoon windows",
    ],
    howItWorks: [
      "Request your pickup — tell us where and when via WhatsApp, call, or text",
      "We process your laundry — wash, dry, fold, and quality-check every item",
      "On-time doorstep return — clean laundry delivered within 48 hours",
    ],
    pricingSnapshot: [
      "Flat-rate and by-the-pound options available",
      "Subscription savings up to 15% for recurring customers",
      "No hidden booking fees — price is what you see",
    ],
    primaryCtaLabel: "Schedule Pickup",
    secondaryCtaLabel: "Message on WhatsApp",
    faq: [
      {
        question: "How do pickups work?",
        answer:
          "You choose a time window and we collect from your provided address. Leave your bag at the door or hand it off in person — your choice.",
      },
      {
        question: "Do I need to be home for delivery?",
        answer:
          "Not necessarily. We coordinate delivery preferences with you — doorstep drop-off, handoff, or other arrangements based on your setup.",
      },
    ],
    seoTitle: "Laundry Pickup and Delivery in DFW",
    seoDescription:
      "Professional laundry pickup and delivery across DFW. Book quickly, choose transparent pricing, and reclaim your time.",
    keywords: [
      "laundry pickup and delivery",
      "laundry delivery service dfw",
      "pickup laundry service",
    ],
  },
  {
    slug: "subscription-laundry",
    name: "Subscription Plans",
    headline: "Monthly Laundry Subscription Plans",
    subheadline:
      "Set it and forget it — recurring weekly pickups with priority scheduling and built-in savings.",
    intro:
      "For households that generate laundry every week (which is most of them), our subscription plans remove the mental load entirely. Choose your plan, pick your day, and we show up on schedule — every single week. No rebooking, no reminders, no hassle.",
    description:
      "Recurring weekly laundry service with priority scheduling. Choose Weekly Loop ($149/mo) or Family Loop ($249/mo) and never think about laundry again.",
    heroImage:
      "https://images.unsplash.com/photo-1558171813-01ed3d751c93?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Weekly recurring pickups — same day, every week",
      "Priority scheduling so your slot is always reserved",
      "Built-in savings compared to per-order pricing",
    ],
    howItWorks: [
      "Choose your plan — Weekly Loop or Family Loop based on your household size",
      "Set your recurring pickup day — we reserve your slot every week",
      "Enjoy routine laundry completion — fresh delivery arrives like clockwork",
    ],
    pricingSnapshot: [
      "Weekly Loop: $149/month (1 bag/week)",
      "Family Loop: $249/month (2 bags/week)",
      "Free pickup and delivery included with all plans",
    ],
    primaryCtaLabel: "Start Subscription",
    secondaryCtaLabel: "Compare Plans",
    faq: [
      {
        question: "Can I switch plans later?",
        answer:
          "Yes — you can upgrade or downgrade your plan based on changing household needs. Just let us know via WhatsApp or phone.",
      },
      {
        question: "Who should use subscriptions?",
        answer:
          "Subscriptions are ideal for families, professionals, and anyone generating consistent weekly laundry. If you book more than twice a month, a plan saves you money and time.",
      },
      {
        question: "Can I pause my subscription?",
        answer:
          "Yes — pausing for travel or schedule changes is supported. Just give us a heads up before your next scheduled pickup.",
      },
    ],
    seoTitle: "Laundry Subscription Service in DFW",
    seoDescription:
      "Monthly laundry subscriptions with recurring pickup and delivery in DFW. Choose weekly or family plans and simplify laundry.",
    keywords: [
      "laundry subscription",
      "monthly laundry service",
      "recurring wash and fold",
    ],
  },
  {
    slug: "towel-and-linen",
    name: "Towel & Linen",
    headline: "Towel & Linen Laundry Service",
    subheadline:
      "Reliable, professional care for heavy items — towels, robes, bath mats, and household linens.",
    intro:
      "Towels and linens are heavier, bulkier, and harder to dry properly at home. Our towel and linen service is designed specifically for these items — we use the right water temperature, cycle length, and drying settings to keep your fabrics soft, fresh, and long-lasting.",
    description:
      "Specialized service for heavy fabrics — towels, robes, bath mats, sheets, and linens. Processed with linen-safe settings for lasting quality.",
    heroImage:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Purpose-built workflow for heavy fabrics",
      "Consistent handling that keeps linens soft and fresh",
      "Convenient pickup and return — same 48-hour window",
    ],
    howItWorks: [
      "Book a heavy-item pickup — towels, robes, bath mats, or sheets",
      "We process with our linen-safe workflow — right temp, right cycle",
      "Receive cleaned linens delivered back folded and fresh",
    ],
    pricingSnapshot: [
      "$48 towel & linen bag per pickup",
      "Large-load support available by arrangement",
      "Pairs perfectly with a regular laundry subscription",
    ],
    primaryCtaLabel: "Book Linen Service",
    secondaryCtaLabel: "Call for Linen Pickup",
    faq: [
      {
        question: "Can I include bath mats and robes?",
        answer:
          "Yes — towels, robes, bath mats, and similar heavy linens are all accepted under this service.",
      },
      {
        question: "Is this available for small businesses?",
        answer:
          "Yes — we support qualifying businesses like salons, spas, and Airbnb hosts who need regular towel and linen turnover.",
      },
    ],
    seoTitle: "Towel and Linen Laundry Pickup Service",
    seoDescription:
      "Professional towel and linen laundry service with pickup and delivery in DFW. Great for homes and qualifying businesses.",
    keywords: [
      "towel laundry service",
      "linen laundry service",
      "towel and linen pickup",
    ],
  },
  {
    slug: "by-the-pound",
    name: "By-the-Pound",
    headline: "By-the-Pound Laundry Service",
    subheadline:
      "Flexible per-pound pricing for larger loads and overflow weeks — pay for exactly what you send.",
    intro:
      "Some weeks produce more laundry than a single bag can handle. Our by-the-pound service gives you the flexibility to send larger loads without overpaying. Every item is weighed, processed, and billed transparently — no surprises.",
    description:
      "Flexible pricing for larger loads at $2.29/lb with a 20 lb minimum. Perfect for overflow weeks, seasonal cleanouts, or family-sized batches.",
    heroImage:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Best value for larger and family-sized loads",
      "Clear per-pound pricing — weighed and billed transparently",
      "Full pickup and delivery included in every order",
    ],
    howItWorks: [
      "Request your pickup — no need to weigh anything yourself",
      "Laundry is weighed at our facility, then washed, dried, and folded",
      "Delivered with a transparent receipt showing exact weight and cost",
    ],
    pricingSnapshot: [
      "$2.29 per pound — all-inclusive processing",
      "20 lb minimum per order",
      "Great for family loads and overflow weeks",
    ],
    primaryCtaLabel: "Book By-the-Pound",
    secondaryCtaLabel: "Ask About Minimums",
    faq: [
      {
        question: "What is the minimum order?",
        answer:
          "By-the-pound service requires a 20 lb minimum per order. Below that, our $40 flat-rate bag is usually the better value.",
      },
      {
        question: "How is pricing calculated?",
        answer:
          "We weigh your laundry at our facility and charge $2.29 per pound. You receive a transparent receipt with exact weight and total.",
      },
    ],
    seoTitle: "By-the-Pound Laundry Service in DFW",
    seoDescription:
      "Need laundry by the pound? Book pickup and delivery at $2.29/lb with a 20 lb minimum across DFW service areas.",
    keywords: [
      "by the pound laundry",
      "laundry per pound",
      "dfw by the pound laundry",
    ],
  },
];

export const solutionPages: LandingPageContent[] = [
  {
    slug: "busy-families",
    name: "Busy Families",
    headline: "Laundry Service Built for Busy Families",
    subheadline:
      "Reclaim your evenings and weekends — scheduled pickup and delivery handles the laundry so you can focus on family.",
    intro:
      "Between school runs, sports practice, and everything else, laundry piles up fast. Loopvico's family-focused service gives you a consistent weekly rhythm — we pick up, wash, fold, and deliver so your household stays running without the Sunday laundry marathon.",
    description:
      "Weekly laundry service designed for family-sized volume. Recurring plans, flat-rate options, and by-the-pound pricing for overflow weeks.",
    heroImage:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Predictable weekly pickups — same day every week",
      "Designed for family-sized laundry volume",
      "Simple recurring plans with built-in savings",
    ],
    howItWorks: [
      "Set a household plan — choose Weekly or Family Loop based on your volume",
      "We collect and process your family's laundry every week on schedule",
      "Clean laundry returns folded and ready to put away — kids' stuff separated",
    ],
    pricingSnapshot: [
      "Weekly Loop: $149/month (1 bag/week)",
      "Family Loop: $249/month (2 bags/week)",
      "By-the-pound available for overflow weeks",
    ],
    primaryCtaLabel: "Book Family Laundry",
    secondaryCtaLabel: "Compare Family Plans",
    faq: [
      {
        question: "Which plan works best for families?",
        answer:
          "Most households with 3+ people start with the Family Loop ($249/mo) for two bags per week. Smaller families often find the Weekly Loop sufficient.",
      },
      {
        question: "Can service be paused for vacations?",
        answer:
          "Yes — let us know before your next scheduled pickup and we'll pause your plan. No penalties or charges during paused weeks.",
      },
      {
        question: "Do you separate kids' clothes from adults'?",
        answer:
          "If requested, yes. Just let us know your household preferences and we'll separate accordingly.",
      },
    ],
    seoTitle: "Laundry Pickup Service for Busy Families",
    seoDescription:
      "Family-friendly laundry pickup and delivery with recurring options, flat-rate bags, and dependable turnaround across DFW.",
    keywords: [
      "family laundry service",
      "laundry service for families",
      "busy family wash and fold",
    ],
  },
  {
    slug: "professionals",
    name: "Working Professionals",
    headline: "Laundry Service for Working Professionals",
    subheadline:
      "Keep your week focused on what matters — we handle the wash, fold, and delivery around your schedule.",
    intro:
      "You didn't build your career to spend weekends doing laundry. Loopvico gives working professionals a dead-simple way to keep a full, fresh closet without the time investment. Book via WhatsApp in 30 seconds, and your clean laundry arrives back folded and ready.",
    description:
      "Time-saving laundry service for professionals. Quick WhatsApp booking, flexible scheduling around work hours, and premium fold quality.",
    heroImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Book in 30 seconds via WhatsApp",
      "Reliable timing that respects your schedule",
      "Premium presentation quality for every item",
    ],
    howItWorks: [
      "Message us your pickup details — address, preferred day and time window",
      "Your laundry is professionally cleaned, dried, and folded",
      "Order is delivered around your schedule — before work, after work, or weekends",
    ],
    pricingSnapshot: [
      "Flat-rate bags for routine weekly needs",
      "Subscription plans for consistent hands-free service",
      "By-the-pound for larger seasonal batches",
    ],
    primaryCtaLabel: "Book Professional Service",
    secondaryCtaLabel: "Message to Start",
    faq: [
      {
        question: "Can I schedule around work hours?",
        answer:
          "Yes — we coordinate pickup and delivery windows around your availability. Morning, evening, and weekend slots are all options.",
      },
      {
        question: "Is recurring service available?",
        answer:
          "Yes — the Weekly Loop ($149/mo) is our most popular plan among professionals. Set your day and forget about laundry entirely.",
      },
    ],
    seoTitle: "Laundry Service for Working Professionals",
    seoDescription:
      "Professional laundry pickup and delivery built for busy workweeks. Save time with fast booking and reliable turnaround.",
    keywords: [
      "professional laundry service",
      "laundry for professionals",
      "pickup laundry for work schedule",
    ],
  },
  {
    slug: "airbnb-hosts",
    name: "Airbnb Hosts",
    headline: "Laundry & Linen Service for Airbnb Hosts",
    subheadline:
      "Dependable linen and towel turnover for short-term rentals — keep every guest experience five-star fresh.",
    intro:
      "Guest turnover doesn't wait — and neither should your linen service. Loopvico helps Airbnb and short-term rental hosts keep clean towels, sheets, and linens moving between checkouts and check-ins. Coordinate your turnover schedule with us and we'll have fresh sets ready when your guests arrive.",
    description:
      "Linen turnover support for short-term rental hosts. Towels, sheets, and duvet covers processed and delivered on your checkout/check-in schedule.",
    heroImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Linen-focused processing for guest-ready quality",
      "Quick WhatsApp coordination for turnover timing",
      "Consistent quality that supports 5-star reviews",
    ],
    howItWorks: [
      "Share your turnover schedule — checkout and check-in dates",
      "We collect and process linens, towels, and sheets between guests",
      "Clean, folded sets are delivered before your next guest arrives",
    ],
    pricingSnapshot: [
      "Towel & linen service at $48/bag",
      "Recurring turnover support options available",
      "Route-based scheduling for reliable timing",
    ],
    primaryCtaLabel: "Book Host Linen Service",
    secondaryCtaLabel: "Call for Turnover Support",
    faq: [
      {
        question: "Do you support recurring turnovers?",
        answer:
          "Yes — set a recurring schedule based on your booking cadence. We adjust as your calendar changes throughout the season.",
      },
      {
        question: "What items are accepted?",
        answer:
          "Towels, sheets, duvet covers, pillowcases, and common short-term rental linens. Specialty items can be discussed at booking.",
      },
      {
        question: "Can you work around last-minute bookings?",
        answer:
          "We do our best — message us on WhatsApp and we'll confirm if we can accommodate based on route availability.",
      },
    ],
    seoTitle: "Airbnb Laundry and Linen Service in DFW",
    seoDescription:
      "Laundry and linen support for Airbnb hosts with pickup and delivery options for towels, sheets, and turnover-ready sets.",
    keywords: [
      "airbnb laundry service",
      "short term rental linen service",
      "airbnb towel laundry",
    ],
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    headline: "Laundry Service for Salons & Spas",
    subheadline:
      "Professional towel and linen support for daily client operations — so you can focus on your clients, not the laundry pile.",
    intro:
      "Salons and spas go through towels fast. Instead of running loads between appointments or managing an in-house laundry setup, let Loopvico handle your towel and linen processing. We pick up on a schedule that matches your business rhythm and deliver clean inventory ready for your next client.",
    description:
      "Business towel and linen service for salons, spas, and wellness studios. Recurring pickup schedules aligned with your client volume.",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&h=500&fit=crop&q=80",
    trustPoints: [
      "Hygiene-focused processing for client-facing businesses",
      "Recurring service availability matched to your schedule",
      "Business-friendly communication and invoicing",
    ],
    howItWorks: [
      "Set your service cadence — daily, twice-weekly, or weekly pickups",
      "We collect and process your towels, capes, and linens",
      "Clean inventory is delivered back on your schedule — ready for clients",
    ],
    pricingSnapshot: [
      "Towel & linen bag pricing at $48/bag",
      "Volume-friendly pricing for high-frequency pickups",
      "Recurring business plans available",
    ],
    primaryCtaLabel: "Book Salon/Spa Service",
    secondaryCtaLabel: "Discuss Business Needs",
    faq: [
      {
        question: "Can you handle repeated weekly towel loads?",
        answer:
          "Yes — recurring business pickups are our specialty. Set your schedule and we maintain it week after week.",
      },
      {
        question: "Is this only for large businesses?",
        answer:
          "Not at all. Solo stylists, small studios, and growing salons all use this service. Volume starts at a single bag per pickup.",
      },
    ],
    seoTitle: "Salon and Spa Towel Laundry Service",
    seoDescription:
      "Towel and linen laundry service for salons and spas in DFW with recurring pickup and delivery support.",
    keywords: [
      "salon towel laundry",
      "spa linen service",
      "business laundry pickup",
    ],
  },
];

export const landingHubs = [
  {
    slug: "locations",
    title: "Laundry Service Areas",
    description:
      "We serve neighborhoods across the DFW Metroplex. Find your city below and see local pricing, scheduling, and service details.",
    pages: locationPages,
  },
  {
    slug: "services",
    title: "Laundry Services",
    description:
      "From flat-rate bags to by-the-pound pricing and monthly subscriptions — choose the service format that fits your laundry needs.",
    pages: servicePages,
  },
  {
    slug: "solutions",
    title: "Solutions by Lifestyle",
    description:
      "Whether you're a busy parent, a working professional, an Airbnb host, or running a salon — we have a laundry workflow built for you.",
    pages: solutionPages,
  },
] as const;

export function getAllLandingPages(): LandingPageContent[] {
  return [...locationPages, ...servicePages, ...solutionPages];
}

export function getLocationBySlug(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}

export function getDefaultFaq(): LandingFaq[] {
  return [
    {
      question: "What areas do you serve?",
      answer: `We currently serve ${siteConfig.serviceAreas.join(", ")} and nearby DFW communities. Check your area's page for route details.`,
    },
    {
      question: "How do I book service?",
      answer:
        "Book in minutes by messaging us on WhatsApp, calling, or texting. We'll confirm your pickup window right away.",
    },
  ];
}
