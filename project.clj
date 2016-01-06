(defproject cljs-weather-updater "0.1.0-SNAPSHOT"
 :description "FIXME: write description"
 :url "http://example.com/FIXME"
 :dependencies [[org.clojure/clojure "1.7.0"]
                [org.clojure/clojurescript "1.7.170"]
                [lib-noir "0.9.9"]
                [ring-server "0.4.0"]
                [selmer "0.6.8"]
                [com.taoensso/timbre "3.2.1"]
                [com.taoensso/tower "2.0.2"]
                [markdown-clj "0.9.44"]
                [environ "0.5.0"]
                [noir-exception "0.2.2"]
                [clj-http "2.0.0"]
                [reagent "0.4.2"]
                [cljs-ajax "0.2.6"]]

 :repl-options {:init-ns cljs-weather-updater.repl}
 :plugins [[lein-ring "0.9.7"]
           [lein-environ "1.0.1"]
           [lein-cljsbuild "1.1.2"]
           [lein-figwheel "0.5.0-2"]]
 :ring {:handler cljs-weather-updater.handler/app}

 :cljsbuild
 {:builds
  [{:id "dev"
    :source-paths ["src-cljs"]
    :figwheel true
    :compiler
    {:optimizations :none
     :output-to "resources/public/js/app.js"
     :output-dir "resources/public/js/"
     :pretty-print true
     :source-map true}}
   {:id "release"
    :source-paths ["src-cljs"]
    :compiler
    {:output-to "resources/public/js/app.js"
     ;:source-map "resources/public/js/app.js.map"
     :optimizations :advanced
     :pretty-print false
     :output-wrapper false
     :closure-warnings {:non-standard-jsdoc :off}}}]}

 :profiles
 {:uberjar {:aot :all}
  :release {:ring {:open-browser? false
                      :stacktraces?  false
                      :auto-reload?  false}}
  :dev {:dependencies [[ring-mock "0.1.5"]
                       [ring/ring-devel "1.3.0"]
                       [pjstadig/humane-test-output "0.6.0"]]
        :injections [(require 'pjstadig.humane-test-output)
                     (pjstadig.humane-test-output/activate!)]
        :env {:dev true}}}
 :min-lein-version "2.0.0")
