!function a(o, s, l) {
    function u(t, e) {
        if (!s[t]) {
            if (!o[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var i = s[t] = {exports: {}};
            o[t][0].call(i.exports, function (e) {
                return u(o[t][1][e] || e)
            }, i, i.exports, a, o, s, l)
        }
        return s[t].exports
    }

    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);
    return u
}({
    1: [function (e, n, t) {
        !function (e, t) {
            "use strict";
            "object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function (T, e) {
            "use strict";
            var t = [], q = T.document, r = Object.getPrototypeOf, s = t.slice, m = t.concat, l = t.push, i = t.indexOf,
                n = {}, a = n.toString, g = n.hasOwnProperty, o = g.toString, u = o.call(Object), v = {},
                y = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                }, b = function (e) {
                    return null != e && e === e.window
                }, d = {type: !0, src: !0, noModule: !0};

            function x(e, t, n) {
                var r, i = (t = t || q).createElement("script");
                if (i.text = e, n) for (r in d) n[r] && (i[r] = n[r]);
                t.head.appendChild(i).parentNode.removeChild(i)
            }

            function w(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e
            }

            var c = "3.3.1", A = function (e, t) {
                return new A.fn.init(e, t)
            }, h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function f(e) {
                var t = !!e && "length" in e && e.length, n = w(e);
                return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }

            A.fn = A.prototype = {
                jquery: c, constructor: A, length: 0, toArray: function () {
                    return s.call(this)
                }, get: function (e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                }, pushStack: function (e) {
                    var t = A.merge(this.constructor(), e);
                    return t.prevObject = this, t
                }, each: function (e) {
                    return A.each(this, e)
                }, map: function (n) {
                    return this.pushStack(A.map(this, function (e, t) {
                        return n.call(e, t, e)
                    }))
                }, slice: function () {
                    return this.pushStack(s.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: l, sort: t.sort, splice: t.splice
            }, A.extend = A.fn.extend = function () {
                var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || y(o) || (o = {}), s === l && (o = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = o[t], o !== (r = e[t]) && (u && r && (A.isPlainObject(r) || (i = Array.isArray(r))) ? (a = i ? (i = !1, n && Array.isArray(n) ? n : []) : n && A.isPlainObject(n) ? n : {}, o[t] = A.extend(u, a, r)) : void 0 !== r && (o[t] = r));
                return o
            }, A.extend({
                expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== a.call(e)) && (!(t = r(e)) || "function" == typeof (n = g.call(t, "constructor") && t.constructor) && o.call(n) === u)
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, globalEval: function (e) {
                    x(e)
                }, each: function (e, t) {
                    var n, r = 0;
                    if (f(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(h, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (f(Object(e)) ? A.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : i.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                }, grep: function (e, t, n) {
                    for (var r = [], i = 0, a = e.length, o = !n; i < a; i++) !t(e[i], i) !== o && r.push(e[i]);
                    return r
                }, map: function (e, t, n) {
                    var r, i, a = 0, o = [];
                    if (f(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && o.push(i); else for (a in e) null != (i = t(e[a], a, n)) && o.push(i);
                    return m.apply([], o)
                }, guid: 1, support: v
            }), "function" == typeof Symbol && (A.fn[Symbol.iterator] = t[Symbol.iterator]), A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase()
            });
            var p = function (n) {
                var e, f, x, a, i, p, c, m, w, l, u, C, T, o, q, g, s, d, v, A = "sizzle" + 1 * new Date,
                    y = n.document, E = 0, r = 0, h = oe(), b = oe(), k = oe(), S = function (e, t) {
                        return e === t && (u = !0), 0
                    }, D = {}.hasOwnProperty, t = [], F = t.pop, L = t.push, N = t.push, P = t.slice, j = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    I = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    $ = "\\[" + I + "*(" + z + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + I + "*\\]",
                    _ = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                    R = new RegExp(I + "+", "g"),
                    O = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                    H = new RegExp("^" + I + "*," + I + "*"), B = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                    W = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), Z = new RegExp(_),
                    U = new RegExp("^" + z + "$"), V = {
                        ID: new RegExp("^#(" + z + ")"),
                        CLASS: new RegExp("^\\.(" + z + ")"),
                        TAG: new RegExp("^(" + z + "|[*])"),
                        ATTR: new RegExp("^" + $),
                        PSEUDO: new RegExp("^" + _),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                    }, Y = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
                    X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/,
                    Q = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), ee = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, re = function () {
                        C()
                    }, ie = ye(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    N.apply(t = P.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
                } catch (e) {
                    N = {
                        apply: t.length ? function (e, t) {
                            L.apply(e, P.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, n, r) {
                    var i, a, o, s, l, u, d, c = t && t.ownerDocument, h = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                    if (!r && ((t ? t.ownerDocument || t : y) !== T && C(t), t = t || T, q)) {
                        if (11 !== h && (l = X.exec(e))) if (i = l[1]) {
                            if (9 === h) {
                                if (!(o = t.getElementById(i))) return n;
                                if (o.id === i) return n.push(o), n
                            } else if (c && (o = c.getElementById(i)) && v(t, o) && o.id === i) return n.push(o), n
                        } else {
                            if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(i)), n
                        }
                        if (f.qsa && !k[e + " "] && (!g || !g.test(e))) {
                            if (1 !== h) c = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = A), a = (u = p(e)).length; a--;) u[a] = "#" + s + " " + ve(u[a]);
                                d = u.join(","), c = J.test(e) && me(t.parentNode) || t
                            }
                            if (d) try {
                                return N.apply(n, c.querySelectorAll(d)), n
                            } catch (e) {
                            } finally {
                                s === A && t.removeAttribute("id")
                            }
                        }
                    }
                    return m(e.replace(O, "$1"), t, n, r)
                }

                function oe() {
                    var r = [];
                    return function e(t, n) {
                        return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
                    }
                }

                function se(e) {
                    return e[A] = !0, e
                }

                function le(e) {
                    var t = T.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ue(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
                }

                function de(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ce(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function he(n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }

                function fe(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function pe(o) {
                    return se(function (a) {
                        return a = +a, se(function (e, t) {
                            for (var n, r = o([], e.length, a), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                for (e in f = ae.support = {}, i = ae.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, C = ae.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : y;
                    return r !== T && 9 === r.nodeType && r.documentElement && (o = (T = r).documentElement, q = !i(T), y !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), f.attributes = le(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), f.getElementsByTagName = le(function (e) {
                        return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                    }), f.getElementsByClassName = G.test(T.getElementsByClassName), f.getById = le(function (e) {
                        return o.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length
                    }), f.getById ? (x.filter.ID = function (e) {
                        var t = e.replace(Q, ee);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, x.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && q) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (x.filter.ID = function (e) {
                        var n = e.replace(Q, ee);
                        return function (e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }, x.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && q) {
                            var n, r, i, a = t.getElementById(e);
                            if (a) {
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                for (i = t.getElementsByName(e), r = 0; a = i[r++];) if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                            }
                            return []
                        }
                    }), x.find.TAG = f.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, a = t.getElementsByTagName(e);
                        if ("*" !== e) return a;
                        for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, x.find.CLASS = f.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && q) return t.getElementsByClassName(e)
                    }, s = [], g = [], (f.qsa = G.test(T.querySelectorAll)) && (le(function (e) {
                        o.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + A + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || g.push(".#.+[+~]")
                    }), le(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = T.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), o.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (f.matchesSelector = G.test(d = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && le(function (e) {
                        f.disconnectedMatch = d.call(e, "*"), d.call(e, "[s!='']:x"), s.push("!=", _)
                    }), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = G.test(o.compareDocumentPosition), v = t || G.test(o.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, S = t ? function (e, t) {
                        if (e === t) return u = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === y && v(y, e) ? -1 : t === T || t.ownerDocument === y && v(y, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return u = !0, 0;
                        var n, r = 0, i = e.parentNode, a = t.parentNode, o = [e], s = [t];
                        if (!i || !a) return e === T ? -1 : t === T ? 1 : i ? -1 : a ? 1 : l ? j(l, e) - j(l, t) : 0;
                        if (i === a) return de(e, t);
                        for (n = e; n = n.parentNode;) o.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; o[r] === s[r];) r++;
                        return r ? de(o[r], s[r]) : o[r] === y ? -1 : s[r] === y ? 1 : 0
                    }), T
                }, ae.matches = function (e, t) {
                    return ae(e, null, null, t)
                }, ae.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== T && C(e), t = t.replace(W, "='$1']"), f.matchesSelector && q && !k[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
                        var n = d.call(e, t);
                        if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {
                    }
                    return 0 < ae(t, T, null, [e]).length
                }, ae.contains = function (e, t) {
                    return (e.ownerDocument || e) !== T && C(e), v(e, t)
                }, ae.attr = function (e, t) {
                    (e.ownerDocument || e) !== T && C(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        r = n && D.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                    return void 0 !== r ? r : f.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, ae.escape = function (e) {
                    return (e + "").replace(te, ne)
                }, ae.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ae.uniqueSort = function (e) {
                    var t, n = [], r = 0, i = 0;
                    if (u = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(S), u) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return l = null, e
                }, a = ae.getText = function (e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else for (; t = e[r++];) n += a(t);
                    return n
                }, (x = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Z.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(Q, ee).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = h[e + " "];
                            return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && h(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (n, r, i) {
                            return function (e) {
                                var t = ae.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(R, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (p, e, t, m, g) {
                            var v = "nth" !== p.slice(0, 3), y = "last" !== p.slice(-4), b = "of-type" === e;
                            return 1 === m && 0 === g ? function (e) {
                                return !!e.parentNode
                            } : function (e, t, n) {
                                var r, i, a, o, s, l, u = v !== y ? "nextSibling" : "previousSibling", d = e.parentNode,
                                    c = b && e.nodeName.toLowerCase(), h = !n && !b, f = !1;
                                if (d) {
                                    if (v) {
                                        for (; u;) {
                                            for (o = e; o = o[u];) if (b ? o.nodeName.toLowerCase() === c : 1 === o.nodeType) return !1;
                                            l = u = "only" === p && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? d.firstChild : d.lastChild], y && h) {
                                        for (f = (s = (r = (i = (a = (o = d)[A] || (o[A] = {}))[o.uniqueID] || (a[o.uniqueID] = {}))[p] || [])[0] === E && r[1]) && r[2], o = s && d.childNodes[s]; o = ++s && o && o[u] || (f = s = 0) || l.pop();) if (1 === o.nodeType && ++f && o === e) {
                                            i[p] = [E, s, f];
                                            break
                                        }
                                    } else if (h && (f = s = (r = (i = (a = (o = e)[A] || (o[A] = {}))[o.uniqueID] || (a[o.uniqueID] = {}))[p] || [])[0] === E && r[1]), !1 === f) for (; (o = ++s && o && o[u] || (f = s = 0) || l.pop()) && ((b ? o.nodeName.toLowerCase() !== c : 1 !== o.nodeType) || !++f || (h && ((i = (a = o[A] || (o[A] = {}))[o.uniqueID] || (a[o.uniqueID] = {}))[p] = [E, f]), o !== e));) ;
                                    return (f -= g) === m || f % m == 0 && 0 <= f / m
                                }
                            }
                        }, PSEUDO: function (e, a) {
                            var t,
                                o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return o[A] ? o(a) : 1 < o.length ? (t = [e, e, "", a], x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                                for (var n, r = o(e, a), i = r.length; i--;) e[n = j(e, r[i])] = !(t[n] = r[i])
                            }) : function (e) {
                                return o(e, 0, t)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: se(function (e) {
                            var r = [], i = [], s = c(e.replace(O, "$1"));
                            return s[A] ? se(function (e, t, n, r) {
                                for (var i, a = s(e, null, r, []), o = e.length; o--;) (i = a[o]) && (e[o] = !(t[o] = i))
                            }) : function (e, t, n) {
                                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                            }
                        }), has: se(function (t) {
                            return function (e) {
                                return 0 < ae(t, e).length
                            }
                        }), contains: se(function (t) {
                            return t = t.replace(Q, ee), function (e) {
                                return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                            }
                        }), lang: se(function (n) {
                            return U.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(Q, ee).toLowerCase(), function (e) {
                                var t;
                                do {
                                    if (t = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        }, root: function (e) {
                            return e === o
                        }, focus: function (e) {
                            return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: fe(!1), disabled: fe(!0), checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !x.pseudos.empty(e)
                        }, header: function (e) {
                            return K.test(e.nodeName)
                        }, input: function (e) {
                            return Y.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: pe(function () {
                            return [0]
                        }), last: pe(function (e, t) {
                            return [t - 1]
                        }), eq: pe(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: pe(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }), odd: pe(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }), lt: pe(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                            return e
                        }), gt: pe(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[e] = ce(e);
                for (e in {submit: !0, reset: !0}) x.pseudos[e] = he(e);

                function ge() {
                }

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ye(s, e, t) {
                    var l = e.dir, u = e.next, d = u || l, c = t && "parentNode" === d, h = r++;
                    return e.first ? function (e, t, n) {
                        for (; e = e[l];) if (1 === e.nodeType || c) return s(e, t, n);
                        return !1
                    } : function (e, t, n) {
                        var r, i, a, o = [E, h];
                        if (n) {
                            for (; e = e[l];) if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                        } else for (; e = e[l];) if (1 === e.nodeType || c) if (i = (a = e[A] || (e[A] = {}))[e.uniqueID] || (a[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e; else {
                            if ((r = i[d]) && r[0] === E && r[1] === h) return o[2] = r[2];
                            if ((i[d] = o)[2] = s(e, t, n)) return !0
                        }
                        return !1
                    }
                }

                function be(i) {
                    return 1 < i.length ? function (e, t, n) {
                        for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
                        return !0
                    } : i[0]
                }

                function xe(e, t, n, r, i) {
                    for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++) (a = e[s]) && (n && !n(a, r, i) || (o.push(a), u && t.push(s)));
                    return o
                }

                function we(f, p, m, g, v, e) {
                    return g && !g[A] && (g = we(g)), v && !v[A] && (v = we(v, e)), se(function (e, t, n, r) {
                        var i, a, o, s = [], l = [], u = t.length, d = e || function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                                return n
                            }(p || "*", n.nodeType ? [n] : n, []), c = !f || !e && p ? d : xe(d, s, f, n, r),
                            h = m ? v || (e ? f : u || g) ? [] : t : c;
                        if (m && m(c, h, n, r), g) for (i = xe(h, l), g(i, [], n, r), a = i.length; a--;) (o = i[a]) && (h[l[a]] = !(c[l[a]] = o));
                        if (e) {
                            if (v || f) {
                                if (v) {
                                    for (i = [], a = h.length; a--;) (o = h[a]) && i.push(c[a] = o);
                                    v(null, h = [], i, r)
                                }
                                for (a = h.length; a--;) (o = h[a]) && -1 < (i = v ? j(e, o) : s[a]) && (e[i] = !(t[i] = o))
                            }
                        } else h = xe(h === t ? h.splice(u, h.length) : h), v ? v(null, t, h, r) : N.apply(t, h)
                    })
                }

                function Ce(e) {
                    for (var i, t, n, r = e.length, a = x.relative[e[0].type], o = a || x.relative[" "], s = a ? 1 : 0, l = ye(function (e) {
                        return e === i
                    }, o, !0), u = ye(function (e) {
                        return -1 < j(i, e)
                    }, o, !0), d = [function (e, t, n) {
                        var r = !a && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                        return i = null, r
                    }]; s < r; s++) if (t = x.relative[e[s].type]) d = [ye(be(d), t)]; else {
                        if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
                            for (n = ++s; n < r && !x.relative[e[n].type]; n++) ;
                            return we(1 < s && be(d), 1 < s && ve(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(O, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && ve(e))
                        }
                        d.push(t)
                    }
                    return be(d)
                }

                return ge.prototype = x.filters = x.pseudos, x.setFilters = new ge, p = ae.tokenize = function (e, t) {
                    var n, r, i, a, o, s, l, u = b[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (o = e, s = [], l = x.preFilter; o;) {
                        for (a in n && !(r = H.exec(o)) || (r && (o = o.slice(r[0].length) || o), s.push(i = [])), n = !1, (r = B.exec(o)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(O, " ")
                        }), o = o.slice(n.length)), x.filter) !(r = V[a].exec(o)) || l[a] && !(r = l[a](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: a,
                            matches: r
                        }), o = o.slice(n.length));
                        if (!n) break
                    }
                    return t ? o.length : o ? ae.error(e) : b(e, s).slice(0)
                }, c = ae.compile = function (e, t) {
                    var n, g, v, y, b, r, i = [], a = [], o = k[e + " "];
                    if (!o) {
                        for (t || (t = p(e)), n = t.length; n--;) (o = Ce(t[n]))[A] ? i.push(o) : a.push(o);
                        (o = k(e, (g = a, y = 0 < (v = i).length, b = 0 < g.length, r = function (e, t, n, r, i) {
                            var a, o, s, l = 0, u = "0", d = e && [], c = [], h = w, f = e || b && x.find.TAG("*", i),
                                p = E += null == h ? 1 : Math.random() || .1, m = f.length;
                            for (i && (w = t === T || t || i); u !== m && null != (a = f[u]); u++) {
                                if (b && a) {
                                    for (o = 0, t || a.ownerDocument === T || (C(a), n = !q); s = g[o++];) if (s(a, t || T, n)) {
                                        r.push(a);
                                        break
                                    }
                                    i && (E = p)
                                }
                                y && ((a = !s && a) && l--, e && d.push(a))
                            }
                            if (l += u, y && u !== l) {
                                for (o = 0; s = v[o++];) s(d, c, t, n);
                                if (e) {
                                    if (0 < l) for (; u--;) d[u] || c[u] || (c[u] = F.call(r));
                                    c = xe(c)
                                }
                                N.apply(r, c), i && !e && 0 < c.length && 1 < l + v.length && ae.uniqueSort(r)
                            }
                            return i && (E = p, w = h), d
                        }, y ? se(r) : r))).selector = e
                    }
                    return o
                }, m = ae.select = function (e, t, n, r) {
                    var i, a, o, s, l, u = "function" == typeof e && e, d = !r && p(e = u.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (2 < (a = d[0] = d[0].slice(0)).length && "ID" === (o = a[0]).type && 9 === t.nodeType && q && x.relative[a[1].type]) {
                            if (!(t = (x.find.ID(o.matches[0].replace(Q, ee), t) || [])[0])) return n;
                            u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                        }
                        for (i = V.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !x.relative[s = o.type]);) if ((l = x.find[s]) && (r = l(o.matches[0].replace(Q, ee), J.test(a[0].type) && me(t.parentNode) || t))) {
                            if (a.splice(i, 1), !(e = r.length && ve(a))) return N.apply(n, r), n;
                            break
                        }
                    }
                    return (u || c(e, d))(r, t, !q, n, !t || J.test(e) && me(t.parentNode) || t), n
                }, f.sortStable = A.split("").sort(S).join("") === A, f.detectDuplicates = !!u, C(), f.sortDetached = le(function (e) {
                    return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
                }), le(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ue("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), f.attributes && le(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ue("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function (e) {
                    return null == e.getAttribute("disabled")
                }) || ue(M, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), ae
            }(T);
            A.find = p, A.expr = p.selectors, A.expr[":"] = A.expr.pseudos, A.uniqueSort = A.unique = p.uniqueSort, A.text = p.getText, A.isXMLDoc = p.isXML, A.contains = p.contains, A.escapeSelector = p.escape;
            var C = function (e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (i && A(e).is(n)) break;
                    r.push(e)
                }
                return r
            }, E = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }, k = A.expr.match.needsContext;

            function S(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function F(e, n, r) {
                return y(n) ? A.grep(e, function (e, t) {
                    return !!n.call(e, t, e) !== r
                }) : n.nodeType ? A.grep(e, function (e) {
                    return e === n !== r
                }) : "string" != typeof n ? A.grep(e, function (e) {
                    return -1 < i.call(n, e) !== r
                }) : A.filter(n, e, r)
            }

            A.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? A.find.matchesSelector(r, e) ? [r] : [] : A.find.matches(e, A.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, A.fn.extend({
                find: function (e) {
                    var t, n, r = this.length, i = this;
                    if ("string" != typeof e) return this.pushStack(A(e).filter(function () {
                        for (t = 0; t < r; t++) if (A.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) A.find(e, i[t], n);
                    return 1 < r ? A.uniqueSort(n) : n
                }, filter: function (e) {
                    return this.pushStack(F(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(F(this, e || [], !0))
                }, is: function (e) {
                    return !!F(this, "string" == typeof e && k.test(e) ? A(e) : e || [], !1).length
                }
            });
            var L, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (A.fn.init = function (e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(A) : A.makeArray(e, this);
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof A ? t[0] : t, A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : q, !0)), D.test(r[1]) && A.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = q.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }).prototype = A.fn, L = A(q);
            var P = /^(?:parents|prev(?:Until|All))/, j = {children: !0, contents: !0, next: !0, prev: !0};

            function M(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            A.fn.extend({
                has: function (e) {
                    var t = A(e, this), n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (A.contains(this, t[e])) return !0
                    })
                }, closest: function (e, t) {
                    var n, r = 0, i = this.length, a = [], o = "string" != typeof e && A(e);
                    if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && A.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
                    return this.pushStack(1 < a.length ? A.uniqueSort(a) : a)
                }, index: function (e) {
                    return e ? "string" == typeof e ? i.call(A(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), A.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return C(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return C(e, "parentNode", n)
                }, next: function (e) {
                    return M(e, "nextSibling")
                }, prev: function (e) {
                    return M(e, "previousSibling")
                }, nextAll: function (e) {
                    return C(e, "nextSibling")
                }, prevAll: function (e) {
                    return C(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return C(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return C(e, "previousSibling", n)
                }, siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return E(e.firstChild)
                }, contents: function (e) {
                    return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), A.merge([], e.childNodes))
                }
            }, function (r, i) {
                A.fn[r] = function (e, t) {
                    var n = A.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = A.filter(t, n)), 1 < this.length && (j[r] || A.uniqueSort(n), P.test(r) && n.reverse()), this.pushStack(n)
                }
            });
            var I = /[^\x20\t\r\n\f]+/g;

            function z(e) {
                return e
            }

            function $(e) {
                throw e
            }

            function _(e, t, n, r) {
                var i;
                try {
                    e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            A.Callbacks = function (r) {
                var e, n;
                r = "string" == typeof r ? (e = r, n = {}, A.each(e.match(I) || [], function (e, t) {
                    n[t] = !0
                }), n) : A.extend({}, r);
                var i, t, a, o, s = [], l = [], u = -1, d = function () {
                    for (o = o || r.once, a = i = !0; l.length; u = -1) for (t = l.shift(); ++u < s.length;) !1 === s[u].apply(t[0], t[1]) && r.stopOnFalse && (u = s.length, t = !1);
                    r.memory || (t = !1), i = !1, o && (s = t ? [] : "")
                }, c = {
                    add: function () {
                        return s && (t && !i && (u = s.length - 1, l.push(t)), function n(e) {
                            A.each(e, function (e, t) {
                                y(t) ? r.unique && c.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                            })
                        }(arguments), t && !i && d()), this
                    }, remove: function () {
                        return A.each(arguments, function (e, t) {
                            for (var n; -1 < (n = A.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                        }), this
                    }, has: function (e) {
                        return e ? -1 < A.inArray(e, s) : 0 < s.length
                    }, empty: function () {
                        return s && (s = []), this
                    }, disable: function () {
                        return o = l = [], s = t = "", this
                    }, disabled: function () {
                        return !s
                    }, lock: function () {
                        return o = l = [], t || i || (s = t = ""), this
                    }, locked: function () {
                        return !!o
                    }, fireWith: function (e, t) {
                        return o || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || d()), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!a
                    }
                };
                return c
            }, A.extend({
                Deferred: function (e) {
                    var a = [["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2], ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]],
                        i = "pending", o = {
                            state: function () {
                                return i
                            }, always: function () {
                                return s.done(arguments).fail(arguments), this
                            }, catch: function (e) {
                                return o.then(null, e)
                            }, pipe: function () {
                                var i = arguments;
                                return A.Deferred(function (r) {
                                    A.each(a, function (e, t) {
                                        var n = y(i[t[4]]) && i[t[4]];
                                        s[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                        })
                                    }), i = null
                                }).promise()
                            }, then: function (t, n, r) {
                                var l = 0;

                                function u(i, a, o, s) {
                                    return function () {
                                        var n = this, r = arguments, e = function () {
                                            var e, t;
                                            if (!(i < l)) {
                                                if ((e = o.apply(n, r)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, u(l, a, z, s), u(l, a, $, s)) : (l++, t.call(e, u(l, a, z, s), u(l, a, $, s), u(l, a, z, a.notifyWith))) : (o !== z && (n = void 0, r = [e]), (s || a.resolveWith)(n, r))
                                            }
                                        }, t = s ? e : function () {
                                            try {
                                                e()
                                            } catch (e) {
                                                A.Deferred.exceptionHook && A.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (o !== $ && (n = void 0, r = [e]), a.rejectWith(n, r))
                                            }
                                        };
                                        i ? t() : (A.Deferred.getStackHook && (t.stackTrace = A.Deferred.getStackHook()), T.setTimeout(t))
                                    }
                                }

                                return A.Deferred(function (e) {
                                    a[0][3].add(u(0, e, y(r) ? r : z, e.notifyWith)), a[1][3].add(u(0, e, y(t) ? t : z)), a[2][3].add(u(0, e, y(n) ? n : $))
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? A.extend(e, o) : o
                            }
                        }, s = {};
                    return A.each(a, function (e, t) {
                        var n = t[2], r = t[5];
                        o[t[1]] = n.add, r && n.add(function () {
                            i = r
                        }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                        }, s[t[0] + "With"] = n.fireWith
                    }), o.promise(s), e && e.call(s, s), s
                }, when: function (e) {
                    var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), a = A.Deferred(),
                        o = function (t) {
                            return function (e) {
                                r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(r, i)
                            }
                        };
                    if (n <= 1 && (_(e, a.done(o(t)).resolve, a.reject, !n), "pending" === a.state() || y(i[t] && i[t].then))) return a.then();
                    for (; t--;) _(i[t], o(t), a.reject);
                    return a.promise()
                }
            });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            A.Deferred.exceptionHook = function (e, t) {
                T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, A.readyException = function (e) {
                T.setTimeout(function () {
                    throw e
                })
            };
            var O = A.Deferred();

            function H() {
                q.removeEventListener("DOMContentLoaded", H), T.removeEventListener("load", H), A.ready()
            }

            A.fn.ready = function (e) {
                return O.then(e).catch(function (e) {
                    A.readyException(e)
                }), this
            }, A.extend({
                isReady: !1, readyWait: 1, ready: function (e) {
                    (!0 === e ? --A.readyWait : A.isReady) || (A.isReady = !0) !== e && 0 < --A.readyWait || O.resolveWith(q, [A])
                }
            }), A.ready.then = O.then, "complete" === q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? T.setTimeout(A.ready) : (q.addEventListener("DOMContentLoaded", H), T.addEventListener("load", H));
            var B = function (e, t, n, r, i, a, o) {
                var s = 0, l = e.length, u = null == n;
                if ("object" === w(n)) for (s in i = !0, n) B(e, t, s, n[s], !0, a, o); else if (void 0 !== r && (i = !0, y(r) || (o = !0), u && (t = o ? (t.call(e, r), null) : (u = t, function (e, t, n) {
                    return u.call(A(e), n)
                })), t)) for (; s < l; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
            }, W = /^-ms-/, Z = /-([a-z])/g;

            function U(e, t) {
                return t.toUpperCase()
            }

            function V(e) {
                return e.replace(W, "ms-").replace(Z, U)
            }

            var Y = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function K() {
                this.expando = A.expando + K.uid++
            }

            K.uid = 1, K.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                }, set: function (e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r];
                    return i
                }, get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                }, access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(I) || []).length;
                            for (; n--;) delete r[t[n]]
                        }
                        (void 0 === t || A.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                }, hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !A.isEmptyObject(t)
                }
            };
            var G = new K, X = new K, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;

            function ee(e, t, n) {
                var r, i;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                    } catch (e) {
                    }
                    X.set(e, t, n)
                } else n = void 0;
                return n
            }

            A.extend({
                hasData: function (e) {
                    return X.hasData(e) || G.hasData(e)
                }, data: function (e, t, n) {
                    return X.access(e, t, n)
                }, removeData: function (e, t) {
                    X.remove(e, t)
                }, _data: function (e, t, n) {
                    return G.access(e, t, n)
                }, _removeData: function (e, t) {
                    G.remove(e, t)
                }
            }), A.fn.extend({
                data: function (n, e) {
                    var t, r, i, a = this[0], o = a && a.attributes;
                    if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                        X.set(this, n)
                    }) : B(this, function (e) {
                        var t;
                        if (a && void 0 === e) return void 0 !== (t = X.get(a, n)) ? t : void 0 !== (t = ee(a, n)) ? t : void 0;
                        this.each(function () {
                            X.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                    if (this.length && (i = X.get(a), 1 === a.nodeType && !G.get(a, "hasDataAttrs"))) {
                        for (t = o.length; t--;) o[t] && 0 === (r = o[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(a, r, i[r]));
                        G.set(a, "hasDataAttrs", !0)
                    }
                    return i
                }, removeData: function (e) {
                    return this.each(function () {
                        X.remove(this, e)
                    })
                }
            }), A.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, A.makeArray(n)) : r.push(n)), r || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = A.queue(e, t), r = n.length, i = n.shift(), a = A._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, function () {
                        A.dequeue(e, t)
                    }, a)), !r && a && a.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return G.get(e, n) || G.access(e, n, {
                        empty: A.Callbacks("once memory").add(function () {
                            G.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), A.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? A.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = A.queue(this, t, n);
                        A._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && A.dequeue(this, t)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        A.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1, i = A.Deferred(), a = this, o = this.length, s = function () {
                        --r || i.resolveWith(a, [a])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) (n = G.get(a[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"],
                ie = function (e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && A.contains(e.ownerDocument, e) && "none" === A.css(e, "display")
                }, ae = function (e, t, n, r) {
                    var i, a, o = {};
                    for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                    for (a in i = n.apply(e, r || []), t) e.style[a] = o[a];
                    return i
                };

            function oe(e, t, n, r) {
                var i, a, o = 20, s = r ? function () {
                        return r.cur()
                    } : function () {
                        return A.css(e, t, "")
                    }, l = s(), u = n && n[3] || (A.cssNumber[t] ? "" : "px"),
                    d = (A.cssNumber[t] || "px" !== u && +l) && ne.exec(A.css(e, t));
                if (d && d[3] !== u) {
                    for (l /= 2, u = u || d[3], d = +l || 1; o--;) A.style(e, t, d + u), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0), d /= a;
                    d *= 2, A.style(e, t, d + u), n = n || []
                }
                return n && (d = +d || +l || 0, i = n[1] ? d + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = d, r.end = i)), i
            }

            var se = {};

            function le(e, t) {
                for (var n, r, i, a, o, s, l, u = [], d = 0, c = e.length; d < c; d++) (r = e[d]).style && (n = r.style.display, t ? ("none" === n && (u[d] = G.get(r, "display") || null, u[d] || (r.style.display = "")), "" === r.style.display && ie(r) && (u[d] = (l = o = a = void 0, o = (i = r).ownerDocument, s = i.nodeName, (l = se[s]) || (a = o.body.appendChild(o.createElement(s)), l = A.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), se[s] = l)))) : "none" !== n && (u[d] = "none", G.set(r, "display", n)));
                for (d = 0; d < c; d++) null != u[d] && (e[d].style.display = u[d]);
                return e
            }

            A.fn.extend({
                show: function () {
                    return le(this, !0)
                }, hide: function () {
                    return le(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        ie(this) ? A(this).show() : A(this).hide()
                    })
                }
            });
            var ue = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ce = /^$|^module$|\/(?:java|ecma)script/i, he = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function fe(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? A.merge([e], n) : n
            }

            function pe(e, t) {
                for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }

            he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
            var me, ge, ve = /<|&#?\w+;/;

            function ye(e, t, n, r, i) {
                for (var a, o, s, l, u, d, c = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) if ((a = e[f]) || 0 === a) if ("object" === w(a)) A.merge(h, a.nodeType ? [a] : a); else if (ve.test(a)) {
                    for (o = o || c.appendChild(t.createElement("div")), s = (de.exec(a) || ["", ""])[1].toLowerCase(), l = he[s] || he._default, o.innerHTML = l[1] + A.htmlPrefilter(a) + l[2], d = l[0]; d--;) o = o.lastChild;
                    A.merge(h, o.childNodes), (o = c.firstChild).textContent = ""
                } else h.push(t.createTextNode(a));
                for (c.textContent = "", f = 0; a = h[f++];) if (r && -1 < A.inArray(a, r)) i && i.push(a); else if (u = A.contains(a.ownerDocument, a), o = fe(c.appendChild(a), "script"), u && pe(o), n) for (d = 0; a = o[d++];) ce.test(a.type || "") && n.push(a);
                return c
            }

            me = q.createDocumentFragment().appendChild(q.createElement("div")), (ge = q.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), v.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
            var be = q.documentElement, xe = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function Te() {
                return !0
            }

            function qe() {
                return !1
            }

            function Ae() {
                try {
                    return q.activeElement
                } catch (e) {
                }
            }

            function Ee(e, t, n, r, i, a) {
                var o, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], a);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe; else if (!i) return e;
                return 1 === a && (o = i, (i = function (e) {
                    return A().off(e), o.apply(this, arguments)
                }).guid = o.guid || (o.guid = A.guid++)), e.each(function () {
                    A.event.add(this, t, i, r, n)
                })
            }

            A.event = {
                global: {}, add: function (t, e, n, r, i) {
                    var a, o, s, l, u, d, c, h, f, p, m, g = G.get(t);
                    if (g) for (n.handler && (n = (a = n).handler, i = a.selector), i && A.find.matchesSelector(be, i), n.guid || (n.guid = A.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
                        return void 0 !== A && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(I) || [""]).length; u--;) f = m = (s = Ce.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (c = A.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = A.event.special[f] || {}, d = A.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && A.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, a), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, o) || t.addEventListener && t.addEventListener(f, o)), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, d) : h.push(d), A.event.global[f] = !0)
                }, remove: function (e, t, n, r, i) {
                    var a, o, s, l, u, d, c, h, f, p, m, g = G.hasData(e) && G.get(e);
                    if (g && (l = g.events)) {
                        for (u = (t = (t || "").match(I) || [""]).length; u--;) if (f = m = (s = Ce.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                            for (c = A.event.special[f] || {}, h = l[f = (r ? c.delegateType : c.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) d = h[a], !i && m !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, c.remove && c.remove.call(e, d));
                            o && !h.length && (c.teardown && !1 !== c.teardown.call(e, p, g.handle) || A.removeEvent(e, f, g.handle), delete l[f])
                        } else for (f in l) A.event.remove(e, f + t[u], n, r, !0);
                        A.isEmptyObject(l) && G.remove(e, "handle events")
                    }
                }, dispatch: function (e) {
                    var t, n, r, i, a, o, s = A.event.fix(e), l = new Array(arguments.length),
                        u = (G.get(this, "events") || {})[s.type] || [], d = A.event.special[s.type] || {};
                    for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (s.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, s)) {
                        for (o = A.event.handlers.call(this, s, u), t = 0; (i = o[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (r = ((A.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, s), s.result
                    }
                }, handlers: function (e, t) {
                    var n, r, i, a, o, s = [], l = t.delegateCount, u = e.target;
                    if (l && u.nodeType && !("click" === e.type && 1 <= e.button)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[i = (r = t[n]).selector + " "] && (o[i] = r.needsContext ? -1 < A(i, this).index(u) : A.find(i, this, null, [u]).length), o[i] && a.push(r);
                        a.length && s.push({elem: u, handlers: a})
                    }
                    return u = this, l < t.length && s.push({elem: u, handlers: t.slice(l)}), s
                }, addProp: function (t, e) {
                    Object.defineProperty(A.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e) ? function () {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                        }
                    })
                }, fix: function (e) {
                    return e[A.expando] ? e : new A.Event(e)
                }, special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== Ae() && this.focus) return this.focus(), !1
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === Ae() && this.blur) return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                        }, _default: function (e) {
                            return S(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, A.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, A.Event = function (e, t) {
                if (!(this instanceof A.Event)) return new A.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && A.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[A.expando] = !0
            }, A.Event.prototype = {
                constructor: A.Event,
                isDefaultPrevented: qe,
                isPropagationStopped: qe,
                isImmediatePropagationStopped: qe,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, A.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, A.event.addProp), A.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, i) {
                A.event.special[e] = {
                    delegateType: i, bindType: i, handle: function (e) {
                        var t, n = e.relatedTarget, r = e.handleObj;
                        return n && (n === this || A.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                    }
                }
            }), A.fn.extend({
                on: function (e, t, n, r) {
                    return Ee(this, e, t, n, r)
                }, one: function (e, t, n, r) {
                    return Ee(this, e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
                        A.event.remove(this, e, n, t)
                    });
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
            });
            var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Se = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) {
                return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
            }

            function Ne(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Pe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function je(e, t) {
                var n, r, i, a, o, s, l, u;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (a = G.access(e), o = G.set(t, a), u = a.events)) for (i in delete o.handle, o.events = {}, u) for (n = 0, r = u[i].length; n < r; n++) A.event.add(t, i, u[i][n]);
                    X.hasData(e) && (s = X.access(e), l = A.extend({}, s), X.set(t, l))
                }
            }

            function Me(n, r, i, a) {
                r = m.apply([], r);
                var e, t, o, s, l, u, d = 0, c = n.length, h = c - 1, f = r[0], p = y(f);
                if (p || 1 < c && "string" == typeof f && !v.checkClone && De.test(f)) return n.each(function (e) {
                    var t = n.eq(e);
                    p && (r[0] = f.call(this, e, t.html())), Me(t, r, i, a)
                });
                if (c && (t = (e = ye(r, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
                    for (s = (o = A.map(fe(e, "script"), Ne)).length; d < c; d++) l = e, d !== h && (l = A.clone(l, !0, !0), s && A.merge(o, fe(l, "script"))), i.call(n[d], l, d);
                    if (s) for (u = o[o.length - 1].ownerDocument, A.map(o, Pe), d = 0; d < s; d++) l = o[d], ce.test(l.type || "") && !G.access(l, "globalEval") && A.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? A._evalUrl && A._evalUrl(l.src) : x(l.textContent.replace(Fe, ""), u, l))
                }
                return n
            }

            function Ie(e, t, n) {
                for (var r, i = t ? A.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || A.cleanData(fe(r)), r.parentNode && (n && A.contains(r.ownerDocument, r) && pe(fe(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            A.extend({
                htmlPrefilter: function (e) {
                    return e.replace(ke, "<$1></$2>")
                }, clone: function (e, t, n) {
                    var r, i, a, o, s, l, u, d = e.cloneNode(!0), c = A.contains(e.ownerDocument, e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || A.isXMLDoc(e))) for (o = fe(d), r = 0, i = (a = fe(e)).length; r < i; r++) s = a[r], l = o[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
                    if (t) if (n) for (a = a || fe(e), o = o || fe(d), r = 0, i = a.length; r < i; r++) je(a[r], o[r]); else je(e, d);
                    return 0 < (o = fe(d, "script")).length && pe(o, !c && fe(e, "script")), d
                }, cleanData: function (e) {
                    for (var t, n, r, i = A.event.special, a = 0; void 0 !== (n = e[a]); a++) if (Y(n)) {
                        if (t = n[G.expando]) {
                            if (t.events) for (r in t.events) i[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
                            n[G.expando] = void 0
                        }
                        n[X.expando] && (n[X.expando] = void 0)
                    }
                }
            }), A.fn.extend({
                detach: function (e) {
                    return Ie(this, e, !0)
                }, remove: function (e) {
                    return Ie(this, e)
                }, text: function (e) {
                    return B(this, function (e) {
                        return void 0 === e ? A.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                }, append: function () {
                    return Me(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    })
                }, prepend: function () {
                    return Me(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return Me(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return Me(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (A.cleanData(fe(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return A.clone(this, e, t)
                    })
                }, html: function (e) {
                    return B(this, function (e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Se.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = A.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (A.cleanData(fe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var n = [];
                    return Me(this, arguments, function (e) {
                        var t = this.parentNode;
                        A.inArray(this, n) < 0 && (A.cleanData(fe(this)), t && t.replaceChild(e, this))
                    }, n)
                }
            }), A.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, o) {
                A.fn[e] = function (e) {
                    for (var t, n = [], r = A(e), i = r.length - 1, a = 0; a <= i; a++) t = a === i ? this : this.clone(!0), A(r[a])[o](t), l.apply(n, t.get());
                    return this.pushStack(n)
                }
            });
            var ze = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), $e = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = T), t.getComputedStyle(e)
            }, _e = new RegExp(re.join("|"), "i");

            function Re(e, t, n) {
                var r, i, a, o, s = e.style;
                return (n = n || $e(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || A.contains(e.ownerDocument, e) || (o = A.style(e, t)), !v.pixelBoxStyles() && ze.test(o) && _e.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o
            }

            function Oe(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            !function () {
                function e() {
                    if (l) {
                        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(s).appendChild(l);
                        var e = T.getComputedStyle(l);
                        n = "1%" !== e.top, o = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", be.removeChild(s), l = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }

                var n, r, i, a, o, s = q.createElement("div"), l = q.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, A.extend(v, {
                    boxSizingReliable: function () {
                        return e(), r
                    }, pixelBoxStyles: function () {
                        return e(), a
                    }, pixelPosition: function () {
                        return e(), n
                    }, reliableMarginLeft: function () {
                        return e(), o
                    }, scrollboxSize: function () {
                        return e(), i
                    }
                }))
            }();
            var He = /^(none|table(?!-c[ea]).+)/, Be = /^--/,
                We = {position: "absolute", visibility: "hidden", display: "block"},
                Ze = {letterSpacing: "0", fontWeight: "400"}, Ue = ["Webkit", "Moz", "ms"],
                Ve = q.createElement("div").style;

            function Ye(e) {
                var t = A.cssProps[e];
                return t || (t = A.cssProps[e] = function (e) {
                    if (e in Ve) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) if ((e = Ue[n] + t) in Ve) return e
                }(e) || e), t
            }

            function Ke(e, t, n) {
                var r = ne.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ge(e, t, n, r, i, a) {
                var o = "width" === t ? 1 : 0, s = 0, l = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; o < 4; o += 2) "margin" === n && (l += A.css(e, n + re[o], !0, i)), r ? ("content" === n && (l -= A.css(e, "padding" + re[o], !0, i)), "margin" !== n && (l -= A.css(e, "border" + re[o] + "Width", !0, i))) : (l += A.css(e, "padding" + re[o], !0, i), "padding" !== n ? l += A.css(e, "border" + re[o] + "Width", !0, i) : s += A.css(e, "border" + re[o] + "Width", !0, i));
                return !r && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5))), l
            }

            function Xe(e, t, n) {
                var r = $e(e), i = Re(e, t, r), a = "border-box" === A.css(e, "boxSizing", !1, r), o = a;
                if (ze.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return o = o && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === A.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (i = parseFloat(i) || 0) + Ge(e, t, n || (a ? "border" : "content"), o, r, i) + "px"
            }

            function Je(e, t, n, r, i) {
                return new Je.prototype.init(e, t, n, r, i)
            }

            A.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Re(e, "opacity");
                                return "" === n ? "1" : n
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
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, a, o, s = V(t), l = Be.test(t), u = e.style;
                        if (l || (t = Ye(s)), o = A.cssHooks[t] || A.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : u[t];
                        "string" === (a = typeof n) && (i = ne.exec(n)) && i[1] && (n = oe(e, t, i), a = "number"), null != n && n == n && ("number" === a && (n += i && i[3] || (A.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var i, a, o, s = V(t);
                    return Be.test(t) || (t = Ye(s)), (o = A.cssHooks[t] || A.cssHooks[s]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = Re(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
                }
            }), A.each(["height", "width"], function (e, s) {
                A.cssHooks[s] = {
                    get: function (e, t, n) {
                        if (t) return !He.test(A.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, s, n) : ae(e, We, function () {
                            return Xe(e, s, n)
                        })
                    }, set: function (e, t, n) {
                        var r, i = $e(e), a = "border-box" === A.css(e, "boxSizing", !1, i), o = n && Ge(e, s, n, a, i);
                        return a && v.scrollboxSize() === i.position && (o -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - Ge(e, s, "border", !1, i) - .5)), o && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = A.css(e, s)), Ke(0, t, o)
                    }
                }
            }), A.cssHooks.marginLeft = Oe(v.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {marginLeft: 0}, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), A.each({margin: "", padding: "", border: "Width"}, function (i, a) {
                A.cssHooks[i + a] = {
                    expand: function (e) {
                        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + a] = r[t] || r[t - 2] || r[0];
                        return n
                    }
                }, "margin" !== i && (A.cssHooks[i + a].set = Ke)
            }), A.fn.extend({
                css: function (e, t) {
                    return B(this, function (e, t, n) {
                        var r, i, a = {}, o = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; o < i; o++) a[t[o]] = A.css(e, t[o], !1, r);
                            return a
                        }
                        return void 0 !== n ? A.style(e, t, n) : A.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), ((A.Tween = Je).prototype = {
                constructor: Je, init: function (e, t, n, r, i, a) {
                    this.elem = e, this.prop = n, this.easing = i || A.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (A.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = Je.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = Je.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
                }
            }).init.prototype = Je.prototype, (Je.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = A.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    }, set: function (e) {
                        A.fx.step[e.prop] ? A.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[A.cssProps[e.prop]] && !A.cssHooks[e.prop] ? e.elem[e.prop] = e.now : A.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = Je.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, A.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, A.fx = Je.prototype.init, A.fx.step = {};
            var Qe, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;

            function at() {
                et && (!1 === q.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(at) : T.setTimeout(at, A.fx.interval), A.fx.tick())
            }

            function ot() {
                return T.setTimeout(function () {
                    Qe = void 0
                }), Qe = Date.now()
            }

            function st(e, t) {
                var n, r = 0, i = {height: e};
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function lt(e, t, n) {
                for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, o = i.length; a < o; a++) if (r = i[a].call(n, t, e)) return r
            }

            function ut(a, e, t) {
                var n, o, r = 0, i = ut.prefilters.length, s = A.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (o) return !1;
                    for (var e = Qe || ot(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
                    return s.notifyWith(a, [u, n, t]), n < 1 && i ? t : (i || s.notifyWith(a, [u, 1, 0]), s.resolveWith(a, [u]), !1)
                }, u = s.promise({
                    elem: a,
                    props: A.extend({}, e),
                    opts: A.extend(!0, {specialEasing: {}, easing: A.easing._default}, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Qe || ot(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function (e, t) {
                        var n = A.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function (e) {
                        var t = 0, n = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; t < n; t++) u.tweens[t].run(1);
                        return e ? (s.notifyWith(a, [u, 1, 0]), s.resolveWith(a, [u, e])) : s.rejectWith(a, [u, e]), this
                    }
                }), d = u.props;
                for (!function (e, t) {
                    var n, r, i, a, o;
                    for (n in e) if (i = t[r = V(n)], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = A.cssHooks[r]) && "expand" in o) for (n in a = o.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i); else t[r] = i
                }(d, u.opts.specialEasing); r < i; r++) if (n = ut.prefilters[r].call(u, a, d, u.opts)) return y(n.stop) && (A._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
                return A.map(d, lt, u), y(u.opts.start) && u.opts.start.call(a, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), A.fx.timer(A.extend(l, {
                    elem: a,
                    anim: u,
                    queue: u.opts.queue
                })), u
            }

            A.Animation = A.extend(ut, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return oe(n.elem, e, ne.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    for (var n, r = 0, i = (e = y(e) ? (t = e, ["*"]) : e.match(I)).length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                }, prefilters: [function (e, t, n) {
                    var r, i, a, o, s, l, u, d, c = "width" in t || "height" in t, h = this, f = {}, p = e.style,
                        m = e.nodeType && ie(e), g = G.get(e, "fxshow");
                    for (r in n.queue || (null == (o = A._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function () {
                        o.unqueued || s()
                    }), o.unqueued++, h.always(function () {
                        h.always(function () {
                            o.unqueued--, A.queue(e, "fx").length || o.empty.fire()
                        })
                    })), t) if (i = t[r], rt.test(i)) {
                        if (delete t[r], a = a || "toggle" === i, i === (m ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            m = !0
                        }
                        f[r] = g && g[r] || A.style(e, r)
                    }
                    if ((l = !A.isEmptyObject(t)) || !A.isEmptyObject(f)) for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = G.get(e, "display")), "none" === (d = A.css(e, "display")) && (u ? d = u : (le([e], !0), u = e.style.display || u, d = A.css(e, "display"), le([e]))), ("inline" === d || "inline-block" === d && null != u) && "none" === A.css(e, "float") && (l || (h.done(function () {
                        p.display = u
                    }), null == u && (d = p.display, u = "none" === d ? "" : d)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {display: u}), a && (g.hidden = !m), m && le([e], !0), h.done(function () {
                        for (r in m || le([e]), G.remove(e, "fxshow"), f) A.style(e, r, f[r])
                    })), l = lt(m ? g[r] : 0, r, h), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
                }], prefilter: function (e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                }
            }), A.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? A.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return A.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in A.fx.speeds ? r.duration = A.fx.speeds[r.duration] : r.duration = A.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    y(r.old) && r.old.call(this), r.queue && A.dequeue(this, r.queue)
                }, r
            }, A.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                }, animate: function (t, e, n, r) {
                    var i = A.isEmptyObject(t), a = A.speed(e, n, r), o = function () {
                        var e = ut(this, A.extend({}, t), a);
                        (i || G.get(this, "finish")) && e.stop(!0)
                    };
                    return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                }, stop: function (i, e, a) {
                    var o = function (e) {
                        var t = e.stop;
                        delete e.stop, t(a)
                    };
                    return "string" != typeof i && (a = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                        var e = !0, t = null != i && i + "queueHooks", n = A.timers, r = G.get(this);
                        if (t) r[t] && r[t].stop && o(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && o(r[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
                        !e && a || A.dequeue(this, i)
                    })
                }, finish: function (o) {
                    return !1 !== o && (o = o || "fx"), this.each(function () {
                        var e, t = G.get(this), n = t[o + "queue"], r = t[o + "queueHooks"], i = A.timers,
                            a = n ? n.length : 0;
                        for (t.finish = !0, A.queue(this, o, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === o && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), A.each(["toggle", "show", "hide"], function (e, r) {
                var i = A.fn[r];
                A.fn[r] = function (e, t, n) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
                }
            }), A.each({
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, r) {
                A.fn[e] = function (e, t, n) {
                    return this.animate(r, e, t, n)
                }
            }), A.timers = [], A.fx.tick = function () {
                var e, t = 0, n = A.timers;
                for (Qe = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || A.fx.stop(), Qe = void 0
            }, A.fx.timer = function (e) {
                A.timers.push(e), A.fx.start()
            }, A.fx.interval = 13, A.fx.start = function () {
                et || (et = !0, at())
            }, A.fx.stop = function () {
                et = null
            }, A.fx.speeds = {slow: 600, fast: 200, _default: 400}, A.fn.delay = function (r, e) {
                return r = A.fx && A.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
                    var n = T.setTimeout(e, r);
                    t.stop = function () {
                        T.clearTimeout(n)
                    }
                })
            }, tt = q.createElement("input"), nt = q.createElement("select").appendChild(q.createElement("option")), tt.type = "checkbox", v.checkOn = "" !== tt.value, v.optSelected = nt.selected, (tt = q.createElement("input")).value = "t", tt.type = "radio", v.radioValue = "t" === tt.value;
            var dt, ct = A.expr.attrHandle;
            A.fn.extend({
                attr: function (e, t) {
                    return B(this, A.attr, e, t, 1 < arguments.length)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        A.removeAttr(this, e)
                    })
                }
            }), A.extend({
                attr: function (e, t, n) {
                    var r, i, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? A.prop(e, t, n) : (1 === a && A.isXMLDoc(e) || (i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void A.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = A.find.attr(e, t)) ? void 0 : r)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!v.radioValue && "radio" === t && S(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, r = 0, i = t && t.match(I);
                    if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
                }
            }), dt = {
                set: function (e, t, n) {
                    return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, A.each(A.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var o = ct[t] || A.find.attr;
                ct[t] = function (e, t, n) {
                    var r, i, a = t.toLowerCase();
                    return n || (i = ct[a], ct[a] = r, r = null != o(e, t, n) ? a : null, ct[a] = i), r
                }
            });
            var ht = /^(?:input|select|textarea|button)$/i, ft = /^(?:a|area)$/i;

            function pt(e) {
                return (e.match(I) || []).join(" ")
            }

            function mt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function gt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
            }

            A.fn.extend({
                prop: function (e, t) {
                    return B(this, A.prop, e, t, 1 < arguments.length)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[A.propFix[e] || e]
                    })
                }
            }), A.extend({
                prop: function (e, t, n) {
                    var r, i, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a) return 1 === a && A.isXMLDoc(e) || (t = A.propFix[t] || t, i = A.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = A.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), v.optSelected || (A.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                A.propFix[this.toLowerCase()] = this
            }), A.fn.extend({
                addClass: function (t) {
                    var e, n, r, i, a, o, s, l = 0;
                    if (y(t)) return this.each(function (e) {
                        A(this).addClass(t.call(this, e, mt(this)))
                    });
                    if ((e = gt(t)).length) for (; n = this[l++];) if (i = mt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (o = 0; a = e[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, r, i, a, o, s, l = 0;
                    if (y(t)) return this.each(function (e) {
                        A(this).removeClass(t.call(this, e, mt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = gt(t)).length) for (; n = this[l++];) if (i = mt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (o = 0; a = e[o++];) for (; -1 < r.indexOf(" " + a + " ");) r = r.replace(" " + a + " ", " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
                    return this
                }, toggleClass: function (i, t) {
                    var a = typeof i, o = "string" === a || Array.isArray(i);
                    return "boolean" == typeof t && o ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function (e) {
                        A(this).toggleClass(i.call(this, e, mt(this), t), t)
                    }) : this.each(function () {
                        var e, t, n, r;
                        if (o) for (t = 0, n = A(this), r = gt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== i && "boolean" !== a || ((e = mt(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || ""))
                    })
                }, hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + pt(mt(n)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var vt = /\r/g;
            A.fn.extend({
                val: function (n) {
                    var r, e, i, t = this[0];
                    return arguments.length ? (i = y(n), this.each(function (e) {
                        var t;
                        1 === this.nodeType && (null == (t = i ? n.call(this, e, A(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = A.map(t, function (e) {
                            return null == e ? "" : e + ""
                        })), (r = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                    })) : t ? (r = A.valHooks[t.type] || A.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
                }
            }), A.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = A.find.attr(e, "value");
                            return null != t ? t : pt(A.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            var t, n, r, i = e.options, a = e.selectedIndex, o = "select-one" === e.type,
                                s = o ? null : [], l = o ? a + 1 : i.length;
                            for (r = a < 0 ? l : o ? a : 0; r < l; r++) if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                                if (t = A(n).val(), o) return t;
                                s.push(t)
                            }
                            return s
                        }, set: function (e, t) {
                            for (var n, r, i = e.options, a = A.makeArray(t), o = i.length; o--;) ((r = i[o]).selected = -1 < A.inArray(A.valHooks.option.get(r), a)) && (n = !0);
                            return n || (e.selectedIndex = -1), a
                        }
                    }
                }
            }), A.each(["radio", "checkbox"], function () {
                A.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < A.inArray(A(e).val(), t)
                    }
                }, v.checkOn || (A.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), v.focusin = "onfocusin" in T;
            var yt = /^(?:focusinfocus|focusoutblur)$/, bt = function (e) {
                e.stopPropagation()
            };
            A.extend(A.event, {
                trigger: function (e, t, n, r) {
                    var i, a, o, s, l, u, d, c, h = [n || q], f = g.call(e, "type") ? e.type : e,
                        p = g.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = c = o = n = n || q, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(f + A.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[A.expando] ? e : new A.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : A.makeArray(t, [e]), d = A.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                        if (!r && !d.noBubble && !b(n)) {
                            for (s = d.delegateType || f, yt.test(s + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), o = a;
                            o === (n.ownerDocument || q) && h.push(o.defaultView || o.parentWindow || T)
                        }
                        for (i = 0; (a = h[i++]) && !e.isPropagationStopped();) c = a, e.type = 1 < i ? s : d.bindType || f, (u = (G.get(a, "events") || {})[e.type] && G.get(a, "handle")) && u.apply(a, t), (u = l && a[l]) && u.apply && Y(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = f, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Y(n) || l && y(n[f]) && !b(n) && ((o = n[l]) && (n[l] = null), A.event.triggered = f, e.isPropagationStopped() && c.addEventListener(f, bt), n[f](), e.isPropagationStopped() && c.removeEventListener(f, bt), A.event.triggered = void 0, o && (n[l] = o)), e.result
                    }
                }, simulate: function (e, t, n) {
                    var r = A.extend(new A.Event, n, {type: e, isSimulated: !0});
                    A.event.trigger(r, null, t)
                }
            }), A.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        A.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return A.event.trigger(e, t, n, !0)
                }
            }), v.focusin || A.each({focus: "focusin", blur: "focusout"}, function (n, r) {
                var i = function (e) {
                    A.event.simulate(r, e.target, A.event.fix(e))
                };
                A.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this, t = G.access(e, r);
                        t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) + 1)
                    }, teardown: function () {
                        var e = this.ownerDocument || this, t = G.access(e, r) - 1;
                        t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G.remove(e, r))
                    }
                }
            });
            var xt = T.location, wt = Date.now(), Ct = /\?/;
            A.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new T.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || A.error("Invalid XML: " + e), t
            };
            var Tt = /\[\]$/, qt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
                Et = /^(?:input|select|textarea|keygen)/i;

            function kt(n, e, r, i) {
                var t;
                if (Array.isArray(e)) A.each(e, function (e, t) {
                    r || Tt.test(n) ? i(n, t) : kt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
                }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) kt(n + "[" + t + "]", e[t], r, i)
            }

            A.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    var n = y(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (Array.isArray(e) || e.jquery && !A.isPlainObject(e)) A.each(e, function () {
                    i(this.name, this.value)
                }); else for (n in e) kt(n, e[n], t, i);
                return r.join("&")
            }, A.fn.extend({
                serialize: function () {
                    return A.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = A.prop(this, "elements");
                        return e ? A.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !A(this).is(":disabled") && Et.test(this.nodeName) && !At.test(e) && (this.checked || !ue.test(e))
                    }).map(function (e, t) {
                        var n = A(this).val();
                        return null == n ? null : Array.isArray(n) ? A.map(n, function (e) {
                            return {name: t.name, value: e.replace(qt, "\r\n")}
                        }) : {name: t.name, value: n.replace(qt, "\r\n")}
                    }).get()
                }
            });
            var St = /%20/g, Dt = /#.*$/, Ft = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Nt = /^(?:GET|HEAD)$/, Pt = /^\/\//, jt = {}, Mt = {}, It = "*/".concat("*"), zt = q.createElement("a");

            function $t(a) {
                return function (e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, r = 0, i = e.toLowerCase().match(I) || [];
                    if (y(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
                }
            }

            function _t(t, i, a, o) {
                var s = {}, l = t === Mt;

                function u(e) {
                    var r;
                    return s[e] = !0, A.each(t[e] || [], function (e, t) {
                        var n = t(i, a, o);
                        return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
                    }), r
                }

                return u(i.dataTypes[0]) || !s["*"] && u("*")
            }

            function Rt(e, t) {
                var n, r, i = A.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && A.extend(!0, e, r), e
            }

            zt.href = xt.href, A.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": It,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": A.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? Rt(Rt(e, A.ajaxSettings), t) : Rt(A.ajaxSettings, e)
                },
                ajaxPrefilter: $t(jt),
                ajaxTransport: $t(Mt),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var d, c, h, n, f, r, p, m, i, a, g = A.ajaxSetup({}, t), v = g.context || g,
                        y = g.context && (v.nodeType || v.jquery) ? A(v) : A.event, b = A.Deferred(),
                        x = A.Callbacks("once memory"), w = g.statusCode || {}, o = {}, s = {}, l = "canceled", C = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (p) {
                                    if (!n) for (n = {}; t = Lt.exec(h);) n[t[1].toLowerCase()] = t[2];
                                    t = n[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return p ? h : null
                            }, setRequestHeader: function (e, t) {
                                return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, o[e] = t), this
                            }, overrideMimeType: function (e) {
                                return null == p && (g.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (p) C.always(e[C.status]); else for (t in e) w[t] = [w[t], e[t]];
                                return this
                            }, abort: function (e) {
                                var t = e || l;
                                return d && d.abort(t), u(0, t), this
                            }
                        };
                    if (b.promise(C), g.url = ((e || g.url || xt.href) + "").replace(Pt, xt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(I) || [""], null == g.crossDomain) {
                        r = q.createElement("a");
                        try {
                            r.href = g.url, r.href = r.href, g.crossDomain = zt.protocol + "//" + zt.host != r.protocol + "//" + r.host
                        } catch (e) {
                            g.crossDomain = !0
                        }
                    }
                    if (g.data && g.processData && "string" != typeof g.data && (g.data = A.param(g.data, g.traditional)), _t(jt, g, t, C), p) return C;
                    for (i in (m = A.event && g.global) && 0 == A.active++ && A.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Nt.test(g.type), c = g.url.replace(Dt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(St, "+")) : (a = g.url.slice(c.length), g.data && (g.processData || "string" == typeof g.data) && (c += (Ct.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (c = c.replace(Ft, "$1"), a = (Ct.test(c) ? "&" : "?") + "_=" + wt++ + a), g.url = c + a), g.ifModified && (A.lastModified[c] && C.setRequestHeader("If-Modified-Since", A.lastModified[c]), A.etag[c] && C.setRequestHeader("If-None-Match", A.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && C.setRequestHeader("Content-Type", g.contentType), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + It + "; q=0.01" : "") : g.accepts["*"]), g.headers) C.setRequestHeader(i, g.headers[i]);
                    if (g.beforeSend && (!1 === g.beforeSend.call(v, C, g) || p)) return C.abort();
                    if (l = "abort", x.add(g.complete), C.done(g.success), C.fail(g.error), d = _t(Mt, g, t, C)) {
                        if (C.readyState = 1, m && y.trigger("ajaxSend", [C, g]), p) return C;
                        g.async && 0 < g.timeout && (f = T.setTimeout(function () {
                            C.abort("timeout")
                        }, g.timeout));
                        try {
                            p = !1, d.send(o, u)
                        } catch (e) {
                            if (p) throw e;
                            u(-1, e)
                        }
                    } else u(-1, "No Transport");

                    function u(e, t, n, r) {
                        var i, a, o, s, l, u = t;
                        p || (p = !0, f && T.clearTimeout(f), d = void 0, h = r || "", C.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                            for (var r, i, a, o, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                            if (l[0] in n) a = l[0]; else {
                                for (i in n) {
                                    if (!l[0] || e.converters[i + " " + l[0]]) {
                                        a = i;
                                        break
                                    }
                                    o || (o = i)
                                }
                                a = a || o
                            }
                            if (a) return a !== l[0] && l.unshift(a), n[a]
                        }(g, C, n)), s = function (e, t, n, r) {
                            var i, a, o, s, l, u = {}, d = e.dataTypes.slice();
                            if (d[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                            for (a = d.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                                if (!(o = u[l + " " + a] || u["* " + a])) for (i in u) if ((s = i.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === o ? o = u[i] : !0 !== u[i] && (a = s[0], d.unshift(s[1]));
                                    break
                                }
                                if (!0 !== o) if (o && e.throws) t = o(t); else try {
                                    t = o(t)
                                } catch (e) {
                                    return {state: "parsererror", error: o ? e : "No conversion from " + l + " to " + a}
                                }
                            }
                            return {state: "success", data: t}
                        }(g, s, C, i), i ? (g.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (A.lastModified[c] = l), (l = C.getResponseHeader("etag")) && (A.etag[c] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, a = s.data, i = !(o = s.error))) : (o = u, !e && u || (u = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || u) + "", i ? b.resolveWith(v, [a, u, C]) : b.rejectWith(v, [C, u, o]), C.statusCode(w), w = void 0, m && y.trigger(i ? "ajaxSuccess" : "ajaxError", [C, g, i ? a : o]), x.fireWith(v, [C, u]), m && (y.trigger("ajaxComplete", [C, g]), --A.active || A.event.trigger("ajaxStop")))
                    }

                    return C
                },
                getJSON: function (e, t, n) {
                    return A.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return A.get(e, void 0, t, "script")
                }
            }), A.each(["get", "post"], function (e, i) {
                A[i] = function (e, t, n, r) {
                    return y(t) && (r = r || n, n = t, t = void 0), A.ajax(A.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, A.isPlainObject(e) && e))
                }
            }), A._evalUrl = function (e) {
                return A.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
            }, A.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])), t = A(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                }, wrapInner: function (n) {
                    return y(n) ? this.each(function (e) {
                        A(this).wrapInner(n.call(this, e))
                    }) : this.each(function () {
                        var e = A(this), t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                }, wrap: function (t) {
                    var n = y(t);
                    return this.each(function (e) {
                        A(this).wrapAll(n ? t.call(this, e) : t)
                    })
                }, unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        A(this).replaceWith(this.childNodes)
                    }), this
                }
            }), A.expr.pseudos.hidden = function (e) {
                return !A.expr.pseudos.visible(e)
            }, A.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, A.ajaxSettings.xhr = function () {
                try {
                    return new T.XMLHttpRequest
                } catch (e) {
                }
            };
            var Ot = {0: 200, 1223: 204}, Ht = A.ajaxSettings.xhr();
            v.cors = !!Ht && "withCredentials" in Ht, v.ajax = Ht = !!Ht, A.ajaxTransport(function (i) {
                var a, o;
                if (v.cors || Ht && !i.crossDomain) return {
                    send: function (e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                        a = function (e) {
                            return function () {
                                a && (a = o = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ot[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                            }
                        }, r.onload = a(), o = r.onerror = r.ontimeout = a("error"), void 0 !== r.onabort ? r.onabort = o : r.onreadystatechange = function () {
                            4 === r.readyState && T.setTimeout(function () {
                                a && o()
                            })
                        }, a = a("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (a) throw e
                        }
                    }, abort: function () {
                        a && a()
                    }
                }
            }), A.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), A.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        return A.globalEval(e), e
                    }
                }
            }), A.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), A.ajaxTransport("script", function (n) {
                var r, i;
                if (n.crossDomain) return {
                    send: function (e, t) {
                        r = A("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function (e) {
                            r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                        }), q.head.appendChild(r[0])
                    }, abort: function () {
                        i && i()
                    }
                }
            });
            var Bt, Wt = [], Zt = /(=)\?(?=&|$)|\?\?/;
            A.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Wt.pop() || A.expando + "_" + wt++;
                    return this[e] = !0, e
                }
            }), A.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r, i, a,
                    o = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
                if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return a || A.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", i = T[r], T[r] = function () {
                    a = arguments
                }, n.always(function () {
                    void 0 === i ? A(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Wt.push(r)), a && y(i) && i(a[0]), a = i = void 0
                }), "script"
            }), v.createHTMLDocument = ((Bt = q.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), A.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = q.implementation.createHTMLDocument("")).createElement("base")).href = q.location.href, t.head.appendChild(r)) : t = q), a = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = ye([e], t, a), a && a.length && A(a).remove(), A.merge([], i.childNodes)));
                var r, i, a
            }, A.fn.load = function (e, t, n) {
                var r, i, a, o = this, s = e.indexOf(" ");
                return -1 < s && (r = pt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < o.length && A.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    a = arguments, o.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    o.each(function () {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                }), this
            }, A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                A.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), A.expr.pseudos.animated = function (t) {
                return A.grep(A.timers, function (e) {
                    return t === e.elem
                }).length
            }, A.offset = {
                setOffset: function (e, t, n) {
                    var r, i, a, o, s, l, u = A.css(e, "position"), d = A(e), c = {};
                    "static" === u && (e.style.position = "relative"), s = d.offset(), a = A.css(e, "top"), l = A.css(e, "left"), i = ("absolute" === u || "fixed" === u) && -1 < (a + l).indexOf("auto") ? (o = (r = d.position()).top, r.left) : (o = parseFloat(a) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, A.extend({}, s))), null != t.top && (c.top = t.top - s.top + o), null != t.left && (c.left = t.left - s.left + i), "using" in t ? t.using.call(e, c) : d.css(c)
                }
            }, A.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        A.offset.setOffset(this, t, e)
                    });
                    var e, n, r = this[0];
                    return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {top: 0, left: 0} : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {top: 0, left: 0};
                        if ("fixed" === A.css(r, "position")) t = r.getBoundingClientRect(); else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === A.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = A(e).offset()).top += A.css(e, "borderTopWidth", !0), i.left += A.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - A.css(r, "marginTop", !0),
                            left: t.left - i.left - A.css(r, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === A.css(e, "position");) e = e.offsetParent;
                        return e || be
                    })
                }
            }), A.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
                var a = "pageYOffset" === i;
                A.fn[t] = function (e) {
                    return B(this, function (e, t, n) {
                        var r;
                        if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                        r ? r.scrollTo(a ? r.pageXOffset : n, a ? n : r.pageYOffset) : e[t] = n
                    }, t, e, arguments.length)
                }
            }), A.each(["top", "left"], function (e, n) {
                A.cssHooks[n] = Oe(v.pixelPosition, function (e, t) {
                    if (t) return t = Re(e, n), ze.test(t) ? A(e).position()[n] + "px" : t
                })
            }), A.each({Height: "height", Width: "width"}, function (o, s) {
                A.each({padding: "inner" + o, content: s, "": "outer" + o}, function (r, a) {
                    A.fn[a] = function (e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e),
                            i = r || (!0 === e || !0 === t ? "margin" : "border");
                        return B(this, function (e, t, n) {
                            var r;
                            return b(e) ? 0 === a.indexOf("outer") ? e["inner" + o] : e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? A.css(e, t, i) : A.style(e, t, n, i)
                        }, s, n ? e : void 0, n)
                    }
                })
            }), A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                A.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            }), A.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), A.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), A.proxy = function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || A.guid++, i
            }, A.holdReady = function (e) {
                e ? A.readyWait++ : A.ready(!0)
            }, A.isArray = Array.isArray, A.parseJSON = JSON.parse, A.nodeName = S, A.isFunction = y, A.isWindow = b, A.camelCase = V, A.type = w, A.now = Date.now, A.isNumeric = function (e) {
                var t = A.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, "function" == typeof define && define.amd && define("jquery", [], function () {
                return A
            });
            var Ut = T.jQuery, Vt = T.$;
            return A.noConflict = function (e) {
                return T.$ === A && (T.$ = Vt), e && T.jQuery === A && (T.jQuery = Ut), A
            }, e || (T.jQuery = T.$ = A), A
        })
    }, {}], 2: [function (e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r = function (l) {
            return function () {
                function a(e) {
                    return e.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
                }

                l.validator.addMethod("maxWords", function (e, t, n) {
                    return this.optional(t) || a(e).match(/\b\w+\b/g).length <= n
                }, l.validator.format("Please enter {0} words or less.")), l.validator.addMethod("minWords", function (e, t, n) {
                    return this.optional(t) || a(e).match(/\b\w+\b/g).length >= n
                }, l.validator.format("Please enter at least {0} words.")), l.validator.addMethod("rangeWords", function (e, t, n) {
                    var r = a(e), i = /\b\w+\b/g;
                    return this.optional(t) || r.match(i).length >= n[0] && r.match(i).length <= n[1]
                }, l.validator.format("Please enter between {0} and {1} words."))
            }(), l.validator.addMethod("abaRoutingNumber", function (e) {
                var t = 0, n = e.split(""), r = n.length;
                if (9 !== r) return !1;
                for (var i = 0; i < r; i += 3) t += 3 * parseInt(n[i], 10) + 7 * parseInt(n[i + 1], 10) + parseInt(n[i + 2], 10);
                return 0 !== t && t % 10 == 0
            }, "Please enter a valid routing number."), l.validator.addMethod("accept", function (e, t, n) {
                var r, i, a = "string" == typeof n ? n.replace(/\s/g, "") : "image/*", o = this.optional(t);
                if (o) return o;
                if ("file" === l(t).attr("type") && (a = a.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&").replace(/,/g, "|").replace(/\/\*/g, "/.*"), t.files && t.files.length)) for (i = new RegExp(".?(" + a + ")$", "i"), r = 0; r < t.files.length; r++) if (!t.files[r].type.match(i)) return !1;
                return !0
            }, l.validator.format("Please enter a value with a valid mimetype.")), l.validator.addMethod("alphanumeric", function (e, t) {
                return this.optional(t) || /^\w+$/i.test(e)
            }, "Letters, numbers, and underscores only please"), l.validator.addMethod("bankaccountNL", function (e, t) {
                if (this.optional(t)) return !0;
                if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e)) return !1;
                var n, r = e.replace(/ /g, ""), i = 0, a = r.length;
                for (n = 0; n < a; n++) i += (a - n) * r.substring(n, n + 1);
                return i % 11 == 0
            }, "Please specify a valid bank account number"), l.validator.addMethod("bankorgiroaccountNL", function (e, t) {
                return this.optional(t) || l.validator.methods.bankaccountNL.call(this, e, t) || l.validator.methods.giroaccountNL.call(this, e, t)
            }, "Please specify a valid bank or giro account number"), l.validator.addMethod("bic", function (e, t) {
                return this.optional(t) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e.toUpperCase())
            }, "Please specify a valid BIC code"), l.validator.addMethod("cifES", function (e, t) {
                if (this.optional(t)) return !0;
                var n, r, i, a, o = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi), s = e.substring(0, 1),
                    l = e.substring(1, 8), u = e.substring(8, 9), d = 0, c = 0;
                if (9 !== e.length || !o.test(e)) return !1;
                for (n = 0; n < l.length; n++) r = parseInt(l[n], 10), n % 2 == 0 ? c += (r *= 2) < 10 ? r : r - 9 : d += r;
                return i = (10 - (d + c).toString().substr(-1)).toString(), i = 9 < parseInt(i, 10) ? "0" : i, a = "JABCDEFGHI".substr(i, 1).toString(), s.match(/[ABEH]/) ? u === i : s.match(/[KPQS]/) ? u === a : u === i || u === a
            }, "Please specify a valid CIF number."), l.validator.addMethod("cnhBR", function (e) {
                if (11 !== (e = e.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length) return !1;
                var t, n, r, i, a, o = 0, s = 0;
                if (t = e.charAt(0), new Array(12).join(t) === e) return !1;
                for (a = 9, i = 0; i < 9; ++i, --a) o += +e.charAt(i) * a;
                for (10 <= (n = o % 11) && (n = 0, s = 2), a = 1, i = o = 0; i < 9; ++i, ++a) o += +e.charAt(i) * a;
                return 10 <= (r = o % 11) ? r = 0 : r -= s, String(n).concat(r) === e.substr(-2)
            }, "Please specify a valid CNH number"), l.validator.addMethod("cnpjBR", function (e, t) {
                if (this.optional(t)) return !0;
                if (14 !== (e = e.replace(/[^\d]+/g, "")).length) return !1;
                if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e) return !1;
                for (var n = e.length - 2, r = e.substring(0, n), i = e.substring(n), a = 0, o = n - 7, s = n; 1 <= s; s--) a += r.charAt(n - s) * o--, o < 2 && (o = 9);
                var l = a % 11 < 2 ? 0 : 11 - a % 11;
                if (l !== parseInt(i.charAt(0), 10)) return !1;
                n += 1, r = e.substring(0, n), a = 0, o = n - 7;
                for (var u = n; 1 <= u; u--) a += r.charAt(n - u) * o--, o < 2 && (o = 9);
                return (l = a % 11 < 2 ? 0 : 11 - a % 11) === parseInt(i.charAt(1), 10)
            }, "Please specify a CNPJ value number"), l.validator.addMethod("cpfBR", function (e, t) {
                if (this.optional(t)) return !0;
                if (11 !== (e = e.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length) return !1;
                var n, r, i, a, o = 0;
                if (n = parseInt(e.substring(9, 10), 10), r = parseInt(e.substring(10, 11), 10), i = function (e, t) {
                    var n = 10 * e % 11;
                    return 10 !== n && 11 !== n || (n = 0), n === t
                }, "" === e || "00000000000" === e || "11111111111" === e || "22222222222" === e || "33333333333" === e || "44444444444" === e || "55555555555" === e || "66666666666" === e || "77777777777" === e || "88888888888" === e || "99999999999" === e) return !1;
                for (a = 1; a <= 9; a++) o += parseInt(e.substring(a - 1, a), 10) * (11 - a);
                if (i(o, n)) {
                    for (o = 0, a = 1; a <= 10; a++) o += parseInt(e.substring(a - 1, a), 10) * (12 - a);
                    return i(o, r)
                }
                return !1
            }, "Please specify a valid CPF number"), l.validator.addMethod("creditcard", function (e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                var n, r, i = 0, a = 0, o = !1;
                if ((e = e.replace(/\D/g, "")).length < 13 || 19 < e.length) return !1;
                for (n = e.length - 1; 0 <= n; n--) r = e.charAt(n), a = parseInt(r, 10), o && 9 < (a *= 2) && (a -= 9), i += a, o = !o;
                return i % 10 == 0
            }, "Please enter a valid credit card number."), l.validator.addMethod("creditcardtypes", function (e, t, n) {
                if (/[^0-9\-]+/.test(e)) return !1;
                e = e.replace(/\D/g, "");
                var r = 0;
                return n.mastercard && (r |= 1), n.visa && (r |= 2), n.amex && (r |= 4), n.dinersclub && (r |= 8), n.enroute && (r |= 16), n.discover && (r |= 32), n.jcb && (r |= 64), n.unknown && (r |= 128), n.all && (r = 255), 1 & r && (/^(5[12345])/.test(e) || /^(2[234567])/.test(e)) ? 16 === e.length : 2 & r && /^(4)/.test(e) ? 16 === e.length : 4 & r && /^(3[47])/.test(e) ? 15 === e.length : 8 & r && /^(3(0[012345]|[68]))/.test(e) ? 14 === e.length : 16 & r && /^(2(014|149))/.test(e) ? 15 === e.length : 32 & r && /^(6011)/.test(e) ? 16 === e.length : 64 & r && /^(3)/.test(e) ? 16 === e.length : 64 & r && /^(2131|1800)/.test(e) ? 15 === e.length : !!(128 & r)
            }, "Please enter a valid credit card number."), l.validator.addMethod("currency", function (e, t, n) {
                var r, i = "string" == typeof n, a = i ? n : n[0], o = !!i || n[1];
                return a = a.replace(/,/g, ""), r = "^[" + (a = o ? a + "]" : a + "]?") + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", r = new RegExp(r), this.optional(t) || r.test(e)
            }, "Please specify a valid currency"), l.validator.addMethod("dateFA", function (e, t) {
                return this.optional(t) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(e)
            }, l.validator.messages.date), l.validator.addMethod("dateITA", function (e, t) {
                var n, r, i, a, o, s = !1;
                return s = !!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e) && (n = e.split("/"), r = parseInt(n[0], 10), i = parseInt(n[1], 10), a = parseInt(n[2], 10), (o = new Date(Date.UTC(a, i - 1, r, 12, 0, 0, 0))).getUTCFullYear() === a && o.getUTCMonth() === i - 1 && o.getUTCDate() === r), this.optional(t) || s
            }, l.validator.messages.date), l.validator.addMethod("dateNL", function (e, t) {
                return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)
            }, l.validator.messages.date), l.validator.addMethod("extension", function (e, t, n) {
                return n = "string" == typeof n ? n.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp("\\.(" + n + ")$", "i"))
            }, l.validator.format("Please enter a value with a valid extension.")), l.validator.addMethod("giroaccountNL", function (e, t) {
                return this.optional(t) || /^[0-9]{1,7}$/.test(e)
            }, "Please specify a valid giro account number"), l.validator.addMethod("greaterThan", function (e, t, n) {
                var r = l(n);
                return this.settings.onfocusout && r.not(".validate-greaterThan-blur").length && r.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan", function () {
                    l(t).valid()
                }), e > r.val()
            }, "Please enter a greater value."), l.validator.addMethod("greaterThanEqual", function (e, t, n) {
                var r = l(n);
                return this.settings.onfocusout && r.not(".validate-greaterThanEqual-blur").length && r.addClass("validate-greaterThanEqual-blur").on("blur.validate-greaterThanEqual", function () {
                    l(t).valid()
                }), e >= r.val()
            }, "Please enter a greater value."), l.validator.addMethod("iban", function (e, t) {
                if (this.optional(t)) return !0;
                var n, r, i, a, o, s = e.replace(/ /g, "").toUpperCase(), l = "", u = !0, d = "";
                if (s.length < 5) return !1;
                if (void 0 !== (i = {
                    AL: "\\d{8}[\\dA-Z]{16}",
                    AD: "\\d{8}[\\dA-Z]{12}",
                    AT: "\\d{16}",
                    AZ: "[\\dA-Z]{4}\\d{20}",
                    BE: "\\d{12}",
                    BH: "[A-Z]{4}[\\dA-Z]{14}",
                    BA: "\\d{16}",
                    BR: "\\d{23}[A-Z][\\dA-Z]",
                    BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                    CR: "\\d{17}",
                    HR: "\\d{17}",
                    CY: "\\d{8}[\\dA-Z]{16}",
                    CZ: "\\d{20}",
                    DK: "\\d{14}",
                    DO: "[A-Z]{4}\\d{20}",
                    EE: "\\d{16}",
                    FO: "\\d{14}",
                    FI: "\\d{14}",
                    FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                    GE: "[\\dA-Z]{2}\\d{16}",
                    DE: "\\d{18}",
                    GI: "[A-Z]{4}[\\dA-Z]{15}",
                    GR: "\\d{7}[\\dA-Z]{16}",
                    GL: "\\d{14}",
                    GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                    HU: "\\d{24}",
                    IS: "\\d{22}",
                    IE: "[\\dA-Z]{4}\\d{14}",
                    IL: "\\d{19}",
                    IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                    KZ: "\\d{3}[\\dA-Z]{13}",
                    KW: "[A-Z]{4}[\\dA-Z]{22}",
                    LV: "[A-Z]{4}[\\dA-Z]{13}",
                    LB: "\\d{4}[\\dA-Z]{20}",
                    LI: "\\d{5}[\\dA-Z]{12}",
                    LT: "\\d{16}",
                    LU: "\\d{3}[\\dA-Z]{13}",
                    MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                    MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                    MR: "\\d{23}",
                    MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                    MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                    MD: "[\\dA-Z]{2}\\d{18}",
                    ME: "\\d{18}",
                    NL: "[A-Z]{4}\\d{10}",
                    NO: "\\d{11}",
                    PK: "[\\dA-Z]{4}\\d{16}",
                    PS: "[\\dA-Z]{4}\\d{21}",
                    PL: "\\d{24}",
                    PT: "\\d{21}",
                    RO: "[A-Z]{4}[\\dA-Z]{16}",
                    SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                    SA: "\\d{2}[\\dA-Z]{18}",
                    RS: "\\d{18}",
                    SK: "\\d{20}",
                    SI: "\\d{15}",
                    ES: "\\d{20}",
                    SE: "\\d{20}",
                    CH: "\\d{5}[\\dA-Z]{12}",
                    TN: "\\d{20}",
                    TR: "\\d{5}[\\dA-Z]{17}",
                    AE: "\\d{3}\\d{16}",
                    GB: "[A-Z]{4}\\d{14}",
                    VG: "[\\dA-Z]{4}\\d{16}"
                }[s.substring(0, 2)]) && !new RegExp("^[A-Z]{2}\\d{2}" + i + "$", "").test(s)) return !1;
                for (n = s.substring(4, s.length) + s.substring(0, 4), a = 0; a < n.length; a++) "0" !== (r = n.charAt(a)) && (u = !1), u || (l += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(r));
                for (o = 0; o < l.length; o++) d = ("" + d + l.charAt(o)) % 97;
                return 1 === d
            }, "Please specify a valid IBAN"), l.validator.addMethod("integer", function (e, t) {
                return this.optional(t) || /^-?\d+$/.test(e)
            }, "A positive or negative non-decimal number please"), l.validator.addMethod("ipv4", function (e, t) {
                return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)
            }, "Please enter a valid IP v4 address."), l.validator.addMethod("ipv6", function (e, t) {
                return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)
            }, "Please enter a valid IP v6 address."), l.validator.addMethod("lessThan", function (e, t, n) {
                var r = l(n);
                return this.settings.onfocusout && r.not(".validate-lessThan-blur").length && r.addClass("validate-lessThan-blur").on("blur.validate-lessThan", function () {
                    l(t).valid()
                }), e < r.val()
            }, "Please enter a lesser value."), l.validator.addMethod("lessThanEqual", function (e, t, n) {
                var r = l(n);
                return this.settings.onfocusout && r.not(".validate-lessThanEqual-blur").length && r.addClass("validate-lessThanEqual-blur").on("blur.validate-lessThanEqual", function () {
                    l(t).valid()
                }), e <= r.val()
            }, "Please enter a lesser value."), l.validator.addMethod("lettersonly", function (e, t) {
                return this.optional(t) || /^[a-z]+$/i.test(e)
            }, "Letters only please"), l.validator.addMethod("letterswithbasicpunc", function (e, t) {
                return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(e)
            }, "Letters or punctuation only please"), l.validator.addMethod("maxfiles", function (e, t, n) {
                return !!this.optional(t) || !("file" === l(t).attr("type") && t.files && t.files.length > n)
            }, l.validator.format("Please select no more than {0} files.")), l.validator.addMethod("maxsize", function (e, t, n) {
                if (this.optional(t)) return !0;
                if ("file" === l(t).attr("type") && t.files && t.files.length) for (var r = 0; r < t.files.length; r++) if (t.files[r].size > n) return !1;
                return !0
            }, l.validator.format("File size must not exceed {0} bytes each.")), l.validator.addMethod("maxsizetotal", function (e, t, n) {
                if (this.optional(t)) return !0;
                if ("file" === l(t).attr("type") && t.files && t.files.length) for (var r = 0, i = 0; i < t.files.length; i++) if (n < (r += t.files[i].size)) return !1;
                return !0
            }, l.validator.format("Total size of all files must not exceed {0} bytes.")), l.validator.addMethod("mobileNL", function (e, t) {
                return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
            }, "Please specify a valid mobile number"), l.validator.addMethod("mobileRU", function (e, t) {
                var n = e.replace(/\(|\)|\s+|-/g, "");
                return this.optional(t) || 9 < n.length && /^((\+7|7|8)+([0-9]){10})$/.test(n)
            }, "Please specify a valid mobile number"), l.validator.addMethod("mobileUK", function (e, t) {
                return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || 9 < e.length && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
            }, "Please specify a valid mobile number"), l.validator.addMethod("netmask", function (e, t) {
                return this.optional(t) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(e)
            }, "Please enter a valid netmask."), l.validator.addMethod("nieES", function (e, t) {
                if (this.optional(t)) return !0;
                var n, r = new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),
                    i = e.substr(e.length - 1).toUpperCase();
                return !(10 < (e = e.toString().toUpperCase()).length || e.length < 9 || !r.test(e)) && (n = 9 === (e = e.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2")).length ? e.substr(0, 8) : e.substr(0, 9), "TRWAGMYFPDXBNJZSQVHLCKET".charAt(parseInt(n, 10) % 23) === i)
            }, "Please specify a valid NIE number."), l.validator.addMethod("nifES", function (e, t) {
                return !!this.optional(t) || !!(e = e.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(e) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.substring(8, 0) % 23) === e.charAt(8) : !!/^[KLM]{1}/.test(e) && e[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(e.substring(8, 1) % 23))
            }, "Please specify a valid NIF number."), l.validator.addMethod("nipPL", function (e) {
                if (10 !== (e = e.replace(/[^0-9]/g, "")).length) return !1;
                for (var t = [6, 5, 7, 2, 3, 4, 5, 6, 7], n = 0, r = 0; r < 9; r++) n += t[r] * e[r];
                var i = n % 11;
                return (10 === i ? 0 : i) === parseInt(e[9], 10)
            }, "Please specify a valid NIP number."), l.validator.addMethod("nisBR", function (e) {
                var t, n, r, i, a, o = 0;
                if (11 !== (e = e.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")).length) return !1;
                for (n = parseInt(e.substring(10, 11), 10), t = parseInt(e.substring(0, 10), 10), i = 2; i < 12; i++) 10 === (a = i) && (a = 2), 11 === i && (a = 3), o += t % 10 * a, t = parseInt(t / 10, 10);
                return n === (r = 1 < (r = o % 11) ? 11 - r : 0)
            }, "Please specify a valid NIS/PIS number"), l.validator.addMethod("notEqualTo", function (e, t, n) {
                return this.optional(t) || !l.validator.methods.equalTo.call(this, e, t, n)
            }, "Please enter a different value, values must not be the same."), l.validator.addMethod("nowhitespace", function (e, t) {
                return this.optional(t) || /^\S+$/i.test(e)
            }, "No white space please"), l.validator.addMethod("pattern", function (e, t, n) {
                return !!this.optional(t) || ("string" == typeof n && (n = new RegExp("^(?:" + n + ")$")), n.test(e))
            }, "Invalid format."), l.validator.addMethod("phoneNL", function (e, t) {
                return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
            }, "Please specify a valid phone number."), l.validator.addMethod("phonePL", function (e, t) {
                e = e.replace(/\s+/g, "");
                return this.optional(t) || /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/.test(e)
            }, "Please specify a valid phone number"), l.validator.addMethod("phonesUK", function (e, t) {
                return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || 9 < e.length && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
            }, "Please specify a valid uk phone number"), l.validator.addMethod("phoneUK", function (e, t) {
                return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || 9 < e.length && e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
            }, "Please specify a valid phone number"), l.validator.addMethod("phoneUS", function (e, t) {
                return e = e.replace(/\s+/g, ""), this.optional(t) || 9 < e.length && e.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)
            }, "Please specify a valid phone number"), l.validator.addMethod("postalcodeBR", function (e, t) {
                return this.optional(t) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(e)
            }, "Informe um CEP válido."), l.validator.addMethod("postalCodeCA", function (e, t) {
                return this.optional(t) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(e)
            }, "Please specify a valid postal code"), l.validator.addMethod("postalcodeIT", function (e, t) {
                return this.optional(t) || /^\d{5}$/.test(e)
            }, "Please specify a valid postal code"), l.validator.addMethod("postalcodeNL", function (e, t) {
                return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e)
            }, "Please specify a valid postal code"), l.validator.addMethod("postcodeUK", function (e, t) {
                return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e)
            }, "Please specify a valid UK postcode"), l.validator.addMethod("require_from_group", function (e, t, n) {
                var r = l(n[1], t.form), i = r.eq(0),
                    a = i.data("valid_req_grp") ? i.data("valid_req_grp") : l.extend({}, this),
                    o = r.filter(function () {
                        return a.elementValue(this)
                    }).length >= n[0];
                return i.data("valid_req_grp", a), l(t).data("being_validated") || (r.data("being_validated", !0), r.each(function () {
                    a.element(this)
                }), r.data("being_validated", !1)), o
            }, l.validator.format("Please fill at least {0} of these fields.")), l.validator.addMethod("skip_or_fill_minimum", function (e, t, n) {
                var r = l(n[1], t.form), i = r.eq(0),
                    a = i.data("valid_skip") ? i.data("valid_skip") : l.extend({}, this), o = r.filter(function () {
                        return a.elementValue(this)
                    }).length, s = 0 === o || o >= n[0];
                return i.data("valid_skip", a), l(t).data("being_validated") || (r.data("being_validated", !0), r.each(function () {
                    a.element(this)
                }), r.data("being_validated", !1)), s
            }, l.validator.format("Please either skip these fields or fill at least {0} of them.")), l.validator.addMethod("stateUS", function (e, t, n) {
                var r, i = void 0 === n, a = !i && void 0 !== n.caseSensitive && n.caseSensitive,
                    o = !i && void 0 !== n.includeTerritories && n.includeTerritories,
                    s = !i && void 0 !== n.includeMilitary && n.includeMilitary;
                return r = o || s ? o && s ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : o ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", r = a ? new RegExp(r) : new RegExp(r, "i"), this.optional(t) || r.test(e)
            }, "Please specify a valid state"), l.validator.addMethod("strippedminlength", function (e, t, n) {
                return l(e).text().length >= n
            }, l.validator.format("Please enter at least {0} characters")), l.validator.addMethod("time", function (e, t) {
                return this.optional(t) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(e)
            }, "Please enter a valid time, between 00:00 and 23:59"), l.validator.addMethod("time12h", function (e, t) {
                return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)
            }, "Please enter a valid time in 12-hour am/pm format"), l.validator.addMethod("url2", function (e, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            }, l.validator.messages.url), l.validator.addMethod("vinUS", function (e) {
                if (17 !== e.length) return !1;
                var t, n, r, i, a, o,
                    s = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                    l = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
                    u = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], d = 0;
                for (t = 0; t < 17; t++) {
                    if (i = u[t], r = e.slice(t, t + 1), 8 === t && (o = r), isNaN(r)) {
                        for (n = 0; n < s.length; n++) if (r.toUpperCase() === s[n]) {
                            r = l[n], r *= i, isNaN(o) && 8 === n && (o = s[n]);
                            break
                        }
                    } else r *= i;
                    d += r
                }
                return 10 === (a = d % 11) && (a = "X"), a === o
            }, "The specified vehicle identification number (VIN) is invalid."), l.validator.addMethod("zipcodeUS", function (e, t) {
                return this.optional(t) || /^\d{5}(-\d{4})?$/.test(e)
            }, "The specified US ZIP Code is invalid"), l.validator.addMethod("ziprange", function (e, t) {
                return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(e)
            }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"), l
        }, "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate"], r) : "object" === (void 0 === t ? "undefined" : i(t)) && t.exports ? t.exports = r(e("jquery")) : r(jQuery)
    }, {jquery: 1}], 3: [function (e, t, n) {
        "use strict";
        e("./main"), e("./popup");
        var r, i = e("./contact-us"), a = (r = i) && r.__esModule ? r : {default: r};
        svg4everybody(), (0, a.default)()
    }, {"./contact-us": 4, "./main": 7, "./popup": 8}], 4: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = function () {
            var t = {
                $contactUsModal: $("#contactUsModal"),
                $contactUsForm: $("#contact-form"),
                $modalMessage: $("#modalMessage"),
                messages: {
                    en: {successSend: "Your message was successfully  sent!"},
                    ru: {successSend: "Ваше сообщение было успешно отправлено!"}
                },
                appLang: window.__app_lang || "en"
            }, n = t.messages[t.appLang] || t.messages.en;
            t.$contactUsForm.validate(new a.default(function (e) {
                $.ajax({
                    url: dle_root + "engine/ajax/feedback.php",
                    data: $(e).serialize(),
                    type: "POST",
                    dataType: "json",
                    success: function (e) {
                        e && ("ok" === e.status ? (t.$modalMessage.html(n.successSend || ""), t.$contactUsForm[0].reset()) : t.$modalMessage.html(e.text), t.$contactUsModal.modal("show"))
                    }
                })
            }))
        };
        var r, i = e("./validation"), a = (r = i) && r.__esModule ? r : {default: r}
    }, {"./validation": 9}], 5: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (e) {
            var t = {
                ru: {
                    subject: {
                        required: "Введите тему",
                        minlength: "Тема слишком короткая",
                        maxlength: "Тема слишком длинная",
                        topicCheck: "Тема содержит недопустимые символы"
                    },
                    message: {
                        required: "Введите текст сообщения",
                        minlength: "Невалидная длина текста сообщения",
                        maxlength: "Невалидная длина текста сообщения"
                    },
                    name: {
                        required: "Введите имя",
                        minlength: "Имя пользователя слишком короткое",
                        maxlength: "Недопустимая длина имени. Имя не может быть более {0} символов!",
                        alphabetsOnly: "Имя может содержать только буквы"
                    },
                    firstname: {
                        required: "Введите имя",
                        minlength: "Имя пользователя слишком короткое",
                        maxlength: "Недопустимая длина имени. Имя не может быть более {0} символов!",
                        alphabetsOnly: "Имя может содержать только буквы"
                    },
                    username: {
                        required: "Введите имя",
                        minlength: "Имя пользователя слишком короткое",
                        maxlength: "Недопустимая длина имени. Имя не может быть более {0} символов!",
                        alphabetsOnly: "Имя может содержать только буквы"
                    },
                    lastname: {
                        required: "Введите фамилию",
                        minlength: "Фамилия слишком короткая",
                        maxlength: "Недопустимая длина фамилии. фамилия не может быть более {0} символов!",
                        alphabetsOnly: "Фамилия может содержать только буквы"
                    },
                    password: {
                        required: "Введите пароль",
                        minlength: "Вы используете недопустимый пароль",
                        maxlength: "Вы используете недопустимый пароль"
                    },
                    password1: {
                        required: "Введите пароль",
                        minlength: "Пароль должен содержать минимум {0} символов",
                        maxlength: "Пароль должен содержать максимум {0} символов",
                        passwordCheck: "Пароль должен содержать 1 цифру и 1 заглавную букву"
                    },
                    password2: {required: "Введите пароль ещё раз", equalTo: "Пароли должны совпадать"},
                    confirm_password: {
                        required: "Введите пароль ещё раз",
                        minlength: "Вы используете недопустимый пароль",
                        maxlength: "Вы используете недопустимый пароль",
                        equalTo: "Пароли должны совпадать"
                    },
                    login_password: {
                        required: "Введите пароль",
                        minlength: "Пароль должен быть длинее {0} символов",
                        maxlength: "Вы используете недопустимый пароль",
                        equalTo: "Пароли должны совпадать"
                    },
                    fullPhone: {
                        required: "Телефон не прошел валидацию",
                        digits: "Телефон не прошел валидацию",
                        minlength: "Телефон не прошел валидацию",
                        maxlength: "Телефон не прошел валидацию"
                    },
                    dateofbirth: "Обязательное поле",
                    marital_status: "Обязательное поле",
                    phoneprefix2: "Выберите страну",
                    email: "Введите валидный email",
                    login_name: "Введите валидный email",
                    agree: "Примите наши условия",
                    isConditionsAccepted: "Примите наши условия",
                    tosaccept: "Примите наши условия",
                    phone: {
                        required: "Введите телефон",
                        digits: "Вводите только цифры",
                        minlength: "Телефон должен содержать минимум {0} символов",
                        maxlength: "Телефон должен содержать максимум {0} символов"
                    },
                    currency: "Выберите валюту",
                    jq_validate_grecaptcha: "Невалидный код безопасности",
                    amount: {required: "Введите сумму пополнения", digits: "Вводите только цифры"},
                    wmid: {
                        required: "Введите WMID код",
                        exactLength: "WMID должен содержать {0} цифр",
                        digits: "WMID код должен состоять только цифры"
                    },
                    wm_wallet: {required: "Выберите кошелек"},
                    paysystem: "Выберите способ оплаты",
                    country: "Выберите страну",
                    platform: "Выберите кошелек для пополнения",
                    recaptcha: {checkCaptcha: "Пожалуйста, подтвердите, что Вы не робот"},
                    topic: "Тема должна быть от 3 до 30 символов",
                    date_of_birth_visible: "Дата рождения обязательное поле",
                    address: {
                        required: "Адрес регистрации обязательное поле",
                        minlength: "Поле адрес должен содержать минимум {0} символов",
                        maxlength: "Поле адрес должен содержать максимум {0} символов"
                    },
                    city: {
                        required: "Город обязательное поле",
                        minlength: "Поле город должено содержать минимум {0} символов",
                        maxlength: "Поле город должено содержать максимум {0} символов"
                    },
                    zip_code: {
                        required: "Почтовый индекс обязательное поле",
                        minlength: "Поле почтовый индекс должено содержать минимум {0} символов",
                        maxlength: "Поле почтовый индекс должено содержать максимум {0} символов",
                        digits: "Поле почтовый индекс должено содержать только цифры"
                    }
                }, en: {
                    subject: {
                        required: "Enter subject",
                        minlength: "Subject is too short",
                        maxlength: "Topic is too long",
                        topicCheck: "Subject contains invalid characters"
                    },
                    message: {
                        required: "Enter your message",
                        minlength: "Invalid text message length",
                        maxlength: "Invalid text message length"
                    },
                    name: {
                        required: "Name cannot be empty",
                        minlength: "Your username must consist of at least {0} characters",
                        maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Name can have only letters"
                    },
                    firstname: {
                        required: "Name cannot be empty",
                        minlength: "Your name must consist of at least 3 characters",
                        maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Name can have only letters"
                    },
                    username: {
                        required: "Username cannot be empty",
                        minlength: "Your username must consist of at least 3 characters",
                        maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Name can have only letters"
                    },
                    lastname: {
                        required: "Lastname cannot be empty",
                        minlength: "Lastname must consist of at least 3 characters",
                        maxlength: "Invalid length of the lastname. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Lastname can have only letters"
                    },
                    password: {
                        required: "Please provide a password",
                        minlength: "The password must be at least {0} characters",
                        maxlength: "Invalid password"
                    },
                    password1: {
                        required: "Please provide a password",
                        minlength: "The password must be at least {0} characters",
                        maxlength: "The password must be no more {0} characters",
                        passwordCheck: "Password must contain 1 number and capital letter"
                    },
                    password2: {
                        required: "Please provide a password",
                        equalTo: "Please enter the same password as above"
                    },
                    confirm_password: {
                        required: "Please provide a password",
                        minlength: "Confirmation password must be at least {0} characters long",
                        maxlength: "Invalid confirmation password",
                        equalTo: "Please enter the same password as above"
                    },
                    login_password: {
                        required: "Please provide a password",
                        minlength: "The password must be at least {0} characters",
                        maxlength: "Invalid password",
                        equalTo: "Please enter the same password as above"
                    },
                    fullPhone: {
                        required: "Invalid phone",
                        digits: "Invalid phone",
                        minlength: "Invalid phone",
                        maxlength: "Invalid phone",
                        hasCountryCode: "Enter the phone with valid country code"
                    },
                    dateofbirth: "This field is required",
                    marital_status: "This field is required",
                    phoneprefix2: "Choose the country",
                    email: "Please enter a valid email address",
                    login_name: "Please enter a valid email address",
                    agree: "Please accept our policy",
                    isConditionsAccepted: "Please accept our policy",
                    tosaccept: "Please accept our policy",
                    phone: "Invalid phone",
                    currency: "Select currency",
                    jq_validate_grecaptcha: "Incorrect security code",
                    amount: {digits: "Enter only digits"},
                    wmid: {
                        required: "Enter the WMID code",
                        exactLength: "WMID code must have {0} digits",
                        digits: "WMID code should consist only of digits"
                    },
                    paysystem: "Choose payment method",
                    country: "Choose the country",
                    platform: "Choose wallet to make a deposit",
                    recaptcha: {checkCaptcha: "Please confirm that you are not a robot"},
                    topic: "Topic must be between 3 and 30 characters",
                    date_of_birth_visible: "Date of birth field is required",
                    address: {
                        required: "Address field is required",
                        minlength: "Field address must consist of at least {0} characters",
                        maxlength: "Field address can't be more than {0} characters!"
                    },
                    city: {
                        required: "City field is required",
                        minlength: "Field city must consist of at least {0} characters",
                        maxlength: "Field city can't be more than {0} characters!"
                    },
                    zip_code: {
                        required: "Zip code field is required",
                        minlength: "Field zip code must consist of at least {0} characters",
                        maxlength: "Field zip code can't be more than {0} characters!",
                        digits: "Field zip code should consist only of digits"
                    }
                }, pl: {
                    subject: {
                        required: "Wprowadź temat",
                        minlength: "Temat jest za krótki",
                        maxlength: "Temat jest za długi",
                        topicCheck: "Temat zawiera nieprawidłowe znaki"
                    },
                    // topic: {
                    //     required: "Wprowadź temat",
                    //     minlength: "Temat jest za krótki",
                    //     maxlength: "Temat jest za długi",
                    //     topicCheck: "Temat zawiera nieprawidłowe znaki"
                    // },
                    message: {
                        required: "Wpisz swoją wiadomość",
                        minlength: "Nieprawidłowa długość wiadomości tekstowej",
                        maxlength: "Nieprawidłowa długość wiadomości tekstowej"
                    },
                    name: {
                        required: "Nazwa nie może być pusta",
                        minlength: "Twoja nazwa użytkownika musi składać się z co najmniej {0} znaków",
                        maxlength: "Nieprawidłowa długość nazwy. Nazwa użytkownika musi zawierać od 3 do {0} znaków",
                        alphabetsOnly: "Nazwa może zawierać tylko litery"
                    },
                    firstname: {
                        required: "Nazwa nie może być pusta",
                        minlength: "Twoja nazwa użytkownika musi składać się z co najmniej {0} znaków",
                        maxlength: "Nieprawidłowa długość nazwy. Nazwa użytkownika musi zawierać od 3 do {0} znaków",
                        alphabetsOnly: "Nazwa może zawierać tylko litery"
                    },
                    username: {
                        required: "Nazwa nie może być pusta",
                        minlength: "Twoja nazwa użytkownika musi składać się z co najmniej {0} znaków",
                        maxlength: "Nieprawidłowa długość nazwy. Nazwa użytkownika musi zawierać od 3 do {0} znaków",
                        alphabetsOnly: "Nazwa może zawierać tylko litery"
                    },
                    lastname: {
                        required: "Nazwisko nie może być puste",
                        minlength: "Nazwisko musi składać się z co najmniej 3 znaków",
                        maxlength: "Nieprawidłowa długość nazwiska. Nazwa użytkownika musi składać się z 3 do {0} znaków",
                        alphabetsOnly: "Nazwisko może mieć tylko litery"
                    },
                    password: {
                        required: "Podaj hasło",
                        minlength: "Hasło musi mieć co najmniej {0} znaków",
                        maxlength: "Nieprawidłowe hasło"
                    },
                    password1: {
                        required: "Podaj hasło",
                        minlength: "Hasło musi mieć co najmniej {0} znaków",
                        maxlength: "Nieprawidłowe hasło"
                    },
                    password2: {
                        required: "Podaj hasło",
                        minlength: "Hasło potwierdzające musi mieć co najmniej {0} znaków",
                        maxlength: "Nieprawidłowe hasło potwierdzające",
                        equalTo: "Wprowadź takie samo hasło jak powyżej"
                    },
                    confirm_password: {
                        required: "Podaj hasło",
                        minlength: "Hasło potwierdzające musi mieć co najmniej {0} znaków",
                        maxlength: "Nieprawidłowe hasło potwierdzające",
                        equalTo: "Wprowadź takie samo hasło jak powyżej"
                    },
                    login_password: {
                        required: "Podaj hasło",
                        minlength: "Hasło musi mieć co najmniej {0} znaków",
                        maxlength: "Nieprawidłowe hasło"
                    },
                    fullPhone: {
                        required: "Nieprawidłowy telefon",
                        digits: "Nieprawidłowy telefon",
                        minlength: "Nieprawidłowy telefon",
                        maxlength: "Nieprawidłowy telefon",
                        hasCountryCode: "Wprowadź telefon z prawidłowym numerem kierunkowym kraju"
                    },
                    dateofbirth: "To pole jest wymagane",
                    marital_status: "To pole jest wymagane",
                    phoneprefix2: "Wybierz kraj",
                    email: "Proszę wpisać aktualny adres e-mail",
                    login_name: "Proszę wpisać aktualny adres e-mail",
                    agree: "Zaakceptuj nasze zasady",
                    isConditionsAccepted: "Zaakceptuj nasze zasady",
                    tosaccept: "Zaakceptuj nasze zasady",
                    phone: "Nieprawidłowy telefon",
                    currency: "Wybierz walutę",
                    jq_validate_grecaptcha: "Niepoprawny kod zabezpieczający",
                    topic: "Temat musi mieć od 3 do 30 znaków",
                    wmid: {
                        required: "Wprowadź kod WMID",
                        minlength: "Kod WMID musi składać się z {0} cyfr",
                        maxlength: "Kod WMID musi składać się z {0} cyfr",
                        digits: "Kod WMID powinien składać się wyłącznie z cyfr"
                    }
                }, it: {
                    subject: {
                        required: "Inserisci l'oggetto",
                        minlength: "Il soggetto è troppo corto",
                        maxlength: "L'argomento è troppo lungo",
                        topicCheck: "L'oggetto contiene caratteri non validi"
                    },
                    message: {
                        required: "Inserisci il tuo messaggio",
                        minlength: "Lunghezza del messaggio di testo non valida",
                        maxlength: "Lunghezza del messaggio di testo non valida"
                    },
                    name: {
                        required: "Il nome non può essere vuoto",
                        minlength: "Il tuo nome utente deve contenere almeno {0} caratteri",
                        maxlength: "Lunghezza non valida del nome Il nome utente deve contenere da 3 a {0} caratteri",
                        alphabetsOnly: "Il nome può contenere solo lettere"
                    },
                    firstname: {
                        required: "Il nome non può essere vuoto",
                        minlength: "Il tuo nome utente deve contenere almeno {0} caratteri",
                        maxlength: "Lunghezza non valida del nome Il nome utente deve contenere da 3 a {0} caratteri",
                        alphabetsOnly: "Il nome può contenere solo lettere"
                    },
                    username: {
                        required: "Il nome non può essere vuoto",
                        minlength: "Il tuo nome utente deve contenere almeno {0} caratteri",
                        maxlength: "Lunghezza non valida del nome Il nome utente deve contenere da 3 a {0} caratteri",
                        alphabetsOnly: "Il nome può contenere solo lettere"
                    },
                    lastname: {
                        required: "Il cognome non può essere vuoto",
                        minlength: "Il cognome deve contenere almeno {0} caratteri",
                        maxlength: "Lunghezza non valida del cognome Il nome utente deve contenere da 3 a {0} caratteri",
                        alphabetsOnly: "Il cognome può contenere solo lettere"
                    },
                    password: {
                        required: "Si prega di fornire una password",
                        minlength: "La password deve contenere almeno {0} caratteri",
                        maxlength: "Password non valida"
                    },
                    password1: {
                        required: "Si prega di fornire una password",
                        minlength: "La password deve contenere almeno {0} caratteri",
                        maxlength: "Password non valida"
                    },
                    password2: {
                        required: "Please provide a password",
                        minlength: "La password di conferma deve essere lunga almeno {0} caratteri",
                        maxlength: "Password di conferma non valida",
                        equalTo: "Si prega di inserire la stessa password di cui sopra"
                    },
                    confirm_password: {
                        required: "Please provide a password",
                        minlength: "La password di conferma deve essere lunga almeno {0} caratteri",
                        maxlength: "Password di conferma non valida",
                        equalTo: "Si prega di inserire la stessa password di cui sopra"
                    },
                    login_password: {
                        required: "Si prega di fornire una password",
                        minlength: "La password deve contenere almeno {0} caratteri",
                        maxlength: "Password non valida"
                    },
                    fullPhone: {
                        required: "Telefono non valido",
                        digits: "Telefono non valido",
                        minlength: "Telefono non valido",
                        maxlength: "Telefono non valido",
                        hasCountryCode: "Inserire il telefono con il prefisso internazionale valido"
                    },
                    dateofbirth: "Questo campo è obbligatorio",
                    marital_status: "Questo campo è obbligatorio",
                    phoneprefix2: "Wybierz kraj",
                    email: "Si prega di inserire un indirizzo email valido",
                    login_name: "Si prega di inserire un indirizzo email valido",
                    agree: "Si prega di accettare la nostra politica",
                    isConditionsAccepted: "Si prega di accettare la nostra politica",
                    tosaccept: "Si prega di accettare la nostra politica",
                    phone: "Telefono non valido",
                    currency: "Wybierz walutę",
                    jq_validate_grecaptcha: "Codice di sicurezza errato",
                    wmid: {
                        required: "Inserisci il codice WMID",
                        minlength: "Il codice WMID deve avere {0} cifre",
                        maxlength: "Il codice WMID deve avere {0} cifre",
                        digits: "Il codice WMID deve essere composto solo da cifre"
                    },
                    recaptcha: {checkCaptcha: "Codice di sicurezza errato"},
                    topic: "L'oggetto deve contenere da 3 a 30 caratteri"
                }, fr: {
                    subject: {
                        required: "Entrez le sujet",
                        minlength: "Le sujet est trop court",
                        maxlength: "Le sujet est trop long",
                        topicCheck: "Le sujet contient des caractères non valides"
                    },
                    message: {
                        required: "Entrez votre message",
                        minlength: "Longueur du message texte invalide",
                        maxlength: "Longueur du message texte invalide"
                    },
                    name: {
                        required: "Le nom ne peut pas être vide",
                        minlength: "Votre nom d'utilisateur doit comporter au moins {0} caractères",
                        maxlength: "Longueur non valide du nom. Le nom d'utilisateur doit comporter de 3 à {0} caractères",
                        alphabetsOnly: "Le nom ne peut contenir que des lettres"
                    },
                    firstname: {
                        required: "Le nom ne peut pas être vide",
                        minlength: "Votre nom doit comporter au moins {0} caractères",
                        maxlength: "Longueur non valide du nom. Le nom d'utilisateur doit comporter de 3 à {0} caractères",
                        alphabetsOnly: "Le nom ne peut contenir que des lettres"
                    },
                    username: {
                        required: "Le nom ne peut pas être vide",
                        minlength: "Votre nom d'utilisateur doit comporter au moins 3 caractères",
                        maxlength: "Longueur non valide du nom. Le nom d'utilisateur doit comporter de 3 à {0} caractères",
                        alphabetsOnly: "Le nom ne peut contenir que des lettres"
                    },
                    lastname: {
                        required: "Le nom de famille ne peut pas être vide",
                        minlength: "Le nom de famille doit comporter au moins {0} caractères",
                        maxlength: "La longueur du nom de famille est invalide. Le nom d'utilisateur doit comporter de 3 à {0} caractères",
                        alphabetsOnly: "Le nom de famille ne peut contenir que des lettres"
                    },
                    password: {
                        required: "S'il vous plaît fournir un mot de passe",
                        minlength: "Le mot de passe doit comporter au moins {0} caractères",
                        maxlength: "Mot de passe incorrect"
                    },
                    password1: {
                        required: "S'il vous plaît fournir un mot de passe",
                        minlength: "Le mot de passe doit comporter au moins 6 caractères",
                        maxlength: "Mot de passe incorrect"
                    },
                    password2: {
                        required: "S'il vous plaît fournir un mot de passe",
                        minlength: "Le mot de passe de confirmation doit comporter au moins {0} caractères",
                        maxlength: "Mot de passe de confirmation invalide",
                        equalTo: "Entrez le même mot de passe que ci-dessus"
                    },
                    confirm_password: {
                        required: "S'il vous plaît fournir un mot de passe",
                        minlength: "Le mot de passe de confirmation doit comporter au moins {0} caractères",
                        maxlength: "Mot de passe de confirmation invalide",
                        equalTo: "Entrez le même mot de passe que ci-dessus"
                    },
                    login_password: {
                        required: "S'il vous plaît fournir un mot de passe",
                        minlength: "Le mot de passe de confirmation doit comporter au moins {0} caractères",
                        maxlength: "Mot de passe de confirmation invalide",
                        equalTo: "Entrez le même mot de passe que ci-dessus"
                    },
                    fullPhone: {
                        required: "Téléphone invalide",
                        digits: "Téléphone invalide",
                        minlength: "Téléphone invalide",
                        maxlength: "Téléphone invalide",
                        hasCountryCode: "Entrez le téléphone avec le code de pays valide"
                    },
                    dateofbirth: "Ce champ est requis",
                    marital_status: "Ce champ est requis",
                    phoneprefix2: "Choisissez le pays",
                    email: "S'il vous plaît, mettez une adresse email valide\n",
                    login_name: "S'il vous plaît, mettez une adresse email valide\n",
                    agree: "S'il vous plaît accepter notre politique",
                    isConditionsAccepted: "S'il vous plaît accepter notre politique",
                    tosaccept: "S'il vous plaît accepter notre politique",
                    phone: "Téléphone invalide",
                    currency: "Wybierz walutę",
                    jq_validate_grecaptcha: "Code de sécurité incorrect",
                    wmid: {
                        required: "Entrez le code WMID",
                        minlength: "Le code WMID doit avoir {0} chiffres",
                        maxlength: "Le code WMID doit avoir {0} chiffres",
                        digits: "Le code WMID ne doit contenir que des chiffres"
                    },
                    recaptcha: {checkCaptcha: "Code de sécurité incorrect"},
                    topic: "Le sujet doit comporter entre 3 et 30 caractères"
                }, es: {
                    subject: {
                        required: "Entrar sujeto",
                        minlength: "El sujeto es demasiado corto",
                        maxlength: "El tema es demasiado largo",
                        topicCheck: "Le sujet contient des caractères non valides"
                    },
                    message: {
                        required: "Ingrese su mensaje",
                        minlength: "Longitud de mensaje de texto no válido",
                        maxlength: "Longitud de mensaje de texto no válido"
                    },
                    name: {
                        required: "El nombre no puede estar vacío",
                        minlength: "Su nombre de usuario debe constar de al menos {0} caracteres",
                        maxlength: "Longitud inválida del nombre El nombre de usuario debe ser de 3 a {0} caracteres",
                        alphabetsOnly: "El nombre solo puede tener letras"
                    },
                    firstname: {
                        required: "El nombre no puede estar vacío",
                        minlength: "Tu nombre debe constar de al menos {0} caracteres",
                        maxlength: "Longitud inválida del nombre El nombre de usuario debe ser de 3 a {0} caracteres",
                        alphabetsOnly: "El nombre solo puede tener letras"
                    },
                    username: {
                        required: "El nombre de usuario no puede estar vacío",
                        minlength: "Su nombre de usuario debe constar de al menos {0} caracteres",
                        maxlength: "Longitud inválida del nombre El nombre de usuario debe ser de 3 a {0} caracteres",
                        alphabetsOnly: "El nombre solo puede tener letras"
                    },
                    lastname: {
                        required: "El apellido no puede estar vacío",
                        minlength: "El apellido debe constar de al menos {0} caracteres",
                        maxlength: "Longitud inválida del apellido El nombre de usuario debe ser de 3 a {0} caracteres",
                        alphabetsOnly: "El apellido solo puede tener letras"
                    },
                    password: {
                        required: "Por favor ingrese una contraseña",
                        minlength: "La contraseña debe tener al menos {0} caracteres",
                        maxlength: "Contraseña invalida"
                    },
                    password1: {
                        required: "Por favor ingrese una contraseña",
                        minlength: "La contraseña debe tener al menos {0} caracteres",
                        maxlength: "Contraseña invalida"
                    },
                    password2: {
                        required: "Por favor ingrese una contraseña",
                        minlength: "La contraseña de confirmación debe tener al menos {0} caracteres de largo",
                        maxlength: "Contraseña de confirmación inválida",
                        equalTo: "Por favor ingrese la misma contraseña que arriba"
                    },
                    confirm_password: {
                        required: "Por favor ingrese una contraseña",
                        minlength: "La contraseña de confirmación debe tener al menos {0} caracteres de largo",
                        maxlength: "Contraseña de confirmación inválida",
                        equalTo: "Por favor ingrese la misma contraseña que arriba"
                    },
                    login_password: {
                        required: "Por favor ingrese una contraseña",
                        minlength: "La contraseña debe tener al menos {0} caracteres",
                        maxlength: "Contraseña invalida",
                        equalTo: "Por favor ingrese la misma contraseña que arriba"
                    },
                    fullPhone: {
                        required: "Teléfono inválido",
                        digits: "Teléfono inválido",
                        minlength: "Teléfono inválido",
                        maxlength: "Teléfono inválido",
                        hasCountryCode: "Ingrese el teléfono con el código de país válido"
                    },
                    dateofbirth: "Este campo es requerido",
                    marital_status: "Este campo es requerido",
                    phoneprefix2: "Elija el país",
                    email: "Por favor, introduce una dirección de correo electrónico válida",
                    login_name: "Por favor, introduce una dirección de correo electrónico válida",
                    agree: "Por favor acepta nuestra política",
                    isConditionsAccepted: "Por favor acepta nuestra política",
                    tosaccept: "Por favor acepta nuestra política",
                    phone: "Teléfono inválido",
                    currency: "Seleccione el tipo de moneda",
                    jq_validate_grecaptcha: "Código de seguridad incorrecto",
                    wmid: {
                        required: "Ingrese el código WMID",
                        minlength: "El código WMID debe tener {0} dígitos",
                        maxlength: "El código WMID debe tener {0} dígitos",
                        digits: "El código WMID debe consistir solo en dígitos"
                    },
                    recaptcha: {checkCaptcha: "Código de seguridad incorrecto"},
                    topic: "El asunto debe tener entre 3 y 30 caracteres"
                }, pt: {
                    subject: {
                        required: "Enter subject",
                        minlength: "Subject is too short",
                        maxlength: "Topic is too long",
                        topicCheck: "Subject contains invalid characters"
                    },
                    message: {
                        required: "Insira a sua mensagem",
                        minlength: "O assunto da mensagem é muito curto",
                        maxlength: "O assunto da mensagem é muito curto"
                    },
                    name: {
                        required: "O nome não pode estar vazio",
                        minlength: "O nome deve conter pelo menos 3 caracteres",
                        maxlength: "Comprimento inválido do sobrenome. O nome de usuário deve ter de 3 a {0} caracteres!",
                        alphabetsOnly: "O nome só pode conter letras"
                    },
                    firstname: {
                        required: "O nome não pode estar vazio",
                        minlength: "Your name must consist of at least 3 characters",
                        maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Name can have only letters"
                    },
                    username: {
                        required: "Username cannot be empty",
                        minlength: "Your username must consist of at least 3 characters",
                        maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Name can have only letters"
                    },
                    lastname: {
                        required: "Lastname cannot be empty",
                        minlength: "Lastname must consist of at least 3 characters",
                        maxlength: "Invalid length of the lastname. Username must be from 3 to {0} characters!",
                        alphabetsOnly: "Lastname can have only letters"
                    },
                    password: {
                        required: "Insira a sua password",
                        minlength: "The password must be at least {0} characters",
                        maxlength: "Invalid password"
                    },
                    password1: {
                        required: "Insira a sua password",
                        minlength: "The password must be at least {0} characters",
                        maxlength: "The password must be no more {0} characters",
                        passwordCheck: "Password must contain 1 number and capital letter"
                    },
                    password2: {required: "Insira a sua password", equalTo: "Please enter the same password as above"},
                    confirm_password: {
                        required: "Insira a sua password",
                        minlength: "Confirmation password must be at least {0} characters long",
                        maxlength: "Invalid confirmation password",
                        equalTo: "Please enter the same password as above"
                    },
                    login_password: {
                        required: "Insira a sua password",
                        minlength: "The password must be at least {0} characters",
                        maxlength: "Invalid password",
                        equalTo: "Please enter the same password as above"
                    },
                    fullPhone: {
                        required: "Invalid phone",
                        digits: "Invalid phone",
                        minlength: "Invalid phone",
                        maxlength: "Invalid phone",
                        hasCountryCode: "Enter the phone with valid country code"
                    },
                    dateofbirth: "Este campo é obrigatório",
                    marital_status: "Este campo é obrigatório",
                    phoneprefix2: "Choose the country",
                    email: "Por favor, insira um e-mail válido",
                    login_name: "Please enter a valid email address",
                    agree: "Please accept our policy",
                    isConditionsAccepted: "Please accept our policy",
                    tosaccept: "Please accept our policy",
                    phone: "Invalid phone",
                    currency: "Escolha a moeda",
                    jq_validate_grecaptcha: "Incorrect security code",
                    amount: {digits: "Enter only digits"},
                    wmid: {
                        required: "Enter the WMID code",
                        exactLength: "WMID code must have {0} digits",
                        digits: "WMID code should consist only of digits"
                    },
                    paysystem: "Choose payment method",
                    country: "Choose the country",
                    platform: "Choose wallet to make a deposit",
                    recaptcha: {checkCaptcha: "Por favor, confirme que não é um robô"},
                    topic: "O assunto deve ter entre 3 e 30 caracteres",
                    date_of_birth_visible: "Date of birth field is required",
                    address: {
                        required: "Address field is required",
                        minlength: "Field address must consist of at least {0} characters",
                        maxlength: "Field address can't be more than {0} characters!"
                    },
                    city: {
                        required: "City field is required",
                        minlength: "Field city must consist of at least {0} characters",
                        maxlength: "Field city can't be more than {0} characters!"
                    },
                    zip_code: {
                        required: "Zip code field is required",
                        minlength: "Field zip code must consist of at least {0} characters",
                        maxlength: "Field zip code can't be more than {0} characters!",
                        digits: "Field zip code should consist only of digits"
                    }
                }, de: {
                    subject: {
                        required: "Das Feld Betreff ist ein Pflichtfeld",
                        minlength: "Das Thema ist zu kurz",
                        maxlength: "Das Thema ist zu lang",
                        topicCheck: "Betreff enthält ungültige Zeichen"
                    },
                    message: {
                        required: "Geben Sie Ihre Nachricht ein",
                        minlength: "Ungültige Länge der Textnachricht",
                        maxlength: "Ungültige Länge der Textnachricht"
                    },
                    name: {
                        required: "Du hast keinen Namen eingegeben",
                        minlength: "Ihr Benutzername muss aus mindestens {0} Zeichen bestehen",
                        maxlength: "Ungültige Länge des Namens Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                        alphabetsOnly: "Der Name darf nur Buchstaben enthalten"
                    },
                    firstname: {
                        required: "Das Feld Vorname ist ein Pflichtfeld",
                        minlength: "Ihr Benutzername muss aus mindestens {0} Zeichen bestehen",
                        maxlength: "Ungültige Länge des Namens Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                        alphabetsOnly: "Der Name darf nur Buchstaben enthalten"
                    },
                    username: {
                        required: "Das Feld Vorname ist ein Pflichtfeld",
                        minlength: "Ihr Benutzername muss aus mindestens {0} Zeichen bestehen",
                        maxlength: "Ungültige Länge des Namens Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                        alphabetsOnly: "Der Name darf nur Buchstaben enthalten"
                    },
                    lastname: {
                        required: "Das Feld mit Nachnamen darf nicht leer sein!",
                        minlength: "Der Nachname muss aus mindestens {0} Zeichen bestehen",
                        maxlength: "Ungültige Länge des letzten Namens. Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                        alphabetsOnly: "Nachname darf nur Buchstaben enthalten"
                    },
                    password: {
                        required: "Geben Sie ein Passwort ein",
                        minlength: "Das Passwort muss mindestens {0} Zeichen lang sein",
                        maxlength: "Ungültiges Passwort"
                    },
                    password1: {
                        required: "Geben Sie ein Passwort ein",
                        minlength: "Das Passwort muss mindestens {0} Zeichen lang sein",
                        maxlength: "Ungültiges Passwort"
                    },
                    password2: {
                        required: "Geben Sie ein Passwort ein",
                        minlength: "Das Bestätigungskennwort muss mindestens {0} Zeichen lang sein",
                        maxlength: "Ungültiges Bestätigungspasswort",
                        equalTo: "Bitte geben Sie dasselbe Passwort noch einmal ein"
                    },
                    confirm_password: {
                        required: "Geben Sie ein Passwort ein",
                        minlength: "Das Bestätigungskennwort muss mindestens {0} Zeichen lang sein",
                        maxlength: "Ungültiges Bestätigungspasswort",
                        equalTo: "Bitte geben Sie dasselbe Passwort noch einmal ein"
                    },
                    login_password: {
                        required: "Geben Sie ein Passwort ein",
                        minlength: "Das Bestätigungskennwort muss mindestens {0} Zeichen lang sein",
                        maxlength: "Ungültiges Bestätigungspasswort",
                        equalTo: "Bitte geben Sie dasselbe Passwort noch einmal ein"
                    },
                    fullPhone: {
                        required: "Telefonfeld ist nicht gültig",
                        digits: "Telefonfeld ist nicht gültig",
                        minlength: "Telefonfeld ist nicht gültig",
                        maxlength: "Telefonfeld ist nicht gültig",
                        hasCountryCode: "Geben Sie das Telefon mit gültigem Ländercode ein"
                    },
                    dateofbirth: "Dieses Feld wird benötigt",
                    marital_status: "Dieses Feld wird benötigt",
                    phoneprefix2: "Wähle das Land aus",
                    email: "Geben Sie eine gültige E-Mail ein",
                    login_name: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
                    agree: "Bitte akzeptieren Sie unsere Politik",
                    isConditionsAccepted: "Bitte akzeptieren Sie unsere Politik",
                    tosaccept: "Bitte akzeptieren Sie unsere Politik",
                    phone: "Telefonfeld ist nicht gültig",
                    currency: "Wählen Sie die Währung",
                    jq_validate_grecaptcha: "Bestätigen Sie, dass Sie kein Roboter sind",
                    wmid: {
                        required: "Geben Sie den WMID-Code ein",
                        minlength: "WMID-Code muss {0} Ziffern haben",
                        maxlength: "WMID-Code muss {0} Ziffern haben",
                        digits: "WMID-Code sollte nur aus Ziffern bestehen"
                    },
                    recaptcha: {checkCaptcha: "Bestätigen Sie, dass Sie kein Roboter sind"},
                    topic: "Der Betreff muss zwischen 3 und 30 Zeichen lang sein"
                }, ar: {
                    subject: {
                        required: "أدخل الموضوع",
                        minlength: "الموضوع قصير جدا",
                        maxlength: "الموضوع طويل جدا",
                        topicCheck: "يحتوي الموضوع على أحرف غير صالحة"
                    },
                    message: {
                        required: "أدخل رسالتك",
                        minlength: "طول رسالة نصية غير صالح",
                        maxlength: "طول رسالة نصية غير صالح"
                    },
                    name: {
                        required: "لا يمكن أن يكون الاسم فارغا",
                        minlength: "يجب أن يتكون اسم المستخدم من {0} أحرف على الأقل",
                        maxlength: "طول الاسم غير صالح. يجب أن يكون اسم المستخدم من 3 إلى {0} حرفا!",
                        alphabetsOnly: "يمكن أن يحتوي الاسم على أحرف فقط"
                    },
                    firstname: {
                        required: "لا يمكن أن يكون الاسم فارغا",
                        minlength: "يجب أن يتكون اسم المستخدم من {0} أحرف على الأقل",
                        maxlength: "طول الاسم غير صالح. يجب أن يكون اسم المستخدم من 3 إلى {0} حرفا",
                        alphabetsOnly: "يمكن أن يحتوي الاسم على أحرف فقط"
                    },
                    username: {
                        required: "لا يمكن أن يكون الاسم فارغا",
                        minlength: "يجب أن يتكون اسم المستخدم من {0} أحرف على الأقل",
                        maxlength: "طول الاسم غير صالح. يجب أن يكون اسم المستخدم من 3 إلى {0} حرفا",
                        alphabetsOnly: "يمكن أن يحتوي الاسم على أحرف فقط"
                    },
                    lastname: {
                        required: "لا يمكن ترك اسم العائلة فارغا",
                        minlength: "يجب أن يتكون اسم العائلة من {0} أحرف على الأقل",
                        maxlength: "طول غير صالح للاسم الأخير. يجب أن يكون اسم المستخدم من 3 إلى {0} حرفا",
                        alphabetsOnly: "الاسم الأخير يمكن أن يكون فقط الحروف"
                    },
                    password: {
                        required: "يرجى تقديم كلمة مرور",
                        minlength: "يجب أن تتكون كلمة المرور من {0} أحرف على الأقل",
                        maxlength: "رمز مرور خاطئ"
                    },
                    password1: {
                        required: "يرجى تقديم كلمة مرور",
                        minlength: "يجب أن تتكون كلمة المرور من {0} أحرف على الأقل",
                        maxlength: "رمز مرور خاطئ"
                    },
                    password2: {
                        required: "يرجى تقديم كلمة مرور",
                        minlength: "يجب أن تتكون كلمة المرور من {0} أحرف على الأقل",
                        maxlength: "رمز مرور خاطئ",
                        equalTo: "يرجى إدخال كلمة المرور نفسها على النحو الوارد أعلاه"
                    },
                    confirm_password: {
                        required: "يرجى تقديم كلمة مرور",
                        minlength: "يجب أن تتكون كلمة المرور من {0} أحرف على الأقل",
                        maxlength: "رمز مرور خاطئ",
                        equalTo: "يرجى إدخال كلمة المرور نفسها على النحو الوارد أعلاه"
                    },
                    login_password: {
                        required: "يرجى تقديم كلمة مرور",
                        minlength: "يجب أن تتكون كلمة المرور من {0} أحرف على الأقل",
                        maxlength: "رمز مرور خاطئ",
                        equalTo: "يرجى إدخال كلمة المرور نفسها على النحو الوارد أعلاه"
                    },
                    fullPhone: {
                        required: "الهاتف غير صالح",
                        digits: "الهاتف غير صالح",
                        minlength: "الهاتف غير صالح",
                        maxlength: "الهاتف غير صالح",
                        hasCountryCode: "أدخل الهاتف برمز بلد صالح"
                    },
                    phoneprefix2: "اختر البلد",
                    email: "رجاء قم بإدخال بريد الكتروني صحيح",
                    login_name: "رجاء قم بإدخال بريد الكتروني صحيح",
                    agree: "يرجى قبول سياستنا",
                    isConditionsAccepted: "يرجى قبول سياستنا",
                    tosaccept: "يرجى قبول سياستنا",
                    phone: "الهاتف غير صالح",
                    currency: "اختر العملة",
                    jq_validate_grecaptcha: "رمز الحماية غير صحيحة",
                    wmid: {
                        required: "أدخل رمز وميد",
                        minlength: "يجب أن يكون رمز وميد {0} رقما",
                        maxlength: "يجب أن يكون رمز وميد {0} رقما",
                        digits: "يجب أن يتألف رمز وميد من أرقام فقط"
                    }
                }
            };
            return t[e] || t.en
        }
    }, {}], 6: [function (e, t, n) {
        "use strict";
        var r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r = function (d) {
            var n;
            d.extend(d.fn, {
                validate: function (e) {
                    if (this.length) {
                        var r = d.data(this[0], "validator");
                        return r || (this.attr("novalidate", "novalidate"), r = new d.validator(e, this[0]), d.data(this[0], "validator", r), r.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
                            r.submitButton = e.currentTarget, d(this).hasClass("cancel") && (r.cancelSubmit = !0), void 0 !== d(this).attr("formnovalidate") && (r.cancelSubmit = !0)
                        }), this.on("submit.validate", function (n) {
                            function e() {
                                var e, t;
                                return r.submitButton && (r.settings.submitHandler || r.formSubmitted) && (e = d("<input type='hidden'/>").attr("name", r.submitButton.name).val(d(r.submitButton).val()).appendTo(r.currentForm)), !(r.settings.submitHandler && !r.settings.debug) || (t = r.settings.submitHandler.call(r, r.currentForm, n), e && e.remove(), void 0 !== t && t)
                            }

                            return r.settings.debug && n.preventDefault(), r.cancelSubmit ? (r.cancelSubmit = !1, e()) : r.form() ? r.pendingRequest ? !(r.formSubmitted = !0) : e() : (r.focusInvalid(), !1)
                        })), r)
                    }
                    e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
                }, valid: function () {
                    var e, t, n;
                    return d(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = d(this[0].form).validate(), this.each(function () {
                        e = t.element(this) && e, e || (n = n.concat(t.errorList))
                    }), t.errorList = n), e
                }, rules: function (e, t) {
                    var n, r, i, a, o, s, l = this[0],
                        u = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                    if (null != l && (!l.form && u && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                        if (e) switch (r = (n = d.data(l.form, "validator").settings).rules, i = d.validator.staticRules(l), e) {
                            case"add":
                                d.extend(i, d.validator.normalizeRule(t)), delete i.messages, r[l.name] = i, t.messages && (n.messages[l.name] = d.extend(n.messages[l.name], t.messages));
                                break;
                            case"remove":
                                return t ? (s = {}, d.each(t.split(/\s/), function (e, t) {
                                    s[t] = i[t], delete i[t]
                                }), s) : (delete r[l.name], i)
                        }
                        return (a = d.validator.normalizeRules(d.extend({}, d.validator.classRules(l), d.validator.attributeRules(l), d.validator.dataRules(l), d.validator.staticRules(l)), l)).required && (o = a.required, delete a.required, a = d.extend({required: o}, a)), a.remote && (o = a.remote, delete a.remote, a = d.extend(a, {remote: o})), a
                    }
                }
            }), d.extend(d.expr.pseudos || d.expr[":"], {
                blank: function (e) {
                    return !d.trim("" + d(e).val())
                }, filled: function (e) {
                    var t = d(e).val();
                    return null !== t && !!d.trim("" + t)
                }, unchecked: function (e) {
                    return !d(e).prop("checked")
                }
            }), d.validator = function (e, t) {
                this.settings = d.extend(!0, {}, d.validator.defaults, e), this.currentForm = t, this.init()
            }, d.validator.format = function (n, e) {
                return 1 === arguments.length ? function () {
                    var e = d.makeArray(arguments);
                    return e.unshift(n), d.validator.format.apply(this, e)
                } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = d.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), d.each(e, function (e, t) {
                    n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                        return t
                    })
                })), n)
            }, d.extend(d.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: d([]),
                    errorLabelContainer: d([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (e) {
                        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                    },
                    onfocusout: function (e) {
                        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                    },
                    onkeyup: function (e, t) {
                        9 === t.which && "" === this.elementValue(e) || -1 !== d.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                    },
                    onclick: function (e) {
                        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                    },
                    highlight: function (e, t, n) {
                        "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : d(e).addClass(t).removeClass(n)
                    },
                    unhighlight: function (e, t, n) {
                        "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : d(e).removeClass(t).addClass(n)
                    }
                },
                setDefaults: function (e) {
                    d.extend(d.validator.defaults, e)
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: d.validator.format("Please enter no more than {0} characters."),
                    minlength: d.validator.format("Please enter at least {0} characters."),
                    rangelength: d.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: d.validator.format("Please enter a value between {0} and {1}."),
                    max: d.validator.format("Please enter a value less than or equal to {0}."),
                    min: d.validator.format("Please enter a value greater than or equal to {0}."),
                    step: d.validator.format("Please enter a multiple of {0}.")
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function () {
                        this.labelContainer = d(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || d(this.currentForm), this.containers = d(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                        var n, a = this.currentForm, r = this.groups = {};

                        function e(e) {
                            var t = void 0 !== d(this).attr("contenteditable") && "false" !== d(this).attr("contenteditable");
                            if (!this.form && t && (this.form = d(this).closest("form")[0], this.name = d(this).attr("name")), a === this.form) {
                                var n = d.data(this.form, "validator"), r = "on" + e.type.replace(/^validate/, ""),
                                    i = n.settings;
                                i[r] && !d(this).is(i.ignore) && i[r].call(n, this, e)
                            }
                        }

                        d.each(this.settings.groups, function (n, e) {
                            "string" == typeof e && (e = e.split(/\s/)), d.each(e, function (e, t) {
                                r[t] = n
                            })
                        }), n = this.settings.rules, d.each(n, function (e, t) {
                            n[e] = d.validator.normalizeRule(t)
                        }), d(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && d(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                    }, form: function () {
                        return this.checkForm(), d.extend(this.submitted, this.errorMap), this.invalid = d.extend({}, this.errorMap), this.valid() || d(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                    }, checkForm: function () {
                        this.prepareForm();
                        for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                        return this.valid()
                    }, element: function (e) {
                        var t, n, r = this.clean(e), i = this.validationTargetFor(r), a = this, o = !0;
                        return void 0 === i ? delete this.invalid[r.name] : (this.prepareElement(i), this.currentElements = d(i), (n = this.groups[i.name]) && d.each(this.groups, function (e, t) {
                            t === n && e !== i.name && (r = a.validationTargetFor(a.clean(a.findByName(e)))) && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o)
                        }), t = !1 !== this.check(i), o = o && t, this.invalid[i.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), d(e).attr("aria-invalid", !t)), o
                    }, showErrors: function (t) {
                        if (t) {
                            var n = this;
                            d.extend(this.errorMap, t), this.errorList = d.map(this.errorMap, function (e, t) {
                                return {message: e, element: n.findByName(t)[0]}
                            }), this.successList = d.grep(this.successList, function (e) {
                                return !(e.name in t)
                            })
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                    }, resetForm: function () {
                        d.fn.resetForm && d(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                        var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        this.resetElements(e)
                    }, resetElements: function (e) {
                        var t;
                        if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass); else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                    }, numberOfInvalids: function () {
                        return this.objectLength(this.invalid)
                    }, objectLength: function (e) {
                        var t, n = 0;
                        for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                        return n
                    }, hideErrors: function () {
                        this.hideThese(this.toHide)
                    }, hideThese: function (e) {
                        e.not(this.containers).text(""), this.addWrapper(e).hide()
                    }, valid: function () {
                        return 0 === this.size()
                    }, size: function () {
                        return this.errorList.length
                    }, focusInvalid: function () {
                        if (this.settings.focusInvalid) try {
                            d(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                        } catch (e) {
                        }
                    }, findLastActive: function () {
                        var t = this.lastActive;
                        return t && 1 === d.grep(this.errorList, function (e) {
                            return e.element.name === t.name
                        }).length && t
                    }, elements: function () {
                        var n = this, r = {};
                        return d(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                            var e = this.name || d(this).attr("name"),
                                t = void 0 !== d(this).attr("contenteditable") && "false" !== d(this).attr("contenteditable");
                            return !e && n.settings.debug && window.console && console.error("%o has no name assigned", this), t && (this.form = d(this).closest("form")[0], this.name = e), this.form === n.currentForm && (!(e in r || !n.objectLength(d(this).rules())) && (r[e] = !0))
                        })
                    }, clean: function (e) {
                        return d(e)[0]
                    }, errors: function () {
                        var e = this.settings.errorClass.split(" ").join(".");
                        return d(this.settings.errorElement + "." + e, this.errorContext)
                    }, resetInternals: function () {
                        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = d([]), this.toHide = d([])
                    }, reset: function () {
                        this.resetInternals(), this.currentElements = d([])
                    }, prepareForm: function () {
                        this.reset(), this.toHide = this.errors().add(this.containers)
                    }, prepareElement: function (e) {
                        this.reset(), this.toHide = this.errorsFor(e)
                    }, elementValue: function (e) {
                        var t, n, r = d(e), i = e.type,
                            a = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                        return "radio" === i || "checkbox" === i ? this.findByName(e.name).filter(":checked").val() : "number" === i && void 0 !== e.validity ? e.validity.badInput ? "NaN" : r.val() : (t = a ? r.text() : r.val(), "file" === i ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) ? t.substr(n + 1) : 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
                    }, check: function (t) {
                        t = this.validationTargetFor(this.clean(t));
                        var e, n, r, i, a = d(t).rules(), o = d.map(a, function (e, t) {
                            return t
                        }).length, s = !1, l = this.elementValue(t);
                        for (n in "function" == typeof a.normalizer ? i = a.normalizer : "function" == typeof this.settings.normalizer && (i = this.settings.normalizer), i && (l = i.call(t, l), delete a.normalizer), a) {
                            r = {method: n, parameters: a[n]};
                            try {
                                if ("dependency-mismatch" === (e = d.validator.methods[n].call(this, l, t, r.parameters)) && 1 === o) {
                                    s = !0;
                                    continue
                                }
                                if (s = !1, "pending" === e) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                                if (!e) return this.formatAndAdd(t, r), !1
                            } catch (e) {
                                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                            }
                        }
                        if (!s) return this.objectLength(a) && this.successList.push(t), !0
                    }, customDataMessage: function (e, t) {
                        return d(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || d(e).data("msg")
                    }, customMessage: function (e, t) {
                        var n = this.settings.messages[e];
                        return n && (n.constructor === String ? n : n[t])
                    }, findDefined: function () {
                        for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
                    }, defaultMessage: function (e, t) {
                        "string" == typeof t && (t = {method: t});
                        var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, d.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                            r = /\$?\{(\d+)\}/g;
                        return "function" == typeof n ? n = n.call(this, t.parameters, e) : r.test(n) && (n = d.validator.format(n.replace(r, "{$1}"), t.parameters)), n
                    }, formatAndAdd: function (e, t) {
                        var n = this.defaultMessage(e, t);
                        this.errorList.push({
                            message: n,
                            element: e,
                            method: t.method
                        }), this.errorMap[e.name] = n, this.submitted[e.name] = n
                    }, addWrapper: function (e) {
                        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                    }, defaultShowErrors: function () {
                        var e, t, n;
                        for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                        if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                    }, validElements: function () {
                        return this.currentElements.not(this.invalidElements())
                    }, invalidElements: function () {
                        return d(this.errorList).map(function () {
                            return this.element
                        })
                    }, showLabel: function (e, t) {
                        var n, r, i, a, o = this.errorsFor(e), s = this.idOrName(e), l = d(e).attr("aria-describedby");
                        o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(t)) : (n = o = d("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, d(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", s) : 0 === o.parents("label[for='" + this.escapeCssMeta(s) + "']").length && (i = o.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(i) + "\\b")) || (l += " " + i) : l = i, d(e).attr("aria-describedby", l), (r = this.groups[e.name]) && (a = this, d.each(a.groups, function (e, t) {
                            t === r && d("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                        })))), !t && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
                    }, errorsFor: function (e) {
                        var t = this.escapeCssMeta(this.idOrName(e)), n = d(e).attr("aria-describedby"),
                            r = "label[for='" + t + "'], label[for='" + t + "'] *";
                        return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r)
                    }, escapeCssMeta: function (e) {
                        return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                    }, idOrName: function (e) {
                        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                    }, validationTargetFor: function (e) {
                        return this.checkable(e) && (e = this.findByName(e.name)), d(e).not(this.settings.ignore)[0]
                    }, checkable: function (e) {
                        return /radio|checkbox/i.test(e.type)
                    }, findByName: function (e) {
                        return d(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                    }, getLength: function (e, t) {
                        switch (t.nodeName.toLowerCase()) {
                            case"select":
                                return d("option:selected", t).length;
                            case"input":
                                if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                        }
                        return e.length
                    }, depend: function (e, t) {
                        return !this.dependTypes[void 0 === e ? "undefined" : a(e)] || this.dependTypes[void 0 === e ? "undefined" : a(e)](e, t)
                    }, dependTypes: {
                        boolean: function (e) {
                            return e
                        }, string: function (e, t) {
                            return !!d(e, t.form).length
                        }, function: function (e, t) {
                            return e(t)
                        }
                    }, optional: function (e) {
                        var t = this.elementValue(e);
                        return !d.validator.methods.required.call(this, t, e) && "dependency-mismatch"
                    }, startRequest: function (e) {
                        this.pending[e.name] || (this.pendingRequest++, d(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
                    }, stopRequest: function (e, t) {
                        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], d(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (d(this.currentForm).submit(), this.submitButton && d("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (d(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                    }, previousValue: function (e, t) {
                        return t = "string" == typeof t && t || "remote", d.data(e, "previousValue") || d.data(e, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(e, {method: t})
                        })
                    }, destroy: function () {
                        this.resetForm(), d(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
                    }
                },
                classRuleSettings: {
                    required: {required: !0},
                    email: {email: !0},
                    url: {url: !0},
                    date: {date: !0},
                    dateISO: {dateISO: !0},
                    number: {number: !0},
                    digits: {digits: !0},
                    creditcard: {creditcard: !0}
                },
                addClassRules: function (e, t) {
                    e.constructor === String ? this.classRuleSettings[e] = t : d.extend(this.classRuleSettings, e)
                },
                classRules: function (e) {
                    var t = {}, n = d(e).attr("class");
                    return n && d.each(n.split(" "), function () {
                        this in d.validator.classRuleSettings && d.extend(t, d.validator.classRuleSettings[this])
                    }), t
                },
                normalizeAttributeRule: function (e, t, n, r) {
                    /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (r = Number(r), isNaN(r) && (r = void 0)), r || 0 === r ? e[n] = r : t === n && "range" !== t && (e[n] = !0)
                },
                attributeRules: function (e) {
                    var t, n, r = {}, i = d(e), a = e.getAttribute("type");
                    for (t in d.validator.methods) n = "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), !!n) : i.attr(t), this.normalizeAttributeRule(r, a, t, n);
                    return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
                },
                dataRules: function (e) {
                    var t, n, r = {}, i = d(e), a = e.getAttribute("type");
                    for (t in d.validator.methods) "" === (n = i.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())) && (n = !0), this.normalizeAttributeRule(r, a, t, n);
                    return r
                },
                staticRules: function (e) {
                    var t = {}, n = d.data(e.form, "validator");
                    return n.settings.rules && (t = d.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
                },
                normalizeRules: function (r, i) {
                    return d.each(r, function (e, t) {
                        if (!1 !== t) {
                            if (t.param || t.depends) {
                                var n = !0;
                                switch (a(t.depends)) {
                                    case"string":
                                        n = !!d(t.depends, i.form).length;
                                        break;
                                    case"function":
                                        n = t.depends.call(i, i)
                                }
                                n ? r[e] = void 0 === t.param || t.param : (d.data(i.form, "validator").resetElements(d(i)), delete r[e])
                            }
                        } else delete r[e]
                    }), d.each(r, function (e, t) {
                        r[e] = d.isFunction(t) && "normalizer" !== e ? t(i) : t
                    }), d.each(["minlength", "maxlength"], function () {
                        r[this] && (r[this] = Number(r[this]))
                    }), d.each(["rangelength", "range"], function () {
                        var e;
                        r[this] && (d.isArray(r[this]) ? r[this] = [Number(r[this][0]), Number(r[this][1])] : "string" == typeof r[this] && (e = r[this].replace(/[\[\]]/g, "").split(/[\s,]+/), r[this] = [Number(e[0]), Number(e[1])]))
                    }), d.validator.autoCreateRanges && (null != r.min && null != r.max && (r.range = [r.min, r.max], delete r.min, delete r.max), null != r.minlength && null != r.maxlength && (r.rangelength = [r.minlength, r.maxlength], delete r.minlength, delete r.maxlength)), r
                },
                normalizeRule: function (e) {
                    if ("string" == typeof e) {
                        var t = {};
                        d.each(e.split(/\s/), function () {
                            t[this] = !0
                        }), e = t
                    }
                    return e
                },
                addMethod: function (e, t, n) {
                    d.validator.methods[e] = t, d.validator.messages[e] = void 0 !== n ? n : d.validator.messages[e], t.length < 3 && d.validator.addClassRules(e, d.validator.normalizeRule(e))
                },
                methods: {
                    required: function (e, t, n) {
                        if (!this.depend(n, t)) return "dependency-mismatch";
                        if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : null != e && 0 < e.length;
                        var r = d(t).val();
                        return r && 0 < r.length
                    }, email: function (e, t) {
                        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                    }, url: function (e, t) {
                        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
                    }, date: (n = !1, function (e, t) {
                        return n || (n = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                    }), dateISO: function (e, t) {
                        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                    }, number: function (e, t) {
                        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                    }, digits: function (e, t) {
                        return this.optional(t) || /^\d+$/.test(e)
                    }, minlength: function (e, t, n) {
                        var r = d.isArray(e) ? e.length : this.getLength(e, t);
                        return this.optional(t) || n <= r
                    }, maxlength: function (e, t, n) {
                        var r = d.isArray(e) ? e.length : this.getLength(e, t);
                        return this.optional(t) || r <= n
                    }, rangelength: function (e, t, n) {
                        var r = d.isArray(e) ? e.length : this.getLength(e, t);
                        return this.optional(t) || r >= n[0] && r <= n[1]
                    }, min: function (e, t, n) {
                        return this.optional(t) || n <= e
                    }, max: function (e, t, n) {
                        return this.optional(t) || e <= n
                    }, range: function (e, t, n) {
                        return this.optional(t) || e >= n[0] && e <= n[1]
                    }, step: function (e, t, n) {
                        var r, i = d(t).attr("type"), a = "Step attribute on input type " + i + " is not supported.",
                            o = new RegExp("\\b" + i + "\\b"), s = function (e) {
                                var t = ("" + e).match(/(?:\.(\d+))?$/);
                                return t && t[1] ? t[1].length : 0
                            }, l = function (e) {
                                return Math.round(e * Math.pow(10, r))
                            }, u = !0;
                        if (i && !o.test(["text", "number", "range"].join())) throw new Error(a);
                        return r = s(n), (s(e) > r || l(e) % l(n) != 0) && (u = !1), this.optional(t) || u
                    }, equalTo: function (e, t, n) {
                        var r = d(n);
                        return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                            d(t).valid()
                        }), e === r.val()
                    }, remote: function (a, o, e, s) {
                        if (this.optional(o)) return "dependency-mismatch";
                        s = "string" == typeof s && s || "remote";
                        var l, t, n, u = this.previousValue(o, s);
                        return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[o.name][s], this.settings.messages[o.name][s] = u.message, e = "string" == typeof e && {url: e} || e, n = d.param(d.extend({data: a}, e.data)), u.old === n ? u.valid : (u.old = n, (l = this).startRequest(o), (t = {})[o.name] = a, d.ajax(d.extend(!0, {
                            mode: "abort",
                            port: "validate" + o.name,
                            dataType: "json",
                            data: t,
                            context: l.currentForm,
                            success: function (e) {
                                var t, n, r, i = !0 === e || "true" === e;
                                l.settings.messages[o.name][s] = u.originalMessage, i ? (r = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(o), l.formSubmitted = r, l.successList.push(o), l.invalid[o.name] = !1, l.showErrors()) : (t = {}, n = e || l.defaultMessage(o, {
                                    method: s,
                                    parameters: a
                                }), t[o.name] = u.message = n, l.invalid[o.name] = !0, l.showErrors(t)), u.valid = i, l.stopRequest(o, i)
                            }
                        }, e)), "pending")
                    }
                }
            });
            var r, i = {};
            return d.ajaxPrefilter ? d.ajaxPrefilter(function (e, t, n) {
                var r = e.port;
                "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
            }) : (r = d.ajax, d.ajax = function (e) {
                var t = ("mode" in e ? e : d.ajaxSettings).mode, n = ("port" in e ? e : d.ajaxSettings).port;
                return "abort" === t ? (i[n] && i[n].abort(), i[n] = r.apply(this, arguments), i[n]) : r.apply(this, arguments)
            }), d
        }, "function" == typeof define && define.amd ? define(["jquery"], r) : "object" === (void 0 === t ? "undefined" : a(t)) && t.exports ? t.exports = r(e("jquery")) : r(jQuery)
    }, {jquery: 1}], 7: [function (e, t, n) {
        "use strict";
        $(document).ready(function () {
            var e = {
                    $nexLanguageHandle: document.getElementById("nextLanguage"),
                    $closeSearchModal: document.getElementById("closeSearchModal"),
                    $searchModal: document.getElementById("searchModal"),
                    $headerSearchBtn: document.getElementById("headerSearchBtn"),
                    $submenu1: document.getElementById("submenu1"),
                    $submenu2: document.getElementById("submenu2"),
                    $submenu3: document.getElementById("submenu3"),
                    $submenu4: document.getElementById("submenu4"),
                    $submenu5: document.getElementById("submenu5"),
                    $submenu6: document.getElementById("submenu6"),
                    $subMenu: document.querySelectorAll(".sub-menu"),
                    $topMenuToggle: document.querySelectorAll(".top-menu-toggle")
                }, t = e.$nexLanguageHandle, n = e.$closeSearchModal, r = e.$searchModal, i = e.$submenu1, a = e.$submenu2,
                o = e.$submenu3, s = e.$submenu4, l = e.$submenu5, u = e.$submenu6, d = e.$subMenu,
                c = e.$topMenuToggle;
            if ($(e.$headerSearchBtn).click(function (e) {
                e.stopPropagation(), $(r).addClass("open")
            }), $(n).click(function () {
                $(r).removeClass("open")
            }), $("body").on("click", function (e) {
                $(e.target).closest("#modalSearchForm").length || $(r).removeClass("open")
            }), $(window).resize(function () {
                $(window).width() <= 992 ? ($(d).removeClass("desc"), $(".footer-nav .sub-menu").addClass("collapse"), $(".footer-nav .sub > a").attr("data-toggle", "collapse")) : ($(d).addClass("desc"), $(".footer-nav .sub-menu").removeClass("collapse"), $(".footer-nav .sub > a").removeAttr("data-toggle"))
            }), $(window).width() <= 992 ? ($(d).removeClass("desc"), $(".footer-nav .sub-menu").addClass("collapse"), $(".footer-nav .sub > a").attr("data-toggle", "collapse")) : ($(d).addClass("desc"), $(".footer-nav .sub-menu").removeClass("collapse"), $(".footer-nav .sub > a").removeAttr("data-toggle")), $(c).click(function () {
                $(".header-nav-wrap").toggleClass("header-nav-open")
            }), $(".sub-menu ul li a").click(function () {
                $(".header-nav-wrap").removeClass("header-nav-open")
            }), $("body").click(function (e) {
                $(e.target).closest(".header-nav ul li.sub").length || $(e.target).closest(c).length || $(".header-nav-wrap").removeClass("header-nav-open")
            }), $(".mp-trades-nav li").click(function () {
                $(".mp-trades-nav > li, .mp-trades-nav-content > li").removeClass("current"), $(this).addClass("current"), $(".mp-trades-nav-content > li").eq($(this).index()).addClass("current")
            }), 992 < $(window).width()) {
                var h = 0, f = document.querySelector(".header-nav-wrap");
                window.onscroll = function () {
                    var e = window.pageYOffset || document.documentElement.scrollTop;
                    0 < e - h ? f.classList.add("nav_up") : f.classList.remove("nav_up"), h = e
                }
            }
            $(window).resize(function () {
                var t = 0, n = document.querySelector(".header-nav-wrap");
                992 < $(window).width() ? window.onscroll = function () {
                    var e = window.pageYOffset || document.documentElement.scrollTop;
                    0 < e - t ? n.classList.add("nav_up") : n.classList.remove("nav_up"), t = e
                } : $(window).width() <= 992 && (window.onscroll = function () {
                    var e = window.pageYOffset || document.documentElement.scrollTop;
                    n.classList.remove("nav_up"), t = e
                })
            });
            var p = jQuery(window).width();
            992 < p && $("[data-sticky_column]").stick_in_parent({parent: "[data-sticky_parent]"}), jQuery(window).resize(function () {
                992 < (p = jQuery(window).width()) && $("[data-sticky_column]").stick_in_parent({parent: "[data-sticky_parent]"})
            }), $("#sticky").stick_in_parent({parent: ".sticky-wrap"}), $(document).click(function () {
                $(t).collapse("hide"), $(i).collapse("hide"), $(a).collapse("hide"), $(o).collapse("hide"), $(s).collapse("hide"), $(l).collapse("hide"), $(u).collapse("hide"), $(".collapse").collapse("hide")
            }), $(".slider").slick({
                dots: !0,
                infinite: !0,
                speed: 500,
                fade: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 5e3,
                adaptiveHeight: !0
            })
        })
    }, {}], 8: [function (e, t, n) {
    }, {}], 9: [function (e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(n, "__esModule", {value: !0}), e("./jquery.validate"), e("./additional-methods");
        var i, a = e("./form-messages"), o = (i = a) && i.__esModule ? i : {default: i};

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var l = function e(t) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), "function" == typeof t && (this.submitHandler = t)
        };
        l.prototype.rules = (s(r = {
            firstname: {required: !0, minlength: 3, maxlength: 25, alphabetsOnly: !0},
            name: {required: !0, minlength: 3, maxlength: 25, alphabetsOnly: !0},
            lastname: {required: !0, minlength: 3, maxlength: 25, alphabetsOnly: !0},
            surname: {required: !0, minlength: 3, maxlength: 25, alphabetsOnly: !0},
            dateofbirth: {required: !0},
            marital_status: {required: !0},
            email: {required: !0, email: !0},
            login: {required: !0, email: !0},
            phone: {required: !0, digits: !0, minlength: 6, maxlength: 25},
            password1: {required: !0, minlength: 8, maxlength: 10, passwordCheck: !0},
            password2: {required: !0, equalTo: "input[name=password1]"},
            password: {required: !0, minlength: 8, maxlength: 10, passwordCheck: !0},
            password_confirmation: {required: !0, equalTo: "input[name=password]"},
            country: "required",
            phoneprefix2: {required: !0, maxlength: 5},
            wmid: {
                required: !0, exactLength: 12, normalizer: function (e) {
                    return e.replace(/_/g, "").split("-").join("")
                }
            },
            platform: "required",
            currency: "required",
            wm_wallet: "required",
            tosaccept: "required",
            paysystem: "required",
            amount: {required: !0, digits: !0}
        }, "name", {required: !0, minlength: 3, maxlength: 20, alphabetsOnly: !0}), s(r, "topic", {
            required: !0,
            minlength: 3,
            maxlength: 30,
            normalizer: function (e) {
                return e.replace(/\s{2,}/g, " ").trim()
            }
        }), s(r, "message", {
            required: !0, minlength: 10, maxlength: 200, normalizer: function (e) {
                return e.replace(/\s{2,}/g, " ").trim()
            }
        }), s(r, "recaptcha", {checkCaptcha: !0}), s(r, "date_of_birth_visible", "required"), s(r, "address", {
            required: !0,
            minlength: 3,
            maxlength: 100,
            normalizer: function (e) {
                return e.replace(/\s{2,}/g, " ").trim()
            }
        }), s(r, "city", {
            required: !0, minlength: 3, maxlength: 100, normalizer: function (e) {
                return e.replace(/\s{2,}/g, " ").trim()
            }
        }), s(r, "zip_code", {
            required: !0,
            minlength: 4,
            maxlength: 10,
            digits: !0
        }), r), l.prototype.errorElement = "span", l.prototype.errorClass = "form-error", l.prototype.validClass = "form-valid", l.prototype.onfocusout = function (e) {
            e && (e.value = e.value.trim(), $(e).valid())
        }, l.prototype.highlight = function (e, t, n) {
            $(e).parents(".form-group").addClass(t).removeClass(n)
        }, l.prototype.unhighlight = function (e, t, n) {
            $(e).parents(".form-group").removeClass(t).addClass(n)
        }, l.prototype.errorPlacement = function (e, t) {
            $(t).parents(".form-group").append(e)
        }, l.prototype.messages = (0, o.default)($("html").attr("lang") || "en"), $.validator.addMethod("alphabetsOnly", function (e, t) {
            return !/[\d`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi.test(e) && (!(1 < e.split(" ").length - 1) && !(1 < e.split("-").length - 1))
        }), $.validator.addMethod("exactLength", function (e, t, n) {
            return this.optional(t) || e.length === n
        }), $.validator.addMethod("checkCaptcha", function (e, t, n) {
            return grecaptcha && e ? 0 !== grecaptcha.getResponse(e).length : 0 !== grecaptcha.getResponse(0).length
        }), $.validator.addMethod("passwordCheck", function (e, t) {
            return /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]+)$/.test(e)
        }), n.default = l
    }, {"./additional-methods": 2, "./form-messages": 5, "./jquery.validate": 6}]
}, {}, [3]);
