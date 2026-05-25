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
      <header className="sticky top-0 z-50 border-b border-[#1d1a16]/10 bg-[#f7efe3]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="block">
            <p className="text-xl font-black tracking-tight text-[#1d1a16]">
              WebCraft TZ
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b45309]">
              Website Creation Studio
            </p>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#5f5549] md:flex">
            <a href="#" className="hover:text-[#b45309]">
              Home
            </a>
            <a href="#services" className="hover:text-[#b45309]">
              Services
            </a>
            <a href="#packages" className="hover:text-[#b45309]">
              Packages
            </a>
            <a href="#process" className="hover:text-[#b45309]">
              Process
            </a>
            <a href="#portfolio" className="hover:text-[#b45309]">
              Portfolio
            </a>
            <a href="#client-form" className="hover:text-[#b45309]">
              Client Form
            </a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="rounded-full bg-[#1d1a16] px-5 py-2 text-sm font-bold text-[#fffaf0] shadow-lg shadow-[#1d1a16]/20 transition hover:bg-[#b45309]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="editorial-grid relative overflow-hidden px-6 py-24">
        <div className="absolute -right-28 top-20 h-[420px] w-[420px] rounded-full bg-[#d97706]/20 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#1b5e3f]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#b45309]/30 bg-[#fffaf0]/70 px-4 py-2 text-sm font-bold text-[#9a3412] shadow-sm">
              Professional websites for serious businesses
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#1d1a16] md:text-7xl">
              Websites that make your business look trusted, modern and ready
              for clients.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5549]">
              I create clean, mobile-friendly business websites for hotels,
              service providers, printing companies, shops, real estate agents,
              clinics, restaurants and growing brands in Tanzania.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#client-form"
                className="rounded-full bg-[#1d1a16] px-8 py-4 text-center font-black text-[#fffaf0] shadow-xl shadow-[#1d1a16]/20 transition hover:-translate-y-1 hover:bg-[#b45309]"
              >
                Start Your Website
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-[#1d1a16]/20 bg-[#fffaf0]/70 px-8 py-4 text-center font-black text-[#1d1a16] transition hover:-translate-y-1 hover:border-[#b45309] hover:text-[#b45309]"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Agency preview card */}
          <div className="rounded-[2rem] border border-[#1d1a16]/10 bg-[#fffaf0]/70 p-4 shadow-2xl shadow-[#1d1a16]/15 backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#1d1a16]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                  <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                  <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f7d58b]">
                  Live Preview
                </p>
              </div>

              <div className="p-6">
                <div className="rounded-[1.5rem] bg-[#f7efe3] p-6 text-[#1d1a16]">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b45309]">
                    Website Preview
                  </p>
                  <h2 className="mt-4 text-4xl font-black leading-tight">
                    Your Business Online
                  </h2>
                  <p className="mt-3 text-[#5f5549]">
                    A clean homepage, strong services section, clear contact
                    buttons and client enquiry flow.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
                    <p className="text-sm text-[#f7d58b]">Pages</p>
                    <p className="mt-2 text-3xl font-black">5+</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
                    <p className="text-sm text-[#f7d58b]">Mobile Ready</p>
                    <p className="mt-2 text-3xl font-black">100%</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#fffaf0] p-5 text-[#1d1a16]">
                  <p className="font-black">Client enquiry form</p>
                  <div className="mt-4 space-y-3">
                    <div className="h-3 rounded-full bg-[#e7d9c5]" />
                    <div className="h-3 w-4/5 rounded-full bg-[#e7d9c5]" />
                    <div className="h-3 w-2/3 rounded-full bg-[#e7d9c5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
