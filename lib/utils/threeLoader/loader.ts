import { url } from 'inspector'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/Addons'
import { DRACOLoader } from 'three/examples/jsm/Addons'

interface loadOption {
    receiveShadow?: boolean
    castShadow?: boolean
}

interface GltfModel {
    obj: THREE.Object3D
    mixer: THREE.AnimationMixer
}

const loadGLTFModel = (url: string, options: loadOption = {
    receiveShadow: true, castShadow: true
}) => {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        const draco = new DRACOLoader()
    })
}

