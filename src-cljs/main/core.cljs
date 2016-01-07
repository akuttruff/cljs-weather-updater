(ns main.core
 (:require [reagent.core :as reagent :refer [atom]]
           [ajax.core :refer [GET]]))

(def api-key "625172310aff38a6")

(def state (atom {}))

(defn set-value! [id value]
  (swap! state assoc id value))

(defn get-value [id]
  (get @state id))

(def url-map
  (let [base-url "http://api.wunderground.com/api/"
        api-key "625172310aff38a6"
        boston "/conditions/q/MA/Boston.json"
        portland "/conditions/q/OR/Portland.json"]
    {:boston (str base-url api-key boston)
     :portland (str base-url api-key portland)}))

(defn boston-handler [response]
  (let [data (-> response (get "current_observation"))
        weather (get data "weather")
        temp (get data "temp_f")
        icon (get data "icon")]
    (set-value! :boston {:weather weather
                         :temp temp
                         :icon icon})))

(defn portland-handler [response]
  (let [data (-> response (get "current_observation"))
        weather (get data "weather")
        temp (get data "temp_f")
        icon (get data "icon")]
    (set-value! :portland {:weather weather
                         :temp temp
                         :icon icon})))

(defn get-boston-weather []
  (GET (:boston url-map)
       {:handler boston-handler}))

(defn get-portland-weather []
  (GET (:portland url-map)
       {:handler portland-handler}))

(defn header []
  [:div.title 
   [:h1 "Boston + Portland Weather Updater"]])

(defn home []
  (get-boston-weather)
  (get-portland-weather)
  [:div.flexbox
   [header]
   [:p "Boston weather: "]
   [:label (str (get-value :boston))]
   [:p "Portland weather: "]
   [:label (str (get-value :portland))]])

;;start the app
(reagent/render-component [home] (.getElementById js/document "app"))
