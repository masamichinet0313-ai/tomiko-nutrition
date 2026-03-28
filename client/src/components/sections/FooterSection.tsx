/**
 * FooterSection — フッター
 * Design: 抹茶グリーンの濃い背景 + シンプルなリンク構成
 */

import { Leaf } from "lucide-react";

const navLinks = [
  { label: "サービスについて", href: "#service" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "保険適用", href: "#insurance" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function FooterSection() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.22_0.06_145)] text-white">
      {/* Top CTA Bar */}
      <div className="bg-[oklch(0.65_0.14_50)] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-jp text-2xl font-bold text-white mb-1">
              まずは無料相談から始めましょう
            </h3>
            <p className="font-sans-jp text-sm text-white/80 font-light">
              訪問栄養指導について、どんな小さなことでもお気軽にご相談ください。
            </p>
          </div>
          <button
            onClick={() => handleClick("#contact")}
            className="flex-shrink-0 px-8 py-3 bg-white text-[oklch(0.65_0.14_50)] font-sans-jp font-semibold text-sm rounded-full hover:bg-white/90 transition-all hover:shadow-lg active:scale-95"
          >
            お問い合わせはこちら
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[oklch(0.42_0.10_145)] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-serif-jp text-lg font-semibold text-white block leading-tight">
                  富子の訪問栄養指導
                </span>
                <span className="font-playfair text-xs italic text-white/50">Home Visit Nutrition</span>
              </div>
            </div>
            <p className="font-sans-jp text-sm text-white/60 leading-relaxed font-light">
              管理栄養士が自宅に訪問し、在宅療養中の方の食事・栄養を丁寧にサポートします。介護保険・医療保険適用。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans-jp text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              メニュー
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="font-sans-jp text-sm text-white/70 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans-jp text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              お問い合わせ
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-sans-jp text-xs text-white/40 mb-1">電話番号</p>
                <p className="font-serif-jp text-lg font-semibold text-white">000-0000-0000</p>
                <p className="font-sans-jp text-xs text-white/50 font-light">平日 9:00〜17:00</p>
              </div>
              <div>
                <p className="font-sans-jp text-xs text-white/40 mb-1">メール</p>
                <p className="font-sans-jp text-sm text-white/80">info@tomiko-nutrition.jp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans-jp text-xs text-white/40 font-light">
            © 2025 富子の訪問栄養指導. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="font-sans-jp text-xs text-white/40 hover:text-white/70 transition-colors font-light">
              プライバシーポリシー
            </button>
            <button className="font-sans-jp text-xs text-white/40 hover:text-white/70 transition-colors font-light">
              利用規約
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
