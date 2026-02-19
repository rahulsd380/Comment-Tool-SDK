(function () {
  const O = document.createElement("link").relList;
  if (O && O.supports && O.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) d(R);
  new MutationObserver((R) => {
    for (const x of R)
      if (x.type === "childList")
        for (const tl of x.addedNodes)
          tl.tagName === "LINK" && tl.rel === "modulepreload" && d(tl);
  }).observe(document, { childList: !0, subtree: !0 });
  function _(R) {
    const x = {};
    return (
      R.integrity && (x.integrity = R.integrity),
      R.referrerPolicy && (x.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (x.credentials = "include")
        : R.crossOrigin === "anonymous"
          ? (x.credentials = "omit")
          : (x.credentials = "same-origin"),
      x
    );
  }
  function d(R) {
    if (R.ep) return;
    R.ep = !0;
    const x = _(R);
    fetch(R.href, x);
  }
})();
function H1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var sc = { exports: {} },
  Te = {};
var S1;
function uv() {
  if (S1) return Te;
  S1 = 1;
  var r = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.fragment");
  function _(d, R, x) {
    var tl = null;
    if (
      (x !== void 0 && (tl = "" + x),
      R.key !== void 0 && (tl = "" + R.key),
      "key" in R)
    ) {
      x = {};
      for (var ol in R) ol !== "key" && (x[ol] = R[ol]);
    } else x = R;
    return (
      (R = x.ref),
      { $$typeof: r, type: d, key: tl, ref: R !== void 0 ? R : null, props: x }
    );
  }
  return ((Te.Fragment = O), (Te.jsx = _), (Te.jsxs = _), Te);
}
var b1;
function ev() {
  return (b1 || ((b1 = 1), (sc.exports = uv())), sc.exports);
}
var $ = ev(),
  oc = { exports: {} },
  Ee = {},
  dc = { exports: {} },
  mc = {};
var z1;
function nv() {
  return (
    z1 ||
      ((z1 = 1),
      (function (r) {
        function O(b, p) {
          var B = b.length;
          b.push(p);
          l: for (; 0 < B; ) {
            var el = (B - 1) >>> 1,
              cl = b[el];
            if (0 < R(cl, p)) ((b[el] = p), (b[B] = cl), (B = el));
            else break l;
          }
        }
        function _(b) {
          return b.length === 0 ? null : b[0];
        }
        function d(b) {
          if (b.length === 0) return null;
          var p = b[0],
            B = b.pop();
          if (B !== p) {
            b[0] = B;
            l: for (var el = 0, cl = b.length, o = cl >>> 1; el < o; ) {
              var E = 2 * (el + 1) - 1,
                M = b[E],
                U = E + 1,
                G = b[U];
              if (0 > R(M, B))
                U < cl && 0 > R(G, M)
                  ? ((b[el] = G), (b[U] = B), (el = U))
                  : ((b[el] = M), (b[E] = B), (el = E));
              else if (U < cl && 0 > R(G, B))
                ((b[el] = G), (b[U] = B), (el = U));
              else break l;
            }
          }
          return p;
        }
        function R(b, p) {
          var B = b.sortIndex - p.sortIndex;
          return B !== 0 ? B : b.id - p.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var x = performance;
          r.unstable_now = function () {
            return x.now();
          };
        } else {
          var tl = Date,
            ol = tl.now();
          r.unstable_now = function () {
            return tl.now() - ol;
          };
        }
        var H = [],
          A = [],
          P = 1,
          q = null,
          vl = 3,
          Wl = !1,
          xl = !1,
          jl = !1,
          Ut = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          $t = typeof clearTimeout == "function" ? clearTimeout : null,
          Cl = typeof setImmediate < "u" ? setImmediate : null;
        function it(b) {
          for (var p = _(A); p !== null; ) {
            if (p.callback === null) d(A);
            else if (p.startTime <= b)
              (d(A), (p.sortIndex = p.expirationTime), O(H, p));
            else break;
            p = _(A);
          }
        }
        function Tt(b) {
          if (((jl = !1), it(b), !xl))
            if (_(H) !== null) ((xl = !0), Yl || ((Yl = !0), Xl()));
            else {
              var p = _(A);
              p !== null && gt(Tt, p.startTime - b);
            }
        }
        var Yl = !1,
          w = -1,
          Gl = 5,
          Et = -1;
        function La() {
          return Ut ? !0 : !(r.unstable_now() - Et < Gl);
        }
        function At() {
          if (((Ut = !1), Yl)) {
            var b = r.unstable_now();
            Et = b;
            var p = !0;
            try {
              l: {
                ((xl = !1), jl && ((jl = !1), $t(w), (w = -1)), (Wl = !0));
                var B = vl;
                try {
                  t: {
                    for (
                      it(b), q = _(H);
                      q !== null && !(q.expirationTime > b && La());
                    ) {
                      var el = q.callback;
                      if (typeof el == "function") {
                        ((q.callback = null), (vl = q.priorityLevel));
                        var cl = el(q.expirationTime <= b);
                        if (((b = r.unstable_now()), typeof cl == "function")) {
                          ((q.callback = cl), it(b), (p = !0));
                          break t;
                        }
                        (q === _(H) && d(H), it(b));
                      } else d(H);
                      q = _(H);
                    }
                    if (q !== null) p = !0;
                    else {
                      var o = _(A);
                      (o !== null && gt(Tt, o.startTime - b), (p = !1));
                    }
                  }
                  break l;
                } finally {
                  ((q = null), (vl = B), (Wl = !1));
                }
                p = void 0;
              }
            } finally {
              p ? Xl() : (Yl = !1);
            }
          }
        }
        var Xl;
        if (typeof Cl == "function")
          Xl = function () {
            Cl(At);
          };
        else if (typeof MessageChannel < "u") {
          var Ta = new MessageChannel(),
            Nt = Ta.port2;
          ((Ta.port1.onmessage = At),
            (Xl = function () {
              Nt.postMessage(null);
            }));
        } else
          Xl = function () {
            $l(At, 0);
          };
        function gt(b, p) {
          w = $l(function () {
            b(r.unstable_now());
          }, p);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (r.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Gl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return vl;
          }),
          (r.unstable_next = function (b) {
            switch (vl) {
              case 1:
              case 2:
              case 3:
                var p = 3;
                break;
              default:
                p = vl;
            }
            var B = vl;
            vl = p;
            try {
              return b();
            } finally {
              vl = B;
            }
          }),
          (r.unstable_requestPaint = function () {
            Ut = !0;
          }),
          (r.unstable_runWithPriority = function (b, p) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var B = vl;
            vl = b;
            try {
              return p();
            } finally {
              vl = B;
            }
          }),
          (r.unstable_scheduleCallback = function (b, p, B) {
            var el = r.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? el + B : el))
                : (B = el),
              b)
            ) {
              case 1:
                var cl = -1;
                break;
              case 2:
                cl = 250;
                break;
              case 5:
                cl = 1073741823;
                break;
              case 4:
                cl = 1e4;
                break;
              default:
                cl = 5e3;
            }
            return (
              (cl = B + cl),
              (b = {
                id: P++,
                callback: p,
                priorityLevel: b,
                startTime: B,
                expirationTime: cl,
                sortIndex: -1,
              }),
              B > el
                ? ((b.sortIndex = B),
                  O(A, b),
                  _(H) === null &&
                    b === _(A) &&
                    (jl ? ($t(w), (w = -1)) : (jl = !0), gt(Tt, B - el)))
                : ((b.sortIndex = cl),
                  O(H, b),
                  xl || Wl || ((xl = !0), Yl || ((Yl = !0), Xl()))),
              b
            );
          }),
          (r.unstable_shouldYield = La),
          (r.unstable_wrapCallback = function (b) {
            var p = vl;
            return function () {
              var B = vl;
              vl = p;
              try {
                return b.apply(this, arguments);
              } finally {
                vl = B;
              }
            };
          }));
      })(mc)),
    mc
  );
}
var T1;
function iv() {
  return (T1 || ((T1 = 1), (dc.exports = nv())), dc.exports);
}
var vc = { exports: {} },
  Y = {};
var E1;
function fv() {
  if (E1) return Y;
  E1 = 1;
  var r = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    x = Symbol.for("react.consumer"),
    tl = Symbol.for("react.context"),
    ol = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    A = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    q = Symbol.for("react.activity"),
    vl = Symbol.iterator;
  function Wl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (vl && o[vl]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var xl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    jl = Object.assign,
    Ut = {};
  function $l(o, E, M) {
    ((this.props = o),
      (this.context = E),
      (this.refs = Ut),
      (this.updater = M || xl));
  }
  (($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (o, E) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, E, "setState");
    }),
    ($l.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function $t() {}
  $t.prototype = $l.prototype;
  function Cl(o, E, M) {
    ((this.props = o),
      (this.context = E),
      (this.refs = Ut),
      (this.updater = M || xl));
  }
  var it = (Cl.prototype = new $t());
  ((it.constructor = Cl), jl(it, $l.prototype), (it.isPureReactComponent = !0));
  var Tt = Array.isArray;
  function Yl() {}
  var w = { H: null, A: null, T: null, S: null },
    Gl = Object.prototype.hasOwnProperty;
  function Et(o, E, M) {
    var U = M.ref;
    return {
      $$typeof: r,
      type: o,
      key: E,
      ref: U !== void 0 ? U : null,
      props: M,
    };
  }
  function La(o, E) {
    return Et(o.type, E, o.props);
  }
  function At(o) {
    return typeof o == "object" && o !== null && o.$$typeof === r;
  }
  function Xl(o) {
    var E = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (M) {
        return E[M];
      })
    );
  }
  var Ta = /\/+/g;
  function Nt(o, E) {
    return typeof o == "object" && o !== null && o.key != null
      ? Xl("" + o.key)
      : E.toString(36);
  }
  function gt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Yl, Yl)
            : ((o.status = "pending"),
              o.then(
                function (E) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = E));
                },
                function (E) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = E));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, E, M, U, G) {
    var Z = typeof o;
    (Z === "undefined" || Z === "boolean") && (o = null);
    var ll = !1;
    if (o === null) ll = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          ll = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case r:
            case O:
              ll = !0;
              break;
            case P:
              return ((ll = o._init), b(ll(o._payload), E, M, U, G));
          }
      }
    if (ll)
      return (
        (G = G(o)),
        (ll = U === "" ? "." + Nt(o, 0) : U),
        Tt(G)
          ? ((M = ""),
            ll != null && (M = ll.replace(Ta, "$&/") + "/"),
            b(G, E, M, "", function (Du) {
              return Du;
            }))
          : G != null &&
            (At(G) &&
              (G = La(
                G,
                M +
                  (G.key == null || (o && o.key === G.key)
                    ? ""
                    : ("" + G.key).replace(Ta, "$&/") + "/") +
                  ll,
              )),
            E.push(G)),
        1
      );
    ll = 0;
    var ql = U === "" ? "." : U + ":";
    if (Tt(o))
      for (var gl = 0; gl < o.length; gl++)
        ((U = o[gl]), (Z = ql + Nt(U, gl)), (ll += b(U, E, M, Z, G)));
    else if (((gl = Wl(o)), typeof gl == "function"))
      for (o = gl.call(o), gl = 0; !(U = o.next()).done; )
        ((U = U.value), (Z = ql + Nt(U, gl++)), (ll += b(U, E, M, Z, G)));
    else if (Z === "object") {
      if (typeof o.then == "function") return b(gt(o), E, M, U, G);
      throw (
        (E = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (E === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : E) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ll;
  }
  function p(o, E, M) {
    if (o == null) return o;
    var U = [],
      G = 0;
    return (
      b(o, U, "", "", function (Z) {
        return E.call(M, Z, G++);
      }),
      U
    );
  }
  function B(o) {
    if (o._status === -1) {
      var E = o._result;
      ((E = E()),
        E.then(
          function (M) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = M));
          },
          function (M) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = M));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = E)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var el =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var E = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(E)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    cl = {
      map: p,
      forEach: function (o, E, M) {
        p(
          o,
          function () {
            E.apply(this, arguments);
          },
          M,
        );
      },
      count: function (o) {
        var E = 0;
        return (
          p(o, function () {
            E++;
          }),
          E
        );
      },
      toArray: function (o) {
        return (
          p(o, function (E) {
            return E;
          }) || []
        );
      },
      only: function (o) {
        if (!At(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (Y.Activity = q),
    (Y.Children = cl),
    (Y.Component = $l),
    (Y.Fragment = _),
    (Y.Profiler = R),
    (Y.PureComponent = Cl),
    (Y.StrictMode = d),
    (Y.Suspense = H),
    (Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (Y.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return w.H.useMemoCache(o);
      },
    }),
    (Y.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (Y.cacheSignal = function () {
      return null;
    }),
    (Y.cloneElement = function (o, E, M) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var U = jl({}, o.props),
        G = o.key;
      if (E != null)
        for (Z in (E.key !== void 0 && (G = "" + E.key), E))
          !Gl.call(E, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && E.ref === void 0) ||
            (U[Z] = E[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) U.children = M;
      else if (1 < Z) {
        for (var ll = Array(Z), ql = 0; ql < Z; ql++)
          ll[ql] = arguments[ql + 2];
        U.children = ll;
      }
      return Et(o.type, G, U);
    }),
    (Y.createContext = function (o) {
      return (
        (o = {
          $$typeof: tl,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: x, _context: o }),
        o
      );
    }),
    (Y.createElement = function (o, E, M) {
      var U,
        G = {},
        Z = null;
      if (E != null)
        for (U in (E.key !== void 0 && (Z = "" + E.key), E))
          Gl.call(E, U) &&
            U !== "key" &&
            U !== "__self" &&
            U !== "__source" &&
            (G[U] = E[U]);
      var ll = arguments.length - 2;
      if (ll === 1) G.children = M;
      else if (1 < ll) {
        for (var ql = Array(ll), gl = 0; gl < ll; gl++)
          ql[gl] = arguments[gl + 2];
        G.children = ql;
      }
      if (o && o.defaultProps)
        for (U in ((ll = o.defaultProps), ll))
          G[U] === void 0 && (G[U] = ll[U]);
      return Et(o, Z, G);
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (o) {
      return { $$typeof: ol, render: o };
    }),
    (Y.isValidElement = At),
    (Y.lazy = function (o) {
      return { $$typeof: P, _payload: { _status: -1, _result: o }, _init: B };
    }),
    (Y.memo = function (o, E) {
      return { $$typeof: A, type: o, compare: E === void 0 ? null : E };
    }),
    (Y.startTransition = function (o) {
      var E = w.T,
        M = {};
      w.T = M;
      try {
        var U = o(),
          G = w.S;
        (G !== null && G(M, U),
          typeof U == "object" &&
            U !== null &&
            typeof U.then == "function" &&
            U.then(Yl, el));
      } catch (Z) {
        el(Z);
      } finally {
        (E !== null && M.types !== null && (E.types = M.types), (w.T = E));
      }
    }),
    (Y.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (Y.use = function (o) {
      return w.H.use(o);
    }),
    (Y.useActionState = function (o, E, M) {
      return w.H.useActionState(o, E, M);
    }),
    (Y.useCallback = function (o, E) {
      return w.H.useCallback(o, E);
    }),
    (Y.useContext = function (o) {
      return w.H.useContext(o);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (o, E) {
      return w.H.useDeferredValue(o, E);
    }),
    (Y.useEffect = function (o, E) {
      return w.H.useEffect(o, E);
    }),
    (Y.useEffectEvent = function (o) {
      return w.H.useEffectEvent(o);
    }),
    (Y.useId = function () {
      return w.H.useId();
    }),
    (Y.useImperativeHandle = function (o, E, M) {
      return w.H.useImperativeHandle(o, E, M);
    }),
    (Y.useInsertionEffect = function (o, E) {
      return w.H.useInsertionEffect(o, E);
    }),
    (Y.useLayoutEffect = function (o, E) {
      return w.H.useLayoutEffect(o, E);
    }),
    (Y.useMemo = function (o, E) {
      return w.H.useMemo(o, E);
    }),
    (Y.useOptimistic = function (o, E) {
      return w.H.useOptimistic(o, E);
    }),
    (Y.useReducer = function (o, E, M) {
      return w.H.useReducer(o, E, M);
    }),
    (Y.useRef = function (o) {
      return w.H.useRef(o);
    }),
    (Y.useState = function (o) {
      return w.H.useState(o);
    }),
    (Y.useSyncExternalStore = function (o, E, M) {
      return w.H.useSyncExternalStore(o, E, M);
    }),
    (Y.useTransition = function () {
      return w.H.useTransition();
    }),
    (Y.version = "19.2.4"),
    Y
  );
}
var A1;
function hc() {
  return (A1 || ((A1 = 1), (vc.exports = fv())), vc.exports);
}
var yc = { exports: {} },
  Rl = {};
var O1;
function cv() {
  if (O1) return Rl;
  O1 = 1;
  var r = hc();
  function O(H) {
    var A = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var P = 2; P < arguments.length; P++)
        A += "&args[]=" + encodeURIComponent(arguments[P]);
    }
    return (
      "Minified React error #" +
      H +
      "; visit " +
      A +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function _() {}
  var d = {
      d: {
        f: _,
        r: function () {
          throw Error(O(522));
        },
        D: _,
        C: _,
        L: _,
        m: _,
        X: _,
        S: _,
        M: _,
      },
      p: 0,
      findDOMNode: null,
    },
    R = Symbol.for("react.portal");
  function x(H, A, P) {
    var q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: q == null ? null : "" + q,
      children: H,
      containerInfo: A,
      implementation: P,
    };
  }
  var tl = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ol(H, A) {
    if (H === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  return (
    (Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (Rl.createPortal = function (H, A) {
      var P =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11))
        throw Error(O(299));
      return x(H, A, null, P);
    }),
    (Rl.flushSync = function (H) {
      var A = tl.T,
        P = d.p;
      try {
        if (((tl.T = null), (d.p = 2), H)) return H();
      } finally {
        ((tl.T = A), (d.p = P), d.d.f());
      }
    }),
    (Rl.preconnect = function (H, A) {
      typeof H == "string" &&
        (A
          ? ((A = A.crossOrigin),
            (A =
              typeof A == "string"
                ? A === "use-credentials"
                  ? A
                  : ""
                : void 0))
          : (A = null),
        d.d.C(H, A));
    }),
    (Rl.prefetchDNS = function (H) {
      typeof H == "string" && d.d.D(H);
    }),
    (Rl.preinit = function (H, A) {
      if (typeof H == "string" && A && typeof A.as == "string") {
        var P = A.as,
          q = ol(P, A.crossOrigin),
          vl = typeof A.integrity == "string" ? A.integrity : void 0,
          Wl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
        P === "style"
          ? d.d.S(H, typeof A.precedence == "string" ? A.precedence : void 0, {
              crossOrigin: q,
              integrity: vl,
              fetchPriority: Wl,
            })
          : P === "script" &&
            d.d.X(H, {
              crossOrigin: q,
              integrity: vl,
              fetchPriority: Wl,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
      }
    }),
    (Rl.preinitModule = function (H, A) {
      if (typeof H == "string")
        if (typeof A == "object" && A !== null) {
          if (A.as == null || A.as === "script") {
            var P = ol(A.as, A.crossOrigin);
            d.d.M(H, {
              crossOrigin: P,
              integrity: typeof A.integrity == "string" ? A.integrity : void 0,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
          }
        } else A == null && d.d.M(H);
    }),
    (Rl.preload = function (H, A) {
      if (
        typeof H == "string" &&
        typeof A == "object" &&
        A !== null &&
        typeof A.as == "string"
      ) {
        var P = A.as,
          q = ol(P, A.crossOrigin);
        d.d.L(H, P, {
          crossOrigin: q,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0,
          type: typeof A.type == "string" ? A.type : void 0,
          fetchPriority:
            typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
          referrerPolicy:
            typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
          imageSrcSet:
            typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
          imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
          media: typeof A.media == "string" ? A.media : void 0,
        });
      }
    }),
    (Rl.preloadModule = function (H, A) {
      if (typeof H == "string")
        if (A) {
          var P = ol(A.as, A.crossOrigin);
          d.d.m(H, {
            as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
            crossOrigin: P,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          });
        } else d.d.m(H);
    }),
    (Rl.requestFormReset = function (H) {
      d.d.r(H);
    }),
    (Rl.unstable_batchedUpdates = function (H, A) {
      return H(A);
    }),
    (Rl.useFormState = function (H, A, P) {
      return tl.H.useFormState(H, A, P);
    }),
    (Rl.useFormStatus = function () {
      return tl.H.useHostTransitionStatus();
    }),
    (Rl.version = "19.2.4"),
    Rl
  );
}
var _1;
function sv() {
  if (_1) return yc.exports;
  _1 = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (O) {
        console.error(O);
      }
  }
  return (r(), (yc.exports = cv()), yc.exports);
}
var p1;
function ov() {
  if (p1) return Ee;
  p1 = 1;
  var r = iv(),
    O = hc(),
    _ = sv();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function R(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function x(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function tl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ol(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (x(l) !== l) throw Error(d(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = x(l)), t === null)) throw Error(d(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return (H(e), l);
          if (n === u) return (H(e), t);
          n = n.sibling;
        }
        throw Error(d(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var i = !1, f = e.child; f; ) {
          if (f === a) {
            ((i = !0), (a = e), (u = n));
            break;
          }
          if (f === u) {
            ((i = !0), (u = e), (a = n));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === a) {
              ((i = !0), (a = n), (u = e));
              break;
            }
            if (f === u) {
              ((i = !0), (u = n), (a = e));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (a.alternate !== u) throw Error(d(190));
    }
    if (a.tag !== 3) throw Error(d(188));
    return a.stateNode.current === a ? l : t;
  }
  function P(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = P(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign,
    vl = Symbol.for("react.element"),
    Wl = Symbol.for("react.transitional.element"),
    xl = Symbol.for("react.portal"),
    jl = Symbol.for("react.fragment"),
    Ut = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    $t = Symbol.for("react.consumer"),
    Cl = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Yl = Symbol.for("react.suspense_list"),
    w = Symbol.for("react.memo"),
    Gl = Symbol.for("react.lazy"),
    Et = Symbol.for("react.activity"),
    La = Symbol.for("react.memo_cache_sentinel"),
    At = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (At && l[At]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ta = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ta ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case jl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Yl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case xl:
          return "Portal";
        case Cl:
          return l.displayName || "Context";
        case $t:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case w:
          return (
            (t = l.displayName || null),
            t !== null ? t : Nt(l.type) || "Memo"
          );
        case Gl:
          ((t = l._payload), (l = l._init));
          try {
            return Nt(l(t));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    b = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    p = _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    el = [],
    cl = -1;
  function o(l) {
    return { current: l };
  }
  function E(l) {
    0 > cl || ((l.current = el[cl]), (el[cl] = null), cl--);
  }
  function M(l, t) {
    (cl++, (el[cl] = l.current), (l.current = t));
  }
  var U = o(null),
    G = o(null),
    Z = o(null),
    ll = o(null);
  function ql(l, t) {
    switch ((M(Z, t), M(G, l), M(U, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Qo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Qo(t)), (l = Zo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (E(U), M(U, l));
  }
  function gl() {
    (E(U), E(G), E(Z));
  }
  function Du(l) {
    l.memoizedState !== null && M(ll, l);
    var t = U.current,
      a = Zo(t, l.type);
    t !== a && (M(G, l), M(U, a));
  }
  function Ae(l) {
    (G.current === l && (E(U), E(G)),
      ll.current === l && (E(ll), (ge._currentValue = B)));
  }
  var Vn, rc;
  function Ea(l) {
    if (Vn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Vn = (t && t[1]) || ""),
          (rc =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Vn +
      l +
      rc
    );
  }
  var Kn = !1;
  function Jn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (g) {
                  h = g;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string") return [g.stack, h.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var c = i.split(`
`),
          y = f.split(`
`);
        for (
          e = u = 0;
          u < c.length && !c[u].includes("DetermineComponentFrameRoot");
        )
          u++;
        for (; e < y.length && !y[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === c.length || e === y.length)
          for (
            u = c.length - 1, e = y.length - 1;
            1 <= u && 0 <= e && c[u] !== y[e];
          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== y[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || c[u] !== y[e])) {
                  var S =
                    `
` + c[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ((Kn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Ea(a) : "";
  }
  function j1(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ea(l.type);
      case 16:
        return Ea("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ea("Suspense Fallback")
          : Ea("Suspense");
      case 19:
        return Ea("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return Ea("Activity");
      default:
        return "";
    }
  }
  function gc(l) {
    try {
      var t = "",
        a = null;
      do ((t += j1(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var wn = Object.prototype.hasOwnProperty,
    Wn = r.unstable_scheduleCallback,
    $n = r.unstable_cancelCallback,
    q1 = r.unstable_shouldYield,
    B1 = r.unstable_requestPaint,
    kl = r.unstable_now,
    x1 = r.unstable_getCurrentPriorityLevel,
    Sc = r.unstable_ImmediatePriority,
    bc = r.unstable_UserBlockingPriority,
    Oe = r.unstable_NormalPriority,
    Y1 = r.unstable_LowPriority,
    zc = r.unstable_IdlePriority,
    G1 = r.log,
    X1 = r.unstable_setDisableYieldValue,
    Uu = null,
    Fl = null;
  function kt(l) {
    if (
      (typeof G1 == "function" && X1(l),
      Fl && typeof Fl.setStrictMode == "function")
    )
      try {
        Fl.setStrictMode(Uu, l);
      } catch {}
  }
  var Il = Math.clz32 ? Math.clz32 : L1,
    Q1 = Math.log,
    Z1 = Math.LN2;
  function L1(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Q1(l) / Z1) | 0)) | 0);
  }
  var _e = 256,
    pe = 262144,
    Me = 4194304;
  function Aa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function De(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return (
      f !== 0
        ? ((u = f & ~n),
          u !== 0
            ? (e = Aa(u))
            : ((i &= f),
              i !== 0
                ? (e = Aa(i))
                : a || ((a = f & ~l), a !== 0 && (e = Aa(a)))))
        : ((f = u & ~n),
          f !== 0
            ? (e = Aa(f))
            : i !== 0
              ? (e = Aa(i))
              : a || ((a = u & ~l), a !== 0 && (e = Aa(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function Nu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function V1(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tc() {
    var l = Me;
    return ((Me <<= 1), (Me & 62914560) === 0 && (Me = 4194304), l);
  }
  function kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Hu(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function K1(l, t, a, u, e, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      c = l.expirationTimes,
      y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var S = 31 - Il(a),
        T = 1 << S;
      ((f[S] = 0), (c[S] = -1));
      var h = y[S];
      if (h !== null)
        for (y[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~T;
    }
    (u !== 0 && Ec(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Ec(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - Il(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function Ac(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function Oc(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Fn(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Fn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function In(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function _c() {
    var l = p.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : d1(l.type));
  }
  function pc(l, t) {
    var a = p.p;
    try {
      return ((p.p = l), t());
    } finally {
      p.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Ml = "__reactFiber$" + Ft,
    Ql = "__reactProps$" + Ft,
    Va = "__reactContainer$" + Ft,
    Pn = "__reactEvents$" + Ft,
    J1 = "__reactListeners$" + Ft,
    w1 = "__reactHandles$" + Ft,
    Mc = "__reactResources$" + Ft,
    Cu = "__reactMarker$" + Ft;
  function li(l) {
    (delete l[Ml], delete l[Ql], delete l[Pn], delete l[J1], delete l[w1]);
  }
  function Ka(l) {
    var t = l[Ml];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Va] || a[Ml])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = $o(l); l !== null; ) {
            if ((a = l[Ml])) return a;
            l = $o(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Ja(l) {
    if ((l = l[Ml] || l[Va])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ru(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function wa(l) {
    var t = l[Mc];
    return (
      t ||
        (t = l[Mc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _l(l) {
    l[Cu] = !0;
  }
  var Dc = new Set(),
    Uc = {};
  function Oa(l, t) {
    (Wa(l, t), Wa(l + "Capture", t));
  }
  function Wa(l, t) {
    for (Uc[l] = t, l = 0; l < t.length; l++) Dc.add(t[l]);
  }
  var W1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Nc = {},
    Hc = {};
  function $1(l) {
    return wn.call(Hc, l)
      ? !0
      : wn.call(Nc, l)
        ? !1
        : W1.test(l)
          ? (Hc[l] = !0)
          : ((Nc[l] = !0), !1);
  }
  function Ue(l, t, a) {
    if ($1(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ne(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ht(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function ft(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Cc(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function k1(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ti(l) {
    if (!l._valueTracker) {
      var t = Cc(l) ? "checked" : "value";
      l._valueTracker = k1(l, t, "" + l[t]);
    }
  }
  function Rc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Cc(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function He(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var F1 = /[\n"\\]/g;
  function ct(l) {
    return l.replace(F1, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ai(l, t, a, u, e, n, i, f) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ft(t))
          : l.value !== "" + ft(t) && (l.value = "" + ft(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ui(l, i, ft(t))
        : a != null
          ? ui(l, i, ft(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ft(f))
        : l.removeAttribute("name"));
  }
  function jc(l, t, a, u, e, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        ti(l);
        return;
      }
      ((a = a != null ? "" + ft(a) : ""),
        (t = t != null ? "" + ft(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = f ? l.checked : !!u),
      (l.defaultChecked = !!u),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      ti(l));
  }
  function ui(l, t, a) {
    (t === "number" && He(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function $a(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ft(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qc(l, t, a) {
    if (
      t != null &&
      ((t = "" + ft(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function Bc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(d(92));
        if (gt(u)) {
          if (1 < u.length) throw Error(d(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ft(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      ti(l));
  }
  function ka(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var I1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function xc(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || I1.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Yc(l, t, a) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && xc(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && xc(l, n, t[n]);
  }
  function ei(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var P1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ld =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ce(l) {
    return ld.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ct() {}
  var ni = null;
  function ii(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Fa = null,
    Ia = null;
  function Gc(l) {
    var t = Ja(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ql] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ai(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ct("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Ql] || null;
                if (!e) throw Error(d(90));
                ai(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((u = a[t]), u.form === l.form && Rc(u));
          }
          break l;
        case "textarea":
          qc(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && $a(l, !!a.multiple, t, !1));
      }
    }
  }
  var fi = !1;
  function Xc(l, t, a) {
    if (fi) return l(t, a);
    fi = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((fi = !1),
        (Fa !== null || Ia !== null) &&
          (zn(), Fa && ((t = Fa), (l = Ia), (Ia = Fa = null), Gc(t), l)))
      )
        for (t = 0; t < l.length; t++) Gc(l[t]);
    }
  }
  function ju(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Ql] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(d(231, t, typeof a));
    return a;
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ci = !1;
  if (Rt)
    try {
      var qu = {};
      (Object.defineProperty(qu, "passive", {
        get: function () {
          ci = !0;
        },
      }),
        window.addEventListener("test", qu, qu),
        window.removeEventListener("test", qu, qu));
    } catch {
      ci = !1;
    }
  var It = null,
    si = null,
    Re = null;
  function Qc() {
    if (Re) return Re;
    var l,
      t = si,
      a = t.length,
      u,
      e = "value" in It ? It.value : It.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === e[n - u]; u++);
    return (Re = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function je(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function qe() {
    return !0;
  }
  function Zc() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, i) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? qe
          : Zc),
        (this.isPropagationStopped = Zc),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = qe));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = qe));
        },
        persist: function () {},
        isPersistent: qe,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Be = Zl(_a),
    Bu = q({}, _a, { view: 0, detail: 0 }),
    td = Zl(Bu),
    oi,
    di,
    xu,
    xe = q({}, Bu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== xu &&
              (xu && l.type === "mousemove"
                ? ((oi = l.screenX - xu.screenX), (di = l.screenY - xu.screenY))
                : (di = oi = 0),
              (xu = l)),
            oi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : di;
      },
    }),
    Lc = Zl(xe),
    ad = q({}, xe, { dataTransfer: 0 }),
    ud = Zl(ad),
    ed = q({}, Bu, { relatedTarget: 0 }),
    mi = Zl(ed),
    nd = q({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    id = Zl(nd),
    fd = q({}, _a, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    cd = Zl(fd),
    sd = q({}, _a, { data: 0 }),
    Vc = Zl(sd),
    od = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    md = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vd(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = md[l])
        ? !!t[l]
        : !1;
  }
  function vi() {
    return vd;
  }
  var yd = q({}, Bu, {
      key: function (l) {
        if (l.key) {
          var t = od[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = je(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? dd[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vi,
      charCode: function (l) {
        return l.type === "keypress" ? je(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? je(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    hd = Zl(yd),
    rd = q({}, xe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kc = Zl(rd),
    gd = q({}, Bu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vi,
    }),
    Sd = Zl(gd),
    bd = q({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zd = Zl(bd),
    Td = q({}, xe, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ed = Zl(Td),
    Ad = q({}, _a, { newState: 0, oldState: 0 }),
    Od = Zl(Ad),
    _d = [9, 13, 27, 32],
    yi = Rt && "CompositionEvent" in window,
    Yu = null;
  Rt && "documentMode" in document && (Yu = document.documentMode);
  var pd = Rt && "TextEvent" in window && !Yu,
    Jc = Rt && (!yi || (Yu && 8 < Yu && 11 >= Yu)),
    wc = " ",
    Wc = !1;
  function $c(l, t) {
    switch (l) {
      case "keyup":
        return _d.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kc(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Pa = !1;
  function Md(l, t) {
    switch (l) {
      case "compositionend":
        return kc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wc = !0), wc);
      case "textInput":
        return ((l = t.data), l === wc && Wc ? null : l);
      default:
        return null;
    }
  }
  function Dd(l, t) {
    if (Pa)
      return l === "compositionend" || (!yi && $c(l, t))
        ? ((l = Qc()), (Re = si = It = null), (Pa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ud = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Fc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ud[l.type] : t === "textarea";
  }
  function Ic(l, t, a, u) {
    (Fa ? (Ia ? Ia.push(u) : (Ia = [u])) : (Fa = u),
      (t = Mn(t, "onChange")),
      0 < t.length &&
        ((a = new Be("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t })));
  }
  var Gu = null,
    Xu = null;
  function Nd(l) {
    qo(l, 0);
  }
  function Ye(l) {
    var t = Ru(l);
    if (Rc(t)) return l;
  }
  function Pc(l, t) {
    if (l === "change") return t;
  }
  var l0 = !1;
  if (Rt) {
    var hi;
    if (Rt) {
      var ri = "oninput" in document;
      if (!ri) {
        var t0 = document.createElement("div");
        (t0.setAttribute("oninput", "return;"),
          (ri = typeof t0.oninput == "function"));
      }
      hi = ri;
    } else hi = !1;
    l0 = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function a0() {
    Gu && (Gu.detachEvent("onpropertychange", u0), (Xu = Gu = null));
  }
  function u0(l) {
    if (l.propertyName === "value" && Ye(Xu)) {
      var t = [];
      (Ic(t, Xu, l, ii(l)), Xc(Nd, t));
    }
  }
  function Hd(l, t, a) {
    l === "focusin"
      ? (a0(), (Gu = t), (Xu = a), Gu.attachEvent("onpropertychange", u0))
      : l === "focusout" && a0();
  }
  function Cd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Xu);
  }
  function Rd(l, t) {
    if (l === "click") return Ye(t);
  }
  function jd(l, t) {
    if (l === "input" || l === "change") return Ye(t);
  }
  function qd(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Pl = typeof Object.is == "function" ? Object.is : qd;
  function Qu(l, t) {
    if (Pl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!wn.call(t, e) || !Pl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function e0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function n0(l, t) {
    var a = e0(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = e0(a);
    }
  }
  function i0(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? i0(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function f0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = He(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = He(l.document);
    }
    return t;
  }
  function gi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Bd = Rt && "documentMode" in document && 11 >= document.documentMode,
    lu = null,
    Si = null,
    Zu = null,
    bi = !1;
  function c0(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    bi ||
      lu == null ||
      lu !== He(u) ||
      ((u = lu),
      "selectionStart" in u && gi(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Zu && Qu(Zu, u)) ||
        ((Zu = u),
        (u = Mn(Si, "onSelect")),
        0 < u.length &&
          ((t = new Be("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = lu))));
  }
  function pa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var tu = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    zi = {},
    s0 = {};
  Rt &&
    ((s0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete tu.animationend.animation,
      delete tu.animationiteration.animation,
      delete tu.animationstart.animation),
    "TransitionEvent" in window || delete tu.transitionend.transition);
  function Ma(l) {
    if (zi[l]) return zi[l];
    if (!tu[l]) return l;
    var t = tu[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in s0) return (zi[l] = t[a]);
    return l;
  }
  var o0 = Ma("animationend"),
    d0 = Ma("animationiteration"),
    m0 = Ma("animationstart"),
    xd = Ma("transitionrun"),
    Yd = Ma("transitionstart"),
    Gd = Ma("transitioncancel"),
    v0 = Ma("transitionend"),
    y0 = new Map(),
    Ti =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ti.push("scrollEnd");
  function St(l, t) {
    (y0.set(l, t), Oa(t, [l]));
  }
  var Ge =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    st = [],
    au = 0,
    Ei = 0;
  function Xe() {
    for (var l = au, t = (Ei = au = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), u !== null && e !== null)) {
        var i = u.pending;
        (i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
          (u.pending = e));
      }
      n !== 0 && h0(a, e, n);
    }
  }
  function Qe(l, t, a, u) {
    ((st[au++] = l),
      (st[au++] = t),
      (st[au++] = a),
      (st[au++] = u),
      (Ei |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function Ai(l, t, a, u) {
    return (Qe(l, t, a, u), Ze(l));
  }
  function Da(l, t) {
    return (Qe(l, null, null, t), Ze(l));
  }
  function h0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Il(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Ze(l) {
    if (50 < oe) throw ((oe = 0), (Rf = null), Error(d(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var uu = {};
  function Xd(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function lt(l, t, a, u) {
    return new Xd(l, t, a, u);
  }
  function Oi(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function jt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = lt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function r0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Le(l, t, a, u, e, n) {
    var i = 0;
    if (((u = l), typeof l == "function")) Oi(l) && (i = 1);
    else if (typeof l == "string")
      i = Km(l, a, U.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Et:
          return (
            (l = lt(31, a, t, e)),
            (l.elementType = Et),
            (l.lanes = n),
            l
          );
        case jl:
          return Ua(a.children, e, n, t);
        case Ut:
          ((i = 8), (e |= 24));
          break;
        case $l:
          return (
            (l = lt(12, a, t, e | 2)),
            (l.elementType = $l),
            (l.lanes = n),
            l
          );
        case Tt:
          return (
            (l = lt(13, a, t, e)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case Yl:
          return (
            (l = lt(19, a, t, e)),
            (l.elementType = Yl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Cl:
                i = 10;
                break l;
              case $t:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case w:
                i = 14;
                break l;
              case Gl:
                ((i = 16), (u = null));
                break l;
            }
          ((i = 29),
            (a = Error(d(130, l === null ? "null" : typeof l, ""))),
            (u = null));
      }
    return (
      (t = lt(i, a, t, e)),
      (t.elementType = l),
      (t.type = u),
      (t.lanes = n),
      t
    );
  }
  function Ua(l, t, a, u) {
    return ((l = lt(7, l, u, t)), (l.lanes = a), l);
  }
  function _i(l, t, a) {
    return ((l = lt(6, l, null, t)), (l.lanes = a), l);
  }
  function g0(l) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function pi(l, t, a) {
    return (
      (t = lt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var S0 = new WeakMap();
  function ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = S0.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: gc(t) }), S0.set(l, t), t);
    }
    return { value: l, source: t, stack: gc(t) };
  }
  var eu = [],
    nu = 0,
    Ve = null,
    Lu = 0,
    dt = [],
    mt = 0,
    Pt = null,
    Ot = 1,
    _t = "";
  function qt(l, t) {
    ((eu[nu++] = Lu), (eu[nu++] = Ve), (Ve = l), (Lu = t));
  }
  function b0(l, t, a) {
    ((dt[mt++] = Ot), (dt[mt++] = _t), (dt[mt++] = Pt), (Pt = l));
    var u = Ot;
    l = _t;
    var e = 32 - Il(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var i = e - (e % 5);
      ((n = (u & ((1 << i) - 1)).toString(32)),
        (u >>= i),
        (e -= i),
        (Ot = (1 << (32 - Il(t) + e)) | (a << e) | u),
        (_t = n + l));
    } else ((Ot = (1 << n) | (a << e) | u), (_t = l));
  }
  function Mi(l) {
    l.return !== null && (qt(l, 1), b0(l, 1, 0));
  }
  function Di(l) {
    for (; l === Ve; )
      ((Ve = eu[--nu]), (eu[nu] = null), (Lu = eu[--nu]), (eu[nu] = null));
    for (; l === Pt; )
      ((Pt = dt[--mt]),
        (dt[mt] = null),
        (_t = dt[--mt]),
        (dt[mt] = null),
        (Ot = dt[--mt]),
        (dt[mt] = null));
  }
  function z0(l, t) {
    ((dt[mt++] = Ot),
      (dt[mt++] = _t),
      (dt[mt++] = Pt),
      (Ot = t.id),
      (_t = t.overflow),
      (Pt = l));
  }
  var Dl = null,
    dl = null,
    W = !1,
    la = null,
    vt = !1,
    Ui = Error(d(519));
  function ta(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Vu(ot(t, l)), Ui);
  }
  function T0(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Ml] = l), (t[Ql] = u), a)) {
      case "dialog":
        (V("cancel", t), V("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < me.length; a++) V(me[a], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (V("error", t), V("load", t));
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        (V("invalid", t),
          jc(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ));
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        (V("invalid", t), Bc(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      Go(t.textContent, a)
        ? (u.popover != null && (V("beforetoggle", t), V("toggle", t)),
          u.onScroll != null && V("scroll", t),
          u.onScrollEnd != null && V("scrollend", t),
          u.onClick != null && (t.onclick = Ct),
          (t = !0))
        : (t = !1),
      t || ta(l, !0));
  }
  function E0(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function iu(l) {
    if (l !== Dl) return !1;
    if (!W) return (E0(l), (W = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Wf(l.type, l.memoizedProps))),
        (a = !a)),
      a && dl && ta(l),
      E0(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      dl = Wo(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      dl = Wo(l);
    } else
      t === 27
        ? ((t = dl), ha(l.type) ? ((l = Pf), (Pf = null), (dl = l)) : (dl = t))
        : (dl = Dl ? ht(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Na() {
    ((dl = Dl = null), (W = !1));
  }
  function Ni() {
    var l = la;
    return (
      l !== null &&
        (Jl === null ? (Jl = l) : Jl.push.apply(Jl, l), (la = null)),
      l
    );
  }
  function Vu(l) {
    la === null ? (la = [l]) : la.push(l);
  }
  var Hi = o(null),
    Ha = null,
    Bt = null;
  function aa(l, t, a) {
    (M(Hi, t._currentValue), (t._currentValue = a));
  }
  function xt(l) {
    ((l._currentValue = Hi.current), E(Hi));
  }
  function Ci(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Ri(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (f.context === t[c]) {
              ((n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                Ci(n.return, a, l),
                u || (i = null));
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((i = e.return), i === null)) throw Error(d(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          Ci(i, a, l),
          (i = null));
      } else i = e.child;
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((e = i.sibling), e !== null)) {
            ((e.return = i.return), (i = e));
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function fu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = e.type;
          Pl(e.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === ll.current) {
        if (((i = e.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(ge) : (l = [ge]));
      }
      e = e.return;
    }
    (l !== null && Ri(t, l, a, u), (t.flags |= 262144));
  }
  function Ke(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ca(l) {
    ((Ha = l),
      (Bt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Ul(l) {
    return A0(Ha, l);
  }
  function Je(l, t) {
    return (Ha === null && Ca(l), A0(l, t));
  }
  function A0(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(d(308));
      ((Bt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var Qd =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Zd = r.unstable_scheduleCallback,
    Ld = r.unstable_NormalPriority,
    zl = {
      $$typeof: Cl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ji() {
    return { controller: new Qd(), data: new Map(), refCount: 0 };
  }
  function Ku(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Zd(Ld, function () {
          l.controller.abort();
        }));
  }
  var Ju = null,
    qi = 0,
    cu = 0,
    su = null;
  function Vd(l, t) {
    if (Ju === null) {
      var a = (Ju = []);
      ((qi = 0),
        (cu = Gf()),
        (su = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (qi++, t.then(O0, O0), t);
  }
  function O0() {
    if (--qi === 0 && Ju !== null) {
      su !== null && (su.status = "fulfilled");
      var l = Ju;
      ((Ju = null), (cu = 0), (su = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Kd(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var _0 = b.S;
  b.S = function (l, t) {
    ((co = kl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Vd(l, t),
      _0 !== null && _0(l, t));
  };
  var Ra = o(null);
  function Bi() {
    var l = Ra.current;
    return l !== null ? l : sl.pooledCache;
  }
  function we(l, t) {
    t === null ? M(Ra, Ra.current) : M(Ra, t.pool);
  }
  function p0() {
    var l = Bi();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var ou = Error(d(460)),
    xi = Error(d(474)),
    We = Error(d(542)),
    $e = { then: function () {} };
  function M0(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function D0(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ct, Ct), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), N0(l), l);
      default:
        if (typeof t.status == "string") t.then(Ct, Ct);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(d(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), N0(l), l);
        }
        throw ((qa = t), ou);
    }
  }
  function ja(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((qa = a), ou)
        : a;
    }
  }
  var qa = null;
  function U0() {
    if (qa === null) throw Error(d(459));
    var l = qa;
    return ((qa = null), l);
  }
  function N0(l) {
    if (l === ou || l === We) throw Error(d(483));
  }
  var du = null,
    wu = 0;
  function ke(l) {
    var t = wu;
    return ((wu += 1), du === null && (du = []), D0(du, l, t));
  }
  function Wu(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Fe(l, t) {
    throw t.$$typeof === vl
      ? Error(d(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function H0(l) {
    function t(m, s) {
      if (l) {
        var v = m.deletions;
        v === null ? ((m.deletions = [s]), (m.flags |= 16)) : v.push(s);
      }
    }
    function a(m, s) {
      if (!l) return null;
      for (; s !== null; ) (t(m, s), (s = s.sibling));
      return null;
    }
    function u(m) {
      for (var s = new Map(); m !== null; )
        (m.key !== null ? s.set(m.key, m) : s.set(m.index, m), (m = m.sibling));
      return s;
    }
    function e(m, s) {
      return ((m = jt(m, s)), (m.index = 0), (m.sibling = null), m);
    }
    function n(m, s, v) {
      return (
        (m.index = v),
        l
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < s ? ((m.flags |= 67108866), s) : v)
              : ((m.flags |= 67108866), s))
          : ((m.flags |= 1048576), s)
      );
    }
    function i(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function f(m, s, v, z) {
      return s === null || s.tag !== 6
        ? ((s = _i(v, m.mode, z)), (s.return = m), s)
        : ((s = e(s, v)), (s.return = m), s);
    }
    function c(m, s, v, z) {
      var C = v.type;
      return C === jl
        ? S(m, s, v.props.children, z, v.key)
        : s !== null &&
            (s.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === Gl &&
                ja(C) === s.type))
          ? ((s = e(s, v.props)), Wu(s, v), (s.return = m), s)
          : ((s = Le(v.type, v.key, v.props, null, m.mode, z)),
            Wu(s, v),
            (s.return = m),
            s);
    }
    function y(m, s, v, z) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== v.containerInfo ||
        s.stateNode.implementation !== v.implementation
        ? ((s = pi(v, m.mode, z)), (s.return = m), s)
        : ((s = e(s, v.children || [])), (s.return = m), s);
    }
    function S(m, s, v, z, C) {
      return s === null || s.tag !== 7
        ? ((s = Ua(v, m.mode, z, C)), (s.return = m), s)
        : ((s = e(s, v)), (s.return = m), s);
    }
    function T(m, s, v) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = _i("" + s, m.mode, v)), (s.return = m), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return (
              (v = Le(s.type, s.key, s.props, null, m.mode, v)),
              Wu(v, s),
              (v.return = m),
              v
            );
          case xl:
            return ((s = pi(s, m.mode, v)), (s.return = m), s);
          case Gl:
            return ((s = ja(s)), T(m, s, v));
        }
        if (gt(s) || Xl(s))
          return ((s = Ua(s, m.mode, v, null)), (s.return = m), s);
        if (typeof s.then == "function") return T(m, ke(s), v);
        if (s.$$typeof === Cl) return T(m, Je(m, s), v);
        Fe(m, s);
      }
      return null;
    }
    function h(m, s, v, z) {
      var C = s !== null ? s.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return C !== null ? null : f(m, s, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Wl:
            return v.key === C ? c(m, s, v, z) : null;
          case xl:
            return v.key === C ? y(m, s, v, z) : null;
          case Gl:
            return ((v = ja(v)), h(m, s, v, z));
        }
        if (gt(v) || Xl(v)) return C !== null ? null : S(m, s, v, z, null);
        if (typeof v.then == "function") return h(m, s, ke(v), z);
        if (v.$$typeof === Cl) return h(m, s, Je(m, v), z);
        Fe(m, v);
      }
      return null;
    }
    function g(m, s, v, z, C) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((m = m.get(v) || null), f(s, m, "" + z, C));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Wl:
            return (
              (m = m.get(z.key === null ? v : z.key) || null),
              c(s, m, z, C)
            );
          case xl:
            return (
              (m = m.get(z.key === null ? v : z.key) || null),
              y(s, m, z, C)
            );
          case Gl:
            return ((z = ja(z)), g(m, s, v, z, C));
        }
        if (gt(z) || Xl(z))
          return ((m = m.get(v) || null), S(s, m, z, C, null));
        if (typeof z.then == "function") return g(m, s, v, ke(z), C);
        if (z.$$typeof === Cl) return g(m, s, v, Je(s, z), C);
        Fe(s, z);
      }
      return null;
    }
    function D(m, s, v, z) {
      for (
        var C = null, k = null, N = s, Q = (s = 0), J = null;
        N !== null && Q < v.length;
        Q++
      ) {
        N.index > Q ? ((J = N), (N = null)) : (J = N.sibling);
        var F = h(m, N, v[Q], z);
        if (F === null) {
          N === null && (N = J);
          break;
        }
        (l && N && F.alternate === null && t(m, N),
          (s = n(F, s, Q)),
          k === null ? (C = F) : (k.sibling = F),
          (k = F),
          (N = J));
      }
      if (Q === v.length) return (a(m, N), W && qt(m, Q), C);
      if (N === null) {
        for (; Q < v.length; Q++)
          ((N = T(m, v[Q], z)),
            N !== null &&
              ((s = n(N, s, Q)),
              k === null ? (C = N) : (k.sibling = N),
              (k = N)));
        return (W && qt(m, Q), C);
      }
      for (N = u(N); Q < v.length; Q++)
        ((J = g(N, m, Q, v[Q], z)),
          J !== null &&
            (l && J.alternate !== null && N.delete(J.key === null ? Q : J.key),
            (s = n(J, s, Q)),
            k === null ? (C = J) : (k.sibling = J),
            (k = J)));
      return (
        l &&
          N.forEach(function (za) {
            return t(m, za);
          }),
        W && qt(m, Q),
        C
      );
    }
    function j(m, s, v, z) {
      if (v == null) throw Error(d(151));
      for (
        var C = null, k = null, N = s, Q = (s = 0), J = null, F = v.next();
        N !== null && !F.done;
        Q++, F = v.next()
      ) {
        N.index > Q ? ((J = N), (N = null)) : (J = N.sibling);
        var za = h(m, N, F.value, z);
        if (za === null) {
          N === null && (N = J);
          break;
        }
        (l && N && za.alternate === null && t(m, N),
          (s = n(za, s, Q)),
          k === null ? (C = za) : (k.sibling = za),
          (k = za),
          (N = J));
      }
      if (F.done) return (a(m, N), W && qt(m, Q), C);
      if (N === null) {
        for (; !F.done; Q++, F = v.next())
          ((F = T(m, F.value, z)),
            F !== null &&
              ((s = n(F, s, Q)),
              k === null ? (C = F) : (k.sibling = F),
              (k = F)));
        return (W && qt(m, Q), C);
      }
      for (N = u(N); !F.done; Q++, F = v.next())
        ((F = g(N, m, Q, F.value, z)),
          F !== null &&
            (l && F.alternate !== null && N.delete(F.key === null ? Q : F.key),
            (s = n(F, s, Q)),
            k === null ? (C = F) : (k.sibling = F),
            (k = F)));
      return (
        l &&
          N.forEach(function (av) {
            return t(m, av);
          }),
        W && qt(m, Q),
        C
      );
    }
    function fl(m, s, v, z) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === jl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Wl:
            l: {
              for (var C = v.key; s !== null; ) {
                if (s.key === C) {
                  if (((C = v.type), C === jl)) {
                    if (s.tag === 7) {
                      (a(m, s.sibling),
                        (z = e(s, v.props.children)),
                        (z.return = m),
                        (m = z));
                      break l;
                    }
                  } else if (
                    s.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Gl &&
                      ja(C) === s.type)
                  ) {
                    (a(m, s.sibling),
                      (z = e(s, v.props)),
                      Wu(z, v),
                      (z.return = m),
                      (m = z));
                    break l;
                  }
                  a(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              v.type === jl
                ? ((z = Ua(v.props.children, m.mode, z, v.key)),
                  (z.return = m),
                  (m = z))
                : ((z = Le(v.type, v.key, v.props, null, m.mode, z)),
                  Wu(z, v),
                  (z.return = m),
                  (m = z));
            }
            return i(m);
          case xl:
            l: {
              for (C = v.key; s !== null; ) {
                if (s.key === C)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === v.containerInfo &&
                    s.stateNode.implementation === v.implementation
                  ) {
                    (a(m, s.sibling),
                      (z = e(s, v.children || [])),
                      (z.return = m),
                      (m = z));
                    break l;
                  } else {
                    a(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              ((z = pi(v, m.mode, z)), (z.return = m), (m = z));
            }
            return i(m);
          case Gl:
            return ((v = ja(v)), fl(m, s, v, z));
        }
        if (gt(v)) return D(m, s, v, z);
        if (Xl(v)) {
          if (((C = Xl(v)), typeof C != "function")) throw Error(d(150));
          return ((v = C.call(v)), j(m, s, v, z));
        }
        if (typeof v.then == "function") return fl(m, s, ke(v), z);
        if (v.$$typeof === Cl) return fl(m, s, Je(m, v), z);
        Fe(m, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          s !== null && s.tag === 6
            ? (a(m, s.sibling), (z = e(s, v)), (z.return = m), (m = z))
            : (a(m, s), (z = _i(v, m.mode, z)), (z.return = m), (m = z)),
          i(m))
        : a(m, s);
    }
    return function (m, s, v, z) {
      try {
        wu = 0;
        var C = fl(m, s, v, z);
        return ((du = null), C);
      } catch (N) {
        if (N === ou || N === We) throw N;
        var k = lt(29, N, null, m.mode);
        return ((k.lanes = z), (k.return = m), k);
      }
    };
  }
  var Ba = H0(!0),
    C0 = H0(!1),
    ua = !1;
  function Yi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Gi(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function na(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (I & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ze(l)),
        h0(l, null, a),
        t
      );
    }
    return (Qe(l, u, t, a), Ze(l));
  }
  function $u(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Ac(l, a));
    }
  }
  function Xi(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Qi = !1;
  function ku() {
    if (Qi) {
      var l = su;
      if (l !== null) throw l;
    }
  }
  function Fu(l, t, a, u) {
    Qi = !1;
    var e = l.updateQueue;
    ua = !1;
    var n = e.firstBaseUpdate,
      i = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var c = f,
        y = c.next;
      ((c.next = null), i === null ? (n = y) : (i.next = y), (i = c));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (f = S.lastBaseUpdate),
        f !== i &&
          (f === null ? (S.firstBaseUpdate = y) : (f.next = y),
          (S.lastBaseUpdate = c)));
    }
    if (n !== null) {
      var T = e.baseState;
      ((i = 0), (S = y = c = null), (f = n));
      do {
        var h = f.lane & -536870913,
          g = h !== f.lane;
        if (g ? (K & h) === h : (u & h) === h) {
          (h !== 0 && h === cu && (Qi = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var D = l,
              j = f;
            h = t;
            var fl = a;
            switch (j.tag) {
              case 1:
                if (((D = j.payload), typeof D == "function")) {
                  T = D.call(fl, T, h);
                  break l;
                }
                T = D;
                break l;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = j.payload),
                  (h = typeof D == "function" ? D.call(fl, T, h) : D),
                  h == null)
                )
                  break l;
                T = q({}, T, h);
                break l;
              case 2:
                ua = !0;
            }
          }
          ((h = f.callback),
            h !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = e.callbacks),
              g === null ? (e.callbacks = [h]) : g.push(h)));
        } else
          ((g = {
            lane: h,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            S === null ? ((y = S = g), (c = T)) : (S = S.next = g),
            (i |= h));
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          ((g = f),
            (f = g.next),
            (g.next = null),
            (e.lastBaseUpdate = g),
            (e.shared.pending = null));
        }
      } while (!0);
      (S === null && (c = T),
        (e.baseState = c),
        (e.firstBaseUpdate = y),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (oa |= i),
        (l.lanes = i),
        (l.memoizedState = T));
    }
  }
  function R0(l, t) {
    if (typeof l != "function") throw Error(d(191, l));
    l.call(t);
  }
  function j0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) R0(a[l], t);
  }
  var mu = o(null),
    Ie = o(0);
  function q0(l, t) {
    ((l = Jt), M(Ie, l), M(mu, t), (Jt = l | t.baseLanes));
  }
  function Zi() {
    (M(Ie, Jt), M(mu, mu.current));
  }
  function Li() {
    ((Jt = Ie.current), E(mu), E(Ie));
  }
  var tt = o(null),
    yt = null;
  function ia(l) {
    var t = l.alternate;
    (M(Sl, Sl.current & 1),
      M(tt, l),
      yt === null &&
        (t === null || mu.current !== null || t.memoizedState !== null) &&
        (yt = l));
  }
  function Vi(l) {
    (M(Sl, Sl.current), M(tt, l), yt === null && (yt = l));
  }
  function B0(l) {
    l.tag === 22
      ? (M(Sl, Sl.current), M(tt, l), yt === null && (yt = l))
      : fa();
  }
  function fa() {
    (M(Sl, Sl.current), M(tt, tt.current));
  }
  function at(l) {
    (E(tt), yt === l && (yt = null), E(Sl));
  }
  var Sl = o(0);
  function Pe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Ff(a) || If(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Yt = 0,
    X = null,
    nl = null,
    Tl = null,
    ln = !1,
    vu = !1,
    xa = !1,
    tn = 0,
    Iu = 0,
    yu = null,
    Jd = 0;
  function hl() {
    throw Error(d(321));
  }
  function Ki(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Ji(l, t, a, u, e, n) {
    return (
      (Yt = n),
      (X = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? bs : cf),
      (xa = !1),
      (n = a(u, e)),
      (xa = !1),
      vu && (n = Y0(t, a, u, e)),
      x0(l),
      n
    );
  }
  function x0(l) {
    b.H = te;
    var t = nl !== null && nl.next !== null;
    if (((Yt = 0), (Tl = nl = X = null), (ln = !1), (Iu = 0), (yu = null), t))
      throw Error(d(300));
    l === null ||
      El ||
      ((l = l.dependencies), l !== null && Ke(l) && (El = !0));
  }
  function Y0(l, t, a, u) {
    X = l;
    var e = 0;
    do {
      if ((vu && (yu = null), (Iu = 0), (vu = !1), 25 <= e))
        throw Error(d(301));
      if (((e += 1), (Tl = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = zs), (n = t(a, u)));
    } while (vu);
    return n;
  }
  function wd() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Pu(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (X.flags |= 1024),
      t
    );
  }
  function wi() {
    var l = tn !== 0;
    return ((tn = 0), l);
  }
  function Wi(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function $i(l) {
    if (ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      ln = !1;
    }
    ((Yt = 0), (Tl = nl = X = null), (vu = !1), (Iu = tn = 0), (yu = null));
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Tl === null ? (X.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl);
  }
  function bl() {
    if (nl === null) {
      var l = X.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = Tl === null ? X.memoizedState : Tl.next;
    if (t !== null) ((Tl = t), (nl = l));
    else {
      if (l === null)
        throw X.alternate === null ? Error(d(467)) : Error(d(310));
      ((nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        Tl === null ? (X.memoizedState = Tl = l) : (Tl = Tl.next = l));
    }
    return Tl;
  }
  function an() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pu(l) {
    var t = Iu;
    return (
      (Iu += 1),
      yu === null && (yu = []),
      (l = D0(yu, l, t)),
      (t = X),
      (Tl === null ? t.memoizedState : Tl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? bs : cf)),
      l
    );
  }
  function un(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pu(l);
      if (l.$$typeof === Cl) return Ul(l);
    }
    throw Error(d(438, String(l)));
  }
  function ki(l) {
    var t = null,
      a = X.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = X.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = an()), (X.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = La;
    return (t.index++, a);
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function en(l) {
    var t = bl();
    return Fi(t, nl, l);
  }
  function Fi(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(d(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        ((e.next = n.next), (n.next = i));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (i = null),
        c = null,
        y = t,
        S = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (K & T) === T : (Yt & T) === T) {
          var h = y.revertLane;
          if (h === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              T === cu && (S = !0));
          else if ((Yt & h) === h) {
            ((y = y.next), h === cu && (S = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              c === null ? ((f = c = T), (i = n)) : (c = c.next = T),
              (X.lanes |= h),
              (oa |= h));
          ((T = y.action),
            xa && a(n, T),
            (n = y.hasEagerState ? y.eagerState : a(n, T)));
        } else
          ((h = {
            lane: T,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            c === null ? ((f = c = h), (i = n)) : (c = c.next = h),
            (X.lanes |= T),
            (oa |= T));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (c === null ? (i = n) : (c.next = f),
        !Pl(n, l.memoizedState) && ((El = !0), S && ((a = su), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = c),
        (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function Ii(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = (e = e.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== e);
      (Pl(n, t.memoizedState) || (El = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function G0(l, t, a) {
    var u = X,
      e = bl(),
      n = W;
    if (n) {
      if (a === void 0) throw Error(d(407));
      a = a();
    } else a = t();
    var i = !Pl((nl || e).memoizedState, a);
    if (
      (i && ((e.memoizedState = a), (El = !0)),
      (e = e.queue),
      tf(Z0.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || i || (Tl !== null && Tl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        hu(9, { destroy: void 0 }, Q0.bind(null, u, e, a, t), null),
        sl === null)
      )
        throw Error(d(349));
      n || (Yt & 127) !== 0 || X0(u, t, a);
    }
    return a;
  }
  function X0(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = X.updateQueue),
      t === null
        ? ((t = an()), (X.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Q0(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), L0(t) && V0(l));
  }
  function Z0(l, t, a) {
    return a(function () {
      L0(t) && V0(l);
    });
  }
  function L0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function V0(l) {
    var t = Da(l, 2);
    t !== null && wl(t, l, 2);
  }
  function Pi(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), xa)) {
        kt(!0);
        try {
          a();
        } finally {
          kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function K0(l, t, a, u) {
    return ((l.baseState = a), Fi(l, nl, typeof u == "function" ? u : Gt));
  }
  function Wd(l, t, a, u, e) {
    if (cn(l)) throw Error(d(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (b.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), J0(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function J0(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = b.T,
        i = {};
      b.T = i;
      try {
        var f = a(e, u),
          c = b.S;
        (c !== null && c(i, f), w0(l, t, f));
      } catch (y) {
        lf(l, t, y);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (b.T = n));
      }
    } else
      try {
        ((n = a(e, u)), w0(l, t, n));
      } catch (y) {
        lf(l, t, y);
      }
  }
  function w0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            W0(l, t, u);
          },
          function (u) {
            return lf(l, t, u);
          },
        )
      : W0(l, t, a);
  }
  function W0(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      $0(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), J0(l, a))));
  }
  function lf(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), $0(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function $0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function k0(l, t) {
    return t;
  }
  function F0(l, t) {
    if (W) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var u = X;
          if (W) {
            if (dl) {
              t: {
                for (var e = dl, n = vt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = ht(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((dl = ht(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            ta(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Bl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: k0,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = rs.bind(null, X, u)),
      (u.dispatch = a),
      (u = Pi(!1)),
      (n = ff.bind(null, X, !1, u.queue)),
      (u = Bl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = Wd.bind(null, X, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function I0(l) {
    var t = bl();
    return P0(t, nl, l);
  }
  function P0(l, t, a) {
    if (
      ((t = Fi(l, t, k0)[0]),
      (l = en(Gt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Pu(t);
      } catch (i) {
        throw i === ou ? We : i;
      }
    else u = t;
    t = bl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((X.flags |= 2048),
        hu(9, { destroy: void 0 }, $d.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function $d(l, t) {
    l.action = t;
  }
  function ls(l) {
    var t = bl(),
      a = nl;
    if (a !== null) return P0(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function hu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = X.updateQueue),
      t === null && ((t = an()), (X.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function ts() {
    return bl().memoizedState;
  }
  function nn(l, t, a, u) {
    var e = Bl();
    ((X.flags |= l),
      (e.memoizedState = hu(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u,
      )));
  }
  function fn(l, t, a, u) {
    var e = bl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    nl !== null && u !== null && Ki(u, nl.memoizedState.deps)
      ? (e.memoizedState = hu(t, n, a, u))
      : ((X.flags |= l), (e.memoizedState = hu(1 | t, n, a, u)));
  }
  function as(l, t) {
    nn(8390656, 8, l, t);
  }
  function tf(l, t) {
    fn(2048, 8, l, t);
  }
  function kd(l) {
    X.flags |= 4;
    var t = X.updateQueue;
    if (t === null) ((t = an()), (X.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function us(l) {
    var t = bl().memoizedState;
    return (
      kd({ ref: t, nextImpl: l }),
      function () {
        if ((I & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function es(l, t) {
    return fn(4, 2, l, t);
  }
  function ns(l, t) {
    return fn(4, 4, l, t);
  }
  function is(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function fs(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), fn(4, 4, is.bind(null, t, l), a));
  }
  function af() {}
  function cs(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Ki(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function ss(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Ki(t, u[1])) return u[0];
    if (((u = l()), xa)) {
      kt(!0);
      try {
        l();
      } finally {
        kt(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function uf(l, t, a) {
    return a === void 0 || ((Yt & 1073741824) !== 0 && (K & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = oo()), (X.lanes |= l), (oa |= l), a);
  }
  function os(l, t, a, u) {
    return Pl(a, t)
      ? a
      : mu.current !== null
        ? ((l = uf(l, a, u)), Pl(l, t) || (El = !0), l)
        : (Yt & 42) === 0 || ((Yt & 1073741824) !== 0 && (K & 261930) === 0)
          ? ((El = !0), (l.memoizedState = a))
          : ((l = oo()), (X.lanes |= l), (oa |= l), t);
  }
  function ds(l, t, a, u, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      f = {};
    ((b.T = f), ff(l, !1, t, a));
    try {
      var c = e(),
        y = b.S;
      if (
        (y !== null && y(f, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var S = Kd(c, u);
        le(l, t, S, nt(l));
      } else le(l, t, u, nt(l));
    } catch (T) {
      le(l, t, { then: function () {}, status: "rejected", reason: T }, nt());
    } finally {
      ((p.p = n),
        i !== null && f.types !== null && (i.types = f.types),
        (b.T = i));
    }
  }
  function Fd() {}
  function ef(l, t, a, u) {
    if (l.tag !== 5) throw Error(d(476));
    var e = ms(l).queue;
    ds(
      l,
      e,
      t,
      B,
      a === null
        ? Fd
        : function () {
            return (vs(l), a(u));
          },
    );
  }
  function ms(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: B,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function vs(l) {
    var t = ms(l);
    (t.next === null && (t = l.alternate.memoizedState),
      le(l, t.next.queue, {}, nt()));
  }
  function nf() {
    return Ul(ge);
  }
  function ys() {
    return bl().memoizedState;
  }
  function hs() {
    return bl().memoizedState;
  }
  function Id(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ea(a);
          var u = na(t, l, a);
          (u !== null && (wl(u, t, a), $u(u, t, a)),
            (t = { cache: ji() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Pd(l, t, a) {
    var u = nt();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      cn(l)
        ? gs(t, a)
        : ((a = Ai(l, t, a, u)), a !== null && (wl(a, l, u), Ss(a, t, u))));
  }
  function rs(l, t, a) {
    var u = nt();
    le(l, t, a, u);
  }
  function le(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cn(l)) gs(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = n(i, a);
          if (((e.hasEagerState = !0), (e.eagerState = f), Pl(f, i)))
            return (Qe(l, t, e, 0), sl === null && Xe(), !1);
        } catch {}
      if (((a = Ai(l, t, e, u)), a !== null))
        return (wl(a, l, u), Ss(a, t, u), !0);
    }
    return !1;
  }
  function ff(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Gf(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cn(l))
    ) {
      if (t) throw Error(d(479));
    } else ((t = Ai(l, a, u, 2)), t !== null && wl(t, l, 2));
  }
  function cn(l) {
    var t = l.alternate;
    return l === X || (t !== null && t === X);
  }
  function gs(l, t) {
    vu = ln = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function Ss(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Ac(l, a));
    }
  }
  var te = {
    readContext: Ul,
    use: un,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl,
  };
  te.useEffectEvent = hl;
  var bs = {
      readContext: Ul,
      use: un,
      useCallback: function (l, t) {
        return ((Bl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ul,
      useEffect: as,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          nn(4194308, 4, is.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return nn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        nn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Bl();
        t = t === void 0 ? null : t;
        var u = l();
        if (xa) {
          kt(!0);
          try {
            l();
          } finally {
            kt(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Bl();
        if (a !== void 0) {
          var e = a(t);
          if (xa) {
            kt(!0);
            try {
              a(t);
            } finally {
              kt(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = Pd.bind(null, X, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Bl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Pi(l);
        var t = l.queue,
          a = rs.bind(null, X, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: af,
      useDeferredValue: function (l, t) {
        var a = Bl();
        return uf(a, l, t);
      },
      useTransition: function () {
        var l = Pi(!1);
        return (
          (l = ds.bind(null, X, l.queue, !0, !1)),
          (Bl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = X,
          e = Bl();
        if (W) {
          if (a === void 0) throw Error(d(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(d(349));
          (K & 127) !== 0 || X0(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          as(Z0.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          hu(9, { destroy: void 0 }, Q0.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Bl(),
          t = sl.identifierPrefix;
        if (W) {
          var a = _t,
            u = Ot;
          ((a = (u & ~(1 << (32 - Il(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = tn++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Jd++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: nf,
      useFormState: F0,
      useActionState: F0,
      useOptimistic: function (l) {
        var t = Bl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = ff.bind(null, X, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: ki,
      useCacheRefresh: function () {
        return (Bl().memoizedState = Id.bind(null, X));
      },
      useEffectEvent: function (l) {
        var t = Bl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((I & 2) !== 0) throw Error(d(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    cf = {
      readContext: Ul,
      use: un,
      useCallback: cs,
      useContext: Ul,
      useEffect: tf,
      useImperativeHandle: fs,
      useInsertionEffect: es,
      useLayoutEffect: ns,
      useMemo: ss,
      useReducer: en,
      useRef: ts,
      useState: function () {
        return en(Gt);
      },
      useDebugValue: af,
      useDeferredValue: function (l, t) {
        var a = bl();
        return os(a, nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = en(Gt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Pu(l), t];
      },
      useSyncExternalStore: G0,
      useId: ys,
      useHostTransitionStatus: nf,
      useFormState: I0,
      useActionState: I0,
      useOptimistic: function (l, t) {
        var a = bl();
        return K0(a, nl, l, t);
      },
      useMemoCache: ki,
      useCacheRefresh: hs,
    };
  cf.useEffectEvent = us;
  var zs = {
    readContext: Ul,
    use: un,
    useCallback: cs,
    useContext: Ul,
    useEffect: tf,
    useImperativeHandle: fs,
    useInsertionEffect: es,
    useLayoutEffect: ns,
    useMemo: ss,
    useReducer: Ii,
    useRef: ts,
    useState: function () {
      return Ii(Gt);
    },
    useDebugValue: af,
    useDeferredValue: function (l, t) {
      var a = bl();
      return nl === null ? uf(a, l, t) : os(a, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Ii(Gt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : Pu(l), t];
    },
    useSyncExternalStore: G0,
    useId: ys,
    useHostTransitionStatus: nf,
    useFormState: ls,
    useActionState: ls,
    useOptimistic: function (l, t) {
      var a = bl();
      return nl !== null
        ? K0(a, nl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: ki,
    useCacheRefresh: hs,
  };
  zs.useEffectEvent = us;
  function sf(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : q({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var of = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = nt(),
        e = ea(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = na(l, e, u)),
        t !== null && (wl(t, l, u), $u(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = nt(),
        e = ea(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = na(l, e, u)),
        t !== null && (wl(t, l, u), $u(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = nt(),
        u = ea(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = na(l, u, a)),
        t !== null && (wl(t, l, a), $u(t, l, a)));
    },
  };
  function Ts(l, t, a, u, e, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Qu(a, u) || !Qu(e, n)
          : !0
    );
  }
  function Es(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && of.enqueueReplaceState(t, t.state, null));
  }
  function Ya(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = q({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function As(l) {
    Ge(l);
  }
  function Os(l) {
    console.error(l);
  }
  function _s(l) {
    Ge(l);
  }
  function sn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ps(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function df(l, t, a) {
    return (
      (a = ea(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        sn(l, t);
      }),
      a
    );
  }
  function Ms(l) {
    return ((l = ea(l)), (l.tag = 3), l);
  }
  function Ds(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          ps(t, a, u);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (ps(t, a, u),
          typeof e != "function" &&
            (da === null ? (da = new Set([this])) : da.add(this)));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function lm(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && fu(t, a, e, !0),
        (a = tt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              yt === null ? Tn() : a.alternate === null && rl === 0 && (rl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Bf(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Bf(l, u, e)),
              !1
            );
        }
        throw Error(d(435, a.tag));
      }
      return (Bf(l, u, e), Tn(), !1);
    }
    if (W)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Ui && ((l = Error(d(422), { cause: u })), Vu(ot(l, a))))
          : (u !== Ui && ((t = Error(d(423), { cause: u })), Vu(ot(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ot(u, a)),
            (e = df(l.stateNode, u, e)),
            Xi(l, e),
            rl !== 4 && (rl = 2)),
        !1
      );
    var n = Error(d(520), { cause: u });
    if (
      ((n = ot(n, a)),
      se === null ? (se = [n]) : se.push(n),
      rl !== 4 && (rl = 2),
      t === null)
    )
      return !0;
    ((u = ot(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = df(a.stateNode, u, l)),
            Xi(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (da === null || !da.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = Ms(e)),
              Ds(e, l, a, u),
              Xi(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var mf = Error(d(461)),
    El = !1;
  function Nl(l, t, a, u) {
    t.child = l === null ? C0(t, null, a, u) : Ba(t, l.child, a, u);
  }
  function Us(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var f in u) f !== "ref" && (i[f] = u[f]);
    } else i = u;
    return (
      Ca(t),
      (u = Ji(l, t, a, i, n, e)),
      (f = wi()),
      l !== null && !El
        ? (Wi(l, t, e), Xt(l, t, e))
        : (W && f && Mi(t), (t.flags |= 1), Nl(l, t, u, e), t.child)
    );
  }
  function Ns(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Oi(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Hs(l, t, n, u, e))
        : ((l = Le(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !zf(l, e))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Qu), a(i, u) && l.ref === t.ref)
      )
        return Xt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = jt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Hs(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qu(n, u) && l.ref === t.ref)
        if (((El = !1), (t.pendingProps = u = n), zf(l, e)))
          (l.flags & 131072) !== 0 && (El = !0);
        else return ((t.lanes = l.lanes), Xt(l, t, e));
    }
    return vf(l, t, a, u, e);
  }
  function Cs(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null; )
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return Rs(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && we(t, n !== null ? n.cachePool : null),
          n !== null ? q0(t, n) : Zi(),
          B0(t));
      else
        return (
          (u = t.lanes = 536870912),
          Rs(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (we(t, n.cachePool), q0(t, n), fa(), (t.memoizedState = null))
        : (l !== null && we(t, null), Zi(), fa());
    return (Nl(l, t, e, a), t.child);
  }
  function ae(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Rs(l, t, a, u, e) {
    var n = Bi();
    return (
      (n = n === null ? null : { parent: zl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && we(t, null),
      Zi(),
      B0(t),
      l !== null && fu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function on(l, t) {
    return (
      (t = mn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function js(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = on(t, t.pendingProps)),
      (l.flags |= 2),
      at(t),
      (t.memoizedState = null),
      l
    );
  }
  function tm(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (W) {
        if (u.mode === "hidden")
          return ((l = on(t, u)), (t.lanes = 536870912), ae(null, l));
        if (
          (Vi(t),
          (l = dl)
            ? ((l = wo(l, vt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: Pt !== null ? { id: Ot, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = g0(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (dl = null)))
            : (l = null),
          l === null)
        )
          throw ta(t);
        return ((t.lanes = 536870912), null);
      }
      return on(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Vi(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = js(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(d(558));
      else if (
        (El || fu(l, t, a, !1), (e = (a & l.childLanes) !== 0), El || e)
      ) {
        if (
          ((u = sl),
          u !== null && ((i = Oc(u, a)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Da(l, i), wl(u, l, i), mf);
        (Tn(), (t = js(l, t, a)));
      } else
        ((l = n.treeContext),
          (dl = ht(i.nextSibling)),
          (Dl = t),
          (W = !0),
          (la = null),
          (vt = !1),
          l !== null && z0(t, l),
          (t = on(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = jt(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function dn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(d(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function vf(l, t, a, u, e) {
    return (
      Ca(t),
      (a = Ji(l, t, a, u, void 0, e)),
      (u = wi()),
      l !== null && !El
        ? (Wi(l, t, e), Xt(l, t, e))
        : (W && u && Mi(t), (t.flags |= 1), Nl(l, t, a, e), t.child)
    );
  }
  function qs(l, t, a, u, e, n) {
    return (
      Ca(t),
      (t.updateQueue = null),
      (a = Y0(t, u, a, e)),
      x0(l),
      (u = wi()),
      l !== null && !El
        ? (Wi(l, t, n), Xt(l, t, n))
        : (W && u && Mi(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
    );
  }
  function Bs(l, t, a, u, e) {
    if ((Ca(t), t.stateNode === null)) {
      var n = uu,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = Ul(i)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = of),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Yi(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Ul(i) : uu),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (sf(t, a, i, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && of.enqueueReplaceState(n, n.state, null),
          Fu(t, u, n, e),
          ku(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        c = Ya(a, f);
      n.props = c;
      var y = n.context,
        S = a.contextType;
      ((i = uu), typeof S == "object" && S !== null && (i = Ul(S)));
      var T = a.getDerivedStateFromProps;
      ((S =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || y !== i) && Es(t, n, u, i)),
        (ua = !1));
      var h = t.memoizedState;
      ((n.state = h),
        Fu(t, u, n, e),
        ku(),
        (y = t.memoizedState),
        f || h !== y || ua
          ? (typeof T == "function" && (sf(t, a, T, u), (y = t.memoizedState)),
            (c = ua || Ts(t, a, c, u, h, y, i))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = y)),
            (n.props = u),
            (n.state = y),
            (n.context = i),
            (u = c))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((n = t.stateNode),
        Gi(l, t),
        (i = t.memoizedProps),
        (S = Ya(a, i)),
        (n.props = S),
        (T = t.pendingProps),
        (h = n.context),
        (y = a.contextType),
        (c = uu),
        typeof y == "object" && y !== null && (c = Ul(y)),
        (f = a.getDerivedStateFromProps),
        (y =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== T || h !== c) && Es(t, n, u, c)),
        (ua = !1),
        (h = t.memoizedState),
        (n.state = h),
        Fu(t, u, n, e),
        ku());
      var g = t.memoizedState;
      i !== T ||
      h !== g ||
      ua ||
      (l !== null && l.dependencies !== null && Ke(l.dependencies))
        ? (typeof f == "function" && (sf(t, a, f, u), (g = t.memoizedState)),
          (S =
            ua ||
            Ts(t, a, S, u, h, g, c) ||
            (l !== null && l.dependencies !== null && Ke(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, g, c),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, g, c)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = g)),
          (n.props = u),
          (n.state = g),
          (n.context = c),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      dn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ba(t, l.child, null, e)),
              (t.child = Ba(t, null, a, e)))
            : Nl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Xt(l, t, e)),
      l
    );
  }
  function xs(l, t, a, u) {
    return (Na(), (t.flags |= 256), Nl(l, t, a, u), t.child);
  }
  var yf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function hf(l) {
    return { baseLanes: l, cachePool: p0() };
  }
  function rf(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= et), l);
  }
  function Ys(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0),
      i && ((e = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (W) {
        if (
          (e ? ia(t) : fa(),
          (l = dl)
            ? ((l = wo(l, vt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: Pt !== null ? { id: Ot, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = g0(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (dl = null)))
            : (l = null),
          l === null)
        )
          throw ta(t);
        return (If(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = u.children;
      return (
        (u = u.fallback),
        e
          ? (fa(),
            (e = t.mode),
            (f = mn({ mode: "hidden", children: f }, e)),
            (u = Ua(u, e, a, null)),
            (f.return = t),
            (u.return = t),
            (f.sibling = u),
            (t.child = f),
            (u = t.child),
            (u.memoizedState = hf(a)),
            (u.childLanes = rf(l, i, a)),
            (t.memoizedState = yf),
            ae(null, u))
          : (ia(t), gf(t, f))
      );
    }
    var c = l.memoizedState;
    if (c !== null && ((f = c.dehydrated), f !== null)) {
      if (n)
        t.flags & 256
          ? (ia(t), (t.flags &= -257), (t = Sf(l, t, a)))
          : t.memoizedState !== null
            ? (fa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (fa(),
              (f = u.fallback),
              (e = t.mode),
              (u = mn({ mode: "visible", children: u.children }, e)),
              (f = Ua(f, e, a, null)),
              (f.flags |= 2),
              (u.return = t),
              (f.return = t),
              (u.sibling = f),
              (t.child = u),
              Ba(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = hf(a)),
              (u.childLanes = rf(l, i, a)),
              (t.memoizedState = yf),
              (t = ae(null, u)));
      else if ((ia(t), If(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var y = i.dgst;
        ((i = y),
          (u = Error(d(419))),
          (u.stack = ""),
          (u.digest = i),
          Vu({ value: u, source: null, stack: null }),
          (t = Sf(l, t, a)));
      } else if (
        (El || fu(l, t, a, !1), (i = (a & l.childLanes) !== 0), El || i)
      ) {
        if (
          ((i = sl),
          i !== null && ((u = Oc(i, a)), u !== 0 && u !== c.retryLane))
        )
          throw ((c.retryLane = u), Da(l, u), wl(i, l, u), mf);
        (Ff(f) || Tn(), (t = Sf(l, t, a)));
      } else
        Ff(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = c.treeContext),
            (dl = ht(f.nextSibling)),
            (Dl = t),
            (W = !0),
            (la = null),
            (vt = !1),
            l !== null && z0(t, l),
            (t = gf(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (fa(),
        (f = u.fallback),
        (e = t.mode),
        (c = l.child),
        (y = c.sibling),
        (u = jt(c, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = c.subtreeFlags & 65011712),
        y !== null ? (f = jt(y, f)) : ((f = Ua(f, e, a, null)), (f.flags |= 2)),
        (f.return = t),
        (u.return = t),
        (u.sibling = f),
        (t.child = u),
        ae(null, u),
        (u = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = hf(a))
          : ((e = f.cachePool),
            e !== null
              ? ((c = zl._currentValue),
                (e = e.parent !== c ? { parent: c, pool: c } : e))
              : (e = p0()),
            (f = { baseLanes: f.baseLanes | a, cachePool: e })),
        (u.memoizedState = f),
        (u.childLanes = rf(l, i, a)),
        (t.memoizedState = yf),
        ae(l.child, u))
      : (ia(t),
        (a = l.child),
        (l = a.sibling),
        (a = jt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function gf(l, t) {
    return (
      (t = mn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function mn(l, t) {
    return ((l = lt(22, l, null, t)), (l.lanes = 0), l);
  }
  function Sf(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = gf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Gs(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Ci(l.return, t, a));
  }
  function bf(l, t, a, u, e, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = u),
        (i.tail = a),
        (i.tailMode = e),
        (i.treeForkCount = n));
  }
  function Xs(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var i = Sl.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      M(Sl, i),
      Nl(l, t, u, a),
      (u = W ? Lu : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Gs(l, a, t);
        else if (l.tag === 19) Gs(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          ((l = a.alternate),
            l !== null && Pe(l) === null && (e = a),
            (a = a.sibling));
        ((a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          bf(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && Pe(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        bf(t, !0, a, null, n, u);
        break;
      case "together":
        bf(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (oa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((fu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        l = t.child, a = jt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = jt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function zf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ke(l)));
  }
  function am(l, t, a) {
    switch (t.tag) {
      case 3:
        (ql(t, t.stateNode.containerInfo),
          aa(t, zl, l.memoizedState.cache),
          Na());
        break;
      case 27:
      case 5:
        Du(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        aa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Vi(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ia(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Ys(l, t, a)
              : (ia(t), (l = Xt(l, t, a)), l !== null ? l.sibling : null);
        ia(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (fu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Xs(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          M(Sl, Sl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Cs(l, t, a, t.pendingProps));
      case 24:
        aa(t, zl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function Qs(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) El = !0;
      else {
        if (!zf(l, a) && (t.flags & 128) === 0) return ((El = !1), am(l, t, a));
        El = (l.flags & 131072) !== 0;
      }
    else ((El = !1), W && (t.flags & 1048576) !== 0 && b0(t, Lu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = ja(t.elementType)), (t.type = l), typeof l == "function"))
            Oi(l)
              ? ((u = Ya(l, u)), (t.tag = 1), (t = Bs(null, t, l, u, a)))
              : ((t.tag = 0), (t = vf(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === it) {
                ((t.tag = 11), (t = Us(null, t, l, u, a)));
                break l;
              } else if (e === w) {
                ((t.tag = 14), (t = Ns(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = Nt(l) || l), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return vf(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = Ya(u, t.pendingProps)), Bs(l, t, u, e, a));
      case 3:
        l: {
          if ((ql(t, t.stateNode.containerInfo), l === null))
            throw Error(d(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), Gi(l, t), Fu(t, u, null, a));
          var i = t.memoizedState;
          if (
            ((u = i.cache),
            aa(t, zl, u),
            u !== n.cache && Ri(t, [zl], a, !0),
            ku(),
            (u = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = xs(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = ot(Error(d(424)), t)), Vu(e), (t = xs(l, t, u, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  dl = ht(l.firstChild),
                  Dl = t,
                  W = !0,
                  la = null,
                  vt = !0,
                  a = C0(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Na(), u === e)) {
              t = Xt(l, t, a);
              break l;
            }
            Nl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dn(l, t),
          l === null
            ? (a = Po(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : W ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Dn(Z.current).createElement(a)),
                (u[Ml] = t),
                (u[Ql] = l),
                Hl(u, a, l),
                _l(u),
                (t.stateNode = u))
            : (t.memoizedState = Po(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Du(t),
          l === null &&
            W &&
            ((u = t.stateNode = ko(t.type, t.pendingProps, Z.current)),
            (Dl = t),
            (vt = !0),
            (e = dl),
            ha(t.type) ? ((Pf = e), (dl = ht(u.firstChild))) : (dl = e)),
          Nl(l, t, t.pendingProps.children, a),
          dn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            W &&
            ((e = u = dl) &&
              ((u = Cm(u, t.type, t.pendingProps, vt)),
              u !== null
                ? ((t.stateNode = u),
                  (Dl = t),
                  (dl = ht(u.firstChild)),
                  (vt = !1),
                  (e = !0))
                : (e = !1)),
            e || ta(t)),
          Du(t),
          (e = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Wf(e, n) ? (u = null) : i !== null && Wf(e, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Ji(l, t, wd, null, null, a)), (ge._currentValue = e)),
          dn(l, t),
          Nl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            W &&
            ((l = a = dl) &&
              ((a = Rm(a, t.pendingProps, vt)),
              a !== null
                ? ((t.stateNode = a), (Dl = t), (dl = null), (l = !0))
                : (l = !1)),
            l || ta(t)),
          null
        );
      case 13:
        return Ys(l, t, a);
      case 4:
        return (
          ql(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ba(t, null, u, a)) : Nl(l, t, u, a),
          t.child
        );
      case 11:
        return Us(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Nl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (u = t.pendingProps),
          aa(t, t.type, u.value),
          Nl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ca(t),
          (e = Ul(e)),
          (u = u(e)),
          (t.flags |= 1),
          Nl(l, t, u, a),
          t.child
        );
      case 14:
        return Ns(l, t, t.type, t.pendingProps, a);
      case 15:
        return Hs(l, t, t.type, t.pendingProps, a);
      case 19:
        return Xs(l, t, a);
      case 31:
        return tm(l, t, a);
      case 22:
        return Cs(l, t, a, t.pendingProps);
      case 24:
        return (
          Ca(t),
          (u = Ul(zl)),
          l === null
            ? ((e = Bi()),
              e === null &&
                ((e = sl),
                (n = ji()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Yi(t),
              aa(t, zl, e))
            : ((l.lanes & a) !== 0 && (Gi(l, t), Fu(t, null, null, a), ku()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  aa(t, zl, u))
                : ((u = n.cache),
                  aa(t, zl, u),
                  u !== e.cache && Ri(t, [zl], a, !0))),
          Nl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function Tf(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (ho()) l.flags |= 8192;
        else throw ((qa = $e), xi);
    } else l.flags &= -16777217;
  }
  function Zs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !e1(t)))
      if (ho()) l.flags |= 8192;
      else throw ((qa = $e), xi);
  }
  function vn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Tc() : 536870912), (l.lanes |= t), (bu |= t)));
  }
  function ue(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function um(l, t, a) {
    var u = t.pendingProps;
    switch ((Di(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ml(t), null);
      case 1:
        return (ml(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          xt(zl),
          gl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (iu(t)
              ? Qt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ni())),
          ml(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Qt(t),
              n !== null ? (ml(t), Zs(t, n)) : (ml(t), Tf(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Qt(t), ml(t), Zs(t, n))
                : (ml(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== u && Qt(t),
                ml(t),
                Tf(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (Ae(t),
          (a = Z.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(d(166));
            return (ml(t), null);
          }
          ((l = U.current),
            iu(t) ? T0(t) : ((l = ko(e, u, a)), (t.stateNode = l), Qt(t)));
        }
        return (ml(t), null);
      case 5:
        if ((Ae(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(d(166));
            return (ml(t), null);
          }
          if (((n = U.current), iu(t))) T0(t);
          else {
            var i = Dn(Z.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? i.createElement("select", { is: u.is })
                        : i.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? i.createElement(e, { is: u.is })
                        : i.createElement(e);
                }
            }
            ((n[Ml] = t), (n[Ql] = u));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((Hl(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Qt(t);
          }
        }
        return (
          ml(t),
          Tf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(d(166));
          if (((l = Z.current), iu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Dl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[Ml] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                Go(l.nodeValue, a)
              )),
              l || ta(t, !0));
          } else
            ((l = Dn(l).createTextNode(u)), (l[Ml] = t), (t.stateNode = l));
        }
        return (ml(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = iu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(d(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(d(557));
              l[Ml] = t;
            } else
              (Na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ml(t), (l = !1));
          } else
            ((a = Ni()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558));
        }
        return (ml(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = iu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(d(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(d(317));
              e[Ml] = t;
            } else
              (Na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ml(t), (e = !1));
          } else
            ((e = Ni()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return (
          at(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              vn(t, t.updateQueue),
              ml(t),
              null)
        );
      case 4:
        return (gl(), l === null && Lf(t.stateNode.containerInfo), ml(t), null);
      case 10:
        return (xt(t.type), ml(t), null);
      case 19:
        if ((E(Sl), (u = t.memoizedState), u === null)) return (ml(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) ue(u, !1);
          else {
            if (rl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Pe(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ue(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (r0(a, l), (a = a.sibling));
                  return (
                    M(Sl, (Sl.current & 1) | 2),
                    W && qt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              kl() > Sn &&
              ((t.flags |= 128), (e = !0), ue(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = Pe(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                ue(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !W)
              )
                return (ml(t), null);
            } else
              2 * kl() - u.renderingStartTime > Sn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), ue(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = kl()),
            (l.sibling = null),
            (a = Sl.current),
            M(Sl, e ? (a & 1) | 2 : a & 1),
            W && qt(t, u.treeForkCount),
            l)
          : (ml(t), null);
      case 22:
      case 23:
        return (
          at(t),
          Li(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ml(t),
          (a = t.updateQueue),
          a !== null && vn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && E(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          xt(zl),
          ml(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function em(l, t) {
    switch ((Di(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          xt(zl),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ae(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(d(340));
          Na();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          Na();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (E(Sl), null);
      case 4:
        return (gl(), null);
      case 10:
        return (xt(t.type), null);
      case 22:
      case 23:
        return (
          at(t),
          Li(),
          l !== null && E(Ra),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (xt(zl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ls(l, t) {
    switch ((Di(t), t.tag)) {
      case 3:
        (xt(zl), gl());
        break;
      case 26:
      case 27:
      case 5:
        Ae(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        E(Sl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        (at(t), Li(), l !== null && E(Ra));
        break;
      case 24:
        xt(zl);
    }
  }
  function ee(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              i = a.inst;
            ((u = n()), (i.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      ul(t, t.return, f);
    }
  }
  function ca(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (e = t));
              var c = a,
                y = f;
              try {
                y();
              } catch (S) {
                ul(e, c, S);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      ul(t, t.return, S);
    }
  }
  function Vs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        j0(t, a);
      } catch (u) {
        ul(l, l.return, u);
      }
    }
  }
  function Ks(l, t, a) {
    ((a.props = Ya(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      ul(l, t, u);
    }
  }
  function ne(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      ul(l, t, e);
    }
  }
  function pt(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          ul(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          ul(l, t, e);
        }
      else a.current = null;
  }
  function Js(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      ul(l, l.return, e);
    }
  }
  function Ef(l, t, a) {
    try {
      var u = l.stateNode;
      (pm(u, l.type, a, t), (u[Ql] = t));
    } catch (e) {
      ul(l, l.return, e);
    }
  }
  function ws(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ha(l.type)) ||
      l.tag === 4
    );
  }
  function Af(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || ws(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && ha(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Of(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ct)));
    else if (
      u !== 4 &&
      (u === 27 && ha(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Of(l, t, a), l = l.sibling; l !== null; )
        (Of(l, t, a), (l = l.sibling));
  }
  function yn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      u !== 4 &&
      (u === 27 && ha(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (yn(l, t, a), l = l.sibling; l !== null; )
        (yn(l, t, a), (l = l.sibling));
  }
  function Ws(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      (Hl(t, u, a), (t[Ml] = l), (t[Ql] = a));
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  var Zt = !1,
    Al = !1,
    _f = !1,
    $s = typeof WeakSet == "function" ? WeakSet : Set,
    pl = null;
  function nm(l, t) {
    if (((l = l.containerInfo), (Jf = qn), (l = f0(l)), gi(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              f = -1,
              c = -1,
              y = 0,
              S = 0,
              T = l,
              h = null;
            t: for (;;) {
              for (
                var g;
                T !== a || (e !== 0 && T.nodeType !== 3) || (f = i + e),
                  T !== n || (u !== 0 && T.nodeType !== 3) || (c = i + u),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (g = T.firstChild) !== null;
              )
                ((h = T), (T = g));
              for (;;) {
                if (T === l) break t;
                if (
                  (h === a && ++y === e && (f = i),
                  h === n && ++S === u && (c = i),
                  (g = T.nextSibling) !== null)
                )
                  break;
                ((T = h), (h = T.parentNode));
              }
              T = g;
            }
            a = f === -1 || c === -1 ? null : { start: f, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      wf = { focusedElem: l, selectionRange: a }, qn = !1, pl = t;
      pl !== null;
    )
      if (
        ((t = pl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (pl = l));
      else
        for (; pl !== null; ) {
          switch (((t = pl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var D = Ya(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(D, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (j) {
                  ul(a, a.return, j);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  kf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(d(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (pl = l));
            break;
          }
          pl = t.return;
        }
  }
  function ks(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Vt(l, a), u & 4 && ee(5, a));
        break;
      case 1:
        if ((Vt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              ul(a, a.return, i);
            }
          else {
            var e = Ya(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ul(a, a.return, i);
            }
          }
        (u & 64 && Vs(a), u & 512 && ne(a, a.return));
        break;
      case 3:
        if ((Vt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            j0(l, t);
          } catch (i) {
            ul(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Ws(a);
      case 26:
      case 5:
        (Vt(l, a), t === null && u & 4 && Js(a), u & 512 && ne(a, a.return));
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        (Vt(l, a), u & 4 && Ps(l, a));
        break;
      case 13:
        (Vt(l, a),
          u & 4 && lo(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = ym.bind(null, a)), jm(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Zt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || Al), (e = Zt));
          var n = Al;
          ((Zt = u),
            (Al = t) && !n ? Kt(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (Zt = e),
            (Al = n));
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function Fs(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Fs(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && li(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var yl = null,
    Ll = !1;
  function Lt(l, t, a) {
    for (a = a.child; a !== null; ) (Is(l, t, a), (a = a.sibling));
  }
  function Is(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Uu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Al || pt(a, t),
          Lt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Al || pt(a, t);
        var u = yl,
          e = Ll;
        (ha(a.type) && ((yl = a.stateNode), (Ll = !1)),
          Lt(l, t, a),
          ye(a.stateNode),
          (yl = u),
          (Ll = e));
        break;
      case 5:
        Al || pt(a, t);
      case 6:
        if (
          ((u = yl),
          (e = Ll),
          (yl = null),
          Lt(l, t, a),
          (yl = u),
          (Ll = e),
          yl !== null)
        )
          if (Ll)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === "HTML"
                  ? yl.ownerDocument.body
                  : yl
              ).removeChild(a.stateNode);
            } catch (n) {
              ul(a, t, n);
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              ul(a, t, n);
            }
        break;
      case 18:
        yl !== null &&
          (Ll
            ? ((l = yl),
              Ko(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Mu(l))
            : Ko(yl, a.stateNode));
        break;
      case 4:
        ((u = yl),
          (e = Ll),
          (yl = a.stateNode.containerInfo),
          (Ll = !0),
          Lt(l, t, a),
          (yl = u),
          (Ll = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ca(2, a, t), Al || ca(4, a, t), Lt(l, t, a));
        break;
      case 1:
        (Al ||
          (pt(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Ks(a, t, u)),
          Lt(l, t, a));
        break;
      case 21:
        Lt(l, t, a);
        break;
      case 22:
        ((Al = (u = Al) || a.memoizedState !== null), Lt(l, t, a), (Al = u));
        break;
      default:
        Lt(l, t, a);
    }
  }
  function Ps(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Mu(l);
      } catch (a) {
        ul(t, t.return, a);
      }
    }
  }
  function lo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Mu(l);
      } catch (a) {
        ul(t, t.return, a);
      }
  }
  function im(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new $s()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new $s()),
          t
        );
      default:
        throw Error(d(435, l.tag));
    }
  }
  function hn(l, t) {
    var a = im(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = hm.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Vl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          i = t,
          f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ha(f.type)) {
                ((yl = f.stateNode), (Ll = !1));
                break l;
              }
              break;
            case 5:
              ((yl = f.stateNode), (Ll = !1));
              break l;
            case 3:
            case 4:
              ((yl = f.stateNode.containerInfo), (Ll = !0));
              break l;
          }
          f = f.return;
        }
        if (yl === null) throw Error(d(160));
        (Is(n, i, e),
          (yl = null),
          (Ll = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (to(t, l), (t = t.sibling));
  }
  var bt = null;
  function to(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Vl(t, l),
          Kl(l),
          u & 4 && (ca(3, l, l.return), ee(3, l), ca(5, l, l.return)));
        break;
      case 1:
        (Vl(t, l),
          Kl(l),
          u & 512 && (Al || a === null || pt(a, a.return)),
          u & 64 &&
            Zt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = bt;
        if (
          (Vl(t, l),
          Kl(l),
          u & 512 && (Al || a === null || pt(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Cu] ||
                          n[Ml] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        Hl(n, u, a),
                        (n[Ml] = l),
                        _l(n),
                        (u = n));
                      break l;
                    case "link":
                      var i = a1("link", "href", e).get(u + (a.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Hl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = a1("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Hl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    default:
                      throw Error(d(468, u));
                  }
                  ((n[Ml] = l), _l(n), (u = n));
                }
                l.stateNode = u;
              } else u1(e, l.type, l.stateNode);
            else l.stateNode = t1(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? u1(e, l.type, l.stateNode)
                  : t1(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                Ef(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Vl(t, l),
          Kl(l),
          u & 512 && (Al || a === null || pt(a, a.return)),
          a !== null && u & 4 && Ef(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Vl(t, l),
          Kl(l),
          u & 512 && (Al || a === null || pt(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            ka(e, "");
          } catch (D) {
            ul(l, l.return, D);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Ef(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (_f = !0));
        break;
      case 6:
        if ((Vl(t, l), Kl(l), u & 4)) {
          if (l.stateNode === null) throw Error(d(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (D) {
            ul(l, l.return, D);
          }
        }
        break;
      case 3:
        if (
          ((Hn = null),
          (e = bt),
          (bt = Un(t.containerInfo)),
          Vl(t, l),
          (bt = e),
          Kl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Mu(t.containerInfo);
          } catch (D) {
            ul(l, l.return, D);
          }
        _f && ((_f = !1), ao(l));
        break;
      case 4:
        ((u = bt),
          (bt = Un(l.stateNode.containerInfo)),
          Vl(t, l),
          Kl(l),
          (bt = u));
        break;
      case 12:
        (Vl(t, l), Kl(l));
        break;
      case 31:
        (Vl(t, l),
          Kl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), hn(l, u))));
        break;
      case 13:
        (Vl(t, l),
          Kl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (gn = kl()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), hn(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = a !== null && a.memoizedState !== null,
          y = Zt,
          S = Al;
        if (
          ((Zt = y || e),
          (Al = S || c),
          Vl(t, l),
          (Al = S),
          (Zt = y),
          Kl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || c || Zt || Al || Ga(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                c = a = t;
                try {
                  if (((n = c.stateNode), e))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    f = c.stateNode;
                    var T = c.memoizedProps.style,
                      h =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    f.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (D) {
                  ul(c, c.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (D) {
                  ul(c, c.return, D);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                c = t;
                try {
                  var g = c.stateNode;
                  e ? Jo(g, !0) : Jo(c.stateNode, !1);
                } catch (D) {
                  ul(c, c.return, D);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), hn(l, a))));
        break;
      case 19:
        (Vl(t, l),
          Kl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), hn(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Vl(t, l), Kl(l));
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (ws(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(d(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = Af(l);
            yn(l, n, e);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (ka(i, ""), (a.flags &= -33));
            var f = Af(l);
            yn(l, f, i);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo,
              y = Af(l);
            Of(l, y, c);
            break;
          default:
            throw Error(d(161));
        }
      } catch (S) {
        ul(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function ao(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (ao(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (ks(l, t.alternate, t), (t = t.sibling));
  }
  function Ga(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ca(4, t, t.return), Ga(t));
          break;
        case 1:
          pt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Ks(t, t.return, a),
            Ga(t));
          break;
        case 27:
          ye(t.stateNode);
        case 26:
        case 5:
          (pt(t, t.return), Ga(t));
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      l = l.sibling;
    }
  }
  function Kt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Kt(e, n, a), ee(4, n));
          break;
        case 1:
          if (
            (Kt(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (y) {
              ul(u, u.return, y);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var f = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  R0(c[e], f);
            } catch (y) {
              ul(u, u.return, y);
            }
          }
          (a && i & 64 && Vs(n), ne(n, n.return));
          break;
        case 27:
          Ws(n);
        case 26:
        case 5:
          (Kt(e, n, a), a && u === null && i & 4 && Js(n), ne(n, n.return));
          break;
        case 12:
          Kt(e, n, a);
          break;
        case 31:
          (Kt(e, n, a), a && i & 4 && Ps(e, n));
          break;
        case 13:
          (Kt(e, n, a), a && i & 4 && lo(e, n));
          break;
        case 22:
          (n.memoizedState === null && Kt(e, n, a), ne(n, n.return));
          break;
        case 30:
          break;
        default:
          Kt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function pf(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ku(a)));
  }
  function Mf(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ku(l)));
  }
  function zt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (uo(l, t, a, u), (t = t.sibling));
  }
  function uo(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (zt(l, t, a, u), e & 2048 && ee(9, t));
        break;
      case 1:
        zt(l, t, a, u);
        break;
      case 3:
        (zt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ku(l))));
        break;
      case 12:
        if (e & 2048) {
          (zt(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (c) {
            ul(t, t.return, c);
          }
        } else zt(l, t, a, u);
        break;
      case 31:
        zt(l, t, a, u);
        break;
      case 13:
        zt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? zt(l, t, a, u)
              : ie(l, t)
            : n._visibility & 2
              ? zt(l, t, a, u)
              : ((n._visibility |= 2),
                ru(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && pf(i, t));
        break;
      case 24:
        (zt(l, t, a, u), e & 2048 && Mf(t.alternate, t));
        break;
      default:
        zt(l, t, a, u);
    }
  }
  function ru(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        f = a,
        c = u,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ru(n, i, f, c, e), ee(8, i));
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          (i.memoizedState !== null
            ? S._visibility & 2
              ? ru(n, i, f, c, e)
              : ie(n, i)
            : ((S._visibility |= 2), ru(n, i, f, c, e)),
            e && y & 2048 && pf(i.alternate, i));
          break;
        case 24:
          (ru(n, i, f, c, e), e && y & 2048 && Mf(i.alternate, i));
          break;
        default:
          ru(n, i, f, c, e);
      }
      t = t.sibling;
    }
  }
  function ie(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (ie(a, u), e & 2048 && pf(u.alternate, u));
            break;
          case 24:
            (ie(a, u), e & 2048 && Mf(u.alternate, u));
            break;
          default:
            ie(a, u);
        }
        t = t.sibling;
      }
  }
  var fe = 8192;
  function gu(l, t, a) {
    if (l.subtreeFlags & fe)
      for (l = l.child; l !== null; ) (eo(l, t, a), (l = l.sibling));
  }
  function eo(l, t, a) {
    switch (l.tag) {
      case 26:
        (gu(l, t, a),
          l.flags & fe &&
            l.memoizedState !== null &&
            Jm(a, bt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        gu(l, t, a);
        break;
      case 3:
      case 4:
        var u = bt;
        ((bt = Un(l.stateNode.containerInfo)), gu(l, t, a), (bt = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = fe), (fe = 16777216), gu(l, t, a), (fe = u))
            : gu(l, t, a));
        break;
      default:
        gu(l, t, a);
    }
  }
  function no(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((pl = u), fo(u, l));
        }
      no(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (io(l), (l = l.sibling));
  }
  function io(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ce(l), l.flags & 2048 && ca(9, l, l.return));
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), rn(l))
          : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function rn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((pl = u), fo(u, l));
        }
      no(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ca(8, t, t.return), rn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), rn(t)));
          break;
        default:
          rn(t);
      }
      l = l.sibling;
    }
  }
  function fo(l, t) {
    for (; pl !== null; ) {
      var a = pl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Ku(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) ((u.return = a), (pl = u));
      else
        l: for (a = l; pl !== null; ) {
          u = pl;
          var e = u.sibling,
            n = u.return;
          if ((Fs(u), u === a)) {
            pl = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (pl = e));
            break l;
          }
          pl = n;
        }
    }
  }
  var fm = {
      getCacheForType: function (l) {
        var t = Ul(zl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Ul(zl).controller.signal;
      },
    },
    cm = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    sl = null,
    L = null,
    K = 0,
    al = 0,
    ut = null,
    sa = !1,
    Su = !1,
    Df = !1,
    Jt = 0,
    rl = 0,
    oa = 0,
    Xa = 0,
    Uf = 0,
    et = 0,
    bu = 0,
    se = null,
    Jl = null,
    Nf = !1,
    gn = 0,
    co = 0,
    Sn = 1 / 0,
    bn = null,
    da = null,
    Ol = 0,
    ma = null,
    zu = null,
    wt = 0,
    Hf = 0,
    Cf = null,
    so = null,
    oe = 0,
    Rf = null;
  function nt() {
    return (I & 2) !== 0 && K !== 0 ? K & -K : b.T !== null ? Gf() : _c();
  }
  function oo() {
    if (et === 0)
      if ((K & 536870912) === 0 || W) {
        var l = pe;
        ((pe <<= 1), (pe & 3932160) === 0 && (pe = 262144), (et = l));
      } else et = 536870912;
    return ((l = tt.current), l !== null && (l.flags |= 32), et);
  }
  function wl(l, t, a) {
    (((l === sl && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
      (Tu(l, 0), va(l, K, et, !1)),
      Hu(l, a),
      ((I & 2) === 0 || l !== sl) &&
        (l === sl && ((I & 2) === 0 && (Xa |= a), rl === 4 && va(l, K, et, !1)),
        Mt(l)));
  }
  function mo(l, t, a) {
    if ((I & 6) !== 0) throw Error(d(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Nu(l, t),
      e = u ? dm(l, t) : qf(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        Su && !u && va(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !sm(a))) {
          ((e = qf(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              e = se;
              var c = f.current.memoizedState.isDehydrated;
              if ((c && (Tu(f, i).flags |= 256), (i = qf(f, i, !1)), i !== 2)) {
                if (Df && !c) {
                  ((f.errorRecoveryDisabledLanes |= n), (Xa |= n), (e = 4));
                  break l;
                }
                ((n = Jl),
                  (Jl = e),
                  n !== null &&
                    (Jl === null ? (Jl = n) : Jl.push.apply(Jl, n)));
              }
              e = i;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (Tu(l, 0), va(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              va(u, t, et, !sa);
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((e = gn + 300 - kl()), 10 < e)) {
            if ((va(u, t, et, !sa), De(u, 0, !0) !== 0)) break l;
            ((wt = t),
              (u.timeoutHandle = Lo(
                vo.bind(
                  null,
                  u,
                  a,
                  Jl,
                  bn,
                  Nf,
                  t,
                  et,
                  Xa,
                  bu,
                  sa,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          vo(u, a, Jl, bn, Nf, t, et, Xa, bu, sa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function vo(l, t, a, u, e, n, i, f, c, y, S, T, h, g) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      T & 8192 || (T & 16785408) === 16785408)
    ) {
      ((T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ct,
      }),
        eo(t, n, T));
      var D =
        (n & 62914560) === n ? gn - kl() : (n & 4194048) === n ? co - kl() : 0;
      if (((D = wm(T, D)), D !== null)) {
        ((wt = n),
          (l.cancelPendingCommit = D(
            To.bind(null, l, t, n, a, u, e, i, f, c, S, T, null, h, g),
          )),
          va(l, n, i, !y));
        return;
      }
    }
    To(l, t, n, a, u, e, i, f, c);
  }
  function sm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function va(l, t, a, u) {
    ((t &= ~Uf),
      (t &= ~Xa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e),
        i = 1 << n;
      ((u[n] = -1), (e &= ~i));
    }
    a !== 0 && Ec(l, a, t);
  }
  function zn() {
    return (I & 6) === 0 ? (de(0), !1) : !0;
  }
  function jf() {
    if (L !== null) {
      if (al === 0) var l = L.return;
      else ((l = L), (Bt = Ha = null), $i(l), (du = null), (wu = 0), (l = L));
      for (; l !== null; ) (Ls(l.alternate, l), (l = l.return));
      L = null;
    }
  }
  function Tu(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Um(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (wt = 0),
      jf(),
      (sl = l),
      (L = a = jt(l.current, null)),
      (K = t),
      (al = 0),
      (ut = null),
      (sa = !1),
      (Su = Nu(l, t)),
      (Df = !1),
      (bu = et = Uf = Xa = oa = rl = 0),
      (Jl = se = null),
      (Nf = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Il(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((Jt = t), Xe(), a);
  }
  function yo(l, t) {
    ((X = null),
      (b.H = te),
      t === ou || t === We
        ? ((t = U0()), (al = 3))
        : t === xi
          ? ((t = U0()), (al = 4))
          : (al =
              t === mf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (ut = t),
      L === null && ((rl = 1), sn(l, ot(t, l.current))));
  }
  function ho() {
    var l = tt.current;
    return l === null
      ? !0
      : (K & 4194048) === K
        ? yt === null
        : (K & 62914560) === K || (K & 536870912) !== 0
          ? l === yt
          : !1;
  }
  function ro() {
    var l = b.H;
    return ((b.H = te), l === null ? te : l);
  }
  function go() {
    var l = b.A;
    return ((b.A = fm), l);
  }
  function Tn() {
    ((rl = 4),
      sa || ((K & 4194048) !== K && tt.current !== null) || (Su = !0),
      ((oa & 134217727) === 0 && (Xa & 134217727) === 0) ||
        sl === null ||
        va(sl, K, et, !1));
  }
  function qf(l, t, a) {
    var u = I;
    I |= 2;
    var e = ro(),
      n = go();
    ((sl !== l || K !== t) && ((bn = null), Tu(l, t)), (t = !1));
    var i = rl;
    l: do
      try {
        if (al !== 0 && L !== null) {
          var f = L,
            c = ut;
          switch (al) {
            case 8:
              (jf(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var y = al;
              if (((al = 0), (ut = null), Eu(l, f, c, y), a && Su)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((y = al), (al = 0), (ut = null), Eu(l, f, c, y));
          }
        }
        (om(), (i = rl));
        break;
      } catch (S) {
        yo(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Ha = null),
      (I = u),
      (b.H = e),
      (b.A = n),
      L === null && ((sl = null), (K = 0), Xe()),
      i
    );
  }
  function om() {
    for (; L !== null; ) So(L);
  }
  function dm(l, t) {
    var a = I;
    I |= 2;
    var u = ro(),
      e = go();
    sl !== l || K !== t
      ? ((bn = null), (Sn = kl() + 500), Tu(l, t))
      : (Su = Nu(l, t));
    l: do
      try {
        if (al !== 0 && L !== null) {
          t = L;
          var n = ut;
          t: switch (al) {
            case 1:
              ((al = 0), (ut = null), Eu(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (M0(n)) {
                ((al = 0), (ut = null), bo(t));
                break;
              }
              ((t = function () {
                ((al !== 2 && al !== 9) || sl !== l || (al = 7), Mt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              M0(n)
                ? ((al = 0), (ut = null), bo(t))
                : ((al = 0), (ut = null), Eu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (L.tag) {
                case 26:
                  i = L.memoizedState;
                case 5:
                case 27:
                  var f = L;
                  if (i ? e1(i) : f.stateNode.complete) {
                    ((al = 0), (ut = null));
                    var c = f.sibling;
                    if (c !== null) L = c;
                    else {
                      var y = f.return;
                      y !== null ? ((L = y), En(y)) : (L = null);
                    }
                    break t;
                  }
              }
              ((al = 0), (ut = null), Eu(l, t, n, 5));
              break;
            case 6:
              ((al = 0), (ut = null), Eu(l, t, n, 6));
              break;
            case 8:
              (jf(), (rl = 6));
              break l;
            default:
              throw Error(d(462));
          }
        }
        mm();
        break;
      } catch (S) {
        yo(l, S);
      }
    while (!0);
    return (
      (Bt = Ha = null),
      (b.H = u),
      (b.A = e),
      (I = a),
      L !== null ? 0 : ((sl = null), (K = 0), Xe(), rl)
    );
  }
  function mm() {
    for (; L !== null && !q1(); ) So(L);
  }
  function So(l) {
    var t = Qs(l.alternate, l, Jt);
    ((l.memoizedProps = l.pendingProps), t === null ? En(l) : (L = t));
  }
  function bo(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qs(a, t, t.pendingProps, t.type, void 0, K);
        break;
      case 11:
        t = qs(a, t, t.pendingProps, t.type.render, t.ref, K);
        break;
      case 5:
        $i(t);
      default:
        (Ls(a, t), (t = L = r0(t, Jt)), (t = Qs(a, t, Jt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? En(l) : (L = t));
  }
  function Eu(l, t, a, u) {
    ((Bt = Ha = null), $i(t), (du = null), (wu = 0));
    var e = t.return;
    try {
      if (lm(l, e, t, a, K)) {
        ((rl = 1), sn(l, ot(a, l.current)), (L = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw ((L = e), n);
      ((rl = 1), sn(l, ot(a, l.current)), (L = null));
      return;
    }
    t.flags & 32768
      ? (W || u === 1
          ? (l = !0)
          : Su || (K & 536870912) !== 0
            ? (l = !1)
            : ((sa = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = tt.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        zo(t, l))
      : En(t);
  }
  function En(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        zo(t, sa);
        return;
      }
      l = t.return;
      var a = um(t.alternate, t, Jt);
      if (a !== null) {
        L = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    rl === 0 && (rl = 5);
  }
  function zo(l, t) {
    do {
      var a = em(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (L = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        L = l;
        return;
      }
      L = l = a;
    } while (l !== null);
    ((rl = 6), (L = null));
  }
  function To(l, t, a, u, e, n, i, f, c) {
    l.cancelPendingCommit = null;
    do An();
    while (Ol !== 0);
    if ((I & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Ei),
        K1(l, a, n, i, f, c),
        l === sl && ((L = sl = null), (K = 0)),
        (zu = t),
        (ma = l),
        (wt = a),
        (Hf = n),
        (Cf = e),
        (so = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            rm(Oe, function () {
              return (po(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = b.T), (b.T = null), (e = p.p), (p.p = 2), (i = I), (I |= 4));
        try {
          nm(l, t, a);
        } finally {
          ((I = i), (p.p = e), (b.T = u));
        }
      }
      ((Ol = 1), Eo(), Ao(), Oo());
    }
  }
  function Eo() {
    if (Ol === 1) {
      Ol = 0;
      var l = ma,
        t = zu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var u = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          to(t, l);
          var n = wf,
            i = f0(l.containerInfo),
            f = n.focusedElem,
            c = n.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            i0(f.ownerDocument.documentElement, f)
          ) {
            if (c !== null && gi(f)) {
              var y = c.start,
                S = c.end;
              if ((S === void 0 && (S = y), "selectionStart" in f))
                ((f.selectionStart = y),
                  (f.selectionEnd = Math.min(S, f.value.length)));
              else {
                var T = f.ownerDocument || document,
                  h = (T && T.defaultView) || window;
                if (h.getSelection) {
                  var g = h.getSelection(),
                    D = f.textContent.length,
                    j = Math.min(c.start, D),
                    fl = c.end === void 0 ? j : Math.min(c.end, D);
                  !g.extend && j > fl && ((i = fl), (fl = j), (j = i));
                  var m = n0(f, j),
                    s = n0(f, fl);
                  if (
                    m &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== m.node ||
                      g.anchorOffset !== m.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var v = T.createRange();
                    (v.setStart(m.node, m.offset),
                      g.removeAllRanges(),
                      j > fl
                        ? (g.addRange(v), g.extend(s.node, s.offset))
                        : (v.setEnd(s.node, s.offset), g.addRange(v)));
                  }
                }
              }
            }
            for (T = [], g = f; (g = g.parentNode); )
              g.nodeType === 1 &&
                T.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < T.length;
              f++
            ) {
              var z = T[f];
              ((z.element.scrollLeft = z.left), (z.element.scrollTop = z.top));
            }
          }
          ((qn = !!Jf), (wf = Jf = null));
        } finally {
          ((I = e), (p.p = u), (b.T = a));
        }
      }
      ((l.current = t), (Ol = 2));
    }
  }
  function Ao() {
    if (Ol === 2) {
      Ol = 0;
      var l = ma,
        t = zu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var u = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          ks(l, t.alternate, t);
        } finally {
          ((I = e), (p.p = u), (b.T = a));
        }
      }
      Ol = 3;
    }
  }
  function Oo() {
    if (Ol === 4 || Ol === 3) {
      ((Ol = 0), B1());
      var l = ma,
        t = zu,
        a = wt,
        u = so;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ol = 5)
        : ((Ol = 0), (zu = ma = null), _o(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (da = null),
        In(a),
        (t = t.stateNode),
        Fl && typeof Fl.onCommitFiberRoot == "function")
      )
        try {
          Fl.onCommitFiberRoot(Uu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = b.T), (e = p.p), (p.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
            var f = u[i];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          ((b.T = t), (p.p = e));
        }
      }
      ((wt & 3) !== 0 && An(),
        Mt(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === Rf
            ? oe++
            : ((oe = 0), (Rf = l))
          : (oe = 0),
        de(0));
    }
  }
  function _o(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ku(t)));
  }
  function An() {
    return (Eo(), Ao(), Oo(), po());
  }
  function po() {
    if (Ol !== 5) return !1;
    var l = ma,
      t = Hf;
    Hf = 0;
    var a = In(wt),
      u = b.T,
      e = p.p;
    try {
      ((p.p = 32 > a ? 32 : a), (b.T = null), (a = Cf), (Cf = null));
      var n = ma,
        i = wt;
      if (((Ol = 0), (zu = ma = null), (wt = 0), (I & 6) !== 0))
        throw Error(d(331));
      var f = I;
      if (
        ((I |= 4),
        io(n.current),
        uo(n, n.current, i, a),
        (I = f),
        de(0, !1),
        Fl && typeof Fl.onPostCommitFiberRoot == "function")
      )
        try {
          Fl.onPostCommitFiberRoot(Uu, n);
        } catch {}
      return !0;
    } finally {
      ((p.p = e), (b.T = u), _o(l, t));
    }
  }
  function Mo(l, t, a) {
    ((t = ot(a, t)),
      (t = df(l.stateNode, t, 2)),
      (l = na(l, t, 2)),
      l !== null && (Hu(l, 2), Mt(l)));
  }
  function ul(l, t, a) {
    if (l.tag === 3) Mo(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mo(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (da === null || !da.has(u)))
          ) {
            ((l = ot(a, l)),
              (a = Ms(2)),
              (u = na(t, a, 2)),
              u !== null && (Ds(a, u, t, l), Hu(u, 2), Mt(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bf(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new cm();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) ||
      ((Df = !0), e.add(a), (l = vm.bind(null, l, t, a)), t.then(l, l));
  }
  function vm(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (K & a) === a &&
        (rl === 4 || (rl === 3 && (K & 62914560) === K && 300 > kl() - gn)
          ? (I & 2) === 0 && Tu(l, 0)
          : (Uf |= a),
        bu === K && (bu = 0)),
      Mt(l));
  }
  function Do(l, t) {
    (t === 0 && (t = Tc()), (l = Da(l, t)), l !== null && (Hu(l, t), Mt(l)));
  }
  function ym(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Do(l, a));
  }
  function hm(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (u !== null && u.delete(t), Do(l, a));
  }
  function rm(l, t) {
    return Wn(l, t);
  }
  var On = null,
    Au = null,
    xf = !1,
    _n = !1,
    Yf = !1,
    ya = 0;
  function Mt(l) {
    (l !== Au &&
      l.next === null &&
      (Au === null ? (On = Au = l) : (Au = Au.next = l)),
      (_n = !0),
      xf || ((xf = !0), Sm()));
  }
  function de(l, t) {
    if (!Yf && _n) {
      Yf = !0;
      do
        for (var a = !1, u = On; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes,
                f = u.pingedLanes;
              ((n = (1 << (31 - Il(42 | l) + 1)) - 1),
                (n &= e & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), Co(u, n));
          } else
            ((n = K),
              (n = De(
                u,
                u === sl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Nu(u, n) || ((a = !0), Co(u, n)));
          u = u.next;
        }
      while (a);
      Yf = !1;
    }
  }
  function gm() {
    Uo();
  }
  function Uo() {
    _n = xf = !1;
    var l = 0;
    ya !== 0 && Dm() && (l = ya);
    for (var t = kl(), a = null, u = On; u !== null; ) {
      var e = u.next,
        n = No(u, t);
      (n === 0
        ? ((u.next = null),
          a === null ? (On = e) : (a.next = e),
          e === null && (Au = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (_n = !0)),
        (u = e));
    }
    ((Ol !== 0 && Ol !== 5) || de(l), ya !== 0 && (ya = 0));
  }
  function No(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - Il(n),
        f = 1 << i,
        c = e[i];
      (c === -1
        ? ((f & a) === 0 || (f & u) !== 0) && (e[i] = V1(f, t))
        : c <= t && (l.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((t = sl),
      (a = K),
      (a = De(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (al === 2 || al === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && $n(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Nu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && $n(u), In(a))) {
        case 2:
        case 8:
          a = bc;
          break;
        case 32:
          a = Oe;
          break;
        case 268435456:
          a = zc;
          break;
        default:
          a = Oe;
      }
      return (
        (u = Ho.bind(null, l)),
        (a = Wn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && $n(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Ho(l, t) {
    if (Ol !== 0 && Ol !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (An() && l.callbackNode !== a) return null;
    var u = K;
    return (
      (u = De(
        l,
        l === sl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : (mo(l, u, t),
          No(l, kl()),
          l.callbackNode != null && l.callbackNode === a
            ? Ho.bind(null, l)
            : null)
    );
  }
  function Co(l, t) {
    if (An()) return null;
    mo(l, t, !0);
  }
  function Sm() {
    Nm(function () {
      (I & 6) !== 0 ? Wn(Sc, gm) : Uo();
    });
  }
  function Gf() {
    if (ya === 0) {
      var l = cu;
      (l === 0 && ((l = _e), (_e <<= 1), (_e & 261888) === 0 && (_e = 256)),
        (ya = l));
    }
    return ya;
  }
  function Ro(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Ce("" + l);
  }
  function jo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function bm(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Ro((e[Ql] || null).action),
        i = u.submitter;
      i &&
        ((t = (t = i[Ql] || null)
          ? Ro(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var f = new Be("action", "action", null, u, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (ya !== 0) {
                  var c = i ? jo(e, i) : new FormData(e);
                  ef(
                    a,
                    { pending: !0, data: c, method: e.method, action: n },
                    null,
                    c,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (c = i ? jo(e, i) : new FormData(e)),
                  ef(
                    a,
                    { pending: !0, data: c, method: e.method, action: n },
                    n,
                    c,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Xf = 0; Xf < Ti.length; Xf++) {
    var Qf = Ti[Xf],
      zm = Qf.toLowerCase(),
      Tm = Qf[0].toUpperCase() + Qf.slice(1);
    St(zm, "on" + Tm);
  }
  (St(o0, "onAnimationEnd"),
    St(d0, "onAnimationIteration"),
    St(m0, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(xd, "onTransitionRun"),
    St(Yd, "onTransitionStart"),
    St(Gd, "onTransitionCancel"),
    St(v0, "onTransitionEnd"),
    Wa("onMouseEnter", ["mouseout", "mouseover"]),
    Wa("onMouseLeave", ["mouseout", "mouseover"]),
    Wa("onPointerEnter", ["pointerout", "pointerover"]),
    Wa("onPointerLeave", ["pointerout", "pointerover"]),
    Oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var me =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Em = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(me),
    );
  function qo(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = u.length - 1; 0 <= i; i--) {
            var f = u[i],
              c = f.instance,
              y = f.currentTarget;
            if (((f = f.listener), c !== n && e.isPropagationStopped()))
              break l;
            ((n = f), (e.currentTarget = y));
            try {
              n(e);
            } catch (S) {
              Ge(S);
            }
            ((e.currentTarget = null), (n = c));
          }
        else
          for (i = 0; i < u.length; i++) {
            if (
              ((f = u[i]),
              (c = f.instance),
              (y = f.currentTarget),
              (f = f.listener),
              c !== n && e.isPropagationStopped())
            )
              break l;
            ((n = f), (e.currentTarget = y));
            try {
              n(e);
            } catch (S) {
              Ge(S);
            }
            ((e.currentTarget = null), (n = c));
          }
      }
    }
  }
  function V(l, t) {
    var a = t[Pn];
    a === void 0 && (a = t[Pn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Bo(t, l, 2, !1), a.add(u));
  }
  function Zf(l, t, a) {
    var u = 0;
    (t && (u |= 4), Bo(a, l, u, t));
  }
  var pn = "_reactListening" + Math.random().toString(36).slice(2);
  function Lf(l) {
    if (!l[pn]) {
      ((l[pn] = !0),
        Dc.forEach(function (a) {
          a !== "selectionchange" && (Em.has(a) || Zf(a, !1, l), Zf(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[pn] || ((t[pn] = !0), Zf("selectionchange", !1, t));
    }
  }
  function Bo(l, t, a, u) {
    switch (d1(t)) {
      case 2:
        var e = km;
        break;
      case 8:
        e = Fm;
        break;
      default:
        e = ec;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !ci ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function Vf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === e)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Ka(f)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              u = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Xc(function () {
      var y = n,
        S = ii(a),
        T = [];
      l: {
        var h = y0.get(l);
        if (h !== void 0) {
          var g = Be,
            D = l;
          switch (l) {
            case "keypress":
              if (je(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = hd;
              break;
            case "focusin":
              ((D = "focus"), (g = mi));
              break;
            case "focusout":
              ((D = "blur"), (g = mi));
              break;
            case "beforeblur":
            case "afterblur":
              g = mi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Lc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = ud;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Sd;
              break;
            case o0:
            case d0:
            case m0:
              g = id;
              break;
            case v0:
              g = zd;
              break;
            case "scroll":
            case "scrollend":
              g = td;
              break;
            case "wheel":
              g = Ed;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = cd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Kc;
              break;
            case "toggle":
            case "beforetoggle":
              g = Od;
          }
          var j = (t & 4) !== 0,
            fl = !j && (l === "scroll" || l === "scrollend"),
            m = j ? (h !== null ? h + "Capture" : null) : h;
          j = [];
          for (var s = y, v; s !== null; ) {
            var z = s;
            if (
              ((v = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                v === null ||
                m === null ||
                ((z = ju(s, m)), z != null && j.push(ve(s, z, v))),
              fl)
            )
              break;
            s = s.return;
          }
          0 < j.length &&
            ((h = new g(h, D, null, a, S)), T.push({ event: h, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            h &&
              a !== ni &&
              (D = a.relatedTarget || a.fromElement) &&
              (Ka(D) || D[Va]))
          )
            break l;
          if (
            (g || h) &&
            ((h =
              S.window === S
                ? S
                : (h = S.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            g
              ? ((D = a.relatedTarget || a.toElement),
                (g = y),
                (D = D ? Ka(D) : null),
                D !== null &&
                  ((fl = x(D)),
                  (j = D.tag),
                  D !== fl || (j !== 5 && j !== 27 && j !== 6)) &&
                  (D = null))
              : ((g = null), (D = y)),
            g !== D)
          ) {
            if (
              ((j = Lc),
              (z = "onMouseLeave"),
              (m = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((j = Kc),
                (z = "onPointerLeave"),
                (m = "onPointerEnter"),
                (s = "pointer")),
              (fl = g == null ? h : Ru(g)),
              (v = D == null ? h : Ru(D)),
              (h = new j(z, s + "leave", g, a, S)),
              (h.target = fl),
              (h.relatedTarget = v),
              (z = null),
              Ka(S) === y &&
                ((j = new j(m, s + "enter", D, a, S)),
                (j.target = v),
                (j.relatedTarget = fl),
                (z = j)),
              (fl = z),
              g && D)
            )
              t: {
                for (j = Am, m = g, s = D, v = 0, z = m; z; z = j(z)) v++;
                z = 0;
                for (var C = s; C; C = j(C)) z++;
                for (; 0 < v - z; ) ((m = j(m)), v--);
                for (; 0 < z - v; ) ((s = j(s)), z--);
                for (; v--; ) {
                  if (m === s || (s !== null && m === s.alternate)) {
                    j = m;
                    break t;
                  }
                  ((m = j(m)), (s = j(s)));
                }
                j = null;
              }
            else j = null;
            (g !== null && xo(T, h, g, j, !1),
              D !== null && fl !== null && xo(T, fl, D, j, !0));
          }
        }
        l: {
          if (
            ((h = y ? Ru(y) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === "select" || (g === "input" && h.type === "file"))
          )
            var k = Pc;
          else if (Fc(h))
            if (l0) k = jd;
            else {
              k = Cd;
              var N = Hd;
            }
          else
            ((g = h.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? y && ei(y.elementType) && (k = Pc)
                : (k = Rd));
          if (k && (k = k(l, y))) {
            Ic(T, k, a, S);
            break l;
          }
          (N && N(l, h, y),
            l === "focusout" &&
              y &&
              h.type === "number" &&
              y.memoizedProps.value != null &&
              ui(h, "number", h.value));
        }
        switch (((N = y ? Ru(y) : window), l)) {
          case "focusin":
            (Fc(N) || N.contentEditable === "true") &&
              ((lu = N), (Si = y), (Zu = null));
            break;
          case "focusout":
            Zu = Si = lu = null;
            break;
          case "mousedown":
            bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((bi = !1), c0(T, a, S));
            break;
          case "selectionchange":
            if (Bd) break;
          case "keydown":
          case "keyup":
            c0(T, a, S);
        }
        var Q;
        if (yi)
          l: {
            switch (l) {
              case "compositionstart":
                var J = "onCompositionStart";
                break l;
              case "compositionend":
                J = "onCompositionEnd";
                break l;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break l;
            }
            J = void 0;
          }
        else
          Pa
            ? $c(l, a) && (J = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (J = "onCompositionStart");
        (J &&
          (Jc &&
            a.locale !== "ko" &&
            (Pa || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && Pa && (Q = Qc())
              : ((It = S),
                (si = "value" in It ? It.value : It.textContent),
                (Pa = !0))),
          (N = Mn(y, J)),
          0 < N.length &&
            ((J = new Vc(J, l, null, a, S)),
            T.push({ event: J, listeners: N }),
            Q ? (J.data = Q) : ((Q = kc(a)), Q !== null && (J.data = Q)))),
          (Q = pd ? Md(l, a) : Dd(l, a)) &&
            ((J = Mn(y, "onBeforeInput")),
            0 < J.length &&
              ((N = new Vc("onBeforeInput", "beforeinput", null, a, S)),
              T.push({ event: N, listeners: J }),
              (N.data = Q))),
          bm(T, l, y, a, S));
      }
      qo(T, t);
    });
  }
  function ve(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = ju(l, a)),
          e != null && u.unshift(ve(l, e, n)),
          (e = ju(l, t)),
          e != null && u.push(ve(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function Am(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function xo(l, t, a, u, e) {
    for (var n = t._reactName, i = []; a !== null && a !== u; ) {
      var f = a,
        c = f.alternate,
        y = f.stateNode;
      if (((f = f.tag), c !== null && c === u)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        y === null ||
        ((c = y),
        e
          ? ((y = ju(a, n)), y != null && i.unshift(ve(a, y, c)))
          : e || ((y = ju(a, n)), y != null && i.push(ve(a, y, c)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Om = /\r\n?/g,
    _m = /\u0000|\uFFFD/g;
  function Yo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Om,
        `
`,
      )
      .replace(_m, "");
  }
  function Go(l, t) {
    return ((t = Yo(t)), Yo(l) === t);
  }
  function il(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || ka(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            ka(l, "" + u);
        break;
      case "className":
        Ne(l, "class", u);
        break;
      case "tabIndex":
        Ne(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ne(l, a, u);
        break;
      case "style":
        Yc(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ne(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((u = Ce("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && il(l, t, "name", e.name, e, null),
                il(l, t, "formEncType", e.formEncType, e, null),
                il(l, t, "formMethod", e.formMethod, e, null),
                il(l, t, "formTarget", e.formTarget, e, null))
              : (il(l, t, "encType", e.encType, e, null),
                il(l, t, "method", e.method, e, null),
                il(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = Ce("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = Ct);
        break;
      case "onScroll":
        u != null && V("scroll", l);
        break;
      case "onScrollEnd":
        u != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(d(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(d(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Ce("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        (V("beforetoggle", l), V("toggle", l), Ue(l, "popover", u));
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Ue(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = P1.get(a) || a), Ue(l, a, u));
    }
  }
  function Kf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Yc(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(d(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(d(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? ka(l, u)
          : (typeof u == "number" || typeof u == "bigint") && ka(l, "" + u);
        break;
      case "onScroll":
        u != null && V("scroll", l);
        break;
      case "onScrollEnd":
        u != null && V("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Ct);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Uc.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Ql] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : Ue(l, a, u);
          }
    }
  }
  function Hl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (V("error", l), V("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  il(l, t, n, i, a, null);
              }
          }
        (e && il(l, t, "srcSet", a.srcSet, a, null),
          u && il(l, t, "src", a.src, a, null));
        return;
      case "input":
        V("invalid", l);
        var f = (n = i = e = null),
          c = null,
          y = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  c = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  f = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(d(137, t));
                  break;
                default:
                  il(l, t, u, S, a, null);
              }
          }
        jc(l, n, f, c, y, i, e, !1);
        return;
      case "select":
        (V("invalid", l), (u = i = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((f = a[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                u = f;
              default:
                il(l, t, e, f, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!u),
          t != null ? $a(l, !!u, t, !1) : a != null && $a(l, !!u, a, !0));
        return;
      case "textarea":
        (V("invalid", l), (n = e = u = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((f = a[i]), f != null))
            switch (i) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(d(91));
                break;
              default:
                il(l, t, i, f, a, null);
            }
        Bc(l, u, e, n);
        return;
      case "option":
        for (c in a)
          a.hasOwnProperty(c) &&
            ((u = a[c]), u != null) &&
            (c === "selected"
              ? (l.selected =
                  u && typeof u != "function" && typeof u != "symbol")
              : il(l, t, c, u, a, null));
        return;
      case "dialog":
        (V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l));
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < me.length; u++) V(me[u], l);
        break;
      case "image":
        (V("error", l), V("load", l));
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (V("error", l), V("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && ((u = a[y]), u != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                il(l, t, y, u, a, null);
            }
        return;
      default:
        if (ei(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && Kf(l, t, S, u, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((u = a[f]), u != null && il(l, t, f, u, a, null));
  }
  function pm(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          i = null,
          f = null,
          c = null,
          y = null,
          S = null;
        for (g in a) {
          var T = a[g];
          if (a.hasOwnProperty(g) && T != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = T;
              default:
                u.hasOwnProperty(g) || il(l, t, g, null, u, T);
            }
        }
        for (var h in u) {
          var g = u[h];
          if (((T = a[h]), u.hasOwnProperty(h) && (g != null || T != null)))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, t));
                break;
              default:
                g !== T && il(l, t, h, g, u, T);
            }
        }
        ai(l, i, f, c, y, S, n, e);
        return;
      case "select":
        g = i = f = h = null;
        for (n in a)
          if (((c = a[n]), a.hasOwnProperty(n) && c != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                u.hasOwnProperty(n) || il(l, t, n, null, u, c);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (c = a[e]),
            u.hasOwnProperty(e) && (n != null || c != null))
          )
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== c && il(l, t, e, n, u, c);
            }
        ((t = f),
          (a = i),
          (u = g),
          h != null
            ? $a(l, !!a, h, !1)
            : !!u != !!a &&
              (t != null ? $a(l, !!a, t, !0) : $a(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = h = null;
        for (f in a)
          if (
            ((e = a[f]),
            a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, f, null, u, e);
            }
        for (i in u)
          if (
            ((e = u[i]),
            (n = a[i]),
            u.hasOwnProperty(i) && (e != null || n != null))
          )
            switch (i) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(d(91));
                break;
              default:
                e !== n && il(l, t, i, e, u, n);
            }
        qc(l, h, g);
        return;
      case "option":
        for (var D in a)
          ((h = a[D]),
            a.hasOwnProperty(D) &&
              h != null &&
              !u.hasOwnProperty(D) &&
              (D === "selected" ? (l.selected = !1) : il(l, t, D, null, u, h)));
        for (c in u)
          ((h = u[c]),
            (g = a[c]),
            u.hasOwnProperty(c) &&
              h !== g &&
              (h != null || g != null) &&
              (c === "selected"
                ? (l.selected =
                    h && typeof h != "function" && typeof h != "symbol")
                : il(l, t, c, h, u, g)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var j in a)
          ((h = a[j]),
            a.hasOwnProperty(j) &&
              h != null &&
              !u.hasOwnProperty(j) &&
              il(l, t, j, null, u, h));
        for (y in u)
          if (
            ((h = u[y]),
            (g = a[y]),
            u.hasOwnProperty(y) && h !== g && (h != null || g != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(d(137, t));
                break;
              default:
                il(l, t, y, h, u, g);
            }
        return;
      default:
        if (ei(t)) {
          for (var fl in a)
            ((h = a[fl]),
              a.hasOwnProperty(fl) &&
                h !== void 0 &&
                !u.hasOwnProperty(fl) &&
                Kf(l, t, fl, void 0, u, h));
          for (S in u)
            ((h = u[S]),
              (g = a[S]),
              !u.hasOwnProperty(S) ||
                h === g ||
                (h === void 0 && g === void 0) ||
                Kf(l, t, S, h, u, g));
          return;
        }
    }
    for (var m in a)
      ((h = a[m]),
        a.hasOwnProperty(m) &&
          h != null &&
          !u.hasOwnProperty(m) &&
          il(l, t, m, null, u, h));
    for (T in u)
      ((h = u[T]),
        (g = a[T]),
        !u.hasOwnProperty(T) ||
          h === g ||
          (h == null && g == null) ||
          il(l, t, T, h, u, g));
  }
  function Xo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Mm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          i = e.initiatorType,
          f = e.duration;
        if (n && f && Xo(i)) {
          for (i = 0, f = e.responseEnd, u += 1; u < a.length; u++) {
            var c = a[u],
              y = c.startTime;
            if (y > f) break;
            var S = c.transferSize,
              T = c.initiatorType;
            S &&
              Xo(T) &&
              ((c = c.responseEnd), (i += S * (c < f ? 1 : (f - y) / (c - y))));
          }
          if ((--u, (t += (8 * (n + i)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Jf = null,
    wf = null;
  function Dn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Qo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Wf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $f = null;
  function Dm() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === $f
        ? !1
        : (($f = l), !0)
      : (($f = null), !1);
  }
  var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
    Um = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vo = typeof Promise == "function" ? Promise : void 0,
    Nm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vo < "u"
          ? function (l) {
              return Vo.resolve(null).then(l).catch(Hm);
            }
          : Lo;
  function Hm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ha(l) {
    return l === "head";
  }
  function Ko(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), Mu(t));
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") ye(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), ye(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              f = n.nodeName;
            (n[Cu] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && ye(l.ownerDocument.body);
      a = e;
    } while (a);
    Mu(t);
  }
  function Jo(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function kf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (kf(a), li(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Cm(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Cu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = ht(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Rm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = ht(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function wo(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = ht(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ff(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function If(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function jm(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Pf = null;
  function Wo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return ht(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function $o(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ko(l, t, a) {
    switch (((t = Dn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(d(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(d(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function ye(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    li(l);
  }
  var rt = new Map(),
    Fo = new Set();
  function Un(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Wt = p.d;
  p.d = { f: qm, r: Bm, D: xm, C: Ym, L: Gm, m: Xm, X: Zm, S: Qm, M: Lm };
  function qm() {
    var l = Wt.f(),
      t = zn();
    return l || t;
  }
  function Bm(l) {
    var t = Ja(l);
    t !== null && t.tag === 5 && t.type === "form" ? vs(t) : Wt.r(l);
  }
  var Ou = typeof document > "u" ? null : document;
  function Io(l, t, a) {
    var u = Ou;
    if (u && typeof t == "string" && t) {
      var e = ct(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        Fo.has(e) ||
          (Fo.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Hl(t, "link", l),
            _l(t),
            u.head.appendChild(t))));
    }
  }
  function xm(l) {
    (Wt.D(l), Io("dns-prefetch", l, null));
  }
  function Ym(l, t) {
    (Wt.C(l, t), Io("preconnect", l, t));
  }
  function Gm(l, t, a) {
    Wt.L(l, t, a);
    var u = Ou;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + ct(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + ct(a.imageSizes) + '"]'))
        : (e += '[href="' + ct(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = _u(l);
          break;
        case "script":
          n = pu(l);
      }
      rt.has(n) ||
        ((l = q(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        rt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(he(n))) ||
          (t === "script" && u.querySelector(re(n))) ||
          ((t = u.createElement("link")),
          Hl(t, "link", l),
          _l(t),
          u.head.appendChild(t)));
    }
  }
  function Xm(l, t) {
    Wt.m(l, t);
    var a = Ou;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + ct(u) + '"][href="' + ct(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = pu(l);
      }
      if (
        !rt.has(n) &&
        ((l = q({ rel: "modulepreload", href: l }, t)),
        rt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(re(n))) return;
        }
        ((u = a.createElement("link")),
          Hl(u, "link", l),
          _l(u),
          a.head.appendChild(u));
      }
    }
  }
  function Qm(l, t, a) {
    Wt.S(l, t, a);
    var u = Ou;
    if (u && l) {
      var e = wa(u).hoistableStyles,
        n = _u(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = u.querySelector(he(n)))) f.loading = 5;
        else {
          ((l = q({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = rt.get(n)) && lc(l, a));
          var c = (i = u.createElement("link"));
          (_l(c),
            Hl(c, "link", l),
            (c._p = new Promise(function (y, S) {
              ((c.onload = y), (c.onerror = S));
            })),
            c.addEventListener("load", function () {
              f.loading |= 1;
            }),
            c.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Nn(i, t, u));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }),
          e.set(n, i));
      }
    }
  }
  function Zm(l, t) {
    Wt.X(l, t);
    var a = Ou;
    if (a && l) {
      var u = wa(a).hoistableScripts,
        e = pu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(re(e))),
        n ||
          ((l = q({ src: l, async: !0 }, t)),
          (t = rt.get(e)) && tc(l, t),
          (n = a.createElement("script")),
          _l(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Lm(l, t) {
    Wt.M(l, t);
    var a = Ou;
    if (a && l) {
      var u = wa(a).hoistableScripts,
        e = pu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(re(e))),
        n ||
          ((l = q({ src: l, async: !0, type: "module" }, t)),
          (t = rt.get(e)) && tc(l, t),
          (n = a.createElement("script")),
          _l(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Po(l, t, a, u) {
    var e = (e = Z.current) ? Un(e) : null;
    if (!e) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = _u(a.href)),
            (a = wa(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = _u(a.href);
          var n = wa(e).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((e = e.ownerDocument || e),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = e.querySelector(he(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              rt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                rt.set(l, a),
                n || Vm(e, l, a, i.state))),
            t && u === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (t && u !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = pu(a)),
              (a = wa(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, l));
    }
  }
  function _u(l) {
    return 'href="' + ct(l) + '"';
  }
  function he(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function l1(l) {
    return q({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Vm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Hl(t, "link", a),
        _l(t),
        l.head.appendChild(t));
  }
  function pu(l) {
    return '[src="' + ct(l) + '"]';
  }
  function re(l) {
    return "script[async]" + l;
  }
  function t1(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ct(a.href) + '"]');
          if (u) return ((t.instance = u), _l(u), u);
          var e = q({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            _l(u),
            Hl(u, "style", e),
            Nn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = _u(a.href);
          var n = l.querySelector(he(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), _l(n), n);
          ((u = l1(a)),
            (e = rt.get(e)) && lc(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            _l(n));
          var i = n;
          return (
            (i._p = new Promise(function (f, c) {
              ((i.onload = f), (i.onerror = c));
            })),
            Hl(n, "link", u),
            (t.state.loading |= 4),
            Nn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = pu(a.src)),
            (e = l.querySelector(re(n)))
              ? ((t.instance = e), _l(e), e)
              : ((u = a),
                (e = rt.get(n)) && ((u = q({}, a)), tc(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                _l(e),
                Hl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Nn(u, a.precedence, l));
    return t.instance;
  }
  function Nn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        i = 0;
      i < u.length;
      i++
    ) {
      var f = u[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function lc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function tc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Hn = null;
  function a1(l, t, a) {
    if (Hn === null) {
      var u = new Map(),
        e = (Hn = new Map());
      e.set(a, u);
    } else ((e = Hn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Cu] ||
          n[Ml] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = u.get(i);
        f ? f.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function u1(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Km(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function e1(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Jm(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = _u(u.href),
          n = t.querySelector(he(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Cn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            _l(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = l1(u)),
          (e = rt.get(e)) && lc(u, e),
          (n = n.createElement("link")),
          _l(n));
        var i = n;
        ((i._p = new Promise(function (f, c) {
          ((i.onload = f), (i.onerror = c));
        })),
          Hl(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Cn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var ac = 0;
  function wm(l, t) {
    return (
      l.stylesheets && l.count === 0 && jn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && jn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && ac === 0 && (ac = 62500 * Mm());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && jn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > ac ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function Cn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) jn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Rn = null;
  function jn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Rn = new Map()),
        t.forEach(Wm, l),
        (Rn = null),
        Cn.call(l)));
  }
  function Wm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Rn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Rn.set(l, a));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (u = i));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (i = e.getAttribute("data-precedence")),
        (n = a.get(i) || u),
        n === u && a.set(null, e),
        a.set(i, e),
        this.count++,
        (u = Cn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ge = {
    $$typeof: Cl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function $m(l, t, a, u, e, n, i, f, c) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = kn(0)),
      (this.hiddenUpdates = kn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map()));
  }
  function n1(l, t, a, u, e, n, i, f, c, y, S, T) {
    return (
      (l = new $m(l, t, a, i, c, y, S, T, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = lt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = ji()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Yi(n),
      l
    );
  }
  function i1(l) {
    return l ? ((l = uu), l) : uu;
  }
  function f1(l, t, a, u, e, n) {
    ((e = i1(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ea(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = na(l, u, t)),
      a !== null && (wl(a, l, t), $u(a, l, t)));
  }
  function c1(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function uc(l, t) {
    (c1(l, t), (l = l.alternate) && c1(l, t));
  }
  function s1(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Da(l, 67108864);
      (t !== null && wl(t, l, 67108864), uc(l, 67108864));
    }
  }
  function o1(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = Fn(t);
      var a = Da(l, t);
      (a !== null && wl(a, l, t), uc(l, t));
    }
  }
  var qn = !0;
  function km(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      ((p.p = 2), ec(l, t, a, u));
    } finally {
      ((p.p = n), (b.T = e));
    }
  }
  function Fm(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      ((p.p = 8), ec(l, t, a, u));
    } finally {
      ((p.p = n), (b.T = e));
    }
  }
  function ec(l, t, a, u) {
    if (qn) {
      var e = nc(u);
      if (e === null) (Vf(l, t, u, Bn, a), m1(l, u));
      else if (Pm(e, l, t, a, u)) u.stopPropagation();
      else if ((m1(l, u), t & 4 && -1 < Im.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ja(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Aa(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var c = 1 << (31 - Il(i));
                      ((f.entanglements[1] |= c), (i &= ~c));
                    }
                    (Mt(n), (I & 6) === 0 && ((Sn = kl() + 500), de(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Da(n, 2)), f !== null && wl(f, n, 2), zn(), uc(n, 2));
            }
          if (((n = nc(u)), n === null && Vf(l, t, u, Bn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Vf(l, t, u, null, a);
    }
  }
  function nc(l) {
    return ((l = ii(l)), ic(l));
  }
  var Bn = null;
  function ic(l) {
    if (((Bn = null), (l = Ka(l)), l !== null)) {
      var t = x(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = tl(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = ol(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Bn = l), null);
  }
  function d1(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (x1()) {
          case Sc:
            return 2;
          case bc:
            return 8;
          case Oe:
          case Y1:
            return 32;
          case zc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fc = !1,
    ra = null,
    ga = null,
    Sa = null,
    Se = new Map(),
    be = new Map(),
    ba = [],
    Im =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function m1(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Se.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        be.delete(t.pointerId);
    }
  }
  function ze(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ja(t)), t !== null && s1(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Pm(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((ra = ze(ra, l, t, a, u, e)), !0);
      case "dragenter":
        return ((ga = ze(ga, l, t, a, u, e)), !0);
      case "mouseover":
        return ((Sa = ze(Sa, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (Se.set(n, ze(Se.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          be.set(n, ze(be.get(n) || null, l, t, a, u, e)),
          !0
        );
    }
    return !1;
  }
  function v1(l) {
    var t = Ka(l.target);
    if (t !== null) {
      var a = x(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = tl(a)), t !== null)) {
            ((l.blockedOn = t),
              pc(l.priority, function () {
                o1(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = ol(a)), t !== null)) {
            ((l.blockedOn = t),
              pc(l.priority, function () {
                o1(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function xn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = nc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((ni = u), a.target.dispatchEvent(u), (ni = null));
      } else return ((t = Ja(a)), t !== null && s1(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function y1(l, t, a) {
    xn(l) && a.delete(t);
  }
  function lv() {
    ((fc = !1),
      ra !== null && xn(ra) && (ra = null),
      ga !== null && xn(ga) && (ga = null),
      Sa !== null && xn(Sa) && (Sa = null),
      Se.forEach(y1),
      be.forEach(y1));
  }
  function Yn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      fc ||
        ((fc = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, lv)));
  }
  var Gn = null;
  function h1(l) {
    Gn !== l &&
      ((Gn = l),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Gn === l && (Gn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (ic(u || a) === null) continue;
            break;
          }
          var n = Ja(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ef(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function Mu(l) {
    function t(c) {
      return Yn(c, l);
    }
    (ra !== null && Yn(ra, l),
      ga !== null && Yn(ga, l),
      Sa !== null && Yn(Sa, l),
      Se.forEach(t),
      be.forEach(t));
    for (var a = 0; a < ba.length; a++) {
      var u = ba[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ba.length && ((a = ba[0]), a.blockedOn === null); )
      (v1(a), a.blockedOn === null && ba.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          i = e[Ql] || null;
        if (typeof n == "function") i || h1(a);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (i = n[Ql] || null))) f = i.formAction;
            else if (ic(e) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (a[u + 1] = f) : (a.splice(u, 3), (u -= 3)),
            h1(a));
        }
      }
  }
  function r1() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (e = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function cc(l) {
    this._internalRoot = l;
  }
  ((Xn.prototype.render = cc.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var a = t.current,
        u = nt();
      f1(a, u, l, t, null, null);
    }),
    (Xn.prototype.unmount = cc.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (f1(l.current, 2, null, l, null, null), zn(), (t[Va] = null));
        }
      }));
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = _c();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
      (ba.splice(a, 0, l), a === 0 && v1(l));
    }
  };
  var g1 = O.version;
  if (g1 !== "19.2.4") throw Error(d(527, g1, "19.2.4"));
  p.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(d(188))
        : ((l = Object.keys(l).join(",")), Error(d(268, l)));
    return (
      (l = A(t)),
      (l = l !== null ? P(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var tv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber)
      try {
        ((Uu = Qn.inject(tv)), (Fl = Qn));
      } catch {}
  }
  return (
    (Ee.createRoot = function (l, t) {
      if (!R(l)) throw Error(d(299));
      var a = !1,
        u = "",
        e = As,
        n = Os,
        i = _s;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = n1(l, 1, !1, null, null, a, u, null, e, n, i, r1)),
        (l[Va] = t.current),
        Lf(l),
        new cc(t)
      );
    }),
    (Ee.hydrateRoot = function (l, t, a) {
      if (!R(l)) throw Error(d(299));
      var u = !1,
        e = "",
        n = As,
        i = Os,
        f = _s,
        c = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.formState !== void 0 && (c = a.formState)),
        (t = n1(l, 1, !0, t, a ?? null, u, e, c, n, i, f, r1)),
        (t.context = i1(null)),
        (a = t.current),
        (u = nt()),
        (u = Fn(u)),
        (e = ea(u)),
        (e.callback = null),
        na(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Hu(t, a),
        Mt(t),
        (l[Va] = t.current),
        Lf(l),
        new Xn(t)
      );
    }),
    (Ee.version = "19.2.4"),
    Ee
  );
}
var M1;
function dv() {
  if (M1) return oc.exports;
  M1 = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (O) {
        console.error(O);
      }
  }
  return (r(), (oc.exports = ov()), oc.exports);
}
var mv = dv();
const vv = H1(mv);
var Qa = hc();
const Za = H1(Qa);
var C1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  D1 = Za.createContext && Za.createContext(C1),
  yv = ["attr", "size", "title"];
function hv(r, O) {
  if (r == null) return {};
  var _ = rv(r, O),
    d,
    R;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(r);
    for (R = 0; R < x.length; R++)
      ((d = x[R]),
        !(O.indexOf(d) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, d) &&
          (_[d] = r[d]));
  }
  return _;
}
function rv(r, O) {
  if (r == null) return {};
  var _ = {};
  for (var d in r)
    if (Object.prototype.hasOwnProperty.call(r, d)) {
      if (O.indexOf(d) >= 0) continue;
      _[d] = r[d];
    }
  return _;
}
function Zn() {
  return (
    (Zn = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var O = 1; O < arguments.length; O++) {
            var _ = arguments[O];
            for (var d in _)
              Object.prototype.hasOwnProperty.call(_, d) && (r[d] = _[d]);
          }
          return r;
        }),
    Zn.apply(this, arguments)
  );
}
function U1(r, O) {
  var _ = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(r);
    (O &&
      (d = d.filter(function (R) {
        return Object.getOwnPropertyDescriptor(r, R).enumerable;
      })),
      _.push.apply(_, d));
  }
  return _;
}
function Ln(r) {
  for (var O = 1; O < arguments.length; O++) {
    var _ = arguments[O] != null ? arguments[O] : {};
    O % 2
      ? U1(Object(_), !0).forEach(function (d) {
          gv(r, d, _[d]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(_))
        : U1(Object(_)).forEach(function (d) {
            Object.defineProperty(r, d, Object.getOwnPropertyDescriptor(_, d));
          });
  }
  return r;
}
function gv(r, O, _) {
  return (
    (O = Sv(O)),
    O in r
      ? Object.defineProperty(r, O, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[O] = _),
    r
  );
}
function Sv(r) {
  var O = bv(r, "string");
  return typeof O == "symbol" ? O : O + "";
}
function bv(r, O) {
  if (typeof r != "object" || !r) return r;
  var _ = r[Symbol.toPrimitive];
  if (_ !== void 0) {
    var d = _.call(r, O);
    if (typeof d != "object") return d;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (O === "string" ? String : Number)(r);
}
function R1(r) {
  return (
    r &&
    r.map((O, _) =>
      Za.createElement(O.tag, Ln({ key: _ }, O.attr), R1(O.child)),
    )
  );
}
function Dt(r) {
  return (O) =>
    Za.createElement(zv, Zn({ attr: Ln({}, r.attr) }, O), R1(r.child));
}
function zv(r) {
  var O = (_) => {
    var { attr: d, size: R, title: x } = r,
      tl = hv(r, yv),
      ol = R || _.size || "1em",
      H;
    return (
      _.className && (H = _.className),
      r.className && (H = (H ? H + " " : "") + r.className),
      Za.createElement(
        "svg",
        Zn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          _.attr,
          d,
          tl,
          {
            className: H,
            style: Ln(Ln({ color: r.color || _.color }, _.style), r.style),
            height: ol,
            width: ol,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        x && Za.createElement("title", null, x),
        r.children,
      )
    );
  };
  return D1 !== void 0
    ? Za.createElement(D1.Consumer, null, (_) => O(_))
    : O(C1);
}
function Tv(r) {
  return Dt({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
        },
        child: [],
      },
    ],
  })(r);
}
function Ev(r) {
  return Dt({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59",
        },
        child: [],
      },
    ],
  })(r);
}
function Av(r) {
  return Dt({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
        },
        child: [],
      },
    ],
  })(r);
}
function Ov(r) {
  return Dt({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125",
        },
        child: [],
      },
    ],
  })(r);
}
function _v(r) {
  return Dt({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0",
        },
        child: [],
      },
    ],
  })(r);
}
function pv(r) {
  return Dt({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18 18 6M6 6l12 12",
        },
        child: [],
      },
    ],
  })(r);
}
function Mv(r) {
  return Dt({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" },
        child: [],
      },
      { tag: "path", attr: { d: "M12.5 5.5l4 4" }, child: [] },
      { tag: "path", attr: { d: "M4.5 13.5l4 4" }, child: [] },
      { tag: "path", attr: { d: "M21 15v4h-8l4 -4z" }, child: [] },
    ],
  })(r);
}
function Dv(r) {
  return Dt({
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200Z",
        },
        child: [],
      },
    ],
  })(r);
}
const Uv = () => {
  const [r, O] = Qa.useState("select"),
    _ = [
      {
        id: "select",
        icon: Ev,
        label: "Select Mode",
        purpose: "Click any element to comment on it",
        isClickable: !0,
        action: () => O("select"),
      },
      {
        id: "comment",
        icon: Tv,
        label: "Add Comment",
        purpose: "Open comment input manually",
        isClickable: !0,
        action: () => O("comment"),
      },
      {
        id: "toggle",
        icon: Av,
        label: "Toggle Comments Visibility",
        purpose: "Show / Hide all comments",
        isClickable: !0,
        action: () => O("toggle"),
      },
      {
        id: "exit",
        icon: pv,
        label: "Exit Comment Mode",
        purpose: "Turn off overlay",
        isClickable: !0,
        action: () => O(null),
      },
      {
        id: "highlight",
        icon: Mv,
        label: "Highlight Tool",
        purpose: "Highlight an area",
        isClickable: !1,
      },
      {
        id: "draw",
        icon: Ov,
        label: "Draw Tool",
        purpose: "Freehand drawing",
        isClickable: !1,
      },
      {
        id: "rectangle",
        icon: Dv,
        label: "Rectangle Tool",
        purpose: "Mark specific UI section",
        isClickable: !1,
      },
      {
        id: "clear",
        icon: _v,
        label: "Clear Annotations",
        purpose: "Remove drawings",
        isClickable: !1,
      },
    ];
  return $.jsx("div", {
    className: "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[999999]",
    children: $.jsx("div", {
      className:
        "bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-300 backdrop-blur-sm",
      children: $.jsx("div", {
        className: "px-2 py-1 flex items-center gap-0.5",
        children: _.map((d) => {
          const R = d.icon,
            x = r === d.id;
          return $.jsxs(
            "div",
            {
              className: "relative group",
              children: [
                $.jsxs("button", {
                  onClick: d.isClickable ? d.action : void 0,
                  disabled: !d.isClickable,
                  className: `
                                        p-2.5 rounded-md transition-all duration-150 relative cursor-pointer
                                        ${d.isClickable ? (x ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100") : "text-gray-300 cursor-not-allowed"}
                                    `,
                  children: [
                    $.jsx(R, { className: "w-4.5 h-4.5", strokeWidth: 1.5 }),
                    x &&
                      $.jsx("span", {
                        className:
                          "absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full",
                      }),
                  ],
                }),
                $.jsxs("div", {
                  className:
                    "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap shadow-lg z-50",
                  children: [
                    $.jsx("div", {
                      className: "font-medium",
                      children: d.label,
                    }),
                    $.jsx("div", {
                      className: "text-gray-400 mt-0.5 text-[10px]",
                      children: d.purpose,
                    }),
                    !d.isClickable &&
                      $.jsxs("div", {
                        className:
                          "text-[10px] text-blue-300 font-medium mt-1 flex items-center gap-1",
                        children: [
                          $.jsx("span", { children: "⚡" }),
                          " Coming soon",
                        ],
                      }),
                    $.jsx("div", {
                      className:
                        "absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900",
                    }),
                  ],
                }),
              ],
            },
            d.id,
          );
        }),
      }),
    }),
  });
};
function N1(r) {
  return Dt({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" },
        child: [],
      },
      { tag: "circle", attr: { cx: "12", cy: "7", r: "4" }, child: [] },
    ],
  })(r);
}
function Nv(r) {
  return Dt({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "18", y1: "6", x2: "6", y2: "18" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "6", y1: "6", x2: "18", y2: "18" },
        child: [],
      },
    ],
  })(r);
}
const Hv = ({ onSubmit: r, isOpen: O }) => {
  const [_, d] = Qa.useState(""),
    [R, x] = Qa.useState(!1);
  Qa.useEffect(() => {
    if (O) {
      const ol = setTimeout(() => x(!0), 0);
      return () => clearTimeout(ol);
    } else {
      const ol = setTimeout(() => x(!1), 300);
      return () => clearTimeout(ol);
    }
  }, [O]);
  const tl = (ol) => {
    (ol.preventDefault(), _.trim() && r(_.trim()));
  };
  return R
    ? $.jsx("div", {
        className: `fixed inset-0 flex items-center justify-center z-[999999] transition-all duration-300 ${O ? "bg-black/40 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"}`,
        children: $.jsxs("div", {
          className: `bg-white rounded-2xl shadow-2xl w-96 transform transition-all duration-300 ${O ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
          children: [
            $.jsxs("div", {
              className: "relative flex items-center justify-between p-6 pb-4",
              children: [
                $.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    $.jsx("div", {
                      className: "p-2 bg-blue-50 rounded-xl",
                      children: $.jsx(N1, {
                        className: "w-5 h-5 text-blue-600",
                      }),
                    }),
                    $.jsx("h2", {
                      className: "text-xl font-semibold text-gray-900",
                      children: "Welcome!",
                    }),
                  ],
                }),
                $.jsx("button", {
                  onClick: () => r(""),
                  className:
                    "p-1.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed",
                  children: $.jsx(Nv, { className: "w-5 h-5 text-gray-500" }),
                }),
              ],
            }),
            $.jsxs("div", {
              className: "px-6 pb-6",
              children: [
                $.jsx("p", {
                  className: "text-sm text-gray-600 mb-4",
                  children: "Please enter your name to continue with comments",
                }),
                $.jsxs("form", {
                  onSubmit: tl,
                  children: [
                    $.jsxs("div", {
                      className: "relative",
                      children: [
                        $.jsx(N1, {
                          className:
                            "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4",
                        }),
                        $.jsx("input", {
                          type: "text",
                          value: _,
                          onChange: (ol) => d(ol.target.value),
                          placeholder: "Your name",
                          className:
                            "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all",
                          autoFocus: !0,
                        }),
                      ],
                    }),
                    $.jsxs("div", {
                      className: "flex gap-3 mt-6",
                      children: [
                        $.jsx("button", {
                          type: "button",
                          onClick: () => r(""),
                          className:
                            "flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed",
                          children: "Cancel",
                        }),
                        $.jsx("button", {
                          type: "submit",
                          disabled: !_.trim(),
                          className: `flex-1 px-4 py-2.5 text-sm font-medium text-white rounded-xl transition-all cursor-pointer disabled:cursor-not-allowed ${_.trim() ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30" : "bg-blue-400 cursor-not-allowed"}`,
                          children: "Continue",
                        }),
                      ],
                    }),
                  ],
                }),
                $.jsx("p", {
                  className: "text-xs text-gray-500 text-center mt-4",
                  children: "Your name will be saved for future comments",
                }),
              ],
            }),
          ],
        }),
      })
    : null;
};
function Cv({ projectId: r }) {
  console.log(r);
  const [O, _] = Qa.useState(() => localStorage.getItem("commentUser")),
    [d, R] = Qa.useState(!O),
    x = (tl) => {
      (tl && (localStorage.setItem("commentUser", tl), _(tl)), R(!1));
    };
  return O ? $.jsx(Uv, {}) : $.jsx(Hv, { onSubmit: x, isOpen: d });
}
window.initCommentTool = function ({ projectId: r }) {
  const O = document.getElementById("comment-tool-root");
  O && vv.createRoot(O).render($.jsx(Cv, { projectId: r }));
};
