import { jsx as s, jsxs as H, Fragment as W } from "react/jsx-runtime";
import { useState as j, useEffect as E, forwardRef as ge, useRef as A, useImperativeHandle as he } from "react";
import { getFieldLabel as Ce } from "./util.js";
import { useFieldManager as ve, getFieldHandler as Ie, FieldDecorator as Pe } from "@palmyralabs/rt-forms";
import D from "dayjs";
import { s as _e, C as q, u as Fe, a as U } from "../../../chunks/Calendar.js";
import { a as we } from "../../../chunks/assign-time.js";
import { H as ye, p as be } from "../../../chunks/pick-calendar-levels-props.js";
import { f as Ve } from "../../../chunks/factory.js";
import { I as O } from "../../../chunks/Input.js";
import { u as Me } from "../../../chunks/use-input-props.js";
import { C as Ne } from "../../../chunks/CloseButton.js";
import { u as Te } from "../../../chunks/use-reduced-motion.js";
import { P as B } from "../../../chunks/Popover.js";
function xe(a, t) {
  if (a === null)
    return null;
  const r = _e("add", new Date(a), t);
  return Number.isNaN(r.getTime()) || !a ? null : r;
}
function Se({ date: a, maxDate: t, minDate: r }) {
  return !(a == null || Number.isNaN(a.getTime()) || t && D(a).isAfter(t, "date") || r && D(a).isBefore(r, "date"));
}
const Ye = {
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: !0,
  preserveTime: !0
}, L = Ve((a, t) => {
  const r = Me("DateInput", Ye, a), {
    inputProps: g,
    wrapperProps: u,
    value: h,
    defaultValue: C,
    onChange: V,
    clearable: i,
    clearButtonProps: M,
    popoverProps: N,
    getDayProps: v,
    locale: c,
    valueFormat: d,
    dateParser: I,
    minDate: P,
    maxDate: l,
    fixOnBlur: G,
    onFocus: T,
    onBlur: x,
    onClick: S,
    readOnly: F,
    name: J,
    form: K,
    rightSection: Q,
    unstyled: Y,
    classNames: X,
    styles: Z,
    allowDeselect: R,
    preserveTime: $,
    date: ee,
    defaultDate: te,
    onDateChange: ae,
    ...ne
  } = r, [k, f] = j(!1), { calendarProps: re, others: se } = be(ne), w = Fe(), oe = I || ((e) => {
    const o = D(e, d, w.getLocale(c)).toDate();
    return Number.isNaN(o.getTime()) ? xe(e, w.getTimezone()) : o;
  }), le = R !== void 0 ? R : i, _ = (e) => e ? D(e).locale(w.getLocale(c)).format(d) : "", [n, y, b] = U({
    type: "default",
    value: h,
    defaultValue: C,
    onChange: V
  }), [ue, z] = U({
    type: "default",
    value: ee,
    defaultValue: C || te,
    onChange: ae
  });
  E(() => {
    b && z(h);
  }, [b, h]);
  const [ie, m] = j(_(n));
  E(() => {
    m(_(n));
  }, [w.getLocale(c)]);
  const ce = (e) => {
    const o = e.currentTarget.value;
    if (m(o), f(!0), o.trim() === "" && i)
      y(null);
    else {
      const p = oe(o);
      Se({ date: p, minDate: P, maxDate: l }) && (y(p), z(p));
    }
  }, de = (e) => {
    x == null || x(e), f(!1), G && m(_(n));
  }, fe = (e) => {
    T == null || T(e), f(!0);
  }, me = (e) => {
    S == null || S(e), f(!0);
  }, pe = (e) => ({
    ...v == null ? void 0 : v(e),
    selected: D(n).isSame(e, "day"),
    onClick: () => {
      const o = $ ? we(n, e) : e, p = i && le && D(n).isSame(e, "day") ? null : o;
      y(p), !b && m(_(p)), f(!1);
    }
  }), De = Q || (i && n && !F ? /* @__PURE__ */ s(
    Ne,
    {
      variant: "transparent",
      onMouseDown: (e) => e.preventDefault(),
      tabIndex: -1,
      onClick: () => {
        y(null), !b && m(""), f(!1);
      },
      unstyled: Y,
      size: g.size || "sm",
      ...M
    }
  ) : null);
  return Te(() => {
    n !== void 0 && !k && m(_(n));
  }, [n]), /* @__PURE__ */ H(W, { children: [
    /* @__PURE__ */ s(O.Wrapper, { ...u, __staticSelector: "DateInput", children: /* @__PURE__ */ H(
      B,
      {
        opened: k,
        trapFocus: !1,
        position: "bottom-start",
        disabled: F,
        withRoles: !1,
        unstyled: Y,
        ...N,
        children: [
          /* @__PURE__ */ s(B.Target, { children: /* @__PURE__ */ s(
            O,
            {
              "data-dates-input": !0,
              "data-read-only": F || void 0,
              autoComplete: "off",
              ref: t,
              value: ie,
              onChange: ce,
              onBlur: de,
              onFocus: fe,
              onClick: me,
              readOnly: F,
              rightSection: De,
              ...g,
              ...se,
              __staticSelector: "DateInput"
            }
          ) }),
          /* @__PURE__ */ s(B.Dropdown, { onMouseDown: (e) => e.preventDefault(), "data-dates-dropdown": !0, children: /* @__PURE__ */ s(
            q,
            {
              __staticSelector: "DateInput",
              __timezoneApplied: !0,
              ...re,
              classNames: X,
              styles: Z,
              unstyled: Y,
              __preventFocus: !0,
              minDate: P,
              maxDate: l,
              locale: c,
              getDayProps: pe,
              size: g.size,
              date: ue,
              onDateChange: z
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ s(ye, { name: J, form: K, value: n, type: "default" })
  ] });
});
L.classes = { ...O.classes, ...q.classes };
L.displayName = "@mantine/dates/DateInput";
const Ke = ge(function(t, r) {
  const g = t.displayPattern || t.serverPattern || "YYYY-MM-DD", u = ve(t.attribute, t), { getError: h, getValue: C, setValue: V, mutateOptions: i, refreshError: M } = u, N = r || A(null), v = h(), c = A(null);
  he(N, () => ({
    ...Ie(u),
    focus() {
      c.current.focus();
    },
    setCurrent() {
    }
  }), [u]);
  var d = u.getFieldProps();
  d.onChange = (l) => {
    t.readOnly || (console.log("e", l), V(l), t.onChange && t.onChange(l));
  }, d.onBlur = M;
  var I;
  C() != "" && (I = new Date(C()));
  const P = t.defaultValue ? new Date(t.defaultValue) : "";
  return console.log(I, P), /* @__PURE__ */ s(W, { children: !i.visible && /* @__PURE__ */ s(
    Pe,
    {
      label: Ce(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ s(
        L,
        {
          defaultValue: P,
          ...d,
          value: I,
          type: t.type,
          valueFormat: g,
          error: v.message
        }
      )
    }
  ) });
});
export {
  Ke as MantineDateInput
};
