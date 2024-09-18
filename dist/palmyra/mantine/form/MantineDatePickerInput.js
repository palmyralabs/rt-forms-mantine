import { jsx as h, Fragment as U } from "react/jsx-runtime";
import { forwardRef as q, useRef as b, useImperativeHandle as G } from "react";
import { getFieldLabel as J } from "./util.js";
import { useFieldManager as K, getFieldHandler as Q, FieldDecorator as W } from "@palmyralabs/rt-forms";
import w from "dayjs";
import { s as Y, u as T, a as X } from "../../../chunks/Calendar.js";
import { u as Z, P as z, D as O } from "../../../chunks/DatePicker.js";
import { p as ee } from "../../../chunks/pick-calendar-levels-props.js";
import { f as te, u as ae } from "../../../chunks/factory.js";
import { u as re } from "../../../chunks/use-resolved-styles-api.js";
function ne({
  type: t,
  date: e,
  locale: r,
  format: a,
  labelSeparator: n
}) {
  const l = (s) => w(s).locale(r).format(a);
  return t === "default" ? e === null ? "" : l(e) : t === "multiple" ? e.map(l).join(", ") : t === "range" && Array.isArray(e) ? e[0] && e[1] ? `${l(e[0])} ${n} ${l(e[1])}` : e[0] ? `${l(e[0])} ${n} ` : "" : "";
}
function le({ formatter: t, ...e }) {
  return (t || ne)(e);
}
function se({ minDate: t, maxDate: e, timezone: r }) {
  const a = Y("add", /* @__PURE__ */ new Date(), r);
  return !t && !e ? a : t && w(a).isBefore(t) ? t : e && w(a).isAfter(e) ? e : a;
}
function oe({
  type: t,
  value: e,
  defaultValue: r,
  onChange: a,
  locale: n,
  format: l,
  closeOnChange: s,
  sortDates: D,
  labelSeparator: p,
  valueFormatter: m
}) {
  const g = T(), [C, c] = Z(!1), [o, u] = X({
    type: t,
    value: e,
    defaultValue: r,
    onChange: a
  }), f = le({
    type: t,
    date: o,
    locale: g.getLocale(n),
    format: l,
    labelSeparator: g.getLabelSeparator(p),
    formatter: m
  }), i = (d) => {
    s && (t === "default" && c.close(), t === "range" && d[0] && d[1] && c.close()), u(D && t === "multiple" ? [...d].sort((_, y) => _.getTime() - y.getTime()) : d);
  }, F = () => i(t === "range" ? [null, null] : t === "multiple" ? [] : null), P = t === "range" ? !!o[0] : t === "multiple" ? o.length > 0 : o !== null;
  return {
    _value: o,
    setValue: i,
    onClear: F,
    shouldClear: P,
    formattedValue: f,
    dropdownOpened: C,
    dropdownHandlers: c
  };
}
const ue = {
  type: "default",
  valueFormat: "MMMM D, YYYY",
  closeOnChange: !0,
  sortDates: !0,
  dropdownType: "popover"
}, V = te(
  (t, e) => {
    const r = ae("DatePickerInput", ue, t), {
      type: a,
      value: n,
      defaultValue: l,
      onChange: s,
      valueFormat: D,
      labelSeparator: p,
      locale: m,
      classNames: g,
      styles: C,
      unstyled: c,
      closeOnChange: o,
      size: u,
      variant: f,
      dropdownType: i,
      sortDates: F,
      minDate: P,
      maxDate: d,
      vars: _,
      defaultDate: y,
      valueFormatter: S,
      ...L
    } = r, { resolvedClassNames: k, resolvedStyles: I } = re({
      classNames: g,
      styles: C,
      props: r
    }), { calendarProps: M, others: N } = ee(L), {
      _value: v,
      setValue: R,
      formattedValue: $,
      dropdownHandlers: H,
      dropdownOpened: j,
      onClear: x,
      shouldClear: B
    } = oe({
      type: a,
      value: n,
      defaultValue: l,
      onChange: s,
      locale: m,
      format: D,
      labelSeparator: p,
      closeOnChange: o,
      sortDates: F,
      valueFormatter: S
    }), E = Array.isArray(v) ? v[0] || y : v || y, A = T();
    return /* @__PURE__ */ h(
      z,
      {
        formattedValue: $,
        dropdownOpened: j,
        dropdownHandlers: H,
        classNames: k,
        styles: I,
        unstyled: c,
        ref: e,
        onClear: x,
        shouldClear: B,
        value: v,
        size: u,
        variant: f,
        dropdownType: i,
        ...N,
        type: a,
        __staticSelector: "DatePickerInput",
        children: /* @__PURE__ */ h(
          O,
          {
            ...M,
            size: u,
            variant: f,
            type: a,
            value: v,
            defaultDate: E || se({ maxDate: d, minDate: P, timezone: A.getTimezone() }),
            onChange: R,
            locale: m,
            classNames: k,
            styles: I,
            unstyled: c,
            __staticSelector: "DatePickerInput",
            __stopPropagation: i === "popover",
            minDate: P,
            maxDate: d,
            date: Y("add", M.date, A.getTimezone()),
            __timezoneApplied: !0
          }
        )
      }
    );
  }
);
V.classes = { ...z.classes, ...O.classes };
V.displayName = "@mantine/dates/DatePickerInput";
const he = q(function(e, r) {
  const a = e.displayPattern || e.serverPattern || "YYYY-MM-DD", n = K(e.attribute, e), { getError: l, getValue: s, setValue: D, mutateOptions: p, refreshError: m } = n, g = r || b(null), C = l(), c = b(null);
  G(g, () => ({
    ...Q(n),
    focus() {
      c.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var o = n.getFieldProps();
  o.onChange = (i) => {
    e.readOnly || (console.log("e", i), D(i), e.onChange && e.onChange(i));
  }, o.onBlur = m;
  var u;
  s() != "" && (Array.isArray(s()) ? u = [new Date(s()[0]), new Date(s()[1])] : u = new Date(s()));
  const f = e.defaultValue ? e.type === "range" ? [new Date(e.defaultValue[0]), new Date(e.defaultValue[1])] : new Date(e.defaultValue) : "";
  return console.log(u, f), /* @__PURE__ */ h(U, { children: !p.visible && /* @__PURE__ */ h(
    W,
    {
      label: J(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ h(
        V,
        {
          defaultValue: f,
          ...o,
          value: u,
          type: e.type,
          valueFormat: a,
          error: C.message
        }
      )
    }
  ) });
});
export {
  he as MantineDatePickerInput
};
