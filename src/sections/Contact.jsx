import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper, { itemVariants } from "../components/SectionWrapper";
import Button from "../components/Button";
import { contactContent, siteConfig } from "../data/content";
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

// ─── EmailJS Configuration ─────────────────────────────
// Replace these placeholders with your actual EmailJS credentials.
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (e.g. Gmail) → copy the SERVICE_ID
// 3. Create a template → copy the TEMPLATE_ID
// 4. Copy your PUBLIC_KEY from Account → API Keys
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const initialFormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) errors.name = "Full name is required";
    if (!values.email.trim()) {
        errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    if (!values.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^[+\d\s()-]{7,20}$/.test(values.phone)) {
        errors.phone = "Please enter a valid phone number";
    }
    if (!values.message.trim()) errors.message = "Please describe your concern";

    return errors;
};

export default function Contact() {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        // Clear error on change
        if (errors[name]) {
            setErrors((prev) => {
                const copy = { ...prev };
                delete copy[name];
                return copy;
            });
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));

        // Validate single field on blur
        const fieldErrors = validate(form);
        if (fieldErrors[name]) {
            setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(form);
        setErrors(validationErrors);
        setTouched({ name: true, email: true, phone: true, message: true });

        if (Object.keys(validationErrors).length > 0) return;

        setStatus("loading");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    phone: form.phone,
                    message: form.message,
                    to_email: siteConfig.email,
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            setForm(initialFormState);
            setTouched({});

            setTimeout(() => setStatus("idle"), 6000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 6000);
        }
    };

    const inputBaseClass =
        "w-full px-4 py-3.5 rounded-xl bg-warm-100 border transition-colors duration-300 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent font-inter text-sm";

    const getInputClass = (field) =>
        `${inputBaseClass} ${errors[field] && touched[field]
            ? "border-red-400 bg-red-50/30"
            : "border-warm-300 hover:border-sage-300"
        }`;

    return (
        <SectionWrapper id="contact" bgClassName="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left — Info */}
                <div>
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold tracking-wide uppercase mb-4"
                    >
                        Contact
                    </motion.span>

                    <motion.h2
                        id="contact-heading"
                        variants={itemVariants}
                        className="font-poppins font-bold text-3xl sm:text-4xl text-text-primary mb-4"
                    >
                        {contactContent.heading}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-text-secondary leading-relaxed mb-8 max-w-md"
                    >
                        {contactContent.subheading}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-sage-50 to-pastel-50 rounded-2xl p-6 border border-sage-100/50"
                    >
                        <h3 className="font-poppins font-semibold text-base text-text-primary mb-3">
                            Prefer email?
                        </h3>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sage-600 hover:text-sage-700 font-medium transition-colors text-sm underline decoration-sage-300 underline-offset-4 hover:decoration-sage-500"
                        >
                            {siteConfig.email}
                        </a>
                        <p className="text-text-muted text-xs mt-3">
                            All inquiries are treated as strictly confidential.
                        </p>
                    </motion.div>
                </div>

                {/* Right — Form */}
                <motion.div variants={itemVariants}>
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="bg-warm-50 rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-card)] border border-warm-200"
                    >
                        {/* Name */}
                        <div className="mb-5">
                            <label
                                htmlFor="contact-name"
                                className="block text-sm font-medium text-text-primary mb-2"
                            >
                                Full Name <span className="text-red-400" aria-hidden="true">*</span>
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your full name"
                                required
                                aria-required="true"
                                aria-invalid={!!errors.name && touched.name}
                                aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                                className={getInputClass("name")}
                            />
                            {errors.name && touched.name && (
                                <p id="name-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert">
                                    <FaExclamationCircle aria-hidden="true" /> {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label
                                htmlFor="contact-email"
                                className="block text-sm font-medium text-text-primary mb-2"
                            >
                                Email Address <span className="text-red-400" aria-hidden="true">*</span>
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="your@email.com"
                                required
                                aria-required="true"
                                aria-invalid={!!errors.email && touched.email}
                                aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                                className={getInputClass("email")}
                            />
                            {errors.email && touched.email && (
                                <p id="email-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert">
                                    <FaExclamationCircle aria-hidden="true" /> {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="mb-5">
                            <label
                                htmlFor="contact-phone"
                                className="block text-sm font-medium text-text-primary mb-2"
                            >
                                Phone Number <span className="text-red-400" aria-hidden="true">*</span>
                            </label>
                            <input
                                id="contact-phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="+91 99999 99999"
                                required
                                aria-required="true"
                                aria-invalid={!!errors.phone && touched.phone}
                                aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                                className={getInputClass("phone")}
                            />
                            {errors.phone && touched.phone && (
                                <p id="phone-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert">
                                    <FaExclamationCircle aria-hidden="true" /> {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label
                                htmlFor="contact-message"
                                className="block text-sm font-medium text-text-primary mb-2"
                            >
                                Your Concern <span className="text-red-400" aria-hidden="true">*</span>
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Briefly describe what you'd like to discuss..."
                                required
                                aria-required="true"
                                aria-invalid={!!errors.message && touched.message}
                                aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                                className={`${getInputClass("message")} resize-none`}
                            />
                            {errors.message && touched.message && (
                                <p id="message-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1" role="alert">
                                    <FaExclamationCircle aria-hidden="true" /> {errors.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full"
                            ariaLabel="Send your inquiry"
                        >
                            {status === "loading" ? (
                                <>
                                    <FaSpinner className="animate-spin" aria-hidden="true" />
                                    Sending...
                                </>
                            ) : (
                                "Send Inquiry"
                            )}
                        </Button>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3"
                                    role="alert"
                                >
                                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                                    <p className="text-green-700 text-sm">
                                        {contactContent.successMessage}
                                    </p>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
                                    role="alert"
                                >
                                    <FaExclamationCircle className="text-red-500 mt-0.5 shrink-0" aria-hidden="true" />
                                    <p className="text-red-700 text-sm">
                                        {contactContent.errorMessage}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
