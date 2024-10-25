import { jsx as m } from "react/jsx-runtime";
import { useFieldGenrator as p } from "@palmyralabs/rt-forms";
import { MantineCheckBox as s } from "../../../form/MantineCheckBox.js";
import { MantineDateInput as c } from "../../../form/MantineDateInput.js";
import { MantineDatePickerInput as u } from "../../../form/MantineDatePickerInput.js";
import "../../../form/MantineDateTimePicker.js";
import { MantineMultiSelect as l } from "../../../form/MantineMultiSelect.js";
import { MantineNumberField as f } from "../../../form/MantineNumberField.js";
import { MantinePasswordField as d } from "../../../form/MantinePasswordField.js";
import "../../../form/MantineRadio.js";
import { MantineRadioGroup as M } from "../../../form/MantineRadioGroup.js";
import "../../../form/MantineRangeSlider.js";
import { MantineRating as g } from "../../../form/MantineRating.js";
import { MantineSelect as x } from "../../../form/MantineSelect.js";
import { MantineServerLookup as F } from "../../../form/MantineServerLookup.js";
import "../../../form/MantineSlider.js";
import { MantineSwitch as b } from "../../../form/MantineSwitch.js";
import { MantineTextArea as h } from "../../../form/MantineTextArea.js";
import { MantineTextField as k } from "../../../form/MantineTextField.js";
import "../../../form/MantineTimeInput.js";
import "../../../form/view/MantineTextView.js";
import "../../../form/view/MantineOptionsView.js";
import "../../../form/view/MantineDateView.js";
import "../../../form/view/MantineLookupView.js";
import "react";
import "@mantine/core";
const W = (r, i) => {
  const { type: n } = r, t = { fieldDef: r, title: i }, { getReactField: e, getInvalidField: a } = p();
  switch (n) {
    case "string":
      return e(t, k);
    case "radio":
      return e(t, M);
    case "select":
      return e(t, x);
    case "date":
      return e(t, c);
    case "multiSelect":
      return e(t, l);
    case "checkbox":
      return e(t, s);
    case "serverlookup":
      return e(t, F);
    case "textarea":
      return e(t, h);
    case "switch":
      return e(t, b);
    case "password":
      return e(t, d);
    case "rating":
      return e(t, g);
    case "float":
    case "number":
    case "numbersOnly":
      return e(t, f);
    case "dateRange":
      return e(t, (o) => /* @__PURE__ */ m(u, { attribute: o.attribute, ...o, type: "range" }));
    case "autoComplete":
    default:
      return a(t);
  }
};
export {
  W as default
};
