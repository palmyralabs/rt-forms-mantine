import { jsx as c, jsxs as h } from "react/jsx-runtime";
import { Checkbox as N, TextInput as K } from "@mantine/core";
import { useRef as O, useState as v, useMemo as W } from "react";
import { flushSync as F } from "react-dom";
import { M as A } from "../../../../chunks/index6.js";
import { c as H, d as J } from "../../../../chunks/index2.js";
import { DropdownButton as Q } from "../../widget/DropdownButton.js";
import { getColumnId as u } from "./useColumnChooser.js";
import '../../../../assets/ColumnChooserButton.css';const X = (s) => {
  const l = typeof document < "u" ? document : null, o = typeof window < "u" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  l && typeof l.startViewTransition == "function" && !o ? l.startViewTransition(() => F(s)) : s();
}, Y = (s, l) => {
  const o = [], a = {};
  return s.forEach((r) => {
    const m = r.columnGroup || l;
    a[m] || (a[m] = [], o.push(m)), a[m].push(r);
  }), o.map((r) => ({ name: r, columns: a[r] }));
}, x = (s, l) => s[l] !== !1, oe = (s) => {
  const l = O(null), { columns: o } = s, a = s.ungroupedLabel || "Columns", r = s.searchable !== !1, [m, G] = v(""), [k, C] = v({}), R = (e) => C((n) => ({ ...n, [e]: !n[e] })), S = !!s.onVisibilityChange, [D, I] = v({}), p = S ? s.visibility || {} : D, f = (e) => {
    X(() => {
      if (S)
        s.onVisibilityChange(e);
      else {
        I(e);
        const n = s.tableRef?.current;
        n && typeof n.setColumnVisibility == "function" && n.setColumnVisibility(e);
      }
    });
  }, y = m.trim().toLowerCase(), j = (e) => y ? String(e.label || u(e)).toLowerCase().includes(y) || u(e).toLowerCase().includes(y) : !0, V = W(() => Y(o, a), [o, a]), T = V.map((e) => ({ name: e.name, columns: e.columns.filter(j) })).filter((e) => e.columns.length > 0), w = o.reduce(
    (e, n) => x(p, u(n)) ? e + 1 : e,
    0
  ), B = w === o.length, P = w > 0 && w < o.length, E = (e, n) => {
    f({ ...p, [e]: n });
  }, M = (e) => {
    if (e)
      f({});
    else {
      const n = {};
      o.forEach((t) => {
        n[u(t)] = !1;
      }), f(n);
    }
  }, z = (e, n) => {
    const t = { ...p };
    e.columns.forEach((i) => {
      t[u(i)] = n;
    }), f(t);
  }, U = (e) => {
    const n = e.columns.filter((t) => x(p, u(t))).length;
    return { all: n === e.columns.length, some: n > 0 && n < e.columns.length };
  }, g = V.filter((e) => e.name !== a).map((e) => e.name), b = g.some((e) => !k[e]), q = () => {
    if (b) {
      const e = {};
      g.forEach((n) => {
        e[n] = !0;
      }), C(e);
    } else
      C({});
  }, L = (e, n) => {
    const t = u(e), i = x(p, t);
    return /* @__PURE__ */ h("div", { className: "py-cc-row" + (n ? " py-cc-row-child" : ""), children: [
      /* @__PURE__ */ c(
        N,
        {
          radius: "sm",
          size: "sm",
          className: "py-cc-cb",
          checked: i,
          onChange: (d) => E(t, d.currentTarget.checked)
        }
      ),
      /* @__PURE__ */ c("span", { className: "py-cc-name", onClick: () => E(t, !i), children: e.label || t })
    ] }, t);
  };
  return /* @__PURE__ */ c(
    Q,
    {
      title: s.title || "Columns",
      ref: l,
      PrefixAdornment: /* @__PURE__ */ c(J, {}),
      width: s.width || "300",
      children: /* @__PURE__ */ h("div", { className: "py-column-chooser", onMouseDown: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ h("div", { className: "py-cc-top", children: [
          g.length > 0 && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              className: "py-cc-arrow-btn",
              "aria-label": b ? "Collapse all" : "Expand all",
              "aria-expanded": b,
              onClick: q,
              children: /* @__PURE__ */ c(
                A,
                {
                  className: "py-cc-arrow" + (b ? " open" : "")
                }
              )
            }
          ),
          /* @__PURE__ */ c(
            N,
            {
              radius: "sm",
              size: "sm",
              className: "py-cc-cb py-cc-master",
              checked: B,
              indeterminate: P,
              "aria-label": "Select all columns",
              onChange: (e) => M(e.currentTarget.checked)
            }
          ),
          r && /* @__PURE__ */ c(
            K,
            {
              className: "py-cc-search",
              size: "xs",
              radius: "md",
              placeholder: "Search...",
              value: m,
              leftSection: /* @__PURE__ */ c(H, { size: 14 }),
              onChange: (e) => G(e.currentTarget.value)
            }
          )
        ] }),
        /* @__PURE__ */ h("div", { className: "py-cc-scroll", children: [
          T.length === 0 && /* @__PURE__ */ c("div", { className: "py-cc-empty", children: "No columns found" }),
          T.map((e) => {
            if (e.name === a)
              return /* @__PURE__ */ c("div", { children: e.columns.map((d) => L(d, !1)) }, e.name);
            const t = U(e), i = !!y || !k[e.name];
            return /* @__PURE__ */ h("div", { className: "py-cc-group", children: [
              /* @__PURE__ */ h("div", { className: "py-cc-row py-cc-row-group", children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    className: "py-cc-arrow-btn",
                    "aria-label": i ? "Collapse" : "Expand",
                    "aria-expanded": i,
                    onClick: () => R(e.name),
                    children: /* @__PURE__ */ c(
                      A,
                      {
                        className: "py-cc-arrow" + (i ? " open" : "")
                      }
                    )
                  }
                ),
                /* @__PURE__ */ c(
                  N,
                  {
                    radius: "sm",
                    size: "sm",
                    className: "py-cc-cb",
                    checked: t.all,
                    indeterminate: t.some,
                    onChange: (d) => z(e, d.currentTarget.checked)
                  }
                ),
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: "py-cc-name py-cc-group-name",
                    onClick: () => z(e, !t.all),
                    children: e.name
                  }
                )
              ] }),
              /* @__PURE__ */ c("div", { className: "py-cc-collapse" + (i ? " open" : ""), children: /* @__PURE__ */ c("div", { className: "py-cc-collapse-inner", children: e.columns.map((d) => L(d, !0)) }) })
            ] }, e.name);
          })
        ] }),
        /* @__PURE__ */ c("div", { className: "py-cc-footer", children: /* @__PURE__ */ c("button", { type: "button", className: "py-cc-reset", onClick: () => M(!0), children: "Show all" }) })
      ] })
    }
  );
};
export {
  oe as ColumnChooserButton
};
