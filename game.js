const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let isJumping = false;
let jumpHeight = 0;

// Character properties
const character = {
    x: 50,
    y: canvas.height - 50,
    width: 30,
    height: 30,
    color: 'red',
};

function drawCharacter() {
    ctx.fillStyle = character.color;
    ctx.fillRect(character.x, character.y, character.width, character.height);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharacter();
    if (isJumping) {
        if (jumpHeight < 100) {
            character.y -= 5; // Jumping up
            jumpHeight += 5;
        } else {
            isJumping = false; // Start falling
        }
    } else {
        if (character.y < canvas.height - character.height) {
            character.y += 5; // Falling down
        }
    }
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping) {
        isJumping = true; // Start jumping
        jumpHeight = 0;
    }
});

gameLoop(); // Start the game loop
