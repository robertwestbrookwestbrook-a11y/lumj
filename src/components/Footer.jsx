import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative bg-black border-t border-green-500/20 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            {/* Main footer content */}
            <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row w-full justify-center md:justify-around items-center gap-6 md:gap-10 p-8 md:p-12 text-center md:text-left">
                {/* Copyright */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-gray-400 text-sm">
                            Copyright © {year}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-semibold">
                                Lumen
                            </span>
                        </span>
                    </div>
                </div>

                {/* Company info */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p className="text-gray-300 text-sm">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-semibold">
                                Lumen Web3 Technology
                            </span>
                            {" "}・ AB Org.nr: 559307-5988
                        </p>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Reach out:</span>Godmdoom2009;
                        
                        <a
                            href="mailto:support@lumen.com"
                            className="group relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-bold text-sm hover:from-cyan-300 hover:to-green-300 transition-all duration-300"
                        >
                            support@lumen.com
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 group-hover:w-full transition-all duration-300" />
                        </a>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

            {/* Corner accents */}
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-cyan-500/10" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-green-500/10" />
        </footer>
    );
}