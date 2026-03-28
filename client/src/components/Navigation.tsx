/**
 * Navigation — ポップ＆フレッシュなナビゲーション
 * Design: コーラルピンク×ミントグリーン、丸みのある親しみやすいデザイン
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { label: "サービス", href: "#service" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "保険適用", href: "#insurance" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-[oklch(0.65_0.20_20)]/10"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-[oklch(0.65_0.20_20)] flex items-center justify-center shadow-md shadow-[oklch(0.65_0.20_20)]/30 group-hover:scale-110 transition-transform">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div>
              <span
                className="font-bold text-base leading-tight block"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: scrolled ? "oklch(0.25 0.01 60)" : "white",
                  textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.25)",
                }}
              >
                富子の訪問栄養指導
              </span>
              <span
                className="text-[10px] font-bold tracking-wide"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: scrolled ? "oklch(0.65 0.20 20)" : "rgba(255,255,255,0.85)",
                }}
              >
                Home Visit Nutrition ✨
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-[oklch(0.65_0.20_20)]/10"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: scrolled ? "oklch(0.40 0.01 60)" : "rgba(255,255,255,0.9)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-5 py-2.5 bg-[oklch(0.65_0.20_20)] text-white text-sm font-bold rounded-full shadow-md shadow-[oklch(0.65_0.20_20)]/30 hover:bg-[oklch(0.58_0.20_20)] hover:shadow-lg transition-all active:scale-95"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              無料相談 🌿
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.65_0.20_20)]/15"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen
              ? <X className="w-5 h-5 text-[oklch(0.65_0.20_20)]" />
              : <Menu className={`w-5 h-5 ${scrolled ? "text-[oklch(0.65_0.20_20)]" : "text-white"}`} />
            }
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.65_0.20_20)]/10"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-5 h-5 text-[oklch(0.65_0.20_20)]" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[oklch(0.65_0.20_20)] flex items-center justify-center shadow-lg mb-2">
              <Leaf className="w-6 h-6 text-white" />
            </div>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-bold text-[oklch(0.30_0.01_60)] hover:text-[oklch(0.65_0.20_20)] transition-colors"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNav("#contact")}
              className="mt-4 px-8 py-3.5 bg-[oklch(0.65_0.20_20)] text-white text-lg font-bold rounded-full shadow-lg"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
            >
              無料相談 🌿
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
