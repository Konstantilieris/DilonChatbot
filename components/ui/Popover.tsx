"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IconRobot } from "@tabler/icons-react";

interface PopoverProps {
  chatbotResponse: string | null | undefined;
}

const Popover: React.FC<PopoverProps> = ({ chatbotResponse }) => {
  const ref = React.useRef(null);

  return (
    <div
      className="relative bg-dark-200 text-white p-6 rounded-lg shadow-lg z-10 max-w-[40vw] min-w-[40vw] self-center items-center h-full mt-20"
      ref={ref}
    >
      <IconRobot size={48} className="text-lime-400" />
      <AnimatePresence key={chatbotResponse} mode="wait">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {chatbotResponse}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Popover;
