import { jsx as v, jsxs as U, Fragment as Me } from "react/jsx-runtime";
import { useState as Z, useRef as S, useEffect as we, forwardRef as Ce, useImperativeHandle as Re } from "react";
import { useFieldManager as Te, getFieldHandler as xe, FieldDecorator as Ae } from "@palmyralabs/rt-forms";
import { getFieldLabel as Fe } from "./util.js";
import { f as Se, b as Ve, d as De, g as Pe, h as ke, i as Le, c as He } from "../../chunks/factory.js";
import { g as Oe } from "../../chunks/get-theme-color.js";
import { u as Ie } from "../../chunks/DirectionProvider.js";
import { c as re, e as ee, g as ze, u as _e, S as Ee, b as Ne, T as Ue, d as te, f as b, a as ne } from "../../chunks/Slider.module.css.js";
import { u as je } from "../../chunks/use-uncontrolled.js";
function Be(u) {
  return "TouchEvent" in window && u instanceof window.TouchEvent ? u.touches[0].clientX : u.clientX;
}
const Ke = Pe(
  (u, { size: n, color: m, thumbSize: c, radius: p }) => ({
    root: {
      "--slider-size": ke(n, "slider-size"),
      "--slider-color": m ? Oe(m, u) : void 0,
      "--slider-radius": p === void 0 ? void 0 : Le(p),
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
}, j = Se((u, n) => {
  const m = Ve("RangeSlider", Xe, u), {
    classNames: c,
    styles: p,
    value: d,
    onChange: I,
    onChangeEnd: h,
    size: V,
    min: a,
    max: s,
    minRange: g,
    maxRange: y,
    step: l,
    precision: D,
    defaultValue: z,
    name: M,
    marks: B,
    label: w,
    labelTransitionProps: ae,
    labelAlwaysOn: se,
    thumbFromLabel: oe,
    thumbToLabel: ie,
    showLabelOnHover: P,
    thumbChildren: T,
    disabled: C,
    unstyled: ue,
    scale: k,
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
    styles: p,
    style: de,
    vars: fe,
    varsResolver: Ke,
    unstyled: ue
  }), { dir: L } = Ie(), [_, H] = Z(-1), [X, $] = Z(!1), [o, ge] = je({
    value: d,
    defaultValue: z,
    finalValue: [a, s],
    onChange: I
  }), i = S(o), R = S([]), x = S(void 0), A = [
    ee({ value: o[0], min: a, max: s }),
    ee({ value: o[1], min: a, max: s })
  ], f = D ?? ze(l), be = (e) => {
    ge(e), i.current = e;
  };
  we(
    () => {
      Array.isArray(d) && (i.current = d);
    },
    Array.isArray(d) ? [d[0], d[1]] : [null, null]
  );
  const F = (e, t, N) => {
    const r = [...i.current];
    r[t] = e, t === 0 && (e > r[1] - (g - 1e-9) && (r[1] = Math.min(e + g, s)), e > (s - (g - 1e-9) || a) && (r[t] = i.current[t]), r[1] - e > y && (r[1] = e + y)), t === 1 && (e < r[0] + g && (r[0] = Math.max(e - g, a)), e < r[0] + g && (r[t] = i.current[t]), e - r[0] > y && (r[0] = e - y)), r[0] = b(r[0], f), r[1] = b(r[1], f), be(r), N && (h == null || h(i.current));
  }, ve = (e) => {
    if (!C) {
      const t = ne({
        value: e,
        min: a,
        max: s,
        step: l,
        precision: f
      });
      F(t, x.current, !1);
    }
  }, { ref: E, active: W } = _e(
    ({ x: e }) => ve(e),
    { onScrubEnd: () => h == null ? void 0 : h(i.current) },
    L
  );
  function q(e) {
    x.current = e;
  }
  const G = (e) => {
    E.current.focus();
    const t = E.current.getBoundingClientRect(), N = Be(e.nativeEvent), r = ne({
      value: N - t.left,
      max: s,
      min: a,
      step: l,
      containerWidth: t.width
    }), Y = Math.abs(o[0] - r) > Math.abs(o[1] - r) ? 1 : 0, ye = L === "ltr" ? Y : Y === 1 ? 0 : 1;
    x.current = ye;
  }, O = () => _ !== 1 && _ !== 0 ? (H(0), 0) : _, pe = (e) => {
    if (!C)
      switch (e.key) {
        case "ArrowUp": {
          e.preventDefault();
          const t = O();
          R.current[t].focus(), F(
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
          const t = O();
          R.current[t].focus(), F(
            b(
              Math.min(
                Math.max(
                  L === "rtl" ? i.current[t] - l : i.current[t] + l,
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
          const t = O();
          R.current[t].focus(), F(
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
          const t = O();
          R.current[t].focus(), F(
            b(
              Math.min(
                Math.max(
                  L === "rtl" ? i.current[t] + l : i.current[t] - l,
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
    size: V,
    labelTransitionProps: ae,
    labelAlwaysOn: se,
    onBlur: () => H(-1)
  }, Q = Array.isArray(T);
  return /* @__PURE__ */ v(Ee, { value: { getStyles: he }, children: /* @__PURE__ */ U(Ne, { ...me, size: V, ref: n, disabled: C, children: [
    /* @__PURE__ */ U(
      Ue,
      {
        offset: A[0],
        marksOffset: o[0],
        filled: A[1] - A[0],
        marks: B,
        inverted: le,
        min: a,
        max: s,
        value: o[1],
        disabled: C,
        containerProps: {
          ref: E,
          onMouseEnter: P ? () => $(!0) : void 0,
          onMouseLeave: P ? () => $(!1) : void 0,
          onTouchStartCapture: G,
          onTouchEndCapture: () => {
            x.current = -1;
          },
          onMouseDownCapture: G,
          onMouseUpCapture: () => {
            x.current = -1;
          },
          onKeyDownCapture: pe
        },
        children: [
          /* @__PURE__ */ v(
            te,
            {
              ...J,
              value: k(o[0]),
              position: A[0],
              dragging: W,
              label: typeof w == "function" ? w(b(k(o[0]), f)) : w,
              ref: (e) => {
                R.current[0] = e;
              },
              thumbLabel: oe,
              onMouseDown: () => q(0),
              onFocus: () => H(0),
              showLabelOnHover: P,
              isHovered: X,
              disabled: C,
              children: Q ? T[0] : T
            }
          ),
          /* @__PURE__ */ v(
            te,
            {
              ...J,
              thumbLabel: ie,
              value: k(o[1]),
              position: A[1],
              dragging: W,
              label: typeof w == "function" ? w(b(k(o[1]), f)) : w,
              ref: (e) => {
                R.current[1] = e;
              },
              onMouseDown: () => q(1),
              onFocus: () => H(1),
              showLabelOnHover: P,
              isHovered: X,
              disabled: C,
              children: Q ? T[1] : T
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v("input", { type: "hidden", name: `${M}_from`, value: o[0], ...K }),
    /* @__PURE__ */ v("input", { type: "hidden", name: `${M}_to`, value: o[1], ...K })
  ] }) });
});
j.classes = re;
j.displayName = "@mantine/core/RangeSlider";
const tt = Ce(function(n, m) {
  const c = Te(n.attribute, n), { getError: p, getValue: d, setValue: I, mutateOptions: h } = c, V = m || S(null), a = p(), s = n.label || "", g = n.min || 0, y = n.max || 100, l = S(null);
  Re(V, () => ({
    ...xe(c),
    focus() {
      l.current.focus();
    },
    getOptions() {
    },
    setOptions(B) {
    }
  }), [c]);
  var D = c.getFieldProps();
  D.onChange = (M) => {
    n.readOnly || (I(M), n.onChange && n.onChange(M));
  };
  var z = d() != "" ? d() : void 0;
  return /* @__PURE__ */ v(Me, { children: !h.visible && /* @__PURE__ */ v(
    Ae,
    {
      label: Fe(n),
      customContainerClass: n.customContainerClass,
      colspan: n.colspan,
      customFieldClass: n.customFieldClass,
      customLabelClass: n.customLabelClass,
      children: /* @__PURE__ */ U("div", { style: { width: "100%", textAlign: "center" }, children: [
        s,
        /* @__PURE__ */ v(
          j,
          {
            ...D,
            ref: l,
            defaultValue: n.defaultValue,
            value: z,
            label: n.labelName,
            min: g,
            max: y,
            size: n.size,
            error: a.message
          }
        )
      ] })
    }
  ) });
});
export {
  tt as MantineRangeSlider
};
