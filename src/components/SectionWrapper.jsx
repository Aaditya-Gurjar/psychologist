import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function SectionWrapper({
    children,
    id,
    className = "",
    bgClassName = "bg-warm-50",
    stagger = true,
}) {
    return (
        <section
            id={id}
            className={`section-padding ${bgClassName} ${className}`}
            aria-labelledby={id ? `${id}-heading` : undefined}
        >
            <motion.div
                className="max-w-7xl mx-auto"
                variants={stagger ? containerVariants : undefined}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {children}
            </motion.div>
        </section>
    );
}

export { containerVariants, itemVariants };
