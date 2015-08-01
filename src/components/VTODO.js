import Component from '../Component';
import { singleton, unique } from './validators';

export default class VTODO extends Component {
  static componentName = 'VTODO';

  static requiredProps = ['DTSTAMP', 'UID'];

  static validProps = {
    DTSTAMP:           [singleton()],
    UID:               [singleton()],

    CLASS:             [singleton()],
    COMPLETED:         [singleton()],
    CREATED:           [singleton()],
    DESCRIPTION:       [singleton()],
    DTSTART:           [singleton()],
    GEO:               [singleton()],
    'LAST-MOD':        [singleton()],
    LOCATION:          [singleton()],
    ORGANIZER:         [singleton()],
    PERCENT:           [singleton()],
    PRIORITY:          [singleton()],
    'RECURRENCE-ID':   [singleton()],
    SEQ:               [singleton()],
    STATUS:            [singleton()],
    SUMMARY:           [singleton()],
    URL:               [singleton()],
    RRULE:             [singleton()],

    DUE:               [singleton(), unique(['DURATION'])],
    DURATION:          [singleton(), unique(['DUE'])],

    ATTACH:            [],
    ATTENDEE:          [],
    CATEGORIES:        [],
    COMMENT:           [],
    CONTACT:           [],
    EXDATE:            [],
    'REQUEST-STATUS':  [],
    RELATED:           [],
    RESOURCES:         [],
    RDATE:             [],
  }

  static validComponents = {
    VALARM: [],
  }
}
