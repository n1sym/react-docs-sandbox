(this["webpackJsonpreact-docs-trial"]=this["webpackJsonpreact-docs-trial"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),r=n.n(i),a=n(7),s=n.n(a),o=(n(13),n.p+"static/media/logo.6ce24c58.svg"),u=(n(14),n(2)),l=n(3),j=n(5),h=n(4),b=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("h1",{children:["Hello, ",this.props.name]})}}]),n}(r.a.Component);var d=function(t){return Object(c.jsxs)("h1",{children:["Hello, ",t.name]})},m=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).timerID=void 0,c.state={date:new Date},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("h2",{children:["It is ",this.state.date.toLocaleTimeString(),"."]})})}}]),n}(r.a.Component),O=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).increment=function(){c.setState((function(t,e){return{counter:t.counter+e.increment}}))},c.state={counter:0},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["It is ",this.state.counter,"."]}),Object(c.jsxs)("button",{className:"square_highlight",onClick:this.increment,children:["inc ",this.props.increment]})]})}}]),n}(r.a.Component);var p=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),"React-Sandbox"]}),Object(c.jsx)(d,{name:"nish"})," - FunctionComponent",Object(c.jsx)(b,{name:"nish"})," - ClassComponent",Object(c.jsx)(m,{}),Object(c.jsx)(O,{increment:1}),Object(c.jsx)(O,{increment:2})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.06b1b300.chunk.js.map