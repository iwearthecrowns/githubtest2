controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    mySprite2.x += -1
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d d d d d d d . . . . 
. . . . d d d d d d d d d . . . 
. . . . d d d d d d d d d . . . 
. . . . d d f d d d f d d . . . 
. . . . d d d d d d d d d . . . 
. . . . d d d d d d d d d . . . 
. . . . d f f d d d f f d . . . 
. . . . d d f f f f f d d . . . 
. . . . . d d d d d d d . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.player1.moveSprite(mySprite)
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e f e e e f e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e e e e e e . . . 
. . . . e f f e e e f f e . . . 
. . . . e e f f f f f e e . . . 
. . . . . e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite2.setPosition(100, 60)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(11)
mySprite.say("yay", 2000)
pause(2000)
mySprite.say("we did it!")
