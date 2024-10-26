import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/Addons'
import { DRACOLoader } from 'three/examples/jsm/Addons'

interface LoadOption {
    receiveShadow?: boolean
    castShadow?: boolean
}

interface GltfModel {
    obj: THREE.Object3D
}

export const loaderModel = (
    url: string,
    options: LoadOption = {receiveShadow: true, castShadow: true}
): Promise<GltfModel> => {
    const {receiveShadow = true, castShadow = true} = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        const dracoLoader = new DRACOLoader()

        dracoLoader.setDecoderConfig({type: 'js'})
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
        loader.setDRACOLoader(dracoLoader)

        loader.load(
            url,
            (gltf) => {
                const obj = gltf.scene
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow

                obj.traverse((child) => {
                    if((child as THREE.Mesh).isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })

                resolve({obj})
            },
            undefined,
            (error) => {
                reject(error)
            }
        )
    })
}