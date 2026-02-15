import { motion } from "framer-motion";
import { itemVariants } from "./SectionWrapper";

export default function ServiceCard({ icon: Icon, title, description }) {
    return (
        <motion.article
            variants={itemVariants}
            whileHover={{
                y: -6,
                boxShadow: "var(--shadow-card-hover)",
            }}
            className="group bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] transition-shadow duration-300 cursor-default"
        >
            <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mb-5 text-sage-600 text-2xl group-hover:bg-sage-200 transition-colors duration-300">
                <Icon aria-hidden="true" />
            </div>
            <h3 className="font-poppins font-semibold text-lg text-text-primary mb-2">
                {title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
                {description}
            </p>
        </motion.article>
    );
}
