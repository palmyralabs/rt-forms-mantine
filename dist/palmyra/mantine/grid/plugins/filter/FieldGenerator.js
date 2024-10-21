import { useFieldGenrator as a } from "@palmyralabs/rt-forms";
import { MantineCheckBox as m } from "../../../form/MantineCheckBox.js";
import { MantineDateInput as p } from "../../../form/MantineDateInput.js";
import "../../../form/MantineDatePickerInput.js";
import "../../../form/MantineDateTimePicker.js";
import { MantineMultiSelect as s } from "../../../form/MantineMultiSelect.js";
import { MantineNumberField as c } from "../../../form/MantineNumberField.js";
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
import "../../../form/MantineTimeInput.js";
import "../../../form/view/MantineTextView.js";
import "../../../form/view/MantineOptionsView.js";
import "../../../form/view/MantineDateView.js";
import "../../../form/view/MantineLookupView.js";
import "react/jsx-runtime";
import "react";
import "@mantine/core";
const L = (e, o) => {
  const { type: i } = e, t = { fieldDef: e, title: o }, { getReactField: r, getInvalidField: n } = a();
  switch (i) {
    case "string":
      return r(t, g);
    case "radio":
      return r(t, l);
    case "select":
      return r(t, f);
    case "date":
      return r(t, p);
    case "multiSelect":
      return r(t, s);
    case "checkbox":
      return r(t, m);
    case "textarea":
      return r(t, F);
    case "switch":
      return r(t, M);
    case "password":
      return r(t, u);
    case "rating":
      return r(t, d);
    case "float":
    case "number":
    case "numbersOnly":
      return r(t, c);
    case "autoComplete":
    default:
      return n(t);
  }
};
export {
  L as default
};
