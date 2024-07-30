"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckIcon from "../Icons/Check";
import clsx from "clsx";

interface DropdownProps {
  label: string;
  options: { value: number | string; label: string }[];
  selectedOptions: string | string[];
  onChange: (value: string | string[]) => void;
  selectionType: "single" | "multiple";
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  selectedOptions,
  onChange,
  selectionType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    if (selectionType === "multiple") {
      let newSelectedOptions: string[];
      if ((selectedOptions as string[]).includes(option)) {
        newSelectedOptions = (selectedOptions as string[]).filter(
          (opt) => opt !== option
        );
      } else {
        newSelectedOptions = [...(selectedOptions as string[]), option];
      }
      onChange(newSelectedOptions);
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const updateDropdownPosition = () => {
    if (isOpen && dropdownRef.current && dropdownContentRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const dropdownContentRect =
        dropdownContentRef.current.getBoundingClientRect();
      const overflowRight =
        dropdownRect.left + dropdownContentRect.width > window.innerWidth;
      setOpenLeft(overflowRight);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", updateDropdownPosition);
    window.addEventListener("orientationchange", updateDropdownPosition);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("orientationchange", updateDropdownPosition);
    };
  }, [isOpen]);

  useEffect(() => {
    updateDropdownPosition();
  }, [isOpen]);

  const shouldShowScrollbar = options.length > 7;

  return (
    <div
      className="relative inline-block font-content-md-2-armata text-left"
      ref={dropdownRef}
    >
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-[14px] font-bold shadow-sm px-4 py-2 bg-primaryBorder text-white focus:outline-none hover:bg-opacity-70 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "origin-top-right absolute mt-2 rounded-[14px] shadow-lg bg-primaryBorder z-40 p-3",
              openLeft ? "right-0 transform -translate-x-full" : "left-0"
            )}
            ref={dropdownContentRef}
          >
            <div
              className={clsx(
                "w-56 overflow-y-auto",
                shouldShowScrollbar &&
                  "max-h-[250px] custom-scrollbar-left pl-2"
              )}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value as string)}
                  className="block px-4 py-2 w-full text-left hover:bg-primary rounded-[14px] capitalize"
                >
                  <div
                    className={clsx(
                      "flex items-center justify-between gap-2 min-h-5",
                      shouldShowScrollbar ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <span
                      className={
                        Array.isArray(selectedOptions)
                          ? selectedOptions.includes(option.value as string)
                            ? "font-bold"
                            : ""
                          : selectedOptions === option.value
                          ? "font-bold"
                          : ""
                      }
                    >
                      {option.label}
                    </span>
                    {Array.isArray(selectedOptions)
                      ? selectedOptions.includes(option.value as string) && (
                          <CheckIcon className="w-4 h-4" />
                        )
                      : selectedOptions === option.value && (
                          <CheckIcon className="w-4 h-4" />
                        )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
