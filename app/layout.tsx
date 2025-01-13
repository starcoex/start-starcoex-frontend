import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "@/app/styles/dark.theme";
import Container from "@/app/components/Container";
import Provider from "@/app/providers/provider";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starcoex Company Home",
  description: "Starcoex Company Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <AppRouterCacheProvider>
            {/*<ThemeProvider theme={darkTheme}>*/}
            <CssBaseline />
            <Container>{children}</Container>
            {/*</ThemeProvider>*/}
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
