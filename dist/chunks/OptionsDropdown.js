import { jsx as m, jsxs as H, Fragment as Oe } from "react/jsx-runtime";
import { f as A, u as O, d as ee, B as _, g as oe, h as z, k as Y, r as Se, m as Ae } from "./factory.js";
import { C as Ne } from "./CheckIcon.js";
import { S as Ee } from "./ScrollArea.js";
import { forwardRef as De, useState as Ie, cloneElement as te, useId as Te, useEffect as re, useRef as $, useCallback as v } from "react";
import { P as F } from "./Popover.js";
import { c as Pe } from "./create-safe-context.js";
import { C as $e } from "./CloseButton.js";
import { i as q } from "./use-floating-auto-update.js";
import { u as K } from "./use-merged-ref.js";
import { u as _e } from "./use-id.js";
import { I as ke } from "./Input.js";
import { u as Le } from "./use-uncontrolled.js";
function ne(e) {
  return typeof e == "string" ? { value: e, label: e } : "value" in e && !("label" in e) ? { value: e.value, label: e.value, disabled: e.disabled } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((o) => ne(o))
  } : e;
}
function vo(e) {
  return e ? e.map((o) => ne(o)) : [];
}
function Re(e) {
  return e.reduce((o, t) => "group" in t ? { ...o, ...Re(t.items) } : (o[t.value] = t, o), {});
}
var w = { dropdown: "m_88b62a41", search: "m_985517d8", options: "m_b2821a6e", option: "m_92253aa5", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Fe = {
  error: null
}, ze = oe((e, { size: o }) => ({
  chevron: {
    "--combobox-chevron-size": z(o, "combobox-chevron-size")
  }
})), B = A((e, o) => {
  const t = O("ComboboxChevron", Fe, e), { size: r, error: s, style: c, className: n, classNames: a, styles: i, unstyled: l, vars: u, mod: d, ...b } = t, h = ee({
    name: "ComboboxChevron",
    classes: w,
    props: t,
    style: c,
    className: n,
    classNames: a,
    styles: i,
    unstyled: l,
    vars: u,
    varsResolver: ze,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ m(
    _,
    {
      component: "svg",
      ...b,
      ...h("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: s }, d],
      ref: o,
      children: /* @__PURE__ */ m(
        "path",
        {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
});
B.classes = w;
B.displayName = "@mantine/core/ComboboxChevron";
const [He, N] = Pe(
  "Combobox component was not found in tree"
), se = De(
  ({ size: e, onMouseDown: o, onClick: t, onClear: r, ...s }, c) => /* @__PURE__ */ m(
    $e,
    {
      ref: c,
      size: e || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...s,
      onMouseDown: (n) => {
        n.preventDefault(), o == null || o(n);
      },
      onClick: (n) => {
        r(), t == null || t(n);
      }
    }
  )
);
se.displayName = "@mantine/core/ComboboxClearButton";
const qe = {}, G = A((e, o) => {
  const { classNames: t, styles: r, className: s, style: c, hidden: n, ...a } = O(
    "ComboboxDropdown",
    qe,
    e
  ), i = N();
  return /* @__PURE__ */ m(
    F.Dropdown,
    {
      ...a,
      ref: o,
      role: "presentation",
      "data-hidden": n || void 0,
      ...i.getStyles("dropdown", { className: s, style: c, classNames: t, styles: r })
    }
  );
});
G.classes = w;
G.displayName = "@mantine/core/ComboboxDropdown";
const Ke = {
  refProp: "ref"
}, ae = A((e, o) => {
  const { children: t, refProp: r } = O("ComboboxDropdownTarget", Ke, e);
  if (N(), !q(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ m(F.Target, { ref: o, refProp: r, children: t });
});
ae.displayName = "@mantine/core/ComboboxDropdownTarget";
const Be = {}, V = A((e, o) => {
  const { classNames: t, className: r, style: s, styles: c, vars: n, ...a } = O(
    "ComboboxEmpty",
    Be,
    e
  ), i = N();
  return /* @__PURE__ */ m(
    _,
    {
      ref: o,
      ...i.getStyles("empty", { className: r, classNames: t, styles: c, style: s }),
      ...a
    }
  );
});
V.classes = w;
V.displayName = "@mantine/core/ComboboxEmpty";
function j({
  onKeyDown: e,
  withKeyboardNavigation: o,
  withAriaAttributes: t,
  withExpandedAttribute: r,
  targetType: s,
  autoComplete: c
}) {
  const n = N(), [a, i] = Ie(null), l = (d) => {
    if (e == null || e(d), !n.readOnly && o) {
      if (d.nativeEvent.isComposing)
        return;
      if (d.nativeEvent.code === "ArrowDown" && (d.preventDefault(), n.store.dropdownOpened ? i(n.store.selectNextOption()) : (n.store.openDropdown("keyboard"), i(n.store.selectActiveOption()))), d.nativeEvent.code === "ArrowUp" && (d.preventDefault(), n.store.dropdownOpened ? i(n.store.selectPreviousOption()) : (n.store.openDropdown("keyboard"), i(n.store.selectActiveOption()))), d.nativeEvent.code === "Enter" || d.nativeEvent.code === "NumpadEnter") {
        if (d.nativeEvent.keyCode === 229)
          return;
        const b = n.store.getSelectedOptionIndex();
        n.store.dropdownOpened && b !== -1 ? (d.preventDefault(), n.store.clickSelectedOption()) : s === "button" && (d.preventDefault(), n.store.openDropdown("keyboard"));
      }
      d.nativeEvent.code === "Escape" && n.store.closeDropdown("keyboard"), d.nativeEvent.code === "Space" && s === "button" && (d.preventDefault(), n.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...t ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(n.store.listId && n.store.dropdownOpened) || void 0,
      "aria-controls": n.store.listId,
      "aria-activedescendant": n.store.dropdownOpened && a || void 0,
      autoComplete: c,
      "data-expanded": n.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": n.store.dropdownOpened || void 0
    } : {},
    onKeyDown: l
  };
}
const Ge = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, ie = A((e, o) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: s,
    withAriaAttributes: c,
    withExpandedAttribute: n,
    targetType: a,
    autoComplete: i,
    ...l
  } = O("ComboboxEventsTarget", Ge, e);
  if (!q(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = N(), d = j({
    targetType: a,
    withAriaAttributes: c,
    withKeyboardNavigation: s,
    withExpandedAttribute: n,
    onKeyDown: t.props.onKeyDown,
    autoComplete: i
  });
  return te(t, {
    ...d,
    ...l,
    [r]: K(o, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
ie.displayName = "@mantine/core/ComboboxEventsTarget";
const Ve = {}, U = A((e, o) => {
  const { classNames: t, className: r, style: s, styles: c, vars: n, ...a } = O(
    "ComboboxFooter",
    Ve,
    e
  ), i = N();
  return /* @__PURE__ */ m(
    _,
    {
      ref: o,
      ...i.getStyles("footer", { className: r, classNames: t, style: s, styles: c }),
      ...a,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
U.classes = w;
U.displayName = "@mantine/core/ComboboxFooter";
const je = {}, M = A((e, o) => {
  const { classNames: t, className: r, style: s, styles: c, vars: n, children: a, label: i, ...l } = O(
    "ComboboxGroup",
    je,
    e
  ), u = N();
  return /* @__PURE__ */ H(
    _,
    {
      ref: o,
      ...u.getStyles("group", { className: r, classNames: t, style: s, styles: c }),
      ...l,
      children: [
        i && /* @__PURE__ */ m("div", { ...u.getStyles("groupLabel", { classNames: t, styles: c }), children: i }),
        a
      ]
    }
  );
});
M.classes = w;
M.displayName = "@mantine/core/ComboboxGroup";
const Ue = {}, Z = A((e, o) => {
  const { classNames: t, className: r, style: s, styles: c, vars: n, ...a } = O(
    "ComboboxHeader",
    Ue,
    e
  ), i = N();
  return /* @__PURE__ */ m(
    _,
    {
      ref: o,
      ...i.getStyles("header", { className: r, classNames: t, style: s, styles: c }),
      ...a,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
Z.classes = w;
Z.displayName = "@mantine/core/ComboboxHeader";
function ce({
  value: e,
  valuesDivider: o = ",",
  ...t
}) {
  return /* @__PURE__ */ m(
    "input",
    {
      type: "hidden",
      value: Array.isArray(e) ? e.join(o) : e || "",
      ...t
    }
  );
}
ce.displayName = "@mantine/core/ComboboxHiddenInput";
const Me = {}, J = A((e, o) => {
  const t = O("ComboboxOption", Me, e), {
    classNames: r,
    className: s,
    style: c,
    styles: n,
    vars: a,
    onClick: i,
    id: l,
    active: u,
    onMouseDown: d,
    onMouseOver: b,
    disabled: h,
    selected: D,
    mod: T,
    ...I
  } = t, g = N(), k = Te(), E = l || k;
  return /* @__PURE__ */ m(
    _,
    {
      ...g.getStyles("option", { className: s, classNames: r, styles: n, style: c }),
      ...I,
      ref: o,
      id: E,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": h, "combobox-selected": D },
        T
      ],
      role: "option",
      onClick: (x) => {
        var P;
        h ? x.preventDefault() : ((P = g.onOptionSubmit) == null || P.call(g, t.value, t), i == null || i(x));
      },
      onMouseDown: (x) => {
        x.preventDefault(), d == null || d(x);
      },
      onMouseOver: (x) => {
        g.resetSelectionOnOptionHover && g.store.resetSelectedOption(), b == null || b(x);
      }
    }
  );
});
J.classes = w;
J.displayName = "@mantine/core/ComboboxOption";
const Ze = {}, Q = A((e, o) => {
  const t = O("ComboboxOptions", Ze, e), { classNames: r, className: s, style: c, styles: n, id: a, onMouseDown: i, labelledBy: l, ...u } = t, d = N(), b = _e(a);
  return re(() => {
    d.store.setListId(b);
  }, [b]), /* @__PURE__ */ m(
    _,
    {
      ref: o,
      ...d.getStyles("options", { className: s, style: c, classNames: r, styles: n }),
      ...u,
      id: b,
      role: "listbox",
      "aria-labelledby": l,
      onMouseDown: (h) => {
        h.preventDefault(), i == null || i(h);
      }
    }
  );
});
Q.classes = w;
Q.displayName = "@mantine/core/ComboboxOptions";
const Je = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, W = A((e, o) => {
  const t = O("ComboboxSearch", Je, e), {
    classNames: r,
    styles: s,
    unstyled: c,
    vars: n,
    withAriaAttributes: a,
    onKeyDown: i,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = t, b = N(), h = b.getStyles("search"), D = j({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: i,
    autoComplete: "off"
  });
  return /* @__PURE__ */ m(
    ke,
    {
      ref: K(o, b.store.searchRef),
      classNames: [{ input: h.className }, r],
      styles: [{ input: h.style }, s],
      size: u || b.size,
      ...D,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
W.classes = w;
W.displayName = "@mantine/core/ComboboxSearch";
const Qe = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, le = A((e, o) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: s,
    withAriaAttributes: c,
    withExpandedAttribute: n,
    targetType: a,
    autoComplete: i,
    ...l
  } = O("ComboboxTarget", Qe, e);
  if (!q(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = N(), d = j({
    targetType: a,
    withAriaAttributes: c,
    withKeyboardNavigation: s,
    withExpandedAttribute: n,
    onKeyDown: t.props.onKeyDown,
    autoComplete: i
  }), b = te(t, {
    ...d,
    ...l
  });
  return /* @__PURE__ */ m(F.Target, { ref: K(o, u.store.targetRef), children: b });
});
le.displayName = "@mantine/core/ComboboxTarget";
function We(e, o, t) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!o[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (t) {
    for (let r = o.length - 1; r > -1; r -= 1)
      if (!o[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return e;
}
function Xe(e, o, t) {
  for (let r = e + 1; r < o.length; r += 1)
    if (!o[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (t) {
    for (let r = 0; r < o.length; r += 1)
      if (!o[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return e;
}
function Ye(e) {
  for (let o = 0; o < e.length; o += 1)
    if (!e[o].hasAttribute("data-combobox-disabled"))
      return o;
  return -1;
}
function eo({
  defaultOpened: e,
  opened: o,
  onOpenedChange: t,
  onDropdownClose: r,
  onDropdownOpen: s,
  loop: c = !0,
  scrollBehavior: n = "instant"
} = {}) {
  const [a, i] = Le({
    value: o,
    defaultValue: e,
    finalValue: !1,
    onChange: t
  }), l = $(null), u = $(-1), d = $(null), b = $(null), h = $(-1), D = $(-1), T = $(-1), I = v(
    (p = "unknown") => {
      a || (i(!0), s == null || s(p));
    },
    [i, s, a]
  ), g = v(
    (p = "unknown") => {
      a && (i(!1), r == null || r(p));
    },
    [i, r, a]
  ), k = v(
    (p = "unknown") => {
      a ? g(p) : I(p);
    },
    [g, I, a]
  ), E = v(() => {
    const p = document.querySelector(`#${l.current} [data-combobox-selected]`);
    p == null || p.removeAttribute("data-combobox-selected"), p == null || p.removeAttribute("aria-selected");
  }, []), x = v(
    (p) => {
      const C = document.getElementById(l.current), y = C == null ? void 0 : C.querySelectorAll("[data-combobox-option]");
      if (!y)
        return null;
      const S = p >= y.length ? 0 : p < 0 ? y.length - 1 : p;
      return u.current = S, y != null && y[S] && !y[S].hasAttribute("data-combobox-disabled") ? (E(), y[S].setAttribute("data-combobox-selected", "true"), y[S].setAttribute("aria-selected", "true"), y[S].scrollIntoView({ block: "nearest", behavior: n }), y[S].id) : null;
    },
    [n, E]
  ), P = v(() => {
    const p = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (p) {
      const C = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), y = Array.from(C).findIndex((S) => S === p);
      return x(y);
    }
    return x(0);
  }, [x]), L = v(
    () => x(
      Xe(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        c
      )
    ),
    [x, c]
  ), be = v(
    () => x(
      We(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        c
      )
    ),
    [x, c]
  ), me = v(
    () => x(
      Ye(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [x]
  ), fe = v(
    (p = "selected", C) => {
      T.current = window.setTimeout(() => {
        var X;
        const y = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), S = Array.from(y).findIndex(
          (Ce) => Ce.hasAttribute(`data-combobox-${p}`)
        );
        u.current = S, C != null && C.scrollIntoView && ((X = y[S]) == null || X.scrollIntoView({ block: "nearest", behavior: n }));
      }, 0);
    },
    []
  ), xe = v(() => {
    u.current = -1, E();
  }, [E]), he = v(() => {
    const p = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), C = p == null ? void 0 : p[u.current];
    C == null || C.click();
  }, []), ge = v((p) => {
    l.current = p;
  }, []), ye = v(() => {
    h.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), ve = v(() => {
    D.current = window.setTimeout(() => b.current.focus(), 0);
  }, []), we = v(() => u.current, []);
  return re(
    () => () => {
      window.clearTimeout(h.current), window.clearTimeout(D.current), window.clearTimeout(T.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: I,
    closeDropdown: g,
    toggleDropdown: k,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: we,
    selectOption: x,
    selectFirstOption: me,
    selectActiveOption: P,
    selectNextOption: L,
    selectPreviousOption: be,
    resetSelectedOption: xe,
    updateSelectedOptionIndex: fe,
    listId: l.current,
    setListId: ge,
    clickSelectedOption: he,
    searchRef: d,
    focusSearchInput: ye,
    targetRef: b,
    focusTarget: ve
  };
}
const oo = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, to = oe((e, { size: o, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": Y(o),
    "--combobox-option-padding": z(o, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : Se(t),
    "--combobox-option-fz": Y(o),
    "--combobox-option-padding": z(o, "combobox-option-padding")
  }
}));
function f(e) {
  const o = O("Combobox", oo, e), {
    classNames: t,
    styles: r,
    unstyled: s,
    children: c,
    store: n,
    vars: a,
    onOptionSubmit: i,
    onClose: l,
    size: u,
    dropdownPadding: d,
    resetSelectionOnOptionHover: b,
    __staticSelector: h,
    readOnly: D,
    ...T
  } = o, I = eo(), g = n || I, k = ee({
    name: h || "Combobox",
    classes: w,
    props: o,
    classNames: t,
    styles: r,
    unstyled: s,
    vars: a,
    varsResolver: to
  }), E = () => {
    l == null || l(), g.closeDropdown();
  };
  return /* @__PURE__ */ m(
    He,
    {
      value: {
        getStyles: k,
        store: g,
        onOptionSubmit: i,
        size: u,
        resetSelectionOnOptionHover: b,
        readOnly: D
      },
      children: /* @__PURE__ */ m(
        F,
        {
          opened: g.dropdownOpened,
          ...T,
          onClose: E,
          withRoles: !1,
          unstyled: s,
          children: c
        }
      )
    }
  );
}
const ro = (e) => e;
f.extend = ro;
f.classes = w;
f.displayName = "@mantine/core/Combobox";
f.Target = le;
f.Dropdown = G;
f.Options = Q;
f.Option = J;
f.Search = W;
f.Empty = V;
f.Chevron = B;
f.Footer = U;
f.Header = Z;
f.EventsTarget = ie;
f.DropdownTarget = ae;
f.Group = M;
f.ClearButton = se;
f.HiddenInput = ce;
function R(e) {
  return "group" in e;
}
function de({
  options: e,
  search: o,
  limit: t
}) {
  const r = o.trim().toLowerCase(), s = [];
  for (let c = 0; c < e.length; c += 1) {
    const n = e[c];
    if (s.length === t)
      return s;
    R(n) && s.push({
      group: n.group,
      items: de({
        options: n.items,
        search: o,
        limit: t - s.length
      })
    }), R(n) || n.label.toLowerCase().includes(r) && s.push(n);
  }
  return s;
}
function no(e) {
  if (e.length === 0)
    return !0;
  for (const o of e)
    if (!("group" in o) || o.items.length > 0)
      return !1;
  return !0;
}
function ue(e, o = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const t of e)
      if (R(t))
        ue(t.items, o);
      else {
        if (typeof t.value > "u")
          throw new Error("[@mantine/core] Each option must have value property");
        if (typeof t.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof t.value}`
          );
        if (o.has(t.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${t.value}" was provided more than once`
          );
        o.add(t.value);
      }
}
function so(e, o) {
  return Array.isArray(e) ? e.includes(o) : e === o;
}
function pe({
  data: e,
  withCheckIcon: o,
  value: t,
  checkIconPosition: r,
  unstyled: s,
  renderOption: c
}) {
  if (!R(e)) {
    const a = so(t, e.value), i = o && a && /* @__PURE__ */ m(Ne, { className: w.optionsDropdownCheckIcon }), l = /* @__PURE__ */ H(Oe, { children: [
      r === "left" && i,
      /* @__PURE__ */ m("span", { children: e.label }),
      r === "right" && i
    ] });
    return /* @__PURE__ */ m(
      f.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: Ae({ [w.optionsDropdownOption]: !s }),
        "data-reverse": r === "right" || void 0,
        "data-checked": a || void 0,
        "aria-selected": a,
        active: a,
        children: typeof c == "function" ? c({ option: e, checked: a }) : l
      }
    );
  }
  const n = e.items.map((a) => /* @__PURE__ */ m(
    pe,
    {
      data: a,
      value: t,
      unstyled: s,
      withCheckIcon: o,
      checkIconPosition: r,
      renderOption: c
    },
    a.value
  ));
  return /* @__PURE__ */ m(f.Group, { label: e.group, children: n });
}
function wo({
  data: e,
  hidden: o,
  hiddenWhenEmpty: t,
  filter: r,
  search: s,
  limit: c,
  maxDropdownHeight: n,
  withScrollArea: a = !0,
  filterOptions: i = !0,
  withCheckIcon: l = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: b,
  unstyled: h,
  labelId: D,
  renderOption: T,
  scrollAreaProps: I,
  "aria-label": g
}) {
  ue(e);
  const E = typeof s == "string" ? (r || de)({
    options: e,
    search: i ? s : "",
    limit: c ?? 1 / 0
  }) : e, x = no(E), P = E.map((L) => /* @__PURE__ */ m(
    pe,
    {
      data: L,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: h,
      renderOption: T
    },
    R(L) ? L.group : L.value
  ));
  return /* @__PURE__ */ m(f.Dropdown, { hidden: o || t && x, children: /* @__PURE__ */ H(f.Options, { labelledBy: D, "aria-label": g, children: [
    a ? /* @__PURE__ */ m(
      Ee.Autosize,
      {
        mah: n ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...I,
        children: P
      }
    ) : P,
    x && b && /* @__PURE__ */ m(f.Empty, { children: b })
  ] }) });
}
export {
  f as C,
  wo as O,
  Re as a,
  vo as g,
  R as i,
  eo as u
};
