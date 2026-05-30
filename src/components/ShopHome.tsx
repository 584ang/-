import React, { useState } from 'react';
import { CustomizeState, SeoState, SocialState, BrandId, Product } from '../types';
import BrandShowcase from './BrandShowcase';
import { 
  Instagram, Youtube, MessageSquare, Globe, Sliders, Eye, Sparkles, 
  MapPin, Phone, Clock, ShieldCheck, Award, Heart, HelpCircle, CornerDownRight 
} from 'lucide-react';

interface ShopHomeProps {
  customize: CustomizeState;
  setCustomize: React.Dispatch<React.SetStateAction<CustomizeState>>;
  seo: SeoState;
  setSeo: React.Dispatch<React.SetStateAction<SeoState>>;
  social: SocialState;
  setSocial: React.Dispatch<React.SetStateAction<SocialState>>;
  productsMap: Record<BrandId, Product[]>;
  onReset: () => void;
  showAdmin: boolean;
  setShowAdmin: (show: boolean) => void;
  isAdminMode?: boolean;
}

export default function ShopHome({
  customize,
  setCustomize,
  seo,
  setSeo,
  social,
  setSocial,
  productsMap,
  onReset,
  showAdmin,
  setShowAdmin,
  isAdminMode = false
}: ShopHomeProps) {
  const [selectedBrand, setSelectedBrand] = useState<BrandId>('maxdivani');

  // Dynamic Fonts Configuration based on selection
  const getFontClass = () => {
    switch (customize.fontStyle) {
      case 'serif': return 'font-serif';
      case 'sans': return 'font-sans';
      case 'mono': return 'font-mono';
      case 'gothic': return 'font-sans antialiased tracking-wide';
      default: return 'font-serif';
    }
  };

  const BRANDS_LIST = [
    { id: 'maxdivani', name: '막스디바니', eng: 'MAXDIVANI', type: 'Italian Leather' },
    { id: 'tempur', name: '템퍼', eng: 'TEMPUR', type: 'Premium Bedding' },
    { id: 'inart', name: '인아트', eng: 'INART', type: 'Solid Oak Craft' },
    { id: 'fermosa', name: '페르모사', eng: 'FERMOSA', type: 'Sahara Fabric' },
  ] as const;

  return (
    <div id="shop-interior-root" className={`min-h-screen bg-black text-neutral-200 selection:bg-yellow-500/35 selection:text-white ${getFontClass()}`}>
      
      {/* Top Black Luxury Announcement Header */}
      <div className="bg-neutral-950 border-b border-neutral-900 py-2.5 px-4 text-[11px] tracking-widest text-[#D4AF37] text-center font-mono flex items-center justify-between mx-auto max-w-7xl">
        <span className="hidden md:inline-block">★ 4대 명품 명장 홈퍼니싱 공식 수입 정품 편집샵</span>
        <span className="mx-auto md:mx-0">
          FREE VIP DELIVERY & 100% GENUINE WARRANTY SERVICES
        </span>
        <div className="hidden md:flex items-center gap-3">
          <span className="text-neutral-500">CURATED GALLERY FOR LUXURY</span>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header className="bg-black/95 backdrop-blur-md sticky top-0 z-40 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          
          {/* Logo Text */}
          <div className="space-y-1 text-left">
            <h1 className="text-xl md:text-2xl font-serif font-black tracking-[0.2em]" style={{ color: customize.goldAccentColor }}>
              {customize.logoText}
            </h1>
            <p className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
              {customize.shopName} · VIP Showroom
            </p>
          </div>

          {/* Social Links Linked to customizations */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-neutral-850 pr-4">
              <a 
                href={social.instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-500 text-neutral-400 hover:text-white transition"
                title="인스타그램 방문하기"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={social.youtubeUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-500 text-neutral-400 hover:text-white transition"
                title="유튜브 쇼룸 보기"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href={social.kakaoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-500 text-neutral-400 hover:text-white transition"
                title="카카오톡 컨설팅"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a 
                href={social.blogUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-500 text-neutral-400 hover:text-white transition"
                title="네이버 아틀리에 블로그"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Config Panel Toggle Trigger (Only visible in admin mode) */}
            {isAdminMode && (
              <button
                onClick={() => setShowAdmin(!showAdmin)}
                className="p-2 px-3 rounded-lg flex items-center gap-1.5 text-xs text-black font-extrabold transition shadow-lg cursor-pointer animate-pulse"
                style={{ backgroundColor: customize.goldAccentColor }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = customize.goldAccentHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = customize.goldAccentColor}
                title="관리자 샌드박스 대시보드 토글"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{showAdmin ? '에디터 닫기' : '실시간 편집기 열기'}</span>
              </button>
            )}
          </div>

        </div>
      </header>

      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden bg-neutral-950 border-b border-neutral-900 py-16 md:py-24">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

        {/* Soft flowing luxury design curves (wavy lines) for deep spatial layout */}
        <div className="absolute inset-0 z-0 opacity-40 overflow-hidden pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full min-w-[1000px] absolute -bottom-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wave 1 background fill glow */}
            <path 
              d="M0,160 C320,100 640,240 960,180 C1120,150 1280,110 1440,130 L1440,320 L0,320 Z" 
              fill="url(#goldGradient1)" 
              opacity="0.03"
            />
            {/* Wave line 1 */}
            <path 
              d="M0,160 C320,100 640,240 960,180 C1120,150 1280,110 1440,130" 
              stroke={customize.goldAccentColor} 
              strokeWidth="1.5" 
              strokeLinecap="round"
              opacity="0.25"
            />
            {/* Wave line 2 (Slightly offset and glowing/breathing) */}
            <path 
              d="M0,210 C360,150 720,290 1080,210 C1240,170 1360,200 1440,225" 
              stroke={customize.goldAccentColor} 
              strokeWidth="2.5" 
              strokeLinecap="round"
              opacity="0.18"
              className="animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            {/* Wave line 3 (Thin dotted elegant reference line) */}
            <path 
              d="M0,110 C300,180 780,100 1080,150 C1260,180 1380,110 1440,95" 
              stroke={customize.goldAccentColor} 
              strokeWidth="1" 
              strokeDasharray="6 8"
              opacity="0.15"
            />
            {/* Wave line 4 (Low opacity background curve) */}
            <path 
              d="M0,260 C400,210 800,290 1200,240 C1320,225 1400,260 1440,270" 
              stroke={customize.goldAccentColor} 
              strokeWidth="1" 
              opacity="0.1"
            />
            
            <defs>
              <linearGradient id="goldGradient1" x1="720" y1="100" x2="720" y2="320" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={customize.goldAccentColor} />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copywriting */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-neutral-800">
                <Sparkles className="w-3 text-yellow-500" />
                <span className="text-[10px] font-mono tracking-widest text-neutral-350 uppercase">
                  ARTISAN EDITORIAL GALLERY
                </span>
              </div>

              {/* Customizable Hero Title */}
              <h2 className="text-3xl md:text-5xl text-neutral-50 font-serif leading-tight font-medium tracking-tight">
                {customize.heroTitle}
              </h2>

              {/* Customizable Hero Subtitle */}
              <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed max-w-2xl">
                {customize.heroSubtitle}
              </p>

              {/* Action Buttons to explore or book */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    setSelectedBrand('tempur');
                    const el = document.getElementById('tab-tempur');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3 px-6 rounded-lg text-xs font-bold tracking-wide transition flex items-center gap-2 cursor-pointer text-black"
                  style={{ backgroundColor: customize.goldAccentColor }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = customize.goldAccentHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = customize.goldAccentColor}
                >
                  템퍼 프리미엄 컬렉션 감상
                </button>
                <a
                  href="#consultation-anchor"
                  className="p-3 px-6 rounded-lg text-xs font-bold tracking-wide transition border border-neutral-850 hover:bg-neutral-900 text-neutral-300 flex items-center justify-center gap-2"
                >
                  수석 큐레이터 1:1 상담 문의
                </a>
              </div>

              {/* Quick Stats Cards with Tab Navigation Link triggers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-900">
                {[
                  { label: 'MAXDIVANI', desc: '100% 이태리 장인 가죽', brand: 'maxdivani' },
                  { label: 'TEMPUR', desc: 'NASA 수면 의학 공인', brand: 'tempur' },
                  { label: 'INART', desc: '북미산 원목 참나무', brand: 'inart' },
                  { label: 'FERMOSA', desc: '친환경 스마트 사하라', brand: 'fermosa' },
                ].map((stat, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => {
                      setSelectedBrand(stat.brand as BrandId);
                      const el = document.getElementById('tab-' + stat.brand);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-neutral-900/40 p-3 rounded-lg border border-neutral-850 space-y-1 hover:border-yellow-500/40 transition text-left group cursor-pointer"
                  >
                    <span className="block text-xs font-serif font-black tracking-wide" style={{ color: customize.goldAccentColor }}>
                      {stat.label}
                    </span>
                    <span className="block text-[9.5px] text-neutral-500 font-sans">{stat.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Stunning Premium Tempur Bed Display Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-2 shadow-2xl group">
                {/* Gold glowing border trace */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-yellow-500/10 pointer-events-none rounded-2xl" />
                
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={customize.tempurImg} 
                    alt="TEMPUR Luxury Floating Bed" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay gradations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Floating Specs overlay absolute in corner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-neutral-850 p-4 rounded-xl space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold" style={{ color: customize.goldAccentColor }}>
                        FEATURED MASTERPIECE
                      </span>
                      <span className="text-[9px] bg-yellow-500/20 text-yellow-300 font-mono px-2 py-0.5 rounded-full">
                        NASA Approved
                      </span>
                    </div>
                    <h4 className="text-xs font-serif font-bold text-neutral-150">
                      템퍼 오리지널 스마트 숙면 베이스
                    </h4>
                    <p className="text-[10px] text-neutral-450 leading-relaxed font-sans">
                      NASA의 우주 비행사 압력 완충 노하우로 설계된 최상위 무중력 모션베드와 완벽한 형상 기억 매트리스.
                    </p>
                  </div>
                </div>

                {/* Aesthetic label design line under image */}
                <div className="p-3 flex justify-between items-center text-[10px] font-mono text-neutral-500">
                  <span>EXHIBIT NO. 01 — TEMPUR HOVER BED</span>
                  <span className="text-yellow-500">&#9670; PREMIUM SELECTION</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Tabs Menu Container (REQUIREMENT: 메인 상단에 4가지 탭(템퍼, 막스디바니, 인아트, 페르모사) 만들기) */}
      <section className="bg-neutral-950 border-b border-neutral-900 py-6 sticky top-[80px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-neutral-400 block mb-4 font-mono">
            ★ SELECT BRAND PARTNER (4대 명문 브랜드 탭 선택) ★
          </span>

          {/* The Big 4 Tabs Selection Ribbon */}
          <div className="grid grid-cols-2 md:flex md:justify-center items-stretch gap-2.5 md:gap-4 max-w-3xl mx-auto">
            {BRANDS_LIST.map((brand) => {
              const isActive = selectedBrand === brand.id;
              return (
                <button
                  key={brand.id}
                  id={`tab-${brand.id}`}
                  onClick={() => setSelectedBrand(brand.id)}
                  className={`py-3 px-4 md:px-6 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer md:w-44 ${
                    isActive
                      ? 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/5'
                      : 'border-neutral-850 hover:border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center w-full mb-1">
                    <span className="text-[9px] font-mono tracking-widest text-neutral-450 uppercase">
                      {brand.eng}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isActive ? customize.goldAccentColor : 'transparent' }} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-sm font-bold font-serif text-neutral-100">
                      {brand.name}
                    </span>
                    <span className="block text-[9px] text-neutral-500 font-sans uppercase">
                      {brand.type}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamically Curated Showcase Body */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        
        {/* Render BrandShowcase dynamically based on selection */}
        <BrandShowcase 
          brandId={selectedBrand}
          customize={customize}
          products={productsMap[selectedBrand]}
          goldColor={customize.goldAccentColor}
          goldHover={customize.goldAccentHover}
        />

        {/* Philosophy Story Block */}
        <section className="bg-neutral-950 border border-neutral-900 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5" style={{ backgroundColor: customize.goldAccentColor }} />
                <span className="text-xs uppercase font-mono tracking-[0.3em]" style={{ color: customize.goldAccentColor }}>
                  Brand Heritage & Vision
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-black text-neutral-100">
                {customize.aboutTitle}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                {customize.aboutText}
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900">
                <div className="space-y-1">
                  <span className="block text-xs font-semibold text-[#D4AF37] font-serif">100% 오가닉 생산</span>
                  <p className="text-[10px] text-neutral-500 leading-normal">모든 천연 원목 충전 및 이태리 가죽은 엄밀한 심사를 통과하여 정식 입고됩니다.</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-semibold text-[#D4AF37] font-serif">국제 품질 보증 10년</span>
                  <p className="text-[10px] text-neutral-500 leading-normal">구조적 파손이나 결함 시 명품 정식 보증 프로토콜에 의거하여 무상 치유 처리.</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-semibold text-[#D4AF37] font-serif">전 지역 지정 인스톨</span>
                  <p className="text-[10px] text-neutral-500 leading-normal">가구 전담 물류 차량이 고객님의 기호에 맞게 수평 및 구조 배치를 진행합니다.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-neutral-900 border border-neutral-850 p-6 rounded-2xl space-y-4 text-left">
              <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-300" style={{ color: customize.goldAccentColor }}>
                VIP 쇼룸 내방 정보
              </h4>
              <div className="space-y-3.5 text-xs">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-neutral-500 font-serif block">오프라인 메종 갤러리</span>
                    <span className="text-neutral-350 font-semibold">{customize.contactAddress}</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Phone className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-neutral-500 font-serif block">고객 지원 VIP 핫라인</span>
                    <span className="text-neutral-350 font-semibold">{customize.contactPhone}</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Clock className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-neutral-500 font-serif block">영업 및 내방 상담 시간</span>
                    <span className="text-neutral-350 font-semibold">{customize.contactHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Shared Footer Content */}
      <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12 px-4 selection:bg-[#D4AF37]/25">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 text-xs font-sans">
          
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-serif font-bold text-neutral-100 uppercase tracking-widest" style={{ color: customize.goldAccentColor }}>
              {customize.logoText}
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              세계 최상위 프리미엄 퍼니처 명가들과의 독점 협약으로 완성하는 최고급 라이프 케어 어소시에이션입니다. 당신이 머무는 자리에 깊이를 보증합니다.
            </p>
            <div className="text-[10px] text-neutral-600 font-mono">
              © 2026 {customize.logoText} CORP. All Rights Reserved.
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="font-semibold text-neutral-300 font-serif">취급 특성 브랜드</h5>
            <ul className="space-y-2 text-neutral-500 text-[11px]">
              <li><button onClick={() => setSelectedBrand('maxdivani')} className="hover:text-yellow-500 text-left">막스디바니 (이태리 명장 가죽)</button></li>
              <li><button onClick={() => setSelectedBrand('tempur')} className="hover:text-yellow-500 text-left">템퍼 (NASA 수면의학)</button></li>
              <li><button onClick={() => setSelectedBrand('inart')} className="hover:text-yellow-500 text-left">인아트 (정품 화이트 오크)</button></li>
              <li><button onClick={() => setSelectedBrand('fermosa')} className="hover:text-yellow-500 text-left">페르모사 (사하라 발수 스펙)</button></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="font-semibold text-neutral-300 font-serif">안내 및 법적 고지</h5>
            <div className="space-y-1 text-neutral-500 text-[10px] leading-relaxed">
              <p>상호명: 주식회사 아틀리에 가구 편집숍</p>
              <p>대표지정인: 수석 아트 디렉터 김아무개</p>
              <p>통신판매업신고번호: 제 2026-서울강남-0994호</p>
              <p>사업자등록번호: 220-80-12345 (본사 쇼룸)</p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h5 className="font-semibold text-neutral-300 font-serif">소셜 미디어 교류</h5>
            <p className="text-[10px] text-neutral-500 leading-relaxed">
              각 소셜 네트워크 채널에서 가구 신규 입고 이벤트 및 한정판 디자이너 에디션 공개 소식을 받아보실 수 있습니다.
            </p>
            <div className="flex gap-2">
              <a href={social.instagramUrl} target="_blank" rel="noreferrer" className="p-2 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white transition">Instagram</a>
              <a href={social.youtubeUrl} target="_blank" rel="noreferrer" className="p-2 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white transition">YouTube</a>
              <a href={social.blogUrl} target="_blank" rel="noreferrer" className="p-2 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white transition">Blog</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Fixed shortcut to toggle editor for extreme visibility (Only in admin/editor mode) */}
      {isAdminMode && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="flex items-center gap-2 p-3 px-4 rounded-full bg-yellow-500 text-black font-extrabold text-xs shadow-2xl tracking-tight cursor-pointer hover:scale-105 transition active:scale-95"
            style={{ backgroundColor: customize.goldAccentColor }}
          >
            <Sliders className="w-4 h-4" />
            <span>디자인 편집 대시보드 토글</span>
          </button>
        </div>
      )}

    </div>
  );
}
