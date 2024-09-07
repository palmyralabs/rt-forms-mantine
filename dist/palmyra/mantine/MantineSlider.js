import { jsx as b, jsxs as q, Fragment as ue } from "react/jsx-runtime";
import { useState as ce, useRef as M, useCallback as de, forwardRef as me, useImperativeHandle as fe } from "react";
import { useFieldManager as be, getFieldHandler as ve, FieldDecorator as he } from "@palmyralabs/rt-forms";
import { getFieldLabel as pe } from "./util.js";
import { f as ge, b as xe, d as ye, g as Me, h as Ve, i as we, c as Se } from "../../chunks/factory.js";
import { g as ke } from "../../chunks/get-theme-color.js";
import { u as De } from "../../chunks/DirectionProvider.js";
import { c as B, g as Re, a as Pe, u as Fe, S as Le, b as Oe, T as ze, d as Ae, e as Ce, f as S } from "../../chunks/Slider.module.css.js";
import { u as He } from "../../chunks/use-uncontrolled.js";
import { u as Te } from "../../chunks/use-merged-ref.js";
import { c as O } from "../../chunks/clamp.js";
const Ne = {
  radius: "xl",
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (u) => u,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: !1,
  thumbLabel: "",
  showLabelOnHover: !0,
  disabled: !1,
  scale: (u) => u
}, _e = Me(
  (u, { size: a, color: c, thumbSize: i, radius: v }) => ({
    root: {
      "--slider-size": Ve(a, "slider-size"),
      "--slider-color": c ? ke(c, u) : void 0,
      "--slider-radius": v === void 0 ? void 0 : we(v),
      "--slider-thumb-size": i !== void 0 ? Se(i) : "calc(var(--slider-size) * 2)"
    }
  })
), z = ge((u, a) => {
  const c = xe("Slider", Ne, u), {
    classNames: i,
    styles: v,
    value: h,
    onChange: k,
    onChangeEnd: e,
    size: D,
    min: t,
    max: s,
    step: l,
    precision: R,
    defaultValue: p,
    name: V,
    marks: P,
    label: m,
    labelTransitionProps: A,
    labelAlwaysOn: G,
    thumbLabel: J,
    showLabelOnHover: F,
    thumbChildren: Q,
    disabled: g,
    unstyled: W,
    scale: X,
    inverted: Y,
    className: Z,
    style: $,
    vars: E,
    hiddenInputProps: ee,
    ...ae
  } = c, te = ye({
    name: "Slider",
    props: c,
    classes: B,
    classNames: i,
    className: Z,
    styles: v,
    style: $,
    vars: E,
    varsResolver: _e,
    unstyled: W
  }), { dir: L } = De(), [se, C] = ce(!1), [n, d] = He({
    value: typeof h == "number" ? O(h, t, s) : h,
    defaultValue: typeof p == "number" ? O(p, t, s) : p,
    finalValue: O(0, t, s),
    onChange: k
  }), H = M(n), T = M(), f = M(), N = Ce({ value: n, min: t, max: s }), w = X(n), re = typeof m == "function" ? m(w) : m, x = R ?? Re(l), le = de(
    ({ x: r }) => {
      if (!g) {
        const y = Pe({
          value: r,
          min: t,
          max: s,
          step: l,
          precision: x
        });
        d(y), H.current = y;
      }
    },
    [g, t, s, l, x, d]
  ), { ref: oe, active: ie } = Fe(
    le,
    { onScrubEnd: () => e == null ? void 0 : e(H.current) },
    L
  ), ne = (r) => {
    var y, _, j, I, K, U;
    if (!g)
      switch (r.key) {
        case "ArrowUp": {
          r.preventDefault(), (y = f.current) == null || y.focus();
          const o = S(
            Math.min(Math.max(n + l, t), s),
            x
          );
          d(o), e == null || e(o);
          break;
        }
        case "ArrowRight": {
          r.preventDefault(), (_ = f.current) == null || _.focus();
          const o = S(
            Math.min(Math.max(L === "rtl" ? n - l : n + l, t), s),
            x
          );
          d(o), e == null || e(o);
          break;
        }
        case "ArrowDown": {
          r.preventDefault(), (j = f.current) == null || j.focus();
          const o = S(
            Math.min(Math.max(n - l, t), s),
            x
          );
          d(o), e == null || e(o);
          break;
        }
        case "ArrowLeft": {
          r.preventDefault(), (I = f.current) == null || I.focus();
          const o = S(
            Math.min(Math.max(L === "rtl" ? n + l : n - l, t), s),
            x
          );
          d(o), e == null || e(o);
          break;
        }
        case "Home": {
          r.preventDefault(), (K = f.current) == null || K.focus(), d(t), e == null || e(t);
          break;
        }
        case "End": {
          r.preventDefault(), (U = f.current) == null || U.focus(), d(s), e == null || e(s);
          break;
        }
      }
  };
  return /* @__PURE__ */ b(Le, { value: { getStyles: te }, children: /* @__PURE__ */ q(
    Oe,
    {
      ...ae,
      ref: Te(a, T),
      onKeyDownCapture: ne,
      onMouseDownCapture: () => {
        var r;
        return (r = T.current) == null ? void 0 : r.focus();
      },
      size: D,
      disabled: g,
      children: [
        /* @__PURE__ */ b(
          ze,
          {
            inverted: Y,
            offset: 0,
            filled: N,
            marks: P,
            min: t,
            max: s,
            value: w,
            disabled: g,
            containerProps: {
              ref: oe,
              onMouseEnter: F ? () => C(!0) : void 0,
              onMouseLeave: F ? () => C(!1) : void 0
            },
            children: /* @__PURE__ */ b(
              Ae,
              {
                max: s,
                min: t,
                value: w,
                position: N,
                dragging: ie,
                label: re,
                ref: f,
                labelTransitionProps: A,
                labelAlwaysOn: G,
                thumbLabel: J,
                showLabelOnHover: F,
                isHovered: se,
                disabled: g,
                children: Q
              }
            )
          }
        ),
        /* @__PURE__ */ b("input", { type: "hidden", name: V, value: w, ...ee })
      ]
    }
  ) });
});
z.classes = B;
z.displayName = "@mantine/core/Slider";
const Ye = me(function(a, c) {
  const i = be(a.attribute, a), { getError: v, getValue: h, setValue: k, mutateOptions: e } = i, D = c || M(null), t = v(), s = a.label || "", l = a.min || 0, R = a.max || 100, p = M(null);
  fe(D, () => ({
    ...ve(i),
    focus() {
      p.current.focus();
    },
    getOptions() {
    },
    setOptions(A) {
    }
  }), [i]);
  var V = i.getFieldProps();
  V.onChange = (m) => {
    a.readOnly || (k(m), a.onChange && a.onChange(m));
  };
  var P = h() != "" ? h() : void 0;
  return /* @__PURE__ */ b(ue, { children: !e.visible && /* @__PURE__ */ b(
    he,
    {
      label: pe(a),
      customContainerClass: a.customContainerClass,
      colspan: a.colspan,
      customFieldClass: a.customFieldClass,
      customLabelClass: a.customLabelClass,
      children: /* @__PURE__ */ q("div", { style: { width: "100%", textAlign: "center" }, children: [
        s,
        /* @__PURE__ */ b(
          z,
          {
            ...V,
            ref: p,
            defaultValue: a.defaultValue,
            value: P,
            label: a.labelName,
            min: l,
            max: R,
            size: a.size,
            error: t.message
          }
        )
      ] })
    }
  ) });
});
export {
  Ye as MantineSlider
};
