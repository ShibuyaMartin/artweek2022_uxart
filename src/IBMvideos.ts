import * as utils from '@dcl/ecs-scene-utils'
import { VideoScreen } from './modules/videoScreen'

let videoIBMData = [
    {
        title: "02circulos",
        thumbnail: "videos/02circulos.png",
        video: "https://player.vimeo.com/external/828041606.m3u8?s=80bb4434e897070771be29b53fa045b53985fa2d",
        transform: new Transform({
            position: new Vector3(17.7792, 2.83583, 6.01971),
            rotation: Quaternion.Euler(180 + 1, 90, 0),
            scale: new Vector3(8.33, 4.53, 1)
        }),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 6, 9), new Vector3(-3, 0, 0)),
    },
    {
        title: "circulos",
        thumbnail: "videos/circulos.png",
        video: "https://player.vimeo.com/external/828042778.m3u8?s=ce1914154b15c34a2e0a69d54b7aedfd0aa65eda",
        transform: new Transform({
            position: new Vector3(17.7792, 2.83583, -5.24507),
            rotation: Quaternion.Euler(180 + 1, 90, 0),
            scale: new Vector3(8.33, 4.53, 1)
        }),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 6, 9), new Vector3(-3, 0, 0)),
    },

    {
        title: "vidal",
        thumbnail: "videos/vidal.png",
        video: "https://player.vimeo.com/external/828045218.m3u8?s=38a5bf1c6494801ddbf51c4bccd7c164d3c1ff95",
        transform: new Transform({
            position: new Vector3(-17.7997, 2.83583, 6.01971),
            rotation: Quaternion.Euler(180 - 1, -90, 0),
            scale: new Vector3(8.33, 4.53, 1)
        }),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 6, 9), new Vector3(3, 0, 0)),
    },
    {
        title: "02vidal",
        thumbnail: "videos/02vidal.png",
        video: "https://player.vimeo.com/external/828045775.m3u8?s=78051bbae5c9df77f655ff085104982e3c70478f",
        transform: new Transform({
            position: new Vector3(-17.7997, 2.83583, -5.3594),
            rotation: Quaternion.Euler(180 - 1, -90, 0),
            scale: new Vector3(8.33, 4.53, 1)
        }),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 6, 9), new Vector3(3, 0, 0)),
    },
]

export const videoIBM: VideoScreen[] = []

for (let i = 0; i < videoIBMData.length; i++) {
    const videoFrame = new VideoScreen(
        videoIBMData[i].thumbnail,
        videoIBMData[i].video,
        videoIBMData[i].transform,
        videoIBMData[i].trigger
    )
    videoIBM.push(videoFrame)
}