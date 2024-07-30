"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../Icons/Logo";
import WalletConnect from "../Buttons/WalletConnect";
import { siteConfig } from "@/config/site";
import ProfileButton from "../Buttons/ProfileButton";
import { MenuIcon } from "../Icons/MenuIcon";
import { CloseIcon } from "../Icons/CloseIcon";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarClasses =
    "flex items-center justify-between px-10 py-5 bg-dark-gray border-b border-primary navbar-box-shadow px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20";

  const slideDownAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".drawer")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      className={navbarClasses}
      initial="hidden"
      animate="visible"
      variants={slideDownAnimation}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-end gap-2 lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <CloseIcon className="h-6 w-6 text-red-500" />
          ) : (
            <MenuIcon className="h-6 w-6 text-red-500" />
          )}
        </button>
      </div>
      <ul className="hidden lg:flex items-center justify-center gap-4 text-sm h-max ml-11">
        {siteConfig.navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`px-3 py-1.5 rounded-[50px] ${
                (pathname.includes(item.href) && item.href !== "/") ||
                pathname === item.href
                  ? "bg-primary text-black"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center justify-end gap-2">
        <ProfileButton />
        <WalletConnect />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
            className="fixed top-0 right-0 h-full w-64 bg-dark-gray shadow-lg z-50 drawer"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <CloseIcon className="h-6 w-6 text-red-500" />
            </button>
            <ul className="flex flex-col items-center gap-6 mt-16 text-lg">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`px-6 py-3 rounded-[50px] ${
                      (pathname.includes(item.href) && item.href !== "/") ||
                      pathname === item.href
                        ? "bg-primary text-black"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <div className="flex flex-col items-center gap-4 mt-8 w-full px-4">
                <ProfileButton />
                <WalletConnect className="w-full" />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
