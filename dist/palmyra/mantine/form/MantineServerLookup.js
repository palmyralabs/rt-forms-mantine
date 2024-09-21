import { jsxs as G, jsx as i, Fragment as J } from "react/jsx-runtime";
import { useEffect as K, forwardRef as Q, useRef as V, useImperativeHandle as X } from "react";
import { useServerLookupFieldManager as Y, getFieldHandler as Z, FieldDecorator as ee } from "@palmyralabs/rt-forms";
import { getFieldLabel as te } from "./util.js";
import { u as oe } from "../../../chunks/use-resolved-styles-api.js";
import { f as ae, u as se } from "../../../chunks/factory.js";
import { C as S, g as le, a as ne, u as re, O as ie } from "../../../chunks/OptionsDropdown.js";
import { I as M } from "../../../chunks/InputBase.js";
import { u as ue } from "../../../chunks/use-id.js";
import { u as de } from "../../../chunks/use-uncontrolled.js";
const ce = {}, F = ae((x, e) => {
  const u = se("Autocomplete", ce, x), {
    classNames: g,
    styles: d,
    unstyled: c,
    vars: C,
    dropdownOpened: h,
    defaultDropdownOpened: A,
    onDropdownClose: m,
    onDropdownOpen: v,
    onFocus: p,
    onBlur: l,
    onClick: b,
    onChange: t,
    data: f,
    value: o,
    defaultValue: r,
    selectFirstOptionOnChange: n,
    onOptionSubmit: y,
    comboboxProps: j,
    readOnly: D,
    disabled: L,
    filter: q,
    limit: E,
    withScrollArea: H,
    maxDropdownHeight: T,
    size: k,
    id: z,
    renderOption: B,
    autoComplete: U,
    scrollAreaProps: W,
    ...O
  } = u, I = ue(z), P = le(f), $ = ne(P), [w, _] = de({
    value: o,
    defaultValue: r,
    finalValue: "",
    onChange: t
  }), s = re({
    opened: h,
    defaultOpened: A,
    onDropdownOpen: v,
    onDropdownClose: () => {
      m == null || m(), s.resetSelectedOption();
    }
  }), { resolvedClassNames: N, resolvedStyles: R } = oe({
    props: u,
    styles: d,
    classNames: g
  });
  return K(() => {
    n && s.selectFirstOption();
  }, [n, w]), /* @__PURE__ */ G(
    S,
    {
      store: s,
      __staticSelector: "Autocomplete",
      classNames: N,
      styles: R,
      unstyled: c,
      readOnly: D,
      onOptionSubmit: (a) => {
        y == null || y(a), _($[a].label), s.closeDropdown();
      },
      size: k,
      ...j,
      children: [
        /* @__PURE__ */ i(S.Target, { autoComplete: U, children: /* @__PURE__ */ i(
          M,
          {
            ref: e,
            ...O,
            size: k,
            __staticSelector: "Autocomplete",
            disabled: L,
            readOnly: D,
            value: w,
            onChange: (a) => {
              _(a.currentTarget.value), s.openDropdown(), n && s.selectFirstOption();
            },
            onFocus: (a) => {
              s.openDropdown(), p == null || p(a);
            },
            onBlur: (a) => {
              s.closeDropdown(), l == null || l(a);
            },
            onClick: (a) => {
              s.openDropdown(), b == null || b(a);
            },
            classNames: N,
            styles: R,
            unstyled: c,
            id: I
          }
        ) }),
        /* @__PURE__ */ i(
          ie,
          {
            data: P,
            hidden: D || L,
            filter: q,
            search: w,
            limit: E,
            hiddenWhenEmpty: !0,
            withScrollArea: H,
            maxDropdownHeight: T,
            unstyled: c,
            labelId: O.label ? `${I}-label` : void 0,
            "aria-label": O.label ? void 0 : O["aria-label"],
            renderOption: B,
            scrollAreaProps: W
          }
        )
      ]
    }
  );
});
F.classes = { ...M.classes, ...S.classes };
F.displayName = "@mantine/core/Autocomplete";
const ye = Q(function(e, u) {
  const g = V(null), d = Y(e.attribute, e), { getError: c, getValue: C, setValue: h, options: A, getFieldProps: m } = d, v = c(), p = u || V(null);
  X(p, () => ({
    ...Z(d),
    focus() {
      g.current.focus();
    }
  }), [d]);
  const l = A.map((o, r) => {
    var n = {
      label: o[e.queryOptions.labelAttribute] || o[e.lookupOptions.labelAttribute],
      value: o[e.queryOptions.idAttribute].toString() || o[e.lookupOptions.idAttribute].toString()
    };
    return n;
  }), b = {
    onChange: (o) => {
      const r = l.find((n) => n.label === o) || null;
      h(parseInt(r == null ? void 0 : r.value)), e.onChange && e.onChange(o);
    }
  };
  var t = C();
  typeof C() == "object" && (t = (t == null ? void 0 : t[e.queryOptions.idAttribute]) || (t == null ? void 0 : t[e.lookupOptions.idAttribute]));
  const f = l.find((o) => o.value === (t == null ? void 0 : t.toString())) || null;
  return /* @__PURE__ */ i(J, { children: /* @__PURE__ */ i(
    ee,
    {
      label: te(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        F,
        {
          readOnly: e.readOnly,
          renderOption: e.renderOption,
          ...m(),
          value: f == null ? void 0 : f.label,
          data: l,
          label: e.label,
          defaultValue: e.defaultValue,
          error: v.message,
          ...b
        }
      )
    }
  ) });
});
export {
  ye as MantineServerLookup
};
