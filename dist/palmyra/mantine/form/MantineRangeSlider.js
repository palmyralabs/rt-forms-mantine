import { jsx as v, jsxs as B, Fragment as Me } from "react/jsx-runtime";
import { useState as Z, useRef as V, useEffect as we, forwardRef as Ce, useImperativeHandle as Re } from "react";
import { useFieldManager as Te, getFieldHandler as xe, FieldDecorator as Ae } from "@palmyralabs/rt-forms";
import { getFieldLabel as Fe } from "./util.js";
import { f as Se, u as Ve, d as De, g as Pe, h as ke, j as Le, r as He } from "../../../chunks/factory.js";
import { g as Oe } from "../../../chunks/get-theme-color.js";
import { u as Ie } from "../../../chunks/DirectionProvider.js";
import { c as re, e as ee, g as ze, u as Ee, S as _e, b as Ne, T as je, d as te, f as b, a as ne } from "../../../chunks/Slider.module.css.js";
import { u as Be } from "../../../chunks/use-uncontrolled.js";
function Ue(u) {
  return "TouchEvent" in window && u instanceof window.TouchEvent ? u.touches[0].clientX : u.clientX;
}
const Ke = Pe(
  (u, { size: n, color: m, thumbSize: c, radius: y }) => ({
    root: {
      "--slider-size": ke(n, "slider-size"),
      "--slider-color": m ? Oe(m, u) : void 0,
      "--slider-radius": y === void 0 ? void 0 : Le(y),
      "--slider-thumb-size": c !== void 0 ? He(c) : "calc(var(--slider-size) * 2)"
    }
  })
), Xe = {
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (u) => u,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: !1,
  showLabelOnHover: !0,
  disabled: !1,
  scale: (u) => u
}, U = Se((u, n) => {
  const m = Ve("RangeSlider", Xe, u), {
    classNames: c,
    styles: y,
    value: d,
    onChange: E,
    onChangeEnd: h,
    size: D,
    min: a,
    max: s,
    minRange: g,
    maxRange: M,
    step: l,
    precision: P,
    defaultValue: R,
    name: k,
    marks: T,
    label: p,
    labelTransitionProps: ae,
    labelAlwaysOn: se,
    thumbFromLabel: oe,
    thumbToLabel: ie,
    showLabelOnHover: L,
    thumbChildren: x,
    disabled: w,
    unstyled: ue,
    scale: H,
    inverted: le,
    className: ce,
    style: de,
    vars: fe,
    hiddenInputProps: K,
    ...me
  } = m, he = De({
    name: "Slider",
    props: m,
    classes: re,
    classNames: c,
    className: ce,
    styles: y,
    style: de,
    vars: fe,
    varsResolver: Ke,
    unstyled: ue
  }), { dir: O } = Ie(), [_, I] = Z(-1), [X, $] = Z(!1), [o, ge] = Be({
    value: d,
    defaultValue: R,
    finalValue: [a, s],
    onChange: E
  }), i = V(o), C = V([]), A = V(void 0), F = [
    ee({ value: o[0], min: a, max: s }),
    ee({ value: o[1], min: a, max: s })
  ], f = P ?? ze(l), be = (e) => {
    ge(e), i.current = e;
  };
  we(
    () => {
      Array.isArray(d) && (i.current = d);
    },
    Array.isArray(d) ? [d[0], d[1]] : [null, null]
  );
  const S = (e, t, j) => {
    const r = [...i.current];
    r[t] = e, t === 0 && (e > r[1] - (g - 1e-9) && (r[1] = Math.min(e + g, s)), e > (s - (g - 1e-9) || a) && (r[t] = i.current[t]), r[1] - e > M && (r[1] = e + M)), t === 1 && (e < r[0] + g && (r[0] = Math.max(e - g, a)), e < r[0] + g && (r[t] = i.current[t]), e - r[0] > M && (r[0] = e - M)), r[0] = b(r[0], f), r[1] = b(r[1], f), be(r), j && (h == null || h(i.current));
  }, ve = (e) => {
    if (!w) {
      const t = ne({
        value: e,
        min: a,
        max: s,
        step: l,
        precision: f
      });
      S(t, A.current, !1);
    }
  }, { ref: N, active: W } = Ee(
    ({ x: e }) => ve(e),
    { onScrubEnd: () => h == null ? void 0 : h(i.current) },
    O
  );
  function q(e) {
    A.current = e;
  }
  const G = (e) => {
    N.current.focus();
    const t = N.current.getBoundingClientRect(), j = Ue(e.nativeEvent), r = ne({
      value: j - t.left,
      max: s,
      min: a,
      step: l,
      containerWidth: t.width
    }), Y = Math.abs(o[0] - r) > Math.abs(o[1] - r) ? 1 : 0, ye = O === "ltr" ? Y : Y === 1 ? 0 : 1;
    A.current = ye;
  }, z = () => _ !== 1 && _ !== 0 ? (I(0), 0) : _, pe = (e) => {
    if (!w)
      switch (e.key) {
        case "ArrowUp": {
          e.preventDefault();
          const t = z();
          C.current[t].focus(), S(
            b(
              Math.min(Math.max(i.current[t] + l, a), s),
              f
            ),
            t,
            !0
          );
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          const t = z();
          C.current[t].focus(), S(
            b(
              Math.min(
                Math.max(
                  O === "rtl" ? i.current[t] - l : i.current[t] + l,
                  a
                ),
                s
              ),
              f
            ),
            t,
            !0
          );
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          const t = z();
          C.current[t].focus(), S(
            b(
              Math.min(Math.max(i.current[t] - l, a), s),
              f
            ),
            t,
            !0
          );
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          const t = z();
          C.current[t].focus(), S(
            b(
              Math.min(
                Math.max(
                  O === "rtl" ? i.current[t] + l : i.current[t] - l,
                  a
                ),
                s
              ),
              f
            ),
            t,
            !0
          );
          break;
        }
      }
  }, J = {
    max: s,
    min: a,
    size: D,
    labelTransitionProps: ae,
    labelAlwaysOn: se,
    onBlur: () => I(-1)
  }, Q = Array.isArray(x);
  return /* @__PURE__ */ v(_e, { value: { getStyles: he }, children: /* @__PURE__ */ B(Ne, { ...me, size: D, ref: n, disabled: w, children: [
    /* @__PURE__ */ B(
      je,
      {
        offset: F[0],
        marksOffset: o[0],
        filled: F[1] - F[0],
        marks: T,
        inverted: le,
        min: a,
        max: s,
        value: o[1],
        disabled: w,
        containerProps: {
          ref: N,
          onMouseEnter: L ? () => $(!0) : void 0,
          onMouseLeave: L ? () => $(!1) : void 0,
          onTouchStartCapture: G,
          onTouchEndCapture: () => {
            A.current = -1;
          },
          onMouseDownCapture: G,
          onMouseUpCapture: () => {
            A.current = -1;
          },
          onKeyDownCapture: pe
        },
        children: [
          /* @__PURE__ */ v(
            te,
            {
              ...J,
              value: H(o[0]),
              position: F[0],
              dragging: W,
              label: typeof p == "function" ? p(b(H(o[0]), f)) : p,
              ref: (e) => {
                C.current[0] = e;
              },
              thumbLabel: oe,
              onMouseDown: () => q(0),
              onFocus: () => I(0),
              showLabelOnHover: L,
              isHovered: X,
              disabled: w,
              children: Q ? x[0] : x
            }
          ),
          /* @__PURE__ */ v(
            te,
            {
              ...J,
              thumbLabel: ie,
              value: H(o[1]),
              position: F[1],
              dragging: W,
              label: typeof p == "function" ? p(b(H(o[1]), f)) : p,
              ref: (e) => {
                C.current[1] = e;
              },
              onMouseDown: () => q(1),
              onFocus: () => I(1),
              showLabelOnHover: L,
              isHovered: X,
              disabled: w,
              children: Q ? x[1] : x
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v("input", { type: "hidden", name: `${k}_from`, value: o[0], ...K }),
    /* @__PURE__ */ v("input", { type: "hidden", name: `${k}_to`, value: o[1], ...K })
  ] }) });
});
U.classes = re;
U.displayName = "@mantine/core/RangeSlider";
const tt = Ce(function(n, m) {
  const c = Te(n.attribute, n), { getError: y, getValue: d, setValue: E, mutateOptions: h, refreshError: D } = c, a = m || V(null), s = y(), g = n.label || "", M = n.min || 0, l = n.max || 100, P = V(null);
  Re(a, () => ({
    ...xe(c),
    focus() {
      P.current.focus();
    },
    getOptions() {
    },
    setOptions(p) {
    }
  }), [c]);
  var R = c.getFieldProps();
  R.onChange = (T) => {
    n.readOnly || (E(T), n.onChange && n.onChange(T));
  }, R.onBlur = D;
  var k = d() != "" ? d() : void 0;
  return /* @__PURE__ */ v(Me, { children: !h.visible && /* @__PURE__ */ v(
    Ae,
    {
      label: Fe(n),
      customContainerClass: n.customContainerClass,
      colspan: n.colspan,
      customFieldClass: n.customFieldClass,
      customLabelClass: n.customLabelClass,
      children: /* @__PURE__ */ B("div", { style: { width: "100%", textAlign: "center" }, children: [
        g,
        /* @__PURE__ */ v(
          U,
          {
            ...R,
            ref: P,
            defaultValue: n.defaultValue,
            value: k,
            label: n.labelName,
            min: M,
            max: l,
            size: n.size,
            error: s.message
          }
        )
      ] })
    }
  ) });
});
export {
  tt as MantineRangeSlider
};
