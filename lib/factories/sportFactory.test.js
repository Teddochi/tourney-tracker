const SportFactory = require('./sportFactory');

console.log(SportFactory)

test('First test', () => {
  expect(SportFactory.createObject('Sport')).toBe('');
});