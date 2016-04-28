import propertyTest from '../../helpers/propertyTest'

propertyTest('DTSTAMP', {
  transformableValue: new Date('1991-03-07 19:00:00'),
  transformedValue: '19910307T190000'
})

propertyTest('DTSTAMP', {
  transformableProps: {VALUE: 'DATE'},
  transformableValue: new Date('1991-03-07'),
  transformedValue: '19910307'
})
