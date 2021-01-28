controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySpritebottom.isHittingTile(CollisionDirection.Bottom) || mySpritebottom.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        mySpritebottom.vy = -70
    }
})
let mySpritebottom: Sprite = null
scene.setTileMap(img`
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    .22222................
    ....9.22222...........
    ....9......22222......
    ....9...........222...
    ......................
    ......................
    ..c.9.........2222222.
    .fc.9..2222222........
    .222222...............
    ......................
    `, TileScale.Eight)
scene.setTile(2, img`
    2 2 2 2 2 2 2 2 
    . . . 2 2 . . . 
    . . . 2 2 . . . 
    . . 2 . . 2 . . 
    . 2 . . . . 2 . 
    . 2 . . . . 2 . 
    2 . . . . . . 2 
    2 2 2 2 2 2 2 2 
    `, true)
scene.setTile(12, img`
    c b b b b b b c 
    b c c c c c c b 
    c b b b b b b c 
    c c c c c c c c 
    b c c c c c c b 
    c b b b b b b c 
    c c c c c c c c 
    b c c c c c c b 
    `, false)
scene.setTile(9, img`
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    `, false)
mySpritebottom = sprites.create(img`
    . d d f f f . . 
    . d d d d d . . 
    2 2 8 2 2 8 2 . 
    2 8 5 8 8 5 2 . 
    d 8 8 8 8 8 d . 
    . 8 8 8 8 8 . . 
    . 8 8 . 8 8 . . 
    . e e . e e . . 
    `, SpriteKind.Player)
mySpritebottom.ay = 100
scene.cameraFollowSprite(mySpritebottom)
controller.moveSprite(mySpritebottom, 50, 0)
let mySpriteTop = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . 2 2 2 1 . . . 
    . 2 2 2 2 2 2 2 
    . e e d d d . . 
    . d d f d f . . 
    . d d d d d d . 
    `, SpriteKind.Player)
mySpriteTop.setFlag(SpriteFlag.GhostThroughWalls, true)
mySpriteTop.setFlag(SpriteFlag.GhostThroughTiles, true)
mySpriteTop.setFlag(SpriteFlag.GhostThroughSprites, true)
let myTile = scene.getTile(1, 29)
scene.place(myTile, mySpritebottom)
let tile_list = scene.getTilesByType(9)
game.onUpdate(function () {
    mySpriteTop.setPosition(mySpritebottom.x, mySpritebottom.y - 8)
    if (mySpritebottom.bottom == tiles.tilemapRows() * tiles.tileWidth()) {
        game.reset()
    }
})
