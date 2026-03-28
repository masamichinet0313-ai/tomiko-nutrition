/**
 * AboutSection — 富子さんの想いとプロフィール
 * Design: 左右非対称レイアウト、写真と文章の対比
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TOMIKO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663083030511/6EnhzEJu9tLg7i3oihn6bR/about-tomiko-JZEjDMmtkPQ9ma48ZjzkgN.webp";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-[oklch(0.97_0.015_80)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[oklch(0.72_0.08_145)]/20 rounded-2xl" />
              <img
                src={TOMIKO_IMAGE}
                alt="管理栄養士 山田富子"
                className="relative z-10 w-full max-w-sm mx-auto lg:mx-0 rounded-2xl shadow-xl object-cover"
                style={{ aspectRatio: "3/4" }}
              />
              {/* Floating badge */}
              <motion.div
                className="absolute z-20 -bottom-6 -right-4 lg:right-4 bg-white rounded-2xl shadow-lg px-5 py-4 max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.42_0.10_145)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <p className="font-serif-jp text-sm font-semibold text-[oklch(0.22_0.01_60)]">管理栄養士</p>
                    <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)]">山田 富子</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[oklch(0.65_0.14_50)] rounded-full" />
              <span className="font-sans-jp text-sm font-medium text-[oklch(0.52_0.01_60)] tracking-widest uppercase">
                About
              </span>
            </div>

            <h2 className="font-serif-jp text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] leading-tight mb-6">
              管理栄養士の資格を活かして、
              <br />
              <span className="text-[oklch(0.42_0.10_145)]">在宅の食を支えたい。</span>
            </h2>

            <div className="space-y-4 font-sans-jp text-base text-[oklch(0.40_0.01_60)] leading-relaxed font-light">
              <p>
                訪問看護が地域に根付いているように、訪問栄養指導もいつか当たり前になる時代が来ると感じています。在宅で療養されている方やご家族にとって、食事の悩みは毎日のことです。
              </p>
              <p>
                介護保険・医療保険の適用で、月2回まで管理栄養士が自宅に伺い、その方の生活に寄り添った栄養指導を行います。糖尿病・腎臓病・低栄養・嚥下障害など、さまざまな状態に対応します。
              </p>
              <p>
                また、資格を持ちながら現場を離れている管理栄養士の方々と連携し、地域に密着したサービスネットワークを広げていきたいと考えています。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[oklch(0.88_0.02_80)]">
              {[
                { num: "10+", label: "年の経験" },
                { num: "200+", label: "指導実績" },
                { num: "2回", label: "月の訪問" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-3xl font-bold text-[oklch(0.42_0.10_145)]">{stat.num}</p>
                  <p className="font-sans-jp text-xs text-[oklch(0.52_0.01_60)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
