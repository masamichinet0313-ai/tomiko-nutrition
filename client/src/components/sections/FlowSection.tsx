/**
 * FlowSection — ご利用の流れ
 * Design: ポップなステップカード、カラフルな番号バッジ
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, FileText, CalendarCheck, Home, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Phone,
    color: "oklch(0.65 0.20 20)",
    bg: "oklch(0.97 0.04 20)",
    title: "まずはご相談",
    desc: "電話・メール・フォームからお気軽にご連絡ください。サービス内容や保険適用についてご説明します。",
    note: "無料・相談のみもOK！",
  },
  {
    icon: FileText,
    color: "oklch(0.55 0.18 160)",
    bg: "oklch(0.95 0.05 160)",
    title: "主治医に相談",
    desc: "かかりつけ医に「訪問栄養食事指導を受けたい」とお伝えください。医師から指示書を発行してもらいます。",
    note: "手続きのサポートもします",
  },
  {
    icon: CalendarCheck,
    color: "oklch(0.60 0.18 270)",
    bg: "oklch(0.95 0.04 270)",
    title: "日程の調整",
    desc: "担当の管理栄養士が決まったら、ご都合に合わせて初回訪問の日程を調整します。",
    note: "担当者プロフィールも確認可",
  },
  {
    icon: Home,
    color: "oklch(0.65 0.18 50)",
    bg: "oklch(0.96 0.05 50)",
    title: "初回訪問",
    desc: "管理栄養士がご自宅に伺い、食事内容・栄養状態・生活環境を詳しく確認。個別プランを作成します。",
    note: "ご家族の同席もOK",
  },
  {
    icon: RefreshCw,
    color: "oklch(0.55 0.16 320)",
    bg: "oklch(0.96 0.04 320)",
    title: "継続サポート",
    desc: "月1〜2回の定期訪問でプランの見直しや進捗確認を行い、長期的な改善をサポートします。",
    note: "月2回まで保険適用",
  },
];

export default function FlowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="flow" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.55_0.18_160)]/10 mb-4">
            <span className="text-sm font-bold text-[oklch(0.40_0.15_160)]" style={{ fontFamily: "'Nunito', sans-serif" }}>How it works</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.22_0.01_60)] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            ご利用の流れ
          </h2>
          <p className="text-base text-[oklch(0.50_0.01_60)] max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            初めての方も安心！シンプルな5ステップでサービスを開始できます。
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[oklch(0.65_0.20_20)] via-[oklch(0.55_0.18_160)] to-[oklch(0.55_0.16_320)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map(({ icon: Icon, color, bg, title, desc, note }, i) => (
              <motion.div
                key={title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Icon circle */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center text-xs font-black shadow-sm"
                    style={{ borderColor: color, color, fontFamily: "'Nunito', sans-serif" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="w-full rounded-2xl p-5 border border-[oklch(0.92_0.02_90)] hover:shadow-lg transition-all"
                  style={{ backgroundColor: bg }}
                >
                  <h3 className="text-sm font-black text-[oklch(0.22_0.01_60)] mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-[oklch(0.50_0.01_60)] leading-relaxed mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {desc}
                  </p>
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-base text-[oklch(0.45_0.01_60)] mb-5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            まずは気軽にご相談ください。保険適用の確認もお手伝いします 😊
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-[oklch(0.65_0.20_20)] text-white font-bold text-base rounded-2xl shadow-lg shadow-[oklch(0.65_0.20_20)]/25 hover:bg-[oklch(0.58_0.20_20)] hover:shadow-xl transition-all active:scale-95"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            無料相談してみる 🌿
          </button>
        </motion.div>
      </div>
    </section>
  );
}
