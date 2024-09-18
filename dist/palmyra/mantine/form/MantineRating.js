import { jsx as a, jsxs as wt, Fragment as Z } from "react/jsx-runtime";
import { useRef as T, useState as Q, forwardRef as Vt, useImperativeHandle as zt } from "react";
import { useFieldManager as Bt, getFieldHandler as $t, FieldDecorator as It } from "@palmyralabs/rt-forms";
import { getFieldLabel as Ot } from "./util.js";
import { B as j, f as Nt, u as kt, d as xt, g as Pt, h as At } from "../../../chunks/factory.js";
import { g as Dt } from "../../../chunks/get-theme-color.js";
import { u as p } from "../../../chunks/DirectionProvider.js";
import { c as Et } from "../../../chunks/create-safe-context.js";
import { u as Y } from "../../../chunks/use-id.js";
import { u as Lt } from "../../../chunks/use-uncontrolled.js";
import { u as Tt } from "../../../chunks/use-merged-ref.js";
import { c as jt } from "../../../chunks/clamp.js";
const [Gt, tt] = Et(
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
  value: u,
  readOnly: g,
  fractionValue: m,
  color: B,
  id: v,
  onBlur: R,
  onChange: f,
  onInputChange: _,
  style: $,
  ...F
}) {
  var c;
  const y = tt(), b = typeof o == "function" ? o(u) : o, s = typeof t == "function" ? t(u) : t, { dir: d } = p();
  return /* @__PURE__ */ wt(Z, { children: [
    !g && /* @__PURE__ */ a(
      "input",
      {
        ...y.getStyles("input"),
        onKeyDown: (M) => M.key === " " && f(u),
        id: v,
        type: "radio",
        "data-active": l || void 0,
        "aria-label": n == null ? void 0 : n(u),
        value: u,
        onBlur: R,
        onChange: _,
        ...F
      }
    ),
    /* @__PURE__ */ a(
      j,
      {
        component: g ? "div" : "label",
        ...y.getStyles("label"),
        "data-read-only": g || void 0,
        htmlFor: v,
        onClick: () => f(u),
        __vars: {
          "--rating-item-z-index": (c = m === 1 ? void 0 : l ? 2 : 0) == null ? void 0 : c.toString()
        },
        children: /* @__PURE__ */ a(
          j,
          {
            ...y.getStyles("symbolBody"),
            __vars: {
              "--rating-symbol-clip-path": m === 1 ? void 0 : d === "ltr" ? `inset(0 ${l ? 100 - m * 100 : 100}% 0 0)` : `inset(0 0 0 ${l ? 100 - m * 100 : 100}% )`
            },
            children: i ? b || /* @__PURE__ */ a(G, { type: "full" }) : s || /* @__PURE__ */ a(G, { type: "empty" })
          }
        )
      }
    )
  ] });
}
nt.displayName = "@mantine/core/RatingItem";
var ot = { root: "m_f8d312f2", symbolGroup: "m_61734bb7", starSymbol: "m_5662a89a", input: "m_211007ba", label: "m_21342ee4", symbolBody: "m_fae05d6a" };
function L(n, t) {
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
    style: u,
    styles: g,
    unstyled: m,
    vars: B,
    name: v,
    id: R,
    value: f,
    defaultValue: _,
    onChange: $,
    fractions: F,
    count: y,
    onMouseEnter: b,
    readOnly: s,
    onMouseMove: d,
    onHover: c,
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
    style: u,
    classNames: i,
    styles: g,
    unstyled: m,
    vars: B,
    varsResolver: Xt
  }), { dir: dt } = p(), mt = Y(v), X = Y(R), K = T(null), [ft, k] = Lt({
    value: f,
    defaultValue: _,
    finalValue: 0,
    onChange: $
  }), [w, V] = Q(-1), [ht, W] = Q(!0), x = Math.floor(F), P = Math.floor(y), S = 1 / x, q = L(ft, S), A = w !== -1 ? w : q, H = (e) => {
    const { left: r, right: h, width: D } = K.current.getBoundingClientRect(), E = D / P, z = (dt === "rtl" ? h - e : e - r) / E;
    return jt(L(z + S / 2, S), S, P);
  }, gt = (e) => {
    b == null || b(e), !s && W(!1);
  }, yt = (e) => {
    if (d == null || d(e), s)
      return;
    const r = H(e.clientX);
    V(r), r !== w && (c == null || c(r));
  }, bt = (e) => {
    M == null || M(e), !s && (V(-1), W(!0), w !== -1 && (c == null || c(-1)));
  }, vt = (e) => {
    const { touches: r } = e;
    if (r.length === 1) {
      if (!s) {
        const h = r[0];
        k(H(h.clientX));
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
    const h = r + 1, D = Array.from(new Array(r === 0 ? x + 1 : x)), E = !s && Math.ceil(w) === h;
    return /* @__PURE__ */ a(
      "div",
      {
        "data-active": E || void 0,
        ...N("symbolGroup"),
        children: D.map((Mt, z) => {
          const J = S * (r === 0 ? z : z + 1), C = L(h - 1 + J, S);
          return /* @__PURE__ */ a(
            nt,
            {
              getSymbolLabel: lt,
              emptyIcon: rt,
              fullIcon: it,
              full: ct ? C === A : C <= A,
              active: C === A,
              checked: C === q,
              readOnly: s,
              fractionValue: J,
              value: C,
              name: mt,
              onChange: _t,
              onBlur: Ct,
              onInputChange: Rt,
              id: `${X}-${r}-${z}`
            },
            `${h}-${C}`
          );
        })
      },
      h
    );
  });
  return /* @__PURE__ */ a(Gt, { value: { getStyles: N }, children: /* @__PURE__ */ a(
    j,
    {
      ref: Tt(K, t),
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
  const i = Bt(t.attribute, t), { getError: l, getValue: u, setValue: g, mutateOptions: m, refreshError: B } = i, v = o || T(null), R = l(), f = T(null), _ = t.variant || "default", $ = (t == null ? void 0 : t.autoFocus) || !1, F = (t == null ? void 0 : t.fractions) || 1, y = t == null ? void 0 : t.fullSymbol, b = t == null ? void 0 : t.emptySymbol;
  zt(v, () => ({
    ...$t(i),
    focus() {
      f.current.checked = !0, f.current.focus();
    },
    getOptions() {
    },
    setOptions(c) {
    }
  }), [i]);
  var s = i.getFieldProps();
  return s.onChange = (d, c) => {
    t.readOnly || (g(d), t.onChange && t.onChange(d));
  }, s.onBlur = B, /* @__PURE__ */ a(Z, { children: !m.visible && /* @__PURE__ */ a(
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
          variant: _,
          readOnly: t.readOnly,
          inputRef: f,
          size: t.size,
          fractions: F,
          ...s,
          fullSymbol: y,
          emptySymbol: b,
          value: u(),
          error: R.message,
          autoFocus: $
        }
      )
    }
  ) });
});
export {
  ae as MantineRating
};
