import Zombie from '../Zombie';

test('Zombie creation test', () => {
  const expectedObject = {
    name: 'Sixth',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('Sixth', 'Zombie')).toEqual(expectedObject);
});
