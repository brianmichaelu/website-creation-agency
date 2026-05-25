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
        <div className="border-b border-[#1d1a16]/10 bg-[#1d1a16] px-6 py-5 text-[#fffaf0]">
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
          <div className="mx-auto flex max-w-7xl items-center justify-between">
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
      <section className="editorial-grid relative overflow-hidden px-6 py-16 md:py-20">
        <div className="absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-[#d97706]/20 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#1b5e3f]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-16 bg-[#b45309]" />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b45309]">
                Key part of your marketing
              </p>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#1d1a16] md:text-7xl">
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

          <div className="relative">
            <div className="absolute -left-5 top-16 hidden h-16 w-16 rotate-12 rounded-2xl bg-[#fffaf0] p-4 shadow-2xl md:block">
              <div className="h-full w-full rounded-xl bg-[#b45309]" />
            </div>

            <div className="absolute -right-4 bottom-12 hidden h-20 w-20 -rotate-12 rounded-2xl bg-[#1d1a16] p-4 shadow-2xl md:block">
              <div className="h-full w-full rounded-xl bg-white/20" />
            </div>

            <div className="rounded-[2rem] bg-[#1d1a16] p-5 shadow-2xl shadow-[#1d1a16]/25">
              <div className="rounded-[1.5rem] bg-[#fffaf0] p-5 text-[#1d1a16]">
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
      <section id="services" className="bg-[#fffaf0] px-6 py-24 text-[#1d1a16]">
        <div className="mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.3em] text-[#b45309]">
            Who this is for
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Built for businesses that need trust before the client even calls.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "Hotels & Guest Houses",
              "Printing Companies",
              "Clinics & Health Services",
              "Real Estate Businesses",
              "Restaurants & Cafes",
              "Small Local Businesses",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-[2rem] border border-[#1d1a16]/10 bg-[#f7efe3] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#b45309]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#1d1a16]/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1a16] text-xl font-black text-[#f7d58b] transition group-hover:bg-[#b45309] group-hover:text-white">
                  ✦
                </div>

                <h3 className="text-xl font-black">{item}</h3>

                <p className="mt-3 leading-7 text-[#5f5549]">
                  A clean website that explains your services, shows your work,
                  and makes it easy for clients to contact you.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-[#1d1a16] px-6 py-24 text-[#fffaf0]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.3em] text-[#f7d58b]">
              Website packages
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Choose a website level that matches your business stage.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Starter Website",
                desc: "Best for a simple online presence.",
                features: [
                  "One-page website",
                  "Business intro",
                  "Services section",
                  "WhatsApp contact button",
                  "Mobile responsive",
                ],
              },
              {
                name: "Business Website",
                desc: "Best for growing businesses.",
                features: [
                  "Multiple sections/pages",
                  "Service details",
                  "Gallery or portfolio",
                  "Client enquiry form",
                  "Basic SEO structure",
                ],
              },
              {
                name: "Premium Website",
                desc: "Best for businesses that need a stronger brand image.",
                features: [
                  "Custom modern design",
                  "Advanced content sections",
                  "Portfolio showcase",
                  "Conversion-focused layout",
                  "Launch support",
                ],
              },
            ].map((pkg, index) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 transition hover:-translate-y-1 ${
                  index === 1
                    ? "border-[#f7d58b]/50 bg-[#fffaf0] text-[#1d1a16] shadow-2xl shadow-black/30"
                    : "border-white/10 bg-white/5 text-[#fffaf0] hover:bg-white/10"
                }`}
              >
                {index === 1 && (
                  <div className="mb-5 inline-flex rounded-full bg-[#b45309] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Popular
                  </div>
                )}

                <h3 className="text-2xl font-black">{pkg.name}</h3>

                <p
                  className={`mt-3 leading-7 ${
                    index === 1 ? "text-[#5f5549]" : "text-[#d8cabc]"
                  }`}
                >
                  {pkg.desc}
                </p>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-3 ${
                        index === 1 ? "text-[#332d25]" : "text-[#f3eadc]"
                      }`}
                    >
                      <span
                        className={`mt-2 h-2 w-2 rounded-full ${
                          index === 1 ? "bg-[#b45309]" : "bg-[#f7d58b]"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#f7efe3] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-black uppercase tracking-[0.3em] text-[#b45309]">
            My process
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black leading-tight md:text-5xl">
            Simple steps from idea to live website.
          </h2>

          <div className="mt-14 space-y-6">
            {[
              "Client submits business information",
              "Content and website structure are planned",
              "Website design and development begins",
              "Client reviews and requests changes",
              "Website is launched and ready to share",
            ].map((step, index) => (
              <div
                key={step}
                className="grid gap-5 rounded-[2rem] border border-[#1d1a16]/10 bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1d1a16]/10 md:grid-cols-[80px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1d1a16] text-2xl font-black text-[#f7d58b]">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black">{step}</h3>
                  <p className="mt-2 leading-7 text-[#5f5549]">
                    Each stage is handled clearly so the final website matches
                    your business, your clients and your goals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-[#fffaf0] px-6 py-24 text-[#1d1a16]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-[#b45309]">
                Portfolio
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Work showcase
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-[#5f5549]">
              A growing showcase of business website designs created for local
              brands, service providers, hotels, and companies that need a
              stronger online presence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Lub Run Enterprises",
                type: "Printing & Branding Website",
                description:
                  "A professional business website designed to present printing services, branded products, company information, and direct client enquiries.",
                tag: "Live Business Site",
              },
              {
                name: "Local Hotel Website",
                type: "Hotel & Accommodation Website",
                description:
                  "A clean hotel website concept built to showcase rooms, amenities, location, booking enquiries, and a trusted local hospitality image.",
                tag: "Hospitality Design",
              },
              {
                name: "Business Landing Page",
                type: "Service Business Website",
                description:
                  "A focused landing page structure made for small businesses that want to explain their offer quickly and turn visitors into leads.",
                tag: "Lead Generation",
              },
              {
                name: "Website Creation Agency",
                type: "Web Design Portfolio",
                description:
                  "A modern agency website built to showcase services, packages, process, portfolio work, and client onboarding through WhatsApp.",
                tag: "Current Project",
              },
            ].map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-[2rem] border border-[#1d1a16]/10 bg-[#f7efe3] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1d1a16]/10"
              >
                <div className="relative h-56 overflow-hidden bg-[#1d1a16]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(247,213,139,0.42),transparent_15rem),radial-gradient(circle_at_80%_70%,rgba(180,83,9,0.35),transparent_16rem)]" />

                  <div className="absolute left-6 top-6 rounded-full bg-[#fffaf0] px-4 py-2 text-sm font-black text-[#1d1a16]">
                    {project.tag}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                    <div className="mb-4 h-3 w-24 rounded-full bg-[#f7d58b]" />
                    <div className="mb-3 h-3 w-full rounded-full bg-white/60" />
                    <div className="h-3 w-2/3 rounded-full bg-white/40" />
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT FORM */}
      <section id="client-form" className="bg-[#1d1a16] px-6 py-24 text-[#fffaf0]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-black uppercase tracking-[0.3em] text-[#f7d58b]">
              Client form
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Send your website details directly to WhatsApp.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#d8cabc]">
              Fill in the important information so I can understand your
              business, pages, style, deadline and content needs.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-[#fffaf0] p-6 text-[#1d1a16] shadow-2xl shadow-black/30"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                  Client name
                </span>
                <input
                  name="clientName"
                  required
                  className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Client name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                  Business name
                </span>
                <input
                  name="businessName"
                  required
                  className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Business name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                  Phone number
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
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
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
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                  Type of business
                </span>
                <input
                  name="businessType"
                  required
                  className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Hotel, restaurant, printing company..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                  Pages needed
                </span>
                <input
                  name="pagesNeeded"
                  className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Home, About, Services, Contact..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                  Preferred website style
                </span>
                <input
                  name="websiteStyle"
                  className="w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                  placeholder="Modern, luxury, simple, corporate..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
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
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
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
                <span className="mb-2 block text-sm font-bold text-[#4f4539]">
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
              <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                Services/products offered
              </span>
              <textarea
                name="services"
                className="h-28 w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                placeholder="List your main services or products"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-[#4f4539]">
                Competitor/example websites
              </span>
              <textarea
                name="examples"
                className="h-24 w-full rounded-2xl border border-[#1d1a16]/10 bg-white px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b45309] focus:ring-4 focus:ring-[#b45309]/10"
                placeholder="Paste links or describe the style you like"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-[#4f4539]">
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
              Submit to WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7efe3] px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#b45309] p-10 text-center text-white shadow-2xl shadow-[#b45309]/20 md:p-16">
          <p className="font-black uppercase tracking-[0.3em] text-[#f7d58b]">
            Let&apos;s build
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Ready to build your business website?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#fff2d7]">
            Let us turn your business information into a professional online
            presence that clients can trust.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="mt-8 inline-block rounded-full bg-[#fffaf0] px-8 py-4 font-black text-[#1d1a16] transition hover:-translate-y-1 hover:bg-[#f7d58b]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1d1a16]/10 bg-[#fffaf0] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black text-[#1d1a16]">WebCraft TZ</p>
            <p className="mt-2 text-[#5f5549]">
              Website creation for Tanzanian businesses.
            </p>
          </div>

          <div className="text-[#5f5549]">
            <p>WhatsApp: +255 689 824 682</p>
            <p>Email: lubrun.enterprises@gmail.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
