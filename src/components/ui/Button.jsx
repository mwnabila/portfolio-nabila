import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", href, onClick, className = "" }) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary: `
      bg-yellow-500
      hover:bg-yellow-600
      text-white

      dark:bg-blue-500
      dark:hover:bg-blue-600

      hover:shadow-lg
    `,

    outline: `
      border

      border-yellow-500
      text-yellow-600

      hover:bg-yellow-500
      hover:text-white

      dark:border-blue-500
      dark:text-blue-400

      dark:hover:bg-blue-500
      dark:hover:text-white
    `,
  };

  const combinedStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    const isExternal = href.startsWith("http") || href.endsWith(".pdf");

    return (
      <motion.a href={href} className={combinedStyles} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedStyles} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
};

export default Button;
