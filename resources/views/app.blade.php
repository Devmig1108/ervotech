<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ervotech offers expert web consulting, including SEO, web design, and software development tailored to your business needs.">
    <meta name="keywords" content="Web Consulting, SEO Services, Web Development, Website Migration, Software Development">
    <meta name="author" content="Ervotech">
    <meta property="og:title" content="Ervotech - Web Consulting and Development">
    <meta property="og:description" content="Modern web solutions for SEO, web design, and software development.">
    <!-- <meta property="og:image" content="images/Logo2.png"> -->
    <meta property="og:url" content="www.ervotechep.com">
    <meta name="ahrefs-site-verification" content="82d307b97231187fb555ca48872989fc276d498ac2f0227199f04a136b2e2cf7">
    <meta property="og:type" content="website">
    <meta name="google-site-verification" content="V0mWDiLdd4HHo8qjOzE3Ux_ppGB-ki1PA4kwY2wdUek" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <title inertia>Ervotech - Web Consulting and Development</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>