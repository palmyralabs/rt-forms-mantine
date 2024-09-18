import { jsx as C, jsxs as G, Fragment as Te } from "react/jsx-runtime";
import { useRef as b, useState as J, forwardRef as ye, useImperativeHandle as Ce } from "react";
import { getFieldLabel as pe } from "./util.js";
import { useFieldManager as Se, getFieldHandler as He, FieldDecorator as ke } from "@palmyralabs/rt-forms";
import Y from "dayjs";
import { u as we, a as Me, s as Q } from "../../../chunks/Calendar.js";
import { a as X } from "../../../chunks/assign-time.js";
import { p as Ne } from "../../../chunks/pick-calendar-levels-props.js";
import { P, D as ee, u as xe } from "../../../chunks/DatePicker.js";
import { f as ae, u as te, m as _e, d as Fe } from "../../../chunks/factory.js";
import { u as se } from "../../../chunks/use-resolved-styles-api.js";
import { I as ne } from "../../../chunks/InputBase.js";
import { u as Ye } from "../../../chunks/use-merged-ref.js";
import { u as Z } from "../../../chunks/use-reduced-motion.js";
import { A as Le } from "../../../chunks/ActionIcon.js";
import { C as Re } from "../../../chunks/CheckIcon.js";
var Ve = { input: "m_468e7eda" };
const ze = {}, A = ae((x, a) => {
  const t = te("TimeInput", ze, x), {
    classNames: k,
    styles: T,
    unstyled: w,
    vars: M,
    withSeconds: y,
    minTime: d,
    maxTime: f,
    value: h,
    onChange: e,
    ...n
  } = t, { resolvedClassNames: i, resolvedStyles: p } = se({
    classNames: k,
    styles: T,
    props: t
  }), H = (m) => {
    if (d !== void 0 || f !== void 0) {
      const [c, D, u] = m.split(":").map(Number);
      if (d) {
        const [o, v, S] = d.split(":").map(Number);
        if (c < o || c === o && D < v || y && c === o && D === v && u < S)
          return -1;
      }
      if (f) {
        const [o, v, S] = f.split(":").map(Number);
        if (c > o || c === o && D > v || y && c === o && D === v && u > S)
          return 1;
      }
    }
    return 0;
  }, g = (m) => {
    var c, D, u;
    if ((c = t.onBlur) == null || c.call(t, m), d !== void 0 || f !== void 0) {
      const o = m.currentTarget.value;
      if (o) {
        const v = H(o);
        v === 1 ? (m.currentTarget.value = f, (D = t.onChange) == null || D.call(t, m)) : v === -1 && (m.currentTarget.value = d, (u = t.onChange) == null || u.call(t, m));
      }
    }
  };
  return /* @__PURE__ */ C(
    ne,
    {
      classNames: { ...i, input: _e(Ve.input, i == null ? void 0 : i.input) },
      styles: p,
      unstyled: w,
      ref: a,
      value: h,
      ...n,
      step: y ? 1 : 60,
      onChange: e,
      onBlur: g,
      type: "time",
      __staticSelector: "TimeInput"
    }
  );
});
A.classes = ne.classes;
A.displayName = "@mantine/dates/TimeInput";
var oe = { timeWrapper: "m_208d2562", timeInput: "m_62ee059" };
const be = {
  dropdownType: "popover"
}, E = ae((x, a) => {
  const t = te("DateTimePicker", be, x), {
    value: k,
    defaultValue: T,
    onChange: w,
    valueFormat: M,
    locale: y,
    classNames: d,
    styles: f,
    unstyled: h,
    timeInputProps: e,
    submitButtonProps: n,
    withSeconds: i,
    level: p,
    defaultLevel: H,
    size: g,
    variant: m,
    dropdownType: c,
    vars: D,
    minDate: u,
    maxDate: o,
    ...v
  } = t, S = Fe({
    name: "DateTimePicker",
    classes: oe,
    props: t,
    classNames: d,
    styles: f,
    unstyled: h,
    vars: D
  }), { resolvedClassNames: I, resolvedStyles: j } = se({
    classNames: d,
    styles: f,
    props: t
  }), le = M || (i ? "DD/MM/YYYY HH:mm:ss" : "DD/MM/YYYY HH:mm"), K = b(), re = Ye(K, e == null ? void 0 : e.ref), {
    calendarProps: { allowSingleDateInRange: Ae, ..._ },
    others: ie
  } = Ne(v), L = we(), [l, R] = Me({
    type: "default",
    value: k,
    defaultValue: T,
    onChange: w
  }), O = (s) => s ? Y(s).format(i ? "HH:mm:ss" : "HH:mm") : "", [ce, $] = J(O(l)), [me, U] = J(p || H || "month"), [N, V] = xe(!1), ue = l ? Y(l).locale(L.getLocale(y)).format(le) : "", de = (s) => {
    var B;
    (B = e == null ? void 0 : e.onChange) == null || B.call(e, s);
    const r = s.currentTarget.value;
    if ($(r), r) {
      const [ve, he, De] = r.split(":").map(Number), F = Q("add", /* @__PURE__ */ new Date(), L.getTimezone());
      F.setHours(ve), F.setMinutes(he), F.setSeconds(De || 0), R(X(F, l || Q("add", /* @__PURE__ */ new Date(), L.getTimezone())));
    }
  }, fe = (s) => {
    var r;
    s && R(X(l, s)), (r = K.current) == null || r.focus();
  }, ge = (s) => {
    var r;
    (r = e == null ? void 0 : e.onKeyDown) == null || r.call(e, s), s.key === "Enter" && (s.preventDefault(), V.close());
  };
  Z(() => {
    N || $(O(l));
  }, [l, N]), Z(() => {
    N && U("month");
  }, [N]);
  const W = u ? Y(u).format("HH:mm:ss") : null, q = o ? Y(o).format("HH:mm:ss") : null, z = c === "popover";
  return /* @__PURE__ */ G(
    P,
    {
      formattedValue: ue,
      dropdownOpened: N,
      dropdownHandlers: V,
      classNames: I,
      styles: j,
      unstyled: h,
      ref: a,
      onClear: () => R(null),
      shouldClear: !!l,
      value: l,
      size: g,
      variant: m,
      dropdownType: c,
      ...ie,
      type: "default",
      __staticSelector: "DateTimePicker",
      children: [
        /* @__PURE__ */ C(
          ee,
          {
            ..._,
            maxDate: o,
            minDate: u,
            size: g,
            variant: m,
            type: "default",
            value: l,
            defaultDate: l,
            onChange: fe,
            locale: y,
            classNames: I,
            styles: j,
            unstyled: h,
            __staticSelector: "DateTimePicker",
            __stopPropagation: z,
            level: p,
            defaultLevel: H,
            onLevelChange: (s) => {
              var r;
              U(s), (r = _.onLevelChange) == null || r.call(_, s);
            },
            __timezoneApplied: !0
          }
        ),
        me === "month" && /* @__PURE__ */ G("div", { ...S("timeWrapper"), children: [
          /* @__PURE__ */ C(
            A,
            {
              value: ce,
              withSeconds: i,
              ref: re,
              unstyled: h,
              minTime: l && u && l.toDateString() === u.toDateString() ? W ?? void 0 : void 0,
              maxTime: l && o && l.toDateString() === o.toDateString() ? q ?? void 0 : void 0,
              ...e,
              ...S("timeInput", {
                className: e == null ? void 0 : e.className,
                style: e == null ? void 0 : e.style
              }),
              onChange: de,
              onKeyDown: ge,
              size: g,
              "data-mantine-stop-propagation": z || void 0
            }
          ),
          /* @__PURE__ */ C(
            Le,
            {
              variant: "default",
              size: `input-${g || "sm"}`,
              ...S("submitButton", {
                className: n == null ? void 0 : n.className,
                style: n == null ? void 0 : n.style
              }),
              unstyled: h,
              "data-mantine-stop-propagation": z || void 0,
              children: /* @__PURE__ */ C(Re, { size: "30%" }),
              ...n,
              onClick: (s) => {
                var r;
                (r = n == null ? void 0 : n.onClick) == null || r.call(n, s), V.close();
              }
            }
          )
        ] })
      ]
    }
  );
});
E.classes = { ...oe, ...P.classes, ...ee.classes };
E.displayName = "@mantine/dates/DateTimePicker";
const ea = ye(function(a, t) {
  const k = a.displayPattern || a.serverPattern || "YYYY-MM-DD", T = Se(a.attribute, a), { getError: w, getValue: M, setValue: y, mutateOptions: d, refreshError: f } = T, h = t || b(null), e = w(), n = b(null);
  Ce(h, () => ({
    ...He(T),
    focus() {
      n.current.focus();
    },
    setCurrent() {
    }
  }), [T]);
  var i = T.getFieldProps();
  i.onChange = (g) => {
    a.readOnly || (y(g), a.onChange && a.onChange(g));
  }, i.onBlur = f;
  var p;
  M() != "" && (p = new Date(M()));
  const H = a.defaultValue ? new Date(a.defaultValue) : "";
  return /* @__PURE__ */ C(Te, { children: !d.visible && /* @__PURE__ */ C(
    ke,
    {
      label: pe(a),
      customContainerClass: a.customContainerClass,
      colspan: a.colspan,
      customFieldClass: a.customFieldClass,
      customLabelClass: a.customLabelClass,
      children: /* @__PURE__ */ C(
        E,
        {
          defaultValue: H,
          ...i,
          value: p,
          valueFormat: k,
          error: e.message
        }
      )
    }
  ) });
});
export {
  ea as MantineDateTimePicker
};
