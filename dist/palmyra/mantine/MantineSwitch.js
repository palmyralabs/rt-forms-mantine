import { jsx as c, jsxs as M, Fragment as ee } from "react/jsx-runtime";
import { createContext as te, useContext as ae, forwardRef as se, useRef as N, useMemo as ne, useState as oe, useEffect as T, useImperativeHandle as le } from "react";
import { useFieldManager as ce, getFieldHandler as re, FieldDecorator as ie } from "@palmyralabs/rt-forms";
import { getFieldLabel as ue } from "./util.js";
import de from "./options/OptionsParser.js";
import { f as B, b as H, d as he, e as me, B as j, g as fe, i as ge, h as S } from "../../chunks/factory.js";
import { g as pe } from "../../chunks/get-theme-color.js";
import { I as be, a as we, b as ke } from "../../chunks/InputsGroupFieldset.js";
import { I as W } from "../../chunks/Input.js";
import { u as A } from "../../chunks/use-uncontrolled.js";
import { u as Ce } from "../../chunks/use-id.js";
const D = te(null), ve = D.Provider, Se = () => ae(D), ye = {}, F = B((h, e) => {
  const { value: s, defaultValue: a, onChange: p, size: r, wrapperProps: m, children: f, readOnly: b, ...y } = H("SwitchGroup", ye, h), [n, i] = A({
    value: s,
    defaultValue: a,
    finalValue: [],
    onChange: p
  });
  return /* @__PURE__ */ c(ve, { value: { value: n, onChange: (g) => {
    const l = g.currentTarget.value;
    !b && i(
      n.includes(l) ? n.filter((V) => V !== l) : [...n, l]
    );
  }, size: r }, children: /* @__PURE__ */ c(
    W.Wrapper,
    {
      size: r,
      ref: e,
      ...m,
      ...y,
      labelElement: "div",
      __staticSelector: "SwitchGroup",
      children: /* @__PURE__ */ c(be, { role: "group", children: f })
    }
  ) });
});
F.classes = W.Wrapper.classes;
F.displayName = "@mantine/core/SwitchGroup";
var U = { root: "m_5f93f3bb", input: "m_926b4011", track: "m_9307d992", thumb: "m_93039a1d", trackLabel: "m_8277e082" };
const Ve = {
  labelPosition: "right"
}, _e = fe((h, { radius: e, color: s, size: a }) => ({
  root: {
    "--switch-radius": e === void 0 ? void 0 : ge(e),
    "--switch-height": S(a, "switch-height"),
    "--switch-width": S(a, "switch-width"),
    "--switch-thumb-size": S(a, "switch-thumb-size"),
    "--switch-label-font-size": S(a, "switch-label-font-size"),
    "--switch-track-label-padding": S(a, "switch-track-label-padding"),
    "--switch-color": s ? pe(s, h) : void 0
  }
})), I = B((h, e) => {
  const s = H("Switch", Ve, h), {
    classNames: a,
    className: p,
    style: r,
    styles: m,
    unstyled: f,
    vars: b,
    color: y,
    label: n,
    offLabel: i,
    onLabel: o,
    id: g,
    size: l,
    radius: V,
    wrapperProps: _,
    thumbIcon: P,
    checked: w,
    defaultChecked: t,
    onChange: u,
    labelPosition: k,
    description: $,
    error: G,
    disabled: x,
    variant: q,
    rootRef: J,
    mod: K,
    ...Q
  } = s, d = Se(), X = l || (d == null ? void 0 : d.size), C = he({
    name: "Switch",
    props: s,
    classes: U,
    className: p,
    style: r,
    classNames: a,
    styles: m,
    unstyled: f,
    vars: b,
    varsResolver: _e
  }), { styleProps: Y, rest: L } = me(Q), R = Ce(g), v = d ? {
    checked: d.value.includes(L.value),
    onChange: d.onChange
  } : {}, [z, Z] = A({
    value: v.checked ?? w,
    defaultValue: t,
    finalValue: !1
  });
  return /* @__PURE__ */ M(
    ke,
    {
      ...C("root"),
      __staticSelector: "Switch",
      __stylesApiProps: s,
      id: R,
      size: X,
      labelPosition: k,
      label: n,
      description: $,
      error: G,
      disabled: x,
      bodyElement: "label",
      labelElement: "span",
      classNames: a,
      styles: m,
      unstyled: f,
      "data-checked": v.checked || void 0,
      variant: q,
      ref: J,
      mod: K,
      ...Y,
      ..._,
      children: [
        /* @__PURE__ */ c(
          "input",
          {
            ...L,
            disabled: x,
            checked: z,
            onChange: (O) => {
              var E;
              d ? (E = v.onChange) == null || E.call(v, O) : u == null || u(O), Z(O.currentTarget.checked);
            },
            id: R,
            ref: e,
            type: "checkbox",
            role: "switch",
            ...C("input")
          }
        ),
        /* @__PURE__ */ M(
          j,
          {
            "aria-hidden": "true",
            mod: { error: G, "label-position": k, "without-labels": !o && !i },
            ...C("track"),
            children: [
              /* @__PURE__ */ c(j, { component: "span", mod: "reduce-motion", ...C("thumb"), children: P }),
              /* @__PURE__ */ c("span", { ...C("trackLabel"), children: z ? o : i })
            ]
          }
        )
      ]
    }
  );
});
I.classes = { ...U, ...we };
I.displayName = "@mantine/core/Switch";
I.Group = F;
const Ne = se(function(e, s) {
  const a = ce(e.attribute, e), { getError: p, getValue: r, setValue: m, mutateOptions: f } = a, b = s || N(null), y = p(), n = ne(
    () => de(e.options, e.label),
    [e.options, e.label]
  ), i = (t, u) => {
    var k = n.checked.value;
    return t != null && t != null ? k == t : k == u;
  }, [o, g] = oe(i(r(), e.defaultValue)), l = N(null);
  T(() => {
    g(i(r(), e.defaultValue));
  }, [r()]), le(b, () => ({
    ...re(a),
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    getOptions() {
    },
    setOptions(u) {
    }
  }), [a]);
  const V = () => {
    g(!o);
  };
  T(() => {
    w.onChange = () => _();
  }, [o]);
  const _ = () => {
    var t = o ? "checked" : "unchecked";
    return console.log(n[t].title, t), n[t].title;
  }, P = () => {
    var t = o ? "checked" : "unchecked";
    return n[t].value;
  };
  var w = a.getFieldProps();
  return w.onChange = (t, u) => {
    e.readOnly || (m(t.target.checked), e.onChange && e.onChange(t.target.checked));
  }, /* @__PURE__ */ c(ee, { children: !f.visible && /* @__PURE__ */ c(
    ie,
    {
      label: ue(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ c(
        I,
        {
          checked: o,
          onClick: V,
          value: P(),
          label: _(),
          disabled: e.readOnly,
          error: y.message,
          ref: (t) => {
            l.current = t;
          },
          ...w
        }
      )
    }
  ) });
});
export {
  Ne as MantineSwitch
};
