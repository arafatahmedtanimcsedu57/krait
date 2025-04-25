import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Security Platform | Comprehensive Security Solutions",
  description:
    "Advanced security platform offering SAST, DAST, SCA, container scanning, and more to protect your applications and infrastructure.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen text-white bg-black">
            <div className="w-full mx-auto my-4">
              <Header />
              <main className="flex-1">{children}</main>
              {/* <Footer /> */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
