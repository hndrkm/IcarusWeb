import { Mail, MapPin, Phone, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">Contacto</h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-neon-cyan">Hablemos</h2>
                    <p className="text-gray-300 mb-8">
                        ¿Tienes preguntas sobre nuestros proyectos o quieres coordinar una visita a tu institución?
                        Escríbenos.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail className="text-neon-cyan shrink-0" />
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-gray-400">icarusumsa@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-neon-cyan shrink-0" />
                            <div>
                                <h3 className="font-bold">Teléfono / WhatsApp</h3>
                                <p className="text-gray-400 text-sm">+591 67028563</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-neon-cyan shrink-0" />
                            <div>
                                <h3 className="font-bold">Ubicación</h3>
                                <p className="text-gray-400">Campus Universitario Cota Cota, La Paz, Bolivia</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Facebook className="text-neon-cyan shrink-0" />
                            <div>
                                <h3 className="font-bold">Facebook</h3>
                                <a href="https://www.facebook.com/profile.php?id=61574729484414" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors">/IcarusUMSA</a>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="bg-cosmic-800 p-8 rounded-xl border border-white/10 space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nombre</label>
                        <input type="text" className="w-full bg-cosmic-900 border border-white/10 rounded p-3 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" className="w-full bg-cosmic-900 border border-white/10 rounded p-3 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="tucorreo@ejemplo.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mensaje</label>
                        <textarea rows={4} className="w-full bg-cosmic-900 border border-white/10 rounded p-3 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-white text-black font-bold rounded hover:bg-neon-cyan transition-colors">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Contact;
