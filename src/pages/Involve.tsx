import { HandHeart, Users } from 'lucide-react';
import Gra from '../assets/grabsrl.png';
import Se from '../assets/SEEE.jpg';

const Involve = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Involúcrate</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Hay muchas formas de ser parte de nuestra misión. Ya sea como miembro del equipo o como patrocinador.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
                {/* Recruitment */}
                <div className="bg-cosmic-800 p-8 rounded-2xl border border-neon-purple/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Users size={100} />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4 text-neon-purple">Únete al Equipo</h2>
                    <p className="text-gray-300 mb-6">
                        Buscamos estudiantes apasionados por la ingeniería, diseño, marketing y ciencias. No necesitas ser experto,
                        solo tener ganas de aprender.
                    </p>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-gray-400">
                            <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                            Ingeniería Mecánica y Electrónica
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                            Programación y Software
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                            Gestión y Redes Sociales
                        </div>
                    </div>
                    <button className="w-full py-3 bg-neon-purple text-white font-bold rounded hover:bg-neon-purple/80 transition-colors">
                        Aplicar Ahora
                    </button>
                </div>

                {/* Sponsors */}
                <div className="bg-cosmic-800 p-8 rounded-2xl border border-neon-cyan/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <HandHeart size={100} />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4 text-neon-cyan">Patrocinadores</h2>
                    <p className="text-gray-300 mb-6">
                        Ayúdanos a llegar más lejos. Tu apoyo impulsa la innovación tecnológica en Bolivia. Ofrecemos visibilidad
                        de marca en nuestros eventos y prototipos.
                    </p>
                    <ul className="space-y-2 mb-8 text-gray-400">
                        <li>• Logo en nuestros uniformes y cohetes</li>
                        <li>• Menciones en redes sociales</li>
                        <li>• Participación en eventos exclusivos</li>
                    </ul>
                    <button className="w-full py-3 bg-neon-cyan text-black font-bold rounded hover:bg-white transition-colors">
                        Convertirse en Patrocinador
                    </button>
                </div>
            </div>

            {/* Current Sponsors Placeholder */}
            <div>
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-500">Nuestros Aliados</h3>
                <div className="flex flex-wrap justify-center gap-12 opacity-100 hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos */}
                    <div className="w-48 h-48 bg-white/10 rounded flex items-center justify-center p-4"><img src={Gra} alt="" className='rounded-full' /></div>
                    <div className="w-48 h-48 bg-white/10 rounded flex items-center justify-center p-4"><img src={Se} alt="" className='rounded-full' /></div>

                </div>
            </div>
        </div>
    );
};
export default Involve;
