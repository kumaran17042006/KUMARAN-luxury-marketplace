import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { rpm: '1k', torque: 200, hp: 100 },
  { rpm: '2k', torque: 450, hp: 220 },
  { rpm: '3k', torque: 600, hp: 380 },
  { rpm: '4k', torque: 750, hp: 550 },
  { rpm: '5k', torque: 850, hp: 720 },
  { rpm: '6k', torque: 880, hp: 850 },
  { rpm: '7k', torque: 820, hp: 980 },
  { rpm: '8k', torque: 700, hp: 1050 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] bg-white p-6 md:p-10 border border-gray-100">
        <h4 className="font-serif text-2xl mb-2">Engine Dynamics</h4>
        <p className="text-sm text-gray-500 mb-8 max-w-md">
            The V12 Twin-Turbo delivers linear power delivery with peak torque available from 2,500 RPM, ensuring effortless acceleration at any speed.
        </p>
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis dataKey="rpm" tick={{fontSize: 12, fill: '#9ca3af'}} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ fontSize: '12px', fontWeight: 600 }}
          />
          <Area type="monotone" dataKey="torque" stackId="1" stroke="#000" fill="#f3f4f6" />
          <Area type="monotone" dataKey="hp" stackId="2" stroke="#000" fill="#e5e5e5" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex gap-6 mt-4 justify-center md:justify-start">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-200"></div>
            <span className="text-xs uppercase tracking-wide text-gray-500">Horsepower</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100"></div>
            <span className="text-xs uppercase tracking-wide text-gray-500">Torque (Nm)</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;