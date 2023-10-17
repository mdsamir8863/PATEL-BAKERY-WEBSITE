function initWebPixel() {
    (function(shopify) {
        shopify.extend('WebPixel::Render', function(api) {
            var analytics = api.analytics,
                browser = api.browser,
                init = api.init;
            var e = api._pixelInfo ? api._pixelInfo.runtimeContext : null,
                n = api._pixelInfo ? api._pixelInfo.type : null;
            analytics.subscribe("all_standard_events", (function(i) {
                var l, o;
                l = i.name, o = i, browser.localStorage.getItem("shopify-pixel-mode").then((function(i) {
                    "debug" === i && console.log(`[shopify-pixel][${n}][${e}] ${l}`, o)
                })).catch((function() {}))
            }));
        });

    })(self.webPixelsManager.createShopifyExtend('shopify-app-pixel', 'app'));
}
(() => {
    var e = {
            747: function(e, t, r) {
                var i, n, o;
                ! function(a, s) {
                    "use strict";
                    n = [r(18)], void 0 === (o = "function" == typeof(i = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            r = /^\s*at .*(\S+:\d+|\(native\))/m,
                            i = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(r)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !!e.match(r)
                                }), this).map((function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        i = r.match(/ (\(.+\)$)/);
                                    r = i ? r.replace(i[0], "") : r;
                                    var n = this.extractLocation(i ? i[1] : r),
                                        o = i && r || void 0,
                                        a = ["eval", "<anonymous>"].indexOf(n[0]) > -1 ? void 0 : n[0];
                                    return new e({
                                        functionName: o,
                                        fileName: a,
                                        lineNumber: n[1],
                                        columnNumber: n[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !e.match(i)
                                }), this).map((function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var r = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        i = t.match(r),
                                        n = i && i[1] ? i[1] : void 0,
                                        o = this.extractLocation(t.replace(r, ""));
                                    return new e({
                                        functionName: n,
                                        fileName: o[0],
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)/i, i = t.message.split("\n"), n = [], o = 2, a = i.length; o < a; o += 2) {
                                    var s = r.exec(i[o]);
                                    s && n.push(new e({
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: i[o]
                                    }))
                                }
                                return n
                            },
                            parseOpera10: function(t) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, i = t.stacktrace.split("\n"), n = [], o = 0, a = i.length; o < a; o += 2) {
                                    var s = r.exec(i[o]);
                                    s && n.push(new e({
                                        functionName: s[3] || void 0,
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: i[o]
                                    }))
                                }
                                return n
                            },
                            parseOpera11: function(r) {
                                return r.stack.split("\n").filter((function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }), this).map((function(t) {
                                    var r, i = t.split("@"),
                                        n = this.extractLocation(i.pop()),
                                        o = i.shift() || "",
                                        a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    o.match(/\(([^)]*)\)/) && (r = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var s = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");
                                    return new e({
                                        functionName: a,
                                        args: s,
                                        fileName: n[0],
                                        lineNumber: n[1],
                                        columnNumber: n[2],
                                        source: t
                                    })
                                }), this)
                            }
                        }
                    }) ? i.apply(t, n) : i) || (e.exports = o)
                }()
            },
            18: function(e, t) {
                var r, i, n;
                ! function(o, a) {
                    "use strict";
                    i = [], void 0 === (n = "function" == typeof(r = function() {
                        function e(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function t(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            i = ["columnNumber", "lineNumber"],
                            n = ["fileName", "functionName", "source"],
                            o = r.concat(i, n, ["args"], ["evalOrigin"]);

                        function a(t) {
                            if (t)
                                for (var r = 0; r < o.length; r++) void 0 !== t[o[r]] && this["set" + e(o[r])](t[o[r]])
                        }
                        a.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof a) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new a(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    r = this.getColumnNumber() || "",
                                    i = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + r + ")" : "[eval]:" + t + ":" + r : i ? i + " (" + e + ":" + t + ":" + r + ")" : e + ":" + t + ":" + r
                            }
                        }, a.fromString = function(e) {
                            var t = e.indexOf("("),
                                r = e.lastIndexOf(")"),
                                i = e.substring(0, t),
                                n = e.substring(t + 1, r).split(","),
                                o = e.substring(r + 1);
                            if (0 === o.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""),
                                c = s[1],
                                l = s[2],
                                u = s[3];
                            return new a({
                                functionName: i,
                                args: n || void 0,
                                fileName: c,
                                lineNumber: l || void 0,
                                columnNumber: u || void 0
                            })
                        };
                        for (var s = 0; s < r.length; s++) a.prototype["get" + e(r[s])] = t(r[s]), a.prototype["set" + e(r[s])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(r[s]);
                        for (var c = 0; c < i.length; c++) a.prototype["get" + e(i[c])] = t(i[c]), a.prototype["set" + e(i[c])] = function(e) {
                            return function(t) {
                                if (r = t, isNaN(parseFloat(r)) || !isFinite(r)) throw new TypeError(e + " must be a Number");
                                var r;
                                this[e] = Number(t)
                            }
                        }(i[c]);
                        for (var l = 0; l < n.length; l++) a.prototype["get" + e(n[l])] = t(n[l]), a.prototype["set" + e(n[l])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(n[l]);
                        return a
                    }) ? r.apply(t, i) : r) || (e.exports = n)
                }()
            },
            700: function(e, t, r) {
                var i;
                ! function(n, o) {
                    "use strict";
                    var a = "function",
                        s = "undefined",
                        c = "object",
                        l = "string",
                        u = "major",
                        d = "model",
                        b = "name",
                        f = "type",
                        m = "vendor",
                        p = "version",
                        w = "architecture",
                        h = "console",
                        g = "mobile",
                        v = "tablet",
                        y = "smarttv",
                        x = "wearable",
                        k = "embedded",
                        S = "Amazon",
                        O = "Apple",
                        R = "ASUS",
                        E = "BlackBerry",
                        N = "Browser",
                        T = "Chrome",
                        A = "Firefox",
                        L = "Google",
                        B = "Huawei",
                        C = "LG",
                        M = "Microsoft",
                        P = "Motorola",
                        I = "Opera",
                        U = "Samsung",
                        D = "Sharp",
                        j = "Sony",
                        q = "Xiaomi",
                        F = "Zebra",
                        W = "Facebook",
                        z = "Chromium OS",
                        V = "Mac OS",
                        _ = function(e) {
                            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                            return t
                        },
                        $ = function(e, t) {
                            return typeof e === l && -1 !== G(t).indexOf(G(e))
                        },
                        G = function(e) {
                            return e.toLowerCase()
                        },
                        H = function(e, t) {
                            if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
                        },
                        X = function(e, t) {
                            for (var r, i, n, s, l, u, d = 0; d < t.length && !l;) {
                                var b = t[d],
                                    f = t[d + 1];
                                for (r = i = 0; r < b.length && !l && b[r];)
                                    if (l = b[r++].exec(e))
                                        for (n = 0; n < f.length; n++) u = l[++i], typeof(s = f[n]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : o : this[s[0]] = u ? s[1].call(this, u, s[2]) : o : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : o) : this[s] = u || o;
                                d += 2
                            }
                        },
                        Y = function(e, t) {
                            for (var r in t)
                                if (typeof t[r] === c && t[r].length > 0) {
                                    for (var i = 0; i < t[r].length; i++)
                                        if ($(t[r][i], e)) return "?" === r ? o : r
                                } else if ($(t[r], e)) return "?" === r ? o : r;
                            return e
                        },
                        Z = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        K = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [p, [b, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [p, [b, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [b, p],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [p, [b, I + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [p, [b, I]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [b, p],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [p, [b, "UC" + N]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [p, [b, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [p, [b, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [p, [b, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [p, [b, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [p, [b, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [b, /(.+)/, "$1 Secure " + N], p
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [p, [b, A + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [p, [b, I + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [p, [b, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [p, [b, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [p, [b, I + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [p, [b, "MIUI " + N]],
                                [/fxios\/([-\w\.]+)/i],
                                [p, [b, A]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [b, "360 " + N]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [b, /(.+)/, "$1 " + N], p
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [b, /_/g, " "], p
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [b, p],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [b],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [b, W], p
                                ],
                                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [b, p],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [p, [b, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [p, [b, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [p, [b, T + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [b, T + " WebView"], p
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [p, [b, "Android " + N]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [b, p],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [p, [b, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [p, b],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [b, [p, Y, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [b, p],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [b, "Netscape"], p
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [p, [b, A + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [b, p],
                                [/(cobalt)\/([\w\.]+)/i],
                                [b, [p, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [w, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [w, G]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [w, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [w, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [w, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [w, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [w, /ower/, "", G]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [w, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [w, G]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [d, [m, U],
                                    [f, v]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [d, [m, U],
                                    [f, g]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [d, [m, O],
                                    [f, g]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [d, [m, O],
                                    [f, v]
                                ],
                                [/(macintosh);/i],
                                [d, [m, O]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [d, [m, D],
                                    [f, g]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [d, [m, B],
                                    [f, v]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [d, [m, B],
                                    [f, g]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [m, q],
                                    [f, g]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [m, q],
                                    [f, v]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [d, [m, "OPPO"],
                                    [f, g]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [d, [m, "Vivo"],
                                    [f, g]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [d, [m, "Realme"],
                                    [f, g]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [d, [m, P],
                                    [f, g]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [d, [m, P],
                                    [f, v]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [d, [m, C],
                                    [f, v]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [d, [m, C],
                                    [f, g]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [d, [m, "Lenovo"],
                                    [f, v]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [d, /_/g, " "],
                                    [m, "Nokia"],
                                    [f, g]
                                ],
                                [/(pixel c)\b/i],
                                [d, [m, L],
                                    [f, v]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [d, [m, L],
                                    [f, g]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [d, [m, j],
                                    [f, g]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [d, "Xperia Tablet"],
                                    [m, j],
                                    [f, v]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [d, [m, "OnePlus"],
                                    [f, g]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [d, [m, S],
                                    [f, v]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [d, /(.+)/g, "Fire Phone $1"],
                                    [m, S],
                                    [f, g]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [d, m, [f, v]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [d, [m, E],
                                    [f, g]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [d, [m, R],
                                    [f, v]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [d, [m, R],
                                    [f, g]
                                ],
                                [/(nexus 9)/i],
                                [d, [m, "HTC"],
                                    [f, v]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [m, [d, /_/g, " "],
                                    [f, g]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [d, [m, "Acer"],
                                    [f, v]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [d, [m, "Meizu"],
                                    [f, g]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [m, d, [f, g]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [m, d, [f, v]],
                                [/(surface duo)/i],
                                [d, [m, M],
                                    [f, v]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [d, [m, "Fairphone"],
                                    [f, g]
                                ],
                                [/(u304aa)/i],
                                [d, [m, "AT&T"],
                                    [f, g]
                                ],
                                [/\bsie-(\w*)/i],
                                [d, [m, "Siemens"],
                                    [f, g]
                                ],
                                [/\b(rct\w+) b/i],
                                [d, [m, "RCA"],
                                    [f, v]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [d, [m, "Dell"],
                                    [f, v]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [d, [m, "Verizon"],
                                    [f, v]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [d, [m, "Barnes & Noble"],
                                    [f, v]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [d, [m, "NuVision"],
                                    [f, v]
                                ],
                                [/\b(k88) b/i],
                                [d, [m, "ZTE"],
                                    [f, v]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [d, [m, "ZTE"],
                                    [f, g]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [d, [m, "Swiss"],
                                    [f, g]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [d, [m, "Swiss"],
                                    [f, v]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [d, [m, "Zeki"],
                                    [f, v]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [m, "Dragon Touch"], d, [f, v]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [d, [m, "Insignia"],
                                    [f, v]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [d, [m, "NextBook"],
                                    [f, v]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [m, "Voice"], d, [f, g]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [m, "LvTel"], d, [f, g]
                                ],
                                [/\b(ph-1) /i],
                                [d, [m, "Essential"],
                                    [f, g]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [d, [m, "Envizen"],
                                    [f, v]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [d, [m, "MachSpeed"],
                                    [f, v]
                                ],
                                [/\btu_(1491) b/i],
                                [d, [m, "Rotor"],
                                    [f, v]
                                ],
                                [/(shield[\w ]+) b/i],
                                [d, [m, "Nvidia"],
                                    [f, v]
                                ],
                                [/(sprint) (\w+)/i],
                                [m, d, [f, g]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [d, /\./g, " "],
                                    [m, M],
                                    [f, g]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [d, [m, F],
                                    [f, v]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [d, [m, F],
                                    [f, g]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [m, [f, y]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [d, /^/, "SmartTV"],
                                    [m, U],
                                    [f, y]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [m, C],
                                    [f, y]
                                ],
                                [/(apple) ?tv/i],
                                [m, [d, O + " TV"],
                                    [f, y]
                                ],
                                [/crkey/i],
                                [
                                    [d, T + "cast"],
                                    [m, L],
                                    [f, y]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [d, [m, S],
                                    [f, y]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [d, [m, D],
                                    [f, y]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [d, [m, j],
                                    [f, y]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [d, [m, q],
                                    [f, y]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [m, d, [f, y]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [m, H],
                                    [d, H],
                                    [f, y]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [f, y]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [m, d, [f, h]],
                                [/droid.+; (shield) bui/i],
                                [d, [m, "Nvidia"],
                                    [f, h]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [d, [m, j],
                                    [f, h]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [d, [m, M],
                                    [f, h]
                                ],
                                [/((pebble))app/i],
                                [m, d, [f, x]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [d, [m, O],
                                    [f, x]
                                ],
                                [/droid.+; (glass) \d/i],
                                [d, [m, L],
                                    [f, x]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [d, [m, F],
                                    [f, x]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [d, [m, W],
                                    [f, x]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [m, [f, k]],
                                [/(aeobc)\b/i],
                                [d, [m, S],
                                    [f, k]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [d, [f, g]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [d, [f, v]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [f, v]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [f, g]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [d, [m, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [p, [b, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [p, [b, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [b, p],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [p, b]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [b, p],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [b, [p, Y, Z]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [b, "Windows"],
                                    [p, Y, Z]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [p, /_/g, "."],
                                    [b, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [b, V],
                                    [p, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [p, b],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [b, p],
                                [/\(bb(10);/i],
                                [p, [b, E]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [p, [b, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [p, [b, A + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [p, [b, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [p, [b, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [p, [b, T + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [b, z], p
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [b, p],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [b, "Solaris"], p
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [b, p]
                            ]
                        },
                        J = function(e, t) {
                            if (typeof e === c && (t = e, e = o), !(this instanceof J)) return new J(e, t).getResult();
                            var r = typeof n !== s && n.navigator ? n.navigator : o,
                                i = e || (r && r.userAgent ? r.userAgent : ""),
                                h = r && r.userAgentData ? r.userAgentData : o,
                                y = t ? function(e, t) {
                                    var r = {};
                                    for (var i in e) t[i] && t[i].length % 2 == 0 ? r[i] = t[i].concat(e[i]) : r[i] = e[i];
                                    return r
                                }(K, t) : K,
                                x = r && r.userAgent == i;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[b] = o, t[p] = o, X.call(t, i, y.browser), t[u] = typeof(e = t[p]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, x && r && r.brave && typeof r.brave.isBrave == a && (t[b] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[w] = o, X.call(e, i, y.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[m] = o, e[d] = o, e[f] = o, X.call(e, i, y.device), x && !e[f] && h && h.mobile && (e[f] = g), x && "Macintosh" == e[d] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[d] = "iPad", e[f] = v), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[b] = o, e[p] = o, X.call(e, i, y.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[b] = o, e[p] = o, X.call(e, i, y.os), x && !e[b] && h && "Unknown" != h.platform && (e[b] = h.platform.replace(/chrome os/i, z).replace(/macos/i, V)), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return i
                            }, this.setUA = function(e) {
                                return i = typeof e === l && e.length > 350 ? H(e, 350) : e, this
                            }, this.setUA(i), this
                        };
                    J.VERSION = "1.0.36", J.BROWSER = _([b, p, u]), J.CPU = _([w]), J.DEVICE = _([d, m, f, h, g, y, v, x, k]), J.ENGINE = J.OS = _([b, p]), typeof t !== s ? (e.exports && (t = e.exports = J), t.UAParser = J) : r.amdO ? (i = function() {
                        return J
                    }.call(t, r, t, e)) === o || (e.exports = i) : typeof n !== s && (n.UAParser = J);
                    var Q = typeof n !== s && (n.jQuery || n.Zepto);
                    if (Q && !Q.ua) {
                        var ee = new J;
                        Q.ua = ee.getResult(), Q.ua.get = function() {
                            return ee.getUA()
                        }, Q.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var r in t) Q.ua[r] = t[r]
                        }
                    }
                }("object" == typeof window ? window : this)
            }
        },
        t = {};

    function r(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var o = t[i] = {
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, r), o.exports
    }
    r.amdO = {}, (() => {
        "use strict";
        const e = "remote-ui::ready",
            t = Symbol.for("RemoteUi::Retain"),
            i = Symbol.for("RemoteUi::Release"),
            n = Symbol.for("RemoteUi::RetainedBy");
        class o {
            constructor() {
                this.memoryManaged = new Set
            }
            add(e) {
                this.memoryManaged.add(e), e[n].add(this), e[t]()
            }
            release() {
                for (const e of this.memoryManaged) e[n].delete(this), e[i]();
                this.memoryManaged.clear()
            }
        }
        const a = "_@f";

        function s(e) {
            const r = new Map,
                s = new Map,
                c = new Map;
            return {
                encode: function t(i, n = new Map) {
                    if (null == i) return [i];
                    const o = n.get(i);
                    if (o) return o;
                    if ("object" == typeof i) {
                        if (Array.isArray(i)) {
                            n.set(i, [void 0]);
                            const e = [],
                                r = [i.map((r => {
                                    const [i, o = []] = t(r, n);
                                    return e.push(...o), i
                                })), e];
                            return n.set(i, r), r
                        }
                        if (function(e) {
                                if (null == e || "object" != typeof e) return !1;
                                const t = Object.getPrototypeOf(e);
                                return null == t || t === Object.prototype
                            }(i)) {
                            n.set(i, [void 0]);
                            const e = [],
                                r = [Object.keys(i).reduce(((r, o) => {
                                    const [a, s = []] = t(i[o], n);
                                    return e.push(...s), { ...r,
                                        [o]: a
                                    }
                                }), {}), e];
                            return n.set(i, r), r
                        }
                    }
                    if ("function" == typeof i) {
                        if (r.has(i)) {
                            const e = r.get(i),
                                t = [{
                                    [a]: e
                                }];
                            return n.set(i, t), t
                        }
                        const t = e.uuid();
                        r.set(i, t), s.set(t, i);
                        const o = [{
                            [a]: t
                        }];
                        return n.set(i, o), o
                    }
                    const c = [i];
                    return n.set(i, c), c
                },
                decode: l,
                async call(e, r) {
                    const a = new o,
                        c = s.get(e);
                    if (null == c) throw new Error("You attempted to call a function that was already released.");
                    try {
                        const e = (u = c, Boolean(u && u[t] && u[i]) ? [a, ...c[n]] : [a]);
                        return await c(...l(r, e))
                    } finally {
                        a.release()
                    }
                    var u
                },
                release(e) {
                    const t = s.get(e);
                    t && (s.delete(e), r.delete(t))
                },
                terminate() {
                    r.clear(), s.clear(), c.clear()
                }
            };

            function l(r, o) {
                if ("object" == typeof r) {
                    if (null == r) return r;
                    if (r instanceof ArrayBuffer) return r;
                    if (Array.isArray(r)) return r.map((e => l(e, o)));
                    if (a in r) {
                        const s = r[a];
                        if (c.has(s)) return c.get(s);
                        let l = 0,
                            u = !1;
                        const d = () => {
                                l -= 1, 0 === l && (u = !0, c.delete(s), e.release(s))
                            },
                            b = () => {
                                l += 1
                            },
                            f = new Set(o),
                            m = (...t) => {
                                if (u) throw new Error("You attempted to call a function that was already released.");
                                if (!c.has(s)) throw new Error("You attempted to call a function that was already revoked.");
                                return e.call(s, t)
                            };
                        Object.defineProperties(m, {
                            [i]: {
                                value: d,
                                writable: !1
                            },
                            [t]: {
                                value: b,
                                writable: !1
                            },
                            [n]: {
                                value: f,
                                writable: !1
                            }
                        });
                        for (const e of f) e.add(m);
                        return c.set(s, m), m
                    }
                    return Object.keys(r).reduce(((e, t) => ({ ...e,
                        [t]: l(r[t], o)
                    })), {})
                }
                return r
            }
        }

        function c() {
            return `${l()}-${l()}-${l()}-${l()}`
        }

        function l() {
            return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
        }
        const u = "production",
            d = "0.0.377",
            b = "c17768fdw9ca797f2p09ffbf64m6f3c9c0f";
        async function f(e, t = "") {
            if (e.includes(self.location.origin) && !e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) return !1;
            const r = new self.Blob([t], {
                type: "text/plain"
            });
            try {
                return self.fetch(e, {
                    method: "POST",
                    keepalive: !0,
                    body: r
                }), !0
            } catch {
                return !1
            }
        }

        function m() {
            try {
                return self instanceof DedicatedWorkerGlobalScope
            } catch (e) {
                return !1
            }
        }
        var p = r(700),
            w = r(747);
        class h extends Error {
            constructor(...e) {
                super(...e), this.message = "Excessive Stacktrace: May indicate infinite loop forming"
            }
        }
        const g = {
            development: "https://web-pixels-manager.myshopify.io/bugsnag",
            production: "https://notify.bugsnag.com",
            test: "https://localhost"
        };

        function v(e, t, r, i = !0) {
            try {
                const n = { ...i ? Object.getOwnPropertyDescriptor(e, t) : {},
                    ...r
                };
                return Object.defineProperty(e, t, n)
            } catch (n) {
                return e
            }
        }
        class y extends Error {
            constructor(...e) {
                super(...e), this.name = "InsecureUrlError"
            }
        }
        class x extends Error {
            constructor(...e) {
                super(...e), this.name = "InsecureUrlError"
            }
        }

        function k() {
            const e = XMLHttpRequest.prototype.open;
            return XMLHttpRequest.prototype.open = function(t, r) {
                const i = new URL(r);
                if ("https:" !== i.protocol) throw new x(`URL must be secure (HTTPS): ${i.href}`);
                if (i.href.includes(self.location.origin)) throw new x(`Request are not allowed to the same origin: ${i.href}`);
                e.apply(this, arguments)
            }, XMLHttpRequest
        }
        const S = {
                Request: !1,
                Response: !1,
                Headers: !1,
                XMLHttpRequest: !1,
                XMLHttpRequestEventTarget: !1,
                XMLHttpRequestUpload: !1
            },
            O = {
                BarcodeDetector: !0,
                BroadcastChannel: !0,
                Cache: !0,
                CustomEvent: !0,
                FormData: !0,
                ImageData: !0,
                NetworkInformation: !0,
                ServiceWorkerRegistration: !0,
                WebSocket: !0,
                Browser: !0,
                WorkerBrowser: !0,
                MessageChannel: !0,
                MessagePort: !0,
                crypto: !1,
                Crypto: !1,
                CryptoKey: !1,
                SubtleCrypto: !1,
                TextDecoder: !0,
                TextDecoderStream: !0,
                TextEncoder: !0,
                TextEncoderStream: !0,
                Request: !1,
                Response: !1,
                Headers: !1,
                indexedDB: !0,
                IDBCursor: !0,
                IDBCursorWithValue: !0,
                IDBDatabase: !0,
                IDBFactory: !0,
                IDBIndex: !0,
                IDBKeyRange: !0,
                IDBObjectStore: !0,
                IDBOpenDBRequest: !0,
                IDBRequest: !0,
                IDBTransaction: !0,
                IDBVersionChangeEvent: !0,
                Navigator: !0,
                navigator: !0,
                Notification: !0,
                NotificationEvent: !0,
                EventSource: !0,
                WebGL2RenderingContext: !0,
                WebGLActiveInfo: !0,
                WebGLBuffer: !0,
                WebGLFramebuffer: !0,
                WebGLProgram: !0,
                WebGLQuery: !0,
                WebGLRenderbuffer: !0,
                WebGLRenderingContext: !0,
                WebGLSampler: !0,
                WebGLShader: !0,
                WebGLShaderPrecisionFormat: !0,
                WebGLSync: !0,
                WebGLTexture: !0,
                WebGLTransformFeedback: !0,
                WebGLUniformLocation: !0,
                WebGLVertexArrayObject: !0,
                Path2D: !0,
                Worker: !0,
                WorkerLocation: !0,
                WorkerNavigator: !0,
                ServiceWorker: !0,
                ServiceWorkerContainer: !0,
                XMLHttpRequest: !0,
                XMLHttpRequestEventTarget: !0,
                XMLHttpRequestUpload: !0,
                ArrayBuffer: !1,
                Uint8Array: !1,
                Int8Array: !1,
                Uint16Array: !1,
                Int16Array: !1,
                Uint32Array: !1,
                Int32Array: !1,
                Float32Array: !1,
                Float64Array: !1,
                Uint8ClampedArray: !1,
                BigUint64Array: !1,
                BigInt64Array: !1,
                DataView: !1,
                PushSubscriptionOptions: !0,
                PushSubscription: !0,
                PushManager: !0,
                Permissions: !0,
                PermissionStatus: !0,
                PeriodicSyncManager: !0,
                PaymentInstruments: !0,
                NavigatorUAData: !0,
                BackgroundFetchRegistration: !0,
                BackgroundFetchRecord: !0,
                BackgroundFetchManager: !0,
                WritableStreamDefaultWriter: !0,
                WritableStreamDefaultController: !0,
                WritableStream: !0,
                ReadableStreamDefaultReader: !0,
                ReadableStreamDefaultController: !0,
                ReadableStreamBYOBRequest: !0,
                ReadableStreamBYOBReader: !0,
                ReadableStream: !0,
                ReadableByteStreamController: !0,
                RTCEncodedVideoFrame: !0,
                RTCEncodedAudioFrame: !0,
                RTCDataChannel: !0,
                RTCTransformEvent: !0,
                RTCRtpScriptTransformer: !0,
                OffscreenCanvasRenderingContext2D: !0,
                OffscreenCanvas: !0,
                FontFace: !0,
                FontFaceSet: !0,
                FileReaderSync: !0,
                FileReader: !0,
                FileList: !0,
                File: !0,
                FileSystemDirectoryHandle: !0,
                FileSystemFileHandle: !0,
                FileSystemHandle: !0,
                FileSystemWritableFileStream: !0,
                FileSystemSyncAccessHandle: !0,
                webkitRequestFileSystem: !0,
                webkitRequestFileSystemSync: !0,
                webkitResolveLocalFileSystemSyncURL: !0,
                webkitResolveLocalFileSystemURL: !0,
                DOMStringList: !0,
                DOMRectReadOnly: !0,
                DOMRect: !0,
                DOMQuad: !0,
                DOMPointReadOnly: !0,
                DOMPoint: !0,
                DOMMatrixReadOnly: !0,
                DOMMatrix: !0,
                DOMException: !0,
                CompressionStream: !0,
                Atomics: !0,
                WebAssembly: !0,
                AudioData: !0,
                EncodedAudioChunk: !0,
                EncodedVideoChunk: !0,
                ImageTrack: !0,
                ImageTrackList: !0,
                VideoColorSpace: !0,
                VideoFrame: !0,
                AudioDecoder: !0,
                AudioEncoder: !0,
                ImageDecoder: !0,
                VideoDecoder: !0,
                VideoEncoder: !0,
                AudioTrackConfiguration: !0,
                VideoTrackConfiguration: !0,
                Lock: !0,
                LockManager: !0,
                WebTransport: !0,
                WebTransportBidirectionalStream: !0,
                WebTransportDatagramDuplexStream: !0,
                WebTransportError: !0,
                Serial: !0,
                SerialPort: !0,
                USB: !0,
                USBAlternateInterface: !0,
                USBConfiguration: !0,
                USBConnectionEvent: !0,
                USBDevice: !0,
                USBEndpoint: !0,
                USBInTransferResult: !0,
                USBInterface: !0,
                USBIsochronousInTransferPacket: !0,
                USBIsochronousInTransferResult: !0,
                USBIsochronousOutTransferPacket: !0,
                USBIsochronousOutTransferResult: !0,
                USBOutTransferResult: !0
            };

        function R(e, t) {
            let r = e;
            do {
                Object.getOwnPropertyNames(r).filter((e => e in t && !1 !== t[e])).forEach((e => {
                    try {
                        let i;
                        "object" == typeof t[e] ? (i = r[e], R(i, t[e])) : i = !0 === t[e] ? void 0 : t[e], v(r, e, {
                            value: i,
                            configurable: !1,
                            enumerable: !1,
                            writable: !1
                        }, !1)
                    } catch (i) {}
                })), r = Object.getPrototypeOf(r)
            } while (r !== Object.prototype)
        }

        function E(e, t = self) {
            const r = { ...e ? O : S,
                fetch: (i = t.fetch, Object.freeze(String.prototype), Object.freeze(Request.prototype), Object.freeze(URL.prototype), v(self, "String", {
                    writable: !1,
                    configurable: !1
                }), v(self, "Request", {
                    writable: !1,
                    configurable: !1
                }), v(self, "URL", {
                    writable: !1,
                    configurable: !1
                }), (e, t) => {
                    const r = e instanceof Request ? e : new Request(e),
                        n = new URL(r.url);
                    if ("https:" !== n.protocol) throw new y(`URL must be secure (HTTPS): ${n.href}`);
                    if (n.href.includes(self.location.origin) && !n.href.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) throw new y(`Request are not allowed to the same origin: ${n.href}`);
                    return i(r, { ...t
                    })
                }),
                XMLHttpRequest: k()
            };
            var i;
            e || (r.addEventListener = function(e) {
                let t = !1;
                return (r, i, n) => (t || (console.warn("In a sandboxed environment, addEventListener may not behave as expected."), t = !0), e(r, i, n))
            }(t.addEventListener)), R(t, r)
        }

        function N(e) {
            let t = e;
            return {
                update: async function(e, r) {
                    try {
                        t = r(), t = await e()
                    } catch (i) {
                        console.error(i)
                    }
                    return t
                },
                getRemote: async function(e) {
                    try {
                        t = await e()
                    } catch (r) {
                        console.error(r)
                    }
                    return t
                },
                getValue: () => t
            }
        }

        function T(e, t, r) {
            const i = N(""),
                n = {
                    get: function() {
                        return i.getRemote(e), i.getValue()
                    },
                    set: function(e) {
                        const n = e.split(";").map((e => e.trim())).find((e => e.startsWith("domain="))),
                            o = (null == n ? void 0 : n.split("=")[1]) || "";
                        if (!(r.filter((e => new RegExp(`^\\.?${e}$`).test(o))).length > 0)) {
                            const r = i.getValue();
                            i.update((() => t(e)), (() => function(e, t) {
                                const r = e.split("; ").reduce(((e, t) => {
                                        const [r, i] = t.split("=");
                                        return i && (e[r] = i), e
                                    }), {}),
                                    i = t.split(";")[0],
                                    [n, o] = i.split("=");
                                return r[n] = o, Object.entries(r).map((([e, t]) => `${e}=${t}`)).join("; ")
                            }(r, e)))
                        }
                    },
                    configurable: !1,
                    enumerable: !1
                };
            return v(document, "cookie", n), {
                cache: i,
                definition: n,
                initialize: () => i.getRemote(e)
            }
        }

        function A(e) {
            const t = N(""),
                r = {
                    get: function() {
                        return t.getRemote(e), t.getValue()
                    },
                    configurable: !1,
                    enumerable: !1,
                    writeable: !1
                };
            return v(window, "origin", r), {
                cache: t,
                definition: r,
                initialize: () => t.getRemote(e)
            }
        }

        function L(e) {
            const t = N(""),
                r = {
                    get: () => (t.getRemote(e), t.getValue()),
                    configurable: !1,
                    enumerable: !1,
                    writeable: !1
                };
            return v(document, "referrer", r), {
                cache: t,
                definition: r,
                initialize: () => t.getRemote(e)
            }
        }

        function B(e, t, r) {
            const i = function(e) {
                    const t = new Map,
                        r = {
                            initialize: async () => {
                                const r = await e.length() || 0;
                                for (let i = 0; i < r; i++) {
                                    const r = await e.key(i) || "",
                                        n = await e.getItem(r);
                                    n && t.set(r, n)
                                }
                            },
                            getItem: e => t.get(e) || null,
                            setItem(r, i) {
                                e.setItem(r, i), t.set(r, i)
                            },
                            removeItem(r) {
                                e.removeItem(r), t.delete(r)
                            },
                            clear() {
                                e.clear(), t.clear()
                            },
                            get length() {
                                return t.size
                            },
                            key(e) {
                                const r = [...t.keys()],
                                    [i] = r.filter(((t, r) => r === e));
                                return i || null
                            }
                        };
                    return r
                }(r),
                n = {
                    get: () => i,
                    configurable: !1,
                    enumerable: !1,
                    writeable: !1
                };
            return v(e, t, n), {
                definition: n,
                initialize: async () => {
                    await i.initialize()
                }
            }
        }

        function C(e) {
            return B(window, "localStorage", e.localStorage)
        }

        function M(e) {
            return B(window, "sessionStorage", e.sessionStorage)
        }
        class P extends Error {
            constructor(...e) {
                super(...e), this.message = "Invalid Extension Point"
            }
        }
        const I = function() {
            let t = {
                    call: () => {},
                    replace: () => {},
                    expose: () => {},
                    callable: () => {},
                    terminate: () => {}
                },
                r = "unknown";
            try {
                const i = m();
                r = i ? "worker" : "iframe";
                const n = i ? self : function({
                    targetOrigin: t = "*"
                } = {}) {
                    if ("undefined" == typeof self || null == self.parent) throw new Error("This does not appear to be a child iframe, because there is no parent window.");
                    const {
                        parent: r
                    } = self, i = () => r.postMessage(e, t);
                    window.addEventListener("message", (t => {
                        t.source === r && "complete" === document.readyState && t.data === e && i()
                    })), "complete" === document.readyState ? i() : document.addEventListener("readystatechange", (() => {
                        "complete" === document.readyState && i()
                    }));
                    const n = new WeakMap;
                    return {
                        postMessage(e, i) {
                            r.postMessage(e, t, i)
                        },
                        addEventListener(e, t) {
                            const i = e => {
                                e.source === r && t(e)
                            };
                            n.set(t, i), self.addEventListener(e, i)
                        },
                        removeEventListener(e, t) {
                            const r = n.get(t);
                            null != r && (n.delete(t), self.removeEventListener(e, r))
                        }
                    }
                }();
                t = function(e, {
                    uuid: t = c,
                    createEncoder: r = s,
                    callable: i
                } = {}) {
                    let n = !1,
                        a = e;
                    const l = new Map,
                        u = new Map,
                        d = function(e, t) {
                            let r;
                            if (null == t) {
                                if ("function" != typeof Proxy) throw new Error("You must pass an array of callable methods in environments without Proxies.");
                                const t = new Map;
                                r = new Proxy({}, {
                                    get(r, i) {
                                        if (t.has(i)) return t.get(i);
                                        const n = e(i);
                                        return t.set(i, n), n
                                    }
                                })
                            } else {
                                r = {};
                                for (const i of t) Object.defineProperty(r, i, {
                                    value: e(i),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }
                            return r
                        }(p, i),
                        b = r({
                            uuid: t,
                            release(e) {
                                f(3, [e])
                            },
                            call(e, r, i) {
                                const n = t(),
                                    o = w(n, i),
                                    [a, s] = b.encode(r);
                                return f(5, [n, e, a], s), o
                            }
                        });
                    return a.addEventListener("message", m), {
                        call: d,
                        replace(e) {
                            const t = a;
                            a = e, t.removeEventListener("message", m), e.addEventListener("message", m)
                        },
                        expose(e) {
                            for (const t of Object.keys(e)) {
                                const r = e[t];
                                "function" == typeof r ? l.set(t, r) : l.delete(t)
                            }
                        },
                        callable(...e) {
                            if (null != i)
                                for (const t of e) Object.defineProperty(d, t, {
                                    value: p(t),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                        },
                        terminate() {
                            f(2, void 0), h(), a.terminate && a.terminate()
                        }
                    };

                    function f(e, t, r) {
                        n || a.postMessage(t ? [e, t] : [e], r)
                    }
                    async function m(e) {
                        const {
                            data: t
                        } = e;
                        if (null != t && Array.isArray(t)) switch (t[0]) {
                            case 2:
                                h();
                                break;
                            case 0:
                                {
                                    const e = new o,
                                        [i, n, a] = t[1],
                                        s = l.get(n);
                                    try {
                                        if (null == s) throw new Error(`No '${n}' method is exposed on this endpoint`);
                                        const [t, r] = b.encode(await s(...b.decode(a, [e])));
                                        f(1, [i, void 0, t], r)
                                    } catch (r) {
                                        const {
                                            name: e,
                                            message: t,
                                            stack: n
                                        } = r;
                                        throw f(1, [i, {
                                            name: e,
                                            message: t,
                                            stack: n
                                        }]), r
                                    } finally {
                                        e.release()
                                    }
                                    break
                                }
                            case 1:
                                {
                                    const [e] = t[1];u.get(e)(...t[1]),
                                    u.delete(e);
                                    break
                                }
                            case 3:
                                {
                                    const [e] = t[1];b.release(e);
                                    break
                                }
                            case 6:
                                {
                                    const [e] = t[1];u.get(e)(...t[1]),
                                    u.delete(e);
                                    break
                                }
                            case 5:
                                {
                                    const [e, i, n] = t[1];
                                    try {
                                        const t = await b.call(i, n),
                                            [r, o] = b.encode(t);
                                        f(6, [e, void 0, r], o)
                                    } catch (r) {
                                        const {
                                            name: t,
                                            message: i,
                                            stack: n
                                        } = r;
                                        throw f(6, [e, {
                                            name: t,
                                            message: i,
                                            stack: n
                                        }]), r
                                    }
                                    break
                                }
                        }
                    }

                    function p(e) {
                        return (...r) => {
                            if (n) return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));
                            if ("string" != typeof e && "number" != typeof e) return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));
                            const i = t(),
                                o = w(i),
                                [a, s] = b.encode(r);
                            return f(0, [i, e, a], s), o
                        }
                    }

                    function w(e, t) {
                        return new Promise(((r, i) => {
                            u.set(e, ((e, n, o) => {
                                if (null == n) r(o && b.decode(o, t));
                                else {
                                    const e = new Error;
                                    Object.assign(e, n), i(e)
                                }
                            }))
                        }))
                    }

                    function h() {
                        var e;
                        n = !0, l.clear(), u.clear(), null === (e = b.terminate) || void 0 === e || e.call(b), a.removeEventListener("message", m)
                    }
                }(n, {
                    callable: ["webPixelApi", "internalApi"]
                }), t.expose({
                    initialize: function(e) {
                        return new Promise(((r, i) => {
                            (async () => {
                                try {
                                    const [n, o] = await Promise.all([t.call.webPixelApi(), t.call.internalApi()]);
                                    try {
                                        const t = m();
                                        if (t && (n.browser.sendBeacon = f), E(t), !t) {
                                            const t = await o.cookieRestrictedDomains();
                                            await
                                            function(e, t, r) {
                                                const i = [T(e.cookie.get, e.cookie.set, r).initialize(), A(t.self.origin.get).initialize(), L(t.document.referrer.get).initialize(), C(e).initialize(), M(e).initialize()];
                                                return Promise.allSettled ? Promise.allSettled(i) : Promise.all(i)
                                            }(n.browser, o, t), self.document.title = e
                                        }
                                        Object.defineProperty(self, "webPixelsManager", {
                                            value: {
                                                createShopifyExtend: () => ({
                                                    extend: (e, t) => {
                                                        if ("WebPixel::Render" !== e) throw new P;
                                                        try {
                                                            t.call(n, n), r({
                                                                status: "success",
                                                                hashVersion: b,
                                                                sandboxUrl: self.location.href || "unknown"
                                                            })
                                                        } catch (i) {
                                                            r({
                                                                status: "error",
                                                                error: i,
                                                                errorLocation: "extend",
                                                                hashVersion: b,
                                                                sandboxUrl: self.location.href || "unknown"
                                                            })
                                                        }
                                                    }
                                                })
                                            },
                                            enumerable: !0,
                                            writable: !1
                                        });
                                        try {
                                            self.initWebPixel()
                                        } catch (i) {
                                            r({
                                                status: "error",
                                                error: i,
                                                errorLocation: "initWebPixel",
                                                hashVersion: b,
                                                sandboxUrl: self.location.href || "unknown"
                                            })
                                        }
                                    } catch (i) {
                                        r({
                                            status: "error",
                                            error: i,
                                            errorLocation: "initialize/retrievedApi",
                                            hashVersion: b,
                                            sandboxUrl: self.location.href || "unknown"
                                        })
                                    }
                                } catch (i) {
                                    r({
                                        status: "error",
                                        error: i,
                                        errorLocation: "initialize",
                                        hashVersion: b,
                                        sandboxUrl: self.location.href || "unknown"
                                    })
                                }
                            })()
                        }))
                    }
                })
            } catch (i) {
                return ((e, t) => {
                    try {
                        var r, i, n;
                        if (null != t && null !== (r = t.options) && void 0 !== r && r.sampleRate && ! function(e) {
                                if (e <= 0 || e > 100) throw new Error("Invalid sampling percent");
                                return 100 * Math.random() <= e
                            }(t.options.sampleRate)) return;
                        const s = {
                                severity: "error",
                                context: "",
                                unhandled: !0,
                                library: "sandbox",
                                ...t
                            },
                            c = function(t) {
                                try {
                                    return new p(t).getResult()
                                } catch (e) {
                                    return {
                                        ua: "",
                                        browser: {
                                            name: "",
                                            version: "",
                                            major: ""
                                        },
                                        engine: {
                                            name: "",
                                            version: ""
                                        },
                                        os: {
                                            name: "",
                                            version: ""
                                        },
                                        device: {
                                            model: "",
                                            type: "",
                                            vendor: ""
                                        },
                                        cpu: {
                                            architecture: ""
                                        }
                                    }
                                }
                            }(s.userAgent || (null === (i = self.navigator) || void 0 === i ? void 0 : i.userAgent));
                        let l = {
                            errorClass: null == e ? void 0 : e.name,
                            message: null == e ? void 0 : e.message,
                            stacktrace: [],
                            type: "browserjs"
                        };
                        try {
                            l = function(e) {
                                if (t = e, !Boolean(t) || !(Boolean(t.stack) || Boolean(t.stacktrace) || Boolean(t["opera#sourceloc"])) || "string" != typeof(t.stack || t.stacktrace || t["opera#sourceloc"]) || t.stack === `${t.name}: ${t.message}`) throw new Error("Error incompatible with error-stack-parser");
                                var t;
                                const r = w.parse(e).reduce(((e, t) => {
                                    const r = function(e) {
                                        const t = {
                                            file: e.fileName,
                                            method: (r = e.functionName, /^global code$/i.test(r || "") ? "global code" : r),
                                            lineNumber: e.lineNumber,
                                            columnNumber: e.columnNumber
                                        };
                                        var r;
                                        return t.lineNumber && t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t
                                    }(t);
                                    try {
                                        return "{}" === JSON.stringify(r) ? e : e.concat(r)
                                    } catch (i) {
                                        return e
                                    }
                                }), []);
                                return {
                                    errorClass: null == e ? void 0 : e.name,
                                    message: null == e ? void 0 : e.message,
                                    stacktrace: r,
                                    type: "browserjs"
                                }
                            }(e)
                        } catch (o) {
                            try {
                                l = function(e, t) {
                                    let r = "";
                                    const i = {
                                        lineNumber: "1",
                                        columnNumber: "1",
                                        method: t.context,
                                        file: "https://cdn.shopify.com/sc17768fdw9ca797f2p09ffbf64m6f3c9c0fm.js"
                                    };
                                    if (e.stackTrace || e.stack || e.description) {
                                        r = e.stack.split("\n")[0];
                                        const t = e.stack.match(/([0-9]+):([0-9]+)/);
                                        if (t && t.length > 2 && (i.lineNumber = t[1], i.columnNumber = t[2], parseInt(i.lineNumber, 10) > 1e5)) throw new h
                                    }
                                    return {
                                        errorClass: (null == e ? void 0 : e.name) || r,
                                        message: (null == e ? void 0 : e.message) || r,
                                        stacktrace: [i],
                                        type: "browserjs"
                                    }
                                }(e, s)
                            } catch (a) {
                                if (a instanceof h) return
                            }
                        }
                        const f = g[u];
                        if (!f) return;
                        fetch(f, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                                "Bugsnag-Payload-Version": "5"
                            },
                            body: JSON.stringify({
                                payloadVersion: 5,
                                notifier: {
                                    name: "web-pixel-manager",
                                    version: d,
                                    url: "-"
                                },
                                events: [{
                                    exceptions: [l],
                                    context: s.context,
                                    severity: s.severity,
                                    unhandled: s.unhandled,
                                    app: {
                                        version: d
                                    },
                                    device: {
                                        manufacturer: c.device.vendor,
                                        model: c.device.model,
                                        osName: c.os.name,
                                        osVersion: c.os.version,
                                        browserName: c.browser.name,
                                        browserVersion: c.browser.version
                                    },
                                    metaData: {
                                        app: {
                                            library: s.library,
                                            browserTarget: "modern",
                                            env: u,
                                            hashVersion: b,
                                            hashVersionSandbox: s.hashVersionSandbox || "N/A",
                                            sandboxUrl: s.sandboxUrl || "N/A"
                                        },
                                        device: {
                                            userAgent: s.userAgent || (null === (n = self.navigator) || void 0 === n ? void 0 : n.userAgent),
                                            renderingEngineName: c.engine.name,
                                            renderingEngineVersion: c.engine.version
                                        },
                                        request: {
                                            shopId: s.shopId,
                                            shopUrl: self.location.href,
                                            pixelId: s.pixelId,
                                            pixelType: s.pixelType,
                                            runtimeContext: s.runtimeContext
                                        },
                                        "Additional Notes": {
                                            initConfig: JSON.stringify(s.initConfig),
                                            notes: s.notes
                                        }
                                    }
                                }]
                            })
                        }).catch((() => {}))
                    } catch (s) {}
                })(i, {
                    context: `refactor/createSandbox/${r}`
                }), {
                    endpoint: t
                }
            }
            return {
                endpoint: t
            }
        }();
        self.webPixelsManagerSandbox = I
    })()
})();