import React, { useState, useEffect } from "react";
import WalletModal from "./WalletModal";

export default function Caters() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 15,
                y: (e.clientY / window.innerHeight) * 15
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative py-12 px-6 overflow-hidden">
            {/* Background grid animation */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                />
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative max-w-7xl mx-auto">
                {/* Main content container */}
                <div className="relative rounded-2xl overflow-hidden border border-green-500/20 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                    {/* Background image layer */}
                    <div className="absolute inset-0">
                        <img
                            src="/bg2.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-15"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black/50 to-cyan-900/30" />
                    </div>

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-cyan-500/30 to-green-500/0 animate-border-flow" />
                    </div>

                    {/* Content section */}
                    <section className="relative flex justify-end">
                        <div className="w-full md:w-3/5 p-8 md:p-20 text-center md:text-left flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 min-h-[500px]">
                            {/* Decorative top element */}
                            <div className="flex items-center gap-2 opacity-60">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                <div className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
                            </div>

                            {/* Main heading */}
                            <h1 className="relative text-2xl md:text-[48px] font-bold leading-tight">
                                <span className="text-white">
                                    Lumen{" "}
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 animate-gradient">
                                    Caters for Everything
                                </span>
                                <span className="text-white">
                                    {" "}You Need
                                </span>
                                {/* Glow effect */}
                                <div className="absolute -inset-2 blur-2xl opacity-20 bg-gradient-to-r from-green-600 to-cyan-600 -z-10" />
                            </h1>

                            {/* Description */}
                            <div className="space-y-4">
                                <p className="text-gray-300 text-base md:text-xl leading-relaxed">
                                    Next-generation cryptocurrency wallets providing{" "}
                                    <span className="text-cyan-400 font-semibold">secure digital storage</span>
                                    {" "}and seamless management of your blockchain assets.
                                </p>
                                <p className="text-gray-400 text-sm md:text-base">
                                    Empowering users to spend, receive, and trade cryptocurrencies with enterprise-grade security and lightning-fast transactions across all major blockchain networks.
                                </p>
                            </div>

                            {/* Feature pills */}
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <div className="group px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="text-green-300 text-sm font-medium">Secure</span>
                                    </div>
                                </div>
                                <div className="group px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span className="text-cyan-300 text-sm font-medium">Fast</span>
                                    </div>
                                </div>
                                <div className="group px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                        <span className="text-green-300 text-sm font-medium">Multi-Chain</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="w-full md:w-auto mt-2">
                                <button
                                    className="
                                        relative group w-full md:w-auto
                                        bg-gradient-to-r from-green-600 via-green-500 to-cyan-500
                                        text-white font-bold text-base
                                        px-10 py-4 rounded-full
                                        flex justify-center items-center gap-3
                                        hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
                                        transition-all duration-300
                                        overflow-hidden
                                        before:absolute before:inset-0
                                        before:bg-gradient-to-r before:from-cyan-500 before:to-green-600
                                        before:opacity-0 hover:before:opacity-100
                                        before:transition-opacity before:duration-300
                                    "
                                    onClick={handleOpenModal}
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Get Support Now
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                                </button>
                            </div>

                            {/* Bottom decorative element */}
                            <div className="flex items-center gap-2 opacity-60 mt-4">
                                <div className="h-px w-16 bg-gradient-to-l from-green-400 to-transparent" />
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </section>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-green-500/20 rounded-br-2xl" />

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float" />
                        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-float-delay" />
                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400/20 rounded-full animate-float-slow" />
                    </div>
                </div>
            </div>

            <WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes border-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                    50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
                }
                @keyframes float-delay {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
                    50% { transform: translateY(-30px) translateX(-15px); opacity: 0.5; }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); opacity: 0.2; }
                    50% { transform: translateY(-25px); opacity: 0.4; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 4s ease infinite;
                }
                .animate-border-flow {
                    animation: border-flow 3s linear infinite;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delay {
                    animation: float-delay 8s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 10s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}