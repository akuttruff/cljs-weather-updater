// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.DOM = (reagent.impl.util.React["DOM"]);
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"className",new cljs.core.Keyword(null,"for","for",-1323786319),"htmlFor",new cljs.core.Keyword(null,"charset","charset",-1063822193),"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
var or__16763__auto__ = reagent.impl.template.hiccup_tag_QMARK_.call(null,x);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return reagent.impl.util.clj_ifn_QMARK_.call(null,x);
}
});
reagent.impl.template.to_js_val = (function reagent$impl$template$to_js_val(v){
if(!(cljs.core.ifn_QMARK_.call(null,v))){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,v);
} else {
if((v instanceof cljs.core.Symbol)){
return [cljs.core.str(v)].join('');
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.clj__GT_js.call(null,v);
} else {
return (function() { 
var G__22500__delegate = function (args){
return cljs.core.apply.call(null,v,args);
};
var G__22500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22501__i = 0, G__22501__a = new Array(arguments.length -  0);
while (G__22501__i < G__22501__a.length) {G__22501__a[G__22501__i] = arguments[G__22501__i + 0]; ++G__22501__i;}
  args = new cljs.core.IndexedSeq(G__22501__a,0);
} 
return G__22500__delegate.call(this,args);};
G__22500.cljs$lang$maxFixedArity = 0;
G__22500.cljs$lang$applyTo = (function (arglist__22502){
var args = cljs.core.seq(arglist__22502);
return G__22500__delegate(args);
});
G__22500.cljs$core$IFn$_invoke$arity$variadic = G__22500__delegate;
return G__22500;
})()
;

}
}
}
}
});
reagent.impl.template.undash_prop_name = (function reagent$impl$template$undash_prop_name(n){
var or__16763__auto__ = reagent.impl.template.attr_aliases.call(null,n);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return reagent.impl.util.dash_to_camel.call(null,n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1.call(null,reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(val){
if(cljs.core.map_QMARK_.call(null,val)){
return cljs.core.reduce_kv.call(null,(function (res,k,v){
var G__22504 = res;
(G__22504[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.to_js_val.call(null,v));

return G__22504;
}),{},val);
} else {
return reagent.impl.template.to_js_val.call(null,val);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,p__22505){
var vec__22507 = p__22505;
var id = cljs.core.nth.call(null,vec__22507,(0),null);
var class$ = cljs.core.nth.call(null,vec__22507,(1),null);
var pid = (props["id"]);
(props["id"] = ((!((pid == null)))?pid:id));

if((class$ == null)){
return null;
} else {
return (props["className"] = (function (){var old = (props["className"]);
if(!((old == null))){
return [cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('');
} else {
return class$;
}
})());
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
if((cljs.core.empty_QMARK_.call(null,props)) && ((id_class == null))){
return null;
} else {
if((cljs.core.type.call(null,props) === Object)){
return props;
} else {
var objprops = cljs.core.reduce_kv.call(null,(function (o,k,v){
var pname_22508 = reagent.impl.template.cached_prop_name.call(null,k);
if(!((pname_22508 === "key"))){
(o[pname_22508] = reagent.impl.template.convert_prop_value.call(null,v));
} else {
}

return o;
}),{},props);
if((id_class == null)){
} else {
reagent.impl.template.set_id_class.call(null,objprops,id_class);
}

return objprops;

}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
reagent.impl.batching.queue_render.call(null,this$);

return res;
});
reagent.impl.template.input_did_update = (function reagent$impl$template$input_did_update(this$){
var value = this$.cljsInputValue;
if((value == null)){
return null;
} else {
var node = this$.getDOMNode();
if(cljs.core.not_EQ_.call(null,value,node.value)){
return node.value = value;
} else {
return null;
}
}
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
var on_change = (jsprops["onChange"]);
var value = (((on_change == null))?null:(jsprops["value"]));
this$.cljsInputValue = value;

if((value == null)){
return null;
} else {
reagent.impl.batching.mark_rendered.call(null,this$);

var G__22511 = jsprops;
(G__22511["defaultValue"] = value);

(G__22511["value"] = null);

(G__22511["onChange"] = ((function (G__22511,on_change,value){
return (function (p1__22509_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__22509_SHARP_);
});})(G__22511,on_change,value))
);

return G__22511;
}
});
reagent.impl.template.input_components = cljs.core.PersistentHashSet.fromArray([(reagent.impl.template.DOM["input"]),(reagent.impl.template.DOM["textarea"])], true);
reagent.impl.template.convert_args;
reagent.impl.template.wrapped_render = (function reagent$impl$template$wrapped_render(this$,comp,id_class,input_setup){
var inprops = reagent.impl.util.js_props.call(null,this$);
var argv = (inprops[reagent.impl.util.cljs_argv]);
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsargs = reagent.impl.template.convert_args.call(null,argv,((hasprops)?(2):(1)),((inprops[reagent.impl.util.cljs_level]) + (1)));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),id_class);
if((input_setup == null)){
} else {
input_setup.call(null,this$,jsprops);
}

(jsargs[(0)] = jsprops);

return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function reagent$impl$template$wrapped_should_update(C,nextprops,nextstate){
var inprops = reagent.impl.util.js_props.call(null,C);
var a1 = (inprops[reagent.impl.util.cljs_argv]);
var a2 = (nextprops[reagent.impl.util.cljs_argv]);
return cljs.core.not.call(null,reagent.impl.util.equal_args.call(null,a1,a2));
});
reagent.impl.template.add_input_methods = (function reagent$impl$template$add_input_methods(spec){
var G__22513 = spec;
(G__22513["componentDidUpdate"] = ((function (G__22513){
return (function (){
var C = this;
return reagent.impl.template.input_did_update.call(null,C);
});})(G__22513))
);

(G__22513["componentWillUnmount"] = ((function (G__22513){
return (function (){
var C = this;
return reagent.impl.batching.dispose.call(null,C);
});})(G__22513))
);

return G__22513;
});
reagent.impl.template.wrap_component = (function reagent$impl$template$wrap_component(comp,extras,name){
var input_QMARK_ = reagent.impl.template.input_components.call(null,comp);
var input_setup = (cljs.core.truth_(input_QMARK_)?reagent.impl.template.input_render_setup:null);
var spec = {"render": ((function (input_QMARK_,input_setup){
return (function (){
var C = this;
return reagent.impl.template.wrapped_render.call(null,C,comp,extras,input_setup);
});})(input_QMARK_,input_setup))
, "shouldComponentUpdate": ((function (input_QMARK_,input_setup){
return (function (p1__22514_SHARP_,p2__22515_SHARP_){
var C = this;
return reagent.impl.template.wrapped_should_update.call(null,C,p1__22514_SHARP_,p2__22515_SHARP_);
});})(input_QMARK_,input_setup))
, "displayName": (function (){var or__16763__auto__ = name;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return "ComponentWrapper";
}
})()};
if(cljs.core.truth_(input_QMARK_)){
reagent.impl.template.add_input_methods.call(null,spec);
} else {
}

return reagent.impl.util.React.createClass(spec);
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__22517 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__22517,(0),null);
var id = cljs.core.nth.call(null,vec__22517,(1),null);
var class$ = cljs.core.nth.call(null,vec__22517,(2),null);
var comp = (reagent.impl.template.DOM[tag]);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);
if(cljs.core.truth_(comp)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1462482139,null)))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__16763__auto__ = id;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function reagent$impl$template$get_wrapper(tag){
var vec__22519 = reagent.impl.template.parse_tag.call(null,tag);
var comp = cljs.core.nth.call(null,vec__22519,(0),null);
var id_class = cljs.core.nth.call(null,vec__22519,(1),null);
return reagent.impl.template.wrap_component.call(null,comp,id_class,[cljs.core.str(tag)].join(''));
});
reagent.impl.template.cached_wrapper = reagent.impl.util.memoize_1.call(null,reagent.impl.template.get_wrapper);
reagent.impl.template.create_class;
reagent.impl.template.fn_to_class = (function reagent$impl$template$fn_to_class(f){
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"component-function","component-function",654728922),f);
var res = reagent.impl.template.create_class.call(null,withrender);
var wrapf = res.cljsReactClass;
f.cljsReactClass = wrapf;

return wrapf;
});
reagent.impl.template.as_class = (function reagent$impl$template$as_class(tag){
if(cljs.core.truth_(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag))){
return reagent.impl.template.cached_wrapper.call(null,tag);
} else {
var cached_class = tag.cljsReactClass;
if(!((cached_class == null))){
return cached_class;
} else {
if(cljs.core.truth_(reagent.impl.util.React.isValidClass(tag))){
return tag.cljsReactClass = reagent.impl.template.wrap_component.call(null,tag,null,null);
} else {
return reagent.impl.template.fn_to_class.call(null,tag);
}
}
}
});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return null;
}
});
reagent.impl.template.vec_to_comp = (function reagent$impl$template$vec_to_comp(v,level){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Hiccup form should not be empty"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

if(cljs.core.truth_(reagent.impl.template.valid_tag_QMARK_.call(null,cljs.core.nth.call(null,v,(0))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(cljs.core.pr_str.call(null,v))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"v","v",1661996586,null),(0)))))].join('')));
}

var c = reagent.impl.template.as_class.call(null,cljs.core.nth.call(null,v,(0)));
var jsprops = (function (){var obj22523 = {};
(obj22523[reagent.impl.util.cljs_argv] = v);

(obj22523[reagent.impl.util.cljs_level] = level);

return obj22523;
})();
var k_22524 = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
var k_SINGLEQUOTE__22525 = (((k_22524 == null))?reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null)):k_22524);
if((k_SINGLEQUOTE__22525 == null)){
} else {
(jsprops["key"] = k_SINGLEQUOTE__22525);
}

return c.call(null,jsprops);
});
reagent.impl.template.tmp = {};
reagent.impl.template.warn_on_deref = (function reagent$impl$template$warn_on_deref(x){
if(cljs.core.truth_(reagent.impl.template.tmp.warned)){
return null;
} else {
if(!((console.log == null))){
console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.call(null,x));
} else {
}

return reagent.impl.template.tmp.warned = true;
}
});
reagent.impl.template.expand_seq;
reagent.impl.template.as_component = (function reagent$impl$template$as_component(var_args){
var args22526 = [];
var len__17821__auto___22529 = arguments.length;
var i__17822__auto___22530 = (0);
while(true){
if((i__17822__auto___22530 < len__17821__auto___22529)){
args22526.push((arguments[i__17822__auto___22530]));

var G__22531 = (i__17822__auto___22530 + (1));
i__17822__auto___22530 = G__22531;
continue;
} else {
}
break;
}

var G__22528 = args22526.length;
switch (G__22528) {
case 1:
return reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22526.length)].join('')));

}
});

reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.impl.template.as_component.call(null,x,(0));
});

reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2 = (function (x,level){
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_comp.call(null,x,level);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
if(!((true) && ((reagent.ratom._STAR_ratom_context_STAR_ == null)))){
return reagent.impl.template.expand_seq.call(null,x,level);
} else {
var s = reagent.ratom.capture_derefed.call(null,(function (){
return reagent.impl.template.expand_seq.call(null,x,level);
}),reagent.impl.template.tmp);
if(cljs.core.truth_(reagent.ratom.captured.call(null,reagent.impl.template.tmp))){
reagent.impl.template.warn_on_deref.call(null,x);
} else {
}

return s;
}
} else {
return x;

}
}
});

reagent.impl.template.as_component.cljs$lang$maxFixedArity = 2;
reagent.impl.template.create_class = (function reagent$impl$template$create_class(spec){
return reagent.impl.component.create_class.call(null,spec,reagent.impl.template.as_component);
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,level){
var a = cljs.core.into_array.call(null,s);
var level_SINGLEQUOTE_ = (level + (1));
var n__17666__auto___22533 = a.length;
var i_22534 = (0);
while(true){
if((i_22534 < n__17666__auto___22533)){
(a[i_22534] = reagent.impl.template.as_component.call(null,(a[i_22534]),level_SINGLEQUOTE_));

var G__22535 = (i_22534 + (1));
i_22534 = G__22535;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.convert_args = (function reagent$impl$template$convert_args(argv,first_child,level){
var a = cljs.core.into_array.call(null,argv);
var n__17666__auto___22536 = a.length;
var i_22537 = (0);
while(true){
if((i_22537 < n__17666__auto___22536)){
if((i_22537 >= first_child)){
(a[i_22537] = reagent.impl.template.as_component.call(null,(a[i_22537]),level));
} else {
}

var G__22538 = (i_22537 + (1));
i_22537 = G__22538;
continue;
} else {
}
break;
}

if((first_child === (2))){
a.shift();
} else {
}

return a;
});

//# sourceMappingURL=template.js.map