import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { siteConfig, navLinks } from "../data/content";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const handleLinkClick = () => setMobileOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-md"
                    : "bg-transparent"
                }`}
        >
            <nav
                className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4 lg:px-8"
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <a
                    href="#"
                    className="font-poppins font-bold text-xl text-sage-700 hover:text-sage-600 transition-colors"
                >
                    {siteConfig.name}
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="font-inter text-sm font-medium text-text-secondary hover:text-sage-600 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sage-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-sage-600 text-white text-sm font-semibold hover:bg-sage-700 transition-colors duration-300"
                        >
                            Get in Touch
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl text-sage-700 z-50"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-50 md:hidden"
                        >
                            <div className="flex flex-col pt-24 px-8 gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="font-inter text-lg font-medium text-text-primary hover:text-sage-600 py-3 border-b border-warm-200 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={handleLinkClick}
                                    className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
