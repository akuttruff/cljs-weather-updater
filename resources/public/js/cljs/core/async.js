// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args18975 = [];
var len__17821__auto___18981 = arguments.length;
var i__17822__auto___18982 = (0);
while(true){
if((i__17822__auto___18982 < len__17821__auto___18981)){
args18975.push((arguments[i__17822__auto___18982]));

var G__18983 = (i__17822__auto___18982 + (1));
i__17822__auto___18982 = G__18983;
continue;
} else {
}
break;
}

var G__18977 = args18975.length;
switch (G__18977) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18975.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18978 = (function (f,blockable,meta18979){
this.f = f;
this.blockable = blockable;
this.meta18979 = meta18979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18980,meta18979__$1){
var self__ = this;
var _18980__$1 = this;
return (new cljs.core.async.t_cljs$core$async18978(self__.f,self__.blockable,meta18979__$1));
});

cljs.core.async.t_cljs$core$async18978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18980){
var self__ = this;
var _18980__$1 = this;
return self__.meta18979;
});

cljs.core.async.t_cljs$core$async18978.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18979","meta18979",1108931746,null)], null);
});

cljs.core.async.t_cljs$core$async18978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18978";

cljs.core.async.t_cljs$core$async18978.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async18978");
});

cljs.core.async.__GT_t_cljs$core$async18978 = (function cljs$core$async$__GT_t_cljs$core$async18978(f__$1,blockable__$1,meta18979){
return (new cljs.core.async.t_cljs$core$async18978(f__$1,blockable__$1,meta18979));
});

}

return (new cljs.core.async.t_cljs$core$async18978(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args18987 = [];
var len__17821__auto___18990 = arguments.length;
var i__17822__auto___18991 = (0);
while(true){
if((i__17822__auto___18991 < len__17821__auto___18990)){
args18987.push((arguments[i__17822__auto___18991]));

var G__18992 = (i__17822__auto___18991 + (1));
i__17822__auto___18991 = G__18992;
continue;
} else {
}
break;
}

var G__18989 = args18987.length;
switch (G__18989) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18987.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args18994 = [];
var len__17821__auto___18997 = arguments.length;
var i__17822__auto___18998 = (0);
while(true){
if((i__17822__auto___18998 < len__17821__auto___18997)){
args18994.push((arguments[i__17822__auto___18998]));

var G__18999 = (i__17822__auto___18998 + (1));
i__17822__auto___18998 = G__18999;
continue;
} else {
}
break;
}

var G__18996 = args18994.length;
switch (G__18996) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18994.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19001 = [];
var len__17821__auto___19004 = arguments.length;
var i__17822__auto___19005 = (0);
while(true){
if((i__17822__auto___19005 < len__17821__auto___19004)){
args19001.push((arguments[i__17822__auto___19005]));

var G__19006 = (i__17822__auto___19005 + (1));
i__17822__auto___19005 = G__19006;
continue;
} else {
}
break;
}

var G__19003 = args19001.length;
switch (G__19003) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19001.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19008 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19008);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19008,ret){
return (function (){
return fn1.call(null,val_19008);
});})(val_19008,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19009 = [];
var len__17821__auto___19012 = arguments.length;
var i__17822__auto___19013 = (0);
while(true){
if((i__17822__auto___19013 < len__17821__auto___19012)){
args19009.push((arguments[i__17822__auto___19013]));

var G__19014 = (i__17822__auto___19013 + (1));
i__17822__auto___19013 = G__19014;
continue;
} else {
}
break;
}

var G__19011 = args19009.length;
switch (G__19011) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19009.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17666__auto___19016 = n;
var x_19017 = (0);
while(true){
if((x_19017 < n__17666__auto___19016)){
(a[x_19017] = (0));

var G__19018 = (x_19017 + (1));
x_19017 = G__19018;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19019 = (i + (1));
i = G__19019;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19023 = (function (alt_flag,flag,meta19024){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19024 = meta19024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19025,meta19024__$1){
var self__ = this;
var _19025__$1 = this;
return (new cljs.core.async.t_cljs$core$async19023(self__.alt_flag,self__.flag,meta19024__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19025){
var self__ = this;
var _19025__$1 = this;
return self__.meta19024;
});})(flag))
;

cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19023.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19024","meta19024",-2038648076,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19023";

cljs.core.async.t_cljs$core$async19023.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async19023");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19023 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19023(alt_flag__$1,flag__$1,meta19024){
return (new cljs.core.async.t_cljs$core$async19023(alt_flag__$1,flag__$1,meta19024));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19023(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19029 = (function (alt_handler,flag,cb,meta19030){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19030 = meta19030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19031,meta19030__$1){
var self__ = this;
var _19031__$1 = this;
return (new cljs.core.async.t_cljs$core$async19029(self__.alt_handler,self__.flag,self__.cb,meta19030__$1));
});

cljs.core.async.t_cljs$core$async19029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19031){
var self__ = this;
var _19031__$1 = this;
return self__.meta19030;
});

cljs.core.async.t_cljs$core$async19029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19030","meta19030",-1315225365,null)], null);
});

cljs.core.async.t_cljs$core$async19029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19029";

cljs.core.async.t_cljs$core$async19029.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async19029");
});

cljs.core.async.__GT_t_cljs$core$async19029 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19029(alt_handler__$1,flag__$1,cb__$1,meta19030){
return (new cljs.core.async.t_cljs$core$async19029(alt_handler__$1,flag__$1,cb__$1,meta19030));
});

}

return (new cljs.core.async.t_cljs$core$async19029(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19032_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19033_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16763__auto__ = wport;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19034 = (i + (1));
i = G__19034;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16763__auto__ = ret;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16751__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16751__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16751__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17828__auto__ = [];
var len__17821__auto___19040 = arguments.length;
var i__17822__auto___19041 = (0);
while(true){
if((i__17822__auto___19041 < len__17821__auto___19040)){
args__17828__auto__.push((arguments[i__17822__auto___19041]));

var G__19042 = (i__17822__auto___19041 + (1));
i__17822__auto___19041 = G__19042;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19037){
var map__19038 = p__19037;
var map__19038__$1 = ((((!((map__19038 == null)))?((((map__19038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19038):map__19038);
var opts = map__19038__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19035){
var G__19036 = cljs.core.first.call(null,seq19035);
var seq19035__$1 = cljs.core.next.call(null,seq19035);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19036,seq19035__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19043 = [];
var len__17821__auto___19093 = arguments.length;
var i__17822__auto___19094 = (0);
while(true){
if((i__17822__auto___19094 < len__17821__auto___19093)){
args19043.push((arguments[i__17822__auto___19094]));

var G__19095 = (i__17822__auto___19094 + (1));
i__17822__auto___19094 = G__19095;
continue;
} else {
}
break;
}

var G__19045 = args19043.length;
switch (G__19045) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19043.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18930__auto___19097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___19097){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___19097){
return (function (state_19069){
var state_val_19070 = (state_19069[(1)]);
if((state_val_19070 === (7))){
var inst_19065 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19071_19098 = state_19069__$1;
(statearr_19071_19098[(2)] = inst_19065);

(statearr_19071_19098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (1))){
var state_19069__$1 = state_19069;
var statearr_19072_19099 = state_19069__$1;
(statearr_19072_19099[(2)] = null);

(statearr_19072_19099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (4))){
var inst_19048 = (state_19069[(7)]);
var inst_19048__$1 = (state_19069[(2)]);
var inst_19049 = (inst_19048__$1 == null);
var state_19069__$1 = (function (){var statearr_19073 = state_19069;
(statearr_19073[(7)] = inst_19048__$1);

return statearr_19073;
})();
if(cljs.core.truth_(inst_19049)){
var statearr_19074_19100 = state_19069__$1;
(statearr_19074_19100[(1)] = (5));

} else {
var statearr_19075_19101 = state_19069__$1;
(statearr_19075_19101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (13))){
var state_19069__$1 = state_19069;
var statearr_19076_19102 = state_19069__$1;
(statearr_19076_19102[(2)] = null);

(statearr_19076_19102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (6))){
var inst_19048 = (state_19069[(7)]);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19069__$1,(11),to,inst_19048);
} else {
if((state_val_19070 === (3))){
var inst_19067 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19069__$1,inst_19067);
} else {
if((state_val_19070 === (12))){
var state_19069__$1 = state_19069;
var statearr_19077_19103 = state_19069__$1;
(statearr_19077_19103[(2)] = null);

(statearr_19077_19103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (2))){
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19069__$1,(4),from);
} else {
if((state_val_19070 === (11))){
var inst_19058 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19058)){
var statearr_19078_19104 = state_19069__$1;
(statearr_19078_19104[(1)] = (12));

} else {
var statearr_19079_19105 = state_19069__$1;
(statearr_19079_19105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (9))){
var state_19069__$1 = state_19069;
var statearr_19080_19106 = state_19069__$1;
(statearr_19080_19106[(2)] = null);

(statearr_19080_19106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (5))){
var state_19069__$1 = state_19069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19081_19107 = state_19069__$1;
(statearr_19081_19107[(1)] = (8));

} else {
var statearr_19082_19108 = state_19069__$1;
(statearr_19082_19108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (14))){
var inst_19063 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19083_19109 = state_19069__$1;
(statearr_19083_19109[(2)] = inst_19063);

(statearr_19083_19109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (10))){
var inst_19055 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19084_19110 = state_19069__$1;
(statearr_19084_19110[(2)] = inst_19055);

(statearr_19084_19110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19070 === (8))){
var inst_19052 = cljs.core.async.close_BANG_.call(null,to);
var state_19069__$1 = state_19069;
var statearr_19085_19111 = state_19069__$1;
(statearr_19085_19111[(2)] = inst_19052);

(statearr_19085_19111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___19097))
;
return ((function (switch__18818__auto__,c__18930__auto___19097){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_19089 = [null,null,null,null,null,null,null,null];
(statearr_19089[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_19089[(1)] = (1));

return statearr_19089;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_19069){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19090){if((e19090 instanceof Object)){
var ex__18822__auto__ = e19090;
var statearr_19091_19112 = state_19069;
(statearr_19091_19112[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19113 = state_19069;
state_19069 = G__19113;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_19069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_19069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___19097))
})();
var state__18932__auto__ = (function (){var statearr_19092 = f__18931__auto__.call(null);
(statearr_19092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___19097);

return statearr_19092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___19097))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19297){
var vec__19298 = p__19297;
var v = cljs.core.nth.call(null,vec__19298,(0),null);
var p = cljs.core.nth.call(null,vec__19298,(1),null);
var job = vec__19298;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18930__auto___19480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___19480,res,vec__19298,v,p,job,jobs,results){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___19480,res,vec__19298,v,p,job,jobs,results){
return (function (state_19303){
var state_val_19304 = (state_19303[(1)]);
if((state_val_19304 === (1))){
var state_19303__$1 = state_19303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19303__$1,(2),res,v);
} else {
if((state_val_19304 === (2))){
var inst_19300 = (state_19303[(2)]);
var inst_19301 = cljs.core.async.close_BANG_.call(null,res);
var state_19303__$1 = (function (){var statearr_19305 = state_19303;
(statearr_19305[(7)] = inst_19300);

return statearr_19305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19303__$1,inst_19301);
} else {
return null;
}
}
});})(c__18930__auto___19480,res,vec__19298,v,p,job,jobs,results))
;
return ((function (switch__18818__auto__,c__18930__auto___19480,res,vec__19298,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_19309 = [null,null,null,null,null,null,null,null];
(statearr_19309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_19309[(1)] = (1));

return statearr_19309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_19303){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19310){if((e19310 instanceof Object)){
var ex__18822__auto__ = e19310;
var statearr_19311_19481 = state_19303;
(statearr_19311_19481[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19482 = state_19303;
state_19303 = G__19482;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_19303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_19303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___19480,res,vec__19298,v,p,job,jobs,results))
})();
var state__18932__auto__ = (function (){var statearr_19312 = f__18931__auto__.call(null);
(statearr_19312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___19480);

return statearr_19312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___19480,res,vec__19298,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19313){
var vec__19314 = p__19313;
var v = cljs.core.nth.call(null,vec__19314,(0),null);
var p = cljs.core.nth.call(null,vec__19314,(1),null);
var job = vec__19314;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17666__auto___19483 = n;
var __19484 = (0);
while(true){
if((__19484 < n__17666__auto___19483)){
var G__19315_19485 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19315_19485) {
case "compute":
var c__18930__auto___19487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19484,c__18930__auto___19487,G__19315_19485,n__17666__auto___19483,jobs,results,process,async){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (__19484,c__18930__auto___19487,G__19315_19485,n__17666__auto___19483,jobs,results,process,async){
return (function (state_19328){
var state_val_19329 = (state_19328[(1)]);
if((state_val_19329 === (1))){
var state_19328__$1 = state_19328;
var statearr_19330_19488 = state_19328__$1;
(statearr_19330_19488[(2)] = null);

(statearr_19330_19488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19329 === (2))){
var state_19328__$1 = state_19328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19328__$1,(4),jobs);
} else {
if((state_val_19329 === (3))){
var inst_19326 = (state_19328[(2)]);
var state_19328__$1 = state_19328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19328__$1,inst_19326);
} else {
if((state_val_19329 === (4))){
var inst_19318 = (state_19328[(2)]);
var inst_19319 = process.call(null,inst_19318);
var state_19328__$1 = state_19328;
if(cljs.core.truth_(inst_19319)){
var statearr_19331_19489 = state_19328__$1;
(statearr_19331_19489[(1)] = (5));

} else {
var statearr_19332_19490 = state_19328__$1;
(statearr_19332_19490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19329 === (5))){
var state_19328__$1 = state_19328;
var statearr_19333_19491 = state_19328__$1;
(statearr_19333_19491[(2)] = null);

(statearr_19333_19491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19329 === (6))){
var state_19328__$1 = state_19328;
var statearr_19334_19492 = state_19328__$1;
(statearr_19334_19492[(2)] = null);

(statearr_19334_19492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19329 === (7))){
var inst_19324 = (state_19328[(2)]);
var state_19328__$1 = state_19328;
var statearr_19335_19493 = state_19328__$1;
(statearr_19335_19493[(2)] = inst_19324);

(statearr_19335_19493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19484,c__18930__auto___19487,G__19315_19485,n__17666__auto___19483,jobs,results,process,async))
;
return ((function (__19484,switch__18818__auto__,c__18930__auto___19487,G__19315_19485,n__17666__auto___19483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_19339 = [null,null,null,null,null,null,null];
(statearr_19339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_19339[(1)] = (1));

return statearr_19339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_19328){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19340){if((e19340 instanceof Object)){
var ex__18822__auto__ = e19340;
var statearr_19341_19494 = state_19328;
(statearr_19341_19494[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19495 = state_19328;
state_19328 = G__19495;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_19328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_19328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(__19484,switch__18818__auto__,c__18930__auto___19487,G__19315_19485,n__17666__auto___19483,jobs,results,process,async))
})();
var state__18932__auto__ = (function (){var statearr_19342 = f__18931__auto__.call(null);
(statearr_19342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___19487);

return statearr_19342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(__19484,c__18930__auto___19487,G__19315_19485,n__17666__auto___19483,jobs,results,process,async))
);


break;
case "async":
var c__18930__auto___19496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19484,c__18930__auto___19496,G__19315_19485,n__17666__auto___19483,jobs,results,process,async){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (__19484,c__18930__auto___19496,G__19315_19485,n__17666__auto___19483,jobs,results,process,async){
return (function (state_19355){
var state_val_19356 = (state_19355[(1)]);
if((state_val_19356 === (1))){
var state_19355__$1 = state_19355;
var statearr_19357_19497 = state_19355__$1;
(statearr_19357_19497[(2)] = null);

(statearr_19357_19497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (2))){
var state_19355__$1 = state_19355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19355__$1,(4),jobs);
} else {
if((state_val_19356 === (3))){
var inst_19353 = (state_19355[(2)]);
var state_19355__$1 = state_19355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19355__$1,inst_19353);
} else {
if((state_val_19356 === (4))){
var inst_19345 = (state_19355[(2)]);
var inst_19346 = async.call(null,inst_19345);
var state_19355__$1 = state_19355;
if(cljs.core.truth_(inst_19346)){
var statearr_19358_19498 = state_19355__$1;
(statearr_19358_19498[(1)] = (5));

} else {
var statearr_19359_19499 = state_19355__$1;
(statearr_19359_19499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (5))){
var state_19355__$1 = state_19355;
var statearr_19360_19500 = state_19355__$1;
(statearr_19360_19500[(2)] = null);

(statearr_19360_19500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (6))){
var state_19355__$1 = state_19355;
var statearr_19361_19501 = state_19355__$1;
(statearr_19361_19501[(2)] = null);

(statearr_19361_19501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (7))){
var inst_19351 = (state_19355[(2)]);
var state_19355__$1 = state_19355;
var statearr_19362_19502 = state_19355__$1;
(statearr_19362_19502[(2)] = inst_19351);

(statearr_19362_19502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19484,c__18930__auto___19496,G__19315_19485,n__17666__auto___19483,jobs,results,process,async))
;
return ((function (__19484,switch__18818__auto__,c__18930__auto___19496,G__19315_19485,n__17666__auto___19483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_19366 = [null,null,null,null,null,null,null];
(statearr_19366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_19366[(1)] = (1));

return statearr_19366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_19355){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19367){if((e19367 instanceof Object)){
var ex__18822__auto__ = e19367;
var statearr_19368_19503 = state_19355;
(statearr_19368_19503[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19504 = state_19355;
state_19355 = G__19504;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_19355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_19355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(__19484,switch__18818__auto__,c__18930__auto___19496,G__19315_19485,n__17666__auto___19483,jobs,results,process,async))
})();
var state__18932__auto__ = (function (){var statearr_19369 = f__18931__auto__.call(null);
(statearr_19369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___19496);

return statearr_19369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(__19484,c__18930__auto___19496,G__19315_19485,n__17666__auto___19483,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19505 = (__19484 + (1));
__19484 = G__19505;
continue;
} else {
}
break;
}

var c__18930__auto___19506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___19506,jobs,results,process,async){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___19506,jobs,results,process,async){
return (function (state_19391){
var state_val_19392 = (state_19391[(1)]);
if((state_val_19392 === (1))){
var state_19391__$1 = state_19391;
var statearr_19393_19507 = state_19391__$1;
(statearr_19393_19507[(2)] = null);

(statearr_19393_19507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (2))){
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19391__$1,(4),from);
} else {
if((state_val_19392 === (3))){
var inst_19389 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19391__$1,inst_19389);
} else {
if((state_val_19392 === (4))){
var inst_19372 = (state_19391[(7)]);
var inst_19372__$1 = (state_19391[(2)]);
var inst_19373 = (inst_19372__$1 == null);
var state_19391__$1 = (function (){var statearr_19394 = state_19391;
(statearr_19394[(7)] = inst_19372__$1);

return statearr_19394;
})();
if(cljs.core.truth_(inst_19373)){
var statearr_19395_19508 = state_19391__$1;
(statearr_19395_19508[(1)] = (5));

} else {
var statearr_19396_19509 = state_19391__$1;
(statearr_19396_19509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (5))){
var inst_19375 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19391__$1 = state_19391;
var statearr_19397_19510 = state_19391__$1;
(statearr_19397_19510[(2)] = inst_19375);

(statearr_19397_19510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (6))){
var inst_19372 = (state_19391[(7)]);
var inst_19377 = (state_19391[(8)]);
var inst_19377__$1 = cljs.core.async.chan.call(null,(1));
var inst_19378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19379 = [inst_19372,inst_19377__$1];
var inst_19380 = (new cljs.core.PersistentVector(null,2,(5),inst_19378,inst_19379,null));
var state_19391__$1 = (function (){var statearr_19398 = state_19391;
(statearr_19398[(8)] = inst_19377__$1);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19391__$1,(8),jobs,inst_19380);
} else {
if((state_val_19392 === (7))){
var inst_19387 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
var statearr_19399_19511 = state_19391__$1;
(statearr_19399_19511[(2)] = inst_19387);

(statearr_19399_19511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (8))){
var inst_19377 = (state_19391[(8)]);
var inst_19382 = (state_19391[(2)]);
var state_19391__$1 = (function (){var statearr_19400 = state_19391;
(statearr_19400[(9)] = inst_19382);

return statearr_19400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19391__$1,(9),results,inst_19377);
} else {
if((state_val_19392 === (9))){
var inst_19384 = (state_19391[(2)]);
var state_19391__$1 = (function (){var statearr_19401 = state_19391;
(statearr_19401[(10)] = inst_19384);

return statearr_19401;
})();
var statearr_19402_19512 = state_19391__$1;
(statearr_19402_19512[(2)] = null);

(statearr_19402_19512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___19506,jobs,results,process,async))
;
return ((function (switch__18818__auto__,c__18930__auto___19506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_19406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_19406[(1)] = (1));

return statearr_19406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_19391){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19407){if((e19407 instanceof Object)){
var ex__18822__auto__ = e19407;
var statearr_19408_19513 = state_19391;
(statearr_19408_19513[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19514 = state_19391;
state_19391 = G__19514;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_19391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_19391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___19506,jobs,results,process,async))
})();
var state__18932__auto__ = (function (){var statearr_19409 = f__18931__auto__.call(null);
(statearr_19409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___19506);

return statearr_19409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___19506,jobs,results,process,async))
);


var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__,jobs,results,process,async){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__,jobs,results,process,async){
return (function (state_19447){
var state_val_19448 = (state_19447[(1)]);
if((state_val_19448 === (7))){
var inst_19443 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19449_19515 = state_19447__$1;
(statearr_19449_19515[(2)] = inst_19443);

(statearr_19449_19515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (20))){
var state_19447__$1 = state_19447;
var statearr_19450_19516 = state_19447__$1;
(statearr_19450_19516[(2)] = null);

(statearr_19450_19516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (1))){
var state_19447__$1 = state_19447;
var statearr_19451_19517 = state_19447__$1;
(statearr_19451_19517[(2)] = null);

(statearr_19451_19517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (4))){
var inst_19412 = (state_19447[(7)]);
var inst_19412__$1 = (state_19447[(2)]);
var inst_19413 = (inst_19412__$1 == null);
var state_19447__$1 = (function (){var statearr_19452 = state_19447;
(statearr_19452[(7)] = inst_19412__$1);

return statearr_19452;
})();
if(cljs.core.truth_(inst_19413)){
var statearr_19453_19518 = state_19447__$1;
(statearr_19453_19518[(1)] = (5));

} else {
var statearr_19454_19519 = state_19447__$1;
(statearr_19454_19519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (15))){
var inst_19425 = (state_19447[(8)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19447__$1,(18),to,inst_19425);
} else {
if((state_val_19448 === (21))){
var inst_19438 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19455_19520 = state_19447__$1;
(statearr_19455_19520[(2)] = inst_19438);

(statearr_19455_19520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (13))){
var inst_19440 = (state_19447[(2)]);
var state_19447__$1 = (function (){var statearr_19456 = state_19447;
(statearr_19456[(9)] = inst_19440);

return statearr_19456;
})();
var statearr_19457_19521 = state_19447__$1;
(statearr_19457_19521[(2)] = null);

(statearr_19457_19521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (6))){
var inst_19412 = (state_19447[(7)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19447__$1,(11),inst_19412);
} else {
if((state_val_19448 === (17))){
var inst_19433 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
if(cljs.core.truth_(inst_19433)){
var statearr_19458_19522 = state_19447__$1;
(statearr_19458_19522[(1)] = (19));

} else {
var statearr_19459_19523 = state_19447__$1;
(statearr_19459_19523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (3))){
var inst_19445 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19447__$1,inst_19445);
} else {
if((state_val_19448 === (12))){
var inst_19422 = (state_19447[(10)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19447__$1,(14),inst_19422);
} else {
if((state_val_19448 === (2))){
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19447__$1,(4),results);
} else {
if((state_val_19448 === (19))){
var state_19447__$1 = state_19447;
var statearr_19460_19524 = state_19447__$1;
(statearr_19460_19524[(2)] = null);

(statearr_19460_19524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (11))){
var inst_19422 = (state_19447[(2)]);
var state_19447__$1 = (function (){var statearr_19461 = state_19447;
(statearr_19461[(10)] = inst_19422);

return statearr_19461;
})();
var statearr_19462_19525 = state_19447__$1;
(statearr_19462_19525[(2)] = null);

(statearr_19462_19525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (9))){
var state_19447__$1 = state_19447;
var statearr_19463_19526 = state_19447__$1;
(statearr_19463_19526[(2)] = null);

(statearr_19463_19526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (5))){
var state_19447__$1 = state_19447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19464_19527 = state_19447__$1;
(statearr_19464_19527[(1)] = (8));

} else {
var statearr_19465_19528 = state_19447__$1;
(statearr_19465_19528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (14))){
var inst_19425 = (state_19447[(8)]);
var inst_19427 = (state_19447[(11)]);
var inst_19425__$1 = (state_19447[(2)]);
var inst_19426 = (inst_19425__$1 == null);
var inst_19427__$1 = cljs.core.not.call(null,inst_19426);
var state_19447__$1 = (function (){var statearr_19466 = state_19447;
(statearr_19466[(8)] = inst_19425__$1);

(statearr_19466[(11)] = inst_19427__$1);

return statearr_19466;
})();
if(inst_19427__$1){
var statearr_19467_19529 = state_19447__$1;
(statearr_19467_19529[(1)] = (15));

} else {
var statearr_19468_19530 = state_19447__$1;
(statearr_19468_19530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (16))){
var inst_19427 = (state_19447[(11)]);
var state_19447__$1 = state_19447;
var statearr_19469_19531 = state_19447__$1;
(statearr_19469_19531[(2)] = inst_19427);

(statearr_19469_19531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (10))){
var inst_19419 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19470_19532 = state_19447__$1;
(statearr_19470_19532[(2)] = inst_19419);

(statearr_19470_19532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (18))){
var inst_19430 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19471_19533 = state_19447__$1;
(statearr_19471_19533[(2)] = inst_19430);

(statearr_19471_19533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (8))){
var inst_19416 = cljs.core.async.close_BANG_.call(null,to);
var state_19447__$1 = state_19447;
var statearr_19472_19534 = state_19447__$1;
(statearr_19472_19534[(2)] = inst_19416);

(statearr_19472_19534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto__,jobs,results,process,async))
;
return ((function (switch__18818__auto__,c__18930__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_19476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_19476[(1)] = (1));

return statearr_19476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_19447){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19477){if((e19477 instanceof Object)){
var ex__18822__auto__ = e19477;
var statearr_19478_19535 = state_19447;
(statearr_19478_19535[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19536 = state_19447;
state_19447 = G__19536;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_19447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_19447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__,jobs,results,process,async))
})();
var state__18932__auto__ = (function (){var statearr_19479 = f__18931__auto__.call(null);
(statearr_19479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_19479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__,jobs,results,process,async))
);

return c__18930__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19537 = [];
var len__17821__auto___19540 = arguments.length;
var i__17822__auto___19541 = (0);
while(true){
if((i__17822__auto___19541 < len__17821__auto___19540)){
args19537.push((arguments[i__17822__auto___19541]));

var G__19542 = (i__17822__auto___19541 + (1));
i__17822__auto___19541 = G__19542;
continue;
} else {
}
break;
}

var G__19539 = args19537.length;
switch (G__19539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19537.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19544 = [];
var len__17821__auto___19547 = arguments.length;
var i__17822__auto___19548 = (0);
while(true){
if((i__17822__auto___19548 < len__17821__auto___19547)){
args19544.push((arguments[i__17822__auto___19548]));

var G__19549 = (i__17822__auto___19548 + (1));
i__17822__auto___19548 = G__19549;
continue;
} else {
}
break;
}

var G__19546 = args19544.length;
switch (G__19546) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19544.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19551 = [];
var len__17821__auto___19604 = arguments.length;
var i__17822__auto___19605 = (0);
while(true){
if((i__17822__auto___19605 < len__17821__auto___19604)){
args19551.push((arguments[i__17822__auto___19605]));

var G__19606 = (i__17822__auto___19605 + (1));
i__17822__auto___19605 = G__19606;
continue;
} else {
}
break;
}

var G__19553 = args19551.length;
switch (G__19553) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19551.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18930__auto___19608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___19608,tc,fc){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___19608,tc,fc){
return (function (state_19579){
var state_val_19580 = (state_19579[(1)]);
if((state_val_19580 === (7))){
var inst_19575 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
var statearr_19581_19609 = state_19579__$1;
(statearr_19581_19609[(2)] = inst_19575);

(statearr_19581_19609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (1))){
var state_19579__$1 = state_19579;
var statearr_19582_19610 = state_19579__$1;
(statearr_19582_19610[(2)] = null);

(statearr_19582_19610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (4))){
var inst_19556 = (state_19579[(7)]);
var inst_19556__$1 = (state_19579[(2)]);
var inst_19557 = (inst_19556__$1 == null);
var state_19579__$1 = (function (){var statearr_19583 = state_19579;
(statearr_19583[(7)] = inst_19556__$1);

return statearr_19583;
})();
if(cljs.core.truth_(inst_19557)){
var statearr_19584_19611 = state_19579__$1;
(statearr_19584_19611[(1)] = (5));

} else {
var statearr_19585_19612 = state_19579__$1;
(statearr_19585_19612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (13))){
var state_19579__$1 = state_19579;
var statearr_19586_19613 = state_19579__$1;
(statearr_19586_19613[(2)] = null);

(statearr_19586_19613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (6))){
var inst_19556 = (state_19579[(7)]);
var inst_19562 = p.call(null,inst_19556);
var state_19579__$1 = state_19579;
if(cljs.core.truth_(inst_19562)){
var statearr_19587_19614 = state_19579__$1;
(statearr_19587_19614[(1)] = (9));

} else {
var statearr_19588_19615 = state_19579__$1;
(statearr_19588_19615[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (3))){
var inst_19577 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19579__$1,inst_19577);
} else {
if((state_val_19580 === (12))){
var state_19579__$1 = state_19579;
var statearr_19589_19616 = state_19579__$1;
(statearr_19589_19616[(2)] = null);

(statearr_19589_19616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (2))){
var state_19579__$1 = state_19579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19579__$1,(4),ch);
} else {
if((state_val_19580 === (11))){
var inst_19556 = (state_19579[(7)]);
var inst_19566 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19579__$1,(8),inst_19566,inst_19556);
} else {
if((state_val_19580 === (9))){
var state_19579__$1 = state_19579;
var statearr_19590_19617 = state_19579__$1;
(statearr_19590_19617[(2)] = tc);

(statearr_19590_19617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (5))){
var inst_19559 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19560 = cljs.core.async.close_BANG_.call(null,fc);
var state_19579__$1 = (function (){var statearr_19591 = state_19579;
(statearr_19591[(8)] = inst_19559);

return statearr_19591;
})();
var statearr_19592_19618 = state_19579__$1;
(statearr_19592_19618[(2)] = inst_19560);

(statearr_19592_19618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (14))){
var inst_19573 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
var statearr_19593_19619 = state_19579__$1;
(statearr_19593_19619[(2)] = inst_19573);

(statearr_19593_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (10))){
var state_19579__$1 = state_19579;
var statearr_19594_19620 = state_19579__$1;
(statearr_19594_19620[(2)] = fc);

(statearr_19594_19620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19580 === (8))){
var inst_19568 = (state_19579[(2)]);
var state_19579__$1 = state_19579;
if(cljs.core.truth_(inst_19568)){
var statearr_19595_19621 = state_19579__$1;
(statearr_19595_19621[(1)] = (12));

} else {
var statearr_19596_19622 = state_19579__$1;
(statearr_19596_19622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___19608,tc,fc))
;
return ((function (switch__18818__auto__,c__18930__auto___19608,tc,fc){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_19600 = [null,null,null,null,null,null,null,null,null];
(statearr_19600[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_19600[(1)] = (1));

return statearr_19600;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_19579){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19601){if((e19601 instanceof Object)){
var ex__18822__auto__ = e19601;
var statearr_19602_19623 = state_19579;
(statearr_19602_19623[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19624 = state_19579;
state_19579 = G__19624;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_19579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_19579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___19608,tc,fc))
})();
var state__18932__auto__ = (function (){var statearr_19603 = f__18931__auto__.call(null);
(statearr_19603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___19608);

return statearr_19603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___19608,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_19688){
var state_val_19689 = (state_19688[(1)]);
if((state_val_19689 === (7))){
var inst_19684 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
var statearr_19690_19711 = state_19688__$1;
(statearr_19690_19711[(2)] = inst_19684);

(statearr_19690_19711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (1))){
var inst_19668 = init;
var state_19688__$1 = (function (){var statearr_19691 = state_19688;
(statearr_19691[(7)] = inst_19668);

return statearr_19691;
})();
var statearr_19692_19712 = state_19688__$1;
(statearr_19692_19712[(2)] = null);

(statearr_19692_19712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (4))){
var inst_19671 = (state_19688[(8)]);
var inst_19671__$1 = (state_19688[(2)]);
var inst_19672 = (inst_19671__$1 == null);
var state_19688__$1 = (function (){var statearr_19693 = state_19688;
(statearr_19693[(8)] = inst_19671__$1);

return statearr_19693;
})();
if(cljs.core.truth_(inst_19672)){
var statearr_19694_19713 = state_19688__$1;
(statearr_19694_19713[(1)] = (5));

} else {
var statearr_19695_19714 = state_19688__$1;
(statearr_19695_19714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (6))){
var inst_19668 = (state_19688[(7)]);
var inst_19675 = (state_19688[(9)]);
var inst_19671 = (state_19688[(8)]);
var inst_19675__$1 = f.call(null,inst_19668,inst_19671);
var inst_19676 = cljs.core.reduced_QMARK_.call(null,inst_19675__$1);
var state_19688__$1 = (function (){var statearr_19696 = state_19688;
(statearr_19696[(9)] = inst_19675__$1);

return statearr_19696;
})();
if(inst_19676){
var statearr_19697_19715 = state_19688__$1;
(statearr_19697_19715[(1)] = (8));

} else {
var statearr_19698_19716 = state_19688__$1;
(statearr_19698_19716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (3))){
var inst_19686 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19688__$1,inst_19686);
} else {
if((state_val_19689 === (2))){
var state_19688__$1 = state_19688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19688__$1,(4),ch);
} else {
if((state_val_19689 === (9))){
var inst_19675 = (state_19688[(9)]);
var inst_19668 = inst_19675;
var state_19688__$1 = (function (){var statearr_19699 = state_19688;
(statearr_19699[(7)] = inst_19668);

return statearr_19699;
})();
var statearr_19700_19717 = state_19688__$1;
(statearr_19700_19717[(2)] = null);

(statearr_19700_19717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (5))){
var inst_19668 = (state_19688[(7)]);
var state_19688__$1 = state_19688;
var statearr_19701_19718 = state_19688__$1;
(statearr_19701_19718[(2)] = inst_19668);

(statearr_19701_19718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (10))){
var inst_19682 = (state_19688[(2)]);
var state_19688__$1 = state_19688;
var statearr_19702_19719 = state_19688__$1;
(statearr_19702_19719[(2)] = inst_19682);

(statearr_19702_19719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19689 === (8))){
var inst_19675 = (state_19688[(9)]);
var inst_19678 = cljs.core.deref.call(null,inst_19675);
var state_19688__$1 = state_19688;
var statearr_19703_19720 = state_19688__$1;
(statearr_19703_19720[(2)] = inst_19678);

(statearr_19703_19720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18819__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18819__auto____0 = (function (){
var statearr_19707 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19707[(0)] = cljs$core$async$reduce_$_state_machine__18819__auto__);

(statearr_19707[(1)] = (1));

return statearr_19707;
});
var cljs$core$async$reduce_$_state_machine__18819__auto____1 = (function (state_19688){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19708){if((e19708 instanceof Object)){
var ex__18822__auto__ = e19708;
var statearr_19709_19721 = state_19688;
(statearr_19709_19721[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19722 = state_19688;
state_19688 = G__19722;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18819__auto__ = function(state_19688){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18819__auto____1.call(this,state_19688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18819__auto____0;
cljs$core$async$reduce_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18819__auto____1;
return cljs$core$async$reduce_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_19710 = f__18931__auto__.call(null);
(statearr_19710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_19710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19723 = [];
var len__17821__auto___19775 = arguments.length;
var i__17822__auto___19776 = (0);
while(true){
if((i__17822__auto___19776 < len__17821__auto___19775)){
args19723.push((arguments[i__17822__auto___19776]));

var G__19777 = (i__17822__auto___19776 + (1));
i__17822__auto___19776 = G__19777;
continue;
} else {
}
break;
}

var G__19725 = args19723.length;
switch (G__19725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19723.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_19750){
var state_val_19751 = (state_19750[(1)]);
if((state_val_19751 === (7))){
var inst_19732 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
var statearr_19752_19779 = state_19750__$1;
(statearr_19752_19779[(2)] = inst_19732);

(statearr_19752_19779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (1))){
var inst_19726 = cljs.core.seq.call(null,coll);
var inst_19727 = inst_19726;
var state_19750__$1 = (function (){var statearr_19753 = state_19750;
(statearr_19753[(7)] = inst_19727);

return statearr_19753;
})();
var statearr_19754_19780 = state_19750__$1;
(statearr_19754_19780[(2)] = null);

(statearr_19754_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (4))){
var inst_19727 = (state_19750[(7)]);
var inst_19730 = cljs.core.first.call(null,inst_19727);
var state_19750__$1 = state_19750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19750__$1,(7),ch,inst_19730);
} else {
if((state_val_19751 === (13))){
var inst_19744 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
var statearr_19755_19781 = state_19750__$1;
(statearr_19755_19781[(2)] = inst_19744);

(statearr_19755_19781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (6))){
var inst_19735 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
if(cljs.core.truth_(inst_19735)){
var statearr_19756_19782 = state_19750__$1;
(statearr_19756_19782[(1)] = (8));

} else {
var statearr_19757_19783 = state_19750__$1;
(statearr_19757_19783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (3))){
var inst_19748 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19750__$1,inst_19748);
} else {
if((state_val_19751 === (12))){
var state_19750__$1 = state_19750;
var statearr_19758_19784 = state_19750__$1;
(statearr_19758_19784[(2)] = null);

(statearr_19758_19784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (2))){
var inst_19727 = (state_19750[(7)]);
var state_19750__$1 = state_19750;
if(cljs.core.truth_(inst_19727)){
var statearr_19759_19785 = state_19750__$1;
(statearr_19759_19785[(1)] = (4));

} else {
var statearr_19760_19786 = state_19750__$1;
(statearr_19760_19786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (11))){
var inst_19741 = cljs.core.async.close_BANG_.call(null,ch);
var state_19750__$1 = state_19750;
var statearr_19761_19787 = state_19750__$1;
(statearr_19761_19787[(2)] = inst_19741);

(statearr_19761_19787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (9))){
var state_19750__$1 = state_19750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19762_19788 = state_19750__$1;
(statearr_19762_19788[(1)] = (11));

} else {
var statearr_19763_19789 = state_19750__$1;
(statearr_19763_19789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (5))){
var inst_19727 = (state_19750[(7)]);
var state_19750__$1 = state_19750;
var statearr_19764_19790 = state_19750__$1;
(statearr_19764_19790[(2)] = inst_19727);

(statearr_19764_19790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (10))){
var inst_19746 = (state_19750[(2)]);
var state_19750__$1 = state_19750;
var statearr_19765_19791 = state_19750__$1;
(statearr_19765_19791[(2)] = inst_19746);

(statearr_19765_19791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19751 === (8))){
var inst_19727 = (state_19750[(7)]);
var inst_19737 = cljs.core.next.call(null,inst_19727);
var inst_19727__$1 = inst_19737;
var state_19750__$1 = (function (){var statearr_19766 = state_19750;
(statearr_19766[(7)] = inst_19727__$1);

return statearr_19766;
})();
var statearr_19767_19792 = state_19750__$1;
(statearr_19767_19792[(2)] = null);

(statearr_19767_19792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_19771 = [null,null,null,null,null,null,null,null];
(statearr_19771[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_19771[(1)] = (1));

return statearr_19771;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_19750){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_19750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e19772){if((e19772 instanceof Object)){
var ex__18822__auto__ = e19772;
var statearr_19773_19793 = state_19750;
(statearr_19773_19793[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19794 = state_19750;
state_19750 = G__19794;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_19750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_19750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_19774 = f__18931__auto__.call(null);
(statearr_19774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_19774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17418__auto__ = (((_ == null))?null:_);
var m__17419__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,_);
} else {
var m__17419__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17419__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m,ch);
} else {
var m__17419__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m);
} else {
var m__17419__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20016 = (function (mult,ch,cs,meta20017){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20017 = meta20017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20018,meta20017__$1){
var self__ = this;
var _20018__$1 = this;
return (new cljs.core.async.t_cljs$core$async20016(self__.mult,self__.ch,self__.cs,meta20017__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20018){
var self__ = this;
var _20018__$1 = this;
return self__.meta20017;
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20017","meta20017",-1618689963,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20016";

cljs.core.async.t_cljs$core$async20016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async20016");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20016 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20016(mult__$1,ch__$1,cs__$1,meta20017){
return (new cljs.core.async.t_cljs$core$async20016(mult__$1,ch__$1,cs__$1,meta20017));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20016(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18930__auto___20237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___20237,cs,m,dchan,dctr,done){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___20237,cs,m,dchan,dctr,done){
return (function (state_20149){
var state_val_20150 = (state_20149[(1)]);
if((state_val_20150 === (7))){
var inst_20145 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20151_20238 = state_20149__$1;
(statearr_20151_20238[(2)] = inst_20145);

(statearr_20151_20238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (20))){
var inst_20050 = (state_20149[(7)]);
var inst_20060 = cljs.core.first.call(null,inst_20050);
var inst_20061 = cljs.core.nth.call(null,inst_20060,(0),null);
var inst_20062 = cljs.core.nth.call(null,inst_20060,(1),null);
var state_20149__$1 = (function (){var statearr_20152 = state_20149;
(statearr_20152[(8)] = inst_20061);

return statearr_20152;
})();
if(cljs.core.truth_(inst_20062)){
var statearr_20153_20239 = state_20149__$1;
(statearr_20153_20239[(1)] = (22));

} else {
var statearr_20154_20240 = state_20149__$1;
(statearr_20154_20240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (27))){
var inst_20092 = (state_20149[(9)]);
var inst_20090 = (state_20149[(10)]);
var inst_20021 = (state_20149[(11)]);
var inst_20097 = (state_20149[(12)]);
var inst_20097__$1 = cljs.core._nth.call(null,inst_20090,inst_20092);
var inst_20098 = cljs.core.async.put_BANG_.call(null,inst_20097__$1,inst_20021,done);
var state_20149__$1 = (function (){var statearr_20155 = state_20149;
(statearr_20155[(12)] = inst_20097__$1);

return statearr_20155;
})();
if(cljs.core.truth_(inst_20098)){
var statearr_20156_20241 = state_20149__$1;
(statearr_20156_20241[(1)] = (30));

} else {
var statearr_20157_20242 = state_20149__$1;
(statearr_20157_20242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (1))){
var state_20149__$1 = state_20149;
var statearr_20158_20243 = state_20149__$1;
(statearr_20158_20243[(2)] = null);

(statearr_20158_20243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (24))){
var inst_20050 = (state_20149[(7)]);
var inst_20067 = (state_20149[(2)]);
var inst_20068 = cljs.core.next.call(null,inst_20050);
var inst_20030 = inst_20068;
var inst_20031 = null;
var inst_20032 = (0);
var inst_20033 = (0);
var state_20149__$1 = (function (){var statearr_20159 = state_20149;
(statearr_20159[(13)] = inst_20031);

(statearr_20159[(14)] = inst_20032);

(statearr_20159[(15)] = inst_20067);

(statearr_20159[(16)] = inst_20030);

(statearr_20159[(17)] = inst_20033);

return statearr_20159;
})();
var statearr_20160_20244 = state_20149__$1;
(statearr_20160_20244[(2)] = null);

(statearr_20160_20244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (39))){
var state_20149__$1 = state_20149;
var statearr_20164_20245 = state_20149__$1;
(statearr_20164_20245[(2)] = null);

(statearr_20164_20245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (4))){
var inst_20021 = (state_20149[(11)]);
var inst_20021__$1 = (state_20149[(2)]);
var inst_20022 = (inst_20021__$1 == null);
var state_20149__$1 = (function (){var statearr_20165 = state_20149;
(statearr_20165[(11)] = inst_20021__$1);

return statearr_20165;
})();
if(cljs.core.truth_(inst_20022)){
var statearr_20166_20246 = state_20149__$1;
(statearr_20166_20246[(1)] = (5));

} else {
var statearr_20167_20247 = state_20149__$1;
(statearr_20167_20247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (15))){
var inst_20031 = (state_20149[(13)]);
var inst_20032 = (state_20149[(14)]);
var inst_20030 = (state_20149[(16)]);
var inst_20033 = (state_20149[(17)]);
var inst_20046 = (state_20149[(2)]);
var inst_20047 = (inst_20033 + (1));
var tmp20161 = inst_20031;
var tmp20162 = inst_20032;
var tmp20163 = inst_20030;
var inst_20030__$1 = tmp20163;
var inst_20031__$1 = tmp20161;
var inst_20032__$1 = tmp20162;
var inst_20033__$1 = inst_20047;
var state_20149__$1 = (function (){var statearr_20168 = state_20149;
(statearr_20168[(13)] = inst_20031__$1);

(statearr_20168[(14)] = inst_20032__$1);

(statearr_20168[(16)] = inst_20030__$1);

(statearr_20168[(18)] = inst_20046);

(statearr_20168[(17)] = inst_20033__$1);

return statearr_20168;
})();
var statearr_20169_20248 = state_20149__$1;
(statearr_20169_20248[(2)] = null);

(statearr_20169_20248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (21))){
var inst_20071 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20173_20249 = state_20149__$1;
(statearr_20173_20249[(2)] = inst_20071);

(statearr_20173_20249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (31))){
var inst_20097 = (state_20149[(12)]);
var inst_20101 = done.call(null,null);
var inst_20102 = cljs.core.async.untap_STAR_.call(null,m,inst_20097);
var state_20149__$1 = (function (){var statearr_20174 = state_20149;
(statearr_20174[(19)] = inst_20101);

return statearr_20174;
})();
var statearr_20175_20250 = state_20149__$1;
(statearr_20175_20250[(2)] = inst_20102);

(statearr_20175_20250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (32))){
var inst_20092 = (state_20149[(9)]);
var inst_20089 = (state_20149[(20)]);
var inst_20090 = (state_20149[(10)]);
var inst_20091 = (state_20149[(21)]);
var inst_20104 = (state_20149[(2)]);
var inst_20105 = (inst_20092 + (1));
var tmp20170 = inst_20089;
var tmp20171 = inst_20090;
var tmp20172 = inst_20091;
var inst_20089__$1 = tmp20170;
var inst_20090__$1 = tmp20171;
var inst_20091__$1 = tmp20172;
var inst_20092__$1 = inst_20105;
var state_20149__$1 = (function (){var statearr_20176 = state_20149;
(statearr_20176[(9)] = inst_20092__$1);

(statearr_20176[(20)] = inst_20089__$1);

(statearr_20176[(10)] = inst_20090__$1);

(statearr_20176[(21)] = inst_20091__$1);

(statearr_20176[(22)] = inst_20104);

return statearr_20176;
})();
var statearr_20177_20251 = state_20149__$1;
(statearr_20177_20251[(2)] = null);

(statearr_20177_20251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (40))){
var inst_20117 = (state_20149[(23)]);
var inst_20121 = done.call(null,null);
var inst_20122 = cljs.core.async.untap_STAR_.call(null,m,inst_20117);
var state_20149__$1 = (function (){var statearr_20178 = state_20149;
(statearr_20178[(24)] = inst_20121);

return statearr_20178;
})();
var statearr_20179_20252 = state_20149__$1;
(statearr_20179_20252[(2)] = inst_20122);

(statearr_20179_20252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (33))){
var inst_20108 = (state_20149[(25)]);
var inst_20110 = cljs.core.chunked_seq_QMARK_.call(null,inst_20108);
var state_20149__$1 = state_20149;
if(inst_20110){
var statearr_20180_20253 = state_20149__$1;
(statearr_20180_20253[(1)] = (36));

} else {
var statearr_20181_20254 = state_20149__$1;
(statearr_20181_20254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (13))){
var inst_20040 = (state_20149[(26)]);
var inst_20043 = cljs.core.async.close_BANG_.call(null,inst_20040);
var state_20149__$1 = state_20149;
var statearr_20182_20255 = state_20149__$1;
(statearr_20182_20255[(2)] = inst_20043);

(statearr_20182_20255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (22))){
var inst_20061 = (state_20149[(8)]);
var inst_20064 = cljs.core.async.close_BANG_.call(null,inst_20061);
var state_20149__$1 = state_20149;
var statearr_20183_20256 = state_20149__$1;
(statearr_20183_20256[(2)] = inst_20064);

(statearr_20183_20256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (36))){
var inst_20108 = (state_20149[(25)]);
var inst_20112 = cljs.core.chunk_first.call(null,inst_20108);
var inst_20113 = cljs.core.chunk_rest.call(null,inst_20108);
var inst_20114 = cljs.core.count.call(null,inst_20112);
var inst_20089 = inst_20113;
var inst_20090 = inst_20112;
var inst_20091 = inst_20114;
var inst_20092 = (0);
var state_20149__$1 = (function (){var statearr_20184 = state_20149;
(statearr_20184[(9)] = inst_20092);

(statearr_20184[(20)] = inst_20089);

(statearr_20184[(10)] = inst_20090);

(statearr_20184[(21)] = inst_20091);

return statearr_20184;
})();
var statearr_20185_20257 = state_20149__$1;
(statearr_20185_20257[(2)] = null);

(statearr_20185_20257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (41))){
var inst_20108 = (state_20149[(25)]);
var inst_20124 = (state_20149[(2)]);
var inst_20125 = cljs.core.next.call(null,inst_20108);
var inst_20089 = inst_20125;
var inst_20090 = null;
var inst_20091 = (0);
var inst_20092 = (0);
var state_20149__$1 = (function (){var statearr_20186 = state_20149;
(statearr_20186[(9)] = inst_20092);

(statearr_20186[(20)] = inst_20089);

(statearr_20186[(10)] = inst_20090);

(statearr_20186[(21)] = inst_20091);

(statearr_20186[(27)] = inst_20124);

return statearr_20186;
})();
var statearr_20187_20258 = state_20149__$1;
(statearr_20187_20258[(2)] = null);

(statearr_20187_20258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (43))){
var state_20149__$1 = state_20149;
var statearr_20188_20259 = state_20149__$1;
(statearr_20188_20259[(2)] = null);

(statearr_20188_20259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (29))){
var inst_20133 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20189_20260 = state_20149__$1;
(statearr_20189_20260[(2)] = inst_20133);

(statearr_20189_20260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (44))){
var inst_20142 = (state_20149[(2)]);
var state_20149__$1 = (function (){var statearr_20190 = state_20149;
(statearr_20190[(28)] = inst_20142);

return statearr_20190;
})();
var statearr_20191_20261 = state_20149__$1;
(statearr_20191_20261[(2)] = null);

(statearr_20191_20261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (6))){
var inst_20081 = (state_20149[(29)]);
var inst_20080 = cljs.core.deref.call(null,cs);
var inst_20081__$1 = cljs.core.keys.call(null,inst_20080);
var inst_20082 = cljs.core.count.call(null,inst_20081__$1);
var inst_20083 = cljs.core.reset_BANG_.call(null,dctr,inst_20082);
var inst_20088 = cljs.core.seq.call(null,inst_20081__$1);
var inst_20089 = inst_20088;
var inst_20090 = null;
var inst_20091 = (0);
var inst_20092 = (0);
var state_20149__$1 = (function (){var statearr_20192 = state_20149;
(statearr_20192[(9)] = inst_20092);

(statearr_20192[(30)] = inst_20083);

(statearr_20192[(20)] = inst_20089);

(statearr_20192[(10)] = inst_20090);

(statearr_20192[(21)] = inst_20091);

(statearr_20192[(29)] = inst_20081__$1);

return statearr_20192;
})();
var statearr_20193_20262 = state_20149__$1;
(statearr_20193_20262[(2)] = null);

(statearr_20193_20262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (28))){
var inst_20089 = (state_20149[(20)]);
var inst_20108 = (state_20149[(25)]);
var inst_20108__$1 = cljs.core.seq.call(null,inst_20089);
var state_20149__$1 = (function (){var statearr_20194 = state_20149;
(statearr_20194[(25)] = inst_20108__$1);

return statearr_20194;
})();
if(inst_20108__$1){
var statearr_20195_20263 = state_20149__$1;
(statearr_20195_20263[(1)] = (33));

} else {
var statearr_20196_20264 = state_20149__$1;
(statearr_20196_20264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (25))){
var inst_20092 = (state_20149[(9)]);
var inst_20091 = (state_20149[(21)]);
var inst_20094 = (inst_20092 < inst_20091);
var inst_20095 = inst_20094;
var state_20149__$1 = state_20149;
if(cljs.core.truth_(inst_20095)){
var statearr_20197_20265 = state_20149__$1;
(statearr_20197_20265[(1)] = (27));

} else {
var statearr_20198_20266 = state_20149__$1;
(statearr_20198_20266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (34))){
var state_20149__$1 = state_20149;
var statearr_20199_20267 = state_20149__$1;
(statearr_20199_20267[(2)] = null);

(statearr_20199_20267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (17))){
var state_20149__$1 = state_20149;
var statearr_20200_20268 = state_20149__$1;
(statearr_20200_20268[(2)] = null);

(statearr_20200_20268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (3))){
var inst_20147 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20149__$1,inst_20147);
} else {
if((state_val_20150 === (12))){
var inst_20076 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20201_20269 = state_20149__$1;
(statearr_20201_20269[(2)] = inst_20076);

(statearr_20201_20269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (2))){
var state_20149__$1 = state_20149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20149__$1,(4),ch);
} else {
if((state_val_20150 === (23))){
var state_20149__$1 = state_20149;
var statearr_20202_20270 = state_20149__$1;
(statearr_20202_20270[(2)] = null);

(statearr_20202_20270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (35))){
var inst_20131 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20203_20271 = state_20149__$1;
(statearr_20203_20271[(2)] = inst_20131);

(statearr_20203_20271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (19))){
var inst_20050 = (state_20149[(7)]);
var inst_20054 = cljs.core.chunk_first.call(null,inst_20050);
var inst_20055 = cljs.core.chunk_rest.call(null,inst_20050);
var inst_20056 = cljs.core.count.call(null,inst_20054);
var inst_20030 = inst_20055;
var inst_20031 = inst_20054;
var inst_20032 = inst_20056;
var inst_20033 = (0);
var state_20149__$1 = (function (){var statearr_20204 = state_20149;
(statearr_20204[(13)] = inst_20031);

(statearr_20204[(14)] = inst_20032);

(statearr_20204[(16)] = inst_20030);

(statearr_20204[(17)] = inst_20033);

return statearr_20204;
})();
var statearr_20205_20272 = state_20149__$1;
(statearr_20205_20272[(2)] = null);

(statearr_20205_20272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (11))){
var inst_20030 = (state_20149[(16)]);
var inst_20050 = (state_20149[(7)]);
var inst_20050__$1 = cljs.core.seq.call(null,inst_20030);
var state_20149__$1 = (function (){var statearr_20206 = state_20149;
(statearr_20206[(7)] = inst_20050__$1);

return statearr_20206;
})();
if(inst_20050__$1){
var statearr_20207_20273 = state_20149__$1;
(statearr_20207_20273[(1)] = (16));

} else {
var statearr_20208_20274 = state_20149__$1;
(statearr_20208_20274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (9))){
var inst_20078 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20209_20275 = state_20149__$1;
(statearr_20209_20275[(2)] = inst_20078);

(statearr_20209_20275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (5))){
var inst_20028 = cljs.core.deref.call(null,cs);
var inst_20029 = cljs.core.seq.call(null,inst_20028);
var inst_20030 = inst_20029;
var inst_20031 = null;
var inst_20032 = (0);
var inst_20033 = (0);
var state_20149__$1 = (function (){var statearr_20210 = state_20149;
(statearr_20210[(13)] = inst_20031);

(statearr_20210[(14)] = inst_20032);

(statearr_20210[(16)] = inst_20030);

(statearr_20210[(17)] = inst_20033);

return statearr_20210;
})();
var statearr_20211_20276 = state_20149__$1;
(statearr_20211_20276[(2)] = null);

(statearr_20211_20276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (14))){
var state_20149__$1 = state_20149;
var statearr_20212_20277 = state_20149__$1;
(statearr_20212_20277[(2)] = null);

(statearr_20212_20277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (45))){
var inst_20139 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20213_20278 = state_20149__$1;
(statearr_20213_20278[(2)] = inst_20139);

(statearr_20213_20278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (26))){
var inst_20081 = (state_20149[(29)]);
var inst_20135 = (state_20149[(2)]);
var inst_20136 = cljs.core.seq.call(null,inst_20081);
var state_20149__$1 = (function (){var statearr_20214 = state_20149;
(statearr_20214[(31)] = inst_20135);

return statearr_20214;
})();
if(inst_20136){
var statearr_20215_20279 = state_20149__$1;
(statearr_20215_20279[(1)] = (42));

} else {
var statearr_20216_20280 = state_20149__$1;
(statearr_20216_20280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (16))){
var inst_20050 = (state_20149[(7)]);
var inst_20052 = cljs.core.chunked_seq_QMARK_.call(null,inst_20050);
var state_20149__$1 = state_20149;
if(inst_20052){
var statearr_20217_20281 = state_20149__$1;
(statearr_20217_20281[(1)] = (19));

} else {
var statearr_20218_20282 = state_20149__$1;
(statearr_20218_20282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (38))){
var inst_20128 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20219_20283 = state_20149__$1;
(statearr_20219_20283[(2)] = inst_20128);

(statearr_20219_20283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (30))){
var state_20149__$1 = state_20149;
var statearr_20220_20284 = state_20149__$1;
(statearr_20220_20284[(2)] = null);

(statearr_20220_20284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (10))){
var inst_20031 = (state_20149[(13)]);
var inst_20033 = (state_20149[(17)]);
var inst_20039 = cljs.core._nth.call(null,inst_20031,inst_20033);
var inst_20040 = cljs.core.nth.call(null,inst_20039,(0),null);
var inst_20041 = cljs.core.nth.call(null,inst_20039,(1),null);
var state_20149__$1 = (function (){var statearr_20221 = state_20149;
(statearr_20221[(26)] = inst_20040);

return statearr_20221;
})();
if(cljs.core.truth_(inst_20041)){
var statearr_20222_20285 = state_20149__$1;
(statearr_20222_20285[(1)] = (13));

} else {
var statearr_20223_20286 = state_20149__$1;
(statearr_20223_20286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (18))){
var inst_20074 = (state_20149[(2)]);
var state_20149__$1 = state_20149;
var statearr_20224_20287 = state_20149__$1;
(statearr_20224_20287[(2)] = inst_20074);

(statearr_20224_20287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (42))){
var state_20149__$1 = state_20149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20149__$1,(45),dchan);
} else {
if((state_val_20150 === (37))){
var inst_20108 = (state_20149[(25)]);
var inst_20021 = (state_20149[(11)]);
var inst_20117 = (state_20149[(23)]);
var inst_20117__$1 = cljs.core.first.call(null,inst_20108);
var inst_20118 = cljs.core.async.put_BANG_.call(null,inst_20117__$1,inst_20021,done);
var state_20149__$1 = (function (){var statearr_20225 = state_20149;
(statearr_20225[(23)] = inst_20117__$1);

return statearr_20225;
})();
if(cljs.core.truth_(inst_20118)){
var statearr_20226_20288 = state_20149__$1;
(statearr_20226_20288[(1)] = (39));

} else {
var statearr_20227_20289 = state_20149__$1;
(statearr_20227_20289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20150 === (8))){
var inst_20032 = (state_20149[(14)]);
var inst_20033 = (state_20149[(17)]);
var inst_20035 = (inst_20033 < inst_20032);
var inst_20036 = inst_20035;
var state_20149__$1 = state_20149;
if(cljs.core.truth_(inst_20036)){
var statearr_20228_20290 = state_20149__$1;
(statearr_20228_20290[(1)] = (10));

} else {
var statearr_20229_20291 = state_20149__$1;
(statearr_20229_20291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___20237,cs,m,dchan,dctr,done))
;
return ((function (switch__18818__auto__,c__18930__auto___20237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18819__auto__ = null;
var cljs$core$async$mult_$_state_machine__18819__auto____0 = (function (){
var statearr_20233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20233[(0)] = cljs$core$async$mult_$_state_machine__18819__auto__);

(statearr_20233[(1)] = (1));

return statearr_20233;
});
var cljs$core$async$mult_$_state_machine__18819__auto____1 = (function (state_20149){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20234){if((e20234 instanceof Object)){
var ex__18822__auto__ = e20234;
var statearr_20235_20292 = state_20149;
(statearr_20235_20292[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20293 = state_20149;
state_20149 = G__20293;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18819__auto__ = function(state_20149){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18819__auto____1.call(this,state_20149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18819__auto____0;
cljs$core$async$mult_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18819__auto____1;
return cljs$core$async$mult_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___20237,cs,m,dchan,dctr,done))
})();
var state__18932__auto__ = (function (){var statearr_20236 = f__18931__auto__.call(null);
(statearr_20236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___20237);

return statearr_20236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___20237,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20294 = [];
var len__17821__auto___20297 = arguments.length;
var i__17822__auto___20298 = (0);
while(true){
if((i__17822__auto___20298 < len__17821__auto___20297)){
args20294.push((arguments[i__17822__auto___20298]));

var G__20299 = (i__17822__auto___20298 + (1));
i__17822__auto___20298 = G__20299;
continue;
} else {
}
break;
}

var G__20296 = args20294.length;
switch (G__20296) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20294.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m,ch);
} else {
var m__17419__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m,ch);
} else {
var m__17419__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m);
} else {
var m__17419__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m,state_map);
} else {
var m__17419__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17418__auto__ = (((m == null))?null:m);
var m__17419__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,m,mode);
} else {
var m__17419__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17828__auto__ = [];
var len__17821__auto___20311 = arguments.length;
var i__17822__auto___20312 = (0);
while(true){
if((i__17822__auto___20312 < len__17821__auto___20311)){
args__17828__auto__.push((arguments[i__17822__auto___20312]));

var G__20313 = (i__17822__auto___20312 + (1));
i__17822__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((3) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17829__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20305){
var map__20306 = p__20305;
var map__20306__$1 = ((((!((map__20306 == null)))?((((map__20306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20306):map__20306);
var opts = map__20306__$1;
var statearr_20308_20314 = state;
(statearr_20308_20314[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20306,map__20306__$1,opts){
return (function (val){
var statearr_20309_20315 = state;
(statearr_20309_20315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20306,map__20306__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20310_20316 = state;
(statearr_20310_20316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20301){
var G__20302 = cljs.core.first.call(null,seq20301);
var seq20301__$1 = cljs.core.next.call(null,seq20301);
var G__20303 = cljs.core.first.call(null,seq20301__$1);
var seq20301__$2 = cljs.core.next.call(null,seq20301__$1);
var G__20304 = cljs.core.first.call(null,seq20301__$2);
var seq20301__$3 = cljs.core.next.call(null,seq20301__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20302,G__20303,G__20304,seq20301__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20480 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20481){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20481 = meta20481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20482,meta20481__$1){
var self__ = this;
var _20482__$1 = this;
return (new cljs.core.async.t_cljs$core$async20480(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20481__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20482){
var self__ = this;
var _20482__$1 = this;
return self__.meta20481;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20481","meta20481",-269761094,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20480";

cljs.core.async.t_cljs$core$async20480.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async20480");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20480 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20481){
return (new cljs.core.async.t_cljs$core$async20480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20481));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20480(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18930__auto___20643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___20643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___20643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20580){
var state_val_20581 = (state_20580[(1)]);
if((state_val_20581 === (7))){
var inst_20498 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
var statearr_20582_20644 = state_20580__$1;
(statearr_20582_20644[(2)] = inst_20498);

(statearr_20582_20644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (20))){
var inst_20510 = (state_20580[(7)]);
var state_20580__$1 = state_20580;
var statearr_20583_20645 = state_20580__$1;
(statearr_20583_20645[(2)] = inst_20510);

(statearr_20583_20645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (27))){
var state_20580__$1 = state_20580;
var statearr_20584_20646 = state_20580__$1;
(statearr_20584_20646[(2)] = null);

(statearr_20584_20646[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (1))){
var inst_20486 = (state_20580[(8)]);
var inst_20486__$1 = calc_state.call(null);
var inst_20488 = (inst_20486__$1 == null);
var inst_20489 = cljs.core.not.call(null,inst_20488);
var state_20580__$1 = (function (){var statearr_20585 = state_20580;
(statearr_20585[(8)] = inst_20486__$1);

return statearr_20585;
})();
if(inst_20489){
var statearr_20586_20647 = state_20580__$1;
(statearr_20586_20647[(1)] = (2));

} else {
var statearr_20587_20648 = state_20580__$1;
(statearr_20587_20648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (24))){
var inst_20533 = (state_20580[(9)]);
var inst_20554 = (state_20580[(10)]);
var inst_20540 = (state_20580[(11)]);
var inst_20554__$1 = inst_20533.call(null,inst_20540);
var state_20580__$1 = (function (){var statearr_20588 = state_20580;
(statearr_20588[(10)] = inst_20554__$1);

return statearr_20588;
})();
if(cljs.core.truth_(inst_20554__$1)){
var statearr_20589_20649 = state_20580__$1;
(statearr_20589_20649[(1)] = (29));

} else {
var statearr_20590_20650 = state_20580__$1;
(statearr_20590_20650[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (4))){
var inst_20501 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20501)){
var statearr_20591_20651 = state_20580__$1;
(statearr_20591_20651[(1)] = (8));

} else {
var statearr_20592_20652 = state_20580__$1;
(statearr_20592_20652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (15))){
var inst_20527 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20527)){
var statearr_20593_20653 = state_20580__$1;
(statearr_20593_20653[(1)] = (19));

} else {
var statearr_20594_20654 = state_20580__$1;
(statearr_20594_20654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (21))){
var inst_20532 = (state_20580[(12)]);
var inst_20532__$1 = (state_20580[(2)]);
var inst_20533 = cljs.core.get.call(null,inst_20532__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20534 = cljs.core.get.call(null,inst_20532__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20535 = cljs.core.get.call(null,inst_20532__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20580__$1 = (function (){var statearr_20595 = state_20580;
(statearr_20595[(13)] = inst_20534);

(statearr_20595[(9)] = inst_20533);

(statearr_20595[(12)] = inst_20532__$1);

return statearr_20595;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20580__$1,(22),inst_20535);
} else {
if((state_val_20581 === (31))){
var inst_20562 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20562)){
var statearr_20596_20655 = state_20580__$1;
(statearr_20596_20655[(1)] = (32));

} else {
var statearr_20597_20656 = state_20580__$1;
(statearr_20597_20656[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (32))){
var inst_20539 = (state_20580[(14)]);
var state_20580__$1 = state_20580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20580__$1,(35),out,inst_20539);
} else {
if((state_val_20581 === (33))){
var inst_20532 = (state_20580[(12)]);
var inst_20510 = inst_20532;
var state_20580__$1 = (function (){var statearr_20598 = state_20580;
(statearr_20598[(7)] = inst_20510);

return statearr_20598;
})();
var statearr_20599_20657 = state_20580__$1;
(statearr_20599_20657[(2)] = null);

(statearr_20599_20657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (13))){
var inst_20510 = (state_20580[(7)]);
var inst_20517 = inst_20510.cljs$lang$protocol_mask$partition0$;
var inst_20518 = (inst_20517 & (64));
var inst_20519 = inst_20510.cljs$core$ISeq$;
var inst_20520 = (inst_20518) || (inst_20519);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20520)){
var statearr_20600_20658 = state_20580__$1;
(statearr_20600_20658[(1)] = (16));

} else {
var statearr_20601_20659 = state_20580__$1;
(statearr_20601_20659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (22))){
var inst_20539 = (state_20580[(14)]);
var inst_20540 = (state_20580[(11)]);
var inst_20538 = (state_20580[(2)]);
var inst_20539__$1 = cljs.core.nth.call(null,inst_20538,(0),null);
var inst_20540__$1 = cljs.core.nth.call(null,inst_20538,(1),null);
var inst_20541 = (inst_20539__$1 == null);
var inst_20542 = cljs.core._EQ_.call(null,inst_20540__$1,change);
var inst_20543 = (inst_20541) || (inst_20542);
var state_20580__$1 = (function (){var statearr_20602 = state_20580;
(statearr_20602[(14)] = inst_20539__$1);

(statearr_20602[(11)] = inst_20540__$1);

return statearr_20602;
})();
if(cljs.core.truth_(inst_20543)){
var statearr_20603_20660 = state_20580__$1;
(statearr_20603_20660[(1)] = (23));

} else {
var statearr_20604_20661 = state_20580__$1;
(statearr_20604_20661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (36))){
var inst_20532 = (state_20580[(12)]);
var inst_20510 = inst_20532;
var state_20580__$1 = (function (){var statearr_20605 = state_20580;
(statearr_20605[(7)] = inst_20510);

return statearr_20605;
})();
var statearr_20606_20662 = state_20580__$1;
(statearr_20606_20662[(2)] = null);

(statearr_20606_20662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (29))){
var inst_20554 = (state_20580[(10)]);
var state_20580__$1 = state_20580;
var statearr_20607_20663 = state_20580__$1;
(statearr_20607_20663[(2)] = inst_20554);

(statearr_20607_20663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (6))){
var state_20580__$1 = state_20580;
var statearr_20608_20664 = state_20580__$1;
(statearr_20608_20664[(2)] = false);

(statearr_20608_20664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (28))){
var inst_20550 = (state_20580[(2)]);
var inst_20551 = calc_state.call(null);
var inst_20510 = inst_20551;
var state_20580__$1 = (function (){var statearr_20609 = state_20580;
(statearr_20609[(7)] = inst_20510);

(statearr_20609[(15)] = inst_20550);

return statearr_20609;
})();
var statearr_20610_20665 = state_20580__$1;
(statearr_20610_20665[(2)] = null);

(statearr_20610_20665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (25))){
var inst_20576 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
var statearr_20611_20666 = state_20580__$1;
(statearr_20611_20666[(2)] = inst_20576);

(statearr_20611_20666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (34))){
var inst_20574 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
var statearr_20612_20667 = state_20580__$1;
(statearr_20612_20667[(2)] = inst_20574);

(statearr_20612_20667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (17))){
var state_20580__$1 = state_20580;
var statearr_20613_20668 = state_20580__$1;
(statearr_20613_20668[(2)] = false);

(statearr_20613_20668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (3))){
var state_20580__$1 = state_20580;
var statearr_20614_20669 = state_20580__$1;
(statearr_20614_20669[(2)] = false);

(statearr_20614_20669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (12))){
var inst_20578 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20580__$1,inst_20578);
} else {
if((state_val_20581 === (2))){
var inst_20486 = (state_20580[(8)]);
var inst_20491 = inst_20486.cljs$lang$protocol_mask$partition0$;
var inst_20492 = (inst_20491 & (64));
var inst_20493 = inst_20486.cljs$core$ISeq$;
var inst_20494 = (inst_20492) || (inst_20493);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20494)){
var statearr_20615_20670 = state_20580__$1;
(statearr_20615_20670[(1)] = (5));

} else {
var statearr_20616_20671 = state_20580__$1;
(statearr_20616_20671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (23))){
var inst_20539 = (state_20580[(14)]);
var inst_20545 = (inst_20539 == null);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20545)){
var statearr_20617_20672 = state_20580__$1;
(statearr_20617_20672[(1)] = (26));

} else {
var statearr_20618_20673 = state_20580__$1;
(statearr_20618_20673[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (35))){
var inst_20565 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
if(cljs.core.truth_(inst_20565)){
var statearr_20619_20674 = state_20580__$1;
(statearr_20619_20674[(1)] = (36));

} else {
var statearr_20620_20675 = state_20580__$1;
(statearr_20620_20675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (19))){
var inst_20510 = (state_20580[(7)]);
var inst_20529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20510);
var state_20580__$1 = state_20580;
var statearr_20621_20676 = state_20580__$1;
(statearr_20621_20676[(2)] = inst_20529);

(statearr_20621_20676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (11))){
var inst_20510 = (state_20580[(7)]);
var inst_20514 = (inst_20510 == null);
var inst_20515 = cljs.core.not.call(null,inst_20514);
var state_20580__$1 = state_20580;
if(inst_20515){
var statearr_20622_20677 = state_20580__$1;
(statearr_20622_20677[(1)] = (13));

} else {
var statearr_20623_20678 = state_20580__$1;
(statearr_20623_20678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (9))){
var inst_20486 = (state_20580[(8)]);
var state_20580__$1 = state_20580;
var statearr_20624_20679 = state_20580__$1;
(statearr_20624_20679[(2)] = inst_20486);

(statearr_20624_20679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (5))){
var state_20580__$1 = state_20580;
var statearr_20625_20680 = state_20580__$1;
(statearr_20625_20680[(2)] = true);

(statearr_20625_20680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (14))){
var state_20580__$1 = state_20580;
var statearr_20626_20681 = state_20580__$1;
(statearr_20626_20681[(2)] = false);

(statearr_20626_20681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (26))){
var inst_20540 = (state_20580[(11)]);
var inst_20547 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20540);
var state_20580__$1 = state_20580;
var statearr_20627_20682 = state_20580__$1;
(statearr_20627_20682[(2)] = inst_20547);

(statearr_20627_20682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (16))){
var state_20580__$1 = state_20580;
var statearr_20628_20683 = state_20580__$1;
(statearr_20628_20683[(2)] = true);

(statearr_20628_20683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (38))){
var inst_20570 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
var statearr_20629_20684 = state_20580__$1;
(statearr_20629_20684[(2)] = inst_20570);

(statearr_20629_20684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (30))){
var inst_20534 = (state_20580[(13)]);
var inst_20533 = (state_20580[(9)]);
var inst_20540 = (state_20580[(11)]);
var inst_20557 = cljs.core.empty_QMARK_.call(null,inst_20533);
var inst_20558 = inst_20534.call(null,inst_20540);
var inst_20559 = cljs.core.not.call(null,inst_20558);
var inst_20560 = (inst_20557) && (inst_20559);
var state_20580__$1 = state_20580;
var statearr_20630_20685 = state_20580__$1;
(statearr_20630_20685[(2)] = inst_20560);

(statearr_20630_20685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (10))){
var inst_20486 = (state_20580[(8)]);
var inst_20506 = (state_20580[(2)]);
var inst_20507 = cljs.core.get.call(null,inst_20506,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20508 = cljs.core.get.call(null,inst_20506,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20509 = cljs.core.get.call(null,inst_20506,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20510 = inst_20486;
var state_20580__$1 = (function (){var statearr_20631 = state_20580;
(statearr_20631[(16)] = inst_20509);

(statearr_20631[(7)] = inst_20510);

(statearr_20631[(17)] = inst_20508);

(statearr_20631[(18)] = inst_20507);

return statearr_20631;
})();
var statearr_20632_20686 = state_20580__$1;
(statearr_20632_20686[(2)] = null);

(statearr_20632_20686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (18))){
var inst_20524 = (state_20580[(2)]);
var state_20580__$1 = state_20580;
var statearr_20633_20687 = state_20580__$1;
(statearr_20633_20687[(2)] = inst_20524);

(statearr_20633_20687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (37))){
var state_20580__$1 = state_20580;
var statearr_20634_20688 = state_20580__$1;
(statearr_20634_20688[(2)] = null);

(statearr_20634_20688[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20581 === (8))){
var inst_20486 = (state_20580[(8)]);
var inst_20503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20486);
var state_20580__$1 = state_20580;
var statearr_20635_20689 = state_20580__$1;
(statearr_20635_20689[(2)] = inst_20503);

(statearr_20635_20689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___20643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18818__auto__,c__18930__auto___20643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18819__auto__ = null;
var cljs$core$async$mix_$_state_machine__18819__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20639[(0)] = cljs$core$async$mix_$_state_machine__18819__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var cljs$core$async$mix_$_state_machine__18819__auto____1 = (function (state_20580){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20640){if((e20640 instanceof Object)){
var ex__18822__auto__ = e20640;
var statearr_20641_20690 = state_20580;
(statearr_20641_20690[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20691 = state_20580;
state_20580 = G__20691;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18819__auto__ = function(state_20580){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18819__auto____1.call(this,state_20580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18819__auto____0;
cljs$core$async$mix_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18819__auto____1;
return cljs$core$async$mix_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___20643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18932__auto__ = (function (){var statearr_20642 = f__18931__auto__.call(null);
(statearr_20642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___20643);

return statearr_20642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___20643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17418__auto__ = (((p == null))?null:p);
var m__17419__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17419__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17418__auto__ = (((p == null))?null:p);
var m__17419__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,p,v,ch);
} else {
var m__17419__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20692 = [];
var len__17821__auto___20695 = arguments.length;
var i__17822__auto___20696 = (0);
while(true){
if((i__17822__auto___20696 < len__17821__auto___20695)){
args20692.push((arguments[i__17822__auto___20696]));

var G__20697 = (i__17822__auto___20696 + (1));
i__17822__auto___20696 = G__20697;
continue;
} else {
}
break;
}

var G__20694 = args20692.length;
switch (G__20694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20692.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17418__auto__ = (((p == null))?null:p);
var m__17419__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,p);
} else {
var m__17419__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17418__auto__ = (((p == null))?null:p);
var m__17419__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17418__auto__)]);
if(!((m__17419__auto__ == null))){
return m__17419__auto__.call(null,p,v);
} else {
var m__17419__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17419__auto____$1 == null))){
return m__17419__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20700 = [];
var len__17821__auto___20825 = arguments.length;
var i__17822__auto___20826 = (0);
while(true){
if((i__17822__auto___20826 < len__17821__auto___20825)){
args20700.push((arguments[i__17822__auto___20826]));

var G__20827 = (i__17822__auto___20826 + (1));
i__17822__auto___20826 = G__20827;
continue;
} else {
}
break;
}

var G__20702 = args20700.length;
switch (G__20702) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20700.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16763__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16763__auto__,mults){
return (function (p1__20699_SHARP_){
if(cljs.core.truth_(p1__20699_SHARP_.call(null,topic))){
return p1__20699_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20699_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16763__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20704 = meta20704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20705,meta20704__$1){
var self__ = this;
var _20705__$1 = this;
return (new cljs.core.async.t_cljs$core$async20703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20704__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20705){
var self__ = this;
var _20705__$1 = this;
return self__.meta20704;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20704","meta20704",-1615074092,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20703";

cljs.core.async.t_cljs$core$async20703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async20703");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20703 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20704){
return (new cljs.core.async.t_cljs$core$async20703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20704));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18930__auto___20829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___20829,mults,ensure_mult,p){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___20829,mults,ensure_mult,p){
return (function (state_20777){
var state_val_20778 = (state_20777[(1)]);
if((state_val_20778 === (7))){
var inst_20773 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20779_20830 = state_20777__$1;
(statearr_20779_20830[(2)] = inst_20773);

(statearr_20779_20830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (20))){
var state_20777__$1 = state_20777;
var statearr_20780_20831 = state_20777__$1;
(statearr_20780_20831[(2)] = null);

(statearr_20780_20831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (1))){
var state_20777__$1 = state_20777;
var statearr_20781_20832 = state_20777__$1;
(statearr_20781_20832[(2)] = null);

(statearr_20781_20832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (24))){
var inst_20756 = (state_20777[(7)]);
var inst_20765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20756);
var state_20777__$1 = state_20777;
var statearr_20782_20833 = state_20777__$1;
(statearr_20782_20833[(2)] = inst_20765);

(statearr_20782_20833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (4))){
var inst_20708 = (state_20777[(8)]);
var inst_20708__$1 = (state_20777[(2)]);
var inst_20709 = (inst_20708__$1 == null);
var state_20777__$1 = (function (){var statearr_20783 = state_20777;
(statearr_20783[(8)] = inst_20708__$1);

return statearr_20783;
})();
if(cljs.core.truth_(inst_20709)){
var statearr_20784_20834 = state_20777__$1;
(statearr_20784_20834[(1)] = (5));

} else {
var statearr_20785_20835 = state_20777__$1;
(statearr_20785_20835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (15))){
var inst_20750 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20786_20836 = state_20777__$1;
(statearr_20786_20836[(2)] = inst_20750);

(statearr_20786_20836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (21))){
var inst_20770 = (state_20777[(2)]);
var state_20777__$1 = (function (){var statearr_20787 = state_20777;
(statearr_20787[(9)] = inst_20770);

return statearr_20787;
})();
var statearr_20788_20837 = state_20777__$1;
(statearr_20788_20837[(2)] = null);

(statearr_20788_20837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (13))){
var inst_20732 = (state_20777[(10)]);
var inst_20734 = cljs.core.chunked_seq_QMARK_.call(null,inst_20732);
var state_20777__$1 = state_20777;
if(inst_20734){
var statearr_20789_20838 = state_20777__$1;
(statearr_20789_20838[(1)] = (16));

} else {
var statearr_20790_20839 = state_20777__$1;
(statearr_20790_20839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (22))){
var inst_20762 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
if(cljs.core.truth_(inst_20762)){
var statearr_20791_20840 = state_20777__$1;
(statearr_20791_20840[(1)] = (23));

} else {
var statearr_20792_20841 = state_20777__$1;
(statearr_20792_20841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (6))){
var inst_20708 = (state_20777[(8)]);
var inst_20756 = (state_20777[(7)]);
var inst_20758 = (state_20777[(11)]);
var inst_20756__$1 = topic_fn.call(null,inst_20708);
var inst_20757 = cljs.core.deref.call(null,mults);
var inst_20758__$1 = cljs.core.get.call(null,inst_20757,inst_20756__$1);
var state_20777__$1 = (function (){var statearr_20793 = state_20777;
(statearr_20793[(7)] = inst_20756__$1);

(statearr_20793[(11)] = inst_20758__$1);

return statearr_20793;
})();
if(cljs.core.truth_(inst_20758__$1)){
var statearr_20794_20842 = state_20777__$1;
(statearr_20794_20842[(1)] = (19));

} else {
var statearr_20795_20843 = state_20777__$1;
(statearr_20795_20843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (25))){
var inst_20767 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20796_20844 = state_20777__$1;
(statearr_20796_20844[(2)] = inst_20767);

(statearr_20796_20844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (17))){
var inst_20732 = (state_20777[(10)]);
var inst_20741 = cljs.core.first.call(null,inst_20732);
var inst_20742 = cljs.core.async.muxch_STAR_.call(null,inst_20741);
var inst_20743 = cljs.core.async.close_BANG_.call(null,inst_20742);
var inst_20744 = cljs.core.next.call(null,inst_20732);
var inst_20718 = inst_20744;
var inst_20719 = null;
var inst_20720 = (0);
var inst_20721 = (0);
var state_20777__$1 = (function (){var statearr_20797 = state_20777;
(statearr_20797[(12)] = inst_20721);

(statearr_20797[(13)] = inst_20718);

(statearr_20797[(14)] = inst_20743);

(statearr_20797[(15)] = inst_20720);

(statearr_20797[(16)] = inst_20719);

return statearr_20797;
})();
var statearr_20798_20845 = state_20777__$1;
(statearr_20798_20845[(2)] = null);

(statearr_20798_20845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (3))){
var inst_20775 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20777__$1,inst_20775);
} else {
if((state_val_20778 === (12))){
var inst_20752 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20799_20846 = state_20777__$1;
(statearr_20799_20846[(2)] = inst_20752);

(statearr_20799_20846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (2))){
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20777__$1,(4),ch);
} else {
if((state_val_20778 === (23))){
var state_20777__$1 = state_20777;
var statearr_20800_20847 = state_20777__$1;
(statearr_20800_20847[(2)] = null);

(statearr_20800_20847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (19))){
var inst_20708 = (state_20777[(8)]);
var inst_20758 = (state_20777[(11)]);
var inst_20760 = cljs.core.async.muxch_STAR_.call(null,inst_20758);
var state_20777__$1 = state_20777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20777__$1,(22),inst_20760,inst_20708);
} else {
if((state_val_20778 === (11))){
var inst_20732 = (state_20777[(10)]);
var inst_20718 = (state_20777[(13)]);
var inst_20732__$1 = cljs.core.seq.call(null,inst_20718);
var state_20777__$1 = (function (){var statearr_20801 = state_20777;
(statearr_20801[(10)] = inst_20732__$1);

return statearr_20801;
})();
if(inst_20732__$1){
var statearr_20802_20848 = state_20777__$1;
(statearr_20802_20848[(1)] = (13));

} else {
var statearr_20803_20849 = state_20777__$1;
(statearr_20803_20849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (9))){
var inst_20754 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20804_20850 = state_20777__$1;
(statearr_20804_20850[(2)] = inst_20754);

(statearr_20804_20850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (5))){
var inst_20715 = cljs.core.deref.call(null,mults);
var inst_20716 = cljs.core.vals.call(null,inst_20715);
var inst_20717 = cljs.core.seq.call(null,inst_20716);
var inst_20718 = inst_20717;
var inst_20719 = null;
var inst_20720 = (0);
var inst_20721 = (0);
var state_20777__$1 = (function (){var statearr_20805 = state_20777;
(statearr_20805[(12)] = inst_20721);

(statearr_20805[(13)] = inst_20718);

(statearr_20805[(15)] = inst_20720);

(statearr_20805[(16)] = inst_20719);

return statearr_20805;
})();
var statearr_20806_20851 = state_20777__$1;
(statearr_20806_20851[(2)] = null);

(statearr_20806_20851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (14))){
var state_20777__$1 = state_20777;
var statearr_20810_20852 = state_20777__$1;
(statearr_20810_20852[(2)] = null);

(statearr_20810_20852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (16))){
var inst_20732 = (state_20777[(10)]);
var inst_20736 = cljs.core.chunk_first.call(null,inst_20732);
var inst_20737 = cljs.core.chunk_rest.call(null,inst_20732);
var inst_20738 = cljs.core.count.call(null,inst_20736);
var inst_20718 = inst_20737;
var inst_20719 = inst_20736;
var inst_20720 = inst_20738;
var inst_20721 = (0);
var state_20777__$1 = (function (){var statearr_20811 = state_20777;
(statearr_20811[(12)] = inst_20721);

(statearr_20811[(13)] = inst_20718);

(statearr_20811[(15)] = inst_20720);

(statearr_20811[(16)] = inst_20719);

return statearr_20811;
})();
var statearr_20812_20853 = state_20777__$1;
(statearr_20812_20853[(2)] = null);

(statearr_20812_20853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (10))){
var inst_20721 = (state_20777[(12)]);
var inst_20718 = (state_20777[(13)]);
var inst_20720 = (state_20777[(15)]);
var inst_20719 = (state_20777[(16)]);
var inst_20726 = cljs.core._nth.call(null,inst_20719,inst_20721);
var inst_20727 = cljs.core.async.muxch_STAR_.call(null,inst_20726);
var inst_20728 = cljs.core.async.close_BANG_.call(null,inst_20727);
var inst_20729 = (inst_20721 + (1));
var tmp20807 = inst_20718;
var tmp20808 = inst_20720;
var tmp20809 = inst_20719;
var inst_20718__$1 = tmp20807;
var inst_20719__$1 = tmp20809;
var inst_20720__$1 = tmp20808;
var inst_20721__$1 = inst_20729;
var state_20777__$1 = (function (){var statearr_20813 = state_20777;
(statearr_20813[(17)] = inst_20728);

(statearr_20813[(12)] = inst_20721__$1);

(statearr_20813[(13)] = inst_20718__$1);

(statearr_20813[(15)] = inst_20720__$1);

(statearr_20813[(16)] = inst_20719__$1);

return statearr_20813;
})();
var statearr_20814_20854 = state_20777__$1;
(statearr_20814_20854[(2)] = null);

(statearr_20814_20854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (18))){
var inst_20747 = (state_20777[(2)]);
var state_20777__$1 = state_20777;
var statearr_20815_20855 = state_20777__$1;
(statearr_20815_20855[(2)] = inst_20747);

(statearr_20815_20855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20778 === (8))){
var inst_20721 = (state_20777[(12)]);
var inst_20720 = (state_20777[(15)]);
var inst_20723 = (inst_20721 < inst_20720);
var inst_20724 = inst_20723;
var state_20777__$1 = state_20777;
if(cljs.core.truth_(inst_20724)){
var statearr_20816_20856 = state_20777__$1;
(statearr_20816_20856[(1)] = (10));

} else {
var statearr_20817_20857 = state_20777__$1;
(statearr_20817_20857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___20829,mults,ensure_mult,p))
;
return ((function (switch__18818__auto__,c__18930__auto___20829,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_20821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20821[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_20821[(1)] = (1));

return statearr_20821;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_20777){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20822){if((e20822 instanceof Object)){
var ex__18822__auto__ = e20822;
var statearr_20823_20858 = state_20777;
(statearr_20823_20858[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20859 = state_20777;
state_20777 = G__20859;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_20777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_20777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___20829,mults,ensure_mult,p))
})();
var state__18932__auto__ = (function (){var statearr_20824 = f__18931__auto__.call(null);
(statearr_20824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___20829);

return statearr_20824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___20829,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20860 = [];
var len__17821__auto___20863 = arguments.length;
var i__17822__auto___20864 = (0);
while(true){
if((i__17822__auto___20864 < len__17821__auto___20863)){
args20860.push((arguments[i__17822__auto___20864]));

var G__20865 = (i__17822__auto___20864 + (1));
i__17822__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var G__20862 = args20860.length;
switch (G__20862) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20860.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20867 = [];
var len__17821__auto___20870 = arguments.length;
var i__17822__auto___20871 = (0);
while(true){
if((i__17822__auto___20871 < len__17821__auto___20870)){
args20867.push((arguments[i__17822__auto___20871]));

var G__20872 = (i__17822__auto___20871 + (1));
i__17822__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var G__20869 = args20867.length;
switch (G__20869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20867.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20874 = [];
var len__17821__auto___20945 = arguments.length;
var i__17822__auto___20946 = (0);
while(true){
if((i__17822__auto___20946 < len__17821__auto___20945)){
args20874.push((arguments[i__17822__auto___20946]));

var G__20947 = (i__17822__auto___20946 + (1));
i__17822__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var G__20876 = args20874.length;
switch (G__20876) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20874.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18930__auto___20949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___20949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___20949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20915){
var state_val_20916 = (state_20915[(1)]);
if((state_val_20916 === (7))){
var state_20915__$1 = state_20915;
var statearr_20917_20950 = state_20915__$1;
(statearr_20917_20950[(2)] = null);

(statearr_20917_20950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (1))){
var state_20915__$1 = state_20915;
var statearr_20918_20951 = state_20915__$1;
(statearr_20918_20951[(2)] = null);

(statearr_20918_20951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (4))){
var inst_20879 = (state_20915[(7)]);
var inst_20881 = (inst_20879 < cnt);
var state_20915__$1 = state_20915;
if(cljs.core.truth_(inst_20881)){
var statearr_20919_20952 = state_20915__$1;
(statearr_20919_20952[(1)] = (6));

} else {
var statearr_20920_20953 = state_20915__$1;
(statearr_20920_20953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (15))){
var inst_20911 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20921_20954 = state_20915__$1;
(statearr_20921_20954[(2)] = inst_20911);

(statearr_20921_20954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (13))){
var inst_20904 = cljs.core.async.close_BANG_.call(null,out);
var state_20915__$1 = state_20915;
var statearr_20922_20955 = state_20915__$1;
(statearr_20922_20955[(2)] = inst_20904);

(statearr_20922_20955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (6))){
var state_20915__$1 = state_20915;
var statearr_20923_20956 = state_20915__$1;
(statearr_20923_20956[(2)] = null);

(statearr_20923_20956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (3))){
var inst_20913 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20915__$1,inst_20913);
} else {
if((state_val_20916 === (12))){
var inst_20901 = (state_20915[(8)]);
var inst_20901__$1 = (state_20915[(2)]);
var inst_20902 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20901__$1);
var state_20915__$1 = (function (){var statearr_20924 = state_20915;
(statearr_20924[(8)] = inst_20901__$1);

return statearr_20924;
})();
if(cljs.core.truth_(inst_20902)){
var statearr_20925_20957 = state_20915__$1;
(statearr_20925_20957[(1)] = (13));

} else {
var statearr_20926_20958 = state_20915__$1;
(statearr_20926_20958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (2))){
var inst_20878 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20879 = (0);
var state_20915__$1 = (function (){var statearr_20927 = state_20915;
(statearr_20927[(9)] = inst_20878);

(statearr_20927[(7)] = inst_20879);

return statearr_20927;
})();
var statearr_20928_20959 = state_20915__$1;
(statearr_20928_20959[(2)] = null);

(statearr_20928_20959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (11))){
var inst_20879 = (state_20915[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20915,(10),Object,null,(9));
var inst_20888 = chs__$1.call(null,inst_20879);
var inst_20889 = done.call(null,inst_20879);
var inst_20890 = cljs.core.async.take_BANG_.call(null,inst_20888,inst_20889);
var state_20915__$1 = state_20915;
var statearr_20929_20960 = state_20915__$1;
(statearr_20929_20960[(2)] = inst_20890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (9))){
var inst_20879 = (state_20915[(7)]);
var inst_20892 = (state_20915[(2)]);
var inst_20893 = (inst_20879 + (1));
var inst_20879__$1 = inst_20893;
var state_20915__$1 = (function (){var statearr_20930 = state_20915;
(statearr_20930[(10)] = inst_20892);

(statearr_20930[(7)] = inst_20879__$1);

return statearr_20930;
})();
var statearr_20931_20961 = state_20915__$1;
(statearr_20931_20961[(2)] = null);

(statearr_20931_20961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (5))){
var inst_20899 = (state_20915[(2)]);
var state_20915__$1 = (function (){var statearr_20932 = state_20915;
(statearr_20932[(11)] = inst_20899);

return statearr_20932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20915__$1,(12),dchan);
} else {
if((state_val_20916 === (14))){
var inst_20901 = (state_20915[(8)]);
var inst_20906 = cljs.core.apply.call(null,f,inst_20901);
var state_20915__$1 = state_20915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20915__$1,(16),out,inst_20906);
} else {
if((state_val_20916 === (16))){
var inst_20908 = (state_20915[(2)]);
var state_20915__$1 = (function (){var statearr_20933 = state_20915;
(statearr_20933[(12)] = inst_20908);

return statearr_20933;
})();
var statearr_20934_20962 = state_20915__$1;
(statearr_20934_20962[(2)] = null);

(statearr_20934_20962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (10))){
var inst_20883 = (state_20915[(2)]);
var inst_20884 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20915__$1 = (function (){var statearr_20935 = state_20915;
(statearr_20935[(13)] = inst_20883);

return statearr_20935;
})();
var statearr_20936_20963 = state_20915__$1;
(statearr_20936_20963[(2)] = inst_20884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (8))){
var inst_20897 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20937_20964 = state_20915__$1;
(statearr_20937_20964[(2)] = inst_20897);

(statearr_20937_20964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___20949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18818__auto__,c__18930__auto___20949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_20941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20941[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_20941[(1)] = (1));

return statearr_20941;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_20915){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20942){if((e20942 instanceof Object)){
var ex__18822__auto__ = e20942;
var statearr_20943_20965 = state_20915;
(statearr_20943_20965[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20966 = state_20915;
state_20915 = G__20966;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_20915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_20915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___20949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18932__auto__ = (function (){var statearr_20944 = f__18931__auto__.call(null);
(statearr_20944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___20949);

return statearr_20944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___20949,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args20968 = [];
var len__17821__auto___21024 = arguments.length;
var i__17822__auto___21025 = (0);
while(true){
if((i__17822__auto___21025 < len__17821__auto___21024)){
args20968.push((arguments[i__17822__auto___21025]));

var G__21026 = (i__17822__auto___21025 + (1));
i__17822__auto___21025 = G__21026;
continue;
} else {
}
break;
}

var G__20970 = args20968.length;
switch (G__20970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20968.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18930__auto___21028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___21028,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___21028,out){
return (function (state_21000){
var state_val_21001 = (state_21000[(1)]);
if((state_val_21001 === (7))){
var inst_20979 = (state_21000[(7)]);
var inst_20980 = (state_21000[(8)]);
var inst_20979__$1 = (state_21000[(2)]);
var inst_20980__$1 = cljs.core.nth.call(null,inst_20979__$1,(0),null);
var inst_20981 = cljs.core.nth.call(null,inst_20979__$1,(1),null);
var inst_20982 = (inst_20980__$1 == null);
var state_21000__$1 = (function (){var statearr_21002 = state_21000;
(statearr_21002[(9)] = inst_20981);

(statearr_21002[(7)] = inst_20979__$1);

(statearr_21002[(8)] = inst_20980__$1);

return statearr_21002;
})();
if(cljs.core.truth_(inst_20982)){
var statearr_21003_21029 = state_21000__$1;
(statearr_21003_21029[(1)] = (8));

} else {
var statearr_21004_21030 = state_21000__$1;
(statearr_21004_21030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (1))){
var inst_20971 = cljs.core.vec.call(null,chs);
var inst_20972 = inst_20971;
var state_21000__$1 = (function (){var statearr_21005 = state_21000;
(statearr_21005[(10)] = inst_20972);

return statearr_21005;
})();
var statearr_21006_21031 = state_21000__$1;
(statearr_21006_21031[(2)] = null);

(statearr_21006_21031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (4))){
var inst_20972 = (state_21000[(10)]);
var state_21000__$1 = state_21000;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21000__$1,(7),inst_20972);
} else {
if((state_val_21001 === (6))){
var inst_20996 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21007_21032 = state_21000__$1;
(statearr_21007_21032[(2)] = inst_20996);

(statearr_21007_21032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (3))){
var inst_20998 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21000__$1,inst_20998);
} else {
if((state_val_21001 === (2))){
var inst_20972 = (state_21000[(10)]);
var inst_20974 = cljs.core.count.call(null,inst_20972);
var inst_20975 = (inst_20974 > (0));
var state_21000__$1 = state_21000;
if(cljs.core.truth_(inst_20975)){
var statearr_21009_21033 = state_21000__$1;
(statearr_21009_21033[(1)] = (4));

} else {
var statearr_21010_21034 = state_21000__$1;
(statearr_21010_21034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (11))){
var inst_20972 = (state_21000[(10)]);
var inst_20989 = (state_21000[(2)]);
var tmp21008 = inst_20972;
var inst_20972__$1 = tmp21008;
var state_21000__$1 = (function (){var statearr_21011 = state_21000;
(statearr_21011[(11)] = inst_20989);

(statearr_21011[(10)] = inst_20972__$1);

return statearr_21011;
})();
var statearr_21012_21035 = state_21000__$1;
(statearr_21012_21035[(2)] = null);

(statearr_21012_21035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (9))){
var inst_20980 = (state_21000[(8)]);
var state_21000__$1 = state_21000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21000__$1,(11),out,inst_20980);
} else {
if((state_val_21001 === (5))){
var inst_20994 = cljs.core.async.close_BANG_.call(null,out);
var state_21000__$1 = state_21000;
var statearr_21013_21036 = state_21000__$1;
(statearr_21013_21036[(2)] = inst_20994);

(statearr_21013_21036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (10))){
var inst_20992 = (state_21000[(2)]);
var state_21000__$1 = state_21000;
var statearr_21014_21037 = state_21000__$1;
(statearr_21014_21037[(2)] = inst_20992);

(statearr_21014_21037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21001 === (8))){
var inst_20981 = (state_21000[(9)]);
var inst_20979 = (state_21000[(7)]);
var inst_20972 = (state_21000[(10)]);
var inst_20980 = (state_21000[(8)]);
var inst_20984 = (function (){var cs = inst_20972;
var vec__20977 = inst_20979;
var v = inst_20980;
var c = inst_20981;
return ((function (cs,vec__20977,v,c,inst_20981,inst_20979,inst_20972,inst_20980,state_val_21001,c__18930__auto___21028,out){
return (function (p1__20967_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20967_SHARP_);
});
;})(cs,vec__20977,v,c,inst_20981,inst_20979,inst_20972,inst_20980,state_val_21001,c__18930__auto___21028,out))
})();
var inst_20985 = cljs.core.filterv.call(null,inst_20984,inst_20972);
var inst_20972__$1 = inst_20985;
var state_21000__$1 = (function (){var statearr_21015 = state_21000;
(statearr_21015[(10)] = inst_20972__$1);

return statearr_21015;
})();
var statearr_21016_21038 = state_21000__$1;
(statearr_21016_21038[(2)] = null);

(statearr_21016_21038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___21028,out))
;
return ((function (switch__18818__auto__,c__18930__auto___21028,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21020[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21020[(1)] = (1));

return statearr_21020;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21000){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21021){if((e21021 instanceof Object)){
var ex__18822__auto__ = e21021;
var statearr_21022_21039 = state_21000;
(statearr_21022_21039[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21040 = state_21000;
state_21000 = G__21040;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___21028,out))
})();
var state__18932__auto__ = (function (){var statearr_21023 = f__18931__auto__.call(null);
(statearr_21023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___21028);

return statearr_21023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___21028,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21041 = [];
var len__17821__auto___21090 = arguments.length;
var i__17822__auto___21091 = (0);
while(true){
if((i__17822__auto___21091 < len__17821__auto___21090)){
args21041.push((arguments[i__17822__auto___21091]));

var G__21092 = (i__17822__auto___21091 + (1));
i__17822__auto___21091 = G__21092;
continue;
} else {
}
break;
}

var G__21043 = args21041.length;
switch (G__21043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21041.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18930__auto___21094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___21094,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___21094,out){
return (function (state_21067){
var state_val_21068 = (state_21067[(1)]);
if((state_val_21068 === (7))){
var inst_21049 = (state_21067[(7)]);
var inst_21049__$1 = (state_21067[(2)]);
var inst_21050 = (inst_21049__$1 == null);
var inst_21051 = cljs.core.not.call(null,inst_21050);
var state_21067__$1 = (function (){var statearr_21069 = state_21067;
(statearr_21069[(7)] = inst_21049__$1);

return statearr_21069;
})();
if(inst_21051){
var statearr_21070_21095 = state_21067__$1;
(statearr_21070_21095[(1)] = (8));

} else {
var statearr_21071_21096 = state_21067__$1;
(statearr_21071_21096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (1))){
var inst_21044 = (0);
var state_21067__$1 = (function (){var statearr_21072 = state_21067;
(statearr_21072[(8)] = inst_21044);

return statearr_21072;
})();
var statearr_21073_21097 = state_21067__$1;
(statearr_21073_21097[(2)] = null);

(statearr_21073_21097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (4))){
var state_21067__$1 = state_21067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21067__$1,(7),ch);
} else {
if((state_val_21068 === (6))){
var inst_21062 = (state_21067[(2)]);
var state_21067__$1 = state_21067;
var statearr_21074_21098 = state_21067__$1;
(statearr_21074_21098[(2)] = inst_21062);

(statearr_21074_21098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (3))){
var inst_21064 = (state_21067[(2)]);
var inst_21065 = cljs.core.async.close_BANG_.call(null,out);
var state_21067__$1 = (function (){var statearr_21075 = state_21067;
(statearr_21075[(9)] = inst_21064);

return statearr_21075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21067__$1,inst_21065);
} else {
if((state_val_21068 === (2))){
var inst_21044 = (state_21067[(8)]);
var inst_21046 = (inst_21044 < n);
var state_21067__$1 = state_21067;
if(cljs.core.truth_(inst_21046)){
var statearr_21076_21099 = state_21067__$1;
(statearr_21076_21099[(1)] = (4));

} else {
var statearr_21077_21100 = state_21067__$1;
(statearr_21077_21100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (11))){
var inst_21044 = (state_21067[(8)]);
var inst_21054 = (state_21067[(2)]);
var inst_21055 = (inst_21044 + (1));
var inst_21044__$1 = inst_21055;
var state_21067__$1 = (function (){var statearr_21078 = state_21067;
(statearr_21078[(10)] = inst_21054);

(statearr_21078[(8)] = inst_21044__$1);

return statearr_21078;
})();
var statearr_21079_21101 = state_21067__$1;
(statearr_21079_21101[(2)] = null);

(statearr_21079_21101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (9))){
var state_21067__$1 = state_21067;
var statearr_21080_21102 = state_21067__$1;
(statearr_21080_21102[(2)] = null);

(statearr_21080_21102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (5))){
var state_21067__$1 = state_21067;
var statearr_21081_21103 = state_21067__$1;
(statearr_21081_21103[(2)] = null);

(statearr_21081_21103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (10))){
var inst_21059 = (state_21067[(2)]);
var state_21067__$1 = state_21067;
var statearr_21082_21104 = state_21067__$1;
(statearr_21082_21104[(2)] = inst_21059);

(statearr_21082_21104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21068 === (8))){
var inst_21049 = (state_21067[(7)]);
var state_21067__$1 = state_21067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21067__$1,(11),out,inst_21049);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___21094,out))
;
return ((function (switch__18818__auto__,c__18930__auto___21094,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21086[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21086[(1)] = (1));

return statearr_21086;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21067){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21087){if((e21087 instanceof Object)){
var ex__18822__auto__ = e21087;
var statearr_21088_21105 = state_21067;
(statearr_21088_21105[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21106 = state_21067;
state_21067 = G__21106;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___21094,out))
})();
var state__18932__auto__ = (function (){var statearr_21089 = f__18931__auto__.call(null);
(statearr_21089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___21094);

return statearr_21089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___21094,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21114 = (function (map_LT_,f,ch,meta21115){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21115 = meta21115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21116,meta21115__$1){
var self__ = this;
var _21116__$1 = this;
return (new cljs.core.async.t_cljs$core$async21114(self__.map_LT_,self__.f,self__.ch,meta21115__$1));
});

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21116){
var self__ = this;
var _21116__$1 = this;
return self__.meta21115;
});

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21117 = (function (map_LT_,f,ch,meta21115,_,fn1,meta21118){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21115 = meta21115;
this._ = _;
this.fn1 = fn1;
this.meta21118 = meta21118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21119,meta21118__$1){
var self__ = this;
var _21119__$1 = this;
return (new cljs.core.async.t_cljs$core$async21117(self__.map_LT_,self__.f,self__.ch,self__.meta21115,self__._,self__.fn1,meta21118__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21119){
var self__ = this;
var _21119__$1 = this;
return self__.meta21118;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21107_SHARP_){
return f1.call(null,(((p1__21107_SHARP_ == null))?null:self__.f.call(null,p1__21107_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21117.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21115","meta21115",-140903145,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21114","cljs.core.async/t_cljs$core$async21114",-1804733822,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21118","meta21118",1983100157,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21117";

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async21117");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21117 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21117(map_LT___$1,f__$1,ch__$1,meta21115__$1,___$2,fn1__$1,meta21118){
return (new cljs.core.async.t_cljs$core$async21117(map_LT___$1,f__$1,ch__$1,meta21115__$1,___$2,fn1__$1,meta21118));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21117(self__.map_LT_,self__.f,self__.ch,self__.meta21115,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16751__auto__ = ret;
if(cljs.core.truth_(and__16751__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16751__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21115","meta21115",-140903145,null)], null);
});

cljs.core.async.t_cljs$core$async21114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21114";

cljs.core.async.t_cljs$core$async21114.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async21114");
});

cljs.core.async.__GT_t_cljs$core$async21114 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21114(map_LT___$1,f__$1,ch__$1,meta21115){
return (new cljs.core.async.t_cljs$core$async21114(map_LT___$1,f__$1,ch__$1,meta21115));
});

}

return (new cljs.core.async.t_cljs$core$async21114(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21123 = (function (map_GT_,f,ch,meta21124){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new cljs.core.async.t_cljs$core$async21123(self__.map_GT_,self__.f,self__.ch,meta21124__$1));
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null)], null);
});

cljs.core.async.t_cljs$core$async21123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21123";

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async21123");
});

cljs.core.async.__GT_t_cljs$core$async21123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21123(map_GT___$1,f__$1,ch__$1,meta21124){
return (new cljs.core.async.t_cljs$core$async21123(map_GT___$1,f__$1,ch__$1,meta21124));
});

}

return (new cljs.core.async.t_cljs$core$async21123(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21129 = (function (filter_GT_,p,ch,meta21130){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21130 = meta21130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21131,meta21130__$1){
var self__ = this;
var _21131__$1 = this;
return (new cljs.core.async.t_cljs$core$async21129(self__.filter_GT_,self__.p,self__.ch,meta21130__$1));
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21131){
var self__ = this;
var _21131__$1 = this;
return self__.meta21130;
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21130","meta21130",2096892009,null)], null);
});

cljs.core.async.t_cljs$core$async21129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21129";

cljs.core.async.t_cljs$core$async21129.cljs$lang$ctorPrWriter = (function (this__17361__auto__,writer__17362__auto__,opt__17363__auto__){
return cljs.core._write.call(null,writer__17362__auto__,"cljs.core.async/t_cljs$core$async21129");
});

cljs.core.async.__GT_t_cljs$core$async21129 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21129(filter_GT___$1,p__$1,ch__$1,meta21130){
return (new cljs.core.async.t_cljs$core$async21129(filter_GT___$1,p__$1,ch__$1,meta21130));
});

}

return (new cljs.core.async.t_cljs$core$async21129(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21132 = [];
var len__17821__auto___21176 = arguments.length;
var i__17822__auto___21177 = (0);
while(true){
if((i__17822__auto___21177 < len__17821__auto___21176)){
args21132.push((arguments[i__17822__auto___21177]));

var G__21178 = (i__17822__auto___21177 + (1));
i__17822__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var G__21134 = args21132.length;
switch (G__21134) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21132.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18930__auto___21180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___21180,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___21180,out){
return (function (state_21155){
var state_val_21156 = (state_21155[(1)]);
if((state_val_21156 === (7))){
var inst_21151 = (state_21155[(2)]);
var state_21155__$1 = state_21155;
var statearr_21157_21181 = state_21155__$1;
(statearr_21157_21181[(2)] = inst_21151);

(statearr_21157_21181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (1))){
var state_21155__$1 = state_21155;
var statearr_21158_21182 = state_21155__$1;
(statearr_21158_21182[(2)] = null);

(statearr_21158_21182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (4))){
var inst_21137 = (state_21155[(7)]);
var inst_21137__$1 = (state_21155[(2)]);
var inst_21138 = (inst_21137__$1 == null);
var state_21155__$1 = (function (){var statearr_21159 = state_21155;
(statearr_21159[(7)] = inst_21137__$1);

return statearr_21159;
})();
if(cljs.core.truth_(inst_21138)){
var statearr_21160_21183 = state_21155__$1;
(statearr_21160_21183[(1)] = (5));

} else {
var statearr_21161_21184 = state_21155__$1;
(statearr_21161_21184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (6))){
var inst_21137 = (state_21155[(7)]);
var inst_21142 = p.call(null,inst_21137);
var state_21155__$1 = state_21155;
if(cljs.core.truth_(inst_21142)){
var statearr_21162_21185 = state_21155__$1;
(statearr_21162_21185[(1)] = (8));

} else {
var statearr_21163_21186 = state_21155__$1;
(statearr_21163_21186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (3))){
var inst_21153 = (state_21155[(2)]);
var state_21155__$1 = state_21155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21155__$1,inst_21153);
} else {
if((state_val_21156 === (2))){
var state_21155__$1 = state_21155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21155__$1,(4),ch);
} else {
if((state_val_21156 === (11))){
var inst_21145 = (state_21155[(2)]);
var state_21155__$1 = state_21155;
var statearr_21164_21187 = state_21155__$1;
(statearr_21164_21187[(2)] = inst_21145);

(statearr_21164_21187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (9))){
var state_21155__$1 = state_21155;
var statearr_21165_21188 = state_21155__$1;
(statearr_21165_21188[(2)] = null);

(statearr_21165_21188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (5))){
var inst_21140 = cljs.core.async.close_BANG_.call(null,out);
var state_21155__$1 = state_21155;
var statearr_21166_21189 = state_21155__$1;
(statearr_21166_21189[(2)] = inst_21140);

(statearr_21166_21189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (10))){
var inst_21148 = (state_21155[(2)]);
var state_21155__$1 = (function (){var statearr_21167 = state_21155;
(statearr_21167[(8)] = inst_21148);

return statearr_21167;
})();
var statearr_21168_21190 = state_21155__$1;
(statearr_21168_21190[(2)] = null);

(statearr_21168_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21156 === (8))){
var inst_21137 = (state_21155[(7)]);
var state_21155__$1 = state_21155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21155__$1,(11),out,inst_21137);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___21180,out))
;
return ((function (switch__18818__auto__,c__18930__auto___21180,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21172 = [null,null,null,null,null,null,null,null,null];
(statearr_21172[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21172[(1)] = (1));

return statearr_21172;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21155){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21173){if((e21173 instanceof Object)){
var ex__18822__auto__ = e21173;
var statearr_21174_21191 = state_21155;
(statearr_21174_21191[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21192 = state_21155;
state_21155 = G__21192;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___21180,out))
})();
var state__18932__auto__ = (function (){var statearr_21175 = f__18931__auto__.call(null);
(statearr_21175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___21180);

return statearr_21175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___21180,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21193 = [];
var len__17821__auto___21196 = arguments.length;
var i__17822__auto___21197 = (0);
while(true){
if((i__17822__auto___21197 < len__17821__auto___21196)){
args21193.push((arguments[i__17822__auto___21197]));

var G__21198 = (i__17822__auto___21197 + (1));
i__17822__auto___21197 = G__21198;
continue;
} else {
}
break;
}

var G__21195 = args21193.length;
switch (G__21195) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21193.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_21365){
var state_val_21366 = (state_21365[(1)]);
if((state_val_21366 === (7))){
var inst_21361 = (state_21365[(2)]);
var state_21365__$1 = state_21365;
var statearr_21367_21408 = state_21365__$1;
(statearr_21367_21408[(2)] = inst_21361);

(statearr_21367_21408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (20))){
var inst_21331 = (state_21365[(7)]);
var inst_21342 = (state_21365[(2)]);
var inst_21343 = cljs.core.next.call(null,inst_21331);
var inst_21317 = inst_21343;
var inst_21318 = null;
var inst_21319 = (0);
var inst_21320 = (0);
var state_21365__$1 = (function (){var statearr_21368 = state_21365;
(statearr_21368[(8)] = inst_21319);

(statearr_21368[(9)] = inst_21320);

(statearr_21368[(10)] = inst_21318);

(statearr_21368[(11)] = inst_21317);

(statearr_21368[(12)] = inst_21342);

return statearr_21368;
})();
var statearr_21369_21409 = state_21365__$1;
(statearr_21369_21409[(2)] = null);

(statearr_21369_21409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (1))){
var state_21365__$1 = state_21365;
var statearr_21370_21410 = state_21365__$1;
(statearr_21370_21410[(2)] = null);

(statearr_21370_21410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (4))){
var inst_21306 = (state_21365[(13)]);
var inst_21306__$1 = (state_21365[(2)]);
var inst_21307 = (inst_21306__$1 == null);
var state_21365__$1 = (function (){var statearr_21371 = state_21365;
(statearr_21371[(13)] = inst_21306__$1);

return statearr_21371;
})();
if(cljs.core.truth_(inst_21307)){
var statearr_21372_21411 = state_21365__$1;
(statearr_21372_21411[(1)] = (5));

} else {
var statearr_21373_21412 = state_21365__$1;
(statearr_21373_21412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (15))){
var state_21365__$1 = state_21365;
var statearr_21377_21413 = state_21365__$1;
(statearr_21377_21413[(2)] = null);

(statearr_21377_21413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (21))){
var state_21365__$1 = state_21365;
var statearr_21378_21414 = state_21365__$1;
(statearr_21378_21414[(2)] = null);

(statearr_21378_21414[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (13))){
var inst_21319 = (state_21365[(8)]);
var inst_21320 = (state_21365[(9)]);
var inst_21318 = (state_21365[(10)]);
var inst_21317 = (state_21365[(11)]);
var inst_21327 = (state_21365[(2)]);
var inst_21328 = (inst_21320 + (1));
var tmp21374 = inst_21319;
var tmp21375 = inst_21318;
var tmp21376 = inst_21317;
var inst_21317__$1 = tmp21376;
var inst_21318__$1 = tmp21375;
var inst_21319__$1 = tmp21374;
var inst_21320__$1 = inst_21328;
var state_21365__$1 = (function (){var statearr_21379 = state_21365;
(statearr_21379[(8)] = inst_21319__$1);

(statearr_21379[(14)] = inst_21327);

(statearr_21379[(9)] = inst_21320__$1);

(statearr_21379[(10)] = inst_21318__$1);

(statearr_21379[(11)] = inst_21317__$1);

return statearr_21379;
})();
var statearr_21380_21415 = state_21365__$1;
(statearr_21380_21415[(2)] = null);

(statearr_21380_21415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (22))){
var state_21365__$1 = state_21365;
var statearr_21381_21416 = state_21365__$1;
(statearr_21381_21416[(2)] = null);

(statearr_21381_21416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (6))){
var inst_21306 = (state_21365[(13)]);
var inst_21315 = f.call(null,inst_21306);
var inst_21316 = cljs.core.seq.call(null,inst_21315);
var inst_21317 = inst_21316;
var inst_21318 = null;
var inst_21319 = (0);
var inst_21320 = (0);
var state_21365__$1 = (function (){var statearr_21382 = state_21365;
(statearr_21382[(8)] = inst_21319);

(statearr_21382[(9)] = inst_21320);

(statearr_21382[(10)] = inst_21318);

(statearr_21382[(11)] = inst_21317);

return statearr_21382;
})();
var statearr_21383_21417 = state_21365__$1;
(statearr_21383_21417[(2)] = null);

(statearr_21383_21417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (17))){
var inst_21331 = (state_21365[(7)]);
var inst_21335 = cljs.core.chunk_first.call(null,inst_21331);
var inst_21336 = cljs.core.chunk_rest.call(null,inst_21331);
var inst_21337 = cljs.core.count.call(null,inst_21335);
var inst_21317 = inst_21336;
var inst_21318 = inst_21335;
var inst_21319 = inst_21337;
var inst_21320 = (0);
var state_21365__$1 = (function (){var statearr_21384 = state_21365;
(statearr_21384[(8)] = inst_21319);

(statearr_21384[(9)] = inst_21320);

(statearr_21384[(10)] = inst_21318);

(statearr_21384[(11)] = inst_21317);

return statearr_21384;
})();
var statearr_21385_21418 = state_21365__$1;
(statearr_21385_21418[(2)] = null);

(statearr_21385_21418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (3))){
var inst_21363 = (state_21365[(2)]);
var state_21365__$1 = state_21365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21365__$1,inst_21363);
} else {
if((state_val_21366 === (12))){
var inst_21351 = (state_21365[(2)]);
var state_21365__$1 = state_21365;
var statearr_21386_21419 = state_21365__$1;
(statearr_21386_21419[(2)] = inst_21351);

(statearr_21386_21419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (2))){
var state_21365__$1 = state_21365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21365__$1,(4),in$);
} else {
if((state_val_21366 === (23))){
var inst_21359 = (state_21365[(2)]);
var state_21365__$1 = state_21365;
var statearr_21387_21420 = state_21365__$1;
(statearr_21387_21420[(2)] = inst_21359);

(statearr_21387_21420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (19))){
var inst_21346 = (state_21365[(2)]);
var state_21365__$1 = state_21365;
var statearr_21388_21421 = state_21365__$1;
(statearr_21388_21421[(2)] = inst_21346);

(statearr_21388_21421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (11))){
var inst_21317 = (state_21365[(11)]);
var inst_21331 = (state_21365[(7)]);
var inst_21331__$1 = cljs.core.seq.call(null,inst_21317);
var state_21365__$1 = (function (){var statearr_21389 = state_21365;
(statearr_21389[(7)] = inst_21331__$1);

return statearr_21389;
})();
if(inst_21331__$1){
var statearr_21390_21422 = state_21365__$1;
(statearr_21390_21422[(1)] = (14));

} else {
var statearr_21391_21423 = state_21365__$1;
(statearr_21391_21423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (9))){
var inst_21353 = (state_21365[(2)]);
var inst_21354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21365__$1 = (function (){var statearr_21392 = state_21365;
(statearr_21392[(15)] = inst_21353);

return statearr_21392;
})();
if(cljs.core.truth_(inst_21354)){
var statearr_21393_21424 = state_21365__$1;
(statearr_21393_21424[(1)] = (21));

} else {
var statearr_21394_21425 = state_21365__$1;
(statearr_21394_21425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (5))){
var inst_21309 = cljs.core.async.close_BANG_.call(null,out);
var state_21365__$1 = state_21365;
var statearr_21395_21426 = state_21365__$1;
(statearr_21395_21426[(2)] = inst_21309);

(statearr_21395_21426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (14))){
var inst_21331 = (state_21365[(7)]);
var inst_21333 = cljs.core.chunked_seq_QMARK_.call(null,inst_21331);
var state_21365__$1 = state_21365;
if(inst_21333){
var statearr_21396_21427 = state_21365__$1;
(statearr_21396_21427[(1)] = (17));

} else {
var statearr_21397_21428 = state_21365__$1;
(statearr_21397_21428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (16))){
var inst_21349 = (state_21365[(2)]);
var state_21365__$1 = state_21365;
var statearr_21398_21429 = state_21365__$1;
(statearr_21398_21429[(2)] = inst_21349);

(statearr_21398_21429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21366 === (10))){
var inst_21320 = (state_21365[(9)]);
var inst_21318 = (state_21365[(10)]);
var inst_21325 = cljs.core._nth.call(null,inst_21318,inst_21320);
var state_21365__$1 = state_21365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21365__$1,(13),out,inst_21325);
} else {
if((state_val_21366 === (18))){
var inst_21331 = (state_21365[(7)]);
var inst_21340 = cljs.core.first.call(null,inst_21331);
var state_21365__$1 = state_21365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21365__$1,(20),out,inst_21340);
} else {
if((state_val_21366 === (8))){
var inst_21319 = (state_21365[(8)]);
var inst_21320 = (state_21365[(9)]);
var inst_21322 = (inst_21320 < inst_21319);
var inst_21323 = inst_21322;
var state_21365__$1 = state_21365;
if(cljs.core.truth_(inst_21323)){
var statearr_21399_21430 = state_21365__$1;
(statearr_21399_21430[(1)] = (10));

} else {
var statearr_21400_21431 = state_21365__$1;
(statearr_21400_21431[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_21404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21404[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__);

(statearr_21404[(1)] = (1));

return statearr_21404;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____1 = (function (state_21365){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21405){if((e21405 instanceof Object)){
var ex__18822__auto__ = e21405;
var statearr_21406_21432 = state_21365;
(statearr_21406_21432[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21433 = state_21365;
state_21365 = G__21433;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__ = function(state_21365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____1.call(this,state_21365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_21407 = f__18931__auto__.call(null);
(statearr_21407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_21407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21434 = [];
var len__17821__auto___21437 = arguments.length;
var i__17822__auto___21438 = (0);
while(true){
if((i__17822__auto___21438 < len__17821__auto___21437)){
args21434.push((arguments[i__17822__auto___21438]));

var G__21439 = (i__17822__auto___21438 + (1));
i__17822__auto___21438 = G__21439;
continue;
} else {
}
break;
}

var G__21436 = args21434.length;
switch (G__21436) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21434.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21441 = [];
var len__17821__auto___21444 = arguments.length;
var i__17822__auto___21445 = (0);
while(true){
if((i__17822__auto___21445 < len__17821__auto___21444)){
args21441.push((arguments[i__17822__auto___21445]));

var G__21446 = (i__17822__auto___21445 + (1));
i__17822__auto___21445 = G__21446;
continue;
} else {
}
break;
}

var G__21443 = args21441.length;
switch (G__21443) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21441.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21448 = [];
var len__17821__auto___21499 = arguments.length;
var i__17822__auto___21500 = (0);
while(true){
if((i__17822__auto___21500 < len__17821__auto___21499)){
args21448.push((arguments[i__17822__auto___21500]));

var G__21501 = (i__17822__auto___21500 + (1));
i__17822__auto___21500 = G__21501;
continue;
} else {
}
break;
}

var G__21450 = args21448.length;
switch (G__21450) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21448.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18930__auto___21503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___21503,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___21503,out){
return (function (state_21474){
var state_val_21475 = (state_21474[(1)]);
if((state_val_21475 === (7))){
var inst_21469 = (state_21474[(2)]);
var state_21474__$1 = state_21474;
var statearr_21476_21504 = state_21474__$1;
(statearr_21476_21504[(2)] = inst_21469);

(statearr_21476_21504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (1))){
var inst_21451 = null;
var state_21474__$1 = (function (){var statearr_21477 = state_21474;
(statearr_21477[(7)] = inst_21451);

return statearr_21477;
})();
var statearr_21478_21505 = state_21474__$1;
(statearr_21478_21505[(2)] = null);

(statearr_21478_21505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (4))){
var inst_21454 = (state_21474[(8)]);
var inst_21454__$1 = (state_21474[(2)]);
var inst_21455 = (inst_21454__$1 == null);
var inst_21456 = cljs.core.not.call(null,inst_21455);
var state_21474__$1 = (function (){var statearr_21479 = state_21474;
(statearr_21479[(8)] = inst_21454__$1);

return statearr_21479;
})();
if(inst_21456){
var statearr_21480_21506 = state_21474__$1;
(statearr_21480_21506[(1)] = (5));

} else {
var statearr_21481_21507 = state_21474__$1;
(statearr_21481_21507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (6))){
var state_21474__$1 = state_21474;
var statearr_21482_21508 = state_21474__$1;
(statearr_21482_21508[(2)] = null);

(statearr_21482_21508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (3))){
var inst_21471 = (state_21474[(2)]);
var inst_21472 = cljs.core.async.close_BANG_.call(null,out);
var state_21474__$1 = (function (){var statearr_21483 = state_21474;
(statearr_21483[(9)] = inst_21471);

return statearr_21483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21474__$1,inst_21472);
} else {
if((state_val_21475 === (2))){
var state_21474__$1 = state_21474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21474__$1,(4),ch);
} else {
if((state_val_21475 === (11))){
var inst_21454 = (state_21474[(8)]);
var inst_21463 = (state_21474[(2)]);
var inst_21451 = inst_21454;
var state_21474__$1 = (function (){var statearr_21484 = state_21474;
(statearr_21484[(10)] = inst_21463);

(statearr_21484[(7)] = inst_21451);

return statearr_21484;
})();
var statearr_21485_21509 = state_21474__$1;
(statearr_21485_21509[(2)] = null);

(statearr_21485_21509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (9))){
var inst_21454 = (state_21474[(8)]);
var state_21474__$1 = state_21474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21474__$1,(11),out,inst_21454);
} else {
if((state_val_21475 === (5))){
var inst_21454 = (state_21474[(8)]);
var inst_21451 = (state_21474[(7)]);
var inst_21458 = cljs.core._EQ_.call(null,inst_21454,inst_21451);
var state_21474__$1 = state_21474;
if(inst_21458){
var statearr_21487_21510 = state_21474__$1;
(statearr_21487_21510[(1)] = (8));

} else {
var statearr_21488_21511 = state_21474__$1;
(statearr_21488_21511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (10))){
var inst_21466 = (state_21474[(2)]);
var state_21474__$1 = state_21474;
var statearr_21489_21512 = state_21474__$1;
(statearr_21489_21512[(2)] = inst_21466);

(statearr_21489_21512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21475 === (8))){
var inst_21451 = (state_21474[(7)]);
var tmp21486 = inst_21451;
var inst_21451__$1 = tmp21486;
var state_21474__$1 = (function (){var statearr_21490 = state_21474;
(statearr_21490[(7)] = inst_21451__$1);

return statearr_21490;
})();
var statearr_21491_21513 = state_21474__$1;
(statearr_21491_21513[(2)] = null);

(statearr_21491_21513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___21503,out))
;
return ((function (switch__18818__auto__,c__18930__auto___21503,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21495[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21495[(1)] = (1));

return statearr_21495;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21474){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21496){if((e21496 instanceof Object)){
var ex__18822__auto__ = e21496;
var statearr_21497_21514 = state_21474;
(statearr_21497_21514[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21515 = state_21474;
state_21474 = G__21515;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___21503,out))
})();
var state__18932__auto__ = (function (){var statearr_21498 = f__18931__auto__.call(null);
(statearr_21498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___21503);

return statearr_21498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___21503,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21516 = [];
var len__17821__auto___21586 = arguments.length;
var i__17822__auto___21587 = (0);
while(true){
if((i__17822__auto___21587 < len__17821__auto___21586)){
args21516.push((arguments[i__17822__auto___21587]));

var G__21588 = (i__17822__auto___21587 + (1));
i__17822__auto___21587 = G__21588;
continue;
} else {
}
break;
}

var G__21518 = args21516.length;
switch (G__21518) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21516.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18930__auto___21590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___21590,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___21590,out){
return (function (state_21556){
var state_val_21557 = (state_21556[(1)]);
if((state_val_21557 === (7))){
var inst_21552 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
var statearr_21558_21591 = state_21556__$1;
(statearr_21558_21591[(2)] = inst_21552);

(statearr_21558_21591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (1))){
var inst_21519 = (new Array(n));
var inst_21520 = inst_21519;
var inst_21521 = (0);
var state_21556__$1 = (function (){var statearr_21559 = state_21556;
(statearr_21559[(7)] = inst_21520);

(statearr_21559[(8)] = inst_21521);

return statearr_21559;
})();
var statearr_21560_21592 = state_21556__$1;
(statearr_21560_21592[(2)] = null);

(statearr_21560_21592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (4))){
var inst_21524 = (state_21556[(9)]);
var inst_21524__$1 = (state_21556[(2)]);
var inst_21525 = (inst_21524__$1 == null);
var inst_21526 = cljs.core.not.call(null,inst_21525);
var state_21556__$1 = (function (){var statearr_21561 = state_21556;
(statearr_21561[(9)] = inst_21524__$1);

return statearr_21561;
})();
if(inst_21526){
var statearr_21562_21593 = state_21556__$1;
(statearr_21562_21593[(1)] = (5));

} else {
var statearr_21563_21594 = state_21556__$1;
(statearr_21563_21594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (15))){
var inst_21546 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
var statearr_21564_21595 = state_21556__$1;
(statearr_21564_21595[(2)] = inst_21546);

(statearr_21564_21595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (13))){
var state_21556__$1 = state_21556;
var statearr_21565_21596 = state_21556__$1;
(statearr_21565_21596[(2)] = null);

(statearr_21565_21596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (6))){
var inst_21521 = (state_21556[(8)]);
var inst_21542 = (inst_21521 > (0));
var state_21556__$1 = state_21556;
if(cljs.core.truth_(inst_21542)){
var statearr_21566_21597 = state_21556__$1;
(statearr_21566_21597[(1)] = (12));

} else {
var statearr_21567_21598 = state_21556__$1;
(statearr_21567_21598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (3))){
var inst_21554 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21556__$1,inst_21554);
} else {
if((state_val_21557 === (12))){
var inst_21520 = (state_21556[(7)]);
var inst_21544 = cljs.core.vec.call(null,inst_21520);
var state_21556__$1 = state_21556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21556__$1,(15),out,inst_21544);
} else {
if((state_val_21557 === (2))){
var state_21556__$1 = state_21556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21556__$1,(4),ch);
} else {
if((state_val_21557 === (11))){
var inst_21536 = (state_21556[(2)]);
var inst_21537 = (new Array(n));
var inst_21520 = inst_21537;
var inst_21521 = (0);
var state_21556__$1 = (function (){var statearr_21568 = state_21556;
(statearr_21568[(7)] = inst_21520);

(statearr_21568[(10)] = inst_21536);

(statearr_21568[(8)] = inst_21521);

return statearr_21568;
})();
var statearr_21569_21599 = state_21556__$1;
(statearr_21569_21599[(2)] = null);

(statearr_21569_21599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (9))){
var inst_21520 = (state_21556[(7)]);
var inst_21534 = cljs.core.vec.call(null,inst_21520);
var state_21556__$1 = state_21556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21556__$1,(11),out,inst_21534);
} else {
if((state_val_21557 === (5))){
var inst_21524 = (state_21556[(9)]);
var inst_21529 = (state_21556[(11)]);
var inst_21520 = (state_21556[(7)]);
var inst_21521 = (state_21556[(8)]);
var inst_21528 = (inst_21520[inst_21521] = inst_21524);
var inst_21529__$1 = (inst_21521 + (1));
var inst_21530 = (inst_21529__$1 < n);
var state_21556__$1 = (function (){var statearr_21570 = state_21556;
(statearr_21570[(11)] = inst_21529__$1);

(statearr_21570[(12)] = inst_21528);

return statearr_21570;
})();
if(cljs.core.truth_(inst_21530)){
var statearr_21571_21600 = state_21556__$1;
(statearr_21571_21600[(1)] = (8));

} else {
var statearr_21572_21601 = state_21556__$1;
(statearr_21572_21601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (14))){
var inst_21549 = (state_21556[(2)]);
var inst_21550 = cljs.core.async.close_BANG_.call(null,out);
var state_21556__$1 = (function (){var statearr_21574 = state_21556;
(statearr_21574[(13)] = inst_21549);

return statearr_21574;
})();
var statearr_21575_21602 = state_21556__$1;
(statearr_21575_21602[(2)] = inst_21550);

(statearr_21575_21602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (10))){
var inst_21540 = (state_21556[(2)]);
var state_21556__$1 = state_21556;
var statearr_21576_21603 = state_21556__$1;
(statearr_21576_21603[(2)] = inst_21540);

(statearr_21576_21603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21557 === (8))){
var inst_21529 = (state_21556[(11)]);
var inst_21520 = (state_21556[(7)]);
var tmp21573 = inst_21520;
var inst_21520__$1 = tmp21573;
var inst_21521 = inst_21529;
var state_21556__$1 = (function (){var statearr_21577 = state_21556;
(statearr_21577[(7)] = inst_21520__$1);

(statearr_21577[(8)] = inst_21521);

return statearr_21577;
})();
var statearr_21578_21604 = state_21556__$1;
(statearr_21578_21604[(2)] = null);

(statearr_21578_21604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___21590,out))
;
return ((function (switch__18818__auto__,c__18930__auto___21590,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21582[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21582[(1)] = (1));

return statearr_21582;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21556){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21583){if((e21583 instanceof Object)){
var ex__18822__auto__ = e21583;
var statearr_21584_21605 = state_21556;
(statearr_21584_21605[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21606 = state_21556;
state_21556 = G__21606;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___21590,out))
})();
var state__18932__auto__ = (function (){var statearr_21585 = f__18931__auto__.call(null);
(statearr_21585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___21590);

return statearr_21585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___21590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21607 = [];
var len__17821__auto___21681 = arguments.length;
var i__17822__auto___21682 = (0);
while(true){
if((i__17822__auto___21682 < len__17821__auto___21681)){
args21607.push((arguments[i__17822__auto___21682]));

var G__21683 = (i__17822__auto___21682 + (1));
i__17822__auto___21682 = G__21683;
continue;
} else {
}
break;
}

var G__21609 = args21607.length;
switch (G__21609) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21607.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18930__auto___21685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___21685,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___21685,out){
return (function (state_21651){
var state_val_21652 = (state_21651[(1)]);
if((state_val_21652 === (7))){
var inst_21647 = (state_21651[(2)]);
var state_21651__$1 = state_21651;
var statearr_21653_21686 = state_21651__$1;
(statearr_21653_21686[(2)] = inst_21647);

(statearr_21653_21686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (1))){
var inst_21610 = [];
var inst_21611 = inst_21610;
var inst_21612 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21651__$1 = (function (){var statearr_21654 = state_21651;
(statearr_21654[(7)] = inst_21612);

(statearr_21654[(8)] = inst_21611);

return statearr_21654;
})();
var statearr_21655_21687 = state_21651__$1;
(statearr_21655_21687[(2)] = null);

(statearr_21655_21687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (4))){
var inst_21615 = (state_21651[(9)]);
var inst_21615__$1 = (state_21651[(2)]);
var inst_21616 = (inst_21615__$1 == null);
var inst_21617 = cljs.core.not.call(null,inst_21616);
var state_21651__$1 = (function (){var statearr_21656 = state_21651;
(statearr_21656[(9)] = inst_21615__$1);

return statearr_21656;
})();
if(inst_21617){
var statearr_21657_21688 = state_21651__$1;
(statearr_21657_21688[(1)] = (5));

} else {
var statearr_21658_21689 = state_21651__$1;
(statearr_21658_21689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (15))){
var inst_21641 = (state_21651[(2)]);
var state_21651__$1 = state_21651;
var statearr_21659_21690 = state_21651__$1;
(statearr_21659_21690[(2)] = inst_21641);

(statearr_21659_21690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (13))){
var state_21651__$1 = state_21651;
var statearr_21660_21691 = state_21651__$1;
(statearr_21660_21691[(2)] = null);

(statearr_21660_21691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (6))){
var inst_21611 = (state_21651[(8)]);
var inst_21636 = inst_21611.length;
var inst_21637 = (inst_21636 > (0));
var state_21651__$1 = state_21651;
if(cljs.core.truth_(inst_21637)){
var statearr_21661_21692 = state_21651__$1;
(statearr_21661_21692[(1)] = (12));

} else {
var statearr_21662_21693 = state_21651__$1;
(statearr_21662_21693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (3))){
var inst_21649 = (state_21651[(2)]);
var state_21651__$1 = state_21651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21651__$1,inst_21649);
} else {
if((state_val_21652 === (12))){
var inst_21611 = (state_21651[(8)]);
var inst_21639 = cljs.core.vec.call(null,inst_21611);
var state_21651__$1 = state_21651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21651__$1,(15),out,inst_21639);
} else {
if((state_val_21652 === (2))){
var state_21651__$1 = state_21651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21651__$1,(4),ch);
} else {
if((state_val_21652 === (11))){
var inst_21615 = (state_21651[(9)]);
var inst_21619 = (state_21651[(10)]);
var inst_21629 = (state_21651[(2)]);
var inst_21630 = [];
var inst_21631 = inst_21630.push(inst_21615);
var inst_21611 = inst_21630;
var inst_21612 = inst_21619;
var state_21651__$1 = (function (){var statearr_21663 = state_21651;
(statearr_21663[(11)] = inst_21631);

(statearr_21663[(7)] = inst_21612);

(statearr_21663[(12)] = inst_21629);

(statearr_21663[(8)] = inst_21611);

return statearr_21663;
})();
var statearr_21664_21694 = state_21651__$1;
(statearr_21664_21694[(2)] = null);

(statearr_21664_21694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (9))){
var inst_21611 = (state_21651[(8)]);
var inst_21627 = cljs.core.vec.call(null,inst_21611);
var state_21651__$1 = state_21651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21651__$1,(11),out,inst_21627);
} else {
if((state_val_21652 === (5))){
var inst_21612 = (state_21651[(7)]);
var inst_21615 = (state_21651[(9)]);
var inst_21619 = (state_21651[(10)]);
var inst_21619__$1 = f.call(null,inst_21615);
var inst_21620 = cljs.core._EQ_.call(null,inst_21619__$1,inst_21612);
var inst_21621 = cljs.core.keyword_identical_QMARK_.call(null,inst_21612,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21622 = (inst_21620) || (inst_21621);
var state_21651__$1 = (function (){var statearr_21665 = state_21651;
(statearr_21665[(10)] = inst_21619__$1);

return statearr_21665;
})();
if(cljs.core.truth_(inst_21622)){
var statearr_21666_21695 = state_21651__$1;
(statearr_21666_21695[(1)] = (8));

} else {
var statearr_21667_21696 = state_21651__$1;
(statearr_21667_21696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (14))){
var inst_21644 = (state_21651[(2)]);
var inst_21645 = cljs.core.async.close_BANG_.call(null,out);
var state_21651__$1 = (function (){var statearr_21669 = state_21651;
(statearr_21669[(13)] = inst_21644);

return statearr_21669;
})();
var statearr_21670_21697 = state_21651__$1;
(statearr_21670_21697[(2)] = inst_21645);

(statearr_21670_21697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (10))){
var inst_21634 = (state_21651[(2)]);
var state_21651__$1 = state_21651;
var statearr_21671_21698 = state_21651__$1;
(statearr_21671_21698[(2)] = inst_21634);

(statearr_21671_21698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21652 === (8))){
var inst_21615 = (state_21651[(9)]);
var inst_21611 = (state_21651[(8)]);
var inst_21619 = (state_21651[(10)]);
var inst_21624 = inst_21611.push(inst_21615);
var tmp21668 = inst_21611;
var inst_21611__$1 = tmp21668;
var inst_21612 = inst_21619;
var state_21651__$1 = (function (){var statearr_21672 = state_21651;
(statearr_21672[(7)] = inst_21612);

(statearr_21672[(8)] = inst_21611__$1);

(statearr_21672[(14)] = inst_21624);

return statearr_21672;
})();
var statearr_21673_21699 = state_21651__$1;
(statearr_21673_21699[(2)] = null);

(statearr_21673_21699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18930__auto___21685,out))
;
return ((function (switch__18818__auto__,c__18930__auto___21685,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21677[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21677[(1)] = (1));

return statearr_21677;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21651){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21678){if((e21678 instanceof Object)){
var ex__18822__auto__ = e21678;
var statearr_21679_21700 = state_21651;
(statearr_21679_21700[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21701 = state_21651;
state_21651 = G__21701;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___21685,out))
})();
var state__18932__auto__ = (function (){var statearr_21680 = f__18931__auto__.call(null);
(statearr_21680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___21685);

return statearr_21680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___21685,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map