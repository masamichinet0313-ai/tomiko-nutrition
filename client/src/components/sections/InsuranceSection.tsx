/**
 * InsuranceSection — 保険適用について
 * Design: 2カラム比較カード + 費用目安
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

export default function InsuranceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const insuranceTypes = [
    {
      type: "医療保険",
      subtitle: "在宅患者訪問栄養食事指導",
      color: "oklch(0.42 0.10 145)",
      bg: "oklch(0.94 0.04 145)",
      lightBg: "oklch(0.97 0.02 145)",
      conditions: [
        "在宅で療養中の方",
        "通院が困難な状態",
        "医師の指示書が必要",
        "要介護認定を受けていない方",
      ],
      cost: "自己負担：約530円/回（3割負担の場合は約1,590円）",
      frequency: "月2回まで",
    },
    {
      type: "介護保険",
      subtitle: "居宅療養管理指導",
      color: "oklch(0.65 0.14 50)",
      bg: "oklch(0.95 0.05 50)",
      lightBg: "oklch(0.97 0.03 50)",
      conditions: [
        "要介護・要支援認定を受けている方",
        "在宅で療養中の方",
        "医師の指示書が必要",
        "ケアマネジャーへの情報提供あり",
      ],
      cost: "自己負担：約530円/回（1割負担の場合）",
      frequency: "月2回まで",
    },
  ];

  return (
    <section id="insurance" className="py-24 lg:py-32 bg-white" ref={ref}>
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
              Insurance
            </span>
            <div className="w-12 h-px bg-[oklch(0.88_0.02_80)]" />
          </div>
          <h2 className="font-serif-jp text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            保険適用について
          </h2>
          <p className="font-sans-jp text-base text-[oklch(0.52_0.01_60)] max-w-xl mx-auto leading-relaxed font-light">
            訪問栄養指導は介護保険・医療保険の両方に対応しています。
            <br />
            少ない自己負担でご利用いただけます。
          </p>
        </motion.div>

        {/* Insurance Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {insuranceTypes.map((ins, i) => (
            <motion.div
              key={ins.type}
              className="rounded-2xl overflow-hidden shadow-sm border border-[oklch(0.92_0.02_80)] hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Card Header */}
              <div className="p-6" style={{ backgroundColor: ins.bg }}>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: ins.color }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif-jp text-xl font-bold" style={{ color: ins.color }}>
                      {ins.type}
                    </h3>
                    <p className="font-sans-jp text-xs text-[oklch(0.45_0.01_60)]">{ins.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white">
                <h4 className="font-sans-jp text-sm font-semibold text-[oklch(0.35_0.01_60)] mb-3 uppercase tracking-wide">
                  対象となる方
                </h4>
                <ul className="space-y-2 mb-6">
                  {ins.conditions.map((cond) => (
                    <li key={cond} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ins.color }} />
                      <span className="font-sans-jp text-sm text-[oklch(0.40_0.01_60)] font-light">{cond}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-[oklch(0.92_0.02_80)]">
                  <div className="flex justify-between items-center">
                    <span className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)]">訪問頻度</span>
                    <span className="font-sans-jp text-sm font-semibold" style={{ color: ins.color }}>{ins.frequency}</span>
                  </div>
                  <div className="rounded-xl p-3" style={{ backgroundColor: ins.lightBg }}>
                    <p className="font-sans-jp text-xs text-[oklch(0.40_0.01_60)] leading-relaxed">{ins.cost}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notice */}
        <motion.div
          className="bg-[oklch(0.97_0.015_80)] rounded-2xl p-6 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AlertCircle className="w-5 h-5 text-[oklch(0.65_0.14_50)] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif-jp text-sm font-semibold text-[oklch(0.22_0.01_60)] mb-2">ご注意・補足事項</h4>
            <div className="font-sans-jp text-sm text-[oklch(0.45_0.01_60)] leading-relaxed font-light space-y-1">
              <p>・保険適用には医師の指示書（訪問栄養食事指導の指示）が必要です。</p>
              <p>・介護保険が優先されます（要介護・要支援認定を受けている場合）。</p>
              <p>・自己負担割合は加入保険・所得によって異なります。詳しくはお問い合わせください。</p>
              <p>・保険適用外の自費サービスもご相談に応じます。</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
