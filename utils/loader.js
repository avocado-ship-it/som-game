export const load = {
    fonts: () => {
        loadFont("round", "./assets/Round9x13.ttf")
    },

    assets: () => {
        loadSprite("up", "./assets/Dark/Arrow_Up_Key_Dark.png")
        loadSprite("down", "./assets/Dark/Arrow_Down_Key_Dark.png")
        loadSprite("left", "./assets/Dark/Arrow_Left_Key_Dark.png")
        loadSprite("right", "./assets/Dark/Arrow_Right_Key_Dark.png")
        loadSprite("space", "./assets/Dark/Space_Key_Dark.png")

        loadSprite("forest-background", "./assets/Forest_Background_0.png"),
        loadSprite("logo", "./assets/Logo.png")
    },
    
    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }
}