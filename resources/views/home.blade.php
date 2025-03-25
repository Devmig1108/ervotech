@extends('layouts.public')

@section('title', 'Custom Web Design & SEO Services | Ervotech El Paso')
@section('meta')
    <link rel="canonical" href="https://www.ervotechep.com/" />
    <meta property="og:title" content="Custom Web Design & SEO Services | Ervotech El Paso" />
    <meta property="og:description" content="Boost your online presence with expert web design & SEO solutions. Ervotech helps businesses in El Paso grow with modern digital strategies." />
    <meta property="og:image" content="https://www.ervotechep.com/images/Logo2.png" />
    <meta property="og:url" content="https://www.ervotechep.com/" />
    <meta name="description" content="Looking for expert web design and SEO services? Ervotech provides custom websites & SEO solutions to help your business grow. Contact us today!" />
@endsection

@section('content')
    {{-- Hero Section --}}
    <section class="hero" style="background-image: url('/images/hero3.webp');">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1>Custom Web Design & SEO Services in El Paso That Help Your Business Grow</h1>
            <p>
                Looking for expert web design and SEO services in El Paso? Ervotech builds high-performance websites and 
                search-optimized strategies tailored for small businesses and startups. Our team ensures your website ranks 
                higher, loads faster, and converts visitors into customers.
            </p>
            <div class="hero-buttons">
                <a href="#services" class="primary-btn">Explore Our Services</a>
                <a href="#contact" class="secondary-btn">Get in Touch</a>
            </div>
        </div>
    </section>

    {{-- Split Section --}}
    <section class="split-section">
        <div class="split-text">
            <h1>El Paso Web Design & SEO Services</h1>
            <p>
                At Ervotech, we are committed to providing top-notch 
                <strong class="font-blue">web design</strong>, 
                <strong class="font-blue">SEO solutions</strong>, and 
                <strong class="font-blue">custom software development</strong> tailored for businesses in El Paso and the surrounding area.
            </p>
            <p><em>We help local businesses enhance their online presence, attract customers, and scale through modern digital solutions.</em></p>
        </div>
        <div class="split-image" role="img" aria-label="El Paso business owners working on their website redesign"></div>
    </section>

    {{-- Services Section --}}
    <section class="home-services" id="home-services">
        <div class="container">
            <h2>Our Web Design & Development Services in El Paso</h2>
            <div class="service-grid">
                <div class="service-card" itemscope itemtype="https://schema.org/Service">
                    <h3><a href="/services#website-migration" itemprop="name">Website Migration</a></h3>
                    <p itemprop="description">Seamless migration of your website to modern, scalable platforms, ensuring improved performance.</p>
                </div>
                <div class="service-card" itemscope itemtype="https://schema.org/Service">
                    <h3><a href="/services#web-design" itemprop="name">Custom Web Design in El Paso</a></h3>
                    <p itemprop="description">Build a stunning, high-performing website tailored for your local business.</p>
                </div>
                <div class="service-card" itemscope itemtype="https://schema.org/Service">
                    <h3><a href="/services#software-development" itemprop="name">Software Development for Local Businesses</a></h3>
                    <p itemprop="description">Custom web applications designed for El Paso businesses to improve efficiency and growth.</p>
                </div>
                <div class="service-card" itemscope itemtype="https://schema.org/Service">
                    <h3><a href="/services#seo-strategy" itemprop="name">Local SEO & Content Strategy</a></h3>
                    <p itemprop="description">Improve search rankings and attract more El Paso customers with optimized content and SEO strategies.</p>
                </div>
            </div>
        </div>
    </section>

    {{-- Vision CTA --}}
    <section class="vision" id="vision">
        <div class="container">
            <h2>Partner with the Leading Web Design Agency in El Paso</h2>
            <p>We help small and medium-sized businesses establish a strong online presence through expert web development and SEO solutions.</p>
            <div class="vision-cta">
                <a href="#contact" class="primary-btn">Let's Build Together</a>
            </div>
        </div>
    </section>

    {{-- Contact Form Partial --}}
@endsection
