import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/providers";
import { CarrinhoProvider } from "@/context/CarrinhoContext";
import { Toaster } from "react-hot-toast";
import StyledComponentsRegistry from "./registry";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Front-end challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <CarrinhoProvider>
          <body className={inter.className}>
            <Toaster position="bottom-left"/>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            
          </body>
        </CarrinhoProvider>
      </Providers>
    </html>
  );
}
