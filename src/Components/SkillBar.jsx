import React from 'react'
import { motion } from "framer-motion";

const SkillBar = ({ name, icon, level }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl">{icon}</div>
        <h3 className="font-semibold text-xl">{name}</h3>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-4 bg-[#F68537] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-right mt-1 text-gray-600">{level}%</p>
    </motion.div>
  );
};
export default SkillBar