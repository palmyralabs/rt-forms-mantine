import { jsx as b, jsxs as ie } from "react/jsx-runtime";
import { useRef as R, useEffect as T, useMemo as ae, useCallback as ue, forwardRef as v, useState as p } from "react";
import { u as I, B as U, f as K, d as de, g as he, r as fe } from "./factory.js";
import { c as Q } from "./create-safe-context.js";
import { u as be } from "./use-isomorphic-effect.js";
import { u as Y } from "./use-merged-ref.js";
import { u as me } from "./DirectionProvider.js";
function W(e) {
  const t = R(e);
  return T(() => {
    t.current = e;
  }), ae(() => (...o) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...o);
  }, []);
}
function B(e, t) {
  const o = W(e), n = R(0);
  return T(() => () => window.clearTimeout(n.current), []), ue(
    (...r) => {
      window.clearTimeout(n.current), n.current = window.setTimeout(() => o(...r), t);
    },
    [o, t]
  );
}
const [pe, C] = Q(
  "ScrollArea.Root component was not found in tree"
);
function X(e, t) {
  const o = W(t);
  be(() => {
    let n = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(o);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(n), r.unobserve(e);
      };
    }
  }, [e, o]);
}
const Se = v((e, t) => {
  const { style: o, ...n } = e, r = C(), [s, l] = p(0), [c, d] = p(0), a = !!(s && c);
  return X(r.scrollbarX, () => {
    var h;
    const i = ((h = r.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
    r.onCornerHeightChange(i), d(i);
  }), X(r.scrollbarY, () => {
    var h;
    const i = ((h = r.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
    r.onCornerWidthChange(i), l(i);
  }), a ? /* @__PURE__ */ b("div", { ...n, ref: t, style: { ...o, width: s, height: c } }) : null;
}), ve = v((e, t) => {
  const o = C(), n = !!(o.scrollbarX && o.scrollbarY);
  return o.type !== "scroll" && n ? /* @__PURE__ */ b(Se, { ...e, ref: t }) : null;
}), we = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Z = v((e, t) => {
  const o = I("ScrollAreaRoot", we, e), { type: n, scrollHideDelay: r, scrollbars: s, ...l } = o, [c, d] = p(null), [a, i] = p(null), [h, f] = p(null), [u, S] = p(null), [E, y] = p(null), [w, A] = p(0), [x, M] = p(0), [L, D] = p(!1), [P, m] = p(!1), g = Y(t, (z) => d(z));
  return /* @__PURE__ */ b(
    pe,
    {
      value: {
        type: n,
        scrollHideDelay: r,
        scrollArea: c,
        viewport: a,
        onViewportChange: i,
        content: h,
        onContentChange: f,
        scrollbarX: u,
        onScrollbarXChange: S,
        scrollbarXEnabled: L,
        onScrollbarXEnabledChange: D,
        scrollbarY: E,
        onScrollbarYChange: y,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: m,
        onCornerWidthChange: A,
        onCornerHeightChange: M
      },
      children: /* @__PURE__ */ b(
        U,
        {
          ...l,
          ref: g,
          __vars: {
            "--sa-corner-width": s !== "xy" ? "0px" : `${w}px`,
            "--sa-corner-height": s !== "xy" ? "0px" : `${x}px`
          }
        }
      )
    }
  );
});
Z.displayName = "@mantine/core/ScrollAreaRoot";
function ee(e, t) {
  const o = e / t;
  return Number.isNaN(o) ? 0 : o;
}
function F(e) {
  const t = ee(e.viewport, e.content), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - o) * t;
  return Math.max(n, 18);
}
function oe(e, t) {
  return (o) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (o - e[0]);
  };
}
function ge(e, [t, o]) {
  return Math.min(o, Math.max(t, e));
}
function q(e, t, o = "ltr") {
  const n = F(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - r, l = t.content - t.viewport, c = s - n, d = o === "ltr" ? [0, l] : [l * -1, 0], a = ge(e, d);
  return oe([0, l], [0, c])(a);
}
function ye(e, t, o, n = "ltr") {
  const r = F(o), s = r / 2, l = t || s, c = r - l, d = o.scrollbar.paddingStart + l, a = o.scrollbar.size - o.scrollbar.paddingEnd - c, i = o.content - o.viewport, h = n === "ltr" ? [0, i] : [i * -1, 0];
  return oe([d, a], h)(e);
}
function te(e, t) {
  return e > 0 && e < t;
}
function V(e) {
  return e ? parseInt(e, 10) : 0;
}
function H(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return (n) => {
    e == null || e(n), (o === !1 || !n.defaultPrevented) && (t == null || t(n));
  };
}
const [Pe, re] = Q(
  "ScrollAreaScrollbar was not found in tree"
), ne = v((e, t) => {
  const {
    sizes: o,
    hasThumb: n,
    onThumbChange: r,
    onThumbPointerUp: s,
    onThumbPointerDown: l,
    onThumbPositionChange: c,
    onDragScroll: d,
    onWheelScroll: a,
    onResize: i,
    ...h
  } = e, f = C(), [u, S] = p(null), E = Y(t, (m) => S(m)), y = R(null), w = R(""), { viewport: A } = f, x = o.content - o.viewport, M = W(a), L = W(c), D = B(i, 10), P = (m) => {
    if (y.current) {
      const g = m.clientX - y.current.left, z = m.clientY - y.current.top;
      d({ x: g, y: z });
    }
  };
  return T(() => {
    const m = (g) => {
      const z = g.target;
      (u == null ? void 0 : u.contains(z)) && M(g, x);
    };
    return document.addEventListener("wheel", m, { passive: !1 }), () => document.removeEventListener("wheel", m, { passive: !1 });
  }, [A, u, x, M]), T(L, [o, L]), X(u, D), X(f.content, D), /* @__PURE__ */ b(
    Pe,
    {
      value: {
        scrollbar: u,
        hasThumb: n,
        onThumbChange: W(r),
        onThumbPointerUp: W(s),
        onThumbPositionChange: L,
        onThumbPointerDown: W(l)
      },
      children: /* @__PURE__ */ b(
        "div",
        {
          ...h,
          ref: E,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...h.style },
          onPointerDown: H(e.onPointerDown, (m) => {
            m.preventDefault(), m.button === 0 && (m.target.setPointerCapture(m.pointerId), y.current = u.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(m));
          }),
          onPointerMove: H(e.onPointerMove, P),
          onPointerUp: H(e.onPointerUp, (m) => {
            m.preventDefault();
            const g = m.target;
            g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), document.body.style.webkitUserSelect = w.current, y.current = null;
          })
        }
      )
    }
  );
}), Ce = v(
  (e, t) => {
    const { sizes: o, onSizesChange: n, style: r, ...s } = e, l = C(), [c, d] = p(), a = R(null), i = Y(t, a, l.onScrollbarXChange);
    return T(() => {
      a.current && d(getComputedStyle(a.current));
    }, [a]), /* @__PURE__ */ b(
      ne,
      {
        "data-orientation": "horizontal",
        ...s,
        ref: i,
        sizes: o,
        style: {
          ...r,
          "--sa-thumb-width": `${F(o)}px`
        },
        onThumbPointerDown: (h) => e.onThumbPointerDown(h.x),
        onDragScroll: (h) => e.onDragScroll(h.x),
        onWheelScroll: (h, f) => {
          if (l.viewport) {
            const u = l.viewport.scrollLeft + h.deltaX;
            e.onWheelScroll(u), te(u, f) && h.preventDefault();
          }
        },
        onResize: () => {
          a.current && l.viewport && c && n({
            content: l.viewport.scrollWidth,
            viewport: l.viewport.offsetWidth,
            scrollbar: {
              size: a.current.clientWidth,
              paddingStart: V(c.paddingLeft),
              paddingEnd: V(c.paddingRight)
            }
          });
        }
      }
    );
  }
), Te = v(
  (e, t) => {
    const { sizes: o, onSizesChange: n, style: r, ...s } = e, l = C(), [c, d] = p(), a = R(null), i = Y(t, a, l.onScrollbarYChange);
    return T(() => {
      a.current && d(window.getComputedStyle(a.current));
    }, []), /* @__PURE__ */ b(
      ne,
      {
        ...s,
        "data-orientation": "vertical",
        ref: i,
        sizes: o,
        style: {
          "--sa-thumb-height": `${F(o)}px`,
          ...r
        },
        onThumbPointerDown: (h) => e.onThumbPointerDown(h.y),
        onDragScroll: (h) => e.onDragScroll(h.y),
        onWheelScroll: (h, f) => {
          if (l.viewport) {
            const u = l.viewport.scrollTop + h.deltaY;
            e.onWheelScroll(u), te(u, f) && h.preventDefault();
          }
        },
        onResize: () => {
          a.current && l.viewport && c && n({
            content: l.viewport.scrollHeight,
            viewport: l.viewport.offsetHeight,
            scrollbar: {
              size: a.current.clientHeight,
              paddingStart: V(c.paddingTop),
              paddingEnd: V(c.paddingBottom)
            }
          });
        }
      }
    );
  }
), _ = v((e, t) => {
  const { orientation: o = "vertical", ...n } = e, { dir: r } = me(), s = C(), l = R(null), c = R(0), [d, a] = p({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), i = ee(d.viewport, d.content), h = {
    ...n,
    sizes: d,
    onSizesChange: a,
    hasThumb: i > 0 && i < 1,
    onThumbChange: (u) => {
      l.current = u;
    },
    onThumbPointerUp: () => {
      c.current = 0;
    },
    onThumbPointerDown: (u) => {
      c.current = u;
    }
  }, f = (u, S) => ye(u, c.current, d, S);
  return o === "horizontal" ? /* @__PURE__ */ b(
    Ce,
    {
      ...h,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && l.current) {
          const u = s.viewport.scrollLeft, S = q(u, d, r);
          l.current.style.transform = `translate3d(${S}px, 0, 0)`;
        }
      },
      onWheelScroll: (u) => {
        s.viewport && (s.viewport.scrollLeft = u);
      },
      onDragScroll: (u) => {
        s.viewport && (s.viewport.scrollLeft = f(u, r));
      }
    }
  ) : o === "vertical" ? /* @__PURE__ */ b(
    Te,
    {
      ...h,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && l.current) {
          const u = s.viewport.scrollTop, S = q(u, d);
          d.scrollbar.size === 0 ? l.current.style.opacity = "0" : l.current.style.opacity = "1", l.current.style.transform = `translate3d(0, ${S}px, 0)`;
        }
      },
      onWheelScroll: (u) => {
        s.viewport && (s.viewport.scrollTop = u);
      },
      onDragScroll: (u) => {
        s.viewport && (s.viewport.scrollTop = f(u));
      }
    }
  ) : null;
}), le = v(
  (e, t) => {
    const o = C(), { forceMount: n, ...r } = e, [s, l] = p(!1), c = e.orientation === "horizontal", d = B(() => {
      if (o.viewport) {
        const a = o.viewport.offsetWidth < o.viewport.scrollWidth, i = o.viewport.offsetHeight < o.viewport.scrollHeight;
        l(c ? a : i);
      }
    }, 10);
    return X(o.viewport, d), X(o.content, d), n || s ? /* @__PURE__ */ b(
      _,
      {
        "data-state": s ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), xe = v(
  (e, t) => {
    const { forceMount: o, ...n } = e, r = C(), [s, l] = p(!1);
    return T(() => {
      const { scrollArea: c } = r;
      let d = 0;
      if (c) {
        const a = () => {
          window.clearTimeout(d), l(!0);
        }, i = () => {
          d = window.setTimeout(() => l(!1), r.scrollHideDelay);
        };
        return c.addEventListener("pointerenter", a), c.addEventListener("pointerleave", i), () => {
          window.clearTimeout(d), c.removeEventListener("pointerenter", a), c.removeEventListener("pointerleave", i);
        };
      }
    }, [r.scrollArea, r.scrollHideDelay]), o || s ? /* @__PURE__ */ b(
      le,
      {
        "data-state": s ? "visible" : "hidden",
        ...n,
        ref: t
      }
    ) : null;
  }
), Ae = v(
  (e, t) => {
    const { forceMount: o, ...n } = e, r = C(), s = e.orientation === "horizontal", [l, c] = p("hidden"), d = B(() => c("idle"), 100);
    return T(() => {
      if (l === "idle") {
        const a = window.setTimeout(() => c("hidden"), r.scrollHideDelay);
        return () => window.clearTimeout(a);
      }
    }, [l, r.scrollHideDelay]), T(() => {
      const { viewport: a } = r, i = s ? "scrollLeft" : "scrollTop";
      if (a) {
        let h = a[i];
        const f = () => {
          const u = a[i];
          h !== u && (c("scrolling"), d()), h = u;
        };
        return a.addEventListener("scroll", f), () => a.removeEventListener("scroll", f);
      }
    }, [r.viewport, s, d]), o || l !== "hidden" ? /* @__PURE__ */ b(
      _,
      {
        "data-state": l === "hidden" ? "hidden" : "visible",
        ...n,
        ref: t,
        onPointerEnter: H(e.onPointerEnter, () => c("interacting")),
        onPointerLeave: H(e.onPointerLeave, () => c("idle"))
      }
    ) : null;
  }
), G = v(
  (e, t) => {
    const { forceMount: o, ...n } = e, r = C(), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: l } = r, c = e.orientation === "horizontal";
    return T(() => (c ? s(!0) : l(!0), () => {
      c ? s(!1) : l(!1);
    }), [c, s, l]), r.type === "hover" ? /* @__PURE__ */ b(xe, { ...n, ref: t, forceMount: o }) : r.type === "scroll" ? /* @__PURE__ */ b(Ae, { ...n, ref: t, forceMount: o }) : r.type === "auto" ? /* @__PURE__ */ b(le, { ...n, ref: t, forceMount: o }) : r.type === "always" ? /* @__PURE__ */ b(_, { ...n, ref: t }) : null;
  }
);
function De(e, t = () => {
}) {
  let o = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function r() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, l = o.left !== s.left, c = o.top !== s.top;
    (l || c) && t(), o = s, n = window.requestAnimationFrame(r);
  }(), () => window.cancelAnimationFrame(n);
}
const Re = v((e, t) => {
  const { style: o, ...n } = e, r = C(), s = re(), { onThumbPositionChange: l } = s, c = Y(t, (i) => s.onThumbChange(i)), d = R(), a = B(() => {
    d.current && (d.current(), d.current = void 0);
  }, 100);
  return T(() => {
    const { viewport: i } = r;
    if (i) {
      const h = () => {
        if (a(), !d.current) {
          const f = De(i, l);
          d.current = f, l();
        }
      };
      return l(), i.addEventListener("scroll", h), () => i.removeEventListener("scroll", h);
    }
  }, [r.viewport, a, l]), /* @__PURE__ */ b(
    "div",
    {
      "data-state": s.hasThumb ? "visible" : "hidden",
      ...n,
      ref: c,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...o
      },
      onPointerDownCapture: H(e.onPointerDownCapture, (i) => {
        const f = i.target.getBoundingClientRect(), u = i.clientX - f.left, S = i.clientY - f.top;
        s.onThumbPointerDown({ x: u, y: S });
      }),
      onPointerUp: H(e.onPointerUp, s.onThumbPointerUp)
    }
  );
}), J = v(
  (e, t) => {
    const { forceMount: o, ...n } = e, r = re();
    return o || r.hasThumb ? /* @__PURE__ */ b(Re, { ref: t, ...n }) : null;
  }
), se = v(
  ({ children: e, style: t, ...o }, n) => {
    const r = C(), s = Y(n, r.onViewportChange);
    return /* @__PURE__ */ b(
      U,
      {
        ...o,
        ref: s,
        style: {
          overflowX: r.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: r.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        },
        children: /* @__PURE__ */ b("div", { style: { minWidth: "100%", display: "table" }, ref: r.onContentChange, children: e })
      }
    );
  }
);
se.displayName = "@mantine/core/ScrollAreaViewport";
var k = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const ce = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, ze = he((e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": fe(t)
  }
})), N = K((e, t) => {
  const o = I("ScrollArea", ce, e), {
    classNames: n,
    className: r,
    style: s,
    styles: l,
    unstyled: c,
    scrollbarSize: d,
    vars: a,
    type: i,
    scrollHideDelay: h,
    viewportProps: f,
    viewportRef: u,
    onScrollPositionChange: S,
    children: E,
    offsetScrollbars: y,
    scrollbars: w,
    onBottomReached: A,
    onTopReached: x,
    ...M
  } = o, [L, D] = p(!1), P = de({
    name: "ScrollArea",
    props: o,
    classes: k,
    className: r,
    style: s,
    classNames: n,
    styles: l,
    unstyled: c,
    vars: a,
    varsResolver: ze
  });
  return /* @__PURE__ */ ie(
    Z,
    {
      type: i === "never" ? "always" : i,
      scrollHideDelay: h,
      ref: t,
      scrollbars: w,
      ...P("root"),
      ...M,
      children: [
        /* @__PURE__ */ b(
          se,
          {
            ...f,
            ...P("viewport", { style: f == null ? void 0 : f.style }),
            ref: u,
            "data-offset-scrollbars": y === !0 ? "xy" : y || void 0,
            "data-scrollbars": w || void 0,
            onScroll: (m) => {
              var j;
              (j = f == null ? void 0 : f.onScroll) == null || j.call(f, m), S == null || S({ x: m.currentTarget.scrollLeft, y: m.currentTarget.scrollTop });
              const { scrollTop: g, scrollHeight: z, clientHeight: $ } = m.currentTarget;
              g - (z - $) === 0 && (A == null || A()), g === 0 && (x == null || x());
            },
            children: E
          }
        ),
        (w === "xy" || w === "x") && /* @__PURE__ */ b(
          G,
          {
            ...P("scrollbar"),
            orientation: "horizontal",
            "data-hidden": i === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            children: /* @__PURE__ */ b(J, { ...P("thumb") })
          }
        ),
        (w === "xy" || w === "y") && /* @__PURE__ */ b(
          G,
          {
            ...P("scrollbar"),
            orientation: "vertical",
            "data-hidden": i === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            children: /* @__PURE__ */ b(J, { ...P("thumb") })
          }
        ),
        /* @__PURE__ */ b(
          ve,
          {
            ...P("corner"),
            "data-hovered": L || void 0,
            "data-hidden": i === "never" || void 0
          }
        )
      ]
    }
  );
});
N.displayName = "@mantine/core/ScrollArea";
const O = K((e, t) => {
  const {
    children: o,
    classNames: n,
    styles: r,
    scrollbarSize: s,
    scrollHideDelay: l,
    type: c,
    dir: d,
    offsetScrollbars: a,
    viewportRef: i,
    onScrollPositionChange: h,
    unstyled: f,
    variant: u,
    viewportProps: S,
    scrollbars: E,
    style: y,
    vars: w,
    onBottomReached: A,
    ...x
  } = I("ScrollAreaAutosize", ce, e);
  return /* @__PURE__ */ b(U, { ...x, ref: t, style: [{ display: "flex", overflow: "auto" }, y], children: /* @__PURE__ */ b(U, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ b(
    N,
    {
      classNames: n,
      styles: r,
      scrollHideDelay: l,
      scrollbarSize: s,
      type: c,
      dir: d,
      offsetScrollbars: a,
      viewportRef: i,
      onScrollPositionChange: h,
      unstyled: f,
      variant: u,
      viewportProps: S,
      vars: w,
      scrollbars: E,
      onBottomReached: A,
      children: o
    }
  ) }) });
});
N.classes = k;
O.displayName = "@mantine/core/ScrollAreaAutosize";
O.classes = k;
N.Autosize = O;
export {
  N as S
};
