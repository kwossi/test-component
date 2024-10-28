import Cr from "react";
var Q = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function fe() {
  if (Or) return I;
  Or = 1;
  var k = Cr, h = Symbol.for("react.element"), D = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, O = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(g, c, C) {
    var p, m = {}, R = null, L = null;
    C !== void 0 && (R = "" + C), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (p in c) y.call(c, p) && !S.hasOwnProperty(p) && (m[p] = c[p]);
    if (g && g.defaultProps) for (p in c = g.defaultProps, c) m[p] === void 0 && (m[p] = c[p]);
    return { $$typeof: h, type: g, key: R, ref: L, props: m, _owner: O.current };
  }
  return I.Fragment = D, I.jsx = E, I.jsxs = E, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function de() {
  return Sr || (Sr = 1, process.env.NODE_ENV !== "production" && function() {
    var k = Cr, h = Symbol.for("react.element"), D = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), g = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), rr = Symbol.iterator, Pr = "@@iterator";
    function jr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = rr && r[rr] || r[Pr];
      return typeof e == "function" ? e : null;
    }
    var P = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        xr("error", r, t);
      }
    }
    function xr(r, e, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (e += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, u);
      }
    }
    var kr = !1, Dr = !1, Fr = !1, Ar = !1, $r = !1, er;
    er = Symbol.for("react.module.reference");
    function Ir(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === y || r === S || $r || r === O || r === C || r === p || Ar || r === L || kr || Dr || Fr || typeof r == "object" && r !== null && (r.$$typeof === R || r.$$typeof === m || r.$$typeof === E || r.$$typeof === g || r.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === er || r.getModuleId !== void 0));
    }
    function Wr(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var i = e.displayName || e.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function tr(r) {
      return r.displayName || "Context";
    }
    function b(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case y:
          return "Fragment";
        case D:
          return "Portal";
        case S:
          return "Profiler";
        case O:
          return "StrictMode";
        case C:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case g:
            var e = r;
            return tr(e) + ".Consumer";
          case E:
            var t = r;
            return tr(t._context) + ".Provider";
          case c:
            return Wr(r, r.render, "ForwardRef");
          case m:
            var n = r.displayName || null;
            return n !== null ? n : b(r.type) || "Memo";
          case R: {
            var i = r, u = i._payload, o = i._init;
            try {
              return b(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, nr, ar, or, ir, ur, sr, lr;
    function cr() {
    }
    cr.__reactDisabledLog = !0;
    function Yr() {
      {
        if (F === 0) {
          nr = console.log, ar = console.info, or = console.warn, ir = console.error, ur = console.group, sr = console.groupCollapsed, lr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: cr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        F++;
      }
    }
    function Lr() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, r, {
              value: nr
            }),
            info: w({}, r, {
              value: ar
            }),
            warn: w({}, r, {
              value: or
            }),
            error: w({}, r, {
              value: ir
            }),
            group: w({}, r, {
              value: ur
            }),
            groupCollapsed: w({}, r, {
              value: sr
            }),
            groupEnd: w({}, r, {
              value: lr
            })
          });
        }
        F < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = P.ReactCurrentDispatcher, B;
    function V(r, e, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + r;
      }
    }
    var J = !1, M;
    {
      var Vr = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Vr();
    }
    function fr(r, e) {
      if (!r || J)
        return "";
      {
        var t = M.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Yr();
      try {
        if (e) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(r, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              n = v;
            }
            r.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          r();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var _ = `
` + a[s].replace(" at new ", " at ");
                    return r.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", r.displayName)), typeof r == "function" && M.set(r, _), _;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, z.current = u, Lr(), Error.prepareStackTrace = i;
      }
      var x = r ? r.displayName || r.name : "", T = x ? V(x) : "";
      return typeof r == "function" && M.set(r, T), T;
    }
    function Mr(r, e, t) {
      return fr(r, !1);
    }
    function Ur(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function U(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return fr(r, Ur(r));
      if (typeof r == "string")
        return V(r);
      switch (r) {
        case C:
          return V("Suspense");
        case p:
          return V("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return Mr(r.render);
          case m:
            return U(r.type, e, t);
          case R: {
            var n = r, i = n._payload, u = n._init;
            try {
              return U(u(i), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, dr = {}, vr = P.ReactDebugCurrentFrame;
    function N(r) {
      if (r) {
        var e = r._owner, t = U(r.type, r._source, e ? e.type : null);
        vr.setExtraStackFrame(t);
      } else
        vr.setExtraStackFrame(null);
    }
    function Nr(r, e, t, n, i) {
      {
        var u = Function.call.bind(A);
        for (var o in r)
          if (u(r, o)) {
            var a = void 0;
            try {
              if (typeof r[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = r[o](e, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (N(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in dr) && (dr[a.message] = !0, N(i), f("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var zr = Array.isArray;
    function q(r) {
      return zr(r);
    }
    function Br(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Jr(r) {
      try {
        return pr(r), !1;
      } catch {
        return !0;
      }
    }
    function pr(r) {
      return "" + r;
    }
    function _r(r) {
      if (Jr(r))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(r)), pr(r);
    }
    var $ = P.ReactCurrentOwner, qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, br, gr, K;
    K = {};
    function Kr(r) {
      if (A.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Gr(r) {
      if (A.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Xr(r, e) {
      if (typeof r.ref == "string" && $.current && e && $.current.stateNode !== e) {
        var t = b($.current.type);
        K[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b($.current.type), r.ref), K[t] = !0);
      }
    }
    function Hr(r, e) {
      {
        var t = function() {
          br || (br = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Zr(r, e) {
      {
        var t = function() {
          gr || (gr = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qr = function(r, e, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function re(r, e, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (_r(t), a = "" + t), Gr(e) && (_r(e.key), a = "" + e.key), Kr(e) && (d = e.ref, Xr(e, i));
        for (u in e)
          A.call(e, u) && !qr.hasOwnProperty(u) && (o[u] = e[u]);
        if (r && r.defaultProps) {
          var s = r.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || d) {
          var l = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          a && Hr(o, l), d && Zr(o, l);
        }
        return Qr(r, a, d, i, n, $.current, o);
      }
    }
    var G = P.ReactCurrentOwner, mr = P.ReactDebugCurrentFrame;
    function j(r) {
      if (r) {
        var e = r._owner, t = U(r.type, r._source, e ? e.type : null);
        mr.setExtraStackFrame(t);
      } else
        mr.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(r) {
      return typeof r == "object" && r !== null && r.$$typeof === h;
    }
    function yr() {
      {
        if (G.current) {
          var r = b(G.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ee(r) {
      return "";
    }
    var hr = {};
    function te(r) {
      {
        var e = yr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Er(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = te(e);
        if (hr[t])
          return;
        hr[t] = !0;
        var n = "";
        r && r._owner && r._owner !== G.current && (n = " It was passed a child from " + b(r._owner.type) + "."), j(r), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Rr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (q(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            H(n) && Er(n, e);
          }
        else if (H(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var i = jr(r);
          if (typeof i == "function" && i !== r.entries)
            for (var u = i.call(r), o; !(o = u.next()).done; )
              H(o.value) && Er(o.value, e);
        }
      }
    }
    function ne(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === m))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = b(e);
          Nr(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !X) {
          X = !0;
          var i = b(e);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ae(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            j(r), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        r.ref !== null && (j(r), f("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    var wr = {};
    function Tr(r, e, t, n, i, u) {
      {
        var o = Ir(r);
        if (!o) {
          var a = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = ee();
          d ? a += d : a += yr();
          var s;
          r === null ? s = "null" : q(r) ? s = "array" : r !== void 0 && r.$$typeof === h ? (s = "<" + (b(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof r, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = re(r, e, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var _ = e.children;
          if (_ !== void 0)
            if (n)
              if (q(_)) {
                for (var x = 0; x < _.length; x++)
                  Rr(_[x], r);
                Object.freeze && Object.freeze(_);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rr(_, r);
        }
        if (A.call(e, "key")) {
          var T = b(r), v = Object.keys(e).filter(function(ce) {
            return ce !== "key";
          }), Z = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wr[T + Z]) {
            var le = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, T, le, T), wr[T + Z] = !0;
          }
        }
        return r === y ? ae(l) : ne(l), l;
      }
    }
    function oe(r, e, t) {
      return Tr(r, e, t, !0);
    }
    function ie(r, e, t) {
      return Tr(r, e, t, !1);
    }
    var ue = ie, se = oe;
    W.Fragment = y, W.jsx = ue, W.jsxs = se;
  }()), W;
}
process.env.NODE_ENV === "production" ? Q.exports = fe() : Q.exports = de();
var ve = Q.exports;
const pe = "_button_19pwo_78", Y = {
  button: pe,
  "size-sm": "_size-sm_19pwo_86",
  "size-md": "_size-md_19pwo_91",
  "size-lg": "_size-lg_19pwo_96",
  "radius-none": "_radius-none_19pwo_102",
  "radius-sm": "_radius-sm_19pwo_106",
  "radius-md": "_radius-md_19pwo_110",
  "radius-lg": "_radius-lg_19pwo_114",
  "radius-full": "_radius-full_19pwo_118",
  "border-none": "_border-none_19pwo_123",
  "border-xs": "_border-xs_19pwo_127",
  "border-sm": "_border-sm_19pwo_131",
  "border-md": "_border-md_19pwo_135",
  "border-lg": "_border-lg_19pwo_139",
  "border-xl": "_border-xl_19pwo_143",
  "color-primary": "_color-primary_19pwo_148",
  "color-default": "_color-default_19pwo_154",
  "color-secondary": "_color-secondary_19pwo_160",
  "color-success": "_color-success_19pwo_166",
  "color-warning": "_color-warning_19pwo_172",
  "color-danger": "_color-danger_19pwo_178"
}, be = ({
  children: k,
  color: h = "primary",
  onClick: D,
  style: y,
  size: O = "md",
  radius: S = "none",
  border: E = "none",
  className: g
}) => {
  const c = `${Y.button} ${Y[`border-${E}`]} ${Y[`radius-${S}`]} ${Y[`color-${h}`]} ${Y[`size-${O}`]} ${g || ""}`.trim();
  return /* @__PURE__ */ ve.jsx("button", { onClick: D, style: y, className: c, children: k });
};
export {
  be as Button
};
