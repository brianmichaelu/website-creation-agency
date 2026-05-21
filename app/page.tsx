"use client";
export default function Home() {
  const whatsappNumber = "255689824682";
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

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
};

  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-black tracking-tight">WebCraft TZ</p>
            <p className="text-xs text-blue-200">Website Creation Studio</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#packages" className="hover:text-white">
              Packages
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#client-form" className="hover:text-white">
              Client Form
            </a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              Professional websites for serious businesses
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Websites that make your business look trusted, modern and ready
              for clients.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I create clean, mobile-friendly business websites for hotels,
              service providers, printing companies, shops, real estate agents,
              clinics, restaurants and growing brands in Tanzania.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#client-form"
                className="rounded-2xl bg-white px-7 py-4 text-center font-bold text-[#06111f] hover:bg-blue-100"
              >
                Start Your Website
              </a>
              <a
                href="#portfolio"
                className="rounded-2xl border border-white/20 px-7 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-blue-950/60 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#091827] p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 p-6">
                  <p className="text-sm font-semibold text-blue-950">
                    Website Preview
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-white">
                    Your Business Online
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Pages</p>
                    <p className="mt-2 text-3xl font-black">5+</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Mobile Ready</p>
                    <p className="mt-2 text-3xl font-black">100%</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 text-[#06111f]">
                  <p className="font-bold">Client enquiry form</p>
                  <div className="mt-4 space-y-3">
                    <div className="h-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                    <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="services" className="bg-white px-6 py-24 text-[#06111f]">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-600">
            Who this is for
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
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
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-blue-100" />
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 text-slate-600">
                  A clean website that explains your services, shows your work,
                  and makes it easy for clients to contact you.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-300">
              Website packages
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
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
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className="mt-3 text-slate-300">{pkg.desc}</p>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-200">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
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
      <section id="process" className="bg-[#0b1d33] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-bold uppercase tracking-[0.3em] text-blue-300">
            My process
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-black md:text-5xl">
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
                className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[80px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-2xl font-black">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black">{step}</h3>
                  <p className="mt-2 text-slate-300">
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
      <section id="portfolio" className="bg-white px-6 py-24 text-[#06111f]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.3em] text-blue-600">
                Portfolio
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Work showcase
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Replace these placeholders with real screenshots as your website
              projects grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Lub Run Enterprises",
              "Local Hotel Website",
              "Business Landing Page",
              "Coming Soon Project",
            ].map((project) => (
              <div
                key={project}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50"
              >
                <div className="h-56 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-500" />
                <div className="p-7">
                  <h3 className="text-2xl font-black">{project}</h3>
                  <p className="mt-3 text-slate-600">
                    Website project preview. Add project details, screenshots
                    and client results here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT FORM */}
      <section id="client-form" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-300">
              Client form
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Send your website details directly to WhatsApp.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Fill in the important information so I can understand your
              business, pages, style, deadline and content needs.
            </p>
          </div>

          <form
  onSubmit={handleSubmit}
  className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
>
  <div className="grid gap-4 md:grid-cols-2">
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Client name
      </span>
      <input
        name="clientName"
        required
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="Client name"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Business name
      </span>
      <input
        name="businessName"
        required
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="Business name"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Phone number
      </span>
      <input
        name="phone"
        type="tel"
        required
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="+255..."
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Email
      </span>
      <input
        name="email"
        type="email"
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="example@email.com"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Type of business
      </span>
      <input
        name="businessType"
        required
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="Hotel, restaurant, printing company..."
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Pages needed
      </span>
      <input
        name="pagesNeeded"
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="Home, About, Services, Contact..."
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Preferred website style
      </span>
      <input
        name="websiteStyle"
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
        placeholder="Modern, luxury, simple, corporate..."
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Deadline
      </span>
      <input
        name="deadline"
        type="date"
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
      />
    </label>
  </div>

  <div className="mt-4 grid gap-4 md:grid-cols-2">
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Do you already have a logo?
      </span>
      <select
        name="hasLogo"
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
      >
        <option>Yes</option>
        <option>No</option>
        <option>I need one created</option>
      </select>
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">
        Do you already have photos?
      </span>
      <select
        name="hasPhotos"
        className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
      >
        <option>Yes</option>
        <option>No</option>
        <option>Some, but not enough</option>
      </select>
    </label>
  </div>

  <label className="mt-4 block">
    <span className="mb-2 block text-sm font-semibold text-slate-200">
      Services/products offered
    </span>
    <textarea
      name="services"
      className="h-28 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
      placeholder="List your main services or products"
    />
  </label>

  <label className="mt-4 block">
    <span className="mb-2 block text-sm font-semibold text-slate-200">
      Competitor/example websites
    </span>
    <textarea
      name="examples"
      className="h-24 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
      placeholder="Paste links or describe the style you like"
    />
  </label>

  <label className="mt-4 block">
    <span className="mb-2 block text-sm font-semibold text-slate-200">
      Extra message
    </span>
    <textarea
      name="extraMessage"
      className="h-28 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#06111f] outline-none focus:border-blue-400"
      placeholder="Anything else I should know?"
    />
  </label>

  <button
    type="submit"
    className="mt-6 w-full rounded-2xl bg-blue-500 px-6 py-4 text-lg font-black text-white hover:bg-blue-400"
  >
    Submit to WhatsApp
  </button>
</form>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-blue-500 to-cyan-400 p-10 text-center text-white md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to build your business website?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50">
            Let us turn your business information into a professional online
            presence that clients can trust.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-black text-[#06111f]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black">WebCraft TZ</p>
            <p className="mt-2 text-slate-400">
              Website creation for Tanzanian businesses.
            </p>
          </div>

          <div className="text-slate-300">
            <p>WhatsApp: +255 689 824 682</p>
            <p>Email: lubrun.enterprises@gmail.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
