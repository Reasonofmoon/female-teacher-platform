<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {roadmapData.map((item, index) => (
    <div key={index} className="border border-indigo-200 rounded-lg shadow-sm bg-indigo-50 p-4 relative">
      {/* 진행 상태 배지 추가 */}
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">
        {index === 0 ? '완료' : index === 1 ? '진행중' : '예정'}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-indigo-800 border-b border-indigo-200 pb-1">{item.phase}</h3>
      // ... 기존 코드 ...
    </div>
  ))}
</div> 