/**
 * Home Page — 富子の訪問栄養指導
 * Design: 和モダン・ウォームミニマリズム
 * 
 * Sections:
 * 1. Hero — 大きなビジュアルと訴求コピー
 * 2. About — 富子さんの想いとプロフィール
 * 3. Service — サービス内容
 * 4. Flow — ご利用の流れ
 * 5. Insurance — 保険適用について
 * 6. FAQ — よくある質問
 * 7. Contact — お問い合わせ
 * 8. Footer
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServiceSection from "@/components/sections/ServiceSection";
import FlowSection from "@/components/sections/FlowSection";
import InsuranceSection from "@/components/sections/InsuranceSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_80)]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <FlowSection />
      <InsuranceSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
