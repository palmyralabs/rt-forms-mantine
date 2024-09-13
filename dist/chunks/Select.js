import { jsx as c, jsxs as R, Fragment as we } from "react/jsx-runtime";
import { useRef as ye, useEffect as k, useMemo as z } from "react";
import { u as Ce } from "./use-resolved-styles-api.js";
import { f as De, u as Ie } from "./factory.js";
import { C as i, g as Oe, a as Pe, u as xe, O as Ve } from "./OptionsDropdown.js";
import { I as U } from "./InputBase.js";
import { u as _e } from "./use-id.js";
import { u as L } from "./use-uncontrolled.js";
function ke(d) {
  const p = ye();
  return k(() => {
    p.current = d;
  }, [d]), p.current;
}
const Fe = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, W = De((d, p) => {
  const F = Ie("Select", Fe, d), {
    classNames: $,
    styles: q,
    unstyled: m,
    vars: Ne,
    dropdownOpened: G,
    defaultDropdownOpened: J,
    onDropdownClose: v,
    onDropdownOpen: w,
    onFocus: y,
    onBlur: C,
    onClick: D,
    onChange: K,
    data: N,
    value: f,
    defaultValue: Q,
    selectFirstOptionOnChange: I,
    onOptionSubmit: O,
    comboboxProps: X,
    readOnly: h,
    disabled: b,
    filter: Y,
    limit: Z,
    withScrollArea: ee,
    maxDropdownHeight: oe,
    size: g,
    searchable: a,
    rightSection: te,
    checkIconPosition: le,
    withCheckIcon: se,
    nothingFoundMessage: B,
    name: ae,
    form: ne,
    searchValue: re,
    defaultSearchValue: ce,
    onSearchChange: ie,
    allowDeselect: ue,
    error: E,
    rightSectionPointerEvents: de,
    id: pe,
    clearable: me,
    clearButtonProps: fe,
    hiddenInputProps: he,
    renderOption: be,
    onClear: P,
    autoComplete: ge,
    scrollAreaProps: Se,
    ...S
  } = F, x = z(() => Oe(N), [N]), u = z(() => Pe(x), [x]), A = _e(pe), [l, T, ve] = L({
    value: f,
    defaultValue: Q,
    finalValue: null,
    onChange: K
  }), o = typeof l == "string" ? u[l] : void 0, n = ke(o), [V, r] = L({
    value: re,
    defaultValue: ce,
    finalValue: o ? o.label : "",
    onChange: ie
  }), t = xe({
    opened: G,
    defaultOpened: J,
    onDropdownOpen: () => {
      w == null || w(), t.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      v == null || v(), t.resetSelectedOption();
    }
  }), { resolvedClassNames: j, resolvedStyles: H } = Ce({
    props: F,
    styles: q,
    classNames: $
  });
  k(() => {
    I && t.selectFirstOption();
  }, [I, l]), k(() => {
    f === null && r(""), typeof f == "string" && o && ((n == null ? void 0 : n.value) !== o.value || (n == null ? void 0 : n.label) !== o.label) && r(o.label);
  }, [f, o]);
  const M = me && !!l && !b && !h && /* @__PURE__ */ c(
    i.ClearButton,
    {
      size: g,
      ...fe,
      onClear: () => {
        T(null, null), r(""), P == null || P();
      }
    }
  );
  return /* @__PURE__ */ R(we, { children: [
    /* @__PURE__ */ R(
      i,
      {
        store: t,
        __staticSelector: "Select",
        classNames: j,
        styles: H,
        unstyled: m,
        readOnly: h,
        onOptionSubmit: (e) => {
          O == null || O(e);
          const s = ue && u[e].value === l ? null : u[e], _ = s ? s.value : null;
          _ !== l && T(_, s), !ve && r(typeof _ == "string" && (s == null ? void 0 : s.label) || ""), t.closeDropdown();
        },
        size: g,
        ...X,
        children: [
          /* @__PURE__ */ c(i.Target, { targetType: a ? "input" : "button", autoComplete: ge, children: /* @__PURE__ */ c(
            U,
            {
              id: A,
              ref: p,
              rightSection: te || M || /* @__PURE__ */ c(i.Chevron, { size: g, error: E, unstyled: m }),
              rightSectionPointerEvents: de || (M ? "all" : "none"),
              ...S,
              size: g,
              __staticSelector: "Select",
              disabled: b,
              readOnly: h || !a,
              value: V,
              onChange: (e) => {
                r(e.currentTarget.value), t.openDropdown(), I && t.selectFirstOption();
              },
              onFocus: (e) => {
                a && t.openDropdown(), y == null || y(e);
              },
              onBlur: (e) => {
                var s;
                a && t.closeDropdown(), r(l != null && ((s = u[l]) == null ? void 0 : s.label) || ""), C == null || C(e);
              },
              onClick: (e) => {
                a ? t.openDropdown() : t.toggleDropdown(), D == null || D(e);
              },
              classNames: j,
              styles: H,
              unstyled: m,
              pointer: !a,
              error: E
            }
          ) }),
          /* @__PURE__ */ c(
            Ve,
            {
              data: x,
              hidden: h || b,
              filter: Y,
              search: V,
              limit: Z,
              hiddenWhenEmpty: !B,
              withScrollArea: ee,
              maxDropdownHeight: oe,
              filterOptions: a && (o == null ? void 0 : o.label) !== V,
              value: l,
              checkIconPosition: le,
              withCheckIcon: se,
              nothingFoundMessage: B,
              unstyled: m,
              labelId: S.label ? `${A}-label` : void 0,
              "aria-label": S.label ? void 0 : S["aria-label"],
              renderOption: be,
              scrollAreaProps: Se
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c(
      i.HiddenInput,
      {
        value: l,
        name: ae,
        form: ne,
        disabled: b,
        ...he
      }
    )
  ] });
});
W.classes = { ...U.classes, ...i.classes };
W.displayName = "@mantine/core/Select";
export {
  W as S
};
