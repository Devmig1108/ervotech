<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>@yield('title', 'Ervotech')</title>
    @yield('meta')

    {{-- Styles --}}
    @vite('resources/css/styles.css')
</head>
<body data-theme="dark">
    {{-- Nav --}}

    {{-- Main Content --}}
    <main>
        @yield('content')
    </main>

    {{-- Footer --}}

    {{-- Scripts --}}
    <script src="{{ asset('js/app.js') }}"></script>

    <script>
        // Handle theme toggle (optional)
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.dataset.theme = savedTheme;
    </script>
</body>
</html>
