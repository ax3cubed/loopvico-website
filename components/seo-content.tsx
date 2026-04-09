import { siteConfig } from "@/lib/site";

const useCases = [
  {
    title: "Wash-and-fold without the errand",
    description:
      "Schedule pickup and delivery laundry service for everyday clothing, workwear, and weekly household loads without losing time to laundromat runs.",
  },
  {
    title: "Linens, towels, and bulky essentials",
    description:
      "Keep bathrooms, guest rooms, and short-term rental turnovers moving with professional care for towels, sheets, bath mats, and other heavy items.",
  },
  {
    title: "Book fast by phone or WhatsApp",
    description:
      "Text, call, message on WhatsApp, or scan the on-page chat code to book a pickup window that fits your routine in the DFW Metroplex.",
  },
];

export function SeoContent() {
  return (
    <section className="bg-[#f4efe5] py-24 lg:py-32" aria-labelledby="seo-content-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-widest text-[#1a365d]/70">
            DFW Laundry Pickup & Delivery
          </span>
          <h2
            id="seo-content-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-[#1a365d] sm:text-4xl"
          >
            Reliable laundry service for busy homes, hosts, and small teams across DFW
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Loopvico provides laundry pickup and delivery for customers who want
            professional wash-and-fold service without rearranging their week. We
            serve households, apartment residents, Airbnb hosts, and light
            commercial clients in {siteConfig.serviceAreas.join(", ")} with a
            straightforward booking flow and closet-ready turnaround.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#1a365d]/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#1a365d]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#1a365d]">
              Local laundry help that fits real weekly routines
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you need recurring laundry pickup in Mansfield, same-week
              wash-and-fold service in Arlington, or dependable towel and linen
              support in Irving and Las Colinas, the goal stays the same: remove
              friction from laundry day. Customers can book one-time service or
              move into a monthly plan when they want a predictable pickup rhythm.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This page is intentionally built for people searching terms like
              laundry pickup and delivery, wash and fold near me, linen laundry
              service, and laundry service in Grand Prairie. The copy is visible
              because it should help visitors quickly confirm service fit, not
              just satisfy search engines.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#1a365d] p-8 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">Coverage and booking</h3>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Preferred booking is through WhatsApp, but customers can also call
              or text directly at {siteConfig.phone.display}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/85"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-white/75">
              If you are nearby but do not see your area listed, the fastest way
              to confirm coverage is to open chat and send your pickup ZIP code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
