class Player {
    constructor(name, race, profession){
        this.name = name;
        this.race = race;
        this.profession = profession;
        this.inventory = ["Health Potion"];
        this.hp = 100;
        this.atk = 20;
        // this.stamina = 100;
        // this.mana = 100;
        // this.def = 1;
        // this.spd = 1;
    }
}


module.exports = Player;