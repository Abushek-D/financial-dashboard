import {ReactNode} from "react";

import type {Metadata} from "next";
import {Inter} from "next/font/google";

import {ThemeProvider} from "next-themes";

import {Toaster} from "@/components/ui/sonner";
import {APP_CONFIG} from "@/config/app-config";

import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: APP_CONFIG.meta.title,
    description: APP_CONFIG.meta.description,
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="light" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange enableSystem={false}>
            {/* Grid overlay для обеих тем - более интенсивная сетка 35% */}
            <div
                className="group-data-[variant=inset]:hidden fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.35)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-[1]"/>
            {children}
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
