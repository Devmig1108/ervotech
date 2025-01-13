<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ervotech offers expert web consulting, including SEO, web design, and software development tailored to your business needs.">
    <meta name="keywords" content="El Paso , Texas, web consulting, seo, web development, website migration, software development, web design, website development, web applications">
    <meta name="author" content="Ervotech">
    <meta property="og:description" content="Modern web solutions for SEO, web design, and software development.">
    <!-- <meta property="og:image" content="images/Logo2.png"> -->
    <meta property="og:url" content="www.ervotechep.com">
    <meta name="ahrefs-site-verification" content="82d307b97231187fb555ca48872989fc276d498ac2f0227199f04a136b2e2cf7">
    <meta property="og:type" content="website">
    <meta name="google-site-verification" content="V0mWDiLdd4HHo8qjOzE3Ux_ppGB-ki1PA4kwY2wdUek" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="/images/Logo2.png">

    <title inertia>Ervotech - Web Consulting and Development</title>

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
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>