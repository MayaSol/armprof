/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function() {
    "use strict";

    function t(t, e) { return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E" }

    function e(t) {
        if (t.srcset && !p && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src
        }
    }

    function i(t) { for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));) r[e[1]] = e[2]; return r }

    function r(e, i, r) {
        var n = t(i || 1, r || 0);
        b.call(e, "src") !== n && h.call(e, "src", n)
    }

    function n(t, e) { t.naturalWidth ? e(t) : setTimeout(n, 100, t, e) }

    function c(t) {
        var c = i(t),
            o = t[l];
        if (c["object-fit"] = c["object-fit"] || "fill", !o.img) { if ("fill" === c["object-fit"]) return; if (!o.skipTest && f && !c["object-position"]) return }
        if (!o.img) { o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = ""); try { s(t) } catch (t) { window.console && console.warn("https://bit.ly/ofi-old-browser") } }
        e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function() { o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function(e) { r(t, e.naturalWidth, e.naturalHeight) })
    }

    function s(t) {
        var e = { get: function(e) { return t[l].img[e ? e : "src"] }, set: function(e, i) { return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e } };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", { get: function() { return e.get("currentSrc") } }), Object.defineProperty(t, "srcset", { get: function() { return e.get("srcset") }, set: function(t) { return e.set(t, "srcset") } })
    }

    function o() {
        function t(t, e) { return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t }
        d || (HTMLImageElement.prototype.getAttribute = function(e) { return b.call(t(this, e), e) }, HTMLImageElement.prototype.setAttribute = function(e, i) { return h.call(t(this, e), e, String(i)) })
    }

    function a(t, e) {
        var i = !y && !t;
        if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var r = 0; r < t.length; r++) t[r][l] = t[r][l] || { skipTest: e.skipTest }, c(t[r]);
        i && (document.body.addEventListener("load", function(t) { "IMG" === t.target.tagName && a(t.target, { skipTest: e.skipTest }) }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, { skipTest: e.skipTest }))
    }
    var l = "fregante:object-fit-images",
        u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
        g = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image,
        f = "object-fit" in g.style,
        d = "object-position" in g.style,
        m = "background-size" in g.style,
        p = "string" == typeof g.currentSrc,
        b = g.getAttribute,
        h = g.setAttribute,
        y = !1;
    return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a
}();
/*! lazysizes - v5.2.2 */
! function(e) {
    var t = function(u, D, f) {
        "use strict";
        var k, H;
        if (function() {
                var e;
                var t = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: true, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: true, ricTimeout: 0, throttleDelay: 125 };
                H = u.lazySizesConfig || u.lazysizesConfig || {};
                for (e in t) { if (!(e in H)) { H[e] = t[e] } }
            }(), !D || !D.getElementsByClassName) { return { init: function() {}, cfg: H, noSupport: true } }
        var O = D.documentElement,
            a = u.HTMLPictureElement,
            P = "addEventListener",
            $ = "getAttribute",
            q = u[P].bind(u),
            I = u.setTimeout,
            U = u.requestAnimationFrame || I,
            l = u.requestIdleCallback,
            j = /^picture$/i,
            r = ["load", "error", "lazyincluded", "_lazyloaded"],
            i = {},
            G = Array.prototype.forEach,
            J = function(e, t) { if (!i[t]) { i[t] = new RegExp("(\\s|^)" + t + "(\\s|$)") } return i[t].test(e[$]("class") || "") && i[t] },
            K = function(e, t) { if (!J(e, t)) { e.setAttribute("class", (e[$]("class") || "").trim() + " " + t) } },
            Q = function(e, t) { var i; if (i = J(e, t)) { e.setAttribute("class", (e[$]("class") || "").replace(i, " ")) } },
            V = function(t, i, e) {
                var a = e ? P : "removeEventListener";
                if (e) { V(t, i) }
                r.forEach(function(e) { t[a](e, i) })
            },
            X = function(e, t, i, a, r) {
                var n = D.createEvent("Event");
                if (!i) { i = {} }
                i.instance = k;
                n.initEvent(t, !a, !r);
                n.detail = i;
                e.dispatchEvent(n);
                return n
            },
            Y = function(e, t) {
                var i;
                if (!a && (i = u.picturefill || H.pf)) {
                    if (t && t.src && !e[$]("srcset")) { e.setAttribute("srcset", t.src) }
                    i({ reevaluate: true, elements: [e] })
                } else if (t && t.src) { e.src = t.src }
            },
            Z = function(e, t) { return (getComputedStyle(e, null) || {})[t] },
            s = function(e, t, i) {
                i = i || e.offsetWidth;
                while (i < H.minSize && t && !e._lazysizesWidth) {
                    i = t.offsetWidth;
                    t = t.parentNode
                }
                return i
            },
            ee = function() {
                var i, a;
                var t = [];
                var r = [];
                var n = t;
                var s = function() {
                    var e = n;
                    n = t.length ? r : t;
                    i = true;
                    a = false;
                    while (e.length) { e.shift()() }
                    i = false
                };
                var e = function(e, t) {
                    if (i && !t) { e.apply(this, arguments) } else {
                        n.push(e);
                        if (!a) {
                            a = true;
                            (D.hidden ? I : U)(s)
                        }
                    }
                };
                e._lsFlush = s;
                return e
            }(),
            te = function(i, e) {
                return e ? function() { ee(i) } : function() {
                    var e = this;
                    var t = arguments;
                    ee(function() { i.apply(e, t) })
                }
            },
            ie = function(e) {
                var i;
                var a = 0;
                var r = H.throttleDelay;
                var n = H.ricTimeout;
                var t = function() {
                    i = false;
                    a = f.now();
                    e()
                };
                var s = l && n > 49 ? function() { l(t, { timeout: n }); if (n !== H.ricTimeout) { n = H.ricTimeout } } : te(function() { I(t) }, true);
                return function(e) {
                    var t;
                    if (e = e === true) { n = 33 }
                    if (i) { return }
                    i = true;
                    t = r - (f.now() - a);
                    if (t < 0) { t = 0 }
                    if (e || t < 9) { s() } else { I(s, t) }
                }
            },
            ae = function(e) {
                var t, i;
                var a = 99;
                var r = function() {
                    t = null;
                    e()
                };
                var n = function() {
                    var e = f.now() - i;
                    if (e < a) { I(n, a - e) } else {
                        (l || r)(r)
                    }
                };
                return function() { i = f.now(); if (!t) { t = I(n, a) } }
            },
            e = function() {
                var v, m, c, h, e;
                var y, z, g, p, C, b, A;
                var n = /^img$/i;
                var d = /^iframe$/i;
                var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent);
                var _ = 0;
                var w = 0;
                var N = 0;
                var M = -1;
                var x = function(e) { N--; if (!e || N < 0 || !e.target) { N = 0 } };
                var W = function(e) { if (A == null) { A = Z(D.body, "visibility") == "hidden" } return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden") };
                var S = function(e, t) {
                    var i;
                    var a = e;
                    var r = W(e);
                    g -= t;
                    b += t;
                    p -= t;
                    C += t;
                    while (r && (a = a.offsetParent) && a != D.body && a != O) {
                        r = (Z(a, "opacity") || 1) > 0;
                        if (r && Z(a, "overflow") != "visible") {
                            i = a.getBoundingClientRect();
                            r = C > i.left && p < i.right && b > i.top - 1 && g < i.bottom + 1
                        }
                    }
                    return r
                };
                var t = function() {
                    var e, t, i, a, r, n, s, l, o, u, f, c;
                    var d = k.elements;
                    if ((h = H.loadMode) && N < 8 && (e = d.length)) {
                        t = 0;
                        M++;
                        for (; t < e; t++) {
                            if (!d[t] || d[t]._lazyRace) { continue }
                            if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) { R(d[t]); continue }
                            if (!(l = d[t][$]("data-expand")) || !(n = l * 1)) { n = w }
                            if (!u) {
                                u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand;
                                k._defEx = u;
                                f = u * H.expFactor;
                                c = H.hFac;
                                A = null;
                                if (w < f && N < 1 && M > 2 && h > 2 && !D.hidden) {
                                    w = f;
                                    M = 0
                                } else if (h > 1 && M > 1 && N < 6) { w = u } else { w = _ }
                            }
                            if (o !== n) {
                                y = innerWidth + n * c;
                                z = innerHeight + n;
                                s = n * -1;
                                o = n
                            }
                            i = d[t].getBoundingClientRect();
                            if ((b = i.bottom) >= s && (g = i.top) <= z && (C = i.right) >= s * c && (p = i.left) <= y && (b || C || p || g) && (H.loadHidden || W(d[t])) && (m && N < 3 && !l && (h < 3 || M < 4) || S(d[t], n))) {
                                R(d[t]);
                                r = true;
                                if (N > 9) { break }
                            } else if (!r && m && !a && N < 4 && M < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !l && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) { a = v[0] || d[t] }
                        }
                        if (a && !r) { R(a) }
                    }
                };
                var i = ie(t);
                var B = function(e) {
                    var t = e.target;
                    if (t._lazyCache) { delete t._lazyCache; return }
                    x(e);
                    K(t, H.loadedClass);
                    Q(t, H.loadingClass);
                    V(t, L);
                    X(t, "lazyloaded")
                };
                var a = te(B);
                var L = function(e) { a({ target: e.target }) };
                var T = function(t, i) { try { t.contentWindow.location.replace(i) } catch (e) { t.src = i } };
                var F = function(e) { var t; var i = e[$](H.srcsetAttr); if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) { e.setAttribute("media", t) } if (i) { e.setAttribute("srcset", i) } };
                var s = te(function(t, e, i, a, r) {
                    var n, s, l, o, u, f;
                    if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
                        if (a) { if (i) { K(t, H.autosizesClass) } else { t.setAttribute("sizes", a) } }
                        s = t[$](H.srcsetAttr);
                        n = t[$](H.srcAttr);
                        if (r) {
                            l = t.parentNode;
                            o = l && j.test(l.nodeName || "")
                        }
                        f = e.firesLoad || "src" in t && (s || n || o);
                        u = { target: t };
                        K(t, H.loadingClass);
                        if (f) {
                            clearTimeout(c);
                            c = I(x, 2500);
                            V(t, L, true)
                        }
                        if (o) { G.call(l.getElementsByTagName("source"), F) }
                        if (s) { t.setAttribute("srcset", s) } else if (n && !o) { if (d.test(t.nodeName)) { T(t, n) } else { t.src = n } }
                        if (r && (s || o)) { Y(t, { src: n }) }
                    }
                    if (t._lazyRace) { delete t._lazyRace }
                    Q(t, H.lazyClass);
                    ee(function() {
                        var e = t.complete && t.naturalWidth > 1;
                        if (!f || e) {
                            if (e) { K(t, "ls-is-cached") }
                            B(u);
                            t._lazyCache = true;
                            I(function() { if ("_lazyCache" in t) { delete t._lazyCache } }, 9)
                        }
                        if (t.loading == "lazy") { N-- }
                    }, true)
                });
                var R = function(e) {
                    if (e._lazyRace) { return }
                    var t;
                    var i = n.test(e.nodeName);
                    var a = i && (e[$](H.sizesAttr) || e[$]("sizes"));
                    var r = a == "auto";
                    if ((r || !m) && i && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) { return }
                    t = X(e, "lazyunveilread").detail;
                    if (r) { re.updateElem(e, true, e.offsetWidth) }
                    e._lazyRace = true;
                    N++;
                    s(e, t, r, a, i)
                };
                var r = ae(function() {
                    H.loadMode = 3;
                    i()
                });
                var l = function() {
                    if (H.loadMode == 3) { H.loadMode = 2 }
                    r()
                };
                var o = function() {
                    if (m) { return }
                    if (f.now() - e < 999) { I(o, 999); return }
                    m = true;
                    H.loadMode = 3;
                    i();
                    q("scroll", l, true)
                };
                return {
                    _: function() {
                        e = f.now();
                        k.elements = D.getElementsByClassName(H.lazyClass);
                        v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass);
                        q("scroll", i, true);
                        q("resize", i, true);
                        q("pageshow", function(e) { if (e.persisted) { var t = D.querySelectorAll("." + H.loadingClass); if (t.length && t.forEach) { U(function() { t.forEach(function(e) { if (e.complete) { R(e) } }) }) } } });
                        if (u.MutationObserver) { new MutationObserver(i).observe(O, { childList: true, subtree: true, attributes: true }) } else {
                            O[P]("DOMNodeInserted", i, true);
                            O[P]("DOMAttrModified", i, true);
                            setInterval(i, 999)
                        }
                        q("hashchange", i, true);
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) { D[P](e, i, true) });
                        if (/d$|^c/.test(D.readyState)) { o() } else {
                            q("load", o);
                            D[P]("DOMContentLoaded", i);
                            I(o, 2e4)
                        }
                        if (k.elements.length) {
                            t();
                            ee._lsFlush()
                        } else { i() }
                    },
                    checkElems: i,
                    unveil: R,
                    _aLSL: l
                }
            }(),
            re = function() {
                var i;
                var n = te(function(e, t, i, a) {
                    var r, n, s;
                    e._lazysizesWidth = a;
                    a += "px";
                    e.setAttribute("sizes", a);
                    if (j.test(t.nodeName || "")) { r = t.getElementsByTagName("source"); for (n = 0, s = r.length; n < s; n++) { r[n].setAttribute("sizes", a) } }
                    if (!i.detail.dataAttr) { Y(e, i.detail) }
                });
                var a = function(e, t, i) {
                    var a;
                    var r = e.parentNode;
                    if (r) {
                        i = s(e, r, i);
                        a = X(e, "lazybeforesizes", { width: i, dataAttr: !!t });
                        if (!a.defaultPrevented) { i = a.detail.width; if (i && i !== e._lazysizesWidth) { n(e, r, a, i) } }
                    }
                };
                var e = function() { var e; var t = i.length; if (t) { e = 0; for (; e < t; e++) { a(i[e]) } } };
                var t = ae(e);
                return {
                    _: function() {
                        i = D.getElementsByClassName(H.autosizesClass);
                        q("resize", t)
                    },
                    checkElems: t,
                    updateElem: a
                }
            }(),
            t = function() {
                if (!t.i && D.getElementsByClassName) {
                    t.i = true;
                    re._();
                    e._()
                }
            };
        return I(function() { H.init && t() }), k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee }
    }(e, e.document, Date);
    e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
/*! tiny-slider 2 https://github.com/ganlanyuan/tiny-slider */
var tns = function() {
    var t = window,
        Ai = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) { return setTimeout(t, 16) },
        e = window,
        Ni = e.cancelAnimationFrame || e.mozCancelAnimationFrame || function(t) { clearTimeout(t) };

    function Li() {
        for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
            if (null !== (t = arguments[a]))
                for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
        return i
    }

    function Bi(t) { return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t }

    function Si(t, e, n, i) {
        if (i) try { t.setItem(e, n) } catch (t) {}
        return n
    }

    function Hi() {
        var t = document,
            e = t.body;
        return e || ((e = t.createElement("body")).fake = !0), e
    }
    var n = document.documentElement;

    function Oi(t) { var e = ""; return t.fake && (e = n.style.overflow, t.style.background = "", t.style.overflow = n.style.overflow = "hidden", n.appendChild(t)), e }

    function Di(t, e) { t.fake && (t.remove(), n.style.overflow = e, n.offsetHeight) }

    function ki(t, e, n, i) { "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i) }

    function Ri(t) { return ("insertRule" in t ? t.cssRules : t.rules).length }

    function Ii(t, e, n) { for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i) }
    var i = "classList" in document.createElement("_"),
        Pi = i ? function(t, e) { return t.classList.contains(e) } : function(t, e) { return 0 <= t.className.indexOf(e) },
        zi = i ? function(t, e) { Pi(t, e) || t.classList.add(e) } : function(t, e) { Pi(t, e) || (t.className += " " + e) },
        Wi = i ? function(t, e) { Pi(t, e) && t.classList.remove(e) } : function(t, e) { Pi(t, e) && (t.className = t.className.replace(e, "")) };

    function qi(t, e) { return t.hasAttribute(e) }

    function Fi(t, e) { return t.getAttribute(e) }

    function r(t) { return void 0 !== t.item }

    function ji(t, e) {
        if (t = r(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
            for (var n = t.length; n--;)
                for (var i in e) t[n].setAttribute(i, e[i])
    }

    function Vi(t, e) {
        t = r(t) || t instanceof Array ? t : [t];
        for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
            for (var a = n; a--;) t[i].removeAttribute(e[a])
    }

    function Gi(t) { for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]); return e }

    function Qi(t, e) { "none" !== t.style.display && (t.style.display = "none") }

    function Xi(t, e) { "none" === t.style.display && (t.style.display = "") }

    function Yi(t) { return "none" !== window.getComputedStyle(t).display }

    function Ki(e) {
        if ("string" == typeof e) {
            var n = [e],
                i = e.charAt(0).toUpperCase() + e.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function(t) { "ms" === t && "transform" !== e || n.push(t + i) }), e = n
        }
        for (var t = document.createElement("fakeelement"), a = (e.length, 0); a < e.length; a++) { var r = e[a]; if (void 0 !== t.style[r]) return r }
        return !1
    }

    function Ji(t, e) { var n = !1; return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n }
    var a = !1;
    try {
        var o = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
        window.addEventListener("test", null, o)
    } catch (t) {}
    var u = !!a && { passive: !0 };

    function Ui(t, e, n) {
        for (var i in e) {
            var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
            t.addEventListener(i, e[i], a)
        }
    }

    function _i(t, e) {
        for (var n in e) {
            var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
            t.removeEventListener(n, e[n], i)
        }
    }

    function Zi() {
        return {
            topics: {},
            on: function(t, e) { this.topics[t] = this.topics[t] || [], this.topics[t].push(e) },
            off: function(t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) { this.topics[t].splice(n, 1); break }
            },
            emit: function(e, n) { n.type = e, this.topics[e] && this.topics[e].forEach(function(t) { t(n, e) }) }
        }
    }
    Object.keys || (Object.keys = function(t) { var e = []; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e }), "remove" in Element.prototype || (Element.prototype.remove = function() { this.parentNode && this.parentNode.removeChild(this) });
    var $i = function(H) {
        H = Li({ container: ".slider", mode: "carousel", axis: "horizontal", items: 1, gutter: 0, edgePadding: 0, fixedWidth: !1, autoWidth: !1, viewportMax: !1, slideBy: 1, center: !1, controls: !0, controlsPosition: "top", controlsText: ["prev", "next"], controlsContainer: !1, prevButton: !1, nextButton: !1, nav: !0, navPosition: "top", navContainer: !1, navAsThumbnails: !1, arrowKeys: !1, speed: 300, autoplay: !1, autoplayPosition: "top", autoplayTimeout: 5e3, autoplayDirection: "forward", autoplayText: ["start", "stop"], autoplayHoverPause: !1, autoplayButton: !1, autoplayButtonOutput: !0, autoplayResetOnVisibility: !0, animateIn: "tns-fadeIn", animateOut: "tns-fadeOut", animateNormal: "tns-normal", animateDelay: !1, loop: !0, rewind: !1, autoHeight: !1, responsive: !1, lazyload: !1, lazyloadSelector: ".tns-lazy-img", touch: !0, mouseDrag: !1, swipeAngle: 15, nested: !1, preventActionWhenRunning: !1, preventScrollOnTouch: !1, freezable: !0, onInit: !1, useLocalStorage: !0, nonce: !1 }, H || {});
        var O = document,
            m = window,
            a = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
            e = {},
            n = H.useLocalStorage;
        if (n) {
            var t = navigator.userAgent,
                i = new Date;
            try {
                (e = m.localStorage) ? (e.setItem(i, i), n = e.getItem(i) == i, e.removeItem(i)) : n = !1, n || (e = {})
            } catch (t) { n = !1 }
            n && (e.tnsApp && e.tnsApp !== t && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) { e.removeItem(t) }), localStorage.tnsApp = t)
        }
        var y = e.tC ? Bi(e.tC) : Si(e, "tC", function() {
                var t = document,
                    e = Hi(),
                    n = Oi(e),
                    i = t.createElement("div"),
                    a = !1;
                e.appendChild(i);
                try {
                    for (var r, o = "(10px * 10)", u = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], l = 0; l < 3; l++)
                        if (r = u[l], i.style.width = r, 100 === i.offsetWidth) { a = r.replace(o, ""); break }
                } catch (t) {}
                return e.fake ? Di(e, n) : i.remove(), a
            }(), n),
            g = e.tPL ? Bi(e.tPL) : Si(e, "tPL", function() {
                var t, e = document,
                    n = Hi(),
                    i = Oi(n),
                    a = e.createElement("div"),
                    r = e.createElement("div"),
                    o = "";
                a.className = "tns-t-subp2", r.className = "tns-t-ct";
                for (var u = 0; u < 70; u++) o += "<div></div>";
                return r.innerHTML = o, a.appendChild(r), n.appendChild(a), t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? Di(n, i) : a.remove(), t
            }(), n),
            D = e.tMQ ? Bi(e.tMQ) : Si(e, "tMQ", function() {
                if (window.matchMedia || window.msMatchMedia) return !0;
                var t, e = document,
                    n = Hi(),
                    i = Oi(n),
                    a = e.createElement("div"),
                    r = e.createElement("style"),
                    o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                return r.type = "text/css", a.className = "tns-mq-test", n.appendChild(r), n.appendChild(a), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(e.createTextNode(o)), t = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position, n.fake ? Di(n, i) : a.remove(), "absolute" === t
            }(), n),
            r = e.tTf ? Bi(e.tTf) : Si(e, "tTf", Ki("transform"), n),
            o = e.t3D ? Bi(e.t3D) : Si(e, "t3D", function(t) {
                if (!t) return !1;
                if (!window.getComputedStyle) return !1;
                var e, n = document,
                    i = Hi(),
                    a = Oi(i),
                    r = n.createElement("p"),
                    o = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                return o += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(o), i.fake ? Di(i, a) : r.remove(), void 0 !== e && 0 < e.length && "none" !== e
            }(r), n),
            x = e.tTDu ? Bi(e.tTDu) : Si(e, "tTDu", Ki("transitionDuration"), n),
            u = e.tTDe ? Bi(e.tTDe) : Si(e, "tTDe", Ki("transitionDelay"), n),
            b = e.tADu ? Bi(e.tADu) : Si(e, "tADu", Ki("animationDuration"), n),
            l = e.tADe ? Bi(e.tADe) : Si(e, "tADe", Ki("animationDelay"), n),
            s = e.tTE ? Bi(e.tTE) : Si(e, "tTE", Ji(x, "Transition"), n),
            c = e.tAE ? Bi(e.tAE) : Si(e, "tAE", Ji(b, "Animation"), n),
            f = m.console && "function" == typeof m.console.warn,
            d = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
            v = {};
        if (d.forEach(function(t) {
                if ("string" == typeof H[t]) {
                    var e = H[t],
                        n = O.querySelector(e);
                    if (v[t] = e, !n || !n.nodeName) return void(f && console.warn("Can't find", H[t]));
                    H[t] = n
                }
            }), !(H.container.children.length < 1)) {
            var k = H.responsive,
                R = H.nested,
                I = "carousel" === H.mode;
            if (k) {
                0 in k && (H = Li(H, k[0]), delete k[0]);
                var p = {};
                for (var h in k) {
                    var w = k[h];
                    w = "number" == typeof w ? { items: w } : w, p[h] = w
                }
                k = p, p = null
            }
            if (I || function t(e) { for (var n in e) I || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]) }(H), !I) {
                H.axis = "horizontal", H.slideBy = "page", H.edgePadding = !1;
                var P = H.animateIn,
                    z = H.animateOut,
                    C = H.animateDelay,
                    W = H.animateNormal
            }
            var M, q, F = "horizontal" === H.axis,
                T = O.createElement("div"),
                j = O.createElement("div"),
                V = H.container,
                E = V.parentNode,
                A = V.outerHTML,
                G = V.children,
                Q = G.length,
                X = rn(),
                Y = !1;
            k && En(), I && (V.className += " tns-vpfix");
            var N, L, B, S, K, J, U, _, Z, $ = H.autoWidth,
                tt = sn("fixedWidth"),
                et = sn("edgePadding"),
                nt = sn("gutter"),
                it = un(),
                at = sn("center"),
                rt = $ ? 1 : Math.floor(sn("items")),
                ot = sn("slideBy"),
                ut = H.viewportMax || H.fixedWidthViewportWidth,
                lt = sn("arrowKeys"),
                st = sn("speed"),
                ct = H.rewind,
                ft = !ct && H.loop,
                dt = sn("autoHeight"),
                vt = sn("controls"),
                pt = sn("controlsText"),
                ht = sn("nav"),
                mt = sn("touch"),
                yt = sn("mouseDrag"),
                gt = sn("autoplay"),
                xt = sn("autoplayTimeout"),
                bt = sn("autoplayText"),
                wt = sn("autoplayHoverPause"),
                Ct = sn("autoplayResetOnVisibility"),
                Mt = (U = null, _ = sn("nonce"), Z = document.createElement("style"), U && Z.setAttribute("media", U), _ && Z.setAttribute("nonce", _), document.querySelector("head").appendChild(Z), Z.sheet ? Z.sheet : Z.styleSheet),
                Tt = H.lazyload,
                Et = H.lazyloadSelector,
                At = [],
                Nt = ft ? (K = function() {
                    {
                        if ($ || tt && !ut) return Q - 1;
                        var t = tt ? "fixedWidth" : "items",
                            e = [];
                        if ((tt || H[t] < Q) && e.push(H[t]), k)
                            for (var n in k) {
                                var i = k[n][t];
                                i && (tt || i < Q) && e.push(i)
                            }
                        return e.length || e.push(0), Math.ceil(tt ? ut / Math.min.apply(null, e) : Math.max.apply(null, e))
                    }
                }(), J = I ? Math.ceil((5 * K - Q) / 2) : 4 * K - Q, J = Math.max(K, J), ln("edgePadding") ? J + 1 : J) : 0,
                Lt = I ? Q + 2 * Nt : Q + Nt,
                Bt = !(!tt && !$ || ft),
                St = tt ? _n() : null,
                Ht = !I || !ft,
                Ot = F ? "left" : "top",
                Dt = "",
                kt = "",
                Rt = tt ? function() { return at && !ft ? Q - 1 : Math.ceil(-St / (tt + nt)) } : $ ? function() {
                    for (var t = 0; t < Lt; t++)
                        if (N[t] >= -St) return t
                } : function() { return at && I && !ft ? Q - 1 : ft || I ? Math.max(0, Lt - Math.ceil(rt)) : Lt - 1 },
                It = en(sn("startIndex")),
                Pt = It,
                zt = (tn(), 0),
                Wt = $ ? null : Rt(),
                qt = H.preventActionWhenRunning,
                Ft = H.swipeAngle,
                jt = !Ft || "?",
                Vt = !1,
                Gt = H.onInit,
                Qt = new Zi,
                Xt = " tns-slider tns-" + H.mode,
                Yt = V.id || (S = window.tnsId, window.tnsId = S ? S + 1 : 1, "tns" + window.tnsId),
                Kt = sn("disable"),
                Jt = !1,
                Ut = H.freezable,
                _t = !(!Ut || $) && Tn(),
                Zt = !1,
                $t = {
                    click: oi,
                    keydown: function(t) {
                        t = pi(t);
                        var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                        0 <= e && (0 === e ? we.disabled || oi(t, -1) : Ce.disabled || oi(t, 1))
                    }
                },
                te = {
                    click: function(t) {
                        if (Vt) {
                            if (qt) return;
                            ai()
                        }
                        var e = hi(t = pi(t));
                        for (; e !== Ae && !qi(e, "data-nav");) e = e.parentNode;
                        if (qi(e, "data-nav")) {
                            var n = Se = Number(Fi(e, "data-nav")),
                                i = tt || $ ? n * Q / Le : n * rt,
                                a = le ? n : Math.min(Math.ceil(i), Q - 1);
                            ri(a, t), He === n && (Pe && fi(), Se = -1)
                        }
                    },
                    keydown: function(t) {
                        t = pi(t);
                        var e = O.activeElement;
                        if (!qi(e, "data-nav")) return;
                        var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(t.keyCode),
                            i = Number(Fi(e, "data-nav"));
                        0 <= n && (0 === n ? 0 < i && vi(Ee[i - 1]) : 1 === n ? i < Le - 1 && vi(Ee[i + 1]) : ri(Se = i, t))
                    }
                },
                ee = { mouseover: function() { Pe && (li(), ze = !0) }, mouseout: function() { ze && (ui(), ze = !1) } },
                ne = { visibilitychange: function() { O.hidden ? Pe && (li(), qe = !0) : qe && (ui(), qe = !1) } },
                ie = {
                    keydown: function(t) {
                        t = pi(t);
                        var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                        0 <= e && oi(t, 0 === e ? -1 : 1)
                    }
                },
                ae = { touchstart: xi, touchmove: bi, touchend: wi, touchcancel: wi },
                re = { mousedown: xi, mousemove: bi, mouseup: wi, mouseleave: wi },
                oe = ln("controls"),
                ue = ln("nav"),
                le = !!$ || H.navAsThumbnails,
                se = ln("autoplay"),
                ce = ln("touch"),
                fe = ln("mouseDrag"),
                de = "tns-slide-active",
                ve = "tns-slide-cloned",
                pe = "tns-complete",
                he = { load: function(t) { kn(hi(t)) }, error: function(t) { e = hi(t), zi(e, "failed"), Rn(e); var e } },
                me = "force" === H.preventScrollOnTouch;
            if (oe) var ye, ge, xe = H.controlsContainer,
                be = H.controlsContainer ? H.controlsContainer.outerHTML : "",
                we = H.prevButton,
                Ce = H.nextButton,
                Me = H.prevButton ? H.prevButton.outerHTML : "",
                Te = H.nextButton ? H.nextButton.outerHTML : "";
            if (ue) var Ee, Ae = H.navContainer,
                Ne = H.navContainer ? H.navContainer.outerHTML : "",
                Le = $ ? Q : Mi(),
                Be = 0,
                Se = -1,
                He = an(),
                Oe = He,
                De = "tns-nav-active",
                ke = "Carousel Page ",
                Re = " (Current Slide)";
            if (se) var Ie, Pe, ze, We, qe, Fe = "forward" === H.autoplayDirection ? 1 : -1,
                je = H.autoplayButton,
                Ve = H.autoplayButton ? H.autoplayButton.outerHTML : "",
                Ge = ["<span class='tns-visually-hidden'>", " animation</span>"];
            if (ce || fe) var Qe, Xe, Ye = {},
                Ke = {},
                Je = !1,
                Ue = F ? function(t, e) { return t.x - e.x } : function(t, e) { return t.y - e.y };
            $ || $e(Kt || _t), r && (Ot = r, Dt = "translate", o ? (Dt += F ? "3d(" : "3d(0px, ", kt = F ? ", 0px, 0px)" : ", 0px)") : (Dt += F ? "X(" : "Y(", kt = ")")), I && (V.className = V.className.replace("tns-vpfix", "")),
                function() {
                    ln("gutter");
                    T.className = "tns-outer", j.className = "tns-inner", T.id = Yt + "-ow", j.id = Yt + "-iw", "" === V.id && (V.id = Yt);
                    Xt += g || $ ? " tns-subpixel" : " tns-no-subpixel", Xt += y ? " tns-calc" : " tns-no-calc", $ && (Xt += " tns-autowidth");
                    Xt += " tns-" + H.axis, V.className += Xt, I ? ((M = O.createElement("div")).id = Yt + "-mw", M.className = "tns-ovh", T.appendChild(M), M.appendChild(j)) : T.appendChild(j);
                    if (dt) {
                        var t = M || j;
                        t.className += " tns-ah"
                    }
                    if (E.insertBefore(T, V), j.appendChild(V), Ii(G, function(t, e) { zi(t, "tns-item"), t.id || (t.id = Yt + "-item" + e), !I && W && zi(t, W), ji(t, { "aria-hidden": "true", tabindex: "-1" }) }), Nt) {
                        for (var e = O.createDocumentFragment(), n = O.createDocumentFragment(), i = Nt; i--;) {
                            var a = i % Q,
                                r = G[a].cloneNode(!0);
                            if (zi(r, ve), Vi(r, "id"), n.insertBefore(r, n.firstChild), I) {
                                var o = G[Q - 1 - a].cloneNode(!0);
                                zi(o, ve), Vi(o, "id"), e.appendChild(o)
                            }
                        }
                        V.insertBefore(e, V.firstChild), V.appendChild(n), G = V.children
                    }
                }(),
                function() {
                    if (!I)
                        for (var t = It, e = It + Math.min(Q, rt); t < e; t++) {
                            var n = G[t];
                            n.style.left = 100 * (t - It) / rt + "%", zi(n, P), Wi(n, W)
                        }
                    F && (g || $ ? (ki(Mt, "#" + Yt + " > .tns-item", "font-size:" + m.getComputedStyle(G[0]).fontSize + ";", Ri(Mt)), ki(Mt, "#" + Yt, "font-size:0;", Ri(Mt))) : I && Ii(G, function(t, e) {
                        var n;
                        t.style.marginLeft = (n = e, y ? y + "(" + 100 * n + "% / " + Lt + ")" : 100 * n / Lt + "%")
                    }));
                    if (D) {
                        if (x) {
                            var i = M && H.autoHeight ? hn(H.speed) : "";
                            ki(Mt, "#" + Yt + "-mw", i, Ri(Mt))
                        }
                        i = cn(H.edgePadding, H.gutter, H.fixedWidth, H.speed, H.autoHeight), ki(Mt, "#" + Yt + "-iw", i, Ri(Mt)), I && (i = F && !$ ? "width:" + fn(H.fixedWidth, H.gutter, H.items) + ";" : "", x && (i += hn(st)), ki(Mt, "#" + Yt, i, Ri(Mt))), i = F && !$ ? dn(H.fixedWidth, H.gutter, H.items) : "", H.gutter && (i += vn(H.gutter)), I || (x && (i += hn(st)), b && (i += mn(st))), i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt))
                    } else {
                        I && dt && (M.style[x] = st / 1e3 + "s"), j.style.cssText = cn(et, nt, tt, dt), I && F && !$ && (V.style.width = fn(tt, nt, rt));
                        var i = F && !$ ? dn(tt, nt, rt) : "";
                        nt && (i += vn(nt)), i && ki(Mt, "#" + Yt + " > .tns-item", i, Ri(Mt))
                    }
                    if (k && D)
                        for (var a in k) {
                            a = parseInt(a);
                            var r = k[a],
                                i = "",
                                o = "",
                                u = "",
                                l = "",
                                s = "",
                                c = $ ? null : sn("items", a),
                                f = sn("fixedWidth", a),
                                d = sn("speed", a),
                                v = sn("edgePadding", a),
                                p = sn("autoHeight", a),
                                h = sn("gutter", a);
                            x && M && sn("autoHeight", a) && "speed" in r && (o = "#" + Yt + "-mw{" + hn(d) + "}"), ("edgePadding" in r || "gutter" in r) && (u = "#" + Yt + "-iw{" + cn(v, h, f, d, p) + "}"), I && F && !$ && ("fixedWidth" in r || "items" in r || tt && "gutter" in r) && (l = "width:" + fn(f, h, c) + ";"), x && "speed" in r && (l += hn(d)), l && (l = "#" + Yt + "{" + l + "}"), ("fixedWidth" in r || tt && "gutter" in r || !I && "items" in r) && (s += dn(f, h, c)), "gutter" in r && (s += vn(h)), !I && "speed" in r && (x && (s += hn(d)), b && (s += mn(d))), s && (s = "#" + Yt + " > .tns-item{" + s + "}"), (i = o + u + l + s) && Mt.insertRule("@media (min-width: " + a / 16 + "em) {" + i + "}", Mt.cssRules.length)
                        }
                }(), yn();
            var _e = ft ? I ? function() {
                    var t = zt,
                        e = Wt;
                    t += ot, e -= ot, et ? (t += 1, e -= 1) : tt && (it + nt) % (tt + nt) && (e -= 1), Nt && (e < It ? It -= Q : It < t && (It += Q))
                } : function() {
                    if (Wt < It)
                        for (; zt + Q <= It;) It -= Q;
                    else if (It < zt)
                        for (; It <= Wt - Q;) It += Q
                } : function() { It = Math.max(zt, Math.min(Wt, It)) },
                Ze = I ? function() {
                    var e, n, i, a, t, r, o, u, l, s, c;
                    Jn(V, ""), x || !st ? (ti(), st && Yi(V) || ai()) : (e = V, n = Ot, i = Dt, a = kt, t = Zn(), r = st, o = ai, u = Math.min(r, 10), l = 0 <= t.indexOf("%") ? "%" : "px", t = t.replace(l, ""), s = Number(e.style[n].replace(i, "").replace(a, "").replace(l, "")), c = (t - s) / r * u, setTimeout(function t() { r -= u, s += c, e.style[n] = i + s + l + a, 0 < r ? setTimeout(t, u) : o() }, u)), F || Ci()
                } : function() {
                    At = [];
                    var t = {};
                    t[s] = t[c] = ai, _i(G[Pt], t), Ui(G[It], t), ei(Pt, P, z, !0), ei(It, W, P), s && c && st && Yi(V) || ai()
                };
            return {
                version: "2.9.3",
                getInfo: Ei,
                events: Qt,
                goTo: ri,
                play: function() { gt && !Pe && (ci(), We = !1) },
                pause: function() { Pe && (fi(), We = !0) },
                isOn: Y,
                updateSliderHeight: Fn,
                refresh: yn,
                destroy: function() {
                    if (Mt.disabled = !0, Mt.ownerNode && Mt.ownerNode.remove(), _i(m, { resize: Cn }), lt && _i(O, ie), xe && _i(xe, $t), Ae && _i(Ae, te), _i(V, ee), _i(V, ne), je && _i(je, { click: di }), gt && clearInterval(Ie), I && s) {
                        var t = {};
                        t[s] = ai, _i(V, t)
                    }
                    mt && _i(V, ae), yt && _i(V, re);
                    var r = [A, be, Me, Te, Ne, Ve];
                    for (var e in d.forEach(function(t, e) {
                            var n = "container" === t ? T : H[t];
                            if ("object" == typeof n && n) {
                                var i = !!n.previousElementSibling && n.previousElementSibling,
                                    a = n.parentNode;
                                n.outerHTML = r[e], H[t] = i ? i.nextElementSibling : a.firstElementChild
                            }
                        }), d = P = z = C = W = F = T = j = V = E = A = G = Q = q = X = $ = tt = et = nt = it = rt = ot = ut = lt = st = ct = ft = dt = Mt = Tt = N = At = Nt = Lt = Bt = St = Ht = Ot = Dt = kt = Rt = It = Pt = zt = Wt = Ft = jt = Vt = Gt = Qt = Xt = Yt = Kt = Jt = Ut = _t = Zt = $t = te = ee = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = pe = he = L = vt = pt = xe = be = we = Ce = ye = ge = ht = Ae = Ne = Ee = Le = Be = Se = He = Oe = De = ke = Re = gt = xt = Fe = bt = wt = je = Ve = Ct = Ge = Ie = Pe = ze = We = qe = Ye = Ke = Qe = Je = Xe = Ue = mt = yt = null, this) "rebuild" !== e && (this[e] = null);
                    Y = !1
                },
                rebuild: function() { return $i(Li(H, v)) }
            }
        }

        function $e(t) { t && (vt = ht = mt = yt = lt = gt = wt = Ct = !1) }

        function tn() { for (var t = I ? It - Nt : It; t < 0;) t += Q; return t % Q + 1 }

        function en(t) { return t = t ? Math.max(0, Math.min(ft ? Q - 1 : Q - rt, t)) : 0, I ? t + Nt : t }

        function nn(t) { for (null == t && (t = It), I && (t -= Nt); t < 0;) t += Q; return Math.floor(t % Q) }

        function an() { var t, e = nn(); return t = le ? e : tt || $ ? Math.ceil((e + 1) * Le / Q - 1) : Math.floor(e / rt), !ft && I && It === Wt && (t = Le - 1), t }

        function rn() { return m.innerWidth || O.documentElement.clientWidth || O.body.clientWidth }

        function on(t) { return "top" === t ? "afterbegin" : "beforeend" }

        function un() { var t = et ? 2 * et - nt : 0; return function t(e) { if (null != e) { var n, i, a = O.createElement("div"); return e.appendChild(a), i = (n = a.getBoundingClientRect()).right - n.left, a.remove(), i || t(e.parentNode) } }(E) - t }

        function ln(t) {
            if (H[t]) return !0;
            if (k)
                for (var e in k)
                    if (k[e][t]) return !0;
            return !1
        }

        function sn(t, e) {
            if (null == e && (e = X), "items" === t && tt) return Math.floor((it + nt) / (tt + nt)) || 1;
            var n = H[t];
            if (k)
                for (var i in k) e >= parseInt(i) && t in k[i] && (n = k[i][t]);
            return "slideBy" === t && "page" === n && (n = sn("items")), I || "slideBy" !== t && "items" !== t || (n = Math.floor(n)), n
        }

        function cn(t, e, n, i, a) {
            var r = "";
            if (void 0 !== t) {
                var o = t;
                e && (o -= e), r = F ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;"
            } else if (e && !n) {
                var u = "-" + e + "px";
                r = "margin: 0 " + (F ? u + " 0 0" : "0 " + u + " 0") + ";"
            }
            return !I && a && x && i && (r += hn(i)), r
        }

        function fn(t, e, n) { return t ? (t + e) * Lt + "px" : y ? y + "(" + 100 * Lt + "% / " + n + ")" : 100 * Lt / n + "%" }

        function dn(t, e, n) {
            var i;
            if (t) i = t + e + "px";
            else {
                I || (n = Math.floor(n));
                var a = I ? Lt : n;
                i = y ? y + "(100% / " + a + ")" : 100 / a + "%"
            }
            return i = "width:" + i, "inner" !== R ? i + ";" : i + " !important;"
        }

        function vn(t) { var e = "";!1 !== t && (e = (F ? "padding-" : "margin-") + (F ? "right" : "bottom") + ": " + t + "px;"); return e }

        function pn(t, e) { var n = t.substring(0, t.length - e).toLowerCase(); return n && (n = "-" + n + "-"), n }

        function hn(t) { return pn(x, 18) + "transition-duration:" + t / 1e3 + "s;" }

        function mn(t) { return pn(b, 17) + "animation-duration:" + t / 1e3 + "s;" }

        function yn() {
            if (ln("autoHeight") || $ || !F) {
                var t = V.querySelectorAll("img");
                Ii(t, function(t) {
                    var e = t.src;
                    Tt || (e && e.indexOf("data:image") < 0 ? (t.src = "", Ui(t, he), zi(t, "loading"), t.src = e) : kn(t))
                }), Ai(function() { zn(Gi(t), function() { L = !0 }) }), ln("autoHeight") && (t = In(It, Math.min(It + rt - 1, Lt - 1))), Tt ? gn() : Ai(function() { zn(Gi(t), gn) })
            } else I && $n(), bn(), wn()
        }

        function gn() {
            if ($ && 1 < Q) {
                var i = ft ? It : Q - 1;
                ! function t() {
                    var e = G[i].getBoundingClientRect().left,
                        n = G[i - 1].getBoundingClientRect().right;
                    Math.abs(e - n) <= 1 ? xn() : setTimeout(function() { t() }, 16)
                }()
            } else xn()
        }

        function xn() { F && !$ || (jn(), $ ? (St = _n(), Ut && (_t = Tn()), Wt = Rt(), $e(Kt || _t)) : Ci()), I && $n(), bn(), wn() }

        function bn() {
            if (Vn(), T.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Hn() + "</span>  of " + Q + "</div>"), B = T.querySelector(".tns-liveregion .current"), se) {
                var t = gt ? "stop" : "start";
                je ? ji(je, { "data-action": t }) : H.autoplayButtonOutput && (T.insertAdjacentHTML(on(H.autoplayPosition), '<button type="button" data-action="' + t + '">' + Ge[0] + t + Ge[1] + bt[0] + "</button>"), je = T.querySelector("[data-action]")), je && Ui(je, { click: di }), gt && (ci(), wt && Ui(V, ee), Ct && Ui(V, ne))
            }
            if (ue) {
                if (Ae) ji(Ae, { "aria-label": "Carousel Pagination" }), Ii(Ee = Ae.children, function(t, e) { ji(t, { "data-nav": e, tabindex: "-1", "aria-label": ke + (e + 1), "aria-controls": Yt }) });
                else {
                    for (var e = "", n = le ? "" : 'style="display:none"', i = 0; i < Q; i++) e += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + Yt + '" ' + n + ' aria-label="' + ke + (i + 1) + '"></button>';
                    e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>", T.insertAdjacentHTML(on(H.navPosition), e), Ae = T.querySelector(".tns-nav"), Ee = Ae.children
                }
                if (Ti(), x) {
                    var a = x.substring(0, x.length - 18).toLowerCase(),
                        r = "transition: all " + st / 1e3 + "s";
                    a && (r = "-" + a + "-" + r), ki(Mt, "[aria-controls^=" + Yt + "-item]", r, Ri(Mt))
                }
                ji(Ee[He], { "aria-label": ke + (He + 1) + Re }), Vi(Ee[He], "tabindex"), zi(Ee[He], De), Ui(Ae, te)
            }
            oe && (xe || we && Ce || (T.insertAdjacentHTML(on(H.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Yt + '">' + pt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Yt + '">' + pt[1] + "</button></div>"), xe = T.querySelector(".tns-controls")), we && Ce || (we = xe.children[0], Ce = xe.children[1]), H.controlsContainer && ji(xe, { "aria-label": "Carousel Navigation", tabindex: "0" }), (H.controlsContainer || H.prevButton && H.nextButton) && ji([we, Ce], { "aria-controls": Yt, tabindex: "-1" }), (H.controlsContainer || H.prevButton && H.nextButton) && (ji(we, { "data-controls": "prev" }), ji(Ce, { "data-controls": "next" })), ye = Qn(we), ge = Qn(Ce), Kn(), xe ? Ui(xe, $t) : (Ui(we, $t), Ui(Ce, $t))), An()
        }

        function wn() {
            if (I && s) {
                var t = {};
                t[s] = ai, Ui(V, t)
            }
            mt && Ui(V, ae, H.preventScrollOnTouch), yt && Ui(V, re), lt && Ui(O, ie), "inner" === R ? Qt.on("outerResized", function() { Mn(), Qt.emit("innerLoaded", Ei()) }) : (k || tt || $ || dt || !F) && Ui(m, { resize: Cn }), dt && ("outer" === R ? Qt.on("innerLoaded", Pn) : Kt || Pn()), Dn(), Kt ? Bn() : _t && Ln(), Qt.on("indexChanged", Wn), "inner" === R && Qt.emit("innerLoaded", Ei()), "function" == typeof Gt && Gt(Ei()), Y = !0
        }

        function Cn(t) { Ai(function() { Mn(pi(t)) }) }

        function Mn(t) {
            if (Y) {
                "outer" === R && Qt.emit("outerResized", Ei(t)), X = rn();
                var e, n = q,
                    i = !1;
                k && (En(), (e = n !== q) && Qt.emit("newBreakpointStart", Ei(t)));
                var a, r, o, u, l = rt,
                    s = Kt,
                    c = _t,
                    f = lt,
                    d = vt,
                    v = ht,
                    p = mt,
                    h = yt,
                    m = gt,
                    y = wt,
                    g = Ct,
                    x = It;
                if (e) {
                    var b = tt,
                        w = dt,
                        C = pt,
                        M = at,
                        T = bt;
                    if (!D) var E = nt,
                        A = et
                }
                if (lt = sn("arrowKeys"), vt = sn("controls"), ht = sn("nav"), mt = sn("touch"), at = sn("center"), yt = sn("mouseDrag"), gt = sn("autoplay"), wt = sn("autoplayHoverPause"), Ct = sn("autoplayResetOnVisibility"), e && (Kt = sn("disable"), tt = sn("fixedWidth"), st = sn("speed"), dt = sn("autoHeight"), pt = sn("controlsText"), bt = sn("autoplayText"), xt = sn("autoplayTimeout"), D || (et = sn("edgePadding"), nt = sn("gutter"))), $e(Kt), it = un(), F && !$ || Kt || (jn(), F || (Ci(), i = !0)), (tt || $) && (St = _n(), Wt = Rt()), (e || tt) && (rt = sn("items"), ot = sn("slideBy"), (r = rt !== l) && (tt || $ || (Wt = Rt()), _e())), e && Kt !== s && (Kt ? Bn() : function() {
                        if (!Jt) return;
                        if (Mt.disabled = !1, V.className += Xt, $n(), ft)
                            for (var t = Nt; t--;) I && Xi(G[t]), Xi(G[Lt - t - 1]);
                        if (!I)
                            for (var e = It, n = It + Q; e < n; e++) {
                                var i = G[e],
                                    a = e < It + rt ? P : W;
                                i.style.left = 100 * (e - It) / rt + "%", zi(i, a)
                            }
                        Nn(), Jt = !1
                    }()), Ut && (e || tt || $) && (_t = Tn()) !== c && (_t ? (ti(Zn(en(0))), Ln()) : (! function() {
                        if (!Zt) return;
                        et && D && (j.style.margin = "");
                        if (Nt)
                            for (var t = "tns-transparent", e = Nt; e--;) I && Wi(G[e], t), Wi(G[Lt - e - 1], t);
                        Nn(), Zt = !1
                    }(), i = !0)), $e(Kt || _t), gt || (wt = Ct = !1), lt !== f && (lt ? Ui(O, ie) : _i(O, ie)), vt !== d && (vt ? xe ? Xi(xe) : (we && Xi(we), Ce && Xi(Ce)) : xe ? Qi(xe) : (we && Qi(we), Ce && Qi(Ce))), ht !== v && (ht ? (Xi(Ae), Ti()) : Qi(Ae)), mt !== p && (mt ? Ui(V, ae, H.preventScrollOnTouch) : _i(V, ae)), yt !== h && (yt ? Ui(V, re) : _i(V, re)), gt !== m && (gt ? (je && Xi(je), Pe || We || ci()) : (je && Qi(je), Pe && fi())), wt !== y && (wt ? Ui(V, ee) : _i(V, ee)), Ct !== g && (Ct ? Ui(O, ne) : _i(O, ne)), e) {
                    if (tt === b && at === M || (i = !0), dt !== w && (dt || (j.style.height = "")), vt && pt !== C && (we.innerHTML = pt[0], Ce.innerHTML = pt[1]), je && bt !== T) {
                        var N = gt ? 1 : 0,
                            L = je.innerHTML,
                            B = L.length - T[N].length;
                        L.substring(B) === T[N] && (je.innerHTML = L.substring(0, B) + bt[N])
                    }
                } else at && (tt || $) && (i = !0);
                if ((r || tt && !$) && (Le = Mi(), Ti()), (a = It !== x) ? (Qt.emit("indexChanged", Ei()), i = !0) : r ? a || Wn() : (tt || $) && (Dn(), Vn(), Sn()), r && !I && function() {
                        for (var t = It + Math.min(Q, rt), e = Lt; e--;) {
                            var n = G[e];
                            It <= e && e < t ? (zi(n, "tns-moving"), n.style.left = 100 * (e - It) / rt + "%", zi(n, P), Wi(n, W)) : n.style.left && (n.style.left = "", zi(n, W), Wi(n, P)), Wi(n, z)
                        }
                        setTimeout(function() { Ii(G, function(t) { Wi(t, "tns-moving") }) }, 300)
                    }(), !Kt && !_t) {
                    if (e && !D && (et === A && nt === E || (j.style.cssText = cn(et, nt, tt, st, dt)), F)) {
                        I && (V.style.width = fn(tt, nt, rt));
                        var S = dn(tt, nt, rt) + vn(nt);
                        u = Ri(o = Mt) - 1, "deleteRule" in o ? o.deleteRule(u) : o.removeRule(u), ki(Mt, "#" + Yt + " > .tns-item", S, Ri(Mt))
                    }
                    dt && Pn(), i && ($n(), Pt = It)
                }
                e && Qt.emit("newBreakpointEnd", Ei(t))
            }
        }

        function Tn() {
            if (!tt && !$) return Q <= (at ? rt - (rt - 1) / 2 : rt);
            var t = tt ? (tt + nt) * Q : N[Q],
                e = et ? it + 2 * et : it + nt;
            return at && (e -= tt ? (it - tt) / 2 : (it - (N[It + 1] - N[It] - nt)) / 2), t <= e
        }

        function En() { for (var t in q = 0, k)(t = parseInt(t)) <= X && (q = t) }

        function An() {!gt && je && Qi(je), !ht && Ae && Qi(Ae), vt || (xe ? Qi(xe) : (we && Qi(we), Ce && Qi(Ce))) }

        function Nn() { gt && je && Xi(je), ht && Ae && Xi(Ae), vt && (xe ? Xi(xe) : (we && Xi(we), Ce && Xi(Ce))) }

        function Ln() {
            if (!Zt) {
                if (et && (j.style.margin = "0px"), Nt)
                    for (var t = "tns-transparent", e = Nt; e--;) I && zi(G[e], t), zi(G[Lt - e - 1], t);
                An(), Zt = !0
            }
        }

        function Bn() {
            if (!Jt) {
                if (Mt.disabled = !0, V.className = V.className.replace(Xt.substring(1), ""), Vi(V, ["style"]), ft)
                    for (var t = Nt; t--;) I && Qi(G[t]), Qi(G[Lt - t - 1]);
                if (F && I || Vi(j, ["style"]), !I)
                    for (var e = It, n = It + Q; e < n; e++) {
                        var i = G[e];
                        Vi(i, ["style"]), Wi(i, P), Wi(i, W)
                    }
                An(), Jt = !0
            }
        }

        function Sn() {
            var t = Hn();
            B.innerHTML !== t && (B.innerHTML = t)
        }

        function Hn() {
            var t = On(),
                e = t[0] + 1,
                n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n
        }

        function On(t) {
            null == t && (t = Zn());
            var n, i, a, r = It;
            if (at || et ? ($ || tt) && (i = -(parseFloat(t) + et), a = i + it + 2 * et) : $ && (i = N[It], a = i + it), $) N.forEach(function(t, e) { e < Lt && ((at || et) && t <= i + .5 && (r = e), .5 <= a - t && (n = e)) });
            else {
                if (tt) {
                    var e = tt + nt;
                    at || et ? (r = Math.floor(i / e), n = Math.ceil(a / e - 1)) : n = r + Math.ceil(it / e) - 1
                } else if (at || et) {
                    var o = rt - 1;
                    if (at ? (r -= o / 2, n = It + o / 2) : n = It + o, et) {
                        var u = et * rt / it;
                        r -= u, n += u
                    }
                    r = Math.floor(r), n = Math.ceil(n)
                } else n = r + rt - 1;
                r = Math.max(r, 0), n = Math.min(n, Lt - 1)
            }
            return [r, n]
        }

        function Dn() {
            if (Tt && !Kt) {
                var t = On();
                t.push(Et), In.apply(null, t).forEach(function(t) {
                    if (!Pi(t, pe)) {
                        var e = {};
                        e[s] = function(t) { t.stopPropagation() }, Ui(t, e), Ui(t, he), t.src = Fi(t, "data-src");
                        var n = Fi(t, "data-srcset");
                        n && (t.srcset = n), zi(t, "loading")
                    }
                })
            }
        }

        function kn(t) { zi(t, "loaded"), Rn(t) }

        function Rn(t) { zi(t, pe), Wi(t, "loading"), _i(t, he) }

        function In(t, e, n) { var i = []; for (n || (n = "img"); t <= e;) Ii(G[t].querySelectorAll(n), function(t) { i.push(t) }), t++; return i }

        function Pn() {
            var t = In.apply(null, On());
            Ai(function() { zn(t, Fn) })
        }

        function zn(n, t) { return L ? t() : (n.forEach(function(t, e) {!Tt && t.complete && Rn(t), Pi(t, pe) && n.splice(e, 1) }), n.length ? void Ai(function() { zn(n, t) }) : t()) }

        function Wn() {
            Dn(), Vn(), Sn(), Kn(),
                function() {
                    if (ht && (He = 0 <= Se ? Se : an(), Se = -1, He !== Oe)) {
                        var t = Ee[Oe],
                            e = Ee[He];
                        ji(t, { tabindex: "-1", "aria-label": ke + (Oe + 1) }), Wi(t, De), ji(e, { "aria-label": ke + (He + 1) + Re }), Vi(e, "tabindex"), zi(e, De), Oe = He
                    }
                }()
        }

        function qn(t, e) { for (var n = [], i = t, a = Math.min(t + e, Lt); i < a; i++) n.push(G[i].offsetHeight); return Math.max.apply(null, n) }

        function Fn() {
            var t = dt ? qn(It, rt) : qn(Nt, Q),
                e = M || j;
            e.style.height !== t && (e.style.height = t + "px")
        }

        function jn() {
            N = [0];
            var n = F ? "left" : "top",
                i = F ? "right" : "bottom",
                a = G[0].getBoundingClientRect()[n];
            Ii(G, function(t, e) { e && N.push(t.getBoundingClientRect()[n] - a), e === Lt - 1 && N.push(t.getBoundingClientRect()[i] - a) })
        }

        function Vn() {
            var t = On(),
                n = t[0],
                i = t[1];
            Ii(G, function(t, e) { n <= e && e <= i ? qi(t, "aria-hidden") && (Vi(t, ["aria-hidden", "tabindex"]), zi(t, de)) : qi(t, "aria-hidden") || (ji(t, { "aria-hidden": "true", tabindex: "-1" }), Wi(t, de)) })
        }

        function Gn(t) { return t.nodeName.toLowerCase() }

        function Qn(t) { return "button" === Gn(t) }

        function Xn(t) { return "true" === t.getAttribute("aria-disabled") }

        function Yn(t, e, n) { t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString()) }

        function Kn() {
            if (vt && !ct && !ft) {
                var t = ye ? we.disabled : Xn(we),
                    e = ge ? Ce.disabled : Xn(Ce),
                    n = It <= zt,
                    i = !ct && Wt <= It;
                n && !t && Yn(ye, we, !0), !n && t && Yn(ye, we, !1), i && !e && Yn(ge, Ce, !0), !i && e && Yn(ge, Ce, !1)
            }
        }

        function Jn(t, e) { x && (t.style[x] = e) }

        function Un(t) { return null == t && (t = It), $ ? (it - (et ? nt : 0) - (N[t + 1] - N[t] - nt)) / 2 : tt ? (it - tt) / 2 : (rt - 1) / 2 }

        function _n() { var t = it + (et ? nt : 0) - (tt ? (tt + nt) * Lt : N[Lt]); return at && !ft && (t = tt ? -(tt + nt) * (Lt - 1) - Un() : Un(Lt - 1) - N[Lt - 1]), 0 < t && (t = 0), t }

        function Zn(t) {
            var e;
            if (null == t && (t = It), F && !$)
                if (tt) e = -(tt + nt) * t, at && (e += Un());
                else {
                    var n = r ? Lt : rt;
                    at && (t -= Un()), e = 100 * -t / n
                }
            else e = -N[t], at && $ && (e += Un());
            return Bt && (e = Math.max(e, St)), e += !F || $ || tt ? "px" : "%"
        }

        function $n(t) { Jn(V, "0s"), ti(t) }

        function ti(t) { null == t && (t = Zn()), V.style[Ot] = Dt + t + kt }

        function ei(t, e, n, i) {
            var a = t + rt;
            ft || (a = Math.min(a, Lt));
            for (var r = t; r < a; r++) {
                var o = G[r];
                i || (o.style.left = 100 * (r - It) / rt + "%"), C && u && (o.style[u] = o.style[l] = C * (r - t) / 1e3 + "s"), Wi(o, e), zi(o, n), i && At.push(o)
            }
        }

        function ni(t, e) { Ht && _e(), (It !== Pt || e) && (Qt.emit("indexChanged", Ei()), Qt.emit("transitionStart", Ei()), dt && Pn(), Pe && t && 0 <= ["click", "keydown"].indexOf(t.type) && fi(), Vt = !0, Ze()) }

        function ii(t) { return t.toLowerCase().replace(/-/g, "") }

        function ai(t) {
            if (I || Vt) {
                if (Qt.emit("transitionEnd", Ei(t)), !I && 0 < At.length)
                    for (var e = 0; e < At.length; e++) {
                        var n = At[e];
                        n.style.left = "", l && u && (n.style[l] = "", n.style[u] = ""), Wi(n, z), zi(n, W)
                    }
                if (!t || !I && t.target.parentNode === V || t.target === V && ii(t.propertyName) === ii(Ot)) {
                    if (!Ht) {
                        var i = It;
                        _e(), It !== i && (Qt.emit("indexChanged", Ei()), $n())
                    }
                    "inner" === R && Qt.emit("innerLoaded", Ei()), Vt = !1, Pt = It
                }
            }
        }

        function ri(t, e) {
            if (!_t)
                if ("prev" === t) oi(e, -1);
                else if ("next" === t) oi(e, 1);
            else {
                if (Vt) {
                    if (qt) return;
                    ai()
                }
                var n = nn(),
                    i = 0;
                if ("first" === t ? i = -n : "last" === t ? i = I ? Q - rt - n : Q - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(Q - 1, t))), i = t - n)), !I && i && Math.abs(i) < rt) {
                    var a = 0 < i ? 1 : -1;
                    i += zt <= It + i - Q ? Q * a : 2 * Q * a * -1
                }
                It += i, I && ft && (It < zt && (It += Q), Wt < It && (It -= Q)), nn(It) !== nn(Pt) && ni(e)
            }
        }

        function oi(t, e) {
            if (Vt) {
                if (qt) return;
                ai()
            }
            var n;
            if (!e) {
                for (var i = hi(t = pi(t)); i !== xe && [we, Ce].indexOf(i) < 0;) i = i.parentNode;
                var a = [we, Ce].indexOf(i);
                0 <= a && (n = !0, e = 0 === a ? -1 : 1)
            }
            if (ct) { if (It === zt && -1 === e) return void ri("last", t); if (It === Wt && 1 === e) return void ri("first", t) }
            e && (It += ot * e, $ && (It = Math.floor(It)), ni(n || t && "keydown" === t.type ? t : null))
        }

        function ui() { Ie = setInterval(function() { oi(null, Fe) }, xt), Pe = !0 }

        function li() { clearInterval(Ie), Pe = !1 }

        function si(t, e) { ji(je, { "data-action": t }), je.innerHTML = Ge[0] + t + Ge[1] + e }

        function ci() { ui(), je && si("stop", bt[1]) }

        function fi() { li(), je && si("start", bt[0]) }

        function di() { Pe ? (fi(), We = !0) : (ci(), We = !1) }

        function vi(t) { t.focus() }

        function pi(t) { return mi(t = t || m.event) ? t.changedTouches[0] : t }

        function hi(t) { return t.target || m.event.srcElement }

        function mi(t) { return 0 <= t.type.indexOf("touch") }

        function yi(t) { t.preventDefault ? t.preventDefault() : t.returnValue = !1 }

        function gi() { return a = Ke.y - Ye.y, r = Ke.x - Ye.x, t = Math.atan2(a, r) * (180 / Math.PI), e = Ft, n = !1, i = Math.abs(90 - Math.abs(t)), 90 - e <= i ? n = "horizontal" : i <= e && (n = "vertical"), n === H.axis; var t, e, n, i, a, r }

        function xi(t) {
            if (Vt) {
                if (qt) return;
                ai()
            }
            gt && Pe && li(), Je = !0, Xe && (Ni(Xe), Xe = null);
            var e = pi(t);
            Qt.emit(mi(t) ? "touchStart" : "dragStart", Ei(t)), !mi(t) && 0 <= ["img", "a"].indexOf(Gn(hi(t))) && yi(t), Ke.x = Ye.x = e.clientX, Ke.y = Ye.y = e.clientY, I && (Qe = parseFloat(V.style[Ot].replace(Dt, "")), Jn(V, "0s"))
        }

        function bi(t) {
            if (Je) {
                var e = pi(t);
                Ke.x = e.clientX, Ke.y = e.clientY, I ? Xe || (Xe = Ai(function() {
                    ! function t(e) {
                        if (!jt) return void(Je = !1);
                        Ni(Xe);
                        Je && (Xe = Ai(function() { t(e) }));
                        "?" === jt && (jt = gi());
                        if (jt) {
                            !me && mi(e) && (me = !0);
                            try { e.type && Qt.emit(mi(e) ? "touchMove" : "dragMove", Ei(e)) } catch (t) {}
                            var n = Qe,
                                i = Ue(Ke, Ye);
                            if (!F || tt || $) n += i, n += "px";
                            else {
                                var a = r ? i * rt * 100 / ((it + nt) * Lt) : 100 * i / (it + nt);
                                n += a, n += "%"
                            }
                            V.style[Ot] = Dt + n + kt
                        }
                    }(t)
                })) : ("?" === jt && (jt = gi()), jt && (me = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && me && t.preventDefault()
            }
        }

        function wi(i) {
            if (Je) {
                Xe && (Ni(Xe), Xe = null), I && Jn(V, ""), Je = !1;
                var t = pi(i);
                Ke.x = t.clientX, Ke.y = t.clientY;
                var a = Ue(Ke, Ye);
                if (Math.abs(a)) {
                    if (!mi(i)) {
                        var n = hi(i);
                        Ui(n, { click: function t(e) { yi(e), _i(n, { click: t }) } })
                    }
                    I ? Xe = Ai(function() {
                        if (F && !$) {
                            var t = -a * rt / (it + nt);
                            t = 0 < a ? Math.floor(t) : Math.ceil(t), It += t
                        } else {
                            var e = -(Qe + a);
                            if (e <= 0) It = zt;
                            else if (e >= N[Lt - 1]) It = Wt;
                            else
                                for (var n = 0; n < Lt && e >= N[n];) e > N[It = n] && a < 0 && (It += 1), n++
                        }
                        ni(i, a), Qt.emit(mi(i) ? "touchEnd" : "dragEnd", Ei(i))
                    }) : jt && oi(i, 0 < a ? -1 : 1)
                }
            }
            "auto" === H.preventScrollOnTouch && (me = !1), Ft && (jt = "?"), gt && !Pe && ui()
        }

        function Ci() {
            (M || j).style.height = N[It + rt] - N[It] + "px"
        }

        function Mi() { var t = tt ? (tt + nt) * Q / it : Q / rt; return Math.min(Math.ceil(t), Q) }

        function Ti() {
            if (ht && !le && Le !== Be) {
                var t = Be,
                    e = Le,
                    n = Xi;
                for (Le < Be && (t = Le, e = Be, n = Qi); t < e;) n(Ee[t]), t++;
                Be = Le
            }
        }

        function Ei(t) { return { container: V, slideItems: G, navContainer: Ae, navItems: Ee, controlsContainer: xe, hasControls: oe, prevButton: we, nextButton: Ce, items: rt, slideBy: ot, cloneCount: Nt, slideCount: Q, slideCountNew: Lt, index: It, indexCached: Pt, displayIndex: tn(), navCurrentIndex: He, navCurrentIndexCached: Oe, pages: Le, pagesCached: Be, sheet: Mt, isOn: Y, event: t || {} } }
        f && console.warn("No slides found in", H.container)
    };
    return $i
}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

/*! Модальные окна */
// $(document).ready(function(){$("#modal-demo-01").on("show.nth.modal",function(){console.log("Модальное окно #modal-demo-01: сработало событие show.nth.modal")});$("#modal-demo-01").on("shown.nth.modal",function(){console.log("Модальное окно #modal-demo-01: сработало событие shown.nth.modal")});$("#modal-demo-01").on("hide.nth.modal",function(){console.log("Модальное окно #modal-demo-01: сработало событие hide.nth.modal")});$("#modal-demo-01").on("hidden.nth.modal",function(){console.log("Модальное окно #modal-demo-01: сработало событие hidden.nth.modal")})});+function($){"use strict";var Modal=function(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$dialog=this.$element.find(".modal__dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false};Modal.VERSION="3.3.7";Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)};Modal.prototype.show=function(_relatedTarget){var that=this;var e=$.Event("show.nth.modal",{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass("js-modal-open");this.escape();this.resize();this.$element.on("click.dismiss.nth.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this));this.$dialog.on("mousedown.dismiss.nth.modal",function(){that.$element.one("mouseup.dismiss.nth.modal",function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})});this.backdrop(function(){if(!that.$element.parent().length){that.$element.appendTo(that.$body)}that.$element.css("display","flex").scrollTop(0);that.$element[0].offsetWidth;that.$element.addClass("modal--open");that.enforceFocus();var e=$.Event("shown.nth.modal",{relatedTarget:_relatedTarget});that.$element.trigger("focus").trigger(e)})};Modal.prototype.hide=function(e){if(e)e.preventDefault();e=$.Event("hide.nth.modal");this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented())return;this.isShown=false;this.escape();this.resize();$(document).off("focusin.nth.modal");this.$element.removeClass("modal--open").off("click.dismiss.nth.modal").off("mouseup.dismiss.nth.modal");this.$dialog.off("mousedown.dismiss.nth.modal");this.hideModal()};Modal.prototype.enforceFocus=function(){$(document).off("focusin.nth.modal").on("focusin.nth.modal",$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger("focus")}},this))};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.nth.modal",$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off("keydown.dismiss.nth.modal")}};Modal.prototype.resize=function(){if(this.isShown){$(window).on("resize.nth.modal",$.proxy(this.handleUpdate,this))}else{$(window).off("resize.nth.modal")}};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$body.removeClass("js-modal-open");that.resetAdjustments();that.resetScrollbar();that.$element.trigger("hidden.nth.modal")})};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};Modal.prototype.backdrop=function(callback){var that=this;if(this.isShown&&this.options.backdrop){this.$backdrop=$(document.createElement("div")).addClass("modal__backdrop ").appendTo(this.$body);this.$element.on("click.dismiss.nth.modal",$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return}if(e.target!==e.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus():this.hide()},this));if(!callback)return;callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("modal--open");var callbackRemove=function(){that.removeBackdrop();callback&&callback()};callbackRemove()}else if(callback){callback()}};Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth;if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect();fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth;this.scrollbarWidth=this.measureScrollbar()};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";if(this.bodyIsOverflowing)this.$body.css("padding-right",bodyPad+this.scrollbarWidth)};Modal.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement("div");scrollDiv.className="modal-scrollbar-measure";scrollDiv.style.overflow="scroll";this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth};function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this);var data=$this.data("nth.modal");var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=="object"&&option);if(!data)$this.data("nth.modal",data=new Modal(this,options));if(typeof option=="string")data[option](_relatedTarget);else if(options.show)data.show(_relatedTarget)})}var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;$.fn.modal.noConflict=function(){$.fn.modal=old;return this};$(document).on("click.nth.modal.data-api",'[data-toggle="modal"]',function(e){var $this=$(this);var href=$this.attr("href");var $target=$($this.attr("data-target")||href&&href.replace(/.*(?=#[^\s]+$)/,""));var option=$target.data("nth.modal")?"toggle":$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());console.log("modal api");console.log($target);console.log($target.data());console.log($target.data("nth.modal"));console.log(option);if($this.is("a"))e.preventDefault();$target.one("show.nth.modal",function(showEvent){if(showEvent.isDefaultPrevented())return;$target.one("hidden.nth.modal",function(){$this.is(":visible")&&$this.trigger("focus")})});Plugin.call($target,option,this)});$(".modal__close").each(function(){$(this).on("click",function(){$(this).closest(".modal").modal("hide")})})}($);

$(function() {

    // Вход
    $('.reg-login').live('click', function() {

        $('#DialogLogin').load("/classes/Sibloma.php", { ajaxFormLogin: 'view' }, function() {
            $(this).dialog({
                height: 300,
                width: 500
            });
        });

    });

    $('.contact-popup-close3').live('click', function() {

        //$('#Dialog').dialog('close');
        //$('#DialogLogin').dialog('close');
        $('#Dialog3').dialog('close');

    });

    $('form#WRegFormLogin').live('submit', function(e) {
        e.preventDefault();
        $(this).find('input[name=email]').removeClass('border-color-red');
        $(this).find('input[name=password]').removeClass('border-color-red');

        var email = $(this).find('input[name=email]').val();
        var password = $(this).find('input[name=password]').val();

        if (email == '') {
            $(this).find('input[name=email]').addClass('border-color-red');
        }
        if (password == '') {
            $(this).find('input[name=password]').addClass('border-color-red');
        }

        if (email != '' && password != '') {
            $(this).parents('#DialogLogin').load("/classes/Sibloma.php", {
                loginForm: 'ajax',
                email: email,
                password: password
            }, function() {

            });
        }

    });


    $('a[id *= PriceCont]').click(function() {
        var descr_alias = $('#descr_alias').text();
        var descr_tmp_link = $('#descr_tmp_link').text();
        var descr_brand = $('#descr_brand').text();
        var descr_model = $('#descr_model').text();
        $('#Dialog2').load("/design/default/html/WContacts2.php", {
            descr_alias: descr_alias,
            descr_tmp_link: descr_tmp_link,
            descr_brand: descr_brand,
            descr_model: descr_model
        }, function() {
            $(this).dialog({
                height: 345,
                width: 630
            });
        });
    });


    $('.block_k a').click(function() {
        var ii = 0;
        $('.formlogin').is(function() {
            $('.formlogin').show();
            ii = 1;
        });
        if (ii == 1) {
            return false;
        } else {
            return true;
        }
    });

    // Отправка формы
    //$('.wFilter').find('select').change(function(){SendForm($(this));});
    //$('.wFilter').find('input[type=checkbox]').change(function(){SendForm($(this));});

    function SendForm(field) {
        field.parents('form').submit();
    }

    setTimeout(function() {
        $('.success').hide();
    }, 3000);

    $('.link_js').click(function() {
        var link = $(this).data('href');
        window.location.replace("/" + link + "/");
    });

    $("a[rel^='prettyPhoto']").prettyPhoto();

    $('#Contact').click(function() {
        $('#Dialog').load("/design/default/html/WContacts.php", function() {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });

    $('#Contact_dop').click(function() {
        $('#Dialog').load("/design/default/html/WContacts.php", function() {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });

    $('#ContactCall').click(function() {
        $('#Dialog').load("/design/default/html/WContactCall.php", function() {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });
    $('#ContactMail').click(function() {
        $('#Dialog').load("/design/default/html/WContactsInfoM.php", function() {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });

    $('.contact-popup-close2').live('click', function() {
        //$('#Dialog').dialog('close');
        $('#Dialog2').dialog('close');
    });

    $('.contact-popup-close1').live('click', function() {
        $('#Dialog').dialog('close');
        //$('#Dialog2').dialog('close');
    });

    $('.contact-popup-close3').live('click', function() {
        $('#Dialog3').dialog('close');
        //$('#Dialog2').dialog('close');
    });

    /*
        $("#video_list_slider ul").carouFredSel({
            width: 235,
            height: 240,
            auto: false,
            infinit: false,
            items: {
                width: 235,
                height: 240,
                visible: 1
            },
            scroll: {
                items: 1,
                fx: 'cover-fade'
            },
            pagination: {
                container: "#video_list_slider .paginator",
                anchorBuilder: function (nr) {
                    return '<span></span>'
                }
            }
        });
    */

    /* Изменить пароль */
    $("#EditAccountPass").click(function() {
        $('div.accountPass').show();
        $(this).hide();
    });

    $("body").on("click", ".PredCont", function() {
        var descr_alias = $('#descr_alias').text();
        var descr_tmp_link = $('#descr_tmp_link').text();
        var descr_brand = $('#descr_brand').text();
        var descr_model = $('#descr_model').text();
        var descr_cat = $('#descr_cat').text();
        var descr_count = $('#qty-two').val();
        var descr_dn = $(".jq-selectbox__select-text").text();
        $('#Dialog3').load("/design/default/html/WContacts3.php", {
            descr_cat: descr_cat,
            descr_alias: descr_alias,
            descr_tmp_link: descr_tmp_link,
            descr_brand: descr_brand,
            descr_model: descr_model,
            descr_count: descr_count,
            descr_dn: descr_dn
        }, function() {
            $(this).dialog({
                height: 345,
                width: 630
            });
        });
    });

    //----------------------------------------

    $("#main_cat_slider ul").carouFredSel({
        circular: false,
        // infinite: false,
        width: "100%",
        height: 196,
        items: {
            width: 170,
            height: 196
        },
        scroll: {
            // items: 1,
            // fx: "cover-fade"
        },
        auto: false,
        prev: "#main_cat_slider .prev",
        next: "#main_cat_slider .next"
    });
    //----------------------------------------
    // $("#news-slider ul").carouFredSel({
    //     circular: false,
    //     infinite: false,
    //     width: "100%",
    //     items: {
    //         // width: 210,
    //         width: 190,
    //         visible: 1
    //     },
    //     scroll: {
    //         fx: "directscroll"
    //     },
    //     auto: false,
    //     prev: "#news-slider .prev",
    //     next: "#news-slider .next"
    // });
    //----------------------------------------
    $("#producer_slider > ul").carouFredSel({
        circular: false,
        infinite: false,
        width: 1001,
        height: "variable",
        items: {
            width: 1001,
            visible: 1
        },
        scroll: {
            items: 1
        },
        auto: false,
        pagination: {
            container: "#producer_slider .paginator",
            anchorBuilder: function(nr) {
                return '<span></span>'
            }
        }
    });
    //----------------------------------------
    /*    var videoLink = $("#video_list_slider a"),
            vln = $('.video-left-name'),
            vlm = $('.video-left-model'),
            vlimg = $('.video-left-bg img')
        vFrame = $('#frame'),
            vFrameLoader = $('#video_frame_loader')


        function callIframe(url, callback) {
            vFrame.attr('src', url);
            vFrame.load(function () {
                callback(this);
            });
        }*/

    //----------------------------------------
    /*    videoLink.click(function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                vFrame.hide();
                vFrameLoader.show();
                videoLink.removeClass('active').eq(videoLink.index(event.currentTarget)).addClass('active')
                vln.text($(event.currentTarget).find('.video-txt-type').text());
                vlm.text($(event.currentTarget).find('.video-txt-model').text());
                vlimg.attr('src', $(event.currentTarget).data('img-src'));
                callIframe($(event.currentTarget).attr('href'), function () {
                    vFrame.show();
                    vFrameLoader.hide();
                });
            }
            ;
        }).first().trigger('click');

        $('#video-play-btn').click(function (event) {
            event.preventDefault
            console.log('cl');
            vtl.fadeOut('slow');
            vpl.fadeIn();
            setTimeout(function () {
                jwplayer("video-player").play(true);
            }, 100);

        });*/
    //---------------------------------
    $('.style-select select').styler();
    // jwplayer("video-player").onComplete(function(){
    //  vtl.show();
    //  vpl.hide();
    // })
    $(".checkbox-select select").multiselect({
        selectedList: 3,
        minWidth: 190,
        // height: 'auto',
        header: false,
        noneSelectedText: 'Виберите параметр',
        checkAllText: 'Вибрать все',
        uncheckAllText: 'Убрать все'

    });
    $(".checkbox-select  a").click(function(event) {
        event.preventDefault();
    });
    //---------------------------------
    var tab_link = $('.tab-triger'),
        tab_cont = $('.tab-content-item')

    tab_link.click(function(event) {
            var ind = $(this).index()
            tab_link.removeClass('active').eq(ind).addClass('active')
            tab_cont.hide().eq(ind).show()
        }).first().click()
        //---------------------------------
    $('.show-more').click(function(event) {
        event.preventDefault();
        $(event.currentTarget).prev('ul').find('.hide').slideDown();
        $(event.currentTarget).hide();
    });
    //---------------------------------
    //$('.left-menu li.active').parents('ul').css('display','block');
    $('.left-menu li.active').parents('ul').parents('li').addClass('active');


    var leftFirstLinks = $(".left-menu > ul > li"),
        inUl = $(".left-menu ul ul")

    leftFirstLinks.click(function(event) {

        // console.log($(event.currentTarget).find('ul').length)
        if (!$(event.currentTarget).hasClass('active') && $(event.currentTarget).find('ul').length != 0) {
            event.preventDefault();
            leftFirstLinks.removeClass('active');
            inUl.slideUp();
            $(event.currentTarget).find('ul').slideDown();
            $(event.currentTarget).addClass('active');
        } else {
            if ($(event.currentTarget).hasClass('nofollow')) {
                event.preventDefault();
                $(event.currentTarget).find('ul').slideToggle();
                $(event.currentTarget).addClass('active');
            }
        }
    });
}); //end function




// Для поп-апов окон корзины, сравнения

// Есть ли в корзине товары?

// var cartHasItems = function(cartBtn,templateElem) {

//  console.log('cartHasItems');
//  var template = $(cartBtn).siblings(templateElem);


// }

// Найти шаблон для отображения в поп-ап
var getTemplate = function(cartBtnElem, templateSelector) {

    console.log('getTemplate');
    console.log(cartBtnElem);
    console.log(templateSelector);

    var template = $(cartBtnElem).siblings(templateSelector);
    console.log('template: ');
    console.log(template);

    // if (!elem.classList.contains('active')) {
    //     var template = $(elem).siblings('.tooltip-empty');
    // } else {
    //     template = $(elem).siblings(selectorActive);
    // }

    return template;
};

//  Модалка корзины

var setCartTooltip = function(btn) {

    console.log('setCartTooltip');
    console.log(btn);

    var template = getTemplate(btn, '.tooltip--cart');
    if (template.length == 0) {
        template = getTemplate(btn, '.tooltip-empty');
    }

    console.log('template');
    console.log(template);

    if (template.length > 0) {
        var tooltipCartOpt = {
            content: template[0].innerHTML,
            theme: 'list',
            arrow: false,
            placement: 'bottom',
            allowHTML: true,
            trigger: 'click',
            // hideOnClick: false,
            interactive: true,
            maxWidth: (document.documentElement.clientWidth > 480) ? '469px' : '320px',
            offset: [-105, 0],
        }
        tippy(btn, tooltipCartOpt);
    }
}

var setFavTooltip = function(btn) {

    var template = getTemplate(btn, '.tooltip--favorite');
    if (template.length > 0) {
        var tooltipFavOpt = {
            content: template[0].innerHTML,
            theme: 'list',
            arrow: false,
            placement: 'bottom',
            allowHTML: true,
            trigger: 'click',
            // hideOnClick: false,
            interactive: true,
            maxWidth: (document.documentElement.clientWidth > 480) ? '469px' : '320px',
            offset: [-45, 0],
        }
        tippy(btn, tooltipFavOpt);
    }
}

//мультиселект чекбоксы
$(document).ready(function() {

    const tooltipsCart = document.querySelectorAll('.has-tooltip--cart');

    for (let i = 0; i < tooltipsCart.length; i++) {
        setCartTooltip(tooltipsCart[i]);
    }

    const tooltipsFav = document.querySelectorAll('.has-tooltip--favorite');

    for (let i = 0; i < tooltipsFav.length; i++) {
        setFavTooltip(tooltipsFav[i]);
    }

    objectFitImages();

    if ($("#video")[0] !== undefined) {
        $("#video")[0].load();
        $("#video > source").attr("src", $(".video-item.active").find('.video-url').text());
        $("#video").attr("poster", $(".video-item.active").find('.video-img').attr('src'));
    }

    $(".video-item").click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        $("#video")[0].load();
        $('.top-slider-content > .left_block').css('opacity', '0');
        $('.top-slider-content > .center_block').css('opacity', '0');
        setTimeout(function() {
            $("#video > source").attr("src", $(this).find('.video-url').text());
            $("#video").attr("poster", $(this).find('.video-img').attr('src'));
            $('.video-left-bg img').attr("src", $(this).data('imgSrc'));
            var vtt = $(this).find('.video-item-txt-inner .video-txt-type').text();
            var vtm = $(this).find('.video-item-txt-inner .video-txt-model').text();
            $('.video-left-name').text(vtt);
            $('.video-left-model').text(vtm);
            $(".video-item").removeClass('active');
            $(this).addClass('active');
            $('.top-slider-content > .left_block').css('opacity', '1');
            $('.top-slider-content > .center_block').css('opacity', '1');
        }, 500);
    });

    $('.slide_top').click(function() {
        $('.slide_bott').show();
        var $block = $(this).parents('.right_block').find('.list');
        $block.find('.visible').first().prev().show();
        $block.find('.visible').first().prev().addClass('visible');
        $block.find('.visible').last().hide();
        $block.find('.visible').last().removeClass('visible');
        if ($block.find('.visible').first().prev().length == 0) {
            $(this).hide();
            $(this).parent().css('padding-top', '34px');
        }
    });
    $('.slide_bott').click(function() {
        $('.slide_top').show();
        $(this).parent().css('padding-top', '10px');
        var $block = $(this).parents('.right_block').find('.list');
        $block.find('.visible').last().next().show();
        $block.find('.visible').last().next().addClass('visible');
        $block.find('.visible').first().hide();
        $block.find('.visible').first().removeClass('visible');
        if ($block.find('.visible').last().next().length == 0) {
            $(this).hide();
        }
    });

    if ($('header').width() == 300) {
        if ($(".top-sliders").length > 0) {
            $(".top-sliders").swipe({
                swipeRight: function(event, direction) {
                    $('.video-item.active').prev().click();
                }
            });
            $(".top-sliders").swipe({
                swipeLeft: function(event, direction) {
                    $('.video-item.active').next().click();
                }
            });
        }
    }
    $('.producer-block').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.category-wrp_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*    $(".for-play").click(function () {
            $("#video")[0].play();
        });
        $("#video").on("pause", function () {
            $(".for-play").show();
        });
        $("#video").on("loadstart", function () {
            $(".for-play").show();
        });
        $("#video").on("play", function () {
            $(".for-play").hide();
        });*/

    //Отправка формы фильтров

    //input number
    $('.qtydec').click(function() {

        var number = parseInt($(this).parent('.counter').find('.qty').val());
        if (number <= 1) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        } else {
            number -= 1;
            $(this).parent('.counter').find('.qty').val(number);
            if (number <= 1) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            }
        }
    });
    $('.qtyinc').click(function() {
        var number = parseInt($(this).parent('.counter').find('.qty').val());
        number += 1;
        $(this).parent('.counter').find('.qty').val(number);
        if (number >= 2) {
            if (!$(this).parent('.counter').find('.qtydec').hasClass('active')) {
                $(this).parent('.counter').find('.qtydec').addClass('active');
            }
        }
    });
    //input number end


    $('.submit_fform').bind('click', function() {

        url_old = "http://" + location.hostname + location.pathname;

        url = "";
        form = $(this).parents("form");
        form.find("select").each(function(i) {
            val = $(this).val();
            name = $(this).attr("name");
            if (val != "") {
                if (url == "") {
                    url += "?" + name + "=" + val;
                } else {
                    url += "&" + name + "=" + val;
                }
            }
        });

        form.find("input[type = \"checkbox\"]").each(function(i) {
            val = $(this).val();
            name = $(this).attr("name");
            if ($(this).is(":checked")) {
                if (url == "") {
                    url += "?" + name + "=" + val;
                } else {
                    url += "&" + name + "=" + val;
                }
            }
        });

        location.href = url_old + url;
    })

    $(".optionFilterList>div").click(function() {
        if ($(this).find("[type=checkbox]").is(':checked')) {
            $(this).find("[type=checkbox]").prop('checked', false);
        } else {
            $(this).find("[type=checkbox]").prop('checked', true);
        }
    });

    $('.customers_slider').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 4,
        variableWidth: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1021,
                settings: {
                    variableWidth: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    if ($('.main-slider').length > 0) {
        var slider = tns({
            container: '.main-slider',
            items: 1,
            slideBy: 1,
            autoplay: false,
            edgePadding: 0,
            fixedWidth: false,
            loop: true,
            center: true,
            nav: false,
            prevButton: '.main-slider-prev',
            nextButton: '.main-slider-next',
            responsive: {
                1021: {
                    fixedWidth: 480,
                    edgePadding: 334,
                }
            }
        });
    }

    $('.produkt-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        fade: true,
        asNavFor: '.produkt-slider-nav'
    });
    $('.produkt-slider-nav').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.produkt-slider-for',
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1140,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    arrows: true,
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1021,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    arrows: true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    arrows: true,
                    slidesToShow: 3,
                }
            }
        ]
    });

    // Сортировка в фильтре
    $('#f_sort').on('change', function() {
        $("#inp_sort_place").val($(this).find(":selected").val());
    });

    //Сделать слайдер длиннее
    $('.produkt-slider-nav-more').click(function() {
        $('.produkt-slider-nav').slick('slickSetOption', 'slidesToShow', '5', true);
        $(this).hide();
        $('.produkt-slider-nav .slick-prev').css({ opacity: '1', width: '15px', height: '15px' });
        $('.produkt-slider-nav .slick-next').css({ opacity: '1', width: '15px', height: '15px' });
    })

    if ($('.content ').width() == 300) {
        $('.left-bar').hide(300);
    }
    $('.media_left_menu_btn').click(function() {
        $('.aside-menu').toggle(300);
    });
    $('.red_menu_media').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.top-sliders').hide();
            $('.content').hide();
            $('footer').hide();
            $('.media_menu_block').show();
        } else {
            $(this).removeClass('active');
            $('.top-sliders').show();
            $('.content').show();
            $('footer').show();
            $('.media_menu_block').hide();
        }
    });

    $(".right_red_menu").click(function(e) {
        e.stopPropagation();
        $('.menu-open-block').removeClass('active');
        if ($(this).children('.drop_block').hasClass('active')) {
            if (!$(".drop_block").find(e.target).length) {
                $(".right_red_menu").find('.drop_block').removeClass('active');
            }
        } else {
            $(".right_red_menu").find('.drop_block').removeClass('active');
            $(this).children('.drop_block').addClass('active');
        }

        $(document).click(function(e) {
            if (!$(".right_red_menu").find(e.target).length) {
                $(".right_red_menu").find('.drop_block').removeClass('active');
            }
        });
    });

    $('.red_menu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(".right_red_menu").find('.drop_block').removeClass('active');
        if ($('.menu-open-block').hasClass('active')) {
            $('.menu-open-block').removeClass('active');
        } else {
            $('.menu-open-block').addClass('active');
        }
        $(document).click(function(e) {
            if (!$(".for_red_menu").find(e.target).length) {
                $('.menu-open-block').removeClass('active');
            }
        });
    });


    //Показать больше. Фильтр диаметр.
    $('.filter-values .btn--show-all').click(function(event) {
        var parent = $(this).closest('.filter-values');
        if (!($(parent).hasClass('show-all'))) {
            $(parent).addClass('show-all');
        }
        var parent = $(this).closest('.category-filter-form');
        if (!($(parent).hasClass('show-all'))) {
            $(parent).addClass('show-all');
        }
    });

    //Скрыть. Фильтр диаметр.
    $('.filter-values .btn--hide').click(function(event) {
        var parent = $(this).closest('.filter-values');
        $(parent).removeClass('show-all');

    });

    //Переключение видв списка каталога
    $('.category-products-btns .btn').click(function(event) {
        var containerClass = $(this).data('container');
        var container = $('.' + containerClass);
        container.removeAttr('class');
        container.addClass(containerClass);
        container.addClass($(this).data('class'));
    });

    //Запуск и остановка видео в слайдере на гланой
    var slides = $('.main-slider-item');

    function onPlay(video) {
        console.log('onPlay');
        $(video).addClass('playing');
    }

    function onStop(video) {
        $(video).removeClass('playing');
        var videoEl = $(video).find('video');
        $(videoEl)[0].controls = false;
    }

    if (slides.length > 0) {
        slides.each(function(i, slide) {
            var video = $(slide).find('.main-slider-video');
            var playBtn = $(slide).find(".main-slider-play");
            $(playBtn).click(function(event) {
                console.log('playBtn on click');
                playVideo(video);
            })
            $(video).find('video')[0].addEventListener('pause', function() {
                onStop(video);
            });
            $(video).find('video')[0].addEventListener('ended', function() {
                onStop(video);
            });
            $(video).find('video')[0].addEventListener('play', function() {
                onPlay(video);
            });
            $(video).find('video')[0].addEventListener('playing', function() {
                onPlay(video);
            });
        })


        function playVideo(video) {
            console.log('playVideo');
            var videoEl = $(video).find('video');
            if ($(videoEl).length > 0) {
                $(videoEl)[0].play();
                console.log($(videoEl)[0].controls);
                $(videoEl)[0].controls = true;
                console.log($(videoEl)[0].controls);
            }
        }

        // function pauseVideo(video) {
        //     video.pause();
        // }    
    }

    /*END*/
});


function init() {
    document._video = document.getElementById("video");
}

document.addEventListener("DOMContentLoaded", init, false);


function switchVideo(n) {
    if (n >= videos.length) n = 0;

    var mp4 = document.getElementById("mp4");
    var parent = mp4.parentNode;

    document._video.setAttribute("poster", videos[n][0]);
    mp4.setAttribute("src", videos[n][1]);
    document._video.load();
}

$(".for-play").click(function() {
    $(".for-play").hide();
});

//Выбор региона
function show_reg_sel() {
    if ($(".header-reg-bl-sel").css("display") == 'none') {
        $(".header-reg-bl-sel").css("display", "block");
        //$(".header-reg-bl-a").text("Скрыть");
    } else {
        $(".header-reg-bl-sel").css("display", "none");
        //$(".header-reg-bl-a").text("Изменить");
    }
    return false;
}


var showAlert = function(text) {
    $('.alert').remove();
    $('footer').after('<div class="alert">' + text + '<button type="button" class="close">&times;</button></div>');
    $('.alert .close').click(function() {
        $(this).closest('.alert').remove();
    });
}


var loadFunc = function() {

    const tooltipsCart = document.querySelectorAll('.has-tooltip--cart');

    for (let i = 0; i < tooltipsCart.length; i++) {
        setCartTooltip(tooltipsCart[i]);
    }
}


$('.add-to-compare').live('click', function() {
    var variant = $(this).data("id");
    var desc = $(this).closest('.category-item').find('.ct-discript').html();
    if (variant > 0) {
        $('#CompareInfo').load("/classes/ajax/AjaxUpdate.php", { update: 'compare', id: variant }, function(response, status, xhr) {
            $('.btn--compare .action-amount').text(parseInt($('.btn--compare .action-amount').text()) + 1);
            if (status == "success") {
                showAlert('Товар ' + desc + ' добавлен в сравнение.');
            }
        });
    }
});


$('.add-to-cart').live('click', function() {

    var desc = $(this).closest('.category-item').find('.ct-discript').html();

    var variant = $(this).data("id");
    if (variant > 0) {
        amount = 1;
        type = "";
        price = "По запросу";
        if ($("*").is(".dn_select" + variant)) {
            type = $(".dn_select" + variant).find(":selected").text();
        }
        if ($("*").is(".qty-two" + variant)) {
            amount = $(".qty-two" + variant).val();
        }
        if ($("*").is(".price" + variant)) {
            price = $(".price" + variant).text();
        }
        $('#CartInfo').load("/classes/Sibloma.php", { ajaxCart: 'ok', variant: variant, amounts: amount, type: type, price: price }, function(response, status, xhr) {
            if (status == "success") {
                loadFunc();
                showAlert('Товар ' + desc + ' добавлен в корзину.');
            }
        });
    }
});

function add_to_fav(id, btn) {
    var desc = $(btn).closest('.category-item').find('.ct-discript').html();
    jQuery.ajax({
        url: "/?module=favorite&par=add",
        type: "POST",
        data: { id: id },
        success: function(response) {
            loadFunc();
            showAlert('Товар ' + desc + ' добавлен в избранное.');
            $("#count-fav-prod").text(response);
        },
    });
}