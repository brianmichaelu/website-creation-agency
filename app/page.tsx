"use client";

export default function Home() {
  const whatsappNumber = "255689824682";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const message = `
Hello, I want a website. Here are my business details:

Client Name: ${formData.get("clientName")}
Business Name: ${formData.get("businessName")}
Phone Number: ${formData.get("phone")}
Email: ${formData.get("email")}
Type of Business: ${formData.get("businessType")}
Pages Needed: ${formData.get("pagesNeeded")}
Preferred Website Style: ${formData.get("websiteStyle")}
Deadline: ${formData.get("deadline")}
Do you have a logo?: ${formData.get("hasLogo")}
Do you have photos?: ${formData.get("hasPhotos")}

Services/Products Offered:
${formData.get("services")}

Competitor/Example Websites:
${formData.get("examples")}

Extra Message:
${formData.get("extraMessage")}
`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    form.reset();
  };

  return (
    <main className="min-h-screen bg-[#f7efe3] text-[#1d1a16]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#fffaf0] shadow-lg shadow-[#1d1a16]/10">
        <div className="border-b border-[#1d1a16]/10 bg-[#1d1a16] px-6 py-4 text-[#fffaf0]">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
            <a href="#" className="block">
              <p className="text-2xl font-black tracking-tight">
                WebCraft <span className="text-[#f7d58b]">TZ</span>
              </p>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f7d58b]">
                Website Creation Studio
              </p>
            </a>

            <div className="grid gap-4 text-sm text-[#d8cabc] md:grid-cols-3 md:items-center">
              <div>
                <p className="font-black text-[#fffaf0]">Location</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>

              <div>
                <p className="font-black text-[#fffaf0]">Email</p>
                <p>lubrun.enterprises@gmail.com</p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="rounded-md bg-[#b45309] px-5 py-3 text-center font-black text-white transition hover:bg-[#92400e]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-[#1d1a16]/10 bg-[#fffaf0] px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
            <nav className="flex overflow-x-auto text-sm font-black uppercase text-[#5f5549]">
              <a href="#" className="border-r border-[#1d1a16]/10 px-5 py-5 transition hover:text-[#b45309]">
                Home
              </a>
              <a href="#services" className="border-r border-[#1d1a16]/10 px-5 py-5 transition hover:text-[#b45309]">
                Services
              </a>
              <a href="#packages" className="border-r border-[#1d1a16]/10 px-5 py-5 transition hover:text-[#b45309]">
                Packages
              </a>
              <a href="#process" className="border-r border-[#1d1a16]/10 px-5 py-5 transition hover:text-[#b45309]">
                Process
              </a>
              <a href="#portfolio" className="border-r border-[#1d1a16]/10 px-5 py-5 transition hover:text-[#b45309]">
                Portfolio
              </a>
              <a href="#client-form" className="px-5 py-5 transition hover:text-[#b45309]">
                Client Form
              </a>
            </nav>

            <a
              href="#client-form"
              className="hidden rounded-full border-2 border-[#b45309] bg-[#fffaf0] px-6 py-3 text-sm font-black uppercase text-[#b45309] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#b45309] hover:text-white md:block"
            >
              Request Website
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="editorial-grid relative overflow-hidden px-6 py-10 md:py-12">
        <div className="absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-[#d97706]/20 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#1b5e3f]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-16 bg-[#b45309]" />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b45309]">
                Key part of your marketing
              </p>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#1d1a16] md:text-6xl lg:text-7xl">
              Website
              <span className="block text-[#b45309]">Design</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5549]">
              I create clean, mobile-friendly business websites for hotels,
              service providers, printing companies, shops, real estate agents,
              clinics, restaurants and growing brands in Tanzania.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#client-form"
                className="rounded-md bg-[#1d1a16] px-8 py-4 text-center font-black text-[#fffaf0] shadow-xl shadow-[#1d1a16]/20 transition hover:-translate-y-1 hover:bg-[#b45309]"
              >
                Start Your Website
              </a>

              <a
                href="#portfolio"
                className="rounded-md border-2 border-[#1d1a16]/20 bg-[#fffaf0]/80 px-8 py-4 text-center font-black text-[#1d1a16] transition hover:-translate-y-1 hover:border-[#b45309] hover:text-[#b45309]"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="relative lg:translate-y-6">
            <div className="absolute -left-5 top-16 hidden h-16 w-16 rotate-12 rounded-2xl bg-[#fffaf0] p-4 shadow-2xl md:block">
              <div className="h-full w-full rounded-xl bg-[#b45309]" />
            </div>

            <div className="absolute -right-4 bottom-12 hidden h-20 w-20 -rotate-12 rounded-2xl bg-[#1d1a16] p-4 shadow-2xl md:block">
              <div className="h-full w-full rounded-xl bg-white/20" />
            </div>

            <div className="rounded-[2rem] bg-[#1d1a16] p-4 shadow-2xl shadow-[#1d1a16]/25">
              <div className="rounded-[1.5rem] bg-[#fffaf0] p-4 text-[#1d1a16]">
                <div className="mb-5 flex items-center justify-between border-b border-[#1d1a16]/10 pb-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b45309]">
                      Website Preview
                    </p>
                    <p className="mt-1 text-xl font-black">
                      Your Business Online
                    </p>
                  </div>

                  <div className="rounded-full bg-[#b45309] px-4 py-2 text-sm font-black text-white">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7efe3] p-5">
                    <p className="text-sm font-bold text-[#5f5549]">Pages</p>
                    <p className="mt-2 text-4xl font-black">5+</p>
                  </div>

                  <div className="rounded-2xl bg-[#f7efe3] p-5">
                    <p className="text-sm font-bold text-[#5f5549]">
                      Mobile Ready
                    </p>
                    <p className="mt-2 text-4xl font-black">100%</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-[#b45309] p-6 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">
                    Built for enquiries
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight">
                    WhatsApp, service sections, portfolio and client form.
                  </h3>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="h-3 rounded-full bg-[#e7d9c5]" />
                  <div className="h-3 w-4/5 rounded-full bg-[#e7d9c5]" />
                  <div className="h-3 w-2/3 rounded-full bg-[#e7d9c5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="services" className="scroll-mt-44 bg-[#fffaf0] px-6 py-10 md:py-12 text-[#1d1a16]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[#b45309]" />
                <p className="font-black uppercase tracking-[0.3em] text-[#b45309]">
                  Who this is for
                </p>
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-4xl">
                Websites built to make businesses look trusted and ready for clients.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#5f5549]">
              Whether your client runs a hotel, clinic, restaurant, real estate
              business or service company, the website should explain the
              business clearly, show credibility, and make enquiries easy.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Hotels & Guest Houses",
                number: "01",
                text: "Show rooms, amenities, location, gallery photos and booking enquiry options in a professional way.",
              },
              {
                title: "Printing Companies",
                number: "02",
                text: "Present printing services, branded products, sample work, quotation requests and WhatsApp orders.",
              },
              {
                title: "Clinics & Health Services",
                number: "03",
                text: "Build trust with service details, opening hours, contact information and a clean professional layout.",
              },
              {
                title: "Real Estate Businesses",
                number: "04",
                text: "Show properties, services, company information and enquiry buttons for buyers, renters or investors.",
              },
              {
                title: "Restaurants & Cafes",
                number: "05",
                text: "Display food, location, opening hours, menu highlights, gallery photos and direct contact options.",
              },
              {
                title: "Small Local Businesses",
                number: "06",
                text: "Give growing businesses a serious online presence with clear services, contact buttons and trust-building sections.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[#1d1a16]/10 bg-[#f7efe3] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#b45309]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#1d1a16]/10"
              >
                <div className="absolute right-6 top-5 text-6xl font-black leading-none text-[#1d1a16]/5 transition group-hover:text-[#b45309]/10">
                  {item.number}
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1a16] text-sm font-black text-[#f7d58b] transition group-hover:bg-[#b45309] group-hover:text-white">
                    {item.number}
                  </div>

                  <h3 className="text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 leading-7 text-[#5f5549]">
                    {item.text}
                  </p>

                  <div className="mt-6 h-[2px] w-16 bg-[#b45309] transition-all group-hover:w-28" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="scroll-mt-44 bg-[#1d1a16] px-6 py-8 md:py-10 text-[#fffaf0]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[#f7d58b]" />
                <p className="font-black uppercase tracking-[0.3em] text-[#f7d58b]">
                  Website packages
                </p>
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-4xl">
                Choose the right website package for your business.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#d8cabc]">
              Simple and clear website packages for Tanzanian businesses that
              want a professional online presence, better credibility, and easy
              customer enquiries through WhatsApp or forms.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Starter Website",
                label: "Simple presence",
                price: "TZS 250,000",
                desc: "Good for small businesses that need a simple online presence.",
                features: [
                  "1–3 pages",
                  "Mobile-friendly design",
                  "WhatsApp button",
                  "Contact section",
                  "Basic SEO setup",
                  "Delivery: 3–5 days",
                ],
                button: "Choose Starter",
              },
              {
                name: "Business Website",
                label: "Recommended",
                price: "TZS 450,000",
                desc: "Best for hotels, agencies, shops, service businesses, and companies.",
                features: [
                  "4–7 pages",
                  "Professional custom design",
                  "Gallery or portfolio section",
                  "Contact form or WhatsApp form",
                  "Google Maps section",
                  "Basic SEO setup",
                  "Delivery: 5–10 days",
                ],
                button: "Choose Business",
              },
              {
                name: "Premium Website",
                label: "Advanced",
                price: "From TZS 750,000",
                desc: "For clients who want a larger website with more advanced features.",
                features: [
                  "8+ pages",
                  "Advanced custom design",
                  "Booking or request form",
                  "Admin/dashboard option",
                  "Blog/news section option",
                  "API/integration discussion",
                  "Priority support",
                  "Delivery: 10–21 days",
                ],
                button: "Discuss Premium",
              },
            ].map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative overflow-hidden rounded-[2rem] border p-8 transition hover:-translate-y-1 ${
                  index === 1
                    ? "border-[#f7d58b]/70 bg-[#fffaf0] text-[#1d1a16] shadow-2xl shadow-black/40"
                    : "border-white/10 bg-white/[0.06] text-[#fffaf0] hover:bg-white/[0.10]"
                }`}
              >
                <div
                  className={`absolute right-6 top-6 text-7xl font-black leading-none ${
                    index === 1 ? "text-[#1d1a16]/5" : "text-white/5"
                  }`}
                >
                  0{index + 1}
                </div>

                <div className="relative">
                  <div
                    className={`mb-6 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${
                      index === 1
                        ? "bg-[#b45309] text-white"
                        : "bg-[#f7d58b] text-[#1d1a16]"
                    }`}
                  >
                    {pkg.label}
                  </div>

                  <h3 className="text-2xl font-black">{pkg.name}</h3>

                  <p
                    className={`mt-4 leading-7 ${
                      index === 1 ? "text-[#5f5549]" : "text-[#d8cabc]"
                    }`}
                  >
                    {pkg.desc}
                  </p>

                  <div className="mt-6">
                    <p
                      className={`text-sm font-black uppercase tracking-[0.2em] ${
                        index === 1 ? "text-[#b45309]" : "text-[#f7d58b]"
                      }`}
                    >
                      Starting at
                    </p>

                    <p className="mt-2 text-4xl font-black leading-tight">
                      {pkg.price}
                    </p>
                  </div>

                  <div
                    className={`my-7 h-[1px] ${
                      index === 1 ? "bg-[#1d1a16]/10" : "bg-white/10"
                    }`}
                  />

                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex gap-3 leading-7 ${
                          index === 1 ? "text-[#332d25]" : "text-[#f3eadc]"
                        }`}
                      >
                        <span
                          className={`mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                            index === 1
                              ? "bg-[#b45309] text-white"
                              : "bg-[#f7d58b] text-[#1d1a16]"
                          }`}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#client-form"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-center font-black transition hover:-translate-y-1 ${
                      index === 1
                        ? "bg-[#1d1a16] text-[#fffaf0] hover:bg-[#b45309]"
                        : "border border-white/15 bg-white/10 text-[#fffaf0] hover:border-[#f7d58b] hover:bg-[#f7d58b] hover:text-[#1d1a16]"
                    }`}
                  >
                    {pkg.button}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-[#d8cabc]">
            <p className="leading-8">
              <span className="font-black text-[#f7d58b]">Note:</span> Prices
              may change depending on the number of pages, features, content,
              images, forms, and integrations needed. Domain, hosting, logo
              design, and paid tools are charged separately unless included in
              the agreement.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-44 bg-[#f7efe3] px-6 py-12 text-[#1d1a16]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[#b45309]" />
                <p className="font-black uppercase tracking-[0.3em] text-[#b45309]">
                  My process
                </p>
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-4xl">
                Simple steps from business idea to live website.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#5f5549]">
              The process is designed to keep everything clear: business
              information, content planning, website design, client review,
              final changes and launch.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] bg-[#1d1a16] p-8 text-[#fffaf0] shadow-2xl shadow-[#1d1a16]/20">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f7d58b]">
                How it works
              </p>

              <h3 className="mt-5 text-4xl font-black leading-tight">
                A clear workflow keeps the project moving.
              </h3>

              <p className="mt-5 leading-8 text-[#d8cabc]">
                The client provides the business details, then the website is
                planned, designed, reviewed and prepared for launch.
              </p>

              <a
                href="#client-form"
                className="mt-8 inline-flex rounded-full bg-[#b45309] px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#92400e]"
              >
                Start With Client Form
              </a>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Client submits business information",
                  text: "The client shares business name, services, contact details, website style, photos, logo status and deadline.",
                },
                {
                  title: "Content and website structure are planned",
                  text: "The main sections are arranged clearly so visitors can understand the business quickly.",
                },
                {
                  title: "Website design and development begins",
                  text: "The website is built with a clean layout, mobile-friendly sections, contact buttons and brand-style visuals.",
                },
                {
                  title: "Client reviews and requests changes",
                  text: "The client checks the live preview and requests changes to text, layout, photos or contact details.",
                },
                {
                  title: "Website is launched and ready to share",
                  text: "After approval, the site is published and ready to send to customers through WhatsApp, social media or Google profile.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="group grid gap-5 rounded-[2rem] border border-[#1d1a16]/10 bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#b45309]/40 hover:shadow-xl hover:shadow-[#1d1a16]/10 md:grid-cols-[76px_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1d1a16] text-2xl font-black text-[#f7d58b] transition group-hover:bg-[#b45309] group-hover:text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">{step.title}</h3>
                    <p className="mt-2 leading-7 text-[#5f5549]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-44 bg-[#fffaf0] px-6 py-12 text-[#1d1a16]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[#b45309]" />
                <p className="font-black uppercase tracking-[0.3em] text-[#b45309]">
                  Portfolio
                </p>
              </div>

              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-4xl">
                Website work built for real business use.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#5f5549]">
              A growing showcase of business website designs created for local
              brands, service providers, hotels and companies that need a
              stronger online presence.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Lub Run Enterprises",
                type: "Printing & Branding Website",
                description:
                  "A professional business website designed to present printing services, branded products, company information and direct client enquiries.",
                tag: "Live Business Site",
                status: "Business Website",
              },
              {
                name: "Local Hotel Website",
                type: "Hotel & Accommodation Website",
                description:
                  "A clean hotel website concept built to showcase rooms, amenities, location, booking enquiries and a trusted local hospitality image.",
                tag: "Hospitality Design",
                status: "Hotel Demo",
              },
              {
                name: "Business Landing Page",
                type: "Service Business Website",
                description:
                  "A focused landing page structure made for small businesses that want to explain their offer quickly and turn visitors into leads.",
                tag: "Lead Generation",
                status: "Landing Page",
              },
              {
                name: "Website Creation Agency",
                type: "Web Design Portfolio",
                description:
                  "A modern agency website built to showcase services, packages, process, portfolio work and client onboarding through WhatsApp.",
                tag: "Current Project",
                status: "Agency Website",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-[2rem] border border-[#1d1a16]/10 bg-[#f7efe3] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1d1a16]/10"
              >
                <div className="relative overflow-hidden bg-[#1d1a16] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(247,213,139,0.35),transparent_16rem),radial-gradient(circle_at_90%_80%,rgba(180,83,9,0.35),transparent_18rem)]" />

                  <div className="relative mb-6 flex items-center justify-between gap-4">
                    <div className="rounded-full bg-[#fffaf0] px-4 py-2 text-sm font-black text-[#1d1a16]">
                      {project.tag}
                    </div>

                    <div className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-black text-[#f7d58b] md:block">
                      {project.status}
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                    <div className="mb-5 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                      <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                      <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
                    </div>

                    <div className="rounded-2xl bg-[#fffaf0] p-5">
                      <div className="mb-4 h-3 w-28 rounded-full bg-[#b45309]" />
                      <div className="mb-3 h-3 w-full rounded-full bg-[#e7d9c5]" />
                      <div className="mb-3 h-3 w-4/5 rounded-full bg-[#e7d9c5]" />
                      <div className="h-3 w-2/3 rounded-full bg-[#e7d9c5]" />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b45309]">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">{project.name}</h3>

                  <p className="mt-3 leading-7 text-[#5f5549]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#client-form"
                      className="rounded-full bg-[#1d1a16] px-6 py-3 text-center font-black text-[#fffaf0] transition hover:-translate-y-1 hover:bg-[#b45309]"
                    >
                      Request Similar Website
                    </a>

                    <a
                      href="#client-form"
                      className="rounded-full border border-[#1d1a16]/15 px-6 py-3 text-center font-black text-[#1d1a16] transition hover:-translate-y-1 hover:border-[#b45309] hover:text-[#b45309]"
                    >
                      Ask About This
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT FORM */}
      <section
        id="client-form"
        className="scroll-mt-44 bg-[#1d1a16] px-6 py-12 text-[#fffaf0]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-48">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[#f7d58b]" />
                <p className="font-black uppercase tracking-[0.3em] text-[#f7d58b]">
                  Client form
                </p>
              </div>

              <h2 className="text-3xl font-black leading-tight md:text-4xl">
                Send your website details directly to WhatsApp.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#d8cabc]">
                Fill in the important information so I can understand the
                business, pages, style, deadline and content needs before
                starting the website.
              </p>

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f7d58b]">
                  What happens next?
                </p>

                <ul className="mt-5 space-y-4 text-[#d8cabc]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f7d58b]" />
                    The form opens WhatsApp with the client details already
                    prepared.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f7d58b]" />
                    You can review the information and reply with the next
                    steps.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f7d58b]" />
                    The website plan can then be started from the submitted
                    details.
                  </li>
                </ul>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-[#fffaf0] p-6 text-[#1d1a16] shadow-2xl shadow-black/30 md:p-8 lg:mt-8"
            >
              <div className="mb-6 border-b border-[#1d1a16]/10 pb-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b45309]">
                  Website request details
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  Tell me about the business
                </h3>
                <p className="mt-2 leading-7 text-[#5f5549]">
                  Required fields help prepare a clearer website plan and avoid
                  missing important business information.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Client name *
                  </span>
                  <input
                    name="clientName"
                    required
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="Client name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Business name *
                  </span>
                  <input
                    name="businessName"
                    required
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="Business name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Phone number *
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="+255..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="example@email.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Type of business *
                  </span>
                  <input
                    name="businessType"
                    required
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="Hotel, restaurant, printing company..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Pages needed
                  </span>
                  <input
                    name="pagesNeeded"
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="Home, About, Services, Contact..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Preferred website style
                  </span>
                  <input
                    name="websiteStyle"
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                    placeholder="Modern, luxury, simple, corporate..."
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Deadline
                  </span>
                  <input
                    name="deadline"
                    type="date"
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Do you already have a logo?
                  </span>
                  <select
                    name="hasLogo"
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  >
                    <option>Yes</option>
                    <option>No</option>
                    <option>I need one created</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#4f4539]">
                    Do you already have photos?
                  </span>
                  <select
                    name="hasPhotos"
                    className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  >
                    <option>Yes</option>
                    <option>No</option>
                    <option>Some, but not enough</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-black text-[#4f4539]">
                  Services/products offered
                </span>
                <textarea
                  name="services"
                  className="h-28 w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="List the main services or products"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-black text-[#4f4539]">
                  Competitor/example websites
                </span>
                <textarea
                  name="examples"
                  className="h-24 w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Paste links or describe the style you like"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-black text-[#4f4539]">
                  Extra message
                </span>
                <textarea
                  name="extraMessage"
                  className="h-28 w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Anything else I should know?"
                />
              </label>

              <button
                type="submit"
                className="mt-6 w-full cursor-pointer rounded-full bg-[#1d1a16] px-6 py-4 text-lg font-black text-[#fffaf0] transition hover:-translate-y-1 hover:bg-[#b45309]"
              >
                Submit Details to WhatsApp
              </button>

              <p className="mt-4 text-center text-sm font-semibold text-[#5f5549]">
                WhatsApp will open with the information already prepared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7efe3] px-6 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1d1a16] shadow-2xl shadow-[#1d1a16]/20">
          <div className="grid gap-8 p-8 text-[#fffaf0] md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[#f7d58b]" />
                <p className="font-black uppercase tracking-[0.3em] text-[#f7d58b]">
                  Let&apos;s build
                </p>
              </div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
                Ready to turn your business information into a professional
                website?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8cabc]">
                Send your details through WhatsApp and start with a clear plan
                for your website structure, content, design and launch.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#fffaf0] p-6 text-[#1d1a16]">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b45309]">
                Start here
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Request a website consultation
              </h3>

              <p className="mt-3 leading-7 text-[#5f5549]">
                Share your business type, services, pages needed and preferred
                style so the website direction is clear from the beginning.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="mt-6 inline-flex w-full justify-center rounded-full bg-[#b45309] px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-[#92400e]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1d1a16]/10 bg-[#fffaf0] px-6 py-12 text-[#1d1a16]">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
          <div>
            <p className="text-2xl font-black">
              WebCraft <span className="text-[#b45309]">TZ</span>
            </p>

            <p className="mt-2 text-sm font-black uppercase tracking-[0.28em] text-[#b45309]">
              Website Creation Studio
            </p>

            <p className="mt-5 max-w-md leading-7 text-[#5f5549]">
              Professional website creation for Tanzanian businesses that need
              a stronger online presence, clear services, and easier customer
              enquiries.
            </p>
          </div>

          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#b45309]">
              Quick links
            </p>

            <div className="mt-4 grid gap-3 text-[#5f5549]">
              <a href="#services" className="transition hover:text-[#b45309]">
                Services
              </a>
              <a href="#packages" className="transition hover:text-[#b45309]">
                Packages
              </a>
              <a href="#process" className="transition hover:text-[#b45309]">
                Process
              </a>
              <a href="#portfolio" className="transition hover:text-[#b45309]">
                Portfolio
              </a>
              <a href="#client-form" className="transition hover:text-[#b45309]">
                Client Form
              </a>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#b45309]">
              Contact
            </p>

            <div className="mt-4 grid gap-3 text-[#5f5549]">
              <p>WhatsApp: +255 689 824 682</p>
              <p>Email: lubrun.enterprises@gmail.com</p>
              <p>Dar es Salaam, Tanzania</p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="mt-6 inline-flex rounded-full bg-[#1d1a16] px-6 py-3 font-black text-[#fffaf0] transition hover:-translate-y-1 hover:bg-[#b45309]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-[#1d1a16]/10 pt-6 text-sm text-[#5f5549] md:flex-row">
          <p>© 2026 WebCraft TZ. All rights reserved.</p>
          <p>Website creation for local businesses in Tanzania.</p>
        </div>
      </footer>
    </main>
  );
}
