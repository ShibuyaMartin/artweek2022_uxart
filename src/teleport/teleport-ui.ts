//import resourcesDropin from "src/resources-dropin"

const resourcesDropin = {
  baseDir: "",
  teleports: {
    label: "XX"
  }
}
export const screenSpaceUI = new UICanvas()
screenSpaceUI.visible = true //in some version of the sdk its shared with everone, must keep it visible always


// TELEPORT BEAM UI


let teleportUIContainer = new UIContainerRect(screenSpaceUI)
teleportUIContainer.width = '40%'
teleportUIContainer.vAlign = 'top'
teleportUIContainer.height = '20%'
teleportUIContainer.isPointerBlocker = false


const beamUIBGTexture = new Texture (resourcesDropin.baseDir + "images/ui_teleport_bg.png")
let teleportUIBG = new UIImage(teleportUIContainer,beamUIBGTexture )
teleportUIBG.sourceLeft = 0
teleportUIBG.sourceTop = 0
teleportUIBG.sourceWidth = 512
teleportUIBG.sourceHeight = 256
teleportUIBG.width = '256px'
teleportUIBG.height = '128px'

let teleportCountdownText = new UIText(teleportUIContainer)
teleportCountdownText.value = "3"
teleportCountdownText.fontSize = 28
teleportCountdownText.color = Color4.White()//Color4.White()
//teleportCountdownText.outlineColor = Color4.Black()// Color4.White()
//teleportCountdownText.outlineWidth = .3
teleportCountdownText.font = new Font(Fonts.SansSerif_Bold)
teleportCountdownText.hAlign = "center"
teleportCountdownText.hTextAlign = "center"
teleportCountdownText.vAlign = "bottom"
teleportCountdownText.vTextAlign = "bottom"
teleportCountdownText.positionY = 16
teleportCountdownText.isPointerBlocker = false



let teleportCountdownLabelText = new UIText(teleportUIContainer)
teleportCountdownLabelText.value = (resourcesDropin.teleports.label) ? resourcesDropin.teleports.label : "Teleporting".toUpperCase()
teleportCountdownLabelText.fontSize = 24
teleportCountdownLabelText.color = Color4.White()//Color4.White()
//teleportCountdownLabelText.outlineColor =  Color4.White()
//teleportCountdownLabelText.outlineWidth = .3
teleportCountdownLabelText.font = new Font(Fonts.SansSerif_Bold)
teleportCountdownLabelText.hAlign = "center"
teleportCountdownLabelText.hTextAlign = "center"
teleportCountdownLabelText.vAlign = "bottom"
teleportCountdownLabelText.vTextAlign = "bottom"
teleportCountdownLabelText.positionY = 56
teleportCountdownLabelText.isPointerBlocker = false



// let teleportBeamMessage = new UIText(teleportUIContainer)
// teleportBeamMessage.value = "BEAMING UP"
// teleportBeamMessage.fontSize = 48
// teleportBeamMessage.hAlign = "center"
// teleportBeamMessage.hTextAlign = "center"
// teleportBeamMessage.vAlign = "bottom"
// teleportBeamMessage.vTextAlign = "bottom"
// teleportBeamMessage.isPointerBlocker = false

export function showTeleportUI(_visible:boolean){
  teleportUIContainer.visible = _visible
}

export function setTeleportCountdownLabel(lbl:string){
  teleportCountdownLabelText.value = lbl
}
export function setTeleportCountdown(_numberString:string){
  teleportCountdownText.value = _numberString //+ "..."
}

showTeleportUI(false)