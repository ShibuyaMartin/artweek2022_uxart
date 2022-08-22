
// UXART Base Building

import { CONFIG } from "./config"
import { ROOT_SCENE_VISIBILITY_STRATEGY, SCENE_MGR } from "./globals"
import { BaseEntityWrapper, SubScene } from "./modules/sceneMgmt/subScene"
import { SceneVector3Type, SpawnPoint } from "./modules/sceneMgmt/types"
import { makeTeleport } from "./teleport/teleport"

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
    rotation: Quaternion.Euler(0, 0, 0),
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

const secondSceneEntity = firstFloorScene.addEntity(parentSky)
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
uxart_minujin.addComponent(new GLTFShape('models/uxart_minujin.glb'))
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

// UXART Monolith

export let uxart_monolith = new Entity()
uxart_monolith.addComponent(new GLTFShape('models/uxart_monolith.glb'))
uxart_monolith.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(uxart_monolith)
uxart_monolith.setParent(parent)

// UXART teleporter

export let uxart_teleporter = new Entity()
uxart_teleporter.addComponent(new GLTFShape('models/uxart_teleporter.glb'))
uxart_teleporter.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(uxart_eyes)
uxart_teleporter.setParent(parent)


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