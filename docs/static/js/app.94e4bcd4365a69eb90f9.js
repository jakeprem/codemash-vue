webpackJsonp([1],Array(25).concat([function(e,t,s){"use strict";s.d(t,"i",function(){return n}),s.d(t,"a",function(){return i}),s.d(t,"b",function(){return a}),s.d(t,"c",function(){return c}),s.d(t,"d",function(){return o}),s.d(t,"e",function(){return r}),s.d(t,"f",function(){return l}),s.d(t,"h",function(){return u}),s.d(t,"g",function(){return d});var n="EXAMPLE_CONST",i="SET_SESSIONS",a="SELECT_TAG",c="UNSELECT_TAG",o="CLEAR_SELECTED_TAGS",r="ADD_TO_SCHEDULE",l="REMOVE_FROM_SCHEDULE",u="SET_TAG_ANY_TRUE",d="SET_TAG_ANY_FALSE"},,,,,,,,,,,,,,,,function(e,t,s){var n=s(4)(s(81),s(160),null,null,null);e.exports=n.exports},function(e,t,s){var n=s(4)(s(84),s(162),null,null,null);e.exports=n.exports},function(e,t,s){function n(e){s(143)}var i=s(4)(s(85),s(159),n,null,null);e.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,function(e,t,s){function n(e){s(146)}var i=s(4)(s(83),s(164),n,null,null);e.exports=i.exports},,,function(e,t,s){"use strict";var n=s(24),i=s(167),a=s(154),c=s.n(a),o=s(153),r=s.n(o),l=s(155),u=s.n(l);n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Sessions",component:c.a},{path:"/myschedule",name:"MySchedule",component:r.a},{path:"/table",name:"SessionsTable",component:u.a}]})},function(e,t,s){"use strict";var n=s(24),i=s(9),a=s(75),c=s(74),o=s(77),r=s(76);n.a.use(i.a);var l={exampleState:!1};t.a=new i.a.Store({state:l,getters:a.a,actions:c.a,mutations:o.a,modules:[r.a],strict:!1})},,function(e,t,s){function n(e){s(145)}var i=s(4)(s(78),s(163),n,null,null);e.exports=i.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(24),i=s(72),a=s.n(i),c=s(69),o=s(70),r=s(71),l=s.n(r);n.a.use(l.a,{id:"UA-74836913-3",router:c.a}),n.a.config.productionTip=!1,new n.a({el:"#app",router:c.a,store:o.a,render:function(e){return e(a.a)}})},function(e,t,s){"use strict";var n=s(25);t.a={setExample:function(e){(0,e.commit)(n.i)}}},function(e,t,s){"use strict";t.a={isLoading:function(e){return e.isLoading}}},function(e,t,s){"use strict";var n,i=s(45),a=s.n(i),c=s(93),o=s.n(c),r=s(89),l=s.n(r),u=s(92),d=s.n(u),f=s(23),v=s.n(f),h=s(25),m={getSessionsData:function(){return new d.a(function(e,t){var s=new XMLHttpRequest;s.open("GET","https://speakers.codemash.org/api/sessionsdata?type=json"),s.onload=function(){200===s.status?e(s.responseText):t("Ajax failed")},s.send()})}},p={sessions:[],selectedTags:[],tagAny:!0,mySchedule:[]},_={sessions:function(e){return e.sessions},tags:function(e){var t=e.sessions.reduce(function(e,t){return t.Tags.concat(e)},[]);return l()(new o.a(t))},mySchedule:function(e){return e.mySchedule},mySessions:function(e){return e.sessions.filter(function(t){return e.mySchedule.includes(t.Id)})},myScheduleByStartTime:function(e){var t=e.sessions.filter(function(t){return e.mySchedule.includes(t.Id)});return t.sort(function(e,t){return new Date(e.SessionStartTime)-new Date(t.SessionStartTime)}),v.a.groupBy(t,"SessionStartTime")},selectedTags:function(e){return e.selectedTags},tagAny:function(e){return e.tagAny}},g={getSessions:function(e){var t=e.commit;return new d.a(function(e){m.getSessionsData().then(function(s){var n=JSON.parse(s);t(h.a,n),e()})})},selectTag:function(e,t){(0,e.commit)(h.b,t)},unselectTag:function(e,t){(0,e.commit)(h.c,t)},clearSelectedTags:function(e){(0,e.commit)(h.d)},addToSchedule:function(e,t){(0,e.commit)(h.e,t)},removeFromSchedule:function(e,t){(0,e.commit)(h.f,t)},setTagAnyFalse:function(e){(0,e.commit)(h.g)},setTagAnyTrue:function(e){(0,e.commit)(h.h)}},S=(n={},a()(n,h.a,function(e,t){e.sessions=t}),a()(n,h.b,function(e,t){e.selectedTags.push(t)}),a()(n,h.c,function(e,t){var s=e.selectedTags.indexOf(t);-1!==s&&e.selectedTags.splice(s,1)}),a()(n,h.d,function(e){e.selectedTags=[]}),a()(n,h.e,function(e,t){e.mySchedule.push(t)}),a()(n,h.f,function(e,t){var s=e.mySchedule.indexOf(t);e.mySchedule.splice(s,1)}),a()(n,h.g,function(e){e.tagAny=!1}),a()(n,h.h,function(e){e.tagAny=!0}),n);t.a={state:p,getters:_,actions:g,mutations:S}},function(e,t,s){"use strict";var n=s(45),i=s.n(n),a=s(25);t.a=i()({},a.i,function(e){e.exampleState=!0})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(151),i=s.n(n),a=s(150),c=s.n(a);t.default={name:"app",components:{AppNavbar:i.a,AppFooter:c.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AppNavbar",data:function(){return{navLinks:[{name:"Sessions",icon:"fa-home",text:"Home",exact:!0},{name:"SessionsTable",icon:"fa-table",text:"Sessions Table"},{name:"MySchedule",icon:"fa-bolt",text:"My Schedule"}]}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),i=s.n(n),a=s(14),c=s.n(a),o=s(9);t.default={computed:i()({},s.i(o.b)(["mySchedule","myScheduleByStartTime"])),methods:i()({},s.i(o.c)([]),{formatTime:function(e){return c()(e).format("ddd, M/D h:mm A")}})}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),i=s.n(n),a=s(14),c=s.n(a),o=s(42),r=s.n(o),l=s(9);t.default={name:"SessionItem",props:["session"],data:function(){return{}},methods:i()({},s.i(l.c)(["addToSchedule","removeFromSchedule"]),{speakersDisplayNames:function(e){return e.map(function(e){return(e.FirstName||"")+" "+e.LastName}).join(", ")},formatTime:function(e){return c()(e).format("h:mm A")},getDate:function(e){return c()(e).format("dddd, MMM Do")},toggleInSchedule:function(){this.mySchedule.includes(this.session.Id)?this.removeFromSchedule(this.session.Id):this.addToSchedule(this.session.Id)}}),computed:i()({},s.i(l.b)(["mySchedule"]),{isFilled:function(){var e=this;return this.mySchedule.filter(function(t){return t===e.session.Id}).length>0}}),components:{TagList:r.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(152),i=s.n(n),a=s(14),c=s.n(a),o=s(23),r=s.n(o),l=s(65),u=s.n(l);t.default={name:"SessionList",directives:{infiniteScroll:u.a},props:["sessions"],components:{SessionItem:i.a},data:function(){return{stepSize:10,pageSize:10}},methods:{formatTime:function(e){return c()(e).format("h:mm A")},getDate:function(e){return c()(e.SessionStartTime).format("ddd, MMM Do, YY")},loadMore:function(){this.pageSize+=this.stepSize}},computed:{visibleSessions:function(){return this.sessions&&this.sessions.length?this.sessions.slice(0,this.pageSize):[]},sessionsByStartTime:function(){return r.a.groupBy(this.visibleSessions,"SessionStartTime")}},watch:{sessions:function(){this.pageSize=this.stepSize}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),i=s.n(n),a=s(9);t.default={name:"TagList",props:{tags:Array,special:{type:String,default:""}},computed:i()({},s.i(a.b)(["selectedTags"]),{hasSpecial:function(){return""!==this.special}}),methods:i()({},s.i(a.c)(["selectTag","unselectTag"]),{toggleTag:function(e){this.selectedTags.includes(e)?this.unselectTag(e):this.selectTag(e)},isActiveTag:function(e){return this.selectedTags.includes(e)}})}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),i=s.n(n),a=s(9),c=s(42),o=s.n(c);t.default={name:"TagPanel",props:{tags:Array,hidden:{type:Boolean,default:!1}},created:function(){this.isHidden=this.hidden},data:function(){return{isHidden:!1}},methods:i()({},s.i(a.c)(["selectTag","unselectTag","clearSelectedTags","setTagAnyTrue","setTagAnyFalse"]),{toggleTag:function(e){-1!==this.selectedTags.indexOf(e)?this.unselectTag(e):this.selectTag(e)}}),computed:i()({},s.i(a.b)(["selectedTags","tagAny"]),{tagSpecial:function(){return this.tagAny?"Any":"All"}}),components:{TagList:o.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(44),i=s.n(n),a=s(10),c=s.n(a),o=s(9),r=s(66),l=s.n(r),u=s(43),d=s.n(u),f=s(41),v=s.n(f),h=s(14),m=s.n(h);t.default={data:function(){return{selectedDate:""}},components:{SessionList:l.a,TagPanel:d.a,SchedulePanel:v.a},computed:c()({},s.i(o.b)(["mySessions","myScheduleByStartTime","tags"]),{dates:function(){var e=i()(this.myScheduleByStartTime);return e.includes(this.selectedDate)||(this.selectedDate=""),e},activeDate:function(){return this.selectedDate||this.dates[0]}}),methods:{selectDate:function(e){this.selectedDate=e},formatDate:function(e){return m()(e).format("ddd, MMM Do, YY")}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(44),i=s.n(n),a=s(10),c=s.n(a),o=s(9),r=s(23),l=s.n(r),u=s(14),d=s.n(u),f=s(66),v=s.n(f),h=s(43),m=s.n(h),p=s(41),_=s.n(p);t.default={data:function(){return{page:0,pageSize:10,selectedDate:"",search:""}},components:{SessionList:v.a,TagPanel:m.a,SchedulePanel:_.a},computed:c()({},s.i(o.b)(["sessions","tags","selectedTags","tagAny"]),{sessionsByDate:function(){return l.a.groupBy(this.filteredSessions,this.getDate)},dates:function(){var e=i()(this.sessionsByDate);return e.includes(this.selectedDate)||(this.selectedDate=""),e},activeDate:function(){return this.selectedDate||this.dates[0]},selectedSessions:function(){return this.sessionsByDate[this.activeDate]},filteredSessions:function(){var e=this,t=this.sessions;return this.selectedTags.length>0?this.tagAny?t.filter(function(t){return l.a.intersection(e.selectedTags,t.Tags).length>0}):t.filter(function(t){return l.a.intersection(e.selectedTags,t.Tags).length===e.selectedTags.length}):t},startTimes:function(){var e=this,t=this.sessions.map(function(t){return e.formatTime(t.SessionStartTime)});return l.a.uniq(t)}}),methods:{getDate:function(e){return d()(e.SessionStartTime).format("ddd, MMM Do, YY")},formatTime:function(e){return d()(e).format("h:mm A")},selectDate:function(e){this.selectedDate=e,this.page=0}},created:function(){0===this.sessions.length&&this.$store.dispatch("getSessions")}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),i=s.n(n),a=s(9),c=s(42),o=s.n(c),r=s(43),l=s.n(r),u=s(41),d=s.n(u),f=s(23),v=s.n(f),h=s(149),m=s.n(h),p=s(14),_=s.n(p),g=s(65),S=s.n(g);t.default={name:"SessionsTable",directives:{infiniteScroll:S.a},data:function(){return{page:0,pageSize:25,stepSize:25,expandedTab:"",search:"",colspan:9}},computed:i()({},s.i(a.b)(["sessions","mySchedule","tags","selectedTags","tagAny"]),{filteredSessions:function(){var e=this,t={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["Title","Abstract","Category","Tags","SessionType"]},s=new m.a(this.sessions,t),n=this.search?s.search(this.search):this.sessions;return this.selectedTags.length>0?this.tagAny?n.filter(function(t){return v.a.intersection(e.selectedTags,t.Tags).length>0}):n.filter(function(t){return v.a.intersection(e.selectedTags,t.Tags).length===e.selectedTags.length}):n},visibleSessions:function(){return this.filteredSessions&&this.filteredSessions.length?this.filteredSessions.slice(0,this.pageSize):[]}}),methods:i()({},s.i(a.c)(["addToSchedule","removeFromSchedule"]),{speakersDisplayNames:function(e){return e.map(function(e){return(e.FirstName||"")+" "+e.LastName}).join(", ")},toggleInSchedule:function(e){this.mySchedule.includes(e.Id)?this.removeFromSchedule(e.Id):this.addToSchedule(e.Id)},isFilled:function(e){return this.mySchedule.filter(function(t){return t===e.Id}).length>0},toggleTab:function(e){this.expandedTab=this.expandedTab===e?"":e},loadMore:function(){this.pageSize+=this.stepSize},formatTime:function(e){return _()(e).format("h:mm A")},formatDate:function(e){return _()(e).format("ddd, MMM Do")}}),components:{TagList:o.a,TagPanel:l.a,SchedulePanel:d.a},created:function(){0===this.sessions.length&&this.$store.dispatch("getSessions")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,s){function n(e){s(140)}var i=s(4)(s(79),s(156),n,null,null);e.exports=i.exports},function(e,t,s){function n(e){s(147)}var i=s(4)(s(80),s(165),n,null,null);e.exports=i.exports},function(e,t,s){function n(e){s(148)}var i=s(4)(s(82),s(166),n,null,null);e.exports=i.exports},function(e,t,s){function n(e){s(144)}var i=s(4)(s(86),s(161),n,null,null);e.exports=i.exports},function(e,t,s){function n(e){s(141)}var i=s(4)(s(87),s(157),n,null,null);e.exports=i.exports},function(e,t,s){function n(e){s(142)}var i=s(4)(s(88),s(158),n,"data-v-15686813",null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[e._v("Codemash Scheduler")]),e._v(" by "),s("a",{attrs:{href:"http://jakeprem.com"}},[e._v("Jake Prem")]),e._v(". The source code is licensed\n          "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[e._v("MIT")]),e._v(".      \n        ")]),e._v(" "),s("p",[s("a",{staticClass:"icon",attrs:{href:"https://github.com/jakeprem/codemash-vue"}},[s("i",{staticClass:"fa fa-github"})])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section main"},[s("div",{staticClass:"container"},[s("div",{staticClass:"tabs is-medium is-centered"},[s("ul",e._l(e.dates,function(t){return s("li",{key:t,class:{"is-active":e.activeDate==t},on:{click:function(s){e.selectDate(t)}}},[s("a",[e._v(e._s(t))])])}))]),e._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-3"},[e._v("\n        This doesn't currently persist anywhere\n        "),s("schedule-panel")],1),e._v(" "),s("div",{staticClass:"column is-6"},[s("session-list",{attrs:{sessions:e.selectedSessions}})],1),e._v(" "),s("div",{staticClass:"column is-3"},[s("div",{staticClass:"panel"},[e._v("\n          Search is currently disabled on this page.\n        ")]),e._v(" "),s("tag-panel",{attrs:{tags:e.tags}})],1)])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section main"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-9"},[s("div",{staticClass:"panel"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[s("table",{staticClass:"table is-bordered is-striped"},[e._m(0),e._v(" "),s("tbody",[e._l(e.visibleSessions,function(t){return[s("tr",{on:{click:function(s){e.toggleTab(t.Id)}}},[s("td",[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa",class:{"fa-star":e.isFilled(t),"fa-star-o":!e.isFilled(t)},on:{click:function(s){s.stopPropagation(),e.toggleInSchedule(t)}}})])]),e._v(" "),s("td",[e._v(e._s(e.formatDate(t.SessionStartTime))+"\n                  ")]),s("td",[e._v(e._s(e.formatTime(t.SessionStartTime)))]),e._v(" "),s("td",[s("strong",[e._v(e._s(t.Title))])]),e._v(" "),s("td",[e._v(e._s(e.speakersDisplayNames(t.Speakers)))]),e._v(" "),s("th",[e._v(e._s(t.SessionType))]),e._v(" "),s("td",[e._v(e._s(t.Category))]),e._v(" "),s("td",[e._v(e._s(t.Rooms.join(", ")))]),e._v(" "),s("td",[s("tag-list",{attrs:{tags:t.Tags}})],1)]),e._v(" "),s("tr",{directives:[{name:"show",rawName:"v-show",value:e.expandedTab==t.Id,expression:"expandedTab == session.Id"}]},[s("td",{attrs:{colspan:e.colspan}},[e._v(e._s(t.Abstract))])])]})],2)])])]),e._v(" "),s("div",{staticClass:"column is-3"},[s("tag-panel",{attrs:{tags:e.tags,hidden:!0}}),e._v(" "),s("schedule-panel")],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("+")]),e._v(" "),s("th",[e._v("Day")]),e._v(" "),s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("Title")]),e._v(" "),s("th",[e._v("Speaker")]),e._v(" "),s("th",[e._v("Session Type")]),e._v(" "),s("th",[e._v("Category")]),e._v(" "),s("th",[e._v("Room")]),e._v(" "),s("th",[e._v("Tags")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel"},[s("p",{staticClass:"panel-heading",on:{click:function(t){e.isHidden=!e.isHidden}}},[s("a",[e._v("\n      Filter by Tags        \n    ")]),e._v(" "),s("span",{staticClass:"icon is-small",staticStyle:{"vertical-align":"middle"}},[s("i",{staticClass:"fa",class:{"fa-chevron-right":e.isHidden,"fa-chevron-down":!e.isHidden}})])]),e._v(" "),e.isHidden?e._e():[s("p",{staticClass:"panel-tabs"},[s("a",{class:{"is-active":!e.tagAny},on:{click:e.setTagAnyFalse}},[e._v("All")]),e._v(" "),s("a",{class:{"is-active":e.tagAny},on:{click:e.setTagAnyTrue}},[e._v("Any")])]),e._v(" "),e._l(e.tags,function(t){return s("a",{key:t,staticClass:"panel-block",class:{"is-active":e.selectedTags.includes(t)},on:{click:function(s){e.toggleTag(t)}}},[e._m(0,!0),e._v("\n    "+e._s(t)+"\n  ")])})],e._v(" "),s("div",{staticClass:"panel-block"},[s("button",{staticClass:"button is-primary is-outlined is-fullwidth",on:{click:e.clearSelectedTags}},[e._v("\n      Reset Tag Filters\n    ")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedTags.length>0,expression:"selectedTags.length > 0"}],staticClass:"panel-block"},[s("tag-list",{attrs:{tags:e.selectedTags,special:e.tagSpecial}})],1)],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"fa fa-tag"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel"},[s("p",{staticClass:"panel-heading"},[s("router-link",{attrs:{to:{name:"MySchedule"}}},[e._v("My Schedule")])],1),e._v(" "),e._l(e.myScheduleByStartTime,function(t,n){return s("div",{key:n},[s("p",{staticClass:"panel-tabs"},[s("strong",[e._v(e._s(e.formatTime(n)))])]),e._v(" "),e._l(t,function(t){return s("p",{key:t.Id,staticClass:"panel-block"},[e._v("\n      "+e._s(t.Title)+"\n    ")])})],2)})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section main"},[s("div",{staticClass:"container"},[s("div",{staticClass:"tabs is-medium is-centered"},[s("ul",e._l(e.dates,function(t){return s("li",{key:t,class:{"is-active":e.activeDate==t},on:{click:function(s){e.selectDate(t)}}},[s("a",[e._v(e._s(e.formatDate(t)))])])}))]),e._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-3"},[s("schedule-panel")],1),e._v(" "),s("div",{staticClass:"column is-6"},[s("session-list",{attrs:{sessions:e.myScheduleByStartTime[e.activeDate]}})],1),e._v(" "),s("div",{staticClass:"column is-3"})])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tags"},[e.hasSpecial?s("span",{staticClass:"tag is-info"},[e._v("\n      "+e._s(e.special)+"\n    ")]):e._e(),e._v(" "),e._l(e.tags,function(t){return s("span",{staticClass:"tag",class:{"is-primary":e.isActiveTag(t)},on:{click:function(s){s.stopPropagation(),e.toggleTag(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("app-navbar"),e._v(" "),s("router-view"),e._v(" "),s("app-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.sessions&&0!=e.sessions.length?e._e():s("h1",[e._v("No sessions to show")]),e._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},e._l(e.sessionsByStartTime,function(t,n){return s("div",{key:n},[s("h2",{staticClass:"title"},[e._v(e._s(e.formatTime(n)))]),e._v(" "),e._l(t,function(e){return s("session-item",{key:e.id,attrs:{session:e}})})],2)}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"nav has-shadow",attrs:{id:"top"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-left"}),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"nav-right nav-menu"},e._l(e.navLinks,function(t){return s("router-link",{key:t.name,staticClass:"nav-item is-tab",attrs:{to:{name:t.name},"active-class":"is-active",exact:t.exact}},[s("i",{staticClass:"fa",class:t.icon}),e._v(" \n          "+e._s(t.text||t.name)+"\n      ")])}))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"nav-toggle"},[s("span"),e._v(" "),s("span"),e._v(" "),s("span")])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"title is-4"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa",class:{"fa-star":e.isFilled,"fa-star-o":!e.isFilled},on:{click:e.toggleInSchedule}})]),e._v(" "),s("strong",[e._v(e._s(e.session.Title))])]),e._v(" "),s("h3",{staticClass:"subtitle"},[e._v(e._s(e.speakersDisplayNames(e.session.Speakers)))]),e._v(" "),s("p",[e._v(e._s(e.session.Abstract))]),e._v(" "),s("h5",[s("strong",[e._v(e._s(e.session.Category))])]),e._v(" "),s("span",[e._v(e._s(e.session.Rooms.join(", ")))]),e._v(" "),s("tag-list",{attrs:{tags:e.session.Tags}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(e.session))]),e._v(" "),s("hr")],1)},staticRenderFns:[]}}]),[73]);
//# sourceMappingURL=app.94e4bcd4365a69eb90f9.js.map