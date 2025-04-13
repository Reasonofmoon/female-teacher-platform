import React from 'react';
import { CheckCircle, FileText, UserSearch, MessageSquare, CreditCard, BookOpen, BarChart3, Users, Settings, BookCopy, Briefcase, Landmark } from 'lucide-react';

const ServiceProcess = () => {
  // 서비스 핵심 프로세스 데이터
  const processSteps = [
    { icon: <FileText size={32} className="text-purple-600" />, title: "교사 모집 및 서류 검증", description: "학력, 경력, 자격 증명서 확인" },
    { icon: <UserSearch size={32} className="text-blue-600" />, title: "대면 면접 및 인성 평가", description: "교육 철학, 소통 능력, 인성 검증" },
    { icon: <CheckCircle size={32} className="text-red-600" />, title: "신원 및 범죄 경력 조회", description: "성범죄 포함 범죄 이력 조회 (필수)" },
    { icon: <BookCopy size={32} className="text-yellow-600" />, title: "필수 교육 이수", description: "성인지, 아동학대 예방, 교수법 교육" },
    { icon: <MessageSquare size={32} className="text-green-600" />, title: "매칭 및 계약", description: "학생 요구사항 기반 매칭, 전자 계약" },
    { icon: <CreditCard size={32} className="text-indigo-600" />, title: "수업료 결제 및 정산", description: "안전 결제 시스템, 투명한 정산" },
    { icon: <BookOpen size={32} className="text-orange-600" />, title: "수업 진행 및 관리", description: "수업 일정 관리, 학습 피드백" },
    { icon: <BarChart3 size={32} className="text-pink-600" />, title: "평가 및 품질 관리", description: "정기 모니터링, 만족도 조사, 분쟁 중재" }
  ];

  // 수익 모델 데이터 (예상 비중)
  const revenueModels = [
    { title: "중개 수수료", description: "과외비의 10~15%", percentage: 70, color: "bg-blue-500" },
    { title: "프리미엄 서비스", description: "학습 컨설팅, 콘텐츠 판매 등", percentage: 20, color: "bg-green-500" },
    { title: "CSR/제휴 사업", description: "기업 후원, 정부 지원 연계", percentage: 10, color: "bg-purple-500" }
  ];

  // 구성 조직 데이터
  const organizationTeams = [
    { icon: <Settings size={24} className="text-blue-600"/>, title: "개발팀", responsibilities: ["플랫폼 개발/유지보수", "앱 개발", "데이터 관리"] },
    { icon: <Users size={24} className="text-green-600"/>, title: "운영팀", responsibilities: ["교사/학생 지원", "매칭 관리", "CS/분쟁 처리"] },
    { icon: <BookOpen size={24} className="text-amber-600"/>, title: "교육팀", responsibilities: ["교사 교육/코칭", "콘텐츠 개발", "품질 평가"] },
    { icon: <Briefcase size={24} className="text-red-600"/>, title: "마케팅팀", responsibilities: ["브랜드 홍보", "사용자 유치", "파트너십"] },
    { icon: <Landmark size={24} className="text-purple-600"/>, title: "경영지원팀", responsibilities: ["재무/회계", "법무/노무", "인사/총무"] }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-white rounded-lg shadow-md mb-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">서비스 운영 및 구조</h1>
        <p className="text-xl text-gray-600">신뢰 기반의 효율적인 운영 프로세스</p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center border-b pb-2 border-gray-200">서비스 핵심 프로세스 (교사 검증 중심)</h2>
        <div className="relative px-4">
          {/* 타임라인 선 */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
          <div className="space-y-10">
            {processSteps.map((step, index) => (
              <div key={index} className="relative pl-16 md:pl-20">
                 {/* 타임라인 포인트 */}
                <div className="absolute left-8 top-1 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center z-10">
                   <div className="w-6 h-6 flex items-center justify-center">{step.icon}</div>
                </div>
                {/* 진행 상태 표시 추가 */}
                <div className="absolute left-8 top-10 transform -translate-x-1/2 text-xs font-semibold text-gray-500">
                  {index < 3 ? '완료' : index < 5 ? '진행중' : '예정'}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 relative">
                   <span className="absolute -left-4 top-2 bg-gray-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{index + 1}</span>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
           <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center border-b pb-2 border-gray-200">수익 모델 (예상 비중)</h2>
           <div className="bg-gray-50 rounded-lg p-6 shadow-inner h-full">
                <div className="w-full h-8 flex rounded-full overflow-hidden mb-4" role="progressbar" aria-label="수익 모델 비중">
                    {revenueModels.map((model, index) => (
                        <div 
                          key={index} 
                          className={`${model.color} flex items-center justify-center text-white text-xs font-semibold`} 
                          style={{ width: `${model.percentage}%` }}
                          aria-valuenow={model.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                            {model.percentage}%
                        </div>
                    ))}
                </div>
                <div className="space-y-3">
                    {revenueModels.map((model, index) => (
                         <div key={index} className="flex items-center">
                            <span className={`w-4 h-4 rounded-full mr-2 ${model.color}`}></span>
                            <div>
                               <span className="font-semibold text-gray-800">{model.title}</span>
                               <span className="text-sm text-gray-600 ml-2">({model.description})</span>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">초기 3년 운영 기준 예상 수익 구조</p>
           </div>
        </div>

        <div>
             <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center border-b pb-2 border-gray-200">핵심 조직 구성</h2>
             <div className="bg-gray-50 rounded-lg p-6 shadow-inner h-full">
                <div className="grid grid-cols-1 gap-4">
                  {organizationTeams.map((team, index) => (
                    <div key={index} className="flex items-start bg-white p-3 rounded-md shadow-sm border border-gray-200">
                       <div className="mr-3 flex-shrink-0">{team.icon}</div>
                       <div>
                         <h4 className="font-semibold text-gray-800">{team.title}</h4>
                         <p className="text-xs text-gray-600">{team.responsibilities.join(', ')}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess; 