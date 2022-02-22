const readline = require("readline-sync");
const Player = require("./player");
const Rat = require ("./rat");
const Wolf = require ("./wolf");
const Goblin = require ("./goblin");
const Troll = require ("./troll");
let inGame = true;
let playerHeadCount = 0;



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
            
while (inGame === true && playerHeadCount <=3) {
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
        let raceSelection = readline.keyIn(`Innkeeper: \n"What ARE you, exactly?" \nSelect one of the following races: \n'H' - ${raceOptions[0]} \n'E' - ${raceOptions[1]} \n'D' - ${raceOptions[2]} \n'M' - ${raceOptions[3]}\n`).toLowerCase();
        switch (raceSelection) {
            case "h":
                this.player.race = raceOptions[0].toLowerCase();
                console.log(`Innkeeper: \n"Well, bless my soul! It's nice to see another ${player.race} being; \nstill alive that is!"`);
                professionSelection();
                break;
            case "e":
                this.player.race = raceOptions[1].toLowerCase();
                console.log(`Innkeeper: \n"Well met, friend! I've never seen an ${player.race} in the flesh before; \nYou're a long way from Southwood, friend!"`);
                professionSelection();
                break;
            case "d":
                this.player.race = raceOptions[2].toLowerCase();
                console.log(`Innkeeper: \n"Well met, friend! I've seen the odd ${player.race} here and there; \nbut it's been a while since we've seen *your* kind here..."`);
                professionSelection();
                break;
            case "m":
                this.player.race = raceOptions[3].toLowerCase();
                console.log(`Innkeeper: \n"Well met, little one! I'm surprised a ${player.race} would want to leave Halfton; \nAnd right before dinner, no less!"`);
                professionSelection();
                break;
            default:
                console.log("Please enter either 'H', 'E', 'D', or 'M'. \nCheck your spelling: \nIt will matter from here on out!");
            }
        }
    };
    function professionSelection() {
        while (incoherent === true) { 
            let professionSelection = readline.keyIn(`"Okay... and what exactly IS your profession?" \nSelect one of the following classes: \n'K' - ${professionOptions[0]} \n'R' - ${professionOptions[1]} \n'M' - ${professionOptions[2]} \n'T' - ${professionOptions[3]}\n`).toLowerCase();
            switch (professionSelection) {
                case "k":
                    this.player.profession = professionOptions[0].toLowerCase();
                    console.log(`Innkeeper: \n"And here I was, thinking chivalry was dead! \nYou have no idea how happy I am to see another ${player.profession}!"`);
                    nameSelection();
                    break;
                case "r":
                    this.player.profession = professionOptions[1].toLowerCase();
                    console.log(`Innkeeper: \n"The bow was a dead giveaway; ${player.profession}s NEVER go without their hunting equipment!"`);
                    nameSelection();
                    break;
                case "m":
                    this.player.profession = professionOptions[2].toLowerCase();
                    console.log(`Innkeeper: \n"A ${player.profession}... \n Now THAT'S something you don't see everyday..."`)
                    nameSelection();
                    break;
                case "t":
                    this.player.profession = professionOptions[3].toLowerCase()
                    console.log(`Innkeeper: \n"I thought I smelled a rat! \nYou'd better keep your hands to yourself, ${player.profession}; \npeople lose hands for stealing here!"`);
                    nameSelection();
                    break;
                default:
                    console.log("Please enter either 'K', 'R', 'M', or 'T'.");
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

function adventureMenuSelection(player, playerHeadCount) {
    let inOpenWorld = true;
    while (inOpenWorld === true) {
        let adventureMenuSelection = readline.keyIn("Press a key: \n'W' - Walk \n'U' - Use Item \n'P' - print stats \n'Q' - quit  \n").toLowerCase();
        switch (adventureMenuSelection) {
            case "w":
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
            case "u":
                let indecisive = true;
                while (indecisive === true) {
                    let itemSelection = readline.keyIn(`Which item would you like to use, ${player.name}? \n${player.name}'s Inventory: \n${player.inventory} \n'H' - Health Potion \n'B' - Back \n`).toLowerCase()
                    switch (itemSelection) {
                        case "h":
                            for (let i = 0; i < player.inventory.length; i++) {
                                if("Health Potion".includes(player.inventory[i])){
                                    healUp(player);
                                }
                            }   
                            function healUp (player) {
                                if (player.hp === 100){
                                    console.log(`Your health is already at ${player.hp}! You should save that for later...`);
                                } else {
                                    let playerCurrentHealth = player.hp + 100;
                                    player.hp = playerCurrentHealth;
                                    if (player.hp > 100){
                                        let playerCurrentHealth = 100
                                        player.hp = playerCurrentHealth;
                                        player.inventory.pop();
                                        console.log(`Your Inventory: ${player.inventory}`)
                                    }
                                    console.log(`${player.name}'s health: \n${player.hp}`)
                                }

                            }
                            indecisive = false;
                            break;
                        case "b":
                            indecisive = false
                            break;
                        default:
                            console.log(`You don't have a(n) ${itemSelection.toLowerCase()} in your inventory, ${player.name}...`)
                            break;
                    }
                }
                break;
            case "p".toLowerCase():
                inventory(player);
                break;
            case "q".toLowerCase():
                console.log(`Goodbye, ${player.name}!`)
                inGame = false;
                inOpenWorld = false;
                break;
            default:
                console.log(`${player.name}, you must press 'W', 'P', or 'Q'`);
                break;
                }
            }                                                     
        }
function inventory(player) {
    console.log(`Name: ${player.name} \nRace: ${player.race} \nClass: ${player.profession} \nHealth: ${player.hp} \nInventory: ${player.inventory}`);
}

function summonFoe(player) {
    let summoning = Math.floor(Math.random() * 4);
    if (summoning === 0){
        let foe = new Rat;
        readyFight(player, foe);
    }else if (summoning === 1){
        let foe = new Wolf
        readyFight(player, foe);
    }else if (summoning === 2){
        let foe = new Goblin;
        readyFight(player, foe);
    }else if (summoning === 3){
        let foe = new Troll;
        readyFight(player, foe);
    }
}

function readyFight(player, foe) {
    let playerCurrentHealth = player.hp;
    let foeCurrentHealth = foe.hp;
    let inCombat = true;
    console.log(`A ${foe.name.toLowerCase()} is attacking! \nHealth: ${foe.hp} \nAttack: ${foe.atk}`);
    while (inCombat === true) {
        playerCombatMenu(player, foe)
        function playerCombatMenu(player, foe) {
            let indecisive = true;
            while (indecisive === true) { 
                let firstSelection = readline.keyIn(`Quickly, ${player.name}; take action! \n'A' - Attack \n'U' - Use Item \n'F' - Flee \n`).toLowerCase();
                switch (firstSelection) {
                    case "a":
                        let dmg = Math.floor(Math.random() * player.atk) + 1;
                         let foeCurrentHealth = foe.hp - dmg; 
                         foe.hp = foeCurrentHealth;
                        console.log(`The ${foe.name.toLowerCase()} takes ${dmg} damage! \n${foe.name}'s health: ${foe.hp}`);
                        if (foe.hp <= 0) {
                            let addToHeadCount = playerHeadCount + 1;
                            playerHeadCount = addToHeadCount;
                            if (playerHeadCount === 4) {
                                console.log(`${player.name}, the ${player.race} ${player.profession} has successfully purged Avalon! \nYou may continue to hunt monsters, \nor pres 'Q' until you've exited the game! \n(Still working out a few bugs)`);
                                inCombat = false;
                                inOpenWorld = false;
                                inGame = false;
                            } else {
                                console.log(`Current Head Count: ${playerHeadCount}`)
                                console.log(`The ${foe.name.toLowerCase()} is defeated; rejoice!`);
                                player.inventory.push("Health Potion");
                                console.log(`As the ${foe.name.toLowerCase()} dies, it drops a health potion! \nYou add it to your inventory...`)
                                indecisive = false;
                                inCombat = false;
                                adventureMenuSelection(player);
                            }
                        } else {
                            indecisive = false
                            foeCombat(player, foe)
                        }
                        function foeCombat(player, foe) {
                            let dmg = Math.floor(Math.random() * foe.atk) + 1; 
                            let playerCurrentHealth = player.hp - dmg;
                            player.hp = playerCurrentHealth;
                            console.log(`${player.name} takes ${dmg} damage! \nYour health: ${player.hp}`);
                        if (player.hp <= 0){
                            console.log(`${player.name}, the ${player.race} ${player.profession}, has been slain by a ${foe.name.toLowerCase()}! \nBetter luck next time, ${player.name}..`)
                            inCombat = false;
                            inOpenWorld = false;
                            inGame = false;
                        } else {
                                playerCombatMenu(player, foe);
                        }
                    }
                        break;
                    case "u":
                        let indecisiveItem = true;
                        while (indecisiveItem === true) {
                            let itemSelection = readline.keyIn(`Which item would you like to use, ${player.name}? \n${player.name}'s Inventory: \n${player.inventory} \n'H' - Health Potion \n'B' - Back \n`).toLowerCase()
                            switch (itemSelection) {
                                case "h":
                                    for (let i = 0; i < player.inventory.length; i++) {
                                        if("Health Potion".includes(player.inventory[i])){
                                            healUp(player);
                                        }
                                    }   
                                    function healUp (player) {
                                        if (player.hp === 100){
                                            console.log(`Your health is already at ${player.hp}! You should save that for later...`);
                                        } else {
                                            let playerCurrentHealth = player.hp + 100;
                                            player.hp = playerCurrentHealth;
                                            if (player.hp > 100){
                                                let playerCurrentHealth = 100
                                                player.hp = playerCurrentHealth;
                                                player.inventory.pop();
                                            }
                                            console.log(`${player.name}'s health: \n${player.hp}`)
                                        }
        
                                    }
                                    indecisiveItem = false;
                                    break;
                                case "Back".toLowerCase():
                                    indecisiveItem = false
                                    break;
                                default:
                                    console.log(`You don't have a(n) ${itemSelection.toLowerCase()} in your inventory, ${player.name}...`)
                                    break;
                            }
                        }
                        break;
                    case "f":
                        console.log(`You try to run away from the ${foe.name}`)
                        results(player, foe);
                        function results(player, foe) {
                            let finalResults = Math.floor(Math.random() * 2);
                                if (finalResults === 0) {
                                    console.log(`You manage to outrun the ${foe.name.toLowerCase()}, and make it to safety!`);
                                    indecisive = false;
                                    inCombat = false;
                                    adventureMenuSelection(player);
                                } else {
                                    console.log(`You can't outrun the ${foe.name.toLowerCase()}. \nYou must stand and fight, ${player.name}!`);
                                    foeCombat(player, foe);
                                }
                            }
                        }
                    break; 
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
            
            //         let firstSelection = readline.question(`A(n) ${foe.name.toLowerCase()} is attacking! \nQuickly, ${player.name}; take action! \n${element} \nAttack \nUse Item \nFlee`);
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
        //             let fireSelection = readline.question(`Which spell? \nFireball (-2m, +4d) \nPower Up (-5m, +5d, -1turn) \nIgnite (-20m, -20% ${foe.name.toLowerCase()} hp/turn) \nMeteor`)
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