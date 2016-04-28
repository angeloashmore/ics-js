import Component from '../Component'
import { singleton, unique } from './validators'

/**
 * VTODO class.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.6.2
 */
export default class VTODO extends Component {
  static componentName = 'VTODO'

  static requiredProps = ['DTSTAMP', 'UID']

  static validProps = {
    /* eslint-disable key-spacing */
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
    RRULE:             [singleton()],
    SEQUENCE:          [singleton()],
    STATUS:            [singleton()],
    SUMMARY:           [singleton()],
    URL:               [singleton()],

    DUE:               [singleton(), unique(['DURATION'])],
    DURATION:          [singleton(), unique(['DUE'])],

    ATTACH:            [],
    ATTENDEE:          [],
    CATEGORIES:        [],
    COMMENT:           [],
    CONTACT:           [],
    EXDATE:            [],
    RDATE:             [],
    RELATED:           [],
    'REQUEST-STATUS':  [],
    RESOURCES:         []
    /* eslint-disable key-spacing */
  }

  static validComponents = {
    VALARM: []
  }
}
