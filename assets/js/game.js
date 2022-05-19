/* GAME FUNCTIONS */

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1 ) + min);
    
    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    
    // use toLowerCase method to make whatever string is entered lower case
    promptFight = promptFight.toLowerCase();

    // If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.prompt("Are you sure you'd like to quit?");

        // if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;

            //return true if the player wants to leave.
            return true;
        }
    }
    return false;
}


// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
    
    while(playerInfo.health > 0 && enemy.health > 0) {
        // call fightOrSkip function to get response
        if (fightOrSkip()) {
            // if true, leave fight by breaking loop
            break;
        }
        
        // generate random damage value based on player's attack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        
        // subtract the value of playerInfo.attack from enemy.health and update enemy.health with the result
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console to confirm that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            
            //award player money for winning
            playerInfo.money = playerInfo.money +20;
            
            // leave while() loop since enemy has died
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // generate random damage based on enemy's attack
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
            // Subtract the value of enemy.attack from playerInfo.health and update playerInfo.health with the result
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
                
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while loop if player is dead
            break;
         } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    } // end of while loop
}; // end of fight function
    
//function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.reset();
        
    // fight each robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they're in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            
            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
                
            //if the player is still alive and we're not on the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if the player want to go to the shop
                var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");
                
                //if yes, take them to the store()
                if (storeConfirm) {
                shop();
                }
            }
        // if player isn't alive, stop the game
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        } // end of if/else
    } //end of for loop

    
    // after the loop ends, player is either out of health or enemies to fight, so run endGame()
    endGame();
}; //end of startGame function

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.")
    } //end of if statement
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}; // end of endGame()

// go to the shop between battles
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
        
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE": //new case
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");
            //do nothing, function ends
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
                    
            //call shop() again to make player pick a valid option
            shop();
            break;
    } //end switch
}; //end shop()

// function to set name
var getPlayerName = function() {
    var name = "";
    
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    
    console.log("Your robot's name is " + name);
    return name;
} // end getPlayerName function

/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */

// player information
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money.");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money.");
        }
    }
};

// enemy information
var enemyInfo = [
    { 
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]["attack"]);
/* END GAME INFORMATION VARIABLES */

/* RUN GAME */
startGame();


