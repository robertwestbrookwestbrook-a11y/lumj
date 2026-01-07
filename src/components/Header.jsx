import React, { useState } from 'react';
import WalletModal from './WalletModal';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // Add scroll listener for glassmorphism effect
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="relative">
            <nav
                className={`
          flex items-center justify-between fixed top-0 left-0 right-0 z-50 px-6 py-4
          transition-all duration-500 ease-out
          ${isScrolled
                        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
                        : 'bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm'
                    }
        `}
            >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-cyan-500/5 to-green-600/5 animate-pulse pointer-events-none" />

                {/* Logo section */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-cyan-500 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                        <p className="text-white text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500">
                            Lumen
                        </p>
                    </div>
                    {/* Tech accent line */}
                    <div className="hidden lg:flex items-center gap-2 ml-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse" />
                        <div className="flex flex-col text-[10px] uppercase tracking-wider">
                            <span className="text-cyan-400 font-bold">Decentralized</span>
                            <span className="text-green-400/70">Finance</span>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4">
                    {/* Resolve Issues Button */}
                    <button
                        className="
              relative hidden md:flex items-center gap-2
              text-white text-xs font-medium tracking-wide uppercase
              px-6 py-2.5 rounded-full
              border border-green-500/50 
              bg-gradient-to-r from-green-950/50 to-black/50
              hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30
              transition-all duration-300
              group overflow-hidden
            "
                        onClick={handleOpenModal}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/20 to-green-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="relative z-10">Resolve Issues</span>
                    </button>

                    {/* Connect Wallet Button */}
                    <button
                        className="
              relative flex items-center gap-2
              text-white text-xs font-bold tracking-wide uppercase
              px-6 py-2.5 rounded-full
              bg-gradient-to-r from-green-600 via-green-500 to-cyan-500
              hover:shadow-2xl hover:shadow-green-500/50
              transition-all duration-300
              group overflow-hidden
              before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-cyan-500 before:via-green-500 before:to-green-600
              before:opacity-0 hover:before:opacity-100
              before:transition-opacity before:duration-300
            "
                        onClick={handleOpenModal}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Connect Wallet
                        </span>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    </button>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-cyan-500/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-green-500/20 pointer-events-none" />
            </nav>

            <WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </header>
    );
}