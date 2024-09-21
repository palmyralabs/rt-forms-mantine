import { jsx as o, jsxs as N, Fragment as ee } from "react/jsx-runtime";
import { createContext as te, useContext as ae, forwardRef as se, useRef as j, useMemo as ne, useState as le, useEffect as B, useImperativeHandle as oe } from "react";
import { useFieldManager as re, getFieldHandler as ce, FieldDecorator as ie } from "@palmyralabs/rt-forms";
import { getFieldLabel as ue } from "./util.js";
import de from "../options/OptionsParser.js";
import { f as H, u as W, d as he, e as me, B as T, g as fe, j as ge, h as S } from "../../../chunks/factory.js";
import { g as pe } from "../../../chunks/get-theme-color.js";
import { I as be, a as we, b as ke } from "../../../chunks/InputsGroupFieldset.js";
import { I as A } from "../../../chunks/Input.js";
import { u as D } from "../../../chunks/use-uncontrolled.js";
import { u as Ce } from "../../../chunks/use-id.js";
const U = te(null), ve = U.Provider, Se = () => ae(U), ye = {}, G = H((d, e) => {
  const { value: s, defaultValue: a, onChange: w, size: r, wrapperProps: h, children: m, readOnly: k, ...y } = W("SwitchGroup", ye, d), [c, n] = D({
    value: s,
    defaultValue: a,
    finalValue: [],
    onChange: w
  });
  return /* @__PURE__ */ o(ve, { value: { value: c, onChange: (l) => {
    const i = l.currentTarget.value;
    !k && n(
      c.includes(i) ? c.filter((g) => g !== i) : [...c, i]
    );
  }, size: r }, children: /* @__PURE__ */ o(
    A.Wrapper,
    {
      size: r,
      ref: e,
      ...h,
      ...y,
      labelElement: "div",
      __staticSelector: "SwitchGroup",
      children: /* @__PURE__ */ o(be, { role: "group", children: m })
    }
  ) });
});
G.classes = A.Wrapper.classes;
G.displayName = "@mantine/core/SwitchGroup";
var $ = { root: "m_5f93f3bb", input: "m_926b4011", track: "m_9307d992", thumb: "m_93039a1d", trackLabel: "m_8277e082" };
const Ve = {
  labelPosition: "right"
}, _e = fe((d, { radius: e, color: s, size: a }) => ({
  root: {
    "--switch-radius": e === void 0 ? void 0 : ge(e),
    "--switch-height": S(a, "switch-height"),
    "--switch-width": S(a, "switch-width"),
    "--switch-thumb-size": S(a, "switch-thumb-size"),
    "--switch-label-font-size": S(a, "switch-label-font-size"),
    "--switch-track-label-padding": S(a, "switch-track-label-padding"),
    "--switch-color": s ? pe(s, d) : void 0
  }
})), I = H((d, e) => {
  const s = W("Switch", Ve, d), {
    classNames: a,
    className: w,
    style: r,
    styles: h,
    unstyled: m,
    vars: k,
    color: y,
    label: c,
    offLabel: n,
    onLabel: f,
    id: l,
    size: i,
    radius: g,
    wrapperProps: P,
    thumbIcon: V,
    checked: O,
    defaultChecked: p,
    onChange: t,
    labelPosition: b,
    description: _,
    error: x,
    disabled: L,
    variant: q,
    rootRef: J,
    mod: K,
    ...Q
  } = s, u = Se(), X = i || (u == null ? void 0 : u.size), C = he({
    name: "Switch",
    props: s,
    classes: $,
    className: w,
    style: r,
    classNames: a,
    styles: h,
    unstyled: m,
    vars: k,
    varsResolver: _e
  }), { styleProps: Y, rest: R } = me(Q), z = Ce(l), v = u ? {
    checked: u.value.includes(R.value),
    onChange: u.onChange
  } : {}, [E, Z] = D({
    value: v.checked ?? O,
    defaultValue: p,
    finalValue: !1
  });
  return /* @__PURE__ */ N(
    ke,
    {
      ...C("root"),
      __staticSelector: "Switch",
      __stylesApiProps: s,
      id: z,
      size: X,
      labelPosition: b,
      label: c,
      description: _,
      error: x,
      disabled: L,
      bodyElement: "label",
      labelElement: "span",
      classNames: a,
      styles: h,
      unstyled: m,
      "data-checked": v.checked || void 0,
      variant: q,
      ref: J,
      mod: K,
      ...Y,
      ...P,
      children: [
        /* @__PURE__ */ o(
          "input",
          {
            ...R,
            disabled: L,
            checked: E,
            onChange: (F) => {
              var M;
              u ? (M = v.onChange) == null || M.call(v, F) : t == null || t(F), Z(F.currentTarget.checked);
            },
            id: z,
            ref: e,
            type: "checkbox",
            role: "switch",
            ...C("input")
          }
        ),
        /* @__PURE__ */ N(
          T,
          {
            "aria-hidden": "true",
            mod: { error: x, "label-position": b, "without-labels": !f && !n },
            ...C("track"),
            children: [
              /* @__PURE__ */ o(T, { component: "span", mod: "reduce-motion", ...C("thumb"), children: V }),
              /* @__PURE__ */ o("span", { ...C("trackLabel"), children: E ? f : n })
            ]
          }
        )
      ]
    }
  );
});
I.classes = { ...$, ...we };
I.displayName = "@mantine/core/Switch";
I.Group = G;
const Ne = se(function(e, s) {
  const a = re(e.attribute, e), { getError: w, getValue: r, setValue: h, mutateOptions: m, refreshError: k } = a, y = s || j(null), c = w(), n = ne(
    () => de(e.options, e.label),
    [e.options, e.label]
  ), f = (t, b) => {
    var _ = n.checked.value;
    return t != null && t != null ? _ == t : _ == b;
  }, [l, i] = le(f(r(), e.defaultValue)), g = j(null);
  B(() => {
    i(f(r(), e.defaultValue));
  }, [r()]), oe(y, () => ({
    ...ce(a),
    focus() {
      g.current.checked = !0, g.current.focus();
    },
    getOptions() {
    },
    setOptions(b) {
    }
  }), [a]);
  const P = () => {
    i(!l);
  };
  B(() => {
    p.onChange = () => V();
  }, [l]);
  const V = () => {
    var t = l ? "checked" : "unchecked";
    return console.log(n[t].title, t), n[t].title;
  }, O = () => {
    var t = l ? "checked" : "unchecked";
    return n[t].value || null;
  };
  var p = a.getFieldProps();
  return p.onChange = (t, b) => {
    e.readOnly || (h(t.target.checked), e.onChange && e.onChange(t.target.checked));
  }, p.onBlur = k, /* @__PURE__ */ o(ee, { children: !m.visible && /* @__PURE__ */ o(
    ie,
    {
      label: ue(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        I,
        {
          checked: l,
          onClick: P,
          value: O(),
          label: V(),
          defaultValue: e.defaultValue,
          disabled: e.readOnly,
          error: c.message,
          ref: (t) => {
            g.current = t;
          },
          ...p
        }
      )
    }
  ) });
});
export {
  Ne as MantineSwitch
};
