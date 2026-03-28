/**
 * ServiceSection — サービス内容
 * Design: カードグリッド + 食事プランニング画像
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Utensils, Users, ClipboardList, Home, Stethoscope } from "lucide-react";

const MEAL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/6EnhzEJu9tLg7i3oihn6bR/meal-planning-DSqhdjeGmaHbUuVwaFg7co.webp";

const services = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "栄養アセスメント",
    desc: "現在の食事内容・栄養状態を詳しく評価し、課題を明確にします。",
    color: "oklch(0.42 0.10 145)",
    bg: "oklch(0.94 0.04 145)",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "個別食事プラン作成",
    desc: "病態・嗜好・生活環境に合わせたオーダーメイドの食事計画を立案します。",
    color: "oklch(0.65 0.14 50)",
    bg: "oklch(0.95 0.05 50)",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "疾患別栄養指導",
    desc: "糖尿病・腎臓病・脂質異常症・低栄養・嚥下障害など幅広く対応します。",
    color: "oklch(0.42 0.10 145)",
    bg: "oklch(0.94 0.04 145)",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "在宅環境に合わせた指導",
    desc: "台所設備・家族構成・介護状況を踏まえた、実践的なアドバイスを行います。",
    color: "oklch(0.65 0.14 50)",
    bg: "oklch(0.95 0.05 50)",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "ご家族・介護者への指導",
    desc: "食事を準備するご家族や介護者の方にも、わかりやすく指導します。",
    color: "oklch(0.42 0.10 145)",
    bg: "oklch(0.94 0.04 145)",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "継続的なフォローアップ",
    desc: "定期的な訪問で状態の変化を把握し、プランを随時見直します。",
    color: "oklch(0.65 0.14 50)",
    bg: "oklch(0.95 0.05 50)",
  },
];

export default function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="service" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[oklch(0.88_0.02_80)]" />
            <span className="font-sans-jp text-sm font-medium text-[oklch(0.52_0.01_60)] tracking-widest uppercase">
              Service
            </span>
            <div className="w-12 h-px bg-[oklch(0.88_0.02_80)]" />
          </div>
          <h2 className="font-serif-jp text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            サービス内容
          </h2>
          <p className="font-sans-jp text-base text-[oklch(0.52_0.01_60)] max-w-xl mx-auto leading-relaxed font-light">
            管理栄養士が自宅に訪問し、療養中の方の食事・栄養に関するあらゆる課題に対応します。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Service Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-[oklch(0.97_0.015_80)] rounded-2xl p-5 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: service.bg, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="font-serif-jp text-base font-semibold text-[oklch(0.22_0.01_60)] mb-2">
                  {service.title}
                </h3>
                <p className="font-sans-jp text-sm text-[oklch(0.52_0.01_60)] leading-relaxed font-light">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image Side */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[oklch(0.65_0.14_50)]/15 rounded-2xl" />
              <img
                src={MEAL_IMAGE}
                alt="食事プランニング"
                className="relative z-10 w-full rounded-2xl shadow-lg object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>

            {/* Info box */}
            <div className="mt-8 bg-[oklch(0.42_0.10_145)] rounded-2xl p-6 text-white">
              <h3 className="font-serif-jp text-lg font-semibold mb-3">指導の基本情報</h3>
              <div className="space-y-2">
                {[
                  { label: "訪問頻度", value: "月2回まで（保険適用）" },
                  { label: "指導時間", value: "30〜40分程度" },
                  { label: "対応エリア", value: "ご相談ください" },
                  { label: "担当者", value: "管理栄養士（資格保有者）" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                    <span className="font-sans-jp text-sm text-white/70">{item.label}</span>
                    <span className="font-sans-jp text-sm font-medium text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
