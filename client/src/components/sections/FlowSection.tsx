/**
 * FlowSection — ご利用の流れ
 * Design: 縦型ステップフロー + 番号アクセント
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, UserCheck, MapPin, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Phone className="w-5 h-5" />,
    title: "お問い合わせ・無料相談",
    desc: "まずはお電話またはメールでお気軽にご相談ください。サービス内容や保険適用の可否についてご説明します。",
    note: "※ 相談は無料です",
  },
  {
    num: "02",
    icon: <FileText className="w-5 h-5" />,
    title: "医師の指示書取得",
    desc: "保険適用で訪問栄養指導を受けるには、かかりつけ医から「訪問栄養食事指導の指示書」を取得していただく必要があります。手続きのサポートもいたします。",
    note: "※ 医療保険・介護保険で手続きが異なります",
  },
  {
    num: "03",
    icon: <UserCheck className="w-5 h-5" />,
    title: "担当管理栄養士のご紹介",
    desc: "地域・状態・ご希望に合わせて、最適な管理栄養士をご紹介します。事前にプロフィールや専門分野をご確認いただけます。",
    note: "",
  },
  {
    num: "04",
    icon: <MapPin className="w-5 h-5" />,
    title: "初回訪問・アセスメント",
    desc: "担当管理栄養士がご自宅に伺い、現在の食事内容・栄養状態・生活環境を詳しく確認します。ご家族の方も同席いただけます。",
    note: "※ 初回は60分程度",
  },
  {
    num: "05",
    icon: <RefreshCw className="w-5 h-5" />,
    title: "継続訪問・フォローアップ",
    desc: "月2回を基本に定期訪問を行い、食事プランの実施状況を確認しながら継続的にサポートします。状態の変化に応じてプランを柔軟に見直します。",
    note: "",
  },
];

export default function FlowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="flow" className="py-24 lg:py-32 bg-[oklch(0.97_0.015_80)]" ref={ref}>
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
              Flow
            </span>
            <div className="w-12 h-px bg-[oklch(0.88_0.02_80)]" />
          </div>
          <h2 className="font-serif-jp text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            ご利用の流れ
          </h2>
          <p className="font-sans-jp text-base text-[oklch(0.52_0.01_60)] max-w-xl mx-auto leading-relaxed font-light">
            お問い合わせから訪問開始まで、スムーズにご利用いただけるようサポートします。
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Left: Number + Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.42_0.10_145)] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[oklch(0.42_0.10_145)]/40 to-transparent mt-2 min-h-8" />
                )}
              </div>

              {/* Right: Content */}
              <div className="pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-playfair text-sm font-bold text-[oklch(0.65_0.14_50)]">{step.num}</span>
                  <h3 className="font-serif-jp text-lg font-semibold text-[oklch(0.22_0.01_60)]">{step.title}</h3>
                </div>
                <p className="font-sans-jp text-sm text-[oklch(0.45_0.01_60)] leading-relaxed font-light mb-2">
                  {step.desc}
                </p>
                {step.note && (
                  <span className="inline-block font-sans-jp text-xs text-[oklch(0.65_0.14_50)] bg-[oklch(0.95_0.05_50)] px-3 py-1 rounded-full">
                    {step.note}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 bg-[oklch(0.42_0.10_145)] text-white font-sans-jp font-medium text-base rounded-full hover:bg-[oklch(0.30_0.10_145)] transition-all hover:shadow-lg active:scale-95"
          >
            まずは無料相談から
          </button>
        </motion.div>
      </div>
    </section>
  );
}
