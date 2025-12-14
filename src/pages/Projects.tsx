import Scene3D from '../components/Scene3D';
import { motion } from 'framer-motion';
import OrreryImg from '../assets/Orrery.png';

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center text-white">
                <span className="text-neon-cyan">Proyectos</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-neon-purple">CanSat V1 </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Nuestro primer prototipo de satélite enlatado. Diseñado para medir variables atmosféricas como
                        presión, temperatura, nivel de dioxido de carbono y humedad, transmitiendo datos en tiempo real a la estación terrena.
                    </p>
                    <ul className="space-y-2 mb-8 text-gray-400">
                        <li>• Microcontrolador: ESP32</li>
                        <li>• Sensores: BME280, MPU6050</li>
                        <li>• Telemetría: LoRa 433MHz</li>
                    </ul>
                    <button className="px-6 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors rounded">
                        <a href="https://docs.google.com/document/d/1TcBS56AxmT68gYLNMVMZasjbmCoGqpsFBD0smJ7Xfgs/edit?usp=sharing">Ver Especificaciones</a>
                    </button>
                </motion.div>
                <div className="h-full min-h-[400px]">
                    <Scene3D />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[1].map((item) => (
                    <div key={item} className="bg-cosmic-800 rounded-xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all group">
                        <div className="h-48 bg-cosmic-700 flex items-center justify-center group-hover:bg-cosmic-600 transition-colors overflow-hidden">
                            <img src={OrreryImg} alt="Proyecto Orrery" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Proyecto de visualizacion de objetos cercanos a la tierra</h3>
                            <p className="text-sm text-gray-400">Usa la Api de la NASA para mostrar los objetos cercanos a la tierra en un entorno web 3D usando webgl.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;
