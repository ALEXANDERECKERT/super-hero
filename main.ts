tiles.loadMap(tiles.createMap(tilemap`level2`))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f f . . f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f . . . . . f . . . . . 
    `, SpriteKind.Player)
let MySpriteCameraPhantom = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(MySpriteCameraPhantom)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(10, 100)
game.onUpdate(function () {
    MySpriteCameraPhantom.setPosition(mySprite.x, mySprite.y - 50)
})
