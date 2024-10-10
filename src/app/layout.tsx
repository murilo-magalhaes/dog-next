import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';
import { font_body, font_display } from '../../fonts';

export const metadata: Metadata = {
  title: 'Curso Next Origamid',
  description: 'Aplicação Next Curso Origamid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font_body.className} ${font_body.variable} ${font_display.variable}`}
      >
        <Menu />
        <div style={{ padding: '1rem' }}>{children}</div>
      </body>
    </html>
  );
}
