"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type NavChild = {
  label: string;
  href: string;
  description: string;
};

type NavDropdown = {
  label: string;
  href: string;
  children: NavChild[];
};

const navDropdowns: NavDropdown[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Wash & Fold", href: "/services/wash-and-fold", description: "Sorted, washed, dried & folded" },
      { label: "Pickup & Delivery", href: "/services/pickup-and-delivery", description: "We come to you — zero effort" },
      { label: "Subscription Plans", href: "/services/subscription-laundry", description: "Recurring weekly service" },
      { label: "Towel & Linen", href: "/services/towel-and-linen", description: "Heavy fabrics, handled right" },
      { label: "By-the-Pound", href: "/services/by-the-pound", description: "Flexible pricing for big loads" },
    ],
  },
  {
    label: "Areas",
    href: "/locations",
    children: [
      { label: "Mansfield", href: "/locations/mansfield", description: "Heritage, Walnut Creek & more" },
      { label: "Arlington", href: "/locations/arlington", description: "UTA area & neighborhoods" },
      { label: "Irving", href: "/locations/irving", description: "Valley Ranch & surrounds" },
      { label: "Las Colinas", href: "/locations/las-colinas", description: "Condos, townhomes & apartments" },
      { label: "Grand Prairie", href: "/locations/grand-prairie", description: "Family neighborhoods covered" },
      { label: "Fort Worth", href: "/locations/fort-worth", description: "Expanding DFW coverage" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Busy Families", href: "/solutions/busy-families", description: "Weekly plans for households" },
      { label: "Professionals", href: "/solutions/professionals", description: "Built around your workweek" },
      { label: "Airbnb Hosts", href: "/solutions/airbnb-hosts", description: "Linen turnover support" },
      { label: "Salons & Spas", href: "/solutions/salons-spas", description: "Business towel service" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: "easeOut" as const } },
  exit: { opacity: 0, y: 4, scale: 0.98, transition: { duration: 0.12, ease: "easeIn" as const } },
};

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleDropdownEnter(label: string) {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  }

  function handleDropdownLeave() {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }

  function toggleMobileSection(label: string) {
    setExpandedMobile(expandedMobile === label ? null : label);
  }

  function handlePricingNavigation() {
    if (pathname === "/") {
      const pricingSection = document.getElementById("subscriptions");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push("/#subscriptions");
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/twitter-image.svg"
                alt="Loopvico wordmark"
                width={150}
                height={34}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-1">
              {navDropdowns.map((dropdown) => (
                <div
                  key={dropdown.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(dropdown.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)
                    }
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      openDropdown === dropdown.label
                        ? "text-[#1a365d] bg-slate-100"
                        : "text-slate-600 hover:text-[#1a365d] hover:bg-slate-50"
                    }`}
                    aria-expanded={openDropdown === dropdown.label}
                    aria-haspopup="true"
                  >
                    {dropdown.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === dropdown.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === dropdown.label && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden"
                        onMouseEnter={() => handleDropdownEnter(dropdown.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-2">
                          {dropdown.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-[#f9f7f2] transition-colors group"
                            >
                              <span className="text-sm font-medium text-[#1a365d] group-hover:text-[#1a365d]">
                                {child.label}
                              </span>
                              <span className="text-xs text-slate-400 group-hover:text-slate-500">
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-slate-100 px-2 py-2">
                          <Link
                            href={dropdown.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#1a365d]/70 hover:text-[#1a365d] rounded-lg hover:bg-[#f9f7f2] transition-colors"
                          >
                            View all {dropdown.label.toLowerCase()}
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <button
                type="button"
                onClick={handlePricingNavigation}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#1a365d] hover:bg-slate-50 rounded-lg transition-colors"
              >
                Pricing
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.e164}`}
                className="text-sm text-slate-500 hover:text-[#1a365d] transition-colors"
              >
                {siteConfig.phone.display}
              </a>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
              >
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setExpandedMobile(null);
              }}
              className="lg:hidden p-2 text-[#1a365d] rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-40 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="mx-4 mt-2 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-4">
                <nav className="flex flex-col gap-1">
                  {navDropdowns.map((dropdown) => (
                    <div key={dropdown.label}>
                      <button
                        onClick={() => toggleMobileSection(dropdown.label)}
                        className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-[#1a365d] rounded-lg hover:bg-slate-50 transition-colors"
                        aria-expanded={expandedMobile === dropdown.label}
                      >
                        {dropdown.label}
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            expandedMobile === dropdown.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedMobile === dropdown.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 pb-2 space-y-0.5">
                              {dropdown.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-[#f9f7f2] transition-colors"
                                >
                                  <span className="text-sm font-medium text-slate-700">
                                    {child.label}
                                  </span>
                                  <span className="text-xs text-slate-400">
                                    {child.description}
                                  </span>
                                </Link>
                              ))}
                              <Link
                                href={dropdown.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-[#1a365d]/60 hover:text-[#1a365d] transition-colors"
                              >
                                View all {dropdown.label.toLowerCase()} →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handlePricingNavigation();
                    }}
                    className="px-3 py-3 text-base font-medium text-[#1a365d] rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Pricing
                  </button>

                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                    <a
                      href={`tel:${siteConfig.phone.e164}`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 text-sm text-slate-600 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      {siteConfig.phone.display}
                    </a>
                    <Button
                      asChild
                      className="bg-green-600 hover:bg-green-700 text-white w-full rounded-full"
                    >
                      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Book on WhatsApp
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
