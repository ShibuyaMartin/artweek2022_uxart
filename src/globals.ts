import { SceneManager } from "./modules/sceneMgmt/sceneManager";
import { VisibilityStrategyEnum } from "./modules/sceneMgmt/subScene";

export const SCENE_MGR = new SceneManager(); 
 

export const pivotScene = new Entity()
pivotScene.addComponent(new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(pivotScene)

export const ROOT_SCENE_VISIBILITY_STRATEGY = VisibilityStrategyEnum.ENGINE_ADD_REMOVE
export const ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD = true

