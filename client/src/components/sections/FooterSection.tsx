/**
 * FooterSection — フッター
 * Design: ポップなコーラルピンク背景、明るいフッター
 */

import { motion } from "framer-motion";
import { Leaf, Heart } from "lucide-react";

const footerLinks = [
  { label: "サービス内容", href: "#service" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "保険適用", href: "#insurance" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function FooterSection() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-[oklch(0.65_0.20_20)] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 text-sm font-bold mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Let's get started!
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              まずは無料でご相談ください 🌿
            </h2>
            <p className="text-white/80 text-base mb-8" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              保険適用の確認から手続きのサポートまで、丁寧にお答えします。
            </p>
            <button
              onClick={() => handleNav("#contact")}
              className="px-8 py-4 bg-white text-[oklch(0.65_0.20_20)] font-black text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              無料相談・お問い合わせ →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer body */}
      <div className="bg-[oklch(0.22_0.01_60)] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-full bg-[oklch(0.65_0.20_20)] flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base block" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    米田富子の訪問栄養指導
                  </span>
                  <span className="text-[10px] text-[oklch(0.65_0.20_20)] font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    Home Visit Nutrition ✨
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/60 max-w-xs leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                管理栄養士があなたのご自宅に伺い、食事・栄養を丁寧にサポートします。
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/40" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              © 2024 米田富子の訪問栄養指導. All rights reserved.
            </p>
            <p className="text-xs text-white/40 flex items-center gap-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              Made with <Heart className="w-3 h-3 text-[oklch(0.65_0.20_20)]" /> by 米田富子
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
