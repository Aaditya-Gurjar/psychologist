import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../components/SectionWrapper";
import { aboutContent } from "../data/content";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
    return (
        <SectionWrapper id="about" bgClassName="bg-white">
            <div className="max-w-3xl mx-auto">
                <div>
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold tracking-wide uppercase mb-4"
                    >
                        About
                    </motion.span>

                    <motion.h2
                        id="about-heading"
                        variants={itemVariants}
                        className="font-poppins font-bold text-3xl sm:text-4xl text-text-primary mb-6"
                    >
                        {aboutContent.heading}
                    </motion.h2>

                    {aboutContent.paragraphs.map((text, i) => (
                        <motion.p
                            key={i}
                            variants={itemVariants}
                            className="text-text-secondary leading-relaxed mb-4"
                        >
                            {text}
                        </motion.p>
                    ))}

                    {/* Philosophy */}
                    <motion.div variants={itemVariants} className="mt-6">
                        <h3 className="font-poppins font-semibold text-lg text-text-primary mb-4">
                            Therapy Philosophy
                        </h3>
                        <ul className="space-y-3">
                            {aboutContent.philosophy.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-start gap-3 text-text-secondary"
                                >
                                    <FaCheckCircle
                                        className="text-sage-500 mt-1 shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
