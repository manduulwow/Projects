(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{22:function(e,t,n){},25:function(e){e.exports=JSON.parse('[{"id":"abc"},{"id":"qwe"},{"id":"empty"}]')},26:function(e){e.exports=JSON.parse('[{"id":"abc","history":{"history1":"08-12-2019","history2":"08-12-2019","history3":"08-12-2019","history4":"08-12-2019"}},{"id":"qwe","history":{"history5":"08-12-2019","history6":"08-12-2019"}},{"id":"empty","history":{}}]')},29:function(e){e.exports=JSON.parse('{"/CDK":"CDK Interview","/Weather":"Weather App","/TaskPlanner":"Task Planner","/HOC":"HOC"}')},30:function(e,t,n){e.exports=n(50)},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(23),c=n.n(r),o=(n(35),n(5)),l=n(6),s=n(3),u=n(8),m=n(7),d=(n(36),n(14)),h=function(e){return i.a.createElement("div",{className:"items-container"},e.items.map((function(e,t){return i.a.createElement("div",{key:t,className:"item-container"},i.a.createElement(d.b,{to:e[0]},i.a.createElement("div",{className:"item"},e[1])))})))},v=n(25),f=n(26),E=(n(42),function(e){return i.a.createElement(a.Fragment,null,e.ids.map((function(t,n){return i.a.createElement("div",{key:n,onClick:e.handleClick,className:"hist-id"},t.id)})))}),p=n(13),b=(n(43),function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),r=n[0],c=n[1];return i.a.createElement(a.Fragment,null,i.a.createElement("div",{style:{width:100,marginLeft:20}},i.a.createElement("h3",null,e.historyId?e.historyId:"Empty")),i.a.createElement("div",{className:"historyItemList"},r?e.historyList.map((function(e,t){return i.a.createElement(a.Fragment,{key:t},i.a.createElement("div",null,e[0]),i.a.createElement("div",null,e[1]))})):e.historyList.slice(0,2).map((function(e,t){return i.a.createElement(a.Fragment,{key:t},i.a.createElement("div",null,e[0]),i.a.createElement("div",null,e[1]))}))),i.a.createElement("div",null,e.historyList.length>2?i.a.createElement("button",{onClick:function(){c(!r)}},r?"Hide":"Show"):""))}),y=(n(44),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={historyList:[],historyId:null},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=f.find((function(t){return t.id===e.target.innerText}));this.setState({historyList:Object.entries(t.history),historyId:t.id})}},{key:"render",value:function(){return i.a.createElement("div",{className:"cdkmain-container"},i.a.createElement("div",{className:"cdk-box"},i.a.createElement(E,{ids:v,handleClick:this.handleClick})),i.a.createElement("div",{className:"cdk-box"},i.a.createElement(b,{historyList:this.state.historyList,historyId:this.state.historyId})))}}]),n}(i.a.Component)),O=(n(45),n(28)),k=n(19),w=n(27),j=(n(46),function(e){return i.a.createElement(a.Fragment,null,e.weatherList.map((function(e,t){return i.a.createElement("div",{className:"ibox",key:t},i.a.createElement("div",null,0===t?"Now":new Date(e.dt_txt).getHours().toString()),i.a.createElement("div",null,i.a.createElement(w.a,null)),i.a.createElement("div",null,(e.main.temp-273).toFixed(0)))})))}),L=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={showInfo:!1},a.getTemperature=a.getTemperature.bind(Object(s.a)(a)),a.getNavBar=a.getNavBar.bind(Object(s.a)(a)),a.showMoreInfo=a.showMoreInfo.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"getTemperature",value:function(){var e=this.props.weatherList[0].weather[0].description;return i.a.createElement("div",{className:"nav-item-c"},i.a.createElement("div",{className:""},e.charAt().toUpperCase()+e.slice(1)),i.a.createElement("div",{className:""},(this.props.weatherList[0].main.temp-273).toFixed(0)))}},{key:"getNavBar",value:function(){return i.a.createElement("div",{className:"nav-item-cn"},i.a.createElement("div",null,i.a.createElement(k.b,null)),i.a.createElement("div",null,i.a.createElement(k.a,null)))}},{key:"showMoreInfo",value:function(){this.props.show(),this.setState({showInfo:!this.state.showInfo})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement("div",{className:"wi-nav"},i.a.createElement("div",{className:"wi-nh wi-nav-item",onClick:this.showMoreInfo},i.a.createElement("span",null,this.props.day),i.a.createElement("span",{style:{position:"relative",top:3}},this.state.showInfo?i.a.createElement(O.a,null):"")),i.a.createElement("div",{className:"wi-nav-item"},this.state.showInfo?this.getNavBar():this.getTemperature())),i.a.createElement("div",{className:"wi-i "+(this.state.showInfo?"wi-i-show":"")},i.a.createElement(j,{weatherList:this.props.weatherList})))}}]),n}(i.a.Component),N=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),r=n[0],c=n[1];return i.a.createElement("div",{className:"weatherCard"},i.a.createElement("div",{className:"wc-wd "+(r?"move-wd":"")},i.a.createElement("span",null,e.city.name)),i.a.createElement("div",{className:"wc-body"},i.a.createElement(L,{show:function(){c(!r)},day:e.day,weatherList:e.city.weatherList})),i.a.createElement("div",{className:"whitespace"}))},g=(n(47),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={cityList:[],text:""},a.onChange=a.onChange.bind(Object(s.a)(a)),a.onKeyDown=a.onKeyDown.bind(Object(s.a)(a)),a.getWeatherInfo=a.getWeatherInfo.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onKeyDown",value:function(e){"Enter"===e.key&&this.getWeatherInfo(this.state.text)}},{key:"getWeatherInfo",value:function(e){var t=this;fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=13fc637eb24ecfee389a2adba748b81e")).then((function(e){return e.json()})).then((function(e){if(console.log(e),404!=e.cod){var n={name:e.city.name,weatherList:e.list.slice(0,5)};t.setState((function(e){return{cityList:e.cityList.concat(n)}}))}}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.cityList;return i.a.createElement("div",{className:"weather-mc"},i.a.createElement("div",{className:"weather-title",style:{position:"relative",marginBottom:"7%"}},i.a.createElement("input",{onChange:this.onChange,onKeyDown:this.onKeyDown})),i.a.createElement("div",{className:"wc-box"},e.map((function(e,t){return i.a.createElement(N,{key:t,day:"Wednesday",city:e})}))))}}]),n}(i.a.Component)),C=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),r=n[0],c=n[1];return i.a.createElement("div",{className:"form-container"},i.a.createElement("div",null,i.a.createElement("h2",null,"Add Item to List")),i.a.createElement("div",null,i.a.createElement("span",null,"To do : "),i.a.createElement("input",{type:"text",onChange:function(e){c(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&(e.addToList(r),c(""))},value:r})),i.a.createElement("div",{style:{marginTop:20}},i.a.createElement("button",{onClick:function(){r.length>0&&(e.addToList(r),c(""))}},"Add")))},I=(n(22),function(e){var t=function(t){e.onDone(t.target.getAttribute("val"))};return i.a.createElement("div",{className:"tl-container"},i.a.createElement("div",null,i.a.createElement("h2",null,"ToDo")),i.a.createElement("div",null,e.todoList.filter((function(e){return!e.state})).map((function(e,n){return i.a.createElement("div",{className:"list-item",key:n},i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",onChange:t,val:e.item})),i.a.createElement("div",{style:{position:"relative",bottom:2,marginLeft:5}},e.item))}))))}),x=function(e){return console.log(e.todoList),i.a.createElement("div",null,e.todoList.filter((function(e){return e.state})).map((function(e,t){return i.a.createElement("div",{className:"list-item",key:t},i.a.createElement("div",{style:{position:"relative",bottom:2,marginLeft:5}},e.item))})))},D=(n(48),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={todoList:[]},a.addToList=a.addToList.bind(Object(s.a)(a)),a.onDone=a.onDone.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"addToList",value:function(e){console.log(e),this.setState((function(t){return t.todoList.push({item:e,state:!1}),{todoList:t.todoList}}))}},{key:"onDone",value:function(e){this.setState((function(t){var n=t.todoList.findIndex((function(t){return t.item===e}));return t.todoList[n].state=!0,{todoList:t.todoList}}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"tb-container"},i.a.createElement("div",{className:"box tf-box"},i.a.createElement(C,{addToList:this.addToList})),i.a.createElement("div",{className:"box tl-box"},i.a.createElement(I,{todoList:this.state.todoList,onDone:this.onDone})),i.a.createElement("div",{className:"box"},i.a.createElement(x,{todoList:this.state.todoList})))}}]),n}(i.a.Component)),T=function(e){return function(t){Object(u.a)(a,t);var n=Object(m.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).state={count:0},t.increment=t.increment.bind(Object(s.a)(t)),t}return Object(l.a)(a,[{key:"increment",value:function(){this.setState((function(e){return{count:e.count+1}}))}},{key:"render",value:function(){return i.a.createElement(e,{name:"Mandy",increment:this.increment,count:this.state.count})}}]),a}(i.a.Component)},S=T((function(e){return i.a.createElement("div",{className:"cc-contaner"},i.a.createElement("div",null,i.a.createElement("button",{onClick:e.increment},"Increment ",e.count)))})),K=T(function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"hc-container"},i.a.createElement("div",{className:"header",onMouseEnter:this.props.increment},i.a.createElement("h1",null,"Header ",this.props.count)))}}]),n}(i.a.Component)),F=(n(49),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"HOC-container"},i.a.createElement(S,null),i.a.createElement(K,null))}}]),n}(i.a.Component)),W=n(2),H=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).items=Object.entries(a.props.data),a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement(W.c,null,i.a.createElement(W.a,{exact:!0,path:"/",component:function(){return i.a.createElement(h,{items:e.items})}}),i.a.createElement(W.a,{path:"/CDK",component:y}),i.a.createElement(W.a,{path:"/Weather",component:g}),i.a.createElement(W.a,{path:"/TaskPlanner",component:D}),i.a.createElement(W.a,{path:"/HOC",component:F}))))}}]),n}(i.a.Component),M=n(29);c.a.render(i.a.createElement(d.a,null,i.a.createElement(H,{data:M})),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.93e165e0.chunk.js.map