import React, { useState } from 'react';
import { CustomizeState, SeoState, SocialState, BrandId } from '../types';
import { 
  Sliders, Settings, Type, Image as ImageIcon, Sparkles, 
  RefreshCw, Globe, Share2, HelpCircle, FileText, ChevronRight, Check,
  Copy, X
} from 'lucide-react';

interface AdminDashboardProps {
  customize: CustomizeState;
  setCustomize: React.Dispatch<React.SetStateAction<CustomizeState>>;
  seo: SeoState;
  setSeo: React.Dispatch<React.SetStateAction<SeoState>>;
  social: SocialState;
  setSocial: React.Dispatch<React.SetStateAction<SocialState>>;
  onReset: () => void;
}

const PRESET_GOLDS = [
  { name: '로열 클래식 골드', primary: '#D4AF37', hover: '#AA882C' },
  { name: '샴페인 펄 골드', primary: '#E5C453', hover: '#C4A435' },
  { name: '앰버 브론즈 골드', primary: '#C5A059', hover: '#A0803F' },
  { name: '엔틱 헤리티지 골드', primary: '#B89047', hover: '#8E6E34' },
];

export default function AdminDashboard({
  customize,
  setCustomize,
  seo,
  setSeo,
  social,
  setSocial,
  onReset
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'visual' | 'brands' | 'seo' | 'social'>('visual');
  const [selectedBrandEdit, setSelectedBrandEdit] = useState<BrandId>('tempur');
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const getConfigJson = () => {
    return JSON.stringify({
      customize,
      seo,
      social
    }, null, 2);
  };

  const handleCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(getConfigJson());
      setCopied(true);
      triggerNotice('설정 JSON이 클립보드에 복사되었어요!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      triggerNotice('복사 실패! 아래 텍스트를 드래그해 수동 복사하세요.');
    }
  };

  const handleCustomizeChange = (key: keyof CustomizeState, value: string) => {
    setCustomize(prev => ({
      ...prev,
      [key]: value
    }));
    triggerNotice('실시간 디자인 및 텍스트 반영 완료');
  };

  const handleSeoChange = (key: keyof SeoState, value: string) => {
    setSeo(prev => ({
      ...prev,
      [key]: value
    }));
    triggerNotice('SEO 메타 마크업 정보 업데이트 완료');
  };

  const handleSocialChange = (key: keyof SocialState, value: string) => {
    setSocial(prev => ({
      ...prev,
      [key]: value
    }));
    triggerNotice('소셜 채널 연동 주소 변경 완료');
  };

  const triggerNotice = (msg: string) => {
    setShowNotification(msg);
    setTimeout(() => {
      setShowNotification(null);
    }, 2000);
  };

  const handlePresetGold = (primary: string, hover: string) => {
    setCustomize(prev => ({
      ...prev,
      goldAccentColor: primary,
      goldAccentHover: hover
    }));
    triggerNotice('골드 테마 색상 프리셋 적용 완료');
  };

  return (
    <div id="admin-dashboard-container" className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl text-neutral-100 flex flex-col h-full font-sans">
      {/* Dashboard Header */}
      <div className="p-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1 px-2 border border-yellow-500/30 bg-yellow-500/10 rounded text-[10px] text-yellow-500 font-mono font-bold uppercase tracking-wider">
            ADMIN SYSTEM
          </div>
          <h2 className="text-sm font-semibold tracking-tight text-neutral-200 flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-[#D4AF37]" />
            관리자 대시보드
          </h2>
        </div>
        <button
          onClick={onReset}
          className="p-1.5 px-3 rounded bg-neutral-800 hover:bg-neutral-700 transition text-[11px] text-neutral-300 font-mono flex items-center gap-1.5 border border-neutral-700/50"
          title="초기 템플릿 정보로 초기화"
        >
          <RefreshCw className="w-3" />
          샘플 데이터 리셋
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-800 bg-neutral-900/50 text-xs text-neutral-400">
        <button
          onClick={() => setActiveTab('visual')}
          className={`flex-1 py-3 px-1 text-center transition font-medium border-b-2 flex justify-center items-center gap-1.5 ${
            activeTab === 'visual' 
              ? 'text-yellow-500 border-yellow-500 bg-neutral-950/20' 
              : 'border-transparent hover:text-neutral-200 hover:bg-neutral-950/10'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          기본&비주얼
        </button>
        <button
          onClick={() => setActiveTab('brands')}
          className={`flex-1 py-3 px-1 text-center transition font-medium border-b-2 flex justify-center items-center gap-1.5 ${
            activeTab === 'brands' 
              ? 'text-yellow-500 border-yellow-500 bg-neutral-950/20' 
              : 'border-transparent hover:text-neutral-200 hover:bg-neutral-950/10'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          4대 브랜드
        </button>
        <button
          onClick={() => setActiveTab('seo')}
          className={`flex-1 py-3 px-1 text-center transition font-medium border-b-2 flex justify-center items-center gap-1.5 ${
            activeTab === 'seo' 
              ? 'text-yellow-500 border-yellow-500 bg-neutral-950/20' 
              : 'border-transparent hover:text-neutral-200 hover:bg-neutral-950/10'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          SEO 도구
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`flex-1 py-3 px-1 text-center transition font-medium border-b-2 flex justify-center items-center gap-1.5 ${
            activeTab === 'social' 
              ? 'text-yellow-500 border-yellow-500 bg-neutral-950/20' 
              : 'border-transparent hover:text-neutral-200 hover:bg-neutral-950/10'
          }`}
        >
          <Share2 className="w-3.5 h-3.5" />
          소셜 공유
        </button>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[580px]">
        {/* Visual & Color Settings Tab */}
        {activeTab === 'visual' && (
          <div className="space-y-4 text-xs animate-fadeIn">
            <div>
              <span className="text-yellow-500/90 font-serif tracking-wider uppercase block text-[10px] mb-1">
                Colors & Themes
              </span>
              <h3 className="text-xs font-semibold text-neutral-300 mb-2">골드 포인트 색상 (Accent Gold Color)</h3>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {PRESET_GOLDS.map((gold) => {
                  const isSelected = customize.goldAccentColor.toUpperCase() === gold.primary.toUpperCase();
                  return (
                    <button
                      key={gold.name}
                      onClick={() => handlePresetGold(gold.primary, gold.hover)}
                      className={`p-2 rounded text-[11px] flex items-center justify-between border text-left transition ${
                        isSelected 
                          ? 'border-yellow-500 bg-yellow-500/10 text-yellow-100' 
                          : 'border-neutral-800 bg-neutral-950 hover:bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      <span>{gold.name}</span>
                      <div className="flex gap-1 items-center">
                        <span className="w-3 h-3 rounded-full border border-neutral-700 block" style={{ backgroundColor: gold.primary }} />
                        {isSelected && <Check className="w-3 text-yellow-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 bg-neutral-950 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-400">직접설정:</span>
                <input 
                  type="color" 
                  value={customize.goldAccentColor}
                  onChange={(e) => handleCustomizeChange('goldAccentColor', e.target.value)}
                  className="w-10 h-6 bg-transparent border-0 cursor-pointer rounded"
                />
                <input 
                  type="text" 
                  value={customize.goldAccentColor}
                  onChange={(e) => handleCustomizeChange('goldAccentColor', e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded text-[11px] font-mono w-20 text-center text-neutral-300"
                />
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-3">
              <span className="text-yellow-500/90 font-serif tracking-wider uppercase block text-[10px] mb-1">
                Typography
              </span>
              <h3 className="text-xs font-semibold text-neutral-300 mb-2">대표 폰트 스타일</h3>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'serif', label: '명조 (Serif)' },
                  { id: 'sans', label: '고딕 (Sans)' },
                  { id: 'mono', label: '디자인 (Mono)' },
                  { id: 'gothic', label: '시스템 (Gothic)' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => handleCustomizeChange('fontStyle', f.id as any)}
                    className={`p-2 rounded text-[11px] text-center border transition ${
                      customize.fontStyle === f.id
                        ? 'border-yellow-500 bg-yellow-500/10 text-yellow-200'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-3 space-y-3">
              <span className="text-yellow-500/90 font-serif tracking-wider uppercase block text-[10px]">
                Brand Identity Text
              </span>
              
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">상단 영문 로고 텍스트</label>
                <input 
                  type="text" 
                  value={customize.logoText}
                  onChange={(e) => handleCustomizeChange('logoText', e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px] font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">홈페이지 한글 쇼룸명</label>
                <input 
                  type="text" 
                  value={customize.shopName}
                  onChange={(e) => handleCustomizeChange('shopName', e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">메인 히어로 대타이틀</label>
                <textarea 
                  rows={2}
                  value={customize.heroTitle}
                  onChange={(e) => handleCustomizeChange('heroTitle', e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px] leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">메인 서브 슬로건 문구</label>
                <textarea 
                  rows={3}
                  value={customize.heroSubtitle}
                  onChange={(e) => handleCustomizeChange('heroSubtitle', e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px] leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">인사말 및 철학 텍스트</label>
                <textarea 
                  rows={4}
                  value={customize.aboutText}
                  onChange={(e) => handleCustomizeChange('aboutText', e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px] leading-relaxed"
                />
              </div>
            </div>
          </div>
        )}

        {/* Brand Dedicated Configuration Tab */}
        {activeTab === 'brands' && (
          <div className="space-y-4 text-xs animate-fadeIn">
            <div>
              <span className="text-yellow-500/90 font-serif tracking-wider uppercase block text-[10px] mb-1">
                Select Brand to Edit
              </span>
              <div className="grid grid-cols-4 gap-1">
                {([
                  { id: 'tempur', label: '템퍼' },
                  { id: 'maxdivani', label: '막스디바니' },
                  { id: 'inart', label: '인아트' },
                  { id: 'fermosa', label: '페르모사' }
                ] as const).map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBrandEdit(b.id)}
                    className={`py-2 px-1 rounded text-[11px] text-center border font-medium transition ${
                      selectedBrandEdit === b.id
                        ? 'border-yellow-500 bg-yellow-500/10 text-yellow-250'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-450 hover:bg-neutral-800'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-neutral-950 p-3 rounded border border-neutral-800 space-y-3">
              <h4 className="text-xs font-bold text-yellow-500/90 capitalize tracking-wider flex items-center gap-1.5 border-b border-neutral-800 pb-1.5">
                <Sparkles className="w-3 text-yellow-500" />
                {selectedBrandEdit === 'tempur' && 'TEMPUR (템퍼) 침실&매트리스'}
                {selectedBrandEdit === 'maxdivani' && 'MAXDIVANI (막스디바니) 이중 가죽'}
                {selectedBrandEdit === 'inart' && 'INART (인아트) 천연 오크 거실'}
                {selectedBrandEdit === 'fermosa' && 'FERMOSA (페르모사) 기능성 사하라'}
              </h4>

              <div>
                <label className="block text-[10px] text-neutral-400 mb-1">브랜드 요약 태그라인</label>
                <input 
                  type="text" 
                  value={selectedBrandEdit === 'tempur' ? customize.tempurTag : selectedBrandEdit === 'maxdivani' ? customize.maxdivaniTag : selectedBrandEdit === 'inart' ? customize.inartTag : customize.fermosaTag}
                  onChange={(e) => handleCustomizeChange(
                    selectedBrandEdit === 'tempur' ? 'tempurTag' : selectedBrandEdit === 'maxdivani' ? 'maxdivaniTag' : selectedBrandEdit === 'inart' ? 'inartTag' : 'fermosaTag',
                    e.target.value
                  )}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-neutral-400 mb-1">브랜드 스토리 상세 설명</label>
                <textarea 
                  rows={4}
                  value={selectedBrandEdit === 'tempur' ? customize.tempurDesc : selectedBrandEdit === 'maxdivani' ? customize.maxdivaniDesc : selectedBrandEdit === 'inart' ? customize.inartDesc : customize.fermosaDesc}
                  onChange={(e) => handleCustomizeChange(
                    selectedBrandEdit === 'tempur' ? 'tempurDesc' : selectedBrandEdit === 'maxdivani' ? 'maxdivaniDesc' : selectedBrandEdit === 'inart' ? 'inartDesc' : 'fermosaDesc',
                    e.target.value
                  )}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px] leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-[10px] text-neutral-400 mb-1">
                  {selectedBrandEdit === 'tempur' ? '메인 홈 상단 대표 이미지 경로/URL' : '대표 영감 이미지 경로/URL'}
                </label>
                <input 
                  type="text" 
                  value={selectedBrandEdit === 'tempur' ? customize.tempurImg : selectedBrandEdit === 'maxdivani' ? customize.maxdivaniImg : selectedBrandEdit === 'inart' ? customize.inartImg : customize.fermosaImg}
                  onChange={(e) => handleCustomizeChange(
                    selectedBrandEdit === 'tempur' ? 'tempurImg' : selectedBrandEdit === 'maxdivani' ? 'maxdivaniImg' : selectedBrandEdit === 'inart' ? 'inartImg' : 'fermosaImg',
                    e.target.value
                  )}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-300 outline-none text-[10px] font-mono"
                />
                {selectedBrandEdit === 'tempur' && (
                  <div className="mt-3">
                    <label className="block text-[10px] text-neutral-400 mb-1">템퍼 전용 브랜드 상세 페이지 우측 이미지 경로/URL</label>
                    <input 
                      type="text" 
                      value={customize.tempurShowcaseImg || ''}
                      onChange={(e) => handleCustomizeChange('tempurShowcaseImg', e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-300 outline-none text-[10px] font-mono"
                    />
                  </div>
                )}
                <span className="text-[9px] text-neutral-500 mt-1 block">
                  ※ AI가 생성한 초고화질 명품 인테리어 렌더링 또는 첨부 매장 실사 파일명이 적용되어 있습니다.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Search Engine Optimization (SEO) Tools */}
        {activeTab === 'seo' && (
          <div className="space-y-4 text-xs animate-fadeIn">
            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
              <h4 className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5 mb-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                SEO 및 검색 최적화 정보 설정
              </h4>
              <p className="text-[10px] text-neutral-400 leading-relaxed mb-3">
                구글, 네이버 등 검색 엔진 크롤러가 사이트를 색인할 때 가져갈 최상위 웹 메타 태그를 시각화합니다. 실제로 메타 정보를 입력하여 시뮬레이션을 완료하세요.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Meta Title (웹 브라우저 탭 타이틀)</label>
                  <input 
                    type="text" 
                    value={seo.metaTitle}
                    onChange={(e) => handleSeoChange('metaTitle', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Meta Description (검색결과 서술)</label>
                  <textarea 
                    rows={3}
                    value={seo.metaDescription}
                    onChange={(e) => handleSeoChange('metaDescription', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px] leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">검색 인덱스 키워드 (쉼표 구분)</label>
                  <input 
                    type="text" 
                    value={seo.keywords}
                    onChange={(e) => handleSeoChange('keywords', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 focus:border-yellow-500 text-neutral-200 outline-none text-[11px]"
                  />
                </div>
              </div>
            </div>

            {/* Simulated Google Search Snippet Card */}
            <div>
              <span className="text-[10px] text-neutral-400 block mb-1.5 uppercase font-mono tracking-wider">
                Google Search Snippet Preview (구글 검색결과 노출 프리뷰)
              </span>
              <div className="bg-white p-3 rounded border border-neutral-200 text-neutral-800 shadow-sm space-y-1 text-left font-sans">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                  <span className="bg-neutral-100 p-0.5 rounded px-1.5 text-[9px] font-semibold text-neutral-600">스폰서</span>
                  <span className="truncate text-xs">https://latelier-artisan.co.kr</span>
                </div>
                <h4 className="text-sm font-semibold text-sky-800 hover:underline cursor-pointer truncate leading-tight">
                  {seo.metaTitle || '디자인 가구 편집샵 - 템퍼, 막스디바니 공식 큐레이터'}
                </h4>
                <p className="text-[11px] text-neutral-600 leading-normal line-clamp-2">
                  <span className="text-emerald-700/90 mr-1">★ 4대 명품 독점 라인업</span>
                  {seo.metaDescription || '로열 골드테마로 품격을 채우는 완벽히 편집 가능한 쇼룸'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Social Sharing Tab */}
        {activeTab === 'social' && (
          <div className="space-y-4 text-xs animate-fadeIn">
            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg space-y-3">
              <h4 className="text-xs font-semibold text-yellow-500/90 flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-yellow-500" />
                소셜 미디어 연동 및 공유 미리보기
              </h4>
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                카카오톡, 인스타그램, 네이버 블로그 등으로 웹사이트 주소를 보냈을 시 생성되는 리치 스니펫(Open Graph 카드)의 실시간 정합성을 설정합니다.
              </p>

              <div className="space-y-2">
                <div>
                  <label className="block text-[10px] text-neutral-400 mb-1">인스타그램 공식 URL</label>
                  <input 
                    type="text" 
                    value={social.instagramUrl}
                    onChange={(e) => handleSocialChange('instagramUrl', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 focus:border-yellow-500 text-neutral-300 outline-none text-[11px] font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 mb-1">유튜브 쇼룸 가이드 채널</label>
                  <input 
                    type="text" 
                    value={social.youtubeUrl}
                    onChange={(e) => handleSocialChange('youtubeUrl', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 focus:border-yellow-500 text-neutral-300 outline-none text-[11px] font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 mb-1">카카오 채널 1:1 컨설팅</label>
                  <input 
                    type="text" 
                    value={social.kakaoUrl}
                    onChange={(e) => handleSocialChange('kakaoUrl', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 focus:border-yellow-500 text-neutral-300 outline-none text-[11px] font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-400 mb-1">네이버 아틀리에 공식 블로그</label>
                  <input 
                    type="text" 
                    value={social.blogUrl}
                    onChange={(e) => handleSocialChange('blogUrl', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-1.5 focus:border-yellow-500 text-neutral-300 outline-none text-[11px] font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Kakao / OG Card Visual Sandbox */}
            <div>
              <span className="text-[10px] text-neutral-400 block mb-1.5 uppercase font-mono tracking-wider">
                Kakao-Talk / Social Media OG Card Preview
              </span>
              <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden max-w-sm text-left">
                {/* Simulated Image */}
                <div className="relative h-28 bg-neutral-950 flex items-center justify-center p-2 text-center text-[11px] text-neutral-500 border-b border-neutral-700 overflow-hidden">
                  <div className="absolute inset-0 bg-radial-at-t from-yellow-500/10 to-transparent pointer-events-none" />
                  <div className="z-10 px-4">
                    <span className="text-[#D4AF37] font-serif text-xs block mb-1">{customize.logoText}</span>
                    <p className="text-neutral-300 text-[10px] line-clamp-1">{customize.heroTitle}</p>
                  </div>
                </div>
                {/* Meta details */}
                <div className="p-2.5 bg-neutral-900 space-y-0.5">
                  <div className="text-[11px] text-neutral-200 font-semibold truncate">
                    {seo.metaTitle || 'L’ATELIER ARTISAN 가구 편집샵'}
                  </div>
                  <div className="text-[9.5px] text-neutral-450 line-clamp-2">
                    {seo.metaDescription || '오직 템퍼, 막스디바니, 인아트, 페르모사를 취급하는 고품격 가구 큐레이션 쇼룸입니다.'}
                  </div>
                  <div className="text-[8px] text-neutral-500 pt-1 uppercase font-mono">
                    {seo.ogUrl || 'https://premium-furniture-editorial.example.com'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Realtime Notification Toast */}
      {showNotification && (
        <div id="admin-toast-notification" className="m-3 p-2 px-3 text-center bg-[#D4AF37] text-neutral-950 rounded text-[11px] font-bold flex items-center justify-center gap-1 animate-pulse shadow-lg transition">
          <Check className="w-3.5 h-3.5" />
          <span>{showNotification}</span>
        </div>
      )}

      {/* Bottom helper */}
      <div className="p-3 bg-neutral-950 border-t border-neutral-800 text-[10px] text-neutral-550 flex justify-between items-center text-center">
        <span>골드 에디터 1.2v (Active Status)</span>
        <span className="text-emerald-500 font-bold">&#9679; 실시간 편집 생방송 연동중</span>
      </div>
    </div>
  );
}
