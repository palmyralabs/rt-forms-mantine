import { jsx as r, jsxs as j, Fragment as ye } from "react/jsx-runtime";
import { useRef as se, useEffect as pt, forwardRef as ft, useImperativeHandle as ht } from "react";
import { useFieldManager as mt, getFieldHandler as gt, FieldDecorator as vt } from "@palmyralabs/rt-forms";
import { getFieldLabel as yt } from "./util.js";
import { u as bt } from "../../../chunks/use-resolved-styles-api.js";
import { f as G, u as L, d as W, B as le, g as be, h as H, j as Pt, e as St } from "../../../chunks/factory.js";
import { i as Ct, C as F, g as Ot, a as wt, u as It, O as Dt } from "../../../chunks/OptionsDropdown.js";
import { I as Pe } from "../../../chunks/InputBase.js";
import { C as _t } from "../../../chunks/CloseButton.js";
import { c as Se, u as Vt } from "../../../chunks/Input.js";
import { u as Ft } from "../../../chunks/use-merged-ref.js";
import { u as Nt } from "../../../chunks/use-id.js";
import { u as ve } from "../../../chunks/use-uncontrolled.js";
const [Mt, ae] = Se(), [zt, kt] = Se();
var q = { root: "m_7cda1cd6", "root--default": "m_44da308b", "root--contrast": "m_e3a01f8", label: "m_1e0e6180", remove: "m_ae386778", group: "m_1dcfd90b" };
const xt = {}, Et = be((m, { gap: t }, { size: s }) => ({
  group: {
    "--pg-gap": t !== void 0 ? H(t) : H(s, "pg-gap")
  }
})), oe = G((m, t) => {
  const s = L("PillGroup", xt, m), { classNames: c, className: n, style: i, styles: p, unstyled: a, vars: S, size: f, disabled: y, ...g } = s, d = ae(), e = (d == null ? void 0 : d.size) || f || void 0, h = W({
    name: "PillGroup",
    classes: q,
    props: s,
    className: n,
    style: i,
    classNames: c,
    styles: p,
    unstyled: a,
    vars: S,
    varsResolver: Et,
    stylesCtx: { size: e },
    rootSelector: "group"
  });
  return /* @__PURE__ */ r(zt, { value: { size: e, disabled: y }, children: /* @__PURE__ */ r(le, { ref: t, size: e, ...h("group"), ...g }) });
});
oe.classes = q;
oe.displayName = "@mantine/core/PillGroup";
const Rt = {
  variant: "default"
}, Gt = be((m, { radius: t }, { size: s }) => ({
  root: {
    "--pill-fz": H(s, "pill-fz"),
    "--pill-height": H(s, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : Pt(t)
  }
})), R = G((m, t) => {
  const s = L("Pill", Rt, m), {
    classNames: c,
    className: n,
    style: i,
    styles: p,
    unstyled: a,
    vars: S,
    variant: f,
    children: y,
    withRemoveButton: g,
    onRemove: d,
    removeButtonProps: e,
    radius: h,
    size: o,
    disabled: v,
    mod: I,
    ...N
  } = s, b = kt(), D = ae(), M = o || (b == null ? void 0 : b.size) || void 0, $ = (D == null ? void 0 : D.variant) === "filled" ? "contrast" : f || "default", k = W({
    name: "Pill",
    classes: q,
    props: s,
    className: n,
    style: i,
    classNames: c,
    styles: p,
    unstyled: a,
    vars: S,
    varsResolver: Gt,
    stylesCtx: { size: M }
  });
  return /* @__PURE__ */ j(
    le,
    {
      component: "span",
      ref: t,
      variant: $,
      size: M,
      ...k("root", { variant: $ }),
      mod: [
        { "with-remove": g && !v, disabled: v || (b == null ? void 0 : b.disabled) },
        I
      ],
      ...N,
      children: [
        /* @__PURE__ */ r("span", { ...k("label"), children: y }),
        g && /* @__PURE__ */ r(
          _t,
          {
            variant: "transparent",
            radius: h,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: a,
            ...e,
            ...k("remove", {
              className: e == null ? void 0 : e.className,
              style: e == null ? void 0 : e.style
            }),
            onMouseDown: (w) => {
              var _;
              w.preventDefault(), w.stopPropagation(), (_ = e == null ? void 0 : e.onMouseDown) == null || _.call(e, w);
            },
            onClick: (w) => {
              var _;
              w.stopPropagation(), d == null || d(), (_ = e == null ? void 0 : e.onClick) == null || _.call(e, w);
            }
          }
        )
      ]
    }
  );
});
R.classes = q;
R.displayName = "@mantine/core/Pill";
R.Group = oe;
var Ce = { field: "m_45c4369d" };
const Lt = {
  type: "visible"
}, ne = G((m, t) => {
  const s = L("PillsInputField", Lt, m), {
    classNames: c,
    className: n,
    style: i,
    styles: p,
    unstyled: a,
    vars: S,
    type: f,
    disabled: y,
    id: g,
    pointer: d,
    mod: e,
    ...h
  } = s, o = ae(), v = Vt(), I = W({
    name: "PillsInputField",
    classes: Ce,
    props: s,
    className: n,
    style: i,
    classNames: c,
    styles: p,
    unstyled: a,
    rootSelector: "field"
  }), N = y || (o == null ? void 0 : o.disabled);
  return /* @__PURE__ */ r(
    le,
    {
      component: "input",
      ref: Ft(t, o == null ? void 0 : o.fieldRef),
      "data-type": f,
      disabled: N,
      mod: [{ disabled: N, pointer: d }, e],
      ...I("field"),
      ...h,
      id: (v == null ? void 0 : v.inputId) || g,
      "aria-invalid": o == null ? void 0 : o.hasError,
      "aria-describedby": v == null ? void 0 : v.describedBy,
      type: "text",
      onMouseDown: (b) => !d && b.stopPropagation()
    }
  );
});
ne.classes = Ce;
ne.displayName = "@mantine/core/PillsInputField";
const $t = {}, T = G((m, t) => {
  const s = L("PillsInput", $t, m), {
    children: c,
    onMouseDown: n,
    onClick: i,
    size: p,
    disabled: a,
    __staticSelector: S,
    error: f,
    variant: y,
    ...g
  } = s, d = se();
  return /* @__PURE__ */ r(Mt, { value: { fieldRef: d, size: p, disabled: a, hasError: !!f, variant: y }, children: /* @__PURE__ */ r(
    Pe,
    {
      size: p,
      error: f,
      variant: y,
      component: "div",
      ref: t,
      onMouseDown: (e) => {
        var h;
        e.preventDefault(), n == null || n(e), (h = d.current) == null || h.focus();
      },
      onClick: (e) => {
        var h;
        e.preventDefault(), i == null || i(e), (h = d.current) == null || h.focus();
      },
      ...g,
      multiline: !0,
      disabled: a,
      __staticSelector: S || "PillsInput",
      withAria: !1,
      children: c
    }
  ) });
});
T.displayName = "@mantine/core/PillsInput";
T.Field = ne;
function At({ data: m, value: t }) {
  const s = t.map((n) => n.trim().toLowerCase());
  return m.reduce((n, i) => (Ct(i) ? n.push({
    group: i.group,
    items: i.items.filter(
      (p) => s.indexOf(p.value.toLowerCase().trim()) === -1
    )
  }) : s.indexOf(i.value.toLowerCase().trim()) === -1 && n.push(i), n), []);
}
const jt = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, ie = G((m, t) => {
  const s = L("MultiSelect", jt, m), {
    classNames: c,
    className: n,
    style: i,
    styles: p,
    unstyled: a,
    vars: S,
    size: f,
    value: y,
    defaultValue: g,
    onChange: d,
    onKeyDown: e,
    variant: h,
    data: o,
    dropdownOpened: v,
    defaultDropdownOpened: I,
    onDropdownOpen: N,
    onDropdownClose: b,
    selectFirstOptionOnChange: D,
    onOptionSubmit: M,
    comboboxProps: $,
    filter: k,
    limit: w,
    withScrollArea: _,
    maxDropdownHeight: Oe,
    searchValue: we,
    defaultSearchValue: Ie,
    onSearchChange: De,
    readOnly: x,
    disabled: V,
    onFocus: B,
    onBlur: K,
    onPaste: Ht,
    radius: _e,
    rightSection: Ve,
    rightSectionWidth: Fe,
    rightSectionPointerEvents: re,
    rightSectionProps: Ne,
    leftSection: Me,
    leftSectionWidth: ze,
    leftSectionPointerEvents: ke,
    leftSectionProps: xe,
    inputContainer: Ee,
    inputWrapperOrder: Re,
    withAsterisk: Ge,
    labelProps: Le,
    descriptionProps: $e,
    errorProps: Ae,
    wrapperProps: je,
    description: He,
    label: U,
    error: de,
    maxValues: Te,
    searchable: C,
    nothingFoundMessage: ce,
    withCheckIcon: We,
    checkIconPosition: qe,
    hidePickedOptions: Be,
    withErrorStyles: Ke,
    name: Ue,
    form: Je,
    id: Qe,
    clearable: Xe,
    clearButtonProps: Ye,
    hiddenInputProps: Ze,
    placeholder: ue,
    hiddenInputValuesDivider: et,
    required: tt,
    mod: st,
    renderOption: lt,
    onRemove: O,
    onClear: J,
    scrollAreaProps: at,
    ...pe
  } = s, Q = Nt(Qe), X = Ot(o), z = wt(X), P = It({
    opened: v,
    defaultOpened: I,
    onDropdownOpen: N,
    onDropdownClose: () => {
      b == null || b(), P.resetSelectedOption();
    }
  }), {
    styleProps: ot,
    rest: { type: Tt, autoComplete: nt, ...it }
  } = St(pe), [u, E] = ve({
    value: y,
    defaultValue: g,
    finalValue: [],
    onChange: d
  }), [Y, A] = ve({
    value: we,
    defaultValue: Ie,
    finalValue: "",
    onChange: De
  }), Z = W({
    name: "MultiSelect",
    classes: {},
    props: s,
    classNames: c,
    styles: p,
    unstyled: a
  }), { resolvedClassNames: fe, resolvedStyles: he } = bt({
    props: s,
    styles: p,
    classNames: c
  }), rt = (l) => {
    e == null || e(l), l.key === " " && !C && (l.preventDefault(), P.toggleDropdown()), l.key === "Backspace" && Y.length === 0 && u.length > 0 && (O == null || O(u[u.length - 1]), E(u.slice(0, u.length - 1)));
  }, dt = u.map((l, te) => {
    var me, ge;
    return /* @__PURE__ */ r(
      R,
      {
        withRemoveButton: !x && !((me = z[l]) != null && me.disabled),
        onRemove: () => {
          E(u.filter((ut) => l !== ut)), O == null || O(l);
        },
        unstyled: a,
        disabled: V,
        ...Z("pill"),
        children: ((ge = z[l]) == null ? void 0 : ge.label) || l
      },
      `${l}-${te}`
    );
  });
  pt(() => {
    D && P.selectFirstOption();
  }, [D, u]);
  const ee = Xe && u.length > 0 && !V && !x && /* @__PURE__ */ r(
    F.ClearButton,
    {
      size: f,
      ...Ye,
      onClear: () => {
        J == null || J(), E([]), A("");
      }
    }
  ), ct = At({ data: X, value: u });
  return /* @__PURE__ */ j(ye, { children: [
    /* @__PURE__ */ j(
      F,
      {
        store: P,
        classNames: fe,
        styles: he,
        unstyled: a,
        size: f,
        readOnly: x,
        __staticSelector: "MultiSelect",
        onOptionSubmit: (l) => {
          M == null || M(l), A(""), P.updateSelectedOptionIndex("selected"), u.includes(z[l].value) ? (E(u.filter((te) => te !== z[l].value)), O == null || O(z[l].value)) : u.length < Te && E([...u, z[l].value]);
        },
        ...$,
        children: [
          /* @__PURE__ */ r(F.DropdownTarget, { children: /* @__PURE__ */ r(
            T,
            {
              ...ot,
              __staticSelector: "MultiSelect",
              classNames: fe,
              styles: he,
              unstyled: a,
              size: f,
              className: n,
              style: i,
              variant: h,
              disabled: V,
              radius: _e,
              rightSection: Ve || ee || /* @__PURE__ */ r(F.Chevron, { size: f, error: de, unstyled: a }),
              rightSectionPointerEvents: re || (ee ? "all" : "none"),
              rightSectionWidth: Fe,
              rightSectionProps: Ne,
              leftSection: Me,
              leftSectionWidth: ze,
              leftSectionPointerEvents: ke,
              leftSectionProps: xe,
              inputContainer: Ee,
              inputWrapperOrder: Re,
              withAsterisk: Ge,
              labelProps: Le,
              descriptionProps: $e,
              errorProps: Ae,
              wrapperProps: je,
              description: He,
              label: U,
              error: de,
              multiline: !0,
              withErrorStyles: Ke,
              __stylesApiProps: {
                ...s,
                rightSectionPointerEvents: re || (ee ? "all" : "none"),
                multiline: !0
              },
              pointer: !C,
              onClick: () => C ? P.openDropdown() : P.toggleDropdown(),
              "data-expanded": P.dropdownOpened || void 0,
              id: Q,
              required: tt,
              mod: st,
              children: /* @__PURE__ */ j(R.Group, { disabled: V, unstyled: a, ...Z("pillsList"), children: [
                dt,
                /* @__PURE__ */ r(F.EventsTarget, { autoComplete: nt, children: /* @__PURE__ */ r(
                  T.Field,
                  {
                    ...it,
                    ref: t,
                    id: Q,
                    placeholder: ue,
                    type: !C && !ue ? "hidden" : "visible",
                    ...Z("inputField"),
                    unstyled: a,
                    onFocus: (l) => {
                      B == null || B(l), C && P.openDropdown();
                    },
                    onBlur: (l) => {
                      K == null || K(l), P.closeDropdown(), A("");
                    },
                    onKeyDown: rt,
                    value: Y,
                    onChange: (l) => {
                      A(l.currentTarget.value), C && P.openDropdown(), D && P.selectFirstOption();
                    },
                    disabled: V,
                    readOnly: x || !C,
                    pointer: !C
                  }
                ) })
              ] })
            }
          ) }),
          /* @__PURE__ */ r(
            Dt,
            {
              data: Be ? ct : X,
              hidden: x || V,
              filter: k,
              search: Y,
              limit: w,
              hiddenWhenEmpty: !ce,
              withScrollArea: _,
              maxDropdownHeight: Oe,
              filterOptions: C,
              value: u,
              checkIconPosition: qe,
              withCheckIcon: We,
              nothingFoundMessage: ce,
              unstyled: a,
              labelId: U ? `${Q}-label` : void 0,
              "aria-label": U ? void 0 : pe["aria-label"],
              renderOption: lt,
              scrollAreaProps: at
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r(
      F.HiddenInput,
      {
        name: Ue,
        valuesDivider: et,
        value: u,
        form: Je,
        disabled: V,
        ...Ze
      }
    )
  ] });
});
ie.classes = { ...Pe.classes, ...F.classes };
ie.displayName = "@mantine/core/MultiSelect";
const ls = ft(function(t, s) {
  const c = mt(t.attribute, t), { getError: n, getValue: i, setValue: p, mutateOptions: a, refreshError: S } = c, f = s || se(null), y = n(), g = se(null), d = t.variant || "default";
  ht(f, () => ({
    ...gt(c),
    focus() {
      g && g.current.focus();
    },
    setOptions(v) {
    },
    getOptions() {
    }
  }), [c]);
  var e = c.getFieldProps();
  t.readOnly && (e.inputProps = { readOnly: !0 }), e.onChange = (o) => {
    t.readOnly || (p(o), t.onChange && t.onChange(o));
  }, e.onBlur = S;
  const h = Object.keys(e.options).map((o, v) => {
    var I = {
      label: e.options[o],
      value: o
    };
    return I;
  });
  return /* @__PURE__ */ r(ye, { children: !a.visible && /* @__PURE__ */ r(
    vt,
    {
      label: yt(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ r(
        ie,
        {
          defaultValue: t.defaultValue,
          data: h,
          value: i(),
          ...e,
          variant: d,
          error: y.message
        }
      )
    }
  ) });
});
export {
  ls as MantineMultiSelect
};
