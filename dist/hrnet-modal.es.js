(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content{padding:20px;width:400px;min-height:200px;border-radius:8px;max-width:90%;position:relative}.modal-close{position:absolute;top:10px;right:15px;background:none;border:none;font-size:24px;cursor:pointer}.modal-body{margin-top:10px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import ee from "react";
var S = { exports: {} }, v = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function re() {
  if (F) return v;
  F = 1;
  var c = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function f(d, a, s) {
    var b = null;
    if (s !== void 0 && (b = "" + s), a.key !== void 0 && (b = "" + a.key), "key" in a) {
      s = {};
      for (var R in a)
        R !== "key" && (s[R] = a[R]);
    } else s = a;
    return a = s.ref, {
      $$typeof: c,
      type: d,
      key: b,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return v.Fragment = i, v.jsx = f, v.jsxs = f, v;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function f(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), i(e);
      }
    }
    function d(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, u, l, j, A) {
      return t = l.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: l,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, t, n, u, l, j, A) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (Q(o)) {
            for (n = 0; n < o.length; n++)
              x(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(o);
      if (y.call(r, "key")) {
        o = c(e);
        var m = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          m,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), b(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var P in r)
          P !== "key" && (t[P] = r[P]);
      } else t = r;
      return o && R(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        o,
        l,
        u,
        a(),
        t,
        j,
        A
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var T = ee, w = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), k = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, Q = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = T["react-stack-bottom-frame"].bind(
      T,
      s
    )(), I = O(d(s)), $ = {};
    _.Fragment = p, _.jsx = function(e, r, t, n, u) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        t,
        !1,
        n,
        u,
        l ? Error("react-stack-top-frame") : Y,
        l ? O(d(e)) : I
      );
    }, _.jsxs = function(e, r, t, n, u) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        t,
        !0,
        n,
        u,
        l ? Error("react-stack-top-frame") : Y,
        l ? O(d(e)) : I
      );
    };
  }()), _;
}
process.env.NODE_ENV === "production" ? S.exports = re() : S.exports = te();
var E = S.exports;
const oe = ({ isOpen: c, onClose: i, title: f, content: d, backgroundColor: a }) => c ? /* @__PURE__ */ E.jsx("div", { className: "modal-overlay", onClick: i, children: /* @__PURE__ */ E.jsxs("div", { className: "modal-content", style: { backgroundColor: a }, onClick: (s) => s.stopPropagation(), children: [
  /* @__PURE__ */ E.jsx("button", { className: "modal-close", onClick: i, children: "×" }),
  /* @__PURE__ */ E.jsx("h2", { children: f }),
  /* @__PURE__ */ E.jsx("div", { className: "modal-body", children: /* @__PURE__ */ E.jsx("p", { children: d }) })
] }) }) : null;
export {
  oe as default
};
