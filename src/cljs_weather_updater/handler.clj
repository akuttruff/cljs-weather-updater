(ns cljs-weather-updater.handler
  (:require [compojure.core :refer [defroutes GET]]
            [cljs-weather-updater.layout :as layout]
            [cljs-weather-updater.routes.services :refer [service-routes]]
            [cljs-weather-updater.middleware :refer [load-middleware]]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [compojure.route :as route]))

(defroutes app-routes
  (GET "/" [] (layout/render "app.html"))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app (app-handler
           ;; add your application routes here
           [service-routes app-routes]
           ;; add custom middleware here
           :middleware (load-middleware)
           ;; timeout sessions after 30 minutes
           :session-options {:timeout (* 60 30)
                             :timeout-response (redirect "/")}))
