
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const Inquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 연동 시 이곳에 API 호출이나 Formspree 등을 연결할 수 있습니다.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 p-4 bg-white/5 rounded-full">
            <CheckCircle size={48} className="text-white animate-bounce" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">문의가 성공적으로 접수되었습니다.</h2>
        <p className="text-zinc-500 max-w-md font-light leading-relaxed">
          보내주신 내용을 신중히 검토 후 24시간 이내에 연락드리겠습니다.<br/>
          급하신 문의는 상단 CONTACT의 번호로 직접 연락 주셔도 좋습니다.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-12 text-xs tracking-[0.4em] uppercase border border-zinc-800 px-8 py-4 hover:bg-white hover:text-black transition-all"
        >
          Return to home
        </button>
      </div>
    );
  }

  return (
    <div id="inquiry" className="min-h-screen bg-[#0a0a0a] pb-32">
      {/* Header Area */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-20 pb-16 border-b border-zinc-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Production Inquiry</h1>
        <p className="text-zinc-500 text-sm tracking-widest uppercase font-light">
          프로젝트에 대한 정보를 남겨주시면 최적의 팀과 장비를 제안해 드립니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">성함 / 업체명 *</label>
              <input 
                required
                type="text" 
                placeholder="Name / Company"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">연락처 *</label>
              <input 
                required
                type="text" 
                placeholder="Phone or Email"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
              />
            </div>
          </div>

          {/* Section 2: Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">프로젝트 유형</label>
              <select className="w-full bg-transparent border-b border-zinc-800 py-3 text-zinc-400 focus:outline-none focus:border-white transition-colors font-light appearance-none">
                <option value="cf">TVCF / Commercial</option>
                <option value="brand">Brand Film</option>
                <option value="mv">Music Video</option>
                <option value="fashion">Fashion / Beauty</option>
                <option value="viral">Viral / Social</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">촬영 예정일 및 장소</label>
              <input 
                type="text" 
                placeholder="Date and Location"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
              />
            </div>
          </div>

          {/* Section 3: Budget & Details */}
          <div className="space-y-12">
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">예산 범위 (선택사항)</label>
              <input 
                type="text" 
                placeholder="Estimated Budget Range"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">참고 레퍼런스 (유튜브/인스타 링크 등)</label>
              <input 
                type="text" 
                placeholder="https://..."
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black block">문의 상세 내용 *</label>
              <textarea 
                required
                rows={5}
                placeholder="필요한 장비 구성, 인원, 연출 의도 등을 자유롭게 남겨주세요."
                className="w-full bg-zinc-950 border border-zinc-900 p-6 text-white focus:outline-none focus:border-zinc-500 transition-colors font-light leading-relaxed resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-10 flex flex-col items-center">
            <button 
              type="submit"
              className="group relative inline-flex items-center space-x-4 bg-white text-black px-12 py-5 font-black text-xs tracking-[0.5em] uppercase hover:bg-zinc-200 transition-all"
            >
              <span>Submit Inquiry</span>
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="mt-6 text-[9px] tracking-[0.2em] text-zinc-600 uppercase">
              By submitting, you agree to the processing of your project data.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
