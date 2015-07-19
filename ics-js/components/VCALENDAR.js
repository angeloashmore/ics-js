import Component from "../Component";
import validators from "./validators";

export default class VCALENDAR extends Component {
  static componentName = "VCALENDAR";

  static requiredProps = ["PRODID", "VERSION"];

  static validProps = {
    "PRODID":    [validators.singleton()],
    "VERSION":   [validators.singleton()],

    "CALSCALE":  [validators.singleton()],
    "METHOD":    [validators.singleton()],
  }

  static validComponents = {
    "VEVENT":     [],
    "VTODO":      [],
    "VJOURNAL":   [],
    "VFREEBUSY":  [],
    "VTIMEZONE":  []
  }
}
