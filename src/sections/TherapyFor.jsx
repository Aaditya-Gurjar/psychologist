import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../components/SectionWrapper";
import { therapyForContent } from "../data/content";
import {
    FaUserAlt,
    FaChild,
    FaHandHoldingHeart,
    FaUsers,
} from "react-icons/fa";

const iconMap = {
    FaUserAlt,
    FaChild,
    FaHandHoldingHeart,
    FaUsers,
};

export default function TherapyFor() {
    return (
        <SectionWrapper id="therapy-for" bgClassName="bg-white">
            <motion.span
                variants={itemVariants}
                className="inline-block px-4 py-1.5 rounded-full bg-pastel-100 text-pastel-400 text-xs font-semibold tracking-wide uppercase mb-4"
            >
                Who Is This For?
            </motion.span>

            <motion.h2
                id="therapy-for-heading"
                variants={itemVariants}
                className="font-poppins font-bold text-3xl sm:text-4xl text-text-primary mb-4"
            >
                {therapyForContent.heading}
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="text-text-secondary max-w-2xl mb-12 leading-relaxed"
            >
                {therapyForContent.subheading}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {therapyForContent.categories.map((cat) => {
                    const Icon = iconMap[cat.icon];
                    return (
                        <motion.article
                            key={cat.title}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="bg-gradient-to-br from-sage-50 to-pastel-50 rounded-2xl p-7 border border-sage-100/50 transition-shadow duration-300 hover:shadow-lg"
                        >
                            <div className="w-12 h-12 rounded-xl bg-sage-200/60 flex items-center justify-center text-sage-600 text-xl mb-4">
                                <Icon aria-hidden="true" />
                            </div>
                            <h3 className="font-poppins font-semibold text-lg text-text-primary mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {cat.description}
                            </p>
                        </motion.article>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
