import { jsx as e, jsxs as C, Fragment as j } from "react/jsx-runtime";
import { factory as A, useInputProps as O, CloseButton as R, Modal as T, Input as s, Popover as d } from "@mantine/core";
const D = {}, q = A((P) => {
  const {
    inputProps: a,
    wrapperProps: f,
    placeholder: b,
    classNames: i,
    styles: v,
    unstyled: o,
    popoverProps: n,
    modalProps: w,
    dropdownType: p,
    children: c,
    formattedValue: I,
    dropdownHandlers: u,
    dropdownOpened: h,
    onClick: k,
    clearable: B,
    onClear: m,
    clearButtonProps: x,
    rightSection: z,
    shouldClear: F,
    readOnly: r,
    disabled: g,
    value: l,
    name: H,
    form: M,
    type: N,
    ...S
  } = O("PickerInputBase", D, P), V = z || (B && F && !r && !g ? /* @__PURE__ */ e(
    R,
    {
      variant: "transparent",
      onClick: m,
      unstyled: o,
      size: a.size || "sm",
      ...x
    }
  ) : null), y = () => {
    N === "range" && Array.isArray(l) && l[0] && !l[1] && m(), u.close();
  };
  return /* @__PURE__ */ C(j, { children: [
    p === "modal" && !r && /* @__PURE__ */ e(
      T,
      {
        opened: h,
        onClose: y,
        withCloseButton: !1,
        size: "auto",
        "data-dates-modal": !0,
        unstyled: o,
        ...w,
        children: c
      }
    ),
    /* @__PURE__ */ e(s.Wrapper, { ...f, children: /* @__PURE__ */ C(
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
                k?.(t), u.toggle();
              },
              rightSection: V,
              ...a,
              classNames: { ...i },
              ...S,
              children: I || /* @__PURE__ */ e(
                s.Placeholder,
                {
                  error: a.error,
                  unstyled: o,
                  className: i?.placeholder,
                  style: v?.placeholder,
                  children: b
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
  q as PickerInputBase
};
