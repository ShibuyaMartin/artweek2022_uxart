import { isPreviewMode } from "@decentraland/EnvironmentAPI"

const ParcelCountX:number = 4
const ParcelCountZ:number = 4

export type PeiceInfo={
  index:number
  id:string
  hoverText:string
  teleportPos:string
  title:string
  artist:string
  technique:string
  year:string
  concept:string
  broughtBy:string
  teaserText:string

}
const peiceInfo:PeiceInfo[]=
[
  {index:0,id:"MacEntyre",hoverText:"Info",teleportPos:"52,84",title:"Virtual Reconstruction 2020 of ”Totemic Form” 1987.",artist:"Eduardo MacEntyre",technique:"Digital Moire Effect",year:"",concept:"Mac Entyre's work in 1959 created a genre they themselves described as Generative art, a movement later expanded on by world-renowned computer artists like Benoît Mandelbrot.\n\nSketched until relatively recently by hand following a series of random algorithms, Mac Entyre's work is reminiscent of Leonardo Fibonacci's 13th-century nautilus designs – though Mac Entyre's are more complex owing to their randomness, as each work forms a helix alike in no two sketches. Mac Entyre created a body of more traditional Abstract, Cubist and Figurative art. He was honored by the Organization of American States in 1986 for his contribution to Modern Art in Latin America",broughtBy:"UXART",teaserText:""},
  {index:1,id:"Kosice-gota",hoverText:"Info",teleportPos:"61,67",title:"Digital reconstruction 2020 of Relieve 'Gota Negra' 1968.",artist:"Gyula Kosice",technique:"An interactive and animated digital reconstructions of the original Relieve Gota Negra (1968) featured a black plexiglass waterdrop with space-like backlight and moving water, part of Kosice’s hydrokinetic series and waterdrop shape exploration.",year:"",concept:"With the curatorial supervision of Art Historian Maria José Herrera, featuring Kosice’s and other kinetic artists works after the “Real/Virtual” exhibition held at the Museo Nacional de Bellas Artes, in Buenos Aires (2012). It is present since 2020 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso, Argentina and currently present in the First NFT pavilion of the Venice Biennale.",broughtBy:"UXART",teaserText:""},
  {index:2,id:"Polesello",hoverText:"Info",teleportPos:"50,93",title:"Digital Reconstruction 2020 of ”Untitled” 1973.",artist:"Rogelio Polesello",technique:"An interactive and animated digital reconstruction of opt art artwork ¨Untitled¨ created in 1973 in acrylic on canvas.",year:"",concept:"With the curatorial supervision of Art Historian Maria José Herrera, featuring Polesello’s and other kinetic and opt art artists works after the “Real/Virtual” exhibition held at the Museo Nacional de Bellas Artes, in Buenos Aires (2012). It is present since 2020 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso.",broughtBy:"UXART",teaserText:""},
  {index:3,id:"Vidal",hoverText:"Info",teleportPos:"66,62",title:"Digital reconstruction 2020 of “Generative Painting”, 1960, oil on wood.",artist:"Miguel Angel Vidal",technique:"Digital 3D reconstruction of an iconic painting of generative art where movement, displacement, vibration are the protagonists and the image breaks the basic plane without being adhered to a flat surface.",year:"",concept:"The Generative Art Manifest the artists wrote on 1960´s points out: ¨This kind of painting identifies itself with more technological terms created in the times we live in and that it would be illogical trying to escape (…)as they produce STRENGHT, because it is actually created when giving the impression of falling off and willing to penetrate the basic foreground and ENERGY because it is produced through their movements and vibrations (…) on that fact the term should not be another limiting term but it should also include all the future and legitimate research works which might give way to engender new beauty.¨ The digital piece is also exhibit in Uxart augmented Reality Metaverse and in “XReal: NFTs Festival” in Isla El Descanso in Argentina and nowadays in the Venice Biennale in the first NFT physical pavilion.",broughtBy:"UXART",teaserText:""},
  {index:4,id:"Kosice-city",hoverText:"Info",teleportPos:"61,56",title:"Digital reconstruction 2020 of Hidro Space City 1971",artist:"Gyula Kosice",technique:"A 3D and 360 architectural model reconstruction of the city model conceived to be the future of cities when humans will leave in the space.",year:"",concept:"Working together with Kosice´s Foundation this digital artwork is part of an educational program given to every school in Buenos Aires, Argentina and in almost the entire country. ¨The man will not live in the earth¨ was the idea of the artist that created the first utopian architectural models in which only poetry and design were the most relevant features to live. It is present since 2021 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso, Argentina .",broughtBy:"UXART",teaserText:""},
  {index:5,id:"Pinocchio",hoverText:"Info",teleportPos:"53,57",title:"Pinocchio",artist:"Alberto Echegaray Guevara (Cayman)",technique:"3D model, digital reconstruction of art artwork.",year:"https://decentraland.org/blog/art-week-2022/apehrodite",concept:"A metallic Pinocchio, 3 meters hight, using the figure of the Italian puppet and the allegory of the novel by Carlo Collodi to focus our attention on global corruption and lies today. The sculpture Global Lies, created in polished stainless steel was presented for the first time in the city of Buenos Aires during the last G-20 Summit in front of the venue where the dignitaries of the participating countries met. Also was selected for the Biennale di Venezia in 2019. The artist created an NFT, and the augmented reality file to position it in every Goverment building around the world. Artist: Cayman- Alberto Echegaray Guevara",broughtBy:"UXART",teaserText:""},
  {index:6,id:"Minujin",hoverText:"Info",teleportPos:"",title:"External Debt Payment",artist:"Marta Minujin", technique:"Digital reconstruction of a photographic performance made in New York with pot art icon Andy Warhol where Marta Minujin pays the Argentinean External Debt with corn, the latin american gold.",year:"",concept:"arta Minujin is consider the Queen of Pop Art and the happening concept. A performance was realized but only registered by a camera, now reconstructed in 3D version during the Covid restrictions to visit museums that artwork was geo localized in the Augmented Reality Metaverse UXART Map in front of more than 19 museum all over the world where the artists is part of their permanent collections, to allow art and creativity to be free through new digital techniques.",broughtBy:"UXART",teaserText:""},
  {index:7,id:"Continuous-Space",hoverText:"Info",teleportPos:"",title:"Digital Reconstruction 2020 of Continuous Space.",artist:"Eduardo Rodriguez",technique:"An interactive and animated digital reconstruction.",year:"",concept:"One pf the last kinetic masters alive, Eduardo always dreamed of achieve his mechanical installations could fly over the spectrum. Now with the holographic concepts and new medias with augmented reality and 3D designed his dream was achieved. This artwork also had the curatorial supervision of Art Historian Maria José Herrera, featuring Polesello’s and other kinetic and opt art artists works after the “Real/Virtual” exhibition held at the Museo Nacional de Bellas Artes, in Buenos Aires (2012). It is present since 2020 in the Augmented Metaverse Uxart and exhibited with mapping and holographic techniques in the NFT Festival “Xreal” at Isla El Descanso.",broughtBy:"UXART",teaserText:""},

  //IBM ADDITIONAL VIDEO (OUTSIDE BUIDLING)
        { index: 8, id: "MiguelAngelVidal_videos", hoverText: "Info", teleportPos: "", title: "Virtual reconstruction 2023, based on Untitled Screen  1969-1970", artist: "Miguel Ángel Vidal", technique: "", year: "2023", concept: "Untitled Screen Print", broughtBy: "UXART", teaserText: "" },
        { index: 9, id: "MiguelAngelVidal_videos", hoverText: "Info", teleportPos: "", title: "Virtual reconstruction 2023, based on Untitled Screen  1969-1970", artist: "Miguel Ángel Vidal", technique: "", year: "2023", concept: "Untitled Screen Print", broughtBy: "UXART", teaserText: "" },
        { index: 10, id: "MacEntyre_videos", hoverText: "Info", teleportPos: "", title: "Virtual reconstruction 2023, based on Untitled Screen 1969", artist: "Eduardo MacEntyre", technique: "", year: "2023", concept: "Untitled Screen Print", broughtBy: "UXART", teaserText: "" },
        { index: 11, id: "MacEntyre_videos", hoverText: "Info", teleportPos: "", title: "Virtual reconstruction 2023, based on Untitled Screen 1969", artist: "Eduardo MacEntyre", technique: "", year: "2023", concept: "Untitled Screen Print", broughtBy: "UXART", teaserText: "" }

]

export class Config{
  sizeX!:number
  sizeY!:number
  sizeZ!:number

  IN_PREVIEW:boolean = false

  BUIDING_HEIGHT = 16
  BOOLEAN_HEIGHT = 4

  center!:Vector3
  centerGround!:Vector3

  peiceInfo=peiceInfo
  
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


