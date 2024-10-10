import { Roboto, DM_Serif_Display } from 'next/font/google';

export const font_body = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'] /** Remove caracteres desnecessários de outras linguas */,
  display:
    'swap' /** Usado para mostrar a fonte backup enquanto essa estiver carregando  */,
  variable: '--font-body',
});

export const font_display = DM_Serif_Display({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});
