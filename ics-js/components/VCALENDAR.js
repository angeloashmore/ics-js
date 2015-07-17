import Component from "../Component";

export default class VCALENDAR extends Component {
  static requiredProps = [
    "PRODID",
    "VERSION"
  ];

  static singletonProps = [
    "PRODID",
    "VERSION",
    "CALSCALE",
    "METHOD"
  ];
}
