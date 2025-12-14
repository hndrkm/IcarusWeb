import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

function Model() {
    const gltf = useGLTF('/CanSat001.glb');
    return <primitive object={gltf.scene} scale={0.5} />; // Renderiza el modelo
}

const Scene3D = () => {
    return (
        <div className="h-[400px] md:h-[600px] w-full bg-cosmic-800/50 rounded-xl overflow-hidden border border-white/10 relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded text-xs text-neon-cyan border border-neon-cyan/30">
                Modelo: CanSat V1
            </div>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Stage environment="city" intensity={0.6}>
                    <Model />
                </Stage>
                <OrbitControls autoRotate autoRotateSpeed={1} />
            </Canvas>
        </div>
    )
}
export default Scene3D;




