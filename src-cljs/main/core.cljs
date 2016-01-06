(ns main.core
 (:require [reagent.core :as reagent :refer [atom]]
           [ajax.core :refer [GET]]))

(def api-key "625172310aff38a6")

(def state (atom {:doc {} :saved? false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))

(def url-map
  (let [base-url "http://api.wunderground.com/api/"
        api-key "625172310aff38a6"
        boston "/conditions/q/MA/Boston.json"
        portland "/conditions/q/OR/Portland.json"]
    {:boston (str base-url api-key boston)
     :portland (str base-url api-key portland)}))

(defn handler [response]
  (.log js/console (str response)))

(defn get-boston-weather []
  (GET (:boston url-map)
       {:handler handler}))

(defn get-portland-weather []
  (GET (:portland url-map)
       {:handler handler}))

(defn header []
  [:div.title 
   [:h1 "Boston + Portland Weather Updater"]])

(defn home []
  (get-boston-weather)
  (get-portland-weather)
  [:div.flexbox
   [header]])

;;start the app
(reagent/render-component [home] (.getElementById js/document "app"))
