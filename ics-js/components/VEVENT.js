import Component from "../Component";
import { singleton, unique } from "./validators";

export default class VEVENT extends Component {
  static componentName = "VEVENT";

  static requiredProps = ["DTSTAMP", "UID"];

  static validProps = {
    "DTSTAMP":      [singleton()],
    "UID":          [singleton()],

    "DTSTART":      [singleton()],
    "CLASS":        [singleton()],
    "CREATED":      [singleton()],
    "DESCRIPTION":  [singleton()],
    "GEO":          [singleton()],
    "LAST-MOD":     [singleton()],
    "LOCATION":     [singleton()],
    "ORGANIZER":    [singleton()],
    "PRIORITY":     [singleton()],
    "SEQ":          [singleton()],
    "STATUS":       [singleton()],
    "SUMMARY":      [singleton()],
    "TRANSP":       [singleton()],
    "URL":          [singleton()],
    "RECURID":      [singleton()],
    "RRULE":        [singleton()],

    "DTEND":        [singleton(), unique(["DURATION"])],
    "DURATION":     [singleton(), unique(["DTEND"])],

    "ATTACH":       [],
    "ATTENDEE":     [],
    "CATEGORIES":   [],
    "COMMENT":      [],
    "CONTACT":      [],
    "EXDATE":       [],
    "RSTATUS":      [],
    "RELATED":      [],
    "RESOURCES":    [],
    "RDATE":        []
  }

  static validComponents = {
    "VALARM": []
  }
}
