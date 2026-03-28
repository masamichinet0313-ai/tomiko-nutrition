/**
 * AboutSection — 富子さん紹介
 * Design: ポップ＆フレッシュ。カラフルなアクセント、丸みのあるカード
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Star, Users, Sparkles } from "lucide-react";

const PROFILE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/6EnhzEJu9tLg7i3oihn6bR/tomiko-profile-young-N5hE3RnNwLACwqHThWSWT9.webp";

const highlights = [
  { icon: Star, color: "oklch(0.85 0.14 90)", text: "管理栄養士", sub: "国家資格保有" },
  { icon: Heart, color: "oklch(0.65 0.20 20)", text: "在宅専門", sub: "訪問指導に特化" },
  { icon: Users, color: "oklch(0.72 0.14 160)", text: "チーム制", sub: "多職種と連携" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative blobs behind image */}
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-[oklch(0.65_0.20_20)]/15 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-[oklch(0.72_0.14_160)]/20 blur-2xl" />
            <div className="absolute top-1/2 -right-4 w-24 h-24 rounded-full bg-[oklch(0.92_0.12_90)]/30 blur-xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[oklch(0.65_0.20_20)]/15">
              <img
                src={PROFILE_IMAGE}
                alt="山田富子 管理栄養士"
                className="w-full h-auto object-cover"
              />
              {/* Name card overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold text-[oklch(0.65_0.20_20)] tracking-widest uppercase mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      Registered Dietitian
                    </p>
                    <h3 className="text-2xl font-black text-[oklch(0.22_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      山田 富子
                    </h3>
                    <p className="text-sm font-medium text-[oklch(0.50_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      管理栄養士 / 訪問栄養指導サービス代表
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[oklch(0.65_0.20_20)] flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-[oklch(0.65_0.20_20)]/15 p-4 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.92_0.12_90)] flex items-center justify-center">
                <Star className="w-5 h-5 text-[oklch(0.55_0.18_80)]" />
              </div>
              <div>
                <p className="text-lg font-black text-[oklch(0.22_0.01_60)]" style={{ fontFamily: "'Nunito', sans-serif" }}>管理栄養士</p>
                <p className="text-xs text-[oklch(0.55_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>国家資格保有</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.20_20)]/10 mb-6">
              <span className="text-sm font-bold text-[oklch(0.55_0.18_20)]" style={{ fontFamily: "'Nunito', sans-serif" }}>About Tomiko</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.22_0.01_60)] mb-5 leading-tight" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              「食事で、もっと
              <br />
              <span className="text-[oklch(0.65_0.20_20)]">笑顔になれる</span>
              <span className="text-[oklch(0.22_0.01_60)]">」</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base text-[oklch(0.40_0.01_60)] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                こんにちは！管理栄養士の山田富子です。訪問看護の現場を見て、「在宅で療養している方の食事をもっとサポートしたい」という想いから、このサービスを立ち上げました。
              </p>
              <p className="text-base text-[oklch(0.40_0.01_60)] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                介護保険・医療保険を使って、管理栄養士がご自宅に訪問します。糖尿病・腎臓病・嚥下障害など、食事療法が必要な方に寄り添い、実際の生活に合った食事プランをご提案します。
              </p>
              <p className="text-base text-[oklch(0.40_0.01_60)] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                資格を持ちながらも活躍の場が少ない管理栄養士さんとも連携し、地域の栄養サポートを広げていきたいと思っています。
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map(({ icon: Icon, color, text, sub }) => (
                <div
                  key={text}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-[oklch(0.98_0.01_90)] border border-[oklch(0.92_0.02_90)] hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <p className="text-sm font-bold text-[oklch(0.25_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{text}</p>
                  <p className="text-xs text-[oklch(0.55_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
