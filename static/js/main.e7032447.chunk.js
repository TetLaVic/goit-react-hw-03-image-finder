(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2V9Ot",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__QCDnj"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2xE_j",Modal:"Modal_Modal__1lLjW"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2reVC"}},25:function(e,t,a){e.exports={Button:"Button_Button__3Lmhm"}},30:function(e,t,a){},31:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),o=a.n(c),l=(a(30),a(10)),i=a(4),s=a(5),u=a(7),h=a(6),m=(a(31),a(8)),d=a.n(m),g=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.reset=function(){e.setState({query:""})},e.handleChange=function(t){t.preventDefault();var a=t.currentTarget.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,onClick:this.handleSubmit,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),j=a(12),p=a.n(j),y=function(e){var t=e.image,a=e.onClick,n=t.id,r=t.webformatURL,c=t.tags;return Object(g.jsx)("li",{className:p.a.ImageGalleryItem,onClick:a,children:Object(g.jsx)("img",{src:r,alt:c,className:p.a.ImageGalleryItemImage})},n)},f=a(23),O=a.n(f),v=a(13),S=a.n(v),_=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props.image,t=e.largeImageURL,a=e.tags;return Object(c.createPortal)(Object(g.jsx)("div",{className:S.a.Overlay,onClick:this.handleOverlayClick,children:Object(g.jsx)("div",{className:S.a.Modal,children:Object(g.jsx)("img",{src:t,alt:a,width:"100%"})})}),_)}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={image:null},e.hideModal=function(){e.setState({image:null})},e.showModal=function(t){e.setState({image:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(t){return Object(g.jsx)(y,{image:t,onClick:function(){return e.showModal(t)}},t.id)}))}),this.state.image&&Object(g.jsx)(x,{onClose:this.hideModal,image:this.state.image})]})}}]),a}(n.Component),w=a(14),C=a.n(w);C.a.defaults.baseURL="https://pixabay.com/api/";var k=function(e,t){var a="?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat("20862553-c35088a0b719e32f9c665779e");return C.a.get(a).then((function(e){var t=e.data;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.hits}))},F=a(24),q=a.n(F),N=a(25),G=a.n(N),B=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"submit",onClick:t,className:G.a.Button,children:"Load more"})},L=(a(71),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,gallery:[]},e.componentDidUpdate=function(t,a){var n=e.state,r=n.query,c=n.page;e.state.query!==a.query&&(e.setState({gallery:[]}),k(r,c).then((function(t){e.setState({gallery:Object(l.a)(t)})}))),e.state.query===a.query&&a.page!==e.state.page&&k(r,c).then((function(t){return e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t))}}))}))},e.handleNewQuery=function(t){var a=t.query;e.setState({query:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b,{onSubmit:this.handleNewQuery}),this.state.gallery?Object(g.jsx)(I,{images:this.state.gallery}):Object(g.jsx)(q.a,{type:"Hearts",color:"red",height:80,width:80,timeout:3e3}),!(!this.state.gallery.length||this.state.gallery.length%12!==0)&&Object(g.jsx)(B,{onClick:function(){e.setState((function(e){return{page:e.page+1}}))}})]})}}]),a}(n.Component));o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__24rQc",SearchForm:"Searchbar_SearchForm__235VO",SearchFormButton:"Searchbar_SearchFormButton__6OiCs",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__e60KO",SearchFormInput:"Searchbar_SearchFormInput__1iWKu"}}},[[72,1,2]]]);
//# sourceMappingURL=main.e7032447.chunk.js.map