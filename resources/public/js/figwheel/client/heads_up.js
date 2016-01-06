// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17828__auto__ = [];
var len__17821__auto___21913 = arguments.length;
var i__17822__auto___21914 = (0);
while(true){
if((i__17822__auto___21914 < len__17821__auto___21913)){
args__17828__auto__.push((arguments[i__17822__auto___21914]));

var G__21915 = (i__17822__auto___21914 + (1));
i__17822__auto___21914 = G__21915;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((2) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17829__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21905_21916 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21906_21917 = null;
var count__21907_21918 = (0);
var i__21908_21919 = (0);
while(true){
if((i__21908_21919 < count__21907_21918)){
var k_21920 = cljs.core._nth.call(null,chunk__21906_21917,i__21908_21919);
e.setAttribute(cljs.core.name.call(null,k_21920),cljs.core.get.call(null,attrs,k_21920));

var G__21921 = seq__21905_21916;
var G__21922 = chunk__21906_21917;
var G__21923 = count__21907_21918;
var G__21924 = (i__21908_21919 + (1));
seq__21905_21916 = G__21921;
chunk__21906_21917 = G__21922;
count__21907_21918 = G__21923;
i__21908_21919 = G__21924;
continue;
} else {
var temp__4425__auto___21925 = cljs.core.seq.call(null,seq__21905_21916);
if(temp__4425__auto___21925){
var seq__21905_21926__$1 = temp__4425__auto___21925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21905_21926__$1)){
var c__17566__auto___21927 = cljs.core.chunk_first.call(null,seq__21905_21926__$1);
var G__21928 = cljs.core.chunk_rest.call(null,seq__21905_21926__$1);
var G__21929 = c__17566__auto___21927;
var G__21930 = cljs.core.count.call(null,c__17566__auto___21927);
var G__21931 = (0);
seq__21905_21916 = G__21928;
chunk__21906_21917 = G__21929;
count__21907_21918 = G__21930;
i__21908_21919 = G__21931;
continue;
} else {
var k_21932 = cljs.core.first.call(null,seq__21905_21926__$1);
e.setAttribute(cljs.core.name.call(null,k_21932),cljs.core.get.call(null,attrs,k_21932));

var G__21933 = cljs.core.next.call(null,seq__21905_21926__$1);
var G__21934 = null;
var G__21935 = (0);
var G__21936 = (0);
seq__21905_21916 = G__21933;
chunk__21906_21917 = G__21934;
count__21907_21918 = G__21935;
i__21908_21919 = G__21936;
continue;
}
} else {
}
}
break;
}

var seq__21909_21937 = cljs.core.seq.call(null,children);
var chunk__21910_21938 = null;
var count__21911_21939 = (0);
var i__21912_21940 = (0);
while(true){
if((i__21912_21940 < count__21911_21939)){
var ch_21941 = cljs.core._nth.call(null,chunk__21910_21938,i__21912_21940);
e.appendChild(ch_21941);

var G__21942 = seq__21909_21937;
var G__21943 = chunk__21910_21938;
var G__21944 = count__21911_21939;
var G__21945 = (i__21912_21940 + (1));
seq__21909_21937 = G__21942;
chunk__21910_21938 = G__21943;
count__21911_21939 = G__21944;
i__21912_21940 = G__21945;
continue;
} else {
var temp__4425__auto___21946 = cljs.core.seq.call(null,seq__21909_21937);
if(temp__4425__auto___21946){
var seq__21909_21947__$1 = temp__4425__auto___21946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21909_21947__$1)){
var c__17566__auto___21948 = cljs.core.chunk_first.call(null,seq__21909_21947__$1);
var G__21949 = cljs.core.chunk_rest.call(null,seq__21909_21947__$1);
var G__21950 = c__17566__auto___21948;
var G__21951 = cljs.core.count.call(null,c__17566__auto___21948);
var G__21952 = (0);
seq__21909_21937 = G__21949;
chunk__21910_21938 = G__21950;
count__21911_21939 = G__21951;
i__21912_21940 = G__21952;
continue;
} else {
var ch_21953 = cljs.core.first.call(null,seq__21909_21947__$1);
e.appendChild(ch_21953);

var G__21954 = cljs.core.next.call(null,seq__21909_21947__$1);
var G__21955 = null;
var G__21956 = (0);
var G__21957 = (0);
seq__21909_21937 = G__21954;
chunk__21910_21938 = G__21955;
count__21911_21939 = G__21956;
i__21912_21940 = G__21957;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21902){
var G__21903 = cljs.core.first.call(null,seq21902);
var seq21902__$1 = cljs.core.next.call(null,seq21902);
var G__21904 = cljs.core.first.call(null,seq21902__$1);
var seq21902__$2 = cljs.core.next.call(null,seq21902__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21903,G__21904,seq21902__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17676__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17677__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17680__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17676__auto__,prefer_table__17677__auto__,method_cache__17678__auto__,cached_hierarchy__17679__auto__,hierarchy__17680__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17676__auto__,prefer_table__17677__auto__,method_cache__17678__auto__,cached_hierarchy__17679__auto__,hierarchy__17680__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17680__auto__,method_table__17676__auto__,prefer_table__17677__auto__,method_cache__17678__auto__,cached_hierarchy__17679__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21958 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21958.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21958.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_21958.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21958);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21959,st_map){
var map__21964 = p__21959;
var map__21964__$1 = ((((!((map__21964 == null)))?((((map__21964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21964):map__21964);
var container_el = cljs.core.get.call(null,map__21964__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21964,map__21964__$1,container_el){
return (function (p__21966){
var vec__21967 = p__21966;
var k = cljs.core.nth.call(null,vec__21967,(0),null);
var v = cljs.core.nth.call(null,vec__21967,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21964,map__21964__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21968,dom_str){
var map__21971 = p__21968;
var map__21971__$1 = ((((!((map__21971 == null)))?((((map__21971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21971):map__21971);
var c = map__21971__$1;
var content_area_el = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21973){
var map__21976 = p__21973;
var map__21976__$1 = ((((!((map__21976 == null)))?((((map__21976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21976):map__21976);
var content_area_el = cljs.core.get.call(null,map__21976__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_22019){
var state_val_22020 = (state_22019[(1)]);
if((state_val_22020 === (1))){
var inst_22004 = (state_22019[(7)]);
var inst_22004__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22005 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22006 = ["10px","10px","100%","68px","1.0"];
var inst_22007 = cljs.core.PersistentHashMap.fromArrays(inst_22005,inst_22006);
var inst_22008 = cljs.core.merge.call(null,inst_22007,style);
var inst_22009 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22004__$1,inst_22008);
var inst_22010 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22004__$1,msg);
var inst_22011 = cljs.core.async.timeout.call(null,(300));
var state_22019__$1 = (function (){var statearr_22021 = state_22019;
(statearr_22021[(8)] = inst_22010);

(statearr_22021[(9)] = inst_22009);

(statearr_22021[(7)] = inst_22004__$1);

return statearr_22021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22019__$1,(2),inst_22011);
} else {
if((state_val_22020 === (2))){
var inst_22004 = (state_22019[(7)]);
var inst_22013 = (state_22019[(2)]);
var inst_22014 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22015 = ["auto"];
var inst_22016 = cljs.core.PersistentHashMap.fromArrays(inst_22014,inst_22015);
var inst_22017 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22004,inst_22016);
var state_22019__$1 = (function (){var statearr_22022 = state_22019;
(statearr_22022[(10)] = inst_22013);

return statearr_22022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22019__$1,inst_22017);
} else {
return null;
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto____0 = (function (){
var statearr_22026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22026[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto__);

(statearr_22026[(1)] = (1));

return statearr_22026;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto____1 = (function (state_22019){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22027){if((e22027 instanceof Object)){
var ex__18822__auto__ = e22027;
var statearr_22028_22030 = state_22019;
(statearr_22028_22030[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22031 = state_22019;
state_22019 = G__22031;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto__ = function(state_22019){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto____1.call(this,state_22019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_22029 = f__18931__auto__.call(null);
(statearr_22029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_22029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__22033 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__22033,(0),null);
var ln = cljs.core.nth.call(null,vec__22033,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__22036 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__22036,(0),null);
var file_line = cljs.core.nth.call(null,vec__22036,(1),null);
var file_column = cljs.core.nth.call(null,vec__22036,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22036,file_name,file_line,file_column){
return (function (p1__22034_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__22034_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__22036,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16763__auto__ = file_line;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
var and__16751__auto__ = cause;
if(cljs.core.truth_(and__16751__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16751__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__22039 = figwheel.client.heads_up.ensure_container.call(null);
var map__22039__$1 = ((((!((map__22039 == null)))?((((map__22039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22039):map__22039);
var content_area_el = cljs.core.get.call(null,map__22039__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_22087){
var state_val_22088 = (state_22087[(1)]);
if((state_val_22088 === (1))){
var inst_22070 = (state_22087[(7)]);
var inst_22070__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22071 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22072 = ["0.0"];
var inst_22073 = cljs.core.PersistentHashMap.fromArrays(inst_22071,inst_22072);
var inst_22074 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22070__$1,inst_22073);
var inst_22075 = cljs.core.async.timeout.call(null,(300));
var state_22087__$1 = (function (){var statearr_22089 = state_22087;
(statearr_22089[(8)] = inst_22074);

(statearr_22089[(7)] = inst_22070__$1);

return statearr_22089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22087__$1,(2),inst_22075);
} else {
if((state_val_22088 === (2))){
var inst_22070 = (state_22087[(7)]);
var inst_22077 = (state_22087[(2)]);
var inst_22078 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22079 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22080 = cljs.core.PersistentHashMap.fromArrays(inst_22078,inst_22079);
var inst_22081 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22070,inst_22080);
var inst_22082 = cljs.core.async.timeout.call(null,(200));
var state_22087__$1 = (function (){var statearr_22090 = state_22087;
(statearr_22090[(9)] = inst_22081);

(statearr_22090[(10)] = inst_22077);

return statearr_22090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22087__$1,(3),inst_22082);
} else {
if((state_val_22088 === (3))){
var inst_22070 = (state_22087[(7)]);
var inst_22084 = (state_22087[(2)]);
var inst_22085 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22070,"");
var state_22087__$1 = (function (){var statearr_22091 = state_22087;
(statearr_22091[(11)] = inst_22084);

return statearr_22091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22087__$1,inst_22085);
} else {
return null;
}
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18819__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18819__auto____0 = (function (){
var statearr_22095 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22095[(0)] = figwheel$client$heads_up$clear_$_state_machine__18819__auto__);

(statearr_22095[(1)] = (1));

return statearr_22095;
});
var figwheel$client$heads_up$clear_$_state_machine__18819__auto____1 = (function (state_22087){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22096){if((e22096 instanceof Object)){
var ex__18822__auto__ = e22096;
var statearr_22097_22099 = state_22087;
(statearr_22097_22099[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22100 = state_22087;
state_22087 = G__22100;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18819__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18819__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18819__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18819__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_22098 = f__18931__auto__.call(null);
(statearr_22098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_22098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_22132){
var state_val_22133 = (state_22132[(1)]);
if((state_val_22133 === (1))){
var inst_22122 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(2),inst_22122);
} else {
if((state_val_22133 === (2))){
var inst_22124 = (state_22132[(2)]);
var inst_22125 = cljs.core.async.timeout.call(null,(400));
var state_22132__$1 = (function (){var statearr_22134 = state_22132;
(statearr_22134[(7)] = inst_22124);

return statearr_22134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(3),inst_22125);
} else {
if((state_val_22133 === (3))){
var inst_22127 = (state_22132[(2)]);
var inst_22128 = figwheel.client.heads_up.clear.call(null);
var state_22132__$1 = (function (){var statearr_22135 = state_22132;
(statearr_22135[(8)] = inst_22127);

return statearr_22135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(4),inst_22128);
} else {
if((state_val_22133 === (4))){
var inst_22130 = (state_22132[(2)]);
var state_22132__$1 = state_22132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22132__$1,inst_22130);
} else {
return null;
}
}
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto____0 = (function (){
var statearr_22139 = [null,null,null,null,null,null,null,null,null];
(statearr_22139[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto__);

(statearr_22139[(1)] = (1));

return statearr_22139;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto____1 = (function (state_22132){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22140){if((e22140 instanceof Object)){
var ex__18822__auto__ = e22140;
var statearr_22141_22143 = state_22132;
(statearr_22141_22143[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22144 = state_22132;
state_22132 = G__22144;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto__ = function(state_22132){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto____1.call(this,state_22132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_22142 = f__18931__auto__.call(null);
(statearr_22142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_22142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map