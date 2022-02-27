<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="{{ mix('css/custom.css') }}">
     

        <!-- Scripts -->
        @routes
        
    </head>
    <body class="font-sans antialiased">
        @inertia

        @env ('local')
            <script src="http://localhost:8080/js/bundle.js"></script>
        @endenv
        <script src="/js/jquery.min.js"></script>
        <script src="{{ mix('js/app.js') }}"></script>
        <script src="/js/parallax.min.js"></script>
        <script src="/js/jquery.lazyload.min.js"></script>
        <script src="/js/scrollfade.js"></script>
        <script>
            $("div.lazy").lazyload({ 
                effect : "fadeIn"
            });
            $("img.lazy").lazyload({ 
                effect : "fadeIn"
            });
        </script>
    </body>
</html>
