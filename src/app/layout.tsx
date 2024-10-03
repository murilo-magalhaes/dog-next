import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dog Next",
  description: "Aplicação Next Curso Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
