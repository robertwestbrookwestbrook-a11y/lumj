import React, { useState, useEffect } from "react";
import WalletModal from "./WalletModal";

export default function Jumbotron() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <section className="relative pt-20 pb-12 overflow-hidden">
                {/* Animated grid background */}
                <div className="absolute inset-0 bg-black">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                        }}
                    />
                </div>

                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

                {/* Main content container */}
                <div className="relative w-full md:w-[96%] mx-auto min-h-[500px] md:min-h-[800px] rounded-xl overflow-hidden">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="/bg.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-10"
                        />
                        {/* Tech overlay pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-black/60 to-cyan-900/40" />

                        {/* Animated scanlines */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan" />
                        </div>
                    </div>

                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-xl border border-green-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)]" />

                    {/* Content */}
                    <section className="relative flex flex-col w-full h-full md:w-3/5 p-6 md:p-[90px_50px] mx-auto md:mx-0 justify-center items-center text-center md:items-start md:text-left gap-6 md:gap-8 min-h-[500px] md:min-h-[800px]">
                        {/* Decorative tech elements */}
                        <div className="absolute top-8 left-8 hidden md:flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300" />
                                <div className="h-px w-8 bg-gradient-to-r from-green-400 to-transparent" />
                            </div>
                        </div>

                        {/* Main heading */}
                        <div className="relative">
                            {/* Glowing text effect */}
                            <div className="absolute inset-0 blur-xl opacity-50">
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 text-2xl md:text-[70px] font-bold leading-tight">
                                    Enterprise-grade Blockchain, Defi & Web3 Solutions.
                                </h1>
                            </div>
                            <h1 className="relative text-white text-2xl md:text-[70px] font-bold leading-tight">
                                Enterprise-grade{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-cyan-400 animate-gradient">
                                    Blockchain
                                </span>
                                , Defi & Web3 Solutions.
                            </h1>
                            {/* Tech accent line */}
                            <div className="mt-4 flex gap-2 items-center justify-center md:justify-start">
                                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
                                <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
                                <div className="h-1 w-5 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-base md:text-2xl leading-relaxed max-w-3xl backdrop-blur-sm">
                            Lumen is a{" "}
                            <span className="text-cyan-400 font-semibold">decentralized platform</span>
                            {" "}and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance.
                        </p>

                        {/* Stats or features pills */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                                <span className="text-green-300 text-sm font-medium">⚡ Lightning Fast</span>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                                <span className="text-cyan-300 text-sm font-medium">🔒 Secure</span>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                                <span className="text-green-300 text-sm font-medium">🌐 Decentralized</span>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto">
                            {/* Resolve Issue Button */}
                            <button
                                className="
                                    relative w-full md:w-auto
                                    bg-gradient-to-r from-green-600 via-green-500 to-cyan-500
                                    text-white font-bold text-sm md:text-base
                                    px-8 md:px-10 py-4 rounded-full
                                    flex justify-center items-center gap-3
                                    hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                                    transition-all duration-300
                                    group overflow-hidden
                                    before:absolute before:inset-0
                                    before:bg-gradient-to-r before:from-cyan-500 before:to-green-600
                                    before:opacity-0 hover:before:opacity-100
                                    before:transition-opacity before:duration-300
                                "
                                onClick={handleOpenModal}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Resolve Issue
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                    </svg>
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                            </button>

                            {/* Connect Wallet Button */}
                            <button
                                className="
                                    relative w-full md:w-auto
                                    border-2 border-cyan-500/50 
                                    bg-black/40 backdrop-blur-sm
                                    text-white font-semibold text-sm md:text-base
                                    px-8 md:px-10 py-4 rounded-full
                                    flex justify-center items-center gap-2
                                    hover:border-cyan-400 hover:bg-cyan-500/10
                                    hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                                    transition-all duration-300
                                    group
                                "
                                onClick={handleOpenModal}
                            >
                                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <span>Connect Wallet</span>
                            </button>
                        </div>

                        {/* Bottom tech decoration */}
                        <div className="absolute bottom-8 right-8 hidden md:flex flex-col gap-2 items-end">
                            <div className="flex items-center gap-2">
                                <div className="h-px w-12 bg-gradient-to-l from-cyan-400 to-transparent" />
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-px w-8 bg-gradient-to-l from-green-400 to-transparent" />
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
                .delay-300 {
                    animation-delay: 300ms;
                }
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </div>
    );
}