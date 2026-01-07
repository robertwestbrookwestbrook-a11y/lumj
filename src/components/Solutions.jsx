import React, { useState } from "react";
import WalletModal from "./WalletModal";

export default function Solutions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const solutions = [
        {
            icon: "🔧",
            title: "Rectification",
            description: "Instantly diagnose and resolve critical wallet issues with AI-powered solutions tailored to your blockchain needs",
            gradient: "from-green-600 to-green-800"
        },
        {
            icon: "🔄",
            title: "Token Restoration",
            description: "Seamlessly recover lost or inaccessible tokens across all major blockchain networks",
            gradient: "from-cyan-600 to-cyan-800"
        },
        {
            icon: "💎",
            title: "Token Claims",
            description: "Lightning-fast cryptocurrency token claiming with zero gas fees and instant processing",
            gradient: "from-green-600 to-pink-600"
        },
        {
            icon: "🎁",
            title: "Airdrop Harvester",
            description: "Access verified, high-value airdrops from top-tier projects before they hit the mainstream",
            gradient: "from-cyan-600 to-blue-600"
        },
        {
            icon: "✓",
            title: "Chain Validator",
            description: "Real-time transaction verification with complete blockchain audit trails and confirmation tracking",
            gradient: "from-green-600 to-indigo-600"
        },
        {
            icon: "🎨",
            title: "NFT Minting Studio",
            description: "Launch your NFT collection on any blockchain with enterprise-grade smart contracts",
            gradient: "from-pink-600 to-green-600"
        },
        {
            icon: "📈",
            title: "Staking Vault",
            description: "Maximize yields with automated staking strategies across multiple DeFi protocols",
            gradient: "from-cyan-600 to-teal-600"
        },
        {
            icon: "⚡",
            title: "Quantum Exchange",
            description: "Execute trades at lightning speed with institutional-grade liquidity and best price routing",
            gradient: "from-green-600 to-cyan-600"
        },
        {
            icon: "📉",
            title: "Unstaking Protocol",
            description: "Withdraw staked assets instantly without waiting periods or penalty fees",
            gradient: "from-blue-600 to-green-600"
        },
        {
            icon: "🔀",
            title: "Cross-Chain Migration",
            description: "Migrate tokens between blockchains seamlessly with our secure bridge infrastructure",
            gradient: "from-cyan-600 to-green-600"
        },
        {
            icon: "🌉",
            title: "Omnichain Bridge",
            description: "Transfer unlimited tokens and NFTs across 50+ chains with Wormhole-secured technology",
            gradient: "from-green-600 to-blue-600"
        },
        {
            icon: "🔐",
            title: "Asset Recovery",
            description: "Enterprise-grade recovery system for lost crypto, tokens, and NFTs with 99.9% success rate",
            gradient: "from-pink-600 to-cyan-600"
        }
    ];

    return (
        <div className="relative py-20 px-6 overflow-hidden bg-black">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

            <section className="relative max-w-7xl mx-auto flex flex-col justify-center items-center gap-12">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-6">
                    {/* Top decorative line */}
                    <div className="flex items-center gap-2">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                    </div>

                    {/* Title */}
                    <div className="relative">
                        <div className="absolute inset-0 blur-2xl opacity-40">
                            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 text-2xl md:text-3xl font-bold tracking-[0.2em] text-center">
                                SOLUTIONS SUITE
                            </h3>
                        </div>
                        <h3 className="relative text-white text-2xl md:text-3xl font-bold tracking-[0.2em] text-center">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 animate-gradient">
                                ENTERPRISE
                            </span>{" "}
                            SOLUTIONS
                        </h3>
                    </div>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl text-center">
                        Cutting-edge blockchain tools designed for the next generation of decentralized finance
                    </p>

                    {/* Bottom accent */}
                    <div className="flex gap-1">
                        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" />
                        <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
                        <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" />
                    </div>
                </div>

                {/* Solutions Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                animationDelay: `${index * 50}ms`
                            }}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`} />

                            {/* Card */}
                            <div className="relative h-full min-h-[320px] bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:translate-y-[-4px]">
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/0 group-hover:border-cyan-500/60 rounded-tl-2xl transition-all duration-300" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-500/0 group-hover:border-green-500/60 rounded-br-2xl transition-all duration-300" />

                                {/* Content */}
                                <div className="flex flex-col items-center gap-4 flex-grow">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                        {solution.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 text-xl font-bold">
                                        {solution.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>

                                {/* Button */}
                                <button
                                    className="relative mt-4 w-full flex items-center justify-center gap-2 text-white text-sm font-semibold border border-green-500/50 bg-green-900/20 py-3 px-6 rounded-full hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group/btn overflow-hidden"
                                    onClick={handleOpenModal}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-cyan-500/20 to-green-600/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started
                                        <svg
                                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                        </svg>
                                    </span>
                                </button>

                                {/* Scan line effect */}
                                <div className={`absolute inset-0 overflow-hidden rounded-2xl pointer-events-none transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent translate-y-[-100%] animate-scan" />
                                </div>
                            </div>
                        </div>
                    ))}
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
                    100% { transform: translateY(200%); }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 4s ease infinite;
                }
                .animate-scan {
                    animation: scan 2s linear infinite;
                }
            `}</style>
        </div>
    );
}