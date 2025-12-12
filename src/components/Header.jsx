import logoLight from "../assets/images/logo.svg";
import logoDark from "../assets/images/logo-dark.svg";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header
      className={`flex items-center justify-between p-6 ${isDarkMode ? "bg-white/5" : "bg-white"} mx-auto max-w-7xl rounded-3xl px-4 py-8 shadow-sm`}
    >
      <div className="flex items-center gap-3">
        {isDarkMode ? (
          <img src={logoDark} alt="Extensions Logo" />
        ) : (
          <img src={logoLight} alt="Extensions Logo" />
        )}
      </div>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`rounded-full p-2 transition-colors ${isDarkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"}`}
      >
        <img
          src={isDarkMode ? iconSun : iconMoon}
          alt="Theme Toggle"
          className="h-5 w-5"
        />
      </button>
    </header>
  );
};

export default Header;
