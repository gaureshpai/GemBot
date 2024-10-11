import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "GemBot",
  description: "AI_MiniProject - 5th sem BE by @gaureshpai @jtuluve @HimanshuHegde @Milan-C-I",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
