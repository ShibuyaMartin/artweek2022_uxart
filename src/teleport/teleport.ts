import * as utils from '@dcl/ecs-scene-utils'
import { RESOURCES } from 'src/resources'
import { setTeleportCountdown, setTeleportCountdownLabel, showTeleportUI } from './teleport-ui'

export let canTeleport = true
const entityTeleportLock = new Entity()
engine.addEntity(entityTeleportLock)

const entityTeleportUI = new Entity()
engine.addEntity(entityTeleportUI)

const entityTeleportCounter = new Entity()
engine.addEntity(entityTeleportCounter)

const teleportStartCountDown = 3
let teleportCountDown = teleportStartCountDown-1

export function makeTeleport(parent:Entity|undefined,name:string,teleportShape:GLTFShape|Shape|BoxShape,hoverText:string,teleportText:string,transformArgs:TransformConstructorArgs,callback:()=>void){
            const teleportShapeEnt = new Entity("teleporter-"+name)
            teleportShapeEnt.addComponent(teleportShape) 
            teleportShapeEnt.addComponent(RESOURCES.materials.transparent)
            const tf = new Transform(transformArgs)
            //tf.position.y -= resourcesDropin.playerHeight - resourcesDropin.floorHeight   
            teleportShapeEnt.addComponent(tf) 
            teleportShapeEnt.addComponent(new OnPointerDown(()=>{
                canTeleport = false
                entityTeleportLock.addComponentOrReplace(new utils.Delay(1000,()=>{
                    canTeleport = true
                }))
                callback()
            },{
                hoverText:hoverText
            }))
            //teleportShapeEnt.setParent(ent)    
            engine.addEntity(teleportShapeEnt)   
            //hud.attachToEntity(teleportShapeEnt)
            
            // create trigger area object, setting size and relative position
            let triggerBox = new utils.TriggerSphereShape( 2 )

            const triggerEnt = new Entity()
            triggerEnt.setParent(teleportShapeEnt)
            //)
            const tf2 = new Transform({
                position: new Vector3(.2,0,0),
                scale: transformArgs.scale?.clone()
            })
            //tf2.position.y -= 1//resourcesDropin.playerHeight - resourcesDropin.floorHeight   
            triggerEnt.addComponent(tf2)
            //create trigger for entity
            triggerEnt.addComponent(
                new utils.TriggerComponent(
                    triggerBox, //shape
                    { 
                    onCameraEnter : () => {
                        if(canTeleport){
                            if(hoverText) setTeleportCountdownLabel(teleportText)
                            teleportCountDown = teleportStartCountDown-1
                            showTeleportUI(true)
                            entityTeleportCounter.addComponentOrReplace(new utils.Interval(500,()=>{
                                setTeleportCountdown(teleportCountDown.toFixed(0))
                                teleportCountDown -= .5
                                
                                if(teleportCountDown == 0){
                                    entityTeleportCounter.removeComponent(utils.Interval)
                                    entityTeleportUI.addComponentOrReplace(new utils.Delay(1000,()=>{
                                        if(canTeleport){
                                            teleportCountDown = teleportStartCountDown-1
                                            setTeleportCountdown(teleportCountDown.toFixed(0))
                                            canTeleport = false
                                            showTeleportUI(false)
                                            
                                            callback()

                                            entityTeleportLock.addComponentOrReplace(new utils.Delay(1000,()=>{
                                                canTeleport = true
                                            }))
                                        }else{
                                            log("no teleport yet")
                                        }
                                    }))
                                }
                            }))
                            
                        } 
                        
                        //log("entered!")   
                    },onCameraExit : () => {
                        //canTeleport = true
                        //log("entered!")   
                        showTeleportUI(false)
                        teleportCountDown = teleportStartCountDown
                        setTeleportCountdown(teleportCountDown.toFixed(0))
                        if(entityTeleportCounter.hasComponent(utils.Interval))entityTeleportCounter.removeComponent(utils.Interval)
                    }
                    ,enableDebug: false 
                    }
                )
            )
}