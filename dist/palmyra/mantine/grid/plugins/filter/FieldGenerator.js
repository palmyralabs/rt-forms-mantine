import { jsx as m } from "react/jsx-runtime";
import { useFieldGenrator as s } from "@palmyralabs/rt-forms";
import { MantineDatePickerInput as c } from "../../../form/MantineDatePickerInput.js";
import { MantineNumberField as u } from "../../../form/MantineNumberField.js";
import { MantineRating as p } from "../../../form/MantineRating.js";
import { MantinePasswordField as l } from "../../../form/MantinePasswordField.js";
import { MantineSwitch as f } from "../../../form/MantineSwitch.js";
import { MantineTextArea as d } from "../../../form/MantineTextArea.js";
import { MantineServerLookup as M } from "../../../form/MantineServerLookup.js";
import { MantineCheckBox as g } from "../../../form/MantineCheckBox.js";
import { MantineMultiSelect as x } from "../../../form/MantineMultiSelect.js";
import { MantineDateInput as F } from "../../../form/MantineDateInput.js";
import { MantineSelect as b } from "../../../form/MantineSelect.js";
import { MantineRadioGroup as h } from "../../../form/MantineRadioGroup.js";
import { MantineTextField as k } from "../../../form/MantineTextField.js";
const N = (r, a) => {
  const { type: o } = r, e = { fieldDef: r, title: a }, { getReactField: t, getInvalidField: i } = s();
  switch (o) {
    case "string":
      return t(e, k);
    case "radio":
      return t(e, h);
    case "select":
      return t(e, b);
    case "date":
      return t(e, F);
    case "multiSelect":
      return t(e, x);
    case "checkbox":
      return t(e, g);
    case "serverlookup":
      return t(e, M);
    case "textarea":
      return t(e, d);
    case "switch":
      return t(e, f);
    case "password":
      return t(e, l);
    case "rating":
      return t(e, p);
    case "float":
    case "number":
    case "numbersOnly":
      return t(e, u);
    case "dateRange":
      return t(e, (n) => /* @__PURE__ */ m(c, { attribute: n.attribute, ...n, type: "range" }));
    case "autoComplete":
    // return getReactField(props, MantineAutoComplete);
    default:
      return i(e);
  }
};
export {
  N as default
};
