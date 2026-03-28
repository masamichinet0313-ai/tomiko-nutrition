/**
 * ContactSection — お問い合わせ
 * Design: 2カラム（左:情報 右:フォーム）
 */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "patient",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("お問い合わせを受け付けました。2営業日以内にご連絡いたします。");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white" ref={ref}>
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
              Contact
            </span>
            <div className="w-12 h-px bg-[oklch(0.88_0.02_80)]" />
          </div>
          <h2 className="font-serif-jp text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            お問い合わせ・無料相談
          </h2>
          <p className="font-sans-jp text-base text-[oklch(0.52_0.01_60)] max-w-xl mx-auto leading-relaxed font-light">
            サービスについてのご質問、無料相談のご予約など、お気軽にご連絡ください。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[oklch(0.94_0.04_145)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[oklch(0.42_0.10_145)]" />
                </div>
                <div>
                  <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)] mb-1 uppercase tracking-wide">お電話</p>
                  <p className="font-serif-jp text-xl font-semibold text-[oklch(0.22_0.01_60)]">000-0000-0000</p>
                  <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)] mt-1">平日 9:00〜17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[oklch(0.94_0.04_145)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[oklch(0.42_0.10_145)]" />
                </div>
                <div>
                  <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)] mb-1 uppercase tracking-wide">メール</p>
                  <p className="font-serif-jp text-base font-medium text-[oklch(0.22_0.01_60)]">info@tomiko-nutrition.jp</p>
                  <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)] mt-1">24時間受付・2営業日以内に返信</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[oklch(0.94_0.04_145)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[oklch(0.42_0.10_145)]" />
                </div>
                <div>
                  <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)] mb-1 uppercase tracking-wide">対応エリア</p>
                  <p className="font-sans-jp text-sm text-[oklch(0.40_0.01_60)] leading-relaxed font-light">
                    詳しくはお問い合わせください。
                    <br />
                    地域の管理栄養士と連携して対応します。
                  </p>
                </div>
              </div>
            </div>

            {/* For Dietitians */}
            <div className="mt-10 p-5 bg-[oklch(0.95_0.05_50)] rounded-2xl border border-[oklch(0.88_0.06_50)]">
              <h3 className="font-serif-jp text-base font-semibold text-[oklch(0.40_0.08_50)] mb-2">
                管理栄養士の方へ
              </h3>
              <p className="font-sans-jp text-sm text-[oklch(0.45_0.08_50)] leading-relaxed font-light">
                資格をお持ちで在宅訪問に関心のある管理栄養士の方も、ぜひお問い合わせください。フリーランスとして活躍できる機会をご紹介します。
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.94_0.04_145)] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[oklch(0.42_0.10_145)]" />
                </div>
                <h3 className="font-serif-jp text-xl font-semibold text-[oklch(0.22_0.01_60)] mb-2">
                  送信完了しました
                </h3>
                <p className="font-sans-jp text-sm text-[oklch(0.52_0.01_60)] font-light">
                  2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry Type */}
                <div>
                  <label className="font-sans-jp text-sm font-medium text-[oklch(0.35_0.01_60)] block mb-2">
                    お問い合わせ種別
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { value: "patient", label: "サービス利用（患者・家族）" },
                      { value: "dietitian", label: "管理栄養士として登録" },
                      { value: "other", label: "その他" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={opt.value}
                          checked={form.type === opt.value}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className="accent-[oklch(0.42_0.10_145)]"
                        />
                        <span className="font-sans-jp text-sm text-[oklch(0.40_0.01_60)]">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="font-sans-jp text-sm font-medium text-[oklch(0.35_0.01_60)] block mb-2">
                    お名前 <span className="text-[oklch(0.65_0.14_50)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="山田 太郎"
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_80)] bg-[oklch(0.97_0.015_80)] font-sans-jp text-sm text-[oklch(0.22_0.01_60)] placeholder:text-[oklch(0.70_0.01_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.10_145)]/40 focus:border-[oklch(0.42_0.10_145)] transition-all"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans-jp text-sm font-medium text-[oklch(0.35_0.01_60)] block mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="000-0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_80)] bg-[oklch(0.97_0.015_80)] font-sans-jp text-sm text-[oklch(0.22_0.01_60)] placeholder:text-[oklch(0.70_0.01_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.10_145)]/40 focus:border-[oklch(0.42_0.10_145)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-sans-jp text-sm font-medium text-[oklch(0.35_0.01_60)] block mb-2">
                      メールアドレス <span className="text-[oklch(0.65_0.14_50)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_80)] bg-[oklch(0.97_0.015_80)] font-sans-jp text-sm text-[oklch(0.22_0.01_60)] placeholder:text-[oklch(0.70_0.01_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.10_145)]/40 focus:border-[oklch(0.42_0.10_145)] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans-jp text-sm font-medium text-[oklch(0.35_0.01_60)] block mb-2">
                    ご相談内容 <span className="text-[oklch(0.65_0.14_50)]">*</span>
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="ご相談内容をご記入ください。（例：母が糖尿病で在宅療養中です。訪問栄養指導を受けたいのですが…）"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_80)] bg-[oklch(0.97_0.015_80)] font-sans-jp text-sm text-[oklch(0.22_0.01_60)] placeholder:text-[oklch(0.70_0.01_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.10_145)]/40 focus:border-[oklch(0.42_0.10_145)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[oklch(0.42_0.10_145)] text-white font-sans-jp font-medium text-base rounded-xl hover:bg-[oklch(0.30_0.10_145)] transition-all hover:shadow-lg active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  送信する
                </button>

                <p className="font-sans-jp text-xs text-[oklch(0.60_0.01_60)] text-center font-light">
                  送信いただいた情報は、お問い合わせへの返答のみに使用します。
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
