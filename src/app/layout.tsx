import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athlisis — AI Wellness Practice Management",
  description:
    "AI-powered platform for dietitians, personal trainers and wellness clinics.",
  openGraph: {
    title: "Athlisis",
    description: "Next-generation wellness practice management.",
    url: "https://athlisis.com",
    siteName: "Athlisis",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#0d1220",
          colorInputBackground: "#111827",
          colorText: "#f0f4ff",
          colorTextSecondary: "#8892a4",
          borderRadius: "0.75rem",
          fontFamily: "DM Sans, sans-serif",
        },
        elements: {
          card: "bg-[#0d1220] border border-white/10 shadow-2xl",
          headerTitle: "font-display text-white",
          socialButtonsBlockButton:
            "bg-white/5 border border-white/10 text-white hover:bg-white/10",
          formButtonPrimary:
            "bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90",
          footerActionLink: "text-blue-400 hover:text-blue-300",
        },
      }}
    >
      <html lang="el" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="bg-[#080c14] text-[#f0f4ff] font-body antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
