import { useState } from "react";

const ExtensionCard = ({ data, isDarkMode, onRemove }) => {
  const [isActive, setIsActive] = useState(data.isActive);

  return (
    <div
      className={`flex h-50 flex-col justify-between rounded-2xl border p-5 transition-all duration-300 ${
        isDarkMode
          ? "border-border-dark-color bg-dark-surface hover:border-gray-600"
          : "bg-light-surface border-white shadow-sm hover:shadow-md"
      } `}
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0">
          <img
            src={data.logo}
            alt={data.name}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h3
            className={`mb-1 text-lg leading-tight font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            {data.name}
          </h3>
          <p
            className={`text-xs leading-relaxed ${isDarkMode ? "text-(--color-text-dark-muted)" : "text-(--color-text-light-muted)"}`}
          >
            {data.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200/20 pt-4">
        <button
          onClick={() => onRemove(data.name)}
          className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            isDarkMode
              ? "border-gray-700 text-gray-400 hover:bg-white/5 hover:text-white"
              : "border-gray-200 text-gray-500 hover:border-red-200 hover:bg-gray-50 hover:text-red-500"
          } `}
        >
          Remove
        </button>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`flex h-6 w-11 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ${isActive ? "bg-accent-light" : "bg-gray-300 dark:bg-gray-600"}`}
        >
          <div
            className={`h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isActive ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ExtensionCard;
