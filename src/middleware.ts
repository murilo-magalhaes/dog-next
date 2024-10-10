import { NextRequest, NextResponse } from "next/server";

/** 
 * Exemplo de middleware que redireciona o usuario para a tela de login
 * quando ele tenta acessar a página da conta sem estar logado
 * Uma forma de proteção
 */
export function middleware(request: NextRequest) {

  const token = request.cookies.get('token')?.value;
  /** Não é recomendável fazer desta forma pois qualquer um pode
   * criar um cookie com o nome token manualmente
   */

  if(token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: '/conta'
}