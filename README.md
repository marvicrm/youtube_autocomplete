# youtube_autocomplete
A very lightweight YouTube search autocomplete. No javascript library needed!

This is not just a youtube autocomplete, it will also suggest any keywords available on google.

<b>Screenshot</b>

<img src="https://s12.postimg.org/7dzbejxvh/y_autocomplete.png" />

<b>Basic Usage</b>

<!-- Important file to include: CSS & JS file -->
<link rel="stylesheet" href="youtube_autocomplete.css" />
<script src="youtube_autocomplete.js"></script>

<!-- Call -->
<script>
  Youtube_AC.Init();
</script>

Then just put an id 'youtube_ac' into your search box
<input type="text" id="youtube_ac">

====================================
Optional Parameters
====================================

Youtube_AC.Init(limit,minchar);

Where:
  limit = the number of max results on autocomplete. Default = 8
  minchar = the number of input characters needed in order to fire the autocomplete event. Default = 3


<b>Installation</b>

Composer:
- composer require "marvicrm/youtube_autocomplete":"dev-master"

Manual:
- Download the project as zip file, extract on your desired folder

Please run the demo.html for actual testing
