import { motion } from 'framer-motion';
import { ArrowRight, Users, Radio, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-20 px-4 ${className}`}>
        <div className="container mx-auto">
            {children}
        </div>
    </section>
);

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="h-[90vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-600/20 via-cosmic-900 to-cosmic-900 z-0" />

                {/* 3D Model Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0">
                    <div className="w-96 h-96 border animate-spin-slow rounded-full border-neon-cyan/20 border-dashed" />
                    <div className="w-[30rem] h-[30rem] border absolute animate-reverse-spin rounded-full border-neon-purple/20 border-dotted" />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={logo} alt="Icarus Logo" className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-8 animate-spin-slow hover:animate-none transition-all" />
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-neon-cyan to-neon-purple">ICARUS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                            Un equipo de estudiantes apasionados por la ciencia y la tecnología.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/projects" className="px-8 py-3 bg-neon-cyan text-black font-bold rounded hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                                Ver Proyectos <ArrowRight size={20} />
                            </Link>
                            <Link to="/involve" className="px-8 py-3 border border-white/20 hover:border-neon-purple hover:text-neon-purple text-white font-medium rounded transition-all flex items-center justify-center">
                                Únete al Equipo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are */}
            <Section className="bg-cosmic-800/50">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-neon-cyan">Quiénes Somos</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Somos un equipo apasionado de estudiantes universitarios dedicados a fomentar la ciencia y tecnología aeroespacial.
                            Participamos en competencias internacionales como el Mundial de Cansat y desarrollamos tecnología.
                        </p>
                        <Link to="/about" className="text-neon-cyan hover:text-white inline-flex items-center gap-2">
                            Conoce nuestra historia <ChevronRight size={16} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-cosmic-700 p-6 rounded-lg border border-white/5 hover:border-neon-cyan/50 transition-colors">
                            <Users className="w-10 h-10 text-neon-purple mb-4" />
                            <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                            <p className="text-sm text-gray-400">Uniendo estudiantes de diversas áreas.</p>
                        </div>
                        <div className="bg-cosmic-700 p-6 rounded-lg border border-white/5 hover:border-neon-cyan/50 transition-colors ">
                            <Radio className="w-10 h-10 text-neon-cyan mb-4" />
                            <h3 className="text-xl font-bold mb-2">Innovación</h3>
                            <p className="text-sm text-gray-400">Desarrollo de prototipos y tecnología.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Connect Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Conecta con Nosotros</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A través de talleres, conferencias y competencias, acercamos el espacio a la tierra.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Competencias", desc: "Participación en eventos mundiales como Cansat.", icon: Globe, color: "text-neon-magenta" },
                        { title: "Difusión", desc: "Charlas y talleres en colegios y universidades.", icon: Users, color: "text-neon-cyan" },
                        { title: "Investigación", desc: "Proyectos de ingeniería aeroespacial aplicada.", icon: Rocket, color: "text-neon-purple" }
                    ].map((item, i) => (
                        <div key={i} className="bg-gradient-to-b from-cosmic-800 to-cosmic-900 p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
                            <item.icon className={`w-12 h-12 ${item.color} mb-6 transform group-hover:scale-110 transition-transform`} />
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Join */}
            <Section className="relative overflow-hidden">
                <div className="bg-neon-purple/10 absolute inset-0 blur-3xl" />
                <div className="relative z-10 bg-cosmic-800 rounded-3xl p-12 text-center border border-neon-purple/30">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Forma Parte del Equipo</h2>
                    <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                        ¿Te apasiona el espacio? Buscamos mentes creativas para nuestras próximas misiones.
                    </p>
                    <Link to="/involve" className="px-10 py-4 bg-neon-purple text-white font-bold rounded-full hover:bg-neon-purple/80 transition-colors inline-block shadow-lg shadow-neon-purple/20">
                        Únete Ahora
                    </Link>
                </div>
            </Section>
        </div>
    );
};

// Simple visual components for icons since I didn't import Rocket in the main component
import { Rocket } from 'lucide-react';

export default Home;
