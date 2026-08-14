const c = "py-grid:";
const d = (e) => {
  if (!e) return {};
  try {
    return JSON.parse(e);
  } catch {
    return {};
  }
}, g = (e) => !e || typeof e == "object" && Object.keys(e).length === 0, i = (e) => ({
  read(t) {
    try {
      return d(e().getItem(c + t));
    } catch {
      return {};
    }
  },
  write(t, r) {
    try {
      const s = e(), o = c + t;
      g(r) ? s.removeItem(o) : s.setItem(o, JSON.stringify(r));
    } catch {
    }
  }
}), a = (e) => (e || "grid").replace(/[^a-zA-Z0-9_.-]/g, "_"), u = {
  read(e) {
    if (typeof window > "u") return {};
    try {
      const t = new URLSearchParams(window.location.search);
      return d(t.get("gs_" + a(e)));
    } catch {
      return {};
    }
  },
  write(e, t) {
    if (!(typeof window > "u"))
      try {
        const r = new URL(window.location.href), s = "gs_" + a(e);
        g(t) ? r.searchParams.delete(s) : r.searchParams.set(s, JSON.stringify(t)), window.history.replaceState(window.history.state, "", r.toString());
      } catch {
      }
  }
}, y = { read: () => ({}), write: () => {
} };
let n = "sessionStorage";
const S = (e) => {
  e && e.mode && (n = e.mode);
}, m = () => n, w = (e) => {
  switch (e || n) {
    case "localStorage":
      return i(() => window.localStorage);
    case "urlParams":
      return u;
    case "none":
      return y;
    case "sessionStorage":
    default:
      return i(() => window.sessionStorage);
  }
}, l = (e) => e ? typeof e == "string" ? e : e.query || e.get || e.list || JSON.stringify(e) : "grid", h = (e) => {
  const t = e && e.persist || {}, r = t.mode || n, s = t.key || e && e.lsKey || l(e && e.endPoint);
  return { enabled: r !== "none", mode: r, key: s };
}, f = (e) => typeof e == "string" ? e : l(e), R = (e, t) => {
  try {
    const r = w(t).read(f(e));
    return r && r.filter || {};
  } catch {
    return {};
  }
}, P = (e) => String(e ?? "").replace(/^\*+|\*+$/g, ""), p = (e) => e ? "*" + e + "*" : void 0;
export {
  S as configureGridPersistence,
  p as containsFilter,
  m as getGridPersistenceMode,
  w as getGridStore,
  R as getPersistedGridFilter,
  f as gridPersistenceKey,
  h as resolveGridPersistence,
  P as stripWildcards
};
