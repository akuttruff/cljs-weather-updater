(ns main.core
 (:require [reagent.core :as reagent :refer [atom]]
           [ajax.core :refer [GET]]))

(def api-key "")

(def state (atom {}))

(defn set-value! [id value]
  (swap! state assoc id value))

(defn get-value [id]
  (get @state id))

(defn get-in-value [path]
  (get-in @state path))

(def url-map
  (let [base-url "http://api.wunderground.com/api/"
        api-key ""
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
                         :icon-url (str "http://icons.wxug.com/i/c/i/" icon ".gif")})))

(defn portland-handler [response]
  (let [data (-> response (get "current_observation"))
        weather (get data "weather")
        temp (get data "temp_f")
        icon (get data "icon")]
    (set-value! :portland {:weather weather
                           :temp temp
                           :icon-url (str "http://icons.wxug.com/i/c/i/" icon ".gif")})))

(defn temp-diff []
  (let [boston-temp (get-in @state [:boston :temp])
        portland-temp (get-in @state [:portland :temp])
        difference (Math/round (int (- portland-temp boston-temp)))
        contrast (if (> difference 0)
                   "warmer "
                   "colder ")]
    [:p (str "It is " (Math/abs difference) "° " contrast " in Portland right now than it is in Boston.")]))

(defn header []
  [:div.title 
   [:h1 "Boston + Portland Weather Updater"]])

(defn init []
  (GET (:boston url-map)
       {:handler boston-handler})
  (GET (:portland url-map)
       {:handler portland-handler}))

(defn home []
  (init)
  [:div.flexbox-column
   [header]
   [:div.flexbox-row
    [:div.left
     [:h2 "Boston: "]
     [:div.flexbox-column
      [:label (get-in-value [:boston :weather])]
      [:label (str (get-in-value [:boston :temp]) "° ")]
      [:img.icon {:src (get-in-value [:boston :icon-url])}]]]
    [:div.right
     [:h2 "Portland: "]
     [:div.flexbox-column
      [:label (get-in-value [:portland :weather])]
      [:label (str (get-in-value [:portland :temp]) "° ")]
      [:img.icon {:src (get-in-value [:portland :icon-url])}]]]]
   [temp-diff]])

;;start the app
(reagent/render-component [home] (.getElementById js/document "app"))
              
