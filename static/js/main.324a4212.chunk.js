(this["webpackJsonpblock-master"]=this["webpackJsonpblock-master"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s=n(1),l=n.n(s),d=n(15),u=n.n(d),b=n(4),j=n(5),m=n(7),h=n(6),p=n(2),v=n(3),g=n(0),O=v.a.button(a||(a=Object(p.a)(["\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1.6rem;\n  color: ",";\n  text-decoration: ",";\n"])),(function(e){return e.active?"#FED941":"black"}),(function(e){return e.active?"underline":"none"})),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleCLick=function(e){var t={},n=e.target.name;Object.keys(a.state).forEach((function(e){return t[e]=n===e})),a.setState(t)},a.state={activeA:!0,activeB:!1,activeC:!1},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(O,{name:"activeA",onClick:this.handleCLick,active:this.state.activeA,children:"Todas"}),Object(g.jsx)(O,{name:"activeB",onClick:this.handleCLick,active:this.state.activeB,children:"M\xe1s valoradas"}),Object(g.jsx)(O,{name:"activeC",onClick:this.handleCLick,active:this.state.activeC,children:"Menos valoradas"})]})}}]),n}(l.a.Component),x=v.a.input(r||(r=Object(p.a)(["\n  display: block;\n  width: 85%;\n  padding: 1rem 1.2rem;\n\n  border-style: none;\n  border-bottom-left-radius: .5rem;\n  border-top-left-radius: .5rem;\n  background-color: #FFFFFE;\n  font-size: 1.6rem;\n  color: #000000;\n  \n  &::placeholder{\n    color: #A7A9BE;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),k=v.a.button(c||(c=Object(p.a)(["\n  cursor: pointer;\n  width: 15%;\n  padding: .85rem;\n\n  border-style: none;\n  border-bottom-right-radius: .5rem;\n  border-top-right-radius: .5rem;\n  font-size: 1.9rem;\n  text-align: center;\n  background-color: #FED941;\n"]))),y=v.a.div(i||(i=Object(p.a)(["\n  display: flex;\n  width: min(53rem, 33%);\n  border: .1rem solid #FED941;\n  border-radius: .8rem;\n"]))),F=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.props.setInputValue(e.target.value)},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(y,{children:[Object(g.jsx)(x,{onChange:this.handleChange,value:this.props.value,placeholder:"Busca tu pel\xedcula favorita"}),Object(g.jsx)(k,{type:"button",children:" P "})]})}}]),n}(l.a.Component),E=n.p+"static/media/logo.041605d0.svg",w=v.a.img(o||(o=Object(p.a)(["\n  display: block;\n  width: 18rem;\n  height: 12rem;\n"])));var C,I=function(){return Object(g.jsx)(w,{src:E,alt:"Logo block-master"})},N=v.a.div(C||(C=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 7rem;\n\n  background-color: #000000;\n"])));var B,A=function(e){return Object(g.jsxs)(N,{children:[Object(g.jsx)(I,{}),Object(g.jsx)(f,{}),Object(g.jsx)(F,{setInputValue:e.setInputValue,value:e.value})]})},R=(n(26),n(27),n.p+"static/media/DEPRUEBA1.1a1e0b70.svg"),V=n.p+"static/media/DEPRUEBA2.6971553d.svg",D=n.p+"static/media/DEPRUEBA3.dbf15c74.svg",S=v.a.div(B||(B=Object(p.a)(["\n  padding: 5rem 7rem;\n  background-color: #000000;\n"])));var z,L,M,P=function(){return Object(g.jsxs)(S,{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(g.jsxs)("div",{className:"carousel-indicators",children:[Object(g.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(g.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(g.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(g.jsxs)("div",{className:"carousel-inner",children:[Object(g.jsx)("div",{className:"carousel-item active",children:Object(g.jsx)("img",{src:R,className:"d-block w-100",alt:"..."})}),Object(g.jsx)("div",{className:"carousel-item",children:Object(g.jsx)("img",{src:V,className:"d-block w-100",alt:"..."})}),Object(g.jsx)("div",{className:"carousel-item",children:Object(g.jsx)("img",{src:D,className:"d-block w-100",alt:"..."})})]})]})},_=v.a.div(z||(z=Object(p.a)(["\n  cursor: pointer;\n  width: 22rem;\n  height: 33rem;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding-top: 2rem;\n  margin-right: 1.2rem;\n  margin-left: 1.2rem;\n"])),(function(e){return e.bgImg})),U=v.a.p(L||(L=Object(p.a)(["\n  width: 50%;\n  padding: .5rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-top-right-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n  border-width: .2rem;\n  border-style: solid;\n  border-color: ",";\n  color: #FFFFFF;\n"])),(function(e){return e.score>=5?"#FED941":"#0E3FA9"})),J=v.a.i(M||(M=Object(p.a)(["\n  color: #FED941;\n  margin-right: .8rem;\n"])));var T,q,W,G=function(e){return Object(g.jsx)(_,{bgImg:e.bgImg,children:Object(g.jsxs)(U,{score:e.score,children:[Object(g.jsx)(J,{className:"fas fa-star"}),e.score]})})},H=v.a.div(T||(T=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n"]))),K=v.a.h2(q||(q=Object(p.a)(["\n  font-weight: bold;\n  font-size: 4.5rem;\n  color: #FFFFFE;\n"]))),Q=v.a.div(W||(W=Object(p.a)(["\n  background-color: #000000;\n  padding: 5rem 7rem;\n"]))),X=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={movies:[]},a}return Object(j.a)(n,[{key:"componentWillMount",value:function(){var e=this;return fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a4329352bd9a9fb8d7b99ab53da4528f&page=1&language=es").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(t){console.log(t),e.setState({movies:t})})).catch((function(e){return console.warn("ERROR"+e)})),!0}},{key:"searchMovieByName",value:function(e){var t=this,n=e.replace(" ","+"),a="https://api.themoviedb.org/3/search/movie?api_key=a4329352bd9a9fb8d7b99ab53da4528f&query=".concat(n);return fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({movies:e})})).catch((function(e){return console.warn("ERROR"+e)})),!0}},{key:"render",value:function(){return Object(g.jsxs)(Q,{children:[Object(g.jsx)(K,{children:" Todas las pel\xedculas "}),Object(g.jsx)(H,{children:this.state.movies.map((function(e){return Object(g.jsx)(G,{bgImg:"https://image.tmdb.org/t/p/w500"+e.poster_path,score:(.0025*e.popularity).toFixed(1)},e.id)}))})]})}}]),n}(l.a.Component),Y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).setInputValue=function(e){console.log(e),a.setState({inputValue:e})},a.state={inputValue:""},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A,{setInputValue:this.setInputValue,value:this.state.inputValue}),Object(g.jsx)(P,{}),Object(g.jsx)(X,{})]})}}]),n}(l.a.Component);n(49);u.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.324a4212.chunk.js.map