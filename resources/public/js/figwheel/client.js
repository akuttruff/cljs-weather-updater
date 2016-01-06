// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23735 = cljs.core._EQ_;
var expr__23736 = (function (){var or__16763__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23735.call(null,"true",expr__23736))){
return true;
} else {
if(cljs.core.truth_(pred__23735.call(null,"false",expr__23736))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23736)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17828__auto__ = [];
var len__17821__auto___23739 = arguments.length;
var i__17822__auto___23740 = (0);
while(true){
if((i__17822__auto___23740 < len__17821__auto___23739)){
args__17828__auto__.push((arguments[i__17822__auto___23740]));

var G__23741 = (i__17822__auto___23740 + (1));
i__17822__auto___23740 = G__23741;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((0) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17829__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23738){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23738));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23742){
var map__23745 = p__23742;
var map__23745__$1 = ((((!((map__23745 == null)))?((((map__23745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23745):map__23745);
var message = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16763__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16763__auto__)){
return or__16763__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16751__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16751__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16751__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18930__auto___23907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___23907,ch){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___23907,ch){
return (function (state_23876){
var state_val_23877 = (state_23876[(1)]);
if((state_val_23877 === (7))){
var inst_23872 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
var statearr_23878_23908 = state_23876__$1;
(statearr_23878_23908[(2)] = inst_23872);

(statearr_23878_23908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (1))){
var state_23876__$1 = state_23876;
var statearr_23879_23909 = state_23876__$1;
(statearr_23879_23909[(2)] = null);

(statearr_23879_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (4))){
var inst_23829 = (state_23876[(7)]);
var inst_23829__$1 = (state_23876[(2)]);
var state_23876__$1 = (function (){var statearr_23880 = state_23876;
(statearr_23880[(7)] = inst_23829__$1);

return statearr_23880;
})();
if(cljs.core.truth_(inst_23829__$1)){
var statearr_23881_23910 = state_23876__$1;
(statearr_23881_23910[(1)] = (5));

} else {
var statearr_23882_23911 = state_23876__$1;
(statearr_23882_23911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (15))){
var inst_23836 = (state_23876[(8)]);
var inst_23851 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23836);
var inst_23852 = cljs.core.first.call(null,inst_23851);
var inst_23853 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23852);
var inst_23854 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23853)].join('');
var inst_23855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23854);
var state_23876__$1 = state_23876;
var statearr_23883_23912 = state_23876__$1;
(statearr_23883_23912[(2)] = inst_23855);

(statearr_23883_23912[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (13))){
var inst_23860 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
var statearr_23884_23913 = state_23876__$1;
(statearr_23884_23913[(2)] = inst_23860);

(statearr_23884_23913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (6))){
var state_23876__$1 = state_23876;
var statearr_23885_23914 = state_23876__$1;
(statearr_23885_23914[(2)] = null);

(statearr_23885_23914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (17))){
var inst_23858 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
var statearr_23886_23915 = state_23876__$1;
(statearr_23886_23915[(2)] = inst_23858);

(statearr_23886_23915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (3))){
var inst_23874 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23876__$1,inst_23874);
} else {
if((state_val_23877 === (12))){
var inst_23835 = (state_23876[(9)]);
var inst_23849 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23835,opts);
var state_23876__$1 = state_23876;
if(cljs.core.truth_(inst_23849)){
var statearr_23887_23916 = state_23876__$1;
(statearr_23887_23916[(1)] = (15));

} else {
var statearr_23888_23917 = state_23876__$1;
(statearr_23888_23917[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (2))){
var state_23876__$1 = state_23876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23876__$1,(4),ch);
} else {
if((state_val_23877 === (11))){
var inst_23836 = (state_23876[(8)]);
var inst_23841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23842 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23836);
var inst_23843 = cljs.core.async.timeout.call(null,(1000));
var inst_23844 = [inst_23842,inst_23843];
var inst_23845 = (new cljs.core.PersistentVector(null,2,(5),inst_23841,inst_23844,null));
var state_23876__$1 = state_23876;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23876__$1,(14),inst_23845);
} else {
if((state_val_23877 === (9))){
var inst_23836 = (state_23876[(8)]);
var inst_23862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23863 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23836);
var inst_23864 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23863);
var inst_23865 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23864)].join('');
var inst_23866 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23865);
var state_23876__$1 = (function (){var statearr_23889 = state_23876;
(statearr_23889[(10)] = inst_23862);

return statearr_23889;
})();
var statearr_23890_23918 = state_23876__$1;
(statearr_23890_23918[(2)] = inst_23866);

(statearr_23890_23918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (5))){
var inst_23829 = (state_23876[(7)]);
var inst_23831 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23832 = (new cljs.core.PersistentArrayMap(null,2,inst_23831,null));
var inst_23833 = (new cljs.core.PersistentHashSet(null,inst_23832,null));
var inst_23834 = figwheel.client.focus_msgs.call(null,inst_23833,inst_23829);
var inst_23835 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23834);
var inst_23836 = cljs.core.first.call(null,inst_23834);
var inst_23837 = figwheel.client.autoload_QMARK_.call(null);
var state_23876__$1 = (function (){var statearr_23891 = state_23876;
(statearr_23891[(8)] = inst_23836);

(statearr_23891[(9)] = inst_23835);

return statearr_23891;
})();
if(cljs.core.truth_(inst_23837)){
var statearr_23892_23919 = state_23876__$1;
(statearr_23892_23919[(1)] = (8));

} else {
var statearr_23893_23920 = state_23876__$1;
(statearr_23893_23920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (14))){
var inst_23847 = (state_23876[(2)]);
var state_23876__$1 = state_23876;
var statearr_23894_23921 = state_23876__$1;
(statearr_23894_23921[(2)] = inst_23847);

(statearr_23894_23921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (16))){
var state_23876__$1 = state_23876;
var statearr_23895_23922 = state_23876__$1;
(statearr_23895_23922[(2)] = null);

(statearr_23895_23922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (10))){
var inst_23868 = (state_23876[(2)]);
var state_23876__$1 = (function (){var statearr_23896 = state_23876;
(statearr_23896[(11)] = inst_23868);

return statearr_23896;
})();
var statearr_23897_23923 = state_23876__$1;
(statearr_23897_23923[(2)] = null);

(statearr_23897_23923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23877 === (8))){
var inst_23835 = (state_23876[(9)]);
var inst_23839 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23835,opts);
var state_23876__$1 = state_23876;
if(cljs.core.truth_(inst_23839)){
var statearr_23898_23924 = state_23876__$1;
(statearr_23898_23924[(1)] = (11));

} else {
var statearr_23899_23925 = state_23876__$1;
(statearr_23899_23925[(1)] = (12));

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
});})(c__18930__auto___23907,ch))
;
return ((function (switch__18818__auto__,c__18930__auto___23907,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18819__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18819__auto____0 = (function (){
var statearr_23903 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23903[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18819__auto__);

(statearr_23903[(1)] = (1));

return statearr_23903;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18819__auto____1 = (function (state_23876){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_23876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e23904){if((e23904 instanceof Object)){
var ex__18822__auto__ = e23904;
var statearr_23905_23926 = state_23876;
(statearr_23905_23926[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23927 = state_23876;
state_23876 = G__23927;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18819__auto__ = function(state_23876){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18819__auto____1.call(this,state_23876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18819__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18819__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___23907,ch))
})();
var state__18932__auto__ = (function (){var statearr_23906 = f__18931__auto__.call(null);
(statearr_23906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___23907);

return statearr_23906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___23907,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23928_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23928_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23935 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23935){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23934 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23934;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23933;
}}catch (e23932){if((e23932 instanceof Error)){
var e = e23932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23935], null));
} else {
var e = e23932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23935))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23936){
var map__23943 = p__23936;
var map__23943__$1 = ((((!((map__23943 == null)))?((((map__23943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23943):map__23943);
var opts = map__23943__$1;
var build_id = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23943,map__23943__$1,opts,build_id){
return (function (p__23945){
var vec__23946 = p__23945;
var map__23947 = cljs.core.nth.call(null,vec__23946,(0),null);
var map__23947__$1 = ((((!((map__23947 == null)))?((((map__23947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23947):map__23947);
var msg = map__23947__$1;
var msg_name = cljs.core.get.call(null,map__23947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23946,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23946,map__23947,map__23947__$1,msg,msg_name,_,map__23943,map__23943__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23946,map__23947,map__23947__$1,msg,msg_name,_,map__23943,map__23943__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23943,map__23943__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23953){
var vec__23954 = p__23953;
var map__23955 = cljs.core.nth.call(null,vec__23954,(0),null);
var map__23955__$1 = ((((!((map__23955 == null)))?((((map__23955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23955):map__23955);
var msg = map__23955__$1;
var msg_name = cljs.core.get.call(null,map__23955__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23954,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23957){
var map__23967 = p__23957;
var map__23967__$1 = ((((!((map__23967 == null)))?((((map__23967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23967):map__23967);
var on_compile_warning = cljs.core.get.call(null,map__23967__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23967__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23967,map__23967__$1,on_compile_warning,on_compile_fail){
return (function (p__23969){
var vec__23970 = p__23969;
var map__23971 = cljs.core.nth.call(null,vec__23970,(0),null);
var map__23971__$1 = ((((!((map__23971 == null)))?((((map__23971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23971):map__23971);
var msg = map__23971__$1;
var msg_name = cljs.core.get.call(null,map__23971__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23970,(1));
var pred__23973 = cljs.core._EQ_;
var expr__23974 = msg_name;
if(cljs.core.truth_(pred__23973.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23974))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23973.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23974))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23967,map__23967__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__,msg_hist,msg_names,msg){
return (function (state_24190){
var state_val_24191 = (state_24190[(1)]);
if((state_val_24191 === (7))){
var inst_24114 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24114)){
var statearr_24192_24238 = state_24190__$1;
(statearr_24192_24238[(1)] = (8));

} else {
var statearr_24193_24239 = state_24190__$1;
(statearr_24193_24239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (20))){
var inst_24184 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24194_24240 = state_24190__$1;
(statearr_24194_24240[(2)] = inst_24184);

(statearr_24194_24240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (27))){
var inst_24180 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24195_24241 = state_24190__$1;
(statearr_24195_24241[(2)] = inst_24180);

(statearr_24195_24241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (1))){
var inst_24107 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24107)){
var statearr_24196_24242 = state_24190__$1;
(statearr_24196_24242[(1)] = (2));

} else {
var statearr_24197_24243 = state_24190__$1;
(statearr_24197_24243[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (24))){
var inst_24182 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24198_24244 = state_24190__$1;
(statearr_24198_24244[(2)] = inst_24182);

(statearr_24198_24244[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (4))){
var inst_24188 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24190__$1,inst_24188);
} else {
if((state_val_24191 === (15))){
var inst_24186 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24199_24245 = state_24190__$1;
(statearr_24199_24245[(2)] = inst_24186);

(statearr_24199_24245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (21))){
var inst_24145 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24200_24246 = state_24190__$1;
(statearr_24200_24246[(2)] = inst_24145);

(statearr_24200_24246[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (31))){
var inst_24169 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24169)){
var statearr_24201_24247 = state_24190__$1;
(statearr_24201_24247[(1)] = (34));

} else {
var statearr_24202_24248 = state_24190__$1;
(statearr_24202_24248[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (32))){
var inst_24178 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24203_24249 = state_24190__$1;
(statearr_24203_24249[(2)] = inst_24178);

(statearr_24203_24249[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (33))){
var inst_24167 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24204_24250 = state_24190__$1;
(statearr_24204_24250[(2)] = inst_24167);

(statearr_24204_24250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (13))){
var inst_24128 = figwheel.client.heads_up.clear.call(null);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(16),inst_24128);
} else {
if((state_val_24191 === (22))){
var inst_24149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24150 = figwheel.client.heads_up.append_message.call(null,inst_24149);
var state_24190__$1 = state_24190;
var statearr_24205_24251 = state_24190__$1;
(statearr_24205_24251[(2)] = inst_24150);

(statearr_24205_24251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (36))){
var inst_24176 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24206_24252 = state_24190__$1;
(statearr_24206_24252[(2)] = inst_24176);

(statearr_24206_24252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (29))){
var inst_24160 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24207_24253 = state_24190__$1;
(statearr_24207_24253[(2)] = inst_24160);

(statearr_24207_24253[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (6))){
var inst_24109 = (state_24190[(7)]);
var state_24190__$1 = state_24190;
var statearr_24208_24254 = state_24190__$1;
(statearr_24208_24254[(2)] = inst_24109);

(statearr_24208_24254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (28))){
var inst_24156 = (state_24190[(2)]);
var inst_24157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24158 = figwheel.client.heads_up.display_warning.call(null,inst_24157);
var state_24190__$1 = (function (){var statearr_24209 = state_24190;
(statearr_24209[(8)] = inst_24156);

return statearr_24209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(29),inst_24158);
} else {
if((state_val_24191 === (25))){
var inst_24154 = figwheel.client.heads_up.clear.call(null);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(28),inst_24154);
} else {
if((state_val_24191 === (34))){
var inst_24171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(37),inst_24171);
} else {
if((state_val_24191 === (17))){
var inst_24136 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24210_24255 = state_24190__$1;
(statearr_24210_24255[(2)] = inst_24136);

(statearr_24210_24255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (3))){
var inst_24126 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24126)){
var statearr_24211_24256 = state_24190__$1;
(statearr_24211_24256[(1)] = (13));

} else {
var statearr_24212_24257 = state_24190__$1;
(statearr_24212_24257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (12))){
var inst_24122 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24213_24258 = state_24190__$1;
(statearr_24213_24258[(2)] = inst_24122);

(statearr_24213_24258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (2))){
var inst_24109 = (state_24190[(7)]);
var inst_24109__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24190__$1 = (function (){var statearr_24214 = state_24190;
(statearr_24214[(7)] = inst_24109__$1);

return statearr_24214;
})();
if(cljs.core.truth_(inst_24109__$1)){
var statearr_24215_24259 = state_24190__$1;
(statearr_24215_24259[(1)] = (5));

} else {
var statearr_24216_24260 = state_24190__$1;
(statearr_24216_24260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (23))){
var inst_24152 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24152)){
var statearr_24217_24261 = state_24190__$1;
(statearr_24217_24261[(1)] = (25));

} else {
var statearr_24218_24262 = state_24190__$1;
(statearr_24218_24262[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (35))){
var state_24190__$1 = state_24190;
var statearr_24219_24263 = state_24190__$1;
(statearr_24219_24263[(2)] = null);

(statearr_24219_24263[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (19))){
var inst_24147 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24147)){
var statearr_24220_24264 = state_24190__$1;
(statearr_24220_24264[(1)] = (22));

} else {
var statearr_24221_24265 = state_24190__$1;
(statearr_24221_24265[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (11))){
var inst_24118 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24222_24266 = state_24190__$1;
(statearr_24222_24266[(2)] = inst_24118);

(statearr_24222_24266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (9))){
var inst_24120 = figwheel.client.heads_up.clear.call(null);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(12),inst_24120);
} else {
if((state_val_24191 === (5))){
var inst_24111 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24190__$1 = state_24190;
var statearr_24223_24267 = state_24190__$1;
(statearr_24223_24267[(2)] = inst_24111);

(statearr_24223_24267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (14))){
var inst_24138 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24138)){
var statearr_24224_24268 = state_24190__$1;
(statearr_24224_24268[(1)] = (18));

} else {
var statearr_24225_24269 = state_24190__$1;
(statearr_24225_24269[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (26))){
var inst_24162 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24190__$1 = state_24190;
if(cljs.core.truth_(inst_24162)){
var statearr_24226_24270 = state_24190__$1;
(statearr_24226_24270[(1)] = (30));

} else {
var statearr_24227_24271 = state_24190__$1;
(statearr_24227_24271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (16))){
var inst_24130 = (state_24190[(2)]);
var inst_24131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24132 = figwheel.client.format_messages.call(null,inst_24131);
var inst_24133 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24134 = figwheel.client.heads_up.display_error.call(null,inst_24132,inst_24133);
var state_24190__$1 = (function (){var statearr_24228 = state_24190;
(statearr_24228[(9)] = inst_24130);

return statearr_24228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(17),inst_24134);
} else {
if((state_val_24191 === (30))){
var inst_24164 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24165 = figwheel.client.heads_up.display_warning.call(null,inst_24164);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(33),inst_24165);
} else {
if((state_val_24191 === (10))){
var inst_24124 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24229_24272 = state_24190__$1;
(statearr_24229_24272[(2)] = inst_24124);

(statearr_24229_24272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (18))){
var inst_24140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24141 = figwheel.client.format_messages.call(null,inst_24140);
var inst_24142 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24143 = figwheel.client.heads_up.display_error.call(null,inst_24141,inst_24142);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(21),inst_24143);
} else {
if((state_val_24191 === (37))){
var inst_24173 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24230_24273 = state_24190__$1;
(statearr_24230_24273[(2)] = inst_24173);

(statearr_24230_24273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (8))){
var inst_24116 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(11),inst_24116);
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
});})(c__18930__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18818__auto__,c__18930__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto____0 = (function (){
var statearr_24234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24234[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto__);

(statearr_24234[(1)] = (1));

return statearr_24234;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto____1 = (function (state_24190){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_24190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e24235){if((e24235 instanceof Object)){
var ex__18822__auto__ = e24235;
var statearr_24236_24274 = state_24190;
(statearr_24236_24274[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24275 = state_24190;
state_24190 = G__24275;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto__ = function(state_24190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto____1.call(this,state_24190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__,msg_hist,msg_names,msg))
})();
var state__18932__auto__ = (function (){var statearr_24237 = f__18931__auto__.call(null);
(statearr_24237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_24237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__,msg_hist,msg_names,msg))
);

return c__18930__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18930__auto___24338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto___24338,ch){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto___24338,ch){
return (function (state_24321){
var state_val_24322 = (state_24321[(1)]);
if((state_val_24322 === (1))){
var state_24321__$1 = state_24321;
var statearr_24323_24339 = state_24321__$1;
(statearr_24323_24339[(2)] = null);

(statearr_24323_24339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (2))){
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24321__$1,(4),ch);
} else {
if((state_val_24322 === (3))){
var inst_24319 = (state_24321[(2)]);
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24321__$1,inst_24319);
} else {
if((state_val_24322 === (4))){
var inst_24309 = (state_24321[(7)]);
var inst_24309__$1 = (state_24321[(2)]);
var state_24321__$1 = (function (){var statearr_24324 = state_24321;
(statearr_24324[(7)] = inst_24309__$1);

return statearr_24324;
})();
if(cljs.core.truth_(inst_24309__$1)){
var statearr_24325_24340 = state_24321__$1;
(statearr_24325_24340[(1)] = (5));

} else {
var statearr_24326_24341 = state_24321__$1;
(statearr_24326_24341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (5))){
var inst_24309 = (state_24321[(7)]);
var inst_24311 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24309);
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24321__$1,(8),inst_24311);
} else {
if((state_val_24322 === (6))){
var state_24321__$1 = state_24321;
var statearr_24327_24342 = state_24321__$1;
(statearr_24327_24342[(2)] = null);

(statearr_24327_24342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (7))){
var inst_24317 = (state_24321[(2)]);
var state_24321__$1 = state_24321;
var statearr_24328_24343 = state_24321__$1;
(statearr_24328_24343[(2)] = inst_24317);

(statearr_24328_24343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24322 === (8))){
var inst_24313 = (state_24321[(2)]);
var state_24321__$1 = (function (){var statearr_24329 = state_24321;
(statearr_24329[(8)] = inst_24313);

return statearr_24329;
})();
var statearr_24330_24344 = state_24321__$1;
(statearr_24330_24344[(2)] = null);

(statearr_24330_24344[(1)] = (2));


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
});})(c__18930__auto___24338,ch))
;
return ((function (switch__18818__auto__,c__18930__auto___24338,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18819__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18819__auto____0 = (function (){
var statearr_24334 = [null,null,null,null,null,null,null,null,null];
(statearr_24334[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18819__auto__);

(statearr_24334[(1)] = (1));

return statearr_24334;
});
var figwheel$client$heads_up_plugin_$_state_machine__18819__auto____1 = (function (state_24321){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_24321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e24335){if((e24335 instanceof Object)){
var ex__18822__auto__ = e24335;
var statearr_24336_24345 = state_24321;
(statearr_24336_24345[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24346 = state_24321;
state_24321 = G__24346;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18819__auto__ = function(state_24321){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18819__auto____1.call(this,state_24321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18819__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18819__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto___24338,ch))
})();
var state__18932__auto__ = (function (){var statearr_24337 = f__18931__auto__.call(null);
(statearr_24337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto___24338);

return statearr_24337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto___24338,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18930__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18930__auto__){
return (function (){
var f__18931__auto__ = (function (){var switch__18818__auto__ = ((function (c__18930__auto__){
return (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (1))){
var inst_24362 = cljs.core.async.timeout.call(null,(3000));
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24367__$1,(2),inst_24362);
} else {
if((state_val_24368 === (2))){
var inst_24364 = (state_24367[(2)]);
var inst_24365 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24367__$1 = (function (){var statearr_24369 = state_24367;
(statearr_24369[(7)] = inst_24364);

return statearr_24369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else {
return null;
}
}
});})(c__18930__auto__))
;
return ((function (switch__18818__auto__,c__18930__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18819__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18819__auto____0 = (function (){
var statearr_24373 = [null,null,null,null,null,null,null,null];
(statearr_24373[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18819__auto__);

(statearr_24373[(1)] = (1));

return statearr_24373;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18819__auto____1 = (function (state_24367){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_24367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e24374){if((e24374 instanceof Object)){
var ex__18822__auto__ = e24374;
var statearr_24375_24377 = state_24367;
(statearr_24375_24377[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24378 = state_24367;
state_24367 = G__24378;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18819__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18819__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18819__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18819__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18819__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__18930__auto__))
})();
var state__18932__auto__ = (function (){var statearr_24376 = f__18931__auto__.call(null);
(statearr_24376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18930__auto__);

return statearr_24376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18932__auto__);
});})(c__18930__auto__))
);

return c__18930__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24379){
var map__24386 = p__24379;
var map__24386__$1 = ((((!((map__24386 == null)))?((((map__24386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);
var ed = map__24386__$1;
var formatted_exception = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24388_24392 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24389_24393 = null;
var count__24390_24394 = (0);
var i__24391_24395 = (0);
while(true){
if((i__24391_24395 < count__24390_24394)){
var msg_24396 = cljs.core._nth.call(null,chunk__24389_24393,i__24391_24395);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24396);

var G__24397 = seq__24388_24392;
var G__24398 = chunk__24389_24393;
var G__24399 = count__24390_24394;
var G__24400 = (i__24391_24395 + (1));
seq__24388_24392 = G__24397;
chunk__24389_24393 = G__24398;
count__24390_24394 = G__24399;
i__24391_24395 = G__24400;
continue;
} else {
var temp__4425__auto___24401 = cljs.core.seq.call(null,seq__24388_24392);
if(temp__4425__auto___24401){
var seq__24388_24402__$1 = temp__4425__auto___24401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24388_24402__$1)){
var c__17566__auto___24403 = cljs.core.chunk_first.call(null,seq__24388_24402__$1);
var G__24404 = cljs.core.chunk_rest.call(null,seq__24388_24402__$1);
var G__24405 = c__17566__auto___24403;
var G__24406 = cljs.core.count.call(null,c__17566__auto___24403);
var G__24407 = (0);
seq__24388_24392 = G__24404;
chunk__24389_24393 = G__24405;
count__24390_24394 = G__24406;
i__24391_24395 = G__24407;
continue;
} else {
var msg_24408 = cljs.core.first.call(null,seq__24388_24402__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24408);

var G__24409 = cljs.core.next.call(null,seq__24388_24402__$1);
var G__24410 = null;
var G__24411 = (0);
var G__24412 = (0);
seq__24388_24392 = G__24409;
chunk__24389_24393 = G__24410;
count__24390_24394 = G__24411;
i__24391_24395 = G__24412;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24413){
var map__24416 = p__24413;
var map__24416__$1 = ((((!((map__24416 == null)))?((((map__24416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24416):map__24416);
var w = map__24416__$1;
var message = cljs.core.get.call(null,map__24416__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16751__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16751__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16751__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24424 = cljs.core.seq.call(null,plugins);
var chunk__24425 = null;
var count__24426 = (0);
var i__24427 = (0);
while(true){
if((i__24427 < count__24426)){
var vec__24428 = cljs.core._nth.call(null,chunk__24425,i__24427);
var k = cljs.core.nth.call(null,vec__24428,(0),null);
var plugin = cljs.core.nth.call(null,vec__24428,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24430 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24424,chunk__24425,count__24426,i__24427,pl_24430,vec__24428,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24430.call(null,msg_hist);
});})(seq__24424,chunk__24425,count__24426,i__24427,pl_24430,vec__24428,k,plugin))
);
} else {
}

var G__24431 = seq__24424;
var G__24432 = chunk__24425;
var G__24433 = count__24426;
var G__24434 = (i__24427 + (1));
seq__24424 = G__24431;
chunk__24425 = G__24432;
count__24426 = G__24433;
i__24427 = G__24434;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24424);
if(temp__4425__auto__){
var seq__24424__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24424__$1)){
var c__17566__auto__ = cljs.core.chunk_first.call(null,seq__24424__$1);
var G__24435 = cljs.core.chunk_rest.call(null,seq__24424__$1);
var G__24436 = c__17566__auto__;
var G__24437 = cljs.core.count.call(null,c__17566__auto__);
var G__24438 = (0);
seq__24424 = G__24435;
chunk__24425 = G__24436;
count__24426 = G__24437;
i__24427 = G__24438;
continue;
} else {
var vec__24429 = cljs.core.first.call(null,seq__24424__$1);
var k = cljs.core.nth.call(null,vec__24429,(0),null);
var plugin = cljs.core.nth.call(null,vec__24429,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24439 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24424,chunk__24425,count__24426,i__24427,pl_24439,vec__24429,k,plugin,seq__24424__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24439.call(null,msg_hist);
});})(seq__24424,chunk__24425,count__24426,i__24427,pl_24439,vec__24429,k,plugin,seq__24424__$1,temp__4425__auto__))
);
} else {
}

var G__24440 = cljs.core.next.call(null,seq__24424__$1);
var G__24441 = null;
var G__24442 = (0);
var G__24443 = (0);
seq__24424 = G__24440;
chunk__24425 = G__24441;
count__24426 = G__24442;
i__24427 = G__24443;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24444 = [];
var len__17821__auto___24447 = arguments.length;
var i__17822__auto___24448 = (0);
while(true){
if((i__17822__auto___24448 < len__17821__auto___24447)){
args24444.push((arguments[i__17822__auto___24448]));

var G__24449 = (i__17822__auto___24448 + (1));
i__17822__auto___24448 = G__24449;
continue;
} else {
}
break;
}

var G__24446 = args24444.length;
switch (G__24446) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24444.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17828__auto__ = [];
var len__17821__auto___24455 = arguments.length;
var i__17822__auto___24456 = (0);
while(true){
if((i__17822__auto___24456 < len__17821__auto___24455)){
args__17828__auto__.push((arguments[i__17822__auto___24456]));

var G__24457 = (i__17822__auto___24456 + (1));
i__17822__auto___24456 = G__24457;
continue;
} else {
}
break;
}

var argseq__17829__auto__ = ((((0) < args__17828__auto__.length))?(new cljs.core.IndexedSeq(args__17828__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17829__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24452){
var map__24453 = p__24452;
var map__24453__$1 = ((((!((map__24453 == null)))?((((map__24453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24453):map__24453);
var opts = map__24453__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24451){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24451));
});

//# sourceMappingURL=client.js.map