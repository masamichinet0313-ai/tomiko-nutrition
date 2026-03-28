/**
 * HeroSection — ポップ＆フレッシュなヒーロー
 * Design: 明るい写真背景 + コーラルピンクのアクセント + 丸みのあるCTA
 */

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Sparkles } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/6EnhzEJu9tLg7i3oihn6bR/hero-young-tomiko-STWzjFLiH5E6EwrbbpTauB.webp";

const badges = [
  "介護保険・医療保険適用",
  "月2回まで訪問",
  "フリーランス管理栄養士と連携",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="訪問栄養指導の様子"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — light & airy */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[oklch(0.65_0.20_20)]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[oklch(0.72_0.14_160)]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[oklch(0.92_0.12_90)]/20 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-xl">
          {/* Top badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.20_20)]/15 border border-[oklch(0.65_0.20_20)]/30 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-[oklch(0.65_0.20_20)]" />
            <span className="text-sm font-bold text-[oklch(0.55_0.18_20)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              管理栄養士による在宅訪問サービス
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 text-[oklch(0.20_0.01_60)]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            あなたの食卓に、
            <br />
            <span className="text-[oklch(0.65_0.20_20)]">専門家の知恵</span>
            <span className="text-[oklch(0.20_0.01_60)]">を。</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-base sm:text-lg text-[oklch(0.35_0.01_60)] leading-relaxed mb-6 font-medium"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            管理栄養士が自宅に伺い、療養中の方やご家族の
            <br className="hidden sm:block" />
            食事・栄養を丁寧にサポートします。
          </motion.p>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[oklch(0.88_0.06_160)] text-xs font-semibold text-[oklch(0.35_0.08_160)] shadow-sm"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.55_0.14_160)]" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-4 bg-[oklch(0.65_0.20_20)] text-white font-bold text-base rounded-2xl shadow-lg shadow-[oklch(0.65_0.20_20)]/30 hover:bg-[oklch(0.58_0.20_20)] hover:shadow-xl transition-all active:scale-95"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              無料相談・お問い合わせ 🌿
            </button>
            <button
              onClick={() => document.querySelector("#service")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-4 bg-white/80 backdrop-blur-sm text-[oklch(0.30_0.01_60)] font-bold text-base rounded-2xl border-2 border-white hover:bg-white transition-all active:scale-95"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              サービスを見る →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[oklch(0.50_0.01_60)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Nunito', sans-serif" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
