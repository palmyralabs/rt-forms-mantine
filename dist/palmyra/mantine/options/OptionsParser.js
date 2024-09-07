const v = (t, i) => {
  if (t) {
    var e = Object.keys(t);
    if (e.length == 2) {
      const l = Object.values[0];
      var a = 0, r = 1;
      return (l == "false" || l == "0" || l == 0 || l == "unchecked") && (a = 1, r = 0), {
        checked: {
          title: e[a],
          value: t[e[a]]
        },
        unchecked: {
          title: e[r],
          value: t[e[r]]
        }
      };
    } else
      console.error("invalid options, must contain two keys - sample - "), console.error({ active: 1, inactive: 0 });
  } else
    return {
      checked: {
        title: i,
        value: 1
      },
      unchecked: {
        title: i,
        value: 0
      }
    };
};
export {
  v as default
};
