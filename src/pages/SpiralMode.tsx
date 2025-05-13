import { OrbitControls } from '@react-three/drei'
import { elements } from '../data/elements.ts'
import { ElementNode } from '../components/ElementNode.tsx'

function getElemenTreePosition(n: number): [number, number, number] {
    const layerHeight = 1.6
    const itemsPerLayer = 16
    const layer = Math.floor((n - 1) / itemsPerLayer)
    const indexInLayer = (n - 1) % itemsPerLayer
    const angle = (indexInLayer / itemsPerLayer) * Math.PI * 2
    const radius = 2 + (8 - layer) * 0.5
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const y = layer * layerHeight
    return [x, y, z]
}

export default function SpiralMode() {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 20, 10]} intensity={1}/>
            <OrbitControls/>
            {elements.map(el => (
                <ElementNode
                    key={el.atomicNumber}
                    element={el}
                    position={getElemenTreePosition(el.atomicNumber)}
                />
            ))}
        </>
    )
}
