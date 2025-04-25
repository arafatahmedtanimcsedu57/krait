import { ROUTES } from "@/constant/route-paths";

export const navItems: {
  disabled?: boolean;
  icon: React.ReactNode;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "SAST",
    href: ROUTES.FEATURES_SAST,
    description:
      "Analyzes source code to find and fix security vulnerabilities early in development",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-03.svg"
        alt="Nav icon"
      />
    ),
    title: "Secret Scanning",
    href: ROUTES.FEATURES_SECRET_SCANNING,
    description:
      "Automatically detects leaked secrets like API keys, passwords, etc. across repositories",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "SCA",
    href: ROUTES.FEATURES_SCA,
    description:
      "Finds and fixes vulnerabilities hiding in the open-source software used throughout projects",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-02.webp"
        alt="Nav icon"
      />
    ),
    title: "Container Scanning",
    href: ROUTES.FEATURES_CONTAINER_SCANNING,
    description:
      "Scans all container images for vulnerabilities in OS packages and application libraries",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "CSPM",
    href: ROUTES.FEATURES_CSPM,
    description:
      "Detects cloud misconfiguration, exposures, and policy violations automatically",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "IaC",
    href: ROUTES.FEATURES_IAC,
    description:
      "Analyzes TerraForm, Docker files as Infrastructure as Code for misconfigurations",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "DAST",
    href: ROUTES.FEATURES_DAST,
    description:
      "Interacts with live applications to detect runtime security weaknesses",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-04.svg"
        alt="Nav icon"
      />
    ),
    title: "API Inventory",
    href: ROUTES.FEATURES_API_INVENTORY,
    description:
      "Provides a structured list of all active API endpoints in the application",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "API Auth Analyzer",
    href: ROUTES.FEATURES_API_AUTH_ANALYZER,
    description:
      "Visually represents code paths of API endpoints to the status codes",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-05.svg"
        alt="Nav icon"
      />
    ),
    title: "AI Autofix",
    href: ROUTES.FEATURES_AI_AUTOFIX,
    description:
      "Uses AI to prioritize, categorize security risks based on severity and resolve detected issues",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "CI/CD Security",
    href: ROUTES.FEATURES_CI_CD_SECURITY,
    description:
      "Integrates security practices into the CI/CD pipeline to proactively find and fix vulnerabilities",
  },
  {
    disabled: true,
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "Outdated Software Detection",
    href: ROUTES.FEATURES_OUTDATED_SOFTWARE_DETECTION,
    description:
      "Identifies vulnerable dependencies and applications with known security flaws",
  },
  {
    icon: (
      <img
        className="flex-shrink-0 w-9 aspect-square"
        src="/icons/nav-items/item-01.svg"
        alt="Nav icon"
      />
    ),
    title: "Workflow",
    href: ROUTES.FEATURES_WORKFLOW,
    description: "Workflow description required Workflow description required",
  },
];
