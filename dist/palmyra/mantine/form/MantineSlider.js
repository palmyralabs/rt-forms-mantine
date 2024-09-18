import { jsx as f, jsxs as q, Fragment as ue } from "react/jsx-runtime";
import { useState as ce, useRef as w, useCallback as de, forwardRef as me, useImperativeHandle as fe } from "react";
import { useFieldManager as be, getFieldHandler as ve, FieldDecorator as he } from "@palmyralabs/rt-forms";
import { getFieldLabel as pe } from "./util.js";
import { f as ge, u as xe, d as ye, g as Me, h as Ve, j as we, r as Se } from "../../../chunks/factory.js";
import { g as ke } from "../../../chunks/get-theme-color.js";
import { u as De } from "../../../chunks/DirectionProvider.js";
import { c as G, g as Re, a as Pe, u as Fe, S as Le, b as Oe, T as ze, d as Ae, e as Ce, f as D } from "../../../chunks/Slider.module.css.js";
import { u as He } from "../../../chunks/use-uncontrolled.js";
import { u as Te } from "../../../chunks/use-merged-ref.js";
import { c as z } from "../../../chunks/clamp.js";
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
}, je = Me(
  (u, { size: a, color: c, thumbSize: i, radius: b }) => ({
    root: {
      "--slider-size": Ve(a, "slider-size"),
      "--slider-color": c ? ke(c, u) : void 0,
      "--slider-radius": b === void 0 ? void 0 : we(b),
      "--slider-thumb-size": i !== void 0 ? Se(i) : "calc(var(--slider-size) * 2)"
    }
  })
), A = ge((u, a) => {
  const c = xe("Slider", Ne, u), {
    classNames: i,
    styles: b,
    value: p,
    onChange: R,
    onChangeEnd: e,
    size: P,
    min: t,
    max: s,
    step: l,
    precision: F,
    defaultValue: g,
    name: S,
    marks: x,
    label: y,
    labelTransitionProps: M,
    labelAlwaysOn: C,
    thumbLabel: J,
    showLabelOnHover: L,
    thumbChildren: Q,
    disabled: v,
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
    classes: G,
    classNames: i,
    className: Z,
    styles: b,
    style: $,
    vars: E,
    varsResolver: je,
    unstyled: W
  }), { dir: O } = De(), [se, H] = ce(!1), [n, d] = He({
    value: typeof p == "number" ? z(p, t, s) : p,
    defaultValue: typeof g == "number" ? z(g, t, s) : g,
    finalValue: z(0, t, s),
    onChange: R
  }), T = w(n), N = w(), m = w(), j = Ce({ value: n, min: t, max: s }), k = X(n), re = typeof y == "function" ? y(k) : y, h = F ?? Re(l), le = de(
    ({ x: r }) => {
      if (!v) {
        const V = Pe({
          value: r,
          min: t,
          max: s,
          step: l,
          precision: h
        });
        d(V), T.current = V;
      }
    },
    [v, t, s, l, h, d]
  ), { ref: oe, active: ie } = Fe(
    le,
    { onScrubEnd: () => e == null ? void 0 : e(T.current) },
    O
  ), ne = (r) => {
    var V, _, I, K, U, B;
    if (!v)
      switch (r.key) {
        case "ArrowUp": {
          r.preventDefault(), (V = m.current) == null || V.focus();
          const o = D(
            Math.min(Math.max(n + l, t), s),
            h
          );
          d(o), e == null || e(o);
          break;
        }
        case "ArrowRight": {
          r.preventDefault(), (_ = m.current) == null || _.focus();
          const o = D(
            Math.min(Math.max(O === "rtl" ? n - l : n + l, t), s),
            h
          );
          d(o), e == null || e(o);
          break;
        }
        case "ArrowDown": {
          r.preventDefault(), (I = m.current) == null || I.focus();
          const o = D(
            Math.min(Math.max(n - l, t), s),
            h
          );
          d(o), e == null || e(o);
          break;
        }
        case "ArrowLeft": {
          r.preventDefault(), (K = m.current) == null || K.focus();
          const o = D(
            Math.min(Math.max(O === "rtl" ? n + l : n - l, t), s),
            h
          );
          d(o), e == null || e(o);
          break;
        }
        case "Home": {
          r.preventDefault(), (U = m.current) == null || U.focus(), d(t), e == null || e(t);
          break;
        }
        case "End": {
          r.preventDefault(), (B = m.current) == null || B.focus(), d(s), e == null || e(s);
          break;
        }
      }
  };
  return /* @__PURE__ */ f(Le, { value: { getStyles: te }, children: /* @__PURE__ */ q(
    Oe,
    {
      ...ae,
      ref: Te(a, N),
      onKeyDownCapture: ne,
      onMouseDownCapture: () => {
        var r;
        return (r = N.current) == null ? void 0 : r.focus();
      },
      size: P,
      disabled: v,
      children: [
        /* @__PURE__ */ f(
          ze,
          {
            inverted: Y,
            offset: 0,
            filled: j,
            marks: x,
            min: t,
            max: s,
            value: k,
            disabled: v,
            containerProps: {
              ref: oe,
              onMouseEnter: L ? () => H(!0) : void 0,
              onMouseLeave: L ? () => H(!1) : void 0
            },
            children: /* @__PURE__ */ f(
              Ae,
              {
                max: s,
                min: t,
                value: k,
                position: j,
                dragging: ie,
                label: re,
                ref: m,
                labelTransitionProps: M,
                labelAlwaysOn: C,
                thumbLabel: J,
                showLabelOnHover: L,
                isHovered: se,
                disabled: v,
                children: Q
              }
            )
          }
        ),
        /* @__PURE__ */ f("input", { type: "hidden", name: S, value: k, ...ee })
      ]
    }
  ) });
});
A.classes = G;
A.displayName = "@mantine/core/Slider";
const Ye = me(function(a, c) {
  const i = be(a.attribute, a), { getError: b, getValue: p, setValue: R, mutateOptions: e, refreshError: P } = i, t = c || w(null), s = b(), l = a.label || "", F = a.min || 0, g = a.max || 100, S = w(null);
  fe(t, () => ({
    ...ve(i),
    focus() {
      S.current.focus();
    },
    getOptions() {
    },
    setOptions(C) {
    }
  }), [i]);
  var x = i.getFieldProps();
  x.onChange = (M) => {
    a.readOnly || (R(M), a.onChange && a.onChange(M));
  };
  var y = p();
  //!= '' ? getValue() : undefined
  return x.onBlur = P, /* @__PURE__ */ f(ue, { children: !e.visible && /* @__PURE__ */ f(
    he,
    {
      label: pe(a),
      customContainerClass: a.customContainerClass,
      colspan: a.colspan,
      customFieldClass: a.customFieldClass,
      customLabelClass: a.customLabelClass,
      children: /* @__PURE__ */ q("div", { style: { width: "100%", textAlign: "center" }, children: [
        l,
        /* @__PURE__ */ f(
          A,
          {
            ...x,
            ref: S,
            defaultValue: a.defaultValue,
            value: y,
            label: a.labelName,
            min: F,
            max: g,
            size: a.size,
            error: s.message
          }
        )
      ] })
    }
  ) });
});
export {
  Ye as MantineSlider
};
