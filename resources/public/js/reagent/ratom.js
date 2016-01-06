// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_22376 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_22376;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
})
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var args22377 = [];
var len__17821__auto___22385 = arguments.length;
var i__17822__auto___22386 = (0);
while(true){
if((i__17822__auto___22386 < len__17821__auto___22385)){
args22377.push((arguments[i__17822__auto___22386]));

var G__22387 = (i__17822__auto___22386 + (1));
i__17822__auto___22386 = G__22387;
continue;
} else {
}
break;
}

var G__22381 = args22377.length;
switch (G__22381) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17840__auto__ = (new cljs.core.IndexedSeq(args22377.slice((1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17840__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__22382){
var map__22383 = p__22382;
var map__22383__$1 = ((((!((map__22383 == null)))?((((map__22383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22383):map__22383);
var meta = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq22378){
var G__22379 = cljs.core.first.call(null,seq22378);
var seq22378__$1 = cljs.core.next.call(null,seq22378);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__22379,seq22378__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__17418__auto__ = (((this$ == null))?null:this$);
var m__17419__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,this$);
} else {
var m__17419__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__17418__auto__ = (((this$ == null))?null:this$);
var m__17419__auto__ = (reagent.ratom.run[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,this$);
} else {
var m__17419__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IComputedImpl = function(){};

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((!((this$ == null))) && (!((this$.reagent$ratom$IComputedImpl$_update_watching$arity$2 == null)))){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__17418__auto__ = (((this$ == null))?null:this$);
var m__17419__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,this$,derefed);
} else {
var m__17419__auto____$1 = (reagent.ratom._update_watching["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,this$,derefed);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((!((k == null))) && (!((k.reagent$ratom$IComputedImpl$_handle_change$arity$4 == null)))){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__17418__auto__ = (((k == null))?null:k);
var m__17419__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,k,sender,oldval,newval);
} else {
var m__17419__auto____$1 = (reagent.ratom._handle_change["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,k,sender,oldval,newval);
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
}
});

reagent.ratom.call_watches = (function reagent$ratom$call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IComputedImpl}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__16751__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__16751__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__16751__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__16763__auto__ = self__.auto_run;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__22389_22401 = cljs.core.seq.call(null,derefed);
var chunk__22390_22402 = null;
var count__22391_22403 = (0);
var i__22392_22404 = (0);
while(true){
if((i__22392_22404 < count__22391_22403)){
var w_22405 = cljs.core._nth.call(null,chunk__22390_22402,i__22392_22404);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_22405)){
} else {
cljs.core.add_watch.call(null,w_22405,this$__$1,reagent.ratom._handle_change);
}

var G__22406 = seq__22389_22401;
var G__22407 = chunk__22390_22402;
var G__22408 = count__22391_22403;
var G__22409 = (i__22392_22404 + (1));
seq__22389_22401 = G__22406;
chunk__22390_22402 = G__22407;
count__22391_22403 = G__22408;
i__22392_22404 = G__22409;
continue;
} else {
var temp__4425__auto___22410 = cljs.core.seq.call(null,seq__22389_22401);
if(temp__4425__auto___22410){
var seq__22389_22411__$1 = temp__4425__auto___22410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22389_22411__$1)){
var c__17566__auto___22412 = cljs.core.chunk_first.call(null,seq__22389_22411__$1);
var G__22413 = cljs.core.chunk_rest.call(null,seq__22389_22411__$1);
var G__22414 = c__17566__auto___22412;
var G__22415 = cljs.core.count.call(null,c__17566__auto___22412);
var G__22416 = (0);
seq__22389_22401 = G__22413;
chunk__22390_22402 = G__22414;
count__22391_22403 = G__22415;
i__22392_22404 = G__22416;
continue;
} else {
var w_22417 = cljs.core.first.call(null,seq__22389_22411__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_22417)){
} else {
cljs.core.add_watch.call(null,w_22417,this$__$1,reagent.ratom._handle_change);
}

var G__22418 = cljs.core.next.call(null,seq__22389_22411__$1);
var G__22419 = null;
var G__22420 = (0);
var G__22421 = (0);
seq__22389_22401 = G__22418;
chunk__22390_22402 = G__22419;
count__22391_22403 = G__22420;
i__22392_22404 = G__22421;
continue;
}
} else {
}
}
break;
}

var seq__22393_22422 = cljs.core.seq.call(null,self__.watching);
var chunk__22394_22423 = null;
var count__22395_22424 = (0);
var i__22396_22425 = (0);
while(true){
if((i__22396_22425 < count__22395_22424)){
var w_22426 = cljs.core._nth.call(null,chunk__22394_22423,i__22396_22425);
if(cljs.core.contains_QMARK_.call(null,derefed,w_22426)){
} else {
cljs.core.remove_watch.call(null,w_22426,this$__$1);
}

var G__22427 = seq__22393_22422;
var G__22428 = chunk__22394_22423;
var G__22429 = count__22395_22424;
var G__22430 = (i__22396_22425 + (1));
seq__22393_22422 = G__22427;
chunk__22394_22423 = G__22428;
count__22395_22424 = G__22429;
i__22396_22425 = G__22430;
continue;
} else {
var temp__4425__auto___22431 = cljs.core.seq.call(null,seq__22393_22422);
if(temp__4425__auto___22431){
var seq__22393_22432__$1 = temp__4425__auto___22431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22393_22432__$1)){
var c__17566__auto___22433 = cljs.core.chunk_first.call(null,seq__22393_22432__$1);
var G__22434 = cljs.core.chunk_rest.call(null,seq__22393_22432__$1);
var G__22435 = c__17566__auto___22433;
var G__22436 = cljs.core.count.call(null,c__17566__auto___22433);
var G__22437 = (0);
seq__22393_22422 = G__22434;
chunk__22394_22423 = G__22435;
count__22395_22424 = G__22436;
i__22396_22425 = G__22437;
continue;
} else {
var w_22438 = cljs.core.first.call(null,seq__22393_22432__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_22438)){
} else {
cljs.core.remove_watch.call(null,w_22438,this$__$1);
}

var G__22439 = cljs.core.next.call(null,seq__22393_22432__$1);
var G__22440 = null;
var G__22441 = (0);
var G__22442 = (0);
seq__22393_22422 = G__22439;
chunk__22394_22423 = G__22440;
count__22395_22424 = G__22441;
i__22396_22425 = G__22442;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__22397_22443 = cljs.core.seq.call(null,self__.watching);
var chunk__22398_22444 = null;
var count__22399_22445 = (0);
var i__22400_22446 = (0);
while(true){
if((i__22400_22446 < count__22399_22445)){
var w_22447 = cljs.core._nth.call(null,chunk__22398_22444,i__22400_22446);
cljs.core.remove_watch.call(null,w_22447,this$__$1);

var G__22448 = seq__22397_22443;
var G__22449 = chunk__22398_22444;
var G__22450 = count__22399_22445;
var G__22451 = (i__22400_22446 + (1));
seq__22397_22443 = G__22448;
chunk__22398_22444 = G__22449;
count__22399_22445 = G__22450;
i__22400_22446 = G__22451;
continue;
} else {
var temp__4425__auto___22452 = cljs.core.seq.call(null,seq__22397_22443);
if(temp__4425__auto___22452){
var seq__22397_22453__$1 = temp__4425__auto___22452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22397_22453__$1)){
var c__17566__auto___22454 = cljs.core.chunk_first.call(null,seq__22397_22453__$1);
var G__22455 = cljs.core.chunk_rest.call(null,seq__22397_22453__$1);
var G__22456 = c__17566__auto___22454;
var G__22457 = cljs.core.count.call(null,c__17566__auto___22454);
var G__22458 = (0);
seq__22397_22443 = G__22455;
chunk__22398_22444 = G__22456;
count__22399_22445 = G__22457;
i__22400_22446 = G__22458;
continue;
} else {
var w_22459 = cljs.core.first.call(null,seq__22397_22453__$1);
cljs.core.remove_watch.call(null,w_22459,this$__$1);

var G__22460 = cljs.core.next.call(null,seq__22397_22453__$1);
var G__22461 = null;
var G__22462 = (0);
var G__22463 = (0);
seq__22397_22443 = G__22460;
chunk__22398_22444 = G__22461;
count__22399_22445 = G__22462;
i__22400_22446 = G__22463;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__16763__auto__ = self__.auto_run;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__22197__auto___22464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(!((console.log == null))){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__22197__auto___22464))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__16763__auto__ = self__.auto_run;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22470 = arguments.length;
var i__17822__auto___22471 = (0);
while(true){
if((i__17822__auto___22471 < len__17821__auto___22470)){
args__17828__auto__.push((arguments[i__17822__auto___22471]));

var G__22472 = (i__17822__auto___22471 + (1));
i__17822__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__22467){
var map__22468 = p__22467;
var map__22468__$1 = ((((!((map__22468 == null)))?((((map__22468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22468):map__22468);
var auto_run = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var derefed = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq22465){
var G__22466 = cljs.core.first.call(null,seq22465);
var seq22465__$1 = cljs.core.next.call(null,seq22465);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__22466,seq22465__$1);
});

//# sourceMappingURL=ratom.js.map