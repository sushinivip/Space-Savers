namespace SpriteKind {
    export const Shoot = SpriteKind.create()
    export const Protect = SpriteKind.create()
    export const enemyshoot = SpriteKind.create()
    export const UFO = SpriteKind.create()
}
function UfoDestroyed (Sprite2: Sprite) {
    sprites.destroy(Sprite2)
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
function randomEaster () {
    trashSpawner = randint(1, 8)
    console.log(trashSpawner)
    if (trashSpawner == 1) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), 10, 10)
        spriteTrash.setPosition(doTrashSpawnPositionX1(), 0)
    } else if (trashSpawner == 2) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), 10, 10)
        spriteTrash.setPosition(0, doTrashSpawnPositionY1())
    } else if (trashSpawner == 3) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), -10, 10)
        spriteTrash.setPosition(doTrashSpawnpositionX2(), 0)
    } else if (trashSpawner == 4) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), -10, 10)
        spriteTrash.setPosition(160, doTrashSpawnPositionY1())
    } else if (trashSpawner == 5) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), -10, -10)
        spriteTrash.setPosition(160, doTrashSpawnpositionY2())
    } else if (trashSpawner == 6) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), -10, -10)
        spriteTrash.setPosition(doTrashSpawnpositionX2(), 120)
    } else if (trashSpawner == 7) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), 10, -10)
        spriteTrash.setPosition(doTrashSpawnPositionX1(), 120)
    } else if (trashSpawner == 8) {
        spriteTrash = sprites.createProjectileFromSide(getRandomElement(array_easter), 10, -10)
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
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.UFO, SpriteKind.Player, function (sprite, otherSprite) {
    SpaceSaverLives += -1
    sprite.destroy(effects.fire, 500)
    UfoDestroyed(arrayUFO[arrayUFO.indexOf(sprite) + 1])
})
controller.combos.attachCombo("l+r+l+ru+d+u+d", function () {
    if (SpaceMunkey == 0) {
        Easter += 1
    }
    SpaceMunkey = 1
    UFOchance = 100
})
controller.combos.attachCombo("udldldrd", function () {
    if (TobyFox == 0) {
        Easter += 1
    }
    TobyFox = 1
    arrayTrashes = [img`
        ..f.ffff.f..........
        .f1f1111f1f.........
        .f11111111f.........
        .f111111111f......f.
        f11f11f11111f....f1f
        f111111111111ff..f1f
        f111ff111111111fff1f
        f1f1f11f11111111111f
        f11ffff111111111111f
        f111111111111111111f
        f111111111111111111f
        f111111111111111111f
        f111111111111111111f
        f11111111111111111f.
        .f1111111111111111f.
        .f11ff11ffff11ff11f.
        .f1f.f11f..f11ff1f..
        ..f..f1f...f1f..f...
        ......f.....f.......
        `, img`
        ..........f.ffff.f..
        .........f1f1111f1f.
        .........f11111111f.
        .f......f111111111f.
        f1f....f11111f11f11f
        f1f..ff111111111111f
        f1fff111111111ff111f
        f11111111111f11f1f1f
        f111111111111ffff11f
        f111111111111111111f
        f111111111111111111f
        f111111111111111111f
        f111111111111111111f
        .f11111111111111111f
        .f1111111111111111f.
        .f11ff11ffff11ff11f.
        ..f1ff11f..f11f.f1f.
        ...f..f1f...f1f..f..
        .......f.....f......
        `]
})
function doTrashSpawnPositionY1 () {
    return arrayTrashPositionsY1[randint(0, arrayTrashPositionsY1.length - 1)]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyshoot, function (sprite, otherSprite) {
    SpaceSaverLives += -1
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    SpaceSaverLives += -1
    pause(1000)
})
sprites.onOverlap(SpriteKind.UFO, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    UfoDestroyed(arrayUFO[arrayUFO.indexOf(sprite) + 1])
})
function UfoRayPositionY () {
    return UFO.y + 12
}
function doTrashSpawnpositionY2 () {
    return arrayTrashPositionsY2[randint(0, arrayTrashPositionsY2.length - 1)]
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemyshoot, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Protect, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
function doTrashSpawnpositionX2 () {
    return arrayTrashPositionsX2[randint(0, arrayTrashPositionsX2.length - 1)]
}
sprites.onOverlap(SpriteKind.UFO, SpriteKind.Shoot, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(200)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    UfoDestroyed(arrayUFO[arrayUFO.indexOf(sprite) + 1])
})
controller.combos.attachCombo("uaradala", function () {
    if (Cheat == 0) {
        if (HardDifficulty == 0) {
            ShootCooldown = 0
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
                fffffffffffffff1ffffffffffffffffffffffffffff111111111ffffffff1111111fffff11111111111111111111111111111111111fffffffffffffffff1ffffffffffffffffffff1fffffffffffff
                ffffffffff111111111111111111111111111111ffff111111111ffffffff1111111fffff11111111111111111111111111111111111fffff11111111111111111111111111ff1111111111111111111
                ffffffffff111111111111111111111111111111ffff111111111ffffffff1111111ffff911111111111111111111111111111111111fffff11111111111111111111111111ff1111111111111111111
                ffffffffff111111111111111111111111111111ffff111111111ffffffff111111199ddb11111111111111111111111111111111111ffff111111111111111111111111111ff1111111111111111111
                ffffffffff111111111111111111111111111111ffff111111111ffffffff1111111ddbbb11111111111111111111111111111111111fffff11111111111111111111111111ff1111111111111111111
                ffffffffff111111111111111111111111111111ffff111111111ffffffff1111111bbbb611111111111111111111111111111111111fffff11111111111111111111111111ff1111111111111111111
                ffffffffff111111111111111111111111111111fff1111111111fffffffd1111111bb66611111111111111111111111111111111111fffff11111111111111111111111111ff1111111111111111111
                ffffffffff111111111111111111111111111111ffff111111111ffffffdd11111116dbd611111111111111111111111111111111111fffff11111111111111111111111111ffffffff111111111ffff
                ffffffffff111111111111111111111111111111ffff111111111ffffdbbd1111111dbb6611111111111111111111111111111111111fffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff111111111111111111111111111111ffff111111111fffdbbb91111111d688611111111111111111111111111111111111fffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff111111111111111111111111111111ffff111111111fdbbb99911111116688811111111ccbbbcc8bcccccccccc9ffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fff1ffffffffffffffffffff111111111dbbb999611111116888811111111cbe8bbbcbcccccbbcccb9fffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111bbb9996611111116888811111111888888bbbbb88888bcccccffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111bb999669111111166888111111118888888ccc888b88bbc8cccfffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111b9d99ddd1111111688881111111188888888bc888bcc8bc886c9ffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111bbbddd961111111688881111111188b88888888888cc8ccc886c9fffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111bbbdd69611111118688811111111bdbbebb8888888888bcc8c86c9ffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffffffffffff11f111111111ddd6666611111118688811111111dddddde8888888888bccbbccccffffff1111111111ffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111d666666611111118888811111111dbdbbddcccccd88b8ebccbbbbc9fffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff1111111119666666611111118888811111111bbbbbdbbbccccccb8bbbccc8bbb9ffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff1111111116696966611111118888b11111111bbddbbbbbbbbbcccc8bcccbb8bbcffff111111111fffffffff11111111ffffffff111111111ffff
                fff1ffffff1111111111ffffffffffffffffffffffff1111111116666966611111118888b11111111dbbbbbbbbbbbcccccc8bbccc88bc9fff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111666996691111111868bb11111111dbbbbbbbbbbbbcbccc88bcccc88c6fff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111666966691111111666bd11111111dbbbbbbbbbbbbcccccc88bbccc8869ff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111966966661111111668bd11111111bbbbbbbbbbbbbccccccc88bcccc866ff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111966666661111111668bd11111111bbbbbbbbbbbbbccccccc888bbccc669f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111d69666661111111868bd11111111bbbbbbbbbbbbbcccccccc888bbcc869f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffffffffffffff9111111111d69666661111111868dd11111111bbbbbbbbbbbbbccccccccc888888866f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffffffffffffff9111111111dd6669661111111888bb11111111bbbbbbbbbbbbbbccbccccc8888888869111111111fffffffff11111111ffffff1f111111111ffff
                ffffffffff1111111111fffffffffffffffffffffff9111111111ddd669661111111888bb11111111bbbbbbbbbbbbbcbccccccccc88888869111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff99111111111ddd6666611111116888b11111111bbbbbbbbbbbbbcccccccccccc8888889111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff991111111116666666611111116888b11111111bbbbbbbbbbbbbcbccccccccccc888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff991111111116966666611111116888811111111bbbbbbbbbbbbccbccccccccccc888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fff1ffffffffffffffffff991111111116966666611111116868811111111888bbbbbbbbbcccccccccccccc888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9911111111169666666111111188888111111118888bbbbbbbbccccccccccccc8888886111111111fffff1fff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffff1fffffff9b1111111116966666611111118688811111111d888ebbbbbbbcccccccccccbb8888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9b1111111116999666611111118688811111111bbd88bbbbbbbccccccccccceb8888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9b111111111c999966611111118888811111111bbd88cbbbbbbbbccccccccc888888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9e111111111ccc9966611111118888811111111bbb888bbbbbbbbccccccccc888888886111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9b111111111cccc666611111116888811111111ddbdd88bbbbbbccccccccc88888888bb111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffff1ffffffffbb111111111ccccc66611111118888811111111111111111111111111111111111111bb111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffff1ffffffff9d111111111cccccb66111111188888111111111111111111111111111111111111118b111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9d111111111ccccbb661111111888881111111111111111111111111111111111111186111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9b111111111ccccb6661111111888881111111111111111111111111111111111111186111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff9b111111111cccbb6661111111888881111111111111111111111111111111111111186111111111111111111111111111fffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffff99111111111cccb6666111111188888111111111111111111111111111111111111118611111111111111111111111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffffffffffffff9111111111cccb6666111111188888111111111111111111111111111111111111116911111111111111111111111111ffffffff111111111ffff
                ffffff1fff1111111111fffffffffffffffffffffff911111111111111111111111188888111111111111111111111111111111111111116911111111111111111111111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffffffffffffff911111111111111111111111188888111111111111111111111111111111111111116f11111111111111111111111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffffffffffffffff911111111111111111111111188868111111118888888bbbbccccccc88888bd888886f11111111111111111111111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff11111111111111111111111188868111111118888888bbbcccccccc8888bbd888869f11111111111111111111111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff11111111111111111111111188888111111118888888ccbcccccccc8888bc888886ff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cc9669661111111888881111111188888888bbbbccccc88888bcc88869ff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cc6666661111111888881111111188888888bbcccccc88888888888669ff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cc6666661111111888881111111188888888bbcccccc8888888888869fff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cc6666661111111886861111111188888888bbcbccc8888888888d669fff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ccc6666611111118868811111111888888888bbbccc8888888889b69ffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cc6699661111111b868811111111888888888bbbc888888888888b6fffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cc9669661111111b8688111111118888888888b8888888888888699fffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111bc9966661111111bb6881111111188888888888888888888888869ffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111cb9666661111111dbb88111111118888888888888888888888869fffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ccc6696611111116dd8811111111888888888888888888888866ffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff1111111119cc9669611111116dd8811111111888888888888888bb8888669ffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffff1fffffff1111111116ccc66691111111d888811111111888888888888888be888669fffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffff1fffffff11111111196c666691111111d88881111111188888888888888dd888669ffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111f96966661111111686881111111188888888888888d888669fffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ff969666111111166688111111118888888888888888669fffffffffffff111111111fffffffff111111111fffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111fff9966911111116666811111111888888886888888669ffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111fffff9691111111666881111111188888888118888699fffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111fffffff911111116668811111111888888881888669fffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff111111166688111111118888881886669fffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111161181111111188886116699fffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111161111111111111666699ffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111ff9991111111169999fffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff1111111199ffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffff1fff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111fffffffffffffffffffffffffffff1ff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                fffff1ffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111fffffffffff1ffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111ffffffffffffffffffffffff111111111ffffffff1111111fffff11111111fffffffffffff1ffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff111111111fffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111fffffff11111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff11111111ffffffffffffffffffffffffffffffff111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111ff1ff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111fff1ff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffff1111111111111111111111111111ffffff111111111ffffffff1111111fffff111111111111111111111111111111111111111f111111111fffffffff11111111ffffffff111111111ffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffff111111111ffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffff111111111ffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            Cheat = 1
        } else {
            UFOchance = 100
            ShootCooldown = 0
            HardDifficulty = 1
            scene.setBackgroundImage(img`
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111199d99bbbbbc11f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f99ddbdd66168bcccccc91f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111111111111111111111111999ddbbbd66888111ccccccb99111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111119966ddbbbb6688811818ccccccbbc991111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff11dd69dddbbb66618881888818818cccccbe911ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111ddd96dd6b6dbd68888888888888888cccccc99f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1dbbd9666666dbb668886888888cccccccccccccc91f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fdbbb99666966d68866888888cccccccccccccccccc691f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1fdbbb999669666666888888888ccccbbbcc8bcccccccccc9f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11dbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb91fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111111111119bbb999666666666688888888bccb888888bbbbb88888bccccc111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111dbbb999669666666866888868bbbbb8288888ccc888b88bbc8ccc11111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111fdbbb9d99ddd666668868888688bb22222888888b2888bcc8bc886c9f111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111fbbbbbbddd966666888688888888882288b88888822228cc8ccc886c9111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111dbbbbbbdd6966666666868822888882bb2bbeb22288228822bcc8c86c911f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff119bbdbddd6666666666888688862288222222222e8888888822bccbbcccc11f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1119dbb9dd666666666668868888888b22222222222222222d8228ebc22bbbc91f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff1dd99999666666666668868288888b22222222222222222222b8bbb2cc8bbb9ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111119dd99996696966666666668828222222244444444222222222228b222bb8bbc111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111119d99999666696666622822888222222244555555442222222222222b2cc88bc911111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1ff99999999666996696668228828222222245555555542222222222228b22cc88c6f11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1999996696669666966d82682222222222455555555422222222222288bbccc2269f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99999ffffffffffff22ff28822ff22ffffffffff554222ffffff22ffffffffffff6f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1f9dd99ffffffffffff22ff68822ff22ffffffffff44422ffffffff2ffffffffffff691f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99999ff69d626662266ff68222ff22ff2222442222222ffffffff222222ffbbcc8691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1999999ffddd626622266ff22222ff22ff2222222222222ff4444ff422222ff88888661f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111999999ff9ddd26692662ff22222ff44ff44444222222fff444455fff2222ff8888886911111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111999999ffdddd26692222ff22222ff44ff44444442222ff44445555ff4222ff8888886911111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f999bb99ff6ddd26662222ff22224ff44ff44444444222ff44445555ff4222ff28888289f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbbb9ff696626662222ff22244ff45ff55554444422ff44455555ff4222ff22222286f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbdbbff696222622222ff22244ff55ff55555444422ff44555555ff4222ff2288288691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f99dbbbbff696962222222ff22444ff55ff55555544442ff45555554ff4222ff2288288691fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbbbbff696966222222ff22444ff55ff55555554442ff44555554ff4222ff2888828691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9bbbbbcffc66966222222fffffffff55ffffffffff442ff44555554ff2222ffb888888691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111119bbbbbbffcc6999222222fffffffff55ffffffffff442ff44555554ff2222ffb888888691111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111119bbbbbbffccc999222222ff22444ff55ff15555554442ff24555444ff2222ff8888828691111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9ebbbbcffcc2cc9222222ff22444ff55ff55555554442ffffffffffff2222ff2222288691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f9bbbbbcffccc2cc222222ff22444ff55ff55555554442ffffffffffff2222ff882888bb91f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1fbbbbbbcffccc2cc222222ff22444ff55ff55555554442ff22222222ff2222ff882888bb91f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f9dbbbbcffbcc22c222224ff42444ff55ff55555544442ff22222222ff2222ff8882288b91fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f9dbbbbbffbcc2c2222245ff42244ff55ff55555444422ff22222222ff2222ff8888888691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9bbbbbbffcc22cc222245ff42244ff45ff55554444422ff22222222ff2228ff8888888691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111119bbbbbbffcc2ccbb22244ff54224ff44ff44444444222ff22222222ff2228ff8828888611111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111199bbbbbffbccccb622224ff54222ff44ff44444442222ff44442222ff2222ff2288888611111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f199dbbbffbccccb662224ff54222ff44ff44444222222ff45544222ff2222ffcc888869f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f199dbbbffcccccc226224ff44222ff22ff22222222224ff55554222ff2288ffcc888869f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1999bbbffccccbc622222ff42222ff22ff22222222445ff55554222ff2888ffdd888861f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1969bbbffbcccc6962222ff22222ff22ff22222244555ff55542222ff8888ffd8888861f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99bbbffffffffffff62ff22222ff22ffffffffff555ff54452222ff8888ffd8888691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f9999bffffffffffffbbff22222ff22ffffffffff555ff44222222ff2288ff88888611f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                111111111111111111111111111111111111111111111111699bbbbccc9669662bb22222222222222455555554442222222228828822c888691111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111119999bbcccc666666d2bd22222222222224455444422222222222888282888886691111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1ff9699dbcccc6666666222222222222222222444222222222222228882288888869f11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f119696bbbcc66666222d2bd222222222222222222222222222222888288888d6691f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111999ebbccc6662266622b288222222222222222222222222222888888889b69f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff1969ccbcc66996666662b2b8682222222222222222222222882888888888b61f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111196ccccc9669666666262b8688622222222222222288228888888888886991f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff11199ccbc9966666666262bb688826888882222222888828888888888886911ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111969ccb9666666666666dbb88222888882888828888882888888888869111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111969ccc6696666666666dd82222688882888822228882288888888661111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff969cc9669666966d66dd2288268888288882882888888bb8888669f111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f96ccc66699669dddd828868828888828882888888888be88866911111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f196c66669966666dd88886666668888888888888888dd888669f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f96966669966ddd686886868888888888888888888d8886691fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f19696666966666666886868888888888888888888886691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f996696696666666688688888888888888688888866911f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111969999666666688888888888888888811888869911111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111119699966666688888811888888888818886691111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111996999666688881818888888881886669111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f996f16118661881118888611669911111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99161111611118111666699f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff99996611666699991f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f99999999911f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `)
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 2916, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            Cheat = 1
        }
        Easter += 1
    }
})
controller.combos.attachCombo("llurdadada", function () {
    if (HardDifficulty == 0) {
        if (ShootCooldown == 0) {
            UFOchance = 100
            scene.setBackgroundImage(img`
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111199d99bbbbbc11f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f99ddbdd66168bcccccc91f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111111111111111111111111999ddbbbd66888111ccccccb99111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111119966ddbbbb6688811818ccccccbbc991111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff11dd69dddbbb66618881888818818cccccbe911ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111ddd96dd6b6dbd68888888888888888cccccc99f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1dbbd9666666dbb668886888888cccccccccccccc91f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fdbbb99666966d68866888888cccccccccccccccccc691f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1fdbbb999669666666888888888ccccbbbcc8bcccccccccc9f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11dbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb91fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111111111119bbb999666666666688888888bccb888888bbbbb88888bccccc111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111dbbb999669666666866888868bbbbb8288888ccc888b88bbc8ccc11111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111fdbbb9d99ddd666668868888688bb22222888888b2888bcc8bc886c9f111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111fbbbbbbddd966666888688888888882288b88888822228cc8ccc886c9111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111dbbbbbbdd6966666666868822888882bb2bbeb22288228822bcc8c86c911f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff119bbdbddd6666666666888688862288222222222e8888888822bccbbcccc11f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1119dbb9dd666666666668868888888b22222222222222222d8228ebc22bbbc91f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff1dd99999666666666668868288888b22222222222222222222b8bbb2cc8bbb9ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111119dd99996696966666666668828222222244444444222222222228b222bb8bbc111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111119d99999666696666622822888222222244555555442222222222222b2cc88bc911111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1ff99999999666996696668228828222222245555555542222222222228b22cc88c6f11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1999996696669666966d82682222222222455555555422222222222288bbccc2269f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99999ffffffffffff22ff28822ff22ffffffffff554222ffffff22ffffffffffff6f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1f9dd99ffffffffffff22ff68822ff22ffffffffff44422ffffffff2ffffffffffff691f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99999ff69d626662266ff68222ff22ff2222442222222ffffffff222222ffbbcc8691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1999999ffddd626622266ff22222ff22ff2222222222222ff4444ff422222ff88888661f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111999999ff9ddd26692662ff22222ff44ff44444222222fff444455fff2222ff8888886911111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111999999ffdddd26692222ff22222ff44ff44444442222ff44445555ff4222ff8888886911111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f999bb99ff6ddd26662222ff22224ff44ff44444444222ff44445555ff4222ff28888289f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbbb9ff696626662222ff22244ff45ff55554444422ff44455555ff4222ff22222286f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbdbbff696222622222ff22244ff55ff55555444422ff44555555ff4222ff2288288691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f99dbbbbff696962222222ff22444ff55ff55555544442ff45555554ff4222ff2288288691fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbbbbff696966222222ff22444ff55ff55555554442ff44555554ff4222ff2888828691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9bbbbbcffc66966222222fffffffff55ffffffffff442ff44555554ff2222ffb888888691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111119bbbbbbffcc6999222222fffffffff55ffffffffff442ff44555554ff2222ffb888888691111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111119bbbbbbffccc999222222ff22444ff55ff15555554442ff24555444ff2222ff8888828691111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9ebbbbcffcc2cc9222222ff22444ff55ff55555554442ffffffffffff2222ff2222288691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f9bbbbbcffccc2cc222222ff22444ff55ff55555554442ffffffffffff2222ff882888bb91f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1fbbbbbbcffccc2cc222222ff22444ff55ff55555554442ff22222222ff2222ff882888bb91f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f9dbbbbcffbcc22c222224ff42444ff55ff55555544442ff22222222ff2222ff8882288b91fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f9dbbbbbffbcc2c2222245ff42244ff55ff55555444422ff22222222ff2222ff8888888691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9bbbbbbffcc22cc222245ff42244ff45ff55554444422ff22222222ff2228ff8888888691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111119bbbbbbffcc2ccbb22244ff54224ff44ff44444444222ff22222222ff2228ff8828888611111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111199bbbbbffbccccb622224ff54222ff44ff44444442222ff44442222ff2222ff2288888611111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f199dbbbffbccccb662224ff54222ff44ff44444222222ff45544222ff2222ffcc888869f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f199dbbbffcccccc226224ff44222ff22ff22222222224ff55554222ff2288ffcc888869f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1999bbbffccccbc622222ff42222ff22ff22222222445ff55554222ff2888ffdd888861f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1969bbbffbcccc6962222ff22222ff22ff22222244555ff55542222ff8888ffd8888861f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99bbbffffffffffff62ff22222ff22ffffffffff555ff54452222ff8888ffd8888691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f9999bffffffffffffbbff22222ff22ffffffffff555ff44222222ff2288ff88888611f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                111111111111111111111111111111111111111111111111699bbbbccc9669662bb22222222222222455555554442222222228828822c888691111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111119999bbcccc666666d2bd22222222222224455444422222222222888282888886691111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1ff9699dbcccc6666666222222222222222222444222222222222228882288888869f11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f119696bbbcc66666222d2bd222222222222222222222222222222888288888d6691f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111999ebbccc6662266622b288222222222222222222222222222888888889b69f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff1969ccbcc66996666662b2b8682222222222222222222222882888888888b61f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111196ccccc9669666666262b8688622222222222222288228888888888886991f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff11199ccbc9966666666262bb688826888882222222888828888888888886911ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111969ccb9666666666666dbb88222888882888828888882888888888869111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111969ccc6696666666666dd82222688882888822228882288888888661111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff969cc9669666966d66dd2288268888288882882888888bb8888669f111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f96ccc66699669dddd828868828888828882888888888be88866911111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f196c66669966666dd88886666668888888888888888dd888669f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f96966669966ddd686886868888888888888888888d8886691fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f19696666966666666886868888888888888888888886691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f996696696666666688688888888888888688888866911f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111969999666666688888888888888888811888869911111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111119699966666688888811888888888818886691111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111996999666688881818888888881886669111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f996f16118661881118888611669911111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99161111611118111666699f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff99996611666699991f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f99999999911f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `)
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 2916, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
        } else {
            UFOchance = 100
            scene.setBackgroundImage(img`
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111199d99bbbbbc11f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f99ddbdd66168bcccccc91f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111111111111111111111111999ddbbbd66888111ccccccb99111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111119966ddbbbb6688811818ccccccbbc991111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff11dd69dddbbb66618881888818818cccccbe911ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111ddd96dd6b6dbd68888888888888888cccccc99f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1dbbd9666666dbb668886888888cccccccccccccc91f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fdbbb99666966d68866888888cccccccccccccccccc691f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1fdbbb999669666666888888888ccccbbbcc8bcccccccccc9f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11dbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb91fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111111111119bbb999666666666688888888bccb888888bbbbb88888bccccc111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111dbbb999669666666866888868bbbbb8288888ccc888b88bbc8ccc11111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111fdbbb9d99ddd666668868888688bb22222888888b2888bcc8bc886c9f111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111fbbbbbbddd966666888688888888882288b88888822228cc8ccc886c9111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111dbbbbbbdd6966666666868822888882bb2bbeb22288228822bcc8c86c911f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff119bbdbddd6666666666888688862288222222222e8888888822bccbbcccc11f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1119dbb9dd666666666668868888888b22222222222222222d8228ebc22bbbc91f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff1dd99999666666666668868288888b22222222222222222222b8bbb2cc8bbb9ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                11111111111111111111111111111111111111111111111119dd99996696966666666668828222222244444444222222222228b222bb8bbc111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111119d99999666696666622822888222222244555555442222222222222b2cc88bc911111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1ff99999999666996696668228828222222245555555542222222222228b22cc88c6f11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f1999996696669666966d82682222222222455555555422222222222288bbccc2269f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f9999996692269666622d628822222222224455555542222222222222288bcc2c866f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1f9dd999669926666622222688222222222224454444422244444442222888b2ccc6691f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f999999669d626662266626822222222222224422222224444444422222222bbcc8691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f199999996ddd62662226622222222222222222222222222444444444222228288888661f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111999999969ddd266926622222222224444444442222222444444444442222888888886911111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111199999966dddd266922222222222444444444444422222444445555444222228888886911111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f999bb99666ddd2666222222222244444444444444422224444455554442222228888289f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbbb96669662666222222222444445555555444442224444555554442222222222286f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbdbb666962226222222222244445555555554444222444555555444222222288288691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f99dbbbbb66969622222222222444455555555555444422445555554444222222288288691fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99bbbbbbe6969662222222222444555555555555544422244555554444222222888828691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9bbbbbccbc6696622222222224445555555555555444222445555544422222bb888888691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111119bbbbbbbbcc699922222222224445555555555555444222445555544422222eb888888691111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111119bbbbbbbbccc9992222222222444555555155555544422224555444422222288888828691111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9ebbbbccccc2cc92222222222444555555555555544422224444442222222222222288691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f9bbbbbcccccc2cc222222222244455555555555554442222444222222222288882888bb91f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1fbbbbbbcccccc2cc222222222244455555555555554442222222222222222288882888bb91f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f9dbbbbccbbcc22c2222244442444455555555555444422222222222222222888882288b91fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f9dbbbbbbbbcc2c22222455542244445555555554444222222222222222222888888888691f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f9bbbbbbbccc22cc2222455542244444555555544444222222222222222228888888888691fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111119bbbbbbbccc2ccbb222445554224444444444444442222222222222222228888828888611111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111199bbbbbbbbccccb6222245554222444444444444422222244442222222222822288888611111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f199dbbbcbbccccb662224555422222444444444222222444554422222222228cc888869f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f199dbbbcccccccc226224554422222222222222222224455555422222228888cc888869f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1999bbbbbccccbc622222444222222222222222222445555555422222288888dd888861f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1969bbbbbbcccc696222222222222222222222224455555555422222288888bd8888861f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f99bbbbcccccc696bb622222222222222224444455555554452222228888bbd8888691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f9999bbbcccc9666dbbb2222222222222224555555555444222222222288bc88888611f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                111111111111111111111111111111111111111111111111699bbbbccc9669662bb22222222222222455555554442222222228828822c888691111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111119999bbcccc666666d2bd22222222222224455444422222222222888282888886691111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1ff9699dbcccc6666666222222222222222222444222222222222228882288888869f11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f119696bbbcc66666222d2bd222222222222222222222222222222888288888d6691f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111999ebbccc6662266622b288222222222222222222222222222888888889b69f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff1969ccbcc66996666662b2b8682222222222222222222222882888888888b61f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f111196ccccc9669666666262b8688622222222222222288228888888888886991f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff11199ccbc9966666666262bb688826888882222222888828888888888886911ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111969ccb9666666666666dbb88222888882888828888882888888888869111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111969ccc6696666666666dd82222688882888822228882288888888661111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff969cc9669666966d66dd2288268888288882882888888bb8888669f111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f96ccc66699669dddd828868828888828882888888888be88866911111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f196c66669966666dd88886666668888888888888888dd888669f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f96966669966ddd686886868888888888888888888d8886691fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f19696666966666666886868888888888888888888886691f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1f996696696666666688688888888888888688888866911f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111969999666666688888888888888888811888869911111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111119699966666688888811888888888818886691111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111996999666688881818888888881886669111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f996f16118661881118888611669911111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f99161111611118111666699f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff99996611666699991f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f99999999911f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111f1f1f1fff111
                1111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111f1f1f1f11111
                1111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111ff11f1fff111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `)
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 2916, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
            music.play(music.createSong(hex`00f4010408020404001c00100500640000041e000004000000000000000000000000000a0400040b0000000400061e2425272a2c05001c000f0a006400f4010a00000400000000000000000000000000000000020f00000004000a1d1e2022242527292a2c08001c000e050046006603320000040a002d00000064001400013200020100020f00000001000a1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000f00000001000a02030405060708090a0b`), music.PlaybackMode.InBackground)
        }
        Easter += 1
    }
    HardDifficulty += 1
})
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
function spawnUFO () {
    if (Math.percentChance(UFOchance)) {
        UfoSide = randint(1, 2)
        if (SpaceMunkey == 0) {
            UFO = sprites.create(img`
                . . . . . . c c c c . . . . . . 
                . . . . . c 7 7 7 7 c . . . . . 
                . . . . c 7 7 7 7 7 7 c . . . . 
                . . . c 7 7 7 7 7 7 7 7 c . . . 
                . . c c 7 7 7 7 7 7 7 9 c c . . 
                . c 6 6 c 7 7 7 7 9 9 c 6 6 c . 
                c 6 6 6 6 c c c c c c 6 6 6 6 c 
                c 6 6 6 6 6 c 6 6 c 6 6 6 6 6 c 
                c 6 6 6 6 c 6 6 6 6 c 6 6 6 6 c 
                . c 6 6 c 6 6 6 6 6 6 c 6 6 c . 
                . . c c 6 6 6 6 6 6 6 6 c c . . 
                . c . . c c c c c c c c . . c . 
                `, SpriteKind.UFO)
            Uforay = sprites.create(img`
                . 7 7 7 7 7 7 7 7 . 
                7 . . . . . . . . 7 
                . 7 7 7 7 7 7 7 7 . 
                . . . . . . . . . . 
                . . 7 7 7 7 7 7 . . 
                . 7 . . . . . . 7 . 
                . . 7 7 7 7 7 7 . . 
                . . . . . . . . . . 
                . . . 7 7 7 7 . . . 
                . . 7 . . . . 7 . . 
                . . . 7 7 7 7 . . . 
                `, SpriteKind.enemyshoot)
        } else {
            UFO = sprites.create(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e 1 1 f . . . . . . 
                . . f d d d d e 1 1 f . . . . . 
                . c d f d d f d e 1 f f . . . . 
                . c d f d d f d e 1 1 1 f . . . 
                c d e e d d d d e 1 1 1 c . . . 
                c d d d d c d d e 1 1 1 c . . . 
                c c c c c d d e 1 1 f c . . . . 
                . f d d d d e 1 1 f f 5 5 5 . . 
                . . f f f f f 8 2 1 1 f 5 5 . . 
                . . . . f f 1 1 1 1 1 1 f 5 f f 
                . . . f 1 1 f 1 1 f 1 1 f 5 1 f 
                . . f 1 1 f 1 1 f 1 1 1 f 5 1 f 
                . f b c f c b f b b f 1 f f 1 f 
                . f c c f c c f c c b 1 f f f f 
                . . f f f f f f f f f f f f f . 
                `, SpriteKind.UFO)
            Uforay = sprites.create(img`
                . . . . . . . e e e e . . . . . 
                . . . . . e e 4 5 5 5 e e . . . 
                . . . . e 4 5 6 2 2 7 6 6 e . . 
                . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                e 5 e c 5 4 5 4 5 5 5 e e . . . 
                e 5 e e 5 5 5 5 5 4 e . . . . . 
                4 5 4 e 5 5 5 5 e e . . . . . . 
                . 4 5 4 5 5 4 e . . . . . . . . 
                . . 4 4 e e e . . . . . . . . . 
                `, SpriteKind.enemyshoot)
        }
        if (UfoSide == 2) {
            UFO.setVelocity(-10, 0)
            Uforay.setVelocity(-10, 0)
            UFO.setPosition(160, randint(6, 150))
        } else {
            UFO.setVelocity(10, 0)
            Uforay.setVelocity(10, 0)
            UFO.setPosition(0, randint(6, 150))
        }
        Uforay.setPosition(UFO.x - 1, UfoRayPositionY())
        arrayUFO.push(UFO)
        arrayUFO.push(Uforay)
    }
}
let buttonPressed = 0
let lastOrientation = 0
let UfoSide = 0
let SpaceMunkey = 0
let spriteTrash: Sprite = null
let trashSpawner = 0
let ships: Image[][] = []
let arrayUFO: Sprite[] = []
let Uforay: Sprite = null
let UFO: Sprite = null
let arrayTrashPositionsY2: number[] = []
let arrayTrashPositionsX2: number[] = []
let arrayTrashPositionsY1: number[] = []
let arrayTrashPositionsX1: number[] = []
let arrayTrashes: Image[] = []
let array_easter: Image[] = []
let ShootCooldown = 0
let HardDifficulty = 0
let UFOchance = 0
let TobyFox = 0
let Cheat = 0
Cheat = 0
TobyFox = 0
let Easter = 0
UFOchance = 60
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
HardDifficulty = 5
ShootCooldown = 1
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
let Difficultycurve = 1000
array_easter = [
img`
    ................
    ................
    ................
    ................
    .......5555.....
    .....55555555...
    ....5555555555..
    ....9999999999..
    ....5555555555..
    ...575757757575.
    ...757575575757.
    ...355555555553.
    ...535555555535.
    ...553335533355.
    ...355533335553.
    ...535555555535.
    ...553335533355.
    ....5553333555..
    ......555555....
    ................
    `,
img`
    ................
    ................
    ................
    ................
    .......3333.....
    .....33333333...
    ....3333333333..
    ....9999999999..
    ....3333333333..
    ...373737737373.
    ...737373373737.
    ...533333333335.
    ...353333333353.
    ...335553355533.
    ...733355553337.
    ...373333333373.
    ...337773377733.
    ....3337777333..
    ......333333....
    ................
    `,
img`
    ................
    ................
    ................
    ................
    .......2222.....
    .....22222222...
    ....2291229122..
    ....1919191919..
    ....9122912291..
    ...222222222222.
    ...2c22c22c22c2.
    ...c2cc2cc2cc2c.
    ...2c22c22c22c2.
    ...222222222222.
    ...522252225222.
    ...222222222222.
    ...225222522252.
    ....2222222222..
    ......222222....
    ................
    `,
img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........bbbb........
    ........b11b........
    ........bb31bb......
    .........b131bb.....
    ........bb11111bb...
    .....bbbb1111111b...
    ..bbbb1111111f113b..
    ..b11111111111111b..
    ..b11111111111fffb..
    ..b11111111111111b..
    ..b111111111111bb...
    ..bb111111bbb1bb....
    ...bbbbbbbb.bbb.....
    ....................
    ....................
    ....................
    ....................
    `
]
arrayTrashes = [
img`
    . . . . . . . . b . . . . 
    . . . . . . . . . b b . . 
    . . . . . . . . b b b . . 
    . . . d b d b b b . b b . 
    . b b b e b b b . . . b b 
    . d d e e e b d d . . . . 
    d e b e e e e d d d . . . 
    d e b e e e e e b b . . . 
    d e e e e b e b e d . . . 
    d d d e d d d e d . . . . 
    . b b d e e d b d . . . . 
    . . . b b b b b . . . . . 
    . . . . . . d . . . . . . 
    `,
img`
    . . . . e e b . 
    . . . e e d b e 
    e e d d e d d b 
    b d d d d b d d 
    b e d b d e d d 
    . e d e e e . . 
    `,
img`
    . . . . e e b . 
    . . . e e d b e 
    e e d d e d d b 
    b d d d d b d d 
    b e d b d e d d 
    . e d e e e . . 
    `,
img`
    . . e e e d e . 
    d d e d b d e b 
    d d b d d d d b 
    b d d e d d e e 
    e b d e e . . . 
    . b e e . . . . 
    `,
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
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b b . . . . . . 
    . . . . . . . c b b b . . . . . 
    . . . . . . c b b b b b . . . . 
    . . . . . c b b b b b b . . . . 
    . . . . c b b b b b d . . . . . 
    . . . c b b b b b d . . . . . . 
    . . . b b b b b d . . . . . . . 
    . . . . b b b d . . . . . . . . 
    . . . . . b d . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ........82..........
    .....88828..........
    .8188182188.........
    .8118121812.........
    .8181181128.........
    .818218121..........
    .812818281..........
    ..8288288...........
    ...822888...........
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `,
img`
    . . c . . . . . . . . . . 
    b . b c . . . . . . . . . 
    d b b b c . . . . . . . . 
    . d b b b c . . . . . . . 
    . . d b b b . . . . . . . 
    . . b b b b c . . . . . . 
    . . b b b b b c c c c . . 
    . . d b b b b b b b b c . 
    . . . d d d b b b b b b . 
    . . . . . . b b b b b b . 
    . . . . . . d d b b b b . 
    . . . . . . . . d d . . . 
    . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . d d d d . . . 
    . . . . . . . . d e e e d d . . 
    . . . . . . . b e e e e e d . . 
    . . . . . . b e e e e e e d . . 
    . . . . . b e e e e e e e d . . 
    . . . . b e e e e e e e c . . . 
    . . . b e e e e e e e c . . . . 
    . . b e e e e e e e e c . . . . 
    . e d d d d d e e e c . . . . . 
    . d b b b c c d e c c . . . . . 
    . d b b c c c d e c . . . . . . 
    . d b b c c c d e c . . . . . . 
    . d b c c c c d c . . . . . . . 
    . d c c c c c d c . . . . . . . 
    . . d d d d d c . . . . . . . . 
    `,
img`
    . . . . . . b b b . . . 
    . . . . . c b b b b . . 
    . . . . . . c b b b d . 
    . . . . . . . c b b b d 
    . . . . . . . c b b b d 
    . . . . . . . c b b b d 
    . . . . . . c b b b b d 
    . . . . . c b b b b d . 
    . . c c c b b b b b d . 
    c c b b b b b b d d . . 
    . b b b b b b d . . . . 
    . . d d d d d . . . . . 
    `,
img`
    . . . . . 8 8 8 . . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . 8 8 9 9 8 8 8 8 . . . . . 
    . . 8 8 8 8 9 9 8 8 8 8 . . . . 
    . 8 8 9 9 8 8 9 9 9 8 8 8 8 . . 
    8 8 8 8 9 9 9 8 8 9 9 8 8 8 8 . 
    8 9 9 8 8 9 9 9 8 8 9 9 9 8 8 8 
    8 8 9 9 9 8 8 9 9 9 8 8 9 9 8 8 
    . 8 8 8 9 9 8 8 9 9 9 8 8 8 8 . 
    . . . 8 8 9 9 9 8 8 9 9 8 8 . . 
    . . . . 8 8 8 9 9 8 8 8 8 . . . 
    . . . . . 8 8 8 9 9 8 8 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
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
UFO = sprites.create(img`
    . . . . . . c c c c . . . . . . 
    . . . . . c 7 7 7 7 c . . . . . 
    . . . . c 7 7 7 7 7 7 c . . . . 
    . . . c 7 7 7 7 7 7 7 7 c . . . 
    . . c c 7 7 7 7 7 7 7 9 c c . . 
    . c 6 6 c 7 7 7 7 9 9 c 6 6 c . 
    c 6 6 6 6 c c c c c c 6 6 6 6 c 
    c 6 6 6 6 6 c 6 6 c 6 6 6 6 6 c 
    c 6 6 6 6 c 6 6 6 6 c 6 6 6 6 c 
    . c 6 6 c 6 6 6 6 6 6 c 6 6 c . 
    . . c c 6 6 6 6 6 6 6 6 c c . . 
    . c . . c c c c c c c c . . c . 
    `, SpriteKind.Protect)
Uforay = sprites.create(img`
    . 7 7 7 7 7 7 7 7 . 
    7 . . . . . . . . 7 
    . 7 7 7 7 7 7 7 7 . 
    . . . . . . . . . . 
    . . 7 7 7 7 7 7 . . 
    . 7 . . . . . . 7 . 
    . . 7 7 7 7 7 7 . . 
    . . . . . . . . . . 
    . . . 7 7 7 7 . . . 
    . . 7 . . . . 7 . . 
    . . . 7 7 7 7 . . . 
    `, SpriteKind.enemyshoot)
arrayUFO = []
UFO.setPosition(-80, -100)
Uforay.setPosition(-80, -100)
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
game.onUpdateInterval(5000, function () {
    spawnUFO()
    if (HardDifficulty != 0) {
        for (let index = 0; index < HardDifficulty; index++) {
            if (Math.percentChance(30)) {
                spawnUFO()
            }
        }
    }
})
game.onUpdateInterval(5000, function () {
    if (Difficultycurve > 120) {
        Difficultycurve += -100
    }
})
game.onUpdateInterval(5000, function () {
    if (Easter == 4) {
        randomEaster()
    }
})
game.onUpdateInterval(Difficultycurve, function () {
    randomTrashpositiosning()
    if (HardDifficulty != 0) {
        for (let index = 0; index < HardDifficulty; index++) {
            if (Math.percentChance(40)) {
                randomTrashpositiosning()
            }
        }
    }
})
forever(function () {
    if (SpaceMunkey == 0) {
        characterAnimations.loopFrames(
        Uforay,
        [img`
            . 7 7 7 7 7 7 7 7 7 7 . 
            7 . . . . . . . . . . 7 
            . 7 7 7 7 7 7 7 7 7 7 . 
            . . . . . . . . . . . . 
            . . 7 7 7 7 7 7 7 7 . . 
            . 7 . . . . . . . . 7 . 
            . . 7 7 7 7 7 7 7 7 . . 
            . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 . . . 
            . . 7 . . . . . . 7 . . 
            . . . 7 7 7 7 7 7 . . . 
            . . . . . . . . . . . . 
            . . . . 7 7 7 7 . . . . 
            . . . 7 . . . . 7 . . . 
            . . . . 7 7 7 7 . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . 7 7 7 7 7 7 7 7 . . 
            . 7 . . . . . . . . 7 . 
            . . 7 7 7 7 7 7 7 7 . . 
            . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 . . . 
            . . 7 . . . . . . 7 . . 
            . . . 7 7 7 7 7 7 . . . 
            . . . . . . . . . . . . 
            . . . . 7 7 7 7 . . . . 
            . . . 7 . . . . 7 . . . 
            . . . . 7 7 7 7 . . . . 
            . . . . . . . . . . . . 
            . . . . . 7 7 . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.Moving)
        )
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 48, 450, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
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
        if (ShootCooldown == 1) {
            pause(240)
        }
    }
})
forever(function () {
    if (SpaceSaver_00037.y > 120) {
        SpaceSaver_00037.y = 0
    }
    if (SpaceSaver_00037.x > 160) {
        SpaceSaver_00037.x = 0
    }
    if (SpaceSaver_00037.y < 0) {
        SpaceSaver_00037.y = 120
    }
    if (SpaceSaver_00037.x < 0) {
        SpaceSaver_00037.x = 160
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
    if (Easter == 4) {
        if (info.score() < 42690) {
            info.changeScoreBy(42690)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44455554455555555445555544fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4445555555445555555544555555544fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44445555555544555555554455555554444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff45544555555554455555555445555555445544fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff44555445555555544555555554455555554455554ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff45555544555555554455555555445555555445555544ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff44555555445555555544555555554455555554455555554fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff4555555554455555555445555555544555555544555555544ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff4444555555554455555555445555555544555555544555555544554fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff45445555555544555555554455555555445555555445555555445554ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff4554455555555445555555544555555554455555554455555554455554fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff45554455555555445555555544555555554455555554455555554455554fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4555544555555554455555555445555555544555555544555555544555554ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff45555445555555544555555554455555555445555555445555555445555554fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff455555445555555544555555554455555555445555555445555555445555554fffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff455555544555555554455555555445555555544555555544555555544555555544fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff4555555544555555554455555555445555555544555555544555555544555555544fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff45555555445555555544555555554455555555445555555445555555445555555444ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff45555555445555555544555555554455555555445555555445555555445555555444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff455555555445555555544555555554455555555445555555445555555445555555444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff4555555554455555555445555555544555555554455555554455555554455555554454fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff4555555554455555555445555555544555555554455555554455555554455555554454fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff445555555544555555554455555555445555555544555555544555555544555555544554ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff44555555554455555555445555555544555555554455555554455555554455555554454fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff44555555554455555555445555555544555555554455555554455555554455555554454fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff4555555554455555555445555555544555555554455555554455555554455555554454fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff4555555554455555555445555555544555555554455555554455555554455555554454fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff455555555445555555544555555554455555555445555555445555555445555555444ffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff4555555544555555554455555555445555555544555555544555555544555555544fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff455555544555555554455555555445555555544555555544555555544555555544fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff455555544555555554455555555445555555544555555544555555544555555544fffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff45555554455555555445555555544555555554455555554455555554455555554ffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff4555554455555555445555555544555555554455555554455555554455555554ffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff45555445555555544555555554455555555445555555445555555445555554fffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff4555544555555554455555555445555555544555555544555555544555554ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff455445555555544555555554455555555445555555445555555445554ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff4544555555554455555555445555555544555555544555555544554fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff444555555554455555555445555555544555555544555555544554fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff4455555555445555555544555555554455555554455555554454ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff45555555544555555554455555555445555555445555555444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff455555554455555555445555555544555555544555555544ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff455555544555555554455555555445555555445555554ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff454455555555445555555544555555544544ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444555555554455555555445555555444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4455555544555555554455555444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44445544555555554455444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444555555554444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        }
    }
})
forever(function () {
    if (SpaceSaverLives < 1) {
        game.over(false)
    }
})
forever(function () {
    if (TobyFox == 0) {
        music.play(music.createSong(hex`0082000408070103001c0001dc00690000045e0100040000000000000000000005640001040003900000000400012a08001000012510001800012018002000012520002800012028003000012530003800011e40004800012748005000012550005800012258006000012560006800012268007000012570007800011b80008800011b88009000011d9000980001209800a000011da000a8000119a800b000011eb000b800011dc000c8000120c800d000011dd400e000011e`), music.PlaybackMode.UntilDone)
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
    if (TobyFox == 1) {
        music.play(music.createSong(hex`0064000408010503001c0001dc00690000045e0100040000000000000000000005640001040003180000000400011908000c00011910001400011918001c00011905001c000f0a006400f4010a000004000000000000000000000000000000000212000000040001240400080001201c002000011907001c00020a006400f401640000040000000000000000000000000000000003240000000400011d0400080001190c00100001191000140001191400180001191c002000011d08001c000e050046006603320000040a002d000000640014000132000201000224000000040001240400080001200c001000011d10001400011e14001800011d1c002000011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800300000000100010a04000500010a08000900010a0c000d00010a10001100010a14001500010a18001900010a1c001d00010a`), music.PlaybackMode.UntilDone)
    }
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
