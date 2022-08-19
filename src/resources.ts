
export const INVISIBLE_MATERIAL = new BasicMaterial()
const INVISIBLE_MATERIAL_texture = new Texture('images/transparent-texture.png')
INVISIBLE_MATERIAL.texture = INVISIBLE_MATERIAL_texture
INVISIBLE_MATERIAL.alphaTest = 1




export const RESOURCES = {
        models:{
          names:{
            
          },
          instances:{
          }
        },
        textures: {
          //sprite_sheet: spriteSheetTexture,
          transparent: INVISIBLE_MATERIAL_texture
        },
        materials: {
          //sprite_sheet: spriteSheetMaterial
          transparent: INVISIBLE_MATERIAL
        },
        strings:{
          FIRST_FLOOR_WALL_TEXT:"Just like the Metaverse, the real world in which we live is also made of code.\n"+
          "All life on Earth can be recreated using the DNA code, and by changing small details in the code we can recreate the entire diversity of life on Earth.\n"+
          "Throughout history individuals and movements have uncovered glimpses of some of the building blocks, the algorithms and patterns nature uses to create environments, bioDiversity and ecosystems."
        },
        images:{
          portrait:{
          }
        }
      }
