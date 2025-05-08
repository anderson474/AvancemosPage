'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const SlotTextHover = ({ href, label }: { href: string; label: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <div
        className="overflow-hidden h-6 relative cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: hovered ? -24 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="text-green-700 font-semibold text-base"
        >
          <div>{label}</div>
          <div className="absolute top-6 left-0">{label}</div>
        </motion.div>
      </div>
    </Link>
  );
};

export default SlotTextHover;

