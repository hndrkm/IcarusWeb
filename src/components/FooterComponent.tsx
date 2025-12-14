import { ArrowUp, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const FooterComponent = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-cosmic-800 py-8 border-t border-white/10 relative">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <img src={logo} alt="Icarus Logo" className="w-8 h-8 object-contain" />
                        <h3 className="font-display font-bold text-lg">ICARUS</h3>
                    </div>
                    <p className="text-sm text-gray-400">Equipo multidisciplinario de estudiantes.</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <a href="https://www.facebook.com/profile.php?id=61574729484414" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                        <Facebook size={20} />
                    </a>
                    <span>&copy; {new Date().getFullYear()} Icarus Team.</span>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className="absolute right-4 bottom-8 md:bottom-8 p-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan rounded-full transition-colors backdrop-blur-sm border border-neon-cyan/30"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
};
export default FooterComponent;
