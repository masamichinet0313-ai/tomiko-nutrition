/**
 * ServiceSection — サービス内容
 * Design: カラフルなカード、ポップなアイコン、明るい背景
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Utensils, HeartPulse, MessageCircle, Users, BookOpen } from "lucide-react";

const MEAL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/6EnhzEJu9tLg7i3oihn6bR/healthy-meal-colorful-TqdgoyvaDQGDQ2MHCo3pHn.webp";

const services = [
  {
    icon: ClipboardList,
    color: "oklch(0.65 0.20 20)",
    bg: "oklch(0.97 0.04 20)",
    title: "栄養アセスメント",
    desc: "食事内容・栄養状態・体重・血液データなどを総合的に評価し、現状を把握します。",
  },
  {
    icon: Utensils,
    color: "oklch(0.55 0.18 160)",
    bg: "oklch(0.95 0.05 160)",
    title: "個別食事プラン作成",
    desc: "疾患・生活スタイル・好みに合わせたオーダーメイドの食事プランをご提案します。",
  },
  {
    icon: HeartPulse,
    color: "oklch(0.60 0.18 270)",
    bg: "oklch(0.95 0.04 270)",
    title: "疾患別食事指導",
    desc: "糖尿病・腎臓病・脂質異常症・低栄養・嚥下障害など、専門的な食事療法をサポートします。",
  },
  {
    icon: MessageCircle,
    color: "oklch(0.65 0.18 50)",
    bg: "oklch(0.96 0.05 50)",
    title: "調理アドバイス",
    desc: "実際のキッチンで一緒に考える、すぐに実践できる調理のコツや食材選びのアドバイス。",
  },
  {
    icon: Users,
    color: "oklch(0.55 0.16 320)",
    bg: "oklch(0.96 0.04 320)",
    title: "ご家族へのサポート",
    desc: "介護するご家族への食事準備のアドバイスや、栄養に関する疑問にもお答えします。",
  },
  {
    icon: BookOpen,
    color: "oklch(0.55 0.14 90)",
    bg: "oklch(0.96 0.05 90)",
    title: "継続フォローアップ",
    desc: "定期的な訪問で食事プランの見直しや進捗確認を行い、長期的な改善をサポートします。",
  },
];

const stats = [
  { value: "月2回", label: "訪問回数（上限）" },
  { value: "30〜60分", label: "1回の訪問時間" },
  { value: "保険適用", label: "介護・医療保険" },
  { value: "全国対応", label: "フリーランス連携" },
];

export default function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="service" className="py-20 lg:py-28 bg-[oklch(0.99_0.008_90)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.20_20)]/10 mb-4">
            <span className="text-sm font-bold text-[oklch(0.55_0.18_20)]" style={{ fontFamily: "'Nunito', sans-serif" }}>Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.22_0.01_60)] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            こんなことができます！
          </h2>
          <p className="text-base text-[oklch(0.50_0.01_60)] max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            管理栄養士があなたのご自宅に伺い、一人ひとりに合ったサポートを提供します。
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center py-5 px-4 rounded-2xl bg-white border-2 border-[oklch(0.92_0.02_90)] hover:border-[oklch(0.65_0.20_20)]/40 hover:shadow-md transition-all"
            >
              <p className="text-2xl font-black text-[oklch(0.65_0.20_20)] mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>{value}</p>
              <p className="text-xs font-medium text-[oklch(0.55_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map(({ icon: Icon, color, bg, title, desc }, i) => (
            <motion.div
              key={title}
              className="p-6 rounded-3xl bg-white border border-[oklch(0.92_0.02_90)] hover:shadow-xl hover:-translate-y-1 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-base font-bold text-[oklch(0.25_0.01_60)] mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {title}
              </h3>
              <p className="text-sm text-[oklch(0.50_0.01_60)] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom image banner */}
        <motion.div
          className="relative rounded-3xl overflow-hidden h-52 md:h-64"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={MEAL_IMAGE} alt="バランスの良い食事" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.01_60)]/70 to-transparent flex items-center px-10">
            <div>
              <p className="text-white/80 text-sm font-bold mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Personalized Nutrition
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-black" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                あなただけの食事プランを
                <br />
                一緒に作りましょう 🍽️
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
