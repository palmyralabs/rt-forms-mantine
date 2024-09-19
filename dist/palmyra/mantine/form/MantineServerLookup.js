import { jsxs as G, jsx as r, Fragment as J } from "react/jsx-runtime";
import { useEffect as K, forwardRef as Q, useRef as V, useImperativeHandle as X } from "react";
import { useServerLookupFieldManager as Y, getFieldHandler as Z, FieldDecorator as ee } from "@palmyralabs/rt-forms";
import { getFieldLabel as oe } from "./util.js";
import { u as te } from "../../../chunks/use-resolved-styles-api.js";
import { f as ae, u as le } from "../../../chunks/factory.js";
import { C as S, g as se, a as ne, u as re, O as ie } from "../../../chunks/OptionsDropdown.js";
import { I as M } from "../../../chunks/InputBase.js";
import { u as ue } from "../../../chunks/use-id.js";
import { u as ce } from "../../../chunks/use-uncontrolled.js";
const de = {}, y = ae((F, e) => {
  const i = le("Autocomplete", de, F), {
    classNames: O,
    styles: u,
    unstyled: c,
    vars: x,
    dropdownOpened: C,
    defaultDropdownOpened: h,
    onDropdownClose: d,
    onDropdownOpen: v,
    onFocus: m,
    onBlur: l,
    onClick: p,
    onChange: b,
    data: f,
    value: o,
    defaultValue: n,
    selectFirstOptionOnChange: s,
    onOptionSubmit: D,
    comboboxProps: E,
    readOnly: w,
    disabled: L,
    filter: H,
    limit: j,
    withScrollArea: q,
    maxDropdownHeight: T,
    size: I,
    id: z,
    renderOption: B,
    autoComplete: U,
    scrollAreaProps: W,
    ...g
  } = i, P = ue(z), _ = se(f), $ = ne(_), [A, k] = ce({
    value: o,
    defaultValue: n,
    finalValue: "",
    onChange: b
  }), a = re({
    opened: C,
    defaultOpened: h,
    onDropdownOpen: v,
    onDropdownClose: () => {
      d == null || d(), a.resetSelectedOption();
    }
  }), { resolvedClassNames: N, resolvedStyles: R } = te({
    props: i,
    styles: u,
    classNames: O
  });
  return K(() => {
    s && a.selectFirstOption();
  }, [s, A]), /* @__PURE__ */ G(
    S,
    {
      store: a,
      __staticSelector: "Autocomplete",
      classNames: N,
      styles: R,
      unstyled: c,
      readOnly: w,
      onOptionSubmit: (t) => {
        D == null || D(t), k($[t].label), a.closeDropdown();
      },
      size: I,
      ...E,
      children: [
        /* @__PURE__ */ r(S.Target, { autoComplete: U, children: /* @__PURE__ */ r(
          M,
          {
            ref: e,
            ...g,
            size: I,
            __staticSelector: "Autocomplete",
            disabled: L,
            readOnly: w,
            value: A,
            onChange: (t) => {
              k(t.currentTarget.value), a.openDropdown(), s && a.selectFirstOption();
            },
            onFocus: (t) => {
              a.openDropdown(), m == null || m(t);
            },
            onBlur: (t) => {
              a.closeDropdown(), l == null || l(t);
            },
            onClick: (t) => {
              a.openDropdown(), p == null || p(t);
            },
            classNames: N,
            styles: R,
            unstyled: c,
            id: P
          }
        ) }),
        /* @__PURE__ */ r(
          ie,
          {
            data: _,
            hidden: w || L,
            filter: H,
            search: A,
            limit: j,
            hiddenWhenEmpty: !0,
            withScrollArea: q,
            maxDropdownHeight: T,
            unstyled: c,
            labelId: g.label ? `${P}-label` : void 0,
            "aria-label": g.label ? void 0 : g["aria-label"],
            renderOption: B,
            scrollAreaProps: W
          }
        )
      ]
    }
  );
});
y.classes = { ...M.classes, ...S.classes };
y.displayName = "@mantine/core/Autocomplete";
const we = Q(function(e, i) {
  const O = V(null), u = Y(e.attribute, e), { getError: c, getValue: x, setValue: C, options: h, getFieldProps: d } = u, v = c(), m = i || V(null);
  X(m, () => ({
    ...Z(u),
    focus() {
      O.current.focus();
    }
  }), [u]);
  const l = h.map((o, n) => {
    var s = {
      label: o[e.queryOptions.labelAttribute] || o[e.lookupOptions.labelAttribute],
      value: o[e.queryOptions.idAttribute].toString() || o[e.lookupOptions.idAttribute].toString()
    };
    return s;
  }), p = {
    onChange: (o) => {
      const n = l.find((s) => s.label === o) || null;
      C(parseInt(n == null ? void 0 : n.value)), e.onChange && e.onChange(o);
    }
  }, b = x(), f = l.find((o) => o.value === (b == null ? void 0 : b.toString())) || null;
  return /* @__PURE__ */ r(J, { children: /* @__PURE__ */ r(
    ee,
    {
      label: oe(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        y,
        {
          readOnly: e.readOnly,
          renderOption: e.renderOption,
          ...d(),
          value: f == null ? void 0 : f.label,
          data: l,
          label: e.label,
          defaultValue: e.defaultValue,
          error: v.message,
          ...p
        }
      )
    }
  ) });
});
export {
  we as MantineServerLookup
};
