import { jsxs as G, jsx as s, Fragment as J } from "react/jsx-runtime";
import { useEffect as K, forwardRef as Q, useRef as R, useImperativeHandle as X } from "react";
import { useServerLookupFieldManager as Y, getFieldHandler as Z, FieldDecorator as ee } from "@palmyralabs/rt-forms";
import { getFieldLabel as te } from "./util.js";
import { u as oe } from "../../../chunks/use-resolved-styles-api.js";
import { f as ae, u as se } from "../../../chunks/factory.js";
import { C as w, g as le, a as ne, u as re, O as ie } from "../../../chunks/OptionsDropdown.js";
import { I as M } from "../../../chunks/InputBase.js";
import { u as ue } from "../../../chunks/use-id.js";
import { u as ce } from "../../../chunks/use-uncontrolled.js";
const de = {}, y = ae((F, e) => {
  const l = se("Autocomplete", de, F), {
    classNames: p,
    styles: n,
    unstyled: r,
    vars: S,
    dropdownOpened: b,
    defaultDropdownOpened: f,
    onDropdownClose: i,
    onDropdownOpen: O,
    onFocus: u,
    onBlur: c,
    onClick: d,
    onChange: g,
    data: t,
    value: x,
    defaultValue: C,
    selectFirstOptionOnChange: h,
    onOptionSubmit: v,
    comboboxProps: q,
    readOnly: A,
    disabled: L,
    filter: E,
    limit: H,
    withScrollArea: j,
    maxDropdownHeight: T,
    size: V,
    id: z,
    renderOption: B,
    autoComplete: U,
    scrollAreaProps: W,
    ...m
  } = l, P = ue(z), _ = le(t), $ = ne(_), [D, k] = ce({
    value: x,
    defaultValue: C,
    finalValue: "",
    onChange: g
  }), a = re({
    opened: b,
    defaultOpened: f,
    onDropdownOpen: O,
    onDropdownClose: () => {
      i == null || i(), a.resetSelectedOption();
    }
  }), { resolvedClassNames: I, resolvedStyles: N } = oe({
    props: l,
    styles: n,
    classNames: p
  });
  return K(() => {
    h && a.selectFirstOption();
  }, [h, D]), /* @__PURE__ */ G(
    w,
    {
      store: a,
      __staticSelector: "Autocomplete",
      classNames: I,
      styles: N,
      unstyled: r,
      readOnly: A,
      onOptionSubmit: (o) => {
        v == null || v(o), k($[o].label), a.closeDropdown();
      },
      size: V,
      ...q,
      children: [
        /* @__PURE__ */ s(w.Target, { autoComplete: U, children: /* @__PURE__ */ s(
          M,
          {
            ref: e,
            ...m,
            size: V,
            __staticSelector: "Autocomplete",
            disabled: L,
            readOnly: A,
            value: D,
            onChange: (o) => {
              k(o.currentTarget.value), a.openDropdown(), h && a.selectFirstOption();
            },
            onFocus: (o) => {
              a.openDropdown(), u == null || u(o);
            },
            onBlur: (o) => {
              a.closeDropdown(), c == null || c(o);
            },
            onClick: (o) => {
              a.openDropdown(), d == null || d(o);
            },
            classNames: I,
            styles: N,
            unstyled: r,
            id: P
          }
        ) }),
        /* @__PURE__ */ s(
          ie,
          {
            data: _,
            hidden: A || L,
            filter: E,
            search: D,
            limit: H,
            hiddenWhenEmpty: !0,
            withScrollArea: j,
            maxDropdownHeight: T,
            unstyled: r,
            labelId: m.label ? `${P}-label` : void 0,
            "aria-label": m.label ? void 0 : m["aria-label"],
            renderOption: B,
            scrollAreaProps: W
          }
        )
      ]
    }
  );
});
y.classes = { ...M.classes, ...w.classes };
y.displayName = "@mantine/core/Autocomplete";
const De = Q(function(e, l) {
  const p = R(null), n = Y(e.attribute, e), { getError: r, getValue: S, setValue: b, options: f, getFieldProps: i } = n, O = r(), u = l || R(null);
  X(u, () => ({
    ...Z(n),
    focus() {
      p.current.focus();
    }
  }), [n]);
  const c = {
    onChange: (t) => {
      b(t), e.onChange && e.onChange(t);
    }
  }, d = f.map((t, x) => {
    var C = {
      label: t[e.queryOptions.labelAttribute] || t[e.lookupOptions.labelAttribute],
      value: t[e.queryOptions.labelAttribute].toString() || t[e.lookupOptions.labelAttribute].toString()
    };
    return C;
  }), g = S();
  return /* @__PURE__ */ s(J, { children: /* @__PURE__ */ s(
    ee,
    {
      label: te(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        y,
        {
          readOnly: e.readOnly,
          renderOption: e.renderOption,
          ...i(),
          value: g[e.queryOptions.labelAttribute],
          data: d,
          defaultValue: e.defaultValue,
          error: O.message,
          ...c
        }
      )
    }
  ) });
});
export {
  De as MantineServerLookup
};
