import Component from '../Component'
import { singleton, unique } from './validators'

/**
 * VEVENT class.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.6.1
 */
export default class VEVENT extends Component {
  static componentName = 'VEVENT'

  static requiredProps = ['DTSTAMP', 'UID']

  static validProps = {
    /* eslint-disable key-spacing */
    DTSTAMP:           [singleton()],
    UID:               [singleton()],

    CLASS:             [singleton()],
    CREATED:           [singleton()],
    DESCRIPTION:       [singleton()],
    DTSTART:           [singleton()],
    GEO:               [singleton()],
    'LAST-MOD':        [singleton()],
    LOCATION:          [singleton()],
    ORGANIZER:         [singleton()],
    PRIORITY:          [singleton()],
    'RECURRENCE-ID':   [singleton()],
    RRULE:             [singleton()],
    SEQUENCE:          [singleton()],
    STATUS:            [singleton()],
    SUMMARY:           [singleton()],
    TRANSP:            [singleton()],
    URL:               [singleton()],

    DTEND:             [singleton(), unique(['DURATION'])],
    DURATION:          [singleton(), unique(['DTEND'])],

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
    /* eslint-enable key-spacing */
  }

  static validComponents = {
    VALARM: []
  }
}
