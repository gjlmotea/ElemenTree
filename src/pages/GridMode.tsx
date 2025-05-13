import { OrbitControls } from '@react-three/drei'
import { elements } from '../data/elements.ts'
import { ElementNode } from '../components/ElementNode.tsx'

export default function GridMode() {
    return (
        <>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 20, 10]} intensity={1}/>
            <OrbitControls/>
            {elements.map(el => (
                <ElementNode
                    key={el.atomicNumber}
                    element={el}
                    position={[(el.group - 9) * 1.6, (4 - el.period) * 1.6, 0]}
                />
            ))}
        </>
    )
}
