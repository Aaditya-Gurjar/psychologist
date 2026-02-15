import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../components/SectionWrapper";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

export default function Services() {
    return (
        <SectionWrapper id="services" bgClassName="bg-warm-100">
            <motion.span
                variants={itemVariants}
                className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold tracking-wide uppercase mb-4"
            >
                Services
            </motion.span>

            <motion.h2
                id="services-heading"
                variants={itemVariants}
                className="font-poppins font-bold text-3xl sm:text-4xl text-text-primary mb-4"
            >
                Areas of Expertise
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="text-text-secondary max-w-2xl mb-12 leading-relaxed"
            >
                Tanya Rao offers professional, evidence-based support across a wide
                range of psychological challenges. Every journey starts with
                understanding.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
