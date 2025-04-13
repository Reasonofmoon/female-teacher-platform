import { useState } from 'react';

const [sortField, setSortField] = useState('year');
const [sortDirection, setSortDirection] = useState('asc');

const sortedFinancialData = [...financialData].sort((a, b) => {
  if (sortDirection === 'asc') {
    return a[sortField] > b[sortField] ? 1 : -1;
  } else {
    return a[sortField] < b[sortField] ? 1 : -1;
  }
});

const handleSort = (field) => {
  if (sortField === field) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDirection('asc');
  }
};

<div className="flex justify-end mb-2">
  <button 
    onClick={() => {
      const csvContent = "data:text/csv;charset=utf-8," 
        + "연차,교사수,월매칭,매출,비용,순이익\n"
        + financialData.map(row => 
            `${row.year},${row.교사수},${row.월매칭},${row.매출},${row.비용},${row.순이익}`
          ).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "financial_data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
  >
    CSV 내보내기
  </button>
</div>

<thead className="bg-gray-100">
  <tr>
    {['year', '교사수', '월매칭', '매출', '비용', '순이익'].map(field => (
      <th 
        key={field}
        className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer hover:bg-gray-200"
        onClick={() => handleSort(field)}
      >
        {field === 'year' ? '연차' : field}
        {sortField === field && (
          <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
        )}
      </th>
    ))}
    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
  </tr>
</thead> 