import * as utils from '@dcl/ecs-scene-utils'

let pivotscene = new Entity()
pivotscene.addComponent(new Transform({
    position: new Vector3(24, 0, 24),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(pivotscene)

export class VideoScreen {
    videoTexture: VideoTexture = new VideoTexture(new VideoClip(""))
    videoMaterial: Material = new Material()

    thumbnailTexture: Texture = new Texture("")
    thumbnailMaterial: Material = new Material()

    videoScreen: Entity = new Entity()

    constructor(_thumbnailSource: string, _videoSource: string, _videoTransform: Transform, _triggerArea: utils.TriggerBoxShape) {
        //setup video material
        this.videoTexture = new VideoTexture(new VideoClip(_videoSource))
        this.videoMaterial.albedoTexture = this.videoTexture
        this.videoMaterial.emissiveTexture = this.videoTexture
        this.videoMaterial.emissiveIntensity = 1
        this.videoMaterial.emissiveColor = Color3.White()
        this.videoMaterial.roughness = 0.6

        this.videoTexture.loop = true
        this.videoTexture.playing = false

        //setup thumbnail material
        this.thumbnailTexture = new Texture(_thumbnailSource)
        this.thumbnailMaterial = new Material()
        this.thumbnailMaterial.albedoTexture = this.thumbnailTexture
        this.thumbnailMaterial.specularIntensity = 0
        this.thumbnailMaterial.metallic = 0
        this.thumbnailMaterial.roughness = 1
        this.thumbnailMaterial.emissiveTexture = this.thumbnailTexture
        this.thumbnailMaterial.emissiveIntensity = 0.5
        this.thumbnailMaterial.emissiveColor = Color3.White()
        this.thumbnailMaterial.transparencyMode = TransparencyMode.ALPHA_BLEND

        //setup video screen
        this.videoScreen.addComponent(new Transform(_videoTransform))
        //this.videoScreen.getComponent(Transform).scale.y = _videoTransform.scale.y * -1
        this.videoScreen.addComponent(new PlaneShape())

        //this.videoScreen.addComponentOrReplace(this.videoMaterial)
        this.videoScreen.addComponentOrReplace(this.thumbnailMaterial)
        this.videoScreen.setParent(pivotscene)

        this.videoScreen.addComponent(
            new utils.TriggerComponent(_triggerArea, {
                onCameraEnter: () => {
                    this.videoScreen.addComponentOrReplace(this.videoMaterial)
                    this.videoScreen.getComponent(Transform).scale.y = _videoTransform.scale.y * -1
                    this.play()
                },
                onCameraExit: () => {
                    this.videoScreen.addComponentOrReplace(this.thumbnailMaterial)
                    this.videoScreen.getComponent(Transform).scale.y = _videoTransform.scale.y * -1
                    this.stop()
                },
                enableDebug: false,
            })
        )

    }
    play() {
        this.videoTexture.playing = true
    }
    stop() {
        this.videoTexture.playing = false
    }
}

