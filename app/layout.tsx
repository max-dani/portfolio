import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Titillium_Web({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Danish's Portfolio",
  description: "NextJS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
