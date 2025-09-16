import { jsx as e, jsxs as C, Fragment as A } from "react/jsx-runtime";
import { factory as O, useInputProps as R, CloseButton as T, Modal as D, Input as s, Popover as d } from "@mantine/core";
const H = {}, E = O((P, f) => {
  const {
    inputProps: a,
    wrapperProps: b,
    placeholder: v,
    classNames: i,
    styles: w,
    unstyled: o,
    popoverProps: n,
    modalProps: I,
    dropdownType: p,
    children: c,
    formattedValue: k,
    dropdownHandlers: u,
    dropdownOpened: h,
    onClick: B,
    clearable: x,
    onClear: m,
    clearButtonProps: z,
    rightSection: F,
    shouldClear: N,
    readOnly: r,
    disabled: g,
    value: l,
    name: M,
    form: W,
    type: S,
    ...V
  } = R("PickerInputBase", H, P), j = F || (x && N && !r && !g ? /* @__PURE__ */ e(
    T,
    {
      variant: "transparent",
      onClick: m,
      unstyled: o,
      size: a.size || "sm",
      ...z
    }
  ) : null), y = () => {
    S === "range" && Array.isArray(l) && l[0] && !l[1] && m(), u.close();
  };
  return /* @__PURE__ */ C(A, { children: [
    p === "modal" && !r && /* @__PURE__ */ e(
      D,
      {
        opened: h,
        onClose: y,
        withCloseButton: !1,
        size: "auto",
        "data-dates-modal": !0,
        unstyled: o,
        ...I,
        children: c
      }
    ),
    /* @__PURE__ */ e(s.Wrapper, { ...b, children: /* @__PURE__ */ C(
      d,
      {
        position: "bottom-start",
        opened: h,
        trapFocus: !0,
        returnFocus: !0,
        unstyled: o,
        ...n,
        disabled: n?.disabled || p === "modal" || r,
        onChange: (t) => {
          t || (n?.onClose?.(), y());
        },
        children: [
          /* @__PURE__ */ e(d.Target, { children: /* @__PURE__ */ e(
            s,
            {
              "data-dates-input": !0,
              "data-read-only": r || void 0,
              disabled: g,
              component: "button",
              type: "button",
              multiline: !0,
              onClick: (t) => {
                B?.(t), u.toggle();
              },
              rightSection: j,
              ...a,
              ref: f,
              classNames: { ...i },
              ...V,
              children: k || /* @__PURE__ */ e(
                s.Placeholder,
                {
                  error: a.error,
                  unstyled: o,
                  className: i?.placeholder,
                  style: w?.placeholder,
                  children: v
                }
              )
            }
          ) }),
          /* @__PURE__ */ e(d.Dropdown, { "data-dates-dropdown": !0, children: c })
        ]
      }
    ) })
  ] });
});
export {
  E as PickerInputBase
};
