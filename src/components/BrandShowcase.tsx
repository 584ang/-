import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CustomizeState, BrandId } from '../types';
import { 
  CheckCircle, Shield, Sparkles, Award, ArrowUpRight, Sofa, 
  MapPin, Clock, Hammer, HelpCircle, Heart, FileDown 
} from 'lucide-react';

interface BrandShowcaseProps {
  brandId: BrandId;
  customize: CustomizeState;
  products: Product[];
  goldColor: string;
  goldHover: string;
}

export default function BrandShowcase({
  brandId,
  customize,
  products,
  goldColor,
  goldHover
}: BrandShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [consultingForm, setConsultingForm] = useState({
    name: '',
    phone: '',
    date: '',
    notes: '',
    checkedPriv: false
  });
  const [submittedConsulting, setSubmittedConsulting] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [inquiryType, setInquiryType] = useState<'consult' | 'estimate'>('consult');

  // Retrieve customized brand meta values
  const getBrandMeta = () => {
    switch (brandId) {
      case 'tempur':
        return {
          title: 'TEMPUR',
          subName: '템퍼 스마트 침대 가구',
          tag: customize.tempurTag,
          desc: customize.tempurDesc,
          img: customize.tempurImg,
          facts: ['NASA 아웃스페이스 수면 개발 라이선스 독점 탑재', '척추 정렬 촉진 및 전신 가점 자가 몰딩 시스템', '세계 의료용 등급 덴마크 정밀 생산 가공 처방']
        };
      case 'maxdivani':
        return {
          title: 'MAXDIVANI',
          subName: '막스디바니 이태리 명작 가죽',
          tag: customize.maxdivaniTag,
          desc: customize.maxdivaniDesc,
          img: customize.maxdivaniImg,
          facts: ['100% Made in Italy 장인 정밀 이중 바느질 공정', '프리미엄 세미아닐린 등급 천연 카우 탑그레인 스킨', '이태리 친환경 가죽 연구소 인증 획득']
        };
      case 'inart':
        return {
          title: 'INART',
          subName: '인아트 솔리드 원목 조형',
          tag: customize.inartTag,
          desc: customize.inartDesc,
          img: customize.inartImg,
          facts: ['북미산 특상 화이트 오크 원목 100% 가공', '독일 아우로(AURO) 친환경 식물성 오기닉 도장 처리', '고주파 함수율 특허 공종으로 평생 뒤틀림 무상 체크']
        };
      case 'fermosa':
        return {
          title: 'FERMOSA',
          subName: '페르모사 사하라 기능성 가구',
          tag: customize.fermosaTag,
          desc: customize.fermosaDesc,
          img: customize.fermosaImg,
          facts: ['정품 사하라 오스트리아 다중 직조 방염 코팅 공정', '이지클린 및 세이프 펫 스크래치 완벽 인덱스 케어', '조형 아티스트 콜라보로 탄생한 유니크 라운드 디자인']
        };
    }
  };

  const meta = getBrandMeta();

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultingForm.name || !consultingForm.phone) {
      alert('성함과 연락처는 필수 입력값입니다.');
      return;
    }
    setSubmittedConsulting(true);
    setTimeout(() => {
      setSubmittedConsulting(false);
      setConsultingForm({ name: '', phone: '', date: '', notes: '', checkedPriv: false });
      setSelectedProduct(null);
    }, 4000);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
  };

  return (
    <div id={`brand-showcase-${brandId}`} className="space-y-12">
      {/* Brand Hero Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 shadow-xl">
        {/* Decorative Gold Radial Grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        
        <div className="grid md:grid-cols-12 gap-0 items-stretch min-h-[420px]">
          {/* Brand Info */}
          <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-center relative z-20 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-6 rounded" style={{ backgroundColor: goldColor }} />
                <span className="font-mono text-xs tracking-[0.4em] uppercase" style={{ color: goldColor }}>
                  {meta.title} COLLECTION
                </span>
                <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Premium Showroom
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-neutral-100">
                {meta.subName}
              </h1>
            </div>

            {/* Customized Tagline */}
            <p className="text-sm italic font-medium leading-relaxed pl-3 border-l-2 text-neutral-205" style={{ borderColor: goldColor }}>
              "{meta.tag}"
            </p>

            {/* Customized Description */}
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl">
              {meta.desc}
            </p>

            {/* Core facts List */}
            <div className="space-y-2 pt-2">
              {meta.facts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <span className="text-xs pt-0.5" style={{ color: goldColor }}>★</span>
                  <span>{fact}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-3">
              <a 
                href="#consultation-anchor" 
                className="p-3 px-6 rounded-lg text-xs font-semibold tracking-wide transition flex items-center gap-2 self-start uppercase cursor-pointer"
                style={{ backgroundColor: goldColor, color: '#000000' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = goldHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = goldColor}
                onClick={() => {
                  setInquiryType('consult');
                  setSelectedProduct(null);
                }}
              >
                1:1 전문가 컨설팅 예약
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#products-section" 
                className="p-3 px-6 rounded-lg text-xs font-semibold tracking-wide transition border border-neutral-700 hover:bg-neutral-800 text-neutral-300 self-start"
              >
                시그니처 컬렉션 둘러보기
              </a>
            </div>
          </div>

          {/* Luxury Banner Image Render */}
          <div className="md:col-span-5 relative min-h-[300px] md:min-h-full overflow-hidden">
            <img 
              src={meta.img} 
              alt={`${meta.title} Premium Visual`}
              className="absolute inset-0 w-full h-full object-cover object-center transition duration-1000 transform hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Soft highlight border on image side */}
            <div className="absolute inset-0 bg-neutral-950/20 md:bg-transparent" />
          </div>
        </div>
      </div>

      {/* Brand Signature Products Grid */}
      <div id="products-section" className="space-y-6">
        <div className="flex justify-between items-end border-b border-neutral-800 pb-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest block" style={{ color: goldColor }}>
              CRAFTED DESIGN PRODUCTS
            </span>
            <h2 className="text-xl font-serif font-semibold text-neutral-200">
              {meta.title} 시그니처 가구 컬렉션
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono hidden sm:block">
            Showing {products.length} Exclusive Masterpieces
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const isFav = favorites.includes(product.id);
            return (
              <div 
                key={product.id}
                id={`product-${product.id}`}
                className="bg-neutral-950/60 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-750 transition flex flex-col justify-between shadow-lg group relative"
              >
                {/* Premium category and favorite badges */}
                <div className="absolute top-3 left-3 z-20 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 py-1 px-2.5 rounded text-[10px] font-mono tracking-wider" style={{ color: goldColor }}>
                  {product.category}
                </div>
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 z-20 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 p-1.5 rounded-full transition text-neutral-400 hover:text-red-500 cursor-pointer"
                  title="관심 등록하기"
                >
                  <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                {/* Thumbnail Image component */}
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <button 
                      onClick={() => {
                        setSelectedProduct(product);
                        setInquiryType('estimate');
                        // Scroll down to the consulting form
                        const element = document.getElementById('consultation-anchor');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full p-2 rounded text-xs font-semibold bg-neutral-100 text-neutral-950 text-center cursor-pointer flex items-center justify-center gap-1.5 hover:bg-white"
                    >
                      실시간 비스포크 견적 산출
                      <ArrowUpRight className="w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-neutral-150 group-hover:text-white transition">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-neutral-450 leading-relaxed font-sans line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs Bullets */}
                  <div className="bg-neutral-900/30 p-2.5 rounded border border-neutral-900 space-y-1.5">
                    {product.specs.map((spec, sidx) => (
                      <div key={sidx} className="flex items-center gap-1.5 text-[9.5px] text-neutral-400">
                        <CheckCircle className="w-3 text-neutral-600 flex-shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-neutral-500 font-serif block">쇼룸 권장 큐레이션가</span>
                      <span className="text-sm font-semibold font-mono" style={{ color: goldColor }}>
                        {formattedPrice(product.price)}
                      </span>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedProduct(product);
                        setInquiryType('consult');
                        const element = document.getElementById('consultation-anchor');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-1 px-3 rounded border text-[10px] font-bold text-neutral-350 hover:text-white transition cursor-pointer"
                      style={{ borderColor: `${goldColor}30`, hoverBorderColor: goldColor }}
                    >
                      1:1 예약 문의
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Booking / Estimate Simulation Panel */}
      <div id="consultation-anchor" className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-radial-at-t from-[#D4AF37]/5 to-transparent pointer-events-none" />
        
        <div className="grid md:grid-cols-12 gap-0 items-stretch">
          {/* Form Explainer */}
          <div className="p-8 md:p-10 md:col-span-5 bg-neutral-900/40 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-800">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-yellow-500/10 rounded border border-yellow-500/20 text-[10px] text-yellow-500 font-semibold font-mono">
                  SPECIAL VIP COUNSEL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="text-lg font-serif font-bold text-neutral-200">
                1:1 명품 컨설팅 & 스펙 시트 예약
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                현재 선택된 브랜드 <b className="text-white">[{meta.title}]</b> 에디션에 어울리는 최상의 공간 배치를 제안해 드립니다. 전문 홈스타일리스트가 가구 규격, 가죽 태닝, 오크 원목 오일 피니시 옵션을 무료로 상의 드립니다.
              </p>

              {selectedProduct ? (
                <div className="bg-neutral-950 p-3 rounded-lg border border-yellow-500/20 flex gap-3 items-center">
                  <img 
                    src={selectedProduct.imageUrl} 
                    alt={selectedProduct.name} 
                    className="w-12 h-12 object-cover rounded-md border border-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-0.5 text-left">
                    <span className="text-[9px] bg-yellow-500/10 text-yellow-500 px-1.5 rounded font-bold font-mono">
                      선택 가구
                    </span>
                    <h5 className="text-xs font-bold text-neutral-200">{selectedProduct.name}</h5>
                    <p className="text-[10px] text-neutral-400 font-mono">
                      가산 산출가: {formattedPrice(selectedProduct.price)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-[10px] bg-neutral-950 p-3 rounded border border-neutral-900 text-center text-neutral-450 italic">
                  컬렉션 가구의 '1:1 예약 문의' 또는 '견적 산출'을 누르시면, 선택품목에 대한 견적서와 비스포크 스펙 서류가 VIP 상담 신청 시 동봉됩니다.
                </div>
              )}
            </div>

            <div className="text-[10px] text-neutral-500 space-y-2 mt-6">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3" />
                <span>개인정보 보호법 제 15조에 의거하여 철저히 보안됩니다.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3" />
                <span>L’ATELIER ARTISAN 공식 프리미엄 인증서가 배부됩니다.</span>
              </div>
            </div>
          </div>

          {/* Form Form */}
          <div className="p-8 md:p-10 md:col-span-7 flex flex-col justify-center">
            <div className="flex gap-4 border-b border-neutral-900 pb-3 mb-4 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setInquiryType('consult');
                  setSelectedProduct(null);
                }}
                className={`pb-1 border-b-2 transition ${inquiryType === 'consult' ? 'text-yellow-500 border-yellow-500' : 'text-neutral-500 border-transparent'}`}
              >
                1:1 방문 상담 신청
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('estimate')}
                className={`pb-1 border-b-2 transition ${inquiryType === 'estimate' ? 'text-yellow-500 border-yellow-500' : 'text-neutral-500 border-transparent'}`}
              >
                가산 견적 산출 및 청구
              </button>
            </div>

            {submittedConsulting ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full border border-yellow-500/30 bg-yellow-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 text-yellow-500" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-250">
                  {inquiryType === 'consult' ? 'VIP 방문 상담 신청이 접수되었습니다' : '스펙 시트 견적 산출 전송 완료'}
                </h4>
                <p className="text-[11px] text-neutral-400 leading-normal max-w-md mx-auto">
                  {inquiryType === 'consult' 
                    ? '배정된 공식 수석 큐레이터가 적어주신 연락처로 2시간 이내에 전화를 드리겠습니다. 특별 사은품과 4대 브랜드 단독 혜택이 적용됩니다.'
                    : '요청 주신 맞춤형 가죽 및 오크 규격 가죽 처방 견적이 이메일 및 유선 브리핑으로 전송됩니다. 품격을 높이는 수면에 다가가실 수 있습니다.'
                  }
                </p>
                <div className="text-[10px] text-neutral-500 italic uppercase font-mono">
                  L’atelier Artisan Curators Guild
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-neutral-400 mb-1">VIP 성함 / 이름 *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="김대리 님"
                      value={consultingForm.name}
                      onChange={(e) => setConsultingForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-neutral-400 mb-1">연락처 / 모바일 주소 *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="010-0000-0000"
                      value={consultingForm.phone}
                      onChange={(e) => setConsultingForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 text-xs outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-neutral-400 mb-1">방문 또는 회신 희망일자</label>
                    <input 
                      type="date" 
                      value={consultingForm.date}
                      onChange={(e) => setConsultingForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-neutral-400 mb-1">상담 브랜드 컬렉션</label>
                    <input 
                      type="text" 
                      disabled
                      value={`${meta.title} (${meta.subName})`}
                      className="w-full bg-neutral-950 border border-neutral-900 rounded p-2 text-neutral-400 text-xs cursor-not-allowed font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-neutral-400 mb-1">추가 맞춤 문의 사항 (공간 크기, 컬러 취향 등)</label>
                  <textarea 
                    rows={2}
                    placeholder="오크 가구 거실 배치 고민 중이거나 안방 템퍼 프레임 컬러 추천을 희망하십니다."
                    value={consultingForm.notes}
                    onChange={(e) => setConsultingForm(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 text-xs outline-none leading-relaxed"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="privacy-checklist"
                    required
                    checked={consultingForm.checkedPriv}
                    onChange={(e) => setConsultingForm(prev => ({ ...prev, checkedPriv: e.target.checked }))}
                    className="rounded border-neutral-850 text-yellow-500 focus:ring-yellow-500"
                  />
                  <label htmlFor="privacy-checklist" className="text-[10px] text-neutral-400 cursor-pointer">
                    개인정보의 수집 및 이용 목적에 동의합니다. (VIP 컨설팅 및 소식 전송용)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full p-2.5 rounded font-bold uppercase transition flex items-center justify-center gap-2 cursor-pointer text-xs tracking-wider"
                  style={{ backgroundColor: goldColor, color: '#000000' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = goldHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = goldColor}
                >
                  {inquiryType === 'consult' ? 'VIP 1:1 디렉터 예약 완료하기' : '실시간 전용 견적청구 및 브리핑 신청'}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
