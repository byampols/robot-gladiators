var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and excecute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true) leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight! Goodbye!");
                playerMoney -= 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtact the value of playerAttack from the value of enemyHealth and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney += 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        
    }
};


for(var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1))
    } else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}