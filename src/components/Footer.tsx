
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-cyan-400/20 py-8 mt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300"
        >
          <p className="text-lg mb-2">
            Made with <span className="text-red-400 animate-pulse">♥</span> and a lots of coffee
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Chitransh Sharma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
