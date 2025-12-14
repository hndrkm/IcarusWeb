import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/FooterComponent';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-cosmic-900 text-white font-sans selection:bg-neon-cyan selection:text-black">
            <Navbar />
            <main className="flex-grow pt-16">
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};

export default MainLayout;
