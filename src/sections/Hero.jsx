import { motion } from "framer-motion";
import { heroContent } from "../data/content";
import Button from "../components/Button";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            aria-label="Hero section"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-pastel-50 to-warm-100" />

            {/* Decorative Blobs */}
            <div className="absolute top-20 left-[-100px] w-[400px] h-[400px] bg-sage-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-[-80px] w-[350px] h-[350px] bg-pastel-200/40 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16 lg:pt-0 lg:pb-0">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-sage-200/60 text-sage-700 text-xs font-semibold tracking-wide uppercase mb-6">
                            Psychologist & Counsellor
                        </span>

                        <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight mb-4">
                            {heroContent.heading}
                        </h1>

                        <p className="font-poppins font-medium text-lg sm:text-xl text-sage-600 mb-4">
                            {heroContent.subheading}
                        </p>

                        <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg">
                            {heroContent.paragraph}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button href="#contact" ariaLabel="Book an online consultation">
                                {heroContent.cta}
                            </Button>
                            <Button href="#about" variant="outline" ariaLabel="Learn more about Tanya Rao">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right — Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-sage-300/30 to-pastel-300/30 rounded-[2rem] blur-sm" />

                            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-96 lg:h-[28rem] rounded-[2rem] overflow-hidden shadow-xl">
                                <img
                                    src="/tanya-rao.jpg"
                                    alt="Tanya Rao — Psychologist & Counsellor"
                                    className="w-full h-full object-cover object-top"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
