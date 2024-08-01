namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
	
})
function endLevel () {
    for (let value of obstacles) {
        sprites.destroy(value)
    }
    for (let value of debris) {
        sprites.destroy(value)
    }
}
function loadLevel (level: number) {
    currentLevel = level
    _temp_sprite = sprites.create(assets.image`table`, SpriteKind.Obstacle)
    _temp_sprite.setPosition(randint(0, 200), randint(0, 200))
    obstacles.push(_temp_sprite)
}
function setVelocity (direction: number) {
    RAD = 3.141592653589793 / 180
    _directionInRadians = direction * RAD
    _velocityX = SPEED * Math.cos(_directionInRadians)
    _velocityY = SPEED * Math.sin(_directionInRadians)
    roomba.setVelocity(_velocityX, _velocityY)
}
function rotate (direction: string) {
    if (direction == "right") {
        roombaDirection += TURN_RATE
    } else {
        roombaDirection += TURN_RATE * -1
    }
    if (roombaDirection < 0) {
        roombaDirection = 360
    } else if (roombaDirection > 360) {
        roombaDirection = 0
    } else {
    	
    }
    transformSprites.rotateSprite(roomba, roombaDirection)
}
let _velocityY = 0
let _velocityX = 0
let _directionInRadians = 0
let RAD = 0
let _temp_sprite: Sprite = null
let debris: Sprite[] = []
let obstacles: Sprite[] = []
let currentLevel = 0
let TURN_RATE = 0
let SPEED = 0
let roombaDirection = 0
let roomba: Sprite = null
roomba = sprites.create(assets.image`roomba`, SpriteKind.Player)
// 0-1 Radians
roombaDirection = 0
SPEED = 20
TURN_RATE = 2
currentLevel = 1
obstacles = []
debris = []
tiles.setCurrentTilemap(tilemap`livingroom`)
scene.cameraFollowSprite(roomba)
loadLevel(currentLevel)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        rotate("right")
    } else if (controller.left.isPressed()) {
        rotate("left")
    } else {
    	
    }
    setVelocity(roombaDirection)
})
