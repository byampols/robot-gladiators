var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //alert players that the round has started
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtact the value of playerAttack from the value of enemyHealth and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skuo
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true) leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight! Goodbye!");
            playerMoney -= 2;
        //if no (false) ask question again by running fight() again
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i])
}