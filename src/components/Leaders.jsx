import React from 'react';

export default function Leaders() {
    const partners = [
        { src: "/metamask2.png", alt: "MetaMask", name: "MetaMask" },
        { src: "/binance.png", alt: "Binance", name: "Binance" },
        { src: "/polygon.png", alt: "Polygon", name: "Polygon" },
        { src: "/walletconnect2.png", alt: "WalletConnect", name: "WalletConnect" },
        { src: "/coinbase2.png", alt: "Coinbase", name: "Coinbase" }
    ];

    return (
        <div className="relative py-20 px-6 overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />

            <section className="relative max-w-7xl mx-auto">
                <div className="flex flex-col justify-center gap-16">
                    {/* Section header */}
                    <div className="relative flex flex-col items-center gap-4">
                        {/* Top decorative line */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                        </div>

                        {/* Title with glow effect */}
                        <div className="relative">
                            <div className="absolute inset-0 blur-2xl opacity-40">
                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 text-xl md:text-2xl font-bold tracking-[0.3em] text-center">
                                    TRUSTED BY INDUSTRY LEADERS
                                </h3>
                            </div>
                            <h3 className="relative text-white text-xl md:text-2xl font-bold tracking-[0.3em] text-center">
                                TRUSTED BY{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 animate-gradient">
                                    INDUSTRY LEADERS
                                </span>
                            </h3>
                        </div>

                        {/* Bottom decorative element */}
                        <div className="flex gap-1 mt-2">
                            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" />
                            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
                            <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" />
                        </div>
                    </div>

                    {/* Partners grid */}
                    <section className="relative">
                        {/* Glowing container border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 rounded-2xl blur-xl" />

                        <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                                {partners.map((partner, index) => (
                                    <div
                                        key={partner.name}
                                        className="group relative flex items-center justify-center"
                                        style={{
                                            animationDelay: `${index * 100}ms`
                                        }}
                                    >
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-cyan-500/0 to-green-600/0 group-hover:from-green-600/20 group-hover:via-cyan-500/20 group-hover:to-green-600/20 rounded-xl blur-xl transition-all duration-500" />

                                        {/* Card container */}
                                        <div className="relative w-full h-24 md:h-28 flex items-center justify-center p-4 rounded-xl border border-transparent group-hover:border-cyan-500/30 bg-gradient-to-br from-green-900/10 to-cyan-900/10 group-hover:bg-gradient-to-br group-hover:from-green-900/20 group-hover:to-cyan-900/20 transition-all duration-300">
                                            {/* Corner accents */}
                                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500/0 group-hover:border-cyan-500/60 rounded-tl transition-all duration-300" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-500/0 group-hover:border-green-500/60 rounded-br transition-all duration-300" />

                                            {/* Logo */}
                                            <img
                                                className="w-full h-full object-contain filter brightness-90 grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500 group-hover:scale-110"
                                                src={partner.src}
                                                alt={partner.alt}
                                            />
                                        </div>

                                        {/* Scan line effect */}
                                        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom tech decoration */}
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full" />
                            </div>
                        </div>
                    </section>

                    {/* Additional trust indicators */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-60">
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Secure Protocol</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Lightning Fast</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <span>Global Network</span>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 4s ease infinite;
                }
            `}</style>
        </div>
    );
}