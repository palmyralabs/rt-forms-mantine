import { jsx as c, jsxs as K, Fragment as Y } from "react/jsx-runtime";
import { useRef as L, useEffect as T, useMemo as Q, forwardRef as we, useImperativeHandle as De } from "react";
import { useFieldManager as Pe, getFieldHandler as Ve, FieldDecorator as Ie } from "@palmyralabs/rt-forms";
import { getFieldLabel as xe } from "./util.js";
import { u as Fe } from "../../chunks/use-resolved-styles-api.js";
import { f as Me, b as _e } from "../../chunks/factory.js";
import { C as g, g as ke, a as Ee, u as Ne, O as Re } from "../../chunks/OptionsDropdown.js";
import { I as Z } from "../../chunks/InputBase.js";
import { u as Be } from "../../chunks/use-id.js";
import { u as X } from "../../chunks/use-uncontrolled.js";
function He(v) {
  const e = L();
  return T(() => {
    e.current = v;
  }, [v]), e.current;
}
const Le = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, j = Me((v, e) => {
  const C = _e("Select", Le, v), {
    classNames: f,
    styles: F,
    unstyled: i,
    vars: A,
    dropdownOpened: M,
    defaultDropdownOpened: _,
    onDropdownClose: O,
    onDropdownOpen: m,
    onFocus: y,
    onBlur: S,
    onClick: o,
    onChange: k,
    data: D,
    value: n,
    defaultValue: p,
    selectFirstOptionOnChange: u,
    onOptionSubmit: E,
    comboboxProps: ee,
    readOnly: P,
    disabled: V,
    filter: te,
    limit: ae,
    withScrollArea: le,
    maxDropdownHeight: oe,
    size: I,
    searchable: d,
    rightSection: ne,
    checkIconPosition: se,
    withCheckIcon: re,
    nothingFoundMessage: z,
    name: ce,
    form: ie,
    searchValue: ue,
    defaultSearchValue: de,
    onSearchChange: fe,
    allowDeselect: me,
    error: U,
    rightSectionPointerEvents: pe,
    id: he,
    clearable: be,
    clearButtonProps: ge,
    hiddenInputProps: ve,
    renderOption: Ce,
    onClear: N,
    autoComplete: Oe,
    scrollAreaProps: ye,
    ...x
  } = C, R = Q(() => ke(D), [D]), w = Q(() => Ee(R), [R]), W = Be(he), [s, $, Se] = X({
    value: n,
    defaultValue: p,
    finalValue: null,
    onChange: k
  }), a = typeof s == "string" ? w[s] : void 0, h = He(a), [B, b] = X({
    value: ue,
    defaultValue: de,
    finalValue: a ? a.label : "",
    onChange: fe
  }), l = Ne({
    opened: M,
    defaultOpened: _,
    onDropdownOpen: () => {
      m == null || m(), l.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      O == null || O(), l.resetSelectedOption();
    }
  }), { resolvedClassNames: q, resolvedStyles: G } = Fe({
    props: C,
    styles: F,
    classNames: f
  });
  T(() => {
    u && l.selectFirstOption();
  }, [u, s]), T(() => {
    n === null && b(""), typeof n == "string" && a && ((h == null ? void 0 : h.value) !== a.value || (h == null ? void 0 : h.label) !== a.label) && b(a.label);
  }, [n, a]);
  const J = be && !!s && !V && !P && /* @__PURE__ */ c(
    g.ClearButton,
    {
      size: I,
      ...ge,
      onClear: () => {
        $(null, null), b(""), N == null || N();
      }
    }
  );
  return /* @__PURE__ */ K(Y, { children: [
    /* @__PURE__ */ K(
      g,
      {
        store: l,
        __staticSelector: "Select",
        classNames: q,
        styles: G,
        unstyled: i,
        readOnly: P,
        onOptionSubmit: (t) => {
          E == null || E(t);
          const r = me && w[t].value === s ? null : w[t], H = r ? r.value : null;
          H !== s && $(H, r), !Se && b(typeof H == "string" && (r == null ? void 0 : r.label) || ""), l.closeDropdown();
        },
        size: I,
        ...ee,
        children: [
          /* @__PURE__ */ c(g.Target, { targetType: d ? "input" : "button", autoComplete: Oe, children: /* @__PURE__ */ c(
            Z,
            {
              id: W,
              ref: e,
              rightSection: ne || J || /* @__PURE__ */ c(g.Chevron, { size: I, error: U, unstyled: i }),
              rightSectionPointerEvents: pe || (J ? "all" : "none"),
              ...x,
              size: I,
              __staticSelector: "Select",
              disabled: V,
              readOnly: P || !d,
              value: B,
              onChange: (t) => {
                b(t.currentTarget.value), l.openDropdown(), u && l.selectFirstOption();
              },
              onFocus: (t) => {
                d && l.openDropdown(), y == null || y(t);
              },
              onBlur: (t) => {
                var r;
                d && l.closeDropdown(), b(s != null && ((r = w[s]) == null ? void 0 : r.label) || ""), S == null || S(t);
              },
              onClick: (t) => {
                d ? l.openDropdown() : l.toggleDropdown(), o == null || o(t);
              },
              classNames: q,
              styles: G,
              unstyled: i,
              pointer: !d,
              error: U
            }
          ) }),
          /* @__PURE__ */ c(
            Re,
            {
              data: R,
              hidden: P || V,
              filter: te,
              search: B,
              limit: ae,
              hiddenWhenEmpty: !z,
              withScrollArea: le,
              maxDropdownHeight: oe,
              filterOptions: d && (a == null ? void 0 : a.label) !== B,
              value: s,
              checkIconPosition: se,
              withCheckIcon: re,
              nothingFoundMessage: z,
              unstyled: i,
              labelId: x.label ? `${W}-label` : void 0,
              "aria-label": x.label ? void 0 : x["aria-label"],
              renderOption: Ce,
              scrollAreaProps: ye
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c(
      g.HiddenInput,
      {
        value: s,
        name: ce,
        form: ie,
        disabled: V,
        ...ve
      }
    )
  ] });
});
j.classes = { ...Z.classes, ...g.classes };
j.displayName = "@mantine/core/Select";
const Ke = we(function(e, C) {
  const f = Pe(e.attribute, e), { getError: F, getValue: i, setValue: A, mutateOptions: M } = f, _ = C || L(null), O = F(), m = L(null), y = e.variant || "default";
  var S = i() != "" ? i() : null;
  De(_, () => ({
    ...Ve(f),
    focus() {
      m && m.current.focus();
    },
    setOptions(p) {
    },
    getOptions() {
    }
  }), [f]);
  var o = f.getFieldProps();
  e.readOnly && (o.inputProps = { readOnly: !0 }), o.onChange = (n, p) => {
    e.readOnly || (A(p.value), e.onChange && e.onChange(n.currentTarget.value, p));
  };
  const k = Object.keys(o.options).map((n, p) => {
    var u = {
      label: "",
      value: ""
    };
    return u.label = o.options[n], u.value = n, u;
  });
  var D = {
    label: o.options[e.defaultValue],
    value: e.defaultValue
  };
  return /* @__PURE__ */ c(Y, { children: !M.visible && /* @__PURE__ */ c(
    Ie,
    {
      label: xe(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ c(
        j,
        {
          defaultValue: D.value,
          data: k,
          value: S,
          ...o,
          variant: y,
          error: O.message
        }
      )
    }
  ) });
});
export {
  Ke as MantineSelect
};
