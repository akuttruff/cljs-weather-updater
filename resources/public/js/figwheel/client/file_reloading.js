// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16763__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16763__auto__){
return or__16763__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16763__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22659_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22659_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22664 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22665 = null;
var count__22666 = (0);
var i__22667 = (0);
while(true){
if((i__22667 < count__22666)){
var n = cljs.core._nth.call(null,chunk__22665,i__22667);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22668 = seq__22664;
var G__22669 = chunk__22665;
var G__22670 = count__22666;
var G__22671 = (i__22667 + (1));
seq__22664 = G__22668;
chunk__22665 = G__22669;
count__22666 = G__22670;
i__22667 = G__22671;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22664);
if(temp__4425__auto__){
var seq__22664__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22664__$1)){
var c__17566__auto__ = cljs.core.chunk_first.call(null,seq__22664__$1);
var G__22672 = cljs.core.chunk_rest.call(null,seq__22664__$1);
var G__22673 = c__17566__auto__;
var G__22674 = cljs.core.count.call(null,c__17566__auto__);
var G__22675 = (0);
seq__22664 = G__22672;
chunk__22665 = G__22673;
count__22666 = G__22674;
i__22667 = G__22675;
continue;
} else {
var n = cljs.core.first.call(null,seq__22664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22676 = cljs.core.next.call(null,seq__22664__$1);
var G__22677 = null;
var G__22678 = (0);
var G__22679 = (0);
seq__22664 = G__22676;
chunk__22665 = G__22677;
count__22666 = G__22678;
i__22667 = G__22679;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22718_22725 = cljs.core.seq.call(null,deps);
var chunk__22719_22726 = null;
var count__22720_22727 = (0);
var i__22721_22728 = (0);
while(true){
if((i__22721_22728 < count__22720_22727)){
var dep_22729 = cljs.core._nth.call(null,chunk__22719_22726,i__22721_22728);
topo_sort_helper_STAR_.call(null,dep_22729,(depth + (1)),state);

var G__22730 = seq__22718_22725;
var G__22731 = chunk__22719_22726;
var G__22732 = count__22720_22727;
var G__22733 = (i__22721_22728 + (1));
seq__22718_22725 = G__22730;
chunk__22719_22726 = G__22731;
count__22720_22727 = G__22732;
i__22721_22728 = G__22733;
continue;
} else {
var temp__4425__auto___22734 = cljs.core.seq.call(null,seq__22718_22725);
if(temp__4425__auto___22734){
var seq__22718_22735__$1 = temp__4425__auto___22734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718_22735__$1)){
var c__17566__auto___22736 = cljs.core.chunk_first.call(null,seq__22718_22735__$1);
var G__22737 = cljs.core.chunk_rest.call(null,seq__22718_22735__$1);
var G__22738 = c__17566__auto___22736;
var G__22739 = cljs.core.count.call(null,c__17566__auto___22736);
var G__22740 = (0);
seq__22718_22725 = G__22737;
chunk__22719_22726 = G__22738;
count__22720_22727 = G__22739;
i__22721_22728 = G__22740;
continue;
} else {
var dep_22741 = cljs.core.first.call(null,seq__22718_22735__$1);
topo_sort_helper_STAR_.call(null,dep_22741,(depth + (1)),state);

var G__22742 = cljs.core.next.call(null,seq__22718_22735__$1);
var G__22743 = null;
var G__22744 = (0);
var G__22745 = (0);
seq__22718_22725 = G__22742;
chunk__22719_22726 = G__22743;
count__22720_22727 = G__22744;
i__22721_22728 = G__22745;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22722){
var vec__22724 = p__22722;
var x = cljs.core.nth.call(null,vec__22724,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22724,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22724,x,xs,get_deps__$1){
return (function (p1__22680_SHARP_){
return clojure.set.difference.call(null,p1__22680_SHARP_,x);
});})(vec__22724,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22758 = cljs.core.seq.call(null,provides);
var chunk__22759 = null;
var count__22760 = (0);
var i__22761 = (0);
while(true){
if((i__22761 < count__22760)){
var prov = cljs.core._nth.call(null,chunk__22759,i__22761);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22762_22770 = cljs.core.seq.call(null,requires);
var chunk__22763_22771 = null;
var count__22764_22772 = (0);
var i__22765_22773 = (0);
while(true){
if((i__22765_22773 < count__22764_22772)){
var req_22774 = cljs.core._nth.call(null,chunk__22763_22771,i__22765_22773);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22774,prov);

var G__22775 = seq__22762_22770;
var G__22776 = chunk__22763_22771;
var G__22777 = count__22764_22772;
var G__22778 = (i__22765_22773 + (1));
seq__22762_22770 = G__22775;
chunk__22763_22771 = G__22776;
count__22764_22772 = G__22777;
i__22765_22773 = G__22778;
continue;
} else {
var temp__4425__auto___22779 = cljs.core.seq.call(null,seq__22762_22770);
if(temp__4425__auto___22779){
var seq__22762_22780__$1 = temp__4425__auto___22779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22762_22780__$1)){
var c__17566__auto___22781 = cljs.core.chunk_first.call(null,seq__22762_22780__$1);
var G__22782 = cljs.core.chunk_rest.call(null,seq__22762_22780__$1);
var G__22783 = c__17566__auto___22781;
var G__22784 = cljs.core.count.call(null,c__17566__auto___22781);
var G__22785 = (0);
seq__22762_22770 = G__22782;
chunk__22763_22771 = G__22783;
count__22764_22772 = G__22784;
i__22765_22773 = G__22785;
continue;
} else {
var req_22786 = cljs.core.first.call(null,seq__22762_22780__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22786,prov);

var G__22787 = cljs.core.next.call(null,seq__22762_22780__$1);
var G__22788 = null;
var G__22789 = (0);
var G__22790 = (0);
seq__22762_22770 = G__22787;
chunk__22763_22771 = G__22788;
count__22764_22772 = G__22789;
i__22765_22773 = G__22790;
continue;
}
} else {
}
}
break;
}

var G__22791 = seq__22758;
var G__22792 = chunk__22759;
var G__22793 = count__22760;
var G__22794 = (i__22761 + (1));
seq__22758 = G__22791;
chunk__22759 = G__22792;
count__22760 = G__22793;
i__22761 = G__22794;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22758);
if(temp__4425__auto__){
var seq__22758__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22758__$1)){
var c__17566__auto__ = cljs.core.chunk_first.call(null,seq__22758__$1);
var G__22795 = cljs.core.chunk_rest.call(null,seq__22758__$1);
var G__22796 = c__17566__auto__;
var G__22797 = cljs.core.count.call(null,c__17566__auto__);
var G__22798 = (0);
seq__22758 = G__22795;
chunk__22759 = G__22796;
count__22760 = G__22797;
i__22761 = G__22798;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22758__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22766_22799 = cljs.core.seq.call(null,requires);
var chunk__22767_22800 = null;
var count__22768_22801 = (0);
var i__22769_22802 = (0);
while(true){
if((i__22769_22802 < count__22768_22801)){
var req_22803 = cljs.core._nth.call(null,chunk__22767_22800,i__22769_22802);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22803,prov);

var G__22804 = seq__22766_22799;
var G__22805 = chunk__22767_22800;
var G__22806 = count__22768_22801;
var G__22807 = (i__22769_22802 + (1));
seq__22766_22799 = G__22804;
chunk__22767_22800 = G__22805;
count__22768_22801 = G__22806;
i__22769_22802 = G__22807;
continue;
} else {
var temp__4425__auto___22808__$1 = cljs.core.seq.call(null,seq__22766_22799);
if(temp__4425__auto___22808__$1){
var seq__22766_22809__$1 = temp__4425__auto___22808__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22766_22809__$1)){
var c__17566__auto___22810 = cljs.core.chunk_first.call(null,seq__22766_22809__$1);
var G__22811 = cljs.core.chunk_rest.call(null,seq__22766_22809__$1);
var G__22812 = c__17566__auto___22810;
var G__22813 = cljs.core.count.call(null,c__17566__auto___22810);
var G__22814 = (0);
seq__22766_22799 = G__22811;
chunk__22767_22800 = G__22812;
count__22768_22801 = G__22813;
i__22769_22802 = G__22814;
continue;
} else {
var req_22815 = cljs.core.first.call(null,seq__22766_22809__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22815,prov);

var G__22816 = cljs.core.next.call(null,seq__22766_22809__$1);
var G__22817 = null;
var G__22818 = (0);
var G__22819 = (0);
seq__22766_22799 = G__22816;
chunk__22767_22800 = G__22817;
count__22768_22801 = G__22818;
i__22769_22802 = G__22819;
continue;
}
} else {
}
}
break;
}

var G__22820 = cljs.core.next.call(null,seq__22758__$1);
var G__22821 = null;
var G__22822 = (0);
var G__22823 = (0);
seq__22758 = G__22820;
chunk__22759 = G__22821;
count__22760 = G__22822;
i__22761 = G__22823;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22828_22832 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22829_22833 = null;
var count__22830_22834 = (0);
var i__22831_22835 = (0);
while(true){
if((i__22831_22835 < count__22830_22834)){
var ns_22836 = cljs.core._nth.call(null,chunk__22829_22833,i__22831_22835);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22836);

var G__22837 = seq__22828_22832;
var G__22838 = chunk__22829_22833;
var G__22839 = count__22830_22834;
var G__22840 = (i__22831_22835 + (1));
seq__22828_22832 = G__22837;
chunk__22829_22833 = G__22838;
count__22830_22834 = G__22839;
i__22831_22835 = G__22840;
continue;
} else {
var temp__4425__auto___22841 = cljs.core.seq.call(null,seq__22828_22832);
if(temp__4425__auto___22841){
var seq__22828_22842__$1 = temp__4425__auto___22841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22828_22842__$1)){
var c__17566__auto___22843 = cljs.core.chunk_first.call(null,seq__22828_22842__$1);
var G__22844 = cljs.core.chunk_rest.call(null,seq__22828_22842__$1);
var G__22845 = c__17566__auto___22843;
var G__22846 = cljs.core.count.call(null,c__17566__auto___22843);
var G__22847 = (0);
seq__22828_22832 = G__22844;
chunk__22829_22833 = G__22845;
count__22830_22834 = G__22846;
i__22831_22835 = G__22847;
continue;
} else {
var ns_22848 = cljs.core.first.call(null,seq__22828_22842__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22848);

var G__22849 = cljs.core.next.call(null,seq__22828_22842__$1);
var G__22850 = null;
var G__22851 = (0);
var G__22852 = (0);
seq__22828_22832 = G__22849;
chunk__22829_22833 = G__22850;
count__22830_22834 = G__22851;
i__22831_22835 = G__22852;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16763__auto__ = goog.require__;
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22853__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22854__i = 0, G__22854__a = new Array(arguments.length -  0);
while (G__22854__i < G__22854__a.length) {G__22854__a[G__22854__i] = arguments[G__22854__i + 0]; ++G__22854__i;}
  args = new cljs.core.IndexedSeq(G__22854__a,0);
} 
return G__22853__delegate.call(this,args);};
G__22853.cljs$lang$maxFixedArity = 0;
G__22853.cljs$lang$applyTo = (function (arglist__22855){
var args = cljs.core.seq(arglist__22855);
return G__22853__delegate(args);
});
G__22853.cljs$core$IFn$_invoke$arity$variadic = G__22853__delegate;
return G__22853;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22857 = cljs.core._EQ_;
var expr__22858 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22857.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22858))){
var path_parts = ((function (pred__22857,expr__22858){
return (function (p1__22856_SHARP_){
return clojure.string.split.call(null,p1__22856_SHARP_,/[\/\\]/);
});})(pred__22857,expr__22858))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22857,expr__22858){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22860){if((e22860 instanceof Error)){
var e = e22860;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22860;

}
}})());
});
;})(path_parts,sep,root,pred__22857,expr__22858))
} else {
if(cljs.core.truth_(pred__22857.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22858))){
return ((function (pred__22857,expr__22858){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22857,expr__22858){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22857,expr__22858))
);

return deferred.addErrback(((function (deferred,pred__22857,expr__22858){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22857,expr__22858))
);
});
;})(pred__22857,expr__22858))
} else {
return ((function (pred__22857,expr__22858){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22857,expr__22858))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22861,callback){
var map__22864 = p__22861;
var map__22864__$1 = ((((!((map__22864 == null)))?((((map__22864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22864):map__22864);
var file_msg = map__22864__$1;
var request_url = cljs.core.get.call(null,map__22864__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22864,map__22864__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22864,map__22864__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_22888){
var state_val_22889 = (state_22888[(1)]);
if((state_val_22889 === (7))){
var inst_22884 = (state_22888[(2)]);
var state_22888__$1 = state_22888;
var statearr_22890_22910 = state_22888__$1;
(statearr_22890_22910[(2)] = inst_22884);

(statearr_22890_22910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (1))){
var state_22888__$1 = state_22888;
var statearr_22891_22911 = state_22888__$1;
(statearr_22891_22911[(2)] = null);

(statearr_22891_22911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (4))){
var inst_22868 = (state_22888[(7)]);
var inst_22868__$1 = (state_22888[(2)]);
var state_22888__$1 = (function (){var statearr_22892 = state_22888;
(statearr_22892[(7)] = inst_22868__$1);

return statearr_22892;
})();
if(cljs.core.truth_(inst_22868__$1)){
var statearr_22893_22912 = state_22888__$1;
(statearr_22893_22912[(1)] = (5));

} else {
var statearr_22894_22913 = state_22888__$1;
(statearr_22894_22913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (6))){
var state_22888__$1 = state_22888;
var statearr_22895_22914 = state_22888__$1;
(statearr_22895_22914[(2)] = null);

(statearr_22895_22914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (3))){
var inst_22886 = (state_22888[(2)]);
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22888__$1,inst_22886);
} else {
if((state_val_22889 === (2))){
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22888__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22889 === (11))){
var inst_22880 = (state_22888[(2)]);
var state_22888__$1 = (function (){var statearr_22896 = state_22888;
(statearr_22896[(8)] = inst_22880);

return statearr_22896;
})();
var statearr_22897_22915 = state_22888__$1;
(statearr_22897_22915[(2)] = null);

(statearr_22897_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (9))){
var inst_22874 = (state_22888[(9)]);
var inst_22872 = (state_22888[(10)]);
var inst_22876 = inst_22874.call(null,inst_22872);
var state_22888__$1 = state_22888;
var statearr_22898_22916 = state_22888__$1;
(statearr_22898_22916[(2)] = inst_22876);

(statearr_22898_22916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (5))){
var inst_22868 = (state_22888[(7)]);
var inst_22870 = figwheel.client.file_reloading.blocking_load.call(null,inst_22868);
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22888__$1,(8),inst_22870);
} else {
if((state_val_22889 === (10))){
var inst_22872 = (state_22888[(10)]);
var inst_22878 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22872);
var state_22888__$1 = state_22888;
var statearr_22899_22917 = state_22888__$1;
(statearr_22899_22917[(2)] = inst_22878);

(statearr_22899_22917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (8))){
var inst_22874 = (state_22888[(9)]);
var inst_22868 = (state_22888[(7)]);
var inst_22872 = (state_22888[(2)]);
var inst_22873 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22874__$1 = cljs.core.get.call(null,inst_22873,inst_22868);
var state_22888__$1 = (function (){var statearr_22900 = state_22888;
(statearr_22900[(9)] = inst_22874__$1);

(statearr_22900[(10)] = inst_22872);

return statearr_22900;
})();
if(cljs.core.truth_(inst_22874__$1)){
var statearr_22901_22918 = state_22888__$1;
(statearr_22901_22918[(1)] = (9));

} else {
var statearr_22902_22919 = state_22888__$1;
(statearr_22902_22919[(1)] = (10));

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
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18819__auto__ = null;
var figwheel$client$file_reloading$state_machine__18819__auto____0 = (function (){
var statearr_22906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22906[(0)] = figwheel$client$file_reloading$state_machine__18819__auto__);

(statearr_22906[(1)] = (1));

return statearr_22906;
});
var figwheel$client$file_reloading$state_machine__18819__auto____1 = (function (state_22888){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22907){if((e22907 instanceof Object)){
var ex__18822__auto__ = e22907;
var statearr_22908_22920 = state_22888;
(statearr_22908_22920[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22921 = state_22888;
state_22888 = G__22921;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18819__auto__ = function(state_22888){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18819__auto____1.call(this,state_22888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18819__auto____0;
figwheel$client$file_reloading$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18819__auto____1;
return figwheel$client$file_reloading$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_22909 = f__18931__auto__.call(null);
(statearr_22909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_22909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22922,callback){
var map__22925 = p__22922;
var map__22925__$1 = ((((!((map__22925 == null)))?((((map__22925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22925):map__22925);
var file_msg = map__22925__$1;
var namespace = cljs.core.get.call(null,map__22925__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22925,map__22925__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22925,map__22925__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22927){
var map__22930 = p__22927;
var map__22930__$1 = ((((!((map__22930 == null)))?((((map__22930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22930):map__22930);
var file_msg = map__22930__$1;
var namespace = cljs.core.get.call(null,map__22930__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16751__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16751__auto__){
var or__16763__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
var or__16763__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16763__auto____$1)){
return or__16763__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16751__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22932,callback){
var map__22935 = p__22932;
var map__22935__$1 = ((((!((map__22935 == null)))?((((map__22935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22935):map__22935);
var file_msg = map__22935__$1;
var request_url = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22935__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18930__auto___23023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___23023,out){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___23023,out){
return (function (state_23005){
var state_val_23006 = (state_23005[(1)]);
if((state_val_23006 === (1))){
var inst_22983 = cljs.core.nth.call(null,files,(0),null);
var inst_22984 = cljs.core.nthnext.call(null,files,(1));
var inst_22985 = files;
var state_23005__$1 = (function (){var statearr_23007 = state_23005;
(statearr_23007[(7)] = inst_22983);

(statearr_23007[(8)] = inst_22985);

(statearr_23007[(9)] = inst_22984);

return statearr_23007;
})();
var statearr_23008_23024 = state_23005__$1;
(statearr_23008_23024[(2)] = null);

(statearr_23008_23024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (2))){
var inst_22988 = (state_23005[(10)]);
var inst_22985 = (state_23005[(8)]);
var inst_22988__$1 = cljs.core.nth.call(null,inst_22985,(0),null);
var inst_22989 = cljs.core.nthnext.call(null,inst_22985,(1));
var inst_22990 = (inst_22988__$1 == null);
var inst_22991 = cljs.core.not.call(null,inst_22990);
var state_23005__$1 = (function (){var statearr_23009 = state_23005;
(statearr_23009[(10)] = inst_22988__$1);

(statearr_23009[(11)] = inst_22989);

return statearr_23009;
})();
if(inst_22991){
var statearr_23010_23025 = state_23005__$1;
(statearr_23010_23025[(1)] = (4));

} else {
var statearr_23011_23026 = state_23005__$1;
(statearr_23011_23026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (3))){
var inst_23003 = (state_23005[(2)]);
var state_23005__$1 = state_23005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23005__$1,inst_23003);
} else {
if((state_val_23006 === (4))){
var inst_22988 = (state_23005[(10)]);
var inst_22993 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22988);
var state_23005__$1 = state_23005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23005__$1,(7),inst_22993);
} else {
if((state_val_23006 === (5))){
var inst_22999 = cljs.core.async.close_BANG_.call(null,out);
var state_23005__$1 = state_23005;
var statearr_23012_23027 = state_23005__$1;
(statearr_23012_23027[(2)] = inst_22999);

(statearr_23012_23027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (6))){
var inst_23001 = (state_23005[(2)]);
var state_23005__$1 = state_23005;
var statearr_23013_23028 = state_23005__$1;
(statearr_23013_23028[(2)] = inst_23001);

(statearr_23013_23028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (7))){
var inst_22989 = (state_23005[(11)]);
var inst_22995 = (state_23005[(2)]);
var inst_22996 = cljs.core.async.put_BANG_.call(null,out,inst_22995);
var inst_22985 = inst_22989;
var state_23005__$1 = (function (){var statearr_23014 = state_23005;
(statearr_23014[(12)] = inst_22996);

(statearr_23014[(8)] = inst_22985);

return statearr_23014;
})();
var statearr_23015_23029 = state_23005__$1;
(statearr_23015_23029[(2)] = null);

(statearr_23015_23029[(1)] = (2));


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
});})(c__18930__auto___23023,out))
;
return ((function (switch__18818__auto__,c__18930__auto___23023,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto____0 = (function (){
var statearr_23019 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23019[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto__);

(statearr_23019[(1)] = (1));

return statearr_23019;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto____1 = (function (state_23005){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_23005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e23020){if((e23020 instanceof Object)){
var ex__18822__auto__ = e23020;
var statearr_23021_23030 = state_23005;
(statearr_23021_23030[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23031 = state_23005;
state_23005 = G__23031;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto__ = function(state_23005){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto____1.call(this,state_23005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___23023,out))
})();
var state__18932__auto__ = (function (){var statearr_23022 = f__18931__auto__.call(null);
(statearr_23022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___23023);

return statearr_23022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___23023,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23032,opts){
var map__23036 = p__23032;
var map__23036__$1 = ((((!((map__23036 == null)))?((((map__23036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23036):map__23036);
var eval_body__$1 = cljs.core.get.call(null,map__23036__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23036__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16751__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16751__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16751__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23038){var e = e23038;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23039_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23044){
var vec__23045 = p__23044;
var k = cljs.core.nth.call(null,vec__23045,(0),null);
var v = cljs.core.nth.call(null,vec__23045,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23046){
var vec__23047 = p__23046;
var k = cljs.core.nth.call(null,vec__23047,(0),null);
var v = cljs.core.nth.call(null,vec__23047,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23051,p__23052){
var map__23299 = p__23051;
var map__23299__$1 = ((((!((map__23299 == null)))?((((map__23299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23299):map__23299);
var opts = map__23299__$1;
var before_jsload = cljs.core.get.call(null,map__23299__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23299__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23299__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23300 = p__23052;
var map__23300__$1 = ((((!((map__23300 == null)))?((((map__23300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23300):map__23300);
var msg = map__23300__$1;
var files = cljs.core.get.call(null,map__23300__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23300__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23300__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23453){
var state_val_23454 = (state_23453[(1)]);
if((state_val_23454 === (7))){
var inst_23315 = (state_23453[(7)]);
var inst_23316 = (state_23453[(8)]);
var inst_23314 = (state_23453[(9)]);
var inst_23317 = (state_23453[(10)]);
var inst_23322 = cljs.core._nth.call(null,inst_23315,inst_23317);
var inst_23323 = figwheel.client.file_reloading.eval_body.call(null,inst_23322,opts);
var inst_23324 = (inst_23317 + (1));
var tmp23455 = inst_23315;
var tmp23456 = inst_23316;
var tmp23457 = inst_23314;
var inst_23314__$1 = tmp23457;
var inst_23315__$1 = tmp23455;
var inst_23316__$1 = tmp23456;
var inst_23317__$1 = inst_23324;
var state_23453__$1 = (function (){var statearr_23458 = state_23453;
(statearr_23458[(7)] = inst_23315__$1);

(statearr_23458[(8)] = inst_23316__$1);

(statearr_23458[(11)] = inst_23323);

(statearr_23458[(9)] = inst_23314__$1);

(statearr_23458[(10)] = inst_23317__$1);

return statearr_23458;
})();
var statearr_23459_23545 = state_23453__$1;
(statearr_23459_23545[(2)] = null);

(statearr_23459_23545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (20))){
var inst_23357 = (state_23453[(12)]);
var inst_23365 = figwheel.client.file_reloading.sort_files.call(null,inst_23357);
var state_23453__$1 = state_23453;
var statearr_23460_23546 = state_23453__$1;
(statearr_23460_23546[(2)] = inst_23365);

(statearr_23460_23546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (27))){
var state_23453__$1 = state_23453;
var statearr_23461_23547 = state_23453__$1;
(statearr_23461_23547[(2)] = null);

(statearr_23461_23547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (1))){
var inst_23306 = (state_23453[(13)]);
var inst_23303 = before_jsload.call(null,files);
var inst_23304 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23305 = (function (){return ((function (inst_23306,inst_23303,inst_23304,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23048_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23048_SHARP_);
});
;})(inst_23306,inst_23303,inst_23304,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23306__$1 = cljs.core.filter.call(null,inst_23305,files);
var inst_23307 = cljs.core.not_empty.call(null,inst_23306__$1);
var state_23453__$1 = (function (){var statearr_23462 = state_23453;
(statearr_23462[(13)] = inst_23306__$1);

(statearr_23462[(14)] = inst_23304);

(statearr_23462[(15)] = inst_23303);

return statearr_23462;
})();
if(cljs.core.truth_(inst_23307)){
var statearr_23463_23548 = state_23453__$1;
(statearr_23463_23548[(1)] = (2));

} else {
var statearr_23464_23549 = state_23453__$1;
(statearr_23464_23549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (24))){
var state_23453__$1 = state_23453;
var statearr_23465_23550 = state_23453__$1;
(statearr_23465_23550[(2)] = null);

(statearr_23465_23550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (39))){
var inst_23407 = (state_23453[(16)]);
var state_23453__$1 = state_23453;
var statearr_23466_23551 = state_23453__$1;
(statearr_23466_23551[(2)] = inst_23407);

(statearr_23466_23551[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (46))){
var inst_23448 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23467_23552 = state_23453__$1;
(statearr_23467_23552[(2)] = inst_23448);

(statearr_23467_23552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (4))){
var inst_23351 = (state_23453[(2)]);
var inst_23352 = cljs.core.List.EMPTY;
var inst_23353 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23352);
var inst_23354 = (function (){return ((function (inst_23351,inst_23352,inst_23353,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23049_SHARP_){
var and__16751__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23049_SHARP_);
if(cljs.core.truth_(and__16751__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23049_SHARP_));
} else {
return and__16751__auto__;
}
});
;})(inst_23351,inst_23352,inst_23353,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23355 = cljs.core.filter.call(null,inst_23354,files);
var inst_23356 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23357 = cljs.core.concat.call(null,inst_23355,inst_23356);
var state_23453__$1 = (function (){var statearr_23468 = state_23453;
(statearr_23468[(17)] = inst_23351);

(statearr_23468[(18)] = inst_23353);

(statearr_23468[(12)] = inst_23357);

return statearr_23468;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23469_23553 = state_23453__$1;
(statearr_23469_23553[(1)] = (16));

} else {
var statearr_23470_23554 = state_23453__$1;
(statearr_23470_23554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (15))){
var inst_23341 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23471_23555 = state_23453__$1;
(statearr_23471_23555[(2)] = inst_23341);

(statearr_23471_23555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (21))){
var inst_23367 = (state_23453[(19)]);
var inst_23367__$1 = (state_23453[(2)]);
var inst_23368 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23367__$1);
var state_23453__$1 = (function (){var statearr_23472 = state_23453;
(statearr_23472[(19)] = inst_23367__$1);

return statearr_23472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23453__$1,(22),inst_23368);
} else {
if((state_val_23454 === (31))){
var inst_23451 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23453__$1,inst_23451);
} else {
if((state_val_23454 === (32))){
var inst_23407 = (state_23453[(16)]);
var inst_23412 = inst_23407.cljs$lang$protocol_mask$partition0$;
var inst_23413 = (inst_23412 & (64));
var inst_23414 = inst_23407.cljs$core$ISeq$;
var inst_23415 = (inst_23413) || (inst_23414);
var state_23453__$1 = state_23453;
if(cljs.core.truth_(inst_23415)){
var statearr_23473_23556 = state_23453__$1;
(statearr_23473_23556[(1)] = (35));

} else {
var statearr_23474_23557 = state_23453__$1;
(statearr_23474_23557[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (40))){
var inst_23428 = (state_23453[(20)]);
var inst_23427 = (state_23453[(2)]);
var inst_23428__$1 = cljs.core.get.call(null,inst_23427,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23429 = cljs.core.get.call(null,inst_23427,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23430 = cljs.core.not_empty.call(null,inst_23428__$1);
var state_23453__$1 = (function (){var statearr_23475 = state_23453;
(statearr_23475[(21)] = inst_23429);

(statearr_23475[(20)] = inst_23428__$1);

return statearr_23475;
})();
if(cljs.core.truth_(inst_23430)){
var statearr_23476_23558 = state_23453__$1;
(statearr_23476_23558[(1)] = (41));

} else {
var statearr_23477_23559 = state_23453__$1;
(statearr_23477_23559[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (33))){
var state_23453__$1 = state_23453;
var statearr_23478_23560 = state_23453__$1;
(statearr_23478_23560[(2)] = false);

(statearr_23478_23560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (13))){
var inst_23327 = (state_23453[(22)]);
var inst_23331 = cljs.core.chunk_first.call(null,inst_23327);
var inst_23332 = cljs.core.chunk_rest.call(null,inst_23327);
var inst_23333 = cljs.core.count.call(null,inst_23331);
var inst_23314 = inst_23332;
var inst_23315 = inst_23331;
var inst_23316 = inst_23333;
var inst_23317 = (0);
var state_23453__$1 = (function (){var statearr_23479 = state_23453;
(statearr_23479[(7)] = inst_23315);

(statearr_23479[(8)] = inst_23316);

(statearr_23479[(9)] = inst_23314);

(statearr_23479[(10)] = inst_23317);

return statearr_23479;
})();
var statearr_23480_23561 = state_23453__$1;
(statearr_23480_23561[(2)] = null);

(statearr_23480_23561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (22))){
var inst_23375 = (state_23453[(23)]);
var inst_23367 = (state_23453[(19)]);
var inst_23371 = (state_23453[(24)]);
var inst_23370 = (state_23453[(25)]);
var inst_23370__$1 = (state_23453[(2)]);
var inst_23371__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23370__$1);
var inst_23372 = (function (){var all_files = inst_23367;
var res_SINGLEQUOTE_ = inst_23370__$1;
var res = inst_23371__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23375,inst_23367,inst_23371,inst_23370,inst_23370__$1,inst_23371__$1,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23050_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23050_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23375,inst_23367,inst_23371,inst_23370,inst_23370__$1,inst_23371__$1,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23373 = cljs.core.filter.call(null,inst_23372,inst_23370__$1);
var inst_23374 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23375__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23374);
var inst_23376 = cljs.core.not_empty.call(null,inst_23375__$1);
var state_23453__$1 = (function (){var statearr_23481 = state_23453;
(statearr_23481[(23)] = inst_23375__$1);

(statearr_23481[(24)] = inst_23371__$1);

(statearr_23481[(26)] = inst_23373);

(statearr_23481[(25)] = inst_23370__$1);

return statearr_23481;
})();
if(cljs.core.truth_(inst_23376)){
var statearr_23482_23562 = state_23453__$1;
(statearr_23482_23562[(1)] = (23));

} else {
var statearr_23483_23563 = state_23453__$1;
(statearr_23483_23563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (36))){
var state_23453__$1 = state_23453;
var statearr_23484_23564 = state_23453__$1;
(statearr_23484_23564[(2)] = false);

(statearr_23484_23564[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (41))){
var inst_23428 = (state_23453[(20)]);
var inst_23432 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23433 = cljs.core.map.call(null,inst_23432,inst_23428);
var inst_23434 = cljs.core.pr_str.call(null,inst_23433);
var inst_23435 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23434)].join('');
var inst_23436 = figwheel.client.utils.log.call(null,inst_23435);
var state_23453__$1 = state_23453;
var statearr_23485_23565 = state_23453__$1;
(statearr_23485_23565[(2)] = inst_23436);

(statearr_23485_23565[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (43))){
var inst_23429 = (state_23453[(21)]);
var inst_23439 = (state_23453[(2)]);
var inst_23440 = cljs.core.not_empty.call(null,inst_23429);
var state_23453__$1 = (function (){var statearr_23486 = state_23453;
(statearr_23486[(27)] = inst_23439);

return statearr_23486;
})();
if(cljs.core.truth_(inst_23440)){
var statearr_23487_23566 = state_23453__$1;
(statearr_23487_23566[(1)] = (44));

} else {
var statearr_23488_23567 = state_23453__$1;
(statearr_23488_23567[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (29))){
var inst_23375 = (state_23453[(23)]);
var inst_23367 = (state_23453[(19)]);
var inst_23371 = (state_23453[(24)]);
var inst_23407 = (state_23453[(16)]);
var inst_23373 = (state_23453[(26)]);
var inst_23370 = (state_23453[(25)]);
var inst_23403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23406 = (function (){var all_files = inst_23367;
var res_SINGLEQUOTE_ = inst_23370;
var res = inst_23371;
var files_not_loaded = inst_23373;
var dependencies_that_loaded = inst_23375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23407,inst_23373,inst_23370,inst_23403,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23405){
var map__23489 = p__23405;
var map__23489__$1 = ((((!((map__23489 == null)))?((((map__23489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23489):map__23489);
var namespace = cljs.core.get.call(null,map__23489__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23407,inst_23373,inst_23370,inst_23403,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23407__$1 = cljs.core.group_by.call(null,inst_23406,inst_23373);
var inst_23409 = (inst_23407__$1 == null);
var inst_23410 = cljs.core.not.call(null,inst_23409);
var state_23453__$1 = (function (){var statearr_23491 = state_23453;
(statearr_23491[(28)] = inst_23403);

(statearr_23491[(16)] = inst_23407__$1);

return statearr_23491;
})();
if(inst_23410){
var statearr_23492_23568 = state_23453__$1;
(statearr_23492_23568[(1)] = (32));

} else {
var statearr_23493_23569 = state_23453__$1;
(statearr_23493_23569[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (44))){
var inst_23429 = (state_23453[(21)]);
var inst_23442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23429);
var inst_23443 = cljs.core.pr_str.call(null,inst_23442);
var inst_23444 = [cljs.core.str("not required: "),cljs.core.str(inst_23443)].join('');
var inst_23445 = figwheel.client.utils.log.call(null,inst_23444);
var state_23453__$1 = state_23453;
var statearr_23494_23570 = state_23453__$1;
(statearr_23494_23570[(2)] = inst_23445);

(statearr_23494_23570[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (6))){
var inst_23348 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23495_23571 = state_23453__$1;
(statearr_23495_23571[(2)] = inst_23348);

(statearr_23495_23571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (28))){
var inst_23373 = (state_23453[(26)]);
var inst_23400 = (state_23453[(2)]);
var inst_23401 = cljs.core.not_empty.call(null,inst_23373);
var state_23453__$1 = (function (){var statearr_23496 = state_23453;
(statearr_23496[(29)] = inst_23400);

return statearr_23496;
})();
if(cljs.core.truth_(inst_23401)){
var statearr_23497_23572 = state_23453__$1;
(statearr_23497_23572[(1)] = (29));

} else {
var statearr_23498_23573 = state_23453__$1;
(statearr_23498_23573[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (25))){
var inst_23371 = (state_23453[(24)]);
var inst_23387 = (state_23453[(2)]);
var inst_23388 = cljs.core.not_empty.call(null,inst_23371);
var state_23453__$1 = (function (){var statearr_23499 = state_23453;
(statearr_23499[(30)] = inst_23387);

return statearr_23499;
})();
if(cljs.core.truth_(inst_23388)){
var statearr_23500_23574 = state_23453__$1;
(statearr_23500_23574[(1)] = (26));

} else {
var statearr_23501_23575 = state_23453__$1;
(statearr_23501_23575[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (34))){
var inst_23422 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
if(cljs.core.truth_(inst_23422)){
var statearr_23502_23576 = state_23453__$1;
(statearr_23502_23576[(1)] = (38));

} else {
var statearr_23503_23577 = state_23453__$1;
(statearr_23503_23577[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (17))){
var state_23453__$1 = state_23453;
var statearr_23504_23578 = state_23453__$1;
(statearr_23504_23578[(2)] = recompile_dependents);

(statearr_23504_23578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (3))){
var state_23453__$1 = state_23453;
var statearr_23505_23579 = state_23453__$1;
(statearr_23505_23579[(2)] = null);

(statearr_23505_23579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (12))){
var inst_23344 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23506_23580 = state_23453__$1;
(statearr_23506_23580[(2)] = inst_23344);

(statearr_23506_23580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (2))){
var inst_23306 = (state_23453[(13)]);
var inst_23313 = cljs.core.seq.call(null,inst_23306);
var inst_23314 = inst_23313;
var inst_23315 = null;
var inst_23316 = (0);
var inst_23317 = (0);
var state_23453__$1 = (function (){var statearr_23507 = state_23453;
(statearr_23507[(7)] = inst_23315);

(statearr_23507[(8)] = inst_23316);

(statearr_23507[(9)] = inst_23314);

(statearr_23507[(10)] = inst_23317);

return statearr_23507;
})();
var statearr_23508_23581 = state_23453__$1;
(statearr_23508_23581[(2)] = null);

(statearr_23508_23581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (23))){
var inst_23375 = (state_23453[(23)]);
var inst_23367 = (state_23453[(19)]);
var inst_23371 = (state_23453[(24)]);
var inst_23373 = (state_23453[(26)]);
var inst_23370 = (state_23453[(25)]);
var inst_23378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23380 = (function (){var all_files = inst_23367;
var res_SINGLEQUOTE_ = inst_23370;
var res = inst_23371;
var files_not_loaded = inst_23373;
var dependencies_that_loaded = inst_23375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23373,inst_23370,inst_23378,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23379){
var map__23509 = p__23379;
var map__23509__$1 = ((((!((map__23509 == null)))?((((map__23509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23509):map__23509);
var request_url = cljs.core.get.call(null,map__23509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23373,inst_23370,inst_23378,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23381 = cljs.core.reverse.call(null,inst_23375);
var inst_23382 = cljs.core.map.call(null,inst_23380,inst_23381);
var inst_23383 = cljs.core.pr_str.call(null,inst_23382);
var inst_23384 = figwheel.client.utils.log.call(null,inst_23383);
var state_23453__$1 = (function (){var statearr_23511 = state_23453;
(statearr_23511[(31)] = inst_23378);

return statearr_23511;
})();
var statearr_23512_23582 = state_23453__$1;
(statearr_23512_23582[(2)] = inst_23384);

(statearr_23512_23582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (35))){
var state_23453__$1 = state_23453;
var statearr_23513_23583 = state_23453__$1;
(statearr_23513_23583[(2)] = true);

(statearr_23513_23583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (19))){
var inst_23357 = (state_23453[(12)]);
var inst_23363 = figwheel.client.file_reloading.expand_files.call(null,inst_23357);
var state_23453__$1 = state_23453;
var statearr_23514_23584 = state_23453__$1;
(statearr_23514_23584[(2)] = inst_23363);

(statearr_23514_23584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (11))){
var state_23453__$1 = state_23453;
var statearr_23515_23585 = state_23453__$1;
(statearr_23515_23585[(2)] = null);

(statearr_23515_23585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (9))){
var inst_23346 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23516_23586 = state_23453__$1;
(statearr_23516_23586[(2)] = inst_23346);

(statearr_23516_23586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (5))){
var inst_23316 = (state_23453[(8)]);
var inst_23317 = (state_23453[(10)]);
var inst_23319 = (inst_23317 < inst_23316);
var inst_23320 = inst_23319;
var state_23453__$1 = state_23453;
if(cljs.core.truth_(inst_23320)){
var statearr_23517_23587 = state_23453__$1;
(statearr_23517_23587[(1)] = (7));

} else {
var statearr_23518_23588 = state_23453__$1;
(statearr_23518_23588[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (14))){
var inst_23327 = (state_23453[(22)]);
var inst_23336 = cljs.core.first.call(null,inst_23327);
var inst_23337 = figwheel.client.file_reloading.eval_body.call(null,inst_23336,opts);
var inst_23338 = cljs.core.next.call(null,inst_23327);
var inst_23314 = inst_23338;
var inst_23315 = null;
var inst_23316 = (0);
var inst_23317 = (0);
var state_23453__$1 = (function (){var statearr_23519 = state_23453;
(statearr_23519[(7)] = inst_23315);

(statearr_23519[(8)] = inst_23316);

(statearr_23519[(32)] = inst_23337);

(statearr_23519[(9)] = inst_23314);

(statearr_23519[(10)] = inst_23317);

return statearr_23519;
})();
var statearr_23520_23589 = state_23453__$1;
(statearr_23520_23589[(2)] = null);

(statearr_23520_23589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (45))){
var state_23453__$1 = state_23453;
var statearr_23521_23590 = state_23453__$1;
(statearr_23521_23590[(2)] = null);

(statearr_23521_23590[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (26))){
var inst_23375 = (state_23453[(23)]);
var inst_23367 = (state_23453[(19)]);
var inst_23371 = (state_23453[(24)]);
var inst_23373 = (state_23453[(26)]);
var inst_23370 = (state_23453[(25)]);
var inst_23390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23392 = (function (){var all_files = inst_23367;
var res_SINGLEQUOTE_ = inst_23370;
var res = inst_23371;
var files_not_loaded = inst_23373;
var dependencies_that_loaded = inst_23375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23373,inst_23370,inst_23390,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23391){
var map__23522 = p__23391;
var map__23522__$1 = ((((!((map__23522 == null)))?((((map__23522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23522):map__23522);
var namespace = cljs.core.get.call(null,map__23522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23373,inst_23370,inst_23390,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23393 = cljs.core.map.call(null,inst_23392,inst_23371);
var inst_23394 = cljs.core.pr_str.call(null,inst_23393);
var inst_23395 = figwheel.client.utils.log.call(null,inst_23394);
var inst_23396 = (function (){var all_files = inst_23367;
var res_SINGLEQUOTE_ = inst_23370;
var res = inst_23371;
var files_not_loaded = inst_23373;
var dependencies_that_loaded = inst_23375;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23373,inst_23370,inst_23390,inst_23392,inst_23393,inst_23394,inst_23395,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23375,inst_23367,inst_23371,inst_23373,inst_23370,inst_23390,inst_23392,inst_23393,inst_23394,inst_23395,state_val_23454,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23397 = setTimeout(inst_23396,(10));
var state_23453__$1 = (function (){var statearr_23524 = state_23453;
(statearr_23524[(33)] = inst_23395);

(statearr_23524[(34)] = inst_23390);

return statearr_23524;
})();
var statearr_23525_23591 = state_23453__$1;
(statearr_23525_23591[(2)] = inst_23397);

(statearr_23525_23591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (16))){
var state_23453__$1 = state_23453;
var statearr_23526_23592 = state_23453__$1;
(statearr_23526_23592[(2)] = reload_dependents);

(statearr_23526_23592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (38))){
var inst_23407 = (state_23453[(16)]);
var inst_23424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23407);
var state_23453__$1 = state_23453;
var statearr_23527_23593 = state_23453__$1;
(statearr_23527_23593[(2)] = inst_23424);

(statearr_23527_23593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (30))){
var state_23453__$1 = state_23453;
var statearr_23528_23594 = state_23453__$1;
(statearr_23528_23594[(2)] = null);

(statearr_23528_23594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (10))){
var inst_23327 = (state_23453[(22)]);
var inst_23329 = cljs.core.chunked_seq_QMARK_.call(null,inst_23327);
var state_23453__$1 = state_23453;
if(inst_23329){
var statearr_23529_23595 = state_23453__$1;
(statearr_23529_23595[(1)] = (13));

} else {
var statearr_23530_23596 = state_23453__$1;
(statearr_23530_23596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (18))){
var inst_23361 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
if(cljs.core.truth_(inst_23361)){
var statearr_23531_23597 = state_23453__$1;
(statearr_23531_23597[(1)] = (19));

} else {
var statearr_23532_23598 = state_23453__$1;
(statearr_23532_23598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (42))){
var state_23453__$1 = state_23453;
var statearr_23533_23599 = state_23453__$1;
(statearr_23533_23599[(2)] = null);

(statearr_23533_23599[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (37))){
var inst_23419 = (state_23453[(2)]);
var state_23453__$1 = state_23453;
var statearr_23534_23600 = state_23453__$1;
(statearr_23534_23600[(2)] = inst_23419);

(statearr_23534_23600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23454 === (8))){
var inst_23327 = (state_23453[(22)]);
var inst_23314 = (state_23453[(9)]);
var inst_23327__$1 = cljs.core.seq.call(null,inst_23314);
var state_23453__$1 = (function (){var statearr_23535 = state_23453;
(statearr_23535[(22)] = inst_23327__$1);

return statearr_23535;
})();
if(inst_23327__$1){
var statearr_23536_23601 = state_23453__$1;
(statearr_23536_23601[(1)] = (10));

} else {
var statearr_23537_23602 = state_23453__$1;
(statearr_23537_23602[(1)] = (11));

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
}
});})(c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18818__auto__,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto____0 = (function (){
var statearr_23541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23541[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto__);

(statearr_23541[(1)] = (1));

return statearr_23541;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto____1 = (function (state_23453){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_23453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e23542){if((e23542 instanceof Object)){
var ex__18822__auto__ = e23542;
var statearr_23543_23603 = state_23453;
(statearr_23543_23603[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23604 = state_23453;
state_23453 = G__23604;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto__ = function(state_23453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto____1.call(this,state_23453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18932__auto__ = (function (){var statearr_23544 = f__18931__auto__.call(null);
(statearr_23544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_23544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__,map__23299,map__23299__$1,opts,before_jsload,on_jsload,reload_dependents,map__23300,map__23300__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18930__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23607,link){
var map__23610 = p__23607;
var map__23610__$1 = ((((!((map__23610 == null)))?((((map__23610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23610):map__23610);
var file = cljs.core.get.call(null,map__23610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23610,map__23610__$1,file){
return (function (p1__23605_SHARP_,p2__23606_SHARP_){
if(cljs.core._EQ_.call(null,p1__23605_SHARP_,p2__23606_SHARP_)){
return p1__23605_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23610,map__23610__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23616){
var map__23617 = p__23616;
var map__23617__$1 = ((((!((map__23617 == null)))?((((map__23617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23617):map__23617);
var match_length = cljs.core.get.call(null,map__23617__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23617__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23612_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23612_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23619 = [];
var len__17821__auto___23622 = arguments.length;
var i__17822__auto___23623 = (0);
while(true){
if((i__17822__auto___23623 < len__17821__auto___23622)){
args23619.push((arguments[i__17822__auto___23623]));

var G__23624 = (i__17822__auto___23623 + (1));
i__17822__auto___23623 = G__23624;
continue;
} else {
}
break;
}

var G__23621 = args23619.length;
switch (G__23621) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23619.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23626_SHARP_,p2__23627_SHARP_){
return cljs.core.assoc.call(null,p1__23626_SHARP_,cljs.core.get.call(null,p2__23627_SHARP_,key),p2__23627_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23628){
var map__23631 = p__23628;
var map__23631__$1 = ((((!((map__23631 == null)))?((((map__23631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23631):map__23631);
var f_data = map__23631__$1;
var file = cljs.core.get.call(null,map__23631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23633,files_msg){
var map__23640 = p__23633;
var map__23640__$1 = ((((!((map__23640 == null)))?((((map__23640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);
var opts = map__23640__$1;
var on_cssload = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23642_23646 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23643_23647 = null;
var count__23644_23648 = (0);
var i__23645_23649 = (0);
while(true){
if((i__23645_23649 < count__23644_23648)){
var f_23650 = cljs.core._nth.call(null,chunk__23643_23647,i__23645_23649);
figwheel.client.file_reloading.reload_css_file.call(null,f_23650);

var G__23651 = seq__23642_23646;
var G__23652 = chunk__23643_23647;
var G__23653 = count__23644_23648;
var G__23654 = (i__23645_23649 + (1));
seq__23642_23646 = G__23651;
chunk__23643_23647 = G__23652;
count__23644_23648 = G__23653;
i__23645_23649 = G__23654;
continue;
} else {
var temp__4425__auto___23655 = cljs.core.seq.call(null,seq__23642_23646);
if(temp__4425__auto___23655){
var seq__23642_23656__$1 = temp__4425__auto___23655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23642_23656__$1)){
var c__17566__auto___23657 = cljs.core.chunk_first.call(null,seq__23642_23656__$1);
var G__23658 = cljs.core.chunk_rest.call(null,seq__23642_23656__$1);
var G__23659 = c__17566__auto___23657;
var G__23660 = cljs.core.count.call(null,c__17566__auto___23657);
var G__23661 = (0);
seq__23642_23646 = G__23658;
chunk__23643_23647 = G__23659;
count__23644_23648 = G__23660;
i__23645_23649 = G__23661;
continue;
} else {
var f_23662 = cljs.core.first.call(null,seq__23642_23656__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23662);

var G__23663 = cljs.core.next.call(null,seq__23642_23656__$1);
var G__23664 = null;
var G__23665 = (0);
var G__23666 = (0);
seq__23642_23646 = G__23663;
chunk__23643_23647 = G__23664;
count__23644_23648 = G__23665;
i__23645_23649 = G__23666;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23640,map__23640__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23640,map__23640__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map