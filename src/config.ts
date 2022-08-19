import { isPreviewMode } from "@decentraland/EnvironmentAPI"

const ParcelCountX:number = 4
const ParcelCountZ:number = 4
export class Config{
  sizeX!:number
  sizeY!:number
  sizeZ!:number

  IN_PREVIEW:boolean = false

  BUIDING_HEIGHT = 16
  BOOLEAN_HEIGHT = 4

  center!:Vector3
  centerGround!:Vector3
  
  init(){
    this.sizeX = ParcelCountX*16
    this.sizeZ = ParcelCountZ*16 
    this.sizeY = (Math.log((ParcelCountX*ParcelCountZ) + 1) * Math.LOG2E) * 20// log2(n+1) x 20 //Math.log2( ParcelScale + 1 ) * 20
    this.center = new Vector3(this.sizeX/2,this.sizeY/2,this.sizeZ/2)
    this.centerGround = new Vector3(this.sizeX/2,0,this.sizeZ/2)
    
  }
}

export const CONFIG = new Config()
CONFIG.init()



//set in preview mode from env, local == preview
isPreviewMode().then(function(val:boolean){
  setInPreview(val);
})

let concatString = ""
export function setInPreview(val: boolean) {
  log("setInPreview " + val)
  CONFIG.IN_PREVIEW = val


  if (val) {
    Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (e) => {
      
      //if (e.hit) {

        //ROLL UP CHAIN FOR FULLY QUALIFIED NAME
        let hitName = ''
        let hitTransform = null;

        if( e.hit && engine.entities[e.hit.entityId] !== undefined ){
          const ename = (engine.entities[e.hit.entityId] as Entity).name
          if(ename) hitName = ename

          if(engine.entities[e.hit.entityId].hasComponent(Transform)){
            hitTransform = engine.entities[e.hit.entityId].getComponent(Transform)
          }
        }
        /*log(`{ position: new Vector3(`,
        Camera.instance.position.x,
        ',',
        Camera.instance.position.y, 
        ',',
        Camera.instance.position.z,
        `) },` + 'HIT ENTITY: ', hitName + "(" + e.hit.entityId + ")" +' POS: ',
          hitTransform
        )*/
        ////e.hit?.hitPoint +` 
        //Camera.instance.position
        const str =  `{ 
          transform: new Vector3` + e.hit?.hitPoint  + `  
      },`
        concatString += str +"\n"
        log(
         concatString)
      /*}else{
        log(
          `{ position: new Vector3(`,
          Camera.instance.position.x,
          ',',
          Camera.instance.position.y,
          ',',
          Camera.instance.position.z,
          `) },`
        )
      }*/
    })
  }
  //var console: any
}


