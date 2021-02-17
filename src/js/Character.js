export default class Character {
  constructor(name, type) {
    const minNameLength = 2; // may be taken from actual politics
    const maxNameLength = 10;
    if (!(name.length >= minNameLength && name.length <= maxNameLength)) {
      throw new Error(
        `Wrong name length. Name should be winthin ${minNameLength}-${maxNameLength}`
      );
    }
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!type || !types.includes(type)) {
      throw new Error(`Wrong character type. Right types: ${types}`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
