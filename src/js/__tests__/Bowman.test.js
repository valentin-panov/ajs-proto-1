import Bowman from '../Bowman';

test('Bowman creation test', () => {
  const expectedObject = {
    name: 'First',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('First', 'Bowman')).toEqual(expectedObject);
});
