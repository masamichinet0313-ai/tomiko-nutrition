/**
 * Navigation Component
 * Design: 和モダン・ウォームミニマリズム
 * - 透明→スクロール時に白背景のスティッキーナビ
 * - 抹茶グリーンのアクセントカラー
 * - Noto Serif JPの品格あるロゴタイプ
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "サービスについて", href: "#service" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "保険適用", href: "#insurance" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.02_80)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-full bg-[oklch(0.42_0.10_145)] flex items-center justify-center group-hover:bg-[oklch(0.30_0.10_145)] transition-colors">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div>
              <span
                className="font-serif-jp text-lg font-semibold leading-tight block"
                style={{ color: scrolled ? "oklch(0.22 0.01 60)" : "white", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)" }}
              >
                富子の訪問栄養指導
              </span>
              <span
                className="font-playfair text-xs italic leading-none block"
                style={{ color: scrolled ? "oklch(0.52 0.01 60)" : "rgba(255,255,255,0.8)" }}
              >
                Home Visit Nutrition
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-sans-jp text-sm font-medium transition-colors underline-accent ${
                  scrolled
                    ? "text-[oklch(0.35_0.01_60)] hover:text-[oklch(0.42_0.10_145)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2 bg-[oklch(0.65_0.14_50)] text-white font-sans-jp text-sm font-medium rounded-full hover:bg-[oklch(0.58_0.16_50)] transition-all hover:shadow-md active:scale-95"
            >
              無料相談
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-[oklch(0.22_0.01_60)]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-[oklch(0.22_0.01_60)]" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-20"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-serif-jp text-xl font-medium text-left text-[oklch(0.22_0.01_60)] hover:text-[oklch(0.42_0.10_145)] transition-colors border-b border-[oklch(0.92_0.02_80)] pb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 py-4 bg-[oklch(0.42_0.10_145)] text-white font-sans-jp text-base font-medium rounded-xl hover:bg-[oklch(0.30_0.10_145)] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                無料相談・お問い合わせ
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
