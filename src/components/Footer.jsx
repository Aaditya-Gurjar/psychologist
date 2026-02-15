import { FaEnvelope, FaPhone } from "react-icons/fa";
import { siteConfig } from "../data/content";
import { footerContent } from "../data/content";

export default function Footer() {
    return (
        <footer className="bg-sage-700 text-white" role="contentinfo">
            <div className="max-w-7xl mx-auto px-5 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Brand */}
                    <div>
                        <h3 className="font-poppins font-bold text-xl mb-3">
                            {siteConfig.name}
                        </h3>
                        <p className="text-sage-200 text-sm leading-relaxed">
                            Professional psychologist providing compassionate counselling for
                            adults, children, and families.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-poppins font-semibold text-base mb-3">
                            Contact
                        </h4>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="inline-flex items-center gap-2 text-sage-200 hover:text-white transition-colors text-sm"
                            aria-label={`Email ${siteConfig.name}`}
                        >
                            <FaEnvelope aria-hidden="true" />
                            {siteConfig.email}
                        </a>
                        <div className="mt-3 space-y-1.5">
                            {siteConfig.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/\s/g, "")}`}
                                    className="flex items-center gap-2 text-sage-200 hover:text-white transition-colors text-sm"
                                    aria-label={`Call ${phone}`}
                                >
                                    <FaPhone className="text-xs" aria-hidden="true" />
                                    {phone}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-poppins font-semibold text-base mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {["About", "Services", "Consultation", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sage-200 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Disclaimer & Copyright */}
                <div className="mt-10 pt-8 border-t border-sage-600">
                    <p className="text-sage-300 text-xs leading-relaxed mb-4 max-w-3xl">
                        {footerContent.disclaimer}
                    </p>
                    <p className="text-sage-300 text-xs">
                        {footerContent.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
