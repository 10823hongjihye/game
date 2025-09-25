class Unit {
    constructor(name, hp, atk) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
    }
}


class Monster extends Unit {
    constructor(name, HP, atk) {
        super(name, hp, atk);
    }
    attack(monster) {
        monster.hp -= this.atk

    }
}

class Hero extends Unit {
    cosntructor(name, hp, atk, xp) {
        super(name, hp, atk);
        this.xp = xp;
    }
}

const monster1 = new Monster('슬라임', 10, 10);
