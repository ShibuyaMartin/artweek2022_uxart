
// UXART Base Building

import { CONFIG } from "./config"
import { ROOT_SCENE_VISIBILITY_STRATEGY, SCENE_MGR } from "./globals"
import { videoIBM } from "./IBMvideos"
import { BaseEntityWrapper, SubScene } from "./modules/sceneMgmt/subScene"
import { SceneVector3Type, SpawnPoint } from "./modules/sceneMgmt/types"
import { RESOURCES } from "./resources"
import { makeTeleport } from "./teleport/teleport"
import { PieceInfoModal } from "./ui-peice-info"

export let parent = new Entity()
parent.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(parent)


export let parentEmpty = new Entity()
parentEmpty.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(parentEmpty)

export let parentSky = new Entity()
parentSky.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
//engine.addEntity(parentSky)

export let uxart_base = new Entity()
uxart_base.addComponent(new GLTFShape('models/uxart_base.glb')) 
uxart_base.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(uxart_base)
uxart_base.setParent(parent)


const firstFloorId = SCENE_MGR.generateSceneId()
const firstFloorScene = new SubScene(firstFloorId, "firstFloor", [], undefined, undefined)

const sceneEntity = firstFloorScene.addEntity(parentEmpty)
sceneEntity.visibilityStrategy = ROOT_SCENE_VISIBILITY_STRATEGY

sceneEntity.addOnInitListener((entityWrap: BaseEntityWrapper) => {
    if (!sceneEntity.rootEntity.alive) engine.addEntity(sceneEntity.rootEntity)
})


SCENE_MGR.addScene(firstFloorScene)
SCENE_MGR.firstFloor = firstFloorScene

// UXART Eyes

export let uxart_eyes = new Entity()
uxart_eyes.addComponent(new GLTFShape('models/uxart_eyes.glb'))
uxart_eyes.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_eyes)
uxart_eyes.setParent(parent)

// UXART Eyes_02

export let uxart_eyes_02 = new Entity()
uxart_eyes_02.addComponent(new GLTFShape('models/uxart_eyes.glb'))
uxart_eyes_02.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(uxart_eyes)
uxart_eyes_02.setParent(parent)

// UXART McEntyre

export let uxart_mc_entyre = new Entity()
uxart_mc_entyre.addComponent(new GLTFShape('models/uxart_mc_entyre.glb'))
uxart_mc_entyre.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_mc_entyre)
uxart_mc_entyre.setParent(parent)

// UXART Polosello

export let uxart_polosello = new Entity()
uxart_polosello.addComponent(new GLTFShape('models/uxart_polosello.glb'))
uxart_polosello.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_polosello)
uxart_polosello.setParent(parent)

// UXART Eduardo Rodriguez

export let uxart_eduardo_rodriguez = new Entity()
uxart_eduardo_rodriguez.addComponent(new GLTFShape('models/uxart_eduardo_rodriguez.glb'))
uxart_eduardo_rodriguez.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_eduardo_rodriguez)
uxart_eduardo_rodriguez.setParent(parent)

// UXART Kosice City
//top part
export let uxart_kosice_city = new Entity()
uxart_kosice_city.addComponent(new GLTFShape('models/uxart_kosice_city.glb'))
uxart_kosice_city.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
//engine.addEntity(uxart_kosice_city)
uxart_kosice_city.setParent(parent)

    

const secondFloorId = SCENE_MGR.generateSceneId()
const secondFloorScene = new SubScene(secondFloorId, "secondFloor", [], undefined, undefined)

const secondSceneEntity = secondFloorScene.addEntity(parentSky)
secondSceneEntity.visibilityStrategy = ROOT_SCENE_VISIBILITY_STRATEGY

secondSceneEntity.addOnInitListener((entityWrap: BaseEntityWrapper) => {
    if (!secondSceneEntity.rootEntity.alive) engine.addEntity(secondSceneEntity.rootEntity)
})


SCENE_MGR.addScene(secondFloorScene)
SCENE_MGR.secondFloor = secondFloorScene


// UXART Miguel Angel Vidal

export let uxart_miguel_angel_vidal = new Entity()
uxart_miguel_angel_vidal.addComponent(new GLTFShape('models/uxart_miguel_angel_vidal.glb'))
uxart_miguel_angel_vidal.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_miguel_angel_vidal)
uxart_miguel_angel_vidal.setParent(parent)

// UXART Marta Minujin

export let uxart_minujin = new Entity()
uxart_minujin.addComponent(new GLTFShape('models/uxart_minujin.glb')) //corn
uxart_minujin.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_minujin)
uxart_minujin.setParent(parent)


// UXART Kosice Gota

export let uxart_kosice_gota = new Entity()
uxart_kosice_gota.addComponent(new GLTFShape('models/uxart_kosice_gota.glb'))
uxart_kosice_gota.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_kosice_gota)
uxart_kosice_gota.setParent(parent)

// UXART Alberto Echegaray

export let uxart_alberto = new Entity()
uxart_alberto.addComponent(new GLTFShape('models/uxart_alberto.glb'))
uxart_alberto.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_alberto)
uxart_alberto.setParent(parent)

// UXART teleporter

export let uxart_teleporter = new Entity()
uxart_teleporter.addComponent(new GLTFShape('models/uxart_teleporter.glb'))
uxart_teleporter.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(uxart_teleporter)
uxart_teleporter.setParent(parent)

// UXART IBM

export let uxart_ibm = new Entity()
uxart_ibm.addComponent(new GLTFShape('models/uxart_IBM.glb'))
uxart_ibm.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(uxart_ibm)
uxart_ibm.setParent(parent)

/*
{index:0,id:"MacEntyre",hoverText:"Info",teleportPos:"52,84",title:"Virtual Reconstruction 2020 of ”Totemic Form” 1987.",artist:"Eduardo MacEntyre",technique:"Digital Moire Effect",year:"",concept:"Mac Entyre's work in 1959 created a genre they themselves described as Generative art, a movement later expanded on by world-renowned computer artists like Benoît Mandelbrot.\n\nSketched until relatively recently by hand following a series of random algorithms, Mac Entyre's work is reminiscent of Leonardo Fibonacci's 13th-century nautilus designs – though Mac Entyre's are more complex owing to their randomness, as each work forms a helix alike in no two sketches. Mac Entyre created a body of more traditional Abstract, Cubist and Figurative art. He was honored by the Organization of American States in 1986 for his contribution to Modern Art in Latin America",broughtBy:"UXART",teaserText:""},
  {index:1,id:"Kosice-gota",hoverText:"Info",teleportPos:"61,67",title:"Digital reconstruction 2020 of Relieve 'Gota Negra' 1968.",artist:"Gyula Kosice",technique:"An interactive and animated digital reconstructions of the original Relieve Gota Negra (1968) featured a black plexiglass waterdrop with space-like backlight and moving water, part of Kosice’s hydrokinetic series and waterdrop shape exploration.",year:"",concept:"With the curatorial supervision of Art Historian Maria José Herrera, featuring Kosice’s and other kinetic artists works after the “Real/Virtual” exhibition held at the Museo Nacional de Bellas Artes, in Buenos Aires (2012). It is present since 2020 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso, Argentina and currently present in the First NFT pavilion of the Venice Biennale.",broughtBy:"UXART",teaserText:""},
  {index:2,id:"Polesello",hoverText:"Info",teleportPos:"50,93",title:"Digital Reconstruction 2020 of ”Untitled” 1973.",artist:"Rogelio Polesello",technique:"An interactive and animated digital reconstruction of opt art artwork ¨Untitled¨ created in 1973 in acrylic on canvas.",year:"",concept:"With the curatorial supervision of Art Historian Maria José Herrera, featuring Polesello’s and other kinetic and opt art artists works after the “Real/Virtual” exhibition held at the Museo Nacional de Bellas Artes, in Buenos Aires (2012). It is present since 2020 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso.",broughtBy:"UXART",teaserText:""},
  {index:3,id:"Vidal",hoverText:"Info",teleportPos:"66,62",title:"Digital reconstruction 2020 of “Generative Painting”, 1960, oil on wood.",artist:"Miguel Angel Vidal",technique:"Digital 3D reconstruction of an iconic painting of generative art where movement, displacement, vibration are the protagonists and the image breaks the basic plane without being adhered to a flat surface.",year:"",concept:"The Generative Art Manifest the artists wrote on 1960´s points out: ¨This kind of painting identifies itself with more technological terms created in the times we live in and that it would be illogical trying to escape (…)as they produce STRENGHT, because it is actually created when giving the impression of falling off and willing to penetrate the basic foreground and ENERGY because it is produced through their movements and vibrations (…) on that fact the term should not be another limiting term but it should also include all the future and legitimate research works which might give way to engender new beauty.¨ The digital piece is also exhibit in Uxart augmented Reality Metaverse and in “XReal: NFTs Festival” in Isla El Descanso in Argentina and nowadays in the Venice Biennale in the first NFT physical pavilion.",broughtBy:"UXART",teaserText:""},
  {index:4,id:"Kosice-city",hoverText:"Info",teleportPos:"61,56",title:"Digital reconstruction 2020 of Hidro Space City 1971",artist:"Gyula Kosice",technique:"A 3D and 360 architectural model reconstruction of the city model conceived to be the future of cities when humans will leave in the space.",year:"",concept:"Working together with Kosice´s Foundation this digital artwork is part of an educational program given to every school in Buenos Aires, Argentina and in almost the entire country. ¨The man will not live in the earth¨ was the idea of the artist that created the first utopian architectural models in which only poetry and design were the most relevant features to live. It is present since 2021 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso, Argentina .",broughtBy:"UXART",teaserText:""},
  {index:5,id:"Pinocchio",hoverText:"Info",teleportPos:"53,57",title:"Pinocchio",artist:"Alberto Echegaray Guevara (Cayman)",technique:"3D model, digital reconstruction of art artwork.",year:"https://decentraland.org/blog/art-week-2022/apehrodite",concept:"A metallic Pinocchio, 3 meters hight, using the figure of the Italian puppet and the allegory of the novel by Carlo Collodi to focus our attention on global corruption and lies today. The sculpture Global Lies, created in polished stainless steel was presented for the first time in the city of Buenos Aires during the last G-20 Summit in front of the venue where the dignitaries of the participating countries met. Also was selected for the Biennale di Venezia in 2019. The artist created an NFT, and the augmented reality file to position it in every Goverment building around the world. Artist: Cayman- Alberto Echegaray Guevara",broughtBy:"UXART",teaserText:""},
  {index:6,id:"Minujin",hoverText:"Info",teleportPos:"",title:"Digital Reconstruction 2020 of soft sculpture ”Conceptos Entrelazados” 2016",artist:"Marta Minujin",technique:"3D Digital reconstruction of a soft sculpture made from modified mattresses stitched together and painted in bold colors, feature in Minujín´s Colchones series.",year:"Digital Reconstruction 2020 of soft sculpture ¨Conceptos Entrelazados¨ 2016",concept:"Marta Minujin was born in 1943 in Buenos Aires and is recognized as a Pop Artist but also as a pioneer of happenings, performance art, soft sculpture and video. She often uses ephemeral materials and pursues different approaches with irreverent practices to collectible art objects. This artwork was created in code and reconstructed in 3D version during the Covid restrictions to visit museums, the artwork was also geo localized in the Augmented Reality Metaverse UXART Map in front of more than 19 museum all over the world where the artists is part of their permanent collections, to allow art and creativity to be free through new digital techniques.",broughtBy:"UXART",teaserText:""},
  {index:7,id:"Rodrigueze",hoverText:"Info",teleportPos:"",title:"Digital Reconstruction 2020 of Continuous Space.",artist:"Eduardo Rodriguez",technique:"An interactive and animated digital reconstruction.",year:"",concept:"One pf the last kinetic masters alive, Eduardo always dreamed of achieve his mechanical installations could fly over the spectrum. Now with the holographic concepts and new medias with augmented reality and 3D designed his dream was achieved. This artwork also had the curatorial supervision of Art Historian Maria José Herrera, featuring Polesello’s and other kinetic and opt art artists works after the “Real/Virtual” exhibition held at the Museo Nacional de Bellas Artes, in Buenos Aires (2012). It is present since 2020 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso.",broughtBy:"UXART",teaserText:""}
  */

const peices=[
  {entity:uxart_mc_entyre,info:CONFIG.peiceInfo[0],collider:{ 
      position: new Vector3(12.6737060546875-2, 0.9089627265930176, 24.176513671875-.4)  
      ,scale: new Vector3(4,8,4)
    }},//0 - vortex tube
  
  {entity:uxart_kosice_gota,info:CONFIG.peiceInfo[1],collider:{ 
    position: new Vector3(24,6,24)  
    ,scale: new Vector3(3,4,3)
  }},//1 tier drop thing

  {entity:uxart_polosello,info:CONFIG.peiceInfo[2],collider:
    { 
      position: new Vector3(14.2520751953125-2, 1.4564660787582397+1, 32.10498046875-1)  
      ,scale: new Vector3(3,4,3)
    }},
  //2
  
  {entity:uxart_miguel_angel_vidal,info:CONFIG.peiceInfo[3],collider:{ 
    position: new Vector3(14.757568359375-2, 1.1395968198776245+1, 17.22412109375)  
    ,scale: new Vector3(3,4,3)
  }}//3
  ,
  //{entity:uxart_monolith, 
    {entity:uxart_alberto,info:CONFIG.peiceInfo[5],collider: { 
      position: new Vector3(35.94287109375+1, 0.6557663679122925+2, 32.263427734375)  
      ,scale: new Vector3(3,9,3)
    }} //5 Pinocchio
    ,
    {entity:uxart_minujin,info:CONFIG.peiceInfo[6],collider: { 
      position: new Vector3(34.4962158203125+1, 0.7153095006942749+2, 23.593994140625)  
      ,scale: new Vector3(3,4,3)
    }} //6 - wierd thing
    ,
    {entity:uxart_eduardo_rodriguez,info:CONFIG.peiceInfo[7],collider: { 
      position: new Vector3(34.7171630859375-1, 0.15656159818172455+5, 16.4766845703125)  
      ,scale: new Vector3(3,4,3)
    }} //7 continuous space*/

    //ADDITIONAL IBM VIDEOS (OUTSIDE BUILDING)
    ,
    {
        entity: videoIBM[0].videoScreen, info: CONFIG.peiceInfo[10], collider: {
            position: new Vector3(
                -1 * videoIBM[0].videoScreen.getComponent(Transform).position.x,
                videoIBM[0].videoScreen.getComponent(Transform).position.y,
                -1 * videoIBM[0].videoScreen.getComponent(Transform).position.z,
            ).add(new Vector3(24, 0, 24))
            , scale: new Vector3(0.5, 4.5, 8.5)
        }
    }
    ,
    {
        entity: videoIBM[1].videoScreen, info: CONFIG.peiceInfo[11], collider: {
            position: new Vector3(
                -1 * videoIBM[1].videoScreen.getComponent(Transform).position.x,
                videoIBM[1].videoScreen.getComponent(Transform).position.y,
                -1 * videoIBM[1].videoScreen.getComponent(Transform).position.z,
            ).add(new Vector3(24, 0, 24))
            , scale: new Vector3(0.5, 4.5, 8.5)
        }
    }
    ,
    {
        entity: videoIBM[2].videoScreen, info: CONFIG.peiceInfo[8], collider: {
            position: new Vector3(
                -1 * videoIBM[2].videoScreen.getComponent(Transform).position.x,
                videoIBM[2].videoScreen.getComponent(Transform).position.y,
                -1 * videoIBM[2].videoScreen.getComponent(Transform).position.z,
            ).add(new Vector3(24, 0, 24))
            , scale: new Vector3(0.5, 4.5, 8.5)
        }
    }
    ,
    {
        entity: videoIBM[3].videoScreen, info: CONFIG.peiceInfo[9], collider: {
            position: new Vector3(
                -1 * videoIBM[3].videoScreen.getComponent(Transform).position.x,
                videoIBM[3].videoScreen.getComponent(Transform).position.y,
                -1 * videoIBM[3].videoScreen.getComponent(Transform).position.z,
            ).add(new Vector3(24, 0, 24))
            , scale: new Vector3(0.5, 4.5, 8.5)
        }
    }
]

const infoModal = new PieceInfoModal()
infoModal.init()
infoModal.hide()

const peiceCollider = new BoxShape()
for(let x=0; x < peices.length; x++){
  const entity = peices[x].entity
  const info = peices[x].info
  const colliderData = peices[x].collider

  const onPointer = new OnPointerDown(()=>{
    log("clicked ",entity.name,x)
    infoModal.updateData(info)
    infoModal.nextGameImage(0)
    infoModal.show()
  },{ 
    hoverText: info.title //+ "\ntest "+x+"."+entity.getComponent(GLTFShape).src
  })
  //if(peicesColldierPo[x]){
    
    const collider = new Entity()
    collider.addComponent(peiceCollider)
    collider.addComponent(
      new Transform({
        position: colliderData.position,
        scale: colliderData.scale,
        rotation: Quaternion.Euler(0, 0, 0),
      }) 
    )
    //collider.addComponent(RESOURCES.materials.transparent)
    collider.addComponent(new Material())
    collider.getComponent(Material).albedoColor = new Color4(0.5, 0, 0.5, 0)

    collider.addComponent(onPointer) 
    engine.addEntity(collider)
    //collider.setParent(parent)
  //}

  entity.addComponent(onPointer)
}


const firstFloorTeleportPos = new Vector3(24,1,19)
const secondFloorTeleportPos = new Vector3(24,50,20) 



const teleportShape = new BoxShape()
teleportShape.withCollisions=false
makeTeleport(parent,"teleporter",teleportShape,"To Second Floor","2nd Floor",{
    position: firstFloorTeleportPos,
    scale: Vector3.One().scale(2)
},()=>{ 
    log("teleport to second floor done")
    SCENE_MGR.changeToScene(secondFloorScene)

    const spawnVector = new SceneVector3Type(0,0,0)
    spawnVector.copyFrom(secondFloorTeleportPos)

    const target = new SpawnPoint({
      position: spawnVector,
      cameraLookAt: CONFIG.centerGround.clone().add(new Vector3(0,secondFloorTeleportPos.y,0))
    })
    secondFloorScene.movePlayerHere( target ) 
})

makeTeleport(parentSky,"teleporter2",teleportShape,"To First Floor","1rst Floor",{
    position: secondFloorTeleportPos,
    scale: Vector3.One().scale(3)
},()=>{
    log("teleport to second floor done")
    SCENE_MGR.changeToScene(firstFloorScene)

    const spawnVector = new SceneVector3Type(0,0,0)
    spawnVector.copyFrom(firstFloorTeleportPos.add(new Vector3(-2,0,0)))

    const target = new SpawnPoint({
      position: spawnVector,
      cameraLookAt: CONFIG.centerGround.clone()
    })
    
    firstFloorScene.movePlayerHere( target )
})