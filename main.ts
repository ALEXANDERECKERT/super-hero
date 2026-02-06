controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameMode == 0) {
        setSuperPowerL()
        music.rest(music.beat(BeatFraction.Half))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function LoadGameMenu () {
    GameMode = 0
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
        22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
        222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
        2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
        2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
        222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
        222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
        222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
        22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
        22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
        22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
        2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
        2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
        2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
        ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
        eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
        eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
        2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
        222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
        22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
        222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
        eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
        222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
        222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
        222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
        222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
        222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
        222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
        222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
        222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
        222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeee11eeeeeee1eeeeeeeeeeee1eeeeeee11eeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
        222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeee111eeee11111eee1111eeee11eeee1111eee11111eeee1bbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
        222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
        222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
        2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
        2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
        222222222e22e22eebbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
        222222222e22e222ebbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbe222e22e222222222
        2222222222e22e22eebbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbee22e22e2222222222
        222222e222e22e222ebbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbe222e22e222e222222
        222222e222222e222eebbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbee222e222222e222222
        222222e2222222e222ebbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbe222e2222222e222222
        222222ee222222e222eebbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbee222e222222ee222222
        2222222e222222e2222ebbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbe2222e222222e2222222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
        22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
        22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
        22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
        22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
        22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
        222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
        222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
        222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
        222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
        222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
        222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
        `)
    selectedPowerNumber = 0
    game.showLongText("Choose Your Path!", DialogLayout.Top)
    textSprite = textsprite.create("<< Electromagnetic >>")
    textSprite.setPosition(80, 75)
    SelectedPowerSprite = sprites.create(img`
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
    animation.runImageAnimation(
    SelectedPowerSprite,
    [img`
        .....................
        .....................
        .....................
        .....................
        ......7.......7......
        .....7.5555555.7.....
        ....7.5fffffff5.7....
        ...7.5fffffffff5.7...
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        ...7.5fff555fff5.7...
        ....7.5f55555f5.7....
        .....7.5555555.7.....
        ......7.......7......
        .....................
        .....................
        `,img`
        .....................
        .....................
        .....................
        .....7.........7.....
        ....7...........7....
        ...7...5555555...7...
        ..7...5fffffff5...7..
        .....5fffffffff5.....
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        .....5fff555fff5.....
        ..7...5f55555f5...7..
        ...7...5555555...7...
        ....7...........7....
        .....7.........7.....
        .....................
        `,img`
        .....................
        .....................
        ....7...........7....
        ...7.............7...
        ..7...............7..
        .7.....5555555.....7.
        ......5fffffff5......
        .....5fffffffff5.....
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        .....5fff555fff5.....
        ......5f55555f5......
        .7.....5555555.....7.
        ..7...............7..
        ...7.............7...
        ....7...........7....
        `,img`
        .....................
        .....................
        .....................
        .....................
        .....................
        .......5555555.......
        ......5fffffff5......
        .....5fffffffff5.....
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        .....5fff555fff5.....
        ......5f55555f5......
        .......5555555.......
        .....................
        .....................
        .....................
        `],
    450,
    true
    )
    SelectedPowerSprite.setPosition(77, 103)
    Power_Sprites = [[img`
        .....................
        .....................
        .....................
        .....................
        ......7.......7......
        .....7.5555555.7.....
        ....7.5fffffff5.7....
        ...7.5fffffffff5.7...
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        ...7.5fff555fff5.7...
        ....7.5f55555f5.7....
        .....7.5555555.7.....
        ......7.......7......
        .....................
        .....................
        `,img`
        .....................
        .....................
        .....................
        .....7.........7.....
        ....7...........7....
        ...7...5555555...7...
        ..7...5fffffff5...7..
        .....5fffffffff5.....
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        .....5fff555fff5.....
        ..7...5f55555f5...7..
        ...7...5555555...7...
        ....7...........7....
        .....7.........7.....
        .....................
        `,img`
        .....................
        .....................
        ....7...........7....
        ...7.............7...
        ..7...............7..
        .7.....5555555.....7.
        ......5fffffff5......
        .....5fffffffff5.....
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        .....5fff555fff5.....
        ......5f55555f5......
        .7.....5555555.....7.
        ..7...............7..
        ...7.............7...
        ....7...........7....
        `,img`
        .....................
        .....................
        .....................
        .....................
        .....................
        .......5555555.......
        ......5fffffff5......
        .....5fffffffff5.....
        ....555fffffff555....
        ....5555fffff5555....
        ....55555fff55555....
        ....555555f555555....
        ....5fffff5fffff5....
        ....5fffff5fffff5....
        ....5ffff555ffff5....
        .....5fff555fff5.....
        ......5f55555f5......
        .......5555555.......
        .....................
        .....................
        .....................
        `], [img`
        .........................
        .........................
        .........................
        .........................
        ..4444444444444444.......
        ..4444444444444444.......
        .44444844444484444422....
        444444844444484444442....
        4444448444444844444422...
        4444448888888844444422...
        4444448444444844444422...
        .4444484444448444442222..
        ..444484444448444422222..
        ...44444444444444222222..
        ....4444444444442222222..
        .....4444444444222222e22.
        ......444444442222222e222
        .......44444422222222e222
        ........4444..2222e22e222
        .........44...2222e22e222
        ..............2222e22ee22
        ................222e..e22
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..4444444444444444.......
        ..4444444444444444.......
        .44444844444484444422....
        444444844444484444442....
        4444448444444844444422...
        4444448888888844444422...
        444444844444484444442222.
        .44444844444484444422222.
        ..4444844444484444222222.
        ...444444444444442222222.
        ....44444444444422222222.
        .....4444444444222222e222
        ......444444442222222e222
        .......44444422222222ee22
        ........4444..2222e2222e2
        .........44...2222e2222e2
        ..............2222e2222e2
        ................222e..222
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..4444444444444444.......
        ..4444444444444444.......
        .44444844444484444422....
        444444844444484444442....
        4444448444444844444422...
        4444448888888844444422...
        444444844444484444442222.
        .444448444444844444222222
        ..44448444444844442222222
        ...4444444444444422222222
        ....44444444444422222e222
        .....4444444444222222e222
        ......4444444422222222e22
        .......444444222222222ee2
        ........4444..2222e2222ee
        .........44...2222e222222
        ..............22222e22222
        ................222e..222
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..4444444444444444.......
        ..4444444444444444.......
        .44444844444484444422....
        4444448444444844444422...
        4444448444444844444422222
        4444448888888844444422222
        4444448444444844444422e22
        .4444484444448444442222ee
        ..44448444444844442222222
        ...4444444444444422222222
        ....44444444444422222e222
        .....4444444444222222ee22
        ......4444444422222222eee
        .......444444222222222222
        ........4444..2222e222222
        .........44...2222e222222
        ..............22222ee2222
        ................2222..222
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..4444444444444444.......
        ..4444444444444444.......
        .44444844444484444422....
        444444844444484444442....
        4444448444444844444422...
        4444448888888844444422...
        444444844444484444442222.
        .444448444444844444222222
        ..44448444444844442222222
        ...4444444444444422222222
        ....44444444444422222e222
        .....4444444444222222e222
        ......4444444422222222e22
        .......444444222222222ee2
        ........4444..2222e2222ee
        .........44...2222e222222
        ..............22222e22222
        ................222e..222
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        ..4444444444444444.......
        ..4444444444444444.......
        .44444844444484444422....
        444444844444484444442....
        4444448444444844444422...
        4444448888888844444422...
        444444844444484444442222.
        .44444844444484444422222.
        ..4444844444484444222222.
        ...444444444444442222222.
        ....44444444444422222222.
        .....4444444444222222e222
        ......444444442222222e222
        .......44444422222222ee22
        ........4444..2222e2222e2
        .........44...2222e2222e2
        ..............2222e2222e2
        ................222e..222
        .........................
        .........................
        .........................
        `], [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 8 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . 8 b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 8 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 8 b 2 b . . . . . . 
        . . . . . . b 2 b 8 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 8 b 2 8 . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . 8 . . . . 
        . . . . . . 2 b 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . 8 . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . 8 . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b 8 . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . 8 b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . 8 . b 2 b 2 b . . . . . . 
        . . . . . . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . 8 . b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . 8 b 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . 8 2 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 . . b . 2 . . . . . . 
        . . . . . . b 2 b . . . . . . . 
        . . . . . b 2 b 2 b . . . . . . 
        . . . . . . b 8 b 2 . . . . . . 
        . . . . . . 2 b 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]]
    PowerNames = ["Electromagnetic", "Classic", "Atomic"]
}
function setSuperPowerL () {
    if (selectedPowerNumber < 1) {
        selectedPowerNumber += 1
    } else {
        selectedPowerNumber = 0
    }
    animation.runImageAnimation(
    SelectedPowerSprite,
    Power_Sprites[selectedPowerNumber],
    450,
    true
    )
}
function LoadGame () {
    GameMode = 1
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    scene.cameraFollowSprite(MySpriteCameraPhantom)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setPosition(10, 140)
    mySprite = sprites.create(img`
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
    MySpriteCameraPhantom = sprites.create(img`
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
}
let mySprite: Sprite = null
let MySpriteCameraPhantom: Sprite = null
let PowerNames: string[] = []
let Power_Sprites: Image[][] = []
let SelectedPowerSprite: Sprite = null
let textSprite: TextSprite = null
let selectedPowerNumber = 0
let GameMode = 0
LoadGameMenu()
game.onUpdate(function () {
    if (GameMode == 1) {
        MySpriteCameraPhantom.setPosition(mySprite.x, mySprite.y - 45)
    }
})
