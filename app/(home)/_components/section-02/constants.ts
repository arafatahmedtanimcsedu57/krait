export interface Section02Item {
  key: string;
  label: string;
  imgSrc: string;
  heading: string;
  description: string;
}

export const section02Items: Section02Item[] = [
  {
    key: "all-in-one",
    label: "All-in-One Security",
    imgSrc: "/assets/home/section-02/all-in-one-security.jpg",
    heading: "All‑in‑One Security",
    description:
      "Through AI-powered scanning, API Inventory, and flow mapping, Krait protects the software supply chain and API endpoints.",
  },
  {
    key: "ai-autofix",
    label: "AI AutoFix",
    imgSrc: "/assets/home/section-02/ai-autofix.jpg",
    heading: "AI AutoFix",
    description:
      "Krait intelligently identifies and resolves security issues, applying safe, context-aware fixes automatically.",
  },
  {
    key: "api-inventory",
    label: "API Inventory Mapping",
    imgSrc: "/assets/home/section-02/api-inventory-mapping.jpg",
    heading: "API Inventory Mapping",
    description:
      "A structured list of all active API endpoints in the application.",
  },
  {
    key: "workflow",
    label: "Workflow",
    imgSrc: "/assets/home/section-02/workflow.jpg",
    heading: "Workflow",
    description:
      "A rule-based automation system that uses triggers, conditions, and actions to streamline workflows for a smooth application security posture management.",
  },
  {
    key: "dev-performance",
    label: "Dev Performance",
    imgSrc: "/assets/home/section-02/dev-performance.jpg",
    heading: "Dev Performance",
    description:
      "A developer dashboard that tracks activity and highlights common issue patterns to provide insights and support continuous improvement.",
  },
];
