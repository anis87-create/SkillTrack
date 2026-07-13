import React, { useState } from 'react';

const Tabs = () => {
  // Your TabsTitles array structure
  const TabsTitles = [
    { id: 1, title: 'Tous' },
    { id: 2, title: 'À venir' },
    { id: 3, title: 'En cours' },
    { id: 4, title: 'Terminés' }
  ];

  // 1. Initialize state with the ID of the first tab
  const [activeTabId, setActiveTabId] = useState(1);

  return (
    <div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-1">
      {TabsTitles.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer ${
              isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
