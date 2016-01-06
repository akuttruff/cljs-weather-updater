[ClojureScript Reagent](https://reagent-project.github.io/) Weather Updater
----------------------------------------

This demo application pulls from [Yogthos' Reagent-Example](https://github.com/yogthos/reagent-example) project and uses the [Weather Underground API](http://www.wunderground.com/weather/api/) to display weather conditions for a variety of locations.

The API key is hardcoded into the source for demonstration purposes, and the data is pulled via [cljs-ajax](https://github.com/JulianBirch/cljs-ajax) and parsed client-side using some ClojureScript/JavaScript interop.

Compile your ClojureScript with the following command:

```
rlwrap lein cljsbuild auto dev
```
(The `rlwrap` enables line editing and tab completions within the REPL.)

Then, start your server:

```
lein ring server
```