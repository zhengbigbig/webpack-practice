!function () {
    "use strict";
    var e, t, r = {}, n = {};

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {exports: {}};
        return r[e](t, t.exports, o), t.exports
    }

    o.m = r, o.d = function (e, t) {
        for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, o.f = {}, o.e = function (e) {
        return Promise.all(Object.keys(o.f).reduce((function (t, r) {
            return o.f[r](e, t), t
        }), []))
    }, o.u = function (e) {
        return e + ".js"
    }, o.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, e = {}, t = "webpack-advanced-demo-01:", o.l = function (r, n, i, a) {
        if (e[r]) e[r].push(n); else {
            var c, u;
            if (void 0 !== i) for (var l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
                var f = l[s];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + i) {
                    c = f;
                    break
                }
            }
            c || (u = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.setAttribute("data-webpack", t + i), c.src = r), e[r] = [n];
            var d = function (t, n) {
                c.onerror = c.onload = null, clearTimeout(p);
                var o = e[r];
                if (delete e[r], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((function (e) {
                    return e(n)
                })), t) return t(n)
            }, p = setTimeout(d.bind(null, void 0, {type: "timeout", target: c}), 12e4);
            c.onerror = d.bind(null, c.onerror), c.onload = d.bind(null, c.onload), u && document.head.appendChild(c)
        }
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, function () {
        var e;
        o.g.importScripts && (e = o.g.location + "");
        var t = o.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            r.length && (e = r[r.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
    }(), function () {
        var e = {179: 0};
        o.f.j = function (t, r) {
            var n = o.o(e, t) ? e[t] : void 0;
            if (0 !== n) if (n) r.push(n[2]); else {
                var i = new Promise((function (r, o) {
                    n = e[t] = [r, o]
                }));
                r.push(n[2] = i);
                var a = o.p + o.u(t), c = new Error;
                o.l(a, (function (r) {
                    if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var i = r && ("load" === r.type ? "missing" : r.type), a = r && r.target && r.target.src;
                        c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", c.name = "ChunkLoadError", c.type = i, c.request = a, n[1](c)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = function (t, r) {
            for (var n, i, a = r[0], c = r[1], u = r[2], l = 0, s = []; l < a.length; l++) i = a[l], o.o(e, i) && e[i] && s.push(e[i][0]), e[i] = 0;
            for (n in c) o.o(c, n) && (o.m[n] = c[n]);
            for (u && u(o), t && t(r); s.length;) s.shift()()
        }, r = self.webpackChunkwebpack_advanced_demo_01 = self.webpackChunkwebpack_advanced_demo_01 || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    }();
    const i = o.e(326).then(o.bind(o, 326));
    console.log("a"), console.log(i), console.log(Promise.resolve("test promise"))
}();