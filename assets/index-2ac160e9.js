function Xc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Es = { exports: {} },
  hl = {},
  Cs = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = Symbol.for("react.element"),
  Jc = Symbol.for("react.portal"),
  Zc = Symbol.for("react.fragment"),
  qc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  nf = Symbol.for("react.forward_ref"),
  rf = Symbol.for("react.suspense"),
  lf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  lu = Symbol.iterator;
function uf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ns = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _s = Object.assign,
  js = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = js),
    (this.updater = n || Ns);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ps() {}
Ps.prototype = dn.prototype;
function io(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = js),
    (this.updater = n || Ns);
}
var oo = (io.prototype = new Ps());
oo.constructor = io;
_s(oo, dn.prototype);
oo.isPureReactComponent = !0;
var iu = Array.isArray,
  Ls = Object.prototype.hasOwnProperty,
  uo = { current: null },
  Rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ls.call(t, r) && !Rs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: rr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: uo.current,
  };
}
function sf(e, t) {
  return {
    $$typeof: rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function so(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rr;
}
function af(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ou = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? af("" + e.key)
    : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case rr:
          case Jc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ml(o, 0) : r),
      iu(l)
        ? ((n = ""),
          e != null && (n = e.replace(ou, "$&/") + "/"),
          Pr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (so(l) &&
            (l = sf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ou, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), iu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Ml(i, u);
      o += Pr(i, t, n, s, l);
    }
  else if (((s = uf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Ml(i, u++)), (o += Pr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function cf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Lr = { transition: null },
  ff = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: uo,
  };
z.Children = {
  map: fr,
  forEach: function (e, t, n) {
    fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!so(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = dn;
z.Fragment = Zc;
z.Profiler = bc;
z.PureComponent = io;
z.StrictMode = qc;
z.Suspense = rf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _s({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = uo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ls.call(t, s) &&
        !Rs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: rr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Ts;
z.createFactory = function (e) {
  var t = Ts.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
z.isValidElement = so;
z.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: cf };
};
z.memo = function (e, t) {
  return { $$typeof: lf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
z.useId = function () {
  return ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ae.current.useRef(e);
};
z.useState = function (e) {
  return ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ae.current.useTransition();
};
z.version = "18.2.0";
Cs.exports = z;
var k = Cs.exports;
const df = Gc(k),
  pf = Xc({ __proto__: null, default: df }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf = k,
  mf = Symbol.for("react.element"),
  vf = Symbol.for("react.fragment"),
  gf = Object.prototype.hasOwnProperty,
  yf = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) gf.call(t, r) && !wf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: mf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: yf.current,
  };
}
hl.Fragment = vf;
hl.jsx = zs;
hl.jsxs = zs;
Es.exports = hl;
var d = Es.exports,
  ai = {},
  Os = { exports: {} },
  xe = {},
  Ds = { exports: {} },
  Is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, R) {
    var T = N.length;
    N.push(R);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        Z = N[Q];
      if (0 < l(Z, R)) (N[Q] = R), (N[T] = Z), (T = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var R = N[0],
      T = N.pop();
    if (T !== R) {
      N[0] = T;
      e: for (var Q = 0, Z = N.length, ar = Z >>> 1; Q < ar; ) {
        var xt = 2 * (Q + 1) - 1,
          Il = N[xt],
          St = xt + 1,
          cr = N[St];
        if (0 > l(Il, T))
          St < Z && 0 > l(cr, Il)
            ? ((N[Q] = cr), (N[St] = T), (Q = St))
            : ((N[Q] = Il), (N[xt] = T), (Q = xt));
        else if (St < Z && 0 > l(cr, T)) (N[Q] = cr), (N[St] = T), (Q = St);
        else break e;
      }
    }
    return R;
  }
  function l(N, R) {
    var T = N.sortIndex - R.sortIndex;
    return T !== 0 ? T : N.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    v = null,
    m = 3,
    S = !1,
    g = !1,
    y = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= N)
        r(a), (R.sortIndex = R.expirationTime), t(s, R);
      else break;
      R = n(a);
    }
  }
  function w(N) {
    if (((y = !1), p(N), !g))
      if (n(s) !== null) (g = !0), Ol(E);
      else {
        var R = n(a);
        R !== null && Dl(w, R.startTime - N);
      }
  }
  function E(N, R) {
    (g = !1), y && ((y = !1), f(L), (L = -1)), (S = !0);
    var T = m;
    try {
      for (
        p(R), v = n(s);
        v !== null && (!(v.expirationTime > R) || (N && !Pe()));

      ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var Z = Q(v.expirationTime <= R);
          (R = e.unstable_now()),
            typeof Z == "function" ? (v.callback = Z) : v === n(s) && r(s),
            p(R);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var ar = !0;
      else {
        var xt = n(a);
        xt !== null && Dl(w, xt.startTime - R), (ar = !1);
      }
      return ar;
    } finally {
      (v = null), (m = T), (S = !1);
    }
  }
  var j = !1,
    P = null,
    L = -1,
    H = 5,
    O = -1;
  function Pe() {
    return !(e.unstable_now() - O < H);
  }
  function vn() {
    if (P !== null) {
      var N = e.unstable_now();
      O = N;
      var R = !0;
      try {
        R = P(!0, N);
      } finally {
        R ? gn() : ((j = !1), (P = null));
      }
    } else j = !1;
  }
  var gn;
  if (typeof c == "function")
    gn = function () {
      c(vn);
    };
  else if (typeof MessageChannel < "u") {
    var ru = new MessageChannel(),
      Yc = ru.port2;
    (ru.port1.onmessage = vn),
      (gn = function () {
        Yc.postMessage(null);
      });
  } else
    gn = function () {
      _(vn, 0);
    };
  function Ol(N) {
    (P = N), j || ((j = !0), gn());
  }
  function Dl(N, R) {
    L = _(function () {
      N(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), Ol(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var T = m;
      m = R;
      try {
        return N();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var T = m;
      m = N;
      try {
        return R();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (N, R, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (N = {
          id: h++,
          callback: R,
          priorityLevel: N,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > Q
          ? ((N.sortIndex = T),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (y ? (f(L), (L = -1)) : (y = !0), Dl(w, T - Q)))
          : ((N.sortIndex = Z), t(s, N), g || S || ((g = !0), Ol(E))),
        N
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (N) {
      var R = m;
      return function () {
        var T = m;
        m = R;
        try {
          return N.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(Is);
Ds.exports = Is;
var xf = Ds.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ms = k,
  we = xf;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fs = new Set(),
  $n = {};
function It(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Fs.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ci = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uu = {},
  su = {};
function kf(e) {
  return ci.call(su, e)
    ? !0
    : ci.call(uu, e)
    ? !1
    : Sf.test(e)
    ? (su[e] = !0)
    : ((uu[e] = !0), !1);
}
function Ef(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cf(e, t, n, r) {
  if (t === null || typeof t > "u" || Ef(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ao = /[\-:]([a-z])/g;
function co(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ao, co);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ao, co);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ao, co);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cf(t, n, l, r) && (n = null),
    r || l === null
      ? kf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  po = Symbol.for("react.strict_mode"),
  fi = Symbol.for("react.profiler"),
  Us = Symbol.for("react.provider"),
  $s = Symbol.for("react.context"),
  ho = Symbol.for("react.forward_ref"),
  di = Symbol.for("react.suspense"),
  pi = Symbol.for("react.suspense_list"),
  mo = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  Bs = Symbol.for("react.offscreen"),
  au = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (au && e[au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Fl;
function _n(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = (t && t[1]) || "";
    }
  return (
    `
` +
    Fl +
    e
  );
}
var Ul = !1;
function $l(e, t) {
  if (!e || Ul) return "";
  Ul = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Ul = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Nf(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case $t:
      return "Portal";
    case fi:
      return "Profiler";
    case po:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $s:
        return (e.displayName || "Context") + ".Consumer";
      case Us:
        return (e._context.displayName || "Context") + ".Provider";
      case ho:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mo:
        return (
          (t = e.displayName || null), t !== null ? t : hi(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return hi(e(t));
        } catch {}
    }
  return null;
}
function _f(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hi(t);
    case 8:
      return t === po ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function As(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jf(e) {
  var t = As(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = jf(e));
}
function Vs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = As(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ws(e, t) {
  (t = t.checked), t != null && fo(e, "checked", t, !1);
}
function vi(e, t) {
  Ws(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? gi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gi(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function du(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (jn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Hs(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hr,
  Ks = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        hr = hr || document.createElement("div"),
          hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  Pf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function Ys(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ys(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Lf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xi(e, t) {
  if (t) {
    if (Lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Si(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var ki = null;
function vo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ei = null,
  qt = null,
  bt = null;
function hu(e) {
  if ((e = or(e))) {
    if (typeof Ei != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = wl(t)), Ei(e.stateNode, e.type, t));
  }
}
function Gs(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function Js() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
  }
}
function Zs(e, t) {
  return e(t);
}
function qs() {}
var Bl = !1;
function bs(e, t, n) {
  if (Bl) return e(t, n);
  Bl = !0;
  try {
    return Zs(e, t, n);
  } finally {
    (Bl = !1), (qt !== null || bt !== null) && (qs(), Js());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Ci = !1;
if (Ke)
  try {
    var wn = {};
    Object.defineProperty(wn, "passive", {
      get: function () {
        Ci = !0;
      },
    }),
      window.addEventListener("test", wn, wn),
      window.removeEventListener("test", wn, wn);
  } catch {
    Ci = !1;
  }
function Rf(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Tn = !1,
  Vr = null,
  Wr = !1,
  Ni = null,
  Tf = {
    onError: function (e) {
      (Tn = !0), (Vr = e);
    },
  };
function zf(e, t, n, r, l, i, o, u, s) {
  (Tn = !1), (Vr = null), Rf.apply(Tf, arguments);
}
function Of(e, t, n, r, l, i, o, u, s) {
  if ((zf.apply(this, arguments), Tn)) {
    if (Tn) {
      var a = Vr;
      (Tn = !1), (Vr = null);
    } else throw Error(x(198));
    Wr || ((Wr = !0), (Ni = a));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ea(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mu(e) {
  if (Mt(e) !== e) throw Error(x(188));
}
function Df(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return mu(l), e;
        if (i === r) return mu(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function ta(e) {
  return (e = Df(e)), e !== null ? na(e) : null;
}
function na(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = na(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ra = we.unstable_scheduleCallback,
  vu = we.unstable_cancelCallback,
  If = we.unstable_shouldYield,
  Mf = we.unstable_requestPaint,
  K = we.unstable_now,
  Ff = we.unstable_getCurrentPriorityLevel,
  go = we.unstable_ImmediatePriority,
  la = we.unstable_UserBlockingPriority,
  Hr = we.unstable_NormalPriority,
  Uf = we.unstable_LowPriority,
  ia = we.unstable_IdlePriority,
  ml = null,
  $e = null;
function $f(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Vf,
  Bf = Math.log,
  Af = Math.LN2;
function Vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bf(e) / Af) | 0)) | 0;
}
var mr = 64,
  vr = 4194304;
function Pn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Pn(u)) : ((i &= o), i !== 0 && (r = Pn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Pn(o)) : i !== 0 && (r = Pn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Wf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Wf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function _i(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oa() {
  var e = mr;
  return (mr <<= 1), !(mr & 4194240) && (mr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Qf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function yo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function ua(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sa,
  wo,
  aa,
  ca,
  fa,
  ji = !1,
  gr = [],
  it = null,
  ot = null,
  ut = null,
  Vn = new Map(),
  Wn = new Map(),
  et = [],
  Kf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function xn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && wo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = xn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = xn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = xn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Vn.set(i, xn(Vn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Wn.set(i, xn(Wn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function da(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ea(n)), t !== null)) {
          (e.blockedOn = t),
            fa(e.priority, function () {
              aa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ki = r), n.target.dispatchEvent(r), (ki = null);
    } else return (t = or(n)), t !== null && wo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  Rr(e) && n.delete(t);
}
function Xf() {
  (ji = !1),
    it !== null && Rr(it) && (it = null),
    ot !== null && Rr(ot) && (ot = null),
    ut !== null && Rr(ut) && (ut = null),
    Vn.forEach(yu),
    Wn.forEach(yu);
}
function Sn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ji ||
      ((ji = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Xf)));
}
function Hn(e) {
  function t(l) {
    return Sn(l, e);
  }
  if (0 < gr.length) {
    Sn(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && Sn(it, e),
      ot !== null && Sn(ot, e),
      ut !== null && Sn(ut, e),
      Vn.forEach(t),
      Wn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    da(n), n.blockedOn === null && et.shift();
}
var en = Je.ReactCurrentBatchConfig,
  Kr = !0;
function Gf(e, t, n, r) {
  var l = I,
    i = en.transition;
  en.transition = null;
  try {
    (I = 1), xo(e, t, n, r);
  } finally {
    (I = l), (en.transition = i);
  }
}
function Jf(e, t, n, r) {
  var l = I,
    i = en.transition;
  en.transition = null;
  try {
    (I = 4), xo(e, t, n, r);
  } finally {
    (I = l), (en.transition = i);
  }
}
function xo(e, t, n, r) {
  if (Kr) {
    var l = Pi(e, t, n, r);
    if (l === null) Zl(e, t, r, Yr, n), gu(e, r);
    else if (Yf(l, e, t, n, r)) r.stopPropagation();
    else if ((gu(e, r), t & 4 && -1 < Kf.indexOf(e))) {
      for (; l !== null; ) {
        var i = or(l);
        if (
          (i !== null && sa(i),
          (i = Pi(e, t, n, r)),
          i === null && Zl(e, t, r, Yr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var Yr = null;
function Pi(e, t, n, r) {
  if (((Yr = null), (e = vo(r)), (e = Ct(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ea(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yr = e), null;
}
function pa(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ff()) {
        case go:
          return 1;
        case la:
          return 4;
        case Hr:
        case Uf:
          return 16;
        case ia:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  So = null,
  Tr = null;
function ha() {
  if (Tr) return Tr;
  var e,
    t = So,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yr() {
  return !0;
}
function wu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yr
        : wu),
      (this.isPropagationStopped = wu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yr));
      },
      persist: function () {},
      isPersistent: yr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ko = Se(pn),
  ir = V({}, pn, { view: 0, detail: 0 }),
  Zf = Se(ir),
  Vl,
  Wl,
  kn,
  vl = V({}, ir, {
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
    getModifierState: Eo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === "mousemove"
              ? ((Vl = e.screenX - kn.screenX), (Wl = e.screenY - kn.screenY))
              : (Wl = Vl = 0),
            (kn = e)),
          Vl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wl;
    },
  }),
  xu = Se(vl),
  qf = V({}, vl, { dataTransfer: 0 }),
  bf = Se(qf),
  ed = V({}, ir, { relatedTarget: 0 }),
  Hl = Se(ed),
  td = V({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nd = Se(td),
  rd = V({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ld = Se(rd),
  id = V({}, pn, { data: 0 }),
  Su = Se(id),
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
  ud = {
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
  sd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ad(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sd[e]) ? !!t[e] : !1;
}
function Eo() {
  return ad;
}
var cd = V({}, ir, {
    key: function (e) {
      if (e.key) {
        var t = od[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ud[e.keyCode] || "Unidentified"
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
    getModifierState: Eo,
    charCode: function (e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fd = Se(cd),
  dd = V({}, vl, {
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
  ku = Se(dd),
  pd = V({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eo,
  }),
  hd = Se(pd),
  md = V({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vd = Se(md),
  gd = V({}, vl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yd = Se(gd),
  wd = [9, 13, 27, 32],
  Co = Ke && "CompositionEvent" in window,
  zn = null;
Ke && "documentMode" in document && (zn = document.documentMode);
var xd = Ke && "TextEvent" in window && !zn,
  ma = Ke && (!Co || (zn && 8 < zn && 11 >= zn)),
  Eu = String.fromCharCode(32),
  Cu = !1;
function va(e, t) {
  switch (e) {
    case "keyup":
      return wd.indexOf(t.keyCode) !== -1;
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
function ga(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Sd(e, t) {
  switch (e) {
    case "compositionend":
      return ga(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cu = !0), Eu);
    case "textInput":
      return (e = t.data), e === Eu && Cu ? null : e;
    default:
      return null;
  }
}
function kd(e, t) {
  if (At)
    return e === "compositionend" || (!Co && va(e, t))
      ? ((e = ha()), (Tr = So = nt = null), (At = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ma && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ed = {
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
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ed[e.type] : t === "textarea";
}
function ya(e, t, n, r) {
  Gs(r),
    (t = Xr(t, "onChange")),
    0 < t.length &&
      ((n = new ko("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var On = null,
  Qn = null;
function Cd(e) {
  La(e, 0);
}
function gl(e) {
  var t = Ht(e);
  if (Vs(t)) return e;
}
function Nd(e, t) {
  if (e === "change") return t;
}
var wa = !1;
if (Ke) {
  var Ql;
  if (Ke) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"),
        (Kl = typeof _u.oninput == "function");
    }
    Ql = Kl;
  } else Ql = !1;
  wa = Ql && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  On && (On.detachEvent("onpropertychange", xa), (Qn = On = null));
}
function xa(e) {
  if (e.propertyName === "value" && gl(Qn)) {
    var t = [];
    ya(t, Qn, e, vo(e)), bs(Cd, t);
  }
}
function _d(e, t, n) {
  e === "focusin"
    ? (ju(), (On = t), (Qn = n), On.attachEvent("onpropertychange", xa))
    : e === "focusout" && ju();
}
function jd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Qn);
}
function Pd(e, t) {
  if (e === "click") return gl(t);
}
function Ld(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function Rd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : Rd;
function Kn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function Pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lu(e, t) {
  var n = Pu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pu(n);
  }
}
function Sa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ka() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function No(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Td(e) {
  var t = ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && No(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Lu(n, i));
        var o = Lu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zd = Ke && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  Li = null,
  Dn = null,
  Ri = !1;
function Ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ri ||
    Vt == null ||
    Vt !== Ar(r) ||
    ((r = Vt),
    "selectionStart" in r && No(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dn && Kn(Dn, r)) ||
      ((Dn = r),
      (r = Xr(Li, "onSelect")),
      0 < r.length &&
        ((t = new ko("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: wr("Animation", "AnimationEnd"),
    animationiteration: wr("Animation", "AnimationIteration"),
    animationstart: wr("Animation", "AnimationStart"),
    transitionend: wr("Transition", "TransitionEnd"),
  },
  Yl = {},
  Ea = {};
Ke &&
  ((Ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function yl(e) {
  if (Yl[e]) return Yl[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ea) return (Yl[e] = t[n]);
  return e;
}
var Ca = yl("animationend"),
  Na = yl("animationiteration"),
  _a = yl("animationstart"),
  ja = yl("transitionend"),
  Pa = new Map(),
  Tu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(e, t) {
  Pa.set(e, t), It(t, [e]);
}
for (var Xl = 0; Xl < Tu.length; Xl++) {
  var Gl = Tu[Xl],
    Od = Gl.toLowerCase(),
    Dd = Gl[0].toUpperCase() + Gl.slice(1);
  vt(Od, "on" + Dd);
}
vt(Ca, "onAnimationEnd");
vt(Na, "onAnimationIteration");
vt(_a, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(ja, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Of(r, t, void 0, e), (e.currentTarget = null);
}
function La(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          zu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          zu(l, u, a), (i = s);
        }
    }
  }
  if (Wr) throw ((e = Ni), (Wr = !1), (Ni = null), e);
}
function F(e, t) {
  var n = t[Ii];
  n === void 0 && (n = t[Ii] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ra(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ra(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Yn(e) {
  if (!e[xr]) {
    (e[xr] = !0),
      Fs.forEach(function (n) {
        n !== "selectionchange" && (Id.has(n) || Jl(n, !1, e), Jl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || ((t[xr] = !0), Jl("selectionchange", !1, t));
  }
}
function Ra(e, t, n, r) {
  switch (pa(t)) {
    case 1:
      var l = Gf;
      break;
    case 4:
      l = Jf;
      break;
    default:
      l = xo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ct(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  bs(function () {
    var a = i,
      h = vo(n),
      v = [];
    e: {
      var m = Pa.get(e);
      if (m !== void 0) {
        var S = ko,
          g = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = fd;
            break;
          case "focusin":
            (g = "focus"), (S = Hl);
            break;
          case "focusout":
            (g = "blur"), (S = Hl);
            break;
          case "beforeblur":
          case "afterblur":
            S = Hl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = bf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = hd;
            break;
          case Ca:
          case Na:
          case _a:
            S = nd;
            break;
          case ja:
            S = vd;
            break;
          case "scroll":
            S = Zf;
            break;
          case "wheel":
            S = yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ld;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ku;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === "scroll",
          f = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              f !== null && ((w = An(c, f)), w != null && y.push(Xn(c, w, p)))),
            _)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((m = new S(m, g, null, n, h)), v.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ki &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ct(g) || g[Ye]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((g = n.relatedTarget || n.toElement),
              (S = a),
              (g = g ? Ct(g) : null),
              g !== null &&
                ((_ = Mt(g)), g !== _ || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((S = null), (g = a)),
          S !== g)
        ) {
          if (
            ((y = xu),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ku),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (_ = S == null ? m : Ht(S)),
            (p = g == null ? m : Ht(g)),
            (m = new y(w, c + "leave", S, n, h)),
            (m.target = _),
            (m.relatedTarget = p),
            (w = null),
            Ct(h) === a &&
              ((y = new y(f, c + "enter", g, n, h)),
              (y.target = p),
              (y.relatedTarget = _),
              (w = y)),
            (_ = w),
            S && g)
          )
            t: {
              for (y = S, f = g, c = 0, p = y; p; p = Ut(p)) c++;
              for (p = 0, w = f; w; w = Ut(w)) p++;
              for (; 0 < c - p; ) (y = Ut(y)), c--;
              for (; 0 < p - c; ) (f = Ut(f)), p--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = Ut(y)), (f = Ut(f));
              }
              y = null;
            }
          else y = null;
          S !== null && Ou(v, m, S, y, !1),
            g !== null && _ !== null && Ou(v, _, g, y, !0);
        }
      }
      e: {
        if (
          ((m = a ? Ht(a) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var E = Nd;
        else if (Nu(m))
          if (wa) E = Ld;
          else {
            E = jd;
            var j = _d;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Pd);
        if (E && (E = E(e, a))) {
          ya(v, E, n, h);
          break e;
        }
        j && j(e, m, a),
          e === "focusout" &&
            (j = m._wrapperState) &&
            j.controlled &&
            m.type === "number" &&
            gi(m, "number", m.value);
      }
      switch (((j = a ? Ht(a) : window), e)) {
        case "focusin":
          (Nu(j) || j.contentEditable === "true") &&
            ((Vt = j), (Li = a), (Dn = null));
          break;
        case "focusout":
          Dn = Li = Vt = null;
          break;
        case "mousedown":
          Ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ri = !1), Ru(v, n, h);
          break;
        case "selectionchange":
          if (zd) break;
        case "keydown":
        case "keyup":
          Ru(v, n, h);
      }
      var P;
      if (Co)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        At
          ? va(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ma &&
          n.locale !== "ko" &&
          (At || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && At && (P = ha())
            : ((nt = h),
              (So = "value" in nt ? nt.value : nt.textContent),
              (At = !0))),
        (j = Xr(a, L)),
        0 < j.length &&
          ((L = new Su(L, e, null, n, h)),
          v.push({ event: L, listeners: j }),
          P ? (L.data = P) : ((P = ga(n)), P !== null && (L.data = P)))),
        (P = xd ? Sd(e, n) : kd(e, n)) &&
          ((a = Xr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Su("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: a }),
            (h.data = P)));
    }
    La(v, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = An(e, n)),
      i != null && r.unshift(Xn(e, i, l)),
      (i = An(e, t)),
      i != null && r.push(Xn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = An(n, i)), s != null && o.unshift(Xn(n, s, u)))
        : l || ((s = An(n, i)), s != null && o.push(Xn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Md = /\r\n?/g,
  Fd = /\u0000|\uFFFD/g;
function Du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Md,
      `
`
    )
    .replace(Fd, "");
}
function Sr(e, t, n) {
  if (((t = Du(t)), Du(e) !== t && n)) throw Error(x(425));
}
function Gr() {}
var Ti = null,
  zi = null;
function Oi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Di = typeof setTimeout == "function" ? setTimeout : void 0,
  Ud = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Iu = typeof Promise == "function" ? Promise : void 0,
  $d =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Iu < "u"
      ? function (e) {
          return Iu.resolve(null).then(e).catch(Bd);
        }
      : Di;
function Bd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + hn,
  Gn = "__reactProps$" + hn,
  Ye = "__reactContainer$" + hn,
  Ii = "__reactEvents$" + hn,
  Ad = "__reactListeners$" + hn,
  Vd = "__reactHandles$" + hn;
function Ct(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function or(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function wl(e) {
  return e[Gn] || null;
}
var Mi = [],
  Qt = -1;
function gt(e) {
  return { current: e };
}
function U(e) {
  0 > Qt || ((e.current = Mi[Qt]), (Mi[Qt] = null), Qt--);
}
function M(e, t) {
  Qt++, (Mi[Qt] = e.current), (e.current = t);
}
var mt = {},
  oe = gt(mt),
  pe = gt(!1),
  Lt = mt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Jr() {
  U(pe), U(oe);
}
function Fu(e, t, n) {
  if (oe.current !== mt) throw Error(x(168));
  M(oe, t), M(pe, n);
}
function Ta(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, _f(e) || "Unknown", l));
  return V({}, n, r);
}
function Zr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Lt = oe.current),
    M(oe, e),
    M(pe, pe.current),
    !0
  );
}
function Uu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Ta(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(oe),
      M(oe, e))
    : U(pe),
    M(pe, n);
}
var Ve = null,
  xl = !1,
  bl = !1;
function za(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Wd(e) {
  (xl = !0), za(e);
}
function yt() {
  if (!bl && Ve !== null) {
    bl = !0;
    var e = 0,
      t = I;
    try {
      var n = Ve;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (xl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), ra(go, yt), l);
    } finally {
      (I = t), (bl = !1);
    }
  }
  return null;
}
var Kt = [],
  Yt = 0,
  qr = null,
  br = 0,
  ke = [],
  Ee = 0,
  Rt = null,
  We = 1,
  He = "";
function kt(e, t) {
  (Kt[Yt++] = br), (Kt[Yt++] = qr), (qr = e), (br = t);
}
function Oa(e, t, n) {
  (ke[Ee++] = We), (ke[Ee++] = He), (ke[Ee++] = Rt), (Rt = e);
  var r = We;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (We = (1 << i) | (n << l) | r), (He = e);
}
function _o(e) {
  e.return !== null && (kt(e, 1), Oa(e, 1, 0));
}
function jo(e) {
  for (; e === qr; )
    (qr = Kt[--Yt]), (Kt[Yt] = null), (br = Kt[--Yt]), (Kt[Yt] = null);
  for (; e === Rt; )
    (Rt = ke[--Ee]),
      (ke[Ee] = null),
      (He = ke[--Ee]),
      (ke[Ee] = null),
      (We = ke[--Ee]),
      (ke[Ee] = null);
}
var ye = null,
  ge = null,
  $ = !1,
  ze = null;
function Da(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ui(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!$u(e, t)) {
        if (Fi(e)) throw Error(x(418));
        t = st(n.nextSibling);
        var r = ye;
        t && $u(e, t)
          ? Da(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (Fi(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function Bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function kr(e) {
  if (e !== ye) return !1;
  if (!$) return Bu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Fi(e)) throw (Ia(), Error(x(418)));
    for (; t; ) Da(e, t), (t = st(t.nextSibling));
  }
  if ((Bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Ia() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function on() {
  (ge = ye = null), ($ = !1);
}
function Po(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var Hd = Je.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var el = gt(null),
  tl = null,
  Xt = null,
  Lo = null;
function Ro() {
  Lo = Xt = tl = null;
}
function To(e) {
  var t = el.current;
  U(el), (e._currentValue = t);
}
function $i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tn(e, t) {
  (tl = e),
    (Lo = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (Lo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (tl === null) throw Error(x(308));
      (Xt = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var Nt = null;
function zo(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function Ma(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), zo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Oo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), zo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Or(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n);
  }
}
function Au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            y = u;
          switch (((m = t), (S = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                v = g.call(S, v, m);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (m = typeof g == "function" ? g.call(S, v, m) : g),
                m == null)
              )
                break e;
              v = V({}, v, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = S), (s = v)) : (h = h.next = S),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = v),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function Vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Ua = new Ms.Component().refs;
function Bi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (De(t, e, l, r), Or(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (De(t, e, l, r), Or(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (De(t, e, r, n), Or(t, e, r));
  },
};
function Wu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kn(n, r) || !Kn(l, i)
      : !0
  );
}
function $a(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = he(t) ? Lt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ln(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Hu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function Ai(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ua), Oo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = he(t) ? Lt : oe.current), (l.context = ln(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Bi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Sl.enqueueReplaceState(l, l.state, null),
      nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Ua && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Er(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Qu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ba(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, w) {
    return c === null || c.tag !== 6
      ? ((c = oi(p, f.mode, w)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function s(f, c, p, w) {
    var E = p.type;
    return E === Bt
      ? h(f, c, p.props.children, w, p.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            Qu(E) === c.type))
      ? ((w = l(c, p.props)), (w.ref = En(f, c, p)), (w.return = f), w)
      : ((w = $r(p.type, p.key, p.props, null, f.mode, w)),
        (w.ref = En(f, c, p)),
        (w.return = f),
        w);
  }
  function a(f, c, p, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ui(p, f.mode, w)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, w, E) {
    return c === null || c.tag !== 7
      ? ((c = Pt(p, f.mode, w, E)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function v(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = oi("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case dr:
          return (
            (p = $r(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = En(f, null, c)),
            (p.return = f),
            p
          );
        case $t:
          return (c = ui(c, f.mode, p)), (c.return = f), c;
        case qe:
          var w = c._init;
          return v(f, w(c._payload), p);
      }
      if (jn(c) || yn(c))
        return (c = Pt(c, f.mode, p, null)), (c.return = f), c;
      Er(f, c);
    }
    return null;
  }
  function m(f, c, p, w) {
    var E = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : u(f, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case dr:
          return p.key === E ? s(f, c, p, w) : null;
        case $t:
          return p.key === E ? a(f, c, p, w) : null;
        case qe:
          return (E = p._init), m(f, c, E(p._payload), w);
      }
      if (jn(p) || yn(p)) return E !== null ? null : h(f, c, p, w, null);
      Er(f, p);
    }
    return null;
  }
  function S(f, c, p, w, E) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(p) || null), u(c, f, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case dr:
          return (f = f.get(w.key === null ? p : w.key) || null), s(c, f, w, E);
        case $t:
          return (f = f.get(w.key === null ? p : w.key) || null), a(c, f, w, E);
        case qe:
          var j = w._init;
          return S(f, c, p, j(w._payload), E);
      }
      if (jn(w) || yn(w)) return (f = f.get(p) || null), h(c, f, w, E, null);
      Er(c, w);
    }
    return null;
  }
  function g(f, c, p, w) {
    for (
      var E = null, j = null, P = c, L = (c = 0), H = null;
      P !== null && L < p.length;
      L++
    ) {
      P.index > L ? ((H = P), (P = null)) : (H = P.sibling);
      var O = m(f, P, p[L], w);
      if (O === null) {
        P === null && (P = H);
        break;
      }
      e && P && O.alternate === null && t(f, P),
        (c = i(O, c, L)),
        j === null ? (E = O) : (j.sibling = O),
        (j = O),
        (P = H);
    }
    if (L === p.length) return n(f, P), $ && kt(f, L), E;
    if (P === null) {
      for (; L < p.length; L++)
        (P = v(f, p[L], w)),
          P !== null &&
            ((c = i(P, c, L)), j === null ? (E = P) : (j.sibling = P), (j = P));
      return $ && kt(f, L), E;
    }
    for (P = r(f, P); L < p.length; L++)
      (H = S(P, f, L, p[L], w)),
        H !== null &&
          (e && H.alternate !== null && P.delete(H.key === null ? L : H.key),
          (c = i(H, c, L)),
          j === null ? (E = H) : (j.sibling = H),
          (j = H));
    return (
      e &&
        P.forEach(function (Pe) {
          return t(f, Pe);
        }),
      $ && kt(f, L),
      E
    );
  }
  function y(f, c, p, w) {
    var E = yn(p);
    if (typeof E != "function") throw Error(x(150));
    if (((p = E.call(p)), p == null)) throw Error(x(151));
    for (
      var j = (E = null), P = c, L = (c = 0), H = null, O = p.next();
      P !== null && !O.done;
      L++, O = p.next()
    ) {
      P.index > L ? ((H = P), (P = null)) : (H = P.sibling);
      var Pe = m(f, P, O.value, w);
      if (Pe === null) {
        P === null && (P = H);
        break;
      }
      e && P && Pe.alternate === null && t(f, P),
        (c = i(Pe, c, L)),
        j === null ? (E = Pe) : (j.sibling = Pe),
        (j = Pe),
        (P = H);
    }
    if (O.done) return n(f, P), $ && kt(f, L), E;
    if (P === null) {
      for (; !O.done; L++, O = p.next())
        (O = v(f, O.value, w)),
          O !== null &&
            ((c = i(O, c, L)), j === null ? (E = O) : (j.sibling = O), (j = O));
      return $ && kt(f, L), E;
    }
    for (P = r(f, P); !O.done; L++, O = p.next())
      (O = S(P, f, L, O.value, w)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? L : O.key),
          (c = i(O, c, L)),
          j === null ? (E = O) : (j.sibling = O),
          (j = O));
    return (
      e &&
        P.forEach(function (vn) {
          return t(f, vn);
        }),
      $ && kt(f, L),
      E
    );
  }
  function _(f, c, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Bt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case dr:
          e: {
            for (var E = p.key, j = c; j !== null; ) {
              if (j.key === E) {
                if (((E = p.type), E === Bt)) {
                  if (j.tag === 7) {
                    n(f, j.sibling),
                      (c = l(j, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  j.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Qu(E) === j.type)
                ) {
                  n(f, j.sibling),
                    (c = l(j, p.props)),
                    (c.ref = En(f, j, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            p.type === Bt
              ? ((c = Pt(p.props.children, f.mode, w, p.key)),
                (c.return = f),
                (f = c))
              : ((w = $r(p.type, p.key, p.props, null, f.mode, w)),
                (w.ref = En(f, c, p)),
                (w.return = f),
                (f = w));
          }
          return o(f);
        case $t:
          e: {
            for (j = p.key; c !== null; ) {
              if (c.key === j)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ui(p, f.mode, w)), (c.return = f), (f = c);
          }
          return o(f);
        case qe:
          return (j = p._init), _(f, c, j(p._payload), w);
      }
      if (jn(p)) return g(f, c, p, w);
      if (yn(p)) return y(f, c, p, w);
      Er(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = oi(p, f.mode, w)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return _;
}
var un = Ba(!0),
  Aa = Ba(!1),
  ur = {},
  Be = gt(ur),
  Jn = gt(ur),
  Zn = gt(ur);
function _t(e) {
  if (e === ur) throw Error(x(174));
  return e;
}
function Do(e, t) {
  switch ((M(Zn, t), M(Jn, e), M(Be, ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wi(t, e));
  }
  U(Be), M(Be, t);
}
function sn() {
  U(Be), U(Jn), U(Zn);
}
function Va(e) {
  _t(Zn.current);
  var t = _t(Be.current),
    n = wi(t, e.type);
  t !== n && (M(Jn, e), M(Be, n));
}
function Io(e) {
  Jn.current === e && (U(Be), U(Jn));
}
var B = gt(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ei = [];
function Mo() {
  for (var e = 0; e < ei.length; e++)
    ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var Dr = Je.ReactCurrentDispatcher,
  ti = Je.ReactCurrentBatchConfig,
  Tt = 0,
  A = null,
  G = null,
  q = null,
  ll = !1,
  In = !1,
  qn = 0,
  Qd = 0;
function re() {
  throw Error(x(321));
}
function Fo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Uo(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? Gd : Jd),
    (e = n(r, l)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (qn = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Dr.current = Zd),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Dr.current = il),
    (t = G !== null && G.next !== null),
    (Tt = 0),
    (q = G = A = null),
    (ll = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function $o() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function je() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(x(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((Tt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var v = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = v), (o = r)) : (s = s.next = v),
          (A.lanes |= h),
          (zt |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Ie(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ie(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Wa() {}
function Ha(e, t) {
  var n = A,
    r = je(),
    l = t(),
    i = !Ie(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Bo(Ya.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, Ka.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(x(349));
    Tt & 30 || Qa(n, t, l);
  }
  return l;
}
function Qa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ka(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xa(t) && Ga(e);
}
function Ya(e, t, n) {
  return n(function () {
    Xa(t) && Ga(e);
  });
}
function Xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function Ga(e) {
  var t = Xe(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Ku(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ja() {
  return je().memoizedState;
}
function Ir(e, t, n, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function kl(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Fo(r, o.deps))) {
      l.memoizedState = er(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = er(1 | t, n, i, r));
}
function Yu(e, t) {
  return Ir(8390656, 8, e, t);
}
function Bo(e, t) {
  return kl(2048, 8, e, t);
}
function Za(e, t) {
  return kl(4, 2, e, t);
}
function qa(e, t) {
  return kl(4, 4, e, t);
}
function ba(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ec(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), kl(4, 4, ba.bind(null, t, e), n)
  );
}
function Ao() {}
function tc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rc(e, t, n) {
  return Tt & 21
    ? (Ie(n, t) || ((n = oa()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Kd(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (ti.transition = r);
  }
}
function lc() {
  return je().memoizedState;
}
function Yd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ic(e))
  )
    oc(t, n);
  else if (((n = Ma(e, t, n, r)), n !== null)) {
    var l = se();
    De(n, e, r, l), uc(n, t, r);
  }
}
function Xd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ic(e)) oc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), zo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ma(e, t, l, r)),
      n !== null && ((l = se()), De(n, e, r, l), uc(n, t, r));
  }
}
function ic(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function oc(e, t) {
  In = ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n);
  }
}
var il = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ir(4194308, 4, ba.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ir(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ir(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ku,
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Ku(!1),
        t = e[0];
      return (e = Kd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if ($) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(x(349));
        Tt & 30 || Qa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Yu(Ya.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        er(9, Ka.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jd = {
    readContext: _e,
    useCallback: tc,
    useContext: _e,
    useEffect: Bo,
    useImperativeHandle: ec,
    useInsertionEffect: Za,
    useLayoutEffect: qa,
    useMemo: nc,
    useReducer: ni,
    useRef: Ja,
    useState: function () {
      return ni(bn);
    },
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      var t = je();
      return rc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ni(bn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Wa,
    useSyncExternalStore: Ha,
    useId: lc,
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: _e,
    useCallback: tc,
    useContext: _e,
    useEffect: Bo,
    useImperativeHandle: ec,
    useInsertionEffect: Za,
    useLayoutEffect: qa,
    useMemo: nc,
    useReducer: ri,
    useRef: Ja,
    useState: function () {
      return ri(bn);
    },
    useDebugValue: Ao,
    useDeferredValue: function (e) {
      var t = je();
      return G === null ? (t.memoizedState = e) : rc(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ri(bn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Wa,
    useSyncExternalStore: Ha,
    useId: lc,
    unstable_isNewReconciler: !1,
  };
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qd = typeof WeakMap == "function" ? WeakMap : Map;
function sc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ul || ((ul = !0), (qi = r)), Vi(e, t);
    }),
    n
  );
}
function ac(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Vi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Vi(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = dp.bind(null, e, t, n)), t.then(e, e));
}
function Gu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ju(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bd = Je.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Aa(t, null, n, r) : un(t, e.child, n, r);
}
function Zu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    tn(t, l),
    (r = Uo(e, t, n, r, i, l)),
    (n = $o()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && _o(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function qu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Go(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), cc(e, t, i, r, l))
      : ((e = $r(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Wi(e, t, n, r, l);
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Jt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Jt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        M(Jt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Jt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function dc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Wi(e, t, n, r, l) {
  var i = he(n) ? Lt : oe.current;
  return (
    (i = ln(t, i)),
    tn(t, l),
    (n = Uo(e, t, n, r, i, l)),
    (r = $o()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && _o(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function bu(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Zr(t);
  } else i = !1;
  if ((tn(t, l), t.stateNode === null))
    Mr(e, t), $a(t, n, r), Ai(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = _e(a))
      : ((a = he(n) ? Lt : oe.current), (a = ln(t, a)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Hu(t, o, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      nl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof h == "function" && (Bi(t, n, h, r), (s = t.memoizedState)),
          (u = be || Wu(t, n, u, r, m, s, a))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Fa(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Re(t.type, u)),
      (o.props = a),
      (v = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = he(n) ? Lt : oe.current), (s = ln(t, s)));
    var S = n.getDerivedStateFromProps;
    (h =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || m !== s) && Hu(t, o, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      nl(t, r, o, l);
    var g = t.memoizedState;
    u !== v || m !== g || pe.current || be
      ? (typeof S == "function" && (Bi(t, n, S, r), (g = t.memoizedState)),
        (a = be || Wu(t, n, a, r, m, g, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hi(e, t, n, r, i, l);
}
function Hi(e, t, n, r, l, i) {
  dc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Uu(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (bd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Uu(t, n, !0),
    t.child
  );
}
function pc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fu(e, t.context, !1),
    Do(e, t.containerInfo);
}
function es(e, t, n, r, l) {
  return on(), Po(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(B, l & 1),
    e === null)
  )
    return (
      Ui(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Nl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ki(n)),
              (t.memoizedState = Qi),
              e)
            : Vo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ep(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ki(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Vo(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && Po(r),
    un(t, e.child, null, n),
    (e = Vo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ep(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = li(Error(x(422)))), Cr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && un(t, e.child, null, o),
        (t.child.memoizedState = Ki(o)),
        (t.memoizedState = Qi),
        i);
  if (!(t.mode & 1)) return Cr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = li(i, r, void 0)), Cr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), De(r, e, l, -1));
    }
    return Xo(), (r = li(Error(x(421)))), Cr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = st(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (ze = null),
      e !== null &&
        ((ke[Ee++] = We),
        (ke[Ee++] = He),
        (ke[Ee++] = Rt),
        (We = e.id),
        (He = e.overflow),
        (Rt = t)),
      (t = Vo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $i(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function mc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ts(e, n, t);
        else if (e.tag === 19) ts(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ii(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && rl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ii(t, !0, n, null, i);
        break;
      case "together":
        ii(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Mr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      pc(t), on();
      break;
    case 5:
      Va(t);
      break;
    case 1:
      he(t.type) && Zr(t);
      break;
    case 4:
      Do(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(el, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hc(e, t, n)
          : (M(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      M(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fc(e, t, n);
  }
  return Ge(e, t, n);
}
var vc, Yi, gc, yc;
vc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yi = function () {};
gc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = mi(e, l)), (r = mi(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = yi(e, l)), (r = yi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gr);
    }
    xi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            ($n.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
yc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function np(e, t, n) {
  var r = t.pendingProps;
  switch ((jo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Jr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sn(),
        U(pe),
        U(oe),
        Mo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (kr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (to(ze), (ze = null)))),
        Yi(e, t),
        le(t),
        null
      );
    case 5:
      Io(t);
      var l = _t(Zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return le(t), null;
        }
        if (((e = _t(Be.current)), kr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Gn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) F(Ln[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              cu(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              du(r, i), F("invalid", r);
          }
          xi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : $n.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              pr(r), fu(r, i, !0);
              break;
            case "textarea":
              pr(r), pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Gn] = r),
            vc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Si(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) F(Ln[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                cu(e, r), (l = mi(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                du(e, r), (l = yi(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            xi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Xs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ks(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Bn(e, s)
                    : typeof s == "number" && Bn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    ($n.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && fo(e, i, s, o));
              }
            switch (n) {
              case "input":
                pr(e), fu(e, r, !1);
                break;
              case "textarea":
                pr(e), pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) yc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = _t(Zn.current)), _t(Be.current), kr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Sr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          Ia(), on(), (t.flags |= 98560), (i = !1);
        else if (((i = kr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[Ue] = t;
          } else
            on(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else ze !== null && (to(ze), (ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : Xo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        sn(), Yi(e, t), e === null && Yn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return To(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Jr(), le(t), null;
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Cn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = rl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Cn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > cn &&
            ((t.flags |= 128), (r = !0), Cn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          M(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Yo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function rp(e, t) {
  switch ((jo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sn(),
        U(pe),
        U(oe),
        Mo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Io(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        on();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return sn(), null;
    case 10:
      return To(t.type._context), null;
    case 22:
    case 23:
      return Yo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ie = !1,
  lp = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Xi(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var ns = !1;
function ip(e, t) {
  if (((Ti = Kr), (e = ka()), No(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (s = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (S = v.firstChild) !== null;

            )
              (m = v), (v = S);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (S = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = S;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, Kr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    _ = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Re(t.type, y),
                      _
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (w) {
          W(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (g = ns), (ns = !1), g;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Xi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Gi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function wc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Gn], delete t[Ii], delete t[Ad], delete t[Vd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function xc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || xc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), (e = e.sibling);
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), (e = e.sibling);
}
var ee = null,
  Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Sc(e, t, n), (n = n.sibling);
}
function Sc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Gt(n, t);
    case 6:
      var r = ee,
        l = Te;
      (ee = null),
        Ze(e, t, n),
        (ee = r),
        (Te = l),
        ee !== null &&
          (Te
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Te
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ql(e.parentNode, n)
              : e.nodeType === 1 && ql(e, n),
            Hn(e))
          : ql(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Te),
        (ee = n.stateNode.containerInfo),
        (Te = !0),
        Ze(e, t, n),
        (ee = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Xi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Ze(e, t, n), (ie = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lp()),
      t.forEach(function (r) {
        var l = hp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Te = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(x(160));
        Sc(i, o, l), (ee = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kc(t, e), (t = t.sibling);
}
function kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Me(e), r & 4)) {
        try {
          Mn(3, e, e.return), El(3, e);
        } catch (y) {
          W(e, e.return, y);
        }
        try {
          Mn(5, e, e.return);
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 1:
      Le(t, e), Me(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Me(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (y) {
          W(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Ws(l, i),
              Si(u, o);
            var a = Si(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                v = s[o + 1];
              h === "style"
                ? Xs(l, v)
                : h === "dangerouslySetInnerHTML"
                ? Ks(l, v)
                : h === "children"
                ? Bn(l, v)
                : fo(l, h, v, a);
            }
            switch (u) {
              case "input":
                vi(l, i);
                break;
              case "textarea":
                Hs(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Zt(l, !!i.multiple, S, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zt(l, !!i.multiple, i.defaultValue, !0)
                      : Zt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Gn] = i;
          } catch (y) {
            W(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (y) {
          W(e, e.return, y);
        }
      break;
    case 4:
      Le(t, e), Me(e);
      break;
    case 13:
      Le(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Qo = K())),
        r & 4 && ls(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Le(t, e), (ie = a)) : Le(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (C = e, h = e.child; h !== null; ) {
            for (v = C = h; C !== null; ) {
              switch (((m = C), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, m, m.return);
                  break;
                case 1:
                  Gt(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      W(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Gt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    os(v);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (C = S)) : os(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (l = v.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (s = v.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ys("display", o)));
              } catch (y) {
                W(e, e.return, y);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = a ? "" : v.memoizedProps;
              } catch (y) {
                W(e, e.return, y);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Me(e), r & 4 && ls(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (xc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), (r.flags &= -33));
          var i = rs(e);
          Zi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = rs(e);
          Ji(e, u, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  (C = e), Ec(e);
}
function Ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Nr;
        var a = ie;
        if (((Nr = o), (ie = s) && !a))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? us(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : us(l);
        for (; i !== null; ) (C = i), Ec(i), (i = i.sibling);
        (C = l), (Nr = u), (ie = a);
      }
      is(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : is(e);
  }
}
function is(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || El(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Vu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Hn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ie || (t.flags & 512 && Gi(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function os(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function us(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            Gi(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Gi(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var up = Math.ceil,
  ol = Je.ReactCurrentDispatcher,
  Wo = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  D = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Jt = gt(0),
  J = 0,
  tr = null,
  zt = 0,
  Cl = 0,
  Ho = 0,
  Fn = null,
  fe = null,
  Qo = 0,
  cn = 1 / 0,
  Ae = null,
  ul = !1,
  qi = null,
  ct = null,
  _r = !1,
  rt = null,
  sl = 0,
  Un = 0,
  bi = null,
  Fr = -1,
  Ur = 0;
function se() {
  return D & 6 ? K() : Fr !== -1 ? Fr : (Fr = K());
}
function ft(e) {
  return e.mode & 1
    ? D & 2 && te !== 0
      ? te & -te
      : Hd.transition !== null
      ? (Ur === 0 && (Ur = oa()), Ur)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pa(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (bi = null), Error(x(185)));
  lr(e, n, r),
    (!(D & 2) || e !== b) &&
      (e === b && (!(D & 2) && (Cl |= n), J === 4 && tt(e, te)),
      me(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((cn = K() + 500), xl && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Hf(e, t);
  var r = Qr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vu(n), t === 1))
      e.tag === 0 ? Wd(ss.bind(null, e)) : za(ss.bind(null, e)),
        $d(function () {
          !(D & 6) && yt();
        }),
        (n = null);
    else {
      switch (ua(r)) {
        case 1:
          n = go;
          break;
        case 4:
          n = la;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = ia;
          break;
        default:
          n = Hr;
      }
      n = Tc(n, Cc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cc(e, t) {
  if (((Fr = -1), (Ur = 0), D & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = _c();
    (b !== e || te !== t) && ((Ae = null), (cn = K() + 500), jt(e, t));
    do
      try {
        cp();
        break;
      } catch (u) {
        Nc(e, u);
      }
    while (1);
    Ro(),
      (ol.current = i),
      (D = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = _i(e)), l !== 0 && ((r = l), (t = eo(e, l)))), t === 1)
    )
      throw ((n = tr), jt(e, 0), tt(e, r), me(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sp(l) &&
          ((t = al(e, r)),
          t === 2 && ((i = _i(e)), i !== 0 && ((r = i), (t = eo(e, i)))),
          t === 1))
      )
        throw ((n = tr), jt(e, 0), tt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Et(e, fe, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Qo + 500 - K()), 10 < t))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Di(Et.bind(null, e, fe, Ae), t);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Di(Et.bind(null, e, fe, Ae), r);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 5:
          Et(e, fe, Ae);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Cc.bind(null, e) : null;
}
function eo(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && to(t)),
    e
  );
}
function to(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function sp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Ho,
      t &= ~Cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ss(e) {
  if (D & 6) throw Error(x(327));
  nn();
  var t = Qr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && ((t = r), (n = eo(e, r)));
  }
  if (n === 1) throw ((n = tr), jt(e, 0), tt(e, t), me(e, K()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, Ae),
    me(e, K()),
    null
  );
}
function Ko(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((cn = K() + 500), xl && yt());
  }
}
function Ot(e) {
  rt !== null && rt.tag === 0 && !(D & 6) && nn();
  var t = D;
  D |= 1;
  var n = Ne.transition,
    r = I;
  try {
    if (((Ne.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Ne.transition = n), (D = t), !(D & 6) && yt();
  }
}
function Yo() {
  (ve = Jt.current), U(Jt);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ud(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((jo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jr();
          break;
        case 3:
          sn(), U(pe), U(oe), Mo();
          break;
        case 5:
          Io(r);
          break;
        case 4:
          sn();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          To(r.type._context);
          break;
        case 22:
        case 23:
          Yo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = dt(e.current, null)),
    (te = ve = t),
    (J = 0),
    (tr = null),
    (Ho = Cl = zt = 0),
    (fe = Fn = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function Nc(e, t) {
  do {
    var n = Y;
    try {
      if ((Ro(), (Dr.current = il), ll)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ll = !1;
      }
      if (
        ((Tt = 0),
        (q = G = A = null),
        (In = !1),
        (qn = 0),
        (Wo.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (tr = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var S = Gu(o);
          if (S !== null) {
            (S.flags &= -257),
              Ju(S, o, u, i, t),
              S.mode & 1 && Xu(i, a, t),
              (t = S),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(i, a, t), Xo();
              break e;
            }
            s = Error(x(426));
          }
        } else if ($ && u.mode & 1) {
          var _ = Gu(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Ju(_, o, u, i, t),
              Po(an(s, u));
            break e;
          }
        }
        (i = s = an(s, u)),
          J !== 4 && (J = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = sc(i, s, t);
              Au(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ct === null || !ct.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = ac(i, u, t);
                Au(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Pc(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function _c() {
  var e = ol.current;
  return (ol.current = il), e === null ? il : e;
}
function Xo() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(zt & 268435455) && !(Cl & 268435455)) || tt(b, te);
}
function al(e, t) {
  var n = D;
  D |= 2;
  var r = _c();
  (b !== e || te !== t) && ((Ae = null), jt(e, t));
  do
    try {
      ap();
      break;
    } catch (l) {
      Nc(e, l);
    }
  while (1);
  if ((Ro(), (D = n), (ol.current = r), Y !== null)) throw Error(x(261));
  return (b = null), (te = 0), J;
}
function ap() {
  for (; Y !== null; ) jc(Y);
}
function cp() {
  for (; Y !== null && !If(); ) jc(Y);
}
function jc(e) {
  var t = Rc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pc(e) : (Y = t),
    (Wo.current = null);
}
function Pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (Y = null);
        return;
      }
    } else if (((n = np(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Et(e, t, n) {
  var r = I,
    l = Ne.transition;
  try {
    (Ne.transition = null), (I = 1), fp(e, t, n, r);
  } finally {
    (Ne.transition = l), (I = r);
  }
  return null;
}
function fp(e, t, n, r) {
  do nn();
  while (rt !== null);
  if (D & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Qf(e, i),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _r ||
      ((_r = !0),
      Tc(Hr, function () {
        return nn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = I;
    I = 1;
    var u = D;
    (D |= 4),
      (Wo.current = null),
      ip(e, n),
      kc(n, e),
      Td(zi),
      (Kr = !!Ti),
      (zi = Ti = null),
      (e.current = n),
      op(n),
      Mf(),
      (D = u),
      (I = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (_r && ((_r = !1), (rt = e), (sl = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    $f(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ul) throw ((ul = !1), (e = qi), (qi = null), e);
  return (
    sl & 1 && e.tag !== 0 && nn(),
    (i = e.pendingLanes),
    i & 1 ? (e === bi ? Un++ : ((Un = 0), (bi = e))) : (Un = 0),
    yt(),
    null
  );
}
function nn() {
  if (rt !== null) {
    var e = ua(sl),
      t = Ne.transition,
      n = I;
    try {
      if (((Ne.transition = null), (I = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (sl = 0), D & 6)) throw Error(x(331));
        var l = D;
        for (D |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, i);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (C = v);
                  else
                    for (; C !== null; ) {
                      h = C;
                      var m = h.sibling,
                        S = h.return;
                      if ((wc(h), h === a)) {
                        C = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (C = m);
                        break;
                      }
                      C = S;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (C = p);
          else
            e: for (o = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      El(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (C = w);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((D = l), yt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Ne.transition = t);
    }
  }
  return !1;
}
function as(e, t, n) {
  (t = an(n, t)),
    (t = sc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (lr(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) as(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        as(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = an(n, e)),
            (e = ac(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (lr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > K() - Qo)
        ? jt(e, 0)
        : (Ho |= n)),
    me(e, t);
}
function Lc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (lr(e, t, n), me(e, n));
}
function pp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lc(e, n);
}
function hp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Lc(e, n);
}
var Rc;
Rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), tp(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Oa(t, br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Mr(e, t), (e = t.pendingProps);
      var l = ln(t, oe.current);
      tn(t, n), (l = Uo(null, t, r, e, l, n));
      var i = $o();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), Zr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Oo(t),
            (l.updater = Sl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ai(t, r, e, n),
            (t = Hi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && _o(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Mr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Wi(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = Zu(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Wi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        bu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((pc(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Fa(e, t),
          nl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = an(Error(x(423)), t)), (t = es(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(x(424)), t)), (t = es(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                ze = null,
                n = Aa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((on(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Va(t),
        e === null && Ui(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Oi(r, l) ? (o = null) : i !== null && Oi(r, i) && (t.flags |= 32),
        dc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ui(t), null;
    case 13:
      return hc(e, t, n);
    case 4:
      return (
        Do(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Zu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          M(el, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      $i(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  $i(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        qu(e, t, r, l, n)
      );
    case 15:
      return cc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Mr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Zr(t)) : (e = !1),
        tn(t, n),
        $a(t, r, l),
        Ai(t, r, l, n),
        Hi(null, t, r, !0, e, n)
      );
    case 19:
      return mc(e, t, n);
    case 22:
      return fc(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Tc(e, t) {
  return ra(e, t);
}
function mp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new mp(e, t, n, r);
}
function Go(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return Go(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ho)) return 11;
    if (e === mo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $r(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Go(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Bt:
        return Pt(n.children, l, i, t);
      case po:
        (o = 8), (l |= 8);
        break;
      case fi:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = fi), (e.lanes = i), e
        );
      case di:
        return (e = Ce(13, n, t, l)), (e.elementType = di), (e.lanes = i), e;
      case pi:
        return (e = Ce(19, n, t, l)), (e.elementType = pi), (e.lanes = i), e;
      case Bs:
        return Nl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Us:
              o = 10;
              break e;
            case $s:
              o = 9;
              break e;
            case ho:
              o = 11;
              break e;
            case mo:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Bs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oi(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function ui(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Jo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new gp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oo(i),
    e
  );
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Ta(e, n, t);
  }
  return t;
}
function Oc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Jo(n, r, !0, e, l, i, o, u, s)),
    (e.context = zc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    lr(e, l, r),
    me(e, r),
    e
  );
}
function _l(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l);
  return (
    (n = zc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (De(e, l, o, i), Or(e, l, o)),
    o
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zo(e, t) {
  cs(e, t), (e = e.alternate) && cs(e, t);
}
function wp() {
  return null;
}
var Dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qo(e) {
  this._internalRoot = e;
}
jl.prototype.render = qo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  _l(e, t, null, null);
};
jl.prototype.unmount = qo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      _l(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ca();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && da(e);
  }
};
function bo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fs() {}
function xp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = cl(o);
        i.call(a);
      };
    }
    var o = Oc(t, r, e, 0, null, !1, !1, "", fs);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Yn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = cl(s);
      u.call(a);
    };
  }
  var s = Jo(e, 0, !1, null, null, !1, !1, "", fs);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      _l(t, s, n, r);
    }),
    s
  );
}
function Ll(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = cl(o);
        u.call(s);
      };
    }
    _l(t, o, e, l);
  } else o = xp(n, t, e, l, r);
  return cl(o);
}
sa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 &&
          (yo(t, n | 1), me(t, K()), !(D & 6) && ((cn = K() + 500), yt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          De(r, e, 1, l);
        }
      }),
        Zo(e, 1);
  }
};
wo = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    Zo(e, 134217728);
  }
};
aa = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    Zo(e, t);
  }
};
ca = function () {
  return I;
};
fa = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Ei = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(x(90));
            Vs(r), vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Hs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Zs = Ko;
qs = Ot;
var Sp = { usingClientEntryPoint: !1, Events: [or, Ht, wl, Gs, Js, Ko] },
  Nn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  kp = {
    bundleType: Nn.bundleType,
    version: Nn.version,
    rendererPackageName: Nn.rendererPackageName,
    rendererConfig: Nn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ta(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nn.findFiberByHostInstance || wp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (ml = jr.inject(kp)), ($e = jr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bo(t)) throw Error(x(200));
  return yp(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!bo(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = Dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Jo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Yn(e.nodeType === 8 ? e.parentNode : e),
    new qo(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = ta(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Ot(e);
};
xe.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(x(200));
  return Ll(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!bo(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Oc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Yn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new jl(t);
};
xe.render = function (e, t, n) {
  if (!Pl(t)) throw Error(x(200));
  return Ll(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Ko;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Ll(e, t, n, !1, r);
};
xe.version = "18.2.0-next-9e3b772b8-20220608";
function Ic() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), (Os.exports = xe);
var Ep = Os.exports,
  ds = Ep;
(ai.createRoot = ds.createRoot), (ai.hydrateRoot = ds.hydrateRoot);
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const ps = "popstate";
function Cp(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = "/",
      search: u = "",
      hash: s = "",
    } = Ft(l.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      no(
        "",
        { pathname: o, search: u, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector("base"),
      u = "";
    if (o && o.getAttribute("href")) {
      let s = l.location.href,
        a = s.indexOf("#");
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + "#" + (typeof i == "string" ? i : fl(i));
  }
  function r(l, i) {
    Rl(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return _p(t, n, r, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Rl(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Np() {
  return Math.random().toString(36).substr(2, 8);
}
function hs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function no(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ft(t) : t,
      { state: n, key: (t && t.key) || r || Np() }
    )
  );
}
function fl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ft(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _p(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = lt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), o.replaceState(nr({}, o.state, { idx: a }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function v() {
    u = lt.Pop;
    let _ = h(),
      f = _ == null ? null : _ - a;
    (a = _), s && s({ action: u, location: y.location, delta: f });
  }
  function m(_, f) {
    u = lt.Push;
    let c = no(y.location, _, f);
    n && n(c, _), (a = h() + 1);
    let p = hs(c, a),
      w = y.createHref(c);
    try {
      o.pushState(p, "", w);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(w);
    }
    i && s && s({ action: u, location: y.location, delta: 1 });
  }
  function S(_, f) {
    u = lt.Replace;
    let c = no(y.location, _, f);
    n && n(c, _), (a = h());
    let p = hs(c, a),
      w = y.createHref(c);
    o.replaceState(p, "", w),
      i && s && s({ action: u, location: y.location, delta: 0 });
  }
  function g(_) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof _ == "string" ? _ : fl(_);
    return (
      X(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(_) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ps, v),
        (s = _),
        () => {
          l.removeEventListener(ps, v), (s = null);
        }
      );
    },
    createHref(_) {
      return t(l, _);
    },
    createURL: g,
    encodeLocation(_) {
      let f = g(_);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: S,
    go(_) {
      return o.go(_);
    },
  };
  return y;
}
var ms;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ms || (ms = {}));
function jp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ft(t) : t,
    l = eu(r.pathname || "/", n);
  if (l == null) return null;
  let i = Mc(e);
  Pp(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) o = Fp(i[u], Bp(l));
  return o;
}
function Mc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = pt([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Mc(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Ip(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of Fc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Fc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Fc(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Pp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Mp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Lp = /^:\w+$/,
  Rp = 3,
  Tp = 2,
  zp = 1,
  Op = 10,
  Dp = -2,
  vs = (e) => e === "*";
function Ip(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(vs) && (r += Dp),
    t && (r += Tp),
    n
      .filter((l) => !vs(l))
      .reduce((l, i) => l + (Lp.test(i) ? Rp : i === "" ? zp : Op), r)
  );
}
function Mp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      s = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      h = Up(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let v = u.route;
    i.push({
      params: r,
      pathname: pt([l, h.pathname]),
      pathnameBase: Hp(pt([l, h.pathnameBase])),
      route: v,
    }),
      h.pathnameBase !== "/" && (l = pt([l, h.pathnameBase]));
  }
  return i;
}
function Up(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $p(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, v) => {
      if (h === "*") {
        let m = u[v] || "";
        o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (a[h] = Ap(u[v] || "", h)), a;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function $p(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Rl(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Bp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Rl(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ap(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Rl(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function eu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Vp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ft(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Wp(n, t)) : t,
    search: Qp(r),
    hash: Kp(l),
  };
}
function Wp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function si(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Uc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function $c(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ft(e))
    : ((l = nr({}, e)),
      X(
        !l.pathname || !l.pathname.includes("?"),
        si("?", "pathname", "search", l)
      ),
      X(
        !l.pathname || !l.pathname.includes("#"),
        si("#", "pathname", "hash", l)
      ),
      X(!l.search || !l.search.includes("#"), si("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (r || o == null) u = n;
  else {
    let v = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let s = Vp(l, u),
    a = o && o !== "/" && o.endsWith("/"),
    h = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Kp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Yp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bc = ["post", "put", "patch", "delete"];
new Set(Bc);
const Xp = ["get", ...Bc];
new Set(Xp);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dl() {
  return (
    (dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dl.apply(this, arguments)
  );
}
const tu = k.createContext(null),
  Gp = k.createContext(null),
  mn = k.createContext(null),
  Tl = k.createContext(null),
  wt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ac = k.createContext(null);
function Jp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  sr() || X(!1);
  let { basename: r, navigator: l } = k.useContext(mn),
    { hash: i, pathname: o, search: u } = Hc(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : pt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function sr() {
  return k.useContext(Tl) != null;
}
function zl() {
  return sr() || X(!1), k.useContext(Tl).location;
}
function Vc(e) {
  k.useContext(mn).static || k.useLayoutEffect(e);
}
function Zp() {
  let { isDataRoute: e } = k.useContext(wt);
  return e ? ch() : qp();
}
function qp() {
  sr() || X(!1);
  let e = k.useContext(tu),
    { basename: t, navigator: n } = k.useContext(mn),
    { matches: r } = k.useContext(wt),
    { pathname: l } = zl(),
    i = JSON.stringify(Uc(r).map((s) => s.pathnameBase)),
    o = k.useRef(!1);
  return (
    Vc(() => {
      o.current = !0;
    }),
    k.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let h = $c(s, JSON.parse(i), l, a.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : pt([t, h.pathname])),
          (a.replace ? n.replace : n.push)(h, a.state, a);
      },
      [t, n, i, l, e]
    )
  );
}
function Wc() {
  let { matches: e } = k.useContext(wt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Hc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(wt),
    { pathname: l } = zl(),
    i = JSON.stringify(Uc(r).map((o) => o.pathnameBase));
  return k.useMemo(() => $c(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function bp(e, t) {
  return eh(e, t);
}
function eh(e, t, n) {
  sr() || X(!1);
  let { navigator: r } = k.useContext(mn),
    { matches: l } = k.useContext(wt),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = zl(),
    a;
  if (t) {
    var h;
    let y = typeof t == "string" ? Ft(t) : t;
    u === "/" || ((h = y.pathname) != null && h.startsWith(u)) || X(!1),
      (a = y);
  } else a = s;
  let v = a.pathname || "/",
    m = u === "/" ? v : v.slice(u.length) || "/",
    S = jp(e, { pathname: m }),
    g = ih(
      S &&
        S.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: pt([
              u,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : pt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && g
    ? k.createElement(
        Tl.Provider,
        {
          value: {
            location: dl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: lt.Pop,
          },
        },
        g
      )
    : g;
}
function th() {
  let e = ah(),
    t = Yp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    i
  );
}
const nh = k.createElement(th, null);
class rh extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          wt.Provider,
          { value: this.props.routeContext },
          k.createElement(Ac.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(tu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(wt.Provider, { value: t }, r)
  );
}
function ih(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let u = i.findIndex(
      (s) => s.route.id && (o == null ? void 0 : o[s.route.id])
    );
    u >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, s, a) => {
    let h = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
      v = null;
    n && (v = s.route.errorElement || nh);
    let m = t.concat(i.slice(0, a + 1)),
      S = () => {
        let g;
        return (
          h
            ? (g = v)
            : s.route.Component
            ? (g = k.createElement(s.route.Component, null))
            : s.route.element
            ? (g = s.route.element)
            : (g = u),
          k.createElement(lh, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? k.createElement(rh, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: h,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var Qc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qc || {}),
  pl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(pl || {});
function oh(e) {
  let t = k.useContext(tu);
  return t || X(!1), t;
}
function uh(e) {
  let t = k.useContext(Gp);
  return t || X(!1), t;
}
function sh(e) {
  let t = k.useContext(wt);
  return t || X(!1), t;
}
function Kc(e) {
  let t = sh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function ah() {
  var e;
  let t = k.useContext(Ac),
    n = uh(pl.UseRouteError),
    r = Kc(pl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ch() {
  let { router: e } = oh(Qc.UseNavigateStable),
    t = Kc(pl.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Vc(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, dl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Br(e) {
  X(!1);
}
function fh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  sr() && X(!1);
  let u = t.replace(/^\/*/, "/"),
    s = k.useMemo(() => ({ basename: u, navigator: i, static: o }), [u, i, o]);
  typeof r == "string" && (r = Ft(r));
  let {
      pathname: a = "/",
      search: h = "",
      hash: v = "",
      state: m = null,
      key: S = "default",
    } = r,
    g = k.useMemo(() => {
      let y = eu(a, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: h, hash: v, state: m, key: S },
            navigationType: l,
          };
    }, [u, a, h, v, m, S, l]);
  return g == null
    ? null
    : k.createElement(
        mn.Provider,
        { value: s },
        k.createElement(Tl.Provider, { children: n, value: g })
      );
}
function dh(e) {
  let { children: t, location: n } = e;
  return bp(ro(t), n);
}
new Promise(() => {});
function ro(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, ro(r.props.children, i));
        return;
      }
      r.type !== Br && X(!1), !r.props.index || !r.props.children || X(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = ro(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lo() {
  return (
    (lo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lo.apply(this, arguments)
  );
}
function ph(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function hh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !hh(e);
}
const vh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  gh = "startTransition",
  gs = pf[gh];
function yh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = k.useRef();
  i.current == null && (i.current = Cp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = k.useCallback(
      (v) => {
        a && gs ? gs(() => s(v)) : s(v);
      },
      [s, a]
    );
  return (
    k.useLayoutEffect(() => o.listen(h), [o, h]),
    k.createElement(fh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
    })
  );
}
const wh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  xh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fn = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        unstable_viewTransition: v,
      } = t,
      m = ph(t, vh),
      { basename: S } = k.useContext(mn),
      g,
      y = !1;
    if (typeof a == "string" && xh.test(a) && ((g = a), wh))
      try {
        let p = new URL(window.location.href),
          w = a.startsWith("//") ? new URL(p.protocol + a) : new URL(a),
          E = eu(w.pathname, S);
        w.origin === p.origin && E != null
          ? (a = E + w.search + w.hash)
          : (y = !0);
      } catch {}
    let _ = Jp(a, { relative: l }),
      f = Sh(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: v,
      });
    function c(p) {
      r && r(p), p.defaultPrevented || f(p);
    }
    return k.createElement(
      "a",
      lo({}, m, { href: g || _, onClick: y || i ? r : c, ref: n, target: s })
    );
  });
var ys;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ys || (ys = {}));
var ws;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ws || (ws = {}));
function Sh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Zp(),
    a = zl(),
    h = Hc(e, { relative: o });
  return k.useCallback(
    (v) => {
      if (mh(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : fl(a) === fl(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, i, o, u]
  );
}
const nu = () =>
    d.jsx("nav", {
      className: "project-nav",
      children: d.jsxs("div", {
        className: "project-nav__links-wrapper",
        children: [
          d.jsx(fn, { to: "/", children: "Форма добавления заявок" }),
          d.jsx(fn, { to: "/table", children: "Таблица с заявками" }),
        ],
      }),
    }),
  kh = ({ setUser: e, user: t, eventListeners: n }) =>
    d.jsxs("form", {
      onSubmit: n,
      id: "form",
      method: "POST",
      action: "",
      children: [
        d.jsx("label", { children: "Ваши данные:" }),
        d.jsx("div", {
          className: "form-group",
          children: d.jsx("input", {
            id: "name",
            type: "text",
            name: "name",
            className: "form-control",
            placeholder: "Имя и Фамилия",
            required: !0,
            value: t.name,
            onChange: (r) => {
              e({ ...t, name: r.target.value });
            },
          }),
        }),
        d.jsx("div", {
          className: "form-group",
          children: d.jsx("input", {
            id: "phone",
            type: "text",
            name: "phone",
            className: "form-control",
            placeholder: "Телефон",
            value: t.phone,
            onChange: (r) => {
              e({ ...t, phone: r.target.value });
            },
          }),
        }),
        d.jsx("div", {
          className: "form-group",
          children: d.jsx("input", {
            id: "email",
            type: "email",
            name: "email",
            className: "form-control",
            placeholder: "Email",
            value: t.email,
            required: !0,
            onChange: (r) => {
              e({ ...t, email: r.target.value });
            },
          }),
        }),
        d.jsxs("div", {
          className: "form-group",
          children: [
            d.jsx("label", {
              htmlFor: "exampleFormControlSelect1",
              children: "Продукт:",
            }),
            d.jsxs("select", {
              onChange: (r) => {
                e({ ...t, product: r.target.value });
              },
              value: t.product,
              id: "product",
              name: "product",
              className: "form-control",
              children: [
                d.jsx("option", {
                  value: "course-html",
                  children: "Курс по верстке",
                }),
                d.jsx("option", {
                  value: "course-js",
                  children: "Курс по JavaScript",
                }),
                d.jsx("option", {
                  value: "course-vue",
                  children: "Курс по VUE ",
                }),
                d.jsx("option", {
                  value: "course-php",
                  children: "Курс по PHP",
                }),
                d.jsx("option", {
                  value: "course-wordpress",
                  children: "Курс по WordPress",
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "form-group",
          children: d.jsx("button", {
            type: "submit",
            className: "btn btn-lg btn-primary btn-block",
            children: "Оформить заявку",
          }),
        }),
      ],
    }),
  xs = [
    {
      name: "Анастасия Атрахимвоич",
      phone: 420772551797,
      email: "anastasiaAtr@gmail.com",
      product: "course-html",
      everything: "everything",
      status: "new",
    },
    {
      name: "Андрей Чабанюк",
      phone: 42023421297,
      email: "chabanyuk@gmail.com",
      product: "course-js",
      everything: "everything",
      status: "new",
    },
    {
      name: "Анастасия Хорькова",
      phone: 420772556743,
      email: "chorx@gmail.com",
      product: "course-wordpress",
      everything: "everything",
      status: "new",
    },
    {
      name: "Владислав Печеневский",
      phone: 4207721351783,
      email: "Pechen@gmail.com",
      product: "course-php",
      everything: "everything",
      status: "new",
    },
    {
      name: "Александр Терехин",
      phone: 426782551765,
      email: "terexin@gmail.com",
      product: "course-html",
      everything: "everything",
      status: "new",
    },
    {
      name: "Кирилл Жаров",
      phone: 42275343797,
      email: "zharov@gmail.com",
      product: "course-vue",
      everything: "everything",
      status: "new",
    },
    {
      name: "Вячеслав Федосеев",
      phone: 432163267890,
      email: "fedoseev@gmail.com",
      product: "course-js",
      everything: "everything",
      status: "new",
    },
  ],
  Eh = (e) => Math.floor(Math.random() * e),
  Ss = () => {
    const e = Eh(xs.length);
    return xs[e];
  },
  Dt = "https://nonstop-angry-flier.glitch.me/",
  Ch = () => {
    const [e, t] = k.useState(Ss()),
      n = () => {
        t(Ss());
      },
      r = (l) => {
        l.preventDefault();
        const i = {
          ...e,
          data: new Date().toLocaleString("ru-RU", {
            timeZone: "Europe/Samara",
          }),
        };
        fetch(Dt + "array/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(i),
        }).then((o) => {
          o.ok && n();
        });
      };
    return d.jsxs("div", {
      className: "container-fluid",
      children: [
        d.jsx("div", {
          className: "white-plate__header text-center",
          children: d.jsxs("p", {
            className: "white-plate__logo",
            children: [d.jsx("span", { children: "Форма" }), " заявок"],
          }),
        }),
        d.jsx("div", {
          className:
            "white-plate__line-between white-plate__line-between--main",
        }),
        d.jsx(kh, { user: e, setUser: t, eventListeners: r }),
      ],
    });
  },
  Nh = () => (
    k.useEffect(() => {
      document.body.className = "with-nav radial-bg flex-center";
    }, []),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(nu, {}),
        d.jsx("div", {
          className: "white-plate white-plate--payment",
          children: d.jsx(Ch, {}),
        }),
      ],
    })
  ),
  _h = ({ el: e }) => {
    const t = {
        "course-html": "Курс по верстке",
        "course-js": "Курс по JavaScript",
        "course-vue": "Курс по VUE",
        "course-php": "Курс по PHP",
        "course-wordpress": "Курс по WordPress",
      },
      n = { new: "Новый", inwork: "В работе", complete: "Завершена" },
      r = {
        new: "badge-danger",
        inwork: "badge-warning",
        complete: "badge-success",
      };
    return d.jsx(d.Fragment, {
      children: d.jsxs(
        "tr",
        {
          children: [
            d.jsx("th", { scope: "row", children: e.id }),
            d.jsx("td", { children: e.data }),
            d.jsx("td", { children: t[e.product] }),
            d.jsx("td", { children: e.name }),
            d.jsx("td", { children: e.email }),
            d.jsx("td", { children: e.phone }),
            d.jsx("td", {
              children: d.jsx("div", {
                className: `badge badge-pill ${r[e.status]}`,
                children: n[e.status],
              }),
            }),
            d.jsx("td", {
              children: d.jsx(fn, {
                to: `/edit/${e.id}`,
                children: "Редактировать",
              }),
            }),
          ],
        },
        e.id
      ),
    });
  },
  jh = "./assets/avatar-4b37b488.jpg",
  Ph = () => {
    const [e, t] = k.useState({
        product: "all",
        status: "all",
        everything: "another",
      }),
      [n, r] = k.useState(null);
    k.useEffect(() => {
      (document.body.className = "with-nav body--dashboard"),
        fetch(
          `${Dt}array?${e.status === "all" ? "" : `status=${e.status}&`}${
            e.product === "all" ? "" : `product=${e.product}&`
          }${e.everything === "another" ? "" : `everything=${e.everything}`}`
        )
          .then((g) => g.ok && g.json())
          .then((g) => {
            r(g), S(!1);
          });
    }, [e]);
    const l = () => {
        if (n)
          return n.reduce(
            (y, _) => (y[_.status] ? y[_.status]++ : (y[_.status] = 1), y),
            {}
          );
      },
      i = () => {
        if (n)
          return n.reduce(
            (y, _) => (
              y[_.everything] ? y[_.everything]++ : (y[_.everything] = 1), y
            ),
            {}
          );
      },
      o = l(),
      u = i(),
      s = () => {
        for (const g in o)
          return d.jsx("div", {
            className: "badge",
            id: `badge-${g}`,
            children: o[g],
          });
      },
      a = () => {
        for (const g in u)
          return d.jsx("div", {
            className: "badge",
            id: `badge-${g}`,
            children: u[g],
          });
      },
      h = () => {
        if (n) return n.map((g) => d.jsx(_h, { el: g }, g.id));
      },
      v = () => {
        confirm("Вы уверены,что хотите удалить все заявки?") &&
          n &&
          n.map((y) => {
            fetch(Dt + "array/" + y.id, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }).then(() => {});
          });
      },
      [m, S] = k.useState(!0);
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx(nu, {}),
        d.jsxs("div", {
          className: "left-panel blue-skin",
          children: [
            d.jsxs("div", {
              className: "left-panel__logo",
              children: [
                d.jsx("div", {
                  className: "left-panel__logo-title",
                  children: "CRM заявки",
                }),
                d.jsx("div", {
                  className: "left-panel__logo-subtitle",
                  children: "учебный проект webcademy",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "left-panel__user clearfix",
              children: [
                d.jsx("div", {
                  className: "left-panel__user-photo",
                  children: d.jsx("img", { src: jh, alt: "Avatar" }),
                }),
                d.jsxs("div", {
                  className: "left-panel__user-name",
                  children: ["Андрей ", d.jsx("br", {}), "Чабанюк"],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "left-panel__navigation",
              children: [
                d.jsx("div", {
                  className: "left-panel__navigation-title",
                  children: "Заявки",
                }),
                d.jsx("ul", {
                  children: ks.map((g) =>
                    d.jsx(
                      "li",
                      {
                        children: d.jsxs(fn, {
                          onClick: () => t({ ...e, status: g.active }),
                          id: g.name,
                          "data-value": g.name,
                          "data-role": "left-status",
                          className: g.active === e.status ? "active" : "",
                          children: [
                            g.name,
                            " ",
                            g.active === e.status && g.active === e.everything
                              ? d.jsx(s, {})
                              : "",
                            g.active === e.status && g.active !== e.everything
                              ? d.jsx(a, {})
                              : "",
                          ],
                        }),
                      },
                      g.name
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "main-wrapper",
          children: d.jsxs("div", {
            className: "container-fluid",
            children: [
              d.jsxs("div", {
                className: "header-top",
                children: [
                  d.jsx("div", {
                    className: "admin-heading-1",
                    children: "Все заявки",
                  }),
                  d.jsxs("button", {
                    onClick: () => {
                      v();
                    },
                    className: "btn-delete-data",
                    children: [
                      d.jsx("span", {
                        className: "text",
                        children: "Удалить все заявки",
                      }),
                      d.jsx("span", {
                        className: "icon",
                        children: d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          children: d.jsx("path", {
                            d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "row mb-3 justify-content-start",
                children: [
                  d.jsx("div", {
                    className: "col",
                    children: d.jsx("div", {
                      id: "topStatusBar",
                      className: "btn-group",
                      role: "group",
                      "aria-label": "...",
                      children: ks.map((g) =>
                        d.jsx(
                          "button",
                          {
                            onClick: () => t({ ...e, status: g.active }),
                            className: `btn btn-light ${
                              g.active === e.status ? "active" : ""
                            } `,
                            "data-value": g.name,
                            children: g.name,
                          },
                          g.name
                        )
                      ),
                    }),
                  }),
                  d.jsx("div", {
                    className: "col",
                    children: d.jsxs("select", {
                      onChange: (g) => t({ ...e, product: g.target.value }),
                      className: "custom-select",
                      id: "productSelect",
                      children: [
                        d.jsx("option", {
                          value: "all",
                          children: "Все продукты",
                        }),
                        d.jsx("option", {
                          value: "course-html",
                          children: "Курс по верстке",
                        }),
                        d.jsx("option", {
                          value: "course-js",
                          children: "Курс по JavaScript",
                        }),
                        d.jsx("option", {
                          value: "course-vue",
                          children: "Курс по VUE",
                        }),
                        d.jsx("option", {
                          value: "course-php",
                          children: "Курс по PHP",
                        }),
                        d.jsx("option", {
                          value: "course-wordpress",
                          children: "Курс по WordPress",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              d.jsx("div", {}),
              d.jsxs("table", {
                className: "table fs-14",
                children: [
                  d.jsx("thead", {
                    children: d.jsxs("tr", {
                      children: [
                        d.jsx("th", { children: "ID" }),
                        d.jsx("th", { children: "дата" }),
                        d.jsx("th", { children: "продукт" }),
                        d.jsx("th", { children: "имя" }),
                        d.jsx("th", { children: "email" }),
                        d.jsx("th", { children: "телефон" }),
                        d.jsx("th", { children: "статус" }),
                        d.jsx("th", {}),
                      ],
                    }),
                  }),
                  d.jsxs("tbody", {
                    id: "tbody",
                    children: [
                      m &&
                        d.jsx("div", {
                          className: "preloader",
                          children: d.jsxs("div", {
                            className: "preloader__row",
                            children: [
                              d.jsx("div", { className: "preloader__item" }),
                              d.jsx("div", { className: "preloader__item" }),
                            ],
                          }),
                        }),
                      h(),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  ks = [
    { name: "Все вместе", active: "all" },
    { name: "Новые", active: "new" },
    { name: "В работе", active: "inwork" },
    { name: "Завершенные", active: "complete" },
  ],
  Lh = () => {
    const [e, t] = k.useState([]);
    return (
      k.useEffect(() => {
        fetch(Dt)
          .then((n) => n.ok && n.json())
          .then((n) => {
            t(n);
          });
      }, []),
      { data: e, setData: t }
    );
  },
  Rh = (e) => {
    confirm("Вы уверены, что хотите удалить заявку?") &&
      fetch(Dt + "array/" + e, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(() => {});
  },
  Th = ({}) => {
    const [e, t] = k.useState(""),
      { id: n } = Wc();
    k.useEffect(() => {
      fetch(Dt + "array/" + n, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((l) => l.json())
        .then((l) => {
          t(l);
        });
    }, []);
    const r = () => {
      fetch(Dt + "array/" + n, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      }).then(() => {
        t(e);
      });
    };
    return d.jsxs("form", {
      id: "form",
      action: "",
      children: [
        d.jsxs("div", {
          className: "card mb-4",
          children: [
            d.jsx("div", {
              className: "card-header",
              children: "Данные о заявке",
            }),
            d.jsxs("div", {
              className: "card-body",
              children: [
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "ID:" }),
                    }),
                    d.jsxs("div", {
                      className: "col",
                      children: [
                        "Заявка №",
                        d.jsx("span", { id: "number", children: e.id }),
                      ],
                    }),
                    d.jsx("input", { name: "id", type: "hidden", id: "id" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "Дата создания:" }),
                    }),
                    d.jsx("div", {
                      className: "col",
                      id: "date",
                      children: e.data,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "Продукт:" }),
                    }),
                    d.jsx("div", {
                      className: "col",
                      children: d.jsxs("select", {
                        id: "product",
                        name: "product",
                        className: "custom-select",
                        value: e.product || "",
                        onChange: (l) => {
                          t({ ...e, product: l.target.value });
                        },
                        children: [
                          d.jsx("option", {
                            value: "course-html",
                            children: "Курс по верстке",
                          }),
                          d.jsx("option", {
                            value: "course-js",
                            children: "Курс по JavaScript",
                          }),
                          d.jsx("option", {
                            value: "course-vue",
                            children: "Курс по VUE JS",
                          }),
                          d.jsx("option", {
                            value: "course-php",
                            children: "Курс по PHP",
                          }),
                          d.jsx("option", {
                            value: "course-wordpress",
                            children: "Курс по WordPress",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "Имя:" }),
                    }),
                    d.jsx("div", {
                      className: "col",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        value: e.name || "",
                        id: "name",
                        name: "name",
                        onChange: (l) => {
                          t({ ...e, name: l.target.value });
                        },
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "Email:" }),
                    }),
                    d.jsx("div", {
                      className: "col",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        value: e.email || "",
                        id: "email",
                        name: "email",
                        onChange: (l) => {
                          t({ ...e, email: l.target.value });
                        },
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "Телефон:" }),
                    }),
                    d.jsx("div", {
                      className: "col",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        value: e.phone || "",
                        id: "phone",
                        name: "phone",
                        onChange: (l) => {
                          t({ ...e, phone: l.target.value });
                        },
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "row mb-3",
                  children: [
                    d.jsx("div", {
                      className: "col-md-2",
                      children: d.jsx("strong", { children: "Статус заявки:" }),
                    }),
                    d.jsx("div", {
                      className: "col",
                      children: d.jsxs("select", {
                        className: "custom-select",
                        id: "status",
                        name: "status",
                        value: e.status || "",
                        onChange: (l) => {
                          t({ ...e, status: l.target.value });
                        },
                        children: [
                          d.jsx("option", {
                            value: "",
                            children: "Выберите...",
                          }),
                          d.jsx("option", { value: "new", children: "Новая" }),
                          d.jsx("option", {
                            value: "inwork",
                            children: "В работе",
                          }),
                          d.jsx("option", {
                            value: "complete",
                            children: "Завершена",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "row justify-content-between",
          children: d.jsx("div", {
            className: "col text-right",
            children: d.jsxs(fn, {
              to: "/table",
              children: [
                d.jsx("button", {
                  onClick: () => {
                    Rh(e.id);
                  },
                  className: "btn btn-primary btn-delete",
                  children: "Удалить",
                }),
                d.jsx("button", {
                  onClick: () => {
                    r();
                  },
                  type: "submit",
                  className: "btn btn-primary",
                  children: "Сохранить изменения",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  zh = () => {
    Wc();
    const { data: e, setData: t } = Lh();
    return (
      k.useEffect(() => {
        document.body.className = "with-nav";
      }, []),
      d.jsxs(d.Fragment, {
        children: [
          d.jsx(nu, {}),
          d.jsx("div", {
            className: "form-wrapper",
            children: d.jsxs("div", {
              className: "container-fluid",
              children: [
                d.jsxs("div", {
                  className: "row justify-content-between align-items-center",
                  children: [
                    d.jsx("div", {
                      className: "col",
                      children: d.jsx("div", {
                        className: "admin-heading-1",
                        children: "Работа с заявкой",
                      }),
                    }),
                    d.jsx("div", {
                      className: "col text-right",
                      children: d.jsx(fn, {
                        to: "/table",
                        className: "btn btn-link",
                        children: "Вернуться назад",
                      }),
                    }),
                  ],
                }),
                d.jsx("div", {
                  className: "row",
                  children: d.jsx("div", {
                    className: "col",
                    children: d.jsx(Th, { data: e, setData: t }),
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
function Oh() {
  return d.jsx(yh, {
    children: d.jsxs(dh, {
      children: [
        d.jsx(Br, { path: "/", element: d.jsx(Nh, {}) }),
        d.jsx(Br, { path: "/table", element: d.jsx(Ph, {}) }),
        d.jsx(Br, { path: "/edit/:id", element: d.jsx(zh, {}) }),
      ],
    }),
  });
}
ai.createRoot(document.getElementById("root")).render(d.jsx(Oh, {}));
