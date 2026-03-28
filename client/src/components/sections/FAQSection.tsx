/**
 * FAQSection — よくある質問
 * Design: アコーディオン形式
 */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    a: "はい、管理栄養士の資格をお持ちの方の登録を受け付けています。資格をお持ちでも現場を離れている方も歓迎です。詳しくはお問い合わせフォームよりご連絡ください。",
  },
];

function FAQItem({ q, a, index, isInView }: { q: string; a: string; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[oklch(0.88_0.02_80)] last:border-0"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-3">
          <span className="font-playfair text-sm font-bold text-[oklch(0.65_0.14_50)] mt-0.5 flex-shrink-0">Q.</span>
          <span className="font-serif-jp text-base font-medium text-[oklch(0.22_0.01_60)] group-hover:text-[oklch(0.42_0.10_145)] transition-colors">
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown className="w-5 h-5 text-[oklch(0.52_0.01_60)]" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="flex gap-3 pb-5">
          <span className="font-playfair text-sm font-bold text-[oklch(0.42_0.10_145)] mt-0.5 flex-shrink-0">A.</span>
          <p className="font-sans-jp text-sm text-[oklch(0.45_0.01_60)] leading-relaxed font-light">{a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[oklch(0.97_0.015_80)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Header */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[oklch(0.65_0.14_50)] rounded-full" />
              <span className="font-sans-jp text-sm font-medium text-[oklch(0.52_0.01_60)] tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="font-serif-jp text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-6 leading-tight">
              よくある
              <br />
              ご質問
            </h2>
            <p className="font-sans-jp text-sm text-[oklch(0.52_0.01_60)] leading-relaxed font-light mb-8">
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border-2 border-[oklch(0.42_0.10_145)] text-[oklch(0.42_0.10_145)] font-sans-jp text-sm font-medium rounded-full hover:bg-[oklch(0.42_0.10_145)] hover:text-white transition-all"
            >
              その他のご質問はこちら
            </button>
          </motion.div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
