import { NextRequest, NextResponse } from "next/server";

/** 
 * Exemplo de middleware que redireciona o usuario para a tela de login
 * quando ele tenta acessar a página da conta sem estar logado
 * Uma forma de proteção
 */
export function middleware(request: NextRequest) {

  console.log(request.nextUrl.pathname)

  /** A request não é alterável, apenas o response
   * Sendo assim, só é possível criar cookies na response
   */

  const token = request.cookies.get('token')?.value;
  /** Não é recomendável fazer desta forma pois qualquer um pode
   * criar um cookie com o nome token manualmente
   */

  const response = NextResponse.next();

  if(!token && request.nextUrl.pathname.startsWith('/conta')) {
    return NextResponse.redirect(new URL('/login', request.url))
  } else {
    response.cookies.set('fezLogin', 'true',  {
      httpOnly: true
    });
    return NextResponse.next();
  }

}

export const config = {
  matcher: ['/((?!api|_next|static|_next/image|favicon.ico).*)']
}