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
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let mySprite2 = sprites.create(img`
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
mySprite2.vx += 40
mySprite2.vy += 60
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(11)
mySprite.say("yay", 2000)
pause(2000)
mySprite.say("we did it!")
mySprite2.say("yippee!")
