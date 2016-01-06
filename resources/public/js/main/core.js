// Compiled by ClojureScript 1.7.170 {}
goog.provide('main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
main.core.api_key = "625172310aff38a6";
main.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
main.core.set_value_BANG_ = (function main$core$set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,main.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,main.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
main.core.get_value = (function main$core$get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,main.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
main.core.url_map = (function (){var base_url = "http://api.wunderground.com/api/";
var api_key = "625172310aff38a6";
var boston = "/conditions/q/MA/Boston.json";
var portland = "/conditions/q/OR/Portland.json";
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boston","boston",-1651107765),[cljs.core.str(base_url),cljs.core.str(api_key),cljs.core.str(boston)].join(''),new cljs.core.Keyword(null,"portland","portland",-1428587244),[cljs.core.str(base_url),cljs.core.str(api_key),cljs.core.str(portland)].join('')], null);
})();
main.core.handler = (function main$core$handler(response){
return console.log([cljs.core.str(new cljs.core.Keyword(null,"boston","boston",-1651107765).cljs$core$IFn$_invoke$arity$1(main.core.url_map))].join(''));
});
main.core.get_weather = (function main$core$get_weather(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"boston","boston",-1651107765).cljs$core$IFn$_invoke$arity$1(main.core.url_map),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),main.core.handler], null));
});
main.core.header = (function main$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Boston + Portland Weather Updater"], null)], null);
});
main.core.home = (function main$core$home(){
main.core.get_weather.call(null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flexbox","div.flexbox",-422202666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.header], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map