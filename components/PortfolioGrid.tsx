
import React from 'react';

const projects = [
  { 
    id: 1, 
    title: 'Boot Camp | Kia', 
    img: 'https://img.youtube.com/vi/GdrkS9LxNZA/maxresdefault.jpg',
    details: {
      wrapUp: `KIA의 사회공헌 프로젝트 'Boot Camp' 브랜드 필름입니다.\n\n각 로케이션의 고유한 질감을 살리면서도, 도전자의 역동적인 움직임을 강조하기 위해 가변형 라이팅 시스템을 구축하여 드라마틱한 서사를 완성했습니다. (2026.01.20)`,
      client: 'KIA',
      production: 'ADV',
      category: 'Commercial',
      role: 'DP',
      youtubeUrl: 'https://www.youtube.com/watch?v=GdrkS9LxNZA'
    }
  },
  { 
    id: 2, 
    title: 'Kia PV5 | Witty The Kia', 
    img: 'https://img.youtube.com/vi/pXpu5BXNOmU/maxresdefault.jpg',
    details: {
      wrapUp: '기아의 차세대 목적 기반 모빌리티(PBV) PV5 런칭 필름입니다.\n\n차량의 미래지향적 실루엣과 혁신적인 공간감을 돋보이게 하는 하이테크 쿨톤 라이팅을 통해 제품의 유연성과 기술적 진보를 시각화했습니다. (2025.12.09)',
      client: 'KIA',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=pXpu5BXNOmU'
    }
  },
  { 
    id: 3, 
    title: 'Shinhan Bank | IRP (with 박보검)', 
    img: 'https://img.youtube.com/vi/P7tuDnL4dx0/maxresdefault.jpg',
    details: {
      wrapUp: '신한은행 IRP 캠페인 "전문가의 관리가 수익률의 차이" 편입니다.\n\n모델 박보검의 신뢰감 있는 이미지와 따뜻하고 안정적인 공간감을 강조하기 위해 정제된 소프트 조명 설계를 통해 금융 서비스의 안도감을 표현했습니다. (2025.10.30)',
      client: '신한은행',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=P7tuDnL4dx0'
    }
  },
  { 
    id: 4, 
    title: 'Oreo x BABYMONSTER | Commercial', 
    img: 'https://img.youtube.com/vi/hV7DyjrMuD4/maxresdefault.jpg',
    details: {
      wrapUp: '오레오와 베이비몬스터의 글로벌 콜라보레이션 필름입니다.\n\n아티스트의 에너지가 돋보이도록 키치하고 감각적인 네온 컬러 라이팅을 활용하여 트렌디하면서도 팝한 비주얼을 극대화했습니다. (2025.10.01)',
      client: '오레오',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=hV7DyjrMuD4'
    }
  },
  { 
    id: 5, 
    title: 'SK Hynix | 위대한 여정', 
    img: 'https://img.youtube.com/vi/rcjYo1qjgUg/maxresdefault.jpg',
    details: {
      wrapUp: "SK 하이닉스 브랜드 캠페인 '위대한 여정' Director's Cut입니다.\n\n기술의 진보와 인류의 가치를 연결하는 장엄한 서사를 표현하기 위해 빛과 그림자의 대비를 활용한 드라마틱한 조명 설계를 진행했습니다. (2025.09.24)",
      client: 'SK 하이닉스',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=rcjYo1qjgUg'
    }
  },
  {
    id: 6,
    title: 'Eider | FW Season Love (장원영)',
    img: 'https://img.youtube.com/vi/g-oYp-_omN0/maxresdefault.jpg',
    details: {
      wrapUp: '아이더 써모락 슬림 블렌드 다운 FW 캠페인입니다.\n\n세련된 아웃도어 스타일과 기능성을 돋보이게 하는 도심적이고 맑은 데이라이트 무드를 구현하여 제품의 실루엣을 섬세하게 살려냈습니다. (2025.09.17)',
      client: '아이더',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=g-oYp-_omN0'
    }
  },
  {
    id: 7,
    title: 'Ulthera | 멀츠 코리아 (이민호)',
    img: 'https://img.youtube.com/vi/C9tDbXm-XYY/maxresdefault.jpg',
    details: {
      wrapUp: '멀츠 코리아 울쎄라피 프라임 이민호 편입니다.\n\n프리미엄 메디컬 에스테틱 브랜드에 걸맞은 고급스럽고 투명한 피부 질감을 강조하기 위해 정교한 뷰티 라이팅 레이어링을 적용했습니다. (2025.08.27)',
      client: '울쎄라',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=C9tDbXm-XYY'
    }
  },
  {
    id: 8,
    title: 'Sulwhasoo | 자음생크림',
    img: 'https://img.youtube.com/vi/MlGJF-LTHMU/maxresdefault.jpg',
    details: {
      wrapUp: '설화수 자음생크림 "모든 시간을 밀도 있게" 캠페인입니다.\n\n시간의 밀도와 안티에이징의 가치를 차분하면서도 깊이감 있는 앰버 톤의 조명으로 연출하여 럭셔리 뷰티의 정수를 담았습니다. (2025.08.23)',
      client: '설화수',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=MlGJF-LTHMU'
    }
  },
  {
    id: 9,
    title: 'Mega Coffee | Chapter of Summer',
    img: 'https://img.youtube.com/vi/SNf96Ux8kHE/maxresdefault.jpg',
    details: {
      wrapUp: '메가커피의 여름 캠페인 "My MGC" 편입니다.\n\n여름의 청량함과 활기찬 브랜드 아이덴티티를 극대화하기 위해 밝고 채도 높은 서머 라이팅 테크닉을 적용하여 경쾌한 비주얼을 완성했습니다. (2025.07.02)',
      client: '메가커피',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://youtu.be/SNf96Ux8kHE'
    }
  },
  { 
    id: 10, 
    title: 'BYD SEAL | EVOLUTION TOGETHER', 
    img: 'https://img.youtube.com/vi/vI_-GalvoJM/maxresdefault.jpg',
    details: {
      wrapUp: `글로벌 전기차 브랜드 BYD SEAL 런칭 필름입니다.\n\n전기차 특유의 전동화 에너지와 차량의 유선형 디자인을 날렵한 라이트 라인과 반사광 제어를 통해 임팩트 있게 표현했습니다. (2025.07.01)`,
      client: 'BYD',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=vI_-GalvoJM'
    }
  },
  {
    id: 11,
    title: 'Kanu | 바리스타 캡슐',
    img: 'https://img.youtube.com/vi/qqWz3QtzmfM/maxresdefault.jpg',
    details: {
      wrapUp: '카누 바리스타 아이스 아메리카노 캠페인입니다.\n\n차가운 음료의 시원함과 캡슐 커피의 프리미엄한 감성을 대비되는 온도감의 조명 밸런스로 조율하여 시각적인 청량감을 전달했습니다. (2025.06.13)',
      client: '카누',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=qqWz3QtzmfM'
    }
  },
  {
    id: 12,
    title: 'No More Pizza | aespa',
    img: 'https://img.youtube.com/vi/-YJGQe2fhcc/maxresdefault.jpg',
    details: {
      wrapUp: '노모어피자 X 에스파 광고 캠페인입니다.\n\n에스파의 유니크한 비주얼과 피자의 먹음직스러운 텍스처를 화려한 아트 조명과 시즐 라이팅의 조화를 통해 트렌디하게 담아냈습니다. (2025.05.13)',
      client: '노모어피자',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=-YJGQe2fhcc'
    }
  },
  { 
    id: 13, 
    title: 'Sidiz | TO SIT IS TO PROGRESS', 
    img: 'https://img.youtube.com/vi/44Y_Y9uczKM/maxresdefault.jpg',
    details: {
      wrapUp: `시디즈의 브랜드 철학을 담은 캠페인입니다.\n\n'앉는 행위의 진보'라는 메시지를 정적인 공간감과 미니멀한 라이팅 설계를 통해 지적으로 시각화하여 브랜드의 신뢰도를 높였습니다. (2025.05.13)`,
      client: '시디즈',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=44Y_Y9uczKM'
    }
  },
  { 
    id: 14, 
    title: 'Andar | 전지현 2025 andar', 
    img: 'https://img.youtube.com/vi/S96Nr2O4Ihk/maxresdefault.jpg',
    details: {
      wrapUp: `안다르 전지현 편 TVCF입니다.\n\n애슬레저 룩의 자연스러운 실루엣과 모델의 건강미를 우아하게 드러내는 데이라이트 기반의 화사한 조명 연출을 진행했습니다. (2025.05.09)`,
      client: '안다르',
      category: 'Commercial Film',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=S96Nr2O4Ihk'
    }
  },
  {
    id: 15,
    title: 'NH All One Bank | 변우석',
    img: 'https://img.youtube.com/vi/gs9zThOoSoQ/maxresdefault.jpg',
    details: {
      wrapUp: '오늘, 우석이 보러 올뱅? NH올원뱅크 광고입니다.\n\n모델의 싱그럽고 친근한 이미지를 살리기 위해 전반적으로 맑고 깨끗한 톤앤매너를 유지하며 화사한 분위기를 구축했습니다. (2025.04.28)',
      client: '농협',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=gs9zThOoSoQ'
    }
  },
  {
    id: 16,
    title: 'Krush | 탄산 러시',
    img: 'https://img.youtube.com/vi/wM1MIbQbucQ/maxresdefault.jpg',
    details: {
      wrapUp: '크러시 맥주 "빠짐 없이, 크게 터지는 탄산 러시" 편입니다.\n\n강렬한 청량함과 쿨한 감성을 차가운 블루 톤과 빠른 호흡의 스트로보 라이팅을 통해 감각적으로 표현했습니다. (2025.04.15)',
      client: '크러시',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=wM1MIbQbucQ'
    }
  },
  {
    id: 17,
    title: 'Coca-Cola | Pani Bottle',
    img: 'https://img.youtube.com/vi/wlFQf5ZWtC0/maxresdefault.jpg',
    details: {
      wrapUp: '코카콜라 파니보틀 편 캠페인입니다.\n\n여행의 자유로움과 일상의 짜릿한 순간을 자연스러운 앰비언트 라이트로 담아내어 현장감과 브랜드의 즐거움을 동시에 전달했습니다. (2025.04.13)',
      client: '코카콜라',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=wlFQf5ZWtC0'
    }
  },
  {
    id: 18,
    title: 'Millie | 독서가 변했지',
    img: 'https://img.youtube.com/vi/16Fp0Xhe3R8/maxresdefault.jpg',
    details: {
      wrapUp: '밀리의서재 브랜드 캠페인입니다.\n\n독서라는 정적인 소재를 감각적인 조명 변화를 통해 지적인 즐거움과 몰입감 있는 경험으로 시각화하여 서비스의 매력을 높였습니다. (2024.12.13)',
      client: '밀리의서재',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=16Fp0Xhe3R8'
    }
  },
  {
    id: 19,
    title: 'The Venti | DEX',
    img: 'https://img.youtube.com/vi/r0aBUuNL6Kk/maxresdefault.jpg',
    details: {
      wrapUp: '더벤티 덱스 편 광고 캠페인입니다.\n\n브랜드 컬러인 퍼플과 모델의 강렬한 매력을 조화롭게 대비시킨 트렌디한 조명 작업을 통해 임팩트 있는 비주얼을 완성했습니다. (2024.11.15)',
      client: '더벤티',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=r0aBUuNL6Kk'
    }
  },
  {
    id: 20,
    title: 'Hada Labo | 촉촉 탱글',
    img: 'https://img.youtube.com/vi/iOAowpBlaK0/maxresdefault.jpg',
    details: {
      wrapUp: '하다라보 고쿠쥰 뷰티 광고입니다.\n\n수분감 넘치는 피부 광택과 탱글한 제형의 질감을 극대화하기 위해 다각도의 소프트 박스를 활용한 정밀한 라이팅 설계를 진행했습니다. (2024.11.15)',
      client: '하다라보',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=iOAowpBlaK0'
    }
  },
  {
    id: 21,
    title: 'Kia Certified | 기아 인증중고차',
    img: 'https://img.youtube.com/vi/aDZu5-K3rdE/maxresdefault.jpg',
    details: {
      wrapUp: '기아 인증중고차 브랜드 필름입니다.\n\n중고차에 대한 신뢰와 기아만의 인증 시스템을 강조하기 위해 정직하고 안정적인 균형 잡힌 라이팅 톤을 유지했습니다. (2024.11.06)',
      client: 'KIA',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=aDZu5-K3rdE'
    }
  },
  {
    id: 22,
    title: 'Nepa | AIR SUMMIT DOWN',
    img: 'https://img.youtube.com/vi/gp5kw-CITIE/maxresdefault.jpg',
    details: {
      wrapUp: '네파 24FW 에어 서밋 다운 캠페인입니다.\n\n거친 겨울 환경과 제품의 가벼운 기능성을 동시에 보여주기 위해 차가운 톤의 야외 조명 효과를 가미하여 기술력을 강조했습니다. (2024.10.18)',
      client: '네파',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=gp5kw-CITIE'
    }
  },
  {
    id: 23,
    title: 'Ottogi | X.O. 만두',
    img: 'https://img.youtube.com/vi/HRpq70B11EI/maxresdefault.jpg',
    details: {
      wrapUp: '오뚜기 X.O. 만두 캠페인입니다.\n\n식재료 본연의 신선함과 프리미엄 만두의 풍미가 시각적으로 느껴지도록 정교한 시즐 라이팅(Sizzle Lighting)에 집중했습니다. (2024.10.11)',
      client: '오뚜기',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=HRpq70B11EI'
    }
  }
];

interface PortfolioGridProps {
  onSelectProject: (project: any) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  return (
    <div className="cinematic-grid px-0.5">
      {projects.map((project) => (
        <div 
          key={project.id} 
          onClick={() => onSelectProject(project)}
          className="group relative aspect-square overflow-hidden bg-black cursor-pointer"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100"
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ease-in-out group-hover:bg-white/40">
             <p className="text-white group-hover:text-black text-[8px] sm:text-[9px] tracking-[0.3em] font-light uppercase whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500 group-hover:scale-125 group-hover:font-black">
                {project.title}
             </p>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-black/5 transition-colors duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};
