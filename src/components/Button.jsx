import { motion } from "framer-motion";

const variants = {
    primary:
        "bg-sage-600 text-white hover:bg-sage-700 shadow-[var(--shadow-button)]",
    secondary:
        "bg-pastel-200 text-sage-700 hover:bg-pastel-300",
    outline:
        "border-2 border-sage-500 text-sage-600 hover:bg-sage-50",
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    href,
    type = "button",
    disabled = false,
    onClick,
    ariaLabel,
    ...props
}) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-inter font-semibold text-sm tracking-wide transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label={ariaLabel}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            className={classes}
            whileHover={!disabled ? { scale: 1.03 } : {}}
            whileTap={!disabled ? { scale: 0.97 } : {}}
            disabled={disabled}
            onClick={onClick}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </motion.button>
    );
}
