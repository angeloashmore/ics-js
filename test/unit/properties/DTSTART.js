import propertyTest from '../../helpers/propertyTest'

propertyTest('DTSTART', {
  transformableValue: new Date('1991-03-07 09:00:00'),
  transformedValue: '19910307T090000'
})
