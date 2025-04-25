import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import {
  FeatureSast,
  FeaturesSecretScanning,
  FeaturesSca,
  FeaturesContainerScanning,
  FeaturesCspm,
  FeaturesIac,
  FeaturesDast,
  FeaturesApiInventory,
  FeaturesApiAuthAnalyzer,
  FeaturesAiAutofix,
  FeaturesCiCdSecurity,
  FeaturesOutdatedSoftwareDetection,
  FeaturesWorkflow,
} from "@/pages/features";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { Contact } from "@/pages/contact";
import { BlogDetail } from "@/pages/blogs/detail";

import { Layout } from "@/components/shared/layout";
import { PageLoader } from "@/components/shared/page-loader";
import { NotFound404 } from "@/components/shared/not-found-404";

import { ROUTES } from "@/constant/route-paths";

export const GetRouter = () => {
  const routes = [
    {
      id: "1",
      path: ROUTES.HOME,
      element: <Layout />,
      children: [
        {
          id: "1.1",
          index: true,
          element: (
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },

    {
      id: "2",
      path: ROUTES.HOME,
      element: <Layout />,
      children: [
        {
          id: "2.1",
          path: ROUTES.FEATURES_SAST,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeatureSast />
            </Suspense>
          ),
        },
        {
          id: "2.2",
          path: ROUTES.FEATURES_SECRET_SCANNING,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesSecretScanning />
            </Suspense>
          ),
        },
        {
          id: "2.3",
          path: ROUTES.FEATURES_SCA,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesSca />
            </Suspense>
          ),
        },
        {
          id: "2.4",
          path: ROUTES.FEATURES_CONTAINER_SCANNING,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesContainerScanning />
            </Suspense>
          ),
        },
        {
          id: "2.5",
          path: ROUTES.FEATURES_CSPM,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesCspm />
            </Suspense>
          ),
        },
        {
          id: "2.6",
          path: ROUTES.FEATURES_IAC,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesIac />
            </Suspense>
          ),
        },
        {
          id: "2.7",
          path: ROUTES.FEATURES_DAST,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesDast />
            </Suspense>
          ),
        },
        {
          id: "2.8",
          path: ROUTES.FEATURES_API_INVENTORY,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesApiInventory />
            </Suspense>
          ),
        },
        {
          id: "2.9",
          path: ROUTES.FEATURES_API_AUTH_ANALYZER,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesApiAuthAnalyzer />
            </Suspense>
          ),
        },
        {
          id: "2.10",
          path: ROUTES.FEATURES_AI_AUTOFIX,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesAiAutofix />
            </Suspense>
          ),
        },
        {
          id: "2.11",
          path: ROUTES.FEATURES_CI_CD_SECURITY,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesCiCdSecurity />
            </Suspense>
          ),
        },
        {
          id: "2.12",
          path: ROUTES.FEATURES_OUTDATED_SOFTWARE_DETECTION,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesOutdatedSoftwareDetection />
            </Suspense>
          ),
        },

        {
          id: "2.15",
          path: ROUTES.FEATURES_WORKFLOW,
          element: (
            <Suspense fallback={<PageLoader />}>
              <FeaturesWorkflow />
            </Suspense>
          ),
        },
        {
          id: "2.13",
          path: ROUTES.ABOUT,
          element: (
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          ),
        },
        {
          id: "2.14",
          path: ROUTES.CONTACT,
          element: (
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          ),
        },

        {
          id: "2.16",
          path: ROUTES.BLOG_DETAIL,
          element: (
            <Suspense fallback={<PageLoader />}>
              <BlogDetail />
            </Suspense>
          ),
        },
      ],
    },

    {
      id: "5",
      path: ROUTES.NOT_FOUND,
      element: <NotFound404 />,
    },
  ];

  return createBrowserRouter(routes, { basename: "/" });
};
