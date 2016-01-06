// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.core.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__17418__auto__ = (((this$ == null))?null:this$);
var m__17419__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__17419__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.core.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$,error_code){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$2 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else {
var x__17418__auto__ = (((this$ == null))?null:this$);
var m__17419__auto__ = (ajax.core._abort[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,this$,error_code);
} else {
var m__17419__auto____$1 = (ajax.core._abort["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,this$,error_code);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});

(ajax.core.AjaxImpl["null"] = true);

(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__22245){
var map__22246 = p__22245;
var map__22246__$1 = ((((!((map__22246 == null)))?((((map__22246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22246):map__22246);
var timeout = cljs.core.get.call(null,map__22246__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var G__22248 = (new goog.net.XhrIo());
goog.events.listen(G__22248,goog.net.EventType.COMPLETE,handler);

G__22248.setTimeoutInterval((function (){var or__16763__auto__ = timeout;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return (0);
}
})());

G__22248.send(uri,method,body,headers);

return G__22248;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){
var this$__$1 = this;
return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__22249){
var map__22250 = p__22249;
var map__22250__$1 = ((((!((map__22250 == null)))?((((map__22250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22250):map__22250);
var id = cljs.core.get.call(null,map__22250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__22250__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__22250__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__22250__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN"], null);
});
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.read_text = (function ajax$core$read_text(xhrio){
return xhrio.getResponseText();
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text"], null);
});
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should use this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(p__22252){
var map__22255 = p__22252;
var map__22255__$1 = ((((!((map__22255 == null)))?((((map__22255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22255):map__22255);
var prefix = cljs.core.get.call(null,map__22255__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__22255__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),((function (map__22255,map__22255__$1,prefix,keywords_QMARK_){
return (function ajax$core$json_response_format_$_read_json(xhrio){
var json = xhrio.getResponseJson(prefix);
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
});})(map__22255,map__22255__$1,prefix,keywords_QMARK_))
,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio){
var ct = (function (){var or__16763__auto__ = xhrio.getResponseHeader("Content-Type");
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return "";
}
})();
var detect = ((function (ct){
return (function ajax$core$get_default_format_$_detect(s){
return (ct.indexOf(s) >= (0));
});})(ct))
;
return cljs.core.update_in.call(null,(cljs.core.truth_(detect.call(null,"application/json"))?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(detect.call(null,"application/edn"))?ajax.core.edn_response_format.call(null):(cljs.core.truth_(detect.call(null,"text/plain"))?ajax.core.raw_response_format.call(null):(cljs.core.truth_(detect.call(null,"text/html"))?ajax.core.raw_response_format.call(null):ajax.core.edn_response_format.call(null)
)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null),((function (ct){
return (function (p1__22257_SHARP_){
return [cljs.core.str(p1__22257_SHARP_),cljs.core.str(" (default)")].join('');
});})(ct))
);
});
ajax.core.use_content_type = (function ajax$core$use_content_type(format){
return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",-1857649168));
});
ajax.core.get_format = (function ajax$core$get_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null));
} else {
throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));

}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__22258,xhrio){
var map__22261 = p__22258;
var map__22261__$1 = ((((!((map__22261 == null)))?((((map__22261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22261):map__22261);
var description = cljs.core.get.call(null,map__22261__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",368289415),true,new cljs.core.Keyword(null,"original-text","original-text",744448452),xhrio.getResponseText());
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.interpret_response = (function ajax$core$interpret_response(format,response,get_default_format){
try{var xhrio = response.target;
var status = xhrio.getStatus();
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request aborted by client.",new cljs.core.Keyword(null,"aborted?","aborted?",448075047),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request timed out.",new cljs.core.Keyword(null,"timeout?","timeout?",-1570063160),true], null)], null);
}
} else {
var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));
var parse = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format__$1);
try{var response__$1 = parse.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null)], null);
}
}catch (e22266){if((e22266 instanceof Object)){
var e = e22266;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e22266;

}
}}
}catch (e22265){if((e22265 instanceof Object)){
var e = e22265;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(0),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),e.message,new cljs.core.Keyword(null,"response","response",-1068424192),null], null)], null);
} else {
throw e22265;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(uri,method,p__22267,p__22268){
var map__22275 = p__22267;
var map__22275__$1 = ((((!((map__22275 == null)))?((((map__22275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22275):map__22275);
var format = map__22275__$1;
var write = cljs.core.get.call(null,map__22275__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__22275__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__22276 = p__22268;
var map__22276__$1 = ((((!((map__22276 == null)))?((((map__22276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22276):map__22276);
var params = cljs.core.get.call(null,map__22276__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__22276__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core._EQ_.call(null,method,"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else {
var map__22279 = format;
var map__22279__$1 = ((((!((map__22279 == null)))?((((map__22279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22279):map__22279);
var write__$1 = cljs.core.get.call(null,map__22279__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__22279__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = write__$1.call(null,params);
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$1 = cljs.core.merge.call(null,(function (){var or__16763__auto__ = headers;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.base_handler = (function ajax$core$base_handler(format,p__22281){
var map__22284 = p__22281;
var map__22284__$1 = ((((!((map__22284 == null)))?((((map__22284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22284):map__22284);
var handler = cljs.core.get.call(null,map__22284__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var get_default_format = cljs.core.get.call(null,map__22284__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888));
if(cljs.core.truth_(handler)){
return ((function (map__22284,map__22284__$1,handler,get_default_format){
return (function (xhrio){
return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__16763__auto__ = get_default_format;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return ajax.core.no_format;
}
})()));
});
;})(map__22284,map__22284__$1,handler,get_default_format))
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(var_args){
var args22286 = [];
var len__17821__auto___22296 = arguments.length;
var i__17822__auto___22297 = (0);
while(true){
if((i__17822__auto___22297 < len__17821__auto___22296)){
args22286.push((arguments[i__17822__auto___22297]));

var G__22298 = (i__17822__auto___22297 + (1));
i__17822__auto___22297 = G__22298;
continue;
} else {
}
break;
}

var G__22291 = args22286.length;
switch (G__22291) {
case 1:
return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17840__auto__ = (new cljs.core.IndexedSeq(args22286.slice((2)),(0)));
return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17840__auto__);

}
});

ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 = (function (p__22292){
var map__22293 = p__22292;
var map__22293__$1 = ((((!((map__22293 == null)))?((((map__22293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22293):map__22293);
var opts = map__22293__$1;
var uri = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var manager = cljs.core.get.call(null,map__22293__$1,new cljs.core.Keyword(null,"manager","manager",-818607470));
var format__$1 = ajax.core.get_format.call(null,format);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__22295 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);
var uri__$1 = cljs.core.nth.call(null,vec__22295,(0),null);
var body = cljs.core.nth.call(null,vec__22295,(1),null);
var headers = cljs.core.nth.call(null,vec__22295,(2),null);
var handler = ajax.core.base_handler.call(null,format__$1,opts);
return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});

ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic = (function (uri,method,args){
var f = cljs.core.first.call(null,args);
var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,args):f);
return ajax.core.ajax_request.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method));
});

ajax.core.ajax_request.cljs$lang$applyTo = (function (seq22287){
var G__22288 = cljs.core.first.call(null,seq22287);
var seq22287__$1 = cljs.core.next.call(null,seq22287);
var G__22289 = cljs.core.first.call(null,seq22287__$1);
var seq22287__$2 = cljs.core.next.call(null,seq22287__$1);
return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(G__22288,G__22289,seq22287__$2);
});

ajax.core.ajax_request.cljs$lang$maxFixedArity = (2);
ajax.core.json_format = (function ajax$core$json_format(format_params){
return cljs.core.merge.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function ajax$core$edn_format(){
return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function ajax$core$raw_format(){
return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
var G__22301 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__22301) {
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));

}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
var G__22304 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__22304) {
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
default:
return null;

}

}
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(p__22306){
var map__22312 = p__22306;
var map__22312__$1 = ((((!((map__22312 == null)))?((((map__22312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22312):map__22312);
var handler = cljs.core.get.call(null,map__22312__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__22312__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__22312__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__22312,map__22312__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__22314){
var vec__22316 = p__22314;
var ok = cljs.core.nth.call(null,vec__22316,(0),null);
var result = cljs.core.nth.call(null,vec__22316,(1),null);
var temp__4423__auto___22317 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___22317)){
var h_22318 = temp__4423__auto___22317;
h_22318.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__22312,map__22312__$1,handler,error_handler,finally$))
});
ajax.core.transform_format = (function ajax$core$transform_format(p__22319){
var map__22322 = p__22319;
var map__22322__$1 = ((((!((map__22322 == null)))?((((map__22322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22322):map__22322);
var opts = map__22322__$1;
var format = cljs.core.get.call(null,map__22322__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__22322__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var rf = ajax.core.keyword_response_format.call(null,response_format,opts);
if((format == null)){
return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),rf);
} else {
if((format instanceof cljs.core.Keyword)){
return cljs.core.merge.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else {
return format;

}
}
});
ajax.core.transform_opts = (function ajax$core$transform_opts(opts){

return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888),ajax.core.get_default_format);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22328 = arguments.length;
var i__17822__auto___22329 = (0);
while(true){
if((i__17822__auto___22329 < len__17821__auto___22328)){
args__17828__auto__.push((arguments[i__17822__auto___22329]));

var G__22330 = (i__17822__auto___22329 + (1));
i__17822__auto___22329 = G__22330;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22326){
var vec__22327 = p__22326;
var opts = cljs.core.nth.call(null,vec__22327,(0),null);
return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq22324){
var G__22325 = cljs.core.first.call(null,seq22324);
var seq22324__$1 = cljs.core.next.call(null,seq22324);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__22325,seq22324__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22335 = arguments.length;
var i__17822__auto___22336 = (0);
while(true){
if((i__17822__auto___22336 < len__17821__auto___22335)){
args__17828__auto__.push((arguments[i__17822__auto___22336]));

var G__22337 = (i__17822__auto___22336 + (1));
i__17822__auto___22336 = G__22337;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22333){
var vec__22334 = p__22333;
var opts = cljs.core.nth.call(null,vec__22334,(0),null);
return ajax.core.ajax_request.call(null,uri,"HEAD",ajax.core.transform_opts.call(null,opts));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq22331){
var G__22332 = cljs.core.first.call(null,seq22331);
var seq22331__$1 = cljs.core.next.call(null,seq22331);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__22332,seq22331__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22342 = arguments.length;
var i__17822__auto___22343 = (0);
while(true){
if((i__17822__auto___22343 < len__17821__auto___22342)){
args__17828__auto__.push((arguments[i__17822__auto___22343]));

var G__22344 = (i__17822__auto___22343 + (1));
i__17822__auto___22343 = G__22344;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22340){
var vec__22341 = p__22340;
var opts = cljs.core.nth.call(null,vec__22341,(0),null);
return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq22338){
var G__22339 = cljs.core.first.call(null,seq22338);
var seq22338__$1 = cljs.core.next.call(null,seq22338);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__22339,seq22338__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22349 = arguments.length;
var i__17822__auto___22350 = (0);
while(true){
if((i__17822__auto___22350 < len__17821__auto___22349)){
args__17828__auto__.push((arguments[i__17822__auto___22350]));

var G__22351 = (i__17822__auto___22350 + (1));
i__17822__auto___22350 = G__22351;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22347){
var vec__22348 = p__22347;
var opts = cljs.core.nth.call(null,vec__22348,(0),null);
return ajax.core.ajax_request.call(null,uri,"PUT",ajax.core.transform_opts.call(null,opts));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq22345){
var G__22346 = cljs.core.first.call(null,seq22345);
var seq22345__$1 = cljs.core.next.call(null,seq22345);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__22346,seq22345__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22356 = arguments.length;
var i__17822__auto___22357 = (0);
while(true){
if((i__17822__auto___22357 < len__17821__auto___22356)){
args__17828__auto__.push((arguments[i__17822__auto___22357]));

var G__22358 = (i__17822__auto___22357 + (1));
i__17822__auto___22357 = G__22358;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22354){
var vec__22355 = p__22354;
var opts = cljs.core.nth.call(null,vec__22355,(0),null);
return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq22352){
var G__22353 = cljs.core.first.call(null,seq22352);
var seq22352__$1 = cljs.core.next.call(null,seq22352);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__22353,seq22352__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22363 = arguments.length;
var i__17822__auto___22364 = (0);
while(true){
if((i__17822__auto___22364 < len__17821__auto___22363)){
args__17828__auto__.push((arguments[i__17822__auto___22364]));

var G__22365 = (i__17822__auto___22364 + (1));
i__17822__auto___22364 = G__22365;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22361){
var vec__22362 = p__22361;
var opts = cljs.core.nth.call(null,vec__22362,(0),null);
return ajax.core.ajax_request.call(null,uri,"OPTIONS",ajax.core.transform_opts.call(null,opts));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq22359){
var G__22360 = cljs.core.first.call(null,seq22359);
var seq22359__$1 = cljs.core.next.call(null,seq22359);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__22360,seq22359__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22370 = arguments.length;
var i__17822__auto___22371 = (0);
while(true){
if((i__17822__auto___22371 < len__17821__auto___22370)){
args__17828__auto__.push((arguments[i__17822__auto___22371]));

var G__22372 = (i__17822__auto___22371 + (1));
i__17822__auto___22371 = G__22372;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__22368){
var vec__22369 = p__22368;
var opts = cljs.core.nth.call(null,vec__22369,(0),null);
return ajax.core.ajax_request.call(null,uri,"TRACE",ajax.core.transform_opts.call(null,opts));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq22366){
var G__22367 = cljs.core.first.call(null,seq22366);
var seq22366__$1 = cljs.core.next.call(null,seq22366);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__22367,seq22366__$1);
});

//# sourceMappingURL=core.js.map