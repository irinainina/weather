(window.webpackJsonpweather=window.webpackJsonpweather||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(13),n(1)),l=n(2),u=n(4),p=n(3),m=n(5),s=(n(14),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={weatherData:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.name;fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b").then(function(e){return e.json()}).then(function(t){e.setState({weatherData:t})})}},{key:"render",value:function(){var e=this.state.weatherData;if(!e)return r.a.createElement("div",null,"Loading");var t=e.weather[0],n="http://openweathermap.org/img/w/"+t.icon+".png";return r.a.createElement("div",null,r.a.createElement("h1",null,t.main," in ",e.name,r.a.createElement("img",{src:n,alt:e.description})),r.a.createElement("p",null,"Current: ",e.main.temp,"\xb0\u0421"),r.a.createElement("p",null,"High: ",e.main.temp_max,"\xb0\u0421"),r.a.createElement("p",null,"Low: ",e.main.temp_min,"\xb0\u0421"),r.a.createElement("p",null,"Wind Speed: ",e.wind.speed," \u043c/\u0441"))}}]),t}(a.Component)),h=["London","Moscow","Kiev","Minsk"],w=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={activePlace:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activePlace;return r.a.createElement("div",{className:"App"},h.map(function(t,n){return r.a.createElement("button",{key:n,onClick:function(){e.setState({activePlace:n})}},t)}),r.a.createElement(s,{key:t,name:h[t]}))}}]),t}(a.Component);i.a.render(r.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.90cc3edf.chunk.js.map