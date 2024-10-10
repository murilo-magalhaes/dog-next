import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

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
      <body>
        <Menu />
        <div style={{ padding: '1rem' }}>{children}</div>
      </body>
    </html>
  );
}
