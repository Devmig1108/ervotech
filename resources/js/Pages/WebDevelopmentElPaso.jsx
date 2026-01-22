import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ContactForm from "@/Components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ElPasoWebDesign({ auth }) {
    const canonical = "https://www.ervotechep.com/web-design-el-paso";

    // --- FAQ (AEO + Rich Results) ---
    const faqs = [
        {
            q: "How much does a website cost in El Paso?",
            a: "It depends on how many pages you need and what the site needs to do (forms, booking, galleries, payments, etc.). Most business sites land in a few common tiers, and the fastest way to price it is a quick audit + scope.",
        },
        {
            q: "How long does it take to build a website?",
            a: "Most business sites can launch in a few weeks. The biggest variable is content—if you have photos, services, and a point of contact ready, everything moves faster.",
        },
        {
            q: "Will my website show up on Google?",
            a: "A solid foundation helps a lot: clean structure, proper headings, fast load times, and service-focused pages. Rankings also depend on competition and consistency—ongoing SEO makes the biggest difference over time.",
        },
        {
            q: "Do you write the content for the website?",
            a: "Yes. If you don’t have content, Ervotech can write it. Clear, service-first copy that makes it obvious what you do, who you serve, and how to contact you.",
        },
        {
            q: "Can you rebuild my existing site instead of starting from scratch?",
            a: "Yes. If your current site has good bones, a rebuild is often the quickest win—clean up the messaging, improve the structure, speed it up, and fix the conversion flow.",
        },
        {
            q: "Can you track calls and form submissions?",
            a: "Yes. We can set up tracking for calls, forms, and key button clicks so you’re not guessing what’s working.",
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    };

    // Optional: Entity schema (use real phone/address if you want)
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Ervotech",
        url: canonical,
        areaServed: ["El Paso, TX", "Las Cruces, NM"],
        serviceType: ["Web Design", "Local SEO", "Website Development"],
        brand: "Ervotech",
    };

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href={canonical} />
                <title>Web Design El Paso | Lead-Driven Websites | Ervotech</title>

                <meta
                    name="description"
                    content="Ervotech builds lead-driven websites for El Paso businesses. Mobile-first design, on-page SEO foundation, and conversion tracking. Get a free Website + SEO Audit."
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Web Design El Paso | Lead-Driven Websites | Ervotech"
                />
                <meta
                    property="og:description"
                    content="Modern, conversion-focused web design for El Paso businesses with on-page SEO and tracking. Get a free Website + SEO Audit."
                />
                <meta
                    property="og:image"
                    content="https://www.ervotechep.com/images/Logo2.png"
                />
                <meta property="og:url" content={canonical} />
                <meta property="og:type" content="website" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(businessSchema)}
                </script>
            </Helmet>

            <PublicLayout
                user={auth?.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        El Paso Web Design
                    </h2>
                }
            >
                <div className="local-landing local-landing--elpaso">
                    <Head title="Web Design El Paso | Ervotech" />

                    {/* HERO */}
                    <ParallaxBanner
                        layers={[
                            { image: "../images/hero3.webp", speed: -30 },
                            { image: "../images/hero3.webp", speed: -10 },
                        ]}
                        className="aspect-[2/1] hero"
                    >
                        <div className="hero-overlay"></div>

                        <div className="hero-content">
                            <h1>Web Design in El Paso That Brings In Leads</h1>

                            <Fade>
                                <p>
                                    Fast, modern websites for El Paso businesses.
                                    Built to load quick, rank locally, and turn
                                    visitors into calls and quote requests.
                                </p>
                            </Fade>

                            <div className="hero-buttons">
                                <a href="#free-audit" className="primary-btn">
                                    Get a Free Website + SEO Audit
                                </a>
                                <a href="#contact" className="secondary-btn">
                                    Talk to Ervotech
                                </a>
                            </div>

                            <div className="hero-trust">
                                <ul>
                                    <li>Mobile-first layout</li>
                                    <li>On-page SEO foundation included</li>
                                    <li>Conversion-focused CTAs</li>
                                    <li>Tracking set up (calls + forms)</li>
                                    <li>Clear timelines & communication</li>
                                </ul>
                            </div>
                        </div>
                    </ParallaxBanner>

                    {/* QUICK ANSWER (AEO) */}
                    <section className="quick-answer" aria-label="Quick Answer" id="overview">
                        <div className="container">
                            <Fade>
                                <div className="quick-answer-inner">
                                    <h2>Quick Answer</h2>
                                    <p>
                                        If you want a website that actually generates business
                                        in El Paso (not just something that “looks nice”),
                                        Ervotech builds lead-focused sites with clean structure,
                                        fast load times, and call/form tracking—so you can
                                        measure leads, not vibes.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </section>

                    {/* FREE AUDIT (LEAD MAGNET ANCHOR) */}
                    <section className="audit-section" id="free-audit">
                        <div className="container">
                            <div className="audit-grid">
                                <Fade>
                                    <div className="audit-text">
                                        <h2>Free Website + SEO Audit</h2>
                                        <p>
                                            No fluff. You’ll get a clear punch list of what’s
                                            holding your site back—and what to fix first to
                                            get more calls in El Paso.
                                        </p>
                                        <ul className="audit-list">
                                            <li>Local SEO & content structure review</li>
                                            <li>Speed & mobile experience check</li>
                                            <li>Conversion flow (calls/forms) review</li>
                                            <li>Top fixes prioritized by impact</li>
                                        </ul>
                                        <div className="audit-cta">
                                            <a href="#contact" className="primary-btn">
                                                Request the Free Audit
                                            </a>
                                        </div>
                                    </div>
                                </Fade>

                                <Zoom>
                                    <div
                                        className="audit-card"
                                        role="img"
                                        aria-label="Website audit preview card"
                                    >
                                        <h3>What you’ll receive</h3>
                                        <p>
                                            A short, actionable breakdown of what to improve,
                                            what to keep, and what will most likely produce leads
                                            for your services in El Paso.
                                        </p>
                                        <div className="audit-card-mini">
                                            <div className="mini-row">
                                                <span>Speed</span>
                                                <span>Structure</span>
                                                <span>Local</span>
                                                <span>Tracking</span>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </section>

                    {/* WHAT YOU GET */}
                    <section className="value-section" id="what-you-get">
                        <div className="container">
                            <Parallax speed={-10}>
                                <h2>What You Get With an Ervotech Website</h2>
                                <p className="section-intro">
                                    Most websites fail for one reason: they don’t make it
                                    easy for customers to take the next step. This is what’s
                                    baked into every build.
                                </p>

                                <div className="value-grid">
                                    {[
                                        {
                                            title: "Lead-Focused Structure",
                                            desc: "Straight to the point messaging, service-first layout, and CTAs that push visitors toward calling or requesting a quote.",
                                        },
                                        {
                                            title: "Mobile-First Design",
                                            desc: "Because that’s where the searches happen. Fast, clean, and easy to use on a phone.",
                                        },
                                        {
                                            title: "Performance Basics",
                                            desc: "Quick pages that keep people from bouncing and help your site feel professional.",
                                        },
                                        {
                                            title: "On-Page SEO Foundation",
                                            desc: "Titles, headings, internal links, and clean page structure so Google understands what you offer.",
                                        },
                                        {
                                            title: "Conversion Tracking",
                                            desc: "Track calls, forms, and key clicks so you know what’s working (and what isn’t).",
                                        },
                                        {
                                            title: "Support Options",
                                            desc: "Keep your site updated, improve it over time, and stay ahead of competitors.",
                                        },
                                    ].map((item) => (
                                        <Zoom key={item.title}>
                                            <div className="value-card">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </Zoom>
                                    ))}
                                </div>

                                <div className="section-cta">
                                    <a href="#contact" className="primary-btn">
                                        Get the Free Audit
                                    </a>
                                </div>
                            </Parallax>
                        </div>
                    </section>

                    {/* SERVICES INCLUDED */}
                    <section className="included-section" id="services">
                        <div className="container">
                            <Fade>
                                <h2>Web Design Services for El Paso Businesses</h2>
                                <p className="section-intro">
                                    A clean design is only half the job. The site also needs
                                    trust, clarity, and a simple path to contact you.
                                </p>
                            </Fade>

                            <div className="included-grid">
                                {[
                                    {
                                        title: "Custom Website Design",
                                        desc: "A modern look that fits your business and makes your services easy to understand.",
                                    },
                                    {
                                        title: "SEO-Ready Page Structure",
                                        desc: "Service pages and content hierarchy that support local visibility on Google.",
                                    },
                                    {
                                        title: "Conversion Optimization",
                                        desc: "Click-to-call, quote requests, trust sections, and CTA placement built for leads.",
                                    },
                                    {
                                        title: "Analytics + Tracking",
                                        desc: "Call/form tracking and key clicks so you can see real performance—not guesses.",
                                    },
                                    {
                                        title: "Optional: Local SEO Monthly",
                                        desc: "Ongoing improvements, content expansion, and local relevance building over time.",
                                    },
                                    {
                                        title: "Optional: Landing Pages for Ads",
                                        desc: "High-converting pages built for Google Ads and service promos.",
                                    },
                                ].map((item) => (
                                    <Zoom key={item.title}>
                                        <div
                                            className="included-card"
                                            itemScope
                                            itemType="https://schema.org/Service"
                                        >
                                            <h3 itemProp="name">{item.title}</h3>
                                            <p itemProp="description">{item.desc}</p>
                                        </div>
                                    </Zoom>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section className="process-section" id="process">
                        <div className="container">
                            <Parallax speed={-10}>
                                <h2>How It Works</h2>
                                <div className="process-grid">
                                    {[
                                        {
                                            step: "1",
                                            title: "Free Audit + Simple Plan",
                                            desc: "We review what you have (or what your competitors are doing) and map out the highest-impact fixes first.",
                                        },
                                        {
                                            step: "2",
                                            title: "Build + Content + Launch",
                                            desc: "Design and structure get built together so the site launches ready to generate leads—not “we’ll fix it later.”",
                                        },
                                        {
                                            step: "3",
                                            title: "Track + Improve",
                                            desc: "We use real data (calls/forms/clicks) to guide improvements instead of opinions and guesswork.",
                                        },
                                    ].map((p) => (
                                        <Fade key={p.step}>
                                            <div className="process-card">
                                                <div className="process-step">{p.step}</div>
                                                <h3>{p.title}</h3>
                                                <p>{p.desc}</p>
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            </Parallax>
                        </div>
                    </section>

                    {/* EL PASO LOCAL CONTEXT */}
                    <section className="local-section" id="local">
                        <div className="container">
                            <Fade>
                                <h2>Designed for El Paso Search Behavior</h2>
                                <p>
                                    Most local searches happen on a phone. If your site is
                                    slow, confusing, or hides your contact info, you lose the lead.
                                    The goal is simple: load fast, show services clearly, and make
                                    calling/requesting a quote effortless.
                                </p>
                                <p className="local-areas">
                                    <strong>Service areas:</strong> West Side, East Side,
                                    Central, Northeast, and surrounding El Paso areas.
                                </p>
                            </Fade>
                        </div>
                    </section>

                    {/* RESULTS */}
                    <section className="results-section" id="results">
                        <div className="container">
                            <Parallax speed={-10}>
                                <h2>Results + Recent Work</h2>
                                <p className="section-intro">
                                    Here are a few examples of the kinds of improvements that move
                                    the needle—better structure, clearer messaging, and tracking so
                                    leads aren’t a mystery.
                                </p>

                                <div className="results-grid">
                                    {[
                                        {
                                            title: "Local Service Business",
                                            desc: "Reworked the layout and messaging to push visitors toward calling and requesting a quote.",
                                            outcome: "Outcome: more calls and form submissions after launch.",
                                        },
                                        {
                                            title: "Home Services / Trades",
                                            desc: "Clarified service pages, cleaned up the conversion flow, and added tracking.",
                                            outcome: "Outcome: better lead quality and stronger engagement.",
                                        },
                                        {
                                            title: "Small Business / Startup",
                                            desc: "Modern redesign with performance upgrades and cleaner CTAs across the site.",
                                            outcome: "Outcome: improved mobile usability and inquiry flow.",
                                        },
                                    ].map((r) => (
                                        <Zoom key={r.title}>
                                            <div className="results-card">
                                                <h3>{r.title}</h3>
                                                <p>{r.desc}</p>
                                                <p className="results-outcome">
                                                    <strong>{r.outcome}</strong>
                                                </p>
                                            </div>
                                        </Zoom>
                                    ))}
                                </div>

                                <div className="section-cta">
                                    <a href="#contact" className="primary-btn">
                                        Ask About Results
                                    </a>
                                </div>
                            </Parallax>
                        </div>
                    </section>

                    {/* PRICING ANCHOR */}
                    <section className="pricing-section" id="pricing">
                        <div className="container">
                            <Fade>
                                <h2>What Does Web Design Cost in El Paso?</h2>
                                <p className="section-intro">
                                    Pricing comes down to scope. A simple site isn’t priced like a
                                    competitive service build with multiple pages, tracking, and ongoing SEO.
                                    These buckets cover most projects.
                                </p>
                            </Fade>

                            <div className="pricing-grid">
                                {[
                                    {
                                        title: "Launch",
                                        desc: "A professional website with an on-page SEO foundation.",
                                        bestFor: "Best for getting online fast.",
                                    },
                                    {
                                        title: "Grow",
                                        desc: "Website + local SEO structure + tracking built in.",
                                        bestFor: "Best value for steady local leads.",
                                    },
                                    {
                                        title: "Dominate",
                                        desc: "Ongoing SEO/content + landing pages + conversion refinement.",
                                        bestFor: "Best for competitive services and growth.",
                                    },
                                ].map((p) => (
                                    <Zoom key={p.title}>
                                        <div className="pricing-card">
                                            <h3>{p.title}</h3>
                                            <p>{p.desc}</p>
                                            <p className="pricing-bestfor">
                                                <strong>{p.bestFor}</strong>
                                            </p>
                                        </div>
                                    </Zoom>
                                ))}
                            </div>

                            <div className="section-cta">
                                <a href="#contact" className="primary-btn">
                                    Get a Quote + Free Audit
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="faq-section" id="faq">
                        <div className="container">
                            <Parallax speed={-10}>
                                <h2>El Paso Web Design FAQ</h2>
                                <p className="section-intro">
                                    Straight answers before you spend a dollar.
                                </p>

                                <div className="faq-grid">
                                    {faqs.map((f) => (
                                        <Fade key={f.q}>
                                            <div className="faq-item">
                                                <h3>{f.q}</h3>
                                                <p>{f.a}</p>
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            </Parallax>
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <section className="vision" id="cta-bottom">
                        <div className="container">
                            <Parallax speed={-10}>
                                <h2>Ready for a Website That Produces Leads?</h2>
                                <p>
                                    Get a free Website + SEO Audit and a simple plan for what to fix
                                    first to drive more calls in El Paso.
                                </p>
                                <div className="vision-cta">
                                    <a href="#contact" className="primary-btn">
                                        Request the Free Audit
                                    </a>
                                </div>
                            </Parallax>
                        </div>
                    </section>

                    {/* CONTACT FORM */}
                    <div id="contact">
                        <ContactForm />
                    </div>
                </div>
            </PublicLayout>
        </HelmetProvider>
    );
}
