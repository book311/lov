import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg transform rotate-45 flex items-center justify-center">
          <div className="w-6 h-6 bg-black rounded-md transform -rotate-45 flex items-center justify-center">
            <span className="text-cyan-500 font-bold text-sm">SP</span>
          </div>
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
      >
        SP L4BS
      </motion.span>
    </Link>
  );
};