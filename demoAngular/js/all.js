if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = !!t && "length" in t && t.length,
                i = rt.type(t);
            return "function" !== i && !rt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function n(t, e, i) {
            if (rt.isFunction(e)) return rt.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return rt.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (mt.test(e)) return rt.filter(e, t, i);
                e = rt.filter(e, t)
            }
            return rt.grep(t, function(t) {
                return J.call(e, t) > -1 !== i
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            var e = {};
            return rt.each(t.match(xt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function s() {
            X.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), rt.ready()
        }

        function a() {
            this.expando = rt.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(It, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : $t.test(i) ? rt.parseJSON(i) : i)
                    } catch (t) {}
                    Et.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c(t, e, i, n) {
            var o, r = 1,
                s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return rt.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (rt.cssNumber[e] ? "" : "px"),
                d = (rt.cssNumber[e] || "px" !== c && +l) && Ot.exec(rt.css(t, e));
            if (d && d[3] !== c) {
                c = c || d[3], i = i || [], d = +l || 1;
                do r = r || ".5", d /= r, rt.style(t, e, d + c); while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
        }

        function d(t, e) {
            var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], i) : i
        }

        function u(t, e) {
            for (var i = 0, n = t.length; n > i; i++) kt.set(t[i], "globalEval", !e || kt.get(e[i], "globalEval"))
        }

        function p(t, e, i, n, o) {
            for (var r, s, a, l, c, p, h = e.createDocumentFragment(), f = [], m = 0, g = t.length; g > m; m++)
                if (r = t[m], r || 0 === r)
                    if ("object" === rt.type(r)) rt.merge(f, r.nodeType ? [r] : r);
                    else if (Nt.test(r)) {
                for (s = s || h.appendChild(e.createElement("div")), a = (_t.exec(r) || ["", ""])[1].toLowerCase(), l = zt[a] || zt._default, s.innerHTML = l[1] + rt.htmlPrefilter(r) + l[2], p = l[0]; p--;) s = s.lastChild;
                rt.merge(f, s.childNodes), s = h.firstChild, s.textContent = ""
            } else f.push(e.createTextNode(r));
            for (h.textContent = "", m = 0; r = f[m++];)
                if (n && rt.inArray(r, n) > -1) o && o.push(r);
                else if (c = rt.contains(r.ownerDocument, r), s = d(h.appendChild(r), "script"), c && u(s), i)
                for (p = 0; r = s[p++];) Pt.test(r.type || "") && i.push(r);
            return h
        }

        function h() {
            return !0
        }

        function f() {
            return !1
        }

        function m() {
            try {
                return X.activeElement
            } catch (t) {}
        }

        function g(t, e, i, n, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) g(t, a, i, n, e[a], r);
                return t
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
            else if (!o) return t;
            return 1 === r && (s = o, o = function(t) {
                return rt().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = rt.guid++)), t.each(function() {
                rt.event.add(this, e, o, n, i)
            })
        }

        function v(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Bt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function b(t, e) {
            var i, n, o, r, s, a, l, c;
            if (1 === e.nodeType) {
                if (kt.hasData(t) && (r = kt.access(t), s = kt.set(e, r), c = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in c)
                        for (i = 0, n = c[o].length; n > i; i++) rt.event.add(e, o, c[o][i])
                }
                Et.hasData(t) && (a = Et.access(t), l = rt.extend({}, a), Et.set(e, l))
            }
        }

        function x(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && jt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function T(t, e, i, n) {
            e = K.apply([], e);
            var o, r, s, a, l, c, u = 0,
                h = t.length,
                f = h - 1,
                m = e[0],
                g = rt.isFunction(m);
            if (g || h > 1 && "string" == typeof m && !nt.checkClone && Ft.test(m)) return t.each(function(o) {
                var r = t.eq(o);
                g && (e[0] = m.call(this, o, r.html())), T(r, e, i, n)
            });
            if (h && (o = p(e, t[0].ownerDocument, !1, t, n), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
                for (s = rt.map(d(o, "script"), y), a = s.length; h > u; u++) l = o, u !== f && (l = rt.clone(l, !0, !0), a && rt.merge(s, d(l, "script"))), i.call(t[u], l, u);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, rt.map(s, w), u = 0; a > u; u++) l = s[u], Pt.test(l.type || "") && !kt.access(l, "globalEval") && rt.contains(c, l) && (l.src ? rt._evalUrl && rt._evalUrl(l.src) : rt.globalEval(l.textContent.replace(Ut, "")))
            }
            return t
        }

        function S(t, e, i) {
            for (var n, o = e ? rt.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || rt.cleanData(d(n)), n.parentNode && (i && rt.contains(n.ownerDocument, n) && u(d(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function C(t, e) {
            var i = rt(e.createElement(t)).appendTo(e.body),
                n = rt.css(i[0], "display");
            return i.detach(), n
        }

        function k(t) {
            var e = X,
                i = Yt[t];
            return i || (i = C(t, e), "none" !== i && i || (Qt = (Qt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Qt[0].contentDocument, e.write(), e.close(), i = C(t, e), Qt.detach()), Yt[t] = i), i
        }

        function E(t, e, i) {
            var n, o, r, s, a = t.style;
            return i = i || Gt(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== s && void 0 !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), i && !nt.pixelMarginRight() && Xt.test(s) && Vt.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
        }

        function $(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function I(t) {
            if (t in ne) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
                if (t = ie[i] + e, t in ne) return t
        }

        function A(t, e, i) {
            var n = Ot.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function O(t, e, i, n, o) {
            for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += rt.css(t, i + Lt[r], !0, o)), n ? ("content" === i && (s -= rt.css(t, "padding" + Lt[r], !0, o)), "margin" !== i && (s -= rt.css(t, "border" + Lt[r] + "Width", !0, o))) : (s += rt.css(t, "padding" + Lt[r], !0, o), "padding" !== i && (s += rt.css(t, "border" + Lt[r] + "Width", !0, o)));
            return s
        }

        function L(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = Gt(t),
                s = "border-box" === rt.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = E(t, e, r), (0 > o || null == o) && (o = t.style[e]), Xt.test(o)) return o;
                n = s && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + O(t, e, i || (s ? "border" : "content"), n, r) + "px"
        }

        function D(t, e) {
            for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = kt.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Dt(n) && (r[s] = kt.access(n, "olddisplay", k(n.nodeName)))) : (o = Dt(n), "none" === i && o || kt.set(n, "olddisplay", o ? i : rt.css(n, "display"))));
            for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function j(t, e, i, n, o) {
            return new j.prototype.init(t, e, i, n, o)
        }

        function _() {
            return t.setTimeout(function() {
                oe = void 0
            }), oe = rt.now()
        }

        function P(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Lt[n], o["margin" + i] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function z(t, e, i) {
            for (var n, o = (M.tweeners[e] || []).concat(M.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (n = o[r].call(i, e, t)) return n
        }

        function N(t, e, i) {
            var n, o, r, s, a, l, c, d, u = this,
                p = {},
                h = t.style,
                f = t.nodeType && Dt(t),
                m = kt.get(t, "fxshow");
            i.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = rt.css(t, "display"), d = "none" === c ? kt.get(t, "olddisplay") || k(t.nodeName) : c, "inline" === d && "none" === rt.css(t, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
                h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (o = e[n], se.exec(o)) {
                    if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    p[n] = m && m[n] || rt.style(t, n)
                } else c = void 0;
            if (rt.isEmptyObject(p)) "inline" === ("none" === c ? k(t.nodeName) : c) && (h.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = kt.access(t, "fxshow", {}), r && (m.hidden = !f), f ? rt(t).show() : u.done(function() {
                    rt(t).hide()
                }), u.done(function() {
                    var e;
                    kt.remove(t, "fxshow");
                    for (e in p) rt.style(t, e, p[e])
                });
                for (n in p) s = z(f ? m[n] : 0, n, u), n in m || (m[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function H(t, e) {
            var i, n, o, r, s;
            for (i in t)
                if (n = rt.camelCase(i), o = e[n], r = t[i], rt.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = rt.cssHooks[n], s && "expand" in s) {
                    r = s.expand(r), delete t[n];
                    for (i in r) i in t || (t[i] = r[i], e[i] = o)
                } else e[n] = o
        }

        function M(t, e, i) {
            var n, o, r = 0,
                s = M.prefilters.length,
                a = rt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = oe || _(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [c, r, i]), 1 > r && l ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: rt.extend({}, e),
                    opts: rt.extend(!0, {
                        specialEasing: {},
                        easing: rt.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: oe || _(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = rt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                d = c.props;
            for (H(d, c.opts.specialEasing); s > r; r++)
                if (n = M.prefilters[r].call(c, t, d, c.opts)) return rt.isFunction(n.stop) && (rt._queueHooks(c.elem, c.opts.queue).stop = rt.proxy(n.stop, n)), n;
            return rt.map(d, z, c), rt.isFunction(c.opts.start) && c.opts.start.call(t, c), rt.fx.timer(rt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function W(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function q(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    r = e.toLowerCase().match(xt) || [];
                if (rt.isFunction(i))
                    for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function R(t, e, i, n) {
            function o(a) {
                var l;
                return r[a] = !0, rt.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                s = t === Ee;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function F(t, e) {
            var i, n, o = rt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && rt.extend(!0, t, n), t
        }

        function B(t, e, i) {
            for (var n, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (o in a)
                    if (a[o] && a[o].test(n)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) r = l[0];
            else {
                for (o in i) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
        }

        function U(t, e, i, n) {
            var o, r, s, a, l, c = {},
                d = t.dataTypes.slice();
            if (d[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (r = d.shift(); r;)
                if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = d.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = c[l + " " + r] || c["* " + r], !s)
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], d.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function Q(t, e, i, n) {
            var o;
            if (rt.isArray(e)) rt.each(e, function(e, o) {
                i || Oe.test(t) ? n(t, o) : Q(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== rt.type(e)) n(t, e);
            else
                for (o in e) Q(t + "[" + o + "]", e[o], i, n)
        }

        function Y(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var V = [],
            X = t.document,
            G = V.slice,
            K = V.concat,
            Z = V.push,
            J = V.indexOf,
            tt = {},
            et = tt.toString,
            it = tt.hasOwnProperty,
            nt = {},
            ot = "2.2.4",
            rt = function(t, e) {
                return new rt.fn.init(t, e)
            },
            st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ct = function(t, e) {
                return e.toUpperCase()
            };
        rt.fn = rt.prototype = {
            jquery: ot,
            constructor: rt,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return rt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(rt.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: Z,
            sort: V.sort,
            splice: V.splice
        }, rt.extend = rt.fn.extend = function() {
            var t, e, i, n, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], n = t[e], s !== n && (c && n && (rt.isPlainObject(n) || (o = rt.isArray(n))) ? (o ? (o = !1, r = i && rt.isArray(i) ? i : []) : r = i && rt.isPlainObject(i) ? i : {}, s[e] = rt.extend(c, r, n)) : void 0 !== n && (s[e] = n));
            return s
        }, rt.extend({
            expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === rt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !rt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || it.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = rt.trim(t), t && (1 === t.indexOf("use strict") ? (e = X.createElement("script"), e.text = t, X.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(at, "ms-").replace(lt, ct)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, o = 0;
                if (i(t))
                    for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
                else
                    for (o in t)
                        if (e.call(t[o], o, t[o]) === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(st, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : J.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function(t, e, i) {
                for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
                return o
            },
            map: function(t, e, n) {
                var o, r, s = 0,
                    a = [];
                if (i(t))
                    for (o = t.length; o > s; s++) r = e(t[s], s, n), null != r && a.push(r);
                else
                    for (s in t) r = e(t[s], s, n), null != r && a.push(r);
                return K.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, o;
                return "string" == typeof e && (i = t[e], e = t, t = i), rt.isFunction(t) ? (n = G.call(arguments, 2), o = function() {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, o.guid = t.guid = t.guid || rt.guid++, o) : void 0
            },
            now: Date.now,
            support: nt
        }), "function" == typeof Symbol && (rt.fn[Symbol.iterator] = V[Symbol.iterator]), rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var dt = function(t) {
            function e(t, e, i, n) {
                var o, r, s, a, l, c, u, h, f = e && e.ownerDocument,
                    m = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
                if (!n && ((e ? e.ownerDocument || e : W) !== D && L(e), e = e || D, _)) {
                    if (11 !== m && (c = vt.exec(t)))
                        if (o = c[1]) {
                            if (9 === m) {
                                if (!(s = e.getElementById(o))) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (f && (s = f.getElementById(o)) && H(e, s) && s.id === o) return i.push(s), i
                        } else {
                            if (c[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (x.qsa && !U[t + " "] && (!P || !P.test(t))) {
                        if (1 !== m) f = e, h = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = M), u = k(t), r = u.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + p(u[r]);
                            h = u.join(","), f = yt.test(t) && d(e.parentNode) || e
                        }
                        if (h) try {
                            return Z.apply(i, f.querySelectorAll(h)), i
                        } catch (t) {} finally {
                            a === M && e.removeAttribute("id")
                        }
                    }
                }
                return $(t.replace(at, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[M] = !0, t
            }

            function o(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e
            }

            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function d(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function u() {}

            function p(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function h(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    r = R++;
                return e.first ? function(e, i, r) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, r)
                } : function(e, i, s) {
                    var a, l, c, d = [q, r];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) {
                                if (c = e[M] || (e[M] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === r) return d[2] = a[2];
                                if (l[n] = d, d[2] = t(e, i, s)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
                return n
            }

            function g(t, e, i, n, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
                return s
            }

            function v(t, e, i, o, r, s) {
                return o && !o[M] && (o = v(o)), r && !r[M] && (r = v(r, s)), n(function(n, s, a, l) {
                    var c, d, u, p = [],
                        h = [],
                        f = s.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, p, t, a, l),
                        w = i ? r || (n ? t : f || o) ? [] : s : y;
                    if (i && i(y, w, a, l), o)
                        for (c = g(w, h), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (w[h[d]] = !(y[h[d]] = u));
                    if (n) {
                        if (r || t) {
                            if (r) {
                                for (c = [], d = w.length; d--;)(u = w[d]) && c.push(y[d] = u);
                                r(null, w = [], c, l)
                            }
                            for (d = w.length; d--;)(u = w[d]) && (c = r ? tt(n, u) : p[d]) > -1 && (n[c] = !(s[c] = u))
                        }
                    } else w = g(w === s ? w.splice(f, w.length) : w), r ? r(null, s, w, l) : Z.apply(s, w)
                })
            }

            function y(t) {
                for (var e, i, n, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = h(function(t) {
                        return t === e
                    }, s, !0), c = h(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), d = [function(t, i, n) {
                        var o = !r && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, o
                    }]; o > a; a++)
                    if (i = T.relative[t[a].type]) d = [h(f(d), i)];
                    else {
                        if (i = T.filter[t[a].type].apply(null, t[a].matches), i[M]) {
                            for (n = ++a; o > n && !T.relative[t[n].type]; n++);
                            return v(a > 1 && f(d), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && p(t))
                        }
                        d.push(i)
                    }
                return f(d)
            }

            function w(t, i) {
                var o = i.length > 0,
                    r = t.length > 0,
                    s = function(n, s, a, l, c) {
                        var d, u, p, h = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            y = I,
                            w = n || r && T.find.TAG("*", c),
                            b = q += null == y ? 1 : Math.random() || .1,
                            x = w.length;
                        for (c && (I = s === D || s || c); f !== x && null != (d = w[f]); f++) {
                            if (r && d) {
                                for (u = 0, s || d.ownerDocument === D || (L(d), a = !_); p = t[u++];)
                                    if (p(d, s || D, a)) {
                                        l.push(d);
                                        break
                                    }
                                c && (q = b)
                            }
                            o && ((d = !p && d) && h--, n && m.push(d))
                        }
                        if (h += f, o && f !== h) {
                            for (u = 0; p = i[u++];) p(m, v, s, a);
                            if (n) {
                                if (h > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (q = b, I = y), m
                    };
                return o ? n(s) : s
            }
            var b, x, T, S, C, k, E, $, I, A, O, L, D, j, _, P, z, N, H, M = "sizzle" + 1 * new Date,
                W = t.document,
                q = 0,
                R = 0,
                F = i(),
                B = i(),
                U = i(),
                Q = function(t, e) {
                    return t === e && (O = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                X = [],
                G = X.pop,
                K = X.push,
                Z = X.push,
                J = X.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ut = new RegExp(rt),
                pt = new RegExp("^" + nt + "$"),
                ht = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                ft = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                wt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                Tt = function() {
                    L()
                };
            try {
                Z.apply(X = J.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: X.length ? function(t, e) {
                        K.apply(t, J.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, L = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : W;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, j = D.documentElement, _ = !C(D), (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(D.getElementsByClassName), x.getById = o(function(t) {
                    return j.appendChild(t).id = M, !D.getElementsByName || !D.getElementsByName(M).length
                }), x.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && _) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return "undefined" != typeof e.getElementsByClassName && _ ? e.getElementsByClassName(t) : void 0
                }, z = [], P = [], (x.qsa = gt.test(D.querySelectorAll)) && (o(function(t) {
                    j.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + M + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || P.push(".#.+[+~]")
                }), o(function(t) {
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                })), (x.matchesSelector = gt.test(N = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), z.push("!=", rt)
                }), P = P.length && new RegExp(P.join("|")), z = z.length && new RegExp(z.join("|")), e = gt.test(j.compareDocumentPosition), H = e || gt.test(j.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Q = e ? function(t, e) {
                    if (t === e) return O = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === D || t.ownerDocument === W && H(W, t) ? -1 : e === D || e.ownerDocument === W && H(W, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return O = !0, 0;
                    var i, n = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !r) return t === D ? -1 : e === D ? 1 : o ? -1 : r ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (o === r) return s(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? s(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0
                }, D) : D
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== D && L(t), i = i.replace(dt, "='$1']"), x.matchesSelector && _ && !U[i + " "] && (!z || !z.test(i)) && (!P || !P.test(i))) try {
                    var n = N.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, D, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && L(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && L(t);
                var i = T.attrHandle[e.toLowerCase()],
                    n = i && V.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !_) : void 0;
                return void 0 !== n ? n : x.attributes || !_ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (O = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(Q), O) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return A = null, t
            }, S = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += S(e);
                return i
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = F[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && F(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, d, u, p, h, f, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                w = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = e; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (p = g, u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[t] || [], h = c[0] === q && c[1], w = h && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (w = h = 0) || f.pop();)
                                        if (1 === p.nodeType && ++w && p === e) {
                                            d[t] = [q, h, w];
                                            break
                                        }
                                } else if (y && (p = e, u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[t] || [], h = c[0] === q && c[1], w = h), w === !1)
                                    for (;
                                        (p = ++h && p && p[m] || (w = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[t] = [q, w]), p !== e)););
                                return w -= o, w === n || w % n === 0 && w / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[M] ? r(i) : r.length > 1 ? (o = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, o = r(t, i), s = o.length; s--;) n = tt(t, o[s]), t[n] = !(e[n] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            o = E(t.replace(at, "$1"));
                        return o[M] ? n(function(t, e, i, n) {
                            for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, n, r) {
                            return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === j
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ft.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[b] = l(b);
            return u.prototype = T.filters = T.pseudos, T.setFilters = new u, k = e.tokenize = function(t, i) {
                var n, o, r, s, a, l, c, d = B[t + " "];
                if (d) return i ? 0 : d.slice(0);
                for (a = t, l = [], c = T.preFilter; a;) {
                    n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ct.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(n.length));
                    for (s in T.filter) !(o = ht[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, E = e.compile = function(t, e) {
                var i, n = [],
                    o = [],
                    r = U[t + " "];
                if (!r) {
                    for (e || (e = k(t)), i = e.length; i--;) r = y(e[i]), r[M] ? n.push(r) : o.push(r);
                    r = U(t, w(o, n)), r.selector = t
                }
                return r
            }, $ = e.select = function(t, e, i, n) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    u = !n && k(t = c.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && _ && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(bt, xt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (n = l(s.matches[0].replace(bt, xt), yt.test(r[0].type) && d(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = n.length && p(r), !t) return Z.apply(i, n), i;
                            break
                        }
                }
                return (c || E(t, u))(n, e, !_, i, !e || yt.test(t) && d(e.parentNode) || e), i
            }, x.sortStable = M.split("").sort(Q).join("") === M, x.detectDuplicates = !!O, L(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        rt.find = dt, rt.expr = dt.selectors, rt.expr[":"] = rt.expr.pseudos, rt.uniqueSort = rt.unique = dt.uniqueSort, rt.text = dt.getText, rt.isXMLDoc = dt.isXML, rt.contains = dt.contains;
        var ut = function(t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && rt(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            pt = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            ht = rt.expr.match.needsContext,
            ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^.[^:#\[\.,]*$/;
        rt.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (rt.contains(o[e], this)) return !0
                }));
                for (e = 0; i > e; e++) rt.find(t, o[e], n);
                return n = this.pushStack(i > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ht.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = rt.fn.init = function(t, e, i) {
                var n, o;
                if (!t) return this;
                if (i = i || gt, "string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : X, !0)), ft.test(n[1]) && rt.isPlainObject(e))
                            for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return o = X.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = X, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
            };
        yt.prototype = rt.fn, gt = rt(X);
        var wt = /^(?:parents|prev(?:Until|All))/,
            bt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        rt.fn.extend({
            has: function(t) {
                var e = rt(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (rt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, o = this.length, r = [], s = ht.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
                return this.pushStack(r.length > 1 ? rt.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? J.call(rt(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(rt.uniqueSort(rt.merge(this.get(), rt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ut(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return ut(t, "parentNode", i)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return ut(t, "nextSibling")
            },
            prevAll: function(t) {
                return ut(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return ut(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return ut(t, "previousSibling", i)
            },
            siblings: function(t) {
                return pt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return pt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || rt.merge([], t.childNodes)
            }
        }, function(t, e) {
            rt.fn[t] = function(i, n) {
                var o = rt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = rt.filter(n, o)), this.length > 1 && (bt[t] || rt.uniqueSort(o), wt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var xt = /\S+/g;
        rt.Callbacks = function(t) {
            t = "string" == typeof t ? r(t) : rt.extend({}, t);
            var e, i, n, o, s = [],
                a = [],
                l = -1,
                c = function() {
                    for (o = t.once, n = e = !0; a.length; l = -1)
                        for (i = a.shift(); ++l < s.length;) s[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = s.length, i = !1);
                    t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
                },
                d = {
                    add: function() {
                        return s && (i && !e && (l = s.length - 1, a.push(i)), function e(i) {
                            rt.each(i, function(i, n) {
                                rt.isFunction(n) ? t.unique && d.has(n) || s.push(n) : n && n.length && "string" !== rt.type(n) && e(n)
                            })
                        }(arguments), i && !e && c()), this
                    },
                    remove: function() {
                        return rt.each(arguments, function(t, e) {
                            for (var i;
                                (i = rt.inArray(e, s, i)) > -1;) s.splice(i, 1), l >= i && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? rt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = a = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = a = [], i || (s = i = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, i) {
                        return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, rt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", rt.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return rt.Deferred(function(i) {
                                rt.each(e, function(e, r) {
                                    var s = rt.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && rt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? rt.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, rt.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    n[r[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? n : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, i, n, o = 0,
                    r = G.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : rt.Deferred(),
                    c = function(t, i, n) {
                        return function(o) {
                            i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && rt.isFunction(r[o].promise) ? r[o].promise().progress(c(o, i, e)).done(c(o, n, r)).fail(l.reject) : --a;
                return a || l.resolveWith(n, r), l.promise()
            }
        });
        var Tt;
        rt.fn.ready = function(t) {
            return rt.ready.promise().done(t), this
        }, rt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? rt.readyWait++ : rt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --rt.readyWait : rt.isReady) || (rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (Tt.resolveWith(X, [rt]), rt.fn.triggerHandler && (rt(X).triggerHandler("ready"), rt(X).off("ready"))))
            }
        }), rt.ready.promise = function(e) {
            return Tt || (Tt = rt.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? t.setTimeout(rt.ready) : (X.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), Tt.promise(e)
        }, rt.ready.promise();
        var St = function(t, e, i, n, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === rt.type(i)) {
                    o = !0;
                    for (a in i) St(t, e, a, i[a], !0, r, s)
                } else if (void 0 !== n && (o = !0, rt.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(rt(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
            },
            Ct = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!Ct(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, Ct(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e) o[e] = i;
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, rt.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, o, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 === e) this.register(t);
                    else {
                        rt.isArray(e) ? n = e.concat(e.map(rt.camelCase)) : (o = rt.camelCase(e), e in r ? n = [e, o] : (n = o, n = n in r ? [n] : n.match(xt) || [])), i = n.length;
                        for (; i--;) delete r[n[i]]
                    }(void 0 === e || rt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !rt.isEmptyObject(e)
            }
        };
        var kt = new a,
            Et = new a,
            $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            It = /[A-Z]/g;
        rt.extend({
            hasData: function(t) {
                return Et.hasData(t) || kt.hasData(t)
            },
            data: function(t, e, i) {
                return Et.access(t, e, i)
            },
            removeData: function(t, e) {
                Et.remove(t, e)
            },
            _data: function(t, e, i) {
                return kt.access(t, e, i)
            },
            _removeData: function(t, e) {
                kt.remove(t, e)
            }
        }), rt.fn.extend({
            data: function(t, e) {
                var i, n, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Et.get(r), 1 === r.nodeType && !kt.get(r, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(r, n, o[n])));
                        kt.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Et.set(this, t)
                }) : St(this, function(e) {
                    var i, n;
                    if (r && void 0 === e) {
                        if (i = Et.get(r, t) || Et.get(r, t.replace(It, "-$&").toLowerCase()), void 0 !== i) return i;
                        if (n = rt.camelCase(t), i = Et.get(r, n), void 0 !== i) return i;
                        if (i = l(r, n, void 0), void 0 !== i) return i
                    } else n = rt.camelCase(t), this.each(function() {
                        var i = Et.get(this, n);
                        Et.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Et.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Et.remove(this, t)
                })
            }
        }), rt.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = kt.get(t, e), i && (!n || rt.isArray(i) ? n = kt.access(t, e, rt.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = rt.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    r = rt._queueHooks(t, e),
                    s = function() {
                        rt.dequeue(t, e)
                    };
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return kt.get(t, i) || kt.access(t, i, {
                    empty: rt.Callbacks("once memory").add(function() {
                        kt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), rt.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    rt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    o = rt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --n || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = kt.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ot = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
            Lt = ["Top", "Right", "Bottom", "Left"],
            Dt = function(t, e) {
                return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
            },
            jt = /^(?:checkbox|radio)$/i,
            _t = /<([\w:-]+)/,
            Pt = /^$|\/(?:java|ecma)script/i,
            zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Nt = /<|&#?\w+;/;
        ! function() {
            var t = X.createDocumentFragment(),
                e = t.appendChild(X.createElement("div")),
                i = X.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ht = /^key/,
            Mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Wt = /^([^.]*)(?:\.(.+)|)/;
        rt.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var r, s, a, l, c, d, u, p, h, f, m, g = kt.get(t);
                if (g)
                    for (i.handler && (r = i, i = r.handler, o = r.selector), i.guid || (i.guid = rt.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                            return "undefined" != typeof rt && rt.event.triggered !== e.type ? rt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(xt) || [""], c = e.length; c--;) a = Wt.exec(e[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h && (u = rt.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = rt.event.special[h] || {}, d = rt.extend({
                        type: h,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && rt.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(h, s)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), rt.event.global[h] = !0)
            },
            remove: function(t, e, i, n, o) {
                var r, s, a, l, c, d, u, p, h, f, m, g = kt.hasData(t) && kt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(xt) || [""], c = e.length; c--;)
                        if (a = Wt.exec(e[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                            for (u = rt.event.special[h] || {}, h = (n ? u.delegateType : u.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(t, d));
                            s && !p.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || rt.removeEvent(t, h, g.handle), delete l[h])
                        } else
                            for (h in l) rt.event.remove(t, h + e[c], i, n, !0);
                    rt.isEmptyObject(l) && kt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = rt.event.fix(t);
                var e, i, n, o, r, s = [],
                    a = G.call(arguments),
                    l = (kt.get(this, "events") || {})[t.type] || [],
                    c = rt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = rt.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((rt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? rt(o, this).index(l) > -1 : rt.find(o, this, null, [l]).length), n[o] && n.push(r);
                            n.length && s.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, o, r = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || X, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[rt.expando]) return t;
                var e, i, n, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Mt.test(o) ? this.mouseHooks : Ht.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
                return t.target || (t.target = X), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== m() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === m() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && rt.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return rt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, rt.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, rt.Event = function(t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : f) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            constructor: rt.Event,
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            rt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === n || rt.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), rt.fn.extend({
            on: function(t, e, i, n) {
                return g(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return g(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = f), this.each(function() {
                    rt.event.remove(this, t, i, e)
                })
            }
        });
        var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Rt = /<script|<style|<link/i,
            Ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Bt = /^true\/(.*)/,
            Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        rt.extend({
            htmlPrefilter: function(t) {
                return t.replace(qt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, o, r, s, a = t.cloneNode(!0),
                    l = rt.contains(t.ownerDocument, t);
                if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                    for (s = d(a), r = d(t), n = 0, o = r.length; o > n; n++) x(r[n], s[n]);
                if (e)
                    if (i)
                        for (r = r || d(t), s = s || d(a), n = 0, o = r.length; o > n; n++) b(r[n], s[n]);
                    else b(t, a);
                return s = d(a, "script"), s.length > 0 && u(s, !l && d(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, o = rt.event.special, r = 0; void 0 !== (i = t[r]); r++)
                    if (Ct(i)) {
                        if (e = i[kt.expando]) {
                            if (e.events)
                                for (n in e.events) o[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, e.handle);
                            i[kt.expando] = void 0
                        }
                        i[Et.expando] && (i[Et.expando] = void 0)
                    }
            }
        }), rt.fn.extend({
            domManip: T,
            detach: function(t) {
                return S(this, t, !0)
            },
            remove: function(t) {
                return S(this, t)
            },
            text: function(t) {
                return St(this, function(t) {
                    return void 0 === t ? rt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return T(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (rt.cleanData(d(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return rt.clone(this, t, e)
                })
            },
            html: function(t) {
                return St(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Rt.test(t) && !zt[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = rt.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (rt.cleanData(d(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return T(this, arguments, function(e) {
                    var i = this.parentNode;
                    rt.inArray(this, t) < 0 && (rt.cleanData(d(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            rt.fn[t] = function(t) {
                for (var i, n = [], o = rt(t), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), rt(o[s])[e](i), Z.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Qt, Yt = {
                HTML: "block",
                BODY: "block"
            },
            Vt = /^margin/,
            Xt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
            Gt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Kt = function(t, e, i, n) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = i.apply(t, n || []);
                for (r in e) t.style[r] = s[r];
                return o
            },
            Zt = X.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Zt.appendChild(s);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Zt.removeChild(s)
            }
            var i, n, o, r, s = X.createElement("div"),
                a = X.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), rt.extend(nt, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), o
                },
                reliableMarginLeft: function() {
                    return null == n && e(), r
                },
                reliableMarginRight: function() {
                    var e, i = a.appendChild(X.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Zt.appendChild(s), e = !parseFloat(t.getComputedStyle(i).marginRight), Zt.removeChild(s), a.removeChild(i), e
                }
            }))
        }();
        var Jt = /^(none|table(?!-c[ea]).+)/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ie = ["Webkit", "O", "Moz", "ms"],
            ne = X.createElement("div").style;
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = E(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = rt.camelCase(e),
                        l = t.style;
                    return e = rt.cssProps[a] || (rt.cssProps[a] = I(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = Ot.exec(i)) && o[1] && (i = c(t, e, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (rt.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var o, r, s, a = rt.camelCase(e);
                return e = rt.cssProps[a] || (rt.cssProps[a] = I(a) || a), s = rt.cssHooks[e] || rt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = E(t, e, n)), "normal" === o && e in ee && (o = ee[e]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), rt.each(["height", "width"], function(t, e) {
            rt.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Jt.test(rt.css(t, "display")) && 0 === t.offsetWidth ? Kt(t, te, function() {
                        return L(t, e, n)
                    }) : L(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var o, r = n && Gt(t),
                        s = n && O(t, e, n, "border-box" === rt.css(t, "boxSizing", !1, r), r);
                    return s && (o = Ot.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = rt.css(t, e)), A(t, i, s)
                }
            }
        }), rt.cssHooks.marginLeft = $(nt.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), rt.cssHooks.marginRight = $(nt.reliableMarginRight, function(t, e) {
            return e ? Kt(t, {
                display: "inline-block"
            }, E, [t, "marginRight"]) : void 0
        }), rt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            rt.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Lt[n] + e] = r[n] || r[n - 2] || r[0];
                    return o
                }
            }, Vt.test(t) || (rt.cssHooks[t + e].set = A)
        }), rt.fn.extend({
            css: function(t, e) {
                return St(this, function(t, e, i) {
                    var n, o, r = {},
                        s = 0;
                    if (rt.isArray(e)) {
                        for (n = Gt(t), o = e.length; o > s; s++) r[e[s]] = rt.css(t, e[s], !1, n);
                        return r
                    }
                    return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Dt(this) ? rt(this).show() : rt(this).hide()
                })
            }
        }), rt.Tween = j, j.prototype = {
            constructor: j,
            init: function(t, e, i, n, o, r) {
                this.elem = t, this.prop = i, this.easing = o || rt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (rt.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = j.propHooks[this.prop];
                return t && t.get ? t.get(this) : j.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = j.propHooks[this.prop];
                return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
            }
        }, j.prototype.init.prototype = j.prototype, j.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[rt.cssProps[t.prop]] && !rt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : rt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, rt.fx = j.prototype.init, rt.fx.step = {};
        var oe, re, se = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;
        rt.Animation = rt.extend(M, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return c(i.elem, t, Ot.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(xt);
                    for (var i, n = 0, o = t.length; o > n; n++) i = t[n], M.tweeners[i] = M.tweeners[i] || [], M.tweeners[i].unshift(e)
                },
                prefilters: [N],
                prefilter: function(t, e) {
                    e ? M.prefilters.unshift(t) : M.prefilters.push(t)
                }
            }), rt.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? rt.extend({}, t) : {
                    complete: i || !i && e || rt.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !rt.isFunction(e) && e
                };
                return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
                }, n
            }, rt.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Dt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var o = rt.isEmptyObject(t),
                        r = rt.speed(e, i, n),
                        s = function() {
                            var e = M(this, rt.extend({}, t), r);
                            (o || kt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = rt.timers,
                            s = kt.get(this);
                        if (o) s[o] && s[o].stop && n(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && ae.test(o) && n(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                        !e && i || rt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = kt.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            r = rt.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), rt.each(["toggle", "show", "hide"], function(t, e) {
                var i = rt.fn[e];
                rt.fn[e] = function(t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(P(e, !0), t, n, o)
                }
            }), rt.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                rt.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), rt.timers = [], rt.fx.tick = function() {
                var t, e = 0,
                    i = rt.timers;
                for (oe = rt.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || rt.fx.stop(), oe = void 0
            }, rt.fx.timer = function(t) {
                rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
            }, rt.fx.interval = 13, rt.fx.start = function() {
                re || (re = t.setInterval(rt.fx.tick, rt.fx.interval))
            }, rt.fx.stop = function() {
                t.clearInterval(re), re = null
            }, rt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, rt.fn.delay = function(e, i) {
                return e = rt.fx ? rt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = X.createElement("input"),
                    e = X.createElement("select"),
                    i = e.appendChild(X.createElement("option"));
                t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = X.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
            }();
        var le, ce = rt.expr.attrHandle;
        rt.fn.extend({
            attr: function(t, e) {
                return St(this, rt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function(t, e, i) {
                var n, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? rt.prop(t, e, i) : (1 === r && rt.isXMLDoc(t) || (e = e.toLowerCase(), o = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void rt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = rt.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, o = 0,
                    r = e && e.match(xt);
                if (r && 1 === t.nodeType)
                    for (; i = r[o++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), le = {
            set: function(t, e, i) {
                return e === !1 ? rt.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ce[e] || rt.find.attr;
            ce[e] = function(t, e, n) {
                var o, r;
                return n || (r = ce[e], ce[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ce[e] = r), o
            }
        });
        var de = /^(?:input|select|textarea|button)$/i,
            ue = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function(t, e) {
                return St(this, rt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[rt.propFix[t] || t]
                })
            }
        }), rt.extend({
            prop: function(t, e, i) {
                var n, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && rt.isXMLDoc(t) || (e = rt.propFix[e] || e, o = rt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), nt.optSelected || (rt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            rt.propFix[this.toLowerCase()] = this
        });
        var pe = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function(t) {
                var e, i, n, o, r, s, a, l = 0;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).addClass(t.call(this, e, W(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(xt) || []; i = this[l++];)
                        if (o = W(i), n = 1 === i.nodeType && (" " + o + " ").replace(pe, " ")) {
                            for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            a = rt.trim(n), o !== a && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, r, s, a, l = 0;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).removeClass(t.call(this, e, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(xt) || []; i = this[l++];)
                        if (o = W(i), n = 1 === i.nodeType && (" " + o + " ").replace(pe, " ")) {
                            for (s = 0; r = e[s++];)
                                for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                            a = rt.trim(n), o !== a && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : rt.isFunction(t) ? this.each(function(i) {
                    rt(this).toggleClass(t.call(this, i, W(this), e), e)
                }) : this.each(function() {
                    var e, n, o, r;
                    if ("string" === i)
                        for (n = 0, o = rt(this), r = t.match(xt) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = W(this), e && kt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : kt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + W(i) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var he = /\r/g,
            fe = /[\x20\t\r\n\f]+/g;
        rt.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = rt.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, rt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : rt.isArray(o) && (o = rt.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(he, "") : null == i ? "" : i)) : void 0
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t)).replace(fe, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !rt.nodeName(i.parentNode, "optgroup"))) {
                                if (e = rt(i).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, r = rt.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = rt.inArray(rt.valHooks.option.get(n), r) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), r
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function() {
            rt.valHooks[this] = {
                set: function(t, e) {
                    return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) > -1 : void 0
                }
            }, nt.checkOn || (rt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var me = /^(?:focusinfocus|focusoutblur)$/;
        rt.extend(rt.event, {
            trigger: function(e, i, n, o) {
                var r, s, a, l, c, d, u, p = [n || X],
                    h = it.call(e, "type") ? e.type : e,
                    f = it.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = n = n || X, 3 !== n.nodeType && 8 !== n.nodeType && !me.test(h + rt.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[rt.expando] ? e : new rt.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), u = rt.event.special[h] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!o && !u.noBubble && !rt.isWindow(n)) {
                        for (l = u.delegateType || h, me.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (n.ownerDocument || X) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = p[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : u.bindType || h, d = (kt.get(s, "events") || {})[e.type] && kt.get(s, "handle"), d && d.apply(s, i), d = c && s[c], d && d.apply && Ct(s) && (e.result = d.apply(s, i), e.result === !1 && e.preventDefault());
                    return e.type = h, o || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !Ct(n) || c && rt.isFunction(n[h]) && !rt.isWindow(n) && (a = n[c], a && (n[c] = null), rt.event.triggered = h, n[h](), rt.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = rt.extend(new rt.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                rt.event.trigger(n, null, e)
            }
        }), rt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    rt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? rt.event.trigger(t, e, i, !0) : void 0
            }
        }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            rt.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), nt.focusin = "onfocusin" in t, nt.focusin || rt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                rt.event.simulate(e, t.target, rt.event.fix(t))
            };
            rt.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        o = kt.access(n, e);
                    o || n.addEventListener(t, i, !0), kt.access(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        o = kt.access(n, e) - 1;
                    o ? kt.access(n, e, o) : (n.removeEventListener(t, i, !0), kt.remove(n, e))
                }
            }
        });
        var ge = t.location,
            ve = rt.now(),
            ye = /\?/;
        rt.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, rt.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
        };
        var we = /#.*$/,
            be = /([?&])_=[^&]*/,
            xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Te = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Se = /^(?:GET|HEAD)$/,
            Ce = /^\/\//,
            ke = {},
            Ee = {},
            $e = "*/".concat("*"),
            Ie = X.createElement("a");
        Ie.href = ge.href, rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ge.href,
                type: "GET",
                isLocal: Te.test(ge.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": rt.parseJSON,
                    "text xml": rt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? F(F(t, rt.ajaxSettings), e) : F(rt.ajaxSettings, t)
            },
            ajaxPrefilter: q(ke),
            ajaxTransport: q(Ee),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var c, u, y, w, x, S = i;
                    2 !== b && (b = 2, l && t.clearTimeout(l), o = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (w = B(p, T, n)), w = U(p, w, T, c), c ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (rt.lastModified[r] = x), x = T.getResponseHeader("etag"), x && (rt.etag[r] = x)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, u = w.data, y = w.error, c = !y)) : (y = S, !e && S || (S = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (i || S) + "", c ? m.resolveWith(h, [u, S, T]) : m.rejectWith(h, [T, S, y]), T.statusCode(v), v = void 0, d && f.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? u : y]), g.fireWith(h, [T, S]), d && (f.trigger("ajaxComplete", [T, p]), --rt.active || rt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var o, r, s, a, l, c, d, u, p = rt.ajaxSetup({}, i),
                    h = p.context || p,
                    f = p.context && (h.nodeType || h.jquery) ? rt(h) : rt.event,
                    m = rt.Deferred(),
                    g = rt.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    w = {},
                    b = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; e = xe.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = w[i] = w[i] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return o && o.abort(e), n(0, e), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || ge.href) + "").replace(we, "").replace(Ce, ge.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = rt.trim(p.dataType || "*").toLowerCase().match(xt) || [""], null == p.crossDomain) {
                    c = X.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = Ie.protocol + "//" + Ie.host != c.protocol + "//" + c.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = rt.param(p.data, p.traditional)), R(ke, p, i, T), 2 === b) return T;
                d = rt.event && p.global, d && 0 === rt.active++ && rt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Se.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (ye.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = be.test(r) ? r.replace(be, "$1_=" + ve++) : r + (ye.test(r) ? "&" : "?") + "_=" + ve++)), p.ifModified && (rt.lastModified[r] && T.setRequestHeader("If-Modified-Since", rt.lastModified[r]), rt.etag[r] && T.setRequestHeader("If-None-Match", rt.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]);
                for (u in p.headers) T.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === b)) return T.abort();
                x = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[u](p[u]);
                if (o = R(Ee, p, i, T)) {
                    if (T.readyState = 1, d && f.trigger("ajaxSend", [T, p]), 2 === b) return T;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, o.send(y, n)
                    } catch (t) {
                        if (!(2 > b)) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, i) {
                return rt.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function(t, e) {
            rt[e] = function(t, i, n, o) {
                return rt.isFunction(i) && (o = o || n, n = i, i = void 0), rt.ajax(rt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, rt.isPlainObject(t) && t))
            }
        }), rt._evalUrl = function(t) {
            return rt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, rt.fn.extend({
            wrapAll: function(t) {
                var e;
                return rt.isFunction(t) ? this.each(function(e) {
                    rt(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = rt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return rt.isFunction(t) ? this.each(function(e) {
                    rt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = rt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = rt.isFunction(t);
                return this.each(function(i) {
                    rt(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), rt.expr.filters.hidden = function(t) {
            return !rt.expr.filters.visible(t)
        }, rt.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Ae = /%20/g,
            Oe = /\[\]$/,
            Le = /\r?\n/g,
            De = /^(?:submit|button|image|reset|file)$/i,
            je = /^(?:input|select|textarea|keygen)/i;
        rt.param = function(t, e) {
            var i, n = [],
                o = function(t, e) {
                    e = rt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (i in t) Q(i, t[i], e, o);
            return n.join("&").replace(Ae, "+")
        }, rt.fn.extend({
            serialize: function() {
                return rt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && je.test(this.nodeName) && !De.test(t) && (this.checked || !jt.test(t))
                }).map(function(t, e) {
                    var i = rt(this).val();
                    return null == i ? null : rt.isArray(i) ? rt.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Le, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Le, "\r\n")
                    }
                }).get()
            }
        }), rt.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var _e = {
                0: 200,
                1223: 204
            },
            Pe = rt.ajaxSettings.xhr();
        nt.cors = !!Pe && "withCredentials" in Pe, nt.ajax = Pe = !!Pe, rt.ajaxTransport(function(e) {
            var i, n;
            return nt.cors || Pe && !e.crossDomain ? {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(_e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), rt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), rt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, o) {
                        e = rt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), X.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var ze = [],
            Ne = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ze.pop() || rt.expando + "_" + ve++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function(e, i, n) {
            var o, r, s, a = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + o) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || rt.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === r ? rt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, ze.push(o)), s && rt.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), rt.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || X;
            var n = ft.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : (n = p([t], e, o), o && o.length && rt(o).remove(), rt.merge([], n.childNodes))
        };
        var He = rt.fn.load;
        rt.fn.load = function(t, e, i) {
            if ("string" != typeof t && He) return He.apply(this, arguments);
            var n, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (n = rt.trim(t.slice(a)), t = t.slice(0, a)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && rt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                s.each(function() {
                    i.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            rt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), rt.expr.filters.animated = function(t) {
            return rt.grep(rt.timers, function(e) {
                return t === e.elem
            }).length
        }, rt.offset = {
            setOffset: function(t, e, i) {
                var n, o, r, s, a, l, c, d = rt.css(t, "position"),
                    u = rt(t),
                    p = {};
                "static" === d && (t.style.position = "relative"), a = u.offset(), r = rt.css(t, "top"), l = rt.css(t, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (n = u.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, i, rt.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : u.css(p)
            }
        }, rt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = n && n.ownerDocument;
                return r ? (e = r.documentElement, rt.contains(e, n) ? (o = n.getBoundingClientRect(), i = Y(r), {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - rt.css(i, "marginTop", !0),
                        left: e.left - n.left - rt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === rt.css(t, "position");) t = t.offsetParent;
                    return t || Zt
                })
            }
        }), rt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            rt.fn[t] = function(n) {
                return St(this, function(t, n, o) {
                    var r = Y(t);
                    return void 0 === o ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
                }, t, n, arguments.length)
            }
        }), rt.each(["top", "left"], function(t, e) {
            rt.cssHooks[e] = $(nt.pixelPosition, function(t, i) {
                return i ? (i = E(t, e), Xt.test(i) ? rt(t).position()[e] + "px" : i) : void 0
            })
        }), rt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            rt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                rt.fn[n] = function(n, o) {
                    var r = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || o === !0 ? "margin" : "border");
                    return St(this, function(e, i, n) {
                        var o;
                        return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? rt.css(e, i, s) : rt.style(e, i, n, s)
                    }, e, r ? n : void 0, r, null)
                }
            })
        }), rt.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return rt
        });
        var Me = t.jQuery,
            We = t.$;
        return rt.noConflict = function(e) {
            return t.$ === rt && (t.$ = We), e && t.jQuery === rt && (t.jQuery = Me), rt
        }, e || (t.jQuery = t.$ = rt), rt
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var o = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.button"),
                r = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
            n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.carousel"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (i + o) % this.$items.length;
        return this.$items.eq(r)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var o = this.$element.find(".item.active"),
            r = n || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(r)]);
                u && u.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var o = function(i) {
        var n, o = t(this),
            r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight,
                    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        i.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(r).each(function() {
            var n = t(this),
                o = e(n),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.6", s.prototype.toggle = function(n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (i(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n),
                    s = o.hasClass("open");
                if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(r).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(i.target);
                    38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            o = n.attr("href"),
            r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), n.data());
        n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, r)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                u = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (c) {
                var h = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && d.bottom + p > f.bottom ? "top" : "top" == a && d.top - p < f.top ? "bottom" : "right" == a && d.right + u > f.width ? "left" : "left" == a && d.left - u < f.left ? "right" : a, r.removeClass(h).addClass(a)
            }
            var m = this.getCalculatedOffset(a, d, u, p);
            this.applyPlacement(m, a);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            r = n[0].offsetHeight,
            s = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != r && (e.top = e.top + r - c);
        var d = this.getViewportAdjustedDelta(i, e, l, c);
        d.left ? e.left += d.left : e.top += d.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * d.left - o + l : 2 * d.top - r + c,
            h = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][h], u)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, a, r)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + n;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                d = e.left + r + i;
            c < s.left ? o.left = s.left - c : d > s.right && (o.left = s.left + s.width - d)
        }
        return o
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, r)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                r = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = n.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var o = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.affix"),
                r = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            c = a ? s : e;
        return null != i && o <= i ? "top" : null != n && l + c >= t - n && "bottom"
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                r = n.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if ("object" === i)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventEmitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(this, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t) {
            return "[object Array]" === p.call(t)
        }

        function r(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, h[t] = this
        }
        var c = t.jQuery,
            d = t.console,
            u = void 0 !== d,
            p = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                        var a = o[r];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function() {
            function t(t, o) {
                return e.options.debug && u && d.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var o = 0; n > o; o++) {
                var r = this.images[o];
                r.on("confirm", t), r.check()
            }
        }, s.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, c && (c.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(c(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = h[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var h = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, o, r, s, a = this;
            if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = t * s + (e * a.options.slidesPerRow + i);
                            r.get(d) && c.appendChild(r.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                o = null;
                for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, o, r, s = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = i;
                        break
                    }
                    i = e[o]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, o = this,
                r = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                o = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n, o = this;
            return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
                if (r.offsetLeft - n + t(r).outerWidth() / 2 > o.swipeLeft * -1) return i = r, !1
            }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                    }, n.src = i
                })
            }
            var i, n, o, r, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), i = s.$slider.find(".slick-slide").slice(o, r), e(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, o, r = this,
                s = t("img[data-lazy]", r.$slider);
            s.length ? (i = s.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
            }, o.onerror = function() {
                e < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
            }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
        }, e.prototype.refresh = function(e) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), e || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, o = this,
                r = o.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in r)
                    if (n = o.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                        for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                    }
                o.breakpoints.sort(function(t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                o = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, o) {
                e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, o, r, s = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[n] = o;
            else if ("multiple" === r) t.each(n, function(t, e) {
                s.options[t] = e
            });
            else if ("responsive" === r)
                for (i in o)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(o[i])
                    }
            a && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0),
                t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, n, o, r = this;
            i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, o, r, s, a, l = null,
                c = this;
            if (e = e || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) return e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, o, r, s = this;
            return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + n * o : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = n.length;
            for (t = 0; t < s; t++)
                if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), "undefined" != typeof i) return i;
            return n
        }
    }),
    function() {
        var t, e, i, n, o, r = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, i, n) {
                var o;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, o, r;
                for (r = this.keys, e = n = 0, o = r.length; o > n; e = ++n)
                    if (i = r[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, o, r, s;
                for (s = this.keys, i = o = 0, r = s.length; r > o; i = ++o)
                    if (n = s[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), n = this.getComputedStyle || function(t, e) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(t) {
                null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var e, i, n, o;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, n, o;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.all = function() {
                        var t, i, n, o;
                        for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, i = 0, n = o.length; n > i; i++) e = o[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, n, o, r, s;
                        for (s = [], i = 0, n = e.length; n > i; i++) r = e[i], s.push(function() {
                            var t, e, i, n;
                            for (i = r.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push(this.doSync(o));
                            return n
                        }.call(t));
                        return s
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function(e) {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function(t) {
                var e, i, n, o, r;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], i = 0, n = o.length; n > i; i++) e = o[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                    return r
                }
            }, o.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, o.prototype.applyStyle = function(t, e) {
                var i, n, o;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                    return function() {
                        return r.customStyle(t, e, n, i, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), o.prototype.resetStyle = function() {
                var t, e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
            }, o.prototype.customStyle = function(t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
                var i, n, o, r;
                n = [];
                for (i in e) o = e[i], t["" + i] = o, n.push(function() {
                    var e, n, s, a;
                    for (s = this.vendors, a = [], e = 0, n = s.length; n > e; e++) r = s[e], a.push(t["" + r + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                    return a
                }.call(this));
                return n
            }, o.prototype.vendorCSS = function(t, e) {
                var i, o, r, s, a, l;
                for (a = n(t), s = a.getPropertyCSSValue(e), r = this.vendors, i = 0, o = r.length; o > i; i++) l = r[i], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
                return s
            }, o.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = n(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, o.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, o.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, o.prototype.isVisible = function(t) {
                var e, i, n, o, r;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= r
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        function e(t, e) {
            return t.toFixed(e.decimals)
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
        };
        i.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: e,
            onUpdate: null,
            onComplete: null
        }, i.prototype.init = function() {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, i.prototype.dataOptions = function() {
            var t = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                e = Object.keys(t);
            for (var i in e) {
                var n = e[i];
                "undefined" == typeof t[n] && delete t[n]
            }
            return t
        }, i.prototype.update = function() {
            this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
        }, i.prototype.render = function() {
            var t = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(t)
        }, i.prototype.restart = function() {
            this.stop(), this.init(), this.start()
        }, i.prototype.start = function() {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, i.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        }, i.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        }, t.fn.countTo = function(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("countTo"),
                    r = !o || "object" == typeof e,
                    s = "object" == typeof e ? e : {},
                    a = "string" == typeof e ? e : "start";
                r && (o && o.stop(), n.data("countTo", o = new i(this, s))), o[a].call(o)
            })
        }
    }), ! function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, r, a) {
            function l(t, e, n) {
                var o, r = "$()." + i + '("' + e + '")';
                return t.each(function(t, l) {
                    var c = a.data(l, i);
                    if (!c) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                    var d = c[e];
                    if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                    var u = d.apply(c, n);
                    o = void 0 === o ? u : o
                }), void 0 !== o ? o : t
            }

            function c(t, e) {
                t.each(function(t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
                })
            }
            a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, n(a))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            r = t.console,
            s = "undefined" == typeof r ? function() {} : function(t) {
                r.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                    var s = r && r[o];
                    s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; c > e; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
            }
        }

        function r(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == r.boxSizing, u = 0; c > u; u++) {
                    var p = l[u],
                        h = r[p],
                        f = parseFloat(h);
                    a[p] = isNaN(f) ? 0 : f
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth,
                    b = a.borderTopWidth + a.borderBottomWidth,
                    x = d && s,
                    T = t(r.width);
                T !== !1 && (a.width = T + (x ? 0 : m + w));
                var S = t(r.height);
                return S !== !1 && (a.height = S + (x ? 0 : g + b)), a.innerWidth = a.width - (m + w), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            d = !1;
        return r
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function() {
                    n.apply(r, e), delete r[o]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var r = i.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + r),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    d = s + "-options",
                    u = t.jQuery;
                c.forEach(function(t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r)
                    } catch (e) {
                        return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, i);
                    u && u.data(t, o, a)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = document.documentElement.style,
            s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s],
            c = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            },
            d = n.prototype = Object.create(t.prototype);
        d.constructor = n, d._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, d.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, d.getSize = function() {
            this.size = e(this.element)
        }, d.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = c[i] || i;
                e[n] = t[i]
            }
        }, d.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                r = this.layout.size,
                s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
        }, d.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                r = i ? "left" : "right",
                s = i ? "right" : "left",
                a = this.position.x + t[o];
            e[r] = this.getXValue(a), e[s] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                c = n ? "top" : "bottom",
                d = n ? "bottom" : "top",
                u = this.position.y + t[l];
            e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, d.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, d.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, d._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                c = {};
            c.transform = this.getTranslate(a, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, d.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, d.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, d._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, d.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var u = "opacity," + o(a);
        d.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: u,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(l, this, !1)
            }
        }, d.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, d.onotransitionend = function(t) {
            this.ontransitionend(t);
        };
        var p = {
            "-webkit-transform": "transform"
        };
        d.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = p[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, d.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, d._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function() {
            this.css(h)
        }, d.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, d.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, d.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, d.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, d.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, d.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, d.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, d.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, d.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, o) {
        "use strict";

        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++u;
            this.element.outlayerGUID = o, p[o] = this, this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = f[n] || 1;
            return i * o
        }
        var l = t.console,
            c = t.jQuery,
            d = function() {},
            u = 0,
            p = {};
        r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var h = r.prototype;
        n.extend(h, e.prototype), h.option = function(t) {
            n.extend(this.options, t)
        }, h._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, h._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, h.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, h._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var r = e[o],
                    s = new i(r, this);
                n.push(s)
            }
            return n
        }, h._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, h.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, h.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function() {
            this.getSize()
        }, h.getSize = function() {
            this.size = i(this.element)
        }, h._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, h.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, h._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, h._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, h._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, h._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, h.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, h._positionItem = function(t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
        }, h._postLayout = function() {
            this.resizeContainer()
        }, h.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, h._getContainerSize = d, h._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function(t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                s++, s == r && i()
            }
            var o = this,
                r = e.length;
            if (!e || !r) return void i();
            var s = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        }, h.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var o = c.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, h.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, h.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                n.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, h._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, h._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, h._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, h._manageStamp = d, h._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                r = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return r
        }, h.handleEvent = n.handleEvent, h.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, h.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, h.onresize = function() {
            this.resize()
        }, n.debounceMethod(r, "onresize", 100), h.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, h.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, h.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, h.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, h.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, h.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, h.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, h.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), n.removeFrom(this.items, t)
            }, this)
        }, h.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete p[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, r.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, r.create = function(t, e) {
            var i = s(r);
            return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
        };
        var f = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            n = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var o = i.destroy;
        return i.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var n = i.prototype,
            o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function(t) {
            n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e]
            }
        }, n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / n,
                s = n - o % n,
                a = s && 1 > s ? "round" : "floor";
            r = Math[a](r), this.cols = Math.max(r, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                    x: this.columnWidth * s,
                    y: r
                }, l = r + t.size.outerHeight, c = this.cols + 1 - o.length, d = 0; c > d; d++) this.colYs[s + d] = l;
            return a
        }, i.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                r = o ? n.left : n.right,
                s = r + i.outerWidth,
                a = Math.floor(r / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var c = this._getOption("originTop"), d = (c ? n.top : n.bottom) + i.outerHeight, u = a; l >= u; u++) this.colYs[u] = Math.max(d, this.colYs[u])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var r in e.prototype) o[r] || (n[r] = e.prototype[r]);
        var s = n.measureColumns;
        n.measureColumns = function() {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = n._getOption;
        return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, o, r, s) {
        function a(t, e) {
            return function(i, n) {
                for (var o = 0; o < t.length; o++) {
                    var r = t[o],
                        s = i.sortData[r],
                        a = n.sortData[r];
                    if (s > a || a > s) {
                        var l = void 0 !== e[r] ? e[r] : e,
                            c = l ? 1 : -1;
                        return (s > a ? 1 : -1) * c
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            c = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = r, d.LayoutMode = s;
        var u = d.prototype;
        u._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, u.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, u._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, u._initLayoutMode = function(t) {
            var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, u.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, u._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, u.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, u._init = u.arrange, u._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, u._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, u._bindArrangeComplete = function() {
            function t() {
                e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, i, n, o = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, u._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var l = r(a);
                    l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        }, u._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t)
            }
        }, u.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, u._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = p(i)
            }
        }, u._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var p = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = c(t).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    r = o && o[1],
                    s = e(r, n),
                    a = d.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }

            function e(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, u._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, u._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, u._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, u._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, u._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, u._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, u.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, u.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, u.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, u._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, u.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                var r = this._filter(e).matches;
                for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var h = u.remove;
        return u.remove = function(t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            h.call(this, t);
            for (var i = e && e.length, n = 0; i && i > n; n++) {
                var r = e[n];
                o.removeFrom(this.filteredItems, r)
            }
        }, u.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, u._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i, n
        }, u.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, d
    }), ! function() {
        "use strict";

        function t(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
        }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, t.prototype.disable = function() {
            return this.enabled = !1, this
        }, t.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, t.prototype.next = function() {
            return this.group.next(this)
        }, t.prototype.previous = function() {
            return this.group.previous(this)
        }, t.invokeAll = function(t) {
            var e = [];
            for (var n in i) e.push(i[n]);
            for (var o = 0, r = e.length; r > o; o++) e[o][t]()
        }, t.destroyAll = function() {
            t.invokeAll("destroy")
        }, t.disableAll = function() {
            t.invokeAll("disable")
        }, t.enableAll = function() {
            t.Context.refreshAll();
            for (var e in i) i[e].enabled = !0;
            return this
        }, t.refreshAll = function() {
            t.Context.refreshAll()
        }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            n = {},
            o = window.Waypoint,
            r = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() {
            o.Context.refreshAll()
        }, e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var n = e[i],
                    o = n.newScroll > n.oldScroll,
                    r = o ? n.forward : n.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s];
                    if (null !== a.triggerPoint) {
                        var l = n.oldScroll < a.triggerPoint,
                            c = n.newScroll >= a.triggerPoint,
                            d = l && c,
                            u = !l && !c;
                        (d || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                    }
                }
            }
            for (var p in t) t[p].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l, c, d, u, p, h = this.waypoints[r][a],
                        f = h.options.offset,
                        m = h.triggerPoint,
                        g = 0,
                        v = null == m;
                    h.element !== h.element.window && (g = h.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, h.triggerPoint = Math.floor(g + l - f), c = m < s.oldScroll, d = h.triggerPoint >= s.oldScroll, u = c && d, p = !c && !d, !v && u ? (h.queueTrigger(s.backward), n[h.group.id] = h.group) : !v && p ? (h.queueTrigger(s.forward), n[h.group.id] = h.group) : v && s.oldScroll >= h.triggerPoint && (h.queueTrigger(s.forward), n[h.group.id] = h.group)
                }
            }
            return o.requestAnimationFrame(function() {
                for (var t in n) n[t].flushTriggers()
            }), this
        }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, e.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            r && r(), e.refreshAll()
        }, o.requestAnimationFrame = function(e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e)
        }, o.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function i(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            o = window.Waypoint;
        i.prototype.add = function(t) {
            this.waypoints.push(t)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    o = "up" === i || "left" === i;
                n.sort(o ? e : t);
                for (var r = 0, s = n.length; s > r; r += 1) {
                    var a = n[r];
                    (a.options.continuous || r === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = o.Adapter.inArray(e, this.waypoints),
                n = i === this.waypoints.length - 1;
            return n ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = o.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, i.prototype.remove = function(t) {
            var e = o.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(t) {
            return n[t.axis][t.name] || new i(t)
        }, o.Group = i
    }(),
    function() {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
            t.prototype[i] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
            t[n] = e[n]
        }), i.adapters.push({
            name: "jquery",
            Adapter: t
        }), i.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    n = arguments[0];
                return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
                    var o = t.extend({}, n, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
                }), i
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }(), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(t) {
        var e, i, n, o, r, s, a = "Close",
            l = "BeforeClose",
            c = "AfterClose",
            d = "BeforeAppend",
            u = "MarkupParse",
            p = "Open",
            h = "Change",
            f = "mfp",
            m = "." + f,
            g = "mfp-ready",
            v = "mfp-removing",
            y = "mfp-prevent-close",
            w = function() {},
            b = !!window.jQuery,
            x = t(window),
            T = function(t, i) {
                e.ev.on(f + t + m, i)
            },
            S = function(e, i, n, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, n && (r.innerHTML = n), o ? i && i.appendChild(r) : (r = t(r), i && r.appendTo(i)), r
            },
            C = function(i, n) {
                e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            k = function(i) {
                return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn
            },
            E = function() {
                t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e)
            },
            $ = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        w.prototype = {
            constructor: w,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = $(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var o;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var s, a = i.items;
                    for (o = 0; o < a.length; o++)
                        if (s = a[o], s.parsed && (s = s.el[0]), s === i.el[0]) {
                            e.index = o;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = S("bg").on("click" + m, function() {
                    e.close()
                }), e.wrap = S("wrap").attr("tabindex", -1).on("click" + m, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = S("container", e.wrap)), e.contentContainer = S("content"), e.st.preloader && (e.preloader = S("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var c = l[o];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (T(u, function(t, e, i, n) {
                    i.close_replaceWith = k(n.type)
                }), r += " mfp-close-btn-in") : e.wrap.append(k())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: x.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && n.on("keyup" + m, function(t) {
                    27 === t.keyCode && e.close()
                }), x.on("resize" + m, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var d = e.wH = x.height(),
                    h = {};
                if (e.fixedContentPos && e._hasScrollBar(d)) {
                    var f = e._getScrollbarSize();
                    f && (h.marginRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : h.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(h), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(d), C(p), i
            },
            close: function() {
                e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                C(a);
                var i = v + " " + g + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
                }
                n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(c)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var r = !!e.st[n] && e.st[n].markup;
                    C("FirstMarkupParse", r), r ? e.currTemplate[n] = t(r) : e.currTemplate[n] = !0
                }
                o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
                var s = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(s, n), i.preloaded = !0, C(h, i), o = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(k()) : e.content = t : e.content = "", C(d), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, o = e.items[i];
                if (o.tagName ? o = {
                        el: t(o)
                    } : (n = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (o.el.hasClass("mfp-" + r[s])) {
                            n = r[s];
                            break
                        }
                    o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, C("ElementParse", o), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                var r = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
                if (r || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (x.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var o = {
                        status: t,
                        text: n
                    };
                    C("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(y)) {
                    var n = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (o && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || x.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, i, n) {
                var o;
                n.data && (i = t.extend(n.data, i)), C(u, [e, i, n]), t.each(i, function(i, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (o = i.split("_"), o.length > 1) {
                        var r = e.find(m + "-" + o[0]);
                        if (r.length > 0) {
                            var s = o[1];
                            "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(t("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(o[1], n)
                        }
                    } else e.find(m + "-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: w.prototype,
            modules: [],
            open: function(e, i) {
                return E(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(i) {
            E();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, r = b ? n.data("magnificPopup") : n[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = n, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({
                        mfpEl: o
                    }, n, r)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var I, A, O, L = "inline",
            D = function() {
                O && (A.after(O.addClass(I)).detach(), O = null)
            };
        t.magnificPopup.registerModule(L, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(L), T(a + "." + L, function() {
                        D()
                    })
                },
                getInline: function(i, n) {
                    if (D(), i.src) {
                        var o = e.st.inline,
                            r = t(i.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (A || (I = o.hiddenClass, A = S(I), I = "mfp-" + I), O = r.after(A).detach().removeClass(I)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                        return i.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var j, _ = "ajax",
            P = function() {
                j && t(document.body).removeClass(j)
            },
            z = function() {
                P(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(_, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(_), j = e.st.ajax.cursor, T(a + "." + _, z), T("BeforeChange." + _, z)
                },
                getAjax: function(i) {
                    j && t(document.body).addClass(j), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, o, r) {
                            var s = {
                                data: n,
                                xhr: r
                            };
                            C("ParseAjax", s), e.appendContent(t(s.data), _), i.finished = !0, P(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(g)
                            }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                        },
                        error: function() {
                            P(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var N, H = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), T(p + n, function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), T(a + n, function() {
                        i.cursor && t(document.body).removeClass(i.cursor), x.off("resize" + m)
                    }), T("Resize" + n, e.resizeImage), e.isLowIE && T("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        o = function(r) {
                            N && clearInterval(N), N = setInterval(function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(N), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                            }, r)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        r = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s()))
                        },
                        s = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", r).on("error.mfploader", s), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: H(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var M, W = function() {
            return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var o, r, s = i.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n, e.css(o), e
                            },
                            d = function() {
                                e.content.css("visibility", "visible")
                            };
                        T("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void d();
                                r = c(t), r.css(e._getOffset()), e.wrap.append(r), o = setTimeout(function() {
                                    r.css(e._getOffset(!0)), o = setTimeout(function() {
                                        d(), setTimeout(function() {
                                            r.remove(), t = r = null, C("ZoomAnimationEnded")
                                        }, 16)
                                    }, s)
                                }, 16)
                            }
                        }), T(l + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.st.removalDelay = s, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    r = c(t)
                                }
                                r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    r.css(e._getOffset())
                                }, 16)
                            }
                        }), T(a + n, function() {
                            e._allowZoom() && (d(), r && r.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var o = n.offset(),
                        r = parseInt(n.css("padding-top"), 10),
                        s = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var a = {
                        width: n.width(),
                        height: (b ? n.innerHeight() : n[0].offsetHeight) - s - r
                    };
                    return W() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var q = "iframe",
            R = "//about:blank",
            F = function(t) {
                if (e.currTemplate[q]) {
                    var i = e.currTemplate[q].find("iframe");
                    i.length && (t || (i[0].src = R), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(q, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(q), T("BeforeChange", function(t, e, i) {
                        e !== i && (e === q ? F() : i === q && F(!0))
                    }), T(a + "." + q, function() {
                        F()
                    })
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        r = e.st.iframe;
                    t.each(r.patterns, function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(n, s, i), e.updateStatus("ready"), n
                }
            }
        });
        var B = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t
            },
            U = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        o = ".mfp-gallery";
                    return e.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", T(p + o, function() {
                        i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), n.on("keydown" + o, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), T("UpdateStatus" + o, function(t, i) {
                        i.text && (i.text = U(i.text, e.currItem.index, e.items.length))
                    }), T(u + o, function(t, n, o, r) {
                        var s = e.items.length;
                        o.counter = s > 1 ? U(i.tCounter, r.index, s) : ""
                    }), T("BuildControls" + o, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
                            o.click(function() {
                                e.prev()
                            }), r.click(function() {
                                e.next()
                            }), e.container.append(o.add(r))
                        }
                    }), T(h + o, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void T(a + o, function() {
                        n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
                    }))
                },
                next: function() {
                    e.direction = !0, e.index = B(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = B(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        o = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = B(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var Q = "retina";
        t.magnificPopup.registerModule(Q, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        i = isNaN(i) ? i() : i, i > 1 && (T("ImageHasSize." + Q, function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), T("ElementParse." + Q, function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), E()
    }),
    function(t) {
        "use strict";
        var e, i = {
            dom: {
                _window: t(window),
                pageParent: t("html, body"),
                gridPortfolio: t("#grid-portfolio"),
                portfolioPop: t(".gallery-popup"),
                companyImageSlider: t(".company-image-slider"),
                counterSection: t(".counter-section", "#wrapper"),
                countNumber: t(".count-num", "#wrapper"),
                imageSlider: t(".image-slider"),
                clientSlider: t(".client-slider")
            },
            vars: {
                isDevice: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isMobileView: t(window).width() <= 530,
                isTabletView: t(window).width() <= 768
            },
            init: function() {
                e = this, e.wowInit(), e.dom.pageParent.imagesLoaded(function() {
                    e.magnifyPopup().portfolioGallery().wayPoint().slickSlider()
                })
            },
            countTo: function() {
                return e.dom.countNumber.countTo({
                    speed: 2e3,
                    refreshInterval: 50
                }), e
            },
            wowInit: function() {
                var t = new WOW({
                    boxClass: "animate",
                    animateClass: "animated",
                    offset: 100,
                    mobile: !1,
                    live: !1
                });
                return t.init(), e
            },
            wayPoint: function() {
                return e.dom.counterSection.waypoint({
                    handler: function(t) {
                        e.countTo(), this.destroy()
                    },
                    offset: "bottom-in-view"
                }), e
            },
            magnifyPopup: function() {
                return e.dom.portfolioPop.magnificPopup({
                    delegate: "a.zoom-img",
                    type: "image",
                    gallery: {
                        enabled: !0
                    }
                }), e
            },
            portfolioGallery: function() {
                var i = t(".filter-list li"),
                    n = e.dom.gridPortfolio.isotope({
                        itemSelector: ".col-md-4",
                        percentPosition: !0,
                        masonry: {
                            columnWidth: ".col-md-4"
                        }
                    });
                return i.on("click", function() {
                    i.removeClass("active-filter"), t(this).addClass("active-filter");
                    var e = t(this).attr("data-filter");
                    n.isotope({
                        filter: e
                    })
                }), e
            },
            slickSlider: function() {
                return e.dom.companyImageSlider.slick({
                    dots: !0,
                    infinite: !0,
                    speed: 500,
                    fade: !0,
                    autoplay: !0,
                    cssEase: "linear"
                }), e.dom.imageSlider.slick({
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !0,
                            dots: !0
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                }), e.dom.clientSlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 2e3
                }), e
            }
        };
        t(document).ready(function() {
            t(window).on("scroll", function() {
                t(window).scrollTop() > 50 ? t(".navbar-default").addClass("active") : t(".navbar-default").removeClass("active")
            }), i.init()
        })
    }(jQuery);