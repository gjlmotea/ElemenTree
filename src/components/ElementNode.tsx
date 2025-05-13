import { Billboard, Text } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import type { ElementData } from '../data/elements.ts';
import { Mesh, MeshStandardMaterial, BufferGeometry } from 'three'

type Props = {
    element: ElementData
    position: [number, number, number]
}

export function ElementNode({ element, position }: Props) {
    const textRef = useRef<Mesh<BufferGeometry, MeshStandardMaterial>>(null)

    useEffect(() => {
        if (textRef.current && textRef.current.material) {
            textRef.current.material.depthTest = false
            textRef.current.material.depthWrite = false
        }
    }, [])

    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshStandardMaterial color={element.color || 'skyblue'} />
            </mesh>

            <Billboard
                follow={true}
                lockX={false}
                lockY={false}
                lockZ={false} // Lock the rotation on the z axis (default=false)
            >
                <Text
                    ref={textRef}
                    position={[0, 0.7, 0]}
                    fontSize={0.3}
                    color="white"
                    outlineColor="red"
                    outlineWidth={0.02}
                    anchorX="center"
                    anchorY="middle"
                >
                    {element.symbol}
                </Text>
            </Billboard>

        </group>
    )
}
