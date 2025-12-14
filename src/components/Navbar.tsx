import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Acerca de', path: '/about' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'Involúcrate', path: '/involve' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-cosmic-900/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <img src={logo} alt="Icarus Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xl font-display font-bold text-white tracking-wider">
                        I<span className="text-neon-cyan">CARUS</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-cosmic-900 border-b border-white/10 p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="block text-gray-300 hover:text-neon-cyan py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
export default Navbar;
