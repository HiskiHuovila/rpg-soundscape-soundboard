(this["webpackJsonprpg-soundscape-soundboard"]=this["webpackJsonprpg-soundscape-soundboard"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/data.72805d14.csv"},19:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(5),a=n.n(s),r=(n(12),n(3)),o=(n.p,n(13),n(0)),l=function(e){var t="";return e.active&&(t="is-active"),Object(o.jsx)("li",{className:"tab "+t,children:Object(o.jsx)("a",{onClick:function(){return e.setActiveTab(e.text)},children:Object(o.jsx)("span",{children:e.text})})},e.text)},d=function(e){var t=Object.keys(e.all);return Object(o.jsx)("ul",{className:"tabParent level-item",children:t.map((function(t){return Object(o.jsx)(l,{text:t,active:e.active[0]===t,setActiveTab:e.setActiveTab},t)}))})},u=function(e){var t=e.text,n="#2A0A12";return e.music&&(n="#0A1B2A"),Object(o.jsxs)("div",{className:"is-centered is-child box",style:{backgroundColor:n,margin:"5px",position:"relative"},children:[Object(o.jsx)("div",{className:"pinTileButton",onClick:function(){e.pinFunction(t,e.music),e.forceSidebarOpen()}}),Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]},e.text)},j=function(e){var t=e.all[e.active[0]][e.active[1]];return Object(o.jsx)("div",{className:"tile is-ancestor hero-body",children:Object(o.jsx)("div",{className:"tile is-parent",style:{flexWrap:"wrap",justifyContent:"center"},children:t.map((function(t){return Object(o.jsx)(u,{text:t.source,music:"TRUE"===t.music,pinFunction:e.pinFunction,forceSidebarOpen:e.forceSidebarOpen},t.source)}))})})},b=function(e){var t="";return e.active&&(t="is-selected is-dark"),Object(o.jsx)("a",{className:"button "+t,onClick:function(){return e.setActiveButton(e.text)},children:e.text},e.text)},h=function(e){var t=Object.keys(e.all);return Object(o.jsx)("div",{className:"buttons container has-addons is-centered",children:t.map((function(t){return Object(o.jsx)(b,{text:t,active:e.active[1]===t,setActiveButton:e.setActiveButton},t)}))})},p=function(e){var t=Object.keys(e.all);return Object(o.jsx)("div",{className:"container is-centered buttons-ancestor level-item",children:t.filter((function(t){return t===e.active[0]})).map((function(t){return Object(o.jsx)(h,{all:e.all[t],active:e.active,setActiveButton:e.setActiveButton},t)}))})},v=n(7),x=function(e){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"level",children:[Object(o.jsx)("section",{className:"level-item",children:"Powered by Spotify"}),Object(o.jsx)("a",{className:"level-item",href:"https://bulma.io",children:Object(o.jsx)("img",{src:"https://bulma.io/images/made-with-bulma.png",alt:"Made with Bulma",width:"128",height:"24"})}),Object(o.jsxs)("div",{className:"level-item",children:["Made with ",Object(o.jsx)("a",{href:"https://reactjs.org",children:"React"})]}),Object(o.jsx)("div",{className:"level-item",children:Object(o.jsx)(v.a,{href:"https://github.com/HiskiHuovila","data-size":"large","aria-label":"Follow @HiskiHuovila on GitHub",children:"Follow @HiskiHuovila"})}),Object(o.jsx)("a",{className:"level-item",href:"license.html",children:"License"})]})})},O=function(e){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h4",{children:"Welcome to"}),Object(o.jsx)("h1",{className:"title",children:"RPG Soundscape Soundboard"}),Object(o.jsx)("section",{style:{display:"inline"},children:"I've gathered here"})," ",Object(o.jsx)("section",{style:{color:"white",backgroundColor:"#0A1B2A",display:"inline"},children:"atmospheric music"})," and ",Object(o.jsx)("section",{style:{color:"white",backgroundColor:"#2A0A12",display:"inline"},children:"soundscapes"}),Object(o.jsx)("section",{style:{display:"inline"},children:" for common fantasy environments"}),Object(o.jsx)("p",{children:"Use the pin button to pin the widget to keep it playing while you find the song for the next environment."}),Object(o.jsx)("p",{children:"You must have a Spotify subscription to use the widgets fully, though you can also open the Spotify link from the widget."}),Object(o.jsx)("p",{children:"I do not own any of these songs or playlists, this site only links to them. All content is owned by their respective creators and monetized through Spotify."})]})},m=n.p+"static/media/arrow_forward_ios_white_24dp.5051f98a.svg";var f=function(e){var t=e.sidebarOpen,n=e.sidebarStatus,i="-330px";t&&(i="0px");var c={position:"fixed",left:i,top:"0",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"10",pointerEvents:"none"};console.log(e.pinned);var s="#2A0A12";e.pinned[1]&&(s="#0A1B2A");var a={position:"relative",zIndex:"100",pointerEvents:"all",backgroundColor:s},r="rotate(0deg)";t&&(r="rotate(180deg)");var l={zIndex:"100",backgroundColor:"gray",pointerEvents:"all",backgroundImage:"url("+m+")",height:"50px",width:"25px",borderRadius:"5px",backgroundPosition:"center center",backgroundRepeat:"no-repeat",transform:r,cursor:"pointer"};return Object(o.jsxs)("aside",{style:c,children:[Object(o.jsx)("div",{className:"tile is-ancestor",children:Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsx)("div",{className:"is-centered is-child box",dangerouslySetInnerHTML:{__html:e.pinned[0]},style:a})})}),Object(o.jsx)("div",{onClick:n,style:l})]})},g={};var y=function(e){console.log(e.data),g=e.data;var t=Object(i.useState)([Object.keys(g)[0],Object.keys(g[Object.keys(g)[0]])[0]]),n=Object(r.a)(t,2),c=n[0],s=n[1],a=g[Object.keys(g)[0]][Object.keys(g[Object.keys(g)[0]])[0]][0],l=Object(i.useState)([a.source,"TRUE"===a.music]),u=Object(r.a)(l,2),b=u[0],h=u[1],v=Object(i.useState)(!1),m=Object(r.a)(v,2),y=m[0],k=m[1];return Object(o.jsxs)("div",{className:"app is-tall",children:[Object(o.jsx)("div",{className:"container is-centered level section",children:Object(o.jsx)(O,{})}),Object(o.jsxs)("section",{children:[Object(o.jsx)("div",{className:"tabs is-centered is-boxed is-medium",children:Object(o.jsx)(d,{all:g,active:c,setActiveTab:function(e){s([e,Object.keys(g[e])[0]])}})}),Object(o.jsx)("div",{className:"container is-centered level",children:Object(o.jsx)(p,{all:g,active:c,setActiveButton:function(e){s([c[0],e])}})})]}),Object(o.jsx)("div",{className:"tile-container hero is-small",children:Object(o.jsx)(j,{all:g,active:c,pinFunction:function(e,t){h([e,t])},forceSidebarOpen:function(){k(!0)}})}),Object(o.jsx)(x,{}),Object(o.jsx)(f,{pinned:b,sidebarStatus:function(){k(!y)},sidebarOpen:y})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))},N=n(6),w=n.n(N),A=n(2),S=n.n(A),B=n(18);w.a.parse(B.default,{download:!0,header:!0,complete:function(e){var t=S.a.groupBy(e.data,(function(e){return e.tab})),n=S.a.mapValues(t,(function(e){return S.a.groupBy(e,(function(e){return e.button}))}));a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{data:n})}),document.getElementById("root"))}}),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.c9402c28.chunk.js.map