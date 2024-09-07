import { jsx as r, jsxs as H, Fragment as W } from "react/jsx-runtime";
import { useState as j, useEffect as A, forwardRef as ge, useRef as E, useImperativeHandle as he } from "react";
import { getFieldLabel as Ce } from "./util.js";
import { useFieldManager as ve, getFieldHandler as Ie, FieldDecorator as Pe } from "@palmyralabs/rt-forms";
import D from "dayjs";
import { s as _e, C as q, u as Fe, a as U, H as be, p as we, b as ye } from "../../chunks/pick-calendar-levels-props.js";
import { f as Ve } from "../../chunks/factory.js";
import { I as O } from "../../chunks/Input.js";
import { u as Me } from "../../chunks/use-input-props.js";
import { C as Ne, P as z } from "../../chunks/CloseButton.js";
import { u as Te } from "../../chunks/Transition.js";
function xe(a, t) {
  if (a === null)
    return null;
  const s = _e("add", new Date(a), t);
  return Number.isNaN(s.getTime()) || !a ? null : s;
}
function Se({ date: a, maxDate: t, minDate: s }) {
  return !(a == null || Number.isNaN(a.getTime()) || t && D(a).isAfter(t, "date") || s && D(a).isBefore(s, "date"));
}
const Ye = {
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: !0,
  preserveTime: !0
}, B = Ve((a, t) => {
  const s = Me("DateInput", Ye, a), {
    inputProps: g,
    wrapperProps: i,
    value: h,
    defaultValue: C,
    onChange: y,
    clearable: c,
    clearButtonProps: V,
    popoverProps: M,
    getDayProps: v,
    locale: l,
    valueFormat: d,
    dateParser: P,
    minDate: u,
    maxDate: L,
    fixOnBlur: G,
    onFocus: N,
    onBlur: T,
    onClick: x,
    readOnly: _,
    name: J,
    form: K,
    rightSection: Q,
    unstyled: S,
    classNames: X,
    styles: Z,
    allowDeselect: R,
    preserveTime: $,
    date: ee,
    defaultDate: te,
    onDateChange: ae,
    ...ne
  } = s, [k, f] = j(!1), { calendarProps: se, others: re } = we(ne), F = Fe(), oe = P || ((e) => {
    const o = D(e, d, F.getLocale(l)).toDate();
    return Number.isNaN(o.getTime()) ? xe(e, F.getTimezone()) : o;
  }), le = R !== void 0 ? R : c, I = (e) => e ? D(e).locale(F.getLocale(l)).format(d) : "", [n, b, w] = U({
    type: "default",
    value: h,
    defaultValue: C,
    onChange: y
  }), [ue, Y] = U({
    type: "default",
    value: ee,
    defaultValue: C || te,
    onChange: ae
  });
  A(() => {
    w && Y(h);
  }, [w, h]);
  const [ie, m] = j(I(n));
  A(() => {
    m(I(n));
  }, [F.getLocale(l)]);
  const ce = (e) => {
    const o = e.currentTarget.value;
    if (m(o), f(!0), o.trim() === "" && c)
      b(null);
    else {
      const p = oe(o);
      Se({ date: p, minDate: u, maxDate: L }) && (b(p), Y(p));
    }
  }, de = (e) => {
    T == null || T(e), f(!1), G && m(I(n));
  }, fe = (e) => {
    N == null || N(e), f(!0);
  }, me = (e) => {
    x == null || x(e), f(!0);
  }, pe = (e) => ({
    ...v == null ? void 0 : v(e),
    selected: D(n).isSame(e, "day"),
    onClick: () => {
      const o = $ ? ye(n, e) : e, p = c && le && D(n).isSame(e, "day") ? null : o;
      b(p), !w && m(I(p)), f(!1);
    }
  }), De = Q || (c && n && !_ ? /* @__PURE__ */ r(
    Ne,
    {
      variant: "transparent",
      onMouseDown: (e) => e.preventDefault(),
      tabIndex: -1,
      onClick: () => {
        b(null), !w && m(""), f(!1);
      },
      unstyled: S,
      size: g.size || "sm",
      ...V
    }
  ) : null);
  return Te(() => {
    n !== void 0 && !k && m(I(n));
  }, [n]), /* @__PURE__ */ H(W, { children: [
    /* @__PURE__ */ r(O.Wrapper, { ...i, __staticSelector: "DateInput", children: /* @__PURE__ */ H(
      z,
      {
        opened: k,
        trapFocus: !1,
        position: "bottom-start",
        disabled: _,
        withRoles: !1,
        unstyled: S,
        ...M,
        children: [
          /* @__PURE__ */ r(z.Target, { children: /* @__PURE__ */ r(
            O,
            {
              "data-dates-input": !0,
              "data-read-only": _ || void 0,
              autoComplete: "off",
              ref: t,
              value: ie,
              onChange: ce,
              onBlur: de,
              onFocus: fe,
              onClick: me,
              readOnly: _,
              rightSection: De,
              ...g,
              ...re,
              __staticSelector: "DateInput"
            }
          ) }),
          /* @__PURE__ */ r(z.Dropdown, { onMouseDown: (e) => e.preventDefault(), "data-dates-dropdown": !0, children: /* @__PURE__ */ r(
            q,
            {
              __staticSelector: "DateInput",
              __timezoneApplied: !0,
              ...se,
              classNames: X,
              styles: Z,
              unstyled: S,
              __preventFocus: !0,
              minDate: u,
              maxDate: L,
              locale: l,
              getDayProps: pe,
              size: g.size,
              date: ue,
              onDateChange: Y
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ r(be, { name: J, form: K, value: n, type: "default" })
  ] });
});
B.classes = { ...O.classes, ...q.classes };
B.displayName = "@mantine/dates/DateInput";
const qe = ge(function(t, s) {
  const g = t.displayPattern || t.serverPattern || "YYYY-MM-DD", i = ve(t.attribute, t), { getError: h, getValue: C, setValue: y, mutateOptions: c } = i, V = s || E(null), M = h(), v = E(null);
  he(V, () => ({
    ...Ie(i),
    focus() {
      v.current.focus();
    },
    setCurrent() {
    }
  }), [i]);
  var l = i.getFieldProps();
  l.onChange = (u) => {
    t.readOnly || (console.log("e", u), y(u), t.onChange && t.onChange(u));
  };
  var d;
  C() != "" && (d = new Date(C()));
  const P = t.defaultValue ? new Date(t.defaultValue) : "";
  return console.log(d, P), /* @__PURE__ */ r(W, { children: !c.visible && /* @__PURE__ */ r(
    Pe,
    {
      label: Ce(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ r(
        B,
        {
          defaultValue: P,
          ...l,
          value: d,
          type: t.type,
          valueFormat: g,
          error: M.message
        }
      )
    }
  ) });
});
export {
  qe as MantineDateInput
};
