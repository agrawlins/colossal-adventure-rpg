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
        let mainMenuSelection = readline.keyIn("Welcome to Avalon Adventures! \n What would you like to do? \n 1) Start New Game \n 2) Exit\n")
        switch (mainMenuSelection) {
            case "1":
                setupMenu();
                break;
            case "2":
                console.log("Goodbye!")
                inGame = false;
                break;
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
    let challengeAccepted = readline.keyIn(" A terrible darkness has fallen over the denizens of Avalon. \nMonsters roam the countryside, \nkilling any who cross their path. \nDo you, humble traveler, \nhave what it takes to defeat the monsters, \nand save Avalon? \n1) Yes, I have what it takes! \n2) On second thought, maybe not..\n");
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
        console.log(`Innkeeper: \n"${player.name}... I like it! It suits you!"`);
        console.log(`Introducing; ${player.name}, the ${player.race} ${player.profession}! You have completed character setup! \nRemember: there are foul monsters afoot, and \nYOU must stop them from causing any more harm! \nFirst, ${player.name}, let's get you on the road:`)
        adventureMenuSelection(player);
        incoherent = false;
    };
}   

    function adventureMenuSelection(player) {
        console.log(``);
        let adventureMenuSelection = readline.keyIn("Press a key: \n'W' - Walk \n'P' - print stats \n'Q' - quit  \n");
        switch (adventureMenuSelection) {
            case "W".toLowerCase():
                startWalking(player)
                function startWalking(player) {
                    let isWalking = true
                    while (isWalking === true) {

                        let combatGambit = Math.floor(Math.random() * 4)
                        switch (combatGambit) {
                            case (combatGambit = 0):
                                isWalking = false
                                summonFoe(player)
                                break;
                            case (combatGambit = 1):
                                console.log("You pass a destroyed wagon. The ground is littered with dead...")
                                break;
                            case (combatGambit = 2):
                                console.log("You pass a scorched village. Some of the houses are still on fire...")
                                break;
                            case (combatGambit = 3):
                                console.log("You pass the ruins of what appears to have been a fortress...")
                                break;
                            default:
                                console.log("You walk cautiously through the rolling hills of Avalon...");
                                break;
                        }
                    }
                }
                break;
            case "P".toLowerCase():
                inventory(player);
                break;
            case "Q".toLowerCase():
                inventory(player);
                break;
            default:
                break;
        }
    }



 function inventory(player) {
    console.log(`${player.name} \n ${player.race} \n${player.profession} \n${player.hp} \n${player.inventory}`)
}

function summonFoe(player) {
    let summoning = Math.floor(Math.random() * 4)
        if (summoning === 0){
            new Rat;
            readyFight(player, Rat);
        }else if (summoning === 1){
            new Wolf;
            readyFight(player, Wolf);
        }else if (summoning === 2){
            new Goblin;
            readyFight(player, Goblin);
        }else if (summoning === 3){
            new Troll;
            readyFight(player, Troll);
        }
    }

function readyFight(player, foe) {
    let inCombat = true;
    while (inCombat = true) {
        playerCombatMenu(player, foe)
        function playerCombatMenu(player, foe) {
            let indecisive = true;
            while (indecisive = true) { 
                let firstSelection = readline.question(`A ${foe.name} is attacking! \nQuickly, ${player.name}; take action! \nAttack \nFlee \n`);
                switch (firstSelection) {
                    case "Attack".toLowerCase():
                        let dmg = foe.hp - (Math.floor(Math.random() * 20) + 1) 
                        console.log(`${foe.name} takes ${dmg} damage!`)
                        foe.hp = foe.hp - dmg;
                        if (foe.hp > 0) {
                            foeCombat(player, foe)
                        } else if (foe.hp < 0) {
                            console.log(`The ${foe.name} is defeated; rejoice!`)
                            player.inventory.push("Health Potion")
                            indecisive = false
                            inCombat = false;
                            adventureMenuSelection(player)
                        }
                        break;
                    // case "Use Item".toLowerCase():
                    //     let itemSelection = readline.question(`Which item would you like to use, ${player}?`)
                    //     switch (itemSelection) {
                    //         case "Health Potion".toLowerCase() && player.inventory.contains("Health") :
                    //             player.hp + 50;
                    //             console.log(`Your current health: \n${player.hp}`)
                    //             player.inventory.splice("Health Potion")
                    //             indecisive = false
                    //             break;
                    //         case "Back".toLowerCase():
                    //             indecisive = false
                    //             break;
                    //         default:
                    //             console.log(`You don't have a ${itemSelection} in your inventory, ${player.name}...`)
                    //             break;
                    //             }
                    //         break;
                    case "Flee".toLowerCase():
                        let cowardice = false;
                        if (cowardice === false) {
                            console.log(`You attempt to flee from the ${foe.name}...`)
                            results(player, foe)
                        } else if (cowardice === true) {
                            console.log(`You already tried to run from this ${foe.name}, remember?! \nHere's a reminder: it didn't work`)
                        }
                        function results(player, foe) {
                            let finalResults = Math.floor(Math.random() * 10)
                            switch (finalResults) {
                                case (finalResults >= 5):
                                    console.log(`You manage to outrun the ${foe.name}, and make it to safety!`)
                                    pauseMenu()
                                    break;
                                default:
                                    console.log(`You can't outrun the ${foe.name}. \nYou must stand and fight, ${player.name}!`)
                                    cowardice = true;
                                    break;
                                }
                            }
                        break; 
                    }
                }  
            }
        function foeCombat(player, foe) {
            let dmg = player.hp - (Math.floor(Math.random() * foe.atk) + 1) 
            console.log(`${player.name} takes ${dmg} damage!`)
            if (player.hp > 0) {
                playerCombatMenu(player, foe)
            } else {
                console.log(`${player.name}, the ${player.race} ${player.profession} has been slain by a ${foe.name}! \nBetter luck next time, ${player.name}`)
                inCombat = false;
                inGame = false;
            }
        }
    }   
}


                                 // avalonAdventure().addEventListener("keydown", moving());
                                    // avalonAdventure().addEventListener("keyup", pauseMenu(Player));
                                    // while (moving == true) {
                                        // }
                                        
                                        // function pauseMenu(player) {
                                            //     let firstSelection = readline.question(`You stop to rest. \nWhat will you do now, ${player.name}? \nCheck Inventory \nReturn to Game`)
                                // }
                                    
                                    // default:
                                    //     console.log("You tread carefullly through the fields of Avalon...")
                                    //     break;
                                        
                                        
                                        // case Ogre.summon:
                                        //     new Ogre;
                                        //     combatMenu(player, Ogre);
                                        //     console.clear()
                                        //     break;
                                        // case Dragon.summon:
                                        //     new Dragon;
                                        //     combatMenu(player, Dragon);
                                        //     console.clear()
                                        //     break;
                                        
                                        
                                        // function pauseMenu(player) {
            //     let firstSelection = readline.question(`You stop to rest. \nWhat will you do now, ${player.name}? \nCheck Inventory \nReturn to Game`)
            // }
            
            // function combatMenu(player, foe) {
            // }    
            
            //         let firstSelection = readline.question(`A(n) ${foe.name} is attacking! \nQuickly, ${player.name}; take action! \n${element} \nAttack \nUse Item \nFlee`);
            //         switch (firstSelection) {
            //             case "Attack".toLowerCase()


                    // let countdownTimer = 10;
                    // countdownTimer.setTimeout(countDown, 1000)
                    // for (let i = 0; i < countdownTimer; i++) {
                    //     const element = playeray[10-i];




                    // case "Stamina Potion".toLowerCase() && player.inventory.contains("Stamina") :
                    //     player.stm + 50;
                    //     console.log(`Your current stamina: \n${player.stm}`)
                    //     player.inventory.splice("Stamina Potion")
                    //     break;
                    // case "Mana Potion".toLowerCase() && player.inventory.contains("Mana") :
                    //     player.stm + 50;
                    //     console.log(`Your current mana: \n${player.mana}`)
                    //     player.inventory.splice("Mana Potion")
                    //     break;
                    // case "Cast Spell".toLowerCase():
                    //     let elementSelection = readline.question(`Which element, ${player.name}?`)
                    //     switch (elementSelection) {
        //         case "Fire".toLowerCase():
        //             let fireSelection = readline.question(`Which spell? \nFireball (-2m, +4d) \nPower Up (-5m, +5d, -1turn) \nIgnite (-20m, -20% ${foe.name} hp/turn) \nMeteor`)
        //             switch (fireSelection) {
        //                 case "Fireball".toLowerCase():
        //                     if (player.mana >= 2) {
        //                         player.mana -2
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 case "Power Up".toLowerCase():
        //                     if (player.mana >= 5) {
        //                         player.mana -5
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 case "Ignite".toLowerCase():
        //                     if (player.mana >= 20) {
        //                         player.mana -20
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 case "Meteor".toLowerCase():
        //                     if (player.mana >= 50) {
        //                         player.mana - 50
        //                         foe.hp = 0
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 default:
        //                     break;
        //             }
        //             break;
        //         case "Water".toLowerCase():
        //             let waterSelection = readline.question(`Which spell?`)
        //             switch (waterSelection) {
        //                 case "Water Pillar".toLowerCase():
                            
        //                     break;
        //                 case "Healing".toLowerCase():

        //                     break;
        //                 case "Freeze".toLowerCase():

        //                     break;
        //                 case "Tsunami".toLowerCase():
        //                     if (player.mana >= 50) {
        //                         player.mana - 50
        //                         foe.hp = 0
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 default:
        //                     break;
        //             }
        //             break;
        //         case "Earth".toLowerCase():
        //             let earthSelection = readline.question(`Which spell?`)
        //             switch (earthSelection) {
        //                 case "Boulder".toLowerCase():
                            
        //                     break;
        //                 case "Rock Wall".toLowerCase():

        //                     break;
        //                 case "Stone Armor".toLowerCase():

        //                     break;
        //                 case "Avalanche".toLowerCase():
        //                     if (player.mana >= 50) {
        //                         player.mana - 50
        //                         foe.hp = 0
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 default:
        //                     break;
        //             }
        //             break;
        //         case "Air".toLowerCase():
        //             let airSelection = readline.question(`Which spell?`)
        //             switch (airSelection) {
        //                 case "Wind Cutter".toLowerCase():
                            
        //                     break;
        //                 case "Evade".toLowerCase():

        //                     break;
        //                 case "Daze".toLowerCase():

        //                     break;
        //                 case "Hurricane".toLowerCase():
        //                     if (player.mana >= 50) {
        //                         player.mana - 50
        //                         foe.hp = 0
        //                     } else {
        //                         console.log("Insufficient mana")
        //                     }
        //                     break;
        //                 default:
        //                     break;
        //             }
        //             break;
        //         default:
        //             console.log(`You don't have a ${itemSelection} in your inventory, ${player.name}...`)
        //             break;
        //     }
        //     break;