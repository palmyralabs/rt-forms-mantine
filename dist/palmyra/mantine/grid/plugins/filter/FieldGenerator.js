import { jsx as m } from "react/jsx-runtime";
import { useFieldGenrator as p } from "@palmyralabs/rt-forms";
import { MantineCheckBox as s } from "../../../form/MantineCheckBox.js";
import { MantineDateInput as c } from "../../../form/MantineDateInput.js";
import { MantineDatePickerInput as u } from "../../../form/MantineDatePickerInput.js";
import "../../../form/MantineDateTimePicker.js";
import { MantineMultiSelect as l } from "../../../form/MantineMultiSelect.js";
import { MantineNumberField as f } from "../../../form/MantineNumberField.js";
import "../../../form/MantineNumberPickerInput.js";
import { MantinePasswordField as d } from "../../../form/MantinePasswordField.js";
import "../../../form/MantineRadio.js";
import { MantineRadioGroup as M } from "../../../form/MantineRadioGroup.js";
import "../../../form/MantineRangeSlider.js";
import { MantineRating as g } from "../../../form/MantineRating.js";
import { MantineSelect as x } from "../../../form/MantineSelect.js";
import { MantineServerLookup as F } from "../../../form/MantineServerLookup.js";
import "../../../form/MantineServerAutoComplete.js";
import "../../../form/MantineSlider.js";
import { MantineSwitch as b } from "../../../form/MantineSwitch.js";
import { MantineTextArea as h } from "../../../form/MantineTextArea.js";
import { MantineTextField as k } from "../../../form/MantineTextField.js";
import "../../../form/MantineTimeInput.js";
import "../../../form/view/MantineTextView.js";
import "../../../form/view/MantineOptionsView.js";
import "../../../form/view/MantineDateView.js";
import "../../../form/view/MantineLookupView.js";
import "../../../form/view/MantineINRView.js";
import "react";
import "@mantine/core";
const Z = (e, i) => {
  const { type: n } = e, t = { fieldDef: e, title: i }, { getReactField: r, getInvalidField: a } = p();
  switch (n) {
    case "string":
      return r(t, k);
    case "radio":
      return r(t, M);
    case "select":
      return r(t, x);
    case "date":
      return r(t, c);
    case "multiSelect":
      return r(t, l);
    case "checkbox":
      return r(t, s);
    case "serverlookup":
      return r(t, F);
    case "textarea":
      return r(t, h);
    case "switch":
      return r(t, b);
    case "password":
      return r(t, d);
    case "rating":
      return r(t, g);
    case "float":
    case "number":
    case "numbersOnly":
      return r(t, f);
    case "dateRange":
      return r(t, (o) => /* @__PURE__ */ m(u, { attribute: o.attribute, ...o, type: "range" }));
    case "autoComplete":
    // return getReactField(props, MantineAutoComplete);
    default:
      return a(t);
  }
};
export {
  Z as default
};
