import { useState, useEffect } from 'react';
import { CustomizeState, SeoState, SocialState, BrandId, Product } from './types';
import { 
  INITIAL_CUSTOMIZE_STATE, 
  INITIAL_SEO_STATE, 
  INITIAL_SOCIAL_STATE, 
  BRAND_PRODUCTS_DEFAULT 
} from './data';
import ShopHome from './components/ShopHome';
import AdminDashboard from './components/AdminDashboard';
import { Sliders, Check, HelpCircle } from 'lucide-react';

export default function App() {
  const [customize, setCustomize] = useState<CustomizeState>(() => {
    try {
      const saved = localStorage.getItem('latelier_customize');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.maxdivaniImg === '/src/assets/images/maxdivani_camel_leather_sofa_1780121744905.png' || !parsed.maxdivaniImg) {
          parsed.maxdivaniImg = INITIAL_CUSTOMIZE_STATE.maxdivaniImg;
        }
        if (parsed.tempurImg === '/src/assets/images/tempur_luxury_bed_1780120650887.png' || !parsed.tempurImg) {
          parsed.tempurImg = INITIAL_CUSTOMIZE_STATE.tempurImg;
        }
        if (parsed.tempurShowcaseImg === '/src/assets/images/tempur_storefront_1780134041328.png' || !parsed.tempurShowcaseImg) {
          parsed.tempurShowcaseImg = INITIAL_CUSTOMIZE_STATE.tempurShowcaseImg;
        }
        if (parsed.fontStyle === 'serif' || !parsed.fontStyle) {
          parsed.fontStyle = 'mono';
        }
        if (parsed.logoText === 'L’ATELIER ARTISAN' || parsed.logoText === 'DESIGN FURNITURE' || !parsed.logoText) {
          parsed.logoText = INITIAL_CUSTOMIZE_STATE.logoText;
        }
        if (parsed.contactAddress === '서울특별시 강남구 논현로 192, 메종 골드 타워 1-3층' || !parsed.contactAddress) {
          parsed.contactAddress = INITIAL_CUSTOMIZE_STATE.contactAddress;
        }
        if (parsed.contactPhone === '02-540-8800' || parsed.contactPhone === '054-701-005' || !parsed.contactPhone) {
          parsed.contactPhone = INITIAL_CUSTOMIZE_STATE.contactPhone;
        }
        if (parsed.contactHours === '상시 운영: 오전 10:00 - 오후 07:30 (공휴일 정상 영업)' || !parsed.contactHours) {
          parsed.contactHours = INITIAL_CUSTOMIZE_STATE.contactHours;
        }
        return parsed;
      }
      return INITIAL_CUSTOMIZE_STATE;
    } catch {
      return INITIAL_CUSTOMIZE_STATE;
    }
  });

  const [seo, setSeo] = useState<SeoState>(() => {
    try {
      const saved = localStorage.getItem('latelier_seo');
      return saved ? JSON.parse(saved) : INITIAL_SEO_STATE;
    } catch {
      return INITIAL_SEO_STATE;
    }
  });

  const [social, setSocial] = useState<SocialState>(() => {
    try {
      const saved = localStorage.getItem('latelier_social');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.instagramUrl === 'https://instagram.com/latelier_furniture_example' || !parsed.instagramUrl) {
          parsed.instagramUrl = INITIAL_SOCIAL_STATE.instagramUrl;
        }
        return parsed;
      }
      return INITIAL_SOCIAL_STATE;
    } catch {
      return INITIAL_SOCIAL_STATE;
    }
  });

  const [isAdminMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const hasParam = params.get('admin') === 'true' || params.get('edit') === 'true';
      const isDevEnv = window.location.hostname.includes('ais-dev-') || window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1');
      const isSharedOrProd = window.location.hostname.includes('ais-pre-') || !isDevEnv;
      return hasParam || !isSharedOrProd;
    }
    return false;
  });

  const [showAdmin, setShowAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const hasParam = params.get('admin') === 'true' || params.get('edit') === 'true';
      const isDevEnv = window.location.hostname.includes('ais-dev-') || window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1');
      const isSharedOrProd = window.location.hostname.includes('ais-pre-') || !isDevEnv;
      
      if (isSharedOrProd) {
        return hasParam;
      }
      return true; // Keep true in internal dev environment to show the sandbox naturally
    }
    return false;
  });
  const [productsMap, setProductsMap] = useState<Record<BrandId, Product[]>>(
    BRAND_PRODUCTS_DEFAULT as Record<BrandId, Product[]>
  );

  // Synchronize changes to localStorage for durable client-side persistence
  useEffect(() => {
    try {
      localStorage.setItem('latelier_customize', JSON.stringify(customize));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [customize]);

  useEffect(() => {
    try {
      localStorage.setItem('latelier_seo', JSON.stringify(seo));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [seo]);

  useEffect(() => {
    try {
      localStorage.setItem('latelier_social', JSON.stringify(social));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [social]);

  // Synchronize browser page title dynamically for active simulated SEO feedback
  useEffect(() => {
    if (seo.metaTitle) {
      document.title = seo.metaTitle;
    }
  }, [seo.metaTitle]);

  const handleReset = () => {
    if (window.confirm('디자인 테마 및 텍스트를 초기 샘플 콘텐츠 상태로 원복하시겠습니까?')) {
      setCustomize(INITIAL_CUSTOMIZE_STATE);
      setSeo(INITIAL_SEO_STATE);
      setSocial(INITIAL_SOCIAL_STATE);
    }
  };

  return (
    <div id="application-layout-frame" className="min-h-screen bg-black text-neutral-200">
      
      {/* Structural layout: split-screen on XL screens if config active, standard otherwise */}
      <div className={`grid grid-cols-1 ${showAdmin ? 'xl:grid-cols-12' : 'grid-cols-1'} min-h-screen transition-all duration-300`}>
        
        {/* Main Furniture Editorial Showroom website */}
        <div id="live-showroom-column" className={`${showAdmin ? 'xl:col-span-8' : 'xl:col-span-12'} transition-all duration-300`}>
          <ShopHome 
            customize={customize}
            setCustomize={setCustomize}
            seo={seo}
            setSeo={setSeo}
            social={social}
            setSocial={setSocial}
            productsMap={productsMap}
            onReset={handleReset}
            showAdmin={showAdmin}
            setShowAdmin={setShowAdmin}
            isAdminMode={isAdminMode}
          />
        </div>

        {/* Floating Collapsible Control Panel / Admin Dashboard (Hidden / visible cleanly) */}
        {showAdmin && (
          <aside 
            id="admin-dashboard-column" 
            className="xl:col-span-4 bg-neutral-900 border-t xl:border-t-0 xl:border-l border-neutral-800 p-4 sticky bottom-0 xl:top-0 h-auto xl:h-screen overflow-y-auto z-50 shadow-2xl space-y-4"
          >
            {/* Quick Helper Banner */}
            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 flex gap-2.5 items-start">
              <span className="text-[#D4AF37] text-xs font-bold pt-0.5">ⓘ</span>
              <div className="space-y-0.5 text-left">
                <h5 className="text-[11px] font-bold text-neutral-200">콘텐츠 실시간 렌더링 샌드박스</h5>
                <p className="text-[10px] text-neutral-400 leading-relaxed font-sans">
                  왼쪽 폼의 필드값을 타이핑하거나 컬러 피커를 채우면, 본사 쇼룸의 로고, 폰트 기조, 골드 배색 레벨 및 개별 4대 파트너 브랜드들의 문구가 즉석에서 업데이트됩니다! 수정 사항은 브라우저에 저장됩니다.
                </p>
              </div>
            </div>

            <AdminDashboard 
              customize={customize}
              setCustomize={setCustomize}
              seo={seo}
              setSeo={setSeo}
              social={social}
              setSocial={setSocial}
              onReset={handleReset}
            />
          </aside>
        )}

      </div>
    </div>
  );
}

