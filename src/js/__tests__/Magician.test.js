import Magician from '../Magician';

test('Magician creation test', () => {
  const expectedObject = {
    name: 'Third',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Third', 'Magician')).toEqual(expectedObject);
});
