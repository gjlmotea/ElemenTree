import { Route, Routes } from 'react-router-dom';
import GridMode from './pages/GridMode.tsx';
import SpiralMode from './pages/SpiralMode.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Canvas } from '@react-three/fiber';

export default function App() {

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <Navbar/>
            <Canvas camera={{position: [0, 10, 25], fov: 60}}>
                <Routes>
                    <Route path="/" element={<GridMode/>}/>
                    <Route path="/spiral" element={<SpiralMode/>}/>
                </Routes>
            </Canvas>
        </div>
    )
}