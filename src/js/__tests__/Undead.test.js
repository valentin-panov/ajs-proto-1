import Undead from '../Undead';

test('Undead creation test', () => {
  const expectedObject = {
    name: 'Fifth',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Fifth', 'Undead')).toEqual(expectedObject);
});
