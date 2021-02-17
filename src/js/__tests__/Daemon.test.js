import Daemon from '../Daemon';

test('Daemon creation test', () => {
  const expectedObject = {
    name: 'Second',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Second', 'Daemon')).toEqual(expectedObject);
});
