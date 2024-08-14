import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeSwitchProvider } from "@/components/providers/Providers";
import { FontsSwitchProvider } from "@/components/providers/Providers";
import { FontsContextProvider } from "@/components/providers/ContextProviders";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dictionary App - NextJS",
  description: "This project created as part of front end mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeSwitchProvider>
          <FontsContextProvider>
            <FontsSwitchProvider>{children}</FontsSwitchProvider>
          </FontsContextProvider>
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
