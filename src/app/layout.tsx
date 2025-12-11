import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
    title: "Milind Rajput | Data Scientist & AI Developer",
    description: "Portfolio of Milind Rajput, a Data Science Practitioner and ML Engineer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.variable, poppins.variable, "font-sans text-white h-screen w-screen overflow-hidden")}>
                {children}
            </body>
        </html>
    );
}
