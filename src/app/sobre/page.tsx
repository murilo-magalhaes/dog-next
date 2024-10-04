import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página sobre',
}

const Width = dynamic(() => import('@/components/width'), { ssr: false })

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
    </main>
  );
}