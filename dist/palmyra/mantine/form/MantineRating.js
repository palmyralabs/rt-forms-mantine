import { jsx as a, jsxs as wt, Fragment as Z } from "react/jsx-runtime";
import { useRef as j, useState as Q, forwardRef as Vt, useImperativeHandle as zt } from "react";
import { useFieldManager as $t, getFieldHandler as Bt, FieldDecorator as It } from "@palmyralabs/rt-forms";
import { getFieldLabel as Ot } from "./util.js";
import { B as E, f as Nt, u as kt, d as xt, g as Pt, h as At } from "../../../chunks/factory.js";
import { g as Dt } from "../../../chunks/get-theme-color.js";
import { u as p } from "../../../chunks/DirectionProvider.js";
import { c as Lt } from "../../../chunks/create-safe-context.js";
import { u as Y } from "../../../chunks/use-id.js";
import { u as Tt } from "../../../chunks/use-uncontrolled.js";
import { u as jt } from "../../../chunks/use-merged-ref.js";
import { c as Et } from "../../../chunks/clamp.js";
const [Gt, tt] = Lt(
  "Rating was not found in tree"
);
function et(n) {
  const { width: t, height: o, style: i, ...l } = n;
  return /* @__PURE__ */ a(
    "svg",
    {
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { width: t, height: o, ...i },
      ...l,
      children: /* @__PURE__ */ a("path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" })
    }
  );
}
et.displayName = "@mantine/core/StarIcon";
function G({ type: n }) {
  const t = tt();
  return /* @__PURE__ */ a(et, { ...t.getStyles("starSymbol"), "data-filled": n === "full" || void 0 });
}
G.displayName = "@mantine/core/StarSymbol";
function nt({
  getSymbolLabel: n,
  emptyIcon: t,
  fullIcon: o,
  full: i,
  active: l,
  value: c,
  readOnly: h,
  fractionValue: d,
  color: $,
  id: v,
  onBlur: g,
  onChange: S,
  onInputChange: _,
  style: B,
  ...F
}) {
  var u;
  const y = tt(), m = typeof o == "function" ? o(c) : o, s = typeof t == "function" ? t(c) : t, { dir: b } = p();
  return /* @__PURE__ */ wt(Z, { children: [
    !h && /* @__PURE__ */ a(
      "input",
      {
        ...y.getStyles("input"),
        onKeyDown: (M) => M.key === " " && S(c),
        id: v,
        type: "radio",
        "data-active": l || void 0,
        "aria-label": n == null ? void 0 : n(c),
        value: c,
        onBlur: g,
        onChange: _,
        ...F
      }
    ),
    /* @__PURE__ */ a(
      E,
      {
        component: h ? "div" : "label",
        ...y.getStyles("label"),
        "data-read-only": h || void 0,
        htmlFor: v,
        onClick: () => S(c),
        __vars: {
          "--rating-item-z-index": (u = d === 1 ? void 0 : l ? 2 : 0) == null ? void 0 : u.toString()
        },
        children: /* @__PURE__ */ a(
          E,
          {
            ...y.getStyles("symbolBody"),
            __vars: {
              "--rating-symbol-clip-path": d === 1 ? void 0 : b === "ltr" ? `inset(0 ${l ? 100 - d * 100 : 100}% 0 0)` : `inset(0 0 0 ${l ? 100 - d * 100 : 100}% )`
            },
            children: i ? m || /* @__PURE__ */ a(G, { type: "full" }) : s || /* @__PURE__ */ a(G, { type: "empty" })
          }
        )
      }
    )
  ] });
}
nt.displayName = "@mantine/core/RatingItem";
var ot = { root: "m_f8d312f2", symbolGroup: "m_61734bb7", starSymbol: "m_5662a89a", input: "m_211007ba", label: "m_21342ee4", symbolBody: "m_fae05d6a" };
function T(n, t) {
  var l;
  const o = Math.round(n / t) * t, i = ((l = `${t}`.split(".")[1]) == null ? void 0 : l.length) || 0;
  return Number(o.toFixed(i));
}
const Ut = {
  size: "sm",
  getSymbolLabel: (n) => `${n}`,
  count: 5,
  fractions: 1,
  color: "yellow"
}, Xt = Pt((n, { size: t, color: o }) => ({
  root: {
    "--rating-size": At(t, "rating-size"),
    "--rating-color": Dt(o, n)
  }
})), U = Nt((n, t) => {
  const o = kt("Rating", Ut, n), {
    classNames: i,
    className: l,
    style: c,
    styles: h,
    unstyled: d,
    vars: $,
    name: v,
    id: g,
    value: S,
    defaultValue: _,
    onChange: B,
    fractions: F,
    count: y,
    onMouseEnter: m,
    readOnly: s,
    onMouseMove: b,
    onHover: u,
    onMouseLeave: M,
    onTouchStart: I,
    onTouchEnd: O,
    size: at,
    variant: st,
    getSymbolLabel: lt,
    color: Kt,
    emptySymbol: rt,
    fullSymbol: it,
    highlightSelectedOnly: ct,
    ...ut
  } = o, N = xt({
    name: "Rating",
    classes: ot,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: h,
    unstyled: d,
    vars: $,
    varsResolver: Xt
  }), { dir: dt } = p(), mt = Y(v), X = Y(g), K = j(null), [ft, k] = Tt({
    value: S,
    defaultValue: _,
    finalValue: 0,
    onChange: B
  }), [w, V] = Q(-1), [ht, W] = Q(!0), x = Math.floor(F), P = Math.floor(y), C = 1 / x, q = T(ft, C), A = w !== -1 ? w : q, H = (e) => {
    const { left: r, right: f, width: D } = K.current.getBoundingClientRect(), L = D / P, z = (dt === "rtl" ? f - e : e - r) / L;
    return Et(T(z + C / 2, C), C, P);
  }, gt = (e) => {
    m == null || m(e), !s && W(!1);
  }, yt = (e) => {
    if (b == null || b(e), s)
      return;
    const r = H(e.clientX);
    V(r), r !== w && (u == null || u(r));
  }, bt = (e) => {
    M == null || M(e), !s && (V(-1), W(!0), w !== -1 && (u == null || u(-1)));
  }, vt = (e) => {
    const { touches: r } = e;
    if (r.length === 1) {
      if (!s) {
        const f = r[0];
        k(H(f.clientX));
      }
      I == null || I(e);
    }
  }, St = (e) => {
    e.preventDefault(), O == null || O(e);
  }, Ct = () => ht && V(-1), Rt = (e) => {
    s || V(typeof e == "number" ? e : parseFloat(e.target.value));
  }, _t = (e) => {
    s || k(typeof e == "number" ? e : parseFloat(e.target.value));
  }, Ft = Array(P).fill(0).map((e, r) => {
    const f = r + 1, D = Array.from(new Array(r === 0 ? x + 1 : x)), L = !s && Math.ceil(w) === f;
    return /* @__PURE__ */ a(
      "div",
      {
        "data-active": L || void 0,
        ...N("symbolGroup"),
        children: D.map((Mt, z) => {
          const J = C * (r === 0 ? z : z + 1), R = T(f - 1 + J, C);
          return /* @__PURE__ */ a(
            nt,
            {
              getSymbolLabel: lt,
              emptyIcon: rt,
              fullIcon: it,
              full: ct ? R === A : R <= A,
              active: R === A,
              checked: R === q,
              readOnly: s,
              fractionValue: J,
              value: R,
              name: mt,
              onChange: _t,
              onBlur: Ct,
              onInputChange: Rt,
              id: `${X}-${r}-${z}`
            },
            `${f}-${R}`
          );
        })
      },
      f
    );
  });
  return /* @__PURE__ */ a(Gt, { value: { getStyles: N }, children: /* @__PURE__ */ a(
    E,
    {
      ref: jt(K, t),
      ...N("root"),
      onMouseMove: yt,
      onMouseEnter: gt,
      onMouseLeave: bt,
      onTouchStart: vt,
      onTouchEnd: St,
      variant: st,
      size: at,
      id: X,
      ...ut,
      children: Ft
    }
  ) });
});
U.classes = ot;
U.displayName = "@mantine/core/Rating";
const ae = Vt(function(t, o) {
  const i = $t(t.attribute, t), { getError: l, getValue: c, setValue: h, mutateOptions: d } = i, $ = o || j(null), v = l(), g = j(null), S = t.variant || "default", _ = (t == null ? void 0 : t.autoFocus) || !1, B = (t == null ? void 0 : t.fractions) || 1, F = t == null ? void 0 : t.fullSymbol, y = t == null ? void 0 : t.emptySymbol;
  zt($, () => ({
    ...Bt(i),
    focus() {
      g.current.checked = !0, g.current.focus();
    },
    getOptions() {
    },
    setOptions(b) {
    }
  }), [i]);
  var m = i.getFieldProps();
  return m.onChange = (s, b) => {
    t.readOnly || (h(s), t.onChange && t.onChange(s));
  }, /* @__PURE__ */ a(Z, { children: !d.visible && /* @__PURE__ */ a(
    It,
    {
      label: Ot(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ a(
        U,
        {
          variant: S,
          readOnly: t.readOnly,
          inputRef: g,
          size: t.size,
          fractions: B,
          ...m,
          fullSymbol: F,
          emptySymbol: y,
          value: c(),
          error: v.message,
          autoFocus: _
        }
      )
    }
  ) });
});
export {
  ae as MantineRating
};
