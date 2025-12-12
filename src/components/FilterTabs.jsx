// src/components/FilterTabs.jsx
import React from "react";

const FilterTabs = ({ currentFilter, setFilter }) => {
  const tabs = ["All", "Active", "Inactive"];

  return (
    <div className="border-border-light-color dark:border-border-dark-color flex rounded-full border bg-white/80 p-1 backdrop-blur-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`cursor-pointer rounded-full px-6 py-1.5 text-sm font-medium transition-all ${
            currentFilter === tab
              ? "bg-accent-light text-white shadow-md"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-500"
          } `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
