import { jsx as p, jsxs as J } from "react/jsx-runtime";
import { useRef as N, useEffect as Q, useCallback as A, cloneElement as W, useState as q, forwardRef as je } from "react";
import { i as ee, O as Ue, q as Ke, u as qe, k as Xe, o as Ye, s as Ge, r as X, l as Y, n as G, m as Ze, t as Je, p as Qe, a as We } from "./use-floating-auto-update.js";
import { f as O, u as T, d as F, B as te, r as re, m as et, g as oe, j as ne, o as tt, h as rt } from "./factory.js";
import { u as ot } from "./DirectionProvider.js";
import { c as nt } from "./create-safe-context.js";
import { r as st, u as at } from "./use-id.js";
import { u as I } from "./use-merged-ref.js";
import { u as R, T as it } from "./Transition.js";
import { u as lt } from "./use-uncontrolled.js";
import { p as ct } from "./polymorphic-factory.js";
import { U as dt } from "./UnstyledButton.js";
const ut = () => {
};
function ft(e, r = { active: !0 }) {
  return typeof e != "function" || !r.active ? r.onKeyDown || ut : (t) => {
    var i;
    t.key === "Escape" && (e(t), (i = r.onTrigger) == null || i.call(r));
  };
}
const Z = ["mousedown", "touchstart"];
function pt(e, r, t) {
  const i = N();
  return Q(() => {
    const o = (n) => {
      const { target: s } = n ?? {};
      if (Array.isArray(t)) {
        const l = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((c) => !!c && !n.composedPath().includes(c)) && !l && e();
      } else i.current && !i.current.contains(s) && e();
    };
    return (r || Z).forEach((n) => document.addEventListener(n, o)), () => {
      (r || Z).forEach((n) => document.removeEventListener(n, o));
    };
  }, [i, e, t]), i;
}
function mt({ opened: e, shouldReturnFocus: r = !0 }) {
  const t = N(), i = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return R(() => {
    let o = -1;
    const n = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", n), e ? t.current = document.activeElement : r && (o = window.setTimeout(i, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", n);
    };
  }, [e, r]), i;
}
function gt(e, r = "body > :not(script)") {
  const t = st(), i = Array.from(
    document.querySelectorAll(r)
  ).map((o) => {
    var d;
    if ((d = o == null ? void 0 : o.shadowRoot) != null && d.contains(e) || o.contains(e))
      return;
    const n = o.getAttribute("aria-hidden"), s = o.getAttribute("data-hidden"), l = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", t), n === null || n === "false" ? o.setAttribute("aria-hidden", "true") : !s && !l && o.setAttribute("data-hidden", n), {
      node: o,
      ariaHidden: s || null
    };
  });
  return () => {
    i.forEach((o) => {
      !o || t !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const wt = /input|select|textarea|button|object/, se = "a, input, select, textarea, button, object, [tabindex]";
function ht(e) {
  return process.env.NODE_ENV === "test" ? !1 : e.style.display === "none";
}
function vt(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let t = e;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (ht(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function ae(e) {
  let r = e.getAttribute("tabindex");
  return r === null && (r = void 0), parseInt(r, 10);
}
function D(e) {
  const r = e.nodeName.toLowerCase(), t = !Number.isNaN(ae(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (wt.test(r) && !e.disabled || e instanceof HTMLAnchorElement && e.href || t) && vt(e);
}
function ie(e) {
  const r = ae(e);
  return (Number.isNaN(r) || r >= 0) && D(e);
}
function yt(e) {
  return Array.from(e.querySelectorAll(se)).filter(ie);
}
function bt(e, r) {
  const t = yt(e);
  if (!t.length) {
    r.preventDefault();
    return;
  }
  const i = t[r.shiftKey ? 0 : t.length - 1], o = e.getRootNode();
  let n = i === o.activeElement || e === o.activeElement;
  const s = o.activeElement;
  if (s.tagName === "INPUT" && s.getAttribute("type") === "radio" && (n = t.filter(
    (u) => u.getAttribute("type") === "radio" && u.getAttribute("name") === s.getAttribute("name")
  ).includes(i)), !n)
    return;
  r.preventDefault();
  const d = t[r.shiftKey ? t.length - 1 : 0];
  d && d.focus();
}
function Pt(e = !0) {
  const r = N(), t = N(null), i = (n) => {
    let s = n.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(n.querySelectorAll(se));
      s = l.find(ie) || l.find(D) || null, !s && D(n) && (s = n);
    }
    s ? s.focus({ preventScroll: !0 }) : process.env.NODE_ENV === "development" && console.warn(
      "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
      n
    );
  }, o = A(
    (n) => {
      if (e) {
        if (n === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = gt(n), r.current !== n && (n ? (setTimeout(() => {
          n.getRootNode() ? i(n) : process.env.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", n);
        }), r.current = n) : r.current = null);
      }
    },
    [e]
  );
  return Q(() => {
    if (!e)
      return;
    r.current && setTimeout(() => i(r.current));
    const n = (s) => {
      s.key === "Tab" && r.current && bt(r.current, s);
    };
    return document.addEventListener("keydown", n), () => {
      document.removeEventListener("keydown", n), t.current && t.current();
    };
  }, [e]), o;
}
var le = { root: "m_515a97f8" };
const Nt = {}, S = O((e, r) => {
  const t = T("VisuallyHidden", Nt, e), { classNames: i, className: o, style: n, styles: s, unstyled: l, vars: d, ...c } = t, u = F({
    name: "VisuallyHidden",
    classes: le,
    props: t,
    className: o,
    style: n,
    classNames: i,
    styles: s,
    unstyled: l
  });
  return /* @__PURE__ */ p(te, { component: "span", ref: r, ...u("root"), ...c });
});
S.classes = le;
S.displayName = "@mantine/core/VisuallyHidden";
const [Tt, ce] = nt(
  "Popover component was not found in the tree"
);
function k({
  children: e,
  active: r = !0,
  refProp: t = "ref",
  innerRef: i
}) {
  const o = Pt(r), n = I(o, i);
  return ee(e) ? W(e, { [t]: n }) : e;
}
function de(e) {
  return /* @__PURE__ */ p(S, { tabIndex: -1, "data-autofocus": !0, ...e });
}
k.displayName = "@mantine/core/FocusTrap";
de.displayName = "@mantine/core/FocusTrapInitialFocus";
k.InitialFocus = de;
var ue = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const xt = {}, z = O((e, r) => {
  var w, h, v, x;
  const t = T("PopoverDropdown", xt, e), {
    className: i,
    style: o,
    vars: n,
    children: s,
    onKeyDownCapture: l,
    variant: d,
    classNames: c,
    styles: u,
    ...g
  } = t, a = ce(), m = mt({
    opened: a.opened,
    shouldReturnFocus: a.returnFocus
  }), y = a.withRoles ? {
    "aria-labelledby": a.getTargetId(),
    id: a.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, b = I(r, a.floating);
  return a.disabled ? null : /* @__PURE__ */ p(Ue, { ...a.portalProps, withinPortal: a.withinPortal, children: /* @__PURE__ */ p(
    it,
    {
      mounted: a.opened,
      ...a.transitionProps,
      transition: ((w = a.transitionProps) == null ? void 0 : w.transition) || "fade",
      duration: ((h = a.transitionProps) == null ? void 0 : h.duration) ?? 150,
      keepMounted: a.keepMounted,
      exitDuration: typeof ((v = a.transitionProps) == null ? void 0 : v.exitDuration) == "number" ? a.transitionProps.exitDuration : (x = a.transitionProps) == null ? void 0 : x.duration,
      children: (C) => /* @__PURE__ */ p(k, { active: a.trapFocus && a.opened, innerRef: b, children: /* @__PURE__ */ J(
        te,
        {
          ...y,
          ...g,
          variant: d,
          onKeyDownCapture: ft(a.onClose, {
            active: a.closeOnEscape,
            onTrigger: m,
            onKeyDown: l
          }),
          "data-position": a.placement,
          "data-fixed": a.floatingStrategy === "fixed" || void 0,
          ...a.getStyles("dropdown", {
            className: i,
            props: t,
            classNames: c,
            styles: u,
            style: [
              {
                ...C,
                zIndex: a.zIndex,
                top: a.y ?? 0,
                left: a.x ?? 0,
                width: a.width === "target" ? void 0 : re(a.width)
              },
              o
            ]
          }),
          children: [
            s,
            /* @__PURE__ */ p(
              Ke,
              {
                ref: a.arrowRef,
                arrowX: a.arrowX,
                arrowY: a.arrowY,
                visible: a.withArrow,
                position: a.placement,
                arrowSize: a.arrowSize,
                arrowRadius: a.arrowRadius,
                arrowOffset: a.arrowOffset,
                arrowPosition: a.arrowPosition,
                ...a.getStyles("arrow", {
                  props: t,
                  classNames: c,
                  styles: u
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
z.classes = ue;
z.displayName = "@mantine/core/PopoverDropdown";
const Et = {
  refProp: "ref",
  popupType: "dialog"
}, fe = O((e, r) => {
  const { children: t, refProp: i, popupType: o, ...n } = T(
    "PopoverTarget",
    Et,
    e
  );
  if (!ee(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = n, l = ce(), d = I(l.reference, t.ref, r), c = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return W(t, {
    ...s,
    ...c,
    ...l.targetProps,
    className: et(l.targetProps.className, s.className, t.props.className),
    [i]: d,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
fe.displayName = "@mantine/core/PopoverTarget";
function Ct(e) {
  if (e === void 0)
    return { shift: !0, flip: !0 };
  const r = { ...e };
  return e.shift === void 0 && (r.shift = !0), e.flip === void 0 && (r.flip = !0), r;
}
function At(e, r) {
  const t = Ct(e.middlewares), i = [Ye(e.offset)];
  return t.shift && i.push(
    Ge(
      typeof t.shift == "boolean" ? { limiter: X(), padding: 5 } : { limiter: X(), padding: 5, ...t.shift }
    )
  ), t.flip && i.push(
    typeof t.flip == "boolean" ? Y() : Y(t.flip)
  ), t.inline && i.push(
    typeof t.inline == "boolean" ? G() : G(t.inline)
  ), i.push(Ze({ element: e.arrowRef, padding: e.arrowOffset })), (t.size || e.width === "target") && i.push(
    Je({
      ...typeof t.size == "boolean" ? {} : t.size,
      apply({ rects: o, availableWidth: n, availableHeight: s, ...l }) {
        var u;
        const c = ((u = r().refs.floating.current) == null ? void 0 : u.style) ?? {};
        t.size && (typeof t.size == "object" && t.size.apply ? t.size.apply({ rects: o, availableWidth: n, availableHeight: s, ...l }) : Object.assign(c, {
          maxWidth: `${n}px`,
          maxHeight: `${s}px`
        })), e.width === "target" && Object.assign(c, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), i;
}
function Rt(e) {
  const [r, t] = lt({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), i = () => {
    var s;
    r && ((s = e.onClose) == null || s.call(e), t(!1));
  }, o = () => {
    var s, l;
    r ? ((s = e.onClose) == null || s.call(e), t(!1)) : ((l = e.onOpen) == null || l.call(e), t(!0));
  }, n = qe({
    strategy: e.strategy,
    placement: e.position,
    middleware: At(e, () => n)
  });
  return Xe({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: n
  }), R(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, n.placement);
  }, [n.placement]), R(() => {
    var s, l;
    e.opened ? (l = e.onOpen) == null || l.call(e) : (s = e.onClose) == null || s.call(e);
  }, [e.opened]), {
    floating: n,
    controlled: typeof e.opened == "boolean",
    opened: r,
    onClose: i,
    onToggle: o
  };
}
const Dt = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !0,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: We("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Ot = oe((e, { radius: r, shadow: t }) => ({
  dropdown: {
    "--popover-radius": r === void 0 ? void 0 : ne(r),
    "--popover-shadow": tt(t)
  }
}));
function E(e) {
  var B, V, M, j, U, K;
  const r = T("Popover", Dt, e), {
    children: t,
    position: i,
    offset: o,
    onPositionChange: n,
    positionDependencies: s,
    opened: l,
    transitionProps: d,
    width: c,
    middlewares: u,
    withArrow: g,
    arrowSize: a,
    arrowOffset: m,
    arrowRadius: y,
    arrowPosition: b,
    unstyled: w,
    classNames: h,
    styles: v,
    closeOnClickOutside: x,
    withinPortal: C,
    portalProps: we,
    closeOnEscape: he,
    clickOutsideEvents: ve,
    trapFocus: ye,
    onClose: be,
    onOpen: Pe,
    onChange: Ne,
    zIndex: Te,
    radius: xe,
    shadow: Ee,
    id: Ce,
    defaultOpened: Ae,
    __staticSelector: L,
    withRoles: Re,
    disabled: De,
    returnFocus: Oe,
    variant: Fe,
    keepMounted: Ie,
    vars: Se,
    floatingStrategy: _,
    ...ke
  } = r, ze = F({
    name: L,
    props: r,
    classes: ue,
    classNames: h,
    styles: v,
    unstyled: w,
    rootSelector: "dropdown",
    vars: Se,
    varsResolver: Ot
  }), H = N(null), [Le, _e] = q(null), [He, $e] = q(null), { dir: Be } = ot(), $ = at(Ce), f = Rt({
    middlewares: u,
    width: c,
    position: Qe(Be, i),
    offset: typeof o == "number" ? o + (g ? a / 2 : 0) : o,
    arrowRef: H,
    arrowOffset: m,
    onPositionChange: n,
    positionDependencies: s,
    opened: l,
    defaultOpened: Ae,
    onChange: Ne,
    onOpen: Pe,
    onClose: be,
    strategy: _
  });
  pt(() => x && f.onClose(), ve, [
    Le,
    He
  ]);
  const Ve = A(
    (P) => {
      _e(P), f.floating.refs.setReference(P);
    },
    [f.floating.refs.setReference]
  ), Me = A(
    (P) => {
      $e(P), f.floating.refs.setFloating(P);
    },
    [f.floating.refs.setFloating]
  );
  return /* @__PURE__ */ p(
    Tt,
    {
      value: {
        returnFocus: Oe,
        disabled: De,
        controlled: f.controlled,
        reference: Ve,
        floating: Me,
        x: f.floating.x,
        y: f.floating.y,
        arrowX: (M = (V = (B = f.floating) == null ? void 0 : B.middlewareData) == null ? void 0 : V.arrow) == null ? void 0 : M.x,
        arrowY: (K = (U = (j = f.floating) == null ? void 0 : j.middlewareData) == null ? void 0 : U.arrow) == null ? void 0 : K.y,
        opened: f.opened,
        arrowRef: H,
        transitionProps: d,
        width: c,
        withArrow: g,
        arrowSize: a,
        arrowOffset: m,
        arrowRadius: y,
        arrowPosition: b,
        placement: f.floating.placement,
        trapFocus: ye,
        withinPortal: C,
        portalProps: we,
        zIndex: Te,
        radius: xe,
        shadow: Ee,
        closeOnEscape: he,
        onClose: f.onClose,
        onToggle: f.onToggle,
        getTargetId: () => `${$}-target`,
        getDropdownId: () => `${$}-dropdown`,
        withRoles: Re,
        targetProps: ke,
        __staticSelector: L,
        classNames: h,
        styles: v,
        unstyled: w,
        variant: Fe,
        keepMounted: Ie,
        getStyles: ze,
        floatingStrategy: _
      },
      children: t
    }
  );
}
E.Target = fe;
E.Dropdown = z;
E.displayName = "@mantine/core/Popover";
E.extend = (e) => e;
const pe = je(
  ({ size: e = "var(--cb-icon-size, 70%)", style: r, ...t }, i) => /* @__PURE__ */ p(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: e, height: e },
      ref: i,
      ...t,
      children: /* @__PURE__ */ p(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
pe.displayName = "@mantine/core/CloseIcon";
var me = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Ft = {
  variant: "subtle"
}, It = oe((e, { size: r, radius: t, iconSize: i }) => ({
  root: {
    "--cb-size": rt(r, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : ne(t),
    "--cb-icon-size": re(i)
  }
})), ge = ct((e, r) => {
  const t = T("CloseButton", Ft, e), {
    iconSize: i,
    children: o,
    vars: n,
    radius: s,
    className: l,
    classNames: d,
    style: c,
    styles: u,
    unstyled: g,
    "data-disabled": a,
    disabled: m,
    variant: y,
    icon: b,
    mod: w,
    ...h
  } = t, v = F({
    name: "CloseButton",
    props: t,
    className: l,
    style: c,
    classes: me,
    classNames: d,
    styles: u,
    unstyled: g,
    vars: n,
    varsResolver: It
  });
  return /* @__PURE__ */ J(
    dt,
    {
      ref: r,
      ...h,
      unstyled: g,
      variant: y,
      disabled: m,
      mod: [{ disabled: m || a }, w],
      ...v("root", { variant: y, active: !m && !a }),
      children: [
        b || /* @__PURE__ */ p(pe, {}),
        o
      ]
    }
  );
});
ge.classes = me;
ge.displayName = "@mantine/core/CloseButton";
export {
  ge as C,
  k as F,
  E as P,
  mt as u
};
