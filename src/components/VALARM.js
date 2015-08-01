import Component from '../Component';
import { singleton } from './validators';

export default class VALARM extends Component {
  static componentName = 'VALARM';

  static requiredProps = ['ACTION', 'TRIGGER'];

  static validProps = {
    ACTION:       [singleton()],
    TRIGGER:      [singleton()],

    DURATION:     [singleton()],
    REPEAT:       [singleton()],

    DESCRIPTION:  [singleton()],
    SUMMARY:      [singleton()],
    ATTACH:       [singleton()],

    ATTENDEE:     [],
  }
}
