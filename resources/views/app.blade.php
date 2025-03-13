<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Looking for expert web design and SEO services? Ervotech provides custom websites & SEO solutions to help your business grow. Contact us today!">
    <meta name="keywords" content="El Paso , Texas, web design, web development, website migration, software development, web design el paso, website development, web applications, el paso web design, el paso web development, LocalBusiness markup code">
    <meta name="author" content="Ervotech">
    <meta property="og:description" content="Modern web solutions for SEO, web design, and software development.">
    <!-- <meta property="og:image" content="images/Logo2.png"> -->
    <meta property="og:url" content="www.ervotechep.com">
    <meta name="ahrefs-site-verification" content="82d307b97231187fb555ca48872989fc276d498ac2f0227199f04a136b2e2cf7">
    <meta property="og:type" content="website">
    <meta name="google-site-verification" content="V0mWDiLdd4HHo8qjOzE3Ux_ppGB-ki1PA4kwY2wdUek" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="/images/Logo2.png">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Custom Web Design & SEO Services | Ervotech El Paso</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y55H1W6TCX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-Y55H1W6TCX');
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ervotech",
            "url": "https://www.ervotechep.com",
            "logo": "https://www.ervotechep.com/images/Logo2.png",
            "description": "Custom web design, SEO, and digital marketing services in El Paso.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "El Paso",
                "addressRegion": "TX",
                "postalCode": "79938",
                "addressCountry": "US"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-915-341-0376",
                "contactType": "customer service"
            }
        }
    </script>

</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>