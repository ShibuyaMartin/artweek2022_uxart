import { PositionType } from "@decentraland/RestrictedActions"

export class SceneVector3Type<T extends number|number[]>  {
  x:T
  y:T
  z:T

  //_cachedFixedPosition:Vector3
  
  constructor(x:T,y:T,z:T){
    this.x = x
    this.y = y
    this.z = z
  }

  toCenterVector3():Vector3{
    const x:number = this.findCenter(this.x)
    const y:number = this.findCenter(this.y)
    const z:number =this.findCenter(this.z)

    return new Vector3(x,y,z)
  }

  findCenter(val:T):number{
    return Array.isArray(val) ? (val[0] + val[1])/2 : val
  }
  copyFrom(src:Vector3){
    if(Array.isArray(this.x)){
      this.x = [src.x] as T
    }else{
      this.x = src.x as T
    }
    if(Array.isArray(this.y)){
      this.y = [src.y] as T
    }else{
      this.y = src.y as T
    }
    if(Array.isArray(this.z)){
      this.z = [src.z] as T
    }else{
      this.z = src.z as T
    }
  }
}


export class ScenePOI{
  name?: string
  type?: string
  default?: boolean
  position?: SceneVector3Type<number|number[]>
  cameraLookAt?: Vector3
  
  constructor(args:ScenePOIType){
    if(args && args.position) this.position = args.position
    if(args && args.default !== undefined) this.default = args.default
    if(args && args.type !== undefined) this.type = args.type
    if(args && args.name !== undefined) this.name = args.name
    if(args && args.cameraLookAt !== undefined) this.cameraLookAt = args.cameraLookAt
  }
  
  toTransformConstructorArg(){
    return {position : this.position?.toCenterVector3()}
  }
}

export class SpawnPoint extends ScenePOI  {
  
}

 
export type POISelectorType={
  name?: string
  type?: string
  default?: boolean
}

export type ScenePOIType={
  name?: string
  type?: string
  default?: boolean
  position: SceneVector3Type<number|number[]>
  cameraLookAt?: Vector3
}