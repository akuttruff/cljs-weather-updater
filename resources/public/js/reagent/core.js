// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
reagent.core.React = reagent.impl.util.React;
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Turns a vector of Hiccup syntax into a React component. Returns form unchanged if it is not a vector.
 */
reagent.core.as_component = (function reagent$core$as_component(form){
return reagent.impl.template.as_component.call(null,form);
});
/**
 * Render a Reagent component into the DOM. The first argument may be either a
 * vector (using Reagent's Hiccup syntax), or a React component. The second argument should be a DOM node.
 * 
 * Optionally takes a callback that is called when the component is in place.
 * 
 * Returns the mounted component instance.
 */
reagent.core.render_component = (function reagent$core$render_component(var_args){
var args22541 = [];
var len__17821__auto___22544 = arguments.length;
var i__17822__auto___22545 = (0);
while(true){
if((i__17822__auto___22545 < len__17821__auto___22544)){
args22541.push((arguments[i__17822__auto___22545]));

var G__22546 = (i__17822__auto___22545 + (1));
i__17822__auto___22545 = G__22546;
continue;
} else {
}
break;
}

var G__22543 = args22541.length;
switch (G__22543) {
case 2:
return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22541.length)].join('')));

}
});

reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.core.render_component.call(null,comp,container,null);
});

reagent.core.render_component.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.core.React.renderComponent(reagent.core.as_component.call(null,comp),container,callback);
});

reagent.core.render_component.cljs$lang$maxFixedArity = 3;
/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.core.React.unmountComponentAtNode(container);
});
/**
 * Turns a component into an HTML string.
 */
reagent.core.render_component_to_string = (function reagent$core$render_component_to_string(component){
return reagent.core.React.renderComponentToString(reagent.core.as_component.call(null,component));
});
/**
 * Create a component, React style. Should be called with a map,
 * looking like this:
 * {:get-initial-state (fn [this])
 * :component-will-receive-props (fn [this new-argv])
 * :should-component-update (fn [this old-argv new-argv])
 * :component-will-mount (fn [this])
 * :component-did-mount (fn [this])
 * :component-will-update (fn [this new-argv])
 * :component-did-update (fn [this old-argv])
 * :component-will-unmount (fn [this])
 * :render (fn [this])}
 * 
 * Everything is optional, except :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.template.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 */
reagent.core.state = (function reagent$core$state(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.state.call(null,this$);
});
/**
 * Set state of a component.
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return reagent.impl.component.replace_state.call(null,this$,new_state);
});
/**
 * Merge component state with new-state.
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return reagent.impl.component.set_state.call(null,this$,new_state);
});
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_.call(null,this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return this$.getDOMNode();
});
/**
 * Utility function that merges two maps, handling :class and :style
 * specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 * Note that this may not work in event handlers, since React.js does
 * batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * Reagent components that derefs one of these are automatically
 * re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var args22548 = [];
var len__17821__auto___22553 = arguments.length;
var i__17822__auto___22554 = (0);
while(true){
if((i__17822__auto___22554 < len__17821__auto___22553)){
args22548.push((arguments[i__17822__auto___22554]));

var G__22555 = (i__17822__auto___22554 + (1));
i__17822__auto___22554 = G__22555;
continue;
} else {
}
break;
}

var G__22552 = args22548.length;
switch (G__22552) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17840__auto__ = (new cljs.core.IndexedSeq(args22548.slice((1)),(0)));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17840__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

reagent.core.atom.cljs$lang$applyTo = (function (seq22549){
var G__22550 = cljs.core.first.call(null,seq22549);
var seq22549__$1 = cljs.core.next.call(null,seq22549);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__22550,seq22549__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);
/**
 * Run f using requestAnimationFrame or equivalent.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.next_tick.call(null,f);
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 * the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__17828__auto__ = [];
var len__17821__auto___22559 = arguments.length;
var i__17822__auto___22560 = (0);
while(true){
if((i__17822__auto___22560 < len__17821__auto___22559)){
args__17828__auto__.push((arguments[i__17822__auto___22560]));

var G__22561 = (i__17822__auto___22560 + (1));
i__17822__auto___22560 = G__22561;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((1) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((1)),(0))):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17829__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

reagent.core.partial.cljs$lang$applyTo = (function (seq22557){
var G__22558 = cljs.core.first.call(null,seq22557);
var seq22557__$1 = cljs.core.next.call(null,seq22557);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__22558,seq22557__$1);
});

//# sourceMappingURL=core.js.map