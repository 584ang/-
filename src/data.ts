import { CustomizeState, SeoState, SocialState, BrandConfig } from './types';
import tempurCinemaImg from './assets/images/tempur_cinema_1780124763915.png';
import tempurLuxuryBedImg from './assets/images/tempur_luxury_bed_1780120650887.png';
import maxdivaniLeatherSofaImg from './assets/images/maxdivani_leather_sofa_1780120668679.png';
import maxdivaniCamelSofaImg from './assets/images/maxdivani_camel_leather_sofa_1780121744905.png';
import inartWoodenTableImg from './assets/images/inart_wooden_table_1780120685627.png';
import fermosaFabricCouchImg from './assets/images/fermosa_fabric_couch_1780120712135.png';

export const COMPILED_IMAGES: Record<string, string> = {
  '/src/assets/images/tempur_cinema_1780124763915.png': tempurCinemaImg,
  '/src/assets/images/tempur_luxury_bed_1780120650887.png': tempurLuxuryBedImg,
  '/src/assets/images/tempur_interior.png': tempurLuxuryBedImg,
  '/src/assets/images/tempur_storefront_1780134041328.png': tempurCinemaImg,
  '/src/assets/images/maxdivani_leather_sofa_1780120668679.png': maxdivaniLeatherSofaImg,
  '/src/assets/images/maxdivani_camel_leather_sofa_1780121744905.png': maxdivaniCamelSofaImg,
  '/src/assets/images/inart_wooden_table_1780120685627.png': inartWoodenTableImg,
  '/src/assets/images/fermosa_fabric_couch_1780120712135.png': fermosaFabricCouchImg,
};

export const INITIAL_CUSTOMIZE_STATE: CustomizeState = {
  logoText: 'DESIGN FURNITURE Gyeong-Ju',
  shopName: '디자인 가구 편집샵',
  goldAccentColor: '#D4AF37', // Medium gold
  goldAccentHover: '#AA882C', // Deep matte gold
  fontStyle: 'mono', // Modern JetBrains Mono style
  heroTitle: '시대를 오가는 디자인, 공간이 예술이 되는 순간',
  heroSubtitle: '세계적인 프리미엄 명품 가구 브랜드들을 골드빛의 고급스러운 감각으로 큐레이션합니다. 템퍼, 막스디바니, 인아트, 페르모사를 만나보세요.',
  aboutTitle: '편집샵 브랜드 스토리 (Brand Philosophy)',
  aboutText: 'L’ATELIER ARTISAN은 단순한 가구 판매점이 아닌, 당신의 생활 공간에 깊이와 품격을 불어넣는 예술 공간을 지향합니다. 엄선된 4개의 명품 가구 브랜드인 템퍼(Bedding), 막스디바니(Italian Sofa), 인아트(Solid Wood), 페르모사(Functional Fabric)의 한국 대표 컬렉션을 우아한 블랙 & 골드 미학 속에서 소장해 보세요. 관리자 대시보드에서 모든 글자, 이미지, 로고, 색상, 그리고 폰트까지 실시간으로 커스터마이징하여 여러분만의 럭셔리 쇼룸 웹사이트를 가꿀 수 있습니다.',
  contactAddress: '경주시 천북면 산업로 4883',
  contactPhone: '05-701-0052',
  contactHours: '상시 운영 : 오전 09:30 - 오후 07:30 (공휴일 정상 영업)',
  
  tempurDesc: 'NASA 우주 기술의 점탄성 신소재로 온몸의 압력을 완벽하게 분산하고, 신체 온도를 최적으로 맞춰 비교할 수 없는 최고급 숙면 솔루션을 설계합니다.',
  tempurTag: 'NASA가 승인한 세계 유일의 수면 테크놀로지, 무중력 매트리스의 정수',
  tempurImg: tempurCinemaImg,
  tempurShowcaseImg: tempurLuxuryBedImg,

  maxdivaniDesc: '100% Made in Italy 정통 가구의 유산과 현대적인 디자인의 결합. 최고급 탑그레인 면피 공정과 이태리 세밀 공법으로 타협 없는 소파를 제작합니다.',
  maxdivaniTag: '이탈리아 장인 정신과 최상의 천연 가죽이 빚어낸 이태리 하이엔드 소파의 기준',
  maxdivaniImg: maxdivaniLeatherSofaImg,

  inartDesc: '오크 원목 가구 분야 선도 브랜드로, 숲속의 자연스러움을 그대로 안방과 거실로 끌어오는 친환경 솔루션을 제공합니다. 시간이 흐를수록 기품이 깊어집니다.',
  inartTag: '숲의 깊은 매력을 담은 내추럴 솔리드 오크(오리지널 원목) 장인 가구',
  inartImg: inartWoodenTableImg,

  fermosaDesc: '친환경 스마트 기능성 사하라 원단을 사용하여 스크래치와 변색에 대단히 강하면서도, 벨벳처럼 풍부하고 세련된 터치감을 제공하는 기능성 프리미엄 소파입니다.',
  fermosaTag: '방수, 이지클린, 감각적 라운드 디자인의 프리미엄 기능성 신소재 패브릭 소파',
  fermosaImg: fermosaFabricCouchImg,
};

export const INITIAL_SEO_STATE: SeoState = {
  metaTitle: 'L’ATELIER ARTISAN - 프리미엄 디자인 가구 편집샵',
  metaDescription: 'NASA 우주 공학 수면의 명작 템퍼, 이태리 장인 가죽 막스디바니, 오크 원목의 본질 인아트, 수입 사하라 패브릭 페르모사를 아우르는 하이엔드 가구 쇼룸입니다.',
  keywords: '디자인가구, 가구편집샵, 템퍼 매트리스, 막스디바니 리클라이너, 인아트 오크식탁, 페르모사 패브릭 소파, 럭셔리가구, 신혼가구',
  author: '메종 디자인 가구 편집숍',
  ogType: 'website',
  ogUrl: 'https://premium-furniture-editorial.example.com',
};

export const INITIAL_SOCIAL_STATE: SocialState = {
  instagramUrl: 'https://www.instagram.com/tempur_gj?igsh=Z2R4dDZ2ZWN6dHFt&utm_source=qr',
  youtubeUrl: 'https://youtube.com/c/latelier_living_example',
  kakaoUrl: 'https://pf.kakao.com/_latelier_example',
  blogUrl: 'https://blog.naver.com/leesi8664',
};

export const BRAND_PRODUCTS_DEFAULT: Record<string, any[]> = {
  tempur: [
    {
      id: 'tempur-1',
      name: '템퍼 프로 오리지널 슈프림',
      category: '매트리스 (Mattress)',
      price: 3650000,
      imageUrl: 'https://picsum.photos/seed/tempurbed/600/400',
      description: 'NASA 우주선 이착륙 시 발생하는 극도의 압력을 견디도록 고안된 기술의 점탄성 메모리 신소재 매트리스입니다. 척추의 곡선을 충실하게 받쳐 가공 압점을 완전히 소멸시킵니다.',
      specs: ['두께: 21cm / 25cm 선택', '소재: NASA 공인 오리지널 템퍼 특수 폼', '보증 기간: 10년 품질 보증', '단단함 정도: 미디움-서포트 오가닉 레이아웃'],
    },
    {
      id: 'tempur-2',
      name: '템퍼 Ergo 스마트 에어 모션배드',
      category: '모션베이스 (Motion Bed)',
      price: 4200000,
      imageUrl: 'https://picsum.photos/seed/tempurmotion/600/400',
      description: '원터치 무선 리모컨 및 모바일 앱으로 구현되는 4구역 각도 조절 모션 시스템입니다. 코골이 방지 시스템과 릴랙스 무중력 Zero-G 설정이 자동으로 적용됩니다.',
      specs: ['조절 각도: 헤드 0~75도, 풋 0~45도', '프레임 마감: 고밀도 부직 코팅 마이크로 화이버 패브릭', '안전 기능: 차단형 모터 및 아동 수면 잠금장치'],
    },
    {
      id: 'tempur-3',
      name: '템퍼 오리지널 밀레니엄 베개',
      category: '기능성 베개 (Pillow)',
      price: 190000,
      imageUrl: 'https://picsum.photos/seed/tempurpillow/600/400',
      description: '앞쪽이 낮고 뒤쪽이 목덜미를 따라 완벽하게 커브형 지지를 해주는 인체공학 정밀 오리지널 필로우입니다. 옆으로 누워 자는 습관을 가진 분들에게도 최상의 완화 효과를 선사합니다.',
      specs: ['사이즈: XS, S, M, L 체형별 커스터마이징 스펙', '소재: 저자극성 친환경 가공 템퍼 슈퍼소프트 세탁 커버', '특징: 수면 시 어깨결림 및 경추 피로 전면 경감'],
    },
  ],
  maxdivani: [
    {
      id: 'maxdivani-1',
      name: '포르토피노 천연 탑그레인 에칭 소파',
      category: '이태리 프리미엄 소파 (Sofa)',
      price: 7800000,
      imageUrl: 'https://picsum.photos/seed/maxsofa/600/400',
      description: '이탈리아 밀라노 장인들의 정성스러운 바느질과 천연 풀그레인 소가죽 가공 방식이 집약된 프리미엄 소파입니다. 시간이 지날수록 은은하게 감도는 빈티지 광택이 멋집니다.',
      specs: ['소재: 1.8mm 최고등급 에이징 마스터 카우 가죽', '내장재: 고탄성 엘라스틱 벨트 및 구스다운 더블 레이어', '길이: 4인용 와이드 (320cm)', '제조국: 100% Made in Italy'],
    },
    {
      id: 'maxdivani-2',
      name: '밀라노 전동 리클라이너 헤드 서포터',
      category: '메카닉 1인 체어',
      price: 2900000,
      imageUrl: 'https://picsum.photos/seed/maxchair/600/400',
      description: '독일 모션 모터를 결합하여 무소음 진동으로 부드럽게 활강하듯 최적의 각도를 선사하는 1인 전동 가죽 체어입니다. USB 멀티포트와 인체공학 등받이 앵글 튜닝이 탑재되었습니다.',
      specs: ['무게 허용치: 최대 160kg 저소음 세이프 라이딩 테크', '전원 및 모터: 독일 정밀 가공 오킨사 모터 적용', '가죽 등급: 세미 아닐린 최상위 탑그레인 스킨'],
    },
    {
      id: 'maxdivani-3',
      name: '루치아 6인 코너 모듈 카우치 거실 소파',
      category: '모듈형 대형 소파',
      price: 9900000,
      imageUrl: 'https://picsum.photos/seed/maxmodular/600/400',
      description: '공간의 형태에 맞게 자유롭게 코너 큐브를 붙이거나 뗄 수 있는 하이 레벨 소파 시스템입니다. 세련된 매트 블랙 로우파일 메탈 다리와 고전적인 프레임 무드를 연출합니다.',
      specs: ['구성: 코너형 1, 카우치형 1, 스트레이트 2 모듈러 빌드', '스티치: 장인 시그니처 엑스트라 콘트라스트 이중 공정 바느질', '컬러: 로얄 바닐라 / 토프 그레이'],
    },
  ],
  inart: [
    {
      id: 'inart-1',
      name: '앤디 오크 원목 6인 다이닝 식탁',
      category: '원목 식탁 (Dining Table)',
      price: 2450000,
      imageUrl: 'https://picsum.photos/seed/inarttable/600/400',
      description: '고주파 건조 공법으로 내부 갈라짐을 근본적으로 차단한 최고급 북미산 화이트 오크 솔리드 원목 식탁입니다. 친환경 천연 식물성 아우로 오일로 핸드 드로잉 오일 피니시 가공을 적용했습니다.',
      specs: ['규격: 가로 180cm, 세로 85cm, 높이 75cm', '소재: 북미산 화이트 오크(참나무) 실 원목 100%', '도장: 독일 AURO 천연 식물 마크 안전 오일 인증 도포', '품목: 오크 식탁 1개, 원목 벤치 의자 1개, 암체어 2개 세트 구성'],
    },
    {
      id: 'inart-2',
      name: '바움 클래식 오크 다용도 수납 캐비닛',
      category: '원목 수납장 (Cabinet)',
      price: 1850000,
      imageUrl: 'https://picsum.photos/seed/inartcabinet/600/400',
      description: '고전 원목 가구 명가의 고풍스러운 결합 공법(Dovetail Joint)을 그대로 사용하여 어떠한 메틸 못도 쓰지 않은 정통 리빙 원목 수납장입니다. 천연 피톤치드가 방출되어 마음이 맑아집니다.',
      specs: ['도어 타입: 황동 엔틱 손잡이를 결합한 저소음 경첩 여닫이 우드 도어', '선반 구성: 분리식 가변 레벨 원목 4층형 레이아웃', '마감: 오가닉 방충 가공 완료'],
    },
    {
      id: 'inart-3',
      name: '클래식 오크 우드슬랩 에지 사이드보드',
      category: '콘솔/거실장 (Console)',
      price: 1600000,
      imageUrl: 'https://picsum.photos/seed/inartconsole/600/400',
      description: '자연 그대로의 라이브 에지 나무 외피 굴곡을 완벽하게 살린 내추럴 선반으로, 수공예 예술품과 같은 존재감을 풍기는 거실 명품 로우장입니다.',
      specs: ['규격: 가로 200cm x 폭 40cm x 높이 50cm', '지지대: 트렌디 블랙 서스펜션 스틸 프레임 다리', '재질: 빈티지 셀렉트 프리미엄 오크 나무 수제 샌딩 마감'],
    },
  ],
  fermosa: [
    {
      id: 'fermosa-1',
      name: '클라우드 하이 사하라 패브릭 소파',
      category: '기능성 패브릭 소파 (Sofa)',
      price: 3980000,
      imageUrl: 'https://picsum.photos/seed/fermosasofa/600/400',
      description: '벨기에 가구 섬유 혁신 연구소에서 특수 플로킹 인체안전 코팅을 이중 적용한 정품 오리지널 오스트리아 사하라 텍스타일 소파입니다. 얼룩이 묻어도 물티슈 한 장으로 슥 지우는 클린 라이프가 실현됩니다.',
      specs: ['소재: 정품 사하라 (이지클린 & 펫프렌들리 방충 스크래치프루프)', '쿠션 마감: 향균 마이크로 에어 젤 함유 패드 충전', '색상: 파스텔 크림 헤이즐넛 / 머스캣 그린 / 클래식 베이지', '사이즈: 4인 가로 와이드 (300cm)'],
    },
    {
      id: 'fermosa-2',
      name: '버블 라운드 모듈형 스푼 락 라운지',
      category: '조형 디자인 모듈러 카우치',
      price: 3100000,
      imageUrl: 'https://picsum.photos/seed/fermosachair/600/400',
      description: '이탈리아의 유명 조형 디자이너와의 콜라보로 탄생된, 부드러운 물방울 곡선 모티브의 리빙 모듈 카우치 세트입니다. 어떤 자세로 기대어 앉아도 둥글게 전신을 지탱해 줍니다.',
      specs: ['바디 폼: 통목재 강화 스틸 뼈대 및 HR 고밀도 폴리 캐슬 몰드 폼', '포코: 미세한 보풀 발생 우려를 제로화한 조밀도 리넨 카우치사 세공', '사이즈: 모듈 타입 총 3파트 세팅'],
    },
    {
      id: 'fermosa-3',
      name: '미라지 엑스트라 소프트 도넛 오토만 스툴',
      category: '소셜 인테리어 스툴 (Stool)',
      price: 680000,
      imageUrl: 'https://picsum.photos/seed/fermosastool/600/400',
      description: '거실, 복도, 서재의 시선 집중을 위한 포인트 스툴입니다. 도넛을 연상시키는 재미있는 형태와 파스텔 사하라 원단이 발을 올릴 때나 손님 탑승 시 위트 있는 고급스러움을 줍니다.',
      specs: ['규격: 지름 85cm x 높이 42cm 볼륨 타입 리운드 핏', '장점: 밑단 고성능 논슬립 사제 패킹 처리로 미끄럼 완벽 영점 조절', '중량: 8.5kg 이동식 핸들링 패브릭 에지'],
    },
  ],
};
