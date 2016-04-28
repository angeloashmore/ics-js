import Component from '../Component'
import { singleton } from './validators'

/**
 * VCALENDAR class.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.4
 */
export default class VCALENDAR extends Component {
  static componentName = 'VCALENDAR'

  static requiredProps = ['PRODID', 'VERSION']

  static validProps = {
    /* eslint-disable key-spacing */
    PRODID:    [singleton()],
    VERSION:   [singleton()],

    CALSCALE:  [singleton()],
    METHOD:    [singleton()]
    /* eslint-enable key-spacing */
  }

  static validComponents = {
    /* eslint-disable key-spacing */
    VEVENT:     [],
    VFREEBUSY:  [],
    VJOURNAL:   [],
    VTIMEZONE:  [],
    VTODO:      []
    /* eslint-enable key-spacing */
  }
}
