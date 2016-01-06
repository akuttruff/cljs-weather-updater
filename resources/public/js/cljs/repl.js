// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23685_23699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23686_23700 = null;
var count__23687_23701 = (0);
var i__23688_23702 = (0);
while(true){
if((i__23688_23702 < count__23687_23701)){
var f_23703 = cljs.core._nth.call(null,chunk__23686_23700,i__23688_23702);
cljs.core.println.call(null,"  ",f_23703);

var G__23704 = seq__23685_23699;
var G__23705 = chunk__23686_23700;
var G__23706 = count__23687_23701;
var G__23707 = (i__23688_23702 + (1));
seq__23685_23699 = G__23704;
chunk__23686_23700 = G__23705;
count__23687_23701 = G__23706;
i__23688_23702 = G__23707;
continue;
} else {
var temp__4425__auto___23708 = cljs.core.seq.call(null,seq__23685_23699);
if(temp__4425__auto___23708){
var seq__23685_23709__$1 = temp__4425__auto___23708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23685_23709__$1)){
var c__17566__auto___23710 = cljs.core.chunk_first.call(null,seq__23685_23709__$1);
var G__23711 = cljs.core.chunk_rest.call(null,seq__23685_23709__$1);
var G__23712 = c__17566__auto___23710;
var G__23713 = cljs.core.count.call(null,c__17566__auto___23710);
var G__23714 = (0);
seq__23685_23699 = G__23711;
chunk__23686_23700 = G__23712;
count__23687_23701 = G__23713;
i__23688_23702 = G__23714;
continue;
} else {
var f_23715 = cljs.core.first.call(null,seq__23685_23709__$1);
cljs.core.println.call(null,"  ",f_23715);

var G__23716 = cljs.core.next.call(null,seq__23685_23709__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__23685_23699 = G__23716;
chunk__23686_23700 = G__23717;
count__23687_23701 = G__23718;
i__23688_23702 = G__23719;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23720 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16763__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23720);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23720)))?cljs.core.second.call(null,arglists_23720):arglists_23720));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23690 = null;
var count__23691 = (0);
var i__23692 = (0);
while(true){
if((i__23692 < count__23691)){
var vec__23693 = cljs.core._nth.call(null,chunk__23690,i__23692);
var name = cljs.core.nth.call(null,vec__23693,(0),null);
var map__23694 = cljs.core.nth.call(null,vec__23693,(1),null);
var map__23694__$1 = ((((!((map__23694 == null)))?((((map__23694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23694):map__23694);
var doc = cljs.core.get.call(null,map__23694__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23694__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23721 = seq__23689;
var G__23722 = chunk__23690;
var G__23723 = count__23691;
var G__23724 = (i__23692 + (1));
seq__23689 = G__23721;
chunk__23690 = G__23722;
count__23691 = G__23723;
i__23692 = G__23724;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23689);
if(temp__4425__auto__){
var seq__23689__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23689__$1)){
var c__17566__auto__ = cljs.core.chunk_first.call(null,seq__23689__$1);
var G__23725 = cljs.core.chunk_rest.call(null,seq__23689__$1);
var G__23726 = c__17566__auto__;
var G__23727 = cljs.core.count.call(null,c__17566__auto__);
var G__23728 = (0);
seq__23689 = G__23725;
chunk__23690 = G__23726;
count__23691 = G__23727;
i__23692 = G__23728;
continue;
} else {
var vec__23696 = cljs.core.first.call(null,seq__23689__$1);
var name = cljs.core.nth.call(null,vec__23696,(0),null);
var map__23697 = cljs.core.nth.call(null,vec__23696,(1),null);
var map__23697__$1 = ((((!((map__23697 == null)))?((((map__23697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23697):map__23697);
var doc = cljs.core.get.call(null,map__23697__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23697__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23729 = cljs.core.next.call(null,seq__23689__$1);
var G__23730 = null;
var G__23731 = (0);
var G__23732 = (0);
seq__23689 = G__23729;
chunk__23690 = G__23730;
count__23691 = G__23731;
i__23692 = G__23732;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map