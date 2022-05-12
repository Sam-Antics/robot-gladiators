// this prompts the player for the robot's name and sets the player's variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// sets up the enemy robot's info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 9; //change back to 50 when debugging is done
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
    
    // repeat and execute as long as the enemy is alive
    while(enemyHealth > 0) {

        
        // prompt the player to choose to fight or not & log answer
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(
            playerName + " chose to " + promptFight + ". "
            );
            
            // if player chooses to fight, then fight
            if (promptFight === "fight" || promptFight === "FIGHT") {
                // subtract the value of playerAttack from enemyHealth and update enemyHealth with the result
                enemyHealth = enemyHealth - playerAttack;
                // Log a resulting message to the console to confirm that it worked.
                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                    );
                    
                    // check enemy's health
                    if (enemyHealth <= 0) {
                        window.alert(enemyName + " has died!");
                    } else {
                        window.alert(enemyName + " still has " + enemyHealth + " health left.");
                    }
                    
                    // Subtract the value of enemyAttack from playerHealth and update playerHealth with the result
                    playerHealth = playerHealth - enemyAttack;
                    // Log a resulting message to the console to confirm that it worked
                    console.log(
                        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                        );
                        
                        // check player's health
                        if (playerHealth <= 0) {
                            window.alert(playerName + " has died!");
                        } else {
                            window.alert(playerName + " still has " + playerHealth + " health left.");
                        }
                        
                        // if player chooses to skip, run this code
                    } else if (promptFight === "skip" || promptFight === "SKIP") {
                        //confirm player wants to skip
                        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                        
                        //if yes (true), leave fight
                        if (confirmSkip) {
                            window.alert(playerName + " has decided to skip this fight. Goodbye!");
                            //subtract money from player for skipping
                            playerMoney = playerMoney - 2;
                        }
                        
                        //if no (false), ask question again by running fight() again
                        else {
                            fight();
                        }
                        window.alert(playerName + " has chosen to skip the fight!");
                    } else {
                        window.alert("You need to chose a valid option. Try again!");
                    }
    }
}; // end of fight function
                
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}