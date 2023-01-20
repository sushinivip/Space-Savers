namespace SpriteKind {
    export const Shoot = SpriteKind.create()
    export const Protect = SpriteKind.create()
}
function randomTrashpositiosning () {
    trashSpawner = randint(1, 8)
    console.log(trashSpawner)
    if (trashSpawner == 1) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), 10, 10)
        spriteTrash.setPosition(doTrashSpawnPositionX1(), 0)
    } else if (trashSpawner == 2) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), 10, 10)
        spriteTrash.setPosition(0, doTrashSpawnPositionY1())
    } else if (trashSpawner == 3) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), -10, 10)
        spriteTrash.setPosition(doTrashSpawnpositionX2(), 0)
    } else if (trashSpawner == 4) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), -10, 10)
        spriteTrash.setPosition(160, doTrashSpawnPositionY1())
    } else if (trashSpawner == 5) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), -10, -10)
        spriteTrash.setPosition(160, doTrashSpawnpositionY2())
    } else if (trashSpawner == 6) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), -10, -10)
        spriteTrash.setPosition(doTrashSpawnpositionX2(), 120)
    } else if (trashSpawner == 7) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), 10, -10)
        spriteTrash.setPosition(doTrashSpawnPositionX1(), 120)
    } else if (trashSpawner == 8) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(arrayTrashes), 10, -10)
        spriteTrash.setPosition(0, doTrashSpawnpositionY2())
    } else {
    	
    }
    spriteTrash.setKind(SpriteKind.Projectile)
}
function doTrashSpawnPositionX1 () {
    return arrayTrashPositionsX1[randint(0, arrayTrashPositionsX1.length - 1)]
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Shoot, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprite.destroy(effects.fire, 500)
})
function doTrashSpawnPositionY1 () {
    return arrayTrashPositionsY1[randint(0, arrayTrashPositionsY1.length - 1)]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    SpaceSaverLives += -1
})
function doTrashSpawnpositionY2 () {
    return arrayTrashPositionsY2[randint(0, arrayTrashPositionsY2.length - 1)]
}
sprites.onOverlap(SpriteKind.Protect, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
function doTrashSpawnpositionX2 () {
    return arrayTrashPositionsX2[randint(0, arrayTrashPositionsX2.length - 1)]
}
function getShipImg (orientation: number, livesLeft: number, pressed: number) {
    if (livesLeft > 0) {
        return ships[2 * (2 - livesLeft) + pressed][orientation - 1]
    } else {
        return img`
            ............................
            ....................7c7.....
            .....99.............777.....
            .....d..............777c....
            .....9....c.........5557....
            ..........7.........24......
            .....c....7c9........2......
            .....c...7554...............
            .....c..c7f42..7c...........
            ....c77........7c...........
            ...c77c........ff...c7...c..
            ..c7cc8........ff...9c7..c..
            ..7cfff.............dc7c.c..
            ..7ff55.............ff5777..
            .....5442.7.........f554c7..
            .......22.c........9.224....
            ......8...f......f.ff722....
            .............f...f.fc7......
            ............................
            ......7.................7c..
            ......c..............554c7c.
            ...............ffff..f422c7.
            ...............f245..f22c77.
            .....2...c.f22.f224..f8cc7..
            ..c542.....f42.77.7777c77c..
            ..7727.....572.c7.77........
            ....77.....7.7.7..7c........
            .....7.....7.7..............
            `
    }
}
function getRandomElement (arrayTrashes: Image[]) {
    return arrayTrashes[randint(0, arrayTrashes.length - 1)]
}
let buttonPressed = 0
let lastOrientation = 0
let spriteTrash: Sprite = null
let trashSpawner = 0
let ships: Image[][] = []
let arrayTrashPositionsY2: number[] = []
let arrayTrashPositionsX2: number[] = []
let arrayTrashPositionsY1: number[] = []
let arrayTrashPositionsX1: number[] = []
let arrayTrashes: Image[] = []
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff11ffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1fffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9ffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff11fffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffff1fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1ffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff1fffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff1fffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869ffffffffffffffffffffffffffffffff1ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1ffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869fffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1fffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886ffffffffffffffffffffffffff1ffffffffffffffffffff
    fffffffffffffffff1ffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1ffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1ffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff1fffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1ffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let SpaceSaver_00037 = sprites.create(img`
    ........7c7........
    ........777........
    .......c777c.......
    .......7ccc7.......
    ...c...7c9c7...c...
    ...c..7c9d9c7..c...
    ...c.c7cd9dc7c.c...
    ..c7777c999c7777c..
    .c77cc7cd9dc7cc77c.
    c7cc88c79997c88cc7c
    7c888887c9c788888c7
    77c8888c777c8888c77
    .7cc8ccc777ccc8cc7.
    .c77c7777c7777c77c.
    ....777.777.777....
    .....77.7c7.77.....
    .....c7..7..7c.....
    `, SpriteKind.Player)
let Shield = sprites.create(img`
    ........99999999999........
    ......996666666666699......
    .....966...........669.....
    ....966.............669....
    ...96.................69...
    ..96...................69..
    .966...................669.
    .96.....................69.
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    96.......................69
    .96.....................69.
    .966...................669.
    ..96...................69..
    ...96.................69...
    ....966.............669....
    .....9.6...........669.....
    ......996666666666699......
    ........99999999999........
    `, SpriteKind.Protect)
Shield.setPosition(200, 210)
let SpaceSaverLives = 2
let ShieldOn = 0
let shieldDestroyed = false
arrayTrashes = [
assets.image`Trashalso1`,
assets.image`Trash1`,
assets.image`Trashalso2`,
assets.image`Trash1`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f c c b b c . . . . . 
    . . . f c c b b b b b c . . . . 
    . . f c f f f b b b d c . . . . 
    . . f c f b b f f b d c . . . . 
    . f c b f b b b b d d c . . . . 
    . f c b b f b b d d c . . . . . 
    . f b b b f b d d d c . . . . . 
    . f b b b b d d d c . . . . . . 
    . . c b d d d c c . . . . . . . 
    . . . c c c c . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
arrayTrashPositionsX1 = [
0,
10,
20,
30,
40,
50,
60,
70,
80,
-10
]
arrayTrashPositionsY1 = [
0,
10,
20,
30,
40,
50,
60,
-10
]
arrayTrashPositionsX2 = [
80,
90,
100,
110,
120,
130,
140,
150,
160,
170
]
arrayTrashPositionsY2 = [
60,
70,
80,
90,
100,
110,
120,
130
]
let spriteShoot2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 9 . 
    . . . . . . . . . . . . . . 9 . 
    . . . . . . . . . . . . . . 9 . 
    . . . . . . . . . . . . . . 6 . 
    . . . . . . . . . . . . . . 6 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Shoot)
let spriteShoot1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 . . . . . . . . . . . . . 
    . . 9 . . . . . . . . . . . . . 
    . . 9 . . . . . . . . . . . . . 
    . . 6 . . . . . . . . . . . . . 
    . . 6 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Shoot)
spriteShoot2.setPosition(-70, -70)
spriteShoot1.setPosition(-70, -70)
let projectileOverlap1 = 0
let projectileOverlap2 = 0
ships = [
[
img`
    ........7c7........
    ........777........
    .......c777c.......
    .......7ccc7.......
    ...c...7c9c7...c...
    ...c..7c9d9c7..c...
    ...c.c7cd9dc7c.c...
    ..c7777c999c7777c..
    .c77cc7cd9dc7cc77c.
    c7cc88c79997c88cc7c
    7c888887c9c788888c7
    77c8888c777c8888c77
    .7cc8ccc777ccc8cc7.
    .c77c7777c7777c77c.
    ....777.777.777....
    .....77.7c7.77.....
    .....c7..7..7c.....
    `,
img`
    .....c7..7..7c.....
    .....77.7c7.77.....
    ....777.777.777....
    .c77c7777c7777c77c.
    .7cc8ccc777ccc8cc7.
    77c8888c777c8888c77
    7c888887c9c788888c7
    c7cc88c79997c88cc7c
    .c77cc7cd9dc7cc77c.
    ..c7777c999c7777c..
    ...c.c7cd9dc7c.c...
    ...c..7c9d9c7..c...
    ...c...7c9c7...c...
    .......7ccc7.......
    .......c777c.......
    ........777........
    ........7c7........
    `,
img`
    .........c77.....
    ........c7c77c...
    .......c7c8cc7...
    ....ccc77c88c7...
    .......7c8888c7..
    ......c7c888c777c
    .....7777c88c7777
    ..c77cccc77cc7...
    777cc9d9d9c77777.
    c77c9d9999977c7c7
    777cc9d9d9c77777.
    ..c77cccc77cc7...
    .....7777c88c7777
    ......c7c888c777c
    .......7c8888c7..
    ....ccc77c88c7...
    .......c7c8cc7...
    ........c7c77c...
    .........c77.....
    `,
img`
    .....77c.........
    ...c77c7c........
    ...7cc8c7c.......
    ...7c88c77ccc....
    ..7c8888c7.......
    c777c888c7c......
    7777c88c7777.....
    ...7cc77cccc77c..
    .77777c9d9d9cc777
    7c7c7799999d9c77c
    .77777c9d9d9cc777
    ...7cc77cccc77c..
    7777c88c7777.....
    c777c888c7c......
    ..7c8888c7.......
    ...7c88c77ccc....
    ...7cc8c7c.......
    ...c77c7c........
    .....77c.........
    `
],
[
img`
    ........7c7........
    ........777........
    .......c777c.......
    .......7ccc7.......
    ...c...7c9c7...c...
    ...c..7c9d9c7..c...
    ...c.c7cd9dc7c.c...
    ..c7777c999c7777c..
    .c77cc7cd9dc7cc77c.
    c7cc88c79997c88cc7c
    7c888887c9c788888c7
    77c8888c777c8888c77
    .7cc8ccc777ccc8cc7.
    .c77c7777c7777c77c.
    ....77757775777....
    .....7757c7577.....
    .....c7447447c.....
    ......542.245......
    ......222.222......
    .......2...2.......
    `,
img`
    .......2...2.......
    ......222.222......
    ......542.245......
    .....c7447447c.....
    .....7757c7577.....
    ....77757775777....
    .c77c7777c7777c77c.
    .7cc8ccc777ccc8cc7.
    77c8888c777c8888c77
    7c888887c9c788888c7
    c7cc88c79997c88cc7c
    .c77cc7cd9dc7cc77c.
    ..c7777c999c7777c..
    ...c.c7cd9dc7c.c...
    ...c..7c9d9c7..c...
    ...c...7c9c7...c...
    .......7ccc7.......
    .......c777c.......
    ........777........
    ........7c7........
    `,
img`
    .........c77........
    ........c7c77c......
    .......c7c8cc7......
    ....ccc77c88c7......
    .......7c8888c7.....
    ......c7c888c777c...
    .....7777c88c777752.
    ..c77cccc77cc7554422
    777cc9d9d9c77777422.
    c77c9d9999977c7c7...
    777cc9d9d9c77777422.
    ..c77cccc77cc7554422
    .....7777c88c777752.
    ......c7c888c777c...
    .......7c8888c7.....
    ....ccc77c88c7......
    .......c7c8cc7......
    ........c7c77c......
    .........c77........
    `,
img`
    ........77c.........
    ......c77c7c........
    ......7cc8c7c.......
    ......7c88c77ccc....
    .....7c8888c7.......
    ...c777c888c7c......
    .257777c88c7777.....
    2244557cc77cccc77c..
    .22477777c9d9d9cc777
    ...7c7c7799999d9c77c
    .22477777c9d9d9cc777
    2244557cc77cccc77c..
    .257777c88c7777.....
    ...c777c888c7c......
    .....7c8888c7.......
    ......7c88c77ccc....
    ......7cc8c7c.......
    ......c77c7c........
    ........77c.........
    `
],
[
img`
    ........7c7........
    ........777........
    .......c777c.......
    .......7fff7.......
    ...c...7f9f7...c...
    ...c..7c9ffff..c...
    ...c.c7cd9ffff.c...
    ..c77ffc99ff7777c..
    .c77fc7cffff7cc77c.
    c7cc8ff79ff7c88cc7c
    7c8888ffffff88888c7
    77c888ff77fff8f8c77
    .7cc8fff77ffff8cc7.
    .c77cf777c7f77c77c.
    ....7ff.777ff77....
    .....7f.7c7.7ff....
    .....c7..7..fc.....
    `,
img`
    .....cf..7..7c.....
    ....ff7.7c7.f7.....
    ....77ff777.ff7....
    .c77c77f7c777fc77c.
    .7cc8ffff77fff8cc7.
    77c8f8fff77ff888c77
    7c88888ffffff8888c7
    c7cc88c7ff97ff8cc7c
    .c77cc7ffffc7cf77c.
    ..c7777ff99cff77c..
    ...c.ffff9dc7c.c...
    ...c..ffff9c7..c...
    ...c...7f9f7...c...
    .......7fff7.......
    .......c777c.......
    ........777........
    ........7c7........
    `,
img`
    .........c77.....
    ........c7c77c...
    .......c7c8cc7...
    ....ccc77c88c7...
    .......7c88f8c7f.
    ......f7c888f77fc
    .....ff77c8ff7f7f
    ..c77ffff7fffff..
    777ffffffffff777.
    c77f9f99fff77c7c7
    777ff9d9f9f77777.
    ..c77cccc7fff7...
    .....77f7ffff7ff7
    ......cfcf88fff7c
    .......7f8888c7..
    ....ccc77c88c7...
    .......c7c8cc7...
    ........c7c77c...
    .........c77.....
    `,
img`
    .....77c.........
    ...c77c7c........
    ...7cc8c7c.......
    ...7c88c77ccc....
    ..7c8888f7.......
    c7fff88fcfc......
    7ff7ffff7f77.....
    ...7fff7cccc77c..
    .77777f9f9d9ff777
    7c7c77fff99f9f77c
    .777ffffffffff777
    ..fffff7ffff77c..
    f7f7ff8c77ff.....
    cf77f888c7f......
    .f7c8f88c7.......
    ...7c88c77ccc....
    ...7cc8c7c.......
    ...c77c7c........
    .....77c.........
    `
],
[
img`
    ........7c7........
    ........777........
    .......c777c.......
    .......7fff7.......
    ...c...7f9f7...c...
    ...c..7c9ffff..c...
    ...c.c7cd9ffff.c...
    ..c77ffc99ff7777c..
    .c77fc7cffff7cc77c.
    c7cc8ff79ff7c88cc7c
    7c8888ffffff88888c7
    77c888ff77fff8f8c77
    .7cc8fff77ffff8cc7.
    .c77cf777c7f77c77c.
    ....7ff5777ff77....
    .....7f57c757ff....
    .....c744744fc.....
    ......542.245......
    ......222.222......
    ......222.222......
    .......2...2.......
    `,
img`
    .......2...2.......
    ......222.222......
    ......222.222......
    ......542.245......
    .....cf447447c.....
    ....ff757c75f7.....
    ....77ff7775ff7....
    .c77c77f7c777fc77c.
    .7cc8ffff77fff8cc7.
    77c8f8fff77ff888c77
    7c88888ffffff8888c7
    c7cc88c7ff97ff8cc7c
    .c77cc7ffffc7cf77c.
    ..c7777ff99cff77c..
    ...c.ffff9dc7c.c...
    ...c..ffff9c7..c...
    ...c...7f9f7...c...
    .......7fff7.......
    .......c777c.......
    ........777........
    ........7c7........
    `,
img`
    .........c77.........
    ........c7c77c.......
    .......c7c8cc7.......
    ....ccc77c88c7.......
    .......7c88f8c7f.....
    ......f7c888f77fc....
    .....ff77c8ff7f7f522.
    ..c77ffff7fffff544222
    777ffffffffff7774222.
    c77f9f99fff77c7c7....
    777ff9d9f9f777774222.
    ..c77cccc7fff75544222
    .....77f7ffff7ff7522.
    ......cfcf88fff7c....
    .......7f8888c7......
    ....ccc77c88c7.......
    .......c7c8cc7.......
    ........c7c77c.......
    .........c77.........
    `,
img`
    .........77c.........
    .......c77c7c........
    .......7cc8c7c.......
    .......7c88c77ccc....
    ......7c8888f7.......
    ....c7fff88fcfc......
    .2257ff7ffff7f77.....
    22244557fff7cccc77c..
    .222477777f9f9d9ff777
    ....7c7c77fff99f9f77c
    .2224777ffffffffff777
    222445fffff7ffff77c..
    .225f7f7ff8c77ff.....
    ....cf77f888c7f......
    .....f7c8f88c7.......
    .......7c88c77ccc....
    .......7cc8c7c.......
    .......c77c7c........
    .........77c.........
    `
]
]
randomTrashpositiosning()
forever(function () {
    if (SpaceSaver_00037.y > 120) {
        SpaceSaver_00037.y = 0
    }
})
forever(function () {
    if (SpaceSaver_00037.x > 160) {
        SpaceSaver_00037.x = 0
    }
})
forever(function () {
    if (SpaceSaver_00037.y < 0) {
        SpaceSaver_00037.y = 120
    }
})
forever(function () {
    if (SpaceSaver_00037.x < 0) {
        SpaceSaver_00037.x = 160
    }
})
game.onUpdateInterval(1000, function () {
    randomTrashpositiosning()
})
forever(function () {
    if (controller.A.isPressed()) {
        if (lastOrientation == 1) {
            spriteShoot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 9 . . . . . . . . . . . . . 
                . . 9 . . . . . . . . . . . . . 
                . . 9 . . . . . . . . . . . . . 
                . . 6 . . . . . . . . . . . . . 
                . . 6 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpaceSaver_00037, 0, -70)
            spriteShoot1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 9 . 
                . . . . . . . . . . . . . . 9 . 
                . . . . . . . . . . . . . . 9 . 
                . . . . . . . . . . . . . . 6 . 
                . . . . . . . . . . . . . . 6 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpaceSaver_00037, 0, -70)
        }
        if (lastOrientation == 2) {
            spriteShoot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 6 . . 
                . . . . . . . . . . . . . 6 . . 
                . . . . . . . . . . . . . 9 . . 
                . . . . . . . . . . . . . 9 . . 
                . . . . . . . . . . . . . 9 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpaceSaver_00037, 0, 70)
            spriteShoot1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 6 . . . . . . . . . . . . . . 
                . 6 . . . . . . . . . . . . . . 
                . 9 . . . . . . . . . . . . . . 
                . 9 . . . . . . . . . . . . . . 
                . 9 . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpaceSaver_00037, 0, 70)
        }
        if (lastOrientation == 3) {
            spriteShoot2 = sprites.createProjectileFromSprite(img`
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
                . . . . 9 9 9 6 6 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpaceSaver_00037, -70, 0)
            spriteShoot1 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 6 6 . . . . . . . 
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
                `, SpaceSaver_00037, -70, 0)
        }
        if (lastOrientation == 4) {
            spriteShoot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 9 9 9 . . . . . 
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
                `, SpaceSaver_00037, 70, 0)
            spriteShoot1 = sprites.createProjectileFromSprite(img`
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
                . . . . . . 6 6 9 9 9 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpaceSaver_00037, 70, 0)
        }
        spriteShoot1.setKind(SpriteKind.Shoot)
        spriteShoot2.setKind(SpriteKind.Shoot)
        pause(1250)
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        Shield.setPosition(SpaceSaver_00037.x, SpaceSaver_00037.y)
        ShieldOn = 1
    } else {
        Shield.setPosition(200, 210)
        ShieldOn = 0
    }
})
forever(function () {
    if (SpaceSaverLives < 1) {
        game.over(false)
    }
})
forever(function () {
    if (ShieldOn == 0) {
        if (SpaceSaverLives == 2) {
            controller.moveSprite(SpaceSaver_00037, 50, 50)
        }
        if (SpaceSaverLives == 1) {
            controller.moveSprite(SpaceSaver_00037, 69, 69)
        }
    }
    if (ShieldOn == 1) {
        controller.moveSprite(SpaceSaver_00037, 30, 30)
    }
})
forever(function () {
	
})
forever(function () {
    buttonPressed = 1
    if (controller.up.isPressed()) {
        lastOrientation = 1
    } else if (controller.down.isPressed()) {
        lastOrientation = 2
    } else if (controller.left.isPressed()) {
        lastOrientation = 3
    } else if (controller.right.isPressed()) {
        lastOrientation = 4
    } else {
        buttonPressed = 0
    }
    SpaceSaver_00037.setImage(getShipImg(lastOrientation, SpaceSaverLives, buttonPressed))
})
