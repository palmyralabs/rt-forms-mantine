import { jsx as t, jsxs as w, Fragment as T } from "react/jsx-runtime";
import { factory as v, useInputProps as D, CloseButton as H, Modal as M, Input as u, Popover as c } from "@mantine/core";
const N = {}, G = v((I, B) => {
  const {
    inputProps: l,
    wrapperProps: P,
    placeholder: k,
    classNames: r,
    styles: d,
    unstyled: a,
    popoverProps: e,
    modalProps: x,
    dropdownType: p,
    children: h,
    formattedValue: z,
    dropdownHandlers: m,
    dropdownOpened: g,
    onClick: s,
    clearable: F,
    onClear: f,
    clearButtonProps: S,
    rightSection: V,
    shouldClear: j,
    readOnly: n,
    disabled: y,
    value: i,
    name: W,
    form: _,
    type: A,
    ...O
  } = D("PickerInputBase", N, I), R = V || (F && j && !n && !y ? /* @__PURE__ */ t(
    H,
    {
      variant: "transparent",
      onClick: f,
      unstyled: a,
      size: l.size || "sm",
      ...S
    }
  ) : null), C = () => {
    A === "range" && Array.isArray(i) && i[0] && !i[1] && f(), m.close();
  };
  return /* @__PURE__ */ w(T, { children: [
    p === "modal" && !n && /* @__PURE__ */ t(
      M,
      {
        opened: g,
        onClose: C,
        withCloseButton: !1,
        size: "auto",
        "data-dates-modal": !0,
        unstyled: a,
        ...x,
        children: h
      }
    ),
    /* @__PURE__ */ t(u.Wrapper, { ...P, children: /* @__PURE__ */ w(
      c,
      {
        position: "bottom-start",
        opened: g,
        trapFocus: !0,
        returnFocus: !0,
        unstyled: a,
        ...e,
        disabled: (e == null ? void 0 : e.disabled) || p === "modal" || n,
        onChange: (o) => {
          var b;
          o || ((b = e == null ? void 0 : e.onClose) == null || b.call(e), C());
        },
        children: [
          /* @__PURE__ */ t(c.Target, { children: /* @__PURE__ */ t(
            u,
            {
              "data-dates-input": !0,
              "data-read-only": n || void 0,
              disabled: y,
              component: "button",
              type: "button",
              multiline: !0,
              onClick: (o) => {
                s == null || s(o), m.toggle();
              },
              rightSection: R,
              ...l,
              ref: B,
              classNames: { ...r },
              ...O,
              children: z || /* @__PURE__ */ t(
                u.Placeholder,
                {
                  error: l.error,
                  unstyled: a,
                  className: r == null ? void 0 : r.placeholder,
                  style: d == null ? void 0 : d.placeholder,
                  children: k
                }
              )
            }
          ) }),
          /* @__PURE__ */ t(c.Dropdown, { "data-dates-dropdown": !0, children: h })
        ]
      }
    ) })
  ] });
});
export {
  G as PickerInputBase
};
