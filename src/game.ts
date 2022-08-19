
// UXART Base Building

export let parent = new Entity()
parent.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(parent)

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

export let uxart_kosice_city = new Entity()
uxart_kosice_city.addComponent(new GLTFShape('models/uxart_kosice_city.glb'))
uxart_kosice_city.addComponent(
  new Transform({
    position: new Vector3(24, 0, 24),
    rotation: Quaternion.Euler(0, 0, 0),
  })
)
engine.addEntity(uxart_kosice_city)
uxart_kosice_city.setParent(parent)

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