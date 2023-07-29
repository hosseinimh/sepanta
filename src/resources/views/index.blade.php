<!DOCTYPE html>
@if (app()->currentLocale() === \App\Constants\Locale::FA)
<html lang="{{app()->currentLocale()}}" dir="rtl">
@else
<html lang="{{app()->currentLocale()}}" dir="ltr">
@endif

<head>
    <base href="./">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keyword" content="">
    <link rel="apple-touch-icon" sizes="180x180" href="{{$THEME::BASE_URL}}/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{$THEME::BASE_URL}}/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{$THEME::BASE_URL}}/favicon-16x16.png">
    <link rel="icon" type="image/x-icon" href="{{$THEME::BASE_URL}}/favicon.ico">
    <link rel="manifest" href="{{$THEME::BASE_URL}}/site.webmanifest">
    <title>{{ __('general._title') }}</title>
    @php
    try {
    $filename = 'assets/css/style.css';
    $fileModified = substr(md5(filemtime($filename)), 0, 6);
    } catch (\Exception) {
    $fileModified = '';
    }
    @endphp
    @if (app()->currentLocale() === \App\Constants\Locale::FA)
    <link href="{{$THEME::CSS_PATH}}/style_rtl.css?v={{$fileModified}}" rel="stylesheet">
    @else
    <link href="{{$THEME::CSS_PATH}}/style.css?v={{$fileModified}}" rel="stylesheet">
    @endif
</head>

<body>
    <div id="root"></div>
    @php
    try {
    $filename = 'assets/js/index.js';
    $fileModified = substr(md5(filemtime($filename)), 0, 6);
    } catch (\Exception) {
    $fileModified = '';
    }
    @endphp
    <script src="{{$THEME::JS_PATH}}/index.js?v={{$fileModified}}"></script>
</body>

</html>