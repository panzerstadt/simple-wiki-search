(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=(a(145),a(151)),s=(a(163),a(164),a(149)),o=(a(73),a(156)),l=a.n(o),c=(a(55),a(165),a(74),a(167)),d=a.n(c),u=function(e){var t=e.search,a=void 0===t?"dinosaur":t,i=e.onResult,s=Object(r.useState)(""),o=(s[0],s[1],"https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+a+"&format=json"),c=l()(o,{method:"GET"});return i&&i(c),n.a.createElement("div",null)},f=function(){var e=Object(r.useState)("default"),t=e[0],a=e[1],i=Object(r.useState)(!1),s=i[0],o=i[1],l=Object(r.useState)([]),c=l[0],f=l[1],p="",h={};c.forEach(function(e,t){0===t?p="you searched for: "+e:e.map(function(e,t){h[t]||(h[t]=[]),h[t].push(e)})});var g=Object.keys(h).map(function(e,t){var a=h[t];return n.a.createElement("tr",{key:"tr-"+t},a.map(function(e,t){return e.search("http")?n.a.createElement("td",{key:"td-"+t,style:{fontSize:e.length>100?12:16,lineHeight:1.2}},e):n.a.createElement("td",{key:"td-"+t,style:{fontSize:16}},n.a.createElement("a",{key:"td-"+t,href:e,target:"_blank"},e," "))}))});return n.a.createElement("div",null,n.a.createElement("input",{className:d.a.search,onChange:function(e){a(e.target.value||"default")},onKeyDown:function(e){"Enter"===e.key&&o(!s)},placeholder:"wikipedia search"}),n.a.createElement("br",null),n.a.createElement(r.Suspense,{fallback:"fetching data..."},n.a.createElement(u,{search:t,onResult:f})),n.a.createElement("br",null),n.a.createElement("h3",null,p),n.a.createElement("table",null,g))};t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement(f,null),n.a.createElement("br",null))}},145:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(146);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,a){var r;e.exports=(r=a(148))&&r.default||r},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Wikipedia Searchbar"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){"use strict";var r=a(150),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(153),c=a.n(l),d=a(145);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Wikipedia Searchbar",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(e,t,a){"use strict";var r=a(147),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(145),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#fff",marginBottom:"1.45rem",boxShadow:"1px 5px 15px #F3F4F2"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"#41EAD4",textDecoration:"none"}},t))))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var d=c,u=(a(152),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},156:function(e,t,a){"use strict";var r=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],a=0;return t?t.call(e):{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}}},n=a(154),i=[];e.exports=function(e,t,a){var s,o;void 0===a&&(a=0);try{for(var l=r(i),c=l.next();!c.done;c=l.next()){var d=c.value;if(n(e,d.input)&&n(t,d.init)){if(Object.prototype.hasOwnProperty.call(d,"error"))throw d.error;if(Object.prototype.hasOwnProperty.call(d,"response"))return d.response;throw d.fetch}}}catch(f){s={error:f}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(s)throw s.error}}var u={fetch:fetch(e,t).then(function(e){var t=e.headers.get("Content-Type");return t&&-1!==t.indexOf("application/json")?e.json():e.text()}).then(function(e){u.response=e}).catch(function(e){u.error=e}).then(function(){a>0&&setTimeout(function(){var e=i.indexOf(u);-1!==e&&i.splice(e,1)},a)}),init:t,input:e};throw i.push(u),u.fetch}},163:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/6f3ac/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/8f8a4/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/817c6/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6f3ac/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/8ffcc/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/25a24/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/9fb5e/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},164:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(35)),o=r(a(76)),l=r(a(77)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,E="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),x={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var A=h;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&c.default.createElement(y,(0,l.default)({src:A.base64},x)),A.tracedSVG&&c.default.createElement(y,(0,l.default)({src:A.tracedSVG},x)),E&&c.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),c.default.createElement(y,{alt:a,title:t,src:A.src,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},A))}}))}if(g){var L=g,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},i);return"inherit"===i.display&&delete O.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(y,(0,l.default)({src:L.base64},x)),L.tracedSVG&&c.default.createElement(y,(0,l.default)({src:L.tracedSVG},x)),E&&c.default.createElement(v,{title:t,style:{backgroundColor:E,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=b;t.default=E},165:function(e,t,a){var r=a(25),n=a(34);a(166)("keys",function(){return function(e){return n(r(e))}})},166:function(e,t,a){var r=a(11),n=a(17),i=a(18);e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],s={};s[e]=t(a),r(r.S+r.F*i(function(){a(1)}),"Object",s)}}}]);
//# sourceMappingURL=component---src-pages-index-js-f8fcf1f09f2e05365c0f.js.map