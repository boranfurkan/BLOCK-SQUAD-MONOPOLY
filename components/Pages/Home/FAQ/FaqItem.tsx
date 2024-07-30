"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@/components/Icons/ArrowDownIcon";

interface FaqItemProps {
  title: string;
  content: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-[32px] mb-2 px-4 sm:px-6 py-4 sm:py-[35px] border bg-primary-gradient border-primaryBorder overflow-hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-full text-left px-2 sm:px-4 py-2 text-white flex justify-between items-center">
        <h3 className="font-content-lg">{title}</h3>
        {isOpen ? (
          <div className="transform rotate-180 w-[40px] h-[40px]">
            <ArrowDownIcon width={40} height={40} />
          </div>
        ) : (
          <div className="w-[40px] h-[40px]">
            <ArrowDownIcon width={40} height={40} />
          </div>
        )}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
        transition={{ duration: 0.3 }}
      >
        <div
          className="p-2 sm:p-4 text-white font-content-md-armata"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default FaqItem;
