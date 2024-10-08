import { useFieldGenrator as a } from "@palmyralabs/rt-forms";
import { MantineCheckBox as m } from "../../../form/MantineCheckBox.js";
import { MantineDateInput as s } from "../../../form/MantineDateInput.js";
import "../../../form/MantineDateTimePicker.js";
import { MantineMultiSelect as c } from "../../../form/MantineMultiSelect.js";
import { MantineNumberField as p } from "../../../form/MantineNumberField.js";
import { MantinePasswordField as u } from "../../../form/MantinePasswordField.js";
import "../../../form/MantineRadio.js";
import { MantineRadioGroup as l } from "../../../form/MantineRadioGroup.js";
import "../../../form/MantineRangeSlider.js";
import { MantineRating as d } from "../../../form/MantineRating.js";
import { MantineSelect as f } from "../../../form/MantineSelect.js";
import "../../../form/MantineServerLookup.js";
import "../../../form/MantineSlider.js";
import { MantineSwitch as M } from "../../../form/MantineSwitch.js";
import { MantineTextArea as F } from "../../../form/MantineTextArea.js";
import { MantineTextField as g } from "../../../form/MantineTextField.js";
import "react/jsx-runtime";
import "react";
const q = (r, o) => {
  const { type: i } = r, t = { fieldDef: r, title: o }, { getReactField: e, getInvalidField: n } = a();
  switch (i) {
    case "string":
      return e(t, g);
    case "radio":
      return e(t, l);
    case "select":
      return e(t, f);
    case "date":
      return e(t, s);
    case "multiSelect":
      return e(t, c);
    case "checkbox":
      return e(t, m);
    case "textarea":
      return e(t, F);
    case "switch":
      return e(t, M);
    case "password":
      return e(t, u);
    case "rating":
      return e(t, d);
    case "float":
    case "number":
    case "numbersOnly":
      return e(t, p);
    case "autoComplete":
    default:
      return n(t);
  }
};
export {
  q as default
};
