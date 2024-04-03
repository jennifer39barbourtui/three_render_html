import { Material, Mesh } from 'three'
import { GLTF } from 'three-stdlib'

export interface ModelProps {
    
}

export type GLTFResult = GLTF & {
    nodes: {
        [name: string]: Mesh
    },
    materials: {
        [name: string]: Material
    }
}