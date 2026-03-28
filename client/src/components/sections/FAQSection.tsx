/**
 * FAQSection — よくある質問
 * Design: ポップなアコーディオン、カラフルなQ/Aバッジ
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "訪問栄養指導はどんな方が対象ですか？",
    a: "在宅で療養中の方で、通院が困難な状態の方が対象です。糖尿病・腎臓病・脂質異常症・低栄養・嚥下障害など、食事療法が必要な疾患をお持ちの方に特に適しています。要介護・要支援認定を受けている方は介護保険、そうでない方は医療保険が適用されます。",
  },
  {
    q: "保険適用の手続きはどうすればいいですか？",
    a: "まずかかりつけ医に「訪問栄養食事指導を受けたい」とお伝えください。医師から指示書を発行してもらう必要があります。手続きの流れについては、お問い合わせいただければ詳しくご説明します。",
  },
  {
    q: "担当する管理栄養士はどんな方ですか？",
    a: "管理栄養士の国家資格を持つ専門家が担当します。地域で活動するフリーランスの管理栄養士と連携しており、担当者のプロフィールや専門分野を事前にご確認いただけます。",
  },
  {
    q: "1回の訪問でどんなことをしてもらえますか？",
    a: "初回は食事内容・栄養状態・生活環境のアセスメントを行い、個別の食事プランを作成します。2回目以降は実施状況の確認・プランの見直し・具体的な調理のアドバイスなどを行います。ご家族の方も同席いただけます。",
  },
  {
    q: "訪問エリアはどこですか？",
    a: "対応エリアは地域によって異なります。まずはお問い合わせいただき、ご住所をお知らせください。対応可能な管理栄養士をご紹介します。",
  },
  {
    q: "管理栄養士として働きたいのですが、登録できますか？",
    a: "はい、管理栄養士の資格をお持ちの方の登録を受け付けています。資格をお持ちでも現場を離れている方も大歓迎です！詳しくはお問い合わせフォームよりご連絡ください。",
  },
];

function FAQItem({ q, a, index, isInView }: { q: string; a: string; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-[oklch(0.92_0.02_90)] bg-white hover:border-[oklch(0.65_0.20_20)]/40 transition-colors"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5"
            style={{ backgroundColor: "oklch(0.65 0.20 20)", fontFamily: "'Nunito', sans-serif" }}
          >
            Q
          </span>
          <span className="text-sm font-bold text-[oklch(0.25_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown className="w-5 h-5 text-[oklch(0.65_0.20_20)]" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="flex gap-3 px-5 pb-5">
          <span
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white mt-0.5"
            style={{ backgroundColor: "oklch(0.55 0.18 160)", fontFamily: "'Nunito', sans-serif" }}
          >
            A
          </span>
          <p className="text-sm text-[oklch(0.45_0.01_60)] leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {a}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[oklch(0.99_0.008_90)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.18_50)]/10 mb-4">
            <span className="text-sm font-bold text-[oklch(0.55_0.15_50)]" style={{ fontFamily: "'Nunito', sans-serif" }}>FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.22_0.01_60)] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            よくある質問
          </h2>
          <p className="text-base text-[oklch(0.50_0.01_60)] max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            気になることがあればお気軽にお問い合わせください！
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-[oklch(0.55_0.01_60)] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            その他のご質問もお気軽にどうぞ 💬
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 border-2 border-[oklch(0.65_0.20_20)] text-[oklch(0.65_0.20_20)] font-bold text-sm rounded-2xl hover:bg-[oklch(0.65_0.20_20)] hover:text-white transition-all"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            お問い合わせはこちら →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
