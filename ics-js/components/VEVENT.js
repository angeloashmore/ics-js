import Component from "../Component";
import validators from "./validators";

export default class VEVENT extends Component {
  static componentName = "VEVENT";

  static requiredProps = ["DTSTAMP", "UID"];

  static validProps = {
    "DTSTAMP":      [validators.singleton()],
    "UID":          [validators.singleton()],

    "DTSTART":      [validators.singleton()],
    "CLASS":        [validators.singleton()],
    "CREATED":      [validators.singleton()],
    "DESCRIPTION":  [validators.singleton()],
    "GEO":          [validators.singleton()],
    "LAST-MOD":     [validators.singleton()],
    "LOCATION":     [validators.singleton()],
    "ORGANIZER":    [validators.singleton()],
    "PRIORITY":     [validators.singleton()],
    "SEQ":          [validators.singleton()],
    "STATUS":       [validators.singleton()],
    "SUMMARY":      [validators.singleton()],
    "TRANSP":       [validators.singleton()],
    "URL":          [validators.singleton()],
    "RECURID":      [validators.singleton()],
    "RRULE":        [validators.singleton()],

    "DTEND":        [validators.singleton(), validators.unique(["DURATION"])],
    "DURATION":     [validators.singleton(), validators.unique(["DTEND"])],

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
