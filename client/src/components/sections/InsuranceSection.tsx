/**
 * InsuranceSection — 保険適用
 * Design: ポップな2カラムカード比較
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ShieldCheck, Wallet } from "lucide-react";

const insurances = [
  {
    type: "介護保険",
    emoji: "🏠",
    color: "oklch(0.65 0.20 20)",
    bg: "oklch(0.97 0.04 20)",
    border: "oklch(0.80 0.12 20)",
    target: "要介護・要支援認定を受けている方",
    fee: "自己負担1〜3割",
    points: [
      "要介護1〜5、要支援1〜2の方が対象",
      "ケアマネジャーとの連携が必要",
      "月2回まで訪問可能",
      "居宅療養管理指導として算定",
    ],
  },
  {
    type: "医療保険",
    emoji: "🏥",
    color: "oklch(0.55 0.18 160)",
    bg: "oklch(0.95 0.05 160)",
    border: "oklch(0.70 0.14 160)",
    target: "在宅療養中で通院が困難な方",
    fee: "自己負担1〜3割",
    points: [
      "通院が困難な在宅療養患者が対象",
      "主治医の指示書が必要",
      "月2回まで訪問可能",
      "在宅患者訪問栄養食事指導料として算定",
    ],
  },
];

export default function InsuranceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="insurance" className="py-20 lg:py-28 bg-[oklch(0.99_0.008_90)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.60_0.18_270)]/10 mb-4">
            <ShieldCheck className="w-4 h-4 text-[oklch(0.50_0.16_270)]" />
            <span className="text-sm font-bold text-[oklch(0.45_0.15_270)]" style={{ fontFamily: "'Nunito', sans-serif" }}>Insurance</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.22_0.01_60)] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            保険が使えます！
          </h2>
          <p className="text-base text-[oklch(0.50_0.01_60)] max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            介護保険・医療保険の両方に対応。自己負担を抑えて専門的な栄養指導が受けられます。
          </p>
        </motion.div>

        {/* Insurance Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {insurances.map(({ type, emoji, color, bg, border, target, fee, points }, i) => (
            <motion.div
              key={type}
              className="rounded-3xl overflow-hidden border-2 hover:shadow-xl hover:-translate-y-1 transition-all"
              style={{ borderColor: border, backgroundColor: bg }}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Card header */}
              <div className="p-6 pb-4" style={{ backgroundColor: color }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {type}
                  </h3>
                </div>
                <p className="text-white/85 text-sm font-medium" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  対象：{target}
                </p>
              </div>

              {/* Card body */}
              <div className="p-6">
                {/* Fee badge */}
                <div className="flex items-center gap-2 mb-5">
                  <Wallet className="w-5 h-5" style={{ color }} />
                  <span className="text-base font-black" style={{ color, fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {fee}
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                      <span className="text-sm text-[oklch(0.35_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="bg-white rounded-2xl border border-[oklch(0.92_0.02_90)] p-6 flex gap-4 items-start"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-10 h-10 rounded-xl bg-[oklch(0.92_0.12_90)] flex items-center justify-center flex-shrink-0">
            <span className="text-lg">💡</span>
          </div>
          <div>
            <h4 className="font-bold text-[oklch(0.25_0.01_60)] mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              どちらの保険が使えるかわからない方へ
            </h4>
            <p className="text-sm text-[oklch(0.50_0.01_60)] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              お問い合わせいただければ、保険適用の確認から手続きのサポートまでお手伝いします。まずはお気軽にご相談ください 😊
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
