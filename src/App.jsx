import { useState, useEffect } from "react";

import Header from "./components/Header";
import FilterTabs from "./components/FilterTabs";
import ExtensionCard from "./components/ExtensionCard";
import { extensionsData } from "./data/extensions";

const App = () => {
  const [extensions, setExtensions] = useState(extensionsData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  const handleRemove = (nameToRemove) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((item) => item.name !== nameToRemove),
    );
  };

  const filteredData = extensions.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return item.isActive;
    if (filter === "Inactive") return !item.isActive;
    return true;
  });

  return (
    <div
      className={`min-h-screen p-5 font-(--font-noto) transition-colors duration-300 ${isDarkMode ? "bg-(image:--color-bg-dark-main) text-white" : "bg-(image:--color-bg-light-main) text-slate-900"} `}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-2xl font-bold">Extensions List</h2>
          <FilterTabs currentFilter={filter} setFilter={setFilter} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((item) => (
            <ExtensionCard
              key={item.name}
              data={item}
              isDarkMode={isDarkMode}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
