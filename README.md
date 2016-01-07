![](https://github.com/akuttruff/cljs-weather-updater/blob/master/resources/public/img/weather-updater.png)

[ClojureScript Reagent](https://reagent-project.github.io/) Weather Updater
----------------------------------------

This demo application pulls from [Yogthos' Reagent-Example](https://github.com/yogthos/reagent-example) project and uses the [Weather Underground API](http://www.wunderground.com/weather/api/) to display weather conditions for a variety of locations.

The API key is hardcoded into the source for demonstration purposes, and the data is pulled via [cljs-ajax](https://github.com/JulianBirch/cljs-ajax) and parsed client-side using some ClojureScript/JavaScript interop.

I'm using [Bruce Hauman's Figwheel](https://github.com/bhauman/lein-figwheel) to autocompile my ClojureScript while developing. [Live coding](https://www.youtube.com/watch?v=j-kj2qwJa_E) front end features can be a truly joyful experience, I promise.

Compile your ClojureScript with the following command:

```
rlwrap lein figwheel
```
(The `rlwrap` enables line editing and tab completions within the REPL.)

Then, start your server:

```
lein ring server
```