import propertyTest from '../../helpers/propertyTest';

propertyTest('DTSTAMP', {
  transformableValue: new Date('1991-03-07 09:00:00'),
  transformedValue: '19910307T090000',
});

propertyTest('DTSTAMP', {
  transformableValue: new Date('1991-03-07'),
  transformableProps: { VALUE: 'DATE' },
  transformedValue: '19910307',
});
