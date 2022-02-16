const readline = require("readline-sync");
const Player = require("./player");
const Rat = require ("./rat");
const Wolf = require ("./wolf");
const Goblin = require ("./goblin");
const Troll = require ("./troll");
let inGame = true;


class Game {
    constructor(){
    }
    mainMenu() {
        let mainMenuSelection = readline.question("Welcome to Colossal Adventure RPG! \n What would you like to do? \n 1) Start New Game \n 2) Exit\n")
        switch (mainMenuSelection) {
            case "1":
                setupMenu();
                break;
            case "2":
                console.log("Goodbye!")
                inGame = false;
            default:
                console.log("Please enter either '1' or '2'")
                break;
        }
    }
    
}
            
while (inGame === true) {
    const startMenu = new Game;
    startMenu.mainMenu();
}

function setupMenu() {
    let challengeAccepted = readline.question(" A terrible darkness has fallen over the denizens of Avalon. \nMonsters roam the countryside, \nkilling any who cross their path. \nDo you, humble traveler, \nhave what it takes to defeat the monsters, \nand save Avalon? \n (1 Yes, I have what it takes! \n (2 On second thought, maybe not..\n");
    switch (challengeAccepted) {
        case "1":
            console.log("That's the spirit! \nBut first, we have a few important things to take care of before you embark...")
            playerCustomization()
            break;
        case "2":
            console.log("Oh well, Avalon wouldn't want to add you to the body count, anyway...")
            inGame = false
            break;
        default:
            console.log("Please enter either '1' or '2'")
            break;
    }
                
}
function playerCustomization() {
    let incoherent = true;
    this.player = new Player;
    let raceOptions = ["Human", "Elf", "Dwarf", "Halfling"];
    let professionOptions = ["Knight", "Ranger", "Mage", "Thief"];
    raceSelection()
    function raceSelection() {
        while (incoherent === true) {  
        let raceSelection = readline.question(`Innkeeper: \n"What ARE you, exactly?" \nSelect one of the following races: \n ${raceOptions[0]} \n ${raceOptions[1]} \n ${raceOptions[2]} \n ${raceOptions[3]}\n`).toLowerCase();
        switch (raceSelection) {
            case "human":
                this.player.race = raceOptions[0].toLowerCase();
                console.log(`Innkeeper: \n"Well, bless my soul! It's nice to see another ${player.race} being; \nstill alive that is!"`);
                professionSelection();
                break;
            case "elf":
                this.player.race = raceOptions[1].toLowerCase();
                console.log(`Innkeeper: \n"Well met, friend! I've never seen an ${player.race} in the flesh before; \nYou're a long way from Southwood, friend!"`);
                professionSelection();
                break;
            case "dwarf":
                this.player.race = raceOptions[2].toLowerCase();
                console.log(`Innkeeper: \n"Well met, friend! I've seen the odd ${player.race} here and there; \nbut it's been a while since we've seen *your* kind here..."`);
                professionSelection();
                break;
            case "halfling":
                this.player.race = raceOptions[3].toLowerCase();
                console.log(`Innkeeper: \n"Well met, little one! I'm surprised a ${player.race} would want to leave Halfton; \nAnd right before dinner, no less!"`);
                professionSelection();
                break;
            default:
                console.log("Please enter either 'Human', 'Elf', 'Dwarf', or 'Halfling'. \nCheck your spelling: \nIt will matter from here on out!");
            }
        }
    };
    function professionSelection() {
        while (incoherent === true) { 
            let professionSelection = readline.question(`"Okay... and what exactly IS your profession?" \nSelect one of the following classes: \n ${professionOptions[0]} \n ${professionOptions[1]} \n ${professionOptions[2]} \n ${professionOptions[3]}\n`).toLowerCase();
            switch (professionSelection) {
                case "knight":
                    this.player.profession = professionOptions[0].toLowerCase();
                    console.log(`Innkeeper: \n"And here I was, thinking chivalry was dead! \nYou have no idea how happy I am to see another ${player.profession}!"`);
                    nameSelection();
                    break;
                case "ranger":
                    this.player.profession = professionOptions[1].toLowerCase();
                    console.log(`Innkeeper: \n"The bow was a dead giveaway; ${player.profession}s NEVER go without their hunting equipment!"`);
                    nameSelection();
                    break;
                case "mage":
                    this.player.profession = professionOptions[2].toLowerCase();
                    console.log(`Innkeeper: \n"A ${player.profession}... \n Now THAT'S something you don't see everyday..."`)
                    nameSelection();
                    break;
                case "thief":
                    this.player.profession = professionOptions[3].toLowerCase()
                    console.log(`Innkeeper: \n"I thought I smelled a rat! \nYou'd better keep your hands to yourself, ${player.profession}; \npeople lose hands for stealing here!"`);
                    nameSelection();
                    break;
                default:
                    console.log("Please enter either 'Knight', 'Ranger', 'Mage', or 'Thief'. \nCheck your spelling");
                    break;
            }
        }
    };
    function nameSelection() {
        let nameSelection = readline.question(`Innkeeper: \n"Oh! Before I forget; \nWhat is your name, traveler?"\n`);
        this.player.name = nameSelection;
        console.log(`Innkeeper: \n"${player.name}... \nI like it! It suits you!"`);
        incoherent = false;
    };
    avalonAdventure(this.player)
}   

function avalonAdventure(player) {
    console.log(`Introducing; ${player.name}, the ${player.race} ${player.profession}! You have completed character setup! \nHere are your stats: \nHealth: ${player.hp} \n:Stamina: ${player.stamina} \nMana: ${player.mana} \nAttack: ${player.atk} \nDefense: ${player.def} \nSpeed: ${player.spd}  \nRemember: there are foul monsters afoot, and \nYOU must stop them from causing any more harm!`);
}

    
