import { jsx as m, jsxs as B, Fragment as Z } from "react/jsx-runtime";
import { f as R, u as w, a as V, B as I, d as K, o as tt, g as et, r as ot, j as nt } from "../../../chunks/factory.js";
import { useRef as rt, useState as it } from "react";
import { c as W } from "../../../chunks/create-safe-context.js";
import { A as q } from "../../../chunks/AccordionChevron.js";
import { U as st } from "../../../chunks/UnstyledButton.js";
import { g as at } from "../../../chunks/get-style-object.js";
import { flushSync as ct } from "react-dom";
import { u as lt, a as dt } from "../../../chunks/use-reduced-motion.js";
import { m as ut } from "../../../chunks/use-merged-ref.js";
import { u as ft } from "../../../chunks/use-id.js";
import { u as mt } from "../../../chunks/use-uncontrolled.js";
import '../../../assets/SectionContainer.css';function z(e, n) {
  return (o) => {
    if (typeof o != "string" || o.trim().length === 0)
      throw new Error(n);
    return `${e}-${o}`;
  };
}
function D(e, n) {
  let o = e;
  for (; (o = o.parentElement) && !o.matches(n); )
    ;
  return o;
}
function ht(e, n, o) {
  for (let t = e - 1; t >= 0; t -= 1)
    if (!n[t].disabled)
      return t;
  if (o) {
    for (let t = n.length - 1; t > -1; t -= 1)
      if (!n[t].disabled)
        return t;
  }
  return e;
}
function pt(e, n, o) {
  for (let t = e + 1; t < n.length; t += 1)
    if (!n[t].disabled)
      return t;
  if (o) {
    for (let t = 0; t < n.length; t += 1)
      if (!n[t].disabled)
        return t;
  }
  return e;
}
function gt(e, n, o) {
  return D(e, o) === D(n, o);
}
function vt({
  parentSelector: e,
  siblingSelector: n,
  onKeyDown: o,
  loop: t = !0,
  activateOnFocus: f = !1,
  dir: d = "rtl",
  orientation: h
}) {
  return (r) => {
    var a;
    o == null || o(r);
    const i = Array.from(
      ((a = D(r.currentTarget, e)) == null ? void 0 : a.querySelectorAll(
        n
      )) || []
    ).filter((c) => gt(r.currentTarget, c, e)), u = i.findIndex((c) => r.currentTarget === c), s = pt(u, i, t), p = ht(u, i, t), y = d === "rtl" ? p : s, v = d === "rtl" ? s : p;
    switch (r.key) {
      case "ArrowRight": {
        h === "horizontal" && (r.stopPropagation(), r.preventDefault(), i[y].focus(), f && i[y].click());
        break;
      }
      case "ArrowLeft": {
        h === "horizontal" && (r.stopPropagation(), r.preventDefault(), i[v].focus(), f && i[v].click());
        break;
      }
      case "ArrowUp": {
        h === "vertical" && (r.stopPropagation(), r.preventDefault(), i[p].focus(), f && i[p].click());
        break;
      }
      case "ArrowDown": {
        h === "vertical" && (r.stopPropagation(), r.preventDefault(), i[s].focus(), f && i[s].click());
        break;
      }
      case "Home": {
        r.stopPropagation(), r.preventDefault(), !i[0].disabled && i[0].focus();
        break;
      }
      case "End": {
        r.stopPropagation(), r.preventDefault();
        const c = i.length - 1;
        !i[c].disabled && i[c].focus();
        break;
      }
    }
  };
}
function yt(e) {
  if (!e || typeof e == "string")
    return 0;
  const n = e / 36;
  return Math.round((4 + 15 * n ** 0.25 + n / 5) * 10);
}
function k(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const P = typeof window < "u" && window.requestAnimationFrame;
function bt({
  transitionDuration: e,
  transitionTimingFunction: n = "ease",
  onTransitionEnd: o = () => {
  },
  opened: t
}) {
  const f = rt(null), d = 0, h = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [r, i] = it(t ? {} : h), u = (a) => {
    ct(() => i(a));
  }, s = (a) => {
    u((c) => ({ ...c, ...a }));
  };
  function p(a) {
    const c = e || yt(a);
    return {
      transition: `height ${c}ms ${n}, opacity ${c}ms ${n}`
    };
  }
  lt(() => {
    typeof P == "function" && P(t ? () => {
      s({ willChange: "height", display: "block", overflow: "hidden" }), P(() => {
        const a = k(f);
        s({ ...p(a), height: a });
      });
    } : () => {
      const a = k(f);
      s({ ...p(a), willChange: "height", height: a }), P(() => s({ height: d, overflow: "hidden" }));
    });
  }, [t]);
  const y = (a) => {
    if (!(a.target !== f.current || a.propertyName !== "height"))
      if (t) {
        const c = k(f);
        c === r.height ? u({}) : s({ height: c }), o();
      } else r.height === d && (u(h), o());
  };
  function v({ style: a = {}, refKey: c = "ref", ...l } = {}) {
    const C = l[c];
    return {
      "aria-hidden": !t,
      ...l,
      [c]: ut(f, C),
      onTransitionEnd: y,
      style: { boxSizing: "border-box", ...a, ...r }
    };
  }
  return v;
}
const At = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, L = R((e, n) => {
  const {
    children: o,
    in: t,
    transitionDuration: f,
    transitionTimingFunction: d,
    style: h,
    onTransitionEnd: r,
    animateOpacity: i,
    ...u
  } = w("Collapse", At, e), s = V(), p = dt(), v = (s.respectReducedMotion ? p : !1) ? 0 : f, a = bt({
    opened: t,
    transitionDuration: v,
    transitionTimingFunction: d,
    onTransitionEnd: r
  });
  return v === 0 ? t ? /* @__PURE__ */ m(I, { ...u, children: o }) : null : /* @__PURE__ */ m(
    I,
    {
      ...a({
        style: {
          opacity: t || !i ? 1 : 0,
          transition: i ? `opacity ${v}ms ${d}` : "none",
          ...at(h, s)
        },
        ref: n,
        ...u
      }),
      children: o
    }
  );
});
L.displayName = "@mantine/core/Collapse";
const [Ct, T] = W(
  "Accordion component was not found in the tree"
), [It, F] = W("Accordion.Item component was not found in the tree");
var x = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const Pt = {}, H = R((e, n) => {
  const {
    classNames: o,
    className: t,
    style: f,
    styles: d,
    vars: h,
    chevron: r,
    icon: i,
    onClick: u,
    onKeyDown: s,
    children: p,
    disabled: y,
    mod: v,
    ...a
  } = w("AccordionControl", Pt, e), { value: c } = F(), l = T(), C = l.isItemActive(c), U = typeof l.order == "number", N = `h${l.order}`, S = /* @__PURE__ */ B(
    st,
    {
      ...a,
      ...l.getStyles("control", { className: t, classNames: o, style: f, styles: d, variant: l.variant }),
      unstyled: l.unstyled,
      mod: [
        "accordion-control",
        { active: C, "chevron-position": l.chevronPosition, disabled: y },
        v
      ],
      ref: n,
      onClick: (_) => {
        u == null || u(_), l.onChange(c);
      },
      type: "button",
      disabled: y,
      "aria-expanded": C,
      "aria-controls": l.getRegionId(c),
      id: l.getControlId(c),
      onKeyDown: vt({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: l.loop,
        orientation: "vertical",
        onKeyDown: s
      }),
      children: [
        /* @__PURE__ */ m(
          I,
          {
            component: "span",
            mod: { rotate: !l.disableChevronRotation && C, position: l.chevronPosition },
            ...l.getStyles("chevron", { classNames: o, styles: d }),
            children: r || l.chevron
          }
        ),
        /* @__PURE__ */ m("span", { ...l.getStyles("label", { classNames: o, styles: d }), children: p }),
        i && /* @__PURE__ */ m(
          I,
          {
            component: "span",
            mod: { "chevron-position": l.chevronPosition },
            ...l.getStyles("icon", { classNames: o, styles: d }),
            children: i
          }
        )
      ]
    }
  );
  return U ? /* @__PURE__ */ m(N, { ...l.getStyles("itemTitle", { classNames: o, styles: d }), children: S }) : S;
});
H.displayName = "@mantine/core/AccordionControl";
H.classes = x;
const wt = {}, E = R((e, n) => {
  const { classNames: o, className: t, style: f, styles: d, vars: h, value: r, mod: i, ...u } = w(
    "AccordionItem",
    wt,
    e
  ), s = T();
  return /* @__PURE__ */ m(It, { value: { value: r }, children: /* @__PURE__ */ m(
    I,
    {
      ref: n,
      mod: [{ active: s.isItemActive(r) }, i],
      ...s.getStyles("item", { className: t, classNames: o, styles: d, style: f, variant: s.variant }),
      ...u
    }
  ) });
});
E.displayName = "@mantine/core/AccordionItem";
E.classes = x;
const xt = {}, M = R((e, n) => {
  const { classNames: o, className: t, style: f, styles: d, vars: h, children: r, ...i } = w(
    "AccordionPanel",
    xt,
    e
  ), { value: u } = F(), s = T();
  return /* @__PURE__ */ m(
    L,
    {
      ref: n,
      ...s.getStyles("panel", { className: t, classNames: o, style: f, styles: d }),
      ...i,
      in: s.isItemActive(u),
      transitionDuration: s.transitionDuration ?? 200,
      role: "region",
      id: s.getRegionId(u),
      "aria-labelledby": s.getControlId(u),
      children: /* @__PURE__ */ m("div", { ...s.getStyles("content", { classNames: o, styles: d }), children: r })
    }
  );
});
M.displayName = "@mantine/core/AccordionPanel";
M.classes = x;
const St = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ m(q, {})
}, _t = et(
  (e, { transitionDuration: n, chevronSize: o, radius: t }) => ({
    root: {
      "--accordion-transition-duration": n === void 0 ? void 0 : `${n}ms`,
      "--accordion-chevron-size": o === void 0 ? void 0 : ot(o),
      "--accordion-radius": t === void 0 ? void 0 : nt(t)
    }
  })
);
function g(e) {
  const n = w("Accordion", St, e), {
    classNames: o,
    className: t,
    style: f,
    styles: d,
    unstyled: h,
    vars: r,
    children: i,
    multiple: u,
    value: s,
    defaultValue: p,
    onChange: y,
    id: v,
    loop: a,
    transitionDuration: c,
    disableChevronRotation: l,
    chevronPosition: C,
    chevronSize: U,
    order: N,
    chevron: S,
    variant: _,
    radius: Nt,
    ...O
  } = n, $ = ft(v), [b, G] = mt({
    value: s,
    defaultValue: p,
    finalValue: u ? [] : null,
    onChange: y
  }), J = (A) => Array.isArray(b) ? b.includes(A) : A === b, Q = (A) => {
    const X = Array.isArray(b) ? b.includes(A) ? b.filter((Y) => Y !== A) : [...b, A] : A === b ? null : A;
    G(X);
  }, j = K({
    name: "Accordion",
    classes: x,
    props: n,
    className: t,
    style: f,
    classNames: o,
    styles: d,
    unstyled: h,
    vars: r,
    varsResolver: _t
  });
  return /* @__PURE__ */ m(
    Ct,
    {
      value: {
        isItemActive: J,
        onChange: Q,
        getControlId: z(
          `${$}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: z(
          `${$}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: c,
        disableChevronRotation: l,
        chevronPosition: C,
        order: N,
        chevron: S,
        loop: a,
        getStyles: j,
        variant: _,
        unstyled: h
      },
      children: /* @__PURE__ */ m(I, { ...j("root"), id: $, ...O, variant: _, "data-accordion": !0, children: i })
    }
  );
}
const Rt = (e) => e;
g.extend = Rt;
g.withProps = tt(g);
g.classes = x;
g.displayName = "@mantine/core/Accordion";
g.Item = E;
g.Panel = M;
g.Control = H;
g.Chevron = q;
const qt = (e) => {
  const n = e.title || "";
  return /* @__PURE__ */ m(Z, { children: /* @__PURE__ */ m("div", { className: "section-container", children: /* @__PURE__ */ m(g, { ...e, children: /* @__PURE__ */ B(g.Item, { value: n, children: [
    /* @__PURE__ */ m(g.Control, { children: n }),
    /* @__PURE__ */ m(g.Panel, { children: e.children })
  ] }, n) }) }) });
};
export {
  qt as SectionContainer
};
