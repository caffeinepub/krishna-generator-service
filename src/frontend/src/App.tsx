import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  CheckCircle,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Settings,
  ThumbsUp,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Generator Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FLEET = [
  {
    img: "/assets/generated/gen-small-kva.dim_600x400.jpg",
    range: "10 – 25 KVA",
    title: "Small Events & Shops",
    badge: "Light Duty",
    kva: 10,
    uses: ["Retail shops", "Small events", "Residences", "Small offices"],
    desc: "Compact & fuel-efficient generators for shops, small offices, events and residential backup power needs.",
  },
  {
    img: "/assets/generated/gen-medium-kva.dim_600x400.jpg",
    range: "40 – 82.5 KVA",
    title: "Offices & Showrooms",
    badge: "Medium Duty",
    kva: 40,
    uses: ["Corporate offices", "Showrooms", "Hotels", "Schools"],
    desc: "Reliable mid-range DG sets perfect for commercial establishments, offices and hospitality businesses.",
  },
  {
    img: "/assets/generated/gen-industrial-kva.dim_600x400.jpg",
    range: "100 – 250 KVA",
    title: "Industries & Hospitals",
    badge: "Industrial",
    kva: 100,
    uses: ["Factories", "Hospitals", "Malls", "Construction sites"],
    desc: "High-capacity generators for factories, hospitals, large malls and critical infrastructure requirements.",
  },
  {
    img: "/assets/generated/gen-heavy-kva.dim_600x400.jpg",
    range: "320 – 900 KVA",
    title: "Heavy Industries",
    badge: "Heavy Duty",
    kva: 320,
    uses: ["Steel plants", "Data centres", "Power backup", "Large projects"],
    desc: "Massive power output for steel plants, data centres, large industrial campuses and critical power backup.",
  },
];

const WHY_ITEMS = [
  {
    icon: Clock,
    label: "24/7 Support",
    desc: "Round-the-clock technical support and emergency power deployment — we are always available.",
  },
  {
    icon: Truck,
    label: "Quick Delivery",
    desc: "Prompt installation and on-time delivery to your site anywhere in the region.",
  },
  {
    icon: Zap,
    label: "Full KVA Range",
    desc: "From 10 KVA to 900 KVA — we have the right DG set for every scale of requirement.",
  },
  {
    icon: Users,
    label: "Expert Team",
    desc: "Certified engineers and technicians with years of hands-on experience in generator operations.",
  },
  {
    icon: ThumbsUp,
    label: "Reliable Fleet",
    desc: "Well-maintained, regularly serviced DG sets with guaranteed uptime and zero breakdowns.",
  },
  {
    icon: Award,
    label: "Trusted Service",
    desc: "Years of serving hundreds of satisfied clients across industries, events and businesses.",
  },
];

const KVA_OPTIONS = [
  { label: "10–25 KVA", value: 10 },
  { label: "40–82.5 KVA", value: 40 },
  { label: "100–250 KVA", value: 100 },
  { label: "320–900 KVA", value: 320 },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    kvaRequirement: 10,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitInquiry();

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success(
        "Inquiry submitted! Mr. Ramdev Pandit will contact you shortly.",
      );
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <Toaster richColors position="top-right" />

      {/* ── UTILITY BAR ──────────────────────────────────────── */}
      <div className="bg-navy text-white/80 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-orange" />
              A.T Road, Athagaon, Near Railway Gate No. 4
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-orange" />
              Open 24/7 — Emergency Power Available
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919435405593"
              className="flex items-center gap-1.5 hover:text-orange transition-colors"
            >
              <Phone className="w-3 h-3 text-orange" />
              +91 94354 05593
            </a>
            <a
              href="https://wa.me/916913828054"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-orange transition-colors"
            >
              <SiWhatsapp className="w-3 h-3 text-green-400" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2.5 group"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-colors duration-200">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-navy text-sm tracking-widest uppercase">
                KRISHNA
              </p>
              <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                GENERATOR SERVICE
              </p>
            </div>
          </button>

          <nav
            className="hidden md:flex items-center gap-5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="text-sm font-semibold text-foreground hover:text-orange transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleNav("#contact")}
              className="hidden md:inline-flex bg-orange hover:bg-orange/90 text-white font-bold text-sm px-5 uppercase tracking-wide"
              data-ocid="nav.primary_button"
            >
              GET A QUOTE
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded text-navy"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-border"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="text-sm font-semibold text-left text-foreground hover:text-orange transition-colors py-2 border-b border-border last:border-0"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => handleNav("#contact")}
                  className="bg-orange hover:bg-orange/90 text-white font-bold text-sm w-full mt-3 uppercase tracking-wide"
                  data-ocid="nav.primary_button"
                >
                  GET A QUOTE
                </Button>
                <div className="flex gap-3 mt-3 pt-3 border-t border-border">
                  <a
                    href="tel:+919435405593"
                    className="flex items-center gap-1.5 text-xs text-navy font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange" /> +91 94354
                    05593
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative overflow-hidden"
          style={{ minHeight: 540 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/assets/generated/hero-generator-site.dim_1200x700.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 rounded-full px-4 py-1.5 mb-6">
                <Zap className="w-3.5 h-3.5 text-orange" />
                <span className="text-orange font-semibold text-xs uppercase tracking-widest">
                  Diesel Generator Rentals
                </span>
              </div>
              <h1 className="font-extrabold text-5xl md:text-6xl leading-[1.05] uppercase text-white mb-3">
                RELIABLE POWER
              </h1>
              <h1 className="font-extrabold text-5xl md:text-6xl leading-[1.05] uppercase text-orange mb-6">
                WHEN YOU NEED IT MOST.
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                Krishna Generator Service provides premium diesel generator
                rentals from{" "}
                <strong className="text-orange">10 KVA to 900 KVA</strong> — for
                events, construction sites, factories, hospitals and every kind
                of business. Based in Athagaon.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => handleNav("#contact")}
                  className="bg-orange hover:bg-orange/90 text-white font-bold px-8 py-3 text-sm uppercase tracking-wider shadow-lg"
                  data-ocid="hero.primary_button"
                >
                  Request Free Quote
                </Button>
                <Button
                  onClick={() => handleNav("#fleet")}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3 text-sm uppercase tracking-wider bg-transparent"
                  data-ocid="hero.secondary_button"
                >
                  Explore Generators
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { label: "10 – 900 KVA", sub: "Full Range" },
                  { label: "24/7", sub: "Emergency Support" },
                  { label: "Quick", sub: "On-Site Delivery" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-orange font-extrabold text-2xl">
                      {stat.label}
                    </p>
                    <p className="text-white/60 text-xs uppercase tracking-wide">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* ── FLEET ────────────────────────────────────────────── */}
        <section id="fleet" className="bg-[#F3F5F7] py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-orange font-bold text-xs uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-navy">
                OUR GENERATOR FLEET
              </h2>
              <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
                Choose the right generator size for your requirement. We deliver
                and install at your site.
              </p>
              <div className="w-16 h-1 bg-orange mx-auto mt-5 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FLEET.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-card border border-border hover:shadow-xl transition-all duration-300 group flex flex-col"
                  data-ocid={`fleet.item.${i + 1}`}
                >
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/25" />
                    <span className="absolute top-3 left-3 bg-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-orange font-extrabold text-xl mb-1">
                      {item.range}
                    </p>
                    <h3 className="font-extrabold text-navy text-base uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <ul className="space-y-1 mb-4 flex-1">
                      {item.uses.map((u) => (
                        <li
                          key={u}
                          className="flex items-center gap-2 text-xs text-foreground"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => {
                        setForm((p) => ({ ...p, kvaRequirement: item.kva }));
                        handleNav("#contact");
                      }}
                      className="w-full bg-navy hover:bg-orange text-white text-xs font-bold uppercase tracking-wide transition-colors"
                      data-ocid={`fleet.primary_button.${i + 1}`}
                    >
                      Get Quote
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ───────────────────────────────────── */}
        <section id="why" className="bg-white py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-orange font-bold text-xs uppercase tracking-widest mb-3">
                Our Strengths
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-navy">
                WHY CHOOSE KRISHNA?
              </h2>
              <div className="w-16 h-1 bg-orange mx-auto mt-5 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-4 group p-5 rounded-lg border border-border hover:border-orange/30 hover:shadow-card transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange/20 transition-colors">
                    <item.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm uppercase mb-1.5">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER ─────────────────────────────────────────── */}
        <section id="about" className="bg-[#F3F5F7] py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/assets/generated/founder-ramdev.dim_600x700.jpg"
                  alt="Mr. Ramdev Pandit — Owner, Krishna Generator Service"
                  className="rounded-lg shadow-card w-full object-cover"
                  style={{ maxHeight: 500 }}
                />
                <div className="absolute bottom-5 left-0 right-0 mx-5">
                  <div className="bg-navy rounded-lg px-5 py-3 shadow-lg">
                    <p className="text-orange font-extrabold text-lg">
                      Mr. Ramdev Pandit
                    </p>
                    <p className="text-white/70 text-xs uppercase tracking-wide">
                      Founder & Owner, Krishna Generator Service
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-orange font-bold text-xs uppercase tracking-widest mb-3">
                  Meet Our Founder
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-navy mb-6">
                  ABOUT{" "}
                  <span className="text-orange">
                    KRISHNA
                    <br />
                    GENERATOR SERVICE
                  </span>
                </h2>
                <p className="text-foreground text-sm leading-7 mb-4">
                  Krishna Generator Service was founded by{" "}
                  <strong>Mr. Ramdev Pandit</strong> with a clear mission — to
                  ensure no business, event, or industry faces the setback of a
                  power outage. Based in Athagaon on A.T Road, we have become a
                  trusted name in the region for diesel generator rentals.
                </p>
                <p className="text-foreground text-sm leading-7 mb-4">
                  We maintain a well-serviced fleet of DG sets ranging from{" "}
                  <strong>10 KVA to 900 KVA</strong>, serving every scale — from
                  small shops and events to large factories, hospitals and
                  infrastructure projects across the area.
                </p>
                <p className="text-foreground text-sm leading-7 mb-6">
                  Our expert technical team, prompt delivery, and 24/7 emergency
                  support make us the most reliable partner for all your power
                  requirements.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "10 KVA to 900 KVA Range",
                    "Prompt Site Delivery",
                    "24/7 Emergency Support",
                    "Experienced Technicians",
                    "Affordable Rental Plans",
                    "Reliable & Tested Fleet",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CONSULTATION / CONTACT ───────────────────────────── */}
        <section id="contact" className="bg-navy py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-orange font-bold text-xs uppercase tracking-widest mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
                REQUEST A CONSULTATION
              </h2>
              <p className="text-white/60 text-sm mt-3">
                Fill the form and Mr. Ramdev Pandit will personally get back to
                you.
              </p>
              <div className="w-16 h-1 bg-orange mx-auto mt-5 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                  <h3 className="font-bold text-white text-base uppercase mb-6 tracking-wide flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange" /> Send Your Inquiry
                  </h3>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                        data-ocid="contact.success_state"
                      >
                        <div className="w-20 h-20 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                          <CheckCircle className="w-10 h-10 text-orange" />
                        </div>
                        <h4 className="text-white font-extrabold text-xl mb-2">
                          Inquiry Submitted!
                        </h4>
                        <p className="text-white/70 text-sm mb-6 max-w-xs">
                          Thank you! Mr. Ramdev Pandit will personally call you
                          back shortly.
                        </p>
                        <p className="text-white/50 text-xs mb-6">
                          Need immediate help? Call +91 94354 05593
                        </p>
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-orange text-orange hover:bg-orange hover:text-white text-sm"
                          data-ocid="contact.secondary_button"
                        >
                          Submit Another Inquiry
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        data-ocid="contact.modal"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="text-white/70 text-xs uppercase tracking-wide mb-1.5 block"
                            >
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              placeholder="Your full name"
                              value={form.name}
                              onChange={(e) =>
                                setForm((p) => ({ ...p, name: e.target.value }))
                              }
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange"
                              data-ocid="contact.input"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="text-white/70 text-xs uppercase tracking-wide mb-1.5 block"
                            >
                              Phone Number *
                            </label>
                            <Input
                              id="phone"
                              placeholder="+91 98765 43210"
                              value={form.phone}
                              onChange={(e) =>
                                setForm((p) => ({
                                  ...p,
                                  phone: e.target.value,
                                }))
                              }
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange"
                              data-ocid="contact.input"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-white/70 text-xs uppercase tracking-wide mb-1.5 block"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="yourname@example.com"
                            value={form.email}
                            onChange={(e) =>
                              setForm((p) => ({ ...p, email: e.target.value }))
                            }
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange"
                            data-ocid="contact.input"
                            required
                          />
                        </div>
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wide mb-2">
                            KVA Requirement *
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {KVA_OPTIONS.map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() =>
                                  setForm((p) => ({
                                    ...p,
                                    kvaRequirement: opt.value,
                                  }))
                                }
                                className={`text-xs py-2.5 px-2 rounded-md border transition-all font-semibold ${
                                  form.kvaRequirement === opt.value
                                    ? "bg-orange border-orange text-white shadow-md"
                                    : "bg-white/8 border-white/20 text-white/70 hover:border-orange/60 hover:text-white"
                                }`}
                                data-ocid="contact.select"
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="text-white/70 text-xs uppercase tracking-wide mb-1.5 block"
                          >
                            Message / Requirement Details
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Describe your requirement — location, duration, type of work..."
                            value={form.message}
                            onChange={(e) =>
                              setForm((p) => ({
                                ...p,
                                message: e.target.value,
                              }))
                            }
                            rows={4}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-orange resize-none"
                            data-ocid="contact.textarea"
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isPending}
                          className="w-full bg-orange hover:bg-orange/90 text-white font-extrabold uppercase tracking-wider py-3 text-sm"
                          data-ocid="contact.submit_button"
                        >
                          {isPending ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                        <p className="text-white/40 text-xs text-center">
                          Your inquiry is saved securely. Mr. Pandit will call
                          you back.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Contact Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="lg:col-span-2 flex flex-col gap-6"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold text-white text-base uppercase tracking-wide mb-5">
                    CONTACT DETAILS
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919435405593"
                      className="flex items-start gap-3 group"
                      data-ocid="contact.link"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange/40 transition-colors">
                        <Phone className="w-4 h-4 text-orange" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide">
                          Phone
                        </p>
                        <p className="text-white font-semibold text-sm">
                          +91 94354 05593
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/916913828054"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                      data-ocid="contact.link"
                    >
                      <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/40 transition-colors">
                        <SiWhatsapp className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide">
                          WhatsApp
                        </p>
                        <p className="text-white font-semibold text-sm">
                          +91 69138 28054
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-orange" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide">
                          Address
                        </p>
                        <p className="text-white font-semibold text-sm leading-relaxed">
                          A.T Road, Athagaon,
                          <br />
                          Near Railway Gate No. 4
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-orange" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide">
                          Availability
                        </p>
                        <p className="text-white font-semibold text-sm">
                          Open 24/7
                        </p>
                        <p className="text-white/50 text-xs">
                          Emergency power always available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency CTA */}
                <div className="bg-orange rounded-xl p-6 text-center">
                  <Wrench className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="text-white font-extrabold text-base uppercase mb-2">
                    Need Urgent Power?
                  </h4>
                  <p className="text-white/80 text-xs mb-4">
                    Call Mr. Ramdev Pandit directly for emergency generator
                    deployment.
                  </p>
                  <a href="tel:+919435405593" className="block">
                    <Button
                      className="w-full bg-navy hover:bg-navy/90 text-white font-bold text-sm py-2.5"
                      data-ocid="contact.primary_button"
                    >
                      <Phone className="w-4 h-4 mr-2" /> Call +91 94354 05593
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/916913828054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2"
                  >
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-2.5"
                      data-ocid="contact.secondary_button"
                    >
                      <SiWhatsapp className="w-4 h-4 mr-2" /> WhatsApp Us
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-[#061424] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-navy border border-orange/30 flex items-center justify-center">
                <Settings className="w-4 h-4 text-orange" />
              </div>
              <div>
                <p className="font-extrabold text-white text-xs tracking-widest uppercase">
                  KRISHNA
                </p>
                <p className="text-[9px] text-white/50 tracking-wider uppercase">
                  GENERATOR SERVICE
                </p>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              Your trusted partner for diesel generator rentals. Serving
              businesses, events and industries with reliable power solutions
              from 10 KVA to 900 KVA.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/916913828054"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors"
                data-ocid="footer.link"
              >
                <SiWhatsapp className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                data-ocid="footer.link"
              >
                <SiFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 hover:text-orange text-xs transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {FLEET.map((item) => (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => handleNav("#fleet")}
                    className="text-white/50 hover:text-orange text-xs transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
                    {item.range} — {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-orange mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-xs leading-relaxed">
                  A.T Road, Athagaon,
                  <br />
                  Near Railway Gate No. 4
                </p>
              </div>
              <a
                href="tel:+919435405593"
                className="flex items-center gap-2.5 hover:text-orange transition-colors"
                data-ocid="footer.link"
              >
                <Phone className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                <span className="text-white/50 text-xs">+91 94354 05593</span>
              </a>
              <a
                href="https://wa.me/916913828054"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-orange transition-colors"
                data-ocid="footer.link"
              >
                <SiWhatsapp className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-white/50 text-xs">
                  WhatsApp: +91 69138 28054
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                <span className="text-white/50 text-xs">Open 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
            <span>
              © {new Date().getFullYear()} Krishna Generator Service. Owned by
              Mr. Ramdev Pandit. All rights reserved.
            </span>
            <span>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ──────────────────────────── */}
      <a
        href="https://wa.me/916913828054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp"
        data-ocid="contact.link"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
