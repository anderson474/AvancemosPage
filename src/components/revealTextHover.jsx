// components/RevealTextHover.js
import { motion } from "framer-motion";
import Link from "next/link";

const RevealTextHover = ({ href, label, baseColor = 'rgb(45, 168, 54)', hoverColor = '#fff' }) => {
  return (
    <Link href={href} className="relative overflow-hidden group">
      <span style={{ color: baseColor }}>{label}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ color: hoverColor }}
        initial={{ y: '100%' }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.span>
    </Link>
  );
};

export default RevealTextHover;
