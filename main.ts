function setVelocity (direction: number) {
    RAD = 3.141592653589793 / 180
    _directionInRadians = direction * RAD
    _velocityX = SPEED * Math.cos(_directionInRadians)
    _velocityY = SPEED * Math.sin(_directionInRadians)
    roomba.setVelocity(_velocityX, _velocityY)
}
function rotate (direction: string) {
    if (direction == "left") {
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
let TURN_RATE = 0
let SPEED = 0
let roombaDirection = 0
let roomba: Sprite = null
roomba = sprites.create(assets.image`roomba`, SpriteKind.Player)
// 0-1 Radians
roombaDirection = 0
SPEED = 20
TURN_RATE = 2
tiles.setCurrentTilemap(tilemap`livingroom`)
scene.cameraFollowSprite(roomba)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        rotate("right")
    } else if (controller.left.isPressed()) {
        rotate("left")
    } else {
    	
    }
    setVelocity(roombaDirection)
})
