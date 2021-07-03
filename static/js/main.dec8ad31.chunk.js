(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(4),r=i.n(a),o=(i(9),i(10),i(2)),s=(i(11),i.p+"static/media/bball-screenshot.d931ce60.png"),l=i.p+"static/media/budget-tracker-screenshot.cbb6dc06.png",j=i.p+"static/media/notes-screenshot.4e12b718.png",d=i.p+"static/media/pokemonHeader.951914a3.png",h=i.p+"static/media/quiz-screenshot.c20f313a.png",b=i.p+"static/media/workout-tracker-screenshot.e9ddb3f5.png",u=i(0),m=[{title:"Fitness Tracker",repoName:"workout-tracker",deployedName:"https://blooming-scrubland-28026.herokuapp.com/",image:b},{title:"Court Finder",repoName:"court-finder",deployedName:"https://quiet-beyond-45478.herokuapp.com/",image:s},{title:"Gotta Catch A Vibe",repoName:"Gotta-Catch-A-Vibe",deployedName:"https://boogiematrix.github.io/Gotta-Catch-A-Vibe/",image:d},{title:"Budget Tracker",repoName:"pwa-budget-tracker",deployedName:"https://cryptic-temple-61605.herokuapp.com/",image:l},{title:"Note Taker",repoName:"note-taker",deployedName:"https://enigmatic-depths-78679.herokuapp.com/",image:j},{title:"Code Quiz",repoName:"code-quiz",deployedName:"https://boogiematrix.github.io/code-quiz/",image:h}];function p(){return m.map((function(e,t){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"cardContent",children:[Object(u.jsx)("img",{src:e.image,alt:e.title}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:e.deployedName,children:"Deployed App"})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://github.com/boogiematrix/".concat(e.repoName),children:"GitHub"})})]})]})]},t)}))}i(13);var x=i.p+"static/media/portrait.f5b75153.jpeg";function O(){return Object(u.jsxs)("div",{id:"summary",children:[Object(u.jsx)("p",{children:"Hi I'm Dan! I'm full-stack web developer on a voyage across the cyber seas. As a lifelong lover of logic and language puzzles, I was lucky to discover that programming for the web is a fountain of deductive opportunities with which to challenge myself. It's invigorating to first lay eyes upon an objective and immediately begin plotting the steps needed for an efficient resolution, only it's so much more exciting with coding because, for one, the outcomes are real, and because the solutions grow and develop before our eyes. I studied Spanish art and literature for four years at Carleton College and I'm currently working towarods a certificate in full stack web development from the University of Minnesota. Feel free to contact me if you like my work!"}),Object(u.jsx)("img",{src:x,alt:"This is me"})]})}i(14);var g=i.p+"static/media/Resume.166b519b.pdf";function f(){return Object(u.jsxs)("div",{id:"skills",children:[Object(u.jsx)("h3",{children:"Skills:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Javascript"}),Object(u.jsx)("li",{children:"CSS3"}),Object(u.jsx)("li",{children:"HTML5"}),Object(u.jsx)("li",{children:"ES6~plus"}),Object(u.jsx)("li",{children:"Node"}),Object(u.jsx)("li",{children:"TDD"}),Object(u.jsx)("li",{children:"Express"}),Object(u.jsx)("li",{children:"MongoDB"}),Object(u.jsx)("li",{children:"SQL"}),Object(u.jsx)("li",{children:"Handlebars"}),Object(u.jsx)("li",{children:"Sequelize"})]}),Object(u.jsx)("h3",{children:"Languages:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"English"}),Object(u.jsx)("li",{children:"Spanish"})]}),Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:g,download:"resume-dan-ryan",children:"Download Resume"})})]})}i(15);function v(e){var t=Object(c.useState)(""),i=Object(o.a)(t,2),n=i[0],a=i[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),l=s[0],j=s[1],d=Object(c.useState)(""),h=Object(o.a)(d,2),b=h[0],m=h[1],p=function(e){var t=e.target.name,i=e.target.value.trim().toLowerCase();"contactName"===t?a(i):"email"===t?j(i):m(i)},x="This field is required",g=function(e){var t=e.target,i=t.name;t.value||("contactName"===i?a(x):"email"===i?j(x):m(x))};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{value:n,name:"contactName",onChange:p,type:"text",placeholder:"Name",onBlur:g}),Object(u.jsx)("input",{value:l,name:"email",onChange:p,type:"email",placeholder:"email",onBlur:g}),"Invalid email"===l&&Object(u.jsx)("span",{children:"Please enter valid email"}),Object(u.jsx)("textarea",{value:b,name:"message",onChange:p,type:"text",placeholder:"message...",onBlur:g}),Object(u.jsx)("button",{type:"button",onClick:function(t){t.preventDefault();var i=t.target.parentNode[1].value.trim().toLowerCase();/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i)?e.setPage(Object(u.jsx)(O,{})):(console.log("invalid email"),j("Invalid email"))},children:"Submit"})]})})}i(16);function y(e){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Dan Ryan"}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{href:"#",onClick:function(){return e.setPage(Object(u.jsx)(O,{}))},children:"About Me"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{href:"#",onClick:function(){return e.setPage(Object(u.jsx)(p,{}))},children:"Projects"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{href:"#",onClick:function(){return e.setPage(Object(u.jsx)(v,{setPage:e.setPage}))},children:"Contact"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{href:"#",onClick:function(){return e.setPage(Object(u.jsx)(f,{}))},children:"Resume"})})]})})]})}i(17);function k(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/daniel-tmo-ryan/",children:"linkedIn"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://github.com/boogiematrix",children:"Github"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://boogiematrix.github.io/portfolio-first/",children:"Alt portfolio"})})]})})}function N(){var e=Object(c.useState)(Object(u.jsx)(O,{})),t=Object(o.a)(e,2),i=t[0],n=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{setPage:n}),i,Object(u.jsx)(k,{})]})}var w=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(N,{})})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),C()}],[[18,1,2]]]);
//# sourceMappingURL=main.dec8ad31.chunk.js.map