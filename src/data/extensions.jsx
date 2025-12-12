import logoDevLens from "../assets/images/logo-devlens.svg";
import logoStyleSpy from "../assets/images/logo-style-spy.svg";
import logoSpeedBoost from "../assets/images/logo-speed-boost.svg";
import logoJsonWizard from "../assets/images/logo-json-wizard.svg";
import logoTabMaster from "../assets/images/logo-tab-master-pro.svg";
import logoViewport from "../assets/images/logo-viewport-buddy.svg";
import logoMarkup from "../assets/images/logo-markup-notes.svg";
import logoGrid from "../assets/images/logo-grid-guides.svg";
import logoPalette from "../assets/images/logo-palette-picker.svg";
import logoLink from "../assets/images/logo-link-checker.svg";
import logoDom from "../assets/images/logo-dom-snapshot.svg";
import logoConsole from "../assets/images/logo-console-plus.svg";

export const extensionsData = [
  {
    logo: logoDevLens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: logoStyleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: logoSpeedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: logoJsonWizard,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: logoTabMaster,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: logoViewport,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: logoMarkup,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: logoGrid,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: logoPalette,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: logoLink,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: logoDom,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: logoConsole,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
