import { jsx as r, Fragment as x, jsxs as j } from "react/jsx-runtime";
import { Popover as s, TextInput as y, ActionIcon as E } from "@mantine/core";
import { MonthPicker as L } from "@mantine/dates";
import { useFieldManager as O, getFieldHandler as R, FieldDecorator as S } from "@palmyralabs/rt-forms";
import u from "dayjs";
import { useState as T, useRef as w, useEffect as A, useImperativeHandle as B } from "react";
import { F as H } from "../../../chunks/index3.js";
import { getDefaultDatePattern as k, DateUtils as U } from "./DateUtils.js";
import { getFieldLabel as p } from "./util.js";
function Z(e) {
  const c = e.valueFormat || k(), { parse: f, format: h, revert: g } = U(e), n = O(e.attribute, e, { format: h, parse: f }), { getError: C, getValue: F, setValue: o, mutateOptions: v, refreshError: b } = n, I = C(), a = F(), [V, l] = T(""), m = w(null);
  A(() => {
    if (a) {
      const t = u(a).format(c);
      l(t);
    } else
      l("");
  }, [a]), B(
    e.ref,
    () => ({
      ...R(n),
      focus() {
        m.current?.focus();
      },
      setCurrent() {
      }
    }),
    [n]
  );
  const { serverPattern: q, ...i } = n.getFieldProps();
  i.onChange = (t) => {
    e.readOnly || (o(t ? u(t) : void 0), e.onChange?.(t));
  }, i.onBlur = (t) => {
    b(), e.onBlur?.(t);
  };
  const D = (t) => {
    l(t);
    const d = u(t, [c], !1);
    d?.isValid() ? o(d.endOf("month")) : t.trim() === "" && o(void 0);
  }, M = g(a), P = e.rightSection ?? /* @__PURE__ */ r(H, {});
  return /* @__PURE__ */ r(x, { children: !v.visible && /* @__PURE__ */ r(
    S,
    {
      label: p(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ j(s, { width: "auto", position: "bottom-start", children: [
        /* @__PURE__ */ r(s.Target, { children: /* @__PURE__ */ r(
          y,
          {
            ref: m,
            value: V,
            onChange: (t) => D(t.currentTarget.value),
            rightSection: /* @__PURE__ */ r(E, { variant: "subtle", children: P }),
            error: I?.message,
            label: e.label
          }
        ) }),
        /* @__PURE__ */ r(s.Dropdown, { children: /* @__PURE__ */ r(L, { value: M, ...i }) })
      ] })
    }
  ) });
}
export {
  Z as MantineMonthInput
};
