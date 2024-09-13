var _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function k(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var y = { exports: {} };
y.exports;
(function(c, i) {
  (function(e, o) {
    var a = {};
    e.PubSub ? (a = e.PubSub, console.warn("PubSub already loaded, using existing version")) : (e.PubSub = a, o(a)), c !== void 0 && c.exports && (i = c.exports = a), i.PubSub = a, c.exports = i = a;
  })(typeof window == "object" && window || _, function(e) {
    var o = {}, a = -1, O = "*";
    function P(r) {
      var n;
      for (n in r)
        if (Object.prototype.hasOwnProperty.call(r, n))
          return !0;
      return !1;
    }
    function g(r) {
      return function() {
        throw r;
      };
    }
    function S(r, n, t) {
      try {
        r(n, t);
      } catch (u) {
        setTimeout(g(u), 0);
      }
    }
    function j(r, n, t) {
      r(n, t);
    }
    function d(r, n, t, u) {
      var s = o[n], p = u ? j : S, f;
      if (Object.prototype.hasOwnProperty.call(o, n))
        for (f in s)
          Object.prototype.hasOwnProperty.call(s, f) && p(s[f], r, t);
    }
    function m(r, n, t) {
      return function() {
        var u = String(r), s = u.lastIndexOf(".");
        for (d(r, r, n, t); s !== -1; )
          u = u.substr(0, s), s = u.lastIndexOf("."), d(r, u, n, t);
        d(r, O, n, t);
      };
    }
    function w(r) {
      var n = String(r), t = !!(Object.prototype.hasOwnProperty.call(o, n) && P(o[n]));
      return t;
    }
    function T(r) {
      for (var n = String(r), t = w(n) || w(O), u = n.lastIndexOf("."); !t && u !== -1; )
        n = n.substr(0, u), u = n.lastIndexOf("."), t = w(n);
      return t;
    }
    function h(r, n, t, u) {
      r = typeof r == "symbol" ? r.toString() : r;
      var s = m(r, n, u), p = T(r);
      return p ? (t === !0 ? s() : setTimeout(s, 0), !0) : !1;
    }
    e.publish = function(r, n) {
      return h(r, n, !1, e.immediateExceptions);
    }, e.publishSync = function(r, n) {
      return h(r, n, !0, e.immediateExceptions);
    }, e.subscribe = function(r, n) {
      if (typeof n != "function")
        return !1;
      r = typeof r == "symbol" ? r.toString() : r, Object.prototype.hasOwnProperty.call(o, r) || (o[r] = {});
      var t = "uid_" + String(++a);
      return o[r][t] = n, t;
    }, e.subscribeAll = function(r) {
      return e.subscribe(O, r);
    }, e.subscribeOnce = function(r, n) {
      var t = e.subscribe(r, function() {
        e.unsubscribe(t), n.apply(this, arguments);
      });
      return e;
    }, e.clearAllSubscriptions = function() {
      o = {};
    }, e.clearSubscriptions = function(r) {
      var n;
      for (n in o)
        Object.prototype.hasOwnProperty.call(o, n) && n.indexOf(r) === 0 && delete o[n];
    }, e.countSubscriptions = function(r) {
      var n, t, u = 0;
      for (n in o)
        if (Object.prototype.hasOwnProperty.call(o, n) && n.indexOf(r) === 0) {
          for (t in o[n])
            u++;
          break;
        }
      return u;
    }, e.getSubscriptions = function(r) {
      var n, t = [];
      for (n in o)
        Object.prototype.hasOwnProperty.call(o, n) && n.indexOf(r) === 0 && t.push(n);
      return t;
    }, e.unsubscribe = function(r) {
      var n = function(I) {
        var v;
        for (v in o)
          if (Object.prototype.hasOwnProperty.call(o, v) && v.indexOf(I) === 0)
            return !0;
        return !1;
      }, t = typeof r == "string" && (Object.prototype.hasOwnProperty.call(o, r) || n(r)), u = !t && typeof r == "string", s = typeof r == "function", p = !1, f, l, b;
      if (t) {
        e.clearSubscriptions(r);
        return;
      }
      for (f in o)
        if (Object.prototype.hasOwnProperty.call(o, f)) {
          if (l = o[f], u && l[r]) {
            delete l[r], p = r;
            break;
          }
          if (s)
            for (b in l)
              Object.prototype.hasOwnProperty.call(l, b) && l[b] === r && (delete l[b], p = !0);
        }
      return p;
    };
  });
})(y, y.exports);
var A = y.exports;
const z = /* @__PURE__ */ k(A);
var E = Object.defineProperty, M = (c, i, e) => i in c ? E(c, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[i] = e, x = (c, i, e) => M(c, typeof i != "symbol" ? i + "" : i, e);
class q {
  constructor() {
    x(this, "format", (i) => i), x(this, "parse", (i) => i);
  }
}
new q();
export {
  z as A
};
