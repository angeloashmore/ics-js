import propertyTest from '../../helpers/propertyTest'

propertyTest('EXDATE', {
  transformableValue: [new Date('1991-03-07 09:00:00'), new Date('1991-07-11 20:00:00')],
  transformedValue: '19910307T090000,19910711T200000'
})

propertyTest('EXDATE', {
  transformableProps: {VALUE: 'DATE'},
  transformableValue: [new Date('1991-03-07'), new Date('1991-07-11')],
  transformedValue: '19910307,19910711'
})
