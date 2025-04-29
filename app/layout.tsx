import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";


// Use Inter font as fallback
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Use Outfit as a temporary replacement for Filson Soft
// This is a Google Font that has a somewhat similar feel to Filson Soft
const filsonSoftAlternative = Outfit({ 
  subsets: ["latin"],
  variable: "--font-filson-soft" 
});

export const metadata: Metadata = {
  title: "Docment - AI Contract Automation",
  description: "AI-powered contract automation for everyday transactions",
  icons: {
    icon: "/logo.png", // Correct favicon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${filsonSoftAlternative.variable} ${inter.variable}`}>
        <Analytics />
        <ThemeProvider
          defaultTheme="system"
        >
          <CustomCursor />
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}