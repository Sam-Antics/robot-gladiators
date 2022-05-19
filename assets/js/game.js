// this prompts the player for the robot's name and sets the player's variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100; 
var playerAttack = 10;
var playerMoney = 10;

// sets up the enemy robot's info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; 
var enemyAttack = 12;

console.log(enemyNames, enemyNames.length, enemyNames[0], enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            
            // if player chooses to skip, confirm and then stop the loop
            if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                //if yes (true), leave fight
                if (confirmSkip) {
                   window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    //subtract money from player for skipping
                     playerMoney = playerMoney - 10;
                      console.log("playerMoney", playerMoney);
                    break;
                }
            }

            // subtract the value of playerAttack from enemyHealth and update enemyHealth with the result
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console to confirm that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
                    
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                
                //award player money for winning
                playerMoney = playerMoney +20;

                // leave while() loop since enemy has died
                break;
                } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
                    
            // Subtract the value of enemyAttack from playerHealth and update playerHealth with the result
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
                        
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
                        
        } // end of while loop
    }; // end of fight function

                   // use debugger to pause script from running and check what's going on at that moment in the code
                    // debugger;

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10; 

    // fight each robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyNames.length; i++) {
            // if player is still alive, keep fighting
            if (playerHealth > 0) {
                // let player know what round they're in
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
                
                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];
    
                // reset enemyHealth before starting new fight
                enemyHealth = 50;
    
    
                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);

                //if the player is still alive and we're not on the last enemy in the array
                if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
    }//end of if statement
}; // end of endGame()

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
        if (playerMoney >= 7) {
             
            window.alert("Refilling player's health by 20 for 7 dollars.");
            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money.");
        }
        break;

        case "UPGRADE": //new case
        case "upgrade":
        if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money.");
        }
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

//start the game when the page loads
startGame();

//PSEUDOCODE FOR NEW FEATURES    
/*    --IF PLAYER DEFEATS A BOT OR SKIPS A FIGHT (AND THERE ARE MORE ROBOTS TO FIGHT), 
    THEY ARE ASKED IF THEY WANT TO VISIT THE SHOP
            * Ask the player if they want to shop
            * If no, continue as normal
            * If yes, call the shop() function
            * In shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
                    If refill, subtract money points from player and increase health
                    If upgrade, subtract money points and increase attack 
                    If leave, alert goodbye and exit function
                    If other invalid option, call shop() again*/
