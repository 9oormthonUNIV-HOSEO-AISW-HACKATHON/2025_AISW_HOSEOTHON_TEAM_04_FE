import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BarChart2, User } from 'lucide-react';

export default function BottomTab() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: '/home', icon: Home, label: '홈' },
    { id: '/analysis', icon: BarChart2, label: '분석' },
    { id: '/profile', icon: User, label: '프로필' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.id)}
            className="flex flex-col items-center gap-1 transition-colors focus:outline-none"
          >
            <tab.icon 
              size={24} 
              color={isActive ? '#FFCC80' : '#DDDDDD'} 
              strokeWidth={isActive ? 3 : 2}
            />
            <span className={`text-[10px] font-bold ${isActive ? 'text-[#4A4A4A]' : 'text-gray-300'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}