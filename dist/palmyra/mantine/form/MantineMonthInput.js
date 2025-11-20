import { jsx as n, Fragment as p, jsxs as w } from "react/jsx-runtime";
import { Popover as s, TextInput as y, ActionIcon as E } from "@mantine/core";
import { MonthPicker as L } from "@mantine/dates";
import { useFieldManager as O, getFieldHandler as S, FieldDecorator as T } from "@palmyralabs/rt-forms";
import u from "dayjs";
import { forwardRef as A, useRef as d, useState as B, useEffect as H, useImperativeHandle as k } from "react";
import { F as U } from "../../../chunks/index3.js";
import { getDefaultDatePattern as q, DateUtils as z } from "./DateUtils.js";
import { getFieldLabel as G } from "./util.js";
const te = A(function(e, h) {
  const c = e.valueFormat || q(), { parse: g, format: C, revert: F } = z(e), r = O(e.attribute, e, { format: C, parse: g }), { getError: v, getValue: b, setValue: a, mutateOptions: I, refreshError: M } = r, V = h ?? d(null), D = v(), o = b(), [P, l] = B(""), m = d(null);
  H(() => {
    if (o) {
      const t = u(o).format(c);
      l(t);
    } else
      l("");
  }, [o]), k(
    V,
    () => ({
      ...S(r),
      focus() {
        m.current?.focus();
      },
      setCurrent() {
      }
    }),
    [r]
  );
  const { serverPattern: K, ...i } = r.getFieldProps();
  i.onChange = (t) => {
    e.readOnly || (a(t ? u(t) : void 0), e.onChange?.(t));
  }, i.onBlur = (t) => {
    M(), e.onBlur?.(t);
  };
  const R = (t) => {
    l(t);
    const f = u(t, [c], !1);
    f?.isValid() ? a(f.endOf("month")) : t.trim() === "" && a(void 0);
  }, x = F(o), j = e.rightSection ?? /* @__PURE__ */ n(U, {});
  return /* @__PURE__ */ n(p, { children: !I.visible && /* @__PURE__ */ n(
    T,
    {
      label: G(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ w(s, { width: "auto", position: "bottom-start", children: [
        /* @__PURE__ */ n(s.Target, { children: /* @__PURE__ */ n(
          y,
          {
            ref: m,
            value: P,
            onChange: (t) => R(t.currentTarget.value),
            rightSection: /* @__PURE__ */ n(E, { variant: "subtle", children: j }),
            error: D?.message,
            label: e.label
          }
        ) }),
        /* @__PURE__ */ n(s.Dropdown, { children: /* @__PURE__ */ n(L, { value: x, ...i }) })
      ] })
    }
  ) });
});
export {
  te as MantineMonthInput
};
