import { jsx as p, jsxs as _e } from "react/jsx-runtime";
import { useRef as y, useEffect as Z, useCallback as D, cloneElement as J, useState as U } from "react";
import { i as Q, O as He, q as Le, u as Ve, n as $e, o as je, s as Me, r as B, f as X, d as Y, c as Ke, t as qe, p as Ue, a as Be } from "./use-floating-auto-update.js";
import { f as F, u as T, d as W, B as ee, r as Xe, m as Ye, g as Ge, j as Ze, q as Je } from "./factory.js";
import { u as Qe } from "./DirectionProvider.js";
import { c as We } from "./create-safe-context.js";
import { r as et, u as tt } from "./use-id.js";
import { u as I } from "./use-merged-ref.js";
import { T as rt } from "./Transition.js";
import { u as O } from "./use-reduced-motion.js";
import { u as ot } from "./use-uncontrolled.js";
const nt = () => {
};
function at(e, r = { active: !0 }) {
  return typeof e != "function" || !r.active ? r.onKeyDown || nt : (t) => {
    var i;
    t.key === "Escape" && (e(t), (i = r.onTrigger) == null || i.call(r));
  };
}
const G = ["mousedown", "touchstart"];
function st(e, r, t) {
  const i = y();
  return Z(() => {
    const o = (n) => {
      const { target: a } = n ?? {};
      if (Array.isArray(t)) {
        const c = (a == null ? void 0 : a.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(a) && a.tagName !== "HTML";
        t.every((u) => !!u && !n.composedPath().includes(u)) && !c && e();
      } else i.current && !i.current.contains(a) && e();
    };
    return (r || G).forEach((n) => document.addEventListener(n, o)), () => {
      (r || G).forEach((n) => document.removeEventListener(n, o));
    };
  }, [i, e, t]), i;
}
function it({ opened: e, shouldReturnFocus: r = !0 }) {
  const t = y(), i = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return O(() => {
    let o = -1;
    const n = (a) => {
      a.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", n), e ? t.current = document.activeElement : r && (o = window.setTimeout(i, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", n);
    };
  }, [e, r]), i;
}
function ct(e, r = "body > :not(script)") {
  const t = et(), i = Array.from(
    document.querySelectorAll(r)
  ).map((o) => {
    var l;
    if ((l = o == null ? void 0 : o.shadowRoot) != null && l.contains(e) || o.contains(e))
      return;
    const n = o.getAttribute("aria-hidden"), a = o.getAttribute("data-hidden"), c = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", t), n === null || n === "false" ? o.setAttribute("aria-hidden", "true") : !a && !c && o.setAttribute("data-hidden", n), {
      node: o,
      ariaHidden: a || null
    };
  });
  return () => {
    i.forEach((o) => {
      !o || t !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const ut = /input|select|textarea|button|object/, te = "a, input, select, textarea, button, object, [tabindex]";
function lt(e) {
  return process.env.NODE_ENV === "test" ? !1 : e.style.display === "none";
}
function dt(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let t = e;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (lt(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function re(e) {
  let r = e.getAttribute("tabindex");
  return r === null && (r = void 0), parseInt(r, 10);
}
function R(e) {
  const r = e.nodeName.toLowerCase(), t = !Number.isNaN(re(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (ut.test(r) && !e.disabled || e instanceof HTMLAnchorElement && e.href || t) && dt(e);
}
function oe(e) {
  const r = re(e);
  return (Number.isNaN(r) || r >= 0) && R(e);
}
function ft(e) {
  return Array.from(e.querySelectorAll(te)).filter(oe);
}
function pt(e, r) {
  const t = ft(e);
  if (!t.length) {
    r.preventDefault();
    return;
  }
  const i = t[r.shiftKey ? 0 : t.length - 1], o = e.getRootNode();
  let n = i === o.activeElement || e === o.activeElement;
  const a = o.activeElement;
  if (a.tagName === "INPUT" && a.getAttribute("type") === "radio" && (n = t.filter(
    (f) => f.getAttribute("type") === "radio" && f.getAttribute("name") === a.getAttribute("name")
  ).includes(i)), !n)
    return;
  r.preventDefault();
  const l = t[r.shiftKey ? t.length - 1 : 0];
  l && l.focus();
}
function mt(e = !0) {
  const r = y(), t = y(null), i = (n) => {
    let a = n.querySelector("[data-autofocus]");
    if (!a) {
      const c = Array.from(n.querySelectorAll(te));
      a = c.find(oe) || c.find(R) || null, !a && R(n) && (a = n);
    }
    a ? a.focus({ preventScroll: !0 }) : process.env.NODE_ENV === "development" && console.warn(
      "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
      n
    );
  }, o = D(
    (n) => {
      if (e) {
        if (n === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = ct(n), r.current !== n && (n ? (setTimeout(() => {
          n.getRootNode() ? i(n) : process.env.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", n);
        }), r.current = n) : r.current = null);
      }
    },
    [e]
  );
  return Z(() => {
    if (!e)
      return;
    r.current && setTimeout(() => i(r.current));
    const n = (a) => {
      a.key === "Tab" && r.current && pt(r.current, a);
    };
    return document.addEventListener("keydown", n), () => {
      document.removeEventListener("keydown", n), t.current && t.current();
    };
  }, [e]), o;
}
var ne = { root: "m_515a97f8" };
const gt = {}, S = F((e, r) => {
  const t = T("VisuallyHidden", gt, e), { classNames: i, className: o, style: n, styles: a, unstyled: c, vars: l, ...u } = t, f = W({
    name: "VisuallyHidden",
    classes: ne,
    props: t,
    className: o,
    style: n,
    classNames: i,
    styles: a,
    unstyled: c
  });
  return /* @__PURE__ */ p(ee, { component: "span", ref: r, ...f("root"), ...u });
});
S.classes = ne;
S.displayName = "@mantine/core/VisuallyHidden";
const [wt, ae] = We(
  "Popover component was not found in the tree"
);
function C({
  children: e,
  active: r = !0,
  refProp: t = "ref",
  innerRef: i
}) {
  const o = mt(r), n = I(o, i);
  return Q(e) ? J(e, { [t]: n }) : e;
}
function se(e) {
  return /* @__PURE__ */ p(S, { tabIndex: -1, "data-autofocus": !0, ...e });
}
C.displayName = "@mantine/core/FocusTrap";
se.displayName = "@mantine/core/FocusTrapInitialFocus";
C.InitialFocus = se;
var ie = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const ht = {}, k = F((e, r) => {
  var m, g, w, P;
  const t = T("PopoverDropdown", ht, e), {
    className: i,
    style: o,
    vars: n,
    children: a,
    onKeyDownCapture: c,
    variant: l,
    classNames: u,
    styles: f,
    ...b
  } = t, s = ae(), v = it({
    opened: s.opened,
    shouldReturnFocus: s.returnFocus
  }), E = s.withRoles ? {
    "aria-labelledby": s.getTargetId(),
    id: s.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, x = I(r, s.floating);
  return s.disabled ? null : /* @__PURE__ */ p(He, { ...s.portalProps, withinPortal: s.withinPortal, children: /* @__PURE__ */ p(
    rt,
    {
      mounted: s.opened,
      ...s.transitionProps,
      transition: ((m = s.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((g = s.transitionProps) == null ? void 0 : g.duration) ?? 150,
      keepMounted: s.keepMounted,
      exitDuration: typeof ((w = s.transitionProps) == null ? void 0 : w.exitDuration) == "number" ? s.transitionProps.exitDuration : (P = s.transitionProps) == null ? void 0 : P.duration,
      children: (A) => /* @__PURE__ */ p(C, { active: s.trapFocus && s.opened, innerRef: x, children: /* @__PURE__ */ _e(
        ee,
        {
          ...E,
          ...b,
          variant: l,
          onKeyDownCapture: at(s.onClose, {
            active: s.closeOnEscape,
            onTrigger: v,
            onKeyDown: c
          }),
          "data-position": s.placement,
          "data-fixed": s.floatingStrategy === "fixed" || void 0,
          ...s.getStyles("dropdown", {
            className: i,
            props: t,
            classNames: u,
            styles: f,
            style: [
              {
                ...A,
                zIndex: s.zIndex,
                top: s.y ?? 0,
                left: s.x ?? 0,
                width: s.width === "target" ? void 0 : Xe(s.width)
              },
              o
            ]
          }),
          children: [
            a,
            /* @__PURE__ */ p(
              Le,
              {
                ref: s.arrowRef,
                arrowX: s.arrowX,
                arrowY: s.arrowY,
                visible: s.withArrow,
                position: s.placement,
                arrowSize: s.arrowSize,
                arrowRadius: s.arrowRadius,
                arrowOffset: s.arrowOffset,
                arrowPosition: s.arrowPosition,
                ...s.getStyles("arrow", {
                  props: t,
                  classNames: u,
                  styles: f
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
k.classes = ie;
k.displayName = "@mantine/core/PopoverDropdown";
const yt = {
  refProp: "ref",
  popupType: "dialog"
}, ce = F((e, r) => {
  const { children: t, refProp: i, popupType: o, ...n } = T(
    "PopoverTarget",
    yt,
    e
  );
  if (!Q(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const a = n, c = ae(), l = I(c.reference, t.ref, r), u = c.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": c.opened,
    "aria-controls": c.getDropdownId(),
    id: c.getTargetId()
  } : {};
  return J(t, {
    ...a,
    ...u,
    ...c.targetProps,
    className: Ye(c.targetProps.className, a.className, t.props.className),
    [i]: l,
    ...c.controlled ? null : { onClick: c.onToggle }
  });
});
ce.displayName = "@mantine/core/PopoverTarget";
function bt(e) {
  if (e === void 0)
    return { shift: !0, flip: !0 };
  const r = { ...e };
  return e.shift === void 0 && (r.shift = !0), e.flip === void 0 && (r.flip = !0), r;
}
function vt(e, r) {
  const t = bt(e.middlewares), i = [je(e.offset)];
  return t.shift && i.push(
    Me(
      typeof t.shift == "boolean" ? { limiter: B(), padding: 5 } : { limiter: B(), padding: 5, ...t.shift }
    )
  ), t.flip && i.push(
    typeof t.flip == "boolean" ? X() : X(t.flip)
  ), t.inline && i.push(
    typeof t.inline == "boolean" ? Y() : Y(t.inline)
  ), i.push(Ke({ element: e.arrowRef, padding: e.arrowOffset })), (t.size || e.width === "target") && i.push(
    qe({
      ...typeof t.size == "boolean" ? {} : t.size,
      apply({ rects: o, availableWidth: n, availableHeight: a, ...c }) {
        var f;
        const u = ((f = r().refs.floating.current) == null ? void 0 : f.style) ?? {};
        t.size && (typeof t.size == "object" && t.size.apply ? t.size.apply({ rects: o, availableWidth: n, availableHeight: a, ...c }) : Object.assign(u, {
          maxWidth: `${n}px`,
          maxHeight: `${a}px`
        })), e.width === "target" && Object.assign(u, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), i;
}
function Pt(e) {
  const [r, t] = ot({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), i = () => {
    var a;
    r && ((a = e.onClose) == null || a.call(e), t(!1));
  }, o = () => {
    var a, c;
    r ? ((a = e.onClose) == null || a.call(e), t(!1)) : ((c = e.onOpen) == null || c.call(e), t(!0));
  }, n = Ve({
    strategy: e.strategy,
    placement: e.position,
    middleware: vt(e, () => n)
  });
  return $e({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: n
  }), O(() => {
    var a;
    (a = e.onPositionChange) == null || a.call(e, n.placement);
  }, [n.placement]), O(() => {
    var a, c;
    e.opened ? (c = e.onOpen) == null || c.call(e) : (a = e.onClose) == null || a.call(e);
  }, [e.opened]), {
    floating: n,
    controlled: typeof e.opened == "boolean",
    opened: r,
    onClose: i,
    onToggle: o
  };
}
const Tt = {
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
  zIndex: Be("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Nt = Ge((e, { radius: r, shadow: t }) => ({
  dropdown: {
    "--popover-radius": r === void 0 ? void 0 : Ze(r),
    "--popover-shadow": Je(t)
  }
}));
function N(e) {
  var V, $, j, M, K, q;
  const r = T("Popover", Tt, e), {
    children: t,
    position: i,
    offset: o,
    onPositionChange: n,
    positionDependencies: a,
    opened: c,
    transitionProps: l,
    width: u,
    middlewares: f,
    withArrow: b,
    arrowSize: s,
    arrowOffset: v,
    arrowRadius: E,
    arrowPosition: x,
    unstyled: m,
    classNames: g,
    styles: w,
    closeOnClickOutside: P,
    withinPortal: A,
    portalProps: ue,
    closeOnEscape: le,
    clickOutsideEvents: de,
    trapFocus: fe,
    onClose: pe,
    onOpen: me,
    onChange: ge,
    zIndex: we,
    radius: he,
    shadow: ye,
    id: be,
    defaultOpened: ve,
    __staticSelector: z,
    withRoles: Pe,
    disabled: Te,
    returnFocus: Ne,
    variant: Ee,
    keepMounted: xe,
    vars: Ae,
    floatingStrategy: _,
    ...De
  } = r, Oe = W({
    name: z,
    props: r,
    classes: ie,
    classNames: g,
    styles: w,
    unstyled: m,
    rootSelector: "dropdown",
    vars: Ae,
    varsResolver: Nt
  }), H = y(null), [Re, Fe] = U(null), [Ie, Se] = U(null), { dir: Ce } = Qe(), L = tt(be), d = Pt({
    middlewares: f,
    width: u,
    position: Ue(Ce, i),
    offset: typeof o == "number" ? o + (b ? s / 2 : 0) : o,
    arrowRef: H,
    arrowOffset: v,
    onPositionChange: n,
    positionDependencies: a,
    opened: c,
    defaultOpened: ve,
    onChange: ge,
    onOpen: me,
    onClose: pe,
    strategy: _
  });
  st(() => P && d.onClose(), de, [
    Re,
    Ie
  ]);
  const ke = D(
    (h) => {
      Fe(h), d.floating.refs.setReference(h);
    },
    [d.floating.refs.setReference]
  ), ze = D(
    (h) => {
      Se(h), d.floating.refs.setFloating(h);
    },
    [d.floating.refs.setFloating]
  );
  return /* @__PURE__ */ p(
    wt,
    {
      value: {
        returnFocus: Ne,
        disabled: Te,
        controlled: d.controlled,
        reference: ke,
        floating: ze,
        x: d.floating.x,
        y: d.floating.y,
        arrowX: (j = ($ = (V = d.floating) == null ? void 0 : V.middlewareData) == null ? void 0 : $.arrow) == null ? void 0 : j.x,
        arrowY: (q = (K = (M = d.floating) == null ? void 0 : M.middlewareData) == null ? void 0 : K.arrow) == null ? void 0 : q.y,
        opened: d.opened,
        arrowRef: H,
        transitionProps: l,
        width: u,
        withArrow: b,
        arrowSize: s,
        arrowOffset: v,
        arrowRadius: E,
        arrowPosition: x,
        placement: d.floating.placement,
        trapFocus: fe,
        withinPortal: A,
        portalProps: ue,
        zIndex: we,
        radius: he,
        shadow: ye,
        closeOnEscape: le,
        onClose: d.onClose,
        onToggle: d.onToggle,
        getTargetId: () => `${L}-target`,
        getDropdownId: () => `${L}-dropdown`,
        withRoles: Pe,
        targetProps: De,
        __staticSelector: z,
        classNames: g,
        styles: w,
        unstyled: m,
        variant: Ee,
        keepMounted: xe,
        getStyles: Oe,
        floatingStrategy: _
      },
      children: t
    }
  );
}
N.Target = ce;
N.Dropdown = k;
N.displayName = "@mantine/core/Popover";
N.extend = (e) => e;
export {
  C as F,
  N as P,
  it as u
};
