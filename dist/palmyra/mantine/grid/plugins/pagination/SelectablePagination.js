import { jsx as a, Fragment as it, jsxs as M } from "react/jsx-runtime";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as B } from "../../../../../chunks/topic.js";
import { useMemo as st, forwardRef as ct, useState as Z, useEffect as rt } from "react";
import { S as lt } from "../../../../../chunks/Select.js";
import { f as F, u as w, B as j, n as gt, d as dt, g as ut, j as mt, h as ht, k as pt } from "../../../../../chunks/factory.js";
import { G as Pt } from "../../../../../chunks/Group.js";
import { U as ft } from "../../../../../chunks/UnstyledButton.js";
import { c as vt } from "../../../../../chunks/create-safe-context.js";
import { g as Ct } from "../../../../../chunks/get-theme-color.js";
import { g as yt, a as xt } from "../../../../../chunks/get-auto-contrast-value.js";
import { u as Nt } from "../../../../../chunks/use-uncontrolled.js";
import '../../../../../assets/SelectablePagination.css';function R(n, t) {
  return (o) => {
    n == null || n(o), t == null || t(o);
  };
}
function y(n, t) {
  const o = t - n + 1;
  return Array.from({ length: o }, (e, c) => c + n);
}
const b = "dots";
function Lt({
  total: n,
  siblings: t = 1,
  boundaries: o = 1,
  page: e,
  initialPage: c = 1,
  onChange: i
}) {
  const s = Math.max(Math.trunc(n), 0), [g, d] = Nt({
    value: e,
    onChange: i,
    defaultValue: c,
    finalValue: c
  }), r = (C) => {
    C <= 0 ? d(1) : C > s ? d(s) : d(C);
  }, u = () => r(g + 1), l = () => r(g - 1), m = () => r(1), P = () => r(s);
  return {
    range: st(() => {
      if (t * 2 + 3 + o * 2 >= s)
        return y(1, s);
      const L = Math.max(g - t, o), N = Math.min(g + t, s - o), h = L > o + 2, v = N < s - (o + 1);
      if (!h && v) {
        const x = t * 2 + o + 2;
        return [...y(1, x), b, ...y(s - (o - 1), s)];
      }
      if (h && !v) {
        const x = o + 1 + 2 * t;
        return [...y(1, o), b, ...y(s - x, s)];
      }
      return [
        ...y(1, o),
        b,
        ...y(L, N),
        b,
        ...y(s - o + 1, s)
      ];
    }, [s, t, g]),
    active: g,
    setPage: r,
    next: u,
    previous: l,
    first: m,
    last: P
  };
}
const [wt, D] = vt(
  "Pagination.Root component was not found in tree"
);
var S = { root: "m_4addd315", control: "m_326d024a", dots: "m_4ad7767d" };
const St = {
  withPadding: !0
}, I = F((n, t) => {
  const o = w("PaginationControl", St, n), {
    classNames: e,
    className: c,
    style: i,
    styles: s,
    vars: g,
    active: d,
    disabled: r,
    withPadding: u,
    mod: l,
    ...m
  } = o, P = D(), f = r || P.disabled;
  return /* @__PURE__ */ a(
    ft,
    {
      ref: t,
      disabled: f,
      mod: [{ active: d, disabled: f, "with-padding": u }, l],
      ...P.getStyles("control", { className: c, style: i, classNames: e, styles: s, active: !f }),
      ...m
    }
  );
});
I.classes = S;
I.displayName = "@mantine/core/PaginationControl";
function z({ style: n, children: t, path: o, ...e }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)",
        ...n
      },
      ...e,
      children: /* @__PURE__ */ a("path", { d: o, fill: "currentColor" })
    }
  );
}
const It = (n) => /* @__PURE__ */ a(
  z,
  {
    ...n,
    path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
  }
), zt = (n) => /* @__PURE__ */ a(
  z,
  {
    ...n,
    path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
  }
), Rt = (n) => /* @__PURE__ */ a(
  z,
  {
    ...n,
    path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
  }
), bt = (n) => /* @__PURE__ */ a(
  z,
  {
    ...n,
    path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
  }
), Mt = (n) => /* @__PURE__ */ a(
  z,
  {
    ...n,
    path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
  }
), Ft = {
  icon: Mt
}, _ = F((n, t) => {
  const o = w("PaginationDots", Ft, n), { classNames: e, className: c, style: i, styles: s, vars: g, icon: d, ...r } = o, u = D(), l = d;
  return /* @__PURE__ */ a(j, { ref: t, ...u.getStyles("dots", { className: c, style: i, styles: s, classNames: e }), ...r, children: /* @__PURE__ */ a(
    l,
    {
      style: {
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)"
      }
    }
  ) });
});
_.classes = S;
_.displayName = "@mantine/core/PaginationDots";
function V({ icon: n, name: t, action: o, type: e }) {
  const c = { icon: n }, i = ct((s, g) => {
    const { icon: d, ...r } = w(t, c, s), u = d, l = D(), m = e === "next" ? l.active === l.total : l.active === 1;
    return /* @__PURE__ */ a(
      I,
      {
        disabled: l.disabled || m,
        ref: g,
        onClick: l[o],
        withPadding: !1,
        ...r,
        children: /* @__PURE__ */ a(
          u,
          {
            className: "mantine-rotate-rtl",
            style: {
              width: "calc(var(--pagination-control-size) / 1.8)",
              height: "calc(var(--pagination-control-size) / 1.8)"
            }
          }
        )
      }
    );
  });
  return i.displayName = `@mantine/core/${t}`, gt(i);
}
const O = V({
  icon: It,
  name: "PaginationNext",
  action: "onNext",
  type: "next"
}), U = V({
  icon: zt,
  name: "PaginationPrevious",
  action: "onPrevious",
  type: "previous"
}), q = V({
  icon: Rt,
  name: "PaginationFirst",
  action: "onFirst",
  type: "previous"
}), G = V({
  icon: bt,
  name: "PaginationLast",
  action: "onLast",
  type: "next"
});
function T({ dotsIcon: n }) {
  const t = D(), o = t.range.map((e, c) => {
    var i;
    return e === "dots" ? /* @__PURE__ */ a(_, { icon: n }, c) : /* @__PURE__ */ a(
      I,
      {
        active: e === t.active,
        "aria-current": e === t.active ? "page" : void 0,
        onClick: () => t.onChange(e),
        disabled: t.disabled,
        ...(i = t.getItemProps) == null ? void 0 : i.call(t, e),
        children: e
      },
      c
    );
  });
  return /* @__PURE__ */ a(it, { children: o });
}
T.displayName = "@mantine/core/PaginationItems";
const Dt = {
  siblings: 1,
  boundaries: 1
}, _t = ut(
  (n, { size: t, radius: o, color: e, autoContrast: c }) => ({
    root: {
      "--pagination-control-radius": o === void 0 ? void 0 : mt(o),
      "--pagination-control-size": ht(t, "pagination-control-size"),
      "--pagination-control-fz": pt(t),
      "--pagination-active-bg": e ? Ct(e, n) : void 0,
      "--pagination-active-color": yt(c, n) ? xt({ color: e, theme: n, autoContrast: c }) : void 0
    }
  })
), A = F((n, t) => {
  const o = w("PaginationRoot", Dt, n), {
    classNames: e,
    className: c,
    style: i,
    styles: s,
    unstyled: g,
    vars: d,
    total: r,
    value: u,
    defaultValue: l,
    onChange: m,
    disabled: P,
    siblings: f,
    boundaries: C,
    color: L,
    radius: N,
    onNextPage: h,
    onPreviousPage: v,
    onFirstPage: x,
    onLastPage: W,
    getItemProps: E,
    autoContrast: kt,
    ...J
  } = o, k = dt({
    name: "Pagination",
    classes: S,
    props: o,
    className: c,
    style: i,
    classNames: e,
    styles: s,
    unstyled: g,
    vars: d,
    varsResolver: _t
  }), { range: K, setPage: X, next: Y, previous: $, active: Q, first: H, last: tt } = Lt({
    page: u,
    initialPage: l,
    onChange: m,
    total: r,
    siblings: f,
    boundaries: C
  }), nt = R(h, Y), ot = R(v, $), at = R(x, H), et = R(W, tt);
  return /* @__PURE__ */ a(
    wt,
    {
      value: {
        total: r,
        range: K,
        active: Q,
        disabled: P,
        getItemProps: E,
        onChange: X,
        onNext: nt,
        onPrevious: ot,
        onFirst: at,
        onLast: et,
        getStyles: k
      },
      children: /* @__PURE__ */ a(j, { ref: t, ...k("root"), ...J })
    }
  );
});
A.classes = S;
A.displayName = "@mantine/core/PaginationRoot";
const Vt = {
  withControls: !0,
  siblings: 1,
  boundaries: 1,
  gap: 8
}, p = F((n, t) => {
  const o = w("Pagination", Vt, n), {
    withEdges: e,
    withControls: c,
    getControlProps: i,
    nextIcon: s,
    previousIcon: g,
    lastIcon: d,
    firstIcon: r,
    dotsIcon: u,
    total: l,
    gap: m,
    hideWithOnePage: P,
    ...f
  } = o;
  return l <= 0 || P && l === 1 ? null : /* @__PURE__ */ a(A, { ref: t, total: l, ...f, children: /* @__PURE__ */ M(Pt, { gap: m, children: [
    e && /* @__PURE__ */ a(q, { icon: r, ...i == null ? void 0 : i("first") }),
    c && /* @__PURE__ */ a(U, { icon: g, ...i == null ? void 0 : i("previous") }),
    /* @__PURE__ */ a(T, { dotsIcon: u }),
    c && /* @__PURE__ */ a(O, { icon: s, ...i == null ? void 0 : i("next") }),
    e && /* @__PURE__ */ a(G, { icon: d, ...i == null ? void 0 : i("last") })
  ] }) });
});
p.classes = S;
p.displayName = "@mantine/core/Pagination";
p.Root = A;
p.Control = I;
p.Dots = _;
p.First = q;
p.Last = G;
p.Next = O;
p.Previous = U;
p.Items = T;
const At = (n) => {
  {
    var t;
    return function(o, ...e) {
      clearTimeout(t), t = setTimeout(o.bind(null, ...e), n);
    };
  }
}, Tt = At(10), $t = (n) => {
  var N;
  const t = (N = n.queryRef) == null ? void 0 : N.current, [o, e] = Z(0), [c, i] = Z();
  rt(() => {
    if (n.topic) {
      const h = B.subscribe(n.topic + "/data", () => {
        Tt(() => e((v) => v + 1));
      });
      return () => {
        B.unsubscribe(h);
      };
    }
  }, [n.topic]);
  const s = (h, v) => {
    const x = parseInt(v.value, 10);
    i(v.value), t.setPageSize(x);
  }, g = (t == null ? void 0 : t.getTotalRecords()) || 0, d = (t == null ? void 0 : t.getQueryLimit()) || { limit: 15 }, r = Array.isArray(n.pageSize) ? n.pageSize : [n.pageSize], u = (t == null ? void 0 : t.getPageNo()) || 0, l = d.limit || 25, m = Math.ceil(g / l), P = u * l + 1, f = Math.min((u + 1) * l, g), C = (h) => {
    t.gotoPage(h - 1);
  }, L = r.map((h) => h);
  return /* @__PURE__ */ a("div", { children: !isNaN(m) && /* @__PURE__ */ a("div", { children: /* @__PURE__ */ M("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ a("div", { className: "py-selectable-pagination-left-container", children: r && r.length > 1 ? /* @__PURE__ */ M("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("span", { children: "Showing" }) }),
      /* @__PURE__ */ a("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ a("div", { style: { width: "100px" }, children: /* @__PURE__ */ a(
        lt,
        {
          id: "rows-per-page-select",
          defaultValue: r[0].toString(),
          onChange: s,
          size: "xs",
          checkIconPosition: "right",
          data: L.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ a("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ M("span", { children: [
        P,
        " - ",
        f,
        " of ",
        g,
        " Results"
      ] }) })
    ] }) : null }),
    /* @__PURE__ */ a("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ a(
      p,
      {
        total: m,
        onChange: C
      }
    ) })
  ] }) }) });
};
export {
  $t as SelectablePagination
};
