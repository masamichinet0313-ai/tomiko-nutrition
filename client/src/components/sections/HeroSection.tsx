/**
 * HeroSection
 * Design: 大きな背景画像 + 左寄せの力強いコピー
 * - 訪問シーンの温かい写真を背景に
 * - 暗めのオーバーレイで文字を読みやすく
 * - 下からフェードインするアニメーション
 */

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/6EnhzEJu9tLg7i3oihn6bR/hero-visit-ZenSf8TjUvETHPmS3Gb8ZW.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function HeroSection() {
  const scrollToService = () => {
    document.querySelector("#service")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Gradient Overlay — left side darker for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[oklch(0.82_0.09_50)]" />
            <span className="font-sans-jp text-sm font-medium text-[oklch(0.90_0.08_50)] tracking-widest uppercase">
              管理栄養士による在宅訪問サービス
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-serif-jp text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            あなたの食卓に、
            <br />
            <span className="text-[oklch(0.82_0.09_50)]">専門家の知恵</span>を。
          </motion.h1>

          {/* Sub Headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="font-sans-jp text-lg md:text-xl text-white/85 leading-relaxed mb-8 font-light"
          >
            管理栄養士が自宅に伺い、療養中の方やご家族の
            <br className="hidden md:block" />
            食事・栄養を丁寧にサポートします。
          </motion.p>

          {/* Key Points */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            {["介護保険・医療保険適用", "月2回まで訪問", "フリーランス管理栄養士と連携"].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[oklch(0.72_0.08_145)] flex-shrink-0" />
                <span className="font-sans-jp text-sm text-white/90">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-[oklch(0.65_0.14_50)] text-white font-sans-jp font-medium text-base rounded-full hover:bg-[oklch(0.58_0.16_50)] transition-all hover:shadow-lg hover:shadow-orange-900/20 active:scale-95"
            >
              無料相談・お問い合わせ
            </button>
            <button
              onClick={scrollToService}
              className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-sans-jp font-medium text-base rounded-full border border-white/30 hover:bg-white/25 transition-all active:scale-95"
            >
              サービスを見る
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToService}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-sans-jp text-xs text-white/60 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="oklch(0.97 0.015 80)" />
        </svg>
      </div>
    </section>
  );
}
