import { useRef as L, useState as C, useEffect as F, forwardRef as N, createElement as V } from "react";
import { c as w } from "./clamp.js";
import { jsx as d, jsxs as P, Fragment as $ } from "react/jsx-runtime";
import { B as f } from "./factory.js";
import { T as z } from "./Transition.js";
import { c as A } from "./create-safe-context.js";
function K(t, e, r = "ltr") {
  const n = L(null), a = L(!1), c = L(!1), s = L(0), [u, i] = C(!1);
  return F(() => {
    a.current = !0;
  }, []), F(() => {
    var g, _;
    const l = ({ x: o, y: T }) => {
      cancelAnimationFrame(s.current), s.current = requestAnimationFrame(() => {
        if (a.current && n.current) {
          n.current.style.userSelect = "none";
          const m = n.current.getBoundingClientRect();
          if (m.width && m.height) {
            const k = w((o - m.left) / m.width, 0, 1);
            t({
              x: r === "ltr" ? k : 1 - k,
              y: w((T - m.top) / m.height, 0, 1)
            });
          }
        }
      });
    }, b = () => {
      document.addEventListener("mousemove", S), document.addEventListener("mouseup", v), document.addEventListener("touchmove", h), document.addEventListener("touchend", v);
    }, x = () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", v), document.removeEventListener("touchmove", h), document.removeEventListener("touchend", v);
    }, p = () => {
      !c.current && a.current && (c.current = !0, typeof (e == null ? void 0 : e.onScrubStart) == "function" && e.onScrubStart(), i(!0), b());
    }, v = () => {
      c.current && a.current && (c.current = !1, i(!1), x(), setTimeout(() => {
        typeof (e == null ? void 0 : e.onScrubEnd) == "function" && e.onScrubEnd();
      }, 0));
    }, y = (o) => {
      p(), o.preventDefault(), S(o);
    }, S = (o) => l({ x: o.clientX, y: o.clientY }), E = (o) => {
      o.cancelable && o.preventDefault(), p(), h(o);
    }, h = (o) => {
      o.cancelable && o.preventDefault(), l({ x: o.changedTouches[0].clientX, y: o.changedTouches[0].clientY });
    };
    return (g = n.current) == null || g.addEventListener("mousedown", y), (_ = n.current) == null || _.addEventListener("touchstart", E, { passive: !1 }), () => {
      n.current && (n.current.removeEventListener("mousedown", y), n.current.removeEventListener("touchstart", E));
    };
  }, [r, t]), { ref: n, active: u };
}
const [O, M] = A(
  "SliderProvider was not found in tree"
), B = N(
  ({ size: t, disabled: e, variant: r, color: n, thumbSize: a, radius: c, ...s }, u) => {
    const { getStyles: i } = M();
    return /* @__PURE__ */ d(
      f,
      {
        tabIndex: -1,
        variant: r,
        size: t,
        ref: u,
        ...i("root"),
        ...s
      }
    );
  }
);
B.displayName = "@mantine/core/SliderRoot";
const D = N(
  ({
    max: t,
    min: e,
    value: r,
    position: n,
    label: a,
    dragging: c,
    onMouseDown: s,
    onKeyDownCapture: u,
    labelTransitionProps: i,
    labelAlwaysOn: l,
    thumbLabel: b,
    onFocus: x,
    onBlur: p,
    showLabelOnHover: v,
    isHovered: y,
    children: S = null,
    disabled: E
  }, h) => {
    const { getStyles: g } = M(), [_, o] = C(!1), T = l || c || _ || v && y;
    return /* @__PURE__ */ P(
      f,
      {
        tabIndex: 0,
        role: "slider",
        "aria-label": b,
        "aria-valuemax": t,
        "aria-valuemin": e,
        "aria-valuenow": r,
        ref: h,
        __vars: { "--slider-thumb-offset": `${n}%` },
        ...g("thumb", { focusable: !0 }),
        mod: { dragging: c, disabled: E },
        onFocus: () => {
          o(!0), typeof x == "function" && x();
        },
        onBlur: () => {
          o(!1), typeof p == "function" && p();
        },
        onTouchStart: s,
        onMouseDown: s,
        onKeyDownCapture: u,
        onClick: (m) => m.stopPropagation(),
        children: [
          S,
          /* @__PURE__ */ d(
            z,
            {
              mounted: a != null && !!T,
              transition: "fade",
              duration: 0,
              ...i,
              children: (m) => /* @__PURE__ */ d("div", { ...g("label", { style: m }), children: a })
            }
          )
        ]
      }
    );
  }
);
D.displayName = "@mantine/core/SliderThumb";
function j({ value: t, min: e, max: r }) {
  const n = (t - e) / (r - e) * 100;
  return Math.min(Math.max(n, 0), 100);
}
function I({ mark: t, offset: e, value: r, inverted: n = !1 }) {
  return n ? typeof e == "number" && t.value <= e || t.value >= r : typeof e == "number" ? t.value >= e && t.value <= r : t.value <= r;
}
function R({ marks: t, min: e, max: r, disabled: n, value: a, offset: c, inverted: s }) {
  const { getStyles: u } = M();
  if (!t)
    return null;
  const i = t.map((l, b) => /* @__PURE__ */ V(
    f,
    {
      ...u("markWrapper"),
      __vars: { "--mark-offset": `${j({ value: l.value, min: e, max: r })}%` },
      key: b
    },
    /* @__PURE__ */ d(
      f,
      {
        ...u("mark"),
        mod: { filled: I({ mark: l, value: a, offset: c, inverted: s }), disabled: n }
      }
    ),
    l.label && /* @__PURE__ */ d("div", { ...u("markLabel"), children: l.label })
  ));
  return /* @__PURE__ */ d("div", { children: i });
}
R.displayName = "@mantine/core/SliderMarks";
function X({
  filled: t,
  children: e,
  offset: r,
  disabled: n,
  marksOffset: a,
  inverted: c,
  containerProps: s,
  ...u
}) {
  const { getStyles: i } = M();
  return /* @__PURE__ */ d($, { children: /* @__PURE__ */ d(f, { ...i("trackContainer"), mod: { disabled: n }, ...s, children: /* @__PURE__ */ P(f, { ...i("track"), mod: { inverted: c, disabled: n }, children: [
    /* @__PURE__ */ d(
      f,
      {
        mod: { inverted: c, disabled: n },
        __vars: {
          "--slider-bar-width": `calc(${t}% + var(--slider-size))`,
          "--slider-bar-offset": `calc(${r}% - var(--slider-size))`
        },
        ...i("bar")
      }
    ),
    e,
    /* @__PURE__ */ d(R, { ...u, offset: a, disabled: n, inverted: c })
  ] }) }) });
}
X.displayName = "@mantine/core/SliderTrack";
function Q({
  value: t,
  containerWidth: e,
  min: r,
  max: n,
  step: a,
  precision: c
}) {
  const u = (e ? Math.min(Math.max(t, 0), e) / e : t) * (n - r), i = (u !== 0 ? Math.round(u / a) * a : 0) + r, l = Math.max(i, r);
  return c !== void 0 ? Number(l.toFixed(c)) : l;
}
function U(t, e) {
  return parseFloat(t.toFixed(e));
}
function Z(t) {
  if (!t)
    return 0;
  const e = t.toString().split(".");
  return e.length > 1 ? e[1].length : 0;
}
var ee = { root: "m_dd36362e", label: "m_c9357328", thumb: "m_c9a9a60a", trackContainer: "m_a8645c2", track: "m_c9ade57f", bar: "m_38aeed47", markWrapper: "m_b7b0423a", mark: "m_dd33bc19", markLabel: "m_68c77a5b" };
export {
  O as S,
  X as T,
  Q as a,
  B as b,
  ee as c,
  D as d,
  j as e,
  U as f,
  Z as g,
  K as u
};
