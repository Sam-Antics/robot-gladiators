// this prompts the player for the robot's name
var playerName = window.prompt("What is your robot's name?");
// this sets the variable "playerHealth" with a value of 100
var playerHealth = 100;
// this sets the variable "playerAttack" with a value of 10
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// sets up the enemy robot's info
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // subtract the value of playerAttack from enemyHealth and update enemyHealth with the result
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console to confirm that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

};




// call the fight function
fight();