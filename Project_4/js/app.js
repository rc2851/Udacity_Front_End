//Constants
var constants = {
    PLAYER_START_X: 200, //Player starting position X axis
    PLAYER_START_Y: 320, //Player starting position Y axis
    PLAYER_MOVE_Y: 82, //Player pixel movement Y axis
    PLAYER_MOVE_X: 100, //Player pixel movement X axis
    PLAYER_MOVE_MAX: 420, //Player maximum pixel movement
    PLAYER_MOVE_MIN: -20, //Player minimum pixel movement
    ENEMY_COUNT: 4, //Number of enemies
    ENEMY_SPEED_INCREASE: 1.08, //Increase enemy speed on each lap
    ENEMY_ROW_1: 60, //Enemy row 1 Y axis value
    ENEMY_ROW_2: 145, //Enemy row 2 Y axis value
    ENEMY_ROW_3: 230, //Enemy row 3 Y axis value
    WATER_SCORE: 1, //Change score value when player reaches water
    COLLISION_SCORE: -1, //Change score value when player has a collision with the enemy
    GAME_TIME: 1 //Game time in minutes
};

//Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //Set enemy start position 
    this.x = -100;
    //Set enemy spped
    this.speed = Math.floor((Math.random() * 100) + 10);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    //Check is enemy is off the grid
    if (this.x > 500) {
        //Change enemy speed
        this.speed = this.speed * constants.ENEMY_SPEED_INCREASE;
        //move enemy back to the left side
        this.x = -100;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//Array for enemies
var allEnemies = [];

//Instantiate enemy
for (i = 1; i <= constants.ENEMY_COUNT; i++) {
    var enemy = new Enemy("killer" + i);

    //Set row for instantiated enemy 
    switch (i) {
        case 1:
            enemy.y = constants.ENEMY_ROW_1;
            break;
        case 2:
            enemy.y = constants.ENEMY_ROW_2;
            break;
        case 3:
            enemy.y = constants.ENEMY_ROW_3;
            break;
        case 4:
            enemy.y = constants.ENEMY_ROW_1;
    }
    //Put enemy in array
    allEnemies.push(enemy);
};

//Player class
function Player(name) {
    this.name = name;
    this.sprite = 'images/char-boy.png';
    this.moveToX = constants.PLAYER_START_X;
    this.moveToY = constants.PLAYER_START_Y;
    this.isPlaying = 'true';
    //console.log("Player name: " + this.name);
};

//Instantiate player
var player = new Player("player1");

//Update player coordinates
Player.prototype.update = function() {
    this.x = this.moveToX;
    this.y = this.moveToY;
};

//Score element
var playerScore = window.document.getElementById("points");

//Render player using x and y coordinates
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //Check if player made it to the water
    if (this.y < constants.ENEMY_ROW_1) {
        //Player scored, move player back to start position
        //setTimeout(player.reset, 3000);
        player.reset();
        //Increase score
        player.score(constants.WATER_SCORE);
    };
};

Player.prototype.reset = function() {
    //Reset player to start position
    player.moveToX = constants.PLAYER_START_X;
    player.moveToY = constants.PLAYER_START_Y;
};

Player.prototype.score = function(scoreValue) {
    //Change player score
    playerScore.innerHTML = (Number(playerScore.innerHTML) + scoreValue);
};

//Stop the game, player clicked stop button
player.stop = function() {
    player.isPlaying = 'false';
    //Stop timer
    clearInterval(gameTime);
    displayCountDown.textContent = "";
    //Display game terminated
    timerDiv.textContent = "GAME TERMINATED";
    //Reset player to start position
    player.reset();
};

//Start the game, player clicked start button
player.start = function() {
    //reload the page
    window.location.reload();
};

//Change player coordinate based on key pressed, esc key terminates the game
player.handleInput = function(key) {
    switch (key) {
        case "left":
            //Move player cooridinated left one block
            if ((this.x - constants.PLAYER_MOVE_X) >= constants.PLAYER_MOVE_MIN) {
                this.moveToX = this.x - constants.PLAYER_MOVE_X;
            };
            break;
        case "up":
            //Move player cooridinated up one block
            if ((this.y - constants.PLAYER_MOVE_Y) >= constants.PLAYER_MOVE_MIN) {
                this.moveToY = this.y - constants.PLAYER_MOVE_Y;
            }
            break;
        case "right":
            //Move player cooridinated right one block
            if ((this.x + constants.PLAYER_MOVE_X) <= constants.PLAYER_MOVE_MAX) {
                this.moveToX = this.x + constants.PLAYER_MOVE_X;
            };
            break;
        case "down":
            //Move player cooridinated down one block
            if ((this.y + constants.PLAYER_MOVE_Y) <= constants.PLAYER_MOVE_MAX) {
                this.moveToY = this.y + constants.PLAYER_MOVE_Y;
            };
            break;
        case "esc":
            //Terminate the game
            player.stop();
    }
};

//Collision check
Player.collisionCheck = function() {
    //check each enemy for collision with player
    allEnemies.forEach(function(enemy) {
        if (Math.abs(enemy.x - player.x) < 75 && Math.abs(enemy.y - player.y) < 50) {
            //Collision event, Reset player to start position
            player.reset();
            //Decrease player score
            player.score(constants.COLLISION_SCORE);
        };
    });
};

//Start game count down
function startCountDown(duration, displayCountDown) {
    var timer = duration;
    gameTime = setInterval(function() {
        var minutes = parseInt(timer / 60);
        var seconds = parseInt(timer % 60);
        //Add leading zero if minutes less than 10
        if (minutes < 10) {
            minutes = "0" + minutes;
        } else {
            //minutes = minutes < 10 ? "0" + minutes : minutes;
            minutes = minutes
        };
        //Add leading zero if seconds is less than 10
        if (seconds < 10) {
            seconds = "0" + seconds;
        } else {
            //seconds = seconds < 10 ? "0" + seconds : seconds;
            seconds = seconds
        };
        //Display time left
        displayCountDown.textContent = minutes + ":" + seconds;

        //Check if game is over
        if (timer === 0) {
            //Stop timer
            clearInterval(gameTime);
            //Stop game
            player.stop();
            //Display game over
            displayCountDown.textContent = "";
            timerDiv.textContent = "GAME OVER";
        };
        //Decrement timer
        timer = timer - 1;

    }, 1000);
}

window.onload = function() {
    //Set game time in variable
    var gameMinutes = 60 * constants.GAME_TIME;
    //Element that displays time left
    displayCountDown = document.querySelector("#time");
    timerDiv = document.querySelector("#timer");
    //Start count down
    startCountDown(gameMinutes, displayCountDown);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        27: 'esc',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});