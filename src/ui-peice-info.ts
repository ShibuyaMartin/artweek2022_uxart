import * as ui from '@dcl/ui-scene-utils';
import { ImageSection } from 'node_modules/@dcl/ui-scene-utils/dist/utils/types';
import { CONFIG, PeiceInfo } from './config';

import resources, { setSection } from './dcl-scene-ui-workaround/resources';
//import { RESOURCES } from './resources';

const custUiAtlas = new Texture('images/DispenserAtlas.png')

const SHIFTY = -30
const SHIFTY_TEXT = -10


export const PROMPT_PICKER_WIDTH = 650
export const PROMPT_PICKER_HEIGHT = 570//410 //550 
export const PROMPT_OFFSET_X = 0;//80//move it away from communications box as cant click thru it
export const PROMPT_OFFSET_Y = 40
export const MAIN_CONTENT_START_Y = 180
export const PROMPT_TITLE_HEIGHT = 230 + SHIFTY //250 + SHIFTY
export const PROMPT_TITLE_COLOR = Color4.White()
export const BUTTON_HEIGHT = 70

export const PROMPT_OVERLAY_TEXT_COLOR = Color4.White()

export const PROMPT_PICKER_OVERLAY_WIDTH = PROMPT_PICKER_WIDTH
export const PROMPT_PICKER_OVERLAY_HEIGHT = 320
export const PROMPT_OVERLAY_OFFSET_X = 0
export const PROMPT_OVERLAY_OFFSET_Y = 60

export const BUTTON_POS_Y = -150//-40//-80 //-180
 


const startX = -370;
const startY = MAIN_CONTENT_START_Y;
const rowHeight = 30
const rowPaddY = 10
const colWidth = 200
const buttonHeight = BUTTON_HEIGHT

let yCounter = startX

//const gameTutorialImg = RESOURCES.textures.logos_01.src
//const gameTutorialImgTexture = RESOURCES.textures.logos_01
 
const totalPages = 3
const gameTutorialImgDesc = "Welcome to Decentraland's third annual Genesis City Art Week! This year's event aims to explore the concept, The World is Made of Code. By exploring the area, you will find mora then twenty immersive installations. Enjoy!"



const IMAGE_WIDTH = 256 
const IMAGE_HEIGHT = 256 

const IMAGE_SRC_WIDTH = 1024
const IMAGE_SRC_HEIGHT = 1024

const IMG_SCALE = 1
const IMAGE_DISPLAY_WIDTH = 512 * IMG_SCALE
const IMAGE_DISPLAY_HEIGHT = 128 * IMG_SCALE

const IMAGE_SPRITE_WIDTH = 512
const IMAGE_SPRITE_HEIGHT = 128

const IMAGE_FULL_SELECTION = { sourceHeight: IMAGE_SPRITE_HEIGHT, sourceWidth: IMAGE_SPRITE_WIDTH }

const TITLE_TEXT_POS_Y = 150
const PLAYER_IMGSHOT_Y = 95//60//30 //40
const PLAYER_IMGSHOT_TEXT_Y = PLAYER_IMGSHOT_Y - 30


const gameImageDescList_WEARABLE: string[] = [
  
]
for(const p in CONFIG.peiceInfo){
  const pi = CONFIG.peiceInfo[p]
  gameImageDescList_WEARABLE.push(pi.title)
}
const gameImageDescListVtextAlign_WEARABLE: string[] = [
  "", ""
]
const gameImageDescListFontSize_WEARABLE: number[] = [
  0, 0
]
const gameTextYPos: number[] = [
  PLAYER_IMGSHOT_Y - 130, PLAYER_IMGSHOT_Y - 100
]
const gameImageDescListFontSize_SELECTION: ImageSection[] = [
  //{ sourceHeight: IMAGE_SPRITE_WIDTH, sourceWidth: IMAGE_SPRITE_HEIGHT, sourceLeft: 0, sourceTop: 0 }
]

log("gameImageDescListFontSize_SELECTION",gameImageDescListFontSize_SELECTION)

//track global cursor lock
let globalCursorLockedStatus:boolean=true
onPointerLockedStateChange.add(({ locked }) => {
  globalCursorLockedStatus = locked !== undefined && locked
  log("globalCursorLockedStatus",globalCursorLockedStatus)
})

export class PieceInfoModal {



  gameImageDescList: string[] = gameImageDescList_WEARABLE
  gameImageDescListVtextAlign: string[] = gameImageDescListVtextAlign_WEARABLE
  gameImageDescListFontSize: number[] = gameImageDescListFontSize_WEARABLE
  gameImageDescListImgSection: ImageSection[] = gameImageDescListFontSize_SELECTION
  gameTextYPos:number[] = gameTextYPos
  peiceInfo:PeiceInfo

  index = 0
  
  //if at end of carousel it rolls over to first or last
  wrapAroundEnabled:boolean = false

  tutorialPrompt!:ui.CustomPrompt


  tutorialTitle!:ui.CustomPromptText
  gameImageSubTitle!:ui.CustomPromptText

  cursorHintText!:ui.CustomPromptText
  cursorHintTextEnabled:boolean = true

  btnPrev!:ui.CustomPromptButton
  btnNext!:ui.CustomPromptButton

  btnPrevImg!:ui.CustomPromptIcon
  btnNextImg!:ui.CustomPromptIcon

  gameImage!:ui.CustomPromptIcon

  btnOK!:ui.CustomPromptButton
  btnMoreInfo!:ui.CustomPromptButton

  title = "Known Origin"
 
  updateCloseBtnPosition(){
    this.tutorialPrompt.closeIcon.positionY = PROMPT_PICKER_HEIGHT/2 - 30
    this.tutorialPrompt.closeIcon.positionX = PROMPT_PICKER_WIDTH/2 - 30
  }
  updateView(type:string){
    switch(type){
      case 'welcome-area':
        this.wrapAroundEnabled = false
        this.gameImageDescList = gameImageDescList_WEARABLE
        this.gameImageDescListVtextAlign = gameImageDescListVtextAlign_WEARABLE
        this.gameImageDescListFontSize = gameImageDescListFontSize_WEARABLE
        this.gameImageDescListImgSection = gameImageDescListFontSize_SELECTION
        this.gameTextYPos = gameTextYPos
        break;
      default:
        this.wrapAroundEnabled = false
        this.gameImageDescList = gameImageDescList_WEARABLE.splice(1)
        this.gameImageDescListVtextAlign = gameImageDescListVtextAlign_WEARABLE.splice(1)
        this.gameImageDescListFontSize = gameImageDescListFontSize_WEARABLE.splice(1)
        this.gameImageDescListImgSection = gameImageDescListFontSize_SELECTION.splice(1)
        this.gameTextYPos = gameTextYPos.splice(1)
    }
  }
  init() {


    let buttonPosY = BUTTON_POS_Y

    const tutorialPrompt = this.tutorialPrompt = new ui.CustomPrompt(custUiAtlas.src, PROMPT_PICKER_WIDTH, PROMPT_PICKER_HEIGHT)
    tutorialPrompt.background.source = custUiAtlas//workaround to try to save textures
    setSection(tutorialPrompt.background, resources.backgrounds.promptBackground)
    setSection(tutorialPrompt.closeIcon, resources.icons.closeD)

    tutorialPrompt.background.opacity = .85

    //tutorialPrompt.hide()

    tutorialPrompt.background.positionX = PROMPT_OFFSET_X
    tutorialPrompt.background.positionY = PROMPT_OFFSET_Y


    //why is it behind the background????
    //startGamePrompt.closeIcon.visible=true
    //startGamePrompt.closeIcon.positionX = PROMPT_OFFSET_X
    //bug where draws behind and too low. have to move it out
    tutorialPrompt.closeIcon.positionY = 310//310
    tutorialPrompt.closeIcon.positionX = 280//280


    this.tutorialPrompt.closeIcon.visible = true

    this.updateCloseBtnPosition()
    

    //need to override its close logic
    tutorialPrompt.closeIcon.onClick = new OnClick(() => {
      this.hide()
    })


    
    const backdrop_scale = 0 //16 is a little bigger bit fits tight
    const image_scale = 0 //16 is a little bigger bit fits tight
    //let gameImageBackDrop = startGamePrompt.addIcon('images/background.png',0,PLAYER_IMGSHOT_Y,256+backdrop_scale,256+backdrop_scale,{sourceHeight:256,sourceWidth:256})


    //const gameImage = this.gameImage = tutorialPrompt.addIcon(gameTutorialImg, 0, PLAYER_IMGSHOT_Y, IMAGE_DISPLAY_WIDTH + image_scale, IMAGE_DISPLAY_HEIGHT + image_scale, IMAGE_FULL_SELECTION)
    //gameImage.image.source = gameTutorialImgTexture//workaround to try to save textures
    //startGamePrompt.background.opacity = CONFIG.UI_BACKGROUND_OPACITY

    const tutorialTitle = this.tutorialTitle = tutorialPrompt.addText(this.title, 0, TITLE_TEXT_POS_Y, Color4.White(), 22)//BUTTON_POS_Y + BUTTON_HEIGHT*1.6)
    tutorialTitle.text.width = (IMAGE_WIDTH + image_scale) * 2 - 50 //IMAGE_WIDTH+image_scale - 30
    tutorialTitle.text.height = IMAGE_WIDTH + 140//+ image_scale - 0
    tutorialTitle.text.textWrapping = true
    tutorialTitle.text.vAlign="top"
    tutorialTitle.text.vTextAlign="center"

    const cursorHintText = this.cursorHintText = tutorialPrompt.addText("cursorHintText", 0, PROMPT_PICKER_HEIGHT/2 * -1 +10, Color4.White(), 12)//BUTTON_POS_Y + BUTTON_HEIGHT*1.6)
    this.updateCursorText(globalCursorLockedStatus)
    if(!this.cursorHintTextEnabled){
      this.cursorHintText.hide()
    }
    onPointerLockedStateChange.add(({ locked }) => {
      this.updateCursorText(locked)
    })

    const gameImageSubTitle = this.gameImageSubTitle = tutorialPrompt.addText(gameTutorialImgDesc, 0, PLAYER_IMGSHOT_TEXT_Y, Color4.White(), 14)//BUTTON_POS_Y + BUTTON_HEIGHT*1.6)
    //let gameImageSubTitleAddress = startGamePrompt.addText("No Player Selected", 0, BUTTON_POS_Y + BUTTON_HEIGHT*1.2)
    //gameImageSubTitle.text.width=IMAGE_WIDTH+image_scale - 30
    //gameImageSubTitle.text.height=IMAGE_WIDTH+image_scale - 50
    gameImageSubTitle.text.width = (IMAGE_WIDTH + image_scale) * 2 + 50 //IMAGE_WIDTH+image_scale - 30
    gameImageSubTitle.text.height = PROMPT_PICKER_HEIGHT - 200
    gameImageSubTitle.text.textWrapping = true
    gameImageSubTitle.text.vTextAlign = 'top'
    gameImageSubTitle.text.vAlign = 'center'
    gameImageSubTitle.text.hAlign = 'center'
    //pushes to top and to left
    //gameImageSubTitle.text.hTextAlign = 'left'
    //gameImageSubTitle.text.vTextAlign = 'top'
    //centers it completely
    gameImageSubTitle.text.hTextAlign = 'center'
    gameImageSubTitle.text.vTextAlign = 'top'


    const btnPrev = this.btnPrev = tutorialPrompt.addButton(
      'Prev',
      -100,
      buttonPosY,
      () => {
        log('Prev')
        this.nextGameImage(-1)
      },
      ui.ButtonStyles.E
    )
    btnPrev.hide()

    const arrowXOffset = 250//220


    const ARROW_IMAGE_HEIGHT = 54
    const ARROW_TEXT_POS_Y = 30
    const ARROW_IMG_POS_Y = -190//-130//-60//-25

    //tutorialPrompt.addText("<< Prev",arrowXOffset*-1,ARROW_TEXT_POS_Y,Color4.White())
    //tutorialPrompt.addText("Next >>",arrowXOffset,ARROW_TEXT_POS_Y,Color4.White())


    const btnPrevImg = this.btnPrevImg = tutorialPrompt.addIcon(custUiAtlas.src, arrowXOffset * -1, ARROW_IMAGE_HEIGHT + ARROW_IMG_POS_Y, ARROW_IMAGE_HEIGHT, ARROW_IMAGE_HEIGHT)
    setSection(btnPrevImg.image, resources.custom.ePrev)
    btnPrevImg.image.onClick = new OnClick(() => {
      log('Prev')
      this.nextGameImage(-1)
    })

    const btnNext = this.btnNext = tutorialPrompt.addButton(
      'Next',
      100,
      buttonPosY,
      () => {
        log('Next')
        this.nextGameImage(1)
      },
      ui.ButtonStyles.F
    )
    btnNext.hide()

    const btnNextImg = this.btnNextImg = tutorialPrompt.addIcon(custUiAtlas.src, arrowXOffset, ARROW_IMAGE_HEIGHT + ARROW_IMG_POS_Y, ARROW_IMAGE_HEIGHT, ARROW_IMAGE_HEIGHT)
    setSection(btnNextImg.image, resources.custom.fNExt)
    btnNextImg.image.onClick = new OnClick(() => {
      log('Next')
      this.nextGameImage(1)
    })

    Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, e => {
      if (!btnPrev.image.visible && +Date.now() - tutorialPrompt.UIOpenTime > 100) {
        //onClick()
        this.nextGameImage(-1)
      }
    })
    //} else if (style == ButtonStyles.F) {
    Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, e => {
      if (!btnNext.image.visible && +Date.now() - tutorialPrompt.UIOpenTime > 100) {
        this.nextGameImage(1)
      }
    })

    let gameTypeToPlay: string = 'main'

    const btnOK = this.btnOK = tutorialPrompt.addButton(
      'OK',
      0,
      buttonPosY - buttonHeight,
      () => {
        log('play')
       
        this.hide()
      }, 
      ui.ButtonStyles.E
    )

    btnOK.hide()
 

  }

  /*
  let btnCancel = tutorialPrompt.addButton(
    'Cancel',
    -100,
    buttonPosY - buttonHeight,
    () => {
      log('No')
      //startGamePrompt.hide()
      hideTutorialGamePrompt()
      ///showPickerPrompt()
    },
    //ui.ButtonStyles.F
  )*/
  //isNumber(n:any) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }


  updateData(peiceInfo:PeiceInfo|number){
    log("updateData",peiceInfo)
    if( typeof peiceInfo === 'number'){
      this.peiceInfo = CONFIG.peiceInfo[ peiceInfo ]
    }else{
      this.peiceInfo = peiceInfo as PeiceInfo
    }
    
    this.index = this.peiceInfo.index
    this.nextGameImage(0)
    //if(this.wrapAroundEnabled) this.nextGameImage(1)

  }

nextGameImage(dir: number){
  const panelArr = this.gameImageDescList

  
  if (dir > 0) {
    if (panelArr.length > this.index + dir) {
      this.index += dir
    }
    else {
      if(this.wrapAroundEnabled) this.index = 0
    }
  } else {
    if (this.index + dir >= 0) {
      this.index += dir
    } else {
      if(this.wrapAroundEnabled) this.index = panelArr.length - 1
    }
  }
  log("index " + this.index + " dir " + dir + " " + panelArr.length + " " + (panelArr.length < this.index + dir))
 
  //this.panelData = panelArr[this.index]
  this.title = this.peiceInfo.title

  this.tutorialTitle.text.value = this.title //
  //if(panelArr.length > 1) this.tutorialTitle.text.value += " " + (this.index + 1) + "/" + panelArr.length

  
  //const imgIdx = panelArr[this.index].imgIdx
  //const moreInfoUrl = panelArr[this.index].url
  //const teaserText = panelArr[this.index].teaserText
  //TODO FIX THIS!!!!'
  

  const teaserText = 
  "Artist: " + this.peiceInfo.artist
  +"\n\nTechnique: " + this.peiceInfo.technique
  +"\n\nConcept: " + this.peiceInfo.concept
  +"\n\nBrought By: " + this.peiceInfo.broughtBy
  if(teaserText !== undefined && teaserText != ''){
    this.gameImageSubTitle.text.value = teaserText
  }else{
    this.gameImageSubTitle.text.value = ''
  }

  if (this.gameImageDescListVtextAlign.length > this.index && this.gameImageDescListVtextAlign[this.index] !== '') {
    this.gameImageSubTitle.text.hTextAlign = this.gameImageDescListVtextAlign[this.index]
  } else {
    this.gameImageSubTitle.text.hTextAlign = 'left'
  }
  if (this.gameImageDescListFontSize.length > this.index && this.gameImageDescListFontSize[this.index] > 0) {
    this.gameImageSubTitle.text.fontSize = this.gameImageDescListFontSize[this.index]
  } else {
    this.gameImageSubTitle.text.fontSize = 16
  }
  this.gameImageSubTitle.text.positionY = this.gameTextYPos[this.index]

  /*
  if (this.gameImageDescListImgSection.length > this.index && this.gameImageDescListImgSection[this.index] !== undefined) {
    let idx = imgIdx
    if(idx !== undefined && idx >= 16){
      idx -= 16
    }
    if(idx !== undefined ) setSection( this.gameImage.image,this.gameImageDescListImgSection[idx] )
  } else {
    setSection( this.gameImage.image, IMAGE_FULL_SELECTION )
  }*/


  
  if (this.index == panelArr.length - 1) {
    this.btnOK.show()
    if(!this.wrapAroundEnabled) this.btnNextImg.hide()
    this.btnPrevImg.show()
  } else {
    if (this.index == 0) {
      if(!this.wrapAroundEnabled) this.btnPrevImg.hide()
      this.btnNextImg.show()
    } else {
      this.btnPrevImg.show()
      this.btnNextImg.show() 
    }
    this.btnOK.hide()
  }

  if(panelArr.length <= 1){
    this.btnPrevImg.hide()
    this.btnNextImg.hide() 
  }

  //this.gameImage.hide()
 
  this.btnOK.show()
  this.btnPrevImg.hide()
  this.btnNextImg.hide() 

}

updateCursorText(locked:boolean|undefined){
  if (locked) {
    this.cursorHintText.text.value = "Press ESCAPE to unlock mouse"
  } else { 
    this.cursorHintText.text.value = "Click to lock mouse"
  }
}
show(tutorialType ?: string){

  
  this.tutorialPrompt.show()

  if(!this.cursorHintTextEnabled){
    this.cursorHintText.hide()
  }

  this.updateCloseBtnPosition()

  this.nextGameImage(0)

  //FIXME making these invisible also stops them listening!?!?
  this.btnNext.image.visible = false
  this.btnNext.label.visible = false

  this.btnPrev.image.visible = false
  this.btnPrev.label.visible = false
  //btnNext.hide()
  //btnPrev.hide()
}

hide(){
  this.tutorialPrompt.hide()
}

}