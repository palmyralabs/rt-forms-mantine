import { jsx as m, jsxs as Q, Fragment as je } from "react/jsx-runtime";
import { b as N, B as X, f as H, d as ne, g as se, c as Te, h as re, j as Se, l as Ze } from "./factory.js";
import { a as Je } from "./CheckIcon.js";
import { useRef as O, useEffect as W, useMemo as Qe, useCallback as P, forwardRef as I, useState as C, cloneElement as De, useId as eo } from "react";
import { c as le } from "./create-safe-context.js";
import { a as oo, u as to } from "./use-id.js";
import { u as U } from "./use-merged-ref.js";
import { u as ro } from "./DirectionProvider.js";
import { C as no, P as ee, i as ce } from "./CloseButton.js";
import { I as so } from "./Input.js";
import { u as lo } from "./use-uncontrolled.js";
function B(e) {
  const o = O(e);
  return W(() => {
    o.current = e;
  }), Qe(() => (...t) => {
    var r;
    return (r = o.current) == null ? void 0 : r.call(o, ...t);
  }, []);
}
function oe(e, o) {
  const t = B(e), r = O(0);
  return W(() => () => window.clearTimeout(r.current), []), P(
    (...s) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => t(...s), o);
    },
    [t, o]
  );
}
const [co, F] = le(
  "ScrollArea.Root component was not found in tree"
);
function q(e, o) {
  const t = B(o);
  oo(() => {
    let r = 0;
    if (e) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(t);
      });
      return s.observe(e), () => {
        window.cancelAnimationFrame(r), s.unobserve(e);
      };
    }
  }, [e, t]);
}
const ao = I((e, o) => {
  const { style: t, ...r } = e, s = F(), [l, n] = C(0), [c, a] = C(0), i = !!(l && c);
  return q(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) == null ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), a(d);
  }), q(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) == null ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), n(d);
  }), i ? /* @__PURE__ */ m("div", { ...r, ref: o, style: { ...t, width: l, height: c } }) : null;
}), io = I((e, o) => {
  const t = F(), r = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && r ? /* @__PURE__ */ m(ao, { ...e, ref: o }) : null;
}), uo = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Ee = I((e, o) => {
  const t = N("ScrollAreaRoot", uo, e), { type: r, scrollHideDelay: s, scrollbars: l, ...n } = t, [c, a] = C(null), [i, d] = C(null), [u, p] = C(null), [b, h] = C(null), [A, y] = C(null), [f, T] = C(0), [x, v] = C(0), [R, D] = C(!1), [L, w] = C(!1), z = U(o, (Y) => a(Y));
  return /* @__PURE__ */ m(
    co,
    {
      value: {
        type: r,
        scrollHideDelay: s,
        scrollArea: c,
        viewport: i,
        onViewportChange: d,
        content: u,
        onContentChange: p,
        scrollbarX: b,
        onScrollbarXChange: h,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: D,
        scrollbarY: A,
        onScrollbarYChange: y,
        scrollbarYEnabled: L,
        onScrollbarYEnabledChange: w,
        onCornerWidthChange: T,
        onCornerHeightChange: v
      },
      children: /* @__PURE__ */ m(
        X,
        {
          ...n,
          ref: z,
          __vars: {
            "--sa-corner-width": l !== "xy" ? "0px" : `${f}px`,
            "--sa-corner-height": l !== "xy" ? "0px" : `${x}px`
          }
        }
      )
    }
  );
});
Ee.displayName = "@mantine/core/ScrollAreaRoot";
function Oe(e, o) {
  const t = e / o;
  return Number.isNaN(t) ? 0 : t;
}
function te(e) {
  const o = Oe(e.viewport, e.content), t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - t) * o;
  return Math.max(r, 18);
}
function Ne(e, o) {
  return (t) => {
    if (e[0] === e[1] || o[0] === o[1])
      return o[0];
    const r = (o[1] - o[0]) / (e[1] - e[0]);
    return o[0] + r * (t - e[0]);
  };
}
function bo(e, [o, t]) {
  return Math.min(t, Math.max(o, e));
}
function Ce(e, o, t = "ltr") {
  const r = te(o), s = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, l = o.scrollbar.size - s, n = o.content - o.viewport, c = l - r, a = t === "ltr" ? [0, n] : [n * -1, 0], i = bo(e, a);
  return Ne([0, n], [0, c])(i);
}
function po(e, o, t, r = "ltr") {
  const s = te(t), l = s / 2, n = o || l, c = s - n, a = t.scrollbar.paddingStart + n, i = t.scrollbar.size - t.scrollbar.paddingEnd - c, d = t.content - t.viewport, u = r === "ltr" ? [0, d] : [d * -1, 0];
  return Ne([a, i], u)(e);
}
function Re(e, o) {
  return e > 0 && e < o;
}
function J(e) {
  return e ? parseInt(e, 10) : 0;
}
function V(e, o, { checkForDefaultPrevented: t = !0 } = {}) {
  return (r) => {
    e == null || e(r), (t === !1 || !r.defaultPrevented) && (o == null || o(r));
  };
}
const [mo, ze] = le(
  "ScrollAreaScrollbar was not found in tree"
), Ie = I((e, o) => {
  const {
    sizes: t,
    hasThumb: r,
    onThumbChange: s,
    onThumbPointerUp: l,
    onThumbPointerDown: n,
    onThumbPositionChange: c,
    onDragScroll: a,
    onWheelScroll: i,
    onResize: d,
    ...u
  } = e, p = F(), [b, h] = C(null), A = U(o, (w) => h(w)), y = O(null), f = O(""), { viewport: T } = p, x = t.content - t.viewport, v = B(i), R = B(c), D = oe(d, 10), L = (w) => {
    if (y.current) {
      const z = w.clientX - y.current.left, Y = w.clientY - y.current.top;
      a({ x: z, y: Y });
    }
  };
  return W(() => {
    const w = (z) => {
      const Y = z.target;
      (b == null ? void 0 : b.contains(Y)) && v(z, x);
    };
    return document.addEventListener("wheel", w, { passive: !1 }), () => document.removeEventListener("wheel", w, { passive: !1 });
  }, [T, b, x, v]), W(R, [t, R]), q(b, D), q(p.content, D), /* @__PURE__ */ m(
    mo,
    {
      value: {
        scrollbar: b,
        hasThumb: r,
        onThumbChange: B(s),
        onThumbPointerUp: B(l),
        onThumbPositionChange: R,
        onThumbPointerDown: B(n)
      },
      children: /* @__PURE__ */ m(
        "div",
        {
          ...u,
          ref: A,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...u.style },
          onPointerDown: V(e.onPointerDown, (w) => {
            w.preventDefault(), w.button === 0 && (w.target.setPointerCapture(w.pointerId), y.current = b.getBoundingClientRect(), f.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", L(w));
          }),
          onPointerMove: V(e.onPointerMove, L),
          onPointerUp: V(e.onPointerUp, (w) => {
            w.preventDefault();
            const z = w.target;
            z.hasPointerCapture(w.pointerId) && z.releasePointerCapture(w.pointerId), document.body.style.webkitUserSelect = f.current, y.current = null;
          })
        }
      )
    }
  );
}), fo = I(
  (e, o) => {
    const { sizes: t, onSizesChange: r, style: s, ...l } = e, n = F(), [c, a] = C(), i = O(null), d = U(o, i, n.onScrollbarXChange);
    return W(() => {
      i.current && a(getComputedStyle(i.current));
    }, [i]), /* @__PURE__ */ m(
      Ie,
      {
        "data-orientation": "horizontal",
        ...l,
        ref: d,
        sizes: t,
        style: {
          ...s,
          "--sa-thumb-width": `${te(t)}px`
        },
        onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
        onDragScroll: (u) => e.onDragScroll(u.x),
        onWheelScroll: (u, p) => {
          if (n.viewport) {
            const b = n.viewport.scrollLeft + u.deltaX;
            e.onWheelScroll(b), Re(b, p) && u.preventDefault();
          }
        },
        onResize: () => {
          i.current && n.viewport && c && r({
            content: n.viewport.scrollWidth,
            viewport: n.viewport.offsetWidth,
            scrollbar: {
              size: i.current.clientWidth,
              paddingStart: J(c.paddingLeft),
              paddingEnd: J(c.paddingRight)
            }
          });
        }
      }
    );
  }
), ho = I(
  (e, o) => {
    const { sizes: t, onSizesChange: r, style: s, ...l } = e, n = F(), [c, a] = C(), i = O(null), d = U(o, i, n.onScrollbarYChange);
    return W(() => {
      i.current && a(window.getComputedStyle(i.current));
    }, []), /* @__PURE__ */ m(
      Ie,
      {
        ...l,
        "data-orientation": "vertical",
        ref: d,
        sizes: t,
        style: {
          "--sa-thumb-height": `${te(t)}px`,
          ...s
        },
        onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
        onDragScroll: (u) => e.onDragScroll(u.y),
        onWheelScroll: (u, p) => {
          if (n.viewport) {
            const b = n.viewport.scrollTop + u.deltaY;
            e.onWheelScroll(b), Re(b, p) && u.preventDefault();
          }
        },
        onResize: () => {
          i.current && n.viewport && c && r({
            content: n.viewport.scrollHeight,
            viewport: n.viewport.offsetHeight,
            scrollbar: {
              size: i.current.clientHeight,
              paddingStart: J(c.paddingTop),
              paddingEnd: J(c.paddingBottom)
            }
          });
        }
      }
    );
  }
), ae = I((e, o) => {
  const { orientation: t = "vertical", ...r } = e, { dir: s } = ro(), l = F(), n = O(null), c = O(0), [a, i] = C({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Oe(a.viewport, a.content), u = {
    ...r,
    sizes: a,
    onSizesChange: i,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (b) => {
      n.current = b;
    },
    onThumbPointerUp: () => {
      c.current = 0;
    },
    onThumbPointerDown: (b) => {
      c.current = b;
    }
  }, p = (b, h) => po(b, c.current, a, h);
  return t === "horizontal" ? /* @__PURE__ */ m(
    fo,
    {
      ...u,
      ref: o,
      onThumbPositionChange: () => {
        if (l.viewport && n.current) {
          const b = l.viewport.scrollLeft, h = Ce(b, a, s);
          n.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (b) => {
        l.viewport && (l.viewport.scrollLeft = b);
      },
      onDragScroll: (b) => {
        l.viewport && (l.viewport.scrollLeft = p(b, s));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ m(
    ho,
    {
      ...u,
      ref: o,
      onThumbPositionChange: () => {
        if (l.viewport && n.current) {
          const b = l.viewport.scrollTop, h = Ce(b, a);
          a.scrollbar.size === 0 ? n.current.style.opacity = "0" : n.current.style.opacity = "1", n.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (b) => {
        l.viewport && (l.viewport.scrollTop = b);
      },
      onDragScroll: (b) => {
        l.viewport && (l.viewport.scrollTop = p(b));
      }
    }
  ) : null;
}), Le = I(
  (e, o) => {
    const t = F(), { forceMount: r, ...s } = e, [l, n] = C(!1), c = e.orientation === "horizontal", a = oe(() => {
      if (t.viewport) {
        const i = t.viewport.offsetWidth < t.viewport.scrollWidth, d = t.viewport.offsetHeight < t.viewport.scrollHeight;
        n(c ? i : d);
      }
    }, 10);
    return q(t.viewport, a), q(t.content, a), r || l ? /* @__PURE__ */ m(
      ae,
      {
        "data-state": l ? "visible" : "hidden",
        ...s,
        ref: o
      }
    ) : null;
  }
), vo = I(
  (e, o) => {
    const { forceMount: t, ...r } = e, s = F(), [l, n] = C(!1);
    return W(() => {
      const { scrollArea: c } = s;
      let a = 0;
      if (c) {
        const i = () => {
          window.clearTimeout(a), n(!0);
        }, d = () => {
          a = window.setTimeout(() => n(!1), s.scrollHideDelay);
        };
        return c.addEventListener("pointerenter", i), c.addEventListener("pointerleave", d), () => {
          window.clearTimeout(a), c.removeEventListener("pointerenter", i), c.removeEventListener("pointerleave", d);
        };
      }
    }, [s.scrollArea, s.scrollHideDelay]), t || l ? /* @__PURE__ */ m(
      Le,
      {
        "data-state": l ? "visible" : "hidden",
        ...r,
        ref: o
      }
    ) : null;
  }
), go = I(
  (e, o) => {
    const { forceMount: t, ...r } = e, s = F(), l = e.orientation === "horizontal", [n, c] = C("hidden"), a = oe(() => c("idle"), 100);
    return W(() => {
      if (n === "idle") {
        const i = window.setTimeout(() => c("hidden"), s.scrollHideDelay);
        return () => window.clearTimeout(i);
      }
    }, [n, s.scrollHideDelay]), W(() => {
      const { viewport: i } = s, d = l ? "scrollLeft" : "scrollTop";
      if (i) {
        let u = i[d];
        const p = () => {
          const b = i[d];
          u !== b && (c("scrolling"), a()), u = b;
        };
        return i.addEventListener("scroll", p), () => i.removeEventListener("scroll", p);
      }
    }, [s.viewport, l, a]), t || n !== "hidden" ? /* @__PURE__ */ m(
      ae,
      {
        "data-state": n === "hidden" ? "hidden" : "visible",
        ...r,
        ref: o,
        onPointerEnter: V(e.onPointerEnter, () => c("interacting")),
        onPointerLeave: V(e.onPointerLeave, () => c("idle"))
      }
    ) : null;
  }
), Pe = I(
  (e, o) => {
    const { forceMount: t, ...r } = e, s = F(), { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: n } = s, c = e.orientation === "horizontal";
    return W(() => (c ? l(!0) : n(!0), () => {
      c ? l(!1) : n(!1);
    }), [c, l, n]), s.type === "hover" ? /* @__PURE__ */ m(vo, { ...r, ref: o, forceMount: t }) : s.type === "scroll" ? /* @__PURE__ */ m(go, { ...r, ref: o, forceMount: t }) : s.type === "auto" ? /* @__PURE__ */ m(Le, { ...r, ref: o, forceMount: t }) : s.type === "always" ? /* @__PURE__ */ m(ae, { ...r, ref: o }) : null;
  }
);
function wo(e, o = () => {
}) {
  let t = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function s() {
    const l = { left: e.scrollLeft, top: e.scrollTop }, n = t.left !== l.left, c = t.top !== l.top;
    (n || c) && o(), t = l, r = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(r);
}
const yo = I((e, o) => {
  const { style: t, ...r } = e, s = F(), l = ze(), { onThumbPositionChange: n } = l, c = U(o, (d) => l.onThumbChange(d)), a = O(), i = oe(() => {
    a.current && (a.current(), a.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: d } = s;
    if (d) {
      const u = () => {
        if (i(), !a.current) {
          const p = wo(d, n);
          a.current = p, n();
        }
      };
      return n(), d.addEventListener("scroll", u), () => d.removeEventListener("scroll", u);
    }
  }, [s.viewport, i, n]), /* @__PURE__ */ m(
    "div",
    {
      "data-state": l.hasThumb ? "visible" : "hidden",
      ...r,
      ref: c,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...t
      },
      onPointerDownCapture: V(e.onPointerDownCapture, (d) => {
        const p = d.target.getBoundingClientRect(), b = d.clientX - p.left, h = d.clientY - p.top;
        l.onThumbPointerDown({ x: b, y: h });
      }),
      onPointerUp: V(e.onPointerUp, l.onThumbPointerUp)
    }
  );
}), Ae = I(
  (e, o) => {
    const { forceMount: t, ...r } = e, s = ze();
    return t || s.hasThumb ? /* @__PURE__ */ m(yo, { ref: o, ...r }) : null;
  }
), $e = I(
  ({ children: e, style: o, ...t }, r) => {
    const s = F(), l = U(r, s.onViewportChange);
    return /* @__PURE__ */ m(
      X,
      {
        ...t,
        ref: l,
        style: {
          overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
          ...o
        },
        children: /* @__PURE__ */ m("div", { style: { minWidth: "100%", display: "table" }, ref: s.onContentChange, children: e })
      }
    );
  }
);
$e.displayName = "@mantine/core/ScrollAreaViewport";
var ie = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const He = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, xo = se((e, { scrollbarSize: o }) => ({
  root: {
    "--scrollarea-scrollbar-size": Te(o)
  }
})), G = H((e, o) => {
  const t = N("ScrollArea", He, e), {
    classNames: r,
    className: s,
    style: l,
    styles: n,
    unstyled: c,
    scrollbarSize: a,
    vars: i,
    type: d,
    scrollHideDelay: u,
    viewportProps: p,
    viewportRef: b,
    onScrollPositionChange: h,
    children: A,
    offsetScrollbars: y,
    scrollbars: f,
    onBottomReached: T,
    onTopReached: x,
    ...v
  } = t, [R, D] = C(!1), L = ne({
    name: "ScrollArea",
    props: t,
    classes: ie,
    className: s,
    style: l,
    classNames: r,
    styles: n,
    unstyled: c,
    vars: i,
    varsResolver: xo
  });
  return /* @__PURE__ */ Q(
    Ee,
    {
      type: d === "never" ? "always" : d,
      scrollHideDelay: u,
      ref: o,
      scrollbars: f,
      ...L("root"),
      ...v,
      children: [
        /* @__PURE__ */ m(
          $e,
          {
            ...p,
            ...L("viewport", { style: p == null ? void 0 : p.style }),
            ref: b,
            "data-offset-scrollbars": y === !0 ? "xy" : y || void 0,
            "data-scrollbars": f || void 0,
            onScroll: (w) => {
              var Z;
              (Z = p == null ? void 0 : p.onScroll) == null || Z.call(p, w), h == null || h({ x: w.currentTarget.scrollLeft, y: w.currentTarget.scrollTop });
              const { scrollTop: z, scrollHeight: Y, clientHeight: j } = w.currentTarget;
              z - (Y - j) === 0 && (T == null || T()), z === 0 && (x == null || x());
            },
            children: A
          }
        ),
        (f === "xy" || f === "x") && /* @__PURE__ */ m(
          Pe,
          {
            ...L("scrollbar"),
            orientation: "horizontal",
            "data-hidden": d === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            children: /* @__PURE__ */ m(Ae, { ...L("thumb") })
          }
        ),
        (f === "xy" || f === "y") && /* @__PURE__ */ m(
          Pe,
          {
            ...L("scrollbar"),
            orientation: "vertical",
            "data-hidden": d === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            children: /* @__PURE__ */ m(Ae, { ...L("thumb") })
          }
        ),
        /* @__PURE__ */ m(
          io,
          {
            ...L("corner"),
            "data-hovered": R || void 0,
            "data-hidden": d === "never" || void 0
          }
        )
      ]
    }
  );
});
G.displayName = "@mantine/core/ScrollArea";
const de = H((e, o) => {
  const {
    children: t,
    classNames: r,
    styles: s,
    scrollbarSize: l,
    scrollHideDelay: n,
    type: c,
    dir: a,
    offsetScrollbars: i,
    viewportRef: d,
    onScrollPositionChange: u,
    unstyled: p,
    variant: b,
    viewportProps: h,
    scrollbars: A,
    style: y,
    vars: f,
    onBottomReached: T,
    ...x
  } = N("ScrollAreaAutosize", He, e);
  return /* @__PURE__ */ m(X, { ...x, ref: o, style: [{ display: "flex", overflow: "auto" }, y], children: /* @__PURE__ */ m(X, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ m(
    G,
    {
      classNames: r,
      styles: s,
      scrollHideDelay: n,
      scrollbarSize: l,
      type: c,
      dir: a,
      offsetScrollbars: i,
      viewportRef: d,
      onScrollPositionChange: u,
      unstyled: p,
      variant: b,
      viewportProps: h,
      vars: f,
      scrollbars: A,
      onBottomReached: T,
      children: t
    }
  ) }) });
});
G.classes = ie;
de.displayName = "@mantine/core/ScrollAreaAutosize";
de.classes = ie;
G.Autosize = de;
function _e(e) {
  return typeof e == "string" ? { value: e, label: e } : "value" in e && !("label" in e) ? { value: e.value, label: e.value, disabled: e.disabled } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((o) => _e(o))
  } : e;
}
function rt(e) {
  return e ? e.map((o) => _e(o)) : [];
}
function So(e) {
  return e.reduce((o, t) => "group" in t ? { ...o, ...So(t.items) } : (o[t.value] = t, o), {});
}
var $ = { dropdown: "m_88b62a41", search: "m_985517d8", options: "m_b2821a6e", option: "m_92253aa5", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Co = {
  error: null
}, Po = se((e, { size: o }) => ({
  chevron: {
    "--combobox-chevron-size": re(o, "combobox-chevron-size")
  }
})), ue = H((e, o) => {
  const t = N("ComboboxChevron", Co, e), { size: r, error: s, style: l, className: n, classNames: c, styles: a, unstyled: i, vars: d, mod: u, ...p } = t, b = ne({
    name: "ComboboxChevron",
    classes: $,
    props: t,
    style: l,
    className: n,
    classNames: c,
    styles: a,
    unstyled: i,
    vars: d,
    varsResolver: Po,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ m(
    X,
    {
      component: "svg",
      ...p,
      ...b("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: s }, u],
      ref: o,
      children: /* @__PURE__ */ m(
        "path",
        {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
});
ue.classes = $;
ue.displayName = "@mantine/core/ComboboxChevron";
const [Ao, M] = le(
  "Combobox component was not found in tree"
), We = I(
  ({ size: e, onMouseDown: o, onClick: t, onClear: r, ...s }, l) => /* @__PURE__ */ m(
    no,
    {
      ref: l,
      size: e || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...s,
      onMouseDown: (n) => {
        n.preventDefault(), o == null || o(n);
      },
      onClick: (n) => {
        r(), t == null || t(n);
      }
    }
  )
);
We.displayName = "@mantine/core/ComboboxClearButton";
const To = {}, be = H((e, o) => {
  const { classNames: t, styles: r, className: s, style: l, hidden: n, ...c } = N(
    "ComboboxDropdown",
    To,
    e
  ), a = M();
  return /* @__PURE__ */ m(
    ee.Dropdown,
    {
      ...c,
      ref: o,
      role: "presentation",
      "data-hidden": n || void 0,
      ...a.getStyles("dropdown", { className: s, style: l, classNames: t, styles: r })
    }
  );
});
be.classes = $;
be.displayName = "@mantine/core/ComboboxDropdown";
const Do = {
  refProp: "ref"
}, ke = H((e, o) => {
  const { children: t, refProp: r } = N("ComboboxDropdownTarget", Do, e);
  if (M(), !ce(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ m(ee.Target, { ref: o, refProp: r, children: t });
});
ke.displayName = "@mantine/core/ComboboxDropdownTarget";
const Eo = {}, pe = H((e, o) => {
  const { classNames: t, className: r, style: s, styles: l, vars: n, ...c } = N(
    "ComboboxEmpty",
    Eo,
    e
  ), a = M();
  return /* @__PURE__ */ m(
    X,
    {
      ref: o,
      ...a.getStyles("empty", { className: r, classNames: t, styles: l, style: s }),
      ...c
    }
  );
});
pe.classes = $;
pe.displayName = "@mantine/core/ComboboxEmpty";
function me({
  onKeyDown: e,
  withKeyboardNavigation: o,
  withAriaAttributes: t,
  withExpandedAttribute: r,
  targetType: s,
  autoComplete: l
}) {
  const n = M(), [c, a] = C(null), i = (u) => {
    if (e == null || e(u), !n.readOnly && o) {
      if (u.nativeEvent.isComposing)
        return;
      if (u.nativeEvent.code === "ArrowDown" && (u.preventDefault(), n.store.dropdownOpened ? a(n.store.selectNextOption()) : (n.store.openDropdown("keyboard"), a(n.store.selectActiveOption()))), u.nativeEvent.code === "ArrowUp" && (u.preventDefault(), n.store.dropdownOpened ? a(n.store.selectPreviousOption()) : (n.store.openDropdown("keyboard"), a(n.store.selectActiveOption()))), u.nativeEvent.code === "Enter" || u.nativeEvent.code === "NumpadEnter") {
        if (u.nativeEvent.keyCode === 229)
          return;
        const p = n.store.getSelectedOptionIndex();
        n.store.dropdownOpened && p !== -1 ? (u.preventDefault(), n.store.clickSelectedOption()) : s === "button" && (u.preventDefault(), n.store.openDropdown("keyboard"));
      }
      u.nativeEvent.code === "Escape" && n.store.closeDropdown("keyboard"), u.nativeEvent.code === "Space" && s === "button" && (u.preventDefault(), n.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...t ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(n.store.listId && n.store.dropdownOpened) || void 0,
      "aria-controls": n.store.listId,
      "aria-activedescendant": n.store.dropdownOpened && c || void 0,
      autoComplete: l,
      "data-expanded": n.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": n.store.dropdownOpened || void 0
    } : {},
    onKeyDown: i
  };
}
const Oo = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Fe = H((e, o) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: s,
    withAriaAttributes: l,
    withExpandedAttribute: n,
    targetType: c,
    autoComplete: a,
    ...i
  } = N("ComboboxEventsTarget", Oo, e);
  if (!ce(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const d = M(), u = me({
    targetType: c,
    withAriaAttributes: l,
    withKeyboardNavigation: s,
    withExpandedAttribute: n,
    onKeyDown: t.props.onKeyDown,
    autoComplete: a
  });
  return De(t, {
    ...u,
    ...i,
    [r]: U(o, d.store.targetRef, t == null ? void 0 : t.ref)
  });
});
Fe.displayName = "@mantine/core/ComboboxEventsTarget";
const No = {}, fe = H((e, o) => {
  const { classNames: t, className: r, style: s, styles: l, vars: n, ...c } = N(
    "ComboboxFooter",
    No,
    e
  ), a = M();
  return /* @__PURE__ */ m(
    X,
    {
      ref: o,
      ...a.getStyles("footer", { className: r, classNames: t, style: s, styles: l }),
      ...c,
      onMouseDown: (i) => {
        i.preventDefault();
      }
    }
  );
});
fe.classes = $;
fe.displayName = "@mantine/core/ComboboxFooter";
const Ro = {}, he = H((e, o) => {
  const { classNames: t, className: r, style: s, styles: l, vars: n, children: c, label: a, ...i } = N(
    "ComboboxGroup",
    Ro,
    e
  ), d = M();
  return /* @__PURE__ */ Q(
    X,
    {
      ref: o,
      ...d.getStyles("group", { className: r, classNames: t, style: s, styles: l }),
      ...i,
      children: [
        a && /* @__PURE__ */ m("div", { ...d.getStyles("groupLabel", { classNames: t, styles: l }), children: a }),
        c
      ]
    }
  );
});
he.classes = $;
he.displayName = "@mantine/core/ComboboxGroup";
const zo = {}, ve = H((e, o) => {
  const { classNames: t, className: r, style: s, styles: l, vars: n, ...c } = N(
    "ComboboxHeader",
    zo,
    e
  ), a = M();
  return /* @__PURE__ */ m(
    X,
    {
      ref: o,
      ...a.getStyles("header", { className: r, classNames: t, style: s, styles: l }),
      ...c,
      onMouseDown: (i) => {
        i.preventDefault();
      }
    }
  );
});
ve.classes = $;
ve.displayName = "@mantine/core/ComboboxHeader";
function Me({
  value: e,
  valuesDivider: o = ",",
  ...t
}) {
  return /* @__PURE__ */ m(
    "input",
    {
      type: "hidden",
      value: Array.isArray(e) ? e.join(o) : e || "",
      ...t
    }
  );
}
Me.displayName = "@mantine/core/ComboboxHiddenInput";
const Io = {}, ge = H((e, o) => {
  const t = N("ComboboxOption", Io, e), {
    classNames: r,
    className: s,
    style: l,
    styles: n,
    vars: c,
    onClick: a,
    id: i,
    active: d,
    onMouseDown: u,
    onMouseOver: p,
    disabled: b,
    selected: h,
    mod: A,
    ...y
  } = t, f = M(), T = eo(), x = i || T;
  return /* @__PURE__ */ m(
    X,
    {
      ...f.getStyles("option", { className: s, classNames: r, styles: n, style: l }),
      ...y,
      ref: o,
      id: x,
      mod: [
        "combobox-option",
        { "combobox-active": d, "combobox-disabled": b, "combobox-selected": h },
        A
      ],
      role: "option",
      onClick: (v) => {
        var R;
        b ? v.preventDefault() : ((R = f.onOptionSubmit) == null || R.call(f, t.value, t), a == null || a(v));
      },
      onMouseDown: (v) => {
        v.preventDefault(), u == null || u(v);
      },
      onMouseOver: (v) => {
        f.resetSelectionOnOptionHover && f.store.resetSelectedOption(), p == null || p(v);
      }
    }
  );
});
ge.classes = $;
ge.displayName = "@mantine/core/ComboboxOption";
const Lo = {}, we = H((e, o) => {
  const t = N("ComboboxOptions", Lo, e), { classNames: r, className: s, style: l, styles: n, id: c, onMouseDown: a, labelledBy: i, ...d } = t, u = M(), p = to(c);
  return W(() => {
    u.store.setListId(p);
  }, [p]), /* @__PURE__ */ m(
    X,
    {
      ref: o,
      ...u.getStyles("options", { className: s, style: l, classNames: r, styles: n }),
      ...d,
      id: p,
      role: "listbox",
      "aria-labelledby": i,
      onMouseDown: (b) => {
        b.preventDefault(), a == null || a(b);
      }
    }
  );
});
we.classes = $;
we.displayName = "@mantine/core/ComboboxOptions";
const $o = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ye = H((e, o) => {
  const t = N("ComboboxSearch", $o, e), {
    classNames: r,
    styles: s,
    unstyled: l,
    vars: n,
    withAriaAttributes: c,
    onKeyDown: a,
    withKeyboardNavigation: i,
    size: d,
    ...u
  } = t, p = M(), b = p.getStyles("search"), h = me({
    targetType: "input",
    withAriaAttributes: c,
    withKeyboardNavigation: i,
    withExpandedAttribute: !1,
    onKeyDown: a,
    autoComplete: "off"
  });
  return /* @__PURE__ */ m(
    so,
    {
      ref: U(o, p.store.searchRef),
      classNames: [{ input: b.className }, r],
      styles: [{ input: b.style }, s],
      size: d || p.size,
      ...h,
      ...u,
      __staticSelector: "Combobox"
    }
  );
});
ye.classes = $;
ye.displayName = "@mantine/core/ComboboxSearch";
const Ho = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Xe = H((e, o) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: s,
    withAriaAttributes: l,
    withExpandedAttribute: n,
    targetType: c,
    autoComplete: a,
    ...i
  } = N("ComboboxTarget", Ho, e);
  if (!ce(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const d = M(), u = me({
    targetType: c,
    withAriaAttributes: l,
    withKeyboardNavigation: s,
    withExpandedAttribute: n,
    onKeyDown: t.props.onKeyDown,
    autoComplete: a
  }), p = De(t, {
    ...u,
    ...i
  });
  return /* @__PURE__ */ m(ee.Target, { ref: U(o, d.store.targetRef), children: p });
});
Xe.displayName = "@mantine/core/ComboboxTarget";
function _o(e, o, t) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!o[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (t) {
    for (let r = o.length - 1; r > -1; r -= 1)
      if (!o[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return e;
}
function Wo(e, o, t) {
  for (let r = e + 1; r < o.length; r += 1)
    if (!o[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (t) {
    for (let r = 0; r < o.length; r += 1)
      if (!o[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return e;
}
function ko(e) {
  for (let o = 0; o < e.length; o += 1)
    if (!e[o].hasAttribute("data-combobox-disabled"))
      return o;
  return -1;
}
function Fo({
  defaultOpened: e,
  opened: o,
  onOpenedChange: t,
  onDropdownClose: r,
  onDropdownOpen: s,
  loop: l = !0,
  scrollBehavior: n = "instant"
} = {}) {
  const [c, a] = lo({
    value: o,
    defaultValue: e,
    finalValue: !1,
    onChange: t
  }), i = O(null), d = O(-1), u = O(null), p = O(null), b = O(-1), h = O(-1), A = O(-1), y = P(
    (g = "unknown") => {
      c || (a(!0), s == null || s(g));
    },
    [a, s, c]
  ), f = P(
    (g = "unknown") => {
      c && (a(!1), r == null || r(g));
    },
    [a, r, c]
  ), T = P(
    (g = "unknown") => {
      c ? f(g) : y(g);
    },
    [f, y, c]
  ), x = P(() => {
    const g = document.querySelector(`#${i.current} [data-combobox-selected]`);
    g == null || g.removeAttribute("data-combobox-selected"), g == null || g.removeAttribute("aria-selected");
  }, []), v = P(
    (g) => {
      const _ = document.getElementById(i.current), E = _ == null ? void 0 : _.querySelectorAll("[data-combobox-option]");
      if (!E)
        return null;
      const k = g >= E.length ? 0 : g < 0 ? E.length - 1 : g;
      return d.current = k, E != null && E[k] && !E[k].hasAttribute("data-combobox-disabled") ? (x(), E[k].setAttribute("data-combobox-selected", "true"), E[k].setAttribute("aria-selected", "true"), E[k].scrollIntoView({ block: "nearest", behavior: n }), E[k].id) : null;
    },
    [n, x]
  ), R = P(() => {
    const g = document.querySelector(
      `#${i.current} [data-combobox-active]`
    );
    if (g) {
      const _ = document.querySelectorAll(
        `#${i.current} [data-combobox-option]`
      ), E = Array.from(_).findIndex((k) => k === g);
      return v(E);
    }
    return v(0);
  }, [v]), D = P(
    () => v(
      Wo(
        d.current,
        document.querySelectorAll(`#${i.current} [data-combobox-option]`),
        l
      )
    ),
    [v, l]
  ), L = P(
    () => v(
      _o(
        d.current,
        document.querySelectorAll(`#${i.current} [data-combobox-option]`),
        l
      )
    ),
    [v, l]
  ), w = P(
    () => v(
      ko(
        document.querySelectorAll(`#${i.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), z = P(
    (g = "selected", _) => {
      A.current = window.setTimeout(() => {
        var xe;
        const E = document.querySelectorAll(
          `#${i.current} [data-combobox-option]`
        ), k = Array.from(E).findIndex(
          (Ge) => Ge.hasAttribute(`data-combobox-${g}`)
        );
        d.current = k, _ != null && _.scrollIntoView && ((xe = E[k]) == null || xe.scrollIntoView({ block: "nearest", behavior: n }));
      }, 0);
    },
    []
  ), Y = P(() => {
    d.current = -1, x();
  }, [x]), j = P(() => {
    const g = document.querySelectorAll(
      `#${i.current} [data-combobox-option]`
    ), _ = g == null ? void 0 : g[d.current];
    _ == null || _.click();
  }, []), Z = P((g) => {
    i.current = g;
  }, []), Ve = P(() => {
    b.current = window.setTimeout(() => u.current.focus(), 0);
  }, []), qe = P(() => {
    h.current = window.setTimeout(() => p.current.focus(), 0);
  }, []), Ke = P(() => d.current, []);
  return W(
    () => () => {
      window.clearTimeout(b.current), window.clearTimeout(h.current), window.clearTimeout(A.current);
    },
    []
  ), {
    dropdownOpened: c,
    openDropdown: y,
    closeDropdown: f,
    toggleDropdown: T,
    selectedOptionIndex: d.current,
    getSelectedOptionIndex: Ke,
    selectOption: v,
    selectFirstOption: w,
    selectActiveOption: R,
    selectNextOption: D,
    selectPreviousOption: L,
    resetSelectedOption: Y,
    updateSelectedOptionIndex: z,
    listId: i.current,
    setListId: Z,
    clickSelectedOption: j,
    searchRef: u,
    focusSearchInput: Ve,
    targetRef: p,
    focusTarget: qe
  };
}
const Mo = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, Xo = se((e, { size: o, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": Se(o),
    "--combobox-option-padding": re(o, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : Te(t),
    "--combobox-option-fz": Se(o),
    "--combobox-option-padding": re(o, "combobox-option-padding")
  }
}));
function S(e) {
  const o = N("Combobox", Mo, e), {
    classNames: t,
    styles: r,
    unstyled: s,
    children: l,
    store: n,
    vars: c,
    onOptionSubmit: a,
    onClose: i,
    size: d,
    dropdownPadding: u,
    resetSelectionOnOptionHover: p,
    __staticSelector: b,
    readOnly: h,
    ...A
  } = o, y = Fo(), f = n || y, T = ne({
    name: b || "Combobox",
    classes: $,
    props: o,
    classNames: t,
    styles: r,
    unstyled: s,
    vars: c,
    varsResolver: Xo
  }), x = () => {
    i == null || i(), f.closeDropdown();
  };
  return /* @__PURE__ */ m(
    Ao,
    {
      value: {
        getStyles: T,
        store: f,
        onOptionSubmit: a,
        size: d,
        resetSelectionOnOptionHover: p,
        readOnly: h
      },
      children: /* @__PURE__ */ m(
        ee,
        {
          opened: f.dropdownOpened,
          ...A,
          onClose: x,
          withRoles: !1,
          unstyled: s,
          children: l
        }
      )
    }
  );
}
const Yo = (e) => e;
S.extend = Yo;
S.classes = $;
S.displayName = "@mantine/core/Combobox";
S.Target = Xe;
S.Dropdown = be;
S.Options = we;
S.Option = ge;
S.Search = ye;
S.Empty = pe;
S.Chevron = ue;
S.Footer = fe;
S.Header = ve;
S.EventsTarget = Fe;
S.DropdownTarget = ke;
S.Group = he;
S.ClearButton = We;
S.HiddenInput = Me;
function K(e) {
  return "group" in e;
}
function Ye({
  options: e,
  search: o,
  limit: t
}) {
  const r = o.trim().toLowerCase(), s = [];
  for (let l = 0; l < e.length; l += 1) {
    const n = e[l];
    if (s.length === t)
      return s;
    K(n) && s.push({
      group: n.group,
      items: Ye({
        options: n.items,
        search: o,
        limit: t - s.length
      })
    }), K(n) || n.label.toLowerCase().includes(r) && s.push(n);
  }
  return s;
}
function Uo(e) {
  if (e.length === 0)
    return !0;
  for (const o of e)
    if (!("group" in o) || o.items.length > 0)
      return !1;
  return !0;
}
function Ue(e, o = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const t of e)
      if (K(t))
        Ue(t.items, o);
      else {
        if (typeof t.value > "u")
          throw new Error("[@mantine/core] Each option must have value property");
        if (typeof t.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof t.value}`
          );
        if (o.has(t.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${t.value}" was provided more than once`
          );
        o.add(t.value);
      }
}
function Bo(e, o) {
  return Array.isArray(e) ? e.includes(o) : e === o;
}
function Be({
  data: e,
  withCheckIcon: o,
  value: t,
  checkIconPosition: r,
  unstyled: s,
  renderOption: l
}) {
  if (!K(e)) {
    const c = Bo(t, e.value), a = o && c && /* @__PURE__ */ m(Je, { className: $.optionsDropdownCheckIcon }), i = /* @__PURE__ */ Q(je, { children: [
      r === "left" && a,
      /* @__PURE__ */ m("span", { children: e.label }),
      r === "right" && a
    ] });
    return /* @__PURE__ */ m(
      S.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: Ze({ [$.optionsDropdownOption]: !s }),
        "data-reverse": r === "right" || void 0,
        "data-checked": c || void 0,
        "aria-selected": c,
        active: c,
        children: typeof l == "function" ? l({ option: e, checked: c }) : i
      }
    );
  }
  const n = e.items.map((c) => /* @__PURE__ */ m(
    Be,
    {
      data: c,
      value: t,
      unstyled: s,
      withCheckIcon: o,
      checkIconPosition: r,
      renderOption: l
    },
    c.value
  ));
  return /* @__PURE__ */ m(S.Group, { label: e.group, children: n });
}
function nt({
  data: e,
  hidden: o,
  hiddenWhenEmpty: t,
  filter: r,
  search: s,
  limit: l,
  maxDropdownHeight: n,
  withScrollArea: c = !0,
  filterOptions: a = !0,
  withCheckIcon: i = !1,
  value: d,
  checkIconPosition: u,
  nothingFoundMessage: p,
  unstyled: b,
  labelId: h,
  renderOption: A,
  scrollAreaProps: y,
  "aria-label": f
}) {
  Ue(e);
  const x = typeof s == "string" ? (r || Ye)({
    options: e,
    search: a ? s : "",
    limit: l ?? 1 / 0
  }) : e, v = Uo(x), R = x.map((D) => /* @__PURE__ */ m(
    Be,
    {
      data: D,
      withCheckIcon: i,
      value: d,
      checkIconPosition: u,
      unstyled: b,
      renderOption: A
    },
    K(D) ? D.group : D.value
  ));
  return /* @__PURE__ */ m(S.Dropdown, { hidden: o || t && v, children: /* @__PURE__ */ Q(S.Options, { labelledBy: h, "aria-label": f, children: [
    c ? /* @__PURE__ */ m(
      G.Autosize,
      {
        mah: n ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...y,
        children: R
      }
    ) : R,
    v && p && /* @__PURE__ */ m(S.Empty, { children: p })
  ] }) });
}
export {
  S as C,
  nt as O,
  So as a,
  rt as g,
  K as i,
  Fo as u
};
