import { jsxs as z, Fragment as X, jsx as a } from "react/jsx-runtime";
import { G as Te } from "../../../chunks/iconBase.js";
import { useState as W, useRef as ee, useCallback as oe, useEffect as De, cloneElement as te, createContext as Me, useContext as Oe } from "react";
import { f as ne, u as B, a as Re, d as re, B as ae, g as se, j as ie, m as Fe } from "../../../chunks/factory.js";
import { u as le, s as pe, g as Ce, a as ce, i as de, O as ue, F as Ee, b as Ge, c as Ne, d as Se, e as Ae, f as ze, h as Be, j as Le, k as je, o as ke, l as Ie, m as Ue, n as $e, p as qe, q as He } from "../../../chunks/use-floating-auto-update.js";
import { g as fe } from "../../../chunks/get-theme-color.js";
import { u as Ve } from "../../../chunks/DirectionProvider.js";
import { u as Xe, T as Ye } from "../../../chunks/Transition.js";
import { u as me } from "../../../chunks/use-merged-ref.js";
import { u as Ze } from "../../../chunks/use-id.js";
function he(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (o, n) => ({ ...o, ...he(n, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
const _e = {
  duration: 100,
  transition: "fade"
};
function Je(e, t) {
  return { ..._e, ...t, ...e };
}
function Ke({
  offset: e,
  position: t,
  defaultOpened: o
}) {
  const [n, u] = W(o), g = ee(), { x: l, y, elements: m, refs: s, update: h, placement: w } = le({
    placement: t,
    middleware: [
      pe({
        crossAxis: !0,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  }), T = w.includes("right") ? e : t.includes("left") ? e * -1 : 0, f = w.includes("bottom") ? e : t.includes("top") ? e * -1 : 0, p = oe(
    ({ clientX: i, clientY: r }) => {
      s.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: i,
            y: r,
            left: i + T,
            top: r + f,
            right: i,
            bottom: r
          };
        }
      });
    },
    [m.reference]
  );
  return De(() => {
    if (s.floating.current) {
      const i = g.current;
      i.addEventListener("mousemove", p);
      const r = Ce(s.floating.current);
      return r.forEach((v) => {
        v.addEventListener("scroll", h);
      }), () => {
        i.removeEventListener("mousemove", p), r.forEach((v) => {
          v.removeEventListener("scroll", h);
        });
      };
    }
  }, [m.reference, s.floating.current, h, p, n]), { handleMouseMove: p, x: l, y, opened: n, setOpened: u, boundaryRef: g, floating: s.setFloating };
}
var L = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
const Qe = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  defaultOpened: !1,
  position: "right",
  zIndex: ce("popover")
}, We = se((e, { radius: t, color: o }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : ie(t),
    "--tooltip-bg": o ? fe(o, e) : void 0,
    "--tooltip-color": o ? "var(--mantine-color-white)" : void 0
  }
})), Y = ne((e, t) => {
  const o = B("TooltipFloating", Qe, e), {
    children: n,
    refProp: u,
    withinPortal: g,
    style: l,
    className: y,
    classNames: m,
    styles: s,
    unstyled: h,
    radius: w,
    color: T,
    label: f,
    offset: p,
    position: i,
    multiline: r,
    zIndex: v,
    disabled: E,
    defaultOpened: D,
    variant: M,
    vars: O,
    portalProps: P,
    ...R
  } = o, F = Re(), c = re({
    name: "TooltipFloating",
    props: o,
    classes: L,
    className: y,
    style: l,
    classNames: m,
    styles: s,
    unstyled: h,
    rootSelector: "tooltip",
    vars: O,
    varsResolver: We
  }), { handleMouseMove: j, x: N, y: S, opened: k, boundaryRef: I, floating: U, setOpened: A } = Ke({
    offset: p,
    position: i,
    defaultOpened: D
  });
  if (!de(n))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const $ = me(I, n.ref, t), q = (C) => {
    var x, b;
    (b = (x = n.props).onMouseEnter) == null || b.call(x, C), j(C), A(!0);
  }, H = (C) => {
    var x, b;
    (b = (x = n.props).onMouseLeave) == null || b.call(x, C), A(!1);
  };
  return /* @__PURE__ */ z(X, { children: [
    /* @__PURE__ */ a(ue, { ...P, withinPortal: g, children: /* @__PURE__ */ a(
      ae,
      {
        ...R,
        ...c("tooltip", {
          style: {
            ...he(l, F),
            zIndex: v,
            display: !E && k ? "block" : "none",
            top: (S && Math.round(S)) ?? "",
            left: (N && Math.round(N)) ?? ""
          }
        }),
        variant: M,
        ref: U,
        mod: { multiline: r },
        children: f
      }
    ) }),
    te(n, {
      ...n.props,
      [u]: $,
      onMouseEnter: q,
      onMouseLeave: H
    })
  ] });
});
Y.classes = L;
Y.displayName = "@mantine/core/TooltipFloating";
const ve = Me(!1), eo = ve.Provider, oo = () => Oe(ve), to = {
  openDelay: 0,
  closeDelay: 0
};
function Z(e) {
  const { openDelay: t, closeDelay: o, children: n } = B("TooltipGroup", to, e);
  return /* @__PURE__ */ a(eo, { value: !0, children: /* @__PURE__ */ a(Ee, { delay: { open: t, close: o }, children: n }) });
}
Z.displayName = "@mantine/core/TooltipGroup";
Z.extend = (e) => e;
function no(e) {
  var P, R, F;
  const [t, o] = W(e.defaultOpened), u = typeof e.opened == "boolean" ? e.opened : t, g = oo(), l = Ze(), { delay: y, currentId: m, setCurrentId: s } = Ge(), h = oe(
    (c) => {
      o(c), c && s(l);
    },
    [s, l]
  ), {
    x: w,
    y: T,
    context: f,
    refs: p,
    update: i,
    placement: r,
    middlewareData: { arrow: { x: v, y: E } = {} }
  } = le({
    strategy: e.strategy,
    placement: e.position,
    open: u,
    onOpenChange: h,
    middleware: [
      ke(e.offset),
      pe({ padding: 8 }),
      Ie(),
      Ue({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [$e()] : []
    ]
  }), { getReferenceProps: D, getFloatingProps: M } = Ne([
    Se(f, {
      enabled: (P = e.events) == null ? void 0 : P.hover,
      delay: g ? y : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((R = e.events) != null && R.touch)
    }),
    Ae(f, { enabled: (F = e.events) == null ? void 0 : F.focus, visibleOnly: !0 }),
    ze(f, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    Be(f, { enabled: typeof e.opened > "u" }),
    Le(f, { id: l })
  ]);
  je({
    opened: u,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: p, update: i }
  }), Xe(() => {
    var c;
    (c = e.onPositionChange) == null || c.call(e, r);
  }, [r]);
  const O = u && m && m !== l;
  return {
    x: w,
    y: T,
    arrowX: v,
    arrowY: E,
    reference: p.setReference,
    floating: p.setFloating,
    getFloatingProps: M,
    getReferenceProps: D,
    isGroupPhase: O,
    opened: u,
    placement: r
  };
}
const Q = {
  position: "top",
  refProp: "ref",
  withinPortal: !0,
  inline: !1,
  defaultOpened: !1,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: !0, focus: !1, touch: !1 },
  zIndex: ce("popover"),
  positionDependencies: []
}, ro = se((e, { radius: t, color: o }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : ie(t),
    "--tooltip-bg": o ? fe(o, e) : void 0,
    "--tooltip-color": o ? "var(--mantine-color-white)" : void 0
  }
})), G = ne((e, t) => {
  const o = B("Tooltip", Q, e), {
    children: n,
    position: u,
    refProp: g,
    label: l,
    openDelay: y,
    closeDelay: m,
    onPositionChange: s,
    opened: h,
    defaultOpened: w,
    withinPortal: T,
    radius: f,
    color: p,
    classNames: i,
    styles: r,
    unstyled: v,
    style: E,
    className: D,
    withArrow: M,
    arrowSize: O,
    arrowOffset: P,
    arrowRadius: R,
    arrowPosition: F,
    offset: c,
    transitionProps: j,
    multiline: N,
    events: S,
    zIndex: k,
    disabled: I,
    positionDependencies: U,
    onClick: A,
    onMouseEnter: $,
    onMouseLeave: q,
    inline: H,
    variant: C,
    keepMounted: x,
    vars: b,
    portalProps: ge,
    mod: ye,
    floatingStrategy: _,
    ...we
  } = B("Tooltip", Q, o), { dir: Pe } = Ve(), J = ee(null), d = no({
    position: qe(Pe, u),
    closeDelay: m,
    openDelay: y,
    onPositionChange: s,
    opened: h,
    defaultOpened: w,
    events: S,
    arrowRef: J,
    arrowOffset: P,
    offset: typeof c == "number" ? c + (M ? O / 2 : 0) : c,
    positionDependencies: [...U, n],
    inline: H,
    strategy: _
  }), V = re({
    name: "Tooltip",
    props: o,
    classes: L,
    className: D,
    style: E,
    classNames: i,
    styles: r,
    unstyled: v,
    rootSelector: "tooltip",
    vars: b,
    varsResolver: ro
  });
  if (!de(n))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const xe = me(d.reference, n.ref, t), K = Je(j, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ z(X, { children: [
    /* @__PURE__ */ a(ue, { ...ge, withinPortal: T, children: /* @__PURE__ */ a(
      Ye,
      {
        ...K,
        keepMounted: x,
        mounted: !I && !!d.opened,
        duration: d.isGroupPhase ? 10 : K.duration,
        children: (be) => /* @__PURE__ */ z(
          ae,
          {
            ...we,
            "data-fixed": _ === "fixed" || void 0,
            variant: C,
            mod: [{ multiline: N }, ye],
            ...d.getFloatingProps({
              ref: d.floating,
              className: V("tooltip").className,
              style: {
                ...V("tooltip").style,
                ...be,
                zIndex: k,
                top: d.y ?? 0,
                left: d.x ?? 0
              }
            }),
            children: [
              l,
              /* @__PURE__ */ a(
                He,
                {
                  ref: J,
                  arrowX: d.arrowX,
                  arrowY: d.arrowY,
                  visible: M,
                  position: d.placement,
                  arrowSize: O,
                  arrowOffset: P,
                  arrowRadius: R,
                  arrowPosition: F,
                  ...V("arrow")
                }
              )
            ]
          }
        )
      }
    ) }),
    te(
      n,
      d.getReferenceProps({
        onClick: A,
        onMouseEnter: $,
        onMouseLeave: q,
        onMouseMove: o.onMouseMove,
        onPointerDown: o.onPointerDown,
        onPointerEnter: o.onPointerEnter,
        [g]: xe,
        className: Fe(D, n.props.className),
        ...n.props
      })
    )
  ] });
});
G.classes = L;
G.displayName = "@mantine/core/Tooltip";
G.Floating = Y;
G.Group = Z;
function ao(e) {
  return Te({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }, child: [] }] })(e);
}
const so = function() {
  return /* @__PURE__ */ a(ao, { className: "header-info-icon" });
}, yo = (e) => {
  if (e) {
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e.toolTip) {
      const o = e;
      return /* @__PURE__ */ z("div", { className: "info-header", children: [
        /* @__PURE__ */ a("span", { className: "header-content-text", children: o.title }),
        /* @__PURE__ */ a(G, { label: o.toolTip, children: /* @__PURE__ */ a("span", { style: { paddingBottom: "2px" }, children: /* @__PURE__ */ a(so, {}) }) })
      ] });
    }
    const t = typeof e == "string" ? e : e.title;
    return /* @__PURE__ */ a("span", { className: "header-content-text", children: t });
  } else
    return /* @__PURE__ */ a(X, {});
};
export {
  so as InfoCircle,
  yo as renderTitle
};
