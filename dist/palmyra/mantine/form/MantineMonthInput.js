import { jsx as o, Fragment as L, jsxs as S } from "react/jsx-runtime";
import { TextInput as p, ActionIcon as A } from "@mantine/core";
import { MonthPicker as B } from "@mantine/dates";
import { useFieldManager as H, getFieldHandler as T, FieldDecorator as w } from "@palmyralabs/rt-forms";
import n from "dayjs";
import { forwardRef as U, useRef as d, useState as g, useEffect as q, useImperativeHandle as z } from "react";
import { F as G } from "../../../chunks/index3.js";
import { getDefaultDatePattern as J, DateUtils as K } from "./DateUtils.js";
import { getFieldLabel as N } from "./util.js";
const oe = U(function(t, h) {
  const i = t.valueFormat || J(), C = t.type, { parse: F, format: v, revert: b } = K(t), a = H(t.attribute, t, { format: v, parse: F }), { getError: I, getValue: M, setValue: r, mutateOptions: V, refreshError: y } = a, P = h ?? d(null), R = I(), l = M(), [x, c] = g(!1), [D, s] = g(""), f = d(null);
  q(() => {
    if (l) {
      const e = n(l).format(i);
      s(e);
    } else
      s("");
  }, [l]), z(
    P,
    () => ({
      ...T(a),
      focus() {
        f.current?.focus();
      },
      setCurrent() {
      }
    }),
    [a]
  );
  const { serverPattern: W, ...u } = a.getFieldProps();
  u.onChange = (e) => {
    t.readOnly || (r(C === "range" ? e ? [n(e[0]), n(e[1])] : void 0 : e ? n(e) : void 0), t.onChange?.(e));
  }, u.onBlur = (e) => {
    y(), t.onBlur?.(e);
  };
  const O = (e) => {
    s(e);
    const m = n(e, [i], !1);
    m?.isValid() ? r(m.endOf("month")) : e.trim() === "" && r(void 0);
  }, j = (e) => {
    r(e), s(e ? n(e).format(i) : ""), c(!1);
  }, k = b(l), E = t.rightSection ?? /* @__PURE__ */ o(G, {});
  return /* @__PURE__ */ o(L, { children: !V.visible && /* @__PURE__ */ S(
    w,
    {
      label: N(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: [
        /* @__PURE__ */ o(
          p,
          {
            ref: f,
            value: D,
            onChange: (e) => O(e.currentTarget.value),
            rightSection: /* @__PURE__ */ o(A, { variant: "subtle", onClick: () => c((e) => !e), children: E }),
            onFocus: () => c((e) => !e),
            error: R?.message,
            label: t.label
          }
        ),
        x && /* @__PURE__ */ o(
          B,
          {
            value: k,
            onChange: j,
            ...u
          }
        )
      ]
    }
  ) });
});
export {
  oe as MantineMonthInput
};
