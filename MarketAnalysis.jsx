import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ArrowUpRight, Users, UserCheck, Building, Target } from 'lucide-react';

const MarketAnalysis = () => {
  // 사교육 시장 규모 데이터 (가상, 단위: 조원)
  const marketSizeData = [
    { year: '2020', 규모: 20 }, { year: '2021', 규모: 21 },
    { year: '2022', 규모: 23 }, { year: '2023', 규모: 24 },
    { year: '2024', 규모: 26 }, { year: '2025 (E)', 규모: 28 },
  ];

  // 경쟁사 분석 레이더 차트 데이터 (100점 만점)
  const competitorData = [
    { subject: '신뢰도/안전성', '우리 플랫폼': 95, '김과외': 60, '숨고': 55, '대형학원': 70 },
    { subject: '교사 전문성', '우리 플랫폼': 85, '김과외': 70, '숨고': 60, '대형학원': 80 },
    { subject: '가격 경쟁력', '우리 플랫폼': 75, '김과외': 85, '숨고': 80, '대형학원': 65 },
    { subject: '플랫폼 편의성', '우리 플랫폼': 80, '김과외': 75, '숨고': 85, '대형학원': 60 },
    { subject: '특화성(여성)', '우리 플랫폼': 100, '김과외': 50, '숨고': 50, '대형학원': 50 },
    { subject: '사회적 가치', '우리 플랫폼': 90, '김과외': 40, '숨고': 35, '대형학원': 50 },
  ];

  // 메모이제이션 적용
  const memoizedCompetitorData = useMemo(() => competitorData, []);

  // 목표 시장 세분화 데이터
  const segmentationData = [
    {
      icon: <Users size={36} className="text-purple-600" />,
      title: '학부모/학생 (수요)',
      items: ['안전 중시 가정', '여성 교사 선호', '초·중·고·N수생', '검증된 전문성 요구'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: <UserCheck size={36} className="text-teal-600" />,
      title: '교사 풀 (공급)',
      items: ['경력단절 여성', '전문 여성 강사', '교직 이수 여대생', '안정적 부가수입 희망'],
      color: 'bg-teal-50 border-teal-200'
    },
    {
      icon: <Building size={36} className="text-blue-600" />,
      title: '협력 파트너',
      items: ['여성지원 정부/지자체', '교육 CSR 기업', '교육 공공기관', '여성 관련 협회'],
      color: 'bg-blue-50 border-blue-200'
    }
  ];

  // 차별화 전략
  const differentiationPoints = [
    { title: "여성 교사 전용", description: "특정 니즈 충족 및 안전성 브랜딩 강화" },
    { title: "철저한 대면 검증", description: "신원, 학력, 경력, 범죄이력, 인성 종합 검증 → 신뢰도 극대화" },
    { title: "필수 교육 이수", description: "성인지 감수성, 교수법, 아동학대 예방 등 의무 교육 → 전문성 및 윤리의식 제고" },
    { title: "사회공헌 연계", description: "취약계층 지원, 여성 고용 창출 등 사회적 가치 실현 → 긍정적 이미지 구축" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 font-sans bg-white rounded-lg shadow-md mb-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">시장 분석 및 경쟁 동향</h1>
        <p className="text-xl text-gray-600">여성 교사 전용 플랫폼의 시장 기회 탐색</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <ArrowUpRight className="ml-2 text-green-600" size={20} />
            <span>국내 사교육 시장 규모 (추정)</span>
          </h2>
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner h-80 print-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketSizeData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="year" />
                <YAxis unit="조원" width={40}/>
                <Tooltip formatter={(value) => [`${value} 조원`, "시장 규모"]} />
                <Legend />
                <Bar dataKey="규모" fill="#8884d8" name="사교육 시장규모(조원)" barSize={30}/>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 text-center mt-2">참고: 성장 추세를 나타내는 가상 데이터</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">경쟁 환경 분석</h2>
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={memoizedCompetitorData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }}/>
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false}/>
                <Radar name="우리 플랫폼" dataKey="우리 플랫폼" stroke="#FF6384" fill="#FF6384" fillOpacity={0.6} />
                <Radar name="김과외" dataKey="김과외" stroke="#36A2EB" fill="#36A2EB" fillOpacity={0.6} />
                <Radar name="숨고" dataKey="숨고" stroke="#FFCE56" fill="#FFCE56" fillOpacity={0.6} />
                <Radar name="대형학원" dataKey="대형학원" stroke="#4BC0C0" fill="#4BC0C0" fillOpacity={0.6} />
                <Legend wrapperStyle={{fontSize: "12px"}}/>
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">강점: 신뢰도/안전성, 특화성, 사회적 가치</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center border-b pb-2 border-gray-200">목표 시장 세분화</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segmentationData.map((segment, index) => (
            <div key={index} className={`${segment.color} border rounded-lg p-6 shadow-sm flex flex-col items-center`}>
              <div className="mb-4">{segment.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{segment.title}</h3>
              <ul className="text-sm text-left space-y-2 list-disc pl-5">
                {segment.items.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
           <Target className="mr-2 text-red-600" size={24} />
           <span>핵심 차별화 전략</span>
        </h2>
        <div className="space-y-4">
          {differentiationPoints.map((point, index) => (
             <div 
               key={index} 
               className="flex items-start bg-white p-3 rounded shadow-sm transition-colors duration-200 hover:bg-red-50 cursor-pointer"
               onClick={() => alert(`${point.title}: ${point.description}`)}
             >
                <div className="bg-red-100 text-red-700 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{index + 1}</div>
                <div>
                    <h4 className="font-semibold text-gray-800">{point.title}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis; 