/**
 * ContactSection — お問い合わせ
 * Design: ポップなフォーム、コーラルピンクのアクセント
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const contactTypes = [
  { value: "service", label: "サービスについて" },
  { value: "insurance", label: "保険適用について" },
  { value: "dietitian", label: "管理栄養士として登録したい" },
  { value: "other", label: "その他" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "service",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("必須項目を入力してください");
      return;
    }
    setSubmitted(true);
    toast.success("お問い合わせを受け付けました！");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.65_0.20_20)]/10 mb-4">
            <span className="text-sm font-bold text-[oklch(0.55_0.18_20)]" style={{ fontFamily: "'Nunito', sans-serif" }}>Contact</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[oklch(0.22_0.01_60)] mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            お気軽にご相談ください！
          </h2>
          <p className="text-base text-[oklch(0.50_0.01_60)] max-w-xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            サービスのご質問・保険適用の確認・管理栄養士としての登録など、なんでもどうぞ 🌿
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              {
                emoji: "📞",
                color: "oklch(0.65 0.20 20)",
                bg: "oklch(0.97 0.04 20)",
                title: "お電話でのご相談",
                desc: "平日 9:00〜18:00\nXXX-XXXX-XXXX",
              },
              {
                emoji: "📧",
                color: "oklch(0.55 0.18 160)",
                bg: "oklch(0.95 0.05 160)",
                title: "メールでのご相談",
                desc: "24時間受付\ninfo@tomiko-nutrition.jp",
              },
              {
                emoji: "👩‍⚕️",
                color: "oklch(0.60 0.18 270)",
                bg: "oklch(0.95 0.04 270)",
                title: "管理栄養士の方へ",
                desc: "フリーランスとして活躍したい方も\nぜひご連絡ください！",
              },
            ].map(({ emoji, color, bg, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-[oklch(0.92_0.02_90)]"
                style={{ backgroundColor: bg }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ backgroundColor: `${color}20` }}
                >
                  {emoji}
                </div>
                <div>
                  <h4 className="font-bold text-[oklch(0.25_0.01_60)] mb-1 text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {title}
                  </h4>
                  <p className="text-xs text-[oklch(0.50_0.01_60)] leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-3xl bg-[oklch(0.97_0.04_20)]">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.65_0.20_20)] flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-[oklch(0.22_0.01_60)] mb-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  送信完了！ありがとうございます 🎉
                </h3>
                <p className="text-sm text-[oklch(0.50_0.01_60)]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-[oklch(0.35_0.01_60)] mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    お名前 <span className="text-[oklch(0.65_0.20_20)]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.65_0.01_60)]" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="山田 太郎"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[oklch(0.92_0.02_90)] focus:border-[oklch(0.65_0.20_20)] focus:outline-none text-sm transition-colors bg-[oklch(0.99_0.005_90)]"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-[oklch(0.35_0.01_60)] mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    メールアドレス <span className="text-[oklch(0.65_0.20_20)]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.65_0.01_60)]" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="taro@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[oklch(0.92_0.02_90)] focus:border-[oklch(0.65_0.20_20)] focus:outline-none text-sm transition-colors bg-[oklch(0.99_0.005_90)]"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-bold text-[oklch(0.35_0.01_60)] mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    お問い合わせの種類
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contactTypes.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setForm({ ...form, type: value })}
                        className="px-4 py-2 rounded-full text-xs font-bold border-2 transition-all"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          borderColor: form.type === value ? "oklch(0.65 0.20 20)" : "oklch(0.92 0.02 90)",
                          backgroundColor: form.type === value ? "oklch(0.65 0.20 20)" : "white",
                          color: form.type === value ? "white" : "oklch(0.45 0.01 60)",
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-[oklch(0.35_0.01_60)] mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    メッセージ <span className="text-[oklch(0.65_0.20_20)]">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[oklch(0.65_0.01_60)]" />
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="ご質問・ご相談内容をご記入ください"
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[oklch(0.92_0.02_90)] focus:border-[oklch(0.65_0.20_20)] focus:outline-none text-sm transition-colors resize-none bg-[oklch(0.99_0.005_90)]"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[oklch(0.65_0.20_20)] text-white font-bold text-base rounded-2xl shadow-lg shadow-[oklch(0.65_0.20_20)]/25 hover:bg-[oklch(0.58_0.20_20)] hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  <Send className="w-4 h-4" />
                  送信する
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
