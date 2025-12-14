import { motion } from 'framer-motion';
import { Atom, Cpu, Binary, Bot, Zap, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-neon-cyan">Quiénes Somos</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                    Somos una organización estudiantil multidisciplinaria que busca desarrollar ciencia y tecnología aeroespacial.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 my-16">
                <div className="bg-cosmic-800 p-8 rounded-xl border border-white/5">
                    <h2 className="text-3xl font-display font-bold mb-4 text-neon-purple">Misión</h2>
                    <p className="text-gray-400">
                        Desarrollar proyectos aeroespaciales prácticos y educación accesible.
                    </p>
                </div>
                <div className="bg-cosmic-800 p-8 rounded-xl border border-white/5">
                    <h2 className="text-3xl font-display font-bold mb-4 text-neon-magenta">Visión</h2>
                    <p className="text-gray-400">
                        Convertirnos en el referente nacional de desarrollo aeroespacial.
                    </p>
                </div>
            </div>
            {/* Team Section */}
            <div className="py-12 border-t border-white/10">
                <h2 className="text-3xl font-display font-bold mb-12 text-center text-neon-cyan">Nuestro Equipo</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Mauricio Salamanca", role: "Mentor", icon: GraduationCap, bio: "Guía y experiencia.", color: "text-yellow-400" },
                        { name: "Hendrik Ramos", role: "Física", icon: Atom, bio: "Analista de fuerzas y dinámicas.", color: "text-blue-400" },
                        { name: "Damaris Sarmiento", role: "Electrónica", icon: Cpu, bio: "Diseño de circuitos y control.", color: "text-green-400" },
                        { name: "Gabriel Cuevas", role: "Sistemas", icon: Binary, bio: "Software y telemetría.", color: "text-purple-400" },
                        { name: "Leonel Esteban", role: "Mecatrónica", icon: Bot, bio: "Integración mecánico-electrónica.", color: "text-red-400" },
                        { name: "Maria Pari", role: "Electrónica", icon: Zap, bio: "Potencia y energía.", color: "text-yellow-500" },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-cosmic-800 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all text-center group"
                        >
                            <div className={`w-16 h-16 mx-auto mb-4 bg-cosmic-700 rounded-full flex items-center justify-center ${member.color} group-hover:scale-110 transition-transform`}>
                                <member.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                            <p className="text-neon-cyan text-sm font-medium mb-2">{member.role}</p>
                            <p className="text-gray-400 text-sm">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Timeline or History Placeholder */}
            <div className="py-12 border-t border-white/10">
                <h2 className="text-3xl font-display font-bold mb-12 text-center">Nuestra Trayectoria</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {/* Timeline Item 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-neon-cyan text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cosmic-800 p-4 rounded border border-white/10">
                            <div className="font-bold text-slate-200">2024</div>
                            <div className="text-slate-400">Fundación del equipo Icarus.</div>
                        </div>
                    </div>
                    {/* Timeline Item 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-neon-cyan text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cosmic-800 p-4 rounded border border-white/10">
                            <div className="font-bold text-slate-200">2025</div>
                            <div className="text-slate-400">Participación en Cansat Latinoamérica.</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default About;
