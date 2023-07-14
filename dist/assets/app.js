(()=>{var e,t={1273:(e,t,n)=>{"use strict";n(9490);var r=n(5638);r((function(){r(".select__select").each((function(){var e=r(this),t=e.closest(".select-wrapper"),n=getComputedStyle(t[0]),o=r(this).data("select-placeholder");"static"===n.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var n="scroll.select2";r(e.target).parents().off(n),r(window).off(n);var o=t.find(".select2-dropdown");o.hide();var a=setTimeout((function(){o.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(n){n.preventDefault();var r=t.find(".select2-dropdown"),a=setTimeout((function(){t.css("z-index","");var n=t.find(".select2");n.addClass("closing"),n.removeClass("select2-container--open"),r.slideUp(500,(function(){var n=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:o,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(n)}),0)})),clearTimeout(a)}),0)}))}))}));var o=n(5638);function a(){o(".header-menu__item.active").removeClass("active"),o(".header-sub.active").removeClass("active")}function s(){o("[data-header-menu]").removeClass("active"),o("[data-header-burger]").removeClass("active")}function i(){o(".overlay-header").removeClass("active"),o(".body").removeClass("overlay")}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-header-search]"),t=document.querySelector("[data-search-container]"),n=document.querySelector(".header-form__input"),r=o("[data-media-history]"),i=o("[data-history-close]"),c=o("[data-menu-history]");function l(){o(".overlay-header").addClass("active"),o(".body").addClass("overlay")}function d(){o(".overlay-header").removeClass("active"),o(".body").removeClass("overlay"),o(e).removeClass("active"),o(t).removeClass("active")}function u(){o(e).toggleClass("active"),o(t).toggleClass("active"),setTimeout((function(){n.focus()}),100)}o("[data-header-burger]").on("click",(function(){o("[data-header-burger]").hasClass("active")?(s(),a(),d()):(o("[data-header-menu]").addClass("active"),o("[data-header-burger]").addClass("active"),l()),o(e).hasClass("active")&&u()})),o("[data-header-item]").on("click",(function(){var e=o(this).data("header-item"),t=o('[data-header-sub="'.concat(e,'"]'));o(".header-menu__item.active").data("header-item");o(this).hasClass("active")?a():(a(),t.addClass("active"),o(this).addClass("active"))})),o(".overlay-header").on("click",(function(){a(),s(),d(),c.removeClass("active")})),o("[data-sub-back]").on("click",(function(){a()})),o(e).on("click",(function(){e.classList.contains("active")?(u(),d()):(u(),l(),a(),s(),c.removeClass("active"))})),o("[header-search-reset]").on("click",(function(){n.value="",n.focus()}));var f=document.querySelector(".report-hero__title "),m=document.querySelector(".header-text__bot "),v=document.querySelector(".header-text__top");if(f){var h=f.textContent;m.textContent=h}else m.remove(),v.remove();r.on("click",(function(){c.toggleClass("active"),a()})),i.on("click",(function(){c.toggleClass("active")})),document.querySelector(".header-menu__item").addEventListener("click",(function(){console.log("done")}))}));var c=n(1320),l=n.n(c),d=n(5638);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){var e=localStorage.getItem("history");return e?JSON.parse(e):[]}function v(){var e=d(".header-history__list");e.empty();var t,n=function(e){var t,n={},r=u(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,a=l()(o.date).startOf("day").toISOString();n[a]?n[a].push(o):n[a]=[o]}}catch(e){r.e(e)}finally{r.f()}return n}(m()),r=u(Object.keys(n).sort((function(e,t){return l()(t).valueOf()-l()(e).valueOf()})));try{for(r.s();!(t=r.n()).done;){var o=t.value,a=h(o),s=n[o].map((function(e){var t,n=(t=e.date,l()(t).format("HH:mm")),r=e.title,o=e.page;return'\n        <div class="header-history__time-item">\n          <p class="header-history__time-date">'.concat(n,'</p>\n          <a class="header-history__time-page" href=').concat(o,">").concat(r,"</a>\n        </div>\n      ")})).join(""),i='\n      <div class="header-history__item">\n        <div class="header-history__date">'.concat(a,'</div>\n        <div class="header-history__time-list">').concat(s,"</div>\n      </div>\n    ");e.append(i)}}catch(e){r.e(e)}finally{r.f()}}function h(e){var t=l()(e).format("D MMMM");return t.charAt(0).toUpperCase()+t.slice(1)}function j(){console.log("done"),localStorage.removeItem("history"),v(),console.info("asdf")}l().locale("ru"),d(document).ready((function(){d(".header-history__clear").on("click",j);var e,t,n=window.location.pathname;e={page:n,date:l()().toISOString(),title:document.title},(t=m()).push(e),localStorage.setItem("history",JSON.stringify(t)),v()}));var y=n(5638),p=100;window.screen.width<768&&(p=70),setTimeout((function(){y((function(){var e=document.location.hash;e.length>1&&y(e).length&&y("html, body").animate({scrollTop:y(e).offset().top-p},100)}))}),600),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".header-sub__item-title"),t=document.querySelectorAll(".header-sub__item-subsection");e.forEach((function(e){e.addEventListener("click",(function(){setTimeout((function(){y((function(){var e=document.location.hash;e.length>1&&y(e).length&&y("html, body").animate({scrollTop:y(e).offset().top-p},500)})),s(),a(),i()}),100)}))})),t.forEach((function(e){e.addEventListener("click",(function(){setTimeout((function(){y((function(){var e=document.location.hash;e.length>1&&y(e).length&&y("html, body").animate({scrollTop:y(e).offset().top-p},500)})),s(),a(),i()}),100)}))}))}));var b=n(5566),g=n.n(b);document.body.classList.add("body--hidden"),window.addEventListener("load",(function(){var e=document.querySelector(".preloader");if(document.body.classList.remove("body--notransition"),document.body.style.opacity=1,e){e.classList.add("preloader--hidden"),setTimeout((function(){document.body.classList.remove("body--hidden"),e.classList.add("preloader--hide")}),1800)}else document.body.classList.remove("body--hidden"),g().init({once:!0,offset:100,duration:1e3})}));var w=1280,O=768;window.matchMedia("(min-width: ".concat(w,"px)")),window.matchMedia("(min-width: ".concat(O,"px)")),n(6591);document.addEventListener("DOMContentLoaded",(function(){g().init()}));var k=n(9861);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={separator:" "};function E(){document.querySelectorAll(".countup-element").forEach((function(e){if(!e.classList.contains("countup-started")&&function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)){var t=e.getAttribute("data-countup"),n=parseFloat(t),r=e.getAttribute("data-countup-suffix")||"",o=e.getAttribute("data-countup-prefix")||"",a=new k.I(e,n,S(S({},_),{},{suffix:r,prefix:o}));if(document.querySelector(".number-animate-".concat(t)))document.querySelectorAll(".number-animate-".concat(t)).forEach((function(e){e.classList.contains("animate-started")||(e.classList.add("animate-started"),setTimeout((function(){e.classList.add("fade-up")}),2e3))}));a.error?console.error(a.error):(a.start(),e.classList.add("countup-started"))}}))}window.addEventListener("DOMContentLoaded",E),window.addEventListener("scroll",E),window.addEventListener("beforeprint",(function(){document.querySelectorAll(".countup-element").forEach((function(e){var t=e.getAttribute("data-countup"),n=e.getAttribute("data-countup-suffix")||"",r=e.getAttribute("data-countup-prefix")||"",o="".concat(r).concat(t).concat(n);e.innerHTML=o;var a=document.querySelector(".number-animate-".concat(t));a&&a.classList.add("fade-up")}))}));var A=n(5638);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-parallax-container]"),t=document.querySelector("[data-parallax-img]"),n=1920/window.screen.width;e&&A(window).on("scroll",(function(){var r=window.scrollY,o=e.offsetTop;if(window.screen.width>1024&&r>o-1800){console.log(t.style);var a=((r-o)/5+175)*n+"px";t.style.transform="translate3D(0px, ".concat(a,", 0px)")}}))}));n(7980),n(1924);var x=n(3524),q=n(7444);n(6492),n(9311);document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".fancy-button").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-fancy");x.KR.show([{src:t}],{closeButton:!0,Thumbs:!1,Toolbar:!1})}))})),function(){var e=document.querySelector("[data-modal]"),t=document.querySelector(".modal "),n=document.querySelector(".modal__overlay"),r=document.querySelector(".modal__close"),o=document.querySelector(".modal-submit__button");function a(){(0,q.enablePageScroll)(),t.classList.remove("--active"),setTimeout((function(){t.classList.remove("--submit")}),100)}e&&(e.addEventListener("click",(function(){(0,q.disablePageScroll)(),t.classList.add("--active")})),o.addEventListener("click",(function(e){e.preventDefault(),a()})),t.addEventListener("submit",(function(e){e.preventDefault(),t.classList.add("--submit")})),n.addEventListener("click",(function(){a()})),r.addEventListener("click",(function(){a()})))}()}))},1924:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-input]");e.length&&e.forEach((function(e){var t=e.closest("[data-input-parent]");e.oninput=function(){this.value?t.classList.add("filled"):t.classList.remove("filled")}}))}))},6591:()=>{function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw s}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",(function(){var t,n=document.querySelectorAll(".video-play"),r=new IntersectionObserver((function(e){e.forEach((function(e){if(e.intersectionRatio>=.8&&!e.target.dataset.played){e.target.play(),e.target.setAttribute("autoplay","true"),e.target.load(),e.target.dataset.played=!0;var t=e.target.getAttribute("data-svg"),n=document.querySelectorAll(".video-play-".concat(t));setTimeout((function(){n.forEach((function(e){e.classList.add("fade-up")}))}),1300)}}))}),{threshold:[.8]}),o=e(n);try{for(o.s();!(t=o.n()).done;){var a=t.value;a.dataset.played||r.observe(a)}}catch(e){o.e(e)}finally{o.f()}}))},7980:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-print-button]");e&&e.addEventListener("click",(function(){window.print()}))}))},5126:(e,t,n)=>{var r={"./af":1009,"./af.js":1009,"./ar":8769,"./ar-dz":3739,"./ar-dz.js":3739,"./ar-kw":3745,"./ar-kw.js":3745,"./ar-ly":9576,"./ar-ly.js":9576,"./ar-ma":7408,"./ar-ma.js":7408,"./ar-sa":8781,"./ar-sa.js":8781,"./ar-tn":7856,"./ar-tn.js":7856,"./ar.js":8769,"./az":2030,"./az.js":2030,"./be":6476,"./be.js":6476,"./bg":5304,"./bg.js":5304,"./bm":8125,"./bm.js":8125,"./bn":34,"./bn-bd":9835,"./bn-bd.js":9835,"./bn.js":34,"./bo":4082,"./bo.js":4082,"./br":8317,"./br.js":8317,"./bs":3107,"./bs.js":3107,"./ca":8272,"./ca.js":8272,"./cs":8567,"./cs.js":8567,"./cv":1583,"./cv.js":1583,"./cy":76,"./cy.js":76,"./da":1760,"./da.js":1760,"./de":8973,"./de-at":3214,"./de-at.js":3214,"./de-ch":4728,"./de-ch.js":4728,"./de.js":8973,"./dv":4053,"./dv.js":4053,"./el":7499,"./el.js":7499,"./en-au":7876,"./en-au.js":7876,"./en-ca":7010,"./en-ca.js":7010,"./en-gb":4239,"./en-gb.js":4239,"./en-ie":9830,"./en-ie.js":9830,"./en-il":8438,"./en-il.js":8438,"./en-in":5322,"./en-in.js":5322,"./en-nz":3264,"./en-nz.js":3264,"./en-sg":5449,"./en-sg.js":5449,"./eo":9486,"./eo.js":9486,"./es":2430,"./es-do":6310,"./es-do.js":6310,"./es-mx":7038,"./es-mx.js":7038,"./es-us":3099,"./es-us.js":3099,"./es.js":2430,"./et":4975,"./et.js":4975,"./eu":7063,"./eu.js":7063,"./fa":8073,"./fa.js":8073,"./fi":957,"./fi.js":957,"./fil":8764,"./fil.js":8764,"./fo":1775,"./fo.js":1775,"./fr":4179,"./fr-ca":4306,"./fr-ca.js":4306,"./fr-ch":3791,"./fr-ch.js":3791,"./fr.js":4179,"./fy":7014,"./fy.js":7014,"./ga":6911,"./ga.js":6911,"./gd":2958,"./gd.js":2958,"./gl":7344,"./gl.js":7344,"./gom-deva":3161,"./gom-deva.js":3161,"./gom-latn":5798,"./gom-latn.js":5798,"./gu":8485,"./gu.js":8485,"./he":7917,"./he.js":7917,"./hi":2159,"./hi.js":2159,"./hr":5842,"./hr.js":5842,"./hu":5,"./hu.js":5,"./hy-am":1312,"./hy-am.js":1312,"./id":781,"./id.js":781,"./is":4101,"./is.js":4101,"./it":3467,"./it-ch":4759,"./it-ch.js":4759,"./it.js":3467,"./ja":4164,"./ja.js":4164,"./jv":79,"./jv.js":79,"./ka":7036,"./ka.js":7036,"./kk":2022,"./kk.js":2022,"./km":3418,"./km.js":3418,"./kn":3655,"./kn.js":3655,"./ko":986,"./ko.js":986,"./ku":1902,"./ku.js":1902,"./ky":4604,"./ky.js":4604,"./lb":9026,"./lb.js":9026,"./lo":537,"./lo.js":537,"./lt":2288,"./lt.js":2288,"./lv":1495,"./lv.js":1495,"./me":690,"./me.js":690,"./mi":2571,"./mi.js":2571,"./mk":3959,"./mk.js":3959,"./ml":7225,"./ml.js":7225,"./mn":88,"./mn.js":88,"./mr":6622,"./mr.js":6622,"./ms":1070,"./ms-my":8899,"./ms-my.js":8899,"./ms.js":1070,"./mt":3931,"./mt.js":3931,"./my":5393,"./my.js":5393,"./nb":4274,"./nb.js":4274,"./ne":8914,"./ne.js":8914,"./nl":3114,"./nl-be":8479,"./nl-be.js":8479,"./nl.js":3114,"./nn":4513,"./nn.js":4513,"./oc-lnc":6549,"./oc-lnc.js":6549,"./pa-in":8264,"./pa-in.js":8264,"./pl":2848,"./pl.js":2848,"./pt":899,"./pt-br":5077,"./pt-br.js":5077,"./pt.js":899,"./ro":2512,"./ro.js":2512,"./ru":1753,"./ru.js":1753,"./sd":6840,"./sd.js":6840,"./se":8362,"./se.js":8362,"./si":464,"./si.js":464,"./sk":6324,"./sk.js":6324,"./sl":1963,"./sl.js":1963,"./sq":3039,"./sq.js":3039,"./sr":3454,"./sr-cyrl":466,"./sr-cyrl.js":466,"./sr.js":3454,"./ss":5158,"./ss.js":5158,"./sv":8859,"./sv.js":8859,"./sw":7594,"./sw.js":7594,"./ta":6915,"./ta.js":6915,"./te":5677,"./te.js":5677,"./tet":2154,"./tet.js":2154,"./tg":4098,"./tg.js":4098,"./th":9071,"./th.js":9071,"./tk":9381,"./tk.js":9381,"./tl-ph":1869,"./tl-ph.js":1869,"./tlh":2346,"./tlh.js":2346,"./tr":1483,"./tr.js":1483,"./tzl":266,"./tzl.js":266,"./tzm":3138,"./tzm-latn":2960,"./tzm-latn.js":2960,"./tzm.js":3138,"./ug-cn":9456,"./ug-cn.js":9456,"./uk":805,"./uk.js":805,"./ur":1127,"./ur.js":1127,"./uz":9628,"./uz-latn":840,"./uz-latn.js":840,"./uz.js":9628,"./vi":6962,"./vi.js":6962,"./x-pseudo":9257,"./x-pseudo.js":9257,"./yo":2423,"./yo.js":2423,"./zh-cn":1002,"./zh-cn.js":1002,"./zh-hk":6046,"./zh-hk.js":6046,"./zh-mo":6903,"./zh-mo.js":6903,"./zh-tw":4710,"./zh-tw.js":4710};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=5126}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[s,i,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var d=c(r)}for(t&&t(n);l<s.length;l++)a=s[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[433],(()=>r(1273)));o=r.O(o)})();