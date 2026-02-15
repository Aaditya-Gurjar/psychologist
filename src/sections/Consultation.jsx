import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../components/SectionWrapper";
import { consultationContent } from "../data/content";
import {
    FaCalendarCheck,
    FaVideo,
    FaShieldAlt,
    FaCheckCircle,
} from "react-icons/fa";
import Button from "../components/Button";

const iconMap = {
    FaCalendarCheck,
    FaVideo,
    FaShieldAlt,
};

export default function Consultation() {
    return (
        <SectionWrapper id="consultation" bgClassName="bg-warm-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left — Steps */}
                <div>
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full bg-pastel-100 text-pastel-400 text-xs font-semibold tracking-wide uppercase mb-4"
                    >
                        How It Works
                    </motion.span>

                    <motion.h2
                        id="consultation-heading"
                        variants={itemVariants}
                        className="font-poppins font-bold text-3xl sm:text-4xl text-text-primary mb-4"
                    >
                        {consultationContent.heading}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-text-secondary mb-10 leading-relaxed max-w-lg"
                    >
                        {consultationContent.subheading}
                    </motion.p>

                    <div className="space-y-6">
                        {consultationContent.steps.map((step, index) => {
                            const Icon = iconMap[step.icon];
                            return (
                                <motion.div
                                    key={step.title}
                                    variants={itemVariants}
                                    className="flex gap-5 items-start"
                                >
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-600 text-xl shrink-0">
                                            <Icon aria-hidden="true" />
                                        </div>
                                        {index < consultationContent.steps.length - 1 && (
                                            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-6 bg-sage-200" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-poppins font-semibold text-base text-text-primary mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div variants={itemVariants} className="mt-8">
                        <Button href="#contact" ariaLabel="Book your online consultation">
                            Book a Session
                        </Button>
                    </motion.div>
                </div>

                {/* Right — Highlights */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-sage-50 to-pastel-50 rounded-3xl p-8 sm:p-10 border border-sage-100/50"
                >
                    <h3 className="font-poppins font-semibold text-xl text-text-primary mb-6">
                        Why Choose Online Sessions?
                    </h3>
                    <ul className="space-y-4">
                        {consultationContent.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-secondary">
                                <FaCheckCircle
                                    className="text-sage-500 mt-0.5 shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Decorative Visual */}
                    <div className="mt-8 pt-6 border-t border-sage-200/50">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-sage-200/60 flex items-center justify-center text-sage-600">
                                <FaShieldAlt aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-poppins font-semibold text-sm text-text-primary">
                                    100% Confidential
                                </p>
                                <p className="text-text-muted text-xs">
                                    Your privacy is our top priority
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
