import Component from "../Component";

export default class VCALENDAR extends Component {
  static componentName = "VCALENDAR";

  static requiredProps = [
    "PRODID", "VERSION"
  ];

  static singletonProps = [
    "PRODID", "VERSION", "CALSCALE", "METHOD"
  ];
}
