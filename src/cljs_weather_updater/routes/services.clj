(ns cljs-weather-updater.routes.services
  (:use compojure.core)
  (:require [cljs-weather-updater.layout :as layout]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]))

(defn save-document [doc]
  (pprint doc)
  {:status "ok"})

(defroutes service-routes
  (POST "/save" {:keys [body-params]}
        (edn (save-document body-params))))
