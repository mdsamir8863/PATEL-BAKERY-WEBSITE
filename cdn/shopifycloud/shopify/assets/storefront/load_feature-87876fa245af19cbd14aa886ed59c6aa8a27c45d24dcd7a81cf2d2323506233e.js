// ! function() {
//     var e = function(e) {
//             var t = {
//                 exports: {}
//             };
//             return e.call(t.exports, t, t.exports), t.exports
//         },
//         t = function() {
//             function e(e, t) {
//                 var r = [],
//                     o = !0,
//                     n = !1,
//                     a = void 0;
//                 try {
//                     for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); o = !0);
//                 } catch (e) {
//                     n = !0, a = e
//                 } finally {
//                     try {
//                         !o && s.return && s.return()
//                     } finally {
//                         if (n) throw a
//                     }
//                 }
//                 return r
//             }
//             return function(t, r) {
//                 if (Array.isArray(t)) return t;
//                 if (Symbol.iterator in Object(t)) return e(t, r);
//                 throw new TypeError("Invalid attempt to destructure non-iterable instance")
//             }
//         }(),
//         r = function(e) {
//             return e && e.__esModule ? e : {
//                 default: e
//             }
//         },
//         o = function(e) {
//             if (Array.isArray(e)) {
//                 for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
//                 return r
//             }
//             return Array.from(e)
//         },
//         n = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", (function() {
//                     "loading" !== document.readyState && e()
//                 }))
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = r
//         })),
//         a = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 return new Error('The feature { name: "' + e.name + '", version: "' + e.version + '"} does not exist')
//             }

//             function o(e) {
//                 return new Error("Could not create registry entry " + e)
//             }

//             function n() {
//                 return new Error("Cannot register a feature with the same selector twice")
//             }

//             function a(e) {
//                 return new Error("Features should be an Array. Received: " + JSON.stringify(e))
//             }

//             function i(e) {
//                 return new Error('Features should be defined as `{ name: "name", version: "version" }`. Received: ' + JSON.stringify(e))
//             }

//             function s(e, t) {
//                 return new Error(e + " has already been loaded at version " + t)
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.featureNotFound = r, t.couldNotCreateEntry = o, t.couldNotAddToQuerySelectors = n, t.invalidFeaturesArray = a, t.invalidFeature = i, t.alreadyLoaded = s
//         })),
//         i = e((function(e, t) {
//             "use strict";

//             function r() {
//                 if (a) return a;
//                 var e = document.getElementById("shopify-features");
//                 if (e) try {
//                     a = JSON.parse(e.textContent)
//                 } catch (e) {} else a = {};
//                 return a
//             }

//             function o() {
//                 var e = r();
//                 if (e) try {
//                     return e.betas.reduce((function(e, t) {
//                         return e[t] = !0, e
//                     }), {})
//                 } catch (e) {}
//                 return {}
//             }

//             function n() {
//                 return r().locale || "en"
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.getBetas = o, t.getLocale = n;
//             var a = void 0
//         })),
//         s = e((function(e, t) {
//             "use strict";

//             function r() {}
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = r
//         })),
//         u = e((function(e, t) {
//             "use strict";

//             function r() {
//                 function e(e, t) {
//                     r[e] = r[e] || [];
//                     for (var o = r[e], n = 0; n < o.length; n++) {
//                         var i = o[n],
//                             s = i.name,
//                             u = i.version;
//                         if (t.name === s) {
//                             if (t.version !== u) throw (0, a.couldNotAddToQuerySelectors)(e);
//                             return
//                         }
//                     }
//                     o.push(t)
//                 }

//                 function t() {
//                     return Object.keys(r).reduce((function(e, t) {
//                         if (!document.querySelector(t)) return e;
//                         var o = r[t];
//                         return delete r[t], e.concat(o)
//                     }), [])
//                 }
//                 var r = {};
//                 return {
//                     add: e,
//                     getFeatures: t
//                 }
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = r
//         })),
//         l = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 var t = e.name,
//                     r = e.baseName,
//                     o = e.version,
//                     n = e.betaFlag,
//                     s = e.fileName,
//                     l = e.fileNames,
//                     d = e.legacy,
//                     c = e.localized,
//                     f = e.localesSupported,
//                     h = e.autoLoadSelector,
//                     v = e.props,
//                     y = void 0 === v ? {} : v,
//                     m = t + "@" + (o || "latest");
//                 if (u[m]) throw (0, a.couldNotCreateEntry)(m);
//                 h && (Array.isArray(h) ? h : [h]).forEach((function(e) {
//                     p.lookup.add(e, {
//                         name: t,
//                         version: o
//                     })
//                 }));
//                 u[m] = {
//                     props: y,
//                     betaFlag: n,
//                     scriptId: m,
//                     name: t,
//                     baseName: r,
//                     version: o,
//                     locale: (0, i.getLocale)(),
//                     localized: c,
//                     localesSupported: f,
//                     legacy: d,
//                     fileName: s,
//                     fileNames: l
//                 }
//             }

//             function o() {
//                 l = {}
//             }

//             function n(e) {
//                 window.Shopify.modules ? (e.legacy = !1, e.props = {
//                     type: "module"
//                 }, r(e)) : e.hasLegacy && (e.legacy = !0, e.props = {
//                     nomodule: ""
//                 }, r(e))
//             }

//             function s(e) {
//                 var t = e.name + "@" + (e.version || "latest"),
//                     r = u[t];
//                 if (!r) throw (0, a.featureNotFound)(e);
//                 var o = r.name,
//                     n = r.baseName,
//                     i = r.version,
//                     s = r.localized && r.locale,
//                     d = r.legacy,
//                     c = r.localesSupported;
//                 if (l[o] && l[o] !== i) throw (0, a.alreadyLoaded)(t, l[o]);
//                 l[o] = i;
//                 var f = [];
//                 return (r.fileNames || [r.fileName]).forEach((function(e) {
//                     f.push((0, h.urlForFeature)({
//                         name: o,
//                         baseName: n,
//                         version: i,
//                         legacy: d,
//                         locale: s,
//                         localesSupported: c,
//                         fileName: e
//                     }))
//                 })), 1 === f.length ? r.src = f[0] : f.length > 1 && (r.srcs = f), r
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.reset = o, t.register = n, t.getEntry = s;
//             var u = {},
//                 l = {}
//         })),
//         d = e((function(e, t) {
//             "use strict";

//             function r() {
//                 n = null
//             }

//             function o(e) {
//                 return n ? n[e] : (n = (0, i.getBetas)(), o(e))
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.resetBetas = r, t.default = o;
//             var n = null
//         })),
//         c = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 return a.indexOf(e) > -1
//             }

//             function o(e) {
//                 return i.indexOf(e) > -1
//             }

//             function n(e, t, n) {
//                 function s() {
//                     a.push(c), d(), n(null, c)
//                 }

//                 function u() {
//                     i.push(c), d(), n(new Error("load error: " + e))
//                 }

//                 function l() {
//                     c.addEventListener("load", s), c.addEventListener("error", u)
//                 }

//                 function d() {
//                     c.removeEventListener("load", s), c.removeEventListener("error", u)
//                 }
//                 var c = document.querySelector('script[src="' + e + '"]');
//                 c && r(c) ? s() : c && o(c) ? u() : c ? l() : (c = document.createElement("script"), Object.keys(t).forEach((function(e) {
//                     c.setAttribute(e, t[e])
//                 })), null === c.getAttribute("defer") && c.setAttribute("defer", ""), c.src = e, c.crossorigin = "anonymous", l(), document.head.appendChild(c))
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = n;
//             var a = [],
//                 i = []
//         })),
//         f = e((function(e, o) {
//             "use strict";

//             function n(e, t, r) {
//                 return e.reduce((function(e, o) {
//                     var n = o.onLoad || v.default;
//                     try {
//                         var i = (0, l.getEntry)(o),
//                             s = i.betaFlag,
//                             u = !s || (0, h.default)(s);
//                         if (r && !u) throw (0, a.featureNotFound)(o);
//                         u && e.push([i, o])
//                     } catch (e) {
//                         n(e), t.push(e)
//                     }
//                     return e
//                 }), [])
//             }

//             function i(e, r, o) {
//                 var n = e.reduce((function(e, r) {
//                     var o = t(r, 1)[0];
//                     return e + (o.srcs ? o.srcs.length : 1)
//                 }), 0);
//                 0 !== n ? e.forEach((function(e) {
//                     var a = t(e, 2),
//                         i = a[0],
//                         s = a[1].onLoad || v.default,
//                         u = i.srcs || [i.src],
//                         l = u.length,
//                         d = [];
//                     u.forEach((function(e) {
//                         (0, y.default)(e, i.props, (function(e) {
//                             e && (r.push(e), d.push(e)), 0 === --l && (0 === d.length ? s(null) : 1 === d.length ? s(d[0]) : s(d)), 0 === --n && o(r)
//                         }))
//                     }))
//                 })) : o(r)
//             }

//             function u(e, t, r) {
//                 var o = [];
//                 i(n(e, o, t), o, (function(e) {
//                     var t = 0 === e.length ? null : e;
//                     r(t)
//                 }))
//             }

//             function f(e, t) {
//                 u(e, !0, t)
//             }

//             function p(e, t) {
//                 u(e, !1, t)
//             }
//             Object.defineProperty(o, "__esModule", {
//                 value: !0
//             }), o.loadMultiple = u, o.loadMultipleErrorIfNotInBeta = f, o.loadMultipleSilentIfNotInBeta = p;
//             var h = r(d),
//                 v = r(s),
//                 y = r(c)
//         })),
//         p = e((function(e, t) {
//             "use strict";

//             function o(e) {
//                 var t = e || n.default;
//                 (0, f.loadMultipleSilentIfNotInBeta)(a.getFeatures(), t)
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.lookup = void 0, t.default = o;
//             var n = r(s),
//                 a = (0, r(u).default)();
//             t.lookup = a
//         })),
//         h = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 var t = e.name,
//                     r = e.version,
//                     o = e.legacy,
//                     n = e.baseName,
//                     a = void 0 === n ? null : n,
//                     i = e.locale,
//                     s = void 0 === i ? null : i,
//                     u = e.localesSupported,
//                     l = void 0 === u ? [] : u,
//                     d = e.fileName,
//                     c = a || t,
//                     f = (void 0 === d ? null : d) || c;
//                 if (f.endsWith(".js") && (f = f.slice(0, -3)), o && (f += "-legacy"), s && (f = f + "." + (s = 0 === l.length || l.includes(s) ? s : "en")), ("shop-js" === t || t.startsWith("shop-js/")) && window.Shopify.spinShopJsUrl) return "https://" + window.Shopify.spinShopJsUrl + "/" + f + ".js";
//                 var p = [window.Shopify && window.Shopify.cdnHost || "cdn.shopify.com", "shopifycloud", c];
//                 return void 0 !== r && p.push("v" + r), p.push(f + ".js"), "https://" + p.join("/")
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.urlForFeature = r
//         })),
//         v = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 if (!e || "string" != typeof e.name || "string" != typeof e.version) throw (0, a.invalidFeature)(e)
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = r
//         })),
//         y = e((function(e, t) {
//             "use strict";

//             function o(e, t) {
//                 var r = t || i.default;
//                 if (Array.isArray(e)) return e.forEach(n.default), void(0, f.loadMultipleErrorIfNotInBeta)(e, r);
//                 throw (0, a.invalidFeaturesArray)(e)
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = o;
//             var n = r(v),
//                 i = r(s)
//         })),
//         m = e((function(e, t) {
//             "use strict";

//             function r(e) {
//                 var t = null;
//                 return {
//                     get isObserving() {
//                         return Boolean(t)
//                     },
//                     enable: function() {
//                         this.isObserving || (t = new MutationObserver((function(t) {
//                             for (var r = !1, o = 0; o < t.length; o++)
//                                 if (t[o].addedNodes.length) {
//                                     r = !0;
//                                     break
//                                 }
//                             r && e()
//                         }))).observe(document.body, {
//                             childList: !0,
//                             subtree: !0
//                         })
//                     },
//                     disable: function() {
//                         this.isObserving && (t.disconnect(), t = null)
//                     }
//                 }
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = r
//         })),
//         g = e((function(e, t) {
//             "use strict";

//             function r(e, t) {
//                 var r = window.Shopify[e] && window.Shopify[e].q;
//                 r && Array.isArray(r) && r.forEach((function(e) {
//                     t.apply(void 0, o(e))
//                 })), window.Shopify[e] = t
//             }
//             Object.defineProperty(t, "__esModule", {
//                 value: !0
//             }), t.default = r
//         }));
//     e((function(e, t) {
//         "use strict";
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.resetRegistry = t.resetBetas = t.register = void 0;
//         var o = r(n),
//             a = r(y),
//             i = r(p),
//             s = r(m),
//             u = r(g);
//         t.register = l.register, t.resetBetas = d.resetBetas, t.resetRegistry = l.reset, window.Shopify = window.Shopify || {}, window.Shopify.featureAssets = window.Shopify.featureAssets || {}, window.Shopify.featureAssets["shop-js"] = window.Shopify.featureAssets["shop-js"] || {}, (0, l.register)({
//             name: "model-viewer",
//             version: "0.6",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="0.6"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "0.7",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="0.7"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "0.8",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="0.8"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "1.2",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="1.2"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "1.7",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="1.7"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "1.9",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="1.9"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "1.10",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="1.10"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "1.11",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="1.11"]'
//         }), (0, l.register)({
//             name: "model-viewer",
//             version: "1.12",
//             hasLegacy: !0,
//             autoLoadSelector: 'model-viewer[data-shopify-feature="1.12"]'
//         }), (0, l.register)({
//             name: "shop-js/shopify-payment-terms",
//             baseName: "shop-js",
//             hasLegacy: !1,
//             localized: !1,
//             fileNames: Shopify.featureAssets["shop-js"]["payment-terms"] || ["client"],
//             autoLoadSelector: ["shopify-payment-terms"]
//         }), (0, l.register)({
//             name: "shop-js/shop-login-button",
//             baseName: "shop-js",
//             hasLegacy: !1,
//             localized: !1,
//             fileNames: Shopify.featureAssets["shop-js"]["login-button"] || ["client"],
//             autoLoadSelector: ["shop-login-button"]
//         }), (0, l.register)({
//             name: "model-viewer-ui",
//             version: "1.0",
//             hasLegacy: !0,
//             localized: !0,
//             localesSupported: ["bg-BG", "cs", "da", "de", "el", "es", "fi", "fr", "hi", "hr-HR", "hu", "id", "it", "ja", "ko", "lt-LT", "ms", "nb", "nl", "pl", "pt-BR", "pt-PT", "ro-RO", "ru", "sk-SK", "sl-SI", "sv", "th", "tr", "vi", "zh-CN", "zh-TW"]
//         }), (0, l.register)({
//             name: "shopify-xr",
//             version: "1.0",
//             baseName: "shopify-xr-js",
//             fileName: "shopify-xr",
//             localized: !0,
//             localesSupported: ["bg-BG", "cs", "da", "de", "el", "es", "fi", "fr", "hi", "hr-HR", "hu", "id", "it", "ja", "ko", "lt-LT", "ms", "nb", "nl", "pl", "pt-BR", "pt-PT", "ro-RO", "ru", "sk-SK", "sl-SI", "sv", "th", "tr", "vi", "zh-CN", "zh-TW"]
//         }), (0, l.register)({
//             name: "video-ui",
//             baseName: "shopify-plyr",
//             version: "1.0",
//             hasLegacy: !0,
//             localized: !0,
//             localesSupported: ["cs", "da", "de", "es", "fi", "fr", "hi", "it", "ja", "ko", "ms", "nb", "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"]
//         }), (0, l.register)({
//             name: "video-ui",
//             baseName: "shopify-plyr",
//             version: "1.1",
//             hasLegacy: !0,
//             localized: !0,
//             localesSupported: ["cs", "da", "de", "es", "fi", "fr", "hi", "it", "ja", "ko", "ms", "nb", "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"]
//         }), (0, l.register)({
//             name: "video-ui",
//             baseName: "plyr",
//             version: "2.0",
//             hasLegacy: !0,
//             localized: !0,
//             localesSupported: ["bg-BG", "cs", "da", "de", "el", "es", "fi", "fr", "hi", "hr-HR", "hu", "id", "it", "ja", "ko", "lt-LT", "ms", "nb", "nl", "pl", "pt-BR", "pt-PT", "ro-RO", "ru", "sk-SK", "sl-SI", "sv", "th", "tr", "vi", "zh-CN", "zh-TW"],
//             fileName: "shopify-plyr"
//         }), (0, l.register)({
//             name: "media-analytics",
//             version: "0.1",
//             hasLegacy: !0,
//             fileName: "analytics",
//             betaFlag: "rich-media-storefront-analytics",
//             autoLoadSelector: ["video", "model-viewer", 'a[rel="ar"]', 'a[href*="package=com.google.ar.core;action=android.intent.action.VIEW;"]', "[data-shopify-xr]", 'iframe[src^="https://www.youtube.com/embed/"]', 'iframe[src^="https://player.vimeo.com/video/"]']
//         }), (0, l.register)({
//             name: "consent-tracking-api",
//             version: "0.1",
//             hasLegacy: !0
//         }), (0, o.default)((function() {
//             function e() {
//                 (0, i.default)((function(e) {
//                     if (e) throw e[0]
//                 }))
//             }(0, u.default)("loadFeatures", a.default), (0, u.default)("autoloadFeatures", i.default), e(), (0, s.default)(e).enable()
//         }))
//     }))
// }("undefined" != typeof global ? global : "undefined" != typeof window && window);