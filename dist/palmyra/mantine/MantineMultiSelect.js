import { jsx as d, jsxs as H, Fragment as ye } from "react/jsx-runtime";
import { useRef as se, useEffect as pt, forwardRef as ft, useImperativeHandle as ht } from "react";
import { useFieldManager as mt, getFieldHandler as gt, FieldDecorator as vt } from "@palmyralabs/rt-forms";
import { getFieldLabel as yt } from "./util.js";
import { u as bt } from "../../chunks/use-resolved-styles-api.js";
import { f as G, b as L, d as W, B as le, g as be, h as j, i as Pt, e as St } from "../../chunks/factory.js";
import { i as Ct, C as F, g as Ot, a as wt, u as It, O as Dt } from "../../chunks/OptionsDropdown.js";
import { I as Pe } from "../../chunks/InputBase.js";
import { C as _t } from "../../chunks/CloseButton.js";
import { c as Se, u as Vt } from "../../chunks/Input.js";
import { u as Ft } from "../../chunks/use-merged-ref.js";
import { u as Nt } from "../../chunks/use-id.js";
import { u as ve } from "../../chunks/use-uncontrolled.js";
const [Mt, ae] = Se(), [zt, kt] = Se();
var q = { root: "m_7cda1cd6", "root--default": "m_44da308b", "root--contrast": "m_e3a01f8", label: "m_1e0e6180", remove: "m_ae386778", group: "m_1dcfd90b" };
const xt = {}, Et = be((m, { gap: t }, { size: s }) => ({
  group: {
    "--pg-gap": t !== void 0 ? j(t) : j(s, "pg-gap")
  }
})), oe = G((m, t) => {
  const s = L("PillGroup", xt, m), { classNames: c, className: r, style: o, styles: f, unstyled: n, vars: S, size: h, disabled: g, ...y } = s, a = ae(), e = (a == null ? void 0 : a.size) || h || void 0, u = W({
    name: "PillGroup",
    classes: q,
    props: s,
    className: r,
    style: o,
    classNames: c,
    styles: f,
    unstyled: n,
    vars: S,
    varsResolver: Et,
    stylesCtx: { size: e },
    rootSelector: "group"
  });
  return /* @__PURE__ */ d(zt, { value: { size: e, disabled: g }, children: /* @__PURE__ */ d(le, { ref: t, size: e, ...u("group"), ...y }) });
});
oe.classes = q;
oe.displayName = "@mantine/core/PillGroup";
const Rt = {
  variant: "default"
}, Gt = be((m, { radius: t }, { size: s }) => ({
  root: {
    "--pill-fz": j(s, "pill-fz"),
    "--pill-height": j(s, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : Pt(t)
  }
})), R = G((m, t) => {
  const s = L("Pill", Rt, m), {
    classNames: c,
    className: r,
    style: o,
    styles: f,
    unstyled: n,
    vars: S,
    variant: h,
    children: g,
    withRemoveButton: y,
    onRemove: a,
    removeButtonProps: e,
    radius: u,
    size: i,
    disabled: v,
    mod: C,
    ...N
  } = s, b = kt(), D = ae(), M = i || (b == null ? void 0 : b.size) || void 0, $ = (D == null ? void 0 : D.variant) === "filled" ? "contrast" : h || "default", k = W({
    name: "Pill",
    classes: q,
    props: s,
    className: r,
    style: o,
    classNames: c,
    styles: f,
    unstyled: n,
    vars: S,
    varsResolver: Gt,
    stylesCtx: { size: M }
  });
  return /* @__PURE__ */ H(
    le,
    {
      component: "span",
      ref: t,
      variant: $,
      size: M,
      ...k("root", { variant: $ }),
      mod: [
        { "with-remove": y && !v, disabled: v || (b == null ? void 0 : b.disabled) },
        C
      ],
      ...N,
      children: [
        /* @__PURE__ */ d("span", { ...k("label"), children: g }),
        y && /* @__PURE__ */ d(
          _t,
          {
            variant: "transparent",
            radius: u,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: n,
            ...e,
            ...k("remove", {
              className: e == null ? void 0 : e.className,
              style: e == null ? void 0 : e.style
            }),
            onMouseDown: (I) => {
              var _;
              I.preventDefault(), I.stopPropagation(), (_ = e == null ? void 0 : e.onMouseDown) == null || _.call(e, I);
            },
            onClick: (I) => {
              var _;
              I.stopPropagation(), a == null || a(), (_ = e == null ? void 0 : e.onClick) == null || _.call(e, I);
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
    className: r,
    style: o,
    styles: f,
    unstyled: n,
    vars: S,
    type: h,
    disabled: g,
    id: y,
    pointer: a,
    mod: e,
    ...u
  } = s, i = ae(), v = Vt(), C = W({
    name: "PillsInputField",
    classes: Ce,
    props: s,
    className: r,
    style: o,
    classNames: c,
    styles: f,
    unstyled: n,
    rootSelector: "field"
  }), N = g || (i == null ? void 0 : i.disabled);
  return /* @__PURE__ */ d(
    le,
    {
      component: "input",
      ref: Ft(t, i == null ? void 0 : i.fieldRef),
      "data-type": h,
      disabled: N,
      mod: [{ disabled: N, pointer: a }, e],
      ...C("field"),
      ...u,
      id: (v == null ? void 0 : v.inputId) || y,
      "aria-invalid": i == null ? void 0 : i.hasError,
      "aria-describedby": v == null ? void 0 : v.describedBy,
      type: "text",
      onMouseDown: (b) => !a && b.stopPropagation()
    }
  );
});
ne.classes = Ce;
ne.displayName = "@mantine/core/PillsInputField";
const $t = {}, T = G((m, t) => {
  const s = L("PillsInput", $t, m), {
    children: c,
    onMouseDown: r,
    onClick: o,
    size: f,
    disabled: n,
    __staticSelector: S,
    error: h,
    variant: g,
    ...y
  } = s, a = se();
  return /* @__PURE__ */ d(Mt, { value: { fieldRef: a, size: f, disabled: n, hasError: !!h, variant: g }, children: /* @__PURE__ */ d(
    Pe,
    {
      size: f,
      error: h,
      variant: g,
      component: "div",
      ref: t,
      onMouseDown: (e) => {
        var u;
        e.preventDefault(), r == null || r(e), (u = a.current) == null || u.focus();
      },
      onClick: (e) => {
        var u;
        e.preventDefault(), o == null || o(e), (u = a.current) == null || u.focus();
      },
      ...y,
      multiline: !0,
      disabled: n,
      __staticSelector: S || "PillsInput",
      withAria: !1,
      children: c
    }
  ) });
});
T.displayName = "@mantine/core/PillsInput";
T.Field = ne;
function At({ data: m, value: t }) {
  const s = t.map((r) => r.trim().toLowerCase());
  return m.reduce((r, o) => (Ct(o) ? r.push({
    group: o.group,
    items: o.items.filter(
      (f) => s.indexOf(f.value.toLowerCase().trim()) === -1
    )
  }) : s.indexOf(o.value.toLowerCase().trim()) === -1 && r.push(o), r), []);
}
const Ht = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, ie = G((m, t) => {
  const s = L("MultiSelect", Ht, m), {
    classNames: c,
    className: r,
    style: o,
    styles: f,
    unstyled: n,
    vars: S,
    size: h,
    value: g,
    defaultValue: y,
    onChange: a,
    onKeyDown: e,
    variant: u,
    data: i,
    dropdownOpened: v,
    defaultDropdownOpened: C,
    onDropdownOpen: N,
    onDropdownClose: b,
    selectFirstOptionOnChange: D,
    onOptionSubmit: M,
    comboboxProps: $,
    filter: k,
    limit: I,
    withScrollArea: _,
    maxDropdownHeight: Oe,
    searchValue: we,
    defaultSearchValue: Ie,
    onSearchChange: De,
    readOnly: x,
    disabled: V,
    onFocus: K,
    onBlur: U,
    onPaste: jt,
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
    wrapperProps: He,
    description: je,
    label: B,
    error: de,
    maxValues: Te,
    searchable: O,
    nothingFoundMessage: ce,
    withCheckIcon: We,
    checkIconPosition: qe,
    hidePickedOptions: Ke,
    withErrorStyles: Ue,
    name: Be,
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
    onRemove: w,
    onClear: J,
    scrollAreaProps: at,
    ...pe
  } = s, Q = Nt(Qe), X = Ot(i), z = wt(X), P = It({
    opened: v,
    defaultOpened: C,
    onDropdownOpen: N,
    onDropdownClose: () => {
      b == null || b(), P.resetSelectedOption();
    }
  }), {
    styleProps: ot,
    rest: { type: Tt, autoComplete: nt, ...it }
  } = St(pe), [p, E] = ve({
    value: g,
    defaultValue: y,
    finalValue: [],
    onChange: a
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
    styles: f,
    unstyled: n
  }), { resolvedClassNames: fe, resolvedStyles: he } = bt({
    props: s,
    styles: f,
    classNames: c
  }), rt = (l) => {
    e == null || e(l), l.key === " " && !O && (l.preventDefault(), P.toggleDropdown()), l.key === "Backspace" && Y.length === 0 && p.length > 0 && (w == null || w(p[p.length - 1]), E(p.slice(0, p.length - 1)));
  }, dt = p.map((l, te) => {
    var me, ge;
    return /* @__PURE__ */ d(
      R,
      {
        withRemoveButton: !x && !((me = z[l]) != null && me.disabled),
        onRemove: () => {
          E(p.filter((ut) => l !== ut)), w == null || w(l);
        },
        unstyled: n,
        disabled: V,
        ...Z("pill"),
        children: ((ge = z[l]) == null ? void 0 : ge.label) || l
      },
      `${l}-${te}`
    );
  });
  pt(() => {
    D && P.selectFirstOption();
  }, [D, p]);
  const ee = Xe && p.length > 0 && !V && !x && /* @__PURE__ */ d(
    F.ClearButton,
    {
      size: h,
      ...Ye,
      onClear: () => {
        J == null || J(), E([]), A("");
      }
    }
  ), ct = At({ data: X, value: p });
  return /* @__PURE__ */ H(ye, { children: [
    /* @__PURE__ */ H(
      F,
      {
        store: P,
        classNames: fe,
        styles: he,
        unstyled: n,
        size: h,
        readOnly: x,
        __staticSelector: "MultiSelect",
        onOptionSubmit: (l) => {
          M == null || M(l), A(""), P.updateSelectedOptionIndex("selected"), p.includes(z[l].value) ? (E(p.filter((te) => te !== z[l].value)), w == null || w(z[l].value)) : p.length < Te && E([...p, z[l].value]);
        },
        ...$,
        children: [
          /* @__PURE__ */ d(F.DropdownTarget, { children: /* @__PURE__ */ d(
            T,
            {
              ...ot,
              __staticSelector: "MultiSelect",
              classNames: fe,
              styles: he,
              unstyled: n,
              size: h,
              className: r,
              style: o,
              variant: u,
              disabled: V,
              radius: _e,
              rightSection: Ve || ee || /* @__PURE__ */ d(F.Chevron, { size: h, error: de, unstyled: n }),
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
              wrapperProps: He,
              description: je,
              label: B,
              error: de,
              multiline: !0,
              withErrorStyles: Ue,
              __stylesApiProps: {
                ...s,
                rightSectionPointerEvents: re || (ee ? "all" : "none"),
                multiline: !0
              },
              pointer: !O,
              onClick: () => O ? P.openDropdown() : P.toggleDropdown(),
              "data-expanded": P.dropdownOpened || void 0,
              id: Q,
              required: tt,
              mod: st,
              children: /* @__PURE__ */ H(R.Group, { disabled: V, unstyled: n, ...Z("pillsList"), children: [
                dt,
                /* @__PURE__ */ d(F.EventsTarget, { autoComplete: nt, children: /* @__PURE__ */ d(
                  T.Field,
                  {
                    ...it,
                    ref: t,
                    id: Q,
                    placeholder: ue,
                    type: !O && !ue ? "hidden" : "visible",
                    ...Z("inputField"),
                    unstyled: n,
                    onFocus: (l) => {
                      K == null || K(l), O && P.openDropdown();
                    },
                    onBlur: (l) => {
                      U == null || U(l), P.closeDropdown(), A("");
                    },
                    onKeyDown: rt,
                    value: Y,
                    onChange: (l) => {
                      A(l.currentTarget.value), O && P.openDropdown(), D && P.selectFirstOption();
                    },
                    disabled: V,
                    readOnly: x || !O,
                    pointer: !O
                  }
                ) })
              ] })
            }
          ) }),
          /* @__PURE__ */ d(
            Dt,
            {
              data: Ke ? ct : X,
              hidden: x || V,
              filter: k,
              search: Y,
              limit: I,
              hiddenWhenEmpty: !ce,
              withScrollArea: _,
              maxDropdownHeight: Oe,
              filterOptions: O,
              value: p,
              checkIconPosition: qe,
              withCheckIcon: We,
              nothingFoundMessage: ce,
              unstyled: n,
              labelId: B ? `${Q}-label` : void 0,
              "aria-label": B ? void 0 : pe["aria-label"],
              renderOption: lt,
              scrollAreaProps: at
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ d(
      F.HiddenInput,
      {
        name: Be,
        valuesDivider: et,
        value: p,
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
  const c = mt(t.attribute, t), { getError: r, getValue: o, setValue: f, mutateOptions: n } = c, S = s || se(null), h = r(), g = se(null), y = t.variant || "default";
  ht(S, () => ({
    ...gt(c),
    focus() {
      g && g.current.focus();
    },
    setOptions(v) {
    },
    getOptions() {
    }
  }), [c]);
  var a = c.getFieldProps();
  t.readOnly && (a.inputProps = { readOnly: !0 }), a.onChange = (i) => {
    t.readOnly || (f(i), t.onChange && t.onChange(i));
  };
  const e = Object.keys(a.options).map((i, v) => {
    var C = {
      label: "",
      value: ""
    };
    return C.label = a.options[i], C.value = i, C;
  });
  var u;
  return o() != "" && (u = o()), /* @__PURE__ */ d(ye, { children: !n.visible && /* @__PURE__ */ d(
    vt,
    {
      label: yt(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ d(
        ie,
        {
          defaultValue: t.defaultValue,
          data: e,
          value: u,
          ...a,
          variant: y,
          error: h.message
        }
      )
    }
  ) });
});
export {
  ls as MantineMultiSelect
};
