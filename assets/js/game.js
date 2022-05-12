// this prompts the player for the robot's name and sets the player's variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// sets up the enemy robot's info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; 
var enemyAttack = 12;

/* You can also log multiple values at once like this
   This line logs the stats for the player on the console 
console.log(playerName, playerAttack, playerHealth); */

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot       
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    
    // repeat and execute as long as theplayer and enemy are alive
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
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
                        
    } // end of while loop
}; // end of fight function
                
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}