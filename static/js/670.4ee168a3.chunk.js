"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[670],{670:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),o=n(757),c=n.n(o),i=n(76),u=n(541),s="SearchForm_searchForm__NsJpF",l="SearchForm_searchForm__input__i6El6",f="SearchForm_searchForm__btn__BRG3D",m=n(184),_=function(e){var t=e.onFormSabmit;return(0,m.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault(),t(e.target.elements.input.value),e.target.reset()},children:[(0,m.jsx)("input",{className:l,type:"text",name:"input",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,m.jsx)("button",{type:"submit",className:f,children:"Search"})]})},p=n(791),h=n(947),d=function(){var e=(0,p.useState)([]),t=(0,a.Z)(e,2),n=t[0],o=t[1],s=(0,h.lr)(),l=(0,a.Z)(s,2),f=l[0],d=l[1],v=f.get("query");return(0,p.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Uu)(v).then((function(e){return e.data}));case 2:t=e.sent,o(t.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v&&function(){e.apply(this,arguments)}()}),[v]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{onFormSabmit:function(e){d(""!==e?{query:e}:{})}}),v&&(0,m.jsx)(u.Z,{data:n})]})}},76:function(e,t,n){n.d(t,{Rf:function(){return s},Uu:function(){return c},WW:function(){return o},u9:function(){return u},yX:function(){return i}});var r=n(912),a="f31e3eddb8b7eb3d84e2156a52b41937";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){return r.Z.get("/trending/movie/day?api_key=".concat(a))},c=function(e){return r.Z.get("/search/movie?api_key=".concat(a,"&query=").concat(e))},i=function(e){return r.Z.get("movie/".concat(e,"?api_key=").concat(a))},u=function(e){return r.Z.get("movie/".concat(e,"/credits?api_key=").concat(a))},s=function(e){return r.Z.get("movie/".concat(e,"/reviews?api_key=").concat(a))}},541:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(947),a=n(689),o="GalleryMovies_gallery__list__5O-ZZ",c="GalleryMovies_gallery__item__-ho2f",i="GalleryMovies_gallery__link__bt2Pj",u="GalleryMovies_gallery__img__4teL5",s="GalleryMovies_gallery__name__xfsy4",l=n(184),f=function(e){var t=e.data,n=(0,a.TH)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:o,children:t.map((function(e){var t=e.poster_path,a=e.id,o=e.original_title,f=e.title;return(0,l.jsx)("li",{className:c,children:(0,l.jsxs)(r.rU,{to:"/movies/".concat(a),className:i,state:{from:n},children:[(0,l.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w500"+t:"https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg",alt:o,className:u}),(0,l.jsx)("p",{className:s,children:f})]})},a)}))})})}},861:function(e,t,n){function r(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,u,"next",e)}function u(e){r(c,a,o,i,u,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=670.4ee168a3.chunk.js.map